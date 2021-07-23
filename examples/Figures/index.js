import {
	BLUE_C, DARK_BROWN, GREEN_C, PURPLE_C, RED_C, TEAL_C, WHITE, YELLOW_C
} from "../../src/constants/colors.js";
import { CENTER, MIDDLE } from "../../src/constants/drawing.js";
import { PI, RAD, TAU, TWO_PI } from "../../src/constants/math.js";
import { C } from "../../src/main.js";
import { doubleArrow, measurement } from "../../src/objects/arrows.js";
import { arcBrace } from "../../src/objects/braces.js";
import { linearGradient } from "../../src/objects/color.js";
import { parametricFunction } from "../../src/objects/functions.js";
import {
	angle, circle,
	circularSegment, line, point, sector
} from "../../src/objects/geometry.js";
import {
	fill,
	fontStyle,
	initBlackboardCanvas,
	lineDash,
	noFill,
	save,
	stroke,
	strokeWidth,
	textAlign,
	textBaseline,
	translate
} from "../../src/objects/settings.js";
import { fillText, text } from "../../src/objects/text.js";
import { cos, rotateAroundOrigin, sin } from "../../src/utils/math.js";

const W = 300;
const H = 300;

C(
	() => {
		const radius = 100,
			padding = 20,
			leftStart = -radius - padding;
		const pointOnCircle = rotateAroundOrigin(PI / 6, radius);
		initBlackboardCanvas();
		stroke(WHITE);
		fill(TEAL_C);
		translate(0, -30);
		circularSegment(0, 0, radius, TWO_PI / 3, PI / 6);
		fill(WHITE);
		var tip = arcBrace(0, 0, radius + 15, TWO_PI / 3, PI / 6, 10, 10, 5);
		textAlign(CENTER);
		text("S", ...tip);
		noFill();
		sector(0, 0, radius, TWO_PI / 3, PI / 6);
		sector(0, 0, 20, TWO_PI / 3, PI / 6);
		circle(0, 0, radius);
		// chord
		lineDash(13.5, 13.5);
		line(-pointOnCircle[0], pointOnCircle[1], ...pointOnCircle);
		lineDash();
		fillText("C", -5, pointOnCircle[1] + 10);
		fillText("θ", -5, 25);
		fillText("h", leftStart - 10, pointOnCircle[1] * 1.4);
		fillText("d", leftStart - 10, pointOnCircle[1] * 0.4);
		strokeWidth(1);
		fill(WHITE);
		doubleArrow(
			leftStart + 10,
			0,
			leftStart + 10,
			pointOnCircle[1],
			13,
			10,
			0,
			4
		);
		doubleArrow(
			leftStart + 10,
			pointOnCircle[1],
			leftStart + 10,
			radius,
			13,
			10,
			0,
			4
		);
		save();

		// horizontal markers
		line(leftStart, 0, 0, 0);
		line(leftStart, pointOnCircle[1], -pointOnCircle[0], pointOnCircle[1]);
		line(leftStart, radius, 0, radius);
		translate(7, -7);
		doubleArrow(0, 0, ...pointOnCircle, 13, 10, 0, 4);
		translate(5, -18);
		text("R", pointOnCircle[0] / 2, pointOnCircle[1] / 2);
	},
	".circular-sector",
	{
		name: "cs",
		width: W,
		height: H,
	}
);
C(
	() => {
		initBlackboardCanvas();
		stroke(GREEN_C);
		fill(RED_C);
		const line1 = [
			[ -50, -50 ],
			[ 120, 120 ],
		];
		const line2 = [
			[ -70, 70 ],
			[ 120, -120 ],
		];
		line(line1[0][0], line1[0][1], line1[1][0], line1[1][1]);
		stroke(RED_C);
		line(line2[0][0], line2[0][1], line2[1][0], line2[1][1]);

		fill(PURPLE_C);
		point(line1[0][0], line1[0][1]);
		fill(BLUE_C);
		point(line1[1][0], line1[1][1]);
		fill(GREEN_C);
		point(line2[0][0], line2[0][1]);
		fill(YELLOW_C);
		point(line2[1][0], line2[1][1]);

		noFill();
		stroke(BLUE_C);
		const { ang, center } = angle(...line2, ...line1, 20);

		fill(WHITE);
		textBaseline(MIDDLE);
		fontStyle("italic");
		text("θ = " + (ang * RAD).toFixed(1), ...center);
	},
	".line-line-intersection",
	{
		name: "lli",
		width: W,
		height: H,
	}
);
C(
	() => {
		initBlackboardCanvas();
		stroke(GREEN_C);
		var r = 120;
		const color = linearGradient(
			[-r, 0],
			[r, 0],
			[BLUE_C, GREEN_C, RED_C, YELLOW_C, PURPLE_C, DARK_BROWN]
		);
		stroke(color);
		fill(color);
		noFill();
		circle(0, 0, r);
		fill(color);
		measurement({
			p2: [r, 0],
			p1: [-r, 0],
			text: "Diameter",
			tipWidth: 15,
			tipHeight: 10,
			arrowCurving: 0,
			spacing: 0,
		});
	},
	".text",
	{
		width: W,
		height: H,
		name: "t",
	}
);
C(
	() => {
		function fx (t) {
			return [
				cos(t) * 100,
				sin(t) * 100
			];
		}
		initBlackboardCanvas();
		strokeWidth(0.5);
		stroke(GREEN_C);
		noFill();
		var dt = TAU/12;
		parametricFunction(fx, [0, TAU, dt], true, 1, [], dt, true);
		stroke(RED_C + "a0");
		// parametricFunction(fx, [-TAU, TAU, 0.01]);
	},
	".parametric-function",
	{
		width: W,
		height: H,
	}
);
