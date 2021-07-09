import * as COLORLIST from "./constants/colors.js";
import * as DrawingConstants from "./constants/drawing.js";
import * as MathConsts from "./constants/math.js";
import { HSLToRGB, HSVToRGB, RGBToHSL, RGBToHSV } from "./functions/color.js";
import { defineProperties } from "./functions/defineProperties.js";
import * as CFunctions from "./functions/drawing-functions.js";
import * as MathFunctions from "./functions/math.js";
import * as extras from "./functions/more-things.js";
import { C } from "./main.js";


// export to global scope
defineProperties(MathConsts, window, false);
defineProperties(MathFunctions);
defineProperties(
  Object.assign({ "TRANSPARENT": "rgba(0,0,0,0)" }, COLORLIST),
  window,
  false
);
defineProperties(DrawingConstants, window, false);
defineProperties({"COLORLIST": COLORLIST}, window, false);
defineProperties(defineProperties, C);

defineProperties({
  RGBToHSL,
  HSLToRGB,
  RGBToHSV,
  HSVToRGB
});

defineProperties(CFunctions);
console.log(CFunctions);

C.addExtension(extras);
console.log(extras);
