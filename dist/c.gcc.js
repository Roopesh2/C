(function () {
	const aa = {
		aliceblue: "#f0f8ff",
		antiquewhite: "#faebd7",
		aqua: "#00ffff",
		aquamarine: "#7fffd4",
		azure: "#f0ffff",
		beige: "#f5f5dc",
		bisque: "#ffe4c4",
		black: "#000000",
		blanchedalmond: "#ffebcd",
		blue: "#0000ff",
		blueviolet: "#8a2be2",
		brown: "#a52a2a",
		burlywood: "#deb887",
		cadetblue: "#5f9ea0",
		chartreuse: "#7fff00",
		chocolate: "#d2691e",
		coral: "#ff7f50",
		cornflowerblue: "#6495ed",
		cornsilk: "#fff8dc",
		crimson: "#dc143c",
		cyan: "#00ffff",
		darkblue: "#00008b",
		darkcyan: "#008b8b",
		darkgoldenrod: "#b8860b",
		darkgray: "#a9a9a9",
		darkgreen: "#006400",
		darkgrey: "#a9a9a9",
		darkkhaki: "#bdb76b",
		darkmagenta: "#8b008b",
		darkolivegreen: "#556b2f",
		darkorange: "#ff8c00",
		darkorchid: "#9932cc",
		darkred: "#8b0000",
		darksalmon: "#e9967a",
		darkseagreen: "#8fbc8f",
		darkslateblue: "#483d8b",
		darkslategray: "#2f4f4f",
		darkslategrey: "#2f4f4f",
		darkturquoise: "#00ced1",
		darkviolet: "#9400d3",
		deeppink: "#ff1493",
		deepskyblue: "#00bfff",
		dimgray: "#696969",
		dimgrey: "#696969",
		dodgerblue: "#1e90ff",
		firebrick: "#b22222",
		floralwhite: "#fffaf0",
		forestgreen: "#228b22",
		fuchsia: "#ff00ff",
		gainsboro: "#dcdcdc",
		ghostwhite: "#f8f8ff",
		gold: "#ffd700",
		goldenrod: "#daa520",
		gray: "#808080",
		green: "#008000",
		greenyellow: "#adff2f",
		grey: "#808080",
		honeydew: "#f0fff0",
		hotpink: "#ff69b4",
		indianred: "#cd5c5c",
		indigo: "#4b0082",
		ivory: "#fffff0",
		khaki: "#f0e68c",
		lavender: "#e6e6fa",
		lavenderblush: "#fff0f5",
		lawngreen: "#7cfc00",
		lemonchiffon: "#fffacd",
		lightblue: "#add8e6",
		lightcoral: "#f08080",
		lightcyan: "#e0ffff",
		lightgoldenrodyellow: "#fafad2",
		lightgray: "#d3d3d3",
		lightgreen: "#90ee90",
		lightgrey: "#d3d3d3",
		lightpink: "#ffb6c1",
		lightsalmon: "#ffa07a",
		lightseagreen: "#20b2aa",
		lightskyblue: "#87cefa",
		lightslategray: "#778899",
		lightslategrey: "#778899",
		lightsteelblue: "#b0c4de",
		lightyellow: "#ffffe0",
		lime: "#00ff00",
		limegreen: "#32cd32",
		linen: "#faf0e6",
		magenta: "#ff00ff",
		maroon: "#800000",
		mediumaquamarine: "#66cdaa",
		mediumblue: "#0000cd",
		mediumorchid: "#ba55d3",
		mediumpurple: "#9370db",
		mediumseagreen: "#3cb371",
		mediumslateblue: "#7b68ee",
		mediumspringgreen: "#00fa9a",
		mediumturquoise: "#48d1cc",
		mediumvioletred: "#c71585",
		midnightblue: "#191970",
		mintcream: "#f5fffa",
		mistyrose: "#ffe4e1",
		moccasin: "#ffe4b5",
		navajowhite: "#ffdead",
		navy: "#000080",
		oldlace: "#fdf5e6",
		olive: "#808000",
		olivedrab: "#6b8e23",
		orange: "#ffa500",
		orangered: "#ff4500",
		orchid: "#da70d6",
		palegoldenrod: "#eee8aa",
		palegreen: "#98fb98",
		paleturquoise: "#afeeee",
		palevioletred: "#db7093",
		papayawhip: "#ffefd5",
		peachpuff: "#ffdab9",
		peru: "#cd853f",
		pink: "#ffc0cb",
		plum: "#dda0dd",
		powderblue: "#b0e0e6",
		purple: "#800080",
		rebeccapurple: "#663399",
		red: "#ff0000",
		rosybrown: "#bc8f8f",
		royalblue: "#4169e1",
		saddlebrown: "#8b4513",
		salmon: "#fa8072",
		sandybrown: "#f4a460",
		seagreen: "#2e8b57",
		seashell: "#fff5ee",
		sienna: "#a0522d",
		silver: "#c0c0c0",
		skyblue: "#87ceeb",
		slateblue: "#6a5acd",
		slategray: "#708090",
		slategrey: "#708090",
		snow: "#fffafa",
		springgreen: "#00ff7f",
		steelblue: "#4682b4",
		tan: "#d2b48c",
		teal: "#008080",
		thistle: "#d8bfd8",
		tomato: "#ff6347",
		turquoise: "#40e0d0",
		violet: "#ee82ee",
		wheat: "#f5deb3",
		white: "#ffffff",
		whitesmoke: "#f5f5f5",
		yellow: "#ffff00",
		yellowgreen: "#9acd32",
	};
	let ba = /^#([a-f0-9])([a-f0-9])([a-f0-9])$/i,
		ca = /^#([a-f0-9])([a-f0-9])([a-f0-9])([a-f0-9])$/i,
		da = /^#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})$/i,
		fa = /^#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})$/i,
		ha = /^rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)$/i,
		ia = /^rgba\((\d{1,3}),(\d{1,3}),(\d{1,3}),(?:(\d+(?:\.\d+)?)|(?:\.\d+))\)$/i;
	function l(...a) {
		var b;
		Array.isArray(a[0]) && (a = a[0]);
		let c = a[0];
		if ("number" === typeof c)
			1 === a.length
				? (b = [c, c, c, 1])
				: 2 === a.length
				? (b = [c, a[1], 0, 1])
				: 3 === a.length
				? (b = [c, a[1], a[2], 1])
				: 4 === a.length && (b = [c, a[1], a[2], a[3]]);
		else if ("string" == typeof c)
			if (((b = c.replace(/\s/g, "").toLowerCase()), aa[b])) b = l(aa[b]).rgbaA;
			else if (ba.test(b))
				(b = ba
					.exec(b)
					.slice(1)
					.map((f) => parseInt(f + f, 16))),
					(b[3] = 1);
			else if (da.test(b))
				(b = da
					.exec(b)
					.slice(1)
					.map((f) => parseInt(f, 16))),
					(b[3] = 1);
			else if (ca.test(b))
				(b = ca
					.exec(b)
					.slice(1)
					.map((f) => parseInt(f + f, 16))),
					(b[3] /= 255);
			else if (fa.test(b))
				(b = fa
					.exec(b)
					.slice(1)
					.map((f) => parseInt(f, 16))),
					(b[3] /= 255);
			else if (ha.test(b))
				(b = ha
					.exec(b)
					.slice(1)
					.map((f) => parseInt(f, 10))),
					(b[3] = 1);
			else if (ia.test(b))
				b = ia
					.exec(b)
					.slice(1)
					.map((f, g) => (3 == g ? parseFloat(f) : parseInt(f, 10)));
			else throw Error("Given color is not valid: " + b);
		else return (b = c), { rgbaA: b, rgba: b, hex6: b, hex8: b, hex: b, hsl: b };
		a = b[3];
		b[3] *= 255;
		let d = "#";
		b.map((f, g) => {
			3 > g && ((f = Math.round(f).toString(16)), (d += 1 == f.length ? "0" + f : f));
		});
		let e = "#";
		b.map((f, g) => {
			4 > g && ((f = Math.round(f).toString(16)), (e += 1 == f.length ? "0" + f : f));
		});
		b[3] = a;
		return {
			rgbaA: b,
			rgba: `rgba(${b[0]}, ${b[1]}, ${b[2]}, ${b[3]})`,
			hex6: d,
			hex8: e,
			hex: e,
			hsl: `hsl(${b[0]}, ${b[1]}, ${b[2]})`,
		};
	}
	var ja = {};
	ja.readColor = l;
	function x(a, b, c = {}) {
		var d = {
			width: 200,
			height: 200,
			dpr: Math.ceil(window.devicePixelRatio || 1),
			doFill: !0,
			doStroke: !0,
			pathStarted: !1,
			yAxisInverted: !1,
			pauseAnimations: !1,
			netRotation: 0,
			currentLoop: void 0,
			currentLoopName: void 0,
			textAlign: "start",
			textBaseline: "alphabetic",
			fillStyle: "#ffffff",
			background: "#ffffff",
			strokeStyle: "#000000",
			colorMode: "rgba",
			lineWidth: 1,
			fontSize: "20px",
			fontFamily: "serif",
			fontStyle: "normal",
			fontVariant: "normal",
			fontWeight: "normal",
			fontStretch: "normal",
			lineHeight: 1.2,
			font: "20px serif",
			events: {},
		};
		c = E(d, c);
		let e;
		"string" === typeof b
			? (b = document.querySelector(b))
			: b instanceof HTMLElement || (b = document.body);
		let f = b.querySelector("canvas");
		e = f ? f : x.makeCanvas(c);
		"number" !== typeof b.CID && (b.CID = 1);
		let g = b.CID,
			h = b.id || b.classList.item(0),
			k = c.name || e.name;
		"string" != typeof k && ((k = h + "-C-" + g), (c.name = k));
		e.id = k;
		e.classList.add(k);
		b.appendChild(e);
		f
			? (x.workingContext = e.context)
			: (x.resizeCanvas(e, c),
			  (b = e.getContext("2d")),
			  G(c, b),
			  (e.context = b),
			  e.context.setTransform(c.dpr, 0, 0, c.dpr, 0, 0),
			  (x.workingContext = e.context),
			  (x.workingContext.savedStates = d),
			  (x.workingContext.delayedAnimations = []));
		x.contextList[k] = e.context;
		d = {};
		for (let m in c.events) if ((b = c.events[m])) e.addEventListener(m, b), (d[m] = b);
		e.events = d;
		x.dpr = c.dpr;
		x.workingCanvas = e;
		a();
	}
	x.contextList = {};
	x.nameID = 0;
	x.getWindowWidth = function (a = document.body) {
		a = window.getComputedStyle(a);
		return (
			parseInt(a.width, 10) - parseInt(a.paddingRight, 10) - parseInt(a.paddingLeft, 10)
		);
	};
	x.resizeCanvas = function (a, b) {
		const c = b.width,
			d = b.height;
		b = b.dpr || window.devicePixelRatio;
		a.style.width = c + "px";
		a.style.height = d + "px";
		a.width = b * c;
		a.height = b * d;
		a.rWidth = c;
		a.rHeight = d;
	};
	x.makeCanvas = function (a) {
		const b = document.createElement("canvas");
		x.resizeCanvas(b, a);
		return b;
	};
	x.addExtension = function (a) {
		G(a, window);
		G(a, x.extensions, !1);
	};
	x.debugAnimations = !1;
	x.extensions = {};
	x.debug = function (a) {
		x.debugAnimations = "boolean" !== typeof a ? !0 : a;
	};
	x.getCanvas = function (a) {
		return x.contextList[a] || x.workingContext;
	};
	x._ANIMATIONLOG_ = [];
	x.functions = {};
	x.COLORLIST = {};
	(function (a) {
		let b = Object.keys(a);
		for (let c = 0; c < b.length; c++) {
			let d = b[c];
			Object.defineProperty(window, d, {
				configurable: !0,
				enumerable: !0,
				get: a[d],
				set: function (e) {
					Object.defineProperty(window, d, {
						configurable: !0,
						enumerable: !0,
						value: e,
						writable: !0,
					});
				},
			});
		}
	})({
		CENTERX: function () {
			return x.workingCanvas.rWidth / 2;
		},
		CENTERY: function () {
			return x.workingCanvas.rHeight / 2;
		},
	});
	window.C = x;
	let ka = { loop: 1 },
		H = {
			number: "color: #9afcad;",
			keyword: "color: #adacdf;",
			running: "color: yellow;",
			delayed: "color: orange;",
			finished: "color: #3aff5f;",
		};
	function J(a, b = a) {
		x.workingContext.scale(a, b);
		0 > b && (x.workingContext.yAxisInverted = !0);
	}
	function la() {
		x.workingContext.savedStates = ma();
		x.workingContext.save();
	}
	function na() {
		G(x.workingContext.savedStates, x.workingContext);
		x.workingContext.restore();
	}
	function oa() {
		x.workingContext.setTransform(x.dpr, 0, 0, x.dpr, 0, 0);
	}
	function ma(a) {
		a = x.contextList[a] || x.workingContext;
		return {
			background: a.background,
			colorMode: a.colorMode,
			strokeStyle: a.strokeStyle,
			fillStyle: a.fillStyle,
			lineWidth: a.lineWidth,
			doStroke: a.doStroke,
			doFill: a.doFill,
			pathStarted: a.pathStarted,
			yAxisInverted: a.yAxisInverted,
			netRotation: a.netRotation,
			fontStyle: a.fontStyle,
			fontVariant: a.fontVariant,
			fontWeight: a.fontWeight,
			fontStretch: a.fontStretch,
			fontSize: a.fontSize,
			lineHeight: a.lineHeight,
			fontFamily: a.fontFamily,
			font: a.font,
			textAlign: a.textAlign,
			textBaseline: a.textBaseline,
			events: a.events,
		};
	}
	function pa(a, b, c, d, e = 100, f = {}, g) {
		function h() {
			m.currentLoop = window.requestAnimationFrame(h);
			x.workingContext = m;
			let q = ma(c);
			f && G(n, x.workingContext);
			b(window.performance.now() - m.timeStart, k());
			f && G(q, x.workingContext);
		}
		function k() {
			let q = window.performance.now(),
				p = q - m.recentTimeStamp;
			m.recentTimeStamp = q;
			m.timeDelayList.push(p);
			m.totalTimeCaptured += p;
			m.timeDelayList.length > e && (m.totalTimeCaptured -= m.timeDelayList.shift());
			return m.timeDelayList.length / (m.totalTimeCaptured / 1e3);
		}
		let m;
		"function" == typeof a && ((f = d = c = b = a = ka.loop++), (g = arguments[4]));
		c ? (m = x.contextList[c]) : ((m = x.workingContext), (c = m.name));
		m.timeDelayList = [];
		m.totalTimeCaptured = 0;
		let n = Object.assign(ma(c) || {}, f);
		if (void 0 != m.currentLoop)
			x.debugAnimations &&
				(console.log(c + ": " + a + " %cdelayed", H.delayed),
				x._ANIMATIONLOG_.push({
					canvas: m,
					animationName: a,
					state: "delayed",
					settings: n,
				})),
				m.delayedAnimations.push({
					name: a,
					settings: n,
					functionToRun: b,
					canvasName: c,
					timeDelay: d,
					timeDelaysToRemember: e,
					dur: g,
				});
		else {
			if (x.debugAnimations) {
				let q = `${c}: ${a} %crunning`,
					p = [H.running];
				void 0 != g && ((q += `%c for %c${g}ms`), p.push(H.keyword, H.number));
				x._ANIMATIONLOG_.push({
					canvas: m,
					animationName: a,
					state: "running",
					settings: n,
					dur: g,
				});
				console.log(q, ...p);
			}
			m.recentTimeStamp = window.performance.now();
			m.timeStart = window.performance.now();
			isNaN(d)
				? h()
				: ((m.currentLoopName = a),
				  (m.currentLoop = setInterval(function () {
						x.workingContext = m;
						let q = ma(c);
						G(n, x.workingContext);
						b(window.performance.now() - m.timeStart, k());
						G(q, x.workingContext);
				  }, d)));
		}
	}
	function qa(a, b) {
		let c = x.workingContext;
		a ? (c = x.contextList[a]) : (a = c.name);
		clearInterval(c.currentLoop);
		window.cancelAnimationFrame(c.currentLoop);
		c.currentLoop = void 0;
		if (x.debugAnimations) {
			a = `${a}: ${c.currentLoopName} %cfinished`;
			let d = [H.finished];
			void 0 != b && ((a += `%c in %c${b.toFixed(3)}ms`), d.push(H.keyword, H.number));
			console.log(a, ...d);
			x._ANIMATIONLOG_.push({
				canvas: c,
				animationName: c.currentLoopName,
				state: "finished",
				endTime: b,
			});
		}
		0 < c.delayedAnimations.length &&
			((b = c.delayedAnimations.shift()),
			pa(
				b.name,
				b.functionToRun,
				b.canvasName,
				b.timeDelay,
				b.timeDelaysToRememberm,
				b.settings,
				b.dur,
			));
	}
	function ra() {
		let a = x.workingContext;
		a.beginPath();
		a.pathStarted = !0;
	}
	function sa() {
		let a = x.workingContext;
		a.closePath();
		a.pathStarted = !1;
	}
	function L(a = !1) {
		let b = x.workingContext;
		if (a) {
			let {
				fontStyle: c,
				fontVariant: d,
				fontWeight: e,
				fontStretch: f,
				fontSize: g,
				lineHeight: h,
				fontFamily: k,
			} = b;
			return `${c} ${d} ${e} ${f} ${g}/${h} ${k}`;
		}
		return b.font;
	}
	function ta(a = "image/png") {
		return x.workingContext.canvas.toDataURL(a);
	}
	var M = {
		background: function (...a) {
			a = l(a).hex8;
			let b = x.workingContext;
			b.background = a;
			b.save();
			oa();
			b.fillStyle = a;
			b.fillRect(0, 0, b.canvas.width, b.canvas.height);
			b.restore();
		},
		clear: function (a, b, c, d) {
			let e = x.workingContext,
				f = x.dpr;
			a = a || 0;
			b = b || 0;
			c = c || e.canvas.width;
			d = d || e.canvas.height;
			e.save();
			e.setTransform(f, 0, 0, f, 0, 0);
			e.clearRect(a, b, c, d);
			e.restore();
		},
	};
	M.endShape = sa;
	M.fill = function (...a) {
		let b = x.workingContext;
		0 !== arguments.length ? ((b.fillStyle = l(a).hex8), (b.doFill = !0)) : b.fill();
	};
	M.fontFamily = function (a) {
		let b = x.workingContext;
		b.fontFamily = a;
		b.font = L(!0);
	};
	M.fontSize = function (a) {
		let b = x.workingContext;
		b.fontSize = "number" === typeof a ? a + "px" : a;
		b.font = L(!0);
	};
	M.fontStretch = function (a) {
		let b = x.workingContext;
		b.fontStretch = a;
		b.font = L(!0);
	};
	M.fontStyle = function (a) {
		let b = x.workingContext;
		b.fontStyle = a;
		b.font = L(!0);
	};
	M.fontVariant = function (a) {
		let b = x.workingContext;
		b.fontVariant = a;
		b.font = L(!0);
	};
	M.fontWeight = function (a) {
		let b = x.workingContext;
		b.fontWeight = a;
		b.font = L(!0);
	};
	M.getCanvasData = ta;
	M.getContextStates = ma;
	M.getFont = L;
	M.lineCap = function (a) {
		x.workingContext.lineCap = a;
	};
	M.lineDash = function () {
		x.workingContext.setLineDash([...arguments]);
	};
	M.lineHeight = function (a) {
		let b = x.workingContext;
		b.lineHeight = a;
		b.font = L(!0);
	};
	M.lineJoin = function (a) {
		x.workingContext.lineJoin = a;
	};
	M.lineTo = function (a, b) {
		x.workingContext.lineTo(a, b);
	};
	M.loop = pa;
	M.measureText = function (a) {
		return x.workingContext.measureText(a);
	};
	M.moveTo = function (a, b) {
		x.workingContext.moveTo(a, b);
	};
	M.noFill = function () {
		x.workingContext.doFill = !1;
	};
	M.noLoop = qa;
	M.noStroke = function () {
		x.workingContext.doStroke = !1;
	};
	M.permaBackground = function (a) {
		"string" != typeof a && (a = ta());
		let b = x.workingContext.canvas.style;
		b.background = "url('" + a + "')";
		b.backgroundPosition = "center";
		b.backgroundSize = "cover";
	};
	M.putImageData = function () {
		x.workingContext.putImageData(...arguments);
	};
	M.rest = oa;
	M.restore = na;
	M.rotate = function (a) {
		let b = x.workingContext;
		b.rotate(a);
		b.netRotation = ((b.netRotation + a) % Math.PI) * 2;
	};
	M.save = la;
	M.saveCanvas = function (a = "drawing", b = "image/png") {
		b = ta().replace(b, "image/octet-stream");
		let c = document.createElement("a");
		c.download = a + ".png";
		c.href = b;
		c.click();
	};
	M.scale = J;
	M.setImageSmoothing = function (a) {
		x.workingContext.imageSmoothingEnabled = !!a;
	};
	M.startShape = ra;
	M.stroke = function (...a) {
		let b = x.workingContext;
		0 < arguments.length ? ((b.strokeStyle = l(a).hex8), (b.doStroke = !0)) : b.stroke();
	};
	M.strokeWidth = function (a) {
		x.workingContext.lineWidth = Number(a);
	};
	M.textAlign = function (a) {
		x.workingContext.textAlign = a;
	};
	M.textBaseline = function (a) {
		x.workingContext.textBaseline = a;
	};
	M.transform = function (a, b, c, d, e, f) {
		let g = x.workingContext;
		if (void 0 == a || null == a) return x.workingContext.getTransform();
		a instanceof DOMMatrix
			? g.setTransform(a.a, a.b, a.c, a.d, a.e, a.f)
			: g.setTransform(a || 0, b || 0, c || 0, d || 0, e || 0, f || 0);
		g.scale(x.dpr, x.dpr);
	};
	M.translate = function (a, b = 0) {
		x.workingContext.translate(a, b);
	};
	const ua = 180 / Math.PI;
	var N = {};
	N.DEG = Math.PI / 180;
	N.E = 2.718281828459045;
	N.HALF_PI = 1.5707963267948966;
	N.LN10 = 2.302585092994046;
	N.LN2 = 0.6931471805599453;
	N.PHI = 1.618033988749894;
	N.PI = 3.141592653589793;
	N.QUATER_PI = 0.7853981633974483;
	N.RAD = ua;
	N.SQRT2 = 1.4142135623730951;
	N.TAU = 6.283185307179586;
	N.TIERCE_PI = 1.0471975511965976;
	N.TWO_PI = 6.283185307179586;
	let va = {
		YlGn: "#ffffe5 #f7fcb9 #d9f0a3 #addd8e #78c679 #41ab5d #238443 #006837 #004529",
		GnBu: "#f7fcf0 #e0f3db #ccebc5 #a8ddb5 #7bccc4 #4eb3d3 #2b8cbe #0868ac #084081",
		BuGn: "#f7fcfd #e5f5f9 #ccece6 #99d8c9 #66c2a4 #41ae76 #238b45 #006d2c #00441b",
		PuBu: "#fff7fb #ece7f2 #d0d1e6 #a6bddb #74a9cf #3690c0 #0570b0 #045a8d #023858",
		BuPu: "#f7fcfd #e0ecf4 #bfd3e6 #9ebcda #8c96c6 #8c6bb1 #88419d #810f7c #4d004b",
		RdPu: "#fff7f3 #fde0dd #fcc5c0 #fa9fb5 #f768a1 #dd3497 #ae017e #7a0177 #49006a",
		PuRd: "#f7f4f9 #e7e1ef #d4b9da #c994c7 #df65b0 #e7298a #ce1256 #980043 #67001f",
		OrRd: "#fff7ec #fee8c8 #fdd49e #fdbb84 #fc8d59 #ef6548 #d7301f #b30000 #7f0000",
		Reds: "#fff5f0 #fee0d2 #fcbba1 #fc9272 #fb6a4a #ef3b2c #cb181d #a50f15 #67000d",
		Blues: "#f7fbff #deebf7 #c6dbef #9ecae1 #6baed6 #4292c6 #2171b5 #08519c #08306b",
		Greys: "#ffffff #f0f0f0 #d9d9d9 #bdbdbd #969696 #737373 #525252 #252525 #000000",
		YlGnBu: "#ffffd9 #edf8b1 #c7e9b4 #7fcdbb #41b6c4 #1d91c0 #225ea8 #253494 #081d58",
		PuBuGn: "#fff7fb #ece2f0 #d0d1e6 #a6bddb #67a9cf #3690c0 #02818a #016c59 #014636",
		YlOrRd: "#ffffcc #ffeda0 #fed976 #feb24c #fd8d3c #fc4e2a #e31a1c #bd0026 #800026",
		YlOrBr: "#ffffe5 #fff7bc #fee391 #fec44f #fe9929 #ec7014 #cc4c02 #993404 #662506",
		Greens: "#f7fcf5 #e5f5e0 #c7e9c0 #a1d99b #74c476 #41ab5d #238b45 #006d2c #00441b",
		Purples: "#fcfbfd #efedf5 #dadaeb #bcbddc #9e9ac8 #807dba #6a51a3 #54278f #3f007d",
		Oranges: "#fff5eb #fee6ce #fdd0a2 #fdae6b #fd8d3c #f16913 #d94801 #a63603 #7f2704",
		PuOr: "#7f3b08 #b35806 #e08214 #fdb863 #fee0b6 #f7f7f7 #d8daeb #b2abd2 #8073ac #542788 #2d004b",
		BrBG: "#543005 #8c510a #bf812d #dfc27d #f6e8c3 #f5f5f5 #c7eae5 #80cdc1 #35978f #01665e #003c30",
		PRGn: "#40004b #762a83 #9970ab #c2a5cf #e7d4e8 #f7f7f7 #d9f0d3 #a6dba0 #5aae61 #1b7837 #00441b",
		PiYG: "#8e0152 #c51b7d #de77ae #f1b6da #fde0ef #f7f7f7 #e6f5d0 #b8e186 #7fbc41 #4d9221 #276419",
		RdBu: "#67001f #b2182b #d6604d #f4a582 #fddbc7 #f7f7f7 #d1e5f0 #92c5de #4393c3 #2166ac #053061",
		RdGy: "#67001f #b2182b #d6604d #f4a582 #fddbc7 #ffffff #e0e0e0 #bababa #878787 #4d4d4d #1a1a1a",
		RdYlBu:
			"#a50026 #d73027 #f46d43 #fdae61 #fee090 #ffffbf #e0f3f8 #abd9e9 #74add1 #4575b4 #313695",
		RdYlGn:
			"#a50026 #d73027 #f46d43 #fdae61 #fee08b #ffffbf #d9ef8b #a6d96a #66bd63 #1a9850 #006837",
		Spectral:
			"#9e0142 #d53e4f #f46d43 #fdae61 #fee08b #ffffbf #e6f598 #abdda4 #66c2a5 #3288bd #5e4fa2",
		Heat: "#0000ff #00ffff #00ff00 #ffff00 #ff0000",
		Jet: "#000080 #0000ff #0080ff #00ffff #80ff80 #ffff00 #ff8000 #ff0000 #800000",
		Parula:
			"#352a87 #2450d0 #0a72de #128ad2 #06a4ca #1ab2b1 #51bd90 #92bf72 #c6bc5e #f6ba46 #f9d528 #f9fb0e",
		Magma:
			"#000004 #120d31 #331067 #5a167e #7e2482 #a3307e #c83e73 #e95462 #f97b5d #fea973 #fed395 #fcfdbf",
		Inferno:
			"#000004 #140b34 #390963 #61136e #85216b #a92e5e #cb4149 #e65d2f #f78212 #fcae12 #f5db4c #fcffa4",
		Plasma:
			"#0d0887 #3e049c #6300a7 #8707a6 #a62098 #c03a83 #d5546e #e76f5a #f58c46 #fdae32 #fcd225 #f0f921",
		Viridis:
			"#440154 #482173 #433e85 #38598c #2d708e #25858e #1e9b8a #2ab07f #50c46a #86d549 #c2df23 #fde725",
		Cividis:
			"#00204d #00306f #2a406c #48526b #5e626e #727374 #878479 #9e9677 #b6a971 #d0be67 #ead357 #ffea46",
		GitHub: "#eeeeee #c6e48b #7bc96f #239a3b #196127",
		Turbo:
			"#30123b #4454c3 #448ffe #1fc9dd #2aefa1 #7dff56 #c1f334 #f1cb3a #fe932a #ea4e0d #be2102 #7a0403",
		Grey: "#000000 #ffffff",
		Gray: "#000000 #ffffff",
	};
	for (var wa in va) va[wa] = va[wa].split(" ");
	var xa = {};
	xa.ColorPalettes = va;
	function ya(a = 10, b = 0) {
		return Math.round(Math.random() * (a - b) + b);
	}
	var za = {};
	za.randomInt = ya;
	let Aa = Object.keys(aa);
	const Ba = Aa.indexOf("TRANSPARENT");
	Aa = Aa.slice(0, Ba).concat(Aa.slice(Ba + 1));
	function Ca(a, b, c) {
		a = l(a).rgbaA;
		b = l(b).rgbaA;
		return l(
			Math.min(Math.max(0, (b[0] - a[0]) * c + a[0]), 255),
			Math.min(Math.max(0, (b[1] - a[1]) * c + a[1]), 255),
			Math.min(Math.max(0, (b[2] - a[2]) * c + a[2]), 255),
			Math.min(Math.max(0, (b[3] - a[3]) * c + a[3]), 255),
		).hex8;
	}
	var Da = {
		getInterpolatedColorList: function (a, b = 0, c = 5, d) {
			if (1 == a.length)
				throw Error("Atleast 2 colors are needed to create interpolatable object");
			c = (c - b) / (a.length - 1);
			let e = {};
			for (let f = 0; f < a.length; f++) {
				let g = b + f * c,
					h = l(a[f]).rgbaA;
				h[3] = isNaN(d) ? h[3] : d;
				e[g] = h;
			}
			return e;
		},
	};
	Da.lerpColor = Ca;
	Da.lerpColorArray = function (a, b, c = 0, d = 1) {
		let e = a.length - 1;
		if (b >= d) return a[e];
		if (b <= c) return a[0];
		b = ((b - c) / (d - c)) * e;
		c = Math.floor(b);
		return Ca(a[c], a[c + 1], b - c);
	};
	Da.lerpColorObject = function (a, b) {
		const c = Object.keys(a || {}).sort();
		var d = Math.min(...c),
			e = Math.max(...c);
		let f = "#000000";
		if (b >= e) return a[e];
		if (b <= d) return a[d];
		for (d = 0; d < c.length - 1; d++)
			if (((e = c[d]), b > e)) {
				f = Ca(a[e], a[c[d + 1]], (b - e) / (c[d + 1] - e));
				break;
			} else if (b == e) {
				f = a[e];
				break;
			}
		return f;
	};
	function Ea(a, b, c) {
		0 > c && (c += 1);
		1 < c && --c;
		return c < 1 / 6
			? a + 6 * (b - a) * c
			: 0.5 > c
			? b
			: c < 2 / 3
			? a + (b - a) * (2 / 3 - c) * 6
			: a;
	}
	var Fa = {
		HSLToRGB: function (a, b, c) {
			a /= 360;
			if (0 === b) c = b = a = c;
			else {
				let d = 0.5 > c ? c * (1 + b) : c + b - c * b,
					e = 2 * c - d;
				c = Ea(e, d, a + 1 / 3);
				b = Ea(e, d, a);
				a = Ea(e, d, a - 1 / 3);
			}
			return [c, b, a];
		},
		HSVToRGB: function (a, b, c) {
			let d,
				e,
				f,
				g = Math.floor(a / 60),
				h = a / 60 - g;
			a = c * (1 - b);
			let k = c * (1 - h * b);
			b = c * (1 - (1 - h) * b);
			g %= 6;
			0 == g
				? ((d = c), (e = b), (f = a))
				: 1 == g
				? ((d = k), (e = c), (f = a))
				: 2 == g
				? ((d = a), (e = c), (f = b))
				: 3 == g
				? ((d = a), (e = k), (f = c))
				: 4 == g
				? ((d = b), (e = a), (f = c))
				: 5 == g && ((d = c), (e = a), (f = k));
			return [d, e, f];
		},
		RGBToHSL: function (a, b, c) {
			let d = Math.max(a, b, c);
			var e = Math.min(a, b, c);
			let f,
				g = (d + e) / 2;
			if (d === e) f = e = 0;
			else {
				let h = d - e;
				e = 0.5 < g ? h / (2 - d - e) : h / (d + e);
				d == a
					? (f = (b - c) / h + (b < c ? 6 : 0))
					: d == b
					? (f = (c - a) / h + 2)
					: d == c && (f = (a - b) / h + 4);
				f /= 6;
			}
			return [f, e, g];
		},
		RGBToHSV: function (a, b, c) {
			let d = Math.max(a, b, c),
				e = Math.min(a, b, c),
				f,
				g = d - e;
			d === e
				? (f = 0)
				: (d == a
						? (f = (b - c) / g + (b < c ? 6 : 0))
						: d == b
						? (f = (c - a) / g + 2)
						: d == c && (f = (a - b) / g + 4),
				  (f /= 6));
			return [f, 0 === d ? 0 : g / d, d];
		},
	};
	Fa.hue2RGB = Ea;
	function Ga(a, b, c) {
		var d = new Image();
		d.src = a;
		"function" == typeof b && d.addEventListener("load", () => b(d), !1);
		"function" == typeof c && d.addEventListener("error", (e) => c(e, d), !1);
		return d;
	}
	var Ha = {
		drawImage: function (a) {
			let b = x.workingContext,
				c,
				d;
			6 > arguments.length
				? ((c = arguments[1]), (d = arguments[2]))
				: ((c = arguments[5]), (d = arguments[6]));
			b.yAxisInverted
				? (b.save(),
				  b.translate(c, d),
				  b.scale(1, -1),
				  b.drawImage(a, 0, 0, ...Array.prototype.slice.call(arguments, 3)),
				  b.restore())
				: b.drawImage(a, c, d, ...Array.prototype.slice.call(arguments, 3));
		},
	};
	Ha.loadImage = Ga;
	Ha.loadImagePromise = function (a) {
		return new Promise((b, c) => {
			Ga(a, b, c);
		});
	};
	Ha.pixel = function (a, b, c, d) {
		let e = x.workingContext;
		c && (e.fillStyle = c);
		d || (d = 1 / x.dpr);
		e.fillRect(a, b, d, d);
	};
	function Ia(a) {
		if ("object" != typeof window.MathJax || "function" != typeof window.MathJax.tex2svg)
			throw Error("MathJax is not found. Please include it.");
		var b = x.workingContext;
		a = window.MathJax.tex2svg(a).getElementsByTagName("svg")[0];
		let c = a.getElementsByTagName("g")[0];
		a.style.verticalAlign = "1ex";
		a.style.fontSize = parseFloat(b.font) + "px";
		c.setAttribute("stroke", b.strokeStyle);
		c.setAttribute("fill", b.fillStyle);
		b = new Blob([a.outerHTML], { type: "image/svg+xml;charset=utf-8" });
		b = (window.URL || window.webkitURL).createObjectURL(b);
		a = new Image();
		a.src = b;
		return a;
	}
	function Ja(a, b, c) {
		let d = Ia(a),
			e = x.workingContext,
			f = e.textAlign,
			g = e.textBaseline;
		d.onload = function () {
			e.save();
			let { width: h, height: k } = d;
			switch (f) {
				case "center":
					e.translate(-h / 2, 0);
					break;
				case "right":
					e.translate(-h, 0);
			}
			switch (g) {
				case "middle":
					e.translate(0, k / 2);
					break;
				case "bottom":
					e.translate(0, k);
			}
			e.yAxisInverted && (e.scale(1, -1), (c *= -1));
			e.drawImage(d, b || 0, c || 0);
			e.restore();
		};
		return d;
	}
	var Ka = {};
	Ka.getImageFromTex = Ia;
	Ka.tex = Ja;
	function La(a, b = 0, c = 0, d) {
		let e = x.workingContext;
		e.yAxisInverted && (J(1, -1), (c *= -1));
		e.fillText(a, b, c, d);
		e.yAxisInverted && J(1, -1);
	}
	var Na = {};
	Na.fillText = La;
	Na.strokeText = function (a, b = 0, c = 0, d) {
		let e = x.workingContext;
		e.yAxisInverted && (J(1, -1), (c *= -1));
		e.strokeText(a, b, c, d);
		e.yAxisInverted && J(1, -1);
	};
	Na.text = function (a, b = 0, c = 0, d) {
		let e = x.workingContext;
		e.yAxisInverted && (J(1, -1), (c *= -1));
		e.doFill ? e.fillText(a, b, c, d) : e.doStroke && e.strokeText(a, b, c, d);
		e.yAxisInverted && J(1, -1);
	};
	function Oa(a, b) {
		return Math.sqrt(Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2));
	}
	function Pa(a, b, c, d = 10) {
		Array.isArray(a) && 2 === a.length && ((b = a[1]), (a = a[0]));
		return [Math.cos(c) * d + a, Math.sin(c) * d + b];
	}
	function Qa(a, b, c, d) {
		b = (b[1] - a[1]) / (b[0] - a[0]);
		d = (d[1] - c[1]) / (d[0] - c[0]);
		a = a[1] - a[0] * b;
		c = (c[1] - c[0] * d - a) / (b - d);
		return [c, b * c + a];
	}
	function Ra(a, b, c, d) {
		const e = Oa(a, c);
		d = (b * b - d * d + e * e) / (2 * e);
		b = Math.sqrt(b * b - d * d);
		d /= e;
		d = [(c[0] - a[0]) * d + a[0], (c[1] - a[1]) * d + a[1]];
		return [
			[d[0] + (b * (c[1] - a[1])) / e, d[1] - (b * (c[0] - a[0])) / e],
			[d[0] - (b * (c[1] - a[1])) / e, d[1] + (b * (c[0] - a[0])) / e],
		];
	}
	function Sa(a, b, c = 10) {
		let d = b[0] - a[0],
			e = b[1] - a[1];
		b = Math.atan2(e, d);
		c = Math.sqrt(d * d + e * e) + c;
		return [a[0] + Math.cos(b) * c, a[1] + Math.sin(b) * c];
	}
	var O = {};
	O.circleIntersection = Ra;
	O.dist = Oa;
	O.extendFromOrigin = function (a, b = 10) {
		return Sa([0, 0], a, b);
	};
	O.extendFromPoint = Sa;
	O.lineIntersection = Qa;
	O.rotateAroundOrigin = function (a, b = 10) {
		return Pa(0, 0, a, b);
	};
	O.rotateAroundPoint = Pa;
	function P(a, b, c, d, e, f) {
		let g = x.workingContext,
			h = g.lineWidth;
		var k = Math.sqrt(Math.pow(a - c, 2) + Math.pow(b - d, 2));
		isNaN(e) && (e = k);
		f = f || e / 1.2;
		let m = e - k;
		var n = Math.sqrt(Math.pow(m, 2) + Math.pow(f / 2, 2));
		f = Math.atan(f / (2 * m));
		k > e && (f += Math.PI);
		e = Math.atan2(d - b, c - a);
		k = [a - Math.cos(f + e) * n, b - Math.sin(f + e) * n];
		n = [a - Math.cos(-f + e) * n, b - Math.sin(-f + e) * n];
		g.doStroke &&
			"bevel" != g.lineJoin &&
			((c -= Math.cos(e) * h), (d -= Math.sin(e) * h));
		g.save();
		g.pathStarted || g.beginPath();
		g.moveTo(a, b);
		g.lineTo(k[0], k[1]);
		g.lineTo(c, d);
		g.lineTo(n[0], n[1]);
		g.lineTo(a, b);
		g.pathStarted || (R(g), g.closePath());
		g.restore();
	}
	function Ta(a, b, c, d, e, f, g, h) {
		e = void 0 === e ? 15 : e;
		f = void 0 === f ? e / 1.2 : f;
		g = void 0 === g ? 0 : g;
		h = void 0 === h ? 0 : h;
		var k = Math.atan2(d - b, c - a),
			m = Math.sin(k) * h;
		c -= Math.cos(k) * h;
		d -= m;
		h = Math.cos(k) * (e - g);
		g = Math.sin(k) * (e - g);
		k = x.workingContext;
		(m = k.pathStarted) || ra();
		k.moveTo(a, b);
		k.lineTo(c - h, d - g);
		k.stroke();
		P(c - h, d - g, c, d, e, f);
		m || (R(k), sa());
	}
	function Ua(a, b, c, d, e, f, g, h, k, m) {
		d = void 0 === d ? Math.PI / 2 : d;
		e = void 0 === e ? 0 : e;
		f = void 0 === f ? 15 : f;
		g = void 0 === g ? f / 1.2 : g;
		h = void 0 === h ? 0 : h;
		k = void 0 === k ? 0 : k;
		m = void 0 === m ? !1 : m;
		const n = x.workingContext,
			q = f / c;
		n.save();
		h = q - h / c;
		n.beginPath();
		m
			? ((h += k),
			  n.arc(a, b, c, h + e, d + e),
			  n.stroke(),
			  n.closePath(),
			  P(
					a + c * Math.cos(e + h),
					b + c * Math.sin(e + h),
					a + c * Math.cos(e + k),
					b + c * Math.sin(e + k),
					f,
					g,
			  ))
			: ((d -= k),
			  n.arc(a, b, c, e, d - h + e),
			  n.stroke(),
			  n.closePath(),
			  P(
					a + c * Math.cos(e + d - h),
					b + c * Math.sin(e + d - h),
					a + c * Math.cos(e + d),
					b + c * Math.sin(e + d),
					f,
					g,
			  ));
		n.restore();
	}
	var S = {};
	S.arrow = Ta;
	S.arrowTip = P;
	S.curvedArrow = Ua;
	S.curvedArrowBetweenPoints = function (a, b, c, d, e, f, g, h, k) {
		d = void 0 === d ? 15 : d;
		e = void 0 === e ? d / 1.2 : e;
		f = void 0 === f ? 0 : f;
		g = void 0 === g ? 0 : g;
		h = void 0 === h ? !1 : h;
		k = void 0 === k ? !1 : k;
		const m = x.workingContext,
			n = m.pathStarted;
		m.save();
		n || m.beginPath();
		const q = Ra(a, c, b, c)[0];
		a[0] -= q[0];
		a[1] -= q[1];
		b[0] -= q[0];
		b[1] -= q[1];
		a = Math.atan2(a[1], a[0]);
		b = Math.atan2(b[1], b[0]);
		h ? ((h = a), (a = b - a)) : ((h = b), (a -= b));
		Ua(q[0], q[1], c, a, h, d, e, f, g, k);
		n || m.closePath();
		m.restore();
		return q;
	};
	S.curvedDoubleArrow = function (a, b, c, d, e, f, g, h, k) {
		d = void 0 === d ? Math.PI / 2 : d;
		e = void 0 === e ? 0 : e;
		f = void 0 === f ? 15 : f;
		g = void 0 === g ? f / 1.2 : g;
		h = void 0 === h ? 0 : h;
		k = void 0 === k ? 0 : k;
		const m = x.workingContext;
		m.save();
		const n = f / c,
			q = [-Math.cos(e + n / 2 + Math.PI / 2), -Math.sin(e + n / 2 + Math.PI / 2)];
		e += n + 2 * k;
		Ua(a, b, c, d - n + h / c, e - h / c, f, g, h, k);
		P(
			Math.cos(e - h / c) * c,
			Math.sin(e - h / c) * c,
			Math.cos(e) * c + f * q[0],
			Math.sin(e) * c + f * q[1],
			f,
			g,
		);
		m.restore();
	};
	S.curvedDoubleArrowBetweenPoints = function (a, b, c, d, e, f, g, h) {
		d = void 0 === d ? 15 : d;
		e = void 0 === e ? d / 1.2 : e;
		f = void 0 === f ? 0 : f;
		g = void 0 === g ? 0 : g;
		h = void 0 === h ? !1 : h;
		const k = x.workingContext;
		k.save();
		const m = Ra(a, c, b, c)[0];
		a[0] -= m[0];
		a[1] -= m[1];
		b[0] -= m[0];
		b[1] -= m[1];
		const n = d / c;
		a = Math.atan2(a[1], a[0]);
		b = Math.atan2(b[1], b[0]) + n;
		h ? ((h = a), (a = b - a)) : ((h = b), (a -= b));
		f /= c;
		Ua(m[0], m[1], c, a + f - g, h - f + g, d, e, f * c, g);
		f = n - f + g;
		h -= n;
		P(
			m[0] + c * Math.cos(h + f),
			m[1] + c * Math.sin(h + f),
			m[0] + c * Math.cos(h + g),
			m[1] + c * Math.sin(h + g),
			d,
			e,
		);
		k.restore();
		return m;
	};
	S.doubleArrow = function (a, b, c, d, e, f, g, h) {
		e = void 0 === e ? 15 : e;
		f = void 0 === f ? e / 1.2 : f;
		g = void 0 === g ? 0 : g;
		h = void 0 === h ? 0 : h;
		var k = Math.atan2(d - b, c - a);
		const m = Math.cos(k) * (e - g),
			n = Math.sin(k) * (e - g),
			q = Math.sin(k) * h;
		k = Math.cos(k) * h;
		ra();
		a += m + k;
		b += n + q;
		Ta(a, b, c, d, e, f, g, h);
		P(a, b, a - m, b - n, e, f);
		R(x.workingContext);
		sa();
	};
	S.measurement = function (a) {
		const b = x.workingContext;
		a = E(
			{
				background: "rgba(0,0,0,0)",
				tipWidth: 15,
				tipHeight: 12.5,
				innerPadding: 3,
				outerPadding: 0,
				textRotation: 0,
				arrowCurving: 0,
			},
			a,
		);
		const { p1: c, p2: d } = a;
		var e = Math.atan2(d[1] - c[1], d[0] - c[0]),
			{ width: f } = b.measureText(a.text);
		e = [Math.cos(e) * (a.innerPadding + f / 2), Math.sin(e) * (a.innerPadding + f / 2)];
		f = [(c[0] + d[0]) / 2, (c[1] + d[1]) / 2];
		Ta(
			f[0] - e[0],
			f[1] - e[1],
			c[0],
			c[1],
			a.tipWidth,
			a.tipHeight,
			a.arrowCurving,
			a.outerPadding,
		);
		Ta(
			f[0] + e[0],
			f[1] + e[1],
			d[0],
			d[1],
			a.tipWidth,
			a.tipHeight,
			a.arrowCurving,
			a.outerPadding,
		);
		la();
		b.translate(f[0], f[1]);
		b.textAlign = "center";
		b.textBaseline = "middle";
		b.rotate(Math.atan2(d[1] - c[1], d[0] - c[0]) + a.textRotation);
		La(a.text, 0, 0);
		na();
	};
	function Va(a, b, c, d, e = 1) {
		return [
			b[0] + ((c[0] - a[0]) / 6) * e,
			b[1] + ((c[1] - a[1]) / 6) * e,
			c[0] - ((d[0] - b[0]) / 6) * e,
			c[1] - ((d[1] - b[1]) / 6) * e,
		];
	}
	function Wa(a, b = 1, c = !0, d = 0) {
		for (let e = 0; e < a.length - 1 - d; e++) {
			let f = a[e + 1],
				g = Va(
					0 != e ? a[e - 1] : a[0],
					a[e],
					f,
					e != a.length - 2 ? a[e + 2] : c ? a[1] : f,
					b,
				);
			x.workingContext.bezierCurveTo(g[0], g[1], g[2], g[3], f[0], f[1]);
		}
	}
	function Xa(a, b = 1, c = !0, d = 0) {
		let e = x.workingContext;
		e.beginPath();
		e.moveTo(a[0][0], a[0][1]);
		Wa(a, b, c, d);
		e.doFill && c && e.fill();
		e.doStroke && e.stroke();
		e.closePath();
	}
	function Ya(a, b, c, d) {
		let e = x.workingContext;
		e.beginPath();
		e.moveTo(a, b);
		e.lineTo(c, d);
		e.stroke();
		e.closePath();
	}
	function Za(a, b, c, d) {
		let e = x.workingContext;
		e.beginPath();
		e.rect(a, b, c, d);
		e.doFill && e.fill();
		e.doStroke && e.stroke();
		e.closePath();
	}
	function $a(a, b, c, d, e = 0) {
		ab(a, b, c, d / (2 * Math.sin(Math.PI / c)), e);
	}
	function ab(a, b, c, d, e = 0) {
		let f = 0,
			g = (2 * Math.PI) / c,
			h = x.workingContext;
		e += g / 2;
		let k = [Math.cos(e) * d + a, Math.sin(e) * d + b];
		h.beginPath();
		for (h.moveTo(k[0], k[1]); f++ < c; )
			h.lineTo(Math.cos(f * g + e) * d + a, Math.sin(f * g + e) * d + b);
		h.lineTo(k[0], k[1]);
		h.closePath();
		h.doFill && h.fill();
		h.doStroke && h.stroke();
	}
	var T = {
		angle: function (a, b, c, d, e = 20, f = 10, g = !1, h = 1) {
			var k = Qa(a, b, c, d);
			let m = k[0];
			k = k[1];
			if (isNaN(m) || isNaN(k)) throw Error("No intersection point");
			a = Math.atan2(a[1] - k, a[0] - m);
			b = Math.atan2(b[1] - k, b[0] - m);
			c = Math.atan2(c[1] - k, c[0] - m);
			d = Math.atan2(d[1] - k, d[0] - m);
			d = { 1: [b, d], 2: [d, a], 3: [a, c], 4: [c, b] }[h];
			h = x.workingContext;
			g ? ((g = d[1]), (d = d[0] - d[1])) : ((g = d[0]), (d = d[1] - d[0]));
			h.doFill &&
				(h.beginPath(),
				h.moveTo(m, k),
				h.arc(m, k, e, g, d + g),
				h.fill(),
				h.closePath());
			h.doStroke && (h.beginPath(), h.arc(m, k, e, g, d + g), h.stroke(), h.closePath());
			return {
				center: [m + (e + f) * Math.cos(g + d / 2), k + (e + f) * Math.sin(g + d / 2)],
				ang: d,
			};
		},
		annulus: function (a, b, c, d) {
			let e = x.workingContext;
			e.beginPath();
			e.arc(a, b, c, 0, 2 * Math.PI, !1);
			e.moveTo(d, 0);
			e.arc(a, b, d, 0, 2 * Math.PI, !0);
			R(e);
		},
		annulusSector: function (a, b, c, d, e, f) {
			let g = x.workingContext;
			g.beginPath();
			g.arc(a, b, c, f, f + e, !1);
			g.arc(a, b, d, f + e, f, !0);
			R(g);
		},
		arc: function (a, b, c, d = Math.PI / 2, e = 0) {
			let f = x.workingContext;
			f.pathStarted || f.beginPath();
			f.arc(a, b, c, e, e + d);
			f.pathStarted || R(f);
		},
		arcBetweenPoints: function (a, b, c, d, e, f = !1) {
			a == c &&
				b == d &&
				console.error("Can't draw a arc between points. Given points are exactly same");
			let g = Ra([a, b], e, [c, d], e)[0],
				h = x.workingContext;
			a = Math.atan2(b - g[1], a - g[0]);
			c = Math.atan2(d - g[1], c - g[0]) - a;
			h.pathStarted || (h.save(), h.beginPath());
			h.arc(g[0], g[1], e, a, c + a, !f);
			h.pathStarted || (R(h), h.restore());
			return g;
		},
		bezier: function (a, b, c, d, e, f) {
			let g = x.workingContext;
			g.pathStarted || g.beginPath();
			g.bezierCurveTo(a, b, c, d, e, f);
			g.pathStarted || R(g);
		},
		circle: function (a, b, c) {
			let d = x.workingContext;
			d.beginPath();
			d.arc(a, b, c, 0, 2 * Math.PI);
			d.doFill && d.fill();
			d.doStroke && d.stroke();
		},
		circularSegment: function (a, b, c, d = Math.PI / 2, e = 0) {
			let f = x.workingContext;
			f.pathStarted || f.beginPath();
			f.arc(a, b, c, e, e + d);
			f.pathStarted || R(f);
		},
		ellipse: function (a, b, c, d, e = 0, f = 0, g = 2 * Math.PI) {
			let h = x.workingContext;
			h.pathStarted || h.beginPath();
			h.ellipse(a, b, c, d, e, f, f + g);
			h.pathStarted || R(h);
		},
		equiTriangle: function (a, b, c, d = 0) {
			$a(a, b, 3, c, d);
		},
	};
	T.getBezierControlPoints = Va;
	T.line = Ya;
	T.point = function (a, b, c = 10, d = !1) {
		let e = x.workingContext;
		e.beginPath();
		e.arc(a, b, c / 2, 0, 2 * Math.PI);
		e.fill();
		d && e.stroke();
		e.beginPath();
	};
	T.polygon = function () {
		let a = arguments;
		if (2 < a.length) {
			let b = x.workingContext,
				c = a[0];
			b.beginPath();
			b.moveTo(c[0], c[1]);
			for (let d = 1; d < a.length; d++) b.lineTo(a[d][0], a[d][1]);
			b.lineTo(c[0], c[1]);
			b.doFill && b.fill();
			b.doStroke && b.stroke();
			b.closePath();
		}
	};
	T.quad = function (a, b, c, d) {
		let e = x.workingContext;
		e.beginPath();
		e.moveTo(a[0], a[1]);
		e.lineTo(b[0], b[1]);
		e.lineTo(c[0], c[1]);
		e.lineTo(d[0], d[1]);
		e.lineTo(a[0], a[1]);
		e.doFill && e.fill();
		e.doStroke && e.stroke();
		e.closePath();
	};
	T.quadraticCurve = function () {
		let a = x.workingContext,
			b = arguments;
		4 == b.length
			? a.quadraticCurveTo(b[0], b[1], b[2], b[3])
			: 6 == b.length &&
			  (a.beginPath(),
			  a.moveTo(b[0], b[1]),
			  a.quadraticCurveTo(b[2], b[3], b[4], b[5]),
			  R(a));
	};
	T.rect = Za;
	T.regularPolygon = $a;
	T.regularPolygonWithRadius = ab;
	T.sector = function (a, b, c, d = Math.PI / 2, e = 0) {
		let f = x.workingContext;
		f.beginPath();
		f.moveTo(a, b);
		f.arc(a, b, c, e, e + d);
		f.lineTo(a, b);
		R(f);
	};
	T.smoothCurveThroughPoints = Xa;
	T.smoothCurveThroughPointsTo = Wa;
	T.square = function (a, b, c) {
		Za(a, b, c, c);
	};
	T.triangle = function (a, b, c) {
		let d = x.workingContext;
		d.beginPath();
		d.moveTo(a[0], a[1]);
		d.lineTo(b[0], b[1]);
		d.lineTo(c[0], c[1]);
		d.lineTo(a[0], a[1]);
		d.doFill && d.fill();
		d.doStroke && d.stroke();
		d.closePath();
	};
	const bb = {
		then: function (a) {
			a();
			return bb;
		},
	};
	let cb = { parametricFunction: 1 };
	const db = [0, 10, 0.1],
		eb = [1, 1];
	function fb(a) {
		function b() {
			let r = x.workingContext;
			for (let z = 0; z < k.length; z++) {
				let B = k[z];
				if (e) Xa(B, f, h);
				else {
					r.beginPath();
					r.moveTo(B[0][0], B[0][1]);
					for (let v = 1; v < B.length; v++) r.lineTo(B[v][0], B[v][1]);
					r.closePath();
					R(r);
				}
			}
		}
		a = E(
			{
				tension: 1,
				unitValue: eb,
				unitSpace: eb,
				range: db,
				discontinuities: [],
				smoothen: !0,
				closed: !1,
				draw: !0,
				dur: 4e3,
			},
			a,
		);
		let {
			plotter: c,
			range: d,
			smoothen: e,
			tension: f,
			discontinuities: g,
			closed: h,
		} = a;
		Array.isArray(d) && 2 == d.length && d.push((d[1] - d[0]) / 20);
		let k = [[]];
		var m = d[0];
		let n = d[1],
			q = d[2];
		Array.isArray(g) || (g = []);
		let p = 0,
			t = 0,
			A = a.unitSpace[0] / a.unitValue[0],
			D = a.unitSpace[1] / a.unitValue[1],
			w;
		w = isNaN(a.discontinuityRadius) ? q : a.discontinuityRadius;
		for (q < w && (w = q / 2); m <= n + w; m += q) {
			if (-1 < gb(m, g, w)) {
				-1 < gb(m + q, g, w) && (p++, k.push([]));
				continue;
			}
			let r = c(m);
			k[p].push([r[0] * A, r[1] * D]);
			t++;
		}
		a.draw && b();
		let u = x.workingContext;
		return {
			points: k[0],
			dur: a.dur,
			name: "parametric-plot-" + cb.parametricFunction++,
			closed: a.closed,
			tension: a.tension || 1,
			smoothen: a.smoothen,
			rateFunction: a.rateFunction,
			syncWithTime: a.syncWithTime || !1,
			draw: function (r = 2e3) {
				function z(y) {
					return function () {
						y >= v.length - 2 && (qa(), u.closePath(), u.doFill && this.draw());
						let F = v[y],
							C = v[y + 1],
							I = Va(
								0 < y ? v[y - 1] : h ? v[v.length - 2] : v[0],
								F,
								C,
								y != v.length - 2 ? v[y + 2] : h ? v[1] : C,
							);
						y++;
						u.beginPath();
						u.moveTo(F[0], F[1]);
						u.bezierCurveTo(I[0], I[1], I[2], I[3], C[0], C[1]);
						u.stroke();
					};
				}
				function B(y) {
					return function () {
						y >= v.length - 2 && (qa(), u.doFill && this.draw());
						let F = v[y],
							C = v[++y];
						Ya(F[0], F[1], C[0], C[1]);
					};
				}
				r /= t;
				for (let y = 0; y < k.length; y++) {
					var v = k[y];
					e
						? pa(
								"parametric-plot-" + cb.parametricFunction++,
								z(0),
								x.workingContext.name,
								r,
						  )
						: pa(
								"parametric-plot-" + cb.parametricFunction++,
								B(0),
								x.workingContext.name,
								r,
						  );
				}
				return bb;
			},
		};
	}
	function hb(a) {
		let b = a.plotter;
		a.plotter = (c) => [c, b(c)];
		return fb(a);
	}
	function ib(a) {
		function b(w) {
			if (w >= D) return "rgba(" + e[D].join() + ")";
			if (w <= A) return "rgba(" + e[A].join() + ")";
			for (let u = 0; u < p.length - 1; u++) {
				let r = p[u],
					z = p[u + 1],
					B = e[r],
					v = e[z],
					y = h((w - r) / (z - r));
				if (w >= r && w < z)
					return (
						"rgba(" +
						[
							(v[0] - B[0]) * y + B[0],
							(v[1] - B[1]) * y + B[1],
							(v[2] - B[2]) * y + B[2],
							(v[3] - B[3]) * y + B[3],
						].join() +
						")"
					);
			}
		}
		a = E(
			{
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
				unitSpace: eb,
				unitValue: eb,
				resolution: 1,
				interpolator: (w) => w,
			},
			a,
			!1,
		);
		let {
				min: c,
				max: d,
				colors: e,
				resolution: f,
				plotFunction: g,
				interpolator: h,
			} = a,
			k = x.workingContext,
			m = a.unitSpace[0] / a.unitValue[0],
			n = a.unitSpace[1] / a.unitValue[1],
			q = a.unitValue[0] / a.unitSpace[0];
		a = a.unitValue[1] / a.unitSpace[1];
		let p = Object.keys(e).sort();
		for (var t of p) e[t] = l(e[t]).rgbaA;
		let A = Math.min(...p),
			D = Math.max(...p);
		k.save();
		for (t = c[0]; t <= d[0]; t += f * q)
			for (let w = c[1]; w <= d[1]; w += f * a)
				(k.fillStyle = b(g(t, w))), k.fillRect(t * m, w * n, f, f);
		k.restore();
		return { min: A, max: D, colors: e };
	}
	function jb(a) {
		a = E({ unitValue: eb, unitSpace: eb, fill: "white", stroke: "#0000", radius: 5 }, a);
		let { points: b, unitValue: c, unitSpace: d } = a,
			e = x.workingContext;
		for (let f = 0; f < b.length; f++) {
			let g = b[f],
				h = g.fill || a.fill || e.fillStyle,
				k = g.stroke || a.stroke || e.strokeStyle,
				m = (g.x * d[0]) / c[0],
				n = (g.y * d[1]) / c[1];
			e.beginPath();
			e.fillStyle = h;
			e.strokeStyle = k;
			e.arc(m, n, g.radius || a.radius, 0, 2 * Math.PI);
			e.fill();
			e.stroke();
		}
		e.closePath();
	}
	function kb(a) {
		a = E({ radialSpacing: 2, fill: "white", stroke: "#0000", radius: 5, points: [] }, a);
		let b = x.workingContext,
			{ points: c, radialSpacing: d } = a;
		b.save();
		for (let e = 0; e < c.length; e++) {
			let f = c[e],
				g = f.fill || a.fill || b.fillStyle,
				h = f.stroke || a.stroke || b.strokeStyle,
				k = f.r * Math.cos(f.phi) * d,
				m = f.r * Math.sin(f.phi) * d;
			b.beginPath();
			b.fillStyle = g;
			b.strokeStyle = h;
			b.arc(k, m, f.radius || a.radius, 0, 2 * Math.PI);
			b.fill();
			b.stroke();
		}
		b.closePath();
		b.restore();
	}
	function lb(a) {
		a = E(
			{
				tension: 1,
				radialSpacing: 1,
				range: [0, 2 * Math.PI, Math.PI / 50],
				discontinuities: [],
				smoothen: !0,
				closed: !1,
				strokeWidth: 2,
				plotter: () => [0, 0],
			},
			a,
		);
		let {
			plotter: b,
			range: c,
			radialSpacing: d,
			smoothen: e,
			tension: f,
			discontinuities: g,
			closed: h,
		} = a;
		Array.isArray(c) && 2 == c.length && c.push((c[1] - c[0]) / 20);
		let k = [[]];
		var m = c[0],
			n = c[1],
			q = c[2];
		Array.isArray(g) || (g = []);
		var p = isNaN(a.discontinuityRadius) ? q : a.discontinuityRadius;
		for (var t = 0, A = p < q ? p : 0; m <= n + q + A; m += q) {
			if (-1 < gb(m, g, p)) {
				-1 < gb(m + q, g, p) && (t++, k.push([]));
				continue;
			}
			let D = b(m);
			k[t].push([D[0] * Math.cos(D[1]) * d, D[0] * Math.sin(D[1]) * d]);
		}
		n = x.workingContext;
		q = [];
		n.lineWidth = a.strokeWidth;
		for (p = 0; p < k.length; p++)
			if (((t = k[p]), 0 != t.length)) {
				q.push(t);
				A = p == k.length - 1 ? 1 : 0;
				if (e) Xa(t, f, h, A);
				else {
					n.beginPath();
					n.moveTo(t[0][0], t[0][1]);
					for (m = 1; m < t.length - A; m++) n.lineTo(t[m][0], t[m][1]);
					n.doStroke && n.stroke();
					n.doFill && h && n.fill();
					n.closePath();
				}
				A && (k[p] = k[p].slice(0, -1));
			}
		return { points: q, closed: a.closed, tension: a.tension || 1, smoothen: a.smoothen };
	}
	function mb(a) {
		let b = a.plotter;
		a.plotter = (c) => [b(c), c];
		return lb(a);
	}
	var U = {};
	U.functionGraph = hb;
	U.heatPlot = ib;
	U.parametricFunction = fb;
	U.plotPoints = jb;
	U.plotPolarPoints = kb;
	U.polarFuntionGraph = mb;
	U.polarParametricFunction = lb;
	function nb(a) {
		return Object.assign(a, {
			getParametricFunction: function (b) {
				b.unitSpace = a.unitSpace;
				b.unitValue = a.unitValue;
				return fb(b);
			},
			getFunctionGraph: function (b) {
				b.unitSpace = a.unitSpace;
				b.unitValue = a.unitValue;
				return hb(b);
			},
			getHeatPlot: function (b) {
				b.unitSpace = a.unitSpace;
				b.unitValue = a.unitValue;
				b.min = a.min || [a.xAxis.range[0], a.yAxis.range[0]];
				b.max = a.max || [a.xAxis.range[1], a.yAxis.range[1]];
				return ib(b);
			},
			plotPoints: function (b) {
				b.unitValue = a.unitValue;
				b.unitSpace = a.unitSpace;
				return jb(b);
			},
		});
	}
	function ob(a) {
		return {
			plotPoints: function (b) {
				b.radialSpacing = b.radialSpacing || a.radialSpacing;
				kb(b);
			},
			parametricFunction: function (b) {
				b.radialSpacing = b.radialSpacing || a.radialSpacing;
				return lb(b);
			},
			functionGraph: function (b) {
				b.radialSpacing = b.radialSpacing || a.radialSpacing;
				return mb(b);
			},
		};
	}
	const pb = [0, 0];
	function qb(a = {}) {
		function b() {
			d.strokeStyle = e;
			d.lineWidth = g;
			var I = q ? 1 : 0;
			const K = p ? C.length - 1 : C.length;
			for (; I < K && 0 > t.indexOf(C[0][I]); I++) {
				const Q = C[I];
				if (0 === Number(Q) && D) continue;
				let ea = a.tickHeight;
				-1 < u.indexOf(Q) && (ea *= w);
				Ya(Q, -ea / 2, Q, ea / 2);
			}
		}
		function c() {
			const I = 0 < A.length ? A : C;
			d.fillStyle = a.textColor;
			d.font = h + "px " + a.fontFamily;
			d.textAlign = a.textAlign;
			d.textBaseline = a.textBaseline;
			var K = q ? 1 : 0;
			const Q = p ? C.length - 1 : C.length,
				ea = a.textRenderer;
			for (; K < Q && !(K >= I.length); K++) {
				const ub = "number" == typeof I[K] ? I[K].toFixed(z) : I[K];
				if ((0 == C[K] && D) || -1 < t.indexOf(C[K])) continue;
				var Ma = d.measureText(ub).width;
				Ma = C[K] - n[0] * Ma;
				const Hb = n[1] * h;
				d.save();
				d.translate(Ma, Hb);
				d.rotate(m);
				ea(ub, 0, 0);
				d.restore();
			}
		}
		const d = x.workingContext;
		a = E(
			{
				rotation: 0,
				strokeWidth: 2,
				length: parseInt(x.workingCanvas.width),
				originPosition: pb,
				range: [-5, 5, 1],
				strokeColor: "white",
				tipWidth: 13,
				tipHeight: 10,
				fontSize: 17,
				fontFamily: "serif",
				textRenderer: La,
				textAlign: "center",
				textBaseline: "middle",
				textColor: "white",
				textRotation: 0,
				textDirection: [0, -1],
				tickHeight: 10,
				longerTickMultiple: 1.5,
				labelsToInclude: [],
				numbersToExclude: [0],
				numbersWithElongatedTicks: [],
				includeTicks: !0,
				includeLabels: !0,
				includeLeftTip: !1,
				includeRightTip: !1,
				excludeOriginTick: !1,
			},
			a,
		);
		let {
			strokeColor: e,
			tipWidth: f,
			strokeWidth: g,
			fontSize: h,
			tipHeight: k,
			textRotation: m,
			textDirection: n,
			includeLeftTip: q,
			includeRightTip: p,
			numbersToExclude: t,
			labelsToInclude: A,
			excludeOriginTick: D,
			longerTickMultiple: w,
			numbersWithElongatedTicks: u,
			range: r,
			decimalPlaces: z,
		} = a;
		if (Array.isArray(r) && r.length)
			1 === r.length && (r = [0, r[0], 1]), 2 === r.length && (r = [r[0], r[1], 1]);
		else
			throw Error(
				"range must be a array that have atleast one item. Got: " + r.toString(),
			);
		isNaN(z) && 0 <= z && (z = (r[2].toString().split(".")[1] || []).length || 0);
		const B = r[0],
			v = r[1],
			y = r[2],
			F = a.length / ((v - B) / y) / y,
			C = rb(B, v, y);
		g /= F;
		f /= F;
		h /= F;
		k /= F;
		a.tickHeight /= F;
		d.beginPath();
		la();
		d.translate(a.originPosition[0], a.originPosition[1]);
		d.scale(F, F);
		d.rotate(a.rotation);
		a.includeTicks && b();
		a.includeLabels && c();
		(function () {
			d.strokeStyle = e;
			d.lineWidth = g;
			d.fillStyle = e;
			const I = Math.atan(k / 2);
			let K = C[0],
				Q = C[C.length - 1];
			q && (P(K + f, 0, K, 0, f, k), (K += f * Math.cos(I)));
			p && (P(Q - f, 0, Q, 0, f, k), (Q -= f * Math.cos(I)));
			Ya(K, 0, Q, 0);
		})();
		d.closePath();
		na();
		return {
			range: r,
			originPosition: a.originPosition,
			tickList: C,
			unitValue: y,
			unitSpace: F,
		};
	}
	function sb(a = {}) {
		const b = x.workingContext;
		var c = x.workingCanvas;
		a = E(
			{
				xAxis: {
					length: c.width,
					includeTicks: !0,
					includeLeftTip: !1,
					includeRightTip: !0,
					excludeOriginTick: !0,
				},
				yAxis: {
					length: c.height,
					rotation: Math.PI / 2,
					textRotation: -Math.PI / 2,
					textDirection: [0, 0.75],
					includeTicks: !0,
					includeLeftTip: !1,
					includeRightTip: !0,
					excludeOriginTick: !0,
				},
				originPosition: pb,
			},
			a,
		);
		b.save();
		b.translate(a.originPosition[0], a.originPosition[1]);
		c = qb(a.xAxis);
		const d = qb(a.yAxis);
		b.restore();
		return nb({
			originPosition: a.originPosition,
			xAxis: c,
			yAxis: d,
			unitSpace: [c.unitSpace, d.unitSpace],
			unitValue: [c.unitValue, d.unitValue],
		});
	}
	var tb = {};
	tb.axes = sb;
	tb.numberLine = qb;
	tb.numberPlane = function (a = {}) {
		var b = x.workingCanvas;
		const c = x.workingContext;
		b = {
			xAxis: {
				length: parseInt(b.style.width),
				includeTicks: !0,
				includeLabels: !0,
				includeLeftTip: !1,
				includeRightTip: !1,
				excludeOriginTick: !0,
				unitSpace: 50,
			},
			yAxis: {
				length: parseInt(b.style.height),
				textRotation: -Math.PI / 2,
				unitSpace: 50,
				includeTicks: !0,
				includeLabels: !0,
				includeLeftTip: !1,
				includeRightTip: !1,
				excludeOriginTick: !0,
			},
			subgrids: [1, 1],
			gridStrokeWidth: 1.3,
			subgridStrokeWidth: 0.8,
			gridStrokeColor: "#58c4dddd",
			subgridStrokeColor: "#88888850",
			originPosition: pb,
		};
		a = E(b, a);
		let {
			xAxis: d,
			yAxis: e,
			originPosition: f,
			subgrids: g,
			gridStrokeWidth: h,
			subgridStrokeWidth: k,
			gridStrokeColor: m,
		} = a;
		c.save();
		b = sb({ xAxis: d, yAxis: e });
		const n = b.xAxis.range;
		var q = b.yAxis.range,
			p = (n[1] - n[0]) / n[2];
		const t = (q[1] - q[0]) / q[2],
			A = b.unitSpace,
			D = b.unitValue;
		c.scale(A[0], A[1]);
		h /= A[1];
		k /= A[1];
		c.beginPath();
		c.lineWidth = h;
		c.strokeStyle = m;
		var w = q[1] - (q[1] % q[2]);
		for (var u = n[0]; u <= n[1]; u += n[2])
			(d.excludeOriginTick && 0 == u) ||
				(d.includeLeftTip && u == n[0]) ||
				(d.includeRightTip && u == n[1]) ||
				(c.moveTo(u, q[0]), c.lineTo(u, w));
		w = n[1] - (n[1] % n[2]);
		for (u = q[0]; u <= q[1]; u += q[2])
			(e.excludeOriginTick && 0 == u) ||
				(e.includeLeftTip && u == q[0]) ||
				(e.includeRightTip && u == q[1]) ||
				(c.moveTo(n[0], u), c.lineTo(w, u));
		c.stroke();
		c.closePath();
		c.lineWidth = k;
		c.strokeStyle = a.subgridStrokeColor;
		a = 2 / (g[0] + 1);
		p *= g[0] + 1;
		for (w = n[0]; w <= p; w++)
			0 != w % (g[0] + 1) && (c.moveTo(w * a, q[0]), c.lineTo(w * a, q[1]));
		a = 2 / (g[1] + 1);
		p = t * (g[1] + 1);
		for (q = q[0]; q <= p; q++)
			0 != q % (g[1] + 1) && (c.moveTo(n[0], q * a), c.lineTo(n[1], q * a));
		c.stroke();
		c.closePath();
		c.restore();
		return nb({
			originPosition: f,
			unitValue: D,
			unitSpace: A,
			xAxis: b.xAxis,
			yAxis: b.yAxis,
			subgridUnit: g,
		});
	};
	tb.polarPlane = function (a = {}) {
		var b = x.workingContext,
			c = x.workingCanvas,
			d = { "pi radians": 20, "tau radians": 20, degrees: 24, gradians: 20 };
		a = E(
			{
				originPosition: pb,
				maxRadius: 4,
				size: 0.8 * Math.min(parseInt(c.style.width), parseInt(c.style.height)),
				radiusStep: 1,
				azimuthUnit: "PI radians",
				azimuthDivisions: 0,
				azimuthCompactFraction: !0,
				azimuthDirection: "ccw",
				azimuthoffset: 0,
				fadedLines: 1,
				radiusConfigs: {
					includeLabels: !0,
					includeTicks: !1,
					includeRightTip: !1,
					strokeColor: "#fff",
					strokeWidth: 2,
					fontSize: 22,
					fontFamily: "serif",
					textDirection: [0.8, -0.75],
					labelAxis: [1],
					numbersToExclude: [0],
				},
				azimuthConfigs: {
					includeLabels: !0,
					labelBuff: 0.45,
					fontSize: 15,
					fontFamily: "serif",
					textAlign: "center",
					textBaseline: "middle",
					strokeColor: "#58c4ddaa",
					strokeWidth: 1.3,
					textRenderer: La,
					decimalPoints: 0,
				},
				fadedLineConfigs: { strokeColor: "#8888", strokeWidth: 1 },
			},
			a,
		);
		let {
			originPosition: e,
			maxRadius: f,
			size: g,
			radiusStep: h,
			azimuthUnit: k,
			azimuthDivisions: m,
			azimuthCompactFraction: n,
			azimuthDirection: q,
			radiusConfigs: p,
			azimuthConfigs: t,
			fadedLines: A,
			fadedLineConfigs: D,
			azimuthoffset: w,
		} = a;
		k = k.toLowerCase();
		if (void 0 == d[k])
			throw Error(
				"Invalid azimuth units. Expected one of: PI radians, TAU radians, degrees, gradians.",
			);
		0 == m && (m = d[k] || 20);
		la();
		b.translate(e[0], e[1]);
		var u = rb(0, f, h);
		a = g / f / 2;
		t.strokeWidth /= a;
		D.strokeWidth /= a;
		t.fontSize /= a;
		c = Array.isArray(p.labelsToInclude) ? p.labelsToInclude : u;
		var r = -1 < p.labelAxis.indexOf(3) ? c.reverse() : Array(f).fill("");
		-1 < p.labelAxis.indexOf(1) ? (r = r.concat(c)) : r.push(...Array(f).fill(""));
		d = -1 < p.labelAxis.indexOf(2) ? c.reverse() : Array(f).fill("");
		-1 < p.labelAxis.indexOf(4)
			? (d = d.concat(c.reverse()))
			: d.push(...Array(f).fill(""));
		p.range = [-f, f, h];
		p.length = g;
		c = E(p, { labelsToInclude: r });
		d = E(p, { labelsToInclude: d });
		b.scale(a, a);
		A++;
		r = [];
		b.font = `${t.fontSize}px ${t.fontFamily}`;
		b.textAlign = t.textAlign;
		b.textBaseline = t.textBaseline;
		if ("pi radians" == k || "tau radians" == k) {
			var z = m;
			t.textRenderer = Ja;
			var B = "tau radians" == k ? "\\tau" : "\\pi";
			b.font = `${t.fontSize * a}px ${t.fontFamily}`;
			for (var v = 0; v < m; v++) r.push(vb(1 * v, z, n, B));
		} else if ("degrees" == k)
			for (z = 0; z < m; z++) r.push(((360 * z) / m).toFixed(t.decimalPoints) + "\u00b0");
		else if ("gradians" == k)
			for (z = 0; z < m; z++) r.push(((400 * z) / m).toFixed(t.decimalPoints) + "\u1d4d");
		z = (2 * Math.PI) / m;
		"cw" == q.toLowerCase() && (z *= -1);
		B = 1;
		if ("pi radians" == k || "tau radians" == k) B = a;
		b.doFill = !1;
		b.doStroke = !0;
		if (1 < A) {
			b.strokeStyle = D.strokeColor;
			b.lineWidth = D.strokeWidth;
			v = 1 / A;
			let F = u.length / v - A;
			b.beginPath();
			b.moveTo(0, 0);
			for (var y = 0; y < F; y++) b.arc(0, 0, y * v, 0, 2 * Math.PI);
			F = m / v / v;
			b.lineWidth = D.strokeWidth;
			for (y = 0; y < F; y += v) {
				let C = y * z;
				b.moveTo(0, 0);
				b.lineTo(Math.cos(C + w) * f, Math.sin(C + w) * f);
			}
			b.stroke();
		}
		b.beginPath();
		b.strokeStyle = t.strokeColor;
		b.lineWidth = t.strokeWidth;
		b.moveTo(0, 0);
		for (v = 0; v < u.length; v++) b.arc(0, 0, v, 0, 2 * Math.PI);
		for (u = 0; u < m; u++)
			(v = u * z + w),
				0 != v % (Math.PI / 2) &&
					(b.moveTo(0, 0), b.lineTo(Math.cos(v) * f, Math.sin(v) * f));
		b.stroke();
		if (t.includeLabels)
			for (u = 0; u < m; u++)
				(b = u * z + w),
					t.textRenderer(
						r[u],
						Math.cos(b) * (f + t.labelBuff) * B,
						Math.sin(b) * (f + t.labelBuff) * B,
					);
		na();
		sb({ xAxis: c, yAxis: d });
		return ob({ azimuthAnglularSpace: (2 * Math.PI) / m, radialSpacing: a });
	};
	const {
		abs: wb,
		acos: xb,
		asin: yb,
		atan: zb,
		atan2: Ab,
		cbrt: Bb,
		ceil: Cb,
		cos: Db,
		cosh: Eb,
		exp: Fb,
		floor: Gb,
		log: Ib,
		log2: Jb,
		log10: Kb,
		max: Lb,
		min: Mb,
		pow: Nb,
		random: Ob,
		round: Pb,
		sign: Qb,
		sin: Rb,
		sqrt: Sb,
		tan: Tb,
		tanh: Ub,
	} = Math;
	function Vb(a) {
		return 1 / (1 + Math.exp(-a));
	}
	var V = {};
	V.abs = wb;
	V.acos = xb;
	V.asin = yb;
	V.atan = zb;
	V.atan2 = Ab;
	V.cbrt = Bb;
	V.ceil = Cb;
	V.cos = Db;
	V.cosh = Eb;
	V.exp = Fb;
	V.floor = Gb;
	V.log = Ib;
	V.log10 = Kb;
	V.log2 = Jb;
	V.max = Lb;
	V.min = Mb;
	V.pow = Nb;
	V.random = Ob;
	V.round = Pb;
	V.sgn = Qb;
	V.sigmoid = Vb;
	V.sin = Rb;
	V.sqrt = Sb;
	V.tan = Tb;
	V.tanh = Ub;
	function Wb(a, b) {
		for (; 0 != b; ) {
			let c = b;
			b = a % b;
			a = c;
		}
		return a;
	}
	function Xb(a, b) {
		return (a * b) / Wb(a, b);
	}
	var Yb = {};
	Yb.gcd = Wb;
	Yb.gcdArray = function (a) {
		let b = Array.isArray(a) ? a : arguments,
			c = b[0];
		for (let d = 1; d < b.length; ++d) c = Wb(b[d], c);
		return c;
	};
	Yb.lcm = Xb;
	Yb.lcmArray = function (a) {
		let b = 1,
			c = Array.isArray(a) ? a : arguments;
		for (let d = 0; d < c.length; ++d) b = Xb(c[d], b);
		return b;
	};
	const Zb = (2 * Math.PI) / 3,
		$b = (2 * Math.PI) / 4.5;
	function ac(a) {
		return a < 1 / 2.75
			? 7.5625 * a * a
			: a < 2 / 2.75
			? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75
			: a < 2.5 / 2.75
			? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375
			: 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375;
	}
	function W(a, b) {
		b = void 0 === b ? 10 : b;
		let c = Vb(-b / 2);
		return Math.min(Math.max((Vb(b * (a - 0.5)) - c) / (1 - 2 * c), 0), 1);
	}
	function bc(a, b) {
		return W(0.5 > a ? 2 * a : 2 * (1 - a), void 0 === b ? 10 : b);
	}
	function cc(a, b, c) {
		b = void 0 === b ? 0.4 : b;
		c = void 0 === c ? 0.6 : c;
		return function (d) {
			return b == c ? b : d < b ? a(0) : d > c ? a(1) : a((d - b) / (c - b));
		};
	}
	var X = {
		doubleSmooth: function (a) {
			return 0.5 > a ? 0.5 * W(2 * a) : 0.5 * (1 + W(2 * a - 1));
		},
		easeInBack: function (a) {
			return 2.70158 * Math.pow(a, 3) - 1.70158 * Math.pow(a, 2);
		},
		easeInBounce: function (a) {
			return 1 - ac(1 - a);
		},
		easeInCirc: function (a) {
			return 1 - Math.sqrt(1 - Math.pow(a, 2));
		},
		easeInCubic: function (a) {
			return Math.pow(a, 3);
		},
		easeInElastic: function (a) {
			return 0 === a
				? 0
				: 1 === a
				? 1
				: -Math.pow(2, 10 * a - 10) * Math.sin((10 * a - 10.75) * Zb);
		},
		easeInExpo: function (a) {
			return 0 == a ? 0 : Math.pow(2, 10 * a - 10);
		},
		easeInOutBack: function (a) {
			return 0.5 > a
				? (Math.pow(2 * a, 2) * (7.189819 * a - 2.5949095)) / 2
				: (Math.pow(2 * a - 2, 2) * (3.5949095 * (2 * a - 2) + 2.5949095) + 2) / 2;
		},
		easeInOutBounce: function (a) {
			return 0.5 > a ? (1 - ac(1 - 2 * a)) / 2 : (1 + ac(2 * a - 1)) / 2;
		},
		easeInOutCirc: function (a) {
			return 0.5 > a
				? (1 - Math.sqrt(1 - Math.pow(2 * a, 2))) / 2
				: (Math.sqrt(1 - Math.pow(2 - 2 * a, 2)) + 1) / 2;
		},
		easeInOutCubic: function (a) {
			return 0.5 > a ? 4 * Math.pow(a, 3) : 1 - Math.pow(2 - 2 * a, 3) / 2;
		},
		easeInOutElastic: function (a) {
			return 0 == a
				? 0
				: 1 == a
				? 1
				: 0.5 > a
				? -(Math.pow(2, 20 * a - 10) * Math.sin((20 * a - 11.125) * $b)) / 2
				: (Math.pow(2, -20 * a + 10) * Math.sin((20 * a - 11.125) * $b)) / 2 + 1;
		},
		easeInOutExpo: function (a) {
			return 0 == a
				? 0
				: 1 == a
				? 1
				: 0.5 > a
				? Math.pow(2, 20 * a - 10) / 2
				: (2 - Math.pow(2, 10 - 20 * a)) / 2;
		},
		easeInOutQuad: function (a) {
			return 0.5 > a ? 2 * Math.pow(a, 2) : 1 - Math.pow(2 - 2 * a, 2) / 2;
		},
		easeInOutQuart: function (a) {
			return 0.5 > a ? 8 * Math.pow(a, 4) : 1 - Math.pow(2 - 2 * a, 4) / 2;
		},
		easeInOutQuint: function (a) {
			return 0.5 > a ? 16 * Math.pow(a, 5) : 1 - Math.pow(2 - 2 * a, 5) / 2;
		},
		easeInOutSine: function (a) {
			return -(Math.cos(Math.PI * a) - 1) / 2;
		},
		easeInQuad: function (a) {
			return Math.pow(a, 2);
		},
		easeInQuart: function (a) {
			return Math.pow(a, 4);
		},
		easeInQuint: function (a) {
			return Math.pow(a, 5);
		},
		easeInSine: function (a) {
			return 1 - Math.cos((a * Math.PI) / 2);
		},
		easeOutBack: function (a) {
			return 1 + 2.70158 * Math.pow(a - 1, 3) + 1.70158 * Math.pow(a - 1, 2);
		},
	};
	X.easeOutBounce = ac;
	X.easeOutCirc = function (a) {
		return Math.sqrt(1 - Math.pow(a - 1, 2));
	};
	X.easeOutCubic = function (a) {
		return 1 - Math.pow(1 - a, 3);
	};
	X.easeOutElastic = function (a) {
		return 0 === a
			? 0
			: 1 === a
			? 1
			: Math.pow(2, -10 * a) * Math.sin((10 * a - 0.75) * Zb) + 1;
	};
	X.easeOutExpo = function (a) {
		return 1 == a ? 1 : 1 - Math.pow(2, -10 * a);
	};
	X.easeOutQuad = function (a) {
		return 1 - Math.pow(1 - a, 2);
	};
	X.easeOutQuart = function (a) {
		return 1 - Math.pow(1 - a, 4);
	};
	X.easeOutQuint = function (a) {
		return 1 - Math.pow(1 - a, 5);
	};
	X.easeOutSine = function (a) {
		return Math.sin((a * Math.PI) / 2);
	};
	X.exponentialDecay = function (a, b) {
		return 1 - Math.exp(-a / (void 0 === b ? 0.1 : b));
	};
	X.linear = function (a) {
		return a;
	};
	X.lingering = function (a) {
		return cc((b) => b, 0, 0.8)(a);
	};
	X.notQuiteThere = function (a, b) {
		a = void 0 === a ? W : a;
		b = void 0 === b ? 0.7 : b;
		return (c) => b * a(c);
	};
	X.rushFrom = function (a, b) {
		return 2 * W(a / 2 + 0.5, void 0 === b ? 10 : b) - 1;
	};
	X.rushInto = function (a, b) {
		return 2 * W(a / 2, void 0 === b ? 10 : b);
	};
	X.slowInto = function (a) {
		return Math.sqrt(1 - (1 - a) * (1 - a));
	};
	X.smooth = W;
	X.squishRateFunc = cc;
	X.thereAndBack = bc;
	X.thereAndBackWithPause = function (a, b) {
		b = void 0 === b ? 1 / 3 : b;
		let c = 1 / b;
		return a < 0.5 - b / 2 ? W(c * a) : a < 0.5 + b / 2 ? 1 : W(c - c * a);
	};
	X.wiggle = function (a, b) {
		b = void 0 === b ? 2 : b;
		return bc(a) * Math.sin(b * Math.PI * a);
	};
	function dc(a) {
		a =
			Array.isArray(a[0]) && 16 == a[0].length
				? a[0]
				: 16 == a.length
				? a
				: a[0] instanceof Y
				? a[0].mat
				: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
		return new Float32Array(a);
	}
	class Y {
		constructor(a) {
			this.mat = dc(arguments);
			return this;
		}
		multiply(a) {
			let b = dc(arguments),
				c = this.mat[0],
				d = this.mat[1],
				e = this.mat[2],
				f = this.mat[3];
			this.mat[0] = c * b[0] + d * b[4] + e * b[8] + f * b[12];
			this.mat[1] = c * b[1] + d * b[5] + e * b[9] + f * b[13];
			this.mat[2] = c * b[2] + d * b[6] + e * b[10] + f * b[14];
			this.mat[3] = c * b[3] + d * b[7] + e * b[11] + f * b[15];
			c = this.mat[4];
			d = this.mat[5];
			e = this.mat[6];
			f = this.mat[7];
			this.mat[4] = c * b[0] + d * b[4] + e * b[8] + f * b[12];
			this.mat[5] = c * b[1] + d * b[5] + e * b[9] + f * b[13];
			this.mat[6] = c * b[2] + d * b[6] + e * b[10] + f * b[14];
			this.mat[7] = c * b[3] + d * b[7] + e * b[11] + f * b[15];
			c = this.mat[8];
			d = this.mat[9];
			e = this.mat[10];
			f = this.mat[11];
			this.mat[8] = c * b[0] + d * b[4] + e * b[8] + f * b[12];
			this.mat[9] = c * b[1] + d * b[5] + e * b[9] + f * b[13];
			this.mat[10] = c * b[2] + d * b[6] + e * b[10] + f * b[14];
			this.mat[11] = c * b[3] + d * b[7] + e * b[11] + f * b[15];
			c = this.mat[12];
			d = this.mat[13];
			e = this.mat[14];
			f = this.mat[15];
			this.mat[12] = c * b[0] + d * b[4] + e * b[8] + f * b[12];
			this.mat[13] = c * b[1] + d * b[5] + e * b[9] + f * b[13];
			this.mat[14] = c * b[2] + d * b[6] + e * b[10] + f * b[14];
			this.mat[15] = c * b[3] + d * b[7] + e * b[11] + f * b[15];
			return this;
		}
		rotate(a, b, c, d) {
			b instanceof Array && ((c = b[1]), (d = b[2]), (b = b[0]));
			var e = Math.sqrt(b * b + c * c + d * d);
			b *= 1 / e;
			c *= 1 / e;
			d *= 1 / e;
			e = this.mat[0];
			const f = this.mat[1],
				g = this.mat[2],
				h = this.mat[3],
				k = this.mat[4],
				m = this.mat[5],
				n = this.mat[6],
				q = this.mat[7],
				p = this.mat[8],
				t = this.mat[9],
				A = this.mat[10],
				D = this.mat[11],
				w = Math.sin(a),
				u = Math.cos(a),
				r = 1 - u;
			a = b * b * r + u;
			const z = c * b * r + d * w,
				B = d * b * r - c * w,
				v = b * c * r - d * w,
				y = c * c * r + u,
				F = d * c * r + b * w,
				C = b * d * r + c * w;
			b = c * d * r - b * w;
			d = d * d * r + u;
			this.mat[0] = e * a + k * z + p * B;
			this.mat[1] = f * a + m * z + t * B;
			this.mat[2] = g * a + n * z + A * B;
			this.mat[3] = h * a + q * z + D * B;
			this.mat[4] = e * v + k * y + p * F;
			this.mat[5] = f * v + m * y + t * F;
			this.mat[6] = g * v + n * y + A * F;
			this.mat[7] = h * v + q * y + D * F;
			this.mat[8] = e * C + k * b + p * d;
			this.mat[9] = f * C + m * b + t * d;
			this.mat[10] = g * C + n * b + A * d;
			this.mat[11] = h * C + q * b + D * d;
			return this;
		}
		scale(a, b, c) {
			a instanceof Array && ((b = a[1]), (c = a[2]), (a = a[0]));
			this.mat[0] *= a;
			this.mat[1] *= a;
			this.mat[2] *= a;
			this.mat[3] *= a;
			this.mat[4] *= b;
			this.mat[5] *= b;
			this.mat[6] *= b;
			this.mat[7] *= b;
			this.mat[8] *= c;
			this.mat[9] *= c;
			this.mat[10] *= c;
			this.mat[11] *= c;
			return this;
		}
		rotateX(a) {
			this.rotate(a, 1, 0, 0);
			return this;
		}
		rotateY(a) {
			this.rotate(a, 0, 1, 0);
			return this;
		}
		rotateZ(a) {
			this.rotate(a, 0, 0, 1);
			return this;
		}
		translate(a, b, c = 0) {
			this.mat[12] += this.mat[0] * a + this.mat[4] * b + this.mat[8] * c;
			this.mat[13] += this.mat[1] * a + this.mat[5] * b + this.mat[9] * c;
			this.mat[14] += this.mat[2] * a + this.mat[6] * b + this.mat[10] * c;
			this.mat[15] += this.mat[3] * a + this.mat[7] * b + this.mat[11] * c;
			return this;
		}
		clone() {
			let a = [];
			for (let b = 0; b < this.mat.length; b++) a.push(this.mat[b]);
			return new Y(a);
		}
		static lookAt(a, b, c) {
			let d, e;
			let f = a[0],
				g = a[1];
			a = a[2];
			var h = c[0];
			var k = c[1];
			var m = c[2];
			var n = b[0];
			c = b[1];
			var q = b[2];
			if (1e-6 > Math.abs(f - n) && 1e-6 > Math.abs(g - c) && 1e-6 > Math.abs(a - q))
				return Y.identity();
			b = f - n;
			c = g - c;
			n = a - q;
			var p = 1 / Math.hypot(b, c, n);
			b *= p;
			c *= p;
			n *= p;
			q = k * n - m * c;
			m = m * b - h * n;
			h = h * c - k * b;
			(p = Math.hypot(q, m, h))
				? ((p = 1 / p), (q *= p), (m *= p), (h *= p))
				: (h = m = q = 0);
			k = c * h - n * m;
			d = n * q - b * h;
			e = b * m - c * q;
			(p = Math.hypot(k, d, e))
				? ((p = 1 / p), (k *= p), (d *= p), (e *= p))
				: (e = d = k = 0);
			p = new Float32Array(16);
			p[0] = q;
			p[1] = k;
			p[2] = b;
			p[3] = 0;
			p[4] = m;
			p[5] = d;
			p[6] = c;
			p[7] = 0;
			p[8] = h;
			p[9] = e;
			p[10] = n;
			p[11] = 0;
			p[12] = -(q * f + m * g + h * a);
			p[13] = -(k * f + d * g + e * a);
			p[14] = -(b * f + c * g + n * a);
			p[15] = 1;
			return new Y(p);
		}
		static identity() {
			return new Y(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
		}
		static perspective(a, b, c, d, e) {
			const f = 1 / Math.tan(b / 2);
			b = a.mat;
			b[0] = f / c;
			b[1] = 0;
			b[2] = 0;
			b[3] = 0;
			b[4] = 0;
			b[5] = f;
			b[6] = 0;
			b[7] = 0;
			b[8] = 0;
			b[9] = 0;
			b[11] = -1;
			b[12] = 0;
			b[13] = 0;
			b[15] = 0;
			null != e && Infinity !== e
				? ((c = 1 / (d - e)), (b[10] = (e + d) * c), (b[14] = 2 * e * d * c))
				: ((b[10] = -1), (b[14] = -2 * d));
			return a;
		}
	}
	class Z {
		constructor(a) {
			let b = a.getContext("webgl");
			b || (b = a.getContext("experimental-webgl"));
			if (!b) throw Error("WebGL is not supported");
			b.viewport(0, 0, a.width, a.height);
			this.gl = b;
			this.canvas = a;
			this.width = a.rWidth;
			this.height = a.rHeight;
			this.dpr = a.dpr || Math.ceil(window.devicePixelRatio);
			this.canvas = a;
			this.sources = {
				singleColor: {
					vertex:
						"attribute vec3 a_position;\n\t\t\t\t\tuniform vec2 u_resolution;\n\t\t\t\t\tuniform mat4 u_matrix;\n\n\t\t\t\t\tvoid main() {\n\t\t\t\t\t\tgl_Position = u_matrix * vec4(a_position, 1) / vec4(u_resolution, 1, 1);\n\t\t\t\t\t}",
					fragment:
						"precision mediump float;\n\t\t\t\t\tuniform vec4 u_color;\n\t\t\t\t\tvoid main() {\n\t\t\t\t\t\tgl_FragColor = u_color;\n\t\t\t\t\t}",
					uniforms: {
						resolution: "u_resolution",
						matrix: "u_matrix",
						vertexColor: "u_color",
					},
					attributes: { vertexPosition: "a_position" },
					program: null,
				},
				multiColor: {
					vertex:
						"attribute vec3 a_position;\n\t\t\t\t\tattribute vec4 aVertexColor;\n\t\t\t\t\tuniform vec2 u_resolution;\n\t\t\t\t\tuniform mat4 u_matrix;\n\t\t\t\t\tvarying lowp vec4 vColor;\n\t\t\t\t\tvoid main() {\n\t\t\t\t\t\tgl_Position = u_matrix * vec4(a_position, 1);\n\t\t\t\t\t\t// / vec4(u_resolution, 1, 1);\n\t\t\t\t\t\tvColor = aVertexColor;\n\t\t\t\t\t}",
					fragment:
						"precision mediump float;\n\t\t\t\t\tvarying lowp vec4 vColor;\n\t\t\t\t\tvoid main(void) {\n\t\t\t\t\t\tgl_FragColor = vColor;\n\t\t\t\t\t}",
					uniforms: { resolution: "u_resolution", matrix: "u_matrix" },
					attributes: { vertexPosition: "a_position", vertexColor: "aVertexColor" },
					program: null,
				},
			};
			for (let c in this.sources)
				this.sources[c] = this.createCustomProgram(this.sources[c]);
			this.program = this.sources.singleColor;
			b.useProgram(this.program.program);
			this.projectionMatrix = new Y();
			this.worldMatrix = new Y();
			this.viewMatrix = new Y();
			this.matrix = new Y();
			b.uniform2f(
				this.program.uniforms.resolution,
				a.width / 2 / this.dpr,
				a.height / 2 / this.dpr,
			);
			this.styles = { fillColor: [1, 0, 1, 1], strokeColor: [1, 1, 0, 1], lineWidth: 1 };
		}
		useProgram(a) {
			if (this.sources[a])
				(this.program = this.sources[a]),
					this.gl.useProgram(this.program.program),
					this.gl.uniform2f(
						this.program.uniforms.resolution,
						this.canvas.width / 2 / this.dpr,
						this.canvas.height / 2 / this.dpr,
					);
			else if (a.program) (this.program = a), this.gl.useProgram(a.program);
			else throw Error(`${a} not fouund`);
		}
		createShader(a, b) {
			a = this.gl.createShader(a);
			this.gl.shaderSource(a, b);
			this.gl.compileShader(a);
			return this.gl.getShaderParameter(a, this.gl.COMPILE_STATUS)
				? a
				: (console.error(this.gl.getShaderInfoLog(a)), this.gl.deleteShader(a), null);
		}
		createProgram(a, b) {
			const c = this.gl.createProgram();
			this.gl.attachShader(c, a);
			this.gl.attachShader(c, b);
			this.gl.linkProgram(c);
			return this.gl.getProgramParameter(c, this.gl.LINK_STATUS)
				? c
				: (console.error(this.gl.getProgramInfoLog(c)), this.gl.deleteProgram(c), null);
		}
		createProgramFromSource(a, b) {
			a = this.createShader(this.gl.VERTEX_SHADER, a);
			b = this.createShader(this.gl.FRAGMENT_SHADER, b);
			return this.createProgram(a, b);
		}
		resizeCanvas(a = 300, b = 300) {
			var c = window.devicePixelRatio;
			const d = Math.round(a * c);
			c = Math.round(b * c);
			this.canvas.style.width = a + "px";
			this.canvas.style.height = b + "px";
			this.canvas.width = d;
			this.canvas.height = c;
		}
		putProperties() {
			let a = this.gl,
				b = 3,
				c = a.FLOAT,
				d = !1,
				e = 0,
				f = 0;
			const g = a.createBuffer();
			a.bindBuffer(a.ARRAY_BUFFER, g);
			a.bindBuffer(a.ARRAY_BUFFER, g);
			a.vertexAttribPointer(this.program.attributes.vertexPosition, b, c, d, e, f);
			a.enableVertexAttribArray(this.program.attributes.vertexPosition);
			b = 4;
			c = a.FLOAT;
			d = !1;
			f = e = 0;
			a.bindBuffer(a.ARRAY_BUFFER, this.program.uniforms.vertexColor);
			a.vertexAttribPointer(this.program.uniforms.vertexColor, b, c, d, e, f);
		}
		createCustomProgram(a) {
			let b = this.gl,
				c = {},
				d = {},
				e;
			a.vertex instanceof HTMLScriptElement && (a.vertex = a.vertex.textContent.trim());
			a.fragment instanceof HTMLScriptElement &&
				(a.fragment = a.fragment.textContent.trim());
			e = this.createProgramFromSource(a.vertex, a.fragment);
			for (let f in a.attributes) d[f] = b.getAttribLocation(e, a.attributes[f]);
			for (let f in a.uniforms) c[f] = b.getUniformLocation(e, a.uniforms[f]);
			return {
				program: e,
				uniforms: c,
				attributes: d,
				vertex: a.vertex,
				fragment: a.fragment,
			};
		}
		attribUsage(a, b = 3, c = this.gl.FLOAT, d = !1, e = 0, f = 0) {
			this.gl.enableVertexAttribArray(a);
			this.gl.vertexAttribPointer(a, b, c, d, e, f);
		}
	}
	var ec = {};
	ec.WebGL = Z;
	ec.createWebGL = function (a) {
		let b = x.workingContext;
		var c = x.workingCanvas;
		a = E(
			{
				deleteOld: !1,
				dpr: Math.ceil(window.devicePixelRatio),
				width: c.rWidth,
				height: c.rHeight,
			},
			a,
		);
		c = b.canvas.parentElement;
		let d = x.makeCanvas(a);
		a.deleteOld
			? c.removeChild(b.canvas)
			: ((c.style.position = "relative"),
			  (d.style.position = "absolute"),
			  (d.style.top = "0"),
			  (d.style.left = "0"));
		for (let e in b.canvas.events) d.addEventListener(e, b.canvas.events[e]);
		c.appendChild(d);
		return new Z(d);
	};
	function fc(a, b) {
		let c = [],
			d = !1;
		if (0 == a.length % b)
			if (2 == a.length / b)
				for (d = !0, b = 0; b < a.length; b += 2) c.push(a[b], a[b + 1], 0);
			else c = a;
		else throw Error("excess component in points");
		return [c, d];
	}
	Z.prototype.background = function (a, b, c, d) {
		this.gl.clearColor(a, b, c, d);
		this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
		return this;
	};
	Z.prototype.clear = function () {
		this.background(0, 0, 0, 0);
		return this;
	};
	Z.prototype.putBufferData = function (
		a,
		b = this.gl.ARRAY_BUFFER,
		c = this.gl.STATIC_DRAW,
	) {
		var d = this.gl.createBuffer();
		this.gl.bindBuffer(b, d);
		this.gl.bufferData(b, new Float32Array(a), c);
		return d;
	};
	Z.prototype.setGeometry = function (a, b = 3, c = 0, d = this.gl.TRIANGLES) {
		let e = this.gl,
			f = this.program;
		this.computeMatrix();
		e.uniformMatrix4fv(f.uniforms.matrix, !1, this.matrix.mat);
		e.uniform4fv(f.uniforms.vertexColor, this.styles.fillColor);
		this.putBufferData(fc(a, b)[0]);
		e.enableVertexAttribArray(f.attributes.vertexPosition);
		e.vertexAttribPointer(f.attributes.vertexPosition, 3, e.FLOAT, !1, 0, 0);
		e.drawArrays(d, c, b);
		return this;
	};
	Z.prototype.computeMatrix = function () {
		this.matrix = this.projectionMatrix.clone();
		this.matrix.multiply(this.viewMatrix).multiply(this.worldMatrix);
	};
	Z.prototype.line = function () {
		let [a, b] = fc(arguments, 2);
		const c = this.styles.fillColor;
		this.styles.fillColor = this.styles.strokeColor;
		if (1 == this.styles.lineWidth) this.setGeometry(a, 2, 0, this.gl.LINES);
		else if (b) {
			let e = a[0],
				f = a[1],
				g = a[3],
				h = a[4];
			var d = Math.atan2(h - f, g - e) + Math.PI / 2;
			let k = this.styles.lineWidth / 2,
				m = Math.cos(d) * k;
			d = Math.sin(d) * k;
			this.setGeometry(
				[
					e - m,
					f - d,
					0,
					e + m,
					f + d,
					0,
					g + m,
					h + d,
					0,
					g + m,
					h + d,
					0,
					g - m,
					h - d,
					0,
					e - m,
					f - d,
					0,
				],
				6,
			);
		}
		this.styles.fillColor = c;
		return this;
	};
	Z.prototype.rotateX = function (a) {
		this.worldMatrix.rotateX(a);
		return this;
	};
	Z.prototype.rotateY = function (a) {
		this.worldMatrix.rotateY(a);
		return this;
	};
	Z.prototype.rotateZ = function (a) {
		this.worldMatrix.rotateZ(a);
		return this;
	};
	Z.prototype.translate = function (a, b = 0, c = 0) {
		this.worldMatrix.translate(a, b, c);
		return this;
	};
	Z.prototype.scale = function (a, b = a, c = 1) {
		this.worldMatrix.scale(a, b, c);
		return this;
	};
	Z.prototype.fill = function (...a) {
		a = l(a).rgbaA;
		this.styles.fillColor = [a[0] / 255, a[1] / 255, a[2] / 255, a[3]];
	};
	Z.prototype.fillRect = function () {
		let a, b, c, d;
		var e = 0;
		a = arguments[e++];
		b = arguments[e++];
		c = 4 == arguments.length ? 0 : arguments[e++];
		d = arguments[e++];
		e = arguments[e++];
		this.setGeometry(
			[a, b, c, a + d, b, c, a + d, b + e, c, a + d, b + e, c, a, b + e, c, a, b, c],
			6,
		);
	};
	Z.prototype.triangle = function (...a) {
		this.setGeometry(a, 3);
	};
	Z.prototype.lineWidth = function (a) {
		this.styles.lineWidth = a;
	};
	Z.prototype.stroke = function (...a) {
		a = l(a).rgbaA;
		this.styles.strokeColor = [a[0] / 255, a[1] / 255, a[2] / 255, a[3]];
	};
	Z.prototype.cube = function (a = 200) {
		let b = this.gl;
		this.putBufferData([
			-1 * a,
			-1 * a,
			1 * a,
			1 * a,
			-1 * a,
			1 * a,
			1 * a,
			1 * a,
			1 * a,
			-1 * a,
			1 * a,
			1 * a,
			-1 * a,
			-1 * a,
			-1 * a,
			-1 * a,
			1 * a,
			-1 * a,
			1 * a,
			1 * a,
			-1 * a,
			1 * a,
			-1 * a,
			-1 * a,
			-1 * a,
			1 * a,
			-1 * a,
			-1 * a,
			1 * a,
			1 * a,
			1 * a,
			1 * a,
			1 * a,
			1 * a,
			1 * a,
			-1 * a,
			-1 * a,
			-1 * a,
			-1 * a,
			1 * a,
			-1 * a,
			-1 * a,
			1 * a,
			-1 * a,
			1 * a,
			-1 * a,
			-1 * a,
			1 * a,
			1 * a,
			-1 * a,
			-1 * a,
			1 * a,
			1 * a,
			-1 * a,
			1 * a,
			1 * a,
			1 * a,
			1 * a,
			-1 * a,
			1 * a,
			-1 * a,
			-1 * a,
			-1 * a,
			-1 * a,
			-1 * a,
			1 * a,
			-1 * a,
			1 * a,
			1 * a,
			-1 * a,
			1 * a,
			-1 * a,
		]);
		a = [
			[1, 1, 1, 1],
			[1, 0, 0, 1],
			[0, 1, 0, 1],
			[0, 0, 1, 1],
			[1, 1, 0, 1],
			[1, 0, 1, 1],
		];
		for (var c = [], d = 0; d < a.length; ++d) {
			const e = a[d];
			c = c.concat(e, e, e, e);
		}
		this.putBufferData(c);
		a = this.putBufferData(
			[
				0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15,
				16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23,
			],
			b.ELEMENT_ARRAY_BUFFER,
		);
		b.enable(b.DEPTH_TEST);
		b.depthFunc(b.LEQUAL);
		Y.perspective(
			this.projectionMatrix,
			(45 * Math.PI) / 180,
			b.canvas.clientWidth / b.canvas.clientHeight,
			0.1,
			100,
		);
		this.worldMatrix.translate(-0, 0, -6);
		this.worldMatrix.rotateZ(0);
		this.worldMatrix.rotateX(0);
		b.vertexAttribPointer(this.program.attributes.vertexPosition, 3, b.FLOAT, !1, 0, 0);
		b.enableVertexAttribArray(this.program.attributes.vertexPosition);
		b.vertexAttribPointer(this.program.uniforms.vertexColor, 4, b.FLOAT, !1, 0, 0);
		b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, a);
		this.useProgram("multiColor");
		this.computeMatrix();
		b.uniformMatrix4fv(this.program.uniforms.matrix, !1, this.matrix.mat);
		b.drawElements(b.TRIANGLES, 36, b.UNSIGNED_SHORT, 0);
	};
	Z.prototype.lookAt = function (a, b = [0, 0, 0], c = [0, 1, 0]) {
		this.viewMatrix = Y.lookAt(a, b, c);
	};
	Z.prototype.perspective = function (a, b, c, d) {
		Y.perspective(this.projectionMatrix, a, b, c, d);
	};
	Object.clone =
		Object.clone ||
		function (a) {
			let b = {};
			for (let c = 0, d = Object.keys(a); c < d.length; c++) b[d[c]] = a[d[c]];
			return b;
		};
	function G(a, b = window, c = !1) {
		Object.assign(b, a);
		c && Object.assign(x.functions, a);
	}
	function rb(a, b, c, d = !1) {
		let e = [];
		if (d) for (; b >= a; b -= c) e.push(b);
		else for (; a <= b; a += c) e.push(a);
		return e;
	}
	function E(a, b = {}, c = !0) {
		b = Object.clone(b);
		for (let d = 0, e = Object.keys(a); d < e.length; d++) {
			let f = e[d],
				g = a[f],
				h = b[f],
				k = Object.prototype.toString.call(g).slice(8, -1),
				m = Object.prototype.toString.call(h).slice(8, -1);
			"Object" == k && c && (b[f] = E(g, h, c));
			"Undefined" != k && "Null" != k && m !== k && (b[f] = a[f]);
		}
		return b;
	}
	function R(a) {
		a.doFill && a.fill();
		a.doStroke && a.stroke();
	}
	function gb(a, b, c = 1e-6) {
		for (let d = 0; d < b.length; d++) if (Math.abs(b[d] - a) <= c) return d;
		return -1;
	}
	function vb(a, b, c = !0, d = "") {
		let e = Wb(a, b);
		a /= e;
		b /= e;
		0 == a
			? (a = "0")
			: 1 == b
			? (a += d)
			: c || "" == d
			? (1 == a && (a = ""), (a = `\\frac{${a}${d}}{${b}}`))
			: (a = `\\frac{${a}}{${b}}${d}`);
		return a;
	}
	window.applyDefault = E;
	[
		{ defineProperties: G, C: x },
		M,
		N,
		{
			ALPHABETIC: "alphabetic",
			BEVEL: "bevel",
			BOTTOM: "bottom",
			BUTT: "butt",
			CENTER: "center",
			CONDENSED: "condensed",
			END: "end",
			EXPANDED: "expanded",
			EXTRA_CONDENSED: "extra-condensed",
			EXTRA_EXPANDED: "extra-expanded",
			HANGING: "hanging",
			IDEOGRAPHIC: "ideographic",
			ITALIC: "italic",
			LARGE: "large",
			LARGER: "larger",
			LEFT: "left",
			MEDIUM: "medium",
			MIDDLE: "middle",
			MILTER: "milter",
			MITER: "miter",
			NORMAL: "normal",
			OBLIQUE: "oblique",
			RIGHT: "right",
			ROUND: "round",
			SEMI_CONDENSED: "semi-condensed",
			SEMI_EXPANDED: "semi-expanded",
			SMALL: "small",
			SMALLER: "smaller",
			SQUARE: "square",
			START: "start",
			TOP: "top",
			ULTRA_CONDENSED: "ultra-condensed",
			ULTRA_EXPANDED: "ultra-expanded",
			XXX_LARGE: "xxx-large",
			XX_LARGE: "xx-large",
			XX_SMALL: "xx-small",
			X_LARGE: "x-large",
			X_SMALL: "x-small",
		},
		xa,
		{
			linearGradient: function (a, b, c) {
				a = x.workingContext.createLinearGradient(a[0], a[1], b[0], b[1]);
				if ("Array" == Object.prototype.toString.call(c).slice(8, -1)) {
					b = {};
					const d = 1 / c.length;
					for (let e = 0; e < c.length; e++) b[d * e] = c[e];
					c = b;
				} else if ("Object" != Object.prototype.toString.call(c).slice(8, -1))
					throw Error("Color Stops must be an Array or an Object");
				for (let d = Object.keys(c || {}), e = 0; e < d.length; e++)
					(b = Number(d[e])), a.addColorStop(b, c[b]);
				return a;
			},
		},
		{
			randomColor: function () {
				let a = "#";
				for (let b = 0; 3 > b; b++) {
					let c = ya(255).toString(16);
					c = 1 === c.length ? 0 + c : c;
					a += c;
				}
				return a;
			},
			randomDefinedColor: function () {
				return aa[Aa[ya(Aa.length - 1)]];
			},
		},
		ja,
		Da,
		Fa,
		Ha,
		{
			getPixelColor: function (a, b, c) {
				b = a.width * c + b;
				return a.data.subarray(b, b + 4);
			},
			hasNeighbourColor: function (a, b, c, d) {
				let e = b.data;
				b = b.width;
				for (let g = c - 1; g <= c + 1; g++)
					for (let h = d - 1; h <= d + 1; h++)
						if (g !== c || h !== d) {
							var f = b * d + c;
							f = e.subarray(f, f + 4);
							if (f[0] === a[0] && f[1] === a[1] && f[2] === a[2] && f[3] === a[3])
								return !0;
						}
				return !1;
			},
			imageDataToColorArray: function (a) {
				let b = a.width,
					c = a.height;
				a = Array.from(a.data);
				let d = [];
				for (var e = 0; e < c; e++) {
					d.push([]);
					for (var f = 0; f < b; f++) {
						let g = c * e + f;
						d[e].push([a[g], a[g + 1], a[g + 2], a[g + 3]]);
					}
				}
				return d;
			},
			imageToData: function (a, b, c, d, e, f = !1) {
				let g = document.createElement("canvas"),
					h = g.getContext("2d"),
					k = x.dpr;
				b = b * k || 0;
				c = c * k || 0;
				g.width = d = (isNaN(d) ? a.width : d) * k;
				g.height = e = (isNaN(e) ? a.height : e) * k;
				h.imageSmoothingEnabled = f;
				h.drawImage(a, 0, 0, d, e);
				return h.getImageData(b, c, d, e);
			},
			replaceColorInImage: function (a, b, c, d = !1, e = 0) {
				let f = a.data;
				a = x.workingContext.createImageData(a.width, a.height);
				const [g, h, k, m] = l(b).rgbaA,
					[n, q, p, t] = l(c).rgbaA;
				b = 0;
				for (c = 0; c < f.length; c += 4) {
					let A = f[c],
						D = f[c + 1],
						w = f[c + 2],
						u = f[c + 3];
					Math.abs(A - g) <= e &&
					Math.abs(D - h) <= e &&
					Math.abs(w - k) <= e &&
					(d ? Math.abs(u - m) <= e : 1)
						? ((a.data[c] = n),
						  (a.data[c + 1] = q),
						  (a.data[c + 2] = p),
						  (a.data[c + 3] = d ? t : 255))
						: ((a.data[c] = A),
						  (a.data[c + 1] = D),
						  (a.data[c + 2] = w),
						  (a.data[c + 3] = d ? u : 255),
						  b++);
				}
				console.log(b);
				return a;
			},
		},
		Ka,
		Na,
		{
			arcBrace: function (a, b, c = 100, d = Math.PI / 2, e = 0, f = 10, g = f, h = 10) {
				const k = x.workingContext;
				f = c - f;
				g = c + g;
				k.save();
				k.translate(a, b);
				k.rotate(e);
				k.beginPath();
				k.moveTo(c, 0);
				k.lineTo(f, 0);
				k.arc(0, 0, c, 0, d);
				k.lineTo(f * Math.cos(d), f * Math.sin(d));
				k.moveTo(c * Math.cos(d / 2), c * Math.sin(d / 2));
				k.lineTo(g * Math.cos(d / 2), g * Math.sin(d / 2));
				k.stroke();
				k.closePath();
				k.restore();
				return [(g + h) * Math.cos(d / 2 + e) + a, (g + h) * Math.sin(d / 2 + e) + b];
			},
			curlyBrace: function (a, b, c, d, e = 20, f = 0.6, g = 0.8) {
				let h = a - c,
					k = b - d,
					m = Math.sqrt(h * h + k * k);
				h /= m;
				k /= m;
				const n = a - 0.5 * m * h + e * k * g;
				g = b - 0.5 * m * k - e * h * g;
				x.workingContext.stroke(
					new Path2D(
						`M ${a} ${b} ` +
							`Q ${a + f * e * k} ${b - f * e * h} ${
								a - 0.25 * m * h + (1 - f) * e * k
							} ${b - 0.25 * m * k - (1 - f) * e * h} ` +
							`T ${n} ${g} ` +
							`M ${c} ${d} ` +
							`Q ${c + f * e * k} ${d - f * e * h} ${
								a - 0.75 * m * h + (1 - f) * e * k
							} ${b - 0.75 * m * k - (1 - f) * e * h} ` +
							`T ${n} ${g}`,
					),
				);
				return [n, g];
			},
		},
		S,
		T,
		U,
		tb,
		{
			lens: function (a, b, c, d) {
				var e = Ra(a, b, c, d),
					f = e[0],
					g = e[1];
				e = Math.atan2(f[1] - a[1], f[0] - a[0]);
				let h = Math.atan2(g[1] - a[1], g[0] - a[0]);
				f = Math.atan2(f[1] - c[1], f[0] - c[0]);
				g = Math.atan2(g[1] - c[1], g[0] - c[0]);
				let k = x.workingContext;
				k.beginPath();
				k.arc(a[0], a[1], b, e, h);
				k.arc(c[0], c[1], d, g, f);
				k.doStroke && k.stroke();
				k.doFill && k.fill();
				k.closePath();
			},
			polygonWithRatioOfCentralAngles: function (a, b, c, d, e = 0) {
				Array.isArray(d) || console.error("ratio provided is not array");
				var f = d.reduce((h, k) => h + k, 0);
				f = (2 * Math.PI) / f;
				let g = x.workingContext;
				g.save();
				g.translate(a, b);
				g.rotate(e);
				g.beginPath();
				g.moveTo(c, 0);
				for (a = 0; a < d.length; a++) g.rotate(f * d[a]), g.lineTo(c, 0);
				g.doStroke && g.stroke();
				g.doFill && g.fill();
				g.closePath();
				g.restore();
			},
		},
		V,
		O,
		za,
		Yb,
		X,
		ec,
		{},
	].forEach((a) => G(a));
}).call(this);
