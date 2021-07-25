(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _utils = require("./utils.js");

var _main = require("./main.js");

var COLORLIST = _interopRequireWildcard(require("./constants/colors.js"));

var DrawingConstants = _interopRequireWildcard(require("./constants/drawing.js"));

var MathConsts = _interopRequireWildcard(require("./constants/math.js"));

var Color_Converters = _interopRequireWildcard(require("./color/color_converters.js"));

var Color_Reader = _interopRequireWildcard(require("./color/color_reader.js"));

var Gradients = _interopRequireWildcard(require("./color/gradients.js"));

var Color_Random = _interopRequireWildcard(require("./color/random.js"));

var Interpolation = _interopRequireWildcard(require("./color/interpolation.js"));

var Image = _interopRequireWildcard(require("./objects/image.js"));

var Geometry = _interopRequireWildcard(require("./objects/geometry.js"));

var Settings = _interopRequireWildcard(require("./settings.js"));

var Text = _interopRequireWildcard(require("./objects/text.js"));

var Tex = _interopRequireWildcard(require("./objects/tex.js"));

var CoordinateSystems = _interopRequireWildcard(require("./objects/coordinate_systems.js"));

var Braces = _interopRequireWildcard(require("./objects/braces.js"));

var Arrows = _interopRequireWildcard(require("./objects/arrows.js"));

var Functions = _interopRequireWildcard(require("./objects/functions.js"));

var Arithmeics = _interopRequireWildcard(require("./math/aritmetics.js"));

var Basic = _interopRequireWildcard(require("./math/basic.js"));

var Points = _interopRequireWildcard(require("./math/points.js"));

var Math_Random = _interopRequireWildcard(require("./math/random.js"));

var RateFunctions = _interopRequireWildcard(require("./math/rate_functions.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

(0, _utils.defineProperties)(COLORLIST, window, false);
(0, _utils.defineProperties)(DrawingConstants, window, false);
(0, _utils.defineProperties)(MathConsts, window, false);
(0, _utils.defineProperties)(Color_Converters);
(0, _utils.defineProperties)(Color_Reader);
(0, _utils.defineProperties)(Gradients);
(0, _utils.defineProperties)(Color_Random);
(0, _utils.defineProperties)(Interpolation);
(0, _utils.defineProperties)(Image);
(0, _utils.defineProperties)(Geometry);
(0, _utils.defineProperties)(Settings);
(0, _utils.defineProperties)(Text);
(0, _utils.defineProperties)(Tex);
(0, _utils.defineProperties)(CoordinateSystems);
(0, _utils.defineProperties)(Braces);
(0, _utils.defineProperties)(Arrows);
(0, _utils.defineProperties)(Functions);
(0, _utils.defineProperties)(Arithmeics);
(0, _utils.defineProperties)(Basic);
(0, _utils.defineProperties)(Points);
(0, _utils.defineProperties)(Math_Random);
(0, _utils.defineProperties)(RateFunctions);
(0, _utils.defineProperties)(MathConsts, window, false);
(0, _utils.defineProperties)(_utils.defineProperties, _main.C);
(0, _utils.defineProperties)(COLORLIST, _main.C);

},{"./color/color_converters.js":2,"./color/color_reader.js":3,"./color/gradients.js":4,"./color/interpolation.js":5,"./color/random.js":6,"./constants/colors.js":7,"./constants/drawing.js":8,"./constants/math.js":9,"./main.js":10,"./math/aritmetics.js":11,"./math/basic.js":12,"./math/points.js":13,"./math/random.js":14,"./math/rate_functions.js":15,"./objects/arrows.js":16,"./objects/braces.js":17,"./objects/coordinate_systems.js":18,"./objects/functions.js":19,"./objects/geometry.js":20,"./objects/image.js":21,"./objects/tex.js":22,"./objects/text.js":23,"./settings.js":24,"./utils.js":25}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RGBToHSL = RGBToHSL;
exports.HSLToRGB = HSLToRGB;
exports.RGBToHSV = RGBToHSV;
exports.HSVToRGB = HSVToRGB;

function hue2RGB(p, q, t) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}
/**
 * Converts an RGB color value to HSL. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes values of red, green, and blue are between 0 & 255 and
 * returns hue in range 0 to 360, saturation and lightness in range 0 to 1
 * @method RGBToHSL
 * @global
 * @param {number} red The red color value
 * @param {number} green The green color value
 * @param {number} blue The blue color value
 * @return {array} The HSL representation
 */


function RGBToHSL(red, green, blue) {
  const r = red / 255;
  const g = green / 255;
  const b = blue / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let hue;
  let saturation;
  const lightness = (max + min) / 2;

  if (max === min) {
    hue = saturation = 0; // achromatic
  } else {
    const d = max - min;
    saturation = lightness > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        hue = (g - b) / d + (g < b ? 6 : 0);
        break;

      case g:
        hue = (b - r) / d + 2;
        break;

      case b:
        hue = (r - g) / d + 4;
        break;
    }

    hue /= 6;
  }

  return [hue * 360, saturation, lightness];
}
/**
 * Converts an HSL color value to RGB. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes values of hue is between 0 and 360, saturation and lightness are between 0 & 1 and
 * returns red, green, and blue values between 0 & 255
 *
 * @param {number} hue The hue
 * @param {number} saturation The saturation
 * @param {number} lightness The lightness
 * @return {array} The RGB representation
 */


function HSLToRGB(hue, saturation, lightness) {
  let r, g, b;
  hue /= 360;

  if (saturation === 0) {
    r = g = b = lightness; // achromatic
  } else {
    const q = lightness < 0.5 ? lightness * (1 + saturation) : lightness + saturation - lightness * saturation;
    const p = 2 * lightness - q;
    r = hue2RGB(p, q, hue + 1 / 3);
    g = hue2RGB(p, q, hue);
    b = hue2RGB(p, q, hue - 1 / 3);
  }

  return [r * 255, g * 255, b * 255];
}
/**
 * Converts an RGB color value to HSV. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSV_color_space.
 * Assumes values of red, green, and blue are between 0 & 255 and
 * returns hue in range 0 to 360, saturation and value in range 0 to 1
 *
 * @param {number} red The red color value
 * @param {number} green The green color value
 * @param {number} blue The blue color value
 * @return {array} The HSV representation
 */


function RGBToHSV(red, green, blue) {
  const r = red / 255;
  const g = green / 255;
  const b = blue / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let hue;
  const value = max;
  const d = max - min;
  const saturation = max === 0 ? 0 : d / max;

  if (max === min) {
    hue = 0; // achromatic
  } else {
    switch (max) {
      case r:
        hue = (g - b) / d + (g < b ? 6 : 0);
        break;

      case g:
        hue = (b - r) / d + 2;
        break;

      case b:
        hue = (r - g) / d + 4;
        break;
    }

    hue /= 6;
  }

  return [hue * 360, saturation, value];
}
/**
 * Converts an HSV color value to RGB. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSV_color_space.
 * Assumes values of hue is between 0 to 360, saturation, and value are between 0 & 1 and
 * returns red, green, and blue in range 0 to 255
 *
 * @param {number} hue The hue
 * @param {number} saturation The saturation
 * @param {number} value The value
 * @return {array} The RGB representation
 */


function HSVToRGB(hue, saturation, value) {
  let r, g, b;
  const i = Math.floor(hue / 60);
  const f = hue / 60 - i;
  const p = value * (1 - saturation);
  const q = value * (1 - f * saturation);
  const t = value * (1 - (1 - f) * saturation);

  switch (i % 6) {
    case 0:
      r = value;
      g = t;
      b = p;
      break;

    case 1:
      r = q;
      g = value;
      b = p;
      break;

    case 2:
      r = p;
      g = value;
      b = t;
      break;

    case 3:
      r = p;
      g = q;
      b = value;
      break;

    case 4:
      r = t;
      g = p;
      b = value;
      break;

    case 5:
      r = value;
      g = p;
      b = q;
      break;
  }

  return [r * 255, g * 255, b * 255];
}

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readColor = readColor;

var _main = require("../main.js");

/**
 * Reads the argument and finds color
 *
 * @param {string} colors
 * @param {boolean} toArray whether to return a array instead of string.
 * @return {string}
 */
function readColor(color, toArray = false) {
  let c1 = color[0];
  let read;

  if (typeof c1 === "number") {
    if (color.length === 1) {
      read = [c1, c1, c1, 1];
    } else if (color.length === 2) {
      read = [c1, color[1], 0, 1];
    } else if (color.length === 3) {
      read = [c1, color[1], color[2], 1];
    } else if (color.length === 4) {
      read = [c1, color[1], color[2], color[3]];
    }
  } else if (c1[0] == "#") {
    c1 = c1.substr(1);

    if (c1.length == 3 || c1.length == 4) {
      let alpha = c1[3] || "ff";
      read = [Number("0x" + c1[0] + c1[0]), Number("0x" + c1[1] + c1[1]), Number("0x" + c1[2] + c1[2]), Number("0x" + alpha) / 255];
    } else if (c1.length == 6 || c1.length == 8) {
      let alpha = c1.substr(6, 2) || "ff";
      read = [Number("0x" + c1.substr(0, 2)), Number("0x" + c1.substr(2, 2)), Number("0x" + c1.substr(4, 2)), Number("0x" + alpha) / 255];
    }
  }

  if (!toArray) {
    const mode = _main.C.workingCanvas.colorMode || "rgba";

    if (mode === "hsl" || mode === "rgb") {
      read = mode + `(${read[0]}, ${read[1]}, ${read[2]})`;
    } else if (mode === "rgba") {
      read = `rgba(${read[0]}, ${read[1]}, ${read[2]}, ${read[3]})`;
    }
  }

  return read;
}

},{"../main.js":10}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.linearGradient = linearGradient;

var _main = require("../main.js");

/**
 * creates a linear gradient
 *
 * @param {array} initialPoint initial point as [x, y]
 * @param {array} finalPoint final point as [x, y]
 * @param {Object|array} colorStops color stops
 @example
 ```js
var color = linearGradient(
	[0, 0], [200, 0],
	{
			0: "green",
			0.5: "cyan",
			1: "yellow"
	}
);
```,
```js
var color = linearGradient(
	[0, 0], [200, 0],
	[
		"green",
		"cyan",
		"yellow"
	]
);
```
 */
function linearGradient(initialPoint, finalPoint, colorStops) {
  const ctx = _main.C.workingCanvas;
  const gradient = ctx.createLinearGradient(initialPoint[0], initialPoint[1], finalPoint[0], finalPoint[1]);

  if (Array.isArray(colorStops)) {
    const stops = {};
    const step = 1 / colorStops.length;

    for (let i = 0; i < colorStops.length; i++) {
      stops[step * i] = colorStops[i];
    }

    colorStops = stops;
  }

  for (let stops = Object.keys(colorStops), i = 0; i < stops.length; i++) {
    const stop = stops[i];
    gradient.addColorStop(stop, colorStops[stop]);
  }

  return gradient;
}

},{"../main.js":10}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lerpColor = lerpColor;
exports.lerpColorArray = lerpColorArray;

var _color_reader = require("./color_reader.js");

/**
 * gives an interpolated color.
 *
 * @param {string} color1 color
 * @param {string} color2 color
 * @param {number} v should be between 0 and 1.
 */
function lerpColor(color1, color2, v) {
  const c1 = (0, _color_reader.readColor)([color1], true);
  const c2 = (0, _color_reader.readColor)([color2], true);
  return (0, _color_reader.readColor)([(c2[0] - c1[0]) * v + c1[0], (c2[1] - c1[1]) * v + c1[1], (c2[2] - c1[2]) * v + c1[2], (c2[3] - c1[3]) * v + c1[3]]);
}

function lerpColorArray(colorArr, v) {
  const stopes = Object.keys(colorArr).sort();
  const min = Math.min(...stopes);
  const max = Math.max(...stopes);
  if (v >= max) return colorArr[max];
  if (v <= min) return colorArr[min];

  for (var i = 0; i < stopes.length - 1; i++) {
    let a = stopes[i];

    if (v > a) {
      return lerpColor(colorArr[a], colorArr[stopes[i + 1]], (v - a) / (stopes[i + 1] - a));
    } else if (v == a) {
      return colorArr[a];
    }
  }
}

},{"./color_reader.js":3}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.randomColor = randomColor;
exports.randomDefinedColor = randomDefinedColor;

var _random = require("../math/random.js");

var COLORLIST = _interopRequireWildcard(require("../constants/colors.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var definedColorList = Object.keys(COLORLIST);
const TR_INDEX = definedColorList.indexOf("TRANSPARENT");
definedColorList = definedColorList.slice(0, TR_INDEX).concat(definedColorList.slice(TR_INDEX + 1));
/**
 * returns a random hex color
 *
 */

function randomColor() {
  let color = "#";

  for (let i = 0; i < 3; i++) {
    let randNum = (0, _random.randomInt)(255).toString(16);
    randNum = randNum.length === 1 ? 0 + randNum : randNum;
    color += randNum;
  }

  return color;
}
/**
 * picks a random color from defined ones
 *
 */


function randomDefinedColor() {
  return COLORLIST[definedColorList[(0, _random.randomInt)(definedColorList.length - 1)]];
}

},{"../constants/colors.js":7,"../math/random.js":14}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TRANSPARENT = exports.ORANGE = exports.GREEN_SCREEN = exports.LIGHT_PINK = exports.PINK = exports.GREY_BROWN = exports.DARKER_GRAY = exports.DARKER_GREY = exports.DARK_GRAY = exports.DARK_GREY = exports.GREY = exports.GRAY = exports.LIGHT_GREY = exports.LIGHT_GRAY = exports.BLACK = exports.WHITE = exports.PURPLE = exports.PURPLE_E = exports.PURPLE_D = exports.PURPLE_C = exports.PURPLE_B = exports.PURPLE_A = exports.MAROON = exports.MAROON_E = exports.MAROON_D = exports.MAROON_C = exports.MAROON_B = exports.MAROON_A = exports.RED = exports.RED_E = exports.RED_D = exports.RED_C = exports.RED_B = exports.RED_A = exports.GOLD = exports.GOLD_E = exports.GOLD_D = exports.GOLD_C = exports.GOLD_B = exports.GOLD_A = exports.YELLOW = exports.YELLOW_E = exports.YELLOW_D = exports.YELLOW_C = exports.YELLOW_B = exports.YELLOW_A = exports.GREEN = exports.GREEN_E = exports.GREEN_D = exports.GREEN_C = exports.GREEN_B = exports.GREEN_A = exports.TEAL = exports.TEAL_E = exports.TEAL_D = exports.TEAL_C = exports.TEAL_B = exports.TEAL_A = exports.BLUE = exports.BLUE_E = exports.BLUE_D = exports.BLUE_C = exports.BLUE_B = exports.BLUE_A = exports.LIGHT_BROWN = exports.DARK_BROWN = exports.DARK_BLUE = void 0;

/**
 * List of colors
 * @module constants
 * @submodule colors
 */
// from Manim
const DARK_BLUE = "#236B8E",
      DARK_BROWN = "#8B4513",
      LIGHT_BROWN = "#CD853F",
      BLUE_A = "#C7E9F1",
      BLUE_B = "#9CDCEB",
      BLUE_C = "#58C4DD",
      BLUE_D = "#29ABCA",
      BLUE_E = "#1C758A",
      BLUE = "#58C4DD",
      TEAL_A = "#ACEAD7",
      TEAL_B = "#76DDC0",
      TEAL_C = "#5CD0B3",
      TEAL_D = "#55C1A7",
      TEAL_E = "#49A88F",
      TEAL = "#5CD0B3",
      GREEN_A = "#C9E2AE",
      GREEN_B = "#A6CF8C",
      GREEN_C = "#83C167",
      GREEN_D = "#77B05D",
      GREEN_E = "#699C52",
      GREEN = "#83C167",
      YELLOW_A = "#FFF1B6",
      YELLOW_B = "#FFEA94",
      YELLOW_C = "#FFFF00",
      YELLOW_D = "#F4D345",
      YELLOW_E = "#E8C11C",
      YELLOW = "#FFFF00",
      GOLD_A = "#F7C797",
      GOLD_B = "#F9B775",
      GOLD_C = "#F0AC5F",
      GOLD_D = "#E1A158",
      GOLD_E = "#C78D46",
      GOLD = "#F0AC5F",
      RED_A = "#F7A1A3",
      RED_B = "#FF8080",
      RED_C = "#FC6255",
      RED_D = "#E65A4C",
      RED_E = "#CF5044",
      RED = "#FC6255",
      MAROON_A = "#ECABC1",
      MAROON_B = "#EC92AB",
      MAROON_C = "#C55F73",
      MAROON_D = "#A24D61",
      MAROON_E = "#94424F",
      MAROON = "#C55F73",
      PURPLE_A = "#CAA3E8",
      PURPLE_B = "#B189C6",
      PURPLE_C = "#9A72AC",
      PURPLE_D = "#715582",
      PURPLE_E = "#644172",
      PURPLE = "#9A72AC",
      WHITE = "#FFFFFF",
      BLACK = "#000000",
      LIGHT_GRAY = "#BBBBBB",
      LIGHT_GREY = "#BBBBBB",
      GRAY = "#888888",
      GREY = "#888888",
      DARK_GREY = "#444444",
      DARK_GRAY = "#444444",
      DARKER_GREY = "#222222",
      DARKER_GRAY = "#222222",
      GREY_BROWN = "#736357",
      PINK = "#D147BD",
      LIGHT_PINK = "#DC75CD",
      GREEN_SCREEN = "#00FF00",
      ORANGE = "#FF862F",
      TRANSPARENT = "rgba(0,0,0,0)";
exports.TRANSPARENT = TRANSPARENT;
exports.ORANGE = ORANGE;
exports.GREEN_SCREEN = GREEN_SCREEN;
exports.LIGHT_PINK = LIGHT_PINK;
exports.PINK = PINK;
exports.GREY_BROWN = GREY_BROWN;
exports.DARKER_GRAY = DARKER_GRAY;
exports.DARKER_GREY = DARKER_GREY;
exports.DARK_GRAY = DARK_GRAY;
exports.DARK_GREY = DARK_GREY;
exports.GREY = GREY;
exports.GRAY = GRAY;
exports.LIGHT_GREY = LIGHT_GREY;
exports.LIGHT_GRAY = LIGHT_GRAY;
exports.BLACK = BLACK;
exports.WHITE = WHITE;
exports.PURPLE = PURPLE;
exports.PURPLE_E = PURPLE_E;
exports.PURPLE_D = PURPLE_D;
exports.PURPLE_C = PURPLE_C;
exports.PURPLE_B = PURPLE_B;
exports.PURPLE_A = PURPLE_A;
exports.MAROON = MAROON;
exports.MAROON_E = MAROON_E;
exports.MAROON_D = MAROON_D;
exports.MAROON_C = MAROON_C;
exports.MAROON_B = MAROON_B;
exports.MAROON_A = MAROON_A;
exports.RED = RED;
exports.RED_E = RED_E;
exports.RED_D = RED_D;
exports.RED_C = RED_C;
exports.RED_B = RED_B;
exports.RED_A = RED_A;
exports.GOLD = GOLD;
exports.GOLD_E = GOLD_E;
exports.GOLD_D = GOLD_D;
exports.GOLD_C = GOLD_C;
exports.GOLD_B = GOLD_B;
exports.GOLD_A = GOLD_A;
exports.YELLOW = YELLOW;
exports.YELLOW_E = YELLOW_E;
exports.YELLOW_D = YELLOW_D;
exports.YELLOW_C = YELLOW_C;
exports.YELLOW_B = YELLOW_B;
exports.YELLOW_A = YELLOW_A;
exports.GREEN = GREEN;
exports.GREEN_E = GREEN_E;
exports.GREEN_D = GREEN_D;
exports.GREEN_C = GREEN_C;
exports.GREEN_B = GREEN_B;
exports.GREEN_A = GREEN_A;
exports.TEAL = TEAL;
exports.TEAL_E = TEAL_E;
exports.TEAL_D = TEAL_D;
exports.TEAL_C = TEAL_C;
exports.TEAL_B = TEAL_B;
exports.TEAL_A = TEAL_A;
exports.BLUE = BLUE;
exports.BLUE_E = BLUE_E;
exports.BLUE_D = BLUE_D;
exports.BLUE_C = BLUE_C;
exports.BLUE_B = BLUE_B;
exports.BLUE_A = BLUE_A;
exports.LIGHT_BROWN = LIGHT_BROWN;
exports.DARK_BROWN = DARK_BROWN;
exports.DARK_BLUE = DARK_BLUE;

},{}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OBLIQUE = exports.ITALIC = exports.SMALLER = exports.LARGER = exports.XXX_LARGE = exports.XX_LARGE = exports.X_LARGE = exports.LARGE = exports.MEDIUM = exports.SMALL = exports.X_SMALL = exports.XX_SMALL = exports.ULTRA_EXPANDED = exports.EXTRA_EXPANDED = exports.EXPANDED = exports.SEMI_EXPANDED = exports.NORMAL = exports.SEMI_CONDENSED = exports.CONDENSED = exports.EXTRA_CONDENSED = exports.ULTRA_CONDENSED = exports.BOTTOM = exports.IDEOGRAPHIC = exports.ALPHABETIC = exports.MIDDLE = exports.HANGING = exports.TOP = exports.END = exports.START = exports.CENTER = exports.RIGHT = exports.LEFT = exports.MITER = exports.BEVEL = exports.MILTER = exports.ROUND = exports.SQUARE = exports.BUTT = void 0;
const BUTT = "butt",
      SQUARE = "square",
      ROUND = "round",
      MILTER = "milter",
      BEVEL = "bevel",
      MITER = "miter",
      LEFT = "left",
      RIGHT = "right",
      CENTER = "center",
      START = "start",
      END = "end",
      TOP = "top",
      HANGING = "hanging",
      MIDDLE = "middle",
      ALPHABETIC = "alphabetic",
      IDEOGRAPHIC = "ideographic",
      BOTTOM = "bottom",
      // font stretch properties
ULTRA_CONDENSED = "ultra-condensed",
      // 50%
EXTRA_CONDENSED = "extra-condensed",
      // 62.5%
CONDENSED = "condensed",
      // 75%
SEMI_CONDENSED = "semi-condensed",
      // 87.5%
NORMAL = "normal",
      // 100%
SEMI_EXPANDED = "semi-expanded",
      // 112.5%
EXPANDED = "expanded",
      // 125%
EXTRA_EXPANDED = "extra-expanded",
      // 150%
ULTRA_EXPANDED = "ultra-expanded",
      // 200%
// font size properties
XX_SMALL = "xx-small",
      X_SMALL = "x-small",
      SMALL = "small",
      MEDIUM = "medium",
      LARGE = "large",
      X_LARGE = "x-large",
      XX_LARGE = "xx-large",
      XXX_LARGE = "xxx-large",
      LARGER = "larger",
      SMALLER = "smaller",
      // font style properties
ITALIC = "italic",
      OBLIQUE = "oblique";
exports.OBLIQUE = OBLIQUE;
exports.ITALIC = ITALIC;
exports.SMALLER = SMALLER;
exports.LARGER = LARGER;
exports.XXX_LARGE = XXX_LARGE;
exports.XX_LARGE = XX_LARGE;
exports.X_LARGE = X_LARGE;
exports.LARGE = LARGE;
exports.MEDIUM = MEDIUM;
exports.SMALL = SMALL;
exports.X_SMALL = X_SMALL;
exports.XX_SMALL = XX_SMALL;
exports.ULTRA_EXPANDED = ULTRA_EXPANDED;
exports.EXTRA_EXPANDED = EXTRA_EXPANDED;
exports.EXPANDED = EXPANDED;
exports.SEMI_EXPANDED = SEMI_EXPANDED;
exports.NORMAL = NORMAL;
exports.SEMI_CONDENSED = SEMI_CONDENSED;
exports.CONDENSED = CONDENSED;
exports.EXTRA_CONDENSED = EXTRA_CONDENSED;
exports.ULTRA_CONDENSED = ULTRA_CONDENSED;
exports.BOTTOM = BOTTOM;
exports.IDEOGRAPHIC = IDEOGRAPHIC;
exports.ALPHABETIC = ALPHABETIC;
exports.MIDDLE = MIDDLE;
exports.HANGING = HANGING;
exports.TOP = TOP;
exports.END = END;
exports.START = START;
exports.CENTER = CENTER;
exports.RIGHT = RIGHT;
exports.LEFT = LEFT;
exports.MITER = MITER;
exports.BEVEL = BEVEL;
exports.MILTER = MILTER;
exports.ROUND = ROUND;
exports.SQUARE = SQUARE;
exports.BUTT = BUTT;

},{}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RAD = exports.DEG = exports.SQRT2 = exports.TWO_PI = exports.TAU = exports.QUATER_PI = exports.TIERCE_PI = exports.HALF_PI = exports.PI = exports.LN10 = exports.LN2 = exports.E = void 0;
const E = 2.71828182845904523,
      LN2 = 0.6931471805599453,
      LN10 = 2.30258509299404568,
      PI = 3.14159265358979323,
      HALF_PI = 1.57079632679489661,
      TIERCE_PI = 1.04719755119659774,
      QUATER_PI = 0.7853981633974483,
      TAU = 6.28318530717958647,
      TWO_PI = 6.28318530717958647,
      SQRT2 = 1.41421356237309504,
      // conversion factors
DEG = Math.PI / 180,
      // degree to radian
RAD = 180 / Math.PI; // radian to degree

exports.RAD = RAD;
exports.DEG = DEG;
exports.SQRT2 = SQRT2;
exports.TWO_PI = TWO_PI;
exports.TAU = TAU;
exports.QUATER_PI = QUATER_PI;
exports.TIERCE_PI = TIERCE_PI;
exports.HALF_PI = HALF_PI;
exports.PI = PI;
exports.LN10 = LN10;
exports.LN2 = LN2;
exports.E = E;

},{}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.C = C;

var _utils = require("./utils.js");

const defaultConfigs = {
  width: 200,
  // width of canvas multiplied by dpr
  height: 200,
  // height of canvas  multiplied by dpr
  dpr: Math.ceil(window.devicePixelRatio || 1),
  // device pixel ratio for clear drawings
  // states
  doFill: true,
  doStroke: true,
  pathStarted: false,
  yAxisInverted: false,
  netRotation: 0,
  currentLoop: null,
  textAlign: "start",
  textBaseline: "alphabetic",
  // color stuff
  fillStyle: "#ffffff",
  background: "#ffffff",
  strokeStyle: "#000000",
  colorMode: "rgba",
  lineWidth: 1,
  // font properties
  fontSize: "20px",
  fontFamily: "serif",
  fontStyle: "normal",
  fontVariant: "normal",
  fontWeight: "normal",
  fontStretch: "normal",
  lineHeight: "1.2",
  font: "20px serif"
};
/**
 * Main Function
 *
 * @param {function} fx codes to exeecute
 * @param {HTMLElement} [container=document.body] container for the drawings
 * @param {object} [cfgs={}] configurations
 */

function C(fx, container = document.body, cfgs = {}) {
  // assign configs
  const configs = (0, _utils.applyDefault)(defaultConfigs, cfgs); // initialize canvas

  let canvas = C.makeCanvas(configs);

  if (typeof container === "string") {
    container = document.querySelector(container);
  }

  var parentName = container.id || container.classList.item(0);
  let canvasName;

  if (configs.name != undefined) {
    canvasName = configs.name;
    const cvs = document.getElementById(canvasName);

    if (cvs instanceof HTMLElement) {
      // if already exist
      canvas = cvs;
      prepareCanvas();
      fx();
      return;
    }
  } else {
    // finds a name for canvas that already don't exist
    while (document.getElementById(parentName + "-" + C.nameID) != undefined) {
      C.nameID++;
    }

    canvasName = parentName + "-" + C.nameID;
    configs.name = canvasName;
  }

  function prepareCanvas() {
    // add additional information to rendererContext
    C.resizeCanvas(canvas, configs);
    canvas.context = Object.assign(canvas.getContext("2d"), configs);
    canvas.context.setTransform(configs.dpr, 0, 0, configs.dpr, 0, 0);
    C.workingCanvas = canvas.context;
    C.workingCanvas.savedStates = defaultConfigs;
  } // set canvas's id and class to its name


  canvas.id = canvasName;
  canvas.classList.add(canvasName); // add canvas to container

  container.appendChild(canvas);
  prepareCanvas();
  C.canvasList[canvasName] = canvas.context;
  fx();
}
/**
 * List of available canvases
 * @type {Object}
 */


C.canvasList = {};
/**
 * Number of canvases
 * @type {Number}
 */

C.nameID = 0;
/**
 * Current working canvas
 * @type {CanvasRenderingContext2D}
 */

C.workingCanvas = {}; // index of current working canvas in `C.canvasList`

/**
 * Default configurations
 */

C.defaultConfigs = defaultConfigs;
/**
 * return inner width of container tag
 * @param {HTMLElement} [container=document.body]
 * @returns {Number}
 */

C.getContainerWidth = function (container = document.body) {
  const cs = window.getComputedStyle(container);
  return parseInt(cs.width) - parseInt(cs.paddingRight) - parseInt(cs.paddingLeft);
};
/**
 * Set width and height attribute of canvas element to the given values in `configs`
 * and scales CSS width and height to DPR
 *
 * @param {HTMLCanvasElement} cvs
 * @param {Object} configs
 * values needed in `configs`:
 *
 * dpr    <Number>: Device pixel ratio
 * width  <Number>: Width in pixels
 * height <Number>: Height in pixels
 */


C.resizeCanvas = function (cvs, configs) {
  const width = configs.width;
  const height = configs.height;
  const dpr = configs.dpr || window.devicePixelRatio;
  cvs.style.width = width + "px";
  cvs.style.height = height + "px";
  cvs.width = dpr * width;
  cvs.height = dpr * height;
};
/**
 * Returns a canvas element with given params
 *
 * @param {Object} configs
 * @returns {HTMLCanvasElement}
 */


C.makeCanvas = function (configs) {
  const cvs = document.createElement("canvas");
  this.resizeCanvas(cvs, configs);
  return cvs;
};
/**
 * Add extension to window and C extension list
 *
 * @param {Object} extObj
 * @param {boolean} editable warn the edit of functions
 */


C.addExtension = function (extObj, editable) {
  (0, _utils.defineProperties)(extObj, window, !editable);
  (0, _utils.defineProperties)(extObj, C.extensions, !editable);
};
/**
 */


C.defineProperties = _utils.defineProperties; // register to window

window.C = C;

},{"./utils.js":25}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gcd = gcd;
exports.gcdArray = gcdArray;
exports.lcm = lcm;
exports.lcmArray = lcmArray;

/**
 * Computes GCD (Greatest Common Divisor) or HCF (Highest Common Factor) of two numbers
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function gcd(a, b) {
  while (b != 0) {
    let ra = b;
    b = a % b;
    a = ra;
  }

  return a;
}
/**
 * Returns greatest common divisor of a list of integers.
 *
 * @return {number}
 */


function gcdArray() {
  var n = 0;

  for (var i = 0; i < arguments.length; ++i) n = gcd(arguments[i], n);

  return n;
}
/**
 * Computes LCM (Least Common Multiple) of two numbers
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 */


function lcm(a, b) {
  return a * b / gcd(a, b);
}
/**
 * Returns least common multiple of a list of integers.
 *
 * @return {number}
 */


function lcmArray() {
  var n = 1;

  for (var i = 0; i < arguments.length; ++i) n = lcm(arguments[i], n);

  return n;
}

},{}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tanh = exports.tan = exports.sqrt = exports.sin = exports.sgn = exports.round = exports.random = exports.pow = exports.min = exports.max = exports.log10 = exports.log2 = exports.log = exports.floor = exports.exp = exports.cosh = exports.cos = exports.ceil = exports.cbrt = exports.atan2 = exports.atan = exports.asin = exports.acos = exports.abs = void 0;
const {
  abs,
  acos,
  asin,
  atan,
  atan2,
  cbrt,
  ceil,
  cos,
  cosh,
  exp,
  floor,
  log,
  log2,
  log10,
  max,
  min,
  pow,
  random,
  round,
  sign: sgn,
  sin,
  sqrt,
  tan,
  tanh
} = Math;
exports.tanh = tanh;
exports.tan = tan;
exports.sqrt = sqrt;
exports.sin = sin;
exports.sgn = sgn;
exports.round = round;
exports.random = random;
exports.pow = pow;
exports.min = min;
exports.max = max;
exports.log10 = log10;
exports.log2 = log2;
exports.log = log;
exports.floor = floor;
exports.exp = exp;
exports.cosh = cosh;
exports.cos = cos;
exports.ceil = ceil;
exports.cbrt = cbrt;
exports.atan2 = atan2;
exports.atan = atan;
exports.asin = asin;
exports.acos = acos;
exports.abs = abs;

},{}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dist = dist;
exports.rotateAroundOrigin = rotateAroundOrigin;
exports.rotateAroundPoint = rotateAroundPoint;
exports.lineIntersection = lineIntersection;
exports.circleIntersection = circleIntersection;

/**
 * return distance between two points
 *
 * @param {array} p1
 * @param {array} p2
 * @return {number} distance between p1 and p2
 */
function dist(p1, p2) {
  return Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2));
}
/**
 * Returns a point rotated around a point by certain angle, exetened by a certain length
 *
 * @param {number|array} x center x or center as array of coords [x, y]
 * @param {number} y center y
 * @param {number} angle angle of rotation
 * @param {number} len length to extend the point
 * @returns {array} array of two points
 */


function rotateAroundPoint(x, y, angle, len = 10) {
  if (Array.isArray(x) && x.length === 2) {
    y = x[1];
    x = x[0];
  }

  return [Math.cos(angle) * len + x, Math.sin(angle) * len + y];
}
/**
 * Returns a point rotated around origin by certain angle, exetened by a certain length
 *
 * @param {number} angle angle of rotation
 * @param {number} len length to extend the point
 * @returns {array} array of two points
 */


function rotateAroundOrigin(angle, len = 10) {
  return rotateAroundPoint(0, 0, angle, len);
}
/**
 * Returns the point of intersection of two lines.
 *
 * @param {array} p1 start point of first line as [x, y]
 * @param {array} p2 end point of first line as [x, y]
 * @param {array} p3 start point of second line as [x, y]
 * @param {array} p4 end point of second line as [x, y]
 * @return {array} intersection point of lines as [x, y]
 */


function lineIntersection(p1, p2, p3, p4) {
  const m1 = (p2[1] - p1[1]) / (p2[0] - p1[0]);
  const m2 = (p4[1] - p3[1]) / (p4[0] - p3[0]);
  const c1 = p1[1] - p1[0] * m1;
  const c2 = p3[1] - p3[0] * m2;
  const x = (c2 - c1) / (m1 - m2);
  const y = m1 * x + c1;
  return [x, y];
}
/**
 * Finds intersection of two circles.
 * A translation from {@link https://stackoverflow.com/a/14146166}
 *
 * @param {array} c1 center of first circle as [x, y]
 * @param {number} r1 radius of first circle
 * @param {array} c2 center of second circle as [x, y]
 * @param {number} r2 radius of second circle
 * @return {array} array of two points as [x, y]
 */


function circleIntersection(c1, r1, c2, r2) {
  const d = dist(c1, c2);
  const a = (r1 * r1 - r2 * r2 + d * d) / (2 * d);
  const h = Math.sqrt(r1 * r1 - a * a);
  const s = a / d;
  const p2 = [(c2[0] - c1[0]) * s + c1[0], (c2[1] - c1[1]) * s + c1[1]];
  return [[p2[0] + h * (c2[1] - c1[1]) / d, p2[1] - h * (c2[0] - c1[0]) / d], [p2[0] - h * (c2[1] - c1[1]) / d, p2[1] + h * (c2[0] - c1[0]) / d]];
}

},{}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.randomInt = randomInt;

/**
 * Returns a random integer between given range.
 *
 * @param {number} [max=10] maximum range
 * @param {number} [min=0] minimum range
 * @return {number}
 */
function randomInt(max = 10, min = 0) {
  return Math.round(Math.random() * (max - min) + min);
}

},{}],15:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.easeOutBounce = easeOutBounce;
exports.linear = linear;
exports.easeInQuad = easeInQuad;
exports.easeOutQuad = easeOutQuad;
exports.easeInOutQuad = easeInOutQuad;
exports.easeInCubic = easeInCubic;
exports.easeOutCubic = easeOutCubic;
exports.easeInOutCubic = easeInOutCubic;
exports.easeInQuart = easeInQuart;
exports.easeOutQuart = easeOutQuart;
exports.easeInOutQuart = easeInOutQuart;
exports.easeInQuint = easeInQuint;
exports.easeOutQuint = easeOutQuint;
exports.easeInOutQuint = easeInOutQuint;
exports.easeInSine = easeInSine;
exports.easeOutSine = easeOutSine;
exports.easeInOutSine = easeInOutSine;
exports.easeInExpo = easeInExpo;
exports.easeOutExpo = easeOutExpo;
exports.easeInOutExpo = easeInOutExpo;
exports.easeInCirc = easeInCirc;
exports.easeOutCirc = easeOutCirc;
exports.easeInOutCirc = easeInOutCirc;
exports.easeInBack = easeInBack;
exports.easeOutBack = easeOutBack;
exports.easeInOutBack = easeInOutBack;
exports.easeInElastic = easeInElastic;
exports.easeOutElastic = easeOutElastic;
exports.easeInOutElastic = easeInOutElastic;
exports.easeInBounce = easeInBounce;
exports.easeInOutBounce = easeInOutBounce;

/**
 * Rate functions. From https://easings.net
 * all Functions accept input from 0 to 1 and return output between 0 to 1
 */
const c1 = 1.70158;
const c2 = c1 * 1.525;
const c3 = c1 + 1;
const c4 = 2 * Math.PI / 3;
const c5 = 2 * Math.PI / 4.5;

function easeOutBounce(x) {
  const n1 = 7.5625;
  const d1 = 2.75;

  if (x < 1 / d1) {
    return n1 * x * x;
  } else if (x < 2 / d1) {
    return n1 * (x -= 1.5 / d1) * x + 0.75;
  } else if (x < 2.5 / d1) {
    return n1 * (x -= 2.25 / d1) * x + 0.9375;
  } else {
    return n1 * (x -= 2.625 / d1) * x + 0.984375;
  }
}

function linear(x) {
  return x;
}

function easeInQuad(x) {
  return x ** 2;
}

function easeOutQuad(x) {
  return 1 - (1 - x) * (1 - x);
}

function easeInOutQuad(x) {
  return x < 0.5 ? 2 * x ** 2 : 1 - Math.pow(-2 * x + 2, 2) / 2;
}

function easeInCubic(x) {
  return x ** 3;
}

function easeOutCubic(x) {
  return 1 - (1 - x) ** 3;
}

function easeInOutCubic(x) {
  return x < 0.5 ? 4 * x ** 3 : 1 - Math.pow(-2 * x + 2, 3) / 2;
}

function easeInQuart(x) {
  return x ** 4;
}

function easeOutQuart(x) {
  return 1 - Math.pow(1 - x, 4);
}

function easeInOutQuart(x) {
  return x < 0.5 ? 8 * x ** 4 : 1 - Math.pow(-2 * x + 2, 4) / 2;
}

function easeInQuint(x) {
  return x ** 5;
}

function easeOutQuint(x) {
  return 1 - (1 - x) ** 5;
}

function easeInOutQuint(x) {
  return x < 0.5 ? 16 * x ** 5 : 1 - Math.pow(-2 * x + 2, 5) / 2;
}

function easeInSine(x) {
  return 1 - Math.cos(x * Math.PI / 2);
}

function easeOutSine(x) {
  return Math.sin(x * Math.PI / 2);
}

function easeInOutSine(x) {
  return -(Math.cos(Math.PI * x) - 1) / 2;
}

function easeInExpo(x) {
  return x === 0 ? 0 : Math.pow(2, 10 * x - 10);
}

function easeOutExpo(x) {
  return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
}

function easeInOutExpo(x) {
  return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? Math.pow(2, 20 * x - 10) / 2 : (2 - Math.pow(2, -20 * x + 10)) / 2;
}

function easeInCirc(x) {
  return 1 - Math.sqrt(1 - Math.pow(x, 2));
}

function easeOutCirc(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 2));
}

function easeInOutCirc(x) {
  return x < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * x, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * x + 2, 2)) + 1) / 2;
}

function easeInBack(x) {
  return c3 * x ** 3 - c1 * x ** 2;
}

function easeOutBack(x) {
  return 1 + c3 * (x - 1) ** 3 + c1 * (x - 1) ** 2;
}

function easeInOutBack(x) {
  return x < 0.5 ? Math.pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2) / 2 : (Math.pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;
}

function easeInElastic(x) {
  return x === 0 ? 0 : x === 1 ? 1 : -Math.pow(2, 10 * x - 10) * Math.sin((x * 10 - 10.75) * c4);
}

function easeOutElastic(x) {
  return x === 0 ? 0 : x === 1 ? 1 : Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1;
}

function easeInOutElastic(x) {
  return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? -(Math.pow(2, 20 * x - 10) * Math.sin((20 * x - 11.125) * c5)) / 2 : Math.pow(2, -20 * x + 10) * Math.sin((20 * x - 11.125) * c5) / 2 + 1;
}

function easeInBounce(x) {
  return 1 - easeOutBounce(1 - x);
}

function easeInOutBounce(x) {
  return x < 0.5 ? (1 - easeOutBounce(1 - 2 * x)) / 2 : (1 + easeOutBounce(2 * x - 1)) / 2;
}

},{}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrow = arrow;
exports.arrowTip = arrowTip;
exports.doubleArrow = doubleArrow;
exports.measurement = measurement;
exports.curvedArrow = curvedArrow;
exports.curvedDoubleArrow = curvedDoubleArrow;
exports.curvedArrowBetweenPoints = curvedArrowBetweenPoints;
exports.curvedDoubleArrowBetweenPoints = curvedDoubleArrowBetweenPoints;

var _colors = require("../constants/colors.js");

var _drawing = require("../constants/drawing.js");

var _main = require("../main.js");

var _points = require("../math/points.js");

var _utils = require("../utils.js");

var _settings = require("../settings.js");

var _text = require("./text.js");

const DEFAULT_TIP_WIDTH = 15;
/**
 * Draws a arrow tip
 *
 * @param {number} x1 x position of start point
 * @param {number} y1 y position of start point
 * @param {number} x2 x position of end point
 * @param {number} y2 y position of end point
 * @param {number} width width of tip
 * @param {number} height height of tip
 */

function arrowTip(x1, y1, x2, y2, width, height) {
  var ctx = _main.C.workingCanvas;
  var thickness = ctx.lineWidth;
  var distance = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
  if (isNaN(width)) width = distance;
  height = height || width / 1.3;
  var w = width - distance;
  var r = Math.sqrt(w ** 2 + (height / 2) ** 2);
  var t = Math.atan(height / (w * 2));
  if (distance > width) t = t + Math.PI;
  var angleFromXAxis = Math.atan2(y2 - y1, x2 - x1);
  var A = [x1 - Math.cos(t + angleFromXAxis) * r, y1 - Math.sin(t + angleFromXAxis) * r];
  var B = [x1 - Math.cos(-t + angleFromXAxis) * r, y1 - Math.sin(-t + angleFromXAxis) * r];

  if (ctx.doStroke && ctx.lineJoin != _drawing.BEVEL) {
    // correcting tip
    x2 -= Math.cos(angleFromXAxis) * thickness;
    y2 -= Math.sin(angleFromXAxis) * thickness;
  }

  ctx.save();
  if (!ctx.pathStarted) ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(A[0], A[1]);
  ctx.lineTo(x2, y2);
  ctx.lineTo(B[0], B[1]);
  ctx.lineTo(x1, y1);

  if (!ctx.pathStarted) {
    (0, _utils.doFillAndStroke)(ctx);
    ctx.closePath();
  }

  ctx.restore();
}
/**
 * draws a arrow
 *
 * @param {number} x1 starting x-axis coord
 * @param {number} y1 starting y-axis coord
 * @param {number} x2 ending x-axis coord
 * @param {number} y2 ending y-axis coord
 * @param {number} tipWidth width of tip
 * @param {number} tipHeight height of tip
 * @param {number} [arrowCurving = 0] worping of arrow
 * @param {number} [spacing = 0] padding from end to tip
 *
 */


function arrow(x1, y1, x2, y2, tipWidth = DEFAULT_TIP_WIDTH, tipHeight = tipWidth / 1.3, arrowCurving = 0, spacing = 0) {
  const angle = Math.atan2(y2 - y1, x2 - x1); // angle from plain

  const yDiff = Math.sin(angle) * spacing;
  const xDiff = Math.cos(angle) * spacing; // decrease the length of tip by `spacing`

  x2 -= xDiff;
  y2 -= yDiff;
  const xTipSpacing = Math.cos(angle) * (tipWidth - arrowCurving);
  const yTipSpacing = Math.sin(angle) * (tipWidth - arrowCurving);
  const ctx = _main.C.workingCanvas;
  const pathStarted = ctx.pathStarted;
  if (!pathStarted) (0, _settings.startShape)();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2 - xTipSpacing, y2 - yTipSpacing);
  ctx.stroke();
  arrowTip(x2 - xTipSpacing, y2 - yTipSpacing, x2, y2, tipWidth, tipHeight);

  if (!pathStarted) {
    (0, _utils.doFillAndStroke)(ctx);
    (0, _settings.endShape)();
  }
}
/**
 * Draws a double tipped arrow
 *
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @param {number} [tipWidth=10]
 * @param {number} [tipHeight=0.6]
 * @param {number} [arrowCurving = 0]
 * @param {number} [spacing=0]
 */


function doubleArrow(x1, y1, x2, y2, tipWidth = DEFAULT_TIP_WIDTH, tipHeight = tipWidth / 1.3, arrowCurving = 0, spacing = 0) {
  const angle = Math.atan2(y2 - y1, x2 - x1);
  const xPadding = Math.cos(angle) * (tipWidth - arrowCurving);
  const yPadding = Math.sin(angle) * (tipWidth - arrowCurving);
  const ySpacing = Math.sin(angle) * spacing;
  const xSpacing = Math.cos(angle) * spacing;
  (0, _settings.startShape)();
  x1 += xPadding + xSpacing;
  y1 += yPadding + ySpacing;
  arrow(x1, y1, x2, y2, tipWidth, tipHeight, arrowCurving, spacing);
  arrowTip(x1, y1, x1 - xPadding, y1 - yPadding, tipWidth, tipHeight);
  (0, _utils.doFillAndStroke)(_main.C.workingCanvas);
  (0, _settings.endShape)();
}
/**
 * Draws a double tipped arrow with text in the middle
 *
 * @param {object} configs parameters.
 * Possible values:
 * * {string} text* : text
 * * {array} p1* : first point
 * * {array} p2* : second point
 * * {number} [tipWidth=10] : tip width
 * * {number} [tipScaleRatio=0.6] : tipScaleRatio
 * * {number} [spacing=0] : spacing
 * * {string|number} [background] : background of text
 * * {number} [innerPadding] : padding of text
 * * {number} [outerPadding] : tip spacing
 * * {number} [textRotation] : rotatioin of text
 * * {number} [arrowCurving] : worping of arrow
 *
 * NOTE: '*' indicate mandatory properties
 */


function measurement(configs) {
  const ctx = _main.C.workingCanvas;
  const defaults = {
    background: _colors.TRANSPARENT,
    tipWidth: DEFAULT_TIP_WIDTH,
    tipHeight: DEFAULT_TIP_WIDTH / 1.3,
    innerPadding: 3,
    outerPadding: 0,
    textRotation: 0,
    arrowCurving: 0
  };
  configs = (0, _utils.applyDefault)(defaults, configs);
  const {
    p1,
    p2
  } = configs;
  const angleFromXAxis = Math.atan2(p2[1] - p1[1], p2[0] - p1[0]);
  const {
    width
  } = ctx.measureText(configs.text);
  const innerPadding = [Math.cos(angleFromXAxis) * (configs.innerPadding + width / 2), Math.sin(angleFromXAxis) * (configs.innerPadding + width / 2)];
  const center = [(p1[0] + p2[0]) / 2, (p1[1] + p2[1]) / 2]; // draw arrows

  arrow(center[0] - innerPadding[0], center[1] - innerPadding[1], p1[0], p1[1], configs.tipWidth, configs.tipHeight, configs.arrowCurving, configs.outerPadding);
  arrow(center[0] + innerPadding[0], center[1] + innerPadding[1], p2[0], p2[1], configs.tipWidth, configs.tipHeight, configs.arrowCurving, configs.outerPadding);
  (0, _settings.save)();
  ctx.translate(center[0], center[1]);
  ctx.textAlign = _drawing.CENTER;
  ctx.textBaseline = _drawing.MIDDLE;
  ctx.rotate(Math.atan2(p2[1] - p1[1], p2[0] - p1[0]) + configs.textRotation);
  (0, _text.fillText)(configs.text, 0, 0);
  (0, _settings.restore)();
}
/**
 * Draws a curved arrow that wrap around a circle.
 *
 * @param {number} x x position of circle
 * @param {number} y y position of circle
 * @param {number} radius radius of circle
 * @param {number} [angle=Math.PI / 2] central angle of arc
 * @param {number} [startAngle=0] starting angle
 * @param {number} [tipWidth=DEFAULT_TIP_WIDTH] width of tip
 * @param {number} [tipHeight=tipWidth / 1.3] height of tip
 * @param {number} [arrowCurving=0] arrow curving constant
 * @param {number} [tipOffset=10] offset (padding) of tip from it's defined end
 * @param {boolean} [reverse=false] whether to reverse the direction of arrow
 */


function curvedArrow(x, y, radius, angle = Math.PI / 2, startAngle = 0, tipWidth = DEFAULT_TIP_WIDTH, tipHeight = tipWidth / 1.3, arrowCurving = 0, tipOffset = 0, reverse = false) {
  const ctx = _main.C.workingCanvas;
  const tipAngularDiameter = tipWidth / radius;
  ctx.save();
  arrowCurving /= radius;
  var padding = tipAngularDiameter - arrowCurving;
  ctx.beginPath();

  if (reverse) {
    padding += tipOffset;
    ctx.arc(x, y, radius, padding + startAngle, angle + startAngle);
    ctx.stroke();
    ctx.closePath();
    arrowTip(x + radius * Math.cos(startAngle + padding), y + radius * Math.sin(startAngle + padding), x + radius * Math.cos(startAngle + tipOffset), y + radius * Math.sin(startAngle + tipOffset), tipWidth, tipHeight);
  } else {
    angle -= tipOffset;
    ctx.arc(x, y, radius, startAngle, angle - padding + startAngle);
    ctx.stroke();
    ctx.closePath();
    arrowTip(x + radius * Math.cos(startAngle + angle - padding), y + radius * Math.sin(startAngle + angle - padding), x + radius * Math.cos(startAngle + angle), y + radius * Math.sin(startAngle + angle), tipWidth, tipHeight);
  }

  ctx.restore();
}
/**
 * Draws a curved arrow with two tips.
 *
 * @param {number} x x position of circle
 * @param {number} y y position of circle
 * @param {number} radius radius of circle
 * @param {number} [angle=Math.PI / 2] central angle of arrow in radians
 * @param {number} [startAngle=0] start angle of arrow in radians
 * @param {number} [tipWidth=DEFAULT_TIP_WIDTH] width of arrow tip
 * @param {number} [tipHeight=tipWidth / 1.3] height of arrow tip
 * @param {number} [arrowCurving=0] curving of arrow
 * @param {number} [tipOffset=0] angular offset of arrow from radial boundaries in radians.
 */


function curvedDoubleArrow(x, y, radius, angle = Math.PI / 2, startAngle = 0, tipWidth = DEFAULT_TIP_WIDTH, tipHeight = tipWidth / 1.3, arrowCurving = 0, tipOffset = 0) {
  const ctx = _main.C.workingCanvas;
  ctx.save();
  const tipAngularDiameter = tipWidth / radius;
  const tangent = [-Math.cos(startAngle + tipAngularDiameter / 2 + Math.PI / 2), -Math.sin(startAngle + tipAngularDiameter / 2 + Math.PI / 2)];
  angle -= tipAngularDiameter;
  startAngle += tipAngularDiameter + tipOffset * 2;
  curvedArrow(x, y, radius, angle + arrowCurving / radius, startAngle - arrowCurving / radius, tipWidth, tipHeight, arrowCurving, tipOffset);
  arrowTip(Math.cos(startAngle - arrowCurving / radius) * radius, Math.sin(startAngle - arrowCurving / radius) * radius, Math.cos(startAngle) * radius + tipWidth * tangent[0], Math.sin(startAngle) * radius + tipWidth * tangent[1], tipWidth, tipHeight);
  ctx.restore();
}
/**
 * Draws a curved arrow between two points that wraps around a circle with a definite radius.
 *
 * @param {array} p1 start point
 * @param {array} p2 end point
 * @param {number} radius radius of circle
 * @param {number} [tipWidth=DEFAULT_TIP_WIDTH] width of tip
 * @param {number} [tipHeight=tipWidth / 1.3] height of tip
 * @param {number} [arrowCurving=0] arrow curving const. Expressed in pixels
 * @param {number} [tipOffset=0] offset (padding) of tip from it's defined end. Expressed in radians
 * @param {boolean} [otherArc=false] whether to use other arc
 * @param {boolean} [reverse=false] whether to reverse the direction of arrow.
 * @return {array} coordiante of the center of arc as [x, y]
 */


function curvedArrowBetweenPoints(p1, p2, radius, tipWidth = DEFAULT_TIP_WIDTH, tipHeight = tipWidth / 1.3, arrowCurving = 0, tipOffset = 0, otherArc = false, reverse = false) {
  const ctx = _main.C.workingCanvas;
  const pathStarted = ctx.pathStarted;
  ctx.save();
  if (!pathStarted) ctx.beginPath();
  const center = (0, _points.circleIntersection)(p1, radius, p2, radius)[0];
  p1[0] -= center[0];
  p1[1] -= center[1];
  p2[0] -= center[0];
  p2[1] -= center[1];
  const p1Angle = Math.atan2(p1[1], p1[0]);
  const p2Angle = Math.atan2(p2[1], p2[0]);
  var angleBetweenPoints, startAngle;

  if (otherArc) {
    startAngle = p1Angle;
    angleBetweenPoints = p2Angle - p1Angle;
  } else {
    startAngle = p2Angle;
    angleBetweenPoints = p1Angle - p2Angle;
  }

  curvedArrow(center[0], center[1], radius, angleBetweenPoints, startAngle, tipWidth, tipHeight, arrowCurving, tipOffset, reverse);
  if (!pathStarted) ctx.closePath();
  ctx.restore();
  return center;
}
/**
 * Draws a double tipped curved arrow between two points that wraps around a circle with a definite radius.
 *
 * @param {array} p1 start point
 * @param {array} p2 end point
 * @param {number} radius radius of circle
 * @param {number} [tipWidth=DEFAULT_TIP_WIDTH] width of tip
 * @param {number} [tipHeight=tipWidth / 1.3] height of tip
 * @param {number} [arrowCurving=0] arrow curving const. Expressed in pixels
 * @param {number} [tipOffset=0] offset (padding) of tip from it's defined. Expressed in radians
 * @param {boolean} [otherArc=false] whether to use other arc
 * @return {array} coordiante of the center of arc as [x, y]
 */


function curvedDoubleArrowBetweenPoints(p1, p2, radius, tipWidth = DEFAULT_TIP_WIDTH, tipHeight = tipWidth / 1.3, arrowCurving = 0, tipOffset = 0, otherArc = false) {
  const ctx = _main.C.workingCanvas;
  ctx.save();
  const center = (0, _points.circleIntersection)(p1, radius, p2, radius)[0];
  p1[0] -= center[0];
  p1[1] -= center[1];
  p2[0] -= center[0];
  p2[1] -= center[1];
  const tipAngularDiameter = tipWidth / radius;
  const p1Angle = Math.atan2(p1[1], p1[0]);
  const p2Angle = Math.atan2(p2[1], p2[0]) + tipAngularDiameter;
  var angleBetweenPoints, startAngle;

  if (otherArc) {
    startAngle = p1Angle;
    angleBetweenPoints = p2Angle - p1Angle;
  } else {
    startAngle = p2Angle;
    angleBetweenPoints = p1Angle - p2Angle;
  }

  arrowCurving /= radius;
  curvedArrow(center[0], center[1], radius, angleBetweenPoints + arrowCurving - tipOffset, startAngle - arrowCurving + tipOffset, tipWidth, tipHeight, arrowCurving * radius, tipOffset);
  var padding = tipAngularDiameter - arrowCurving + tipOffset;
  startAngle -= tipAngularDiameter;
  arrowTip(center[0] + radius * Math.cos(startAngle + padding), center[1] + radius * Math.sin(startAngle + padding), center[0] + radius * Math.cos(startAngle + tipOffset), center[1] + radius * Math.sin(startAngle + tipOffset), tipWidth, tipHeight);
  ctx.restore();
  return center;
}

},{"../constants/colors.js":7,"../constants/drawing.js":8,"../main.js":10,"../math/points.js":13,"../settings.js":24,"../utils.js":25,"./text.js":23}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.curlyBrace = curlyBrace;
exports.arcBrace = arcBrace;

var _main = require("../main.js");

/**
 * Draws a curly brace
 * Code adapted from http://bl.ocks.org/alexhornbake/6005176
 *
 * @param {number} x1 x-axis coord of starting point
 * @param {number} y1 y-axis coord of starting point
 * @param {number} x2 x-axis coord of ending point
 * @param {number} y2 y-axis coord of ending point
 * @param {number} [size=30] outward size of brace
 * @param {number} [curviness=0.6] curviness of brace. '0' doesn't make flat brace
 * @param {number} [taleLength=0.8] length of tale proportional to size \ length
 */
function curlyBrace(x1, y1, x2, y2, size = 20, curviness = 0.6, taleLength = 0.8) {
  //Calculate unit vector
  var dx = x1 - x2;
  var dy = y1 - y2;
  var len = Math.sqrt(dx * dx + dy * dy);
  dx /= len;
  dy /= len; //Calculate Control Points of path,

  const cp1x = x1 + curviness * size * dy;
  const cp1y = y1 - curviness * size * dx;
  const cp2x = x1 - 0.25 * len * dx + (1 - curviness) * size * dy;
  const cp2y = y1 - 0.25 * len * dy - (1 - curviness) * size * dx;
  const middleTipX = x1 - 0.5 * len * dx + size * dy * taleLength;
  const middleTipY = y1 - 0.5 * len * dy - size * dx * taleLength;
  const cp3x = x2 + curviness * size * dy;
  const cp3y = y2 - curviness * size * dx;
  const cp4x = x1 - 0.75 * len * dx + (1 - curviness) * size * dy;
  const cp4y = y1 - 0.75 * len * dy - (1 - curviness) * size * dx;
  const path = `M ${x1} ${y1} ` + `Q ${cp1x} ${cp1y} ${cp2x} ${cp2y} ` + `T ${middleTipX} ${middleTipY} ` + `M ${x2} ${y2} ` + `Q ${cp3x} ${cp3y} ${cp4x} ${cp4y} ` + `T ${middleTipX} ${middleTipY}`;

  _main.C.workingCanvas.stroke(new Path2D(path));

  return [middleTipX, middleTipY];
}
/**
 * Draws a brace that wraps a circle. Returns the coordinate of middle tip extended by a certain amound.
 *
 * @param {number} x x-axis coord
 * @param {number} y y-axis coord
 * @param {number} [radius=100] radius of circle
 * @param {number} [startAngle=0] starting angle
 * @param {number} [angle=Math.PI / 2] central angle
 * @param {number} [smallerLineLength=10] length of small tips at the ends of brace
 * @param {number} [tipLineLength=smallerLineLength] length of middle tip
 * @param {number} [extender=5] how much the coordinate of middle tip should be extended.
 * @return {array} array of two numbers that are the coordinate of middle tip extended by a certain value.
 */


function arcBrace(x, y, radius = 100, angle = Math.PI / 2, startAngle = 0, smallerLineLength = 10, tipLineLength = smallerLineLength, extender = 10) {
  const ctx = _main.C.workingCanvas,
        smallerRadius = radius - smallerLineLength,
        largerRadius = radius + tipLineLength;
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(startAngle);
  ctx.beginPath();
  ctx.moveTo(radius, 0); // first smaller line

  ctx.lineTo(smallerRadius, 0); // The arc

  ctx.arc(0, 0, radius, 0, angle); // second smaller line

  ctx.lineTo(smallerRadius * Math.cos(angle), smallerRadius * Math.sin(angle)); // tip line

  ctx.moveTo(radius * Math.cos(angle / 2), radius * Math.sin(angle / 2));
  ctx.lineTo(largerRadius * Math.cos(angle / 2), largerRadius * Math.sin(angle / 2));
  ctx.stroke();
  ctx.closePath();
  ctx.restore();
  return [(largerRadius + extender) * Math.cos(angle / 2 + startAngle) + x, (largerRadius + extender) * Math.sin(angle / 2 + startAngle) + y];
}

},{"../main.js":10}],18:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.axes = axes;
exports.numberLine = numberLine;
exports.numberPlane = numberPlane;

var _colors = require("../constants/colors.js");

var _main = require("../main.js");

var _utils = require("../utils.js");

var _arrows = require("./arrows.js");

var _functions = require("./functions.js");

var _geometry = require("./geometry.js");

var _settings = require("../settings.js");

var _text = require("./text.js");

function getPlotterList(unitLength, unitValue, cfgs = {}) {
  return {
    getParametricFunction: function (configs) {
      configs.unitLength = unitLength;
      configs.unitValue = unitValue;
      return (0, _functions.parametricFunction)(configs);
    },
    getFunctionGraph: function (configs) {
      configs.unitLength = unitLength;
      configs.unitValue = unitValue;
      return (0, _functions.functionGraph)(configs);
    },
    getHeatPlot: function (configs) {
      configs.unitLength = unitLength;
      configs.unitValue = unitValue;
      configs.min = [cfgs.xAxis.range[0], cfgs.yAxis.range[0]];
      configs.max = [cfgs.xAxis.range[1], cfgs.yAxis.range[1]];
      return (0, _functions.heatPlot)(configs);
    }
  };
}
/**
 * Creates a axes.
 * @param {Object} config
 * Possible configurations are:
 *
 * * xAxis  <object>         : Configurations for x axis. (See {@link numberLine} for more configurations)
 * * yAxis  <object>         : Configurations for y axis. (See {@link numberLine} for more configurations)
 * * center <array> [[0, 0]] : center of axes
 *
 * @returns {object} object that contains following properties:
 * * xAxis                 <object>   : x axis confiurations from numberLine (See {@link numberLine} for those configurations).
 * * yAxis                 <object>   : y axis confiurations from numberLine (See {@link numberLine} for those configurations).
 * * unitValue             <array>    : How much a unit is in its value in x and y directions.
 * * unitLength            <array>    : How much a unit is in px in x and y directions.
 * * getParametricFunction <function> : Draws a parametric function whose unit sizing are predefined by the axes. see {@link parametricFunction} to see possible configurations.
 * * getFunctionGraph      <function> : Draws a function graph whose unit sizing are predefined by the axes. see {@link functionGraph} to see possible configurations.
 */


function axes(config = {}) {
  const ctx = _main.C.workingCanvas; // default configurations

  const defaultConfigs = {
    xAxis: {
      length: ctx.width,
      textDirection: [-0.3, -1],
      includeTick: true,
      includeLeftTip: true,
      includeRightTip: true,
      excludeOriginTick: true,
      includeNumbers: false,
      range: [-10, 10, 1]
    },
    yAxis: {
      length: ctx.height,
      rotation: Math.PI / 2,
      textRotation: -Math.PI / 2,
      textDirection: [-0.3, 0.5],
      includeTick: true,
      includeLeftTip: true,
      includeRightTip: true,
      excludeOriginTick: true,
      includeNumbers: false,
      range: [-10, 10, 1]
    }
  }; // configurations

  config = (0, _utils.applyDefault)(defaultConfigs, config);
  const {
    xAxis,
    yAxis
  } = config; // other configurations

  const center = config.center || [0, 0]; // range of ticks in each axis

  const xRange = xAxis.range;
  const yRange = yAxis.range; // unit length of each axis
  // got by dividing length of axis by number of ticks

  const xDX = xAxis.length / ((xRange[1] - xRange[0]) / xRange[2]);
  const yDX = yAxis.length / ((yRange[1] - yRange[0]) / yRange[2]); // coordinates of bounding rectangle of the graph

  const xMin = xRange[0] / xRange[2] * xDX;
  const yMin = yRange[0] / yRange[2] * yDX; // variables to shift 0 ticks of axes to center

  const xShift = xAxis.length / 2 + xMin;
  const yShift = yAxis.length / 2 + yMin;
  ctx.save(); // translate to center

  ctx.translate(center[0], center[1]); // draws axes
  // x-axis

  ctx.translate(xShift, 0);
  const xAxisLine = numberLine(xAxis); // draw x axis
  // reverse the effect of shift for drawing y-axis

  ctx.translate(-xShift, yShift); // y-axis

  const yAxisLine = numberLine(yAxis); // draw y axis
  // size of a unit cell

  const unitLength = [xAxisLine.unitLength, yAxisLine.unitLength];
  const unitValue = [xAxisLine.unitValue, yAxisLine.unitValue]; // reverse the effect of overall shift

  ctx.translate(-center[0], -center[1] - yShift);
  ctx.restore();
  const ret = {
    center: center,
    // center of axis as [x, y] in px
    xAxis: xAxisLine,
    // x axis confiurations from numberLine
    yAxis: yAxisLine,
    // y axis confiurations from numberLine
    unitValue: unitValue,
    // how much a unit is as [x, y] in its value
    unitLength: unitLength // how much a unit is as [x, y] in px

  };
  return Object.assign(ret, getPlotterList(unitLength, unitValue, ret));
}
/**
 * Creates a numberLine with parameters in a object
 * @param {object} config
 * Possible properties:
 *
 * * point1                    <array>   ([-ctx.width / 2, 0]): starting point of line
 * * point2                    <array>   ([ctx.width / 2, 0]) : ending point of line
 * * range                     <array>   ([-5, 5, 1])         : range of numbers to draw ticks and numbers
 * * numbersToInclude          <array>   ([])                 : list of numbers to be displayed
 * * numbersToExclude          <array>   ([])                 : list of numbers that shouldn't be displayed
 * * numbersWithElongatedTicks <array>   ([])               : list of numbers where tick line should be longer
 * * textDirection             <array>   (0, -0.8)          : Direction of text relative to nearby tick
 * * includeLeftTip            <boolean> (false)            : whether to add an arrow tip at left
 * * includeRightTip           <boolean> (false)            : whether to add an arrow tip at right
 * * includeTick               <boolean> (true)             : Whether ticks should be added
 * * excludeOriginTick         <boolean> (false)            : Whether exclude ticks at origin
 * * tipWidth                  <number>  (20)               : width of arrow tip in px
 * * tipHeight                 <number>  (1)                : height/width of tip
 * * lineWidth                 <number>  (32)               : Width of lines in px
 * * longerTickMultiple        <number>  (2)                : Factor to increase height of ticks at elongated ticks
 * * tickHeight                <number>  (15)               : Height of ticks in px
 * * textSize                  <number>  (17)               : Font size of text
 * * textRotation              <number>  (0)                : Amount to rotate text
 * * decimalPlaces             <number>  (#decimals in step): Number of decimal places in text
 * * color                     <string>  (GREY)             : Color of axis and ticks
 * * textColor                 <string>  (WHITE)            : Color of text
 *
 * @returns {object} configurations about the number line
 *
 * * center     <array>: Center of the number line in px
 * * tickList   <array>: List of tick inervals
 * * unitValue  <array>: How much a unit is in its value in x and y directions.
 * * unitLength <array>: How much a unit is in px in x and y directions.
 */


function numberLine(config = {}) {
  const ctx = _main.C.workingCanvas;
  const defaultConfigs = {
    rotation: 0,
    lineWidth: 2,
    tipWidth: 13,
    textSize: 17,
    tipHeight: 10,
    tickHeight: 10,
    textRotation: 0,
    length: ctx.width,
    longerTickMultiple: 1.5,
    center: [0, 0],
    range: [-5, 5, 1],
    numbersToInclude: [],
    numbersToExclude: [],
    textDirection: [-0.3, -1],
    numbersWithElongatedTicks: [],
    includeTick: true,
    includeNumbers: true,
    includeLeftTip: false,
    includeRightTip: false,
    excludeOriginTick: false,
    color: _colors.GREY,
    textColor: _colors.WHITE
  };
  config = (0, _utils.applyDefault)(defaultConfigs, config);
  const {
    color,
    center,
    rotation,
    tipWidth,
    textSize,
    lineWidth,
    tipHeight,
    length: lineLength,
    tickHeight,
    textRotation,
    textDirection,
    includeLeftTip,
    includeRightTip,
    numbersToExclude,
    numbersToInclude,
    excludeOriginTick,
    longerTickMultiple,
    numbersWithElongatedTicks
  } = config;
  var {
    range,
    decimalPlaces
  } = config;

  if (Array.isArray(range) && range.length === 2) {
    range = [range[0], range[1], 1];
  } // if number of decimal places is not defined
  // find it using `step`


  if (isNaN(decimalPlaces)) {
    decimalPlaces = (range[2].toString().split(".")[1] || []).length || 0;
  }

  const min = range[0];
  const max = range[1];
  const step = range[2];
  const totalTicks = (max - min) / step;
  const ds = lineLength / totalTicks;
  const list = getTickList();
  (0, _settings.save)();
  (0, _settings.translate)(center[0], center[1]);
  (0, _settings.rotate)(rotation);
  (0, _settings.translate)(-lineLength / 2, 0);
  if (config.includeTick) drawTicks();
  if (config.includeNumbers) drawNumbers();
  (0, _settings.translate)(lineLength / 2, 0);
  drawAxis();

  function drawAxis() {
    (0, _settings.stroke)(color);
    ctx.lineWidth = lineWidth;
    (0, _settings.fill)(color);
    const r = Math.atan(tipHeight / 2);
    let x1 = -lineLength / 2;
    let x2 = lineLength / 2;

    if (includeLeftTip) {
      (0, _arrows.arrowTip)(x1 + tipWidth, 0, x1, 0, tipWidth, tipHeight);
      x1 += tipWidth * Math.cos(r);
    }

    if (includeRightTip) {
      (0, _arrows.arrowTip)(x2 - tipWidth, 0, x2, 0, tipWidth, tipHeight);
      x2 -= tipWidth * Math.cos(r) * 1;
    }

    (0, _geometry.line)(x1, 0, x2, 0);
  }

  function drawTicks() {
    (0, _settings.stroke)(color);
    ctx.lineWidth = lineWidth;
    const from = includeLeftTip ? 1 : 0;
    const to = includeRightTip ? list.length - 1 : list.length;

    for (let i = from; i < to && numbersToExclude.indexOf(list[0][i]) < 0; i++) {
      const tick = list[i];
      if (Number(tick) === 0 && excludeOriginTick) continue;
      let TH = tickHeight;

      if (numbersWithElongatedTicks.indexOf(tick) > -1) {
        TH *= longerTickMultiple;
      }

      (0, _geometry.line)(ds * i, -TH / 2, ds * i, TH / 2);
    }
  }

  function drawNumbers() {
    const numbers = numbersToInclude.length > 0 ? numbersToInclude : list;
    (0, _settings.fill)(config.textColor);
    (0, _settings.fontSize)(textSize);
    const yShift = -textSize / 3 * Math.cos(textRotation) + textDirection[1] * textSize;
    const from = includeLeftTip ? 1 : 0;
    const to = includeRightTip ? numbers.length - 1 : numbers.length;

    for (let i = from; i < to && numbersToExclude.indexOf(numbers[i]) < 0; i++) {
      const tick = numbers[i].toFixed(decimalPlaces);
      if (Number(tick) === 0 && excludeOriginTick) continue;
      const width = ctx.measureText(tick).width;
      const xShift = -width / 2 * Math.cos(textRotation) + textDirection[0] * textSize + textSize / 2 * Math.sin(textRotation);
      (0, _settings.translate)(ds * i + xShift, yShift - width * Math.sin(textRotation));
      (0, _settings.rotate)(textRotation);
      (0, _text.fillText)(tick, 0, 0);
      (0, _settings.rotate)(-textRotation);
      (0, _settings.translate)(-(ds * i + xShift), -(yShift - width * Math.sin(textRotation)));
    }
  }

  function getTickList() {
    return (0, _utils.arange)(min, max, step);
  }

  (0, _settings.restore)();
  return {
    range: range,
    center: center,
    tickList: list,
    unitValue: step,
    unitLength: ds
  };
}
/**
 * Creates a numberPlane based on following parameters inside a Object
 * @param {Object} config
 * Possible parameters:
 *
 * * xAxis  <object>: Configurations for x axis. See {@link numberLine} for possible configurations.
 * * yAxis  <object>: Configurations for y axis. See {@link numberLine} for possible configurations.
 * * center <array> : Center of number plane as [x, y] in px.
 * * grid   <object>: Set of styles to draw grid & subgrids. This can have following properties:
 *   * lineWidth        <number> (1)          : stroke width of grid lines
 *   * subgrids         <number> (0)          : number of sub-grid division to draw
 *   * subgridLineWidth <number> (0.7)        : stroke width of sub-grid
 *   * color            <string> ("#58c4dda0"): color of grid lines
 *   * subgridLineColor <string> ("#888888a0"): color of sub-grids
 * @returns {Object} configurations of number plane. Those are :
 *
 * * center                <array>   : Center of number plane as [x, y] in px.
 * * unitValue             <array>   : How much a unit is in its value in x and y directions.
 * * unitLength            <array>   : How much a unit is in px in x and y directions.
 * * subgridUnit           <array>   : How much a sub-grid is in px in x and y directions.
 * * xAxis                 <object>  : x axis confiurations from numberLine (See {@link numberLine} for those configurations).
 * * yAxis                 <object>  : y axis confiurations from numberLine (See {@link numberLine} for those configurations).
 * * getParametricFunction <function>: Draws a parametric function whose unit sizing are predefined by the axes. see {@link parametricFunction} to see possible configurations.
 * * getFunctionGraph      <function>: Draws a function graph whose unit sizing are predefined by the axes. see {@link functionGraph} to see possible configurations.
 */


function numberPlane(config = {}) {
  const ctx = _main.C.workingCanvas; // default configurations

  const defaultConfigs = {
    xAxis: {
      length: ctx.width,
      range: [-5, 5, 1],
      textDirection: [-0.2, 1.3],
      includeTick: true,
      includeNumbers: true,
      includeLeftTip: false,
      includeRightTip: false,
      excludeOriginTick: true
    },
    yAxis: {
      length: ctx.height,
      textRotation: -Math.PI / 2,
      range: [-5, 5, 1],
      textDirection: [1.1, 0.6],
      includeTick: true,
      includeNumbers: true,
      includeLeftTip: false,
      includeRightTip: false,
      excludeOriginTick: true
    },
    grid: {
      subgrids: 1,
      lineWidth: 1,
      subgridLineWidth: 0.7,
      color: _colors.BLUE + "a0",
      subgridLineColor: _colors.GREY + "50"
    },
    center: [0, 0]
  }; // configurations

  config = (0, _utils.applyDefault)(defaultConfigs, config);
  const {
    xAxis,
    yAxis,
    grid
  } = config; // other configurations

  const subgrids = grid.subgrids;
  const center = config.center; // range of ticks in each axis

  const xRange = xAxis.range;
  const yRange = yAxis.range; // number of ticks in each

  const xNums = (xRange[1] - xRange[0]) / xRange[2];
  const yNums = (yRange[1] - yRange[0]) / yRange[2]; // unit length of each axis

  const xDX = xAxis.length / xNums;
  const yDX = yAxis.length / yNums; // coordinates of bounding rectangle of the graph

  const xMin = xRange[0] / xRange[2] * xDX;
  const xMax = xRange[1] / xRange[2] * xDX;
  const yMin = yRange[0] / yRange[2] * yDX;
  const yMax = yRange[1] / yRange[2] * yDX; // variables to shift 0 ticks of axes to center

  const xShift = xAxis.length / 2 + xMin;
  const yShift = yAxis.length / 2 + yMin; // size of a subgrid unit cell

  const subgridUnit = [xDX / subgrids, yDX / subgrids];
  (0, _settings.save)(); // translate to center

  (0, _settings.translate)(center[0] + xShift, center[1]); // draw grids

  drawGridLines(); // draws axes

  const axesLines = axes({
    xAxis: xAxis,
    yAxis: yAxis
  }); // size of a unit cell

  const unitLength = axesLines.unitLength;
  const unitValue = axesLines.unitValue; // reverse the effect of overall shift

  (0, _settings.translate)(-(center[0] + xShift), -center[1] - yShift);

  function drawGridLines() {
    // major grid lines
    (0, _settings.translate)(xMin, 0);
    const subgridxDX = subgridUnit[0];
    const subgridyDX = subgridUnit[1]; // horizontal grid lines

    for (let i = 0; i <= xNums; i++) {
      // draw major grid lines
      drawMajor(i * xDX, // x - shift
      0, // y - shift
      0, yMin, 0, yMax); // draw subgrid grid lines

      for (let k = 1; k <= subgrids && i < xNums; k++) {
        drawMinor(k * subgridxDX, yMin, k * subgridxDX, yMax);
      }

      (0, _settings.translate)(-i * xDX);
    }

    (0, _settings.translate)(-xMin, yMin); // vertical grid lines

    for (let i = 0; i <= yNums; i++) {
      // draw major grid lines
      drawMajor(0, // x - shift
      i * yDX, // y - shift
      xMin, 0, xMax, 0); // draw subgrid grid lines

      for (let k = 1; k <= subgrids && i < yNums; k++) {
        drawMinor(xMin, k * subgridyDX, xMax, k * subgridyDX);
      }

      (0, _settings.translate)(0, -i * yDX);
    }

    (0, _settings.translate)(0, -yMin);

    function drawMajor(shiftX, shiftY, x1, y1, x2, y2) {
      (0, _settings.translate)(shiftX, shiftY);
      (0, _settings.strokeWidth)(grid.lineWidth);
      (0, _settings.stroke)(grid.color);
      (0, _geometry.line)(x1, y1, x2, y2);
    }

    function drawMinor(x1, y1, x2, y2) {
      (0, _settings.strokeWidth)(grid.subgridLineWidth);
      (0, _settings.stroke)(grid.subgridLineColor);
      (0, _geometry.line)(x1, y1, x2, y2);
    }
  }

  (0, _settings.restore)();
  const ret = {
    center: center,
    // center of number plane
    unitValue: unitValue,
    // how much a unit is in its value
    unitLength: unitLength,
    // how much a unit is in px
    xAxis: axesLines.xAxis,
    // x axis confiurations from numberLine
    yAxis: axesLines.yAxis,
    // y axis confiurations from numberLine
    subgridUnit: subgridUnit // subgrid unit size

  };
  return Object.assign(ret, getPlotterList(unitLength, unitValue, ret));
}

},{"../constants/colors.js":7,"../main.js":10,"../settings.js":24,"../utils.js":25,"./arrows.js":16,"./functions.js":19,"./geometry.js":20,"./text.js":23}],19:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parametricFunction = parametricFunction;
exports.functionGraph = functionGraph;
exports.heatPlot = heatPlot;

var _color_reader = require("../color/color_reader.js");

var _colors = require("../constants/colors.js");

var _main = require("../main.js");

var _rate_functions = require("../math/rate_functions.js");

var _settings = require("../settings.js");

var _utils = require("../utils.js");

var _geometry = require("./geometry.js");

/**
 * Draws a parametric functions
 * This accept parameters as object.
 * @param {object} config configuration object
 * It can have following properties:
 *
 * * paramFunction   <function>               : function to plot. Must recieve one argument and return a array of point as [x, y]
 * * range           <array>    ([0, 10, 0.1]): Range as [min, max, dt]
 * * smoothen        <boolean>  (true)        : Whether to smoothen the shape.
 * * tension         <number>   (1)           : Smoothness tension.
 * * discontinuities <array>    ([])          : Array of t where the curve discontinues.
 * * closed          <boolean>  (false)       : Whether the function draws a closed shape.
 * * unitValue       <array>    ([1, 1])      : Value of each unit space
 * * unitLength      <array>    ([1, 1])      : Length of each unit in pixels
 * * draw            <boolean>  (true)        : Wheteher to draw the function graph right now.
 *
 * @returns {object} object that contains following properties:
 *
 * * points  <array>    : Array of computed points in the function
 * * draw    <function> : Function that draws the plot
 * * animate <function> : Function that animates the drawing of the shape. Accept argument `duration` which is the duration of animation.
 */
function parametricFunction(config) {
  const defaultConfigs = {
    tension: 1,
    unitValue: [1, 1],
    unitLength: [1, 1],
    // length of each unit in pixels
    range: [0, 10, 0.1],
    discontinuities: [],
    smoothen: true,
    closed: false,
    draw: true
  };
  config = (0, _utils.applyDefault)(defaultConfigs, config);
  var {
    paramFunction,
    range,
    smoothen,
    tension,
    discontinuities,
    closed
  } = config;
  if (Array.isArray(range) && range.length == 2) range.push((range[1] - range[0]) / 20);
  var points = [[]];
  const min = range[0];
  const max = range[1];
  const step = range[2];
  if (!Array.isArray(discontinuities)) discontinuities = []; // generate points

  var epsilon = 1e-6;
  if (step < epsilon) epsilon = step / 2;
  var row = 0;
  const unitX = config.unitLength[0] / config.unitValue[0],
        unitY = config.unitLength[1] / config.unitValue[1];

  for (var t = min; t <= max + epsilon; t += step) {
    if ((0, _utils.approximateIndexInArray)(t, discontinuities, epsilon) > -1) {
      if ((0, _utils.approximateIndexInArray)(t + step, discontinuities, epsilon) > -1) {
        row++;
        points.push([]);
      }

      continue;
    }

    let ft = paramFunction(t);
    points[row].push([ft[0] * unitX, ft[1] * unitY]);
  } // draw the plot


  if (config.draw) plot();

  function plot() {
    const ctx = _main.C.workingCanvas;

    for (let i = 0; i < points.length; i++) {
      var p = points[i];

      if (smoothen) {
        (0, _geometry.smoothCurveThroughPoints)(p, tension, closed);
      } else {
        ctx.beginPath();
        ctx.moveTo(p[0][0], p[0][1]);

        for (let j = 1; j < p.length; j++) {
          ctx.lineTo(p[j][0], p[j][1]);
        }

        ctx.closePath();
        (0, _utils.doFillAndStroke)(ctx);
      }
    }
  }

  return {
    points: points,
    draw: plot,
    animate: function (duration = 2000) {
      const ctx = _main.C.workingCanvas;
      var noPoints = points.flat().length;
      var dt = duration / noPoints;

      for (let i = 0; i < points.length; i++) {
        var p = points[i];
        var j = 0;

        if (smoothen) {
          (0, _settings.loop)(() => {
            if (j >= p.length - 2) {
              (0, _settings.noLoop)();
              ctx.closePath();
              if (ctx.doFill) this.draw();
            }

            var recentPoint = j > 0 ? p[j - 1] : closed ? p[p.length - 2] : p[0];
            var currentPoint = p[j];
            var nextPoint = p[j + 1];
            var secondNextPoint = j != p.length - 2 ? p[j + 2] : closed ? p[1] : nextPoint;
            j++;
            var cp = (0, _geometry.getBezierControlPoints)(recentPoint, currentPoint, nextPoint, secondNextPoint);
            ctx.beginPath();
            ctx.moveTo(currentPoint[0], currentPoint[1]);
            ctx.bezierCurveTo(cp[0], cp[1], cp[2], cp[3], nextPoint[0], nextPoint[1]);
            ctx.stroke();
          }, ctx.name, dt);
        } else {
          (0, _settings.loop)(() => {
            if (j >= p.length - 2) {
              (0, _settings.noLoop)();
              if (ctx.doFill) this.draw();
            }

            var p1 = p[j],
                p2 = p[++j];
            (0, _geometry.line)(p1[0], p1[1], p2[0], p2[1]);
          }, ctx.name, dt);
        }
      }
    }
  };
}
/**
 * Draws graph of funciton
 * See {@link parametricFunction} For arguments
 */


function functionGraph(config) {
  const paramFunction = config.paramFunction;

  config.paramFunction = x => [x, paramFunction(x)];

  return parametricFunction(config);
}
/**
 * Draws a heat plot of given function. The function must take atleast 2 arguments and return a number.
 * More precisely f: ℜ² → ℜ
 * All parameters should be enclosed in a object.
 * @param {object} config
 * Possible parameters are:
 *
 * * min          <array>   ([-4, -4]): minimum point
 * * max          <array>   ([4, 4])  : maximum point
 * * colors       <object>            : object of color map
 * * unitValue    <array>   ([1, 1])  : Value of each unit space
 * * unitLength   <array>   ([1, 1])  : Length of each unit in pixels
 * * resolution   <number>  (1)       : resolution of plot
 * * interpolator <function> (linear) : function to interpolate color.
 * @return {object} metadatas
 */


function heatPlot(config) {
  const defaultConfigs = {
    min: [-4, -4],
    max: [4, 4],
    colors: {
      "-4": _colors.BLUE,
      0: _colors.YELLOW,
      4: _colors.RED
    },
    unitLength: [1, 1],
    unitValue: [1, 1],
    resolution: 1,
    interpolator: _rate_functions.linear
  };
  config = (0, _utils.applyDefault)(defaultConfigs, config);
  const {
    min,
    max,
    colors,
    resolution,
    plotFunction,
    interpolator
  } = config;
  const ctx = _main.C.workingCanvas;
  const unitSizeX = config.unitLength[0] / config.unitValue[0];
  const unitSizeY = config.unitLength[1] / config.unitValue[1];
  const UVX = config.unitValue[0] / unitSizeX;
  const UVY = config.unitValue[1] / unitSizeY;
  const stopes = Object.keys(colors).sort(); // converting colors to rgba array

  for (var i = 0; i < stopes.length; i++) {
    colors[stopes[i]] = (0, _color_reader.readColor)([colors[stopes[i]]], true);
  }

  const minS = Math.min(...stopes);
  const maxS = Math.max(...stopes); // const w = (max[0] - min[0]) / (resolution * UVX);
  // const h = (max[1] - min[1]) / (resolution * UVY);

  ctx.save(); // const img = ctx.createImageData(w, h);
  // console.log(img.data);

  for (var x = min[0]; x <= max[0]; x += resolution * UVX) {
    for (var y = min[1]; y <= max[1]; y += resolution * UVY) {
      let c = lerpColorArray(plotFunction(x, y));
      ctx.fillStyle = c;
      ctx.fillRect(x * unitSizeX, y * unitSizeY, resolution, resolution); // img.data[]
    }
  } // ctx.putImageData(img, 0, 0);


  function lerpColorArray(v) {
    if (v >= maxS) return "rgba(" + colors[maxS].join() + ")";
    if (v <= minS) return "rgba(" + colors[minS].join() + ")";

    for (var i = 0; i < stopes.length - 1; i++) {
      let a = stopes[i],
          b = stopes[i + 1],
          c1 = colors[a],
          c2 = colors[b],
          k = interpolator((v - a) / (b - a));

      if (v >= a && v < b) {
        return "rgba(" + [(c2[0] - c1[0]) * k + c1[0], (c2[1] - c1[1]) * k + c1[1], (c2[2] - c1[2]) * k + c1[2], (c2[3] - c1[3]) * k + c1[3]].join() + ")";
      }
    }
  }

  ctx.restore();
  return {
    min: minS,
    max: maxS,
    colors: colors
  };
}

},{"../color/color_reader.js":3,"../constants/colors.js":7,"../main.js":10,"../math/rate_functions.js":15,"../settings.js":24,"../utils.js":25,"./geometry.js":20}],20:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arc = arc;
exports.circle = circle;
exports.ellipse = ellipse;
exports.bezier = bezier;
exports.point = point;
exports.sector = sector;
exports.circularSegment = circularSegment;
exports.smoothCurveThroughPointsTo = smoothCurveThroughPointsTo;
exports.smoothCurveThroughPoints = smoothCurveThroughPoints;
exports.quadraticCurve = quadraticCurve;
exports.annulus = annulus;
exports.annulusSector = annulusSector;
exports.angle = angle;
exports.arcBetweenPoints = arcBetweenPoints;
exports.line = line;
exports.rect = rect;
exports.polygon = polygon;
exports.square = square;
exports.quad = quad;
exports.triangle = triangle;
exports.equiTriangle = equiTriangle;
exports.regularPolygon = regularPolygon;
exports.regularPolygonWithRadius = regularPolygonWithRadius;
exports.polygonWithRatioOfCentralAngles = polygonWithRatioOfCentralAngles;
exports.getBezierControlPoints = getBezierControlPoints;

var _main = require("../main.js");

var _points = require("../math/points.js");

var _utils = require("../utils.js");

/**
 * Functions for drawing various shapes
 */

/**
 * Adds a circular arc to the current shape if {@link startShape} was called.
 * If not it will draw a new arc.
 *
 * @param {number} x The x-axis coordinate of the arc's center.
 * @param {number} y The y-axis coordinate of the arc's center.
 * @param {number} r arc's radius (must be positive)
 * @param {number} [angle=PI/2] central angle (use negative values to rotate arc clockwise)
 * @param {number} [startAngle=0] The angle at which the arc starts in radians, measured from the positive x-axis.
 */
function arc(x, y, r, angle = Math.PI / 2, startAngle = 0) {
  const ctx = _main.C.workingCanvas;
  if (!ctx.pathStarted) ctx.beginPath();
  ctx.arc(x, y, r, startAngle, startAngle + angle);
  if (!ctx.pathStarted) (0, _utils.doFillAndStroke)(ctx);
}
/**
 * Draws a point with given size in pixels
 *
 * @param {number} x center x
 * @param {number} y center y
 * @param {number} [size=10] diameter of point in px
 * @param {boolean} [doStroke=false] whether to stroke or not
 */


function point(x, y, size = 10, doStroke = false) {
  const ctx = _main.C.workingCanvas;
  ctx.beginPath();
  ctx.arc(x, y, size / 2, 0, Math.PI * 2);
  ctx.fill();
  if (doStroke) ctx.stroke();
  ctx.closePath();
}
/**
 * Draws a circular segment.
 *
 * @param {number} x x-axis coordinate of center of circular sector
 * @param {number} y y-axis coordinate of center of circular sector
 * @param {number} r radius of the circular sector
 * @param {number} [angle=Math.PI / 2] central angle
 * @param {number} [startAngle=0] The angle at which the arc starts in radians, measured from the positive x-axis.
 */


function circularSegment(x, y, r, angle = Math.PI / 2, startAngle = 0) {
  const ctx = _main.C.workingCanvas;
  if (!ctx.pathStarted) ctx.beginPath();
  ctx.arc(x, y, r, startAngle, startAngle + angle);
  if (!ctx.pathStarted) (0, _utils.doFillAndStroke)(ctx);
}
/**
 * Draws circle
 *
 * @param {number} x x-coord
 * @param {number} y y-coord
 * @param {number} r radius
 */


function circle(x, y, r) {
  const ctx = _main.C.workingCanvas;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  (0, _utils.doFillAndStroke)(ctx);
}
/**
 * Adds an elliptical arc to the current shape if {@link startShape} was called.
 * If not it will draw a new ellipse.
 *
 * @param {number} x x-axis coordinate of ellipse's center
 * @param {number} y y-axis coordinate of ellipse's center
 * @param {number} radius1 ellipse's major-axis radius. Must be non-negative.
 * @param {number} radius2 ellipse's minor-axis radius. Must be non-negative.
 * @param {number} [rotation=0] The rotation of the ellipse, expressed in radians.
 * @param {number} [startAngle=0] The angle at which the ellipse starts, measured clockwise from the positive x-axis and expressed in radians.
 * @param {number} [angle=Math.PI * 2] central angle of ellipse. Use negative values to rotate it anticlockwise
 */


function ellipse(x, y, radius1, radius2, rotation = 0, startAngle = 0, angle = Math.PI * 2) {
  const ctx = _main.C.workingCanvas;
  if (!ctx.pathStarted) ctx.beginPath();
  ctx.ellipse(x, y, radius1, radius2, rotation, startAngle, startAngle + angle);
  if (!ctx.pathStarted) (0, _utils.doFillAndStroke)(ctx);
}
/**
 * Adds a bézie curve to current shape if {@link startShape} was called.
 * If not it will draw a new bézie curve.
 *
 * @param {number} cpx1 x-axis coord of first control point
 * @param {number} cpy1 y-axis coord of first control point
 * @param {number} cpx2 x-axis coord of second control point
 * @param {number} cpy2 y-axis coord of second control point
 * @param {number} x3 x-axis coord of the end point
 * @param {number} y3 y-axis coord of the end point
 */


function bezier(cpx1, cpy1, cpx2, cpy2, x3, y3) {
  const ctx = _main.C.workingCanvas;
  const pathStarted = ctx.pathStarted;
  if (!pathStarted) ctx.beginPath();
  ctx.bezierCurveTo(cpx1, cpy1, cpx2, cpy2, x3, y3);
  if (!ctx.pathStarted) (0, _utils.doFillAndStroke)(ctx);
}
/**
 * Draws a sector
 *
 * @param {number} x center x
 * @param {number} y center y
 * @param {number} radius radius of sector
 * @param {number} [angle=PI/2] central angle (use negative angle to move sector clockwise)
 * @param {number} [startAngle=0] The angle at which the arc starts in radians, measured from the positive x-axis.
 */


function sector(x, y, radius, angle = Math.PI / 2, startAngle = 0) {
  const ctx = _main.C.workingCanvas;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.arc(x, y, radius, startAngle, startAngle + angle);
  ctx.lineTo(x, y);
  (0, _utils.doFillAndStroke)(ctx);
}
/**
 * Returns bēzier control points that passes smoothly through given points.
 *
 * @param {array} recentPoint previous point
 * @param {array} currentPoint
 * @param {array} nextPoint
 * @param {array} secondNextPoint
 * @param {number} [tension=1]
 * @return {array} two control points as [cp1x, cp1y, cp2x, cp2y]
 */


function getBezierControlPoints(recentPoint, currentPoint, nextPoint, secondNextPoint, tension = 1) {
  return [currentPoint[0] + (nextPoint[0] - recentPoint[0]) / 6 * tension, currentPoint[1] + (nextPoint[1] - recentPoint[1]) / 6 * tension, nextPoint[0] - (secondNextPoint[0] - currentPoint[0]) / 6 * tension, nextPoint[1] - (secondNextPoint[1] - currentPoint[1]) / 6 * tension];
}
/**
 * Adds a smooth curve passing through given points and tension using bézie curve to the current shape.
 * Taken from {@link https://stackoverflow.com/a/49371349}
 *
 * @param {array} points array of points as [x, y]
 * @param {number} tension tension of the curve
 */


function smoothCurveThroughPointsTo(points, tension = 1, closed = true) {
  for (var i = 0; i < points.length - 1; i++) {
    var recentPoint = i > 0 ? points[i - 1] : closed ? points[points.length - 2] : points[0];
    var currentPoint = points[i];
    var nextPoint = points[i + 1];
    var secondNextPoint = i != points.length - 2 ? points[i + 2] : closed ? points[1] : nextPoint;
    var cp = getBezierControlPoints(recentPoint, currentPoint, nextPoint, secondNextPoint, tension);

    _main.C.workingCanvas.bezierCurveTo(cp[0], cp[1], cp[2], cp[3], nextPoint[0], nextPoint[1]);
  }
}
/**
 * Draws smooth curve passing through given points and tension using bézie curve.
 *
 * @param {array} points array of points as [x, y]
 * @param {number} tension tension of the curve
 */


function smoothCurveThroughPoints(points, tension = 1, closed = true) {
  const ctx = _main.C.workingCanvas;
  ctx.beginPath();
  ctx.moveTo(points[0][0], points[0][1]);
  smoothCurveThroughPointsTo(points, tension, closed);
  ctx.closePath();
  (0, _utils.doFillAndStroke)(ctx);
}
/**
 * Adds a new quadratic curve to the current shape if the length of arguments is 4.
 * In that case
 * * 1st argument is x coordinate of the control point
 * * 2nd argument is y coordinate of the control point
 * * 3rd argument is x coordinate of the ending point
 * * 4th argument is y coordinate of the ending point
 *
 * If length of arguments is 6, it will draw a new curve.
 * * In that case
 * * 1st argument is x coordinate of starting point
 * * 2nd argument is y coordinate of starting point
 * * 3rd argument is x coordinate of the control point
 * * 4th argument is y coordinate of the control point
 * * 5th argument is x coordinate of the ending point
 * * 6th argument is y coordinate of the ending point
 * @global
 */


function quadraticCurve() {
  const ctx = _main.C.workingCanvas,
        args = arguments;

  if (args.length == 4) {
    ctx.quadraticCurveTo(args[0], args[1], args[2], args[3]);
  } else if (args.length == 6) {
    ctx.beginPath();
    ctx.moveTo(args[0], args[1]);
    ctx.quadraticCurveTo(args[2], args[3], args[4], args[5]);
    (0, _utils.doFillAndStroke)(ctx);
  }
}
/**
 * Draws a annulus (circle with hole in it).
 *
 * @param {number} x x-axis coord of center of the annulus.
 * @param {number} y y-axis coord of center of the annulus.
 * @param {number} innerRadius radius of the inner circle
 * @param {number} outerRadius radius of the outer circle
 */


function annulus(x, y, innerRadius, outerRadius) {
  const ctx = _main.C.workingCanvas;
  ctx.beginPath();
  ctx.arc(x, y, innerRadius, 0, 2 * Math.PI, false);
  ctx.moveTo(outerRadius, 0);
  ctx.arc(x, y, outerRadius, 0, 2 * Math.PI, true);
  (0, _utils.doFillAndStroke)(ctx);
}
/**
 * Draws a annulus sector.
 *
 * @param {number} x x-axis coord of center of the annulus sector.
 * @param {number} y y-axis coord of center of the annulus sector.
 * @param {number} innerRadius radius of the inner circle
 * @param {number} outerRadius radius of the outer circle
 * @param {number} angle central angle of the annulus sector
 * @param {number} startAngle The angle at which the sector starts in radians, measured from the positive x-axis.
 */


function annulusSector(x, y, innerRadius, outerRadius, angle, startAngle) {
  const ctx = _main.C.workingCanvas;
  ctx.beginPath();
  ctx.arc(x, y, innerRadius, startAngle, startAngle + angle, false);
  ctx.arc(x, y, outerRadius, startAngle + angle, startAngle, true);
  (0, _utils.doFillAndStroke)(ctx);
}
/**
 * Angle between two lines. And returns the coordinate of middle of angle
 *
 * @param {array} p1 start point of first line array of point as [x, y]
 * @param {array} p2 end point of first line array of point as [x, y]
 * @param {array} p3 start point of second line array of point as [x, y]
 * @param {array} p4 end point of second line array of point as [x, y]
 * @param {number} radius radius of angle
 * @param {number} extender extender of output point
 * @param {boolean} otherAngle whether to draw the other angle
 * @param {number} angleDir there can be four angle in a line intersection. Choose a number from 1 to 4.
 * @returns {array} coordinate of point in the middle of angle as array of point as [x, y]
 */


function angle(p1, p2, p3, p4, radius = 20, extender = 10, otherAngle = false, angleDir = 1) {
  const [x, y] = (0, _points.lineIntersection)(p1, p2, p3, p4);

  if (!(isNaN(x) || isNaN(y))) {
    var ang,
        startAngle,
        a1 = Math.atan2(p1[1] - y, p1[0] - x),
        a2 = Math.atan2(p2[1] - y, p2[0] - x),
        a3 = Math.atan2(p3[1] - y, p3[0] - x),
        a4 = Math.atan2(p4[1] - y, p4[0] - x);
    var angleDirs = {
      1: [a2, a4],
      2: [a4, a1],
      3: [a1, a3],
      4: [a3, a2]
    },
        dir = angleDirs[angleDir];

    if (otherAngle) {
      startAngle = dir[1];
      ang = dir[0] - dir[1];
    } else {
      startAngle = dir[0];
      ang = dir[1] - dir[0];
    }

    const ctx = _main.C.workingCanvas;

    if (ctx.doFill) {
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.arc(x, y, radius, startAngle, ang + startAngle);
      ctx.fill();
      ctx.closePath();
    }

    if (ctx.doStroke) {
      ctx.beginPath();
      ctx.arc(x, y, radius, startAngle, ang + startAngle);
      ctx.stroke();
      ctx.closePath();
    }

    return {
      center: [x + (radius + extender) * Math.cos(startAngle + ang / 2), y + (radius + extender) * Math.sin(startAngle + ang / 2)],
      ang: ang
    };
  } else {
    // TODO: should it be `throw Error()`?
    console.error("No intersection point");
  }
}
/**
 * Creates a circular arc using the given control points and radius.
 * If a current path started it will add this to the end of path.
 * Returns the center of arc.
 *
 * @param {number} x1 x-coord of first point
 * @param {number} y1 y-coord of first point
 * @param {number} x2 x-coord of second point
 * @param {number} y2 y-coord of second point
 * @param {number} radius radius of arc
 * @param {boolean} otherArc specifies whether to use other arc of the circle.
 * @returns {array} returns the coordinate of center of the arc as [x, y]
 */


function arcBetweenPoints(x1, y1, x2, y2, radius, otherArc = false) {
  if (x1 == x2 && y1 == y2) // TODO: should it be `throw Error()`?
    console.error("Can't draw a arc between points. Given points are exactly same");
  var center = (0, _points.circleIntersection)([x1, y1], radius, [x2, y2], radius)[0];
  const ctx = _main.C.workingCanvas;
  const angleFromXAxis = Math.atan2(y1 - center[1], x1 - center[0]);
  const centralAngle = Math.atan2(y2 - center[1], x2 - center[0]) - angleFromXAxis;

  if (!ctx.pathStarted) {
    ctx.save();
    ctx.beginPath();
  }

  ctx.arc(center[0], center[1], radius, angleFromXAxis, centralAngle + angleFromXAxis, !otherArc);

  if (!ctx.pathStarted) {
    (0, _utils.doFillAndStroke)(ctx);
    ctx.restore();
  }

  return center;
}
/**
 * Draws a line
 *
 * @param {number} x1 start x coord
 * @param {number} y1 start y coord
 * @param {number} x2 end x coord
 * @param {number} y2 end y coord
 */


function line(x1, y1, x2, y2) {
  const ctx = _main.C.workingCanvas;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  ctx.closePath();
}
/**
 * Draws a rectangle
 *
 * @param {number} x x-coord
 * @param {number} y y-coord
 * @param {number} width widht
 * @param {number} height height
 */


function rect(x, y, width, height) {
  const ctx = _main.C.workingCanvas;
  ctx.beginPath();
  ctx.rect(x, y, width, height);
  if (ctx.doFill) ctx.fill();
  if (ctx.doStroke) ctx.stroke();
  ctx.closePath();
}
/**
 * Draws polygon with given points
 * @example
 * ```
 * polygon(
 * 	[0, 0], // first point
 * 	[100, 200], // second point
 * 	[130, 230], // third point
 * 	//...
 * )
 * ```
 */


function polygon() {
  const args = arguments;

  if (args.length > 2) {
    const ctx = _main.C.workingCanvas;
    const start = args[0];
    ctx.beginPath();
    ctx.moveTo(start[0], start[1]);

    for (let i = 1; i < args.length; i++) {
      ctx.lineTo(args[i][0], args[i][1]);
    }

    ctx.lineTo(start[0], start[1]);
    if (ctx.doFill) ctx.fill();
    if (ctx.doStroke) ctx.stroke();
    ctx.closePath();
  }
}
/**
 * Draws square
 *
 * @param {number} x x-coord
 * @param {number} y x-coord
 * @param {number} sideLength
 */


function square(x, y, sideLength) {
  rect(x, y, sideLength, sideLength);
}
/**
 * Draws quadrilateral with four points as array of coordinate as [x, y]
 *
 * @param {array} p1 1st point
 * @param {array} p2 2nd point
 * @param {array} p3 3rd point
 * @param {array} p4 4th point
 */


function quad(p1, p2, p3, p4) {
  const ctx = _main.C.workingCanvas;
  ctx.beginPath();
  ctx.moveTo(p1[0], p1[1]);
  ctx.lineTo(p2[0], p2[1]);
  ctx.lineTo(p3[0], p3[1]);
  ctx.lineTo(p4[0], p4[1]);
  ctx.lineTo(p1[0], p1[1]);
  if (ctx.doFill) ctx.fill();
  if (ctx.doStroke) ctx.stroke();
  ctx.closePath();
}
/**
 * Draws triangle with three points as array of coordinate as [x, y]
 *
 * @param {array} p1 first point
 * @param {array} p2 second point
 * @param {array} p3 third point
 */


function triangle(p1, p2, p3) {
  const ctx = _main.C.workingCanvas;
  ctx.beginPath();
  ctx.moveTo(p1[0], p1[1]);
  ctx.lineTo(p2[0], p2[1]);
  ctx.lineTo(p3[0], p3[1]);
  ctx.lineTo(p1[0], p1[1]);
  if (ctx.doFill) ctx.fill();
  if (ctx.doStroke) ctx.stroke();
  ctx.closePath();
}
/**
 * Draws equilateral triangle
 *
 * @param {number} x
 * @param {number} y
 * @param {number} sideLength length of side
 * @param {number} [rotation=0] amound to rotate the entire triangle
 */


function equiTriangle(x, y, sideLength, rotation = 0) {
  regularPolygon(x, y, 3, sideLength, rotation);
}
/**
 * Draws a regular polygon with centre position number of sides length of a side and rotation
 *
 * @param {number} x x position
 * @param {number} y y position
 * @param {number} sides number of sides
 * @param {number} sideLength length of a side
 * @param {number} [rotation=0] amound to rotate the entire polygon
 */


function regularPolygon(x, y, sides, sideLength, rotation = 0) {
  const radius = sideLength / (2 * Math.sin(Math.PI / sides)); // finds ex-radius

  regularPolygonWithRadius(x, y, sides, radius, rotation);
}
/**
 * Draws a regular polygon that is inside a circle
 *
 * @param {number} x x coord
 * @param {number} y y coord
 * @param {number} sides number of sides
 * @param {number} radius radius
 * @param {number} [rotation=0] amound to rotate the entire polygon
 */


function regularPolygonWithRadius(x, y, sides, radius, rotation = 0) {
  let i = 0;
  const e = Math.PI * 2 / sides;
  const ctx = _main.C.workingCanvas;
  rotation += e / 2;
  const initial = [Math.cos(rotation) * radius + x, Math.sin(rotation) * radius + y];
  ctx.beginPath();
  ctx.moveTo(initial[0], initial[1]);

  while (i++ < sides) {
    ctx.lineTo(Math.cos(i * e + rotation) * radius + x, Math.sin(i * e + rotation) * radius + y);
  }

  ctx.lineTo(initial[0], initial[1]);
  ctx.closePath();
  if (ctx.doFill) ctx.fill();
  if (ctx.doStroke) ctx.stroke();
}
/**
 * Draws a polygon with ratio of central angles
 *
 * @param {number} x x coord of centre of polygon
 * @param {number} y y coord of centre of polygon
 * @param {number} radius radius of ex-circle of polygon
 * @param {array} ratios array of ratios of central angles. Must have atleast 3 elements.
 * @param {number} [rotation=0] amound to rotate the entire polygon.
 */


function polygonWithRatioOfCentralAngles(x, y, radius, ratios, rotation = 0) {
  if (!Array.isArray(ratios)) console.error("ratio provided is not array");
  const sumOfRatio = ratios.reduce((a, b) => a + b, 0);
  const baseAngle = Math.PI * 2 / sumOfRatio;
  const ctx = _main.C.workingCanvas;
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rotation);
  ctx.beginPath();
  ctx.moveTo(radius, 0);

  for (let i = 0; i < ratios.length; i++) {
    ctx.rotate(baseAngle * ratios[i]);
    ctx.lineTo(radius, 0);
  }

  if (ctx.doStroke) ctx.stroke();
  if (ctx.doFill) ctx.fill();
  ctx.closePath();
  ctx.restore();
}

},{"../main.js":10,"../math/points.js":13,"../utils.js":25}],21:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.drawImage = drawImage;
exports.pixel = pixel;

var _main = require("../main.js");

var _color_reader = require("../color/color_reader.js");

/**
 * This module contains function for image manipulation.
 * @module image
 */

/**
 * Draws a given image in canvas.
 * See more about the parameters : {@link https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage}
 *
 */
function drawImage() {
  _main.C.workingCanvas.drawImage(...arguments);
}
/**
 * Draws a pixel
 *
 * @param {number} x x-coordinate of pixel
 * @param {number} y y-coordinate of pixel
 * @param {string} color color of pixel
 */


function pixel(x, y, color) {
  const ctx = _main.C.workingCanvas;
  ctx.fillStyle = color == undefined ? ctx.fillStyle : (0, _color_reader.readColor)(color);
  ctx.fillRect(x, y, 1, 1);
}

},{"../color/color_reader.js":3,"../main.js":10}],22:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tex = tex;
exports.getImageFromTex = getImageFromTex;

var _drawing = require("../constants/drawing.js");

var _main = require("../main.js");

/**
 * Renders the input tex into a HTMLImageElement
 *
 * @param {string} input
 * @return {HTMLImageElement}
 */
function getImageFromTex(input) {
  if (typeof window.MathJax == "object" && typeof window.MathJax.tex2svg == "function") {
    const ctx = _main.C.workingCanvas; // eslint-disable-next-line no-undef

    const svgOutput = MathJax.tex2svg(input).getElementsByTagName("svg")[0];
    const g = svgOutput.getElementsByTagName("g")[0];
    svgOutput.style.verticalAlign = "1ex";
    g.setAttribute("stroke", ctx.strokeStyle);
    g.setAttribute("fill", ctx.fillStyle);
    let outerHTML = svgOutput.outerHTML,
        blob = new Blob([outerHTML], {
      type: "image/svg+xml;charset=utf-8"
    });
    let URL = window.URL || window.webkitURL || window;
    let blobURL = URL.createObjectURL(blob);
    let image = new Image();
    image.src = blobURL;
    return image;
  } else {
    console.error("MathJax is not found. Please include it.");
  }
}
/**
 * Draws tex inputs
 *
 * @param {string} input
 * @param {number} [x=0]
 * @param {number} [y=0]
 * @return {HTMLImageElement} image representation of tex
 */


function tex(input, x = 0, y = 0) {
  const image = getImageFromTex(input);
  const ctx = _main.C.workingCanvas;
  const text_align = ctx.textAlign,
        text_baseline = ctx.textBaseline;

  image.onload = function () {
    ctx.save();
    const {
      width,
      height
    } = image; // translating the image according to text-align and text-baseline

    switch (text_align) {
      case _drawing.CENTER:
        ctx.translate(-width / 2, 0);
        break;

      case _drawing.RIGHT:
        ctx.translate(-width, 0);
        break;

      default:
        break;
    }

    switch (text_baseline) {
      case "middle":
        ctx.translate(0, height / 2);
        break;

      case "bottom":
        ctx.translate(0, height);
        break;

      default:
        break;
    } // invert axis first


    if (ctx.yAxisInverted) {
      ctx.scale(1, -1);
      y *= -1;
    }

    ctx.drawImage(image, x, y);
    ctx.restore();
  };

  return image;
}

},{"../constants/drawing.js":8,"../main.js":10}],23:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.text = text;
exports.fillText = fillText;
exports.strokeText = strokeText;

var _main = require("../main.js");

var _settings = require("../settings.js");

/**
 * This module contains functions for drawing different types of text.
 * @module text
 */

/**
 * Draws a filled & stroked text
 *
 * @param {string} text text to draw
 * @param {number} [x=0] x-coord
 * @param {number} [y=0] y-coord
 * @param {number} [maxwidth=undefined] maximum width
 */
function text(text, x = 0, y = 0, maxwidth = undefined) {
  const ctx = _main.C.workingCanvas;

  if (ctx.yAxisInverted) {
    // if inverted reverse it and invert y component
    (0, _settings.scale)(1, -1);
    y *= -1;
  }

  if (ctx.doFill) ctx.fillText(text, x, y, maxwidth);else if (ctx.doStroke) ctx.strokeText(text, x, y, maxwidth);
  if (ctx.yAxisInverted) (0, _settings.scale)(1, -1); // reverse y-invertion
}
/**
 * Draws a text without border
 *
 * @param {string} text text to draw
 * @param {number} x x-coord
 * @param {number} [y=x] y-coord
 * @param {number} [maxwidth=undefined] maximum width
 */


function fillText(text, x = 0, y = 0, maxwidth = undefined) {
  const ctx = _main.C.workingCanvas;

  if (ctx.yAxisInverted) {
    (0, _settings.scale)(1, -1);
    y *= -1;
  }

  ctx.fillText(text, x, y, maxwidth);
  if (ctx.yAxisInverted) (0, _settings.scale)(1, -1);
}
/**
 * Draws a stroked text
 *
 * @param {string} text text to draw
 * @param {number} x x-coord
 * @param {number} [y=x] y-coord
 * @param {number} [maxwidth=undefined] maximum width
 */


function strokeText(text, x = 0, y = 0, maxwidth = undefined) {
  const ctx = _main.C.workingCanvas;

  if (ctx.yAxisInverted) {
    (0, _settings.scale)(1, -1);
    y *= -1;
  }

  ctx.strokeText(text, x, y, maxwidth);
  if (ctx.yAxisInverted) (0, _settings.scale)(1, -1);
}

},{"../main.js":10,"../settings.js":24}],24:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.moveTo = moveTo;
exports.lineTo = lineTo;
exports.background = background;
exports.clear = clear;
exports.permaBackground = permaBackground;
exports.setTransform = setTransform;
exports.transform = transform;
exports.noFill = noFill;
exports.noStroke = noStroke;
exports.translate = translate;
exports.setImageSmoothing = setImageSmoothing;
exports.strokeWidth = strokeWidth;
exports.scale = scale;
exports.rotate = rotate;
exports.save = save;
exports.lineCap = lineCap;
exports.lineJoin = lineJoin;
exports.restore = restore;
exports.getFill = getFill;
exports.getStroke = getStroke;
exports.rest = rest;
exports.stroke = stroke;
exports.fill = fill;
exports.getContextStates = getContextStates;
exports.loop = loop;
exports.noLoop = noLoop;
exports.startShape = startShape;
exports.endShape = endShape;
exports.getFont = getFont;
exports.measureText = measureText;
exports.fontSize = fontSize;
exports.fontFamily = fontFamily;
exports.getCanvasData = getCanvasData;
exports.saveCanvas = saveCanvas;
exports.clearAll = clearAll;
exports.lineDash = lineDash;
exports.fontStyle = fontStyle;
exports.fontVariant = fontVariant;
exports.fontWeight = fontWeight;
exports.fontStretch = fontStretch;
exports.lineHeight = lineHeight;
exports.getTransform = getTransform;
exports.textAlign = textAlign;
exports.textBaseline = textBaseline;
exports.centerdText = centerdText;
exports.initCenteredCanvas = initCenteredCanvas;
exports.invertYAxis = invertYAxis;
exports.initBlackboardCanvas = initBlackboardCanvas;

var _main = require("./main.js");

var _color_reader = require("./color/color_reader.js");

/**
 * This module contains functions to manipulate the canvas.
 * @module settings
 */

/**
 * Begins a new shape at the point specified by the given (x, y) coordinates.
 *
 * @param {number} x
 * @param {number} y
 */
function moveTo(x, y) {
  _main.C.workingCanvas.moveTo(x, y);
}
/**
 * Adda a straight line to the current shape by connecting the shape's last point to the specified (x, y) coordinates.
 *
 * @param {number} x
 * @param {number} y
 */


function lineTo(x, y) {
  _main.C.workingCanvas.lineTo(x, y);
}
/**
 * Sets background to a given value
 *
 * Accepted values:
 * * a hex string (#fff, #acf2dc)
 * * a number (0 for rgb(0,0,0), 233 for rgb(233,233,233))
 * * a array of numbers ([0, 244, 34])
 */


function background() {
  const col = (0, _color_reader.readColor)(arguments),
        ctx = _main.C.workingCanvas;
  ctx.background = col;
  ctx.save();
  rest();
  ctx.fillStyle = col;
  ctx.fillRect(0, 0, ctx.width, ctx.height);
  ctx.restore();
}
/**
 * Erases the pixels in a rectangular area by setting them to transparent black
 * See {@link https://developer.mozilla.org/en-US/docs/Web/CSS/font-stretch} for more info
 *
 * @param {number} x x-axis coordinate of the rectangle's starting point.
 * @param {number} y y-axis coordinate of the rectangle's starting point.
 * @param {number} width Rectangle's width. Positive values are to the right, and negative values to the left.
 * @param {number} height Rectangle's height. positive values are down, and negative are up.
 */


function clear(x, y, width, height) {
  const ctx = _main.C.workingCanvas;
  x = x || 0;
  y = y || 0;
  width = width || ctx.width;
  height = height || ctx.height;
  ctx.clearRect(x, y, width, height);
}
/**
 * Erases entire canvas area by setting them to transparent black
 *
 */


function clearAll() {
  const ctx = _main.C.workingCanvas;
  const d = ctx.dpr;
  ctx.save();
  ctx.setTransform(d, 0, 0, d, 0, 0);
  ctx.clearRect(0, 0, ctx.width, ctx.height);
  ctx.restore();
}
/**
 * Captures the current drawings in canvas and set it to
 * css background
 *
 */


function permaBackground() {
  const canvasStyle = _main.C.workingCanvas.canvas.style;
  canvasStyle.background = "url('" + getCanvasData() + "')";
  canvasStyle.backgroundPosition = "center";
  canvasStyle.backgroundSize = "cover";
}
/**
 * Resets the current transformation to the identity matrix,
 * and then invokes a transformation described by given arguments.
 * Lets you scale, rotate, translate (move), and skew the canvas.
 * See {@link https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/transform} for more info
 *
 * @param {number|DOMMatrix} a Horizontal scaling. A value of 1 results in no scaling.
 *  this can be a `DOMMatrix` which can get by {@link getTransform} function
 * @param {number} b Vertical skewing
 * @param {number} c Horizontal skewing
 * @param {number} d Vertical scaling. A value of 1 results in no scaling
 * @param {number} e Horizontal translation
 * @param {number} f Vertical translation
 */


function setTransform(a, b, c, d, e, f) {
  const ctx = _main.C.workingCanvas;
  if (a instanceof DOMMatrix) ctx.setTransform(a);else ctx.setTransform(a, b, c, d, e, f);
  ctx.scale(ctx.dpr, ctx.dpr);
}
/**
 * Returns the current transform matrix
 *
 * @return {DOMMatrix}
 */


function getTransform() {
  return _main.C.workingCanvas.getTransform();
}
/**
 * multiplies the current transformation with the matrix described by the arguments
 * of this method. This lets you scale, rotate, translate (move), and skew the context.
 *
 * See {@link https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/transform} for more info
 *
 * @param {number|DOMMatrix} a Horizontal scaling. A value of 1 results in no scaling.
 *  this can be a `DOMMatrix` which can get by {@link getTransform} function
 * @param {number} b Vertical skewing
 * @param {number} c Horizontal skewing
 * @param {number} d Vertical scaling. A value of 1 results in no scaling
 * @param {number} e Horizontal translation
 * @param {number} f Vertical translation
 */


function transform(a, b, c, d, e, f) {
  const ctx = _main.C.workingCanvas;
  if (a instanceof DOMMatrix) ctx.transform(a);else ctx.transform(a, b, c, d, e, f);
}
/**
 * Prevent filling inside shapes
 *
 */


function noFill() {
  _main.C.workingCanvas.doFill = false;
}
/**
 * Prevent drawing strokes of shapes
 *
 */


function noStroke() {
  _main.C.workingCanvas.doStroke = false;
}
/**
 * Translates (moves) canvas to a position
 *
 * @param {number} x amound to translate along x-axis
 * @param {number} [y=0] amound to translate along y-axis
 */


function translate(x, y = 0) {
  _main.C.workingCanvas.translate(x, y);
}
/**
 * Sets whether to enable image smoothening
 *
 * @param {boolean} bool
 */


function setImageSmoothing(bool) {
  _main.C.workingCanvas.imageSmoothingEnabled = !!bool;
}
/**
 * Sets the stroke width (line width/line thickness)
 *
 * @param {number} w
 */


function strokeWidth(w) {
  _main.C.workingCanvas.lineWidth = Number(w);
}
/**
 * Scales the canvas by a given amount
 *
 * @param {number} x Scaling factor in the horizontal direction. A negative value flips pixels across
 *  the vertical axis. A value of 1 results in no horizontal scaling.
 * @param {number} [y=x] Scaling factor in the vertical direction. A negative value flips pixels across
 *  the horizontal axis. A value of 1 results in no vertical scaling.
 */


function scale(x, y = x) {
  _main.C.workingCanvas.scale(x, y);
}
/**
 * Rotates the canvas
 *
 * @param {number} angle The rotation angle, clockwise in radians. You can use degree * DEG to calculate a radian from a degree.
 */


function rotate(angle) {
  const ctx = _main.C.workingCanvas;
  ctx.rotate(angle);
  ctx.netRotation = (ctx.netRotation + angle) % Math.PI * 2;
}
/**
 * Saves the current state of canvas

 */


function save() {
  _main.C.savedStates = getContextStates();

  _main.C.workingCanvas.save();
}
/**
 * Set the type of line end
 * Options: BUTT, ROUND, SQUARE
 *
 * @param {string} capType
 */


function lineCap(capType) {
  _main.C.workingCanvas.lineCap = capType;
}
/**
 * Sets type of line joining
 * Options: BEVEL, ROUND, MITER
 *
 * @param {string} joinType
 */


function lineJoin(joinType) {
  _main.C.workingCanvas.lineJoin = joinType;
}
/**
 * Restore the saved state of canvas
 *
 */


function restore() {
  Object.assign(_main.C.workingCanvas, _main.C.savedStates);

  _main.C.workingCanvas.restore();
}
/**
 * Returns fill color/gradient
 *
 * @returns {string|CanvasGradient}
 */


function getFill() {
  return _main.C.workingCanvas.fillStyle;
}
/**
 * Returns stroke color/gradient
 *
 * @returns {string|CanvasGradient}
 */


function getStroke() {
  return _main.C.workingCanvas.strokeStyle;
}
/**
 * Reset the applied transform to idendity matrix and scales canvas by dpr
 *
 */


function rest() {
  const ctx = _main.C.workingCanvas;
  ctx.setTransform(ctx.dpr, 0, 0, ctx.dpr, 0, 0);
}
/**
 * Sets stroke color to a given value if value is given
 * else strokes the previous shape
 *
 * Accepted values:
 * * hex string (#fff, #acf2dc)
 * * number (0 for rgb(0,0,0), 233 for rgb(233,233,233))
 * * array of numbers ([0, 244, 34]). This gets converted into css color by the colorMode property
 *
 */


function stroke() {
  const ctx = _main.C.workingCanvas;

  if (arguments.length > 0) {
    ctx.strokeStyle = (0, _color_reader.readColor)(arguments);
    ctx.doStroke = true;
  } else {
    ctx.stroke();
  }
}
/**
 * Sets fill color to a given value if value is given
 * else fills the previous shape
 *
 * Accepted values:
 * * a hex string (#fff, #acf2dc)
 * * a number (0 for rgb(0,0,0), 233 for rgb(233,233,233))
 * * a array of numbers ([0, 244, 34]). This gets converted into css color by the colorMode property
 *
 */


function fill() {
  const ctx = _main.C.workingCanvas;

  if (arguments.length !== 0) {
    ctx.fillStyle = (0, _color_reader.readColor)(arguments);
    ctx.doFill = true;
  } else {
    ctx.fill();
  }
}
/**
 * Returns variables in workingCanvas
 *
 * @returns {Object}
 */


function getContextStates() {
  const ctx = _main.C.workingCanvas;
  return {
    background: ctx.background,
    colorMode: ctx.colorMode,
    strokeStyle: ctx.strokeStyle,
    fillStyle: ctx.fillStyle,
    lineWidth: ctx.lineWidth,
    doStroke: ctx.doStroke,
    doFill: ctx.doFill,
    pathStarted: ctx.pathStarted,
    yAxisInverted: ctx.yAxisInverted,
    netRotation: ctx.netRotation,
    currentLoop: ctx.currentLoop,
    fontStyle: ctx.fontStyle,
    fontVariant: ctx.fontVariant,
    fontWeight: ctx.fontWeight,
    fontStretch: ctx.fontStretch,
    fontSize: ctx.fontSize,
    lineHeight: ctx.lineHeight,
    fontFamily: ctx.fontFamily,
    font: ctx.font,
    textAlign: ctx.textAlign,
    textBaseline: ctx.textBaseline
  };
}
/**
 * Starts a new loop
 *
 * @param {function} functionToRun function which contains code to run
 * @param {string} canvasName name of canvas. It must be unique if you're running multiple animation at once
 * @param {number} timeDelay time delay between 2 frames. If given loop will execute with setInterval function.
 *  If not provided the loop will be run with requestAnimationFrame (this keeps a consistant frame rate between 40 to 50 FPS).
 * @param {number} [timeDelaysToRemember=10] number of time delays to remember.
 */


function loop(functionToRun, canvasName, timeDelay, timeDelaysToRemember = 100) {
  let ctx; // if canvasName isn't given it will assume the drawing context to be the current working canvas

  if (!canvasName) ctx = _main.C.workingCanvas;else ctx = _main.C.canvasList[canvasName];
  ctx.timeDelayList = [];
  ctx.totalTimeCaptured = 0;
  ctx.recentTimeStamp = window.performance.now();
  ctx.timeStart = window.performance.now();

  if (!isNaN(timeDelay)) {
    ctx.currentLoop = setInterval(function () {
      _main.C.workingCanvas = ctx;
      functionToRun(window.performance.now() - ctx.timeStart, getFPS());
    }, timeDelay);
  } else {
    run();
  }

  function run() {
    ctx.currentLoop = window.requestAnimationFrame(run);
    functionToRun(window.performance.now() - ctx.timeStart, getFPS());
  }

  function getFPS() {
    const now = window.performance.now();
    const timeDelay = now - ctx.recentTimeStamp; // time delays between frames

    ctx.recentTimeStamp = now;
    ctx.timeDelayList.push(timeDelay);
    ctx.totalTimeCaptured += timeDelay;
    if (ctx.timeDelayList.length > timeDelaysToRemember) ctx.totalTimeCaptured -= ctx.timeDelayList.shift();
    return ctx.timeDelayList.length / (ctx.totalTimeCaptured / 1000);
  }
}
/**
 * Stops current loop
 *
 * @param {string} canvasName name of the canvas given to {@link loop}
 */


function noLoop(canvasName) {
  let ctx = _main.C.workingCanvas;
  if (!canvasName) canvasName = ctx.name;else ctx = _main.C.canvasList[canvasName];
  clearInterval(ctx.currentLoop);
  window.cancelAnimationFrame(ctx.currentLoop);
}
/**
 * Starts a new Path
 *
 */


function startShape() {
  const ctx = _main.C.workingCanvas;
  ctx.beginPath();
  ctx.pathStarted = true;
}
/**
 * Ends current Path
 *
 */


function endShape() {
  const ctx = _main.C.workingCanvas;
  ctx.closePath();
  ctx.pathStarted = false;
}
/**
 * Return current font
 *
 * @param {boolean} detailed wheather to return a detailed font property
 * @returns {string}
 */


function getFont(detailed = false) {
  const ctx = _main.C.workingCanvas;

  if (detailed) {
    const {
      fontStyle,
      fontVariant,
      fontWeight,
      fontStretch,
      fontSize,
      lineHeight,
      fontFamily
    } = ctx;
    return `${fontStyle} ${fontVariant} ${fontWeight} ${fontStretch} ${fontSize}/${lineHeight} ${fontFamily}`;
  } else {
    return ctx.font;
  }
}
/**
 * Returns text metrics
 *
 * @param {string} text
 * @returns {TextMetrics}
 */


function measureText(text) {
  return _main.C.workingCanvas.measureText(text);
}
/**
 * Sets font size
 * See {@link https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/font} for more info.
 * @param {number|string} size
 * possible values:
 * * XX_SMALL
 * * X_SMALL
 * * SMALL
 * * MEDIUM
 * * LARGE
 * * X_LARGE
 * * XX_LARGE
 * * XXX_LARGE
 * * LARGER
 * * SMALLER
 */


function fontSize(size) {
  const ctx = _main.C.workingCanvas;
  size = typeof size === "number" ? size + "px" : size;
  ctx.fontSize = size;
  ctx.font = getFont(true);
}
/**
 * Sets font family
 *
 * @param {string} family
 */


function fontFamily(family) {
  const ctx = _main.C.workingCanvas;
  ctx.fontFamily = family;
  ctx.font = getFont(true);
}
/**
 * Sets font style
 *
 * @param {string} style
 * possible values:
 * * NORMAL
 * * ITALIC
 * * OBLIQUE [<angle>]
 */


function fontStyle(style) {
  const ctx = _main.C.workingCanvas;
  ctx.fontStyle = style;
  ctx.font = getFont(true);
}
/**
 * Sets font variant
 * See {@link https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant} for more info.
 *
 * @param {string} variant
 */


function fontVariant(variant) {
  const ctx = _main.C.workingCanvas;
  ctx.fontVariant = variant;
  ctx.font = getFont(true);
}
/**
 * Sets font weight
 * See {@link https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight} for more info.
 * @param {string} weight
 */


function fontWeight(weight) {
  const ctx = _main.C.workingCanvas;
  ctx.fontWeight = weight;
  ctx.font = getFont(true);
}
/**
 * Sets font stretch
 * See {@link https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/font} for more info.
 *
 *  @global
 * @param {string} stretch
 * possible values:
 * * ULTRA_CONDENSED
 * * EXTRA_CONDENSED
 * * CONDENSED
 * * SEMI_CONDENSED
 * * NORMAL
 * * SEMI_EXPANDED
 * * EXPANDED
 * * EXTRA_EXPANDED
 * * ULTRA_EXPANDED
 * * <percentage>
 */


function fontStretch(stretch) {
  const ctx = _main.C.workingCanvas;
  ctx.fontStretch = stretch;
  ctx.font = getFont(true);
}
/**
 * Sets line height
 * See {@link https://developer.mozilla.org/en-US/docs/Web/CSS/line-height} for more info.
 *
 * @param {string} height
 */


function lineHeight(height) {
  const ctx = _main.C.workingCanvas;
  ctx.lineHeight = height;
  ctx.font = getFont(true);
}
/**
 * Returns canvas image data
 *
 * @param {string} datURL
 * @returns {string}
 */


function getCanvasData(datURL = "image/png") {
  return _main.C.workingCanvas.canvas.toDataURL(datURL);
}
/**
 * Save the canvas as image
 *
 * @param {string} [name="drawing"] name of file
 * @param {string} [datURL="image/png"] type of file
 */


function saveCanvas(name = "drawing", datURL = "image/png") {
  const link = getCanvasData().replace(datURL, "image/octet-stream");
  const a = document.createElement("a");
  a.download = name + ".png";
  a.href = link;
  a.click();
}
/**
 * Sets the line dash
 * see {@link https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash} for more info
 *
 */


function lineDash() {
  _main.C.workingCanvas.setLineDash([...arguments]);
}
/**
 * Specifies the current text alignment used when drawing text.
 * The alignment is relative to the x value of the fillText/strokeText/text method.
 *
 * @param {string} align alignment type.
 * possible values:
 *  * "left" : The text is left-aligned.
 *  * "right" : The text is right-aligned.
 *  * "center" : The text is centered.
 *  * "start" : The text is aligned at the normal start of the line (left-aligned for left-to-right locales, right-aligned for right-to-left locales).
 *  * "end": The text is aligned at the normal end of the line (right-aligned for left-to-right locales, left-aligned for right-to-left locales).
 * NOTE: You can use constants LEFT, RIGHT, CENTER, START, and END for aligning
 */


function textAlign(align) {
  _main.C.workingCanvas.textAlign = align;
}
/**
 * Specifies the current text baseline used when drawing text.
 * The alignment is relative to the x value of the fillText/strokeText/text method.
 *
 * @param {string} baseline baseline type.
 * possible values:
 * * "top": The text baseline is the top of the em square.
 * * "hanging": The text baseline is the hanging baseline. (Used by Tibetan and other Indic scripts.)
 * * "middle": The text baseline is the middle of the em square.
 * * "alphabetic": The text baseline is the normal alphabetic baseline. Default value.
 * * "ideographic": The text baseline is the ideographic baseline; this is the bottom of the body of the characters, if the main body of characters protrudes beneath the alphabetic baseline. (Used by Chinese, Japanese, and Korean scripts.)
 * * "bottom": The text baseline is the bottom of the bounding box. This differs from the ideographic baseline in that the ideographic baseline doesn't consider descenders.
 * NOTE: You can use constants TOP, HANGING, MIDDLE, ALPHABETIC, IDEOGRAPHIC, BOTTOM for baseline
 */


function textBaseline(baseline) {
  _main.C.workingCanvas.textBaseline = baseline;
}
/**
 * Sets the text alignment to centered in x and y axes.
 *
 */


function centerdText() {
  textAlign("center");
  textBaseline("middle");
}
/**
 * initializes a canvas translated to center and y-axis inverted
 */


function initCenteredCanvas() {
  const ctx = _main.C.workingCanvas;
  ctx.translate(ctx.width / 2, ctx.height / 2);
}
/**
 * Inverts y-axis
 */


function invertYAxis() {
  const ctx = _main.C.workingCanvas;
  ctx.scale(1, -1);
  ctx.yAxisInverted = !ctx.yAxisInverted;
}
/**
 * Init a blackboard like canvas. Centerd to middle, with black background and y axis inverted
 */


function initBlackboardCanvas() {
  initCenteredCanvas();
  background(0);
  invertYAxis();
}

},{"./color/color_reader.js":3,"./main.js":10}],25:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defineProperties = defineProperties;
exports.arange = arange;
exports.applyDefault = applyDefault;
exports.doFillAndStroke = doFillAndStroke;
exports.approximateIndexInArray = approximateIndexInArray;

Object.getType = function (obj) {
  return Object.prototype.toString.call(obj).replace(/(\[object|\s|])/g, "");
};

Object.clone = Object.clone || function (toClone) {
  var newObj = {};

  for (var i = 0, keys = Object.keys(toClone); i < keys.length; i++) newObj[keys[i]] = toClone[keys[i]];

  return newObj;
};
/**
 * defines new properties to a given Object
 *
 * @param {object} obj source object
 * @param {object} [toAssign=window] target object
 * @param {boolean} [specific=true] whether to define properties special
 * @param {function} [message] message given on redefining value. Only works if `specific === true`
 */


function defineProperties(obj, toAssign, specific, message) {
  toAssign = toAssign || window;
  specific = specific === undefined || specific === null ? window : specific;
  toAssign = toAssign || window;
  message = typeof message === "function" ? message : function (k) {
    console.warn("You changed value of '" + k + "' which C uses. Be careful");
  };

  for (let i = 0, props = Object.keys(obj); i < props.length; i++) {
    // definer in IIFE to avoid assigning same values to all properties
    if (specific) {
      (function (name, value, toAssign, message) {
        Object.defineProperty(toAssign, name, {
          configurable: true,
          enumerable: true,
          get: function get() {
            return value;
          },
          set: function set(value) {
            Object.defineProperty(toAssign, name, {
              configurable: true,
              enumerable: true,
              value: value,
              writable: true
            });
            message(name);
          }
        });
      })(props[i], obj[props[i]], toAssign, message);
    } else {
      window[props[i]] = obj[props[i]];
    }
  }
}

function arange(start, end, step, rev = false) {
  const arr = [];
  if (rev) for (let i = end; i >= start; i -= step) arr.push(i);else for (let i = start; i <= end; i += step) arr.push(i);
  return arr;
}
/**
 * Applies default configurations to a given target object
 * Must be in the form of
 * <prop>: [<defaultValue>, <type>]
 *
 * @param {object} _default default configurations
 * @param {object} [target={}] target object
 * @param {boolean} [deepApply=true] whether to apply defaults to deep nested objects
 * @return {object} applied object
 */


function applyDefault(_default, target = {}, deepApply = true) {
  target = Object.clone(target);

  for (let i = 0, keys = Object.keys(_default); i < keys.length; i++) {
    const prop = keys[i],
          defaultProp = _default[prop],
          targetProp = target[prop];
    const defaultType = Object.getType(defaultProp);
    const targetType = Object.getType(targetProp);

    if (defaultType == "Object" && deepApply) {
      target[prop] = applyDefault(defaultProp, targetProp, deepApply);
    }

    if (targetType !== defaultType) target[prop] = _default[prop];
  }

  return target;
}
/**
 * fills and strokes inside the current shape if to and closes the shape.
 *
 * @param {CanvasRenderingContext2D} ctx
 */


function doFillAndStroke(ctx) {
  if (ctx.doFill) ctx.fill();
  if (ctx.doStroke) ctx.stroke();
}

function approximateIndexInArray(val, array, epsilon = 1e-6) {
  for (let i = 0; i < array.length; i++) {
    var k = array[i];

    if (Math.abs(k - val) <= epsilon) {
      return i;
    }
  }

  return -1;
}

},{}]},{},[1]);
