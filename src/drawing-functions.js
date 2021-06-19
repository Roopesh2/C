// C.js drawing functions 

function _line (x1, y1, x2, y2) {
  var ctx = C.workingCanvas;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  if (ctx._doStroke) ctx.stroke();
  ctx.closePath();
}
function _moveTo (x, y) {
  var ctx = C.workingCanvas;
  if (!ctx._pathStart) ctx.beginPath();
  ctx.moveTo(x, y);
}
function _lineTo (x, y) { C.workingCanvas.lineTo(x, y); }
function _background (col) {
  var ctx = C.workingCanvas;
  ctx.save();
  _rest();
  ctx.fillStyle = col;
  ctx.fillRect(0, 0, ctx.W, ctx.H);
  ctx.restore();
}

function _transform (a1, a2, a3, a4, a5, a6) {
  var ctx = C.workingCanvas;
  ctx.setTransform(a1, a2, a3, a4, a5, a6);
  ctx.scale(ctx.dpr, ctx.dpr);
}
function _noFill () { C.workingCanvas._doFill = false; }
function _noStroke () { C.workingCanvas._doStroke = false; }
function _translate (x, y = 0) { C.workingCanvas.translate(x, y); }
function _setImageSmoothing (bool) { C.workingCanvas.imageSmoothingEnabled = !!bool; }
function _strokeWidth (w) { C.workingCanvas.lineWidth = Number(w); }
function _scale (x, y = x) { C.workingCanvas.scale(x, y) }
function _rotate (a) { C.workingCanvas.rotate(a) }
function _save () { C.workingCanvas.save(); }
function _lineCap (cap) { C.workingCanvas.lineCap = cap || BUTT; }
function _restore () { C.workingCanvas.restore(); }
function _getFill () { return C.workingCanvas.fillStyle; }
function _getStroke () { return C.workingCanvas.strokeStyle; }
function _rest () {
  var ctx = C.workingCanvas;
  var d = ctx.dpr;
  ctx.setTransform(d, 0, 0, d, 0, 0);
}

function _stroke (col) {
  var ctx = C.workingCanvas;
  if (col != undefined) {
    ctx.strokeStyle = col;
    ctx._doStroke = true;
  } else {
    ctx.stroke();
  }
}

function _fill (col) {
  var ctx = C.workingCanvas;
  if (col != undefined) {
    ctx.fillStyle = col;
    ctx._doFill = true;
  } else {
    ctx.fill();
  }
}

function _getDrawConfigs () {
  var ctx = C.workingCanvas;
  return {
    stroke: ctx.strokeStyle,
    fill: ctx.fillStyle,
    strokeWidth: ctx.lineWidth,
    toStroke: ctx._doStroke,
    toFill: ctx._doFill,
  }
}

function _arc (x, y, r, sa = 0, ea = PI / 2) {
  var ctx = C.workingCanvas;
  ctx.beginPath();
  ctx.arc(
    x,
    y,
    r,
    sa || 0,
    int(ea, PI * 2),
  );
  if (ctx._doFill) ctx.fill();
  if (ctx._doStroke) ctx.stroke();
  ctx.closePath();
}

function _sector (x, y, r, sa, ea) {
  var ctx = C.workingCanvas;
  ctx.moveTo(x, y);
  ctx.arc(x, y, r, sa, ea);
}

function _rect (x, y, w, h = w) {
  var ctx = C.workingCanvas;
  ctx.beginPath();
  ctx.rect(x, y, w, h);
  if (ctx._doFill) ctx.fill();
  if (ctx._doStroke) ctx.stroke();
}

function _circle (x, y, r) {
  var ctx = C.workingCanvas;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, PI * 2);
  if (ctx._doFill) ctx.fill();
  if (ctx._doStroke) ctx.stroke();
  ctx.closePath();
}
function _triangle (x1, y1, x2, y2, x3, y3) {
  var ctx = C.workingCanvas;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineTo(x3, y3);
  if (ctx._doFill) ctx.fill();
  if (ctx._doStroke) {
    ctx.lineTo(x1, y1);
    ctx.stroke();
  }
}

function _equiTriangle (x, y, len, rotation = 0) {
  var i = 0;
  var e = PI * 2 / 3;
  var ctx = C.workingCanvas;
  ctx.beginPath();
  ctx.moveTo(cos(rotation) * len + x, sin(rotation) * len + y);
  ctx.lineTo(cos(e + rotation) * len + x, sin(e + rotation) * len + y);
  ctx.lineTo(cos(2 * e + rotation) * len + x, sin(2 * e + rotation) * len + y);
  if (ctx._doFill) ctx.fill();
  if (ctx._doStroke) {
    ctx.lineTo(cos(rotation) * len + x, sin(rotation) * len + y);
    ctx.stroke();
  }
}

function _poly () {
  var args = arguments;
  if (args.length % 2 == 0) {
    var ctx = C.workingCanvas;
    ctx.beginPath();
    ctx.moveTo(args[0], args[1]);
    for (var i = 2; i < args.length; i += 2) {
      ctx.lineTo(args[i], args[i + 1]);
    }
    if (ctx._doFill) ctx.fill();
    if (ctx._doStroke) {
      ctx.lineTo(args[0], args[1]);
      ctx.stroke();
    }
    ctx.closePath();
  }
}

function _ellipse (x, y, xDis, yDis) {
  var ctx = C.workingCanvas;
  var kappa = 4 * ((sqrt(2) - 1) / 3);
  ox = xDis * kappa,  // control point offset horizontal
    oy = yDis * kappa,  // control point offset vertical
    xe = x + xDis,      // x-end
    ye = y + yDis;      // y-end
  ctx.beginPath();
  ctx.moveTo(x - xDis, y);
  ctx.bezierCurveTo(x - xDis, y - oy, x - ox, y - yDis, x, y - yDis);
  ctx.bezierCurveTo(x + ox, y - yDis, xe, y - oy, xe, y);
  ctx.bezierCurveTo(xe, y + oy, x + ox, ye, x, ye);
  ctx.bezierCurveTo(x - ox, ye, x - xDis, y + oy, x - xDis, y);
  if (ctx._doFill) ctx.fill();
  if (ctx._doStroke) {
    ctx.stroke();
  }
  ctx.closePath();
}

function _bezierCurve (x1, y1, x2, y2, x3, y3) {
  var ctx = C.workingCanvas;
  if (!ctx._pathStart) ctx.beginPath();

  ctx.bezierCurveTo(x1, y1, x2, y2, x3, y3);

  if (!ctx._pathStart) {
    if (ctx._doFill) ctx.fill();
    if (ctx._doStroke) {
      ctx.stroke();
    }
    ctx.closePath();
  };
}

function _quad (x1, y1, x2, y2, x3, y3, x4, y4) {
  var ctx = C.workingCanvas, args = arguments;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineTo(x3, y3);
  ctx.lineTo(x4, y4);
  ctx.lineTo(x1, y1);
  if (ctx._doFill) ctx.fill();
  if (ctx._doStroke) {
    ctx.lineTo(args[0], args[1]);
    ctx.stroke();
  }
  ctx.closePath();
}


/**
 * Draws a regular polygon with centre position number of sides length of a side and rotation
 * @param {number} x        x position
 * @param {number} y        y position
 * @param {number} sides    number of sides
 * @param {number} len      length of a side
 * @param {number} rotation rotation
 */
function _regularPoly (x, y, sides, len, rotation = 0) {
  var i = 0;
  var e = PI * 2 / sides;
  var ctx = C.workingCanvas;
  rotation += e / 2;
  var initial = [
    cos(rotation) * len + x,
    sin(rotation) * len + y
  ]
  ctx.beginPath();
  ctx.moveTo(initial[0], initial[1]);
  while (i++ < sides) {
    ctx.lineTo(
      cos(i * e + rotation) * len + x,
      sin(i * e + rotation) * len + y
    );
  }
  if (ctx._doFill) ctx.fill();
  if (ctx._doStroke) {
    ctx.lineTo(initial[0], initial[1]);
    ctx.stroke();
  }
  ctx.closePath();
}

function _loop (fx, dx, th) {
  var ctx = C.workingCanvas;
  ctx.animating = true;
  if (dx) {
    ctx.currentLoop = setInterval(function () {
      fx(ctx.currentLoop);
    }, dx);
  } else {
    function a(dx) {
      ctx.currentLoop = window.requestAnimationFrame(a);
      fx(ctx.currentLoop);
    }
    a();
  }
}

function _clear () {
  var ctx = C.workingCanvas
  ctx.rest();
  ctx.clearRect(0, 0, ctx.W, ctx.H)
}

function _noLoop () {
  var ctx = C.workingCanvas
  clearInterval(ctx.currentLoop);
  window.cancelAnimationFrame(ctx.currentLoop);
  ctx.animating = false;
}

function _startPath () {
  var ctx = C.workingCanvas;
  ctx.beginPath();
  ctx._pathStart = true;
}

function _endPath () {
  var ctx = C.workingCanvas;
  ctx.closePath();
  ctx._pathStart = false;
}

C.functions = {
  line             : _line,
  lineTo           : _lineTo,
  moveTo           : _moveTo,
  background       : _background,
  transform        : _transform,
  noFill           : _noFill,
  lineCap          : _lineCap,
  noStroke         : _noStroke,
  translate        : _translate,
  setImageSmoothing: _setImageSmoothing,
  strokeWidth      : _strokeWidth,
  scale            : _scale,
  rotate           : _rotate,
  save             : _save,
  restore          : _restore,
  getFill          : _getFill,
  getStroke        : _getStroke,
  rest             : _rest,
  stroke           : _stroke,
  fill             : _fill,
  getDrawConfigs   : _getDrawConfigs,
  arc              : _arc,
  sector           : _sector,
  rect             : _rect,
  circle           : _circle,
  triangle         : _triangle,
  equiTriangle     : _equiTriangle,
  poly             : _poly,
  ellipse          : _ellipse,
  bezierCurve      : _bezierCurve,
  quad             : _quad,
  regularPoly      : _regularPoly,
  loop             : _loop,
  clear            : _clear,
  noLoop           : _noLoop,
  startPath        : _startPath,
  endPath          : _endPath,
};
defineProperties(C.functions);