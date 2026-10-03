import { loadPyodide } from "https://cdn.jsdelivr.net/pyodide/v314.0.3/full/pyodide.mjs";

// The browser has no keyboard prompt inside a worker, so input() reads the
// learner's prepared answers instead. Like a terminal, it shows the question and
// the answer on one line. This file name keeps it out of the learner's traceback.
const INPUT_SETUP = `
import builtins

def _pybot_use_answers(answers):
    waiting = list(answers)

    def input(prompt=""):
        print(prompt, end="")
        if not waiting:
            print()
            raise EOFError("input() has no answer left")
        answer = waiting.pop(0)
        print(answer)
        return answer

    builtins.input = input
`;

let useAnswers = null;
const pyodideReady = loadPyodide({
  indexURL: "https://cdn.jsdelivr.net/pyodide/v314.0.3/full/",
}).then((pyodide) => {
  pyodide.runPython(INPUT_SETUP, { filename: "<pybot>" });
  useAnswers = pyodide.globals.get("_pybot_use_answers");
  return pyodide;
});

self.addEventListener("message", async (event) => {
  const { id, code, answers = [] } = event.data;
  const stdout = [];
  const stderr = [];

  try {
    const pyodide = await pyodideReady;
    pyodide.setStdout({ batched: (text) => stdout.push(text) });
    pyodide.setStderr({ batched: (text) => stderr.push(text) });

    const pyAnswers = pyodide.toPy(answers);
    useAnswers(pyAnswers);
    pyAnswers.destroy();

    // Every run starts with empty boxes, like running a fresh program.
    const runGlobals = pyodide.toPy({ __name__: "__main__" });
    let result;
    try {
      result = await pyodide.runPythonAsync(code, { globals: runGlobals });
    } finally {
      runGlobals.destroy();
    }
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
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    self.postMessage({
      id,
      type: "error",
      error: learnerTraceback(message),
      errorType: typeof error?.type === "string" ? error.type : "",
      output: [...stdout, ...stderr].join("\n"),
    });
  }
});

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
