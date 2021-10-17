import { BLUE, GREY, WHITE } from "../constants/colors.js";
import { C } from "../main.js";
import { applyDefault, arange } from "../utils.js";
import { arrowTip } from "./arrows.js";
import { functionGraph, heatPlot, parametricFunction } from "./functions.js";
import { line } from "./geometry.js";
import {
	fill,
	fontSize,
	restore,
	rotate,
	save,
	stroke,
	strokeWidth,
	translate,
} from "../settings.js";
import { fillText } from "./text.js";


// list of plotters
function getPlotterList(unitLength, unitValue, cfgs = {}) {
	return {
		getParametricFunction: function (configs) {
			configs.unitLength = unitLength;
			configs.unitValue = unitValue;
			return parametricFunction(configs);
		},
		getFunctionGraph: function (configs) {
			configs.unitLength = unitLength;
			configs.unitValue = unitValue;
			return functionGraph(configs);
		},
		getHeatPlot: function (configs) {
			configs.unitLength = unitLength;
			configs.unitValue = unitValue;
			configs.min = configs.min || [cfgs.xAxis.range[0], cfgs.yAxis.range[0]];
			configs.max = configs.max || [cfgs.xAxis.range[1], cfgs.yAxis.range[1]];
			return heatPlot(configs);
		},
	};
}

/**
 * Creates a axes.
 * @param {Object} args
 * Possible configurations are:
 *
 * @param {object} xAxis Configurations for x axis. (See {@link numberLine} for more configurations)
 * @param {object} yAxis Configurations for y axis. (See {@link numberLine} for more configurations)
 * @param {array} [center = [0, 0]] center of axes
 *
 * @returns {object} object that contains following properties:
 * * xAxis                 <object>   : x axis confiurations from numberLine (See {@link numberLine} for those configurations).
 * * yAxis                 <object>   : y axis confiurations from numberLine (See {@link numberLine} for those configurations).
 * * unitValue             <array>    : How much a unit is in its value in x and y directions.
 * * unitLength            <array>    : How much a unit is in px in x and y directions.
 * * getParametricFunction <function> : Draws a parametric function whose unit sizing are predefined by the axes. see {@link parametricFunction} to see possible configurations.
 * * getFunctionGraph      <function> : Draws a function graph whose unit sizing are predefined by the axes. see {@link functionGraph} to see possible configurations.
 */
function axes(args = {}) {
	const ctx = C.workingCanvas;
	// default configurations
	const defaultConfigs = {
		xAxis: {
			length: ctx.width,
			textDirection: [-0.3, -1],
			includeTick: true,
			includeLeftTip: true,
			includeRightTip: true,
			excludeOriginTick: true,
			includeNumbers: false,
			range: [-10, 10, 1],
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
			range: [-10, 10, 1],
		},
	};
	// configurations
	args = applyDefault(defaultConfigs, args);
	const { xAxis, yAxis } = args;
	// other configurations
	const center = args.center || [0, 0];
	// range of ticks in each axis
	const xRange = xAxis.range;
	const yRange = yAxis.range;
	// unit length of each axis
	// got by dividing length of axis by number of ticks
	const xDX = xAxis.length / ((xRange[1] - xRange[0]) / xRange[2]);
	const yDX = yAxis.length / ((yRange[1] - yRange[0]) / yRange[2]);
	// coordinates of bounding rectangle of the graph
	const xMin = (xRange[0] / xRange[2]) * xDX;
	const yMin = (yRange[0] / yRange[2]) * yDX;
	// variables to shift 0 ticks of axes to center
	const xShift = xAxis.length / 2 + xMin;
	const yShift = yAxis.length / 2 + yMin;
	ctx.save();
	ctx.beginPath();
	// translate to center
	ctx.translate(center[0], center[1]);

	// draws axes
	// x-axis
	ctx.translate(xShift, 0);
	const xAxisLine = numberLine(xAxis); // draw x axis

	// reverse the effect of shift for drawing y-axis
	ctx.translate(-xShift, yShift);

	// y-axis
	const yAxisLine = numberLine(yAxis); // draw y axis
	// size of a unit cell
	const unitLength = [xAxisLine.unitLength, yAxisLine.unitLength];
	const unitValue = [xAxisLine.unitValue, yAxisLine.unitValue];

	// reverse the effect of overall shift
	ctx.translate(-center[0], -center[1] - yShift);
	ctx.closePath();
	ctx.restore();
	const ret = {
		center: center, // center of axis as [x, y] in px
		xAxis: xAxisLine, // x axis confiurations from numberLine
		yAxis: yAxisLine, // y axis confiurations from numberLine
		unitValue: unitValue, // how much a unit is as [x, y] in its value
		unitLength: unitLength, // how much a unit is as [x, y] in px
	};
	return Object.assign(ret, getPlotterList(unitLength, unitValue, ret));
}

/**
 * Creates a numberLine with parameters in a object
 * @param {object} args configuration object
 *
 * @param {array} [args.point1 = [-ctx.width / 2, 0]] starting point of line. Default value is [-ctx.width / 2, 0]
 * @param {array} [args.point2 = [ctx.width / 2, 0]] ending point of line
 * @param {array} [args.range = [-5, 5, 1]] range of numbers to draw ticks and numbers
 * @param {array} [args.numbersToInclude = []] list of numbers to be displayed
 * @param {array} [args.numbersToExclude = []] list of numbers that shouldn't be displayed
 * @param {array} [args.numbersWithElongatedTicks = []] list of numbers where tick line should be longer
 * @param {array} [args.textDirection = 0, -0.8] Direction of text relative to nearby tick
 *
 * @param {boolean} [args.includeLeftTip = false] whether to add an arrow tip at left
 * @param {boolean} [args.includeRightTip = false] whether to add an arrow tip at right
 * @param {boolean} [args.includeTick = true] Whether ticks should be added
 * @param {boolean} [args.excludeOriginTick = false] Whether exclude ticks at origin
 *
 * @param {number} [args.tipWidth = 20] width of arrow tip in px
 * @param {number} [args.tipHeight = 1] height/width of tip
 * @param {number} [args.lineWidth = 32] Width of lines in px
 * @param {number} [args.longerTickMultiple = 2] Factor to increase height of ticks at elongated ticks
 * @param {number} [args.tickHeight = 15] Height of ticks in px
 * @param {number} [args.textSize = 17] Font size of text
 * @param {number} [args.textRotation = 0] Amount to rotate text
 * @param {number} args.decimalPlaces Number of decimal places in text. By default value is number of decimals in step
 *
 * @param {string} [args.color = GREY] Color of axis and ticks
 * @param {string} [args.textColor = WHITE] Color of text
 *
 * @returns {object} configurations about the number line
 *
 * * center     {array} Center of the number line in px
 * * tickList   {array} List of tick inervals
 * * unitValue  {array} How much a unit is in its value in x and y directions.
 * * unitLength {array} How much a unit is in px in x and y directions.
 */
function numberLine(args = {}) {
	const ctx = C.workingCanvas;
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

		color: GREY,
		textColor: WHITE,
	};
	args = applyDefault(defaultConfigs, args);
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
		numbersWithElongatedTicks,
	} = args;
	let { range, decimalPlaces } = args;

	if (Array.isArray(range) && range.length === 2) {
		range = [range[0], range[1], 1];
	}

	// if number of decimal places is not defined
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
	ctx.beginPath();
	save();
	translate(center[0], center[1]);
	rotate(rotation);
	translate(-lineLength / 2, 0);
	if (args.includeTick) drawTicks();
	if (args.includeNumbers) drawNumbers();
	translate(lineLength / 2, 0);
	drawAxis();
	ctx.closePath();

	function drawAxis() {
		stroke(color);
		ctx.lineWidth = lineWidth;
		fill(color);
		const r = Math.atan(tipHeight / 2);
		let x1 = -lineLength / 2;
		let x2 = lineLength / 2;
		if (includeLeftTip) {
			arrowTip(x1 + tipWidth, 0, x1, 0, tipWidth, tipHeight);
			x1 += tipWidth * Math.cos(r);
		}
		if (includeRightTip) {
			arrowTip(x2 - tipWidth, 0, x2, 0, tipWidth, tipHeight);
			x2 -= tipWidth * Math.cos(r) * 1;
		}
		line(x1, 0, x2, 0);
	}

	function drawTicks() {
		stroke(color);
		ctx.lineWidth = lineWidth;
		const from = includeLeftTip ? 1 : 0;
		const to = includeRightTip ? list.length - 1 : list.length;
		for (
			let i = from;
			i < to && numbersToExclude.indexOf(list[0][i]) < 0;
			i++
		) {
			const tick = list[i];
			if (Number(tick) === 0 && excludeOriginTick) continue;
			let TH = tickHeight;
			if (numbersWithElongatedTicks.indexOf(tick) > -1) {
				TH *= longerTickMultiple;
			}
			line(ds * i, -TH / 2, ds * i, TH / 2);
		}
	}

	function drawNumbers() {
		const numbers = numbersToInclude.length > 0 ? numbersToInclude : list;
		fill(args.textColor);
		fontSize(textSize);
		const yShift =
			(-textSize / 3) * Math.cos(textRotation) + textDirection[1] * textSize;
		const from = includeLeftTip ? 1 : 0;
		const to = includeRightTip ? numbers.length - 1 : numbers.length;

		for (
			let i = from;
			i < to && numbersToExclude.indexOf(numbers[i]) < 0;
			i++
		) {
			const tick = typeof numbers[i] == "number" ? numbers[i].toFixed(decimalPlaces) : numbers[i];
			if (Number(tick) === 0 && excludeOriginTick) continue;
			const width = ctx.measureText(tick).width;
			const xShift =
				(-width / 2) * Math.cos(textRotation) +
				textDirection[0] * textSize +
				(textSize / 2) * Math.sin(textRotation);
			translate(ds * i + xShift, yShift - width * Math.sin(textRotation));
			rotate(textRotation);
			fillText(tick, 0, 0);
			rotate(-textRotation);
			translate(-(ds * i + xShift), -(yShift - width * Math.sin(textRotation)));
		}
	}

	function getTickList() {
		return arange(min, max, step);
	}

	restore();
	return {
		range: range,
		center: center,
		tickList: list,
		unitValue: step,
		unitLength: ds,
	};
}

/**
 * Creates a numberPlane based on following parameters inside a Object
 * @param {Object} args
 * Possible parameters:
 *
 * @param {object} args.xAxis Configurations for x axis. See {@link numberLine} for possible configurations.
 * @param {object} args.yAxis Configurations for y axis. See {@link numberLine} for possible configurations.
 * @param {array} args.center Center of number plane as [x, y] in px.
 * @param {object} args.grid Set of styles to draw grid & subgrids. This can have following properties:
 *   @param {number} [args.grid.lineWidth = 1]  stroke width of grid lines
 *   @param {number} [args.grid.subgrids = 0]  number of sub-grid division to draw
 *   @param {number} [args.grid.subgridLineWidth = 0.7]  stroke width of sub-grid
 *   @param {string} [args.grid.color = "#58c4dda0"]  color of grid lines
 *   @param {string} [args.grid.subgridLineColor = "#888888a0"]  color of sub-grids
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
function numberPlane(args = {}) {
	const ctx = C.workingCanvas;
	// default configurations
	const defaultConfigs = {
		xAxis: {
			length: ctx.width,

			range: [-5, 5, 1],
			textDirection: [-0.3, -.8],

			includeTick: true,
			includeNumbers: true,
			includeLeftTip: false,
			includeRightTip: false,
			excludeOriginTick: true,
		},
		yAxis: {
			length: ctx.height,
			textRotation: -Math.PI / 2,

			range: [-5, 5, 1],
			textDirection: [.7, 0.4],

			includeTick: true,
			includeNumbers: true,
			includeLeftTip: false,
			includeRightTip: false,
			excludeOriginTick: true,
		},
		grid: {
			subgrids: 1,
			lineWidth: 1,
			subgridLineWidth: 0.7,

			color: BLUE + "a0",
			subgridLineColor: GREY + "50",
		},
		center: [0, 0],
	};

	// configurations
	args = applyDefault(defaultConfigs, args);
	const { xAxis, yAxis, grid } = args;
	// other configurations
	const subgrids = grid.subgrids;
	const center = args.center;
	// range of ticks in each axis
	const xRange = xAxis.range;
	const yRange = yAxis.range;
	// number of ticks in each
	const xNums = (xRange[1] - xRange[0]) / xRange[2];
	const yNums = (yRange[1] - yRange[0]) / yRange[2];
	// unit length of each axis
	const xDX = xAxis.length / xNums;
	const yDX = yAxis.length / yNums;
	// coordinates of bounding rectangle of the graph
	const xMin = (xRange[0] / xRange[2]) * xDX;
	const xMax = (xRange[1] / xRange[2]) * xDX;
	const yMin = (yRange[0] / yRange[2]) * yDX;
	const yMax = (yRange[1] / yRange[2]) * yDX;
	// variables to shift 0 ticks of axes to center
	const xShift = xAxis.length / 2 + xMin;
	const yShift = yAxis.length / 2 + yMin;
	// size of a subgrid unit cell
	const subgridUnit = [xDX / subgrids, yDX / subgrids];

	save();
	// translate to center
	translate(center[0] + xShift, center[1]);

	// draw grids
	drawGridLines();

	// draws axes
	const axesLines = axes({
		xAxis: xAxis,
		yAxis: yAxis,
	});
	// size of a unit cell
	const unitLength = axesLines.unitLength;
	const unitValue = axesLines.unitValue;

	// reverse the effect of overall shift
	translate(-(center[0] + xShift), -center[1] - yShift);

	function drawGridLines() {
		// major grid lines
		translate(xMin, 0);
		const subgridxDX = subgridUnit[0];
		const subgridyDX = subgridUnit[1];

		// horizontal grid lines
		for (let i = 0; i <= xNums; i++) {
			// draw major grid lines
			drawMajor(
				i * xDX, // x - shift
				0, // y - shift
				0,
				yMin,
				0,
				yMax
			);

			// draw subgrid grid lines
			for (let k = 1; k <= subgrids && i < xNums; k++) {
				drawMinor(k * subgridxDX, yMin, k * subgridxDX, yMax);
			}
			translate(-i * xDX);
		}
		translate(-xMin, yMin);
		// vertical grid lines
		for (let i = 0; i <= yNums; i++) {
			// draw major grid lines
			drawMajor(
				0, // x - shift
				i * yDX, // y - shift
				xMin,
				0,
				xMax,
				0
			);

			// draw subgrid grid lines
			for (let k = 1; k <= subgrids && i < yNums; k++) {
				drawMinor(xMin, k * subgridyDX, xMax, k * subgridyDX);
			}
			translate(0, -i * yDX);
		}
		translate(0, -yMin);

		function drawMajor(shiftX, shiftY, x1, y1, x2, y2) {
			translate(shiftX, shiftY);
			strokeWidth(grid.lineWidth);
			stroke(grid.color);
			line(x1, y1, x2, y2);
		}
		function drawMinor(x1, y1, x2, y2) {
			strokeWidth(grid.subgridLineWidth);
			stroke(grid.subgridLineColor);
			line(x1, y1, x2, y2);
		}
	}

	restore();
	const ret = {
		center: center, // center of number plane
		unitValue: unitValue, // how much a unit is in its value
		unitLength: unitLength, // how much a unit is in px
		xAxis: axesLines.xAxis, // x axis confiurations from numberLine
		yAxis: axesLines.yAxis, // y axis confiurations from numberLine
		subgridUnit: subgridUnit, // subgrid unit size
	};
	return Object.assign(ret, getPlotterList(unitLength, unitValue, ret));
}

export { axes, numberLine, numberPlane };
