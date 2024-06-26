import { pixel } from "../../../src/c.js";
import { C } from "../../../src/main.js";
import { numberPlane } from "../../../src/objects/coordinate_systems/number_plane.js";
import { background, translate } from "../../../src/settings.js";

C(
	() => {
		let h_W = 400 / 2;
		let h_H = 400 / 2;
		console.time("cl");
		background(0);
		translate(CENTERX, CENTERY);
		numberPlane({
			xAxis: {
				range: [-2, 2],
			},
			yAxis: {
				range: [-2, 2],
			},
		});
		for (let x = -h_W; x <= h_W; x += 1) {
			for (let y = -h_H; y <= h_H; y += 1) {
				let a = x / 50,
					b = y / 50;
				[a, b] = cpow(a, b, 3);
				a -= 1;
				let ra = Math.sqrt(a ** 2 + b ** 2) ** 0.2;
				pixel(
					x,
					y,
					`hsl(${(Math.atan2(b, a) * 180) / Math.PI},
					100%,
					${(ra / (ra + 1)) * 100}%, 100%)`,
					1,
				);
			}
		}
		console.timeEnd("cl");
	},
	".container",
	{
		width: 400,
		height: 400,
	},
);

function cmul(p, x, y) {
	let k = p[0] * x - p[1] * y;
	p[1] = p[0] * p[1] + x * p[1];
	p[0] = k;
}

function cpow(x, y, p) {
	let pow = [x, y];
	for (let i = 1; i < p; i++) cmul(pow, x, y);
	return pow;
}
