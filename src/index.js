import { defineProperties } from "./utils.js";
import { C } from "./main.js";

import * as COLORLIST from "./constants/colors.js";
import * as DrawingConstants from "./constants/drawing.js";
import * as MathConsts from "./constants/math.js";

import * as Colors from "./objects/color.js";
import * as Image from "./objects/image.js";
import * as Geometry from "./objects/geometry.js";
import * as Settings from "./objects/settings.js";
import * as Text from "./objects/text.js";
import * as Tex from "./objects/tex.js";
import * as CoordinateSystems from "./objects/coordinate_systems.js";
import * as Braces from "./objects/braces.js";
import * as Arrows from "./objects/arrows.js";
import * as Functions from "./objects/functions.js";

import * as Arithmeics from "./math/aritmetics.js";
import * as Basic from "./math/basic.js";
import * as Points from "./math/points.js";
import * as Random from "./math/random.js";
import * as RateFunctions from "./math/rate_functions.js";

defineProperties(COLORLIST, window, false);
defineProperties(DrawingConstants, window, false);
defineProperties(MathConsts, window, false);

defineProperties(Colors);
defineProperties(Image);
defineProperties(Geometry);
defineProperties(Settings);
defineProperties(Text);
defineProperties(Tex);
defineProperties(CoordinateSystems);
defineProperties(Braces);
defineProperties(Arrows);
defineProperties(Functions);

defineProperties(Arithmeics);
defineProperties(Basic);
defineProperties(Points);
defineProperties(Random);
defineProperties(RateFunctions);

defineProperties(MathConsts, window, false);


defineProperties(defineProperties, C);
defineProperties(COLORLIST, C);
