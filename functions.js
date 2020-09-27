window.CJS_Extensions = {};

function int (a, b) {
    return isNaN(a) ? b: a;
}

function bool (a, b) {
    return a == undefined ? b : a;
}
function dist(p1, p2) {
    if (p1 instanceof Array && p2 instanceof Array) {
        return sqrt((p1[0] - p2[0]) ** 2 + (p1[1] - p2[1]) ** 2);
    }
}
const getWidth = function () {
    var cs = getComputedStyle(document.body);
    return window.innerWidth - parseInt(cs.margin) * 2;
}
const addCJSExtension = function (extObj) {
    window.CJS_Extensions = Object.assign(window.CJS_Extensions, extObj);
}
const getCDFObject = function (cvs, width, height) {
    var ctx = cvs.getContext("2d"),
        dpr = window.devicePixelRatio;

    return Object.assign(
        {
            cvs: cvs,
            ctx: ctx,
            W: width,
            H: height,
            fill: "#fff",
            stroke: "#fff",
            strokeWidth: 1,
            line: function (x1, y1, x2, y2) {
                ctx.strokeStyle = this.stroke;
                ctx.lineWidth = this.strokeWidth;
                ctx.beginPath();
                ctx.moveTo(x1, y1);
                ctx.lineTo(x2, y2);
                ctx.stroke();
                ctx.closePath();
            },
            background: function (c) {
                ctx.save();
                this.rest()
                ctx.fillStyle = c;
                ctx.fillRect(-W, -H, W*2, H*2);
                ctx.restore();
            },
            translate: function (x, y = x) {
                ctx.translate(x, y);
            },
            rest: function () {
                ctx.resetTransform();
                ctx.scale(dpr, dpr);
            },
            setStyles: function () {
                ctx.strokeStyle = this.stroke;
                ctx.fillStyle = this.fill;
                ctx.lineWidth = this.strokeWidth;
            },
            arc: function (c) {
                ctx.beginPath();
                this.setStyles();
                ctx.arc(
                    c.p[0],
                    c.p[1],
                    c.r,
                    c.sa || 0,
                    int(c.ea, Math.PI * 2)
                );
                if (bool(c.fill, false)) ctx.fill();
                if (bool(c.stroke, true)) ctx.stroke();
                ctx.closePath();
            },
            circle: function (c) {
                this.arc({
                    p: c.p,
                    r: c.r,
                    sa: 0,
                    ea: Math.PI * 2,
                    fill: c.fill,
                    stroke: c.stroke,
                });
            },
            startLoop: function (fx, time) {
                var s = setInterval(fx.bind(this), time);
                this.recentAnimation = s;
            },
            stopLoop: function (fx = function () {}) {
                if (this.recentAnimation) clearInterval(this.recentAnimation);
                this.recentAnimation = null;
                ctx.animating = false;
                fx.bind(this)();
            },

            drawPlayBtn: function (c = {}) {
                ctx.save();
                this.rest();
                var p = c.p || [this.W/2, this.H/2];
                this.translate(p[0], p[1]);
                this.fill = c.background || "#3fffac";
                this.arc({
                    p: [0, 0],
                    r: c.r || 20,
                    fill: true,
                    stroke: false
                });
                var len = c.playLen || 11;
                ctx.beginPath();
                ctx.moveTo(len, 0);
                ctx.fillStyle = c.playCol || "#fff"
                for (var i = 1; i < 3; i++) {
                    ctx.lineTo(
                        Math.cos(i * Math.PI * 2 / 3) * len,
                        Math.sin(i * Math.PI * 2 / 3) * len,
                    )
                }
                ctx.fill();
                ctx.closePath();
            }
        },
        window.CJS_Extensions
    );
}