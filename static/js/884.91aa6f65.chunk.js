/*! For license information please see 884.91aa6f65.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[884],{6106:function(t,r,e){var n=e(3379),o=e(184);r.Z=function(t){var r=t.children;return(0,o.jsx)(n.k,{children:r})}},3379:function(t,r,e){e.d(r,{T:function(){return o},k:function(){return i}});var n=e(5867),o=(0,n.zo)("h4")((function(){return{color:"#424D55",textAlign:"center",opacity:"0.6",fontSize:"24px"}})),i=(0,n.zo)(o)((function(){return{color:"#D61717"}}))},5837:function(t,r,e){e.d(r,{Fg:function(){return f},U3:function(){return s},eW:function(){return l}});var n,o,i,a=e(168),c=e(1087),u=e(5867),s=(0,u.zo)("h1")(n||(n=(0,a.Z)(["\n    font-size: 40px;\n    font-weight: 800;\n    margin-bottom: 40px;\n    color: green;\n"]))),l=(0,u.zo)("ul")(o||(o=(0,a.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n"]))),f=(0,u.zo)(c.rU)(i||(i=(0,a.Z)(["\n    display: block;\n    text-decoration: none;\n    color: blueviolet;\n    background-color: lightblue;\n    font-size: 20px;\n    padding: 4px;\n    border: 1px solid blue;\n    border-radius: 4px;\n    &.active {\n        color: red;\n    }\n"])))},2884:function(t,r,e){e.r(r);var n=e(5861),o=e(9439),i=e(6106),a=e(8512),c=e(2791),u=e(7689),s=e(1207),l=e(1154),f=e(5837),h=e(184);function p(){p=function(){return r};var t,r={},e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,r,e){t[r]=e.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{s({},"")}catch(t){s=function(t,r,e){return t[r]=e}}function l(t,r,e,n){var i=r&&r.prototype instanceof g?r:g,a=Object.create(i.prototype),c=new N(n||[]);return o(a,"_invoke",{value:_(t,e,c)}),a}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=l;var h="suspendedStart",d="executing",v="completed",y={};function g(){}function m(){}function x(){}var w={};s(w,a,(function(){return this}));var b=Object.getPrototypeOf,j=b&&b(b(S([])));j&&j!==e&&n.call(j,a)&&(w=j);var L=x.prototype=g.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(r){s(t,r,(function(t){return this._invoke(r,t)}))}))}function Z(t,r){function e(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?r.resolve(l.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):r.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return e("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new r((function(r,o){e(t,n,r,o)}))}return i=i?i.then(o,o):o()}})}function _(r,e,n){var o=h;return function(i,a){if(o===d)throw new Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=k(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var s=f(r,e,n);if("normal"===s.type){if(o=n.done?v:"suspendedYield",s.arg===y)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=v,n.method="throw",n.arg=s.arg)}}}function k(r,e){var n=e.method,o=r.iterator[n];if(o===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,k(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=f(o,r.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,y;var a=i.arg;return a?a.done?(e[r.resultName]=a.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,y):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function O(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function z(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function S(r){if(r||""===r){var e=r[a];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,i=function e(){for(;++o<r.length;)if(n.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw new TypeError(typeof r+" is not iterable")}return m.prototype=x,o(L,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:m,configurable:!0}),m.displayName=s(x,u,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===m||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,s(t,u,"GeneratorFunction")),t.prototype=Object.create(L),t},r.awrap=function(t){return{__await:t}},E(Z.prototype),s(Z.prototype,c,(function(){return this})),r.AsyncIterator=Z,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new Z(l(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(L),s(L,u,"Generator"),s(L,a,(function(){return this})),s(L,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=S,N.prototype={constructor:N,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(z),!r)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function o(n,o){return c.type="throw",c.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),z(e),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;z(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:S(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),y}},r}r.default=function(){var t,r,e=(0,c.useState)(null),d=(0,o.Z)(e,2),v=d[0],y=d[1],g=(0,c.useState)(!1),m=(0,o.Z)(g,2),x=m[0],w=m[1],b=(0,c.useState)(null),j=(0,o.Z)(b,2),L=j[0],E=j[1],Z=(0,u.UO)().movieId,_=(0,u.TH)(),k=(0,u.s0)(),O=(0,c.useRef)(null!==(t=null===(r=_.state)||void 0===r?void 0:r.from)&&void 0!==t?t:"/movies");(0,c.useEffect)((function(){function t(){return(t=(0,n.Z)(p().mark((function t(){var r;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return E(null),w(!0),t.prev=2,t.next=5,(0,s.Pg)(Z);case 5:r=t.sent,y(r),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),E(t.t0.message);case 12:return t.prev=12,w(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[2,9,12,15]])})))).apply(this,arguments)}!v&&function(){t.apply(this,arguments)}()}),[v,Z]);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(l.xE,{onClick:function(){k(O.current)},children:[(0,h.jsx)("span",{children:"\u25c0"}),(0,h.jsx)("span",{children:"Go back"})]}),x&&(0,h.jsx)(a.Z,{}),L&&!x&&(0,h.jsxs)(i.Z,{children:["Oops... Something went wrong. Error: ",L,". Please, try again."]}),v&&(0,h.jsxs)("div",{children:[(0,h.jsxs)(l.Zb,{children:[(0,h.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(v.poster_path),alt:v.title,width:300}),(0,h.jsxs)("div",{children:[(0,h.jsx)(l.Dx,{children:v.title}),(0,h.jsxs)(l.xv,{children:["User score: ",Math.round(10*v.vote_average),"%"]}),(0,h.jsx)(l.DK,{children:"Overview"}),(0,h.jsx)(l.xv,{children:v.overview}),(0,h.jsx)(l.DK,{children:"Genres"}),(0,h.jsx)(l.xv,{children:v.genres.map((function(t){var r=t.name,e=t.id;return(0,h.jsxs)("span",{children:[r," "]},e)}))})]})]}),(0,h.jsx)(l.xv,{children:"Additional information"}),(0,h.jsxs)(l.x2,{children:[(0,h.jsx)("li",{children:(0,h.jsx)(f.Fg,{to:"cast",children:"Cast"})}),(0,h.jsx)("li",{children:(0,h.jsx)(f.Fg,{to:"reviews",children:"Reviews"})})]}),(0,h.jsx)(c.Suspense,{fallback:(0,h.jsx)(a.Z,{}),children:(0,h.jsx)(u.j3,{})})]})]})}},1154:function(t,r,e){e.d(r,{DK:function(){return v},Dx:function(){return d},Zb:function(){return g},x2:function(){return m},xE:function(){return p},xv:function(){return y}});var n,o,i,a,c,u,s=e(168),l=e(5867),f=e(4211),h=e(5837),p=(0,l.zo)(f.QZ)(n||(n=(0,s.Z)(["\n    height: 40px;\n    margin-bottom: 40px;\n"]))),d=(0,l.zo)("h2")(o||(o=(0,s.Z)(["\n    font-size: 24px;\n    font-weight: 600;\n    margin-bottom: 8px;\n"]))),v=(0,l.zo)("h3")(i||(i=(0,s.Z)(["\n    font-size: 20px;\n    font-weight: 600;\n    margin-bottom: 8px;\n"]))),y=(0,l.zo)("p")(a||(a=(0,s.Z)(["\n    font-size: 16px;\n    margin-bottom: 20px;\n"]))),g=(0,l.zo)("div")(c||(c=(0,s.Z)(["\n    display: flex;\n    gap: 20px;\n    align-items: center;\n    padding: 20px;\n    margin-bottom: 20px;\n    border-bottom: 2px solid grey;\n"]))),m=(0,l.zo)(h.eW)(u||(u=(0,s.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n    padding-bottom: 20px;\n    border-bottom: 2px solid grey;\n    margin-bottom: 20px;\n"])))},4211:function(t,r,e){e.d(r,{Mj:function(){return s},QZ:function(){return l},UI:function(){return u}});var n,o,i,a=e(168),c=e(5867),u=(0,c.zo)("form")(n||(n=(0,a.Z)(["\n    display: flex;\n    gap: 20px;\n    width: 100%;\n    height: 40px;\n    margin-bottom: 40px;\n"]))),s=(0,c.zo)("input")(o||(o=(0,a.Z)(["\n    width: 300px;\n    padding: 16px;\n    border-radius: 8px;\n"]))),l=(0,c.zo)("button")(i||(i=(0,a.Z)(["\n    display: flex;\n    align-items: center;\n    justify-content: space-evenly;\n    width: 100px;\n    border: 1px solid black;\n    border-radius: 8px;\n"])))},1207:function(t,r,e){e.d(r,{Df:function(){return a},IQ:function(){return h},Jh:function(){return d},Pg:function(){return l},zi:function(){return u}});var n=e(5861),o=e(1243);function i(){i=function(){return r};var t,r={},e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,r,e){t[r]=e.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function l(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{l({},"")}catch(t){l=function(t,r,e){return t[r]=e}}function f(t,r,e,n){var i=r&&r.prototype instanceof g?r:g,a=Object.create(i.prototype),c=new N(n||[]);return o(a,"_invoke",{value:_(t,e,c)}),a}function h(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=f;var p="suspendedStart",d="executing",v="completed",y={};function g(){}function m(){}function x(){}var w={};l(w,c,(function(){return this}));var b=Object.getPrototypeOf,j=b&&b(b(S([])));j&&j!==e&&n.call(j,c)&&(w=j);var L=x.prototype=g.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(r){l(t,r,(function(t){return this._invoke(r,t)}))}))}function Z(t,r){function e(o,i,a,c){var u=h(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?r.resolve(l.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):r.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return e("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new r((function(r,o){e(t,n,r,o)}))}return i=i?i.then(o,o):o()}})}function _(r,e,n){var o=p;return function(i,a){if(o===d)throw new Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=k(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var s=h(r,e,n);if("normal"===s.type){if(o=n.done?v:"suspendedYield",s.arg===y)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=v,n.method="throw",n.arg=s.arg)}}}function k(r,e){var n=e.method,o=r.iterator[n];if(o===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,k(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=h(o,r.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,y;var a=i.arg;return a?a.done?(e[r.resultName]=a.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,y):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function O(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function z(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function S(r){if(r||""===r){var e=r[c];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,i=function e(){for(;++o<r.length;)if(n.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw new TypeError(typeof r+" is not iterable")}return m.prototype=x,o(L,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:m,configurable:!0}),m.displayName=l(x,s,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===m||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,l(t,s,"GeneratorFunction")),t.prototype=Object.create(L),t},r.awrap=function(t){return{__await:t}},E(Z.prototype),l(Z.prototype,u,(function(){return this})),r.AsyncIterator=Z,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new Z(f(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(L),l(L,s,"Generator"),l(L,c,(function(){return this})),l(L,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=S,N.prototype={constructor:N,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(z),!r)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function o(n,o){return c.type="throw",c.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),z(e),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;z(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:S(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),y}},r}function a(){return c.apply(this,arguments)}function c(){return(c=(0,n.Z)(i().mark((function t(){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,o.Z)("/trending/movie/day?language=en-US");case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function u(t){return s.apply(this,arguments)}function s(){return(s=(0,n.Z)(i().mark((function t(r){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,o.Z)("/search/movie?query=".concat(r,"&include_adult=true&language=en-US&page=1"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)(i().mark((function t(r){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,o.Z)("/movie/".concat(r,"?language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(i().mark((function t(r){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,o.Z)("/movie/".concat(r,"/credits?language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(i().mark((function t(r){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,o.Z)("/movie/".concat(r,"/reviews?language=en-US&page=1"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}o.Z.defaults.baseURL="https://api.themoviedb.org/3",o.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzY2UyZThhYjNkZDA2ZjdiN2RhYTUzZDg5M2QxN2JjNyIsInN1YiI6IjY1MTcwMzI0MDcyMTY2MDBhY2IzYWNjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TfyalqH_CPzKGjbDg22zFPjtUbgpb17QxcfEfW6ldhA"}}]);
//# sourceMappingURL=884.91aa6f65.chunk.js.map