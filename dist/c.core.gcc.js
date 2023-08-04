(function(){const f={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",
darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",
ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",
lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",
moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",
seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};let n=/^#([a-f0-9])([a-f0-9])([a-f0-9])$/i,p=/^#([a-f0-9])([a-f0-9])([a-f0-9])([a-f0-9])$/i,r=/^#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})$/i,t=/^#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})$/i,u=/^rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)$/i,v=/^rgba\((\d{1,3}),(\d{1,3}),(\d{1,3}),(?:(\d+(?:\.\d+)?)|(?:\.\d+))\)$/i;
function x(...b){var a;Array.isArray(b[0])&&(b=b[0]);let c=b[0];if("number"===typeof c)1===b.length?a=[c,c,c,1]:2===b.length?a=[c,b[1],0,1]:3===b.length?a=[c,b[1],b[2],1]:4===b.length&&(a=[c,b[1],b[2],b[3]]);else if("string"==typeof c)if(a=c.replace(/\s/g,"").toLowerCase(),f[a])a=f[a],a=[parseInt(a.substr(1,2),16),parseInt(a.substr(3,2),16),parseInt(a.substr(5,2),16),1];else if(n.test(a))a=n.exec(a).slice(1).map(g=>parseInt(g+g,16)),a[3]=1;else if(r.test(a))a=r.exec(a).slice(1).map(g=>parseInt(g,
16)),a[3]=1;else if(p.test(a))a=p.exec(a).slice(1).map(g=>parseInt(g+g,16)),a[3]/=255;else if(t.test(a))a=t.exec(a).slice(1).map(g=>parseInt(g,16)),a[3]/=255;else if(u.test(a))a=u.exec(a).slice(1).map(g=>parseInt(g,10)),a[3]=1;else if(v.test(a))a=v.exec(a).slice(1).map((g,h)=>3==h?parseFloat(g):parseInt(g,10));else throw Error("Cannot convert given value to color: "+a);else return a=c,{rgbaA:a,rgba:a,hex6:a,hex8:a,hex:a,hsl:a};b=a[3];a[3]*=255;let e="#";a.map((g,h)=>{3>h&&(g=Math.round(g).toString(16),
e+=1==g.length?"0"+g:g)});let d="#";a.map((g,h)=>{4>h&&(g=Math.round(g).toString(16),d+=1==g.length?"0"+g:g)});a[3]=b;return{rgbaA:a,rgba:`rgba(${a[0]}, ${a[1]}, ${a[2]}, ${a[3]})`,hex6:e,hex8:d,hex:d,hsl:`hsl(${a[0]}, ${a[1]}, ${a[2]})`}};function y(b,a,c={}){var e={width:200,height:200,dpr:Math.ceil(window.devicePixelRatio||1),doFill:!0,doStroke:!0,pathStarted:!1,yAxisInverted:!1,pauseAnimations:!1,netRotation:0,currentLoop:void 0,currentLoopName:void 0,textAlign:"start",textBaseline:"alphabetic",fillStyle:"#ffffff",background:"#ffffff",strokeStyle:"#000000",colorMode:"rgba",lineWidth:1,fontSize:"20px",fontFamily:"serif",fontStyle:"normal",fontVariant:"normal",fontWeight:"normal",fontStretch:"normal",lineHeight:1.2,font:"20px serif",
events:{}};c=z(e,c);var d;"string"===typeof a?a=document.querySelector(a):a instanceof HTMLElement||(a=document.body);let g=(d=a.querySelector("canvas"))&&d.id==c.name;d=g?d:y.makeCanvas(c);"number"!==typeof a.CID&&(a.CID=1);let h=a.CID,k=a.id||a.classList.item(0),m=c.name||d.name;"string"!=typeof m&&(m=k+"-C-"+h,c.name=m);d.id=m;d.classList.add(m);a.appendChild(d);g?y.workingContext=d.context:(y.resizeCanvas(d,c),a=d.getContext("2d"),A(c,a),d.context=a,d.context.setTransform(c.dpr,0,0,c.dpr,0,0),
y.workingContext=d.context,y.workingContext.savedStates=e,y.workingContext.delayedAnimations=[]);y.contextList[m]=d.context;e={};for(let l in c.events)if(a=c.events[l])d.addEventListener(l,a),e[l]=a;d.events=e;y.dpr=c.dpr;y.workingCanvas=d;b()}y.contextList={};y.nameID=0;y.getWindowWidth=function(b=document.body){b=window.getComputedStyle(b);return parseInt(b.width,10)-parseInt(b.paddingRight,10)-parseInt(b.paddingLeft,10)};
y.resizeCanvas=function(b,a){const c=a.width,e=a.height;a=a.dpr||window.devicePixelRatio;b.style.width=c+"px";b.style.height=e+"px";b.width=a*c;b.height=a*e;b.rWidth=c;b.rHeight=e};y.makeCanvas=function(b){const a=document.createElement("canvas");y.resizeCanvas(a,b);return a};y.addExtension=function(b){A(b,window);A(b,y.extensions,!1)};y.debugAnimations=!1;y.extensions={};y.debug=function(b){y.debugAnimations="boolean"!==typeof b?!0:b};y.getCanvas=function(b){return y.contextList[b]||y.workingContext};
y._ANIMATIONLOG_=[];y.functions={};y.COLORLIST={};(function(b){let a=Object.keys(b);for(let c=0;c<a.length;c++){let e=a[c];Object.defineProperty(window,e,{configurable:!0,enumerable:!0,get:b[e],set:function(d){Object.defineProperty(window,e,{configurable:!0,enumerable:!0,value:d,writable:!0})}})}})({CENTERX:function(){return y.workingCanvas.rWidth/2},CENTERY:function(){return y.workingCanvas.rHeight/2}});window.C=y;let aa={loop:1},B={number:"color: #9afcad;",keyword:"color: #adacdf;",running:"color: yellow;",delayed:"color: orange;",finished:"color: #3aff5f;"};function C(b,a){a=void 0===a?b:a;y.workingContext.scale(b,a);0>a&&(y.workingContext.yAxisInverted=!0)}function E(){y.workingContext.setTransform(y.dpr,0,0,y.dpr,0,0)}
function F(b){b=y.contextList[b]||y.workingContext;return{background:b.background,colorMode:b.colorMode,strokeStyle:b.strokeStyle,fillStyle:b.fillStyle,lineWidth:b.lineWidth,doStroke:b.doStroke,doFill:b.doFill,pathStarted:b.pathStarted,yAxisInverted:b.yAxisInverted,netRotation:b.netRotation,fontStyle:b.fontStyle,fontVariant:b.fontVariant,fontWeight:b.fontWeight,fontStretch:b.fontStretch,fontSize:b.fontSize,lineHeight:b.lineHeight,fontFamily:b.fontFamily,font:b.font,textAlign:b.textAlign,textBaseline:b.textBaseline,
events:b.events}}
function G(b,a,c,e,d,g,h){function k(){l.currentLoop=window.requestAnimationFrame(k);y.workingContext=l;let w=F(c);g&&A(q,y.workingContext);a(window.performance.now()-l.timeStart,m());g&&A(w,y.workingContext)}function m(){let w=window.performance.now(),D=w-l.recentTimeStamp;l.recentTimeStamp=w;l.timeDelayList.push(D);l.totalTimeCaptured+=D;l.timeDelayList.length>d&&(l.totalTimeCaptured-=l.timeDelayList.shift());return l.timeDelayList.length/(l.totalTimeCaptured/1E3)}d=void 0===d?100:d;g=void 0===
g?{}:g;let l;"function"==typeof b&&(g=e=c=a=b=aa.loop++,h=d);c?l=y.contextList[c]:(l=y.workingContext,c=l.name);l.timeDelayList=[];l.totalTimeCaptured=0;let q=Object.assign(F(c)||{},g);if(void 0!=l.currentLoop)y.debugAnimations&&(console.log(c+": "+b+" %cdelayed",B.delayed),y._ANIMATIONLOG_.push({canvas:l,animationName:b,state:"delayed",settings:q})),l.delayedAnimations.push({name:b,settings:q,functionToRun:a,canvasName:c,timeDelay:e,timeDelaysToRemember:d,dur:h});else{if(y.debugAnimations){let w=
`${c}: ${b} %crunning`,D=[B.running];void 0!=h&&(w+=`%c for %c${h}ms`,D.push(B.keyword,B.number));y._ANIMATIONLOG_.push({canvas:l,animationName:b,state:"running",settings:q,dur:h});console.log(w,...D)}l.recentTimeStamp=window.performance.now();l.timeStart=window.performance.now();isNaN(e)?k():(l.currentLoopName=b,l.currentLoop=setInterval(function(){y.workingContext=l;let w=F(c);A(q,y.workingContext);a(window.performance.now()-l.timeStart,m());A(w,y.workingContext)},e))}}
function H(b){let a=y.workingContext;if(void 0===b?0:b){let {fontStyle:c,fontVariant:e,fontWeight:d,fontStretch:g,fontSize:h,lineHeight:k,fontFamily:m}=a;return`${c} ${e} ${d} ${g} ${h}/${k} ${m}`}return a.font}function I(b){return y.workingContext.canvas.toDataURL(void 0===b?"image/png":b)}
var J={background:function(...b){b=x(b).hex8;let a=y.workingContext;a.background=b;a.save();E();a.fillStyle=b;a.fillRect(0,0,a.canvas.width,a.canvas.height);a.restore()},clear:function(b,a,c,e){let d=y.workingContext,g=y.dpr;b=b||0;a=a||0;c=c||d.canvas.width;e=e||d.canvas.height;d.save();d.setTransform(g,0,0,g,0,0);d.clearRect(b,a,c,e);d.restore()},endShape:function(){let b=y.workingContext;b.closePath();b.pathStarted=!1},fill:function(...b){let a=y.workingContext;0!==arguments.length?(a.fillStyle=
x(b).hex8,a.doFill=!0):a.fill()},fontFamily:function(b){let a=y.workingContext;a.fontFamily=b;a.font=H(!0)},fontSize:function(b){let a=y.workingContext;a.fontSize="number"===typeof b?b+"px":b;a.font=H(!0)},fontStretch:function(b){let a=y.workingContext;a.fontStretch=b;a.font=H(!0)},fontStyle:function(b){let a=y.workingContext;a.fontStyle=b;a.font=H(!0)},fontVariant:function(b){let a=y.workingContext;a.fontVariant=b;a.font=H(!0)},fontWeight:function(b){let a=y.workingContext;a.fontWeight=b;a.font=
H(!0)}};J.getCanvasData=I;J.getContextStates=F;J.getFont=H;J.lineCap=function(b){y.workingContext.lineCap=b};J.lineDash=function(){y.workingContext.setLineDash([...arguments])};J.lineHeight=function(b){let a=y.workingContext;a.lineHeight=b;a.font=H(!0)};J.lineJoin=function(b){y.workingContext.lineJoin=b};J.lineTo=function(b,a){y.workingContext.lineTo(b,a)};J.loop=G;J.measureText=function(b){return y.workingContext.measureText(b)};J.moveTo=function(b,a){y.workingContext.moveTo(b,a)};
J.noFill=function(){y.workingContext.doFill=!1};
J.noLoop=function(b,a){let c=y.workingContext;b?c=y.contextList[b]:b=c.name;clearInterval(c.currentLoop);window.cancelAnimationFrame(c.currentLoop);c.currentLoop=void 0;if(y.debugAnimations){b=`${b}: ${c.currentLoopName} %cfinished`;let e=[B.finished];void 0!=a&&(b+=`%c in %c${a.toFixed(3)}ms`,e.push(B.keyword,B.number));console.log(b,...e);y._ANIMATIONLOG_.push({canvas:c,animationName:c.currentLoopName,state:"finished",endTime:a})}0<c.delayedAnimations.length&&(a=c.delayedAnimations.shift(),G(a.name,
a.functionToRun,a.canvasName,a.timeDelay,a.timeDelaysToRememberm,a.settings,a.dur))};J.noStroke=function(){y.workingContext.doStroke=!1};J.permaBackground=function(b){"string"!=typeof b&&(b=I());let a=y.workingContext.canvas.style;a.background="url('"+b+"')";a.backgroundPosition="center";a.backgroundSize="cover"};J.putImageData=function(){y.workingContext.putImageData(...arguments)};J.rest=E;J.restore=function(){A(y.workingContext.savedStates,y.workingContext);y.workingContext.restore()};
J.rotate=function(b){let a=y.workingContext;a.rotate(b);a.netRotation=(a.netRotation+b)%Math.PI*2};J.save=function(){y.workingContext.savedStates=F();y.workingContext.save()};J.saveCanvas=function(b,a){b=void 0===b?"drawing":b;a=void 0===a?"image/png":a;a=I().replace(a,"image/octet-stream");let c=document.createElement("a");c.download=b+".png";c.href=a;c.click()};J.scale=C;J.setImageSmoothing=function(b){y.workingContext.imageSmoothingEnabled=!!b};
J.startShape=function(){let b=y.workingContext;b.beginPath();b.pathStarted=!0};J.stroke=function(...b){let a=y.workingContext;0<arguments.length?(a.strokeStyle=x(b).hex8,a.doStroke=!0):a.stroke()};J.strokeWidth=function(b){y.workingContext.lineWidth=Number(b)};J.textAlign=function(b){y.workingContext.textAlign=b};J.textBaseline=function(b){y.workingContext.textBaseline=b};
J.transform=function(b,a,c,e,d,g){let h=y.workingContext;if(void 0==b||null==b)return y.workingContext.getTransform();b instanceof DOMMatrix?h.setTransform(b.a,b.b,b.c,b.d,b.e,b.f):h.setTransform(b||0,a||0,c||0,e||0,d||0,g||0);h.scale(y.dpr,y.dpr)};J.translate=function(b,a){y.workingContext.translate(b,void 0===a?0:a)};const ba=180/Math.PI;var K={};K.DEG=Math.PI/180;K.E=2.718281828459045;K.HALF_PI=1.5707963267948966;K.LN10=2.302585092994046;K.LN2=.6931471805599453;K.PHI=1.618033988749894;K.PI=3.141592653589793;K.QUATER_PI=.7853981633974483;K.RAD=ba;K.SQRT2=1.4142135623730951;K.TAU=6.283185307179586;K.TIERCE_PI=1.0471975511965976;K.TWO_PI=6.283185307179586;let L={YlGn:"#ffffe5 #f7fcb9 #d9f0a3 #addd8e #78c679 #41ab5d #238443 #006837 #004529",GnBu:"#f7fcf0 #e0f3db #ccebc5 #a8ddb5 #7bccc4 #4eb3d3 #2b8cbe #0868ac #084081",BuGn:"#f7fcfd #e5f5f9 #ccece6 #99d8c9 #66c2a4 #41ae76 #238b45 #006d2c #00441b",PuBu:"#fff7fb #ece7f2 #d0d1e6 #a6bddb #74a9cf #3690c0 #0570b0 #045a8d #023858",BuPu:"#f7fcfd #e0ecf4 #bfd3e6 #9ebcda #8c96c6 #8c6bb1 #88419d #810f7c #4d004b",RdPu:"#fff7f3 #fde0dd #fcc5c0 #fa9fb5 #f768a1 #dd3497 #ae017e #7a0177 #49006a",PuRd:"#f7f4f9 #e7e1ef #d4b9da #c994c7 #df65b0 #e7298a #ce1256 #980043 #67001f",
OrRd:"#fff7ec #fee8c8 #fdd49e #fdbb84 #fc8d59 #ef6548 #d7301f #b30000 #7f0000",Reds:"#fff5f0 #fee0d2 #fcbba1 #fc9272 #fb6a4a #ef3b2c #cb181d #a50f15 #67000d",Blues:"#f7fbff #deebf7 #c6dbef #9ecae1 #6baed6 #4292c6 #2171b5 #08519c #08306b",Greys:"#ffffff #f0f0f0 #d9d9d9 #bdbdbd #969696 #737373 #525252 #252525 #000000",YlGnBu:"#ffffd9 #edf8b1 #c7e9b4 #7fcdbb #41b6c4 #1d91c0 #225ea8 #253494 #081d58",PuBuGn:"#fff7fb #ece2f0 #d0d1e6 #a6bddb #67a9cf #3690c0 #02818a #016c59 #014636",YlOrRd:"#ffffcc #ffeda0 #fed976 #feb24c #fd8d3c #fc4e2a #e31a1c #bd0026 #800026",
YlOrBr:"#ffffe5 #fff7bc #fee391 #fec44f #fe9929 #ec7014 #cc4c02 #993404 #662506",Greens:"#f7fcf5 #e5f5e0 #c7e9c0 #a1d99b #74c476 #41ab5d #238b45 #006d2c #00441b",Purples:"#fcfbfd #efedf5 #dadaeb #bcbddc #9e9ac8 #807dba #6a51a3 #54278f #3f007d",Oranges:"#fff5eb #fee6ce #fdd0a2 #fdae6b #fd8d3c #f16913 #d94801 #a63603 #7f2704",PuOr:"#7f3b08 #b35806 #e08214 #fdb863 #fee0b6 #f7f7f7 #d8daeb #b2abd2 #8073ac #542788 #2d004b",BrBG:"#543005 #8c510a #bf812d #dfc27d #f6e8c3 #f5f5f5 #c7eae5 #80cdc1 #35978f #01665e #003c30",
PRGn:"#40004b #762a83 #9970ab #c2a5cf #e7d4e8 #f7f7f7 #d9f0d3 #a6dba0 #5aae61 #1b7837 #00441b",PiYG:"#8e0152 #c51b7d #de77ae #f1b6da #fde0ef #f7f7f7 #e6f5d0 #b8e186 #7fbc41 #4d9221 #276419",RdBu:"#67001f #b2182b #d6604d #f4a582 #fddbc7 #f7f7f7 #d1e5f0 #92c5de #4393c3 #2166ac #053061",RdGy:"#67001f #b2182b #d6604d #f4a582 #fddbc7 #ffffff #e0e0e0 #bababa #878787 #4d4d4d #1a1a1a",RdYlBu:"#a50026 #d73027 #f46d43 #fdae61 #fee090 #ffffbf #e0f3f8 #abd9e9 #74add1 #4575b4 #313695",RdYlGn:"#a50026 #d73027 #f46d43 #fdae61 #fee08b #ffffbf #d9ef8b #a6d96a #66bd63 #1a9850 #006837",
Spectral:"#9e0142 #d53e4f #f46d43 #fdae61 #fee08b #ffffbf #e6f598 #abdda4 #66c2a5 #3288bd #5e4fa2",Heat:"#0000ff #00ffff #00ff00 #ffff00 #ff0000",Jet:"#000080 #0000ff #0080ff #00ffff #80ff80 #ffff00 #ff8000 #ff0000 #800000",Parula:"#352a87 #2450d0 #0a72de #128ad2 #06a4ca #1ab2b1 #51bd90 #92bf72 #c6bc5e #f6ba46 #f9d528 #f9fb0e",Magma:"#000004 #120d31 #331067 #5a167e #7e2482 #a3307e #c83e73 #e95462 #f97b5d #fea973 #fed395 #fcfdbf",Inferno:"#000004 #140b34 #390963 #61136e #85216b #a92e5e #cb4149 #e65d2f #f78212 #fcae12 #f5db4c #fcffa4",
Plasma:"#0d0887 #3e049c #6300a7 #8707a6 #a62098 #c03a83 #d5546e #e76f5a #f58c46 #fdae32 #fcd225 #f0f921",Viridis:"#440154 #482173 #433e85 #38598c #2d708e #25858e #1e9b8a #2ab07f #50c46a #86d549 #c2df23 #fde725",Cividis:"#00204d #00306f #2a406c #48526b #5e626e #727374 #878479 #9e9677 #b6a971 #d0be67 #ead357 #ffea46",GitHub:"#eeeeee #c6e48b #7bc96f #239a3b #196127",Turbo:"#30123b #4454c3 #448ffe #1fc9dd #2aefa1 #7dff56 #c1f334 #f1cb3a #fe932a #ea4e0d #be2102 #7a0403",Grey:"#000000 #ffffff",Gray:"#000000 #ffffff"};
for(var M in L)L[M]=L[M].split(" ");let N=Object.keys(f);const O=N.indexOf("TRANSPARENT");N=N.slice(0,O).concat(N.slice(O+1));function P(b,a,c){b=x(b).rgbaA;a=x(a).rgbaA;return x(Math.min(Math.max(0,(a[0]-b[0])*c+b[0]),255),Math.min(Math.max(0,(a[1]-b[1])*c+b[1]),255),Math.min(Math.max(0,(a[2]-b[2])*c+b[2]),255),Math.min(Math.max(0,(a[3]-b[3])*c+b[3]),255)).hex8}
var Q={getInterpolatedColorList:function(b,a,c,e){a=void 0===a?0:a;if(2>b.length)throw Error("Atleast 2 colors are needed to create interpolatable object");c=((void 0===c?5:c)-a)/(b.length-1);let d={};for(let g=0;g<b.length;g++){let h=a+g*c,k=x(b[g]).rgbaA;k[3]=isNaN(e)?k[3]:e;d[h]=k}return d}};Q.lerpColor=P;Q.lerpColorArray=function(b,a,c,e){c=void 0===c?0:c;e=void 0===e?1:e;let d=b.length-1;if(a>=e)return b[d];if(a<=c)return b[0];a=(a-c)/(e-c)*d;c=Math.floor(a);return P(b[c],b[c+1],a-c)};
Q.lerpColorObject=function(b,a){const c=Object.keys(b||{}).sort();var e=Math.min(...c),d=Math.max(...c);let g="#000000";if(a>=d)return b[d];if(a<=e)return b[e];for(e=0;e<c.length-1;e++)if(d=c[e],a>d){g=P(b[d],b[c[e+1]],(a-d)/(c[e+1]-d));break}else if(a==d){g=b[d];break}return g};function R(b,a,c){var e=new Image;e.src=b;"function"==typeof a&&e.addEventListener("load",()=>a(e),!1);"function"==typeof c&&e.addEventListener("error",d=>c(d,e),!1);return e}
var S={drawImage:function(b){let a=y.workingContext,c,e;6>arguments.length?(c=arguments[1],e=arguments[2]):(c=arguments[5],e=arguments[6]);a.yAxisInverted?(a.save(),a.translate(c,e),a.scale(1,-1),a.drawImage(b,0,0,...Array.prototype.slice.call(arguments,3)),a.restore()):a.drawImage(b,c,e,...Array.prototype.slice.call(arguments,3))}};S.loadImage=R;S.loadImagePromise=function(b){return new Promise((a,c)=>{R(b,a,c)})};
S.pixel=function(b,a,c,e){let d=y.workingContext;c&&(d.fillStyle=c);e||(e=1/y.dpr);d.fillRect(b,a,e,e)};function T(b,a){return Math.sqrt(Math.pow(b[0]-a[0],2)+Math.pow(b[1]-a[1],2))};function U(b,a,c,e,d){d=void 0===d?1:d;return[a[0]+(c[0]-b[0])/6*d,a[1]+(c[1]-b[1])/6*d,c[0]-(e[0]-a[0])/6*d,c[1]-(e[1]-a[1])/6*d]}function ca(b,a,c,e){a=void 0===a?1:a;c=void 0===c?!0:c;e=void 0===e?0:e;for(let d=0;d<b.length-1-e;d++){let g=b[d+1],h=U(0!=d?b[d-1]:b[0],b[d],g,d!=b.length-2?b[d+2]:c?b[1]:g,a);y.workingContext.bezierCurveTo(h[0],h[1],h[2],h[3],g[0],g[1])}}
function da(b,a,c,e){let d=y.workingContext;d.beginPath();d.rect(b,a,c,e);d.doFill&&d.fill();d.doStroke&&d.stroke();d.closePath()}function ea(b,a,c,e,d){fa(b,a,c,e/(2*Math.sin(Math.PI/c)),void 0===d?0:d)}
function fa(b,a,c,e,d){let g=0,h=2*Math.PI/c,k=y.workingContext;d=(void 0===d?0:d)+h/2;let m=[Math.cos(d)*e+b,Math.sin(d)*e+a];k.beginPath();for(k.moveTo(m[0],m[1]);g++<c;)k.lineTo(Math.cos(g*h+d)*e+b,Math.sin(g*h+d)*e+a);k.lineTo(m[0],m[1]);k.closePath();k.doFill&&k.fill();k.doStroke&&k.stroke()}
var W={angle:function(b,a,c,e,d,g,h,k){d=void 0===d?20:d;g=void 0===g?10:g;h=void 0===h?!1:h;k=void 0===k?1:k;var m=(a[1]-b[1])/(a[0]-b[0]),l=(e[1]-c[1])/(e[0]-c[0]);var q=b[1]-b[0]*m;l=(c[1]-c[0]*l-q)/(m-l);q=[l,m*l+q];m=q[0];q=q[1];if(isNaN(m)||isNaN(q))throw Error("No intersection point");b=Math.atan2(b[1]-q,b[0]-m);a=Math.atan2(a[1]-q,a[0]-m);c=Math.atan2(c[1]-q,c[0]-m);e=Math.atan2(e[1]-q,e[0]-m);e={1:[a,e],2:[e,b],3:[b,c],4:[c,a]}[k];k=y.workingContext;h?(h=e[1],e=e[0]-e[1]):(h=e[0],e=e[1]-
e[0]);k.doFill&&(k.beginPath(),k.moveTo(m,q),k.arc(m,q,d,h,e+h),k.fill(),k.closePath());k.doStroke&&(k.beginPath(),k.arc(m,q,d,h,e+h),k.stroke(),k.closePath());return{center:[m+(d+g)*Math.cos(h+e/2),q+(d+g)*Math.sin(h+e/2)],ang:e}},annulus:function(b,a,c,e){let d=y.workingContext;d.beginPath();d.arc(b,a,c,0,2*Math.PI,!1);d.moveTo(e,0);d.arc(b,a,e,0,2*Math.PI,!0);V(d)},annulusSector:function(b,a,c,e,d,g){let h=y.workingContext;h.beginPath();h.arc(b,a,c,g,g+d,!1);h.arc(b,a,e,g+d,g,!0);V(h)},arc:function(b,
a,c,e,d){e=void 0===e?Math.PI/2:e;d=void 0===d?0:d;let g=y.workingContext;g.pathStarted||g.beginPath();g.arc(b,a,c,d,d+e);g.pathStarted||V(g)},arcBetweenPoints:function(b,a,c,e,d,g){g=void 0===g?!1:g;b==c&&a==e&&console.error("Can't draw a arc between points. Given points are exactly same");var h=[b,a],k=[c,e];const m=T(h,k);var l=(d*d-d*d+m*m)/(2*m);const q=Math.sqrt(d*d-l*l);l/=m;l=[(k[0]-h[0])*l+h[0],(k[1]-h[1])*l+h[1]];h=[l[0]+q*(k[1]-h[1])/m,l[1]-q*(k[0]-h[0])/m];k=y.workingContext;b=Math.atan2(a-
h[1],b-h[0]);c=Math.atan2(e-h[1],c-h[0])-b;k.pathStarted||(k.save(),k.beginPath());k.arc(h[0],h[1],d,b,c+b,!g);k.pathStarted||(V(k),k.restore());return h},bezier:function(b,a,c,e,d,g){let h=y.workingContext;h.pathStarted||h.beginPath();h.bezierCurveTo(b,a,c,e,d,g);h.pathStarted||V(h)},circle:function(b,a,c){let e=y.workingContext;e.beginPath();e.arc(b,a,c,0,2*Math.PI);e.doFill&&e.fill();e.doStroke&&e.stroke()},circularSegment:function(b,a,c,e,d){e=void 0===e?Math.PI/2:e;d=void 0===d?0:d;let g=y.workingContext;
g.pathStarted||g.beginPath();g.arc(b,a,c,d,d+e);g.pathStarted||V(g)},ellipse:function(b,a,c,e,d,g,h){d=void 0===d?0:d;g=void 0===g?0:g;h=void 0===h?2*Math.PI:h;let k=y.workingContext;k.pathStarted||k.beginPath();k.ellipse(b,a,c,e,d,g,g+h);k.pathStarted||V(k)},equiTriangle:function(b,a,c,e){ea(b,a,3,c,void 0===e?0:e)}};W.getBezierControlPoints=U;W.line=function(b,a,c,e){let d=y.workingContext;d.beginPath();d.moveTo(b,a);d.lineTo(c,e);d.stroke();d.closePath()};
W.point=function(b,a,c,e){c=void 0===c?10:c;e=void 0===e?!1:e;let d=y.workingContext;d.beginPath();d.arc(b,a,c/2,0,2*Math.PI);d.fill();e&&d.stroke();d.beginPath()};W.polygon=function(){let b=arguments;if(2<b.length){let a=y.workingContext,c=b[0];a.beginPath();a.moveTo(c[0],c[1]);for(let e=1;e<b.length;e++)a.lineTo(b[e][0],b[e][1]);a.lineTo(c[0],c[1]);a.doFill&&a.fill();a.doStroke&&a.stroke();a.closePath()}};
W.quad=function(b,a,c,e){let d=y.workingContext;d.beginPath();d.moveTo(b[0],b[1]);d.lineTo(a[0],a[1]);d.lineTo(c[0],c[1]);d.lineTo(e[0],e[1]);d.lineTo(b[0],b[1]);d.doFill&&d.fill();d.doStroke&&d.stroke();d.closePath()};W.quadraticCurve=function(){let b=y.workingContext,a=arguments;4==a.length?b.quadraticCurveTo(a[0],a[1],a[2],a[3]):6==a.length&&(b.beginPath(),b.moveTo(a[0],a[1]),b.quadraticCurveTo(a[2],a[3],a[4],a[5]),V(b))};W.rect=da;W.regularPolygon=ea;W.regularPolygonWithRadius=fa;
W.sector=function(b,a,c,e,d){e=void 0===e?Math.PI/2:e;d=void 0===d?0:d;let g=y.workingContext;g.beginPath();g.moveTo(b,a);g.arc(b,a,c,d,d+e);g.lineTo(b,a);V(g)};W.smoothCurveThroughPoints=function(b,a,c,e){a=void 0===a?1:a;c=void 0===c?!0:c;e=void 0===e?0:e;let d=y.workingContext;d.beginPath();d.moveTo(b[0][0],b[0][1]);ca(b,a,c,e);d.doFill&&c&&d.fill();d.doStroke&&d.stroke();d.closePath()};W.smoothCurveThroughPointsTo=ca;W.square=function(b,a,c){da(b,a,c,c)};
W.triangle=function(b,a,c){let e=y.workingContext;e.beginPath();e.moveTo(b[0],b[1]);e.lineTo(a[0],a[1]);e.lineTo(c[0],c[1]);e.lineTo(b[0],b[1]);e.doFill&&e.fill();e.doStroke&&e.stroke();e.closePath()};const {abs:ha,acos:ia,asin:ja,atan:ka,atan2:la,cbrt:ma,ceil:na,cos:oa,cosh:pa,exp:qa,floor:ra,log:sa,log2:ta,log10:ua,max:va,min:wa,pow:xa,random:ya,round:za,sign:Aa,sin:Ba,sqrt:Ca,tan:Da,tanh:Ea}=Math;var X={};X.abs=ha;X.acos=ia;X.asin=ja;X.atan=ka;X.atan2=la;X.cbrt=ma;X.ceil=na;X.cos=oa;X.cosh=pa;X.exp=qa;X.floor=ra;X.log=sa;X.log10=ua;X.log2=ta;X.max=va;X.min=wa;X.pow=xa;X.random=ya;X.round=za;X.sgn=Aa;X.sigmoid=function(b){return 1/(1+Math.exp(-b))};X.sin=Ba;X.sqrt=Ca;X.tan=Da;X.tanh=Ea;const Y=b=>Object.prototype.toString.call(b).slice(8,-1);Object.clone=Object.clone||function(b){let a={};for(let c=0,e=Object.keys(b);c<e.length;c++)a[e[c]]=b[e[c]];return a};function A(b,a,c){a=void 0===a?window:a;c=void 0===c?!1:c;Object.assign(a,b);c&&Object.assign(y.functions,b)}
function z(b,a,c){a=void 0===a?{}:a;c=void 0===c?!0:c;a=Object.clone(a);for(let e=0,d=Object.keys(b);e<d.length;e++){let g=d[e],h=b[g],k=a[g],m=Y(h),l=Y(k);"Object"==m&&c&&(a[g]=z(h,k,c));"Undefined"!=m&&"Null"!=m&&l!==m&&(a[g]=b[g])}return a}function V(b){b.doFill&&b.fill();b.doStroke&&b.stroke()}window.applyDefault=z;var Z={};Z.applyDefault=z;Z.approximateIndexInArray=function(b,a,c){c=void 0===c?1E-6:c;for(let e=0;e<a.length;e++)if(Math.abs(a[e]-b)<=c)return e;return-1};
Z.arange=function(b,a,c,e){let d=[];if(void 0===e?0:e)for(;a>=b;a-=c)d.push(a);else for(;b<=a;b+=c)d.push(b);return d};Z.defineProperties=A;Z.doFillAndStroke=V;Z.fraction=function(b,a,c,e,d){d=void 0===d?"":d;if(void 0===c||c){c=b;for(var g=a;0!=g;){let h=g;g=c%g;c=h}b/=c;a/=c}0==b?b="0":1==a?b+=d:void 0===e||e?(1==b&&""!=d&&(b=""),b=`\\frac{${b}${d}}{${a}}`):b=`\\frac{${b}}{${a}}${d}`;return b};
Z.latexToImg=function(b){return new Promise((a,c)=>{var e="",d="";e=MathJax.tex2svg(`${b}`,{em:10,ex:5,display:!0}).getElementsByTagName("svg")[0].outerHTML;var g=new Image;g.src="data:image/svg+xml;base64,"+window.btoa(unescape(encodeURIComponent(e)));g.onload=function(){var h=document.createElement("canvas");h.width=g.width;h.height=g.height;h.getContext("2d").drawImage(g,0,0);d=h.toDataURL("image/png");a(d)};g.onerror=function(){c()}})};Z.type=Y;[{C:y,dist:T},Z,J,K,{ALPHABETIC:"alphabetic",BEVEL:"bevel",BOTTOM:"bottom",BUTT:"butt",CENTER:"center",CONDENSED:"condensed",END:"end",EXPANDED:"expanded",EXTRA_CONDENSED:"extra-condensed",EXTRA_EXPANDED:"extra-expanded",HANGING:"hanging",IDEOGRAPHIC:"ideographic",ITALIC:"italic",LARGE:"large",LARGER:"larger",LEFT:"left",MEDIUM:"medium",MIDDLE:"middle",MILTER:"milter",MITER:"miter",NORMAL:"normal",OBLIQUE:"oblique",RIGHT:"right",ROUND:"round",SEMI_CONDENSED:"semi-condensed",SEMI_EXPANDED:"semi-expanded",
SMALL:"small",SMALLER:"smaller",SQUARE:"square",START:"start",TOP:"top",ULTRA_CONDENSED:"ultra-condensed",ULTRA_EXPANDED:"ultra-expanded",XXX_LARGE:"xxx-large",XX_LARGE:"xx-large",XX_SMALL:"xx-small",X_LARGE:"x-large",X_SMALL:"x-small"},{linearGradient:function(b,a,c){b=y.workingContext.createLinearGradient(b[0],b[1],a[0],a[1]);if("Array"==Y(c)){a={};const e=1/c.length;for(let d=0;d<c.length;d++)a[e*d]=c[d];c=a}else if("Object"!=Y(c))throw Error("Color Stops must be an Array or an Object");for(let e=
Object.keys(c||{}),d=0;d<e.length;d++)a=Number(e[d]),b.addColorStop(a,c[a]);return b}},Q,S,{fillText:function(b,a=0,c=0,e){let d=y.workingContext;d.yAxisInverted&&(C(1,-1),c*=-1);d.fillText(b,a,c,e);d.yAxisInverted&&C(1,-1)},strokeText:function(b,a=0,c=0,e){let d=y.workingContext;d.yAxisInverted&&(C(1,-1),c*=-1);d.strokeText(b,a,c,e);d.yAxisInverted&&C(1,-1)},text:function(b,a=0,c=0,e){let d=y.workingContext;d.yAxisInverted&&(C(1,-1),c*=-1);d.doFill?d.fillText(b,a,c,e):d.doStroke&&d.strokeText(b,
a,c,e);d.yAxisInverted&&C(1,-1)}},W,X,{randomInt:function(b=10,a=0){return Math.round(Math.random()*(b-a)+a)}}].forEach(b=>A(b));}).call(this);
