import { loadPyodide } from "https://cdn.jsdelivr.net/pyodide/v314.0.3/full/pyodide.mjs";

const pyodideReady = loadPyodide({
  indexURL: "https://cdn.jsdelivr.net/pyodide/v314.0.3/full/",
});

self.addEventListener("message", async (event) => {
  const { id, code } = event.data;
  const stdout = [];
  const stderr = [];

  try {
    const pyodide = await pyodideReady;
    pyodide.setStdout({ batched: (text) => stdout.push(text) });
    pyodide.setStderr({ batched: (text) => stderr.push(text) });

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
