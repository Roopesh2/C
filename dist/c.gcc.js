(function(){'use strict';var ca={BLACK:"#000000",BLUE_A:"#C7E9F1",BLUE_B:"#9CDCEB",BLUE_C:"#58C4DD",BLUE_D:"#29ABCA",BLUE_E:"#1C758A",DARKER_GRAY:"#222222",DARKER_GREY:"#222222",DARK_BLUE:"#236B8E",DARK_BROWN:"#8B4513",DARK_GRAY:"#444444",DARK_GREY:"#444444",GOLD_A:"#F7C797",GOLD_B:"#F9B775",GOLD_C:"#F0AC5F",GOLD_D:"#E1A158",GOLD_E:"#C78D46",GRAY:"#888888",GREEN_A:"#C9E2AE",GREEN_B:"#A6CF8C",GREEN_C:"#83C167",GREEN_D:"#77B05D",GREEN_E:"#699C52",GREEN_SCREEN:"#00FF00",GREY:"#888888",GREY_BROWN:"#736357",LIGHT_BROWN:"#CD853F",
LIGHT_GRAY:"#BBBBBB",LIGHT_GREY:"#BBBBBB",LIGHT_PINK:"#DC75CD",MAROON_A:"#ECABC1",MAROON_B:"#EC92AB",MAROON_C:"#C55F73",MAROON_D:"#A24D61",MAROON_E:"#94424F",ORANGE:"#FF862F",PINK:"#D147BD",PURPLE_A:"#CAA3E8",PURPLE_B:"#B189C6",PURPLE_C:"#9A72AC",PURPLE_D:"#715582",PURPLE_E:"#644172",RED_A:"#F7A1A3",RED_B:"#FF8080",RED_C:"#FC6255",RED_D:"#E65A4C",RED_E:"#CF5044",TEAL_A:"#ACEAD7",TEAL_B:"#76DDC0",TEAL_C:"#5CD0B3",TEAL_D:"#55C1A7",TEAL_E:"#49A88F",WHITE:"#FFFFFF",YELLOW_A:"#FFF1B6",YELLOW_B:"#FFEA94",
YELLOW_C:"#FFFF00",YELLOW_D:"#F4D345",YELLOW_E:"#E8C11C"};const da=180/Math.PI;var g={};g.DEG=Math.PI/180;g.E=2.718281828459045;g.LN10=2.302585092994046;g.LN2=.6931471805599453;g.PI=3.141592653589793;g.RAD=da;g.SQRT2=1.4142135623730951;g.TAU=6.283185307179586;const ea=Math.acos,fa=Math.asin,ha=Math.atan,ia=Math.atan2,ja=Math.cbrt,ma=Math.ceil,na=Math.cos,oa=Math.cosh,pa=Math.exp,qa=Math.floor,ra=Math.log,sa=Math.log2,ta=Math.log10,ua=Math.max,va=Math.min,wa=Math.pow,xa=Math.random,ya=Math.round,za=Math.sign,Ba=Math.sin,Ca=Math.sqrt,Da=Math.tan,Ea=Math.tanh;function Fa(a,b,c,e=10){return[Math.cos(c)*e+a,Math.sin(c)*e+b]}var k={};k.abs=Math.abs;k.acos=ea;k.asin=fa;k.atan=ha;k.atan2=ia;k.cbrt=ja;k.ceil=ma;k.cos=na;k.cosh=oa;
k.dist=function(a,b){return Math.sqrt(Math.pow(a[0]-b[0],2)+Math.pow(a[1]-b[1],2))};k.exp=pa;k.floor=qa;k.limit=function(a,b=0,c=1){return Math.min(Math.max(a,b),c)};k.log=ra;k.log10=ta;k.log2=sa;k.max=ua;k.min=va;k.pow=wa;k.random=xa;k.randomInt=function(a=10,b=0){return Math.round(Math.random()*(a-b)+b)};k.rotateAroundOrigin=function(a,b=10){return Fa(0,0,a,b)};k.rotateAroundPoint=Fa;k.round=ya;k.sgn=za;k.sigmoid=function(a){return 1/(1+Math.exp(-a))};k.sin=Ba;k.sqrt=Ca;k.tan=Da;k.tanh=Ea;Object.keys(ca);function Ga(a,b,c){0>c&&(c+=1);1<c&&--c;return c<1/6?a+6*(b-a)*c:.5>c?b:c<2/3?a+(b-a)*(2/3-c)*6:a};function n(a,b,c,e){b=b||window;c=void 0===c||null===c?window:c;b=b||window;e="function"===typeof e?e:function(d){console.warn('You changed value of "'+d+'" which C uses. Be careful')};for(let d=0,f=Object.keys(a);d<f.length;d++)c?function(h,l,m,v){Object.defineProperty(m,h,{configurable:!0,enumerable:!0,get:function(){return l},set:function(t){Object.defineProperty(m,h,{configurable:!0,enumerable:!0,value:t,writable:!0});v(h)}})}(f[d],a[f[d]],b,e):window[f[d]]=a[f[d]]};const Ha={width:200,height:200,dpr:Math.ceil(devicePixelRatio||1),doFill:!0,doStroke:!0,pathStarted:!1,fillStyle:"#ffffff",strokeStyle:"#000000",colorMode:"rgba",fontSize:"20px",fontFamily:"sans-serif",fontStyle:"normal",fontVariant:"normal",fontWeight:"normal",fontStretch:"normal",lineHeight:"1.2"};function Ia(a){for(let b=0,c=Object.keys(Ha);b<c.length;b++){const e=c[b];void 0===a[e]&&(a[e]=Ha[e])}}
function p(a,b=document.body,c={}){function e(){p.resizeCanvas(d,c);d.context=Object.assign(d.getContext("2d"),c);d.context.setTransform(c.dpr,0,0,c.dpr,0,0);p.workingCanvas=d.context}Ia(c);let d=p.makeCanvas(c);"string"===typeof b&&(b=document.querySelector(b));let f;if(void 0!=c.name){f=c.name;const h=document.getElementById(f);if(h instanceof HTMLElement){d=h;e();a();return}}else{for(;void 0!=document.getElementById("canvas-"+p.nameID);)p.nameID++;f="canvas-"+p.nameID;c.name=f}d.id=f;d.classList.add(f);
b.appendChild(d);e();p.canvasList[f]=d.context;a()}p.canvasList={};p.nameID=0;p.workingCanvas=void 0;p.getContainerWidth=function(a=document.body){a=window.getComputedStyle(a);return parseInt(a.width)-parseInt(a.paddingRight)-parseInt(a.paddingLeft)};p.resizeCanvas=function(a,b){const c=b.width,e=b.height;b=b.dpr;a.style.width=c+"px";a.style.height=e+"px";a.width=b*c;a.height=b*e};p.makeCanvas=function(a){const b=document.createElement("canvas");this.resizeCanvas(b,a);return b};
p.addExtension=function(a,b){n(a,window,!b);n(a,p.extensions,!b)};p.defineProperties=n;window.C=p;function Ja(a){let b,c,e,d=255,f="";"number"===typeof a[0]?(1===a.length?e=c=b=a[0]:2===a.length?(b=a[0],c=a[1],e=0):3===a.length?(b=a[0],c=a[1],e=a[2]):4===a.length&&(b=a[0],c=a[1],e=a[2],d=a[3]),a=p.workingCanvas.colorMode,"HSL"===a?f=`hsl(${b}, ${c}, ${e})`:"rgb"===a?f=`rgb(${b}, ${c}, ${e})`:"rgba"===a&&(f=`rgba(${b}, ${c}, ${e}, ${d})`)):f=a[0];return f}function x(a,b,c,e){const d=p.workingCanvas;d.beginPath();d.moveTo(a,b);d.lineTo(c,e);d.stroke();d.closePath()}
function Ka(){const a=Ja(arguments),b=p.workingCanvas;b.background=a;b.save();La();b.fillStyle=a;b.fillRect(0,0,b.width,b.height);b.restore()}function Ma(){p.workingCanvas.doStroke=!1}function B(a,b=0){p.workingCanvas.translate(a,b)}function C(a){p.workingCanvas.lineWidth=Number(a)}function E(a,b=a){p.workingCanvas.scale(a,b)}function F(a){const b=p.workingCanvas;b.rotate(a);b.netRotation=(b.netRotation+a)%Math.PI*2}function K(){p.workingCanvas.save()}function L(){p.workingCanvas.restore()}
function La(){const a=p.workingCanvas;a.setTransform(a.dpr,0,0,a.dpr,0,0)}function M(){const a=p.workingCanvas;0<arguments.length?(a.strokeStyle=Ja(arguments),a.doStroke=!0):a.stroke()}function R(){const a=p.workingCanvas;0!==arguments.length?(a.fillStyle=Ja(arguments),a.doFill=!0):a.fill()}function Na(a,b=0,c=0,e){const d=p.workingCanvas;d.yAxisInveted&&(E(1,-1),c*=-1);d.doFill?d.fillText(a,b,c,e):d.doStroke&&d.strokeText(a,b,c,e);d.yAxisInveted&&E(1,-1)}
function Oa(a,b,c,e){const d=p.workingCanvas;d.beginPath();d.rect(a,b,c,e);d.doFill&&d.fill();d.doStroke&&d.stroke();d.closePath()}function S(a=!1){const b=p.workingCanvas;if(a){const {fontStyle:c,fontVariant:e,fontWeight:d,fontStretch:f,fontSize:h,lineHeight:l,fontFamily:m}=b;return`${c} ${e} ${d} ${f} ${h}/${l} ${m}`}return b.font}function Pa(a){return p.workingCanvas.measureText(a)}function Qa(a){const b=p.workingCanvas;b.fontSize="number"===typeof a?a+"px":a;b.font=S(!0)}
function Ra(a="image/png"){return p.workingCanvas.canvas.toDataURL(a)}function Sa(a,b,c,e,d=0){e/=2*Math.sin(Math.PI/c);Ta(a,b,c,e,d)}function Ta(a,b,c,e,d=0){let f=0;const h=2*Math.PI/c,l=p.workingCanvas;d+=h/2;const m=[Math.cos(d)*e+a,Math.sin(d)*e+b];l.beginPath();for(l.moveTo(m[0],m[1]);f++<c;)l.lineTo(Math.cos(f*h+d)*e+a,Math.sin(f*h+d)*e+b);l.lineTo(m[0],m[1]);l.closePath();l.doFill&&l.fill();l.doStroke&&l.stroke()}
var T=[],Ua=0,Va=window.performance.now(),U={arc:function(a,b,c,e=Math.PI/2,d=0){const f=p.workingCanvas;f.pathStarted||f.beginPath();f.arc(a,b,c,d,d+e);f.pathStarted||(f.doStroke&&f.stroke(),f.closePath())},arcTo:function(a,b,c,e,d){const f=p.workingCanvas;f.pathStarted?f.arcTo(a,b,c,e,d):(f.beginPath(),f.arcTo(a,b,c,e,d),f.doStroke&&f.stroke(),f.doFill&&f.fill(),f.closePath())}};U.background=Ka;
U.bezierCurve=function(a,b,c,e,d,f){const h=p.workingCanvas,l=h.pathStarted;l||h.beginPath();h.bezierCurveTo(a,b,c,e,d,f);l||(h.doFill&&h.fill(),h.doStroke&&h.stroke(),h.closePath())};U.circle=function(a,b,c){const e=p.workingCanvas;e.beginPath();e.arc(a,b,c,0,2*Math.PI);e.doFill&&e.fill();e.doStroke&&e.stroke();e.closePath()};
U.circularSegment=function(a,b,c,e=Math.PI/2,d=0){const f=p.workingCanvas;f.pathStarted||f.beginPath();f.arc(a,b,c,d,d+e);f.pathStarted||(f.doFill&&f.fill(),f.doStroke&&f.stroke(),f.closePath())};U.clear=function(a,b,c,e){const d=p.workingCanvas;c=c||d.width;e=e||d.height;d.clearRect(a||0,b||0,c,e)};U.clearAll=function(){const a=p.workingCanvas,b=a.dpr;a.save();a.setTransform(b,0,0,b,0,0);a.clearRect(0,0,a.width,a.height);a.restore()};
U.ellipse=function(a,b,c,e,d=0,f=0,h=2*Math.PI,l=!1){const m=p.workingCanvas;m.beginPath();m.ellipse(a,b,c,e,d,f,h,l);m.doFill&&m.fill();m.doStroke&&m.stroke();m.closePath()};U.endPath=function(){const a=p.workingCanvas;a.closePath();a.pathStarted=!1};U.equiTriangle=function(a,b,c,e=0){Sa(a,b,3,c,e)};U.fill=R;U.fillText=function(a,b=0,c=0,e){const d=p.workingCanvas;d.yAxisInveted&&(E(1,-1),c*=-1);d.fillText(a,b,c,e);d.yAxisInveted&&E(1,-1)};
U.fontFamily=function(a){const b=p.workingCanvas;b.fontFamily=a;b.font=S(!0)};U.fontSize=Qa;U.fontStretch=function(a){const b=p.workingCanvas;b.fontStretch=a;b.font=S(!0)};U.fontStyle=function(a){const b=p.workingCanvas;b.fontStyle=a;b.font=S(!0)};U.fontVariant=function(a){const b=p.workingCanvas;b.fontVariant=a;b.font=S(!0)};U.fontWeight=function(a){const b=p.workingCanvas;b.fontWeight=a;b.font=S(!0)};U.getCanvasData=Ra;
U.getDrawConfigs=function(){const a=p.workingCanvas;return{background:a.background,stroke:a.strokeStyle,fill:a.fillStyle,strokeWidth:a.lineWidth,doStroke:a.doStroke,doFill:a.doFill}};U.getFPS=function(a=100){const b=window.performance.now(),c=b-Va;Va=b;T.push(c);Ua+=c;T.length>a&&(Ua-=T.shift());return T.length/(Ua/1E3)};U.getFill=function(){return p.workingCanvas.fillStyle};U.getFont=S;U.getStroke=function(){return p.workingCanvas.strokeStyle};U.getTransform=function(){return p.workingCanvas.getTransform()};
U.line=x;U.lineCap=function(a){p.workingCanvas.lineCap=a};U.lineHeight=function(a){const b=p.workingCanvas;b.lineHeight=a;b.font=S(!0)};U.lineJoin=function(a){p.workingCanvas.lineJoin=a};U.lineTo=function(a,b){p.workingCanvas.lineTo(a,b)};U.linearGradient=function(a,b,c){a=p.workingCanvas.createLinearGradient(a[0],a[1],b[0],b[1]);if(Array.isArray(c)){b={};const e=1/c.length;for(let d=0;d<c.length;d++)b[e*d]=c[d];c=b}for(let e=Object.keys(c),d=0;d<e.length;d++)b=e[d],a.addColorStop(b,c[b]);return a};
U.loop=function(a,b,c){function e(){d.currentLoop=window.requestAnimationFrame(e);a()}let d;d=b?p.canvasList[b]:p.workingCanvas;isNaN(c)?e():d.currentLoop=setInterval(function(){p.workingCanvas=d;a()},c)};U.measureText=Pa;U.moveTo=function(a,b){p.workingCanvas.moveTo(a,b)};U.noFill=function(){p.workingCanvas.doFill=!1};U.noLoop=function(a){let b=p.workingCanvas;a&&(b=p.canvasList[a]);clearInterval(b.currentLoop);window.cancelAnimationFrame(b.currentLoop)};U.noStroke=Ma;
U.permaBackground=function(){const a=p.workingCanvas.canvas.style;a.background="url('"+Ra()+"')";a.backgroundPosition="center";a.backgroundSize="cover"};U.point=function(a,b,c=1){const e=p.workingCanvas;e.arc(a,b,c/2,0,2*Math.PI);e.fill()};U.polygon=function(){const a=arguments;if(2<a.length){const b=p.workingCanvas,c=a[0];b.beginPath();b.moveTo(c[0],c[1]);for(let e=1;e<a.length;e++)b.lineTo(a[e][0],a[e][1]);b.lineTo(c[0],c[1]);b.doFill&&b.fill();b.doStroke&&b.stroke();b.closePath()}};
U.quad=function(a,b,c,e){const d=p.workingCanvas;d.beginPath();d.moveTo(a[0],a[1]);d.lineTo(b[0],b[1]);d.lineTo(c[0],c[1]);d.lineTo(e[0],e[1]);d.lineTo(a[0],a[1]);d.doFill&&d.fill();d.doStroke&&d.stroke();d.closePath()};U.rect=Oa;U.regularPolygon=Sa;U.regularPolygonWithRadius=Ta;U.rest=La;U.restore=L;U.rotate=F;U.save=K;U.saveCanvas=function(a="drawing",b="image/png"){b=Ra().replace(b,"image/octet-stream");const c=document.createElement("a");c.download=a+".png";c.href=b;c.click()};U.scale=E;
U.sector=function(a,b,c,e=Math.PI/2,d=0){const f=p.workingCanvas;f.beginPath();f.moveTo(a,b);f.arc(a,b,c,d,d+e);f.lineTo(a,b);f.doFill&&f.fill();f.doStroke&&f.stroke();f.closePath()};U.setImageSmoothing=function(a){p.workingCanvas.imageSmoothingEnabled=!!a};U.setLineDash=function(){p.workingCanvas.setLineDash([...arguments])};U.setTransform=function(a,b,c,e,d,f){const h=p.workingCanvas;a instanceof DOMMatrix?h.setTransform(a):h.setTransform(a,b,c,e,d,f);h.scale(h.dpr,h.dpr)};
U.square=function(a,b,c){Oa(a,b,c,c)};U.startPath=function(){const a=p.workingCanvas;a.beginPath();a.pathStarted=!0};U.stroke=M;U.strokeText=function(a,b=0,c=0,e){const d=p.workingCanvas;d.yAxisInveted&&(E(1,-1),c*=-1);d.strokeText(a,b,c,e);d.yAxisInveted&&E(1,-1)};U.strokeWidth=C;U.text=Na;U.transform=function(a,b,c,e,d,f){const h=p.workingCanvas;a instanceof DOMMatrix?h.transform(a):h.transform(a,b,c,e,d,f)};U.translate=B;
U.triangle=function(a,b,c){const e=p.workingCanvas;e.beginPath();e.moveTo(a[0],a[1]);e.lineTo(b[0],b[1]);e.lineTo(c[0],c[1]);e.lineTo(a[0],a[1]);e.doFill&&e.fill();e.doStroke&&e.stroke();e.closePath()};const Wa={CENTERX:function(){return p.workingCanvas.width/2},CENTERY:function(){return p.workingCanvas.height/2}};function Xa(a,b){Object.defineProperty(window,a,{configurable:!0,enumerable:!0,get:b,set:function(c){Object.defineProperty(window,a,{configurable:!0,enumerable:!0,value:c,writable:!0})}})}for(let a=Object.keys(Wa),b=0;b<a.length;b++){const c=a[b];Xa(c,Wa[c])}function Ya(a,b,c,e=!1){const d=[];if(e)for(;b>=a;b-=c)d.push(b);else for(;a<=b;a+=c)d.push(a);return d}
function V(a,b={}){for(let c=0,e=Object.keys(a);c<e.length;c++){const d=e[c],f=a[d][1];if("number"===f&&isNaN(b[d])||"array"===f&&!Array.isArray(b[d])||void 0===b[d]||null===b[d])b[d]=a[d][0]}return b}function Za(a,b,c,e,d=10,f=.7){const h=Math.atan2(e-b,c-a);Y(c,e,d,h,f);K();f=Math.atan(f/2);x(a,b,c-Math.cos(h)*d*Math.cos(f),e-Math.sin(h)*d*Math.cos(f));L()}
function $a(a={}){var b=p.workingCanvas,c={length:[b.height,"number"],rotation:[Math.PI/2,"number"],textRotation:[-Math.PI/2,"number"],includeNumbers:[!1],includeTick:[!1],includeLeftTip:[!0],includeRightTip:[!0]};b=V({length:[b.width,"number"],includeNumbers:[!1],includeTick:[!1],includeLeftTip:[!0],includeRightTip:[!0],textDirection:[-.3,-1]},a.xAxis);c=V(c,a.yAxis);a=a.center||[0,0];var e=b.range||[-8,8,1],d=c.range||[-8,8,1];e=b.length/2+e[0]/e[2]*(b.length/((e[1]-e[0])/e[2]));d=c.length/2+d[0]/
d[2]*(c.length/((d[1]-d[0])/d[2]));K();B(a[0],a[1]);B(e,0);b=ab(b);B(-e,d);c=ab(c);e=[b.unitLength,c.unitLength];B(-a[0],-a[1]-d);L();return{unit:e,xAxis:b,yAxis:c}}function Y(a,b,c=10,e=0,d=2){const f=p.workingCanvas;d=Math.atan(d/2);f.save();f.beginPath();f.moveTo(a,b);f.lineTo(a-c*Math.cos(e-d),b-c*Math.sin(e-d));f.lineTo(a-c*Math.cos(e+d),b-c*Math.sin(e+d));f.lineTo(a,b);f.doFill?f.fill():f.stroke();f.closePath();f.restore()}
function ab(a={}){function b(){M(D);C(W);var u=v?1:0;const H=t?G.length-1:G.length;for(;u<H&&0>h.indexOf(G[0][u]);u++){const w=G[u];if(0===Number(w)&&N)continue;let X=aa;-1<m.indexOf(w)&&(X*=ba);x(J*u,-X/2,J*u,X/2)}}function c(){const u=0<l.length?l:G;R(a.textColor);Qa(I);const H=-I/3*Math.cos(q)+z[1]*I;var w=v?1:0;const X=t?u.length-1:u.length;for(;w<X&&0>h.indexOf(u[w]);w++){const ka=u[w].toFixed(y);if(0===Number(ka)&&N)continue;const la=Pa(ka).width,Aa=-la/2*Math.cos(q)+z[0]*I+I/2*Math.sin(q);
B(J*w+Aa,H-la*Math.sin(q));F(q);Na(ka,0,0);F(-q);B(-(J*w+Aa),-(H-la*Math.sin(q)))}}V({length:[p.workingCanvas.width,"number"],rotation:[0],center:[[0,0]],range:[[-8,8,1],"array"],numbersToExclude:[[]],numbersToInclude:[[]],numbersWithElongatedTicks:[[]],includeLeftTip:[!1],includeRightTip:[!1],includeNumbers:[!0],tipWidth:[20,"number"],tipSizeRatio:[1,"number"],color:["#888888"],lineWidth:[3,"number"],includeTick:[!0],excludeOriginTick:[!1],longerTickMultiple:[1.5,"number"],tickHeight:[15,"number"],
textDirection:[[-.3,-1]],textColor:["#FFFFFF"],textSize:[17,"number"],textRotation:[0]},a);const e=a.length,d=a.rotation,f=a.center,h=a.numbersToExclude,l=a.numbersToInclude,m=a.numbersWithElongatedTicks,v=a.includeLeftTip,t=a.includeRightTip,A=a.tipWidth,O=a.tipSizeRatio,D=a.color,W=a.lineWidth,N=a.excludeOriginTick,ba=a.longerTickMultiple,aa=a.tickHeight,z=a.textDirection,I=a.textSize,q=a.textRotation;let y=a.decimalPlaces;var r=a.range;Array.isArray(r)&&2===r.length&&(r=[r[0],r[1],1]);isNaN(y)&&
(y=(r[2].toString().split(".")[1]||[]).length||0);const P=r[0],Q=r[1];r=r[2];const J=e/((Q-P)/r),G=Ya(P,Q,r);K();B(f[0],f[1]);F(d);B(-e/2,0);a.includeTick&&b();a.includeNumbers&&c();B(e/2,0);(function(){M(D);C(W);R(D);const u=Math.atan(O/2);let H=-e/2,w=e/2;v&&(Y(H,0,A,Math.PI,O),H+=A*Math.cos(u));t&&(Y(w,0,A,0,O),w-=A*Math.cos(u));x(H,0,w,0)})();F(-d);B(-f[0],-f[1]);L();return{unitLength:J,tickList:G}}var Z={};Z.arrow=Za;Z.arrowHead=Y;Z.axes=$a;
Z.clear=function(a,b,c,e){const d=p.workingCanvas;a=a||-d.width/2;b=b||-d.height/2;c=c||2*d.width;e=e||2*d.height;d.clearRect(a,b,c,e)};Z.doubleArrow=function(a,b,c,e,d=10,f=.6,h=0){var l=Math.atan(f/2);const m=Math.atan2(e-b,c-a),v=Math.cos(m)*d*Math.cos(l);l=Math.sin(m)*d*Math.cos(l);const t=Math.sin(m)*h;h*=Math.cos(m);Y(a+h,b+t,d,Math.PI+m,f);Za(a+v,b+l,c-h,e-t,d,f)};
Z.initCenteredCanvas=function(){const a=p.workingCanvas;Ka(0);R("#FFFFFF");M("#FFFFFF");Ma();Qa(20);a.translate(CENTERX,CENTERY);a.scale(1,-1);a.lineWidth=2;a.yAxisInveted=!0};Z.numberLine=ab;
Z.numberPlane=function(a={}){var b=p.workingCanvas,c={textDirection:[[0,.8]],length:[b.height,"number"],textRotation:[-Math.PI/2,"number"],excludeOriginTick:[!0],includeLeftTip:[!1],includeRightTip:[!1],includeNumbers:[!0],includeTick:[!0]};b=V({textDirection:[[0,-1.1]],length:[b.width,"number"],excludeOriginTick:[!0],includeLeftTip:[!1],includeRightTip:[!1],includeNumbers:[!0],includeTick:[!0]},a.xAxis);c=V(c,a.yAxis);const e=V({lineWidth:[1,"number"],color:["#58C4DDa0"],subgrids:[1,"number"],subgridLineColor:["#88888850"],
subgridLineWidth:[.7,"number"]},a.grid),d=e.subgrids;a=a.center||[0,0];var f=b.range||[-8,8,1],h=c.range||[-8,8,1];const l=(f[1]-f[0])/f[2],m=(h[1]-h[0])/h[2],v=b.length/l,t=c.length/m,A=f[0]/f[2]*v,O=f[1]/f[2]*v,D=h[0]/h[2]*t,W=h[1]/h[2]*t;f=b.length/2+A;h=c.length/2+D;const N=[v/d,t/d];K();B(a[0]+f,a[1]);(function(){function ba(y,r,P,Q,J,G){B(y,r);C(e.lineWidth);M(e.color);x(P,Q,J,G)}function aa(y,r,P,Q){C(e.subgridLineWidth);M(e.subgridLineColor);x(y,r,P,Q)}B(A,0);var z=N[0];const I=N[1];for(var q=
0;q<=l;q++){ba(q*v,0,0,D,0,W);for(let y=1;y<=d&&q<l;y++)aa(y*z,D,y*z,W);B(-q*v)}B(-A,D);for(z=0;z<=m;z++){ba(0,z*t,A,0,O,0);for(q=1;q<=d&&z<m;q++)aa(A,q*I,O,q*I);B(0,-z*t)}B(0,-D)})();b=$a({xAxis:b,yAxis:c});c=b.unit;B(-(a[0]+f),-a[1]-h);L();return{unit:c,subgridUnit:N,xAxis:b.xAxis,yAxis:b.yAxis}};Z.scale=E;n(g,window,!1);n(k);n(Object.assign({TRANSPARENT:"rgba(0,0,0,0)"},ca),window,!1);n({BEVEL:"bevel",BUTT:"butt",MILTER:"milter",MITER:"miter",ROUND:"round",SQUARE:"square"},window,!1);n({COLORLIST:ca},window,!1);n(n,p);
n({RGBToHSL:function(a,b,c){a/=255;b/=255;c/=255;const e=Math.max(a,b,c);var d=Math.min(a,b,c);let f;const h=(e+d)/2;if(e===d)f=d=0;else{const l=e-d;d=.5<h?l/(2-e-d):l/(e+d);switch(e){case a:f=(b-c)/l+(b<c?6:0);break;case b:f=(c-a)/l+2;break;case c:f=(a-b)/l+4}f/=6}return[360*f,d,h]},HSLToRGB:function(a,b,c){a/=360;if(0===b)c=b=a=c;else{const e=.5>c?c*(1+b):c+b-c*b,d=2*c-e;c=Ga(d,e,a+1/3);b=Ga(d,e,a);a=Ga(d,e,a-1/3)}return[255*c,255*b,255*a]},RGBToHSV:function(a,b,c){a/=255;b/=255;c/=255;const e=
Math.max(a,b,c),d=Math.min(a,b,c);let f;const h=e-d;if(e===d)f=0;else{switch(e){case a:f=(b-c)/h+(b<c?6:0);break;case b:f=(c-a)/h+2;break;case c:f=(a-b)/h+4}f/=6}return[360*f,0===e?0:h/e,e]},HSVToRGB:function(a,b,c){let e,d,f;const h=Math.floor(a/60),l=a/60-h;a=c*(1-b);const m=c*(1-l*b);b=c*(1-(1-l)*b);switch(h%6){case 0:e=c;d=b;f=a;break;case 1:e=m;d=c;f=a;break;case 2:e=a;d=c;f=b;break;case 3:e=a;d=m;f=c;break;case 4:e=b;d=a;f=c;break;case 5:e=c,d=a,f=m}return[255*e,255*d,255*f]}});n(U);p.addExtension(Z);}).call(this);
