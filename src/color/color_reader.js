/** @module Color-Reader */

import { Colors } from "../constants/colors.js";

// adapeted from p5.js
// Full color string patterns. The capture groups are necessary.
let // Matches: #XXX
	HEX3 = /^#([a-f0-9])([a-f0-9])([a-f0-9])$/i,
	// Matches: #XXXX
	HEX4 = /^#([a-f0-9])([a-f0-9])([a-f0-9])([a-f0-9])$/i,
	// Matches: #xxxxxx
	HEX6 = /^#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})$/i,
	// Matches: #XXXXXXXX
	HEX8 = /^#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})$/i,
	// Matches: rgb(R, G, B)
	RGB = /^rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)$/i,
	// Matches: rgb(R, G, B, A)
	RGBA = /^rgba\((\d{1,3}),(\d{1,3}),(\d{1,3}),(?:(\d+(?:\.\d+)?)|(?:\.\d+))\)$/i;
/**
 * Reads the argument and returns color in the prefered colorMode.
 * If last argument is given true, it will return the colors as array.
 * Possible use cases (these assume colorModes to be 'rgba'):
 * Only accept valid css colors
 *
 * * readColor(100)                 // rgba(100, 100, 100, 1)
 * * readColor(255, 200)            // rgba(255, 200, 0, 1)
 * * readColor(255, 200, 100)       // rgba(255, 200, 100, 1)
 * * readColor(290, 134, 50, 0.6)   // rgba(290, 134, 50, 0.6)
 * * readColor("#f3d")              // rgba(255, 51, 221, 1)
 * * readColor("#fa054f")           // rgba(250, 5, 79, 1)
 * * readColor("#fa054fa0")         // rgba(250, 5, 79, 0.6274509803921569)
 * * readColor(255, 200, 100, true) // [255, 200, 100, 1]
 * * readColor("#f3da", true)       // [255, 51, 221, 0.0392156862745098]
 *
 * @return {Object} color string/array
 */
export function readColor(...color) {
	let result;
	if (Array.isArray(color[0])) color = color[0];
	let c1 = color[0];
	if (typeof c1 === "number") {
		if (color.length === 1) {
			result = [c1, c1, c1, 1];
		} else if (color.length === 2) {
			result = [c1, color[1], 0, 1];
		} else if (color.length === 3) {
			result = [c1, color[1], color[2], 1];
		} else if (color.length === 4) {
			result = [c1, color[1], color[2], color[3]];
		}
	} else if (typeof c1 == "string") {
		// Adapted from p5.js
		let str = c1.replace(/\s/g, "").toLowerCase();
		// convert string to array if it is a named colour.
		if (Colors[str]) {
			result = Colors[str];
			result = [
				parseInt(result.substr(1, 2), 16),
				parseInt(result.substr(3, 2), 16),
				parseInt(result.substr(5, 2), 16),
				1,
			];
		} else if (HEX3.test(str)) {
			result = HEX3.exec(str)
				.slice(1)
				.map((color) => parseInt(color + color, 16));
			result[3] = 1;
		} else if (HEX6.test(str)) {
			result = HEX6.exec(str)
				.slice(1)
				.map((color) => parseInt(color, 16));
			result[3] = 1;
		} else if (HEX4.test(str)) {
			result = HEX4.exec(str)
				.slice(1)
				.map((color) => parseInt(color + color, 16));
			result[3] /= 255;
		} else if (HEX8.test(str)) {
			result = HEX8.exec(str)
				.slice(1)
				.map((color) => parseInt(color, 16));
			result[3] /= 255;
		} else if (RGB.test(str)) {
			result = RGB.exec(str)
				.slice(1)
				.map((color) => parseInt(color, 10));
			result[3] = 1;
		} else if (RGBA.test(str)) {
			result = RGBA.exec(str)
				.slice(1)
				.map((color, index) => {
					if (index == 3) return parseFloat(color);
					return parseInt(color, 10);
				});
		} else {
			throw new Error("Cannot convert given value to color: " + str);
		}
	} else {
		result = c1;
		return {
			rgbaA: result,
			rgba: result,
			hex6: result,
			hex8: result,
			hex: result,
			hsl: result,
		};
	}

	let a = result[3];
	result[3] *= 255;
	let hex6 = "#",
		r = result;
	r.map((color, i) => {
		if (i < 3) {
			let hex = Math.round(color).toString(16);
			hex6 += hex.length == 1 ? "0" + hex : hex;
		}
	});
	let hex8 = "#";
	r = result;
	r.map((color, i) => {
		if (i < 4) {
			let hex = Math.round(color).toString(16);
			hex8 += hex.length == 1 ? "0" + hex : hex;
		}
	});
	result[3] = a;
	return {
		rgbaA: result,
		rgba: `rgba(${result[0]}, ${result[1]}, ${result[2]}, ${result[3]})`,
		hex6: hex6,
		hex8: hex8,
		hex: hex8,
		hsl: `hsl(${result[0]}, ${result[1]}, ${result[2]})`,
	};
}
