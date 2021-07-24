import { applyDefault, defineProperties } from "./utils.js";

const defaultConfigs = {
	width: 200, // width of canvas multiplied by dpr
	height: 200, // height of canvas  multiplied by dpr

	dpr: Math.ceil(window.devicePixelRatio || 1), // device pixel ratio for clear drawings

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
	font: "20px serif",
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
	const configs = applyDefault(defaultConfigs,cfgs);

	// initialize canvas
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
	}
	// set canvas's id and class to its name
	canvas.id = canvasName;
	canvas.classList.add(canvasName);
	// add canvas to container
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
C.workingCanvas = undefined; // index of current working canvas in `C.canvasList`

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
	return (
		parseInt(cs.width) - parseInt(cs.paddingRight) - parseInt(cs.paddingLeft)
	);
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
	defineProperties(extObj, window, !editable);
	defineProperties(extObj, C.extensions, !editable);
};

/**
 */
C.defineProperties = defineProperties;
// register to window
window.C = C;

export { C };
