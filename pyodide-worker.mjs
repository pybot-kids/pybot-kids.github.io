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
    self.postMessage({
      id,
      type: "error",
      error: error instanceof Error ? error.message : String(error),
      output: [...stdout, ...stderr].join("\n"),
    });
  }
});
