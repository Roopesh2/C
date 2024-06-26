import { Manim } from "../../../Extensions/Colors/importable.js";
import { Line, Arc } from "../../../Extensions/Animations/constructs.js";
import { C } from "../../../src/main.js";
import { background, stroke, strokeWidth, translate } from "../../../src/settings.js";

const W = 400;
const H = 400;
const { BLUE, GREEN, ORANGE, RED } = Manim;
C.debug(true);
function createAxis(canvasID, xAxis, yAxis) {
	showCreation(
		Line({
			name: "yAxis",
			p1: yAxis[0],
			p2: yAxis[1],
			dTime: 10,
		}),
	);
	showCreation(
		Line({
			name: "xAxis",
			p1: xAxis[0],
			p2: xAxis[1],
			dTime: 10,
		}),
	);
}

C(
	() => {
		background(0);
		translate(CENTERX, CENTERY);
		stroke(ORANGE);
		createAxis(
			"main",
			[
				[-W / 2, 0],
				[W / 2, 0],
			],
			[
				[0, H / 2],
				[0, -H / 2],
			],
		);
		let baseLinePoints = [
				[0, 0],
				[-80, 0],
			],
			slantLinePoints = [
				[-80, 0],
				[-100, 80],
			],
			slope =
				(slantLinePoints[1][1] - slantLinePoints[0][1]) /
				(slantLinePoints[1][0] - slantLinePoints[0][0]);
		stroke(GREEN);
		var radius = 80;
		showCreation(
			Line({
				name: "base",
				p1: baseLinePoints[0],
				p2: baseLinePoints[1],
				dTime: 14,
				time: 1000,
			}),
		);
		stroke(RED);
		showCreation(
			Arc({
				startAngle: Math.PI,
				angle: Math.PI / 2,
				name: "circle1",
				center: [-80, 80],
				radius: radius,
				dur: 1000,
				dTime: 10,
				clockwise: true,
			}),
		);

		// parallel lines
		const dy = 10; // change in y
		strokeWidth(1);
		stroke(BLUE);
		for (let y = dy; y <= 6 * dy; y += dy) {
			// let p1 = [0, y],
			// 	p2 = [y / slope + baseLinePoints[1][0], y];
			let p1 = [0, 6 * dy - y],
				th = Math.asin(y / radius),
				p2 = [-Math.cos(th) * radius + baseLinePoints[1][0], 6 * dy - y];
			showCreation(
				Line({
					name: "slide" + y / dy,
					p1: p1,
					p2: p2,
					dTime: 10,
					time: 500,
					syncWithTime: false,
				}),
			);
		}
	},
	".container",
	{
		name: "main",
		width: W,
		height: H,
	},
);
