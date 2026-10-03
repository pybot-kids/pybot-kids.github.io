import { loadPyodide } from "https://cdn.jsdelivr.net/pyodide/v314.0.3/full/pyodide.mjs";

const pyodideReady = loadPyodide({
  indexURL: "https://cdn.jsdelivr.net/pyodide/v314.0.3/full/",
}).then(preparePyodide);

// A browser worker cannot pause Python to wait for typing, so input() reads
// the learner's prepared answers, one per line, and shows each answer after
// its question like a real terminal. The browser has no desktop window for
// turtle either, so "turtle" is PyBot's recording version (pybot-turtle.py).
async function preparePyodide(pyodide) {
  const turtleSource = await fetch(new URL("pybot-turtle.py", import.meta.url)).then((response) => {
    if (!response.ok) {
      throw new Error(`Could not load pybot-turtle.py (${response.status})`);
    }
    return response.text();
  });
  pyodide.globals.set("_pybot_turtle_source", turtleSource);
  pyodide.globals.set("_pybot_setup_source", PYBOT_SETUP);
  // Compiled under its own file name, so error hints never point at these lines.
  pyodide.runPython('exec(compile(_pybot_setup_source, "<pybot>", "exec"))');
  pyodide.runPython("del _pybot_setup_source");
  return pyodide;
}

const PYBOT_SETUP = `
def _pybot_setup(turtle_source):
    import builtins, json, sys, types

    answers = []

    def input(prompt=""):
        prompt = str(prompt)
        if not answers:
            print(prompt)
            raise EOFError("PyBot has no more answers for input()")
        answer = answers.pop(0)
        print(prompt + answer)
        return answer

    def start(answers_json):
        answers[:] = json.loads(answers_json)
        turtle = sys.modules.get("turtle")
        if turtle is not None:
            turtle._pybot_reset()

    def drawing():
        turtle = sys.modules.get("turtle")
        if turtle is None or not turtle._pybot_used():
            return None
        return turtle._pybot_take()

    pybot = types.ModuleType("_pybot")
    pybot.start = start
    pybot.drawing = drawing
    sys.modules["_pybot"] = pybot
    builtins.input = input

    turtle = types.ModuleType("turtle")
    exec(compile(turtle_source, "turtle.py", "exec"), turtle.__dict__)
    sys.modules["turtle"] = turtle

_pybot_setup(_pybot_turtle_source)
del _pybot_setup, _pybot_turtle_source
`;

self.addEventListener("message", async (event) => {
  const { id, code, answers = [] } = event.data;
  const stdout = [];
  const stderr = [];
  let pybot = null;

  try {
    const pyodide = await pyodideReady;
    pyodide.setStdout({ batched: (text) => stdout.push(text) });
    pyodide.setStderr({ batched: (text) => stderr.push(text) });
    pybot = pyodide.pyimport("_pybot");
    pybot.start(JSON.stringify(answers));

    const result = await pyodide.runPythonAsync(code);
    if (result !== undefined && result !== null) {
      stdout.push(String(result));
      if (typeof result.destroy === "function") {
        result.destroy();
      }
    }

    self.postMessage({
      id,
      type: "complete",
      output: [...stdout, ...stderr].join("\n"),
      drawing: takeDrawing(pybot),
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    self.postMessage({
      id,
      type: "error",
      error: learnerTraceback(message),
      errorType: typeof error?.type === "string" ? error.type : "",
      output: [...stdout, ...stderr].join("\n"),
      drawing: takeDrawing(pybot),
    });
  }
});

// The turtle drawing as JSON text, or null when the code did not draw.
function takeDrawing(pybot) {
  try {
    return pybot?.drawing() ?? null;
  } catch {
    return null;
  }
}

// Pyodide tracebacks start with its own internal frames. Keep the real error,
// but begin at the first frame from the learner's code ("<exec>").
function learnerTraceback(message) {
  const lines = message.split("\n");
  const firstLearnerFrame = lines.findIndex((line) => line.includes('File "<exec>"'));
  if (lines[0] !== "Traceback (most recent call last):" || firstLearnerFrame === -1) {
    return message.trim();
  }
  return [lines[0], ...lines.slice(firstLearnerFrame)].join("\n").trim();
}
