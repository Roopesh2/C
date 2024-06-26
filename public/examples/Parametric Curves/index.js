import { Manim } from "../../../Extensions/Colors/importable.js";
import { E, PI, TAU } from "../../../src/constants/math.js";
import { C } from "../../../src/main.js";
import { lcm } from "../../../src/math/aritmetics.js";
import { abs, cos, sgn, sin } from "../../../src/math/functions.js";
import { axes } from "../../../src/objects/coordinate_systems/axes.js";
import {
	background,
	noFill,
	cssBackground,
	stroke,
	strokeWidth,
	translate,
} from "../../../src/settings.js";

const W = 300;
const H = 300;
const CFG = {
	width: W,
	height: H,
};
const { GREEN } = Manim;
function drawAxis(min = -4, max = 4, step = 1) {
	background(0);
	translate(CENTERX, CENTERY);
	strokeWidth(2);
	stroke(GREEN);
	noFill();
	background(25);
	cssBackground();
	return axes({
		xAxis: {
			lineWidth: 1,
			range: [min, max, step],
			includeNumbers: true,
			textSize: 11,
			includeLeftTip: true,
			includeRightTip: true,
		},
		yAxis: {
			lineWidth: 1,
			range: [min, max, step],
			includeNumbers: true,
			textSize: 11,
			includeLeftTip: false,
			includeRightTip: false,
		},
	});
}
C(
	() => {
		function ft(t) {
			return [3 * sin(10 * t), 3 * sin(9 * t)];
		}
		drawAxis()
			.plotParametricFunction({
				plotter: ft,
				range: [0, TAU, TAU / 400],
				closed: true,
				draw: false,
			})
			.draw(5000);
	},
	".lissajous",
	CFG,
);
C(
	() => {
		const R = 5,
			r = 3,
			d = 5,
			limit = (TAU * lcm(r, R)) / R;
		function ft(t) {
			return [
				(R - r) * cos(t) + d * cos(((R - r) * t) / r),
				(R - r) * sin(t) - d * sin(((R - r) * t) / r),
			];
		}
		drawAxis(-8, 8, 1)
			.plotParametricFunction({
				plotter: ft,
				range: [0, limit, limit / 100],
				closed: true,
				draw: false,
			})
			.draw(2000);
	},
	".hypotrochoid",
	CFG,
);
C(
	() => {
		const n = 3;
		function ft(t) {
			return [
				abs(cos(t)) ** (2 / n) * 4 * sgn(cos(t)),
				abs(sin(t)) ** (2 / n) * 3 * sgn(sin(t)),
			];
		}
		drawAxis(-5, 5, 1)
			.plotParametricFunction({
				plotter: ft,
				range: [0, TAU, PI / 40],

				closed: true,
				draw: false,
				smoothen: true,
			})
			.draw(2000);
	},
	".superellipse",
	CFG,
);
C(
	() => {
		function ft(t) {
			return [
				sin(t) * (E ** cos(t) - 2 * cos(4 * t) - cos(t / 12) ** 5),
				cos(t) * (E ** cos(t) - 2 * cos(4 * t) - cos(t / 12) ** 5),
			];
		}
		drawAxis(-4, 4, 1)
			.plotParametricFunction({
				plotter: ft,
				range: [-TAU * 2, TAU * 2, 0.1],
				closed: false,
				draw: false,
			})
			.draw(5000);
	},
	".butterfly-curve",
	CFG,
);
