"""Run a Python snippet the way PyBot's browser runner does.

input() reads the prepared answers and shows each one after its question, and
turtle is PyBot's recording version (pybot-turtle.py). Use it to check a
lesson's goal output, or to make the goal drawing of a turtle activity:

    python3 tools/run-like-pybot.py code.py --answers "Ana" --answers "7"
    python3 tools/run-like-pybot.py square.py --drawing
"""

import argparse
import builtins
import json
import pathlib
import sys
import types

ROOT = pathlib.Path(__file__).resolve().parent.parent


def main():
    parser = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    parser.add_argument("file", help="Python file to run, or - for standard input")
    parser.add_argument("--answers", action="append", default=[], help="one input() answer (repeat for more)")
    parser.add_argument("--drawing", action="store_true", help="print only the turtle drawing as JSON")
    args = parser.parse_args()

    code = sys.stdin.read() if args.file == "-" else pathlib.Path(args.file).read_text(encoding="utf-8")
    answers = list(args.answers)

    def pybot_input(prompt=""):
        prompt = str(prompt)
        if not answers:
            print(prompt)
            raise EOFError("PyBot has no more answers for input()")
        answer = answers.pop(0)
        print(prompt + answer)
        return answer

    builtins.input = pybot_input
    turtle = types.ModuleType("turtle")
    source = (ROOT / "pybot-turtle.py").read_text(encoding="utf-8")
    exec(compile(source, "turtle.py", "exec"), turtle.__dict__)
    sys.modules["turtle"] = turtle

    real_stdout = sys.stdout
    if args.drawing:
        sys.stdout = open("/dev/null", "w") if sys.platform != "win32" else open("nul", "w")
    try:
        exec(compile(code, "<exec>", "exec"), {"__name__": "__main__"})
    finally:
        sys.stdout = real_stdout

    if args.drawing:
        drawing = json.loads(turtle._pybot_take())
        print(json.dumps({"bg": drawing["bg"], "commands": drawing["commands"]}, separators=(",", ":")))


if __name__ == "__main__":
    main()
