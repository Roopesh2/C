(function(){'use strict';Object.getType=function(a){return Object.prototype.toString.call(a).replace(/(\[object|\s|])/g,"")};Object.clone=Object.clone||function(a){for(var b={},c=0,d=Object.keys(a);c<d.length;c++)b[d[c]]=a[d[c]];return b};
function l(a,b,c,d){b=b||window;c=void 0===c||null===c?window:c;b=b||window;d="function"===typeof d?d:function(e){console.warn("You changed value of '"+e+"' which C uses. Be careful")};for(let e=0,f=Object.keys(a);e<f.length;e++)c?function(g,h,k,m){Object.defineProperty(k,g,{configurable:!0,enumerable:!0,get:function(){return h},set:function(n){Object.defineProperty(k,g,{configurable:!0,enumerable:!0,value:n,writable:!0});m(g)}})}(f[e],a[f[e]],b,d):window[f[e]]=a[f[e]]}
function aa(a,b,c,d=!1){const e=[];if(d)for(;b>=a;b-=c)e.push(b);else for(;a<=b;a+=c)e.push(a);return e}function p(a,b={},c=!0){b=Object.clone(b);for(let d=0,e=Object.keys(a);d<e.length;d++){const f=e[d],g=a[f],h=b[f],k=Object.getType(g),m=Object.getType(h);"Object"==k&&c&&(b[f]=p(g,h,c));m!==k&&(b[f]=a[f])}return b}function t(a){a.doFill&&a.fill();a.doStroke&&a.stroke()}function ba(a,b,c=1E-6){for(let d=0;d<b.length;d++)if(Math.abs(b[d]-a)<=c)return d;return-1};const ca={width:200,height:200,dpr:Math.ceil(window.devicePixelRatio||1),doFill:!0,doStroke:!0,pathStarted:!1,yAxisInverted:!1,netRotation:0,currentLoop:null,textAlign:"start",textBaseline:"alphabetic",fillStyle:"#ffffff",background:"#ffffff",strokeStyle:"#000000",colorMode:"rgba",lineWidth:1,fontSize:"20px",fontFamily:"serif",fontStyle:"normal",fontVariant:"normal",fontWeight:"normal",fontStretch:"normal",lineHeight:"1.2",font:"20px serif"};
function x(a,b=document.body,c={}){function d(){x.resizeCanvas(f,e);f.context=Object.assign(f.getContext("2d"),e);f.context.setTransform(e.dpr,0,0,e.dpr,0,0);x.workingCanvas=f.context;x.workingCanvas.savedStates=ca}const e=p(ca,c);let f=x.makeCanvas(e);"string"===typeof b&&(b=document.querySelector(b));c=b.id||b.classList.item(0);if(void 0!=e.name){c=e.name;const g=document.getElementById(c);if(g instanceof HTMLElement){f=g;d();a();return}}else{for(;void 0!=document.getElementById(c+"-"+x.nameID);)x.nameID++;
c=c+"-"+x.nameID;e.name=c}f.id=c;f.classList.add(c);b.appendChild(f);d();x.canvasList[c]=f.context;a()}x.canvasList={};x.nameID=0;x.workingCanvas={};x.defaultConfigs=ca;x.getContainerWidth=function(a=document.body){a=window.getComputedStyle(a);return parseInt(a.width)-parseInt(a.paddingRight)-parseInt(a.paddingLeft)};x.resizeCanvas=function(a,b){const c=b.width,d=b.height;b=b.dpr||window.devicePixelRatio;a.style.width=c+"px";a.style.height=d+"px";a.width=b*c;a.height=b*d};
x.makeCanvas=function(a){const b=document.createElement("canvas");this.resizeCanvas(b,a);return b};x.addExtension=function(a,b){l(a,window,!b);l(a,x.extensions,!b)};x.defineProperties=l;window.C=x;var ea={BLACK:"#000000",BLUE:"#58C4DD",BLUE_A:"#C7E9F1",BLUE_B:"#9CDCEB",BLUE_C:"#58C4DD",BLUE_D:"#29ABCA",BLUE_E:"#1C758A",DARKER_GRAY:"#222222",DARKER_GREY:"#222222",DARK_BLUE:"#236B8E",DARK_BROWN:"#8B4513",DARK_GRAY:"#444444",DARK_GREY:"#444444",GOLD:"#F0AC5F",GOLD_A:"#F7C797",GOLD_B:"#F9B775",GOLD_C:"#F0AC5F",GOLD_D:"#E1A158",GOLD_E:"#C78D46",GRAY:"#888888",GREEN:"#83C167",GREEN_A:"#C9E2AE",GREEN_B:"#A6CF8C",GREEN_C:"#83C167",GREEN_D:"#77B05D",GREEN_E:"#699C52",GREEN_SCREEN:"#00FF00",GREY:"#888888",
GREY_BROWN:"#736357",LIGHT_BROWN:"#CD853F",LIGHT_GRAY:"#BBBBBB",LIGHT_GREY:"#BBBBBB",LIGHT_PINK:"#DC75CD",MAROON:"#C55F73",MAROON_A:"#ECABC1",MAROON_B:"#EC92AB",MAROON_C:"#C55F73",MAROON_D:"#A24D61",MAROON_E:"#94424F",ORANGE:"#FF862F",PINK:"#D147BD",PURPLE:"#9A72AC",PURPLE_A:"#CAA3E8",PURPLE_B:"#B189C6",PURPLE_C:"#9A72AC",PURPLE_D:"#715582",PURPLE_E:"#644172",RED:"#FC6255",RED_A:"#F7A1A3",RED_B:"#FF8080",RED_C:"#FC6255",RED_D:"#E65A4C",RED_E:"#CF5044",TEAL:"#5CD0B3",TEAL_A:"#ACEAD7",TEAL_B:"#76DDC0",
TEAL_C:"#5CD0B3",TEAL_D:"#55C1A7",TEAL_E:"#49A88F",TRANSPARENT:"rgba(0,0,0,0)",WHITE:"#FFFFFF",YELLOW:"#FFFF00",YELLOW_A:"#FFF1B6",YELLOW_B:"#FFEA94",YELLOW_C:"#FFFF00",YELLOW_D:"#F4D345",YELLOW_E:"#E8C11C"};const fa=180/Math.PI;var E={};E.DEG=Math.PI/180;E.E=2.718281828459045;E.HALF_PI=1.5707963267948966;E.LN10=2.302585092994046;E.LN2=.6931471805599453;E.PI=3.141592653589793;E.QUATER_PI=.7853981633974483;E.RAD=fa;E.SQRT2=1.4142135623730951;E.TAU=6.283185307179586;E.TIERCE_PI=1.0471975511965976;E.TWO_PI=6.283185307179586;function ha(a,b,c){0>c&&(c+=1);1<c&&--c;return c<1/6?a+6*(b-a)*c:.5>c?b:c<2/3?a+(b-a)*(2/3-c)*6:a};function H(a,b=!1){let c=a[0];var d;if("number"===typeof c)1===a.length?d=[c,c,c,1]:2===a.length?d=[c,a[1],0,1]:3===a.length?d=[c,a[1],a[2],1]:4===a.length&&(d=[c,a[1],a[2],a[3]]);else if("#"==c[0])if(c=c.substr(1),3==c.length||4==c.length)d=[Number("0x"+c[0]+c[0]),Number("0x"+c[1]+c[1]),Number("0x"+c[2]+c[2]),Number("0x"+(c[3]||"ff"))/255];else if(6==c.length||8==c.length)d=c.substr(6,2)||"ff",d=[Number("0x"+c.substr(0,2)),Number("0x"+c.substr(2,2)),Number("0x"+c.substr(4,2)),Number("0x"+d)/255];
b||(b=x.workingCanvas.colorMode||"rgba","hsl"===b||"rgb"===b?d=b+`(${d[0]}, ${d[1]}, ${d[2]})`:"rgba"===b&&(d=`rgba(${d[0]}, ${d[1]}, ${d[2]}, ${d[3]})`));return d}var ia={};ia.readColor=H;function ja(a=10,b=0){return Math.round(Math.random()*(a-b)+b)}var ka={};ka.randomInt=ja;var I=Object.keys(ea);const la=I.indexOf("TRANSPARENT");I=I.slice(0,la).concat(I.slice(la+1));function ma(a,b,c){a=H([a],!0);b=H([b],!0);return H([(b[0]-a[0])*c+a[0],(b[1]-a[1])*c+a[1],(b[2]-a[2])*c+a[2],(b[3]-a[3])*c+a[3]])}var na={};na.lerpColor=ma;na.lerpColorArray=function(a,b){const c=Object.keys(a).sort();var d=Math.min(...c),e=Math.max(...c);if(b>=e)return a[e];if(b<=d)return a[d];for(d=0;d<c.length-1;d++){e=c[d];if(b>e)return ma(a[e],a[c[d+1]],(b-e)/(c[d+1]-e));if(b==e)return a[e]}};function oa(a,b){return Math.sqrt(Math.pow(a[0]-b[0],2)+Math.pow(a[1]-b[1],2))}function pa(a,b,c,d=10){Array.isArray(a)&&2===a.length&&(b=a[1],a=a[0]);return[Math.cos(c)*d+a,Math.sin(c)*d+b]}function qa(a,b,c,d){b=(b[1]-a[1])/(b[0]-a[0]);d=(d[1]-c[1])/(d[0]-c[0]);a=a[1]-a[0]*b;c=(c[1]-c[0]*d-a)/(b-d);return[c,b*c+a]}
function ra(a,b,c,d){const e=oa(a,c);d=(b*b-d*d+e*e)/(2*e);b=Math.sqrt(b*b-d*d);d/=e;d=[(c[0]-a[0])*d+a[0],(c[1]-a[1])*d+a[1]];return[[d[0]+b*(c[1]-a[1])/e,d[1]-b*(c[0]-a[0])/e],[d[0]-b*(c[1]-a[1])/e,d[1]+b*(c[0]-a[0])/e]]}var sa={};sa.circleIntersection=ra;sa.dist=oa;sa.lineIntersection=qa;sa.rotateAroundOrigin=function(a,b=10){return pa(0,0,a,b)};sa.rotateAroundPoint=pa;function ta(a,b,c,d,e=1){return[b[0]+(c[0]-a[0])/6*e,b[1]+(c[1]-a[1])/6*e,c[0]-(d[0]-b[0])/6*e,c[1]-(d[1]-b[1])/6*e]}function ua(a,b=1,c=!0){for(var d=0;d<a.length-1;d++){var e=a[d+1],f=ta(0<d?a[d-1]:c?a[a.length-2]:a[0],a[d],e,d!=a.length-2?a[d+2]:c?a[1]:e,b);x.workingCanvas.bezierCurveTo(f[0],f[1],f[2],f[3],e[0],e[1])}}function va(a,b=1,c=!0){const d=x.workingCanvas;d.beginPath();d.moveTo(a[0][0],a[0][1]);ua(a,b,c);d.closePath();t(d)}
function wa(a,b,c,d){const e=x.workingCanvas;e.beginPath();e.moveTo(a,b);e.lineTo(c,d);e.stroke();e.closePath()}function xa(a,b,c,d){const e=x.workingCanvas;e.beginPath();e.rect(a,b,c,d);e.doFill&&e.fill();e.doStroke&&e.stroke();e.closePath()}function ya(a,b,c,d,e=0){za(a,b,c,d/(2*Math.sin(Math.PI/c)),e)}
function za(a,b,c,d,e=0){let f=0;const g=2*Math.PI/c,h=x.workingCanvas;e+=g/2;const k=[Math.cos(e)*d+a,Math.sin(e)*d+b];h.beginPath();for(h.moveTo(k[0],k[1]);f++<c;)h.lineTo(Math.cos(f*g+e)*d+a,Math.sin(f*g+e)*d+b);h.lineTo(k[0],k[1]);h.closePath();h.doFill&&h.fill();h.doStroke&&h.stroke()}
var J={angle:function(a,b,c,d,e=20,f=10,g=!1,h=1){const [k,m]=qa(a,b,c,d);if(isNaN(k)||isNaN(m))console.error("No intersection point");else return a=Math.atan2(a[1]-m,a[0]-k),b=Math.atan2(b[1]-m,b[0]-k),c=Math.atan2(c[1]-m,c[0]-k),d=Math.atan2(d[1]-m,d[0]-k),h={1:[b,d],2:[d,a],3:[a,c],4:[c,b]}[h],g?(g=h[1],h=h[0]-h[1]):(g=h[0],h=h[1]-h[0]),d=x.workingCanvas,d.doFill&&(d.beginPath(),d.moveTo(k,m),d.arc(k,m,e,g,h+g),d.fill(),d.closePath()),d.doStroke&&(d.beginPath(),d.arc(k,m,e,g,h+g),d.stroke(),d.closePath()),
{center:[k+(e+f)*Math.cos(g+h/2),m+(e+f)*Math.sin(g+h/2)],ang:h}},annulus:function(a,b,c,d){const e=x.workingCanvas;e.beginPath();e.arc(a,b,c,0,2*Math.PI,!1);e.moveTo(d,0);e.arc(a,b,d,0,2*Math.PI,!0);t(e)},annulusSector:function(a,b,c,d,e,f){const g=x.workingCanvas;g.beginPath();g.arc(a,b,c,f,f+e,!1);g.arc(a,b,d,f+e,f,!0);t(g)},arc:function(a,b,c,d=Math.PI/2,e=0){const f=x.workingCanvas;f.pathStarted||f.beginPath();f.arc(a,b,c,e,e+d);f.pathStarted||t(f)},arcBetweenPoints:function(a,b,c,d,e,f=!1){a==
c&&b==d&&console.error("Can't draw a arc between points. Given points are exactly same");var g=ra([a,b],e,[c,d],e)[0];const h=x.workingCanvas;a=Math.atan2(b-g[1],a-g[0]);c=Math.atan2(d-g[1],c-g[0])-a;h.pathStarted||(h.save(),h.beginPath());h.arc(g[0],g[1],e,a,c+a,!f);h.pathStarted||(t(h),h.restore());return g},bezier:function(a,b,c,d,e,f){const g=x.workingCanvas;g.pathStarted||g.beginPath();g.bezierCurveTo(a,b,c,d,e,f);g.pathStarted||t(g)},circle:function(a,b,c){const d=x.workingCanvas;d.beginPath();
d.arc(a,b,c,0,2*Math.PI);t(d)},circularSegment:function(a,b,c,d=Math.PI/2,e=0){const f=x.workingCanvas;f.pathStarted||f.beginPath();f.arc(a,b,c,e,e+d);f.pathStarted||t(f)},ellipse:function(a,b,c,d,e=0,f=0,g=2*Math.PI){const h=x.workingCanvas;h.pathStarted||h.beginPath();h.ellipse(a,b,c,d,e,f,f+g);h.pathStarted||t(h)},equiTriangle:function(a,b,c,d=0){ya(a,b,3,c,d)}};J.getBezierControlPoints=ta;J.line=wa;
J.point=function(a,b,c=10,d=!1){const e=x.workingCanvas;e.beginPath();e.arc(a,b,c/2,0,2*Math.PI);e.fill();d&&e.stroke();e.closePath()};J.polygon=function(){const a=arguments;if(2<a.length){const b=x.workingCanvas,c=a[0];b.beginPath();b.moveTo(c[0],c[1]);for(let d=1;d<a.length;d++)b.lineTo(a[d][0],a[d][1]);b.lineTo(c[0],c[1]);b.doFill&&b.fill();b.doStroke&&b.stroke();b.closePath()}};
J.polygonWithRatioOfCentralAngles=function(a,b,c,d,e=0){Array.isArray(d)||console.error("ratio provided is not array");var f=d.reduce((h,k)=>h+k,0);f=2*Math.PI/f;const g=x.workingCanvas;g.save();g.translate(a,b);g.rotate(e);g.beginPath();g.moveTo(c,0);for(a=0;a<d.length;a++)g.rotate(f*d[a]),g.lineTo(c,0);g.doStroke&&g.stroke();g.doFill&&g.fill();g.closePath();g.restore()};
J.quad=function(a,b,c,d){const e=x.workingCanvas;e.beginPath();e.moveTo(a[0],a[1]);e.lineTo(b[0],b[1]);e.lineTo(c[0],c[1]);e.lineTo(d[0],d[1]);e.lineTo(a[0],a[1]);e.doFill&&e.fill();e.doStroke&&e.stroke();e.closePath()};J.quadraticCurve=function(){const a=x.workingCanvas,b=arguments;4==b.length?a.quadraticCurveTo(b[0],b[1],b[2],b[3]):6==b.length&&(a.beginPath(),a.moveTo(b[0],b[1]),a.quadraticCurveTo(b[2],b[3],b[4],b[5]),t(a))};J.rect=xa;J.regularPolygon=ya;J.regularPolygonWithRadius=za;
J.sector=function(a,b,c,d=Math.PI/2,e=0){const f=x.workingCanvas;f.beginPath();f.moveTo(a,b);f.arc(a,b,c,e,e+d);f.lineTo(a,b);t(f)};J.smoothCurveThroughPoints=va;J.smoothCurveThroughPointsTo=ua;J.square=function(a,b,c){xa(a,b,c,c)};J.triangle=function(a,b,c){const d=x.workingCanvas;d.beginPath();d.moveTo(a[0],a[1]);d.lineTo(b[0],b[1]);d.lineTo(c[0],c[1]);d.lineTo(a[0],a[1]);d.doFill&&d.fill();d.doStroke&&d.stroke();d.closePath()};function Aa(){const a=H(arguments),b=x.workingCanvas;b.background=a;b.save();Ba();b.fillStyle=a;b.fillRect(0,0,b.width,b.height);b.restore()}function N(a,b=0){x.workingCanvas.translate(a,b)}function Ca(a){x.workingCanvas.lineWidth=Number(a)}function O(a,b=a){x.workingCanvas.scale(a,b)}function Da(a){const b=x.workingCanvas;b.rotate(a);b.netRotation=(b.netRotation+a)%Math.PI*2}function Ea(){x.savedStates=Fa();x.workingCanvas.save()}
function Ga(){Object.assign(x.workingCanvas,x.savedStates);x.workingCanvas.restore()}function Ba(){const a=x.workingCanvas;a.setTransform(a.dpr,0,0,a.dpr,0,0)}function Ja(){const a=x.workingCanvas;0<arguments.length?(a.strokeStyle=H(arguments),a.doStroke=!0):a.stroke()}function Ka(){const a=x.workingCanvas;0!==arguments.length?(a.fillStyle=H(arguments),a.doFill=!0):a.fill()}
function Fa(){const a=x.workingCanvas;return{background:a.background,colorMode:a.colorMode,strokeStyle:a.strokeStyle,fillStyle:a.fillStyle,lineWidth:a.lineWidth,doStroke:a.doStroke,doFill:a.doFill,pathStarted:a.pathStarted,yAxisInverted:a.yAxisInverted,netRotation:a.netRotation,currentLoop:a.currentLoop,fontStyle:a.fontStyle,fontVariant:a.fontVariant,fontWeight:a.fontWeight,fontStretch:a.fontStretch,fontSize:a.fontSize,lineHeight:a.lineHeight,fontFamily:a.fontFamily,font:a.font,textAlign:a.textAlign,
textBaseline:a.textBaseline}}
function La(a,b,c,d=100){function e(){g.currentLoop=window.requestAnimationFrame(e);a(window.performance.now()-g.timeStart,f())}function f(){const h=window.performance.now(),k=h-g.recentTimeStamp;g.recentTimeStamp=h;g.timeDelayList.push(k);g.totalTimeCaptured+=k;g.timeDelayList.length>d&&(g.totalTimeCaptured-=g.timeDelayList.shift());return g.timeDelayList.length/(g.totalTimeCaptured/1E3)}let g;g=b?x.canvasList[b]:x.workingCanvas;g.timeDelayList=[];g.totalTimeCaptured=0;g.recentTimeStamp=window.performance.now();
g.timeStart=window.performance.now();isNaN(c)?e():g.currentLoop=setInterval(function(){x.workingCanvas=g;a(window.performance.now()-g.timeStart,f())},c)}function Ma(a){let b=x.workingCanvas;a&&(b=x.canvasList[a]);clearInterval(b.currentLoop);window.cancelAnimationFrame(b.currentLoop)}function Na(){const a=x.workingCanvas;a.beginPath();a.pathStarted=!0}function Oa(){const a=x.workingCanvas;a.closePath();a.pathStarted=!1}
function P(a=!1){const b=x.workingCanvas;if(a){const {fontStyle:c,fontVariant:d,fontWeight:e,fontStretch:f,fontSize:g,lineHeight:h,fontFamily:k}=b;return`${c} ${d} ${e} ${f} ${g}/${h} ${k}`}return b.font}function Pa(a){const b=x.workingCanvas;b.fontSize="number"===typeof a?a+"px":a;b.font=P(!0)}function Qa(a="image/png"){return x.workingCanvas.canvas.toDataURL(a)}function Ra(a){x.workingCanvas.textAlign=a}function Sa(a){x.workingCanvas.textBaseline=a}
function Ta(){const a=x.workingCanvas;a.translate(a.width/2,a.height/2)}function Ua(){const a=x.workingCanvas;a.scale(1,-1);a.yAxisInverted=!a.yAxisInverted}var Q={};Q.background=Aa;Q.centerdText=function(){Ra("center");Sa("middle")};Q.clear=function(a,b,c,d){const e=x.workingCanvas;c=c||e.width;d=d||e.height;e.clearRect(a||0,b||0,c,d)};Q.clearAll=function(){const a=x.workingCanvas,b=a.dpr;a.save();a.setTransform(b,0,0,b,0,0);a.clearRect(0,0,a.width,a.height);a.restore()};Q.endShape=Oa;Q.fill=Ka;
Q.fontFamily=function(a){const b=x.workingCanvas;b.fontFamily=a;b.font=P(!0)};Q.fontSize=Pa;Q.fontStretch=function(a){const b=x.workingCanvas;b.fontStretch=a;b.font=P(!0)};Q.fontStyle=function(a){const b=x.workingCanvas;b.fontStyle=a;b.font=P(!0)};Q.fontVariant=function(a){const b=x.workingCanvas;b.fontVariant=a;b.font=P(!0)};Q.fontWeight=function(a){const b=x.workingCanvas;b.fontWeight=a;b.font=P(!0)};Q.getCanvasData=Qa;Q.getContextStates=Fa;Q.getFill=function(){return x.workingCanvas.fillStyle};
Q.getFont=P;Q.getStroke=function(){return x.workingCanvas.strokeStyle};Q.getTransform=function(){return x.workingCanvas.getTransform()};Q.initBlackboardCanvas=function(){Ta();Aa(0);Ua()};Q.initCenteredCanvas=Ta;Q.invertYAxis=Ua;Q.lineCap=function(a){x.workingCanvas.lineCap=a};Q.lineDash=function(){x.workingCanvas.setLineDash([...arguments])};Q.lineHeight=function(a){const b=x.workingCanvas;b.lineHeight=a;b.font=P(!0)};Q.lineJoin=function(a){x.workingCanvas.lineJoin=a};
Q.lineTo=function(a,b){x.workingCanvas.lineTo(a,b)};Q.loop=La;Q.measureText=function(a){return x.workingCanvas.measureText(a)};Q.moveTo=function(a,b){x.workingCanvas.moveTo(a,b)};Q.noFill=function(){x.workingCanvas.doFill=!1};Q.noLoop=Ma;Q.noStroke=function(){x.workingCanvas.doStroke=!1};Q.permaBackground=function(){const a=x.workingCanvas.canvas.style;a.background="url('"+Qa()+"')";a.backgroundPosition="center";a.backgroundSize="cover"};Q.rest=Ba;Q.restore=Ga;Q.rotate=Da;Q.save=Ea;
Q.saveCanvas=function(a="drawing",b="image/png"){b=Qa().replace(b,"image/octet-stream");const c=document.createElement("a");c.download=a+".png";c.href=b;c.click()};Q.scale=O;Q.setImageSmoothing=function(a){x.workingCanvas.imageSmoothingEnabled=!!a};Q.setTransform=function(a,b,c,d,e,f){const g=x.workingCanvas;a instanceof DOMMatrix?g.setTransform(a):g.setTransform(a,b,c,d,e,f);g.scale(g.dpr,g.dpr)};Q.startShape=Na;Q.stroke=Ja;Q.strokeWidth=Ca;Q.textAlign=Ra;Q.textBaseline=Sa;
Q.transform=function(a,b,c,d,e,f){const g=x.workingCanvas;a instanceof DOMMatrix?g.transform(a):g.transform(a,b,c,d,e,f)};Q.translate=N;function Va(a,b=0,c=0,d){const e=x.workingCanvas;e.yAxisInverted&&(O(1,-1),c*=-1);e.fillText(a,b,c,d);e.yAxisInverted&&O(1,-1)}var Wa={};Wa.fillText=Va;Wa.strokeText=function(a,b=0,c=0,d){const e=x.workingCanvas;e.yAxisInverted&&(O(1,-1),c*=-1);e.strokeText(a,b,c,d);e.yAxisInverted&&O(1,-1)};Wa.text=function(a,b=0,c=0,d){const e=x.workingCanvas;e.yAxisInverted&&(O(1,-1),c*=-1);e.doFill?e.fillText(a,b,c,d):e.doStroke&&e.strokeText(a,b,c,d);e.yAxisInverted&&O(1,-1)};function Xa(a){if("object"==typeof window.MathJax&&"function"==typeof window.MathJax.tex2svg){var b=x.workingCanvas;a=MathJax.tex2svg(a).getElementsByTagName("svg")[0];const c=a.getElementsByTagName("g")[0];a.style.verticalAlign="1ex";c.setAttribute("stroke",b.strokeStyle);c.setAttribute("fill",b.fillStyle);b=new Blob([a.outerHTML],{type:"image/svg+xml;charset=utf-8"});b=(window.URL||window.webkitURL||window).createObjectURL(b);a=new Image;a.src=b;return a}console.error("MathJax is not found. Please include it.")}
var Ya={};Ya.getImageFromTex=Xa;Ya.tex=function(a,b=0,c=0){const d=Xa(a),e=x.workingCanvas,f=e.textAlign,g=e.textBaseline;d.onload=function(){e.save();const {width:h,height:k}=d;switch(f){case "center":e.translate(-h/2,0);break;case "right":e.translate(-h,0)}switch(g){case "middle":e.translate(0,k/2);break;case "bottom":e.translate(0,k)}e.yAxisInverted&&(e.scale(1,-1),c*=-1);e.drawImage(d,b,c);e.restore()};return d};function T(a,b,c,d,e,f){var g=x.workingCanvas,h=g.lineWidth,k=Math.sqrt(Math.pow(a-c,2)+Math.pow(b-d,2));isNaN(e)&&(e=k);f=f||e/1.3;var m=e-k,n=Math.sqrt(Math.pow(m,2)+Math.pow(f/2,2));f=Math.atan(f/(2*m));k>e&&(f+=Math.PI);e=Math.atan2(d-b,c-a);k=[a-Math.cos(f+e)*n,b-Math.sin(f+e)*n];n=[a-Math.cos(-f+e)*n,b-Math.sin(-f+e)*n];g.doStroke&&"bevel"!=g.lineJoin&&(c-=Math.cos(e)*h,d-=Math.sin(e)*h);g.save();g.pathStarted||g.beginPath();g.moveTo(a,b);g.lineTo(k[0],k[1]);g.lineTo(c,d);g.lineTo(n[0],n[1]);
g.lineTo(a,b);g.pathStarted||(t(g),g.closePath());g.restore()}function Za(a,b,c,d,e,f,g,h){e=void 0===e?15:e;f=void 0===f?e/1.3:f;g=void 0===g?0:g;h=void 0===h?0:h;var k=Math.atan2(d-b,c-a),m=Math.sin(k)*h;c-=Math.cos(k)*h;d-=m;h=Math.cos(k)*(e-g);g=Math.sin(k)*(e-g);k=x.workingCanvas;(m=k.pathStarted)||Na();k.moveTo(a,b);k.lineTo(c-h,d-g);k.stroke();T(c-h,d-g,c,d,e,f);m||(t(k),Oa())}
function $a(a,b,c,d,e,f,g,h,k,m){d=void 0===d?Math.PI/2:d;e=void 0===e?0:e;f=void 0===f?15:f;g=void 0===g?f/1.3:g;h=void 0===h?0:h;k=void 0===k?0:k;m=void 0===m?!1:m;const n=x.workingCanvas,q=f/c;n.save();h=q-h/c;n.beginPath();m?(h+=k,n.arc(a,b,c,h+e,d+e),n.stroke(),n.closePath(),T(a+c*Math.cos(e+h),b+c*Math.sin(e+h),a+c*Math.cos(e+k),b+c*Math.sin(e+k),f,g)):(d-=k,n.arc(a,b,c,e,d-h+e),n.stroke(),n.closePath(),T(a+c*Math.cos(e+d-h),b+c*Math.sin(e+d-h),a+c*Math.cos(e+d),b+c*Math.sin(e+d),f,g));n.restore()}
var U={};U.arrow=Za;U.arrowTip=T;U.curvedArrow=$a;U.curvedArrowBetweenPoints=function(a,b,c,d,e,f,g,h,k){d=void 0===d?15:d;e=void 0===e?d/1.3:e;f=void 0===f?0:f;g=void 0===g?0:g;h=void 0===h?!1:h;k=void 0===k?!1:k;const m=x.workingCanvas,n=m.pathStarted;m.save();n||m.beginPath();const q=ra(a,c,b,c)[0];a[0]-=q[0];a[1]-=q[1];b[0]-=q[0];b[1]-=q[1];a=Math.atan2(a[1],a[0]);b=Math.atan2(b[1],b[0]);h?(h=a,a=b-a):(h=b,a-=b);$a(q[0],q[1],c,a,h,d,e,f,g,k);n||m.closePath();m.restore();return q};
U.curvedDoubleArrow=function(a,b,c,d,e,f,g,h,k){d=void 0===d?Math.PI/2:d;e=void 0===e?0:e;f=void 0===f?15:f;g=void 0===g?f/1.3:g;h=void 0===h?0:h;k=void 0===k?0:k;const m=x.workingCanvas;m.save();const n=f/c,q=[-Math.cos(e+n/2+Math.PI/2),-Math.sin(e+n/2+Math.PI/2)];e+=n+2*k;$a(a,b,c,d-n+h/c,e-h/c,f,g,h,k);T(Math.cos(e-h/c)*c,Math.sin(e-h/c)*c,Math.cos(e)*c+f*q[0],Math.sin(e)*c+f*q[1],f,g);m.restore()};
U.curvedDoubleArrowBetweenPoints=function(a,b,c,d,e,f,g,h){d=void 0===d?15:d;e=void 0===e?d/1.3:e;f=void 0===f?0:f;g=void 0===g?0:g;h=void 0===h?!1:h;const k=x.workingCanvas;k.save();const m=ra(a,c,b,c)[0];a[0]-=m[0];a[1]-=m[1];b[0]-=m[0];b[1]-=m[1];const n=d/c;a=Math.atan2(a[1],a[0]);b=Math.atan2(b[1],b[0])+n;h?(h=a,a=b-a):(h=b,a-=b);f/=c;$a(m[0],m[1],c,a+f-g,h-f+g,d,e,f*c,g);f=n-f+g;h-=n;T(m[0]+c*Math.cos(h+f),m[1]+c*Math.sin(h+f),m[0]+c*Math.cos(h+g),m[1]+c*Math.sin(h+g),d,e);k.restore();return m};
U.doubleArrow=function(a,b,c,d,e,f,g,h){e=void 0===e?15:e;f=void 0===f?e/1.3:f;g=void 0===g?0:g;h=void 0===h?0:h;var k=Math.atan2(d-b,c-a);const m=Math.cos(k)*(e-g),n=Math.sin(k)*(e-g),q=Math.sin(k)*h;k=Math.cos(k)*h;Na();a+=m+k;b+=n+q;Za(a,b,c,d,e,f,g,h);T(a,b,a-m,b-n,e,f);t(x.workingCanvas);Oa()};
U.measurement=function(a){const b=x.workingCanvas;a=p({background:"rgba(0,0,0,0)",tipWidth:15,tipHeight:15/1.3,innerPadding:3,outerPadding:0,textRotation:0,arrowCurving:0},a);const {p1:c,p2:d}=a;var e=Math.atan2(d[1]-c[1],d[0]-c[0]),{width:f}=b.measureText(a.text);e=[Math.cos(e)*(a.innerPadding+f/2),Math.sin(e)*(a.innerPadding+f/2)];f=[(c[0]+d[0])/2,(c[1]+d[1])/2];Za(f[0]-e[0],f[1]-e[1],c[0],c[1],a.tipWidth,a.tipHeight,a.arrowCurving,a.outerPadding);Za(f[0]+e[0],f[1]+e[1],d[0],d[1],a.tipWidth,a.tipHeight,
a.arrowCurving,a.outerPadding);Ea();b.translate(f[0],f[1]);b.textAlign="center";b.textBaseline="middle";b.rotate(Math.atan2(d[1]-c[1],d[0]-c[0])+a.textRotation);Va(a.text,0,0);Ga()};const ab=2*Math.PI/3,bb=2*Math.PI/4.5;function cb(a){return a<1/2.75?7.5625*a*a:a<2/2.75?7.5625*(a-=1.5/2.75)*a+.75:a<2.5/2.75?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375}function db(a){return a}
var X={easeInBack:function(a){return 2.70158*Math.pow(a,3)-1.70158*Math.pow(a,2)},easeInBounce:function(a){return 1-cb(1-a)},easeInCirc:function(a){return 1-Math.sqrt(1-Math.pow(a,2))},easeInCubic:function(a){return Math.pow(a,3)},easeInElastic:function(a){return 0===a?0:1===a?1:-Math.pow(2,10*a-10)*Math.sin((10*a-10.75)*ab)},easeInExpo:function(a){return 0==a?0:Math.pow(2,10*a-10)},easeInOutBack:function(a){return.5>a?Math.pow(2*a,2)*(7.189819*a-2.5949095)/2:(Math.pow(2*a-2,2)*(3.5949095*(2*a-2)+
2.5949095)+2)/2},easeInOutBounce:function(a){return.5>a?(1-cb(1-2*a))/2:(1+cb(2*a-1))/2},easeInOutCirc:function(a){return.5>a?(1-Math.sqrt(1-Math.pow(2*a,2)))/2:(Math.sqrt(1-Math.pow(2-2*a,2))+1)/2},easeInOutCubic:function(a){return.5>a?4*Math.pow(a,3):1-Math.pow(2-2*a,3)/2},easeInOutElastic:function(a){return 0===a?0:1===a?1:.5>a?-(Math.pow(2,20*a-10)*Math.sin((20*a-11.125)*bb))/2:Math.pow(2,-20*a+10)*Math.sin((20*a-11.125)*bb)/2+1},easeInOutExpo:function(a){return 0==a?0:1==a?1:.5>a?Math.pow(2,
20*a-10)/2:(2-Math.pow(2,10-20*a))/2},easeInOutQuad:function(a){return.5>a?2*Math.pow(a,2):1-Math.pow(2-2*a,2)/2},easeInOutQuart:function(a){return.5>a?8*Math.pow(a,4):1-Math.pow(2-2*a,4)/2},easeInOutQuint:function(a){return.5>a?16*Math.pow(a,5):1-Math.pow(2-2*a,5)/2},easeInOutSine:function(a){return-(Math.cos(Math.PI*a)-1)/2},easeInQuad:function(a){return Math.pow(a,2)},easeInQuart:function(a){return Math.pow(a,4)},easeInQuint:function(a){return Math.pow(a,5)},easeInSine:function(a){return 1-Math.cos(a*
Math.PI/2)},easeOutBack:function(a){return 1+2.70158*Math.pow(a-1,3)+1.70158*Math.pow(a-1,2)}};X.easeOutBounce=cb;X.easeOutCirc=function(a){return Math.sqrt(1-Math.pow(a-1,2))};X.easeOutCubic=function(a){return 1-Math.pow(1-a,3)};X.easeOutElastic=function(a){return 0===a?0:1===a?1:Math.pow(2,-10*a)*Math.sin((10*a-.75)*ab)+1};X.easeOutExpo=function(a){return 1==a?1:1-Math.pow(2,-10*a)};X.easeOutQuad=function(a){return 1-Math.pow(1-a,2)};X.easeOutQuart=function(a){return 1-Math.pow(1-a,4)};
X.easeOutQuint=function(a){return 1-Math.pow(1-a,5)};X.easeOutSine=function(a){return Math.sin(a*Math.PI/2)};X.linear=db;function eb(a){function b(){const y=x.workingCanvas;for(let w=0;w<k.length;w++){var u=k[w];if(e)va(u,f,h);else{y.beginPath();y.moveTo(u[0][0],u[0][1]);for(let r=1;r<u.length;r++)y.lineTo(u[r][0],u[r][1]);y.closePath();t(y)}}}a=p({tension:1,unitValue:[1,1],unitLength:[1,1],range:[0,10,.1],discontinuities:[],smoothen:!0,closed:!1,draw:!0},a);var {paramFunction:c,range:d,smoothen:e,tension:f,discontinuities:g,closed:h}=a;Array.isArray(d)&&2==d.length&&d.push((d[1]-d[0])/20);var k=[[]],m=d[0];const n=
d[1],q=d[2];Array.isArray(g)||(g=[]);var B=1E-6;q<B&&(B=q/2);var A=0,L=0;const M=a.unitLength[0]/a.unitValue[0],D=a.unitLength[1]/a.unitValue[1];for(;m<=n+B;m+=q){if(-1<ba(m,g,B)){-1<ba(m+q,g,B)&&(A++,k.push([]));continue}let y=c(m);k[A].push([y[0]*M,y[1]*D]);L++}a.draw&&b();return{points:k,draw:b,animate:function(y=2E3){const u=x.workingCanvas;y/=L;for(let C=0;C<k.length;C++){var w=k[C],r=0;e?La(()=>{r>=w.length-2&&(Ma(),u.closePath(),u.doFill&&this.draw());var v=0<r?w[r-1]:h?w[w.length-2]:w[0],
z=w[r],F=w[r+1],V=r!=w.length-2?w[r+2]:h?w[1]:F;r++;v=ta(v,z,F,V);u.beginPath();u.moveTo(z[0],z[1]);u.bezierCurveTo(v[0],v[1],v[2],v[3],F[0],F[1]);u.stroke()},u.name,y):La(()=>{r>=w.length-2&&(Ma(),u.doFill&&this.draw());var v=w[r],z=w[++r];wa(v[0],v[1],z[0],z[1])},u.name,y)}}}}function fb(a){const b=a.paramFunction;a.paramFunction=c=>[c,b(c)];return eb(a)}
function gb(a){a=p({min:[-4,-4],max:[4,4],colors:{"-4":"#58C4DD",0:"#FFFF00",4:"#FC6255"},unitLength:[1,1],unitValue:[1,1],resolution:1,interpolator:db},a);const {min:b,max:c,colors:d,resolution:e,plotFunction:f,interpolator:g}=a,h=x.workingCanvas,k=a.unitLength[0]/a.unitValue[0],m=a.unitLength[1]/a.unitValue[1],n=a.unitValue[0]/k;a=a.unitValue[1]/m;const q=Object.keys(d).sort();for(var B=0;B<q.length;B++)d[q[B]]=H([d[q[B]]],!0);B=Math.min(...q);const A=Math.max(...q);h.save();for(var L=b[0];L<=c[0];L+=
e*n)for(var M=b[1];M<=c[1];M+=e*a){a:{var D=f(L,M);if(D>=A)D="rgba("+d[A].join()+")";else if(D<=B)D="rgba("+d[B].join()+")";else{for(var y=0;y<q.length-1;y++){let u=q[y],w=q[y+1],r=d[u],C=d[w],v=g((D-u)/(w-u));if(D>=u&&D<w){D="rgba("+[(C[0]-r[0])*v+r[0],(C[1]-r[1])*v+r[1],(C[2]-r[2])*v+r[2],(C[3]-r[3])*v+r[3]].join()+")";break a}}D=void 0}}h.fillStyle=D;h.fillRect(L*k,M*m,e,e)}h.restore();return{min:B,max:A,colors:d}}var hb={};hb.functionGraph=fb;hb.heatPlot=gb;hb.parametricFunction=eb;function ib(a,b,c={}){return{getParametricFunction:function(d){d.unitLength=a;d.unitValue=b;return eb(d)},getFunctionGraph:function(d){d.unitLength=a;d.unitValue=b;return fb(d)},getHeatPlot:function(d){d.unitLength=a;d.unitValue=b;d.min=[c.xAxis.range[0],c.yAxis.range[0]];d.max=[c.xAxis.range[1],c.yAxis.range[1]];return gb(d)}}}
function jb(a={}){var b=x.workingCanvas;a=p({xAxis:{length:b.width,textDirection:[-.3,-1],includeTick:!0,includeLeftTip:!0,includeRightTip:!0,excludeOriginTick:!0,includeNumbers:!1,range:[-10,10,1]},yAxis:{length:b.height,rotation:Math.PI/2,textRotation:-Math.PI/2,textDirection:[-.3,.5],includeTick:!0,includeLeftTip:!0,includeRightTip:!0,excludeOriginTick:!0,includeNumbers:!1,range:[-10,10,1]}},a);const {xAxis:c,yAxis:d}=a;a=a.center||[0,0];var e=c.range,f=d.range,g=c.length/2+e[0]/e[2]*(c.length/
((e[1]-e[0])/e[2]));f=d.length/2+f[0]/f[2]*(d.length/((f[1]-f[0])/f[2]));b.save();b.translate(a[0],a[1]);b.translate(g,0);e=kb(c);b.translate(-g,f);const h=kb(d);g=[e.unitLength,h.unitLength];const k=[e.unitValue,h.unitValue];b.translate(-a[0],-a[1]-f);b.restore();b={center:a,xAxis:e,yAxis:h,unitValue:k,unitLength:g};return Object.assign(b,ib(g,k,b))}
function kb(a={}){function b(){Ja(e);d.lineWidth=m;var G=M?1:0;const R=D?W.length-1:W.length;for(;G<R&&0>y.indexOf(W[0][G]);G++){const K=W[G];if(0===Number(K)&&w)continue;let da=B;-1<C.indexOf(K)&&(da*=r);wa(S*G,-da/2,S*G,da/2)}}function c(){const G=0<u.length?u:W;Ka(a.textColor);Pa(k);const R=-k/3*Math.cos(A)+L[1]*k;var K=M?1:0;const da=D?G.length-1:G.length;for(;K<da&&0>y.indexOf(G[K]);K++){const Ha=G[K].toFixed(z);if(0===Number(Ha)&&w)continue;const Ia=d.measureText(Ha).width,mb=-Ia/2*Math.cos(A)+
L[0]*k+k/2*Math.sin(A);N(S*K+mb,R-Ia*Math.sin(A));Da(A);Va(Ha,0,0);Da(-A);N(-(S*K+mb),-(R-Ia*Math.sin(A)))}}const d=x.workingCanvas;a=p({rotation:0,lineWidth:2,tipWidth:13,textSize:17,tipHeight:10,tickHeight:10,textRotation:0,length:d.width,longerTickMultiple:1.5,center:[0,0],range:[-5,5,1],numbersToInclude:[],numbersToExclude:[],textDirection:[-.3,-1],numbersWithElongatedTicks:[],includeTick:!0,includeNumbers:!0,includeLeftTip:!1,includeRightTip:!1,excludeOriginTick:!1,color:"#888888",textColor:"#FFFFFF"},
a);const {color:e,center:f,rotation:g,tipWidth:h,textSize:k,lineWidth:m,tipHeight:n,length:q,tickHeight:B,textRotation:A,textDirection:L,includeLeftTip:M,includeRightTip:D,numbersToExclude:y,numbersToInclude:u,excludeOriginTick:w,longerTickMultiple:r,numbersWithElongatedTicks:C}=a;var {range:v,decimalPlaces:z}=a;Array.isArray(v)&&2===v.length&&(v=[v[0],v[1],1]);isNaN(z)&&(z=(v[2].toString().split(".")[1]||[]).length||0);const F=v[0],V=v[1],Y=v[2],S=q/((V-F)/Y),W=aa(F,V,Y);Ea();N(f[0],f[1]);Da(g);
N(-q/2,0);a.includeTick&&b();a.includeNumbers&&c();N(q/2,0);(function(){Ja(e);d.lineWidth=m;Ka(e);const G=Math.atan(n/2);let R=-q/2,K=q/2;M&&(T(R+h,0,R,0,h,n),R+=h*Math.cos(G));D&&(T(K-h,0,K,0,h,n),K-=h*Math.cos(G));wa(R,0,K,0)})();Ga();return{range:v,center:f,tickList:W,unitValue:Y,unitLength:S}}var lb={};lb.axes=jb;lb.numberLine=kb;
lb.numberPlane=function(a={}){var b=x.workingCanvas;a=p({xAxis:{length:b.width,range:[-5,5,1],textDirection:[-.2,1.3],includeTick:!0,includeNumbers:!0,includeLeftTip:!1,includeRightTip:!1,excludeOriginTick:!0},yAxis:{length:b.height,textRotation:-Math.PI/2,range:[-5,5,1],textDirection:[1.1,.6],includeTick:!0,includeNumbers:!0,includeLeftTip:!1,includeRightTip:!1,excludeOriginTick:!0},grid:{subgrids:1,lineWidth:1,subgridLineWidth:.7,color:"#58C4DDa0",subgridLineColor:"#88888850"},center:[0,0]},a);
const {xAxis:c,yAxis:d,grid:e}=a,f=e.subgrids;a=a.center;b=c.range;var g=d.range;const h=(b[1]-b[0])/b[2],k=(g[1]-g[0])/g[2],m=c.length/h,n=d.length/k,q=b[0]/b[2]*m,B=b[1]/b[2]*m,A=g[0]/g[2]*n,L=g[1]/g[2]*n,M=c.length/2+q,D=d.length/2+A,y=[m/f,n/f];Ea();N(a[0]+M,a[1]);(function(){function w(F,V,Y,S,W,G){N(F,V);Ca(e.lineWidth);Ja(e.color);wa(Y,S,W,G)}function r(F,V,Y,S){Ca(e.subgridLineWidth);Ja(e.subgridLineColor);wa(F,V,Y,S)}N(q,0);var C=y[0];const v=y[1];for(var z=0;z<=h;z++){w(z*m,0,0,A,0,L);for(let F=
1;F<=f&&z<h;F++)r(F*C,A,F*C,L);N(-z*m)}N(-q,A);for(C=0;C<=k;C++){w(0,C*n,q,0,B,0);for(z=1;z<=f&&C<k;z++)r(q,z*v,B,z*v);N(0,-C*n)}N(0,-A)})();const u=jb({xAxis:c,yAxis:d});b=u.unitLength;g=u.unitValue;N(-(a[0]+M),-a[1]-D);Ga();a={center:a,unitValue:g,unitLength:b,xAxis:u.xAxis,yAxis:u.yAxis,subgridUnit:y};return Object.assign(a,ib(b,g,a))};function nb(a,b){for(;0!=b;){let c=b;b=a%b;a=c}return a}function ob(a,b){return a*b/nb(a,b)}var pb={};pb.gcd=nb;pb.gcdArray=function(){for(var a=0,b=0;b<arguments.length;++b)a=nb(arguments[b],a);return a};pb.lcm=ob;pb.lcmArray=function(){for(var a=1,b=0;b<arguments.length;++b)a=ob(arguments[b],a);return a};const {abs:qb,acos:rb,asin:sb,atan:tb,atan2:ub,cbrt:vb,ceil:wb,cos:xb,cosh:yb,exp:zb,floor:Ab,log:Bb,log2:Cb,log10:Db,max:Eb,min:Fb,pow:Gb,random:Hb,round:Ib,sign:Jb,sin:Kb,sqrt:Lb,tan:Mb,tanh:Nb}=Math;var Z={};Z.abs=qb;Z.acos=rb;Z.asin=sb;Z.atan=tb;Z.atan2=ub;Z.cbrt=vb;Z.ceil=wb;Z.cos=xb;Z.cosh=yb;Z.exp=zb;Z.floor=Ab;Z.log=Bb;Z.log10=Db;Z.log2=Cb;Z.max=Eb;Z.min=Fb;Z.pow=Gb;Z.random=Hb;Z.round=Ib;Z.sgn=Jb;Z.sin=Kb;Z.sqrt=Lb;Z.tan=Mb;Z.tanh=Nb;l(ea,window,!1);
l({ALPHABETIC:"alphabetic",BEVEL:"bevel",BOTTOM:"bottom",BUTT:"butt",CENTER:"center",CONDENSED:"condensed",END:"end",EXPANDED:"expanded",EXTRA_CONDENSED:"extra-condensed",EXTRA_EXPANDED:"extra-expanded",HANGING:"hanging",IDEOGRAPHIC:"ideographic",ITALIC:"italic",LARGE:"large",LARGER:"larger",LEFT:"left",MEDIUM:"medium",MIDDLE:"middle",MILTER:"milter",MITER:"miter",NORMAL:"normal",OBLIQUE:"oblique",RIGHT:"right",ROUND:"round",SEMI_CONDENSED:"semi-condensed",SEMI_EXPANDED:"semi-expanded",SMALL:"small",
SMALLER:"smaller",SQUARE:"square",START:"start",TOP:"top",ULTRA_CONDENSED:"ultra-condensed",ULTRA_EXPANDED:"ultra-expanded",XXX_LARGE:"xxx-large",XX_LARGE:"xx-large",XX_SMALL:"xx-small",X_LARGE:"x-large",X_SMALL:"x-small"},window,!1);l(E,window,!1);
l({HSLToRGB:function(a,b,c){a/=360;if(0===b)c=b=a=c;else{const d=.5>c?c*(1+b):c+b-c*b,e=2*c-d;c=ha(e,d,a+1/3);b=ha(e,d,a);a=ha(e,d,a-1/3)}return[255*c,255*b,255*a]},HSVToRGB:function(a,b,c){let d,e,f;const g=Math.floor(a/60),h=a/60-g;a=c*(1-b);const k=c*(1-h*b);b=c*(1-(1-h)*b);switch(g%6){case 0:d=c;e=b;f=a;break;case 1:d=k;e=c;f=a;break;case 2:d=a;e=c;f=b;break;case 3:d=a;e=k;f=c;break;case 4:d=b;e=a;f=c;break;case 5:d=c,e=a,f=k}return[255*d,255*e,255*f]},RGBToHSL:function(a,b,c){a/=255;b/=255;c/=
255;const d=Math.max(a,b,c);var e=Math.min(a,b,c);let f;const g=(d+e)/2;if(d===e)f=e=0;else{const h=d-e;e=.5<g?h/(2-d-e):h/(d+e);switch(d){case a:f=(b-c)/h+(b<c?6:0);break;case b:f=(c-a)/h+2;break;case c:f=(a-b)/h+4}f/=6}return[360*f,e,g]},RGBToHSV:function(a,b,c){a/=255;b/=255;c/=255;const d=Math.max(a,b,c),e=Math.min(a,b,c);let f;const g=d-e;if(d===e)f=0;else{switch(d){case a:f=(b-c)/g+(b<c?6:0);break;case b:f=(c-a)/g+2;break;case c:f=(a-b)/g+4}f/=6}return[360*f,0===d?0:g/d,d]}});l(ia);
l({linearGradient:function(a,b,c){a=x.workingCanvas.createLinearGradient(a[0],a[1],b[0],b[1]);if(Array.isArray(c)){b={};const d=1/c.length;for(let e=0;e<c.length;e++)b[d*e]=c[e];c=b}for(let d=Object.keys(c),e=0;e<d.length;e++)b=d[e],a.addColorStop(b,c[b]);return a}});l({randomColor:function(){let a="#";for(let b=0;3>b;b++){let c=ja(255).toString(16);c=1===c.length?0+c:c;a+=c}return a},randomDefinedColor:function(){return ea[I[ja(I.length-1)]]}});l(na);
l({drawImage:function(){x.workingCanvas.drawImage(...arguments)},pixel:function(a,b,c){const d=x.workingCanvas;d.fillStyle=void 0==c?d.fillStyle:H(c);d.fillRect(a,b,1,1)}});l(J);l(Q);l(Wa);l(Ya);l(lb);
l({arcBrace:function(a,b,c=100,d=Math.PI/2,e=0,f=10,g=f,h=10){const k=x.workingCanvas;f=c-f;g=c+g;k.save();k.translate(a,b);k.rotate(e);k.beginPath();k.moveTo(c,0);k.lineTo(f,0);k.arc(0,0,c,0,d);k.lineTo(f*Math.cos(d),f*Math.sin(d));k.moveTo(c*Math.cos(d/2),c*Math.sin(d/2));k.lineTo(g*Math.cos(d/2),g*Math.sin(d/2));k.stroke();k.closePath();k.restore();return[(g+h)*Math.cos(d/2+e)+a,(g+h)*Math.sin(d/2+e)+b]},curlyBrace:function(a,b,c,d,e=20,f=.6,g=.8){var h=a-c,k=b-d,m=Math.sqrt(h*h+k*k);h/=m;k/=m;
const n=a-.5*m*h+e*k*g;g=b-.5*m*k-e*h*g;x.workingCanvas.stroke(new Path2D(`M ${a} ${b} `+`Q ${a+f*e*k} ${b-f*e*h} ${a-.25*m*h+(1-f)*e*k} ${b-.25*m*k-(1-f)*e*h} `+`T ${n} ${g} `+`M ${c} ${d} `+`Q ${c+f*e*k} ${d-f*e*h} ${a-.75*m*h+(1-f)*e*k} ${b-.75*m*k-(1-f)*e*h} `+`T ${n} ${g}`));return[n,g]}});l(U);l(hb);l(pb);l(Z);l(sa);l(ka);l(X);l(E,window,!1);l(l,x);l(ea,x);}).call(this);
