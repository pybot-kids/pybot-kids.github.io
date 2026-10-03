# A small, turtle-compatible drawing module for PyBot.
#
# Python's own turtle module needs a desktop window (tkinter), which does not
# exist in the browser. This module keeps the same names (forward, left,
# penup, color, begin_fill, circle, ...) but only records what the turtle
# draws. The page reads the recording with _pybot_take() and paints it on a
# canvas. It is installed as "turtle", so learners write real turtle code.

import json
import math

__all__ = [
    "Turtle", "Pen", "RawTurtle", "Screen", "TurtleGraphicsError",
    "forward", "fd", "backward", "bk", "back", "right", "rt", "left", "lt",
    "penup", "pu", "up", "pendown", "pd", "down", "isdown",
    "goto", "setpos", "setposition", "setx", "sety", "setheading", "seth", "home",
    "position", "pos", "xcor", "ycor", "heading", "distance",
    "circle", "dot", "write", "stamp",
    "color", "pencolor", "fillcolor", "pensize", "width",
    "begin_fill", "end_fill", "filling",
    "speed", "shape", "shapesize", "hideturtle", "ht", "showturtle", "st", "isvisible",
    "bgcolor", "title", "setup", "tracer", "update", "clear", "reset",
    "done", "mainloop", "exitonclick", "bye",
]


class TurtleGraphicsError(Exception):
    pass


_state = {"bg": "white", "commands": [], "turtles": [], "step": 0, "used": False, "pen": None}


def _color_text(args):
    if len(args) == 1:
        args = args[0]
        if isinstance(args, str):
            return args
    if isinstance(args, (tuple, list)) and len(args) == 3:
        values = list(args)
        if all(isinstance(v, (int, float)) for v in values):
            if all(0 <= v <= 1 for v in values):
                values = [round(v * 255) for v in values]
            if all(0 <= v <= 255 for v in values):
                return "#%02x%02x%02x" % tuple(int(v) for v in values)
    raise TurtleGraphicsError("bad color: %r" % (args,))


def _number(value, name):
    if isinstance(value, bool) or not isinstance(value, (int, float)):
        raise TypeError("%s needs a number, not %r" % (name, value))
    return float(value)


class Turtle:
    def __init__(self, shape="classic", visible=True):
        _state["used"] = True
        self._x = 0.0
        self._y = 0.0
        self._heading = 0.0
        self._down = True
        self._pencolor = "black"
        self._fillcolor = "black"
        self._width = 1.0
        self._visible = visible
        self._fill_path = None
        self._fill_index = 0
        _state["turtles"].append(self)

    def _add(self, command):
        _state["step"] += 1
        command["step"] = _state["step"]
        _state["commands"].append(command)

    def _move_to(self, x, y):
        if self._down:
            self._add({
                "t": "line", "x1": self._x, "y1": self._y, "x2": x, "y2": y,
                "c": self._pencolor, "w": self._width,
            })
        self._x, self._y = x, y
        if self._fill_path is not None:
            self._fill_path.append([x, y])

    # Moving
    def forward(self, distance):
        distance = _number(distance, "forward")
        angle = math.radians(self._heading)
        self._move_to(self._x + distance * math.cos(angle), self._y + distance * math.sin(angle))

    def backward(self, distance):
        self.forward(-_number(distance, "backward"))

    def right(self, angle):
        self._heading = (self._heading - _number(angle, "right")) % 360

    def left(self, angle):
        self._heading = (self._heading + _number(angle, "left")) % 360

    def goto(self, x, y=None):
        if y is None:
            x, y = x
        self._move_to(_number(x, "goto"), _number(y, "goto"))

    def setx(self, x):
        self.goto(x, self._y)

    def sety(self, y):
        self.goto(self._x, y)

    def setheading(self, angle):
        self._heading = _number(angle, "setheading") % 360

    def home(self):
        self.goto(0, 0)
        self._heading = 0.0

    def circle(self, radius, extent=None, steps=None):
        # Same polygon steps as Python's own turtle, so drawings match.
        radius = _number(radius, "circle")
        extent = 360.0 if extent is None else _number(extent, "circle")
        if steps is None:
            frac = abs(extent) / 360
            steps = 1 + int(min(11 + abs(radius) / 6.0, 59.0) * frac)
        w = extent / steps
        w2 = 0.5 * w
        length = 2.0 * radius * math.sin(math.radians(w2))
        if radius < 0:
            length, w, w2 = -length, -w, -w2
        self.left(w2)
        for _ in range(steps):
            self.forward(length)
            self.left(w)
        self.left(-w2)

    # Pen
    def penup(self):
        self._down = False

    def pendown(self):
        self._down = True

    def isdown(self):
        return self._down

    def pensize(self, width=None):
        if width is None:
            return self._width
        self._width = _number(width, "pensize")

    def color(self, *args):
        if not args:
            return self._pencolor, self._fillcolor
        if len(args) == 2 and not all(isinstance(a, (int, float)) for a in args):
            self._pencolor = _color_text((args[0],))
            self._fillcolor = _color_text((args[1],))
        else:
            self._pencolor = self._fillcolor = _color_text(args)

    def pencolor(self, *args):
        if not args:
            return self._pencolor
        self._pencolor = _color_text(args)

    def fillcolor(self, *args):
        if not args:
            return self._fillcolor
        self._fillcolor = _color_text(args)

    def begin_fill(self):
        self._fill_path = [[self._x, self._y]]
        self._fill_index = len(_state["commands"])

    def end_fill(self):
        if self._fill_path is not None and len(self._fill_path) > 2:
            _state["step"] += 1
            # The fill shows up now, but sits under the lines drawn since begin_fill.
            _state["commands"].insert(self._fill_index, {
                "t": "fill", "points": self._fill_path, "c": self._fillcolor, "step": _state["step"],
            })
        self._fill_path = None

    def filling(self):
        return self._fill_path is not None

    def dot(self, size=None, *color):
        size = max(self._width + 4, self._width * 2) if size is None else _number(size, "dot")
        self._add({
            "t": "dot", "x": self._x, "y": self._y, "size": size,
            "c": _color_text(color) if color else self._pencolor,
        })

    def write(self, arg, move=False, align="left", font=("Arial", 8, "normal")):
        size = font[1] if isinstance(font, (tuple, list)) and len(font) > 1 else 8
        self._add({
            "t": "text", "x": self._x, "y": self._y, "text": str(arg),
            "align": align, "size": size, "c": self._pencolor,
        })

    def stamp(self):
        self.dot()

    # Asking where the turtle is
    def position(self):
        return (round(self._x, 2), round(self._y, 2))

    def xcor(self):
        return round(self._x, 2)

    def ycor(self):
        return round(self._y, 2)

    def heading(self):
        return round(self._heading, 2)

    def distance(self, x, y=None):
        if y is None:
            x, y = x
        return math.hypot(x - self._x, y - self._y)

    # Things that only matter in a desktop window
    def speed(self, speed=None):
        return 3 if speed is None else None

    def shape(self, name=None):
        return "classic" if name is None else None

    def shapesize(self, *args, **kwargs):
        return None

    def hideturtle(self):
        self._visible = False

    def showturtle(self):
        self._visible = True

    def isvisible(self):
        return self._visible

    def clear(self):
        _state["commands"] = []

    def reset(self):
        self.clear()
        self.__init__()
        _state["turtles"].remove(self)

    fd = forward
    bk = back = backward
    rt = right
    lt = left
    pu = up = penup
    pd = down = pendown
    setpos = setposition = goto
    seth = setheading
    pos = position
    width = pensize
    ht = hideturtle
    st = showturtle


Pen = RawTurtle = Turtle


class _Screen:
    def bgcolor(self, *args):
        if not args:
            return _state["bg"]
        _state["used"] = True
        _state["bg"] = _color_text(args)

    def title(self, text=None):
        pass

    def setup(self, *args, **kwargs):
        pass

    def tracer(self, *args, **kwargs):
        pass

    def update(self):
        pass

    def mainloop(self):
        pass

    done = exitonclick = bye = mainloop


_screen = _Screen()


def Screen():
    return _screen


def _pen():
    if _state["pen"] is None:
        _state["pen"] = Turtle()
    return _state["pen"]


def _module_function(name):
    def call(*args, **kwargs):
        return getattr(_pen(), name)(*args, **kwargs)
    call.__name__ = name
    return call


for _name in [
    "forward", "fd", "backward", "bk", "back", "right", "rt", "left", "lt",
    "penup", "pu", "up", "pendown", "pd", "down", "isdown",
    "goto", "setpos", "setposition", "setx", "sety", "setheading", "seth", "home",
    "position", "pos", "xcor", "ycor", "heading", "distance",
    "circle", "dot", "write", "stamp",
    "color", "pencolor", "fillcolor", "pensize", "width",
    "begin_fill", "end_fill", "filling",
    "speed", "shape", "shapesize", "hideturtle", "ht", "showturtle", "st", "isvisible",
    "clear", "reset",
]:
    globals()[_name] = _module_function(_name)

bgcolor = _screen.bgcolor
title = _screen.title
setup = _screen.setup
tracer = _screen.tracer
update = _screen.update
done = mainloop = exitonclick = bye = _screen.mainloop


def _pybot_reset():
    _state.update({"bg": "white", "commands": [], "turtles": [], "step": 0, "used": False, "pen": None})


def _pybot_used():
    return _state["used"]


def _pybot_take():
    """The drawing as JSON: background, commands in drawing order, and turtles."""
    def rounded(value):
        return round(value, 2) + 0.0 if isinstance(value, float) else value

    commands = []
    for command in _state["commands"]:
        item = {key: rounded(value) for key, value in command.items()}
        if "points" in item:
            item["points"] = [[rounded(x), rounded(y)] for x, y in item["points"]]
        commands.append(item)
    turtles = [
        {"x": rounded(t._x), "y": rounded(t._y), "h": rounded(t._heading), "c": t._pencolor}
        for t in _state["turtles"] if t._visible
    ]
    drawing = json.dumps({"bg": _state["bg"], "commands": commands, "turtles": turtles})
    _pybot_reset()
    return drawing
