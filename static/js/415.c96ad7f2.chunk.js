/*! For license information please see 415.c96ad7f2.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[415],{106:function(t,r,e){var n=e(184);r.Z=function(t){var r=t.children;return(0,n.jsx)("p",{children:r})}},415:function(t,r,e){e.r(r);var n=e(861),o=e(439),i=e(106),a=e(512),c=e(791),u=e(689),s=e(87),h=e(207),f=e(184);function l(){l=function(){return r};var t,r={},e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,r,e){t[r]=e.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{s({},"")}catch(t){s=function(t,r,e){return t[r]=e}}function h(t,r,e,n){var i=r&&r.prototype instanceof g?r:g,a=Object.create(i.prototype),c=new S(n||[]);return o(a,"_invoke",{value:O(t,e,c)}),a}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=h;var p="suspendedStart",y="executing",v="completed",d={};function g(){}function m(){}function w(){}var x={};s(x,a,(function(){return this}));var b=Object.getPrototypeOf,L=b&&b(b(I([])));L&&L!==e&&n.call(L,a)&&(x=L);var E=w.prototype=g.prototype=Object.create(x);function j(t){["next","throw","return"].forEach((function(r){s(t,r,(function(t){return this._invoke(r,t)}))}))}function _(t,r){function e(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"==typeof h&&n.call(h,"__await")?r.resolve(h.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):r.resolve(h).then((function(t){s.value=t,a(s)}),(function(t){return e("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new r((function(r,o){e(t,n,r,o)}))}return i=i?i.then(o,o):o()}})}function O(r,e,n){var o=p;return function(i,a){if(o===y)throw new Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=k(c,n);if(u){if(u===d)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var s=f(r,e,n);if("normal"===s.type){if(o=n.done?v:"suspendedYield",s.arg===d)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=v,n.method="throw",n.arg=s.arg)}}}function k(r,e){var n=e.method,o=r.iterator[n];if(o===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,k(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var i=f(o,r.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,d;var a=i.arg;return a?a.done?(e[r.resultName]=a.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,d):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function Z(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function N(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(Z,this),this.reset(!0)}function I(r){if(r||""===r){var e=r[a];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,i=function e(){for(;++o<r.length;)if(n.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw new TypeError(typeof r+" is not iterable")}return m.prototype=w,o(E,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:m,configurable:!0}),m.displayName=s(w,u,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===m||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,s(t,u,"GeneratorFunction")),t.prototype=Object.create(E),t},r.awrap=function(t){return{__await:t}},j(_.prototype),s(_.prototype,c,(function(){return this})),r.AsyncIterator=_,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new _(h(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(E),s(E,u,"Generator"),s(E,a,(function(){return this})),s(E,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=I,S.prototype={constructor:S,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(N),!r)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function o(n,o){return c.type="throw",c.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),d},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),N(e),d}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;N(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:I(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),d}},r}r.default=function(){var t=(0,c.useState)([]),r=(0,o.Z)(t,2),e=r[0],p=r[1],y=(0,c.useState)(!1),v=(0,o.Z)(y,2),d=v[0],g=v[1],m=(0,c.useState)(null),w=(0,o.Z)(m,2),x=w[0],b=w[1],L=(0,u.TH)();return(0,c.useEffect)((function(){function t(){return(t=(0,n.Z)(l().mark((function t(){var r;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return b(null),g(!0),t.prev=2,t.next=5,(0,h.Df)();case 5:r=t.sent,p(r.results),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),b(t.t0.message);case 12:return t.prev=12,g(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[2,9,12,15]])})))).apply(this,arguments)}0===e.length&&function(){t.apply(this,arguments)}()}),[e.length]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("h1",{children:"Trending today"}),d&&(0,f.jsx)(a.Z,{}),x&&!d&&(0,f.jsxs)(i.Z,{children:["Oops... Something went wrong. Error: ",x,". Please, try again."]}),(0,f.jsx)("ul",{children:e.map((function(t){var r=t.id,e=t.title;return(0,f.jsx)("li",{children:(0,f.jsx)(s.rU,{to:"movies/".concat(r),state:{from:L},children:e})},r)}))})]})}},207:function(t,r,e){e.d(r,{Df:function(){return a},IQ:function(){return l},Jh:function(){return y},Pg:function(){return h},zi:function(){return u}});var n=e(861),o=e(243);function i(){i=function(){return r};var t,r={},e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,r,e){t[r]=e.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function h(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{h({},"")}catch(t){h=function(t,r,e){return t[r]=e}}function f(t,r,e,n){var i=r&&r.prototype instanceof g?r:g,a=Object.create(i.prototype),c=new S(n||[]);return o(a,"_invoke",{value:O(t,e,c)}),a}function l(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=f;var p="suspendedStart",y="executing",v="completed",d={};function g(){}function m(){}function w(){}var x={};h(x,c,(function(){return this}));var b=Object.getPrototypeOf,L=b&&b(b(I([])));L&&L!==e&&n.call(L,c)&&(x=L);var E=w.prototype=g.prototype=Object.create(x);function j(t){["next","throw","return"].forEach((function(r){h(t,r,(function(t){return this._invoke(r,t)}))}))}function _(t,r){function e(o,i,a,c){var u=l(t[o],t,i);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"==typeof h&&n.call(h,"__await")?r.resolve(h.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):r.resolve(h).then((function(t){s.value=t,a(s)}),(function(t){return e("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new r((function(r,o){e(t,n,r,o)}))}return i=i?i.then(o,o):o()}})}function O(r,e,n){var o=p;return function(i,a){if(o===y)throw new Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=k(c,n);if(u){if(u===d)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var s=l(r,e,n);if("normal"===s.type){if(o=n.done?v:"suspendedYield",s.arg===d)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=v,n.method="throw",n.arg=s.arg)}}}function k(r,e){var n=e.method,o=r.iterator[n];if(o===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,k(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var i=l(o,r.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,d;var a=i.arg;return a?a.done?(e[r.resultName]=a.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,d):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function Z(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function N(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(Z,this),this.reset(!0)}function I(r){if(r||""===r){var e=r[c];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,i=function e(){for(;++o<r.length;)if(n.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw new TypeError(typeof r+" is not iterable")}return m.prototype=w,o(E,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:m,configurable:!0}),m.displayName=h(w,s,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===m||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,h(t,s,"GeneratorFunction")),t.prototype=Object.create(E),t},r.awrap=function(t){return{__await:t}},j(_.prototype),h(_.prototype,u,(function(){return this})),r.AsyncIterator=_,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new _(f(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(E),h(E,s,"Generator"),h(E,c,(function(){return this})),h(E,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=I,S.prototype={constructor:S,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(N),!r)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function o(n,o){return c.type="throw",c.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),d},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),N(e),d}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;N(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:I(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),d}},r}function a(){return c.apply(this,arguments)}function c(){return(c=(0,n.Z)(i().mark((function t(){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,o.Z)("/trending/movie/day?language=en-US");case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function u(t){return s.apply(this,arguments)}function s(){return(s=(0,n.Z)(i().mark((function t(r){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,o.Z)("/search/movie?query=".concat(r,"&include_adult=true&language=en-US&page=1"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)(i().mark((function t(r){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,o.Z)("/movie/".concat(r,"?language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(i().mark((function t(r){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,o.Z)("/movie/".concat(r,"/credits?language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(i().mark((function t(r){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,o.Z)("/movie/".concat(r,"/reviews?language=en-US&page=1"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}o.Z.defaults.baseURL="https://api.themoviedb.org/3",o.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzY2UyZThhYjNkZDA2ZjdiN2RhYTUzZDg5M2QxN2JjNyIsInN1YiI6IjY1MTcwMzI0MDcyMTY2MDBhY2IzYWNjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TfyalqH_CPzKGjbDg22zFPjtUbgpb17QxcfEfW6ldhA"}}]);
//# sourceMappingURL=415.c96ad7f2.chunk.js.map