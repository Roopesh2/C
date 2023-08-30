(function(){var f=f||{};f.scope={};f.ASSUME_ES5=!1;f.ASSUME_NO_NATIVE_MAP=!1;f.ASSUME_NO_NATIVE_SET=!1;f.SIMPLE_FROUND_POLYFILL=!1;f.ISOLATE_POLYFILLS=!1;f.FORCE_POLYFILL_PROMISE=!1;f.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION=!1;f.defineProperty=f.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
f.getGlobal=function(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");};f.global=f.getGlobal(this);f.IS_SYMBOL_NATIVE="function"===typeof Symbol&&"symbol"===typeof Symbol("x");f.TRUST_ES6_POLYFILLS=!f.ISOLATE_POLYFILLS||f.IS_SYMBOL_NATIVE;f.polyfills={};f.propertyToPolyfillSymbol={};
f.POLYFILL_PREFIX="$jscp$";f.polyfill=function(a,b,c,e){b&&(f.ISOLATE_POLYFILLS?f.polyfillIsolated(a,b,c,e):f.polyfillUnisolated(a,b,c,e))};f.polyfillUnisolated=function(a,b){var c=f.global;a=a.split(".");for(var e=0;e<a.length-1;e++){var d=a[e];if(!(d in c))return;c=c[d]}a=a[a.length-1];e=c[a];b=b(e);b!=e&&null!=b&&f.defineProperty(c,a,{configurable:!0,writable:!0,value:b})};
f.polyfillIsolated=function(a,b,c){var e=a.split(".");a=1===e.length;var d=e[0];d=!a&&d in f.polyfills?f.polyfills:f.global;for(var g=0;g<e.length-1;g++){var h=e[g];if(!(h in d))return;d=d[h]}e=e[e.length-1];c=f.IS_SYMBOL_NATIVE&&"es6"===c?d[e]:null;b=b(c);null!=b&&(a?f.defineProperty(f.polyfills,e,{configurable:!0,writable:!0,value:b}):b!==c&&(void 0===f.propertyToPolyfillSymbol[e]&&(a=1E9*Math.random()>>>0,f.propertyToPolyfillSymbol[e]=f.IS_SYMBOL_NATIVE?f.global.Symbol(e):f.POLYFILL_PREFIX+a+"$"+
e),f.defineProperty(d,f.propertyToPolyfillSymbol[e],{configurable:!0,writable:!0,value:b})))};f.polyfill("globalThis",function(a){return a||f.global},"es_2020","es3");
const m={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",
darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",
ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",
lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",
moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",
seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};let p=/^#([a-f0-9])([a-f0-9])([a-f0-9])$/i,q=/^#([a-f0-9])([a-f0-9])([a-f0-9])([a-f0-9])$/i,t=/^#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})$/i,u=/^#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})$/i,v=/^rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)$/i,w=/^rgba\((\d{1,3}),(\d{1,3}),(\d{1,3}),(?:(\d+(?:\.\d+)?)|(?:\.\d+))\)$/i;
function y(...a){var b;Array.isArray(a[0])&&(a=a[0]);let c=a[0];if("number"===typeof c)1===a.length?b=[c,c,c,1]:2===a.length?b=[c,a[1],0,1]:3===a.length?b=[c,a[1],a[2],1]:4===a.length&&(b=[c,a[1],a[2],a[3]]);else if("string"==typeof c)if(b=c.replace(/\s/g,"").toLowerCase(),m[b])b=m[b],b=[parseInt(b.substr(1,2),16),parseInt(b.substr(3,2),16),parseInt(b.substr(5,2),16),1];else if(p.test(b))b=p.exec(b).slice(1).map(g=>parseInt(g+g,16)),b[3]=1;else if(t.test(b))b=t.exec(b).slice(1).map(g=>parseInt(g,
16)),b[3]=1;else if(q.test(b))b=q.exec(b).slice(1).map(g=>parseInt(g+g,16)),b[3]/=255;else if(u.test(b))b=u.exec(b).slice(1).map(g=>parseInt(g,16)),b[3]/=255;else if(v.test(b))b=v.exec(b).slice(1).map(g=>parseInt(g,10)),b[3]=1;else if(w.test(b))b=w.exec(b).slice(1).map((g,h)=>3==h?parseFloat(g):parseInt(g,10));else throw Error("Cannot convert given value to color: "+b);else return b=c,{rgbaA:b,rgba:b,hex6:b,hex8:b,hex:b,hsl:b};a=b[3];b[3]*=255;let e="#";b.map((g,h)=>{3>h&&(g=Math.round(g).toString(16),
e+=1==g.length?"0"+g:g)});let d="#";b.map((g,h)=>{4>h&&(g=Math.round(g).toString(16),d+=1==g.length?"0"+g:g)});b[3]=a;return{rgbaA:b,rgba:`rgba(${b[0]}, ${b[1]}, ${b[2]}, ${b[3]})`,hex6:e,hex8:d,hex:d,hsl:`hsl(${b[0]}, ${b[1]}, ${b[2]})`}};function z(a,b,c={}){var e={width:200,height:200,dpr:Math.ceil(globalThis.devicePixelRatio||1),doFill:!0,doStroke:!0,pathStarted:!1,yAxisInverted:!1,xAxisInverted:!1,pauseAnimations:!1,netRotation:0,currentLoop:void 0,currentLoopName:void 0,textAlign:"start",textBaseline:"alphabetic",fillStyle:"#ffffff",background:"#ffffff",strokeStyle:"#000000",colorMode:"rgba",lineWidth:1,fontSize:"20px",fontFamily:"serif",fontStyle:"normal",fontVariant:"normal",fontWeight:"normal",fontStretch:"normal",lineHeight:1.2,
font:"20px serif",events:{}};c=A(e,c);var d;"string"===typeof b?b=document.querySelector(b):b instanceof HTMLElement||(b=document.body);let g=(d=b.querySelector("canvas"))&&d.id==c.name;d=g?d:z.makeCanvas(c);"number"!==typeof b.CID&&(b.CID=1);let h=b.CID,k=b.id||b.classList.item(0),n=c.name||d.name;"string"!=typeof n&&(n=k+"-C-"+h,c.name=n);d.id=n;d.classList.add(n);b.appendChild(d);g?z.workingContext=d.context:(z.resizeCanvas(d,c),b=d.getContext("2d"),B(c,b),d.context=b,d.context.setTransform(c.dpr,
0,0,c.dpr,0,0),z.workingContext=d.context,z.workingContext.savedStates=e,z.workingContext.delayedAnimations=[]);z.contextList[n]=d.context;e={};for(let l in c.events)if(b=c.events[l])d.addEventListener(l,b),e[l]=b;d.events=e;z.dpr=c.dpr;z.workingCanvas=d;a()}z.contextList={};z.nameID=0;z.getWindowWidth=function(a=document.body){a=globalThis.getComputedStyle(a);return parseInt(a.width,10)-parseInt(a.paddingRight,10)-parseInt(a.paddingLeft,10)};
z.resizeCanvas=function(a,b){const c=b.width,e=b.height;b=b.dpr||globalThis.devicePixelRatio;a.style.width=c+"px";a.style.height=e+"px";a.width=b*c;a.height=b*e;a.rWidth=c;a.rHeight=e};z.makeCanvas=function(a){const b=document.createElement("canvas");z.resizeCanvas(b,a);return b};z.addExtension=function(a){B(a,globalThis);B(a,z.extensions,!1)};z.debugAnimations=!1;z.extensions={};z.debug=function(a){z.debugAnimations="boolean"!==typeof a?!0:a};z.getCanvas=function(a){return z.contextList[a]||z.workingContext};
z._ANIMATIONLOG_=[];z.functions={};z.COLORLIST={};(function(a){let b=Object.keys(a);for(let c=0;c<b.length;c++){let e=b[c];Object.defineProperty(globalThis,e,{configurable:!0,enumerable:!0,get:a[e],set:function(d){Object.defineProperty(globalThis,e,{configurable:!0,enumerable:!0,value:d,writable:!0})}})}})({CENTERX:function(){return z.workingCanvas.rWidth/2},CENTERY:function(){return z.workingCanvas.rHeight/2}});globalThis.C=z;let aa={loop:1},C={number:"color: #9afcad;",keyword:"color: #adacdf;",running:"color: yellow;",delayed:"color: orange;",finished:"color: #3aff5f;"};function E(){z.workingContext.setTransform(z.dpr,0,0,z.dpr,0,0)}
function F(a){a=z.contextList[a]||z.workingContext;return{background:a.background,colorMode:a.colorMode,strokeStyle:a.strokeStyle,fillStyle:a.fillStyle,lineWidth:a.lineWidth,doStroke:a.doStroke,doFill:a.doFill,pathStarted:a.pathStarted,yAxisInverted:a.yAxisInverted,xAxisInverted:a.xAxisInverted,netRotation:a.netRotation,fontStyle:a.fontStyle,fontVariant:a.fontVariant,fontWeight:a.fontWeight,fontStretch:a.fontStretch,fontSize:a.fontSize,lineHeight:a.lineHeight,fontFamily:a.fontFamily,font:a.font,textAlign:a.textAlign,
textBaseline:a.textBaseline,events:a.events}}
function G(a,b,c,e,d,g,h){function k(){l.currentLoop=globalThis.requestAnimationFrame(k);z.workingContext=l;let x=F(c);g&&B(r,z.workingContext);b(performance.now()-l.timeStart,n());g&&B(x,z.workingContext)}function n(){let x=performance.now(),D=x-l.recentTimeStamp;l.recentTimeStamp=x;l.timeDelayList.push(D);l.totalTimeCaptured+=D;l.timeDelayList.length>d&&(l.totalTimeCaptured-=l.timeDelayList.shift());return l.timeDelayList.length/(l.totalTimeCaptured/1E3)}d=void 0===d?100:d;g=void 0===g?{}:g;let l;
"function"==typeof a&&(g=e=c=b=a=aa.loop++,h=d);c?l=z.contextList[c]:(l=z.workingContext,c=l.name);l.timeDelayList=[];l.totalTimeCaptured=0;let r=Object.assign(F(c)||{},g);if(void 0!=l.currentLoop)z.debugAnimations&&(console.log(c+": "+a+" %cdelayed",C.delayed),z._ANIMATIONLOG_.push({canvas:l,animationName:a,state:"delayed",settings:r})),l.delayedAnimations.push({name:a,settings:r,functionToRun:b,canvasName:c,timeDelay:e,timeDelaysToRemember:d,dur:h});else{if(z.debugAnimations){let x=`${c}: ${a} %crunning`,
D=[C.running];void 0!=h&&(x+=`%c for %c${h}ms`,D.push(C.keyword,C.number));z._ANIMATIONLOG_.push({canvas:l,animationName:a,state:"running",settings:r,dur:h});console.log(x,...D)}l.recentTimeStamp=performance.now();l.timeStart=performance.now();isNaN(e)?k():(l.currentLoopName=a,l.currentLoop=setInterval(function(){z.workingContext=l;let x=F(c);B(r,z.workingContext);b(performance.now()-l.timeStart,n());B(x,z.workingContext)},e))}}
function H(a){let b=z.workingContext;if(void 0===a?0:a){let {fontStyle:c,fontVariant:e,fontWeight:d,fontStretch:g,fontSize:h,lineHeight:k,fontFamily:n}=b;return`${c} ${e} ${d} ${g} ${h}/${k} ${n}`}return b.font}function I(a){return z.workingContext.canvas.toDataURL(void 0===a?"image/png":a)}
var J={background:function(...a){a=y(a).hex8;let b=z.workingContext;b.background=a;b.save();E();b.fillStyle=a;b.fillRect(0,0,b.canvas.width,b.canvas.height);b.restore()},clear:function(a,b,c,e){let d=z.workingContext,g=z.dpr;a=a||0;b=b||0;c=c||d.canvas.width;e=e||d.canvas.height;d.save();d.setTransform(g,0,0,g,0,0);d.clearRect(a,b,c,e);d.restore()},cssBackground:function(a){"string"!=typeof a&&(a=I());let b=z.workingContext.canvas.style;b.background="url('"+a+"')";b.backgroundPosition="center";b.backgroundSize=
"cover"},endShape:function(){let a=z.workingContext;a.closePath();a.pathStarted=!1},fill:function(...a){let b=z.workingContext;0!==arguments.length?(b.fillStyle=y(a).hex8,b.doFill=!0):b.fill()},fontFamily:function(a){let b=z.workingContext;b.fontFamily=a;b.font=H(!0)},fontSize:function(a){let b=z.workingContext;b.fontSize="number"===typeof a?a+"px":a;b.font=H(!0)},fontStretch:function(a){let b=z.workingContext;b.fontStretch=a;b.font=H(!0)},fontStyle:function(a){let b=z.workingContext;b.fontStyle=
a;b.font=H(!0)},fontVariant:function(a){let b=z.workingContext;b.fontVariant=a;b.font=H(!0)},fontWeight:function(a){let b=z.workingContext;b.fontWeight=a;b.font=H(!0)}};J.getCanvasData=I;J.getContextStates=F;J.getFont=H;J.invertXAxis=function(){z.workingContext.scale(-1,1);z.workingContext.xAxisInverted=!0};J.invertYAxis=function(){z.workingContext.scale(1,-1);z.workingContext.yAxisInverted=!0};J.lineCap=function(a){z.workingContext.lineCap=a};J.lineDash=function(){z.workingContext.setLineDash([...arguments])};
J.lineHeight=function(a){let b=z.workingContext;b.lineHeight=a;b.font=H(!0)};J.lineJoin=function(a){z.workingContext.lineJoin=a};J.lineTo=function(a,b){z.workingContext.lineTo(a,b)};J.loop=G;J.measureText=function(a){return z.workingContext.measureText(a)};J.moveTo=function(a,b){z.workingContext.moveTo(a,b)};J.noFill=function(){z.workingContext.doFill=!1};
J.noLoop=function(a,b){let c=z.workingContext;a?c=z.contextList[a]:a=c.name;clearInterval(c.currentLoop);globalThis.cancelAnimationFrame(c.currentLoop);c.currentLoop=void 0;if(z.debugAnimations){a=`${a}: ${c.currentLoopName} %cfinished`;let e=[C.finished];void 0!=b&&(a+=`%c in %c${b.toFixed(3)}ms`,e.push(C.keyword,C.number));console.log(a,...e);z._ANIMATIONLOG_.push({canvas:c,animationName:c.currentLoopName,state:"finished",endTime:b})}0<c.delayedAnimations.length&&(b=c.delayedAnimations.shift(),
G(b.name,b.functionToRun,b.canvasName,b.timeDelay,b.timeDelaysToRememberm,b.settings,b.dur))};J.noStroke=function(){z.workingContext.doStroke=!1};J.putImageData=function(){z.workingContext.putImageData(...arguments)};J.rest=E;J.restore=function(){B(z.workingContext.savedStates,z.workingContext);z.workingContext.restore()};J.rotate=function(a){let b=z.workingContext;b.rotate(a);b.netRotation=(b.netRotation+a)%Math.PI*2};J.save=function(){z.workingContext.savedStates=F();z.workingContext.save()};
J.saveCanvas=function(a,b){a=void 0===a?"drawing":a;b=void 0===b?"image/png":b;b=I().replace(b,"image/octet-stream");let c=document.createElement("a");c.download=a+".png";c.href=b;c.click()};J.scale=function(a,b){z.workingContext.scale(a,void 0===b?a:b)};J.setImageSmoothing=function(a){z.workingContext.imageSmoothingEnabled=!!a};J.startShape=function(){let a=z.workingContext;a.beginPath();a.pathStarted=!0};
J.stroke=function(...a){let b=z.workingContext;0<arguments.length?(b.strokeStyle=y(a).hex8,b.doStroke=!0):b.stroke()};J.strokeWidth=function(a){z.workingContext.lineWidth=Number(a)};J.textAlign=function(a){z.workingContext.textAlign=a};J.textBaseline=function(a){z.workingContext.textBaseline=a};
J.transform=function(a,b,c,e,d,g){let h=z.workingContext;if(void 0==a||null==a)return z.workingContext.getTransform();a instanceof DOMMatrix?h.setTransform(a.a,a.b,a.c,a.d,a.e,a.f):h.setTransform(a||0,b||0,c||0,e||0,d||0,g||0);h.scale(z.dpr,z.dpr)};J.translate=function(a,b){z.workingContext.translate(a,void 0===b?0:b)};let K={YlGn:"#ffffe5 #f7fcb9 #d9f0a3 #addd8e #78c679 #41ab5d #238443 #006837 #004529",GnBu:"#f7fcf0 #e0f3db #ccebc5 #a8ddb5 #7bccc4 #4eb3d3 #2b8cbe #0868ac #084081",BuGn:"#f7fcfd #e5f5f9 #ccece6 #99d8c9 #66c2a4 #41ae76 #238b45 #006d2c #00441b",PuBu:"#fff7fb #ece7f2 #d0d1e6 #a6bddb #74a9cf #3690c0 #0570b0 #045a8d #023858",BuPu:"#f7fcfd #e0ecf4 #bfd3e6 #9ebcda #8c96c6 #8c6bb1 #88419d #810f7c #4d004b",RdPu:"#fff7f3 #fde0dd #fcc5c0 #fa9fb5 #f768a1 #dd3497 #ae017e #7a0177 #49006a",PuRd:"#f7f4f9 #e7e1ef #d4b9da #c994c7 #df65b0 #e7298a #ce1256 #980043 #67001f",
OrRd:"#fff7ec #fee8c8 #fdd49e #fdbb84 #fc8d59 #ef6548 #d7301f #b30000 #7f0000",Reds:"#fff5f0 #fee0d2 #fcbba1 #fc9272 #fb6a4a #ef3b2c #cb181d #a50f15 #67000d",Blues:"#f7fbff #deebf7 #c6dbef #9ecae1 #6baed6 #4292c6 #2171b5 #08519c #08306b",Greys:"#ffffff #f0f0f0 #d9d9d9 #bdbdbd #969696 #737373 #525252 #252525 #000000",YlGnBu:"#ffffd9 #edf8b1 #c7e9b4 #7fcdbb #41b6c4 #1d91c0 #225ea8 #253494 #081d58",PuBuGn:"#fff7fb #ece2f0 #d0d1e6 #a6bddb #67a9cf #3690c0 #02818a #016c59 #014636",YlOrRd:"#ffffcc #ffeda0 #fed976 #feb24c #fd8d3c #fc4e2a #e31a1c #bd0026 #800026",
YlOrBr:"#ffffe5 #fff7bc #fee391 #fec44f #fe9929 #ec7014 #cc4c02 #993404 #662506",Greens:"#f7fcf5 #e5f5e0 #c7e9c0 #a1d99b #74c476 #41ab5d #238b45 #006d2c #00441b",Purples:"#fcfbfd #efedf5 #dadaeb #bcbddc #9e9ac8 #807dba #6a51a3 #54278f #3f007d",Oranges:"#fff5eb #fee6ce #fdd0a2 #fdae6b #fd8d3c #f16913 #d94801 #a63603 #7f2704",PuOr:"#7f3b08 #b35806 #e08214 #fdb863 #fee0b6 #f7f7f7 #d8daeb #b2abd2 #8073ac #542788 #2d004b",BrBG:"#543005 #8c510a #bf812d #dfc27d #f6e8c3 #f5f5f5 #c7eae5 #80cdc1 #35978f #01665e #003c30",
PRGn:"#40004b #762a83 #9970ab #c2a5cf #e7d4e8 #f7f7f7 #d9f0d3 #a6dba0 #5aae61 #1b7837 #00441b",PiYG:"#8e0152 #c51b7d #de77ae #f1b6da #fde0ef #f7f7f7 #e6f5d0 #b8e186 #7fbc41 #4d9221 #276419",RdBu:"#67001f #b2182b #d6604d #f4a582 #fddbc7 #f7f7f7 #d1e5f0 #92c5de #4393c3 #2166ac #053061",RdGy:"#67001f #b2182b #d6604d #f4a582 #fddbc7 #ffffff #e0e0e0 #bababa #878787 #4d4d4d #1a1a1a",RdYlBu:"#a50026 #d73027 #f46d43 #fdae61 #fee090 #ffffbf #e0f3f8 #abd9e9 #74add1 #4575b4 #313695",RdYlGn:"#a50026 #d73027 #f46d43 #fdae61 #fee08b #ffffbf #d9ef8b #a6d96a #66bd63 #1a9850 #006837",
Spectral:"#9e0142 #d53e4f #f46d43 #fdae61 #fee08b #ffffbf #e6f598 #abdda4 #66c2a5 #3288bd #5e4fa2",Heat:"#0000ff #00ffff #00ff00 #ffff00 #ff0000",Jet:"#000080 #0000ff #0080ff #00ffff #80ff80 #ffff00 #ff8000 #ff0000 #800000",Parula:"#352a87 #2450d0 #0a72de #128ad2 #06a4ca #1ab2b1 #51bd90 #92bf72 #c6bc5e #f6ba46 #f9d528 #f9fb0e",Magma:"#000004 #120d31 #331067 #5a167e #7e2482 #a3307e #c83e73 #e95462 #f97b5d #fea973 #fed395 #fcfdbf",Inferno:"#000004 #140b34 #390963 #61136e #85216b #a92e5e #cb4149 #e65d2f #f78212 #fcae12 #f5db4c #fcffa4",
Plasma:"#0d0887 #3e049c #6300a7 #8707a6 #a62098 #c03a83 #d5546e #e76f5a #f58c46 #fdae32 #fcd225 #f0f921",Viridis:"#440154 #482173 #433e85 #38598c #2d708e #25858e #1e9b8a #2ab07f #50c46a #86d549 #c2df23 #fde725",Cividis:"#00204d #00306f #2a406c #48526b #5e626e #727374 #878479 #9e9677 #b6a971 #d0be67 #ead357 #ffea46",GitHub:"#eeeeee #c6e48b #7bc96f #239a3b #196127",Turbo:"#30123b #4454c3 #448ffe #1fc9dd #2aefa1 #7dff56 #c1f334 #f1cb3a #fe932a #ea4e0d #be2102 #7a0403",Grey:"#000000 #ffffff",Gray:"#000000 #ffffff"};
for(var L in K)K[L]=K[L].split(" ");const ba=180/Math.PI;var M={};M.DEG=Math.PI/180;M.E=2.718281828459045;M.HALF_PI=1.5707963267948966;M.LN10=2.302585092994046;M.LN2=.6931471805599453;M.PHI=1.618033988749894;M.PI=3.141592653589793;M.QUATER_PI=.7853981633974483;M.RAD=ba;M.SQRT2=1.4142135623730951;M.TAU=6.283185307179586;M.TIERCE_PI=1.0471975511965976;M.TWO_PI=6.283185307179586;function N(a,b,c){a=y(a).rgbaA;b=y(b).rgbaA;return y(Math.min(Math.max(0,(b[0]-a[0])*c+a[0]),255),Math.min(Math.max(0,(b[1]-a[1])*c+a[1]),255),Math.min(Math.max(0,(b[2]-a[2])*c+a[2]),255),Math.min(Math.max(0,(b[3]-a[3])*c+a[3]),255)).hex8}
var O={getInterpolatedColorList:function(a,b,c,e){b=void 0===b?0:b;if(2>a.length)throw Error("Atleast 2 colors are needed to create interpolatable object");c=((void 0===c?5:c)-b)/(a.length-1);let d={};for(let g=0;g<a.length;g++){let h=b+g*c,k=y(a[g]).rgbaA;k[3]=isNaN(e)?k[3]:e;d[h]=k}return d}};O.lerpColor=N;O.lerpColorArray=function(a,b,c,e){c=void 0===c?0:c;e=void 0===e?1:e;let d=a.length-1;if(b>=e)return a[d];if(b<=c)return a[0];b=(b-c)/(e-c)*d;c=Math.floor(b);return N(a[c],a[c+1],b-c)};
O.lerpColorObject=function(a,b){const c=Object.keys(a||{}).sort();var e=Math.min(...c),d=Math.max(...c);let g="#000000";if(b>=d)return a[d];if(b<=e)return a[e];for(e=0;e<c.length-1;e++)if(d=c[e],b>d){g=N(a[d],a[c[e+1]],(b-d)/(c[e+1]-d));break}else if(b==d){g=a[d];break}return g};let P=Object.keys(m);const Q=P.indexOf("TRANSPARENT");P=P.slice(0,Q).concat(P.slice(Q+1));function R(a,b,c){var e=new Image;e.src=a;"function"==typeof b&&e.addEventListener("load",()=>b(e),!1);"function"==typeof c&&e.addEventListener("error",d=>c(d,e),!1);return e}var S={drawImage:function(a){let b=z.workingContext,c,e;6>arguments.length?(c=arguments[1],e=arguments[2]):(c=arguments[5],e=arguments[6]);b.save();b.translate(c,e);b.yAxisInverted&&b.scale(1,-1);b.XAxisInverted&&b.scale(-1,1);b.drawImage(a,0,0,...Array.prototype.slice.call(arguments,3));b.restore()}};S.loadImage=R;
S.loadImagePromise=function(a){return new Promise((b,c)=>{R(a,b,c)})};S.pixel=function(a,b,c,e){let d=z.workingContext;c&&(d.fillStyle=c);e||(e=1/z.dpr);d.fillRect(a,b,e,e)};function T(a,b){return Math.sqrt(Math.pow(a[0]-b[0],2)+Math.pow(a[1]-b[1],2))};function U(a,b,c,e,d){d=void 0===d?1:d;return[b[0]+(c[0]-a[0])/6*d,b[1]+(c[1]-a[1])/6*d,c[0]-(e[0]-b[0])/6*d,c[1]-(e[1]-b[1])/6*d]}function ca(a,b,c,e){b=void 0===b?1:b;c=void 0===c?!0:c;e=void 0===e?0:e;for(let d=0;d<a.length-1-e;d++){let g=a[d+1],h=U(0!=d?a[d-1]:a[0],a[d],g,d!=a.length-2?a[d+2]:c?a[1]:g,b);z.workingContext.bezierCurveTo(h[0],h[1],h[2],h[3],g[0],g[1])}}
function da(a,b,c,e){let d=z.workingContext;d.beginPath();d.rect(a,b,c,e);d.doFill&&d.fill();d.doStroke&&d.stroke();d.closePath()}function ea(a,b,c,e,d){fa(a,b,c,e/(2*Math.sin(Math.PI/c)),void 0===d?0:d)}
function fa(a,b,c,e,d){let g=0,h=2*Math.PI/c,k=z.workingContext;d=(void 0===d?0:d)+h/2;let n=[Math.cos(d)*e+a,Math.sin(d)*e+b];k.beginPath();for(k.moveTo(n[0],n[1]);g++<c;)k.lineTo(Math.cos(g*h+d)*e+a,Math.sin(g*h+d)*e+b);k.lineTo(n[0],n[1]);k.closePath();k.doFill&&k.fill();k.doStroke&&k.stroke()}
var W={angle:function(a,b,c,e,d,g,h,k){d=void 0===d?20:d;g=void 0===g?10:g;h=void 0===h?!1:h;k=void 0===k?1:k;var n=(b[1]-a[1])/(b[0]-a[0]),l=(e[1]-c[1])/(e[0]-c[0]);var r=a[1]-a[0]*n;l=(c[1]-c[0]*l-r)/(n-l);r=[l,n*l+r];n=r[0];r=r[1];if(isNaN(n)||isNaN(r))throw Error("No intersection point");a=Math.atan2(a[1]-r,a[0]-n);b=Math.atan2(b[1]-r,b[0]-n);c=Math.atan2(c[1]-r,c[0]-n);e=Math.atan2(e[1]-r,e[0]-n);e={1:[b,e],2:[e,a],3:[a,c],4:[c,b]}[k];k=z.workingContext;h?(h=e[1],e=e[0]-e[1]):(h=e[0],e=e[1]-
e[0]);k.doFill&&(k.beginPath(),k.moveTo(n,r),k.arc(n,r,d,h,e+h),k.fill(),k.closePath());k.doStroke&&(k.beginPath(),k.arc(n,r,d,h,e+h),k.stroke(),k.closePath());return{center:[n+(d+g)*Math.cos(h+e/2),r+(d+g)*Math.sin(h+e/2)],ang:e}},annulus:function(a,b,c,e){let d=z.workingContext;d.beginPath();d.arc(a,b,c,0,2*Math.PI,!1);d.moveTo(e,0);d.arc(a,b,e,0,2*Math.PI,!0);V(d)},annulusSector:function(a,b,c,e,d,g){let h=z.workingContext;h.beginPath();h.arc(a,b,c,g,g+d,!1);h.arc(a,b,e,g+d,g,!0);V(h)},arc:function(a,
b,c,e,d){e=void 0===e?Math.PI/2:e;d=void 0===d?0:d;let g=z.workingContext;g.pathStarted||g.beginPath();g.arc(a,b,c,d,d+e);g.pathStarted||V(g)},arcBetweenPoints:function(a,b,c,e,d,g){g=void 0===g?!1:g;a==c&&b==e&&console.error("Can't draw a arc between points. Given points are exactly same");var h=[a,b],k=[c,e];const n=T(h,k);var l=(d*d-d*d+n*n)/(2*n);const r=Math.sqrt(d*d-l*l);l/=n;l=[(k[0]-h[0])*l+h[0],(k[1]-h[1])*l+h[1]];h=[l[0]+r*(k[1]-h[1])/n,l[1]-r*(k[0]-h[0])/n];k=z.workingContext;a=Math.atan2(b-
h[1],a-h[0]);c=Math.atan2(e-h[1],c-h[0])-a;k.pathStarted||(k.save(),k.beginPath());k.arc(h[0],h[1],d,a,c+a,!g);k.pathStarted||(V(k),k.restore());return h},bezier:function(a,b,c,e,d,g){let h=z.workingContext;h.pathStarted||h.beginPath();h.bezierCurveTo(a,b,c,e,d,g);h.pathStarted||V(h)},circle:function(a,b,c){let e=z.workingContext;e.beginPath();e.arc(a,b,c,0,2*Math.PI);e.doFill&&e.fill();e.doStroke&&e.stroke()},circularSegment:function(a,b,c,e,d){e=void 0===e?Math.PI/2:e;d=void 0===d?0:d;let g=z.workingContext;
g.pathStarted||g.beginPath();g.arc(a,b,c,d,d+e);g.pathStarted||V(g)},ellipse:function(a,b,c,e,d,g,h){d=void 0===d?0:d;g=void 0===g?0:g;h=void 0===h?2*Math.PI:h;let k=z.workingContext;k.pathStarted||k.beginPath();k.ellipse(a,b,c,e,d,g,g+h);k.pathStarted||V(k)},equiTriangle:function(a,b,c,e){ea(a,b,3,c,void 0===e?0:e)}};W.getBezierControlPoints=U;W.line=function(a,b,c,e){let d=z.workingContext;d.beginPath();d.moveTo(a,b);d.lineTo(c,e);d.stroke();d.closePath()};
W.point=function(a,b,c,e){c=void 0===c?10:c;e=void 0===e?!1:e;let d=z.workingContext;d.beginPath();d.arc(a,b,c/2,0,2*Math.PI);d.fill();e&&d.stroke();d.beginPath()};W.polygon=function(){let a=arguments;if(2<a.length){let b=z.workingContext,c=a[0];b.beginPath();b.moveTo(c[0],c[1]);for(let e=1;e<a.length;e++)b.lineTo(a[e][0],a[e][1]);b.lineTo(c[0],c[1]);b.doFill&&b.fill();b.doStroke&&b.stroke();b.closePath()}};
W.quad=function(a,b,c,e){let d=z.workingContext;d.beginPath();d.moveTo(a[0],a[1]);d.lineTo(b[0],b[1]);d.lineTo(c[0],c[1]);d.lineTo(e[0],e[1]);d.lineTo(a[0],a[1]);d.doFill&&d.fill();d.doStroke&&d.stroke();d.closePath()};W.quadraticCurve=function(){let a=z.workingContext,b=arguments;4==b.length?a.quadraticCurveTo(b[0],b[1],b[2],b[3]):6==b.length&&(a.beginPath(),a.moveTo(b[0],b[1]),a.quadraticCurveTo(b[2],b[3],b[4],b[5]),V(a))};W.rect=da;W.regularPolygon=ea;W.regularPolygonWithRadius=fa;
W.sector=function(a,b,c,e,d){e=void 0===e?Math.PI/2:e;d=void 0===d?0:d;let g=z.workingContext;g.beginPath();g.moveTo(a,b);g.arc(a,b,c,d,d+e);g.lineTo(a,b);V(g)};W.smoothCurveThroughPoints=function(a,b,c,e){b=void 0===b?1:b;c=void 0===c?!0:c;e=void 0===e?0:e;let d=z.workingContext;d.beginPath();d.moveTo(a[0][0],a[0][1]);ca(a,b,c,e);d.doFill&&c&&d.fill();d.doStroke&&d.stroke();d.closePath()};W.smoothCurveThroughPointsTo=ca;W.square=function(a,b,c){da(a,b,c,c)};
W.triangle=function(a,b,c){let e=z.workingContext;e.beginPath();e.moveTo(a[0],a[1]);e.lineTo(b[0],b[1]);e.lineTo(c[0],c[1]);e.lineTo(a[0],a[1]);e.doFill&&e.fill();e.doStroke&&e.stroke();e.closePath()};const {abs:ha,acos:ia,asin:ja,atan:ka,atan2:la,cbrt:ma,ceil:na,cos:oa,cosh:pa,exp:qa,floor:ra,log:sa,log2:ta,log10:ua,max:va,min:wa,pow:xa,random:ya,round:za,sign:Aa,sin:Ba,sqrt:Ca,tan:Da,tanh:Ea}=Math;var X={};X.abs=ha;X.acos=ia;X.asin=ja;X.atan=ka;X.atan2=la;X.cbrt=ma;X.ceil=na;X.cos=oa;X.cosh=pa;X.exp=qa;X.floor=ra;X.log=sa;X.log10=ua;X.log2=ta;X.max=va;X.min=wa;X.pow=xa;X.random=ya;X.round=za;X.sgn=Aa;X.sigmoid=function(a){return 1/(1+Math.exp(-a))};X.sin=Ba;X.sqrt=Ca;X.tan=Da;X.tanh=Ea;const Y=a=>Object.prototype.toString.call(a).slice(8,-1);Object.clone=Object.clone||function(a){let b={};for(let c=0,e=Object.keys(a);c<e.length;c++)b[e[c]]=a[e[c]];return b};function B(a,b,c){b=void 0===b?globalThis:b;c=void 0===c?!1:c;Object.assign(b,a);c&&Object.assign(z.functions,a)}
function A(a,b,c){b=void 0===b?{}:b;c=void 0===c?!0:c;b=Object.clone(b);for(let e=0,d=Object.keys(a);e<d.length;e++){let g=d[e],h=a[g],k=b[g],n=Y(h),l=Y(k);"Object"==n&&c&&(b[g]=A(h,k,c));"Undefined"!=n&&"Null"!=n&&l!==n&&(b[g]=a[g])}return b}function V(a){a.doFill&&a.fill();a.doStroke&&a.stroke()}var Z={};Z.applyDefault=A;Z.arange=function(a,b,c,e){let d=[];if(void 0===e?0:e)for(;b>=a;b-=c)d.push(b);else for(;a<=b;a+=c)d.push(a);return d};Z.defineProperties=B;Z.doFillAndStroke=V;
Z.fraction=function(a,b,c,e,d){d=void 0===d?"":d;if(void 0===c||c){c=a;for(var g=b;0!=g;){let h=g;g=c%g;c=h}a/=c;b/=c}0==a?a="0":1==b?a+=d:void 0===e||e?(1==a&&""!=d&&(a=""),a=`\\frac{${a}${d}}{${b}}`):a=`\\frac{${a}}{${b}}${d}`;return a};Z.inArray=function(a,b,c){c=void 0===c?1E-6:c;for(let e=0;e<b.length;e++)if(Math.abs(b[e]-a)<=c)return!0;return!1};
Z.latexToImg=function(a){let b=window.MathJax||{};return new Promise((c,e)=>{var d="",g="";d=b.tex2svg(`${a}`,{em:10,ex:5,display:!0}).getElementsByTagName("svg")[0].outerHTML;var h=new Image;h.src="data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(d)));h.onload=function(){var k=document.createElement("canvas");k.width=h.width;k.height=h.height;k.getContext("2d").drawImage(h,0,0);g=k.toDataURL("image/png");c(g)};h.onerror=function(){e()}})};Z.type=Y;[{C:z,dist:T},Z,J,M,{ALPHABETIC:"alphabetic",BEVEL:"bevel",BOTTOM:"bottom",BUTT:"butt",CENTER:"center",CONDENSED:"condensed",END:"end",EXPANDED:"expanded",EXTRA_CONDENSED:"extra-condensed",EXTRA_EXPANDED:"extra-expanded",HANGING:"hanging",IDEOGRAPHIC:"ideographic",ITALIC:"italic",LARGE:"large",LARGER:"larger",LEFT:"left",MEDIUM:"medium",MIDDLE:"middle",MILTER:"milter",MITER:"miter",NORMAL:"normal",OBLIQUE:"oblique",RIGHT:"right",ROUND:"round",SEMI_CONDENSED:"semi-condensed",SEMI_EXPANDED:"semi-expanded",
SMALL:"small",SMALLER:"smaller",SQUARE:"square",START:"start",TOP:"top",ULTRA_CONDENSED:"ultra-condensed",ULTRA_EXPANDED:"ultra-expanded",XXX_LARGE:"xxx-large",XX_LARGE:"xx-large",XX_SMALL:"xx-small",X_LARGE:"x-large",X_SMALL:"x-small"},{linearGradient:function(a,b,c){a=z.workingContext.createLinearGradient(a[0],a[1],b[0],b[1]);if("Array"==Y(c)){b={};const e=1/c.length;for(let d=0;d<c.length;d++)b[e*d]=c[d];c=b}else if("Object"!=Y(c))throw Error("Color Stops must be an Array or an Object");for(let e=
Object.keys(c||{}),d=0;d<e.length;d++)b=Number(e[d]),a.addColorStop(b,c[b]);return a}},O,S,{fillText:function(a,b=0,c=0,e){let d=z.workingContext;d.save();d.translate(b,c);d.yAxisInverted&&d.scale(1,-1);d.xAxisInverted&&d.scale(-1,1);d.fillText(a,0,0,e);d.restore()},strokeText:function(a,b=0,c=0,e){let d=z.workingContext;d.save();d.translate(b,c);d.yAxisInverted&&d.scale(1,-1);d.xAxisInverted&&d.scale(-1,1);d.strokeText(a,0,0,e);d.restore()},text:function(a,b=0,c=0,e){let d=z.workingContext;d.save();
d.translate(b,c);d.yAxisInverted&&d.scale(1,-1);d.xAxisInverted&&d.scale(-1,1);d.doFill?d.fillText(a,0,0,e):d.doStroke&&d.strokeText(a,0,0,e);d.restore()}},W,X,{randomInt:function(a=10,b=0){return Math.round(Math.random()*(a-b)+b)}}].forEach(a=>B(a));}).call(this);
