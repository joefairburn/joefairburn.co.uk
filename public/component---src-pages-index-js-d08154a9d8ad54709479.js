(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"/8Fb":function(e,t,n){var r=n("XKFU"),a=n("UExd")(!0);r(r.S,"Object",{entries:function(e){return a(e)}})},"8o2o":function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,"a",(function(){return r}))},DW2E:function(e,t,n){var r=n("0/R4"),a=n("Z6vF").onFreeze;n("Xtr8")("freeze",(function(e){return function(t){return e&&r(t)?e(a(t)):t}}))},GXXw:function(e,t,n){e.exports=n.p+"static/forgetmenot-726dd137ed979846a216623650cb4061.png"},INYr:function(e,t,n){"use strict";var r=n("XKFU"),a=n("CkkT")(6),i="findIndex",o=!0;i in[]&&Array(1)[i]((function(){o=!1})),r(r.P+r.F*o,"Array",{findIndex:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),n("nGyu")(i)},Nr18:function(e,t,n){"use strict";var r=n("S/j/"),a=n("d/Gc"),i=n("ne8i");e.exports=function(e){for(var t=r(this),n=i(t.length),o=arguments.length,u=a(o>1?arguments[1]:void 0,n),l=o>2?arguments[2]:void 0,c=void 0===l?n:a(l,n);c>u;)t[u++]=e;return t}},RXBc:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r);n("Tze0"),n("SRfc"),n("pIFo"),n("Oyvg"),n("INYr"),n("dRSK"),n("0l/t"),n("HEwt"),n("bHtr"),n("dZ+Y"),n("9VmF"),n("Vd3H"),n("/8Fb"),n("VRzm");function i(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n("bWfx"),n("f3/d"),n("rE2o"),n("ioFf"),n("DW2E"),n("eM6i"),n("hhXQ"),n("8+KV");function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?u(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}n("V+eJ");function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t,n){return t&&h(e.prototype,t),n&&h(e,n),e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n("DNiP"),n("RW0V"),n("9AAn"),n("rGqo"),n("yt8O"),n("XfO3"),n("T39b"),n("a1Th"),n("h7Nl"),n("Btvt"),n("LK8F");var g=n("k1TG"),v=n("8o2o"),y={arr:Array.isArray,obj:function(e){return"[object Object]"===Object.prototype.toString.call(e)},fun:function(e){return"function"==typeof e},str:function(e){return"string"==typeof e},num:function(e){return"number"==typeof e},und:function(e){return void 0===e},nul:function(e){return null===e},set:function(e){return e instanceof Set},map:function(e){return e instanceof Map},equ:function(e,t){if(typeof e!=typeof t)return!1;if(y.str(e)||y.num(e))return e===t;if(y.obj(e)&&y.obj(t)&&Object.keys(e).length+Object.keys(t).length===0)return!0;var n;for(n in e)if(!(n in t))return!1;for(n in t)if(e[n]!==t[n])return!1;return!y.und(n)||e===t}};function b(){var e=Object(r.useState)(!1)[1];return Object(r.useCallback)((function(){return e((function(e){return!e}))}),[])}function w(e,t){return y.und(e)||y.nul(e)?t:e}function E(e){return y.und(e)?[]:y.arr(e)?e:[e]}function k(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return y.fun(e)?e.apply(void 0,n):e}function j(e){var t=function(e){return e.to,e.from,e.config,e.onStart,e.onRest,e.onFrame,e.children,e.reset,e.reverse,e.force,e.immediate,e.delay,e.attach,e.destroyed,e.interpolateTo,e.ref,e.lazy,Object(v.a)(e,["to","from","config","onStart","onRest","onFrame","children","reset","reverse","force","immediate","delay","attach","destroyed","interpolateTo","ref","lazy"])}(e);if(y.und(t))return Object(g.a)({to:t},e);var n=Object.keys(e).reduce((function(n,r){return y.und(t[r])?Object(g.a)({},n,p({},r,e[r])):n}),{});return Object(g.a)({to:t},n)}var O,x,V=function(){function e(){f(this,e),this.payload=void 0,this.children=[]}return m(e,[{key:"getAnimatedValue",value:function(){return this.getValue()}},{key:"getPayload",value:function(){return this.payload||this}},{key:"attach",value:function(){}},{key:"detach",value:function(){}},{key:"getChildren",value:function(){return this.children}},{key:"addChild",value:function(e){0===this.children.length&&this.attach(),this.children.push(e)}},{key:"removeChild",value:function(e){var t=this.children.indexOf(e);this.children.splice(t,1),0===this.children.length&&this.detach()}}]),e}(),T=function(e){function t(){var e;return f(this,t),(e=l(this,c(t).apply(this,arguments))).payload=[],e.attach=function(){return e.payload.forEach((function(t){return t instanceof V&&t.addChild(u(e))}))},e.detach=function(){return e.payload.forEach((function(t){return t instanceof V&&t.removeChild(u(e))}))},e}return d(t,e),t}(V),N=function(e){function t(){var e;return f(this,t),(e=l(this,c(t).apply(this,arguments))).payload={},e.attach=function(){return Object.values(e.payload).forEach((function(t){return t instanceof V&&t.addChild(u(e))}))},e.detach=function(){return Object.values(e.payload).forEach((function(t){return t instanceof V&&t.removeChild(u(e))}))},e}return d(t,e),m(t,[{key:"getValue",value:function(e){void 0===e&&(e=!1);var t={};for(var n in this.payload){var r=this.payload[n];(!e||r instanceof V)&&(t[n]=r instanceof V?r[e?"getAnimatedValue":"getValue"]():r)}return t}},{key:"getAnimatedValue",value:function(){return this.getValue(!0)}}]),t}(V);function A(e,t){O={fn:e,transform:t}}function S(e){x=e}var C,F=function(e){return"undefined"!=typeof window?window.requestAnimationFrame(e):-1};function P(e){C=e}var q=function(){return Date.now()};function R(e){e}var I,M,z=function(e){return e.current};function G(e){I=e}var H=function(e){function t(e,n){var r;return f(this,t),(r=l(this,c(t).call(this))).update=void 0,r.payload=e.style?Object(g.a)({},e,{style:I(e.style)}):e,r.update=n,r.attach(),r}return d(t,e),t}(N),X=!1,L=new Set,U=function e(){if(!X)return!1;var t=q(),n=!0,r=!1,a=void 0;try{for(var i,o=L[Symbol.iterator]();!(n=(i=o.next()).done);n=!0){for(var u=i.value,l=!1,c=0;c<u.configs.length;c++){for(var s=u.configs[c],d=void 0,f=void 0,h=0;h<s.animatedValues.length;h++){var m=s.animatedValues[h];if(!m.done){var p=s.fromValues[h],g=s.toValues[h],v=m.lastPosition,y=g instanceof V,b=Array.isArray(s.initialVelocity)?s.initialVelocity[h]:s.initialVelocity;if(y&&(g=g.getValue()),s.immediate)m.setValue(g),m.done=!0;else if("string"!=typeof p&&"string"!=typeof g){if(void 0!==s.duration)v=p+s.easing((t-m.startTime)/s.duration)*(g-p),d=t>=m.startTime+s.duration;else if(s.decay)v=p+b/(1-.998)*(1-Math.exp(-(1-.998)*(t-m.startTime))),(d=Math.abs(m.lastPosition-v)<.1)&&(g=v);else{f=void 0!==m.lastTime?m.lastTime:t,b=void 0!==m.lastVelocity?m.lastVelocity:s.initialVelocity,t>f+64&&(f=t);for(var w=Math.floor(t-f),E=0;E<w;++E){v+=1*(b+=1*((-s.tension*(v-g)+-s.friction*b)/s.mass)/1e3)/1e3}var k=!(!s.clamp||0===s.tension)&&(p<g?v>g:v<g),j=Math.abs(b)<=s.precision,O=0===s.tension||Math.abs(g-v)<=s.precision;d=k||j&&O,m.lastVelocity=b,m.lastTime=t}y&&!s.toValues[h].done&&(d=!1),d?(m.value!==g&&(v=g),m.done=!0):l=!0,m.setValue(v),m.lastPosition=v}else m.setValue(g),m.done=!0}}u.props.onFrame&&(u.values[s.name]=s.interpolation.getValue())}u.props.onFrame&&u.props.onFrame(u.values),l||(L.delete(u),u.stop(!0))}}catch(x){r=!0,a=x}finally{try{n||null==o.return||o.return()}finally{if(r)throw a}}return L.size?M?M():F(e):X=!1,X};function W(e,t,n){if("function"==typeof e)return e;if(Array.isArray(e))return W({range:e,output:t,extrapolate:n});if(C&&"string"==typeof e.output[0])return C(e);var r=e,a=r.output,i=r.range||[0,1],o=r.extrapolateLeft||r.extrapolate||"extend",u=r.extrapolateRight||r.extrapolate||"extend",l=r.easing||function(e){return e};return function(e){var t=function(e,t){for(var n=1;n<t.length-1&&!(t[n]>=e);++n);return n-1}(e,i);return function(e,t,n,r,a,i,o,u,l){var c=l?l(e):e;if(c<t){if("identity"===o)return c;"clamp"===o&&(c=t)}if(c>n){if("identity"===u)return c;"clamp"===u&&(c=n)}if(r===a)return r;if(t===n)return e<=t?r:a;t===-1/0?c=-c:n===1/0?c-=t:c=(c-t)/(n-t);c=i(c),r===-1/0?c=-c:a===1/0?c+=r:c=c*(a-r)+r;return c}(e,i[t],i[t+1],a[t],a[t+1],l,o,u,r.map)}}var D=function(e){function t(e,n,r,a){var i;return f(this,t),(i=l(this,c(t).call(this))).calc=void 0,i.payload=e instanceof T&&!(e instanceof t)?e.getPayload():Array.isArray(e)?e:[e],i.calc=W(n,r,a),i}return d(t,e),m(t,[{key:"getValue",value:function(){return this.calc.apply(this,i(this.payload.map((function(e){return e.getValue()}))))}},{key:"updateConfig",value:function(e,t,n){this.calc=W(e,t,n)}},{key:"interpolate",value:function(e,n,r){return new t(this,e,n,r)}}]),t}(T);var Q=function(e){function t(e){var n,r;return f(this,t),n=l(this,c(t).call(this)),r=u(n),n.animatedStyles=new Set,n.value=void 0,n.startPosition=void 0,n.lastPosition=void 0,n.lastVelocity=void 0,n.startTime=void 0,n.lastTime=void 0,n.done=!1,n.setValue=function(e,t){void 0===t&&(t=!0),r.value=e,t&&r.flush()},n.value=e,n.startPosition=e,n.lastPosition=e,n}return d(t,e),m(t,[{key:"flush",value:function(){0===this.animatedStyles.size&&function e(t,n){"update"in t?n.add(t):t.getChildren().forEach((function(t){return e(t,n)}))}(this,this.animatedStyles),this.animatedStyles.forEach((function(e){return e.update()}))}},{key:"clearStyles",value:function(){this.animatedStyles.clear()}},{key:"getValue",value:function(){return this.value}},{key:"interpolate",value:function(e,t,n){return new D(this,e,t,n)}}]),t}(V),J=function(e){function t(e){var n;return f(this,t),(n=l(this,c(t).call(this))).payload=e.map((function(e){return new Q(e)})),n}return d(t,e),m(t,[{key:"setValue",value:function(e,t){var n=this;void 0===t&&(t=!0),Array.isArray(e)?e.length===this.payload.length&&e.forEach((function(e,r){return n.payload[r].setValue(e,t)})):this.payload.forEach((function(n){return n.setValue(e,t)}))}},{key:"getValue",value:function(){return this.payload.map((function(e){return e.getValue()}))}},{key:"interpolate",value:function(e,t){return new D(this,e,t)}}]),t}(T),_=0,K=function(){function e(){var t=this;f(this,e),this.id=void 0,this.idle=!0,this.hasChanged=!1,this.guid=0,this.local=0,this.props={},this.merged={},this.animations={},this.interpolations={},this.values={},this.configs=[],this.listeners=[],this.queue=[],this.localQueue=void 0,this.getValues=function(){return t.interpolations},this.id=_++}return m(e,[{key:"update",value:function(e){if(!e)return this;var t=j(e),n=t.delay,r=void 0===n?0:n,a=t.to,i=Object(v.a)(t,["delay","to"]);if(y.arr(a)||y.fun(a))this.queue.push(Object(g.a)({},i,{delay:r,to:a}));else if(a){var o={};Object.entries(a).forEach((function(e){var t=e[0],n=e[1],a=Object(g.a)({to:p({},t,n),delay:k(r,t)},i),u=o[a.delay]&&o[a.delay].to;o[a.delay]=Object(g.a)({},o[a.delay],a,{to:Object(g.a)({},u,a.to)})})),this.queue=Object.values(o)}return this.queue=this.queue.sort((function(e,t){return e.delay-t.delay})),this.diff(i),this}},{key:"start",value:function(e){var t,n=this;if(this.queue.length){this.idle=!1,this.localQueue&&this.localQueue.forEach((function(e){var t=e.from,r=void 0===t?{}:t,a=e.to,i=void 0===a?{}:a;y.obj(r)&&(n.merged=Object(g.a)({},r,n.merged)),y.obj(i)&&(n.merged=Object(g.a)({},n.merged,i))}));var r=this.local=++this.guid,a=this.localQueue=this.queue;this.queue=[],a.forEach((function(t,i){var o=t.delay,u=Object(v.a)(t,["delay"]),l=function(t){i===a.length-1&&r===n.guid&&t&&(n.idle=!0,n.props.onRest&&n.props.onRest(n.merged)),e&&e()},c=y.arr(u.to)||y.fun(u.to);o?setTimeout((function(){r===n.guid&&(c?n.runAsync(u,l):n.diff(u).start(l))}),o):c?n.runAsync(u,l):n.diff(u).start(l)}))}else y.fun(e)&&this.listeners.push(e),this.props.onStart&&this.props.onStart(),t=this,L.has(t)||L.add(t),X||(X=!0,F(M||U));return this}},{key:"stop",value:function(e){return this.listeners.forEach((function(t){return t(e)})),this.listeners=[],this}},{key:"pause",value:function(e){var t;return this.stop(!0),e&&(t=this,L.has(t)&&L.delete(t)),this}},{key:"runAsync",value:function(e,t){var n=this,r=this,a=(e.delay,Object(v.a)(e,["delay"])),i=this.local,o=Promise.resolve(void 0);if(y.arr(a.to))for(var u=function(e){var t=e,r=Object(g.a)({},a,j(a.to[t]));y.arr(r.config)&&(r.config=r.config[t]),o=o.then((function(){if(i===n.guid)return new Promise((function(e){return n.diff(r).start(e)}))}))},l=0;l<a.to.length;l++)u(l);else if(y.fun(a.to)){var c,s=0;o=o.then((function(){return a.to((function(e){var t=Object(g.a)({},a,j(e));if(y.arr(t.config)&&(t.config=t.config[s]),s++,i===n.guid)return c=new Promise((function(e){return n.diff(t).start(e)}))}),(function(e){return void 0===e&&(e=!0),r.stop(e)})).then((function(){return c}))}))}o.then(t)}},{key:"diff",value:function(e){var t=this;this.props=Object(g.a)({},this.props,e);var n=this.props,r=n.from,a=void 0===r?{}:r,i=n.to,o=void 0===i?{}:i,u=n.config,l=void 0===u?{}:u,c=n.reverse,s=n.attach,d=n.reset,f=n.immediate;if(c){var h=[o,a];a=h[0],o=h[1]}this.merged=Object(g.a)({},a,this.merged,o),this.hasChanged=!1;var m=s&&s(this);if(this.animations=Object.entries(this.merged).reduce((function(e,n){var r=n[0],i=n[1],o=e[r]||{},u=y.num(i),c=y.str(i)&&!i.startsWith("#")&&!/\d/.test(i)&&!x[i],s=y.arr(i),h=!u&&!s&&!c,v=y.und(a[r])?i:a[r],b=u||s?i:c?i:1,j=k(l,r);m&&(b=m.animations[r].parent);var O,V=o.parent,T=o.interpolation,N=E(m?b.getPayload():b),A=i;h&&(A=C({range:[0,1],output:[i,i]})(1));var S=T&&T.getValue(),F=!y.und(V)&&o.animatedValues.some((function(e){return!e.done})),P=!y.equ(A,S),R=!y.equ(A,o.previous),I=!y.equ(j,o.config);if(d||R&&P||I){if(u||c)V=T=o.parent||new Q(v);else if(s)V=T=o.parent||new J(v);else if(h){var M=o.interpolation&&o.interpolation.calc(o.parent.value);M=void 0===M||d?v:M,o.parent?(V=o.parent).setValue(0,!1):V=new Q(0);var z={output:[M,i]};o.interpolation?(T=o.interpolation,o.interpolation.updateConfig(z)):T=V.interpolate(z)}return N=E(m?b.getPayload():b),O=E(V.getPayload()),d&&!h&&V.setValue(v,!1),t.hasChanged=!0,O.forEach((function(e){e.startPosition=e.value,e.lastPosition=e.value,e.lastVelocity=F?e.lastVelocity:void 0,e.lastTime=F?e.lastTime:void 0,e.startTime=q(),e.done=!1,e.animatedStyles.clear()})),k(f,r)&&V.setValue(h?b:i,!1),Object(g.a)({},e,p({},r,Object(g.a)({},o,{name:r,parent:V,interpolation:T,animatedValues:O,toValues:N,previous:A,config:j,fromValues:E(V.getValue()),immediate:k(f,r),initialVelocity:w(j.velocity,0),clamp:w(j.clamp,!1),precision:w(j.precision,.01),tension:w(j.tension,170),friction:w(j.friction,26),mass:w(j.mass,1),duration:j.duration,easing:w(j.easing,(function(e){return e})),decay:j.decay})))}return P?e:(h&&(V.setValue(1,!1),T.updateConfig({output:[A,A]})),V.done=!0,t.hasChanged=!0,Object(g.a)({},e,p({},r,Object(g.a)({},e[r],{previous:A}))))}),this.animations),this.hasChanged)for(var v in this.configs=Object.values(this.animations),this.values={},this.interpolations={},this.animations)this.interpolations[v]=this.animations[v].interpolation,this.values[v]=this.animations[v].interpolation.getValue();return this}},{key:"destroy",value:function(){this.stop(),this.props={},this.merged={},this.animations={},this.interpolations={},this.values={},this.configs=[],this.local=0}}]),e}(),Y=function(e,t){var n=Object(r.useRef)(!1),a=Object(r.useRef)(),i=y.fun(t),o=Object(r.useMemo)((function(){var n;return a.current&&(a.current.map((function(e){return e.destroy()})),a.current=void 0),[new Array(e).fill().map((function(e,r){var a=new K,o=i?k(t,r,a):t[r];return 0===r&&(n=o.ref),a.update(o),n||a.start(),a})),n]}),[e]),u=o[0],l=o[1];a.current=u;Object(r.useImperativeHandle)(l,(function(){return{start:function(){return Promise.all(a.current.map((function(e){return new Promise((function(t){return e.start(t)}))})))},stop:function(e){return a.current.forEach((function(t){return t.stop(e)}))},get controllers(){return a.current}}}));var c=Object(r.useMemo)((function(){return function(e){return a.current.map((function(t,n){t.update(i?k(e,n,t):e[n]),l||t.start()}))}}),[e]);Object(r.useEffect)((function(){n.current?i||c(t):l||a.current.forEach((function(e){return e.start()}))})),Object(r.useEffect)((function(){return n.current=!0,function(){return a.current.forEach((function(e){return e.destroy()}))}}),[]);var s=a.current.map((function(e){return e.getValues()}));return i?[s,c,function(e){return a.current.forEach((function(t){return t.pause(e)}))}]:s},$=function(e){var t=y.fun(e),n=Y(1,t?e:[e]),r=n[0],a=n[1],i=n[2];return t?[r[0],a,i]:r};var B=function(e){function t(e){var n;return f(this,t),void 0===e&&(e={}),n=l(this,c(t).call(this)),!e.transform||e.transform instanceof V||(e=O.transform(e)),n.payload=e,n}return d(t,e),t}(N),Z={transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199},ee="[-+]?\\d*\\.?\\d+",te=ee+"%";function ne(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return"\\(\\s*("+t.join(")\\s*,\\s*(")+")\\s*\\)"}var re=new RegExp("rgb"+ne(ee,ee,ee)),ae=new RegExp("rgba"+ne(ee,ee,ee,ee)),ie=new RegExp("hsl"+ne(ee,te,te)),oe=new RegExp("hsla"+ne(ee,te,te,ee)),ue=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,le=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,ce=/^#([0-9a-fA-F]{6})$/,se=/^#([0-9a-fA-F]{8})$/;function de(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function fe(e,t,n){var r=n<.5?n*(1+t):n+t-n*t,a=2*n-r,i=de(a,r,e+1/3),o=de(a,r,e),u=de(a,r,e-1/3);return Math.round(255*i)<<24|Math.round(255*o)<<16|Math.round(255*u)<<8}function he(e){var t=parseInt(e,10);return t<0?0:t>255?255:t}function me(e){return(parseFloat(e)%360+360)%360/360}function pe(e){var t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function ge(e){var t=parseFloat(e);return t<0?0:t>100?1:t/100}function ve(e){var t,n,r="number"==typeof(t=e)?t>>>0===t&&t>=0&&t<=4294967295?t:null:(n=ce.exec(t))?parseInt(n[1]+"ff",16)>>>0:Z.hasOwnProperty(t)?Z[t]:(n=re.exec(t))?(he(n[1])<<24|he(n[2])<<16|he(n[3])<<8|255)>>>0:(n=ae.exec(t))?(he(n[1])<<24|he(n[2])<<16|he(n[3])<<8|pe(n[4]))>>>0:(n=ue.exec(t))?parseInt(n[1]+n[1]+n[2]+n[2]+n[3]+n[3]+"ff",16)>>>0:(n=se.exec(t))?parseInt(n[1],16)>>>0:(n=le.exec(t))?parseInt(n[1]+n[1]+n[2]+n[2]+n[3]+n[3]+n[4]+n[4],16)>>>0:(n=ie.exec(t))?(255|fe(me(n[1]),ge(n[2]),ge(n[3])))>>>0:(n=oe.exec(t))?(fe(me(n[1]),ge(n[2]),ge(n[3]))|pe(n[4]))>>>0:null;if(null===r)return e;var a=(16711680&(r=r||0))>>>16,i=(65280&r)>>>8,o=(255&r)/255;return"rgba(".concat((4278190080&r)>>>24,", ").concat(a,", ").concat(i,", ").concat(o,")")}var ye=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,be=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,we=new RegExp("(".concat(Object.keys(Z).join("|"),")"),"g"),Ee={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ke=["Webkit","Ms","Moz","O"];function je(e,t,n){return null==t||"boolean"==typeof t||""===t?"":n||"number"!=typeof t||0===t||Ee.hasOwnProperty(e)&&Ee[e]?(""+t).trim():t+"px"}Ee=Object.keys(Ee).reduce((function(e,t){return ke.forEach((function(n){return e[function(e,t){return e+t.charAt(0).toUpperCase()+t.substring(1)}(n,t)]=e[t]})),e}),Ee);var Oe={};G((function(e){return new B(e)})),R("div"),P((function(e){var t=e.output.map((function(e){return e.replace(be,ve)})).map((function(e){return e.replace(we,ve)})),n=t[0].match(ye).map((function(){return[]}));t.forEach((function(e){e.match(ye).forEach((function(e,t){return n[t].push(+e)}))}));var r=t[0].match(ye).map((function(t,r){return W(Object(g.a)({},e,{output:n[r]}))}));return function(e){var n=0;return t[0].replace(ye,(function(){return r[n++](e)})).replace(/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,(function(e,t,n,r,a){return"rgba(".concat(Math.round(t),", ").concat(Math.round(n),", ").concat(Math.round(r),", ").concat(a,")")}))}})),S(Z),A((function(e,t){if(!e.nodeType||void 0===e.setAttribute)return!1;var n=t.style,r=t.children,a=t.scrollTop,i=t.scrollLeft,o=Object(v.a)(t,["style","children","scrollTop","scrollLeft"]),u="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName;for(var l in void 0!==a&&(e.scrollTop=a),void 0!==i&&(e.scrollLeft=i),void 0!==r&&(e.textContent=r),n)if(n.hasOwnProperty(l)){var c=0===l.indexOf("--"),s=je(l,n[l],c);"float"===l&&(l="cssFloat"),c?e.style.setProperty(l,s):e.style[l]=s}for(var d in o){var f=u?d:Oe[d]||(Oe[d]=d.replace(/([A-Z])/g,(function(e){return"-"+e.toLowerCase()})));void 0!==e.getAttribute(f)&&e.setAttribute(f,o[d])}}),(function(e){return e}));var xe,Ve,Te=(xe=function(e){return Object(r.forwardRef)((function(t,n){var i=b(),o=Object(r.useRef)(!0),u=Object(r.useRef)(null),l=Object(r.useRef)(null),c=Object(r.useCallback)((function(e){var t=u.current;u.current=new H(e,(function(){var e=!1;l.current&&(e=O.fn(l.current,u.current.getAnimatedValue())),l.current&&!1!==e||i()})),t&&t.detach()}),[]);Object(r.useEffect)((function(){return function(){o.current=!1,u.current&&u.current.detach()}}),[]),Object(r.useImperativeHandle)(n,(function(){return z(l,o,i)})),c(t);var s,d=u.current.getValue(),f=(d.scrollTop,d.scrollLeft,Object(v.a)(d,["scrollTop","scrollLeft"])),h=(s=e,!y.fun(s)||s.prototype instanceof a.a.Component?function(e){return l.current=function(e,t){return t&&(y.fun(t)?t(e):y.obj(t)&&(t.current=e)),e}(e,n)}:void 0);return a.a.createElement(e,Object(g.a)({},f,{ref:h}))}))},void 0===(Ve=!1)&&(Ve=!0),function(e){return(y.arr(e)?e:Object.keys(e)).reduce((function(e,t){var n=Ve?t[0].toLowerCase()+t.substring(1):t;return e[n]=xe(n),e}),xe)})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Ne=n("vrFN");var Ae=function(e){var t=Object(r.useState)(!1),n=t[0],i=t[1];return a.a.createElement("div",{className:"portfolio-item portfolio-hover-"+n,onMouseEnter:function(){return i(!0)},onMouseLeave:function(){return i(!1)},onClick:e.itemClicked},a.a.createElement("div",{className:"portfolio-layout"},a.a.createElement("div",{className:"item-shadow portfolio-shadow-hover-"+n}),a.a.createElement("div",{className:"portfolio-container"},a.a.createElement("div",{className:"image-container"},a.a.createElement("img",{src:e.image,alt:e.itemName})),a.a.createElement("div",{className:"portfolio-description"},a.a.createElement("p",null,e.text)))))};var Se=function(e){var t=Object(r.useState)(!1),n=t[0],i=t[1],o=$({config:{duration:200},opacity:e.modalIsHidden?0:1,from:{opacity:0},reverse:n,onRest:function(){console.log("dsa"),!0===n&&(i(!1),e.closeModal())}}),u=$({config:{mass:1,tension:210,friction:21},top:e.modalIsHidden?2e3:0,height:e.modalIsHidden?"0%":"80%",width:e.modalIsHidden?"0%":"80%",from:{top:2e3,height:"0%",width:"0%"},reverse:n}),l=function(){return i(!0)};return e.modalIsHidden?a.a.createElement("div",null):a.a.createElement("div",{className:"modal-container"},a.a.createElement(Te.div,{className:"modal",style:u},a.a.createElement("div",{className:"modal-header"},a.a.createElement("div",null,a.a.createElement("h1",{className:"modal-title"},e.title," ",a.a.createElement("span",{className:"link-icon"})," ")),a.a.createElement("div",{className:"modal-x-container"},a.a.createElement("div",{className:"modal-x",onClick:l}))),a.a.createElement("div",{className:"modal-body"},e.children)),a.a.createElement(Te.div,{className:"modal-background",style:o,onClick:l}))};n("SU1z"),n("vixg"),n("4mEH"),n("dJPS");var Ce=function(e){return a.a.createElement("div",null,"This project was created as part of a website design module during my degree. We were breifed with creating a static website using HTML and CSS which")};var Fe=function(e){return a.a.createElement("p",null,"The project involved creating a bespoke game in the form of a quiz, with the purpose of researching learning techniques amongst students. I worked closely with the client to achieve the specific requirements they requested.",a.a.createElement("strong",{className:"list-title"},"The concept was simple:"),a.a.createElement("ul",null,a.a.createElement("li",null,"There were 5 rounds"),a.a.createElement("li",null,"At the beginning of each round, the player starts off with 5 points"),a.a.createElement("li",null,"They then watch a video, and then answer several questions to test their knowledge on the subject"),a.a.createElement("li",null,"If they answer all questions correctly, they proceed to the next round. Get one incorrect? They lose a point and must watch the whole video again"),a.a.createElement("li",null,"When they complete the final round, the user is shown their score"),a.a.createElement("li",null,"Statistics about a player’s performance, and behaviour were automatically saved to a Google Drive spreadsheet which colid be accessed by the client.")),"It was developed in React, using Gatsby and the Ant Design UI library.")};var Pe=function(e){return a.a.createElement("div",null,"This is a description of forgetmenot")},qe=n("VaA+"),Re=n.n(qe),Ie=n("STjy"),Me=n.n(Ie);var ze=function(e){return a.a.createElement("p",null,"The Jungle Games is an online multiplayer game, created with three of my peers during my second year at university. The gameplay resembled Jackbox, whereby the primary gameplay is hosted on a client from a computer. Players are then able to interact with the game from their mobile devices, through a web browser. The answers and instructions appeared on the main computer display, where users could then vote for the most accurate or funniest answer. Users gain points throughout the rounds until the final round where a leaderboard is shown, and the winners were displayed. The game consisted of several minigames, all which required each user to interact with their own devices. One of these is an act-it-out game. One player receives a prompt on their phone which they must act out to everyone else. The other players must guess what they think the prompt could be on their phones. Everyone votes on the answers, and points are awarded based on how many votes each player receives. It was my job to choose what technologies to use, and then to code all the software. The main game client which was ran on a computer was created in Unity with C#. The mobile client which was ran through a web browser was created with React. The backend was created with Node.js, using MongoDB to store data.",a.a.createElement("img",{className:"junglegames-image",src:Re.a}),a.a.createElement("img",{className:"junglegames-image",src:Me.a}))};var Ge=function(e){return a.a.createElement("div",null,"This website was created as part of a research project, looking at how to improve users typing speed in typing speed tests. The")},He=n("zzI0"),Xe=n.n(He),Le=n("iLQ6"),Ue=n.n(Le),We=n("TG5R"),De=n.n(We),Qe=n("m21c"),Je=n.n(Qe),_e=n("GXXw"),Ke=n.n(_e);t.default=function(){var e=$((function(){return{st:0,sk:0}})),t=e[0],n=t.st,i=t.sk,o=e[1],u=n.interpolate((function(e){return"translateX("+.7*e+"px)"})),l=n.interpolate((function(e){return"translateX("+-.7*e+"px)"})),c=n.interpolate((function(e){return"translateX("+.7*e+"px)"})),s=i.interpolate((function(e){return"skewY("+e+"deg)"})),d=Object(r.useState)({title:"",content:a.a.createElement("div",null),isHidden:!0}),f=d[0],h=d[1],m=function(e,t){return h({title:e,content:t,isHidden:!1,url:"https://speedtypingtest.netlify.com"})};return a.a.createElement("main",{onScroll:function(e){return o({st:e.target.scrollTop,sk:Math.min(Math.max(-10,-.06*e.target.scrollTop),0)})}},a.a.createElement("div",{className:"index"},a.a.createElement(Ne.a,{title:"Home"}),a.a.createElement("header",null,a.a.createElement(Te.div,{className:"background-image",style:{transform:s}}),a.a.createElement("div",{className:"header-background"},a.a.createElement("div",{style:{transform:"skewY(-10deg)",width:"100%",height:"100%"}},a.a.createElement(Te.div,{className:"top-row",style:{transform:u,width:"100%"}},a.a.createElement("span",null),a.a.createElement("span",null)),a.a.createElement(Te.div,{className:"middle-row",style:{transform:l,width:"100%"}},a.a.createElement("span",null),a.a.createElement("span",null)),a.a.createElement(Te.div,{className:"bottom-row",style:{transform:c,width:"100%"}},a.a.createElement("span",null),a.a.createElement("span",null),a.a.createElement("span",null),a.a.createElement("span",null)))),a.a.createElement("div",{className:"centered-title"},a.a.createElement("h1",{className:"title-name"},"Joe Fairburn"),a.a.createElement("h2",{className:"dev-name"},"Front-end Developer"))),a.a.createElement("section",{id:"portfolio",className:"portfolio-section"},a.a.createElement("div",{className:"portfolio-title"},a.a.createElement("h1",null,"My Work")),a.a.createElement("div",{className:"portfolio-items"},a.a.createElement(Ae,{image:Xe.a,text:"The Jungle Games",itemClicked:function(){return m("The Jungle Games",a.a.createElement(ze,null))}}),a.a.createElement(Ae,{image:Ue.a,text:"Research Quiz",itemClicked:function(){return m("Research Quiz",a.a.createElement(Fe,null))}}),a.a.createElement(Ae,{image:De.a,text:"Typing Test",itemClicked:function(){return m("Typing Test",a.a.createElement(Ge,null))}}),a.a.createElement(Ae,{image:Ke.a,text:"ForgetMeNot",itemClicked:function(){return m("ForgetMeNot",a.a.createElement(Pe,null))}}),a.a.createElement(Ae,{image:Je.a,text:"Promotional Site",itemClicked:function(){return m("Promotional Site",a.a.createElement(Ce,null))}})),a.a.createElement(Se,{title:f.title,url:f.url,modalIsHidden:f.isHidden,closeModal:function(){return h({title:"",content:a.a.createElement("div",null),isHidden:!0})}},f.content)),a.a.createElement("section",{className:"contact-me"},a.a.createElement("div",{className:"contact-content"},a.a.createElement("div",{className:"contact-title"},a.a.createElement("h1",null,"Contact Me")),a.a.createElement("div",{className:"contact-container"},a.a.createElement("ul",{className:"contact-list"},a.a.createElement("li",{className:"github-image"}),a.a.createElement("li",{className:"linkedin-image"}),a.a.createElement("li",{className:"mail-image"})))),a.a.createElement("div",{className:"background-container"},a.a.createElement("div",{className:"background-image second-image"})))))}},STjy:function(e,t,n){e.exports=n.p+"static/junglegames-instructions-4ec9a2c5a1bf7fa0ebd4301a9b6a713f.png"},TG5R:function(e,t,n){e.exports=n.p+"static/typetest-d6563b358753cabe886289d6e57bdc6b.png"},UExd:function(e,t,n){var r=n("nh4g"),a=n("DVgA"),i=n("aCFj"),o=n("UqcF").f;e.exports=function(e){return function(t){for(var n,u=i(t),l=a(u),c=l.length,s=0,d=[];c>s;)n=l[s++],r&&!o.call(u,n)||d.push(e?[n,u[n]]:u[n]);return d}}},"VaA+":function(e,t,n){e.exports=n.p+"static/junglegames-gameplay-d69cb7c9b3f0531bcbaeed2dd006051d.png"},bHtr:function(e,t,n){var r=n("XKFU");r(r.P,"Array",{fill:n("Nr18")}),n("nGyu")("fill")},hhXQ:function(e,t,n){var r=n("XKFU"),a=n("UExd")(!1);r(r.S,"Object",{values:function(e){return a(e)}})},iLQ6:function(e,t,n){e.exports=n.p+"static/biologyquiz-7fe783b277f279670c9348daca4aa6a3.png"},k1TG:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},m21c:function(e,t,n){e.exports=n.p+"static/eden-a9e84ad980d64df6e18729509448cb2f.png"},zzI0:function(e,t,n){e.exports=n.p+"static/junglegames-ff8926e8e08801ac966bdfd7c6cda8e1.png"}}]);
//# sourceMappingURL=component---src-pages-index-js-d08154a9d8ad54709479.js.map