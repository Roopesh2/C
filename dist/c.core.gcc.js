(function(){function f(a,b,c={}){var d={width:200,height:200,dpr:Math.ceil(window.devicePixelRatio||1),doFill:!0,doStroke:!0,pathStarted:!1,yAxisInverted:!1,pauseAnimations:!1,netRotation:0,currentLoop:void 0,currentLoopName:void 0,textAlign:"start",textBaseline:"alphabetic",fillStyle:"#ffffff",background:"#ffffff",strokeStyle:"#000000",colorMode:"rgba",lineWidth:1,fontSize:"20px",fontFamily:"serif",fontStyle:"normal",fontVariant:"normal",fontWeight:"normal",fontStretch:"normal",lineHeight:1.2,font:"20px serif",
events:{}};c=n(d,c);let e;"string"===typeof b?b=document.querySelector(b):b instanceof HTMLElement||(b=document.body);let g=b.querySelector("canvas");e=g?g:f.makeCanvas(c);"number"!==typeof b.CID&&(b.CID=1);let h=b.CID,k=b.id||b.classList.item(0),m=c.name||e.name;"string"!=typeof m&&(m=k+"-C-"+h,c.name=m);e.id=m;e.classList.add(m);b.appendChild(e);g?f.workingContext=e.context:(f.resizeCanvas(e,c),b=e.getContext("2d"),p(c,b),e.context=b,e.context.setTransform(c.dpr,0,0,c.dpr,0,0),f.workingContext=
e.context,f.workingContext.savedStates=d,f.workingContext.delayedAnimations=[]);f.contextList[m]=e.context;d={};for(let l in c.events)if(b=c.events[l])e.addEventListener(l,b),d[l]=b;e.events=d;f.dpr=c.dpr;f.workingCanvas=e;a()}f.contextList={};f.nameID=0;f.getWindowWidth=function(a=document.body){a=window.getComputedStyle(a);return parseInt(a.width,10)-parseInt(a.paddingRight,10)-parseInt(a.paddingLeft,10)};
f.resizeCanvas=function(a,b){const c=b.width,d=b.height;b=b.dpr||window.devicePixelRatio;a.style.width=c+"px";a.style.height=d+"px";a.width=b*c;a.height=b*d;a.rWidth=c;a.rHeight=d};f.makeCanvas=function(a){const b=document.createElement("canvas");f.resizeCanvas(b,a);return b};f.addExtension=function(a){p(a,window);p(a,f.extensions,!1)};f.debugAnimations=!1;f.extensions={};f.debug=function(a){f.debugAnimations="boolean"!==typeof a?!0:a};f.getCanvas=function(a){return f.contextList[a]||f.workingContext};
f._ANIMATIONLOG_=[];f.functions={};f.COLORLIST={};(function(a){let b=Object.keys(a);for(let c=0;c<b.length;c++){let d=b[c];Object.defineProperty(window,d,{configurable:!0,enumerable:!0,get:a[d],set:function(e){Object.defineProperty(window,d,{configurable:!0,enumerable:!0,value:e,writable:!0})}})}})({CENTERX:function(){return f.workingCanvas.rWidth/2},CENTERY:function(){return f.workingCanvas.rHeight/2}});window.C=f;Object.clone=Object.clone||function(a){let b={};for(let c=0,d=Object.keys(a);c<d.length;c++)b[d[c]]=a[d[c]];return b};function p(a,b=window,c=!1){Object.assign(b,a);c&&Object.assign(f.functions,a)}function n(a,b={},c=!0){b=Object.clone(b);for(let d=0,e=Object.keys(a);d<e.length;d++){let g=e[d],h=a[g],k=b[g],m=Object.prototype.toString.call(h).slice(8,-1),l=Object.prototype.toString.call(k).slice(8,-1);"Object"==m&&c&&(b[g]=n(h,k,c));"Undefined"!=m&&"Null"!=m&&l!==m&&(b[g]=a[g])}return b}
function r(a){a.doFill&&a.fill();a.doStroke&&a.stroke()}window.applyDefault=n;const t={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",
darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",
ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",
lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",
moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",
seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};let u=/^#([a-f0-9])([a-f0-9])([a-f0-9])$/i,v=/^#([a-f0-9])([a-f0-9])([a-f0-9])([a-f0-9])$/i,x=/^#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})$/i,y=/^#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})$/i,z=/^rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)$/i,A=/^rgba\((\d{1,3}),(\d{1,3}),(\d{1,3}),(?:(\d+(?:\.\d+)?)|(?:\.\d+))\)$/i;
function B(...a){var b;Array.isArray(a[0])&&(a=a[0]);let c=a[0];if("number"===typeof c)1===a.length?b=[c,c,c,1]:2===a.length?b=[c,a[1],0,1]:3===a.length?b=[c,a[1],a[2],1]:4===a.length&&(b=[c,a[1],a[2],a[3]]);else if("string"==typeof c)if(b=c.replace(/\s/g,"").toLowerCase(),t[b])b=B(t[b]).rgbaA;else if(u.test(b))b=u.exec(b).slice(1).map(g=>parseInt(g+g,16)),b[3]=1;else if(x.test(b))b=x.exec(b).slice(1).map(g=>parseInt(g,16)),b[3]=1;else if(v.test(b))b=v.exec(b).slice(1).map(g=>parseInt(g+g,16));else if(y.test(b))b=
y.exec(b).slice(1).map(g=>parseInt(g,16));else if(z.test(b))b=z.exec(b).slice(1).map(g=>parseInt(g,10)),b[3]=1;else if(A.test(b))b=A.exec(b).slice(1).map((g,h)=>3==h?parseFloat(g):parseInt(g,10));else throw console.log(b),Error("Given color is not valid");else return b=c,{rgbaA:b,rgba:b,hex6:b,hex8:b,hex:b,hsl:b};a=b[3];b[3]*=255;let d="#";b.map((g,h)=>{3>h&&(g=Math.round(g).toString(16),d+=1==g.length?"0"+g:g)});let e="#";b.map((g,h)=>{4>h&&(g=Math.round(g).toString(16),e+=1==g.length?"0"+g:g)});
b[3]=a;return{rgbaA:b,rgba:`rgba(${b[0]}, ${b[1]}, ${b[2]}, ${b[3]})`,hex6:d,hex8:e,hex:e,hsl:`hsl(${b[0]}, ${b[1]}, ${b[2]})`}};let D={loop:1},E={number:"color: #9afcad;",keyword:"color: #adacdf;",running:"color: yellow;",delayed:"color: orange;",finished:"color: #3aff5f;"};function F(a,b=a){f.workingContext.scale(a,b)}function G(){f.workingContext.setTransform(f.dpr,0,0,f.dpr,0,0)}
function H(a){a=f.contextList[a]||f.workingContext;return{background:a.background,colorMode:a.colorMode,strokeStyle:a.strokeStyle,fillStyle:a.fillStyle,lineWidth:a.lineWidth,doStroke:a.doStroke,doFill:a.doFill,pathStarted:a.pathStarted,yAxisInverted:a.yAxisInverted,netRotation:a.netRotation,fontStyle:a.fontStyle,fontVariant:a.fontVariant,fontWeight:a.fontWeight,fontStretch:a.fontStretch,fontSize:a.fontSize,lineHeight:a.lineHeight,fontFamily:a.fontFamily,font:a.font,textAlign:a.textAlign,textBaseline:a.textBaseline,
events:a.events}}
function I(a,b,c,d,e=100,g={},h){function k(){l.currentLoop=window.requestAnimationFrame(k);f.workingContext=l;let w=H(c);g&&p(q,f.workingContext);b(window.performance.now()-l.timeStart,m());g&&p(w,f.workingContext)}function m(){let w=window.performance.now(),C=w-l.recentTimeStamp;l.recentTimeStamp=w;l.timeDelayList.push(C);l.totalTimeCaptured+=C;l.timeDelayList.length>e&&(l.totalTimeCaptured-=l.timeDelayList.shift());return l.timeDelayList.length/(l.totalTimeCaptured/1E3)}let l;"function"==typeof a&&
(g=d=c=b=a=D.loop++,h=arguments[4]);c?l=f.contextList[c]:(l=f.workingContext,c=l.name);l.timeDelayList=[];l.totalTimeCaptured=0;let q=Object.assign(H(c)||{},g);if(void 0!=l.currentLoop)f.debugAnimations&&(console.log(c+": "+a+" %cdelayed",E.delayed),f._ANIMATIONLOG_.push({canvas:l,animationName:a,state:"delayed",settings:q})),l.delayedAnimations.push({name:a,settings:q,functionToRun:b,canvasName:c,timeDelay:d,timeDelaysToRemember:e,dur:h});else{if(f.debugAnimations){let w=`${c}: ${a} %crunning`,C=
[E.running];void 0!=h&&(w+=`%c for %c${h}ms`,C.push(E.keyword,E.number));f._ANIMATIONLOG_.push({canvas:l,animationName:a,state:"running",settings:q,dur:h});console.log(w,...C)}l.recentTimeStamp=window.performance.now();l.timeStart=window.performance.now();isNaN(d)?k():(l.currentLoopName=a,l.currentLoop=setInterval(function(){f.workingContext=l;let w=H(c);p(q,f.workingContext);b(window.performance.now()-l.timeStart,m());p(w,f.workingContext)},d))}}
function J(a=!1){let b=f.workingContext;if(a){let {fontStyle:c,fontVariant:d,fontWeight:e,fontStretch:g,fontSize:h,lineHeight:k,fontFamily:m}=b;return`${c} ${d} ${e} ${g} ${h}/${k} ${m}`}return b.font}function K(a="image/png"){return f.workingContext.canvas.toDataURL(a)}
var L={background:function(...a){a=B(a).hex8;let b=f.workingContext;b.background=a;b.save();G();b.fillStyle=a;b.fillRect(0,0,b.canvas.width,b.canvas.height);b.restore()},clear:function(a,b,c,d){let e=f.workingContext,g=f.dpr;a=a||0;b=b||0;c=c||e.canvas.width;d=d||e.canvas.height;e.save();e.setTransform(g,0,0,g,0,0);e.clearRect(a,b,c,d);e.restore()},endShape:function(){let a=f.workingContext;a.closePath();a.pathStarted=!1},fill:function(...a){let b=f.workingContext;0!==arguments.length?(b.fillStyle=
B(a).hex8,b.doFill=!0):b.fill()},fontFamily:function(a){let b=f.workingContext;b.fontFamily=a;b.font=J(!0)},fontSize:function(a){let b=f.workingContext;b.fontSize="number"===typeof a?a+"px":a;b.font=J(!0)},fontStretch:function(a){let b=f.workingContext;b.fontStretch=a;b.font=J(!0)},fontStyle:function(a){let b=f.workingContext;b.fontStyle=a;b.font=J(!0)},fontVariant:function(a){let b=f.workingContext;b.fontVariant=a;b.font=J(!0)},fontWeight:function(a){let b=f.workingContext;b.fontWeight=a;b.font=
J(!0)}};L.getCanvasData=K;L.getContextStates=H;L.getFont=J;L.lineCap=function(a){f.workingContext.lineCap=a};L.lineDash=function(){f.workingContext.setLineDash([...arguments])};L.lineHeight=function(a){let b=f.workingContext;b.lineHeight=a;b.font=J(!0)};L.lineJoin=function(a){f.workingContext.lineJoin=a};L.lineTo=function(a,b){f.workingContext.lineTo(a,b)};L.loop=I;L.measureText=function(a){return f.workingContext.measureText(a)};L.moveTo=function(a,b){f.workingContext.moveTo(a,b)};
L.noFill=function(){f.workingContext.doFill=!1};
L.noLoop=function(a,b){let c=f.workingContext;a?c=f.contextList[a]:a=c.name;clearInterval(c.currentLoop);window.cancelAnimationFrame(c.currentLoop);c.currentLoop=void 0;if(f.debugAnimations){a=`${a}: ${c.currentLoopName} %cfinished`;let d=[E.finished];void 0!=b&&(a+=`%c in %c${b.toFixed(3)}ms`,d.push(E.keyword,E.number));console.log(a,...d);f._ANIMATIONLOG_.push({canvas:c,animationName:c.currentLoopName,state:"finished",endTime:b})}0<c.delayedAnimations.length&&(b=c.delayedAnimations.shift(),I(b.name,
b.functionToRun,b.canvasName,b.timeDelay,b.timeDelaysToRememberm,b.settings,b.dur))};L.noStroke=function(){f.workingContext.doStroke=!1};L.permaBackground=function(a){"string"!=typeof a&&(a=K());let b=f.workingContext.canvas.style;b.background="url('"+a+"')";b.backgroundPosition="center";b.backgroundSize="cover"};L.putImageData=function(){f.workingContext.putImageData(...arguments)};L.rest=G;L.restore=function(){p(f.workingContext.savedStates,f.workingContext);f.workingContext.restore()};
L.rotate=function(a){let b=f.workingContext;b.rotate(a);b.netRotation=(b.netRotation+a)%Math.PI*2};L.save=function(){f.workingContext.savedStates=H();f.workingContext.save()};L.saveCanvas=function(a="drawing",b="image/png"){b=K().replace(b,"image/octet-stream");let c=document.createElement("a");c.download=a+".png";c.href=b;c.click()};L.scale=F;L.setImageSmoothing=function(a){f.workingContext.imageSmoothingEnabled=!!a};L.startShape=function(){let a=f.workingContext;a.beginPath();a.pathStarted=!0};
L.stroke=function(...a){let b=f.workingContext;0<arguments.length?(b.strokeStyle=B(a).hex8,b.doStroke=!0):b.stroke()};L.strokeWidth=function(a){f.workingContext.lineWidth=Number(a)};L.textAlign=function(a){f.workingContext.textAlign=a};L.textBaseline=function(a){f.workingContext.textBaseline=a};
L.transform=function(a,b,c,d,e,g){let h=f.workingContext;if(void 0==a||null==a)return f.workingContext.getTransform();a instanceof DOMMatrix?h.setTransform(a.a,a.b,a.c,a.d,a.e,a.f):h.setTransform(a||0,b||0,c||0,d||0,e||0,g||0);h.scale(f.dpr,f.dpr)};L.translate=function(a,b=0){f.workingContext.translate(a,b)};const M=180/Math.PI;var N={};N.DEG=Math.PI/180;N.E=2.718281828459045;N.HALF_PI=1.5707963267948966;N.LN10=2.302585092994046;N.LN2=.6931471805599453;N.PHI=1.618033988749894;N.PI=3.141592653589793;N.QUATER_PI=.7853981633974483;N.RAD=M;N.SQRT2=1.4142135623730951;N.TAU=6.283185307179586;N.TIERCE_PI=1.0471975511965976;N.TWO_PI=6.283185307179586;function O(a,b,c){a=B(a).rgbaA;b=B(b).rgbaA;return B(Math.min(Math.max(0,(b[0]-a[0])*c+a[0]),255),Math.min(Math.max(0,(b[1]-a[1])*c+a[1]),255),Math.min(Math.max(0,(b[2]-a[2])*c+a[2]),255),Math.min(Math.max(0,(b[3]-a[3])*c+a[3]),255)).hex8}var P={getInterpolatedColorList:function(a,b=0,c=5,d){if(1==a.length)throw Error("Atleast 2 colors are needed to create interpolatable object");c=(c-b)/(a.length-1);let e={};for(let g=0;g<a.length;g++){let h=b+g*c,k=B(a[g]).rgbaA;k[3]=isNaN(d)?k[3]:d;e[h]=k}return e}};
P.lerpColor=O;P.lerpColorArray=function(a,b,c=0,d=1){let e=a.length-1;if(b>=d)return a[e];if(b<=c)return a[0];b=(b-c)/(d-c)*e;c=Math.floor(b);return O(a[c],a[c+1],b-c)};P.lerpColorObject=function(a,b){const c=Object.keys(a||{}).sort();var d=Math.min(...c),e=Math.max(...c);let g="#000000";if(b>=e)return a[e];if(b<=d)return a[d];for(d=0;d<c.length-1;d++)if(e=c[d],b>e){g=O(a[e],a[c[d+1]],(b-e)/(c[d+1]-e));break}else if(b==e){g=a[e];break}return g};function Q(a,b,c){var d=new Image;d.src=a;"function"==typeof b&&d.addEventListener("load",()=>b(d),!1);"function"==typeof c&&d.addEventListener("error",e=>c(e,d),!1);return d}
var R={drawImage:function(a){let b=f.workingContext,c,d;6>arguments.length?(c=arguments[1],d=arguments[2]):(c=arguments[5],d=arguments[6]);b.yAxisInverted?(b.save(),b.translate(c,d),b.scale(1,-1),b.drawImage(a,0,0,...Array.prototype.slice.call(arguments,3)),b.restore()):b.drawImage(a,c,d,...Array.prototype.slice.call(arguments,3))}};R.loadImage=Q;R.loadImagePromise=function(a){return new Promise((b,c)=>{Q(a,b,c)})};
R.pixel=function(a,b,c,d){let e=f.workingContext;c&&(e.fillStyle=c);d||(d=1/f.dpr);e.fillRect(a,b,d,d)};function S(a,b){return Math.sqrt(Math.pow(a[0]-b[0],2)+Math.pow(a[1]-b[1],2))};function T(a,b,c,d,e=1){return[b[0]+(c[0]-a[0])/6*e,b[1]+(c[1]-a[1])/6*e,c[0]-(d[0]-b[0])/6*e,c[1]-(d[1]-b[1])/6*e]}function U(a,b=1,c=!0){for(let d=0;d<a.length-1;d++){let e=a[d+1],g=T(0<d?a[d-1]:c?a[a.length-2]:a[0],a[d],e,d!=a.length-2?a[d+2]:c?a[1]:e,b);f.workingContext.bezierCurveTo(g[0],g[1],g[2],g[3],e[0],e[1])}}function V(a,b,c,d){let e=f.workingContext;e.beginPath();e.rect(a,b,c,d);e.doFill&&e.fill();e.doStroke&&e.stroke();e.closePath()}
function W(a,b,c,d,e=0){X(a,b,c,d/(2*Math.sin(Math.PI/c)),e)}function X(a,b,c,d,e=0){let g=0,h=2*Math.PI/c,k=f.workingContext;e+=h/2;let m=[Math.cos(e)*d+a,Math.sin(e)*d+b];k.beginPath();for(k.moveTo(m[0],m[1]);g++<c;)k.lineTo(Math.cos(g*h+e)*d+a,Math.sin(g*h+e)*d+b);k.lineTo(m[0],m[1]);k.closePath();k.doFill&&k.fill();k.doStroke&&k.stroke()}
var Y={angle:function(a,b,c,d,e=20,g=10,h=!1,k=1){var m=(b[1]-a[1])/(b[0]-a[0]),l=(d[1]-c[1])/(d[0]-c[0]);var q=a[1]-a[0]*m;l=(c[1]-c[0]*l-q)/(m-l);q=[l,m*l+q];m=q[0];q=q[1];if(isNaN(m)||isNaN(q))throw Error("No intersection point");a=Math.atan2(a[1]-q,a[0]-m);b=Math.atan2(b[1]-q,b[0]-m);c=Math.atan2(c[1]-q,c[0]-m);d=Math.atan2(d[1]-q,d[0]-m);d={1:[b,d],2:[d,a],3:[a,c],4:[c,b]}[k];k=f.workingContext;h?(h=d[1],d=d[0]-d[1]):(h=d[0],d=d[1]-d[0]);k.doFill&&(k.beginPath(),k.moveTo(m,q),k.arc(m,q,e,h,d+
h),k.fill(),k.closePath());k.doStroke&&(k.beginPath(),k.arc(m,q,e,h,d+h),k.stroke(),k.closePath());return{center:[m+(e+g)*Math.cos(h+d/2),q+(e+g)*Math.sin(h+d/2)],ang:d}},annulus:function(a,b,c,d){let e=f.workingContext;e.beginPath();e.arc(a,b,c,0,2*Math.PI,!1);e.moveTo(d,0);e.arc(a,b,d,0,2*Math.PI,!0);r(e)},annulusSector:function(a,b,c,d,e,g){let h=f.workingContext;h.beginPath();h.arc(a,b,c,g,g+e,!1);h.arc(a,b,d,g+e,g,!0);r(h)},arc:function(a,b,c,d=Math.PI/2,e=0){let g=f.workingContext;g.pathStarted||
g.beginPath();g.arc(a,b,c,e,e+d);g.pathStarted||r(g)},arcBetweenPoints:function(a,b,c,d,e,g=!1){a==c&&b==d&&console.error("Can't draw a arc between points. Given points are exactly same");var h=[a,b],k=[c,d];const m=S(h,k);var l=(e*e-e*e+m*m)/(2*m);const q=Math.sqrt(e*e-l*l);l/=m;l=[(k[0]-h[0])*l+h[0],(k[1]-h[1])*l+h[1]];h=[l[0]+q*(k[1]-h[1])/m,l[1]-q*(k[0]-h[0])/m];k=f.workingContext;a=Math.atan2(b-h[1],a-h[0]);c=Math.atan2(d-h[1],c-h[0])-a;k.pathStarted||(k.save(),k.beginPath());k.arc(h[0],h[1],
e,a,c+a,!g);k.pathStarted||(r(k),k.restore());return h},bezier:function(a,b,c,d,e,g){let h=f.workingContext;h.pathStarted||h.beginPath();h.bezierCurveTo(a,b,c,d,e,g);h.pathStarted||r(h)},circle:function(a,b,c){let d=f.workingContext;d.beginPath();d.arc(a,b,c,0,2*Math.PI);r(d)},circularSegment:function(a,b,c,d=Math.PI/2,e=0){let g=f.workingContext;g.pathStarted||g.beginPath();g.arc(a,b,c,e,e+d);g.pathStarted||r(g)},ellipse:function(a,b,c,d,e=0,g=0,h=2*Math.PI){let k=f.workingContext;k.pathStarted||
k.beginPath();k.ellipse(a,b,c,d,e,g,g+h);k.pathStarted||r(k)},equiTriangle:function(a,b,c,d=0){W(a,b,3,c,d)}};Y.getBezierControlPoints=T;Y.line=function(a,b,c,d){let e=f.workingContext;e.beginPath();e.moveTo(a,b);e.lineTo(c,d);e.stroke();e.closePath()};Y.point=function(a,b,c=10,d=!1){let e=f.workingContext;e.beginPath();e.arc(a,b,c/2,0,2*Math.PI);e.fill();d&&e.stroke();e.beginPath()};
Y.polygon=function(){let a=arguments;if(2<a.length){let b=f.workingContext,c=a[0];b.beginPath();b.moveTo(c[0],c[1]);for(let d=1;d<a.length;d++)b.lineTo(a[d][0],a[d][1]);b.lineTo(c[0],c[1]);b.doFill&&b.fill();b.doStroke&&b.stroke();b.closePath()}};Y.quad=function(a,b,c,d){let e=f.workingContext;e.beginPath();e.moveTo(a[0],a[1]);e.lineTo(b[0],b[1]);e.lineTo(c[0],c[1]);e.lineTo(d[0],d[1]);e.lineTo(a[0],a[1]);e.doFill&&e.fill();e.doStroke&&e.stroke();e.closePath()};
Y.quadraticCurve=function(){let a=f.workingContext,b=arguments;4==b.length?a.quadraticCurveTo(b[0],b[1],b[2],b[3]):6==b.length&&(a.beginPath(),a.moveTo(b[0],b[1]),a.quadraticCurveTo(b[2],b[3],b[4],b[5]),r(a))};Y.rect=V;Y.regularPolygon=W;Y.regularPolygonWithRadius=X;Y.sector=function(a,b,c,d=Math.PI/2,e=0){let g=f.workingContext;g.beginPath();g.moveTo(a,b);g.arc(a,b,c,e,e+d);g.lineTo(a,b);r(g)};
Y.smoothCurveThroughPoints=function(a,b=1,c=!0){let d=f.workingContext;d.beginPath();d.moveTo(a[0][0],a[0][1]);U(a,b,c);d.doFill&&c&&d.fill();d.doStroke&&d.stroke();d.closePath()};Y.smoothCurveThroughPointsTo=U;Y.square=function(a,b,c){V(a,b,c,c)};Y.triangle=function(a,b,c){let d=f.workingContext;d.beginPath();d.moveTo(a[0],a[1]);d.lineTo(b[0],b[1]);d.lineTo(c[0],c[1]);d.lineTo(a[0],a[1]);d.doFill&&d.fill();d.doStroke&&d.stroke();d.closePath()};const {abs:aa,acos:ba,asin:ca,atan:da,atan2:ea,cbrt:fa,ceil:ha,cos:ia,cosh:ja,exp:ka,floor:la,log:ma,log2:na,log10:oa,max:pa,min:qa,pow:ra,random:sa,round:ta,sign:ua,sin:va,sqrt:wa,tan:xa,tanh:ya}=Math;var Z={};Z.abs=aa;Z.acos=ba;Z.asin=ca;Z.atan=da;Z.atan2=ea;Z.cbrt=fa;Z.ceil=ha;Z.cos=ia;Z.cosh=ja;Z.exp=ka;Z.floor=la;Z.log=ma;Z.log10=oa;Z.log2=na;Z.max=pa;Z.min=qa;Z.pow=ra;Z.random=sa;Z.round=ta;Z.sgn=ua;Z.sigmoid=function(a){return 1/(1+Math.exp(-a))};Z.sin=va;Z.sqrt=wa;Z.tan=xa;Z.tanh=ya;[{defineProperties:p,C:f,dist:S},L,N,{ALPHABETIC:"alphabetic",BEVEL:"bevel",BOTTOM:"bottom",BUTT:"butt",CENTER:"center",CONDENSED:"condensed",END:"end",EXPANDED:"expanded",EXTRA_CONDENSED:"extra-condensed",EXTRA_EXPANDED:"extra-expanded",HANGING:"hanging",IDEOGRAPHIC:"ideographic",ITALIC:"italic",LARGE:"large",LARGER:"larger",LEFT:"left",MEDIUM:"medium",MIDDLE:"middle",MILTER:"milter",MITER:"miter",NORMAL:"normal",OBLIQUE:"oblique",RIGHT:"right",ROUND:"round",SEMI_CONDENSED:"semi-condensed",SEMI_EXPANDED:"semi-expanded",
SMALL:"small",SMALLER:"smaller",SQUARE:"square",START:"start",TOP:"top",ULTRA_CONDENSED:"ultra-condensed",ULTRA_EXPANDED:"ultra-expanded",XXX_LARGE:"xxx-large",XX_LARGE:"xx-large",XX_SMALL:"xx-small",X_LARGE:"x-large",X_SMALL:"x-small"},{linearGradient:function(a,b,c){a=f.workingContext.createLinearGradient(a[0],a[1],b[0],b[1]);if("Array"==Object.prototype.toString.call(c).slice(8,-1)){b={};const d=1/c.length;for(let e=0;e<c.length;e++)b[d*e]=c[e];c=b}else if("Object"!=Object.prototype.toString.call(c).slice(8,
-1))throw Error("Color Stops must be an Array or an Object");for(let d=Object.keys(c||{}),e=0;e<d.length;e++)b=Number(d[e]),a.addColorStop(b,c[b]);return a}},P,R,{fillText:function(a,b=0,c=0,d){let e=f.workingContext;e.yAxisInverted&&(F(1,-1),c*=-1);e.fillText(a,b,c,d);e.yAxisInverted&&F(1,-1)},strokeText:function(a,b=0,c=0,d){let e=f.workingContext;e.yAxisInverted&&(F(1,-1),c*=-1);e.strokeText(a,b,c,d);e.yAxisInverted&&F(1,-1)},text:function(a,b=0,c=0,d){let e=f.workingContext;e.yAxisInverted&&(F(1,
-1),c*=-1);e.doFill?e.fillText(a,b,c,d):e.doStroke&&e.strokeText(a,b,c,d);e.yAxisInverted&&F(1,-1)}},Y,Z,{randomInt:function(a=10,b=0){return Math.round(Math.random()*(a-b)+b)}}].forEach(a=>p(a));}).call(this);
