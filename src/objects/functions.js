import { readColor } from "../color/color_reader.js";
import { C } from "../main.js";
import { loop, noLoop } from "../settings.js";
import { applyDefault, approximateIndexInArray, doFillAndStroke } from "../utils.js";
import { getBezierControlPoints, line, smoothCurveThroughPoints } from "./geometry.js";

const animationEventChain = {
	then: function (f) {
		f();
		return animationEventChain;
	},
};

let counter = {
	parametricFunction: 1,
};

const RANGE = [0, 10, 0.1];
const UNIT_VEC = [1, 1];
/**
 * Draws a parametric functions
 * This accept parameters as object.
 * @param {Object} configs configuration object
 * It can have following properties:
 *
 * @param {Function} configs.plotter function to plot. Must recieve one argument and return a array of point as [x, y]
 * @param {number} [configs.tension = 1] Smoothness tension.
 * @param {Array<number>} [configs.range = RANGE] Range as [min, max, dt]
 * @param {Array<number>} [configs.discontinuities] Array of t where the curve discontinues.
 * @param {Array<number>} [configs.unitValue = UNIT_VEC] Value of each unit space
 * @param {Array<number>} [configs.unitSpace = UNIT_VEC] Length of each unit in pixels
 * @param {boolean} [configs.smoothen = true] Whether to smoothen the shape.
 * @param {boolean} [configs.closed = false] Whether the function draws a closed shape.
 * @param {boolean} [configs.draw = true] Wheteher to draw the function graph right now.
 *
 * @returns {Object} object that contains following properties:
 *
 * * points  <array>    : Array of computed points in the function
 * * draw    <function> : Function that draws the plot
 * * animate <function> : Function that animates the drawing of the shape. Accept argument `duration` which is the duration of animation.
 */
export function parametricFunction(configs) {
	let defaultConfigs = {
		tension: 1,

		unitValue: UNIT_VEC,
		unitSpace: UNIT_VEC, // length of each unit in pixels
		range: RANGE,
		discontinuities: [],

		smoothen: true,
		closed: false,
		draw: true,

		// for animation
		dur: 4000,
	};
	configs = applyDefault(defaultConfigs, configs);
	let { plotter, range, smoothen, tension, discontinuities, closed } = configs;
	if (Array.isArray(range) && range.length == 2) range.push((range[1] - range[0]) / 20);
	let points = [[]],
		min = range[0],
		max = range[1],
		step = range[2];
	if (!Array.isArray(discontinuities)) discontinuities = [];

	// generate points
	let row = 0,
		pointCount = 0,
		unitX = configs.unitSpace[0] / configs.unitValue[0],
		unitY = configs.unitSpace[1] / configs.unitValue[1];
	let discontinuityRadius;
	if (isNaN(configs.discontinuityRadius)) {
		discontinuityRadius = step;
	} else {
		discontinuityRadius = configs.discontinuityRadius;
	}
	if (step < discontinuityRadius) discontinuityRadius = step / 2;
	for (let t = min; t <= max + discontinuityRadius; t += step) {
		if (approximateIndexInArray(t, discontinuities, discontinuityRadius) > -1) {
			if (approximateIndexInArray(t + step, discontinuities, discontinuityRadius) > -1) {
				row++;
				points.push([]);
			}
			continue;
		}
		let ft = plotter(t);
		points[row].push([ft[0] * unitX, ft[1] * unitY]);
		pointCount++;
	}

	// draw the plot
	if (configs.draw) plot();
	function plot() {
		let ctx = C.workingContext;
		for (let i = 0; i < points.length; i++) {
			let p = points[i];
			if (smoothen) {
				smoothCurveThroughPoints(p, tension, closed);
			} else {
				ctx.beginPath();
				ctx.moveTo(p[0][0], p[0][1]);
				for (let j = 1; j < p.length; j++) {
					ctx.lineTo(p[j][0], p[j][1]);
				}
				ctx.closePath();
				doFillAndStroke(ctx);
			}
		}
	}
	let ctx = C.workingContext;
	return {
		points: points[0],
		dur: configs.dur,
		name: "parametric-plot-" + counter.parametricFunction++,
		closed: configs.closed,
		tension: configs.tension || 1,
		smoothen: configs.smoothen,
		rateFunction: configs.rateFunction,
		syncWithTime: configs.syncWithTime || false,

		draw: function (duration = 2000) {
			let dt = duration / pointCount;
			for (let i = 0; i < points.length; i++) {
				var p = points[i];
				let j = 0;
				if (smoothen) {
					loop(
						"parametric-plot-" + counter.parametricFunction++,
						smoothed(j),
						C.workingContext.name,
						dt,
					);
				} else {
					loop(
						"parametric-plot-" + counter.parametricFunction++,
						nonSmoothed(j),
						C.workingContext.name,
						dt,
					);
				}
			}
			function smoothed(j) {
				return function () {
					if (j >= p.length - 2) {
						noLoop();
						ctx.closePath();
						if (ctx.doFill) this.draw();
					}
					let recentPoint = j > 0 ? p[j - 1] : closed ? p[p.length - 2] : p[0],
						currentPoint = p[j],
						nextPoint = p[j + 1],
						secondNextPoint = j != p.length - 2 ? p[j + 2] : closed ? p[1] : nextPoint,
						cp = getBezierControlPoints(recentPoint, currentPoint, nextPoint, secondNextPoint);
					j++;
					ctx.beginPath();
					ctx.moveTo(currentPoint[0], currentPoint[1]);
					ctx.bezierCurveTo(cp[0], cp[1], cp[2], cp[3], nextPoint[0], nextPoint[1]);
					ctx.stroke();
				};
			}
			function nonSmoothed(j) {
				return function () {
					if (j >= p.length - 2) {
						noLoop();
						if (ctx.doFill) this.draw();
					}
					let p1 = p[j],
						p2 = p[++j];
					line(p1[0], p1[1], p2[0], p2[1]);
				};
			}
			return animationEventChain;
		},
	};
}

/**
 * Draws graph of funciton
 * See {@link parametricFunction} For arguments
 */
export function functionGraph(configs) {
	let plotter = configs.plotter;
	configs.plotter = (x) => [x, plotter(x)];
	return parametricFunction(configs);
}

/**
 * Draws a heat plot of given function. The function must take atleast 2 arguments and return a number.
 * More precisely f: ℜ² → ℜ
 * All parameters should be enclosed in a object.
 * @param {Object} configs
 * Possible parameters are:
 *
 * @param {Array<number>} [configs.min] minimum point. Default: [-4, -4]
 * @param {Array<number>} [configs.max] maximum point. Default: [4, 4]
 * @param {Object} configs.colors object of color map
 * @param {Array<number>} [configs.unitValue = UNIT_VEC] Value of each unit space
 * @param {Array<number>} [configs.unitSpace = UNIT_VEC] Length of each unit in pixels
 * @param {number} [configs.resolution = 1] resolution of plot
 * @param {Function} [configs.interpolator = linear] function to interpolate color.
 * @return {Object} metadatas
 */
export function heatPlot(configs) {
	let defaultConfigs = {
		min: [-4, -4],
		max: [4, 4],
		colors: {
			"-5": "#b36e38b0",
			"-3": "#ff9c52b0",
			"-1": "#ffcea9b0",
			0: "#dcdcddb0",
			1: "#9fcaedb0",
			3: "#3d96dab0",
			5: "#2b6b99b0",
		},
		unitSpace: UNIT_VEC,
		unitValue: UNIT_VEC,
		resolution: 1,
		interpolator: (x) => x,
	};
	configs = applyDefault(defaultConfigs, configs, false);
	let { min, max, colors, resolution, plotFunction, interpolator } = configs,
		ctx = C.workingContext,
		unitSizeX = configs.unitSpace[0] / configs.unitValue[0],
		unitSizeY = configs.unitSpace[1] / configs.unitValue[1],
		UVX = configs.unitValue[0] / configs.unitSpace[0],
		UVY = configs.unitValue[1] / configs.unitSpace[1],
		stopes = Object.keys(colors).sort();

	// converting colors to rgba array

	for (let stop of stopes) {
		colors[stop] = readColor(colors[stop]).rgbaA;
	}
	let minS = Math.min(...stopes),
		maxS = Math.max(...stopes);
	ctx.save();
	for (let x = min[0]; x <= max[0]; x += resolution * UVX) {
		for (let y = min[1]; y <= max[1]; y += resolution * UVY) {
			ctx.fillStyle = lerpColorArray(plotFunction(x, y));
			ctx.fillRect(x * unitSizeX, y * unitSizeY, resolution, resolution);
		}
	}
	function lerpColorArray(v) {
		if (v >= maxS) return "rgba(" + colors[maxS].join() + ")";
		if (v <= minS) return "rgba(" + colors[minS].join() + ")";
		for (let i = 0; i < stopes.length - 1; i++) {
			let a = stopes[i],
				b = stopes[i + 1],
				c1 = colors[a],
				c2 = colors[b],
				k = interpolator((v - a) / (b - a));
			if (v >= a && v < b) {
				return (
					"rgba(" +
					[
						(c2[0] - c1[0]) * k + c1[0],
						(c2[1] - c1[1]) * k + c1[1],
						(c2[2] - c1[2]) * k + c1[2],
						(c2[3] - c1[3]) * k + c1[3],
					].join() +
					")"
				);
			}
		}
	}
	ctx.restore();
	return {
		min: minS,
		max: maxS,
		colors: colors,
	};
}

/**
 * Plots a list of points
 * @param {Object} configs arguments
 * @param {Array<Object<x:number, y:number, radius?: number, fill?: string, stroke?: string>>} configs.points list of points
 *
 */
export function plotPoints(configs) {
	configs = applyDefault(
		{
			unitValue: UNIT_VEC,
			unitSpace: UNIT_VEC,
			fill: "white",
			stroke: "#0000",
			radius: 5,
		},
		configs,
	);
	let { points, unitValue, unitSpace } = configs;
	let ctx = C.workingContext;
	for (let i = 0; i < points.length; i++) {
		let p = points[i],
			fill = p.fill || configs.fill || ctx.fillStyle,
			stroke = p.stroke || configs.stroke || ctx.strokeStyle,
			x = (p.x * unitSpace[0]) / unitValue[0],
			y = (p.y * unitSpace[1]) / unitValue[1];
		ctx.beginPath();
		ctx.fillStyle = fill;
		ctx.strokeStyle = stroke;
		ctx.arc(x, y, p.radius || configs.radius, 0, Math.PI * 2);
		ctx.fill();
		ctx.stroke();
	}
	ctx.closePath();
}

/**
 * Plots a bunch of points in polar plane
 * @param {Object} configs configurations
 * @param {Array<Object<r:number, phi:number, radius?: number, fill?: string, stroke?: string>>} configs.points list of points
 */
export function plotPolarPoints(configs) {
	configs = applyDefault(
		{
			radialSpacing: 2,
			fill: "white",
			stroke: "#0000",
			radius: 5,
			points: [],
		},
		configs,
	);
	let ctx = C.workingContext;
	let { points, radialSpacing } = configs;
	ctx.save();
	for (let i = 0; i < points.length; i++) {
		let p = points[i],
			fill = p.fill || configs.fill || ctx.fillStyle,
			stroke = p.stroke || configs.stroke || ctx.strokeStyle,
			x = p.r * Math.cos(p.phi) * radialSpacing,
			y = p.r * Math.sin(p.phi) * radialSpacing;
		ctx.beginPath();
		ctx.fillStyle = fill;
		ctx.strokeStyle = stroke;
		ctx.arc(x, y, p.radius || configs.radius, 0, Math.PI * 2);
		ctx.fill();
		ctx.stroke();
	}
	ctx.closePath();
	ctx.restore();
}

/**
 * Plots a parametric function in polar plane
 * @param {Object} configs
 * @param {Function} configs.plotter function that takes one arguments t and returns a coordinate as [radius, angle]
 * @returns
 */
export function polarParametricFunction(configs) {
	configs = applyDefault(
		{
			tension: 1,
			radialSpacing: 1,
			range: [0, Math.PI * 2, Math.PI / 50],
			discontinuities: [],
			smoothen: true,
			closed: false,
			strokeWidth: 2,
			plotter: (t) => [0, 0],
		},
		configs,
	);
	let { plotter, range, radialSpacing, smoothen, tension, discontinuities, closed } = configs;
	if (Array.isArray(range) && range.length == 2) range.push((range[1] - range[0]) / 20);
	let points = [[]],
		min = range[0],
		max = range[1],
		step = range[2];
	if (!Array.isArray(discontinuities)) discontinuities = [];
	let discontinuityRadius;
	if (isNaN(configs.discontinuityRadius)) {
		discontinuityRadius = step;
	} else {
		discontinuityRadius = configs.discontinuityRadius;
	}
	// generate points
	let row = 0,
		_fix = discontinuityRadius < step ? discontinuityRadius : 0;
	// we add one more point to make the graph more accurate when applying smoothening technique.
	for (let t = min; t <= max + step + _fix; t += step) {
		if (approximateIndexInArray(t, discontinuities, discontinuityRadius) > -1) {
			if (approximateIndexInArray(t + step, discontinuities, discontinuityRadius) > -1) {
				row++;
				points.push([]);
			}
			continue;
		}
		let ft = plotter(t);
		points[row].push([
			ft[0] * Math.cos(ft[1]) * radialSpacing,
			ft[0] * Math.sin(ft[1]) * radialSpacing,
		]);
	}

	let ctx = C.workingContext;
	let finalPoints = [];
	ctx.lineWidth = configs.strokeWidth;
	for (let i = 0; i < points.length; i++) {
		let p = points[i];
		if (p.length == 0) {
			continue;
		} else {
			finalPoints.push(p);
		}
		// add offset to remove last point
		let offset = i == points.length - 1 ? 1 : 0;
		if (smoothen) {
			smoothCurveThroughPoints(p, tension, closed, offset);
		} else {
			ctx.beginPath();
			ctx.moveTo(p[0][0], p[0][1]);
			for (let j = 1; j < p.length - offset; j++) {
				ctx.lineTo(p[j][0], p[j][1]);
			}
			if (ctx.doStroke) ctx.stroke();
			if (ctx.doFill && closed) ctx.fill();
			ctx.closePath();
		}

		// remove last excess point
		if (offset) {
			points[i] = points[i].slice(0, -1);
		}
	}
	return {
		points: finalPoints,
		closed: configs.closed,
		tension: configs.tension || 1,
		smoothen: configs.smoothen,
	};
}

export function polarFuntionGraph(configs) {
	let plotter = configs.plotter;
	configs.plotter = (t) => [plotter(t), t];
	return polarParametricFunction(configs);
}
