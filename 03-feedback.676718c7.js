!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",r=NaN,u="[object Symbol]",a=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,s=parseInt,d="object"==typeof n&&n&&n.Object===Object&&n,v="object"==typeof self&&self&&self.Object===Object&&self,m=d||v||Function("return this")(),g=Object.prototype.toString,p=Math.max,b=Math.min,y=function(){return m.Date.now()};function j(e,t,n){var i,r,u,a,f,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function m(t){var n=i,o=r;return i=r=void 0,c=t,a=e.apply(o,n)}function g(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=u}function j(){var e=y();if(g(e))return h(e);f=setTimeout(j,function(e){var n=t-(e-l);return d?b(n,u-(e-c)):n}(e))}function h(e){return f=void 0,v&&i?m(e):(i=r=void 0,a)}function w(){var e=y(),n=g(e);if(i=arguments,r=this,l=e,n){if(void 0===f)return function(e){return c=e,f=setTimeout(j,t),s?m(e):a}(l);if(d)return f=setTimeout(j,t),m(l)}return void 0===f&&(f=setTimeout(j,t)),a}return t=O(t)||0,S(n)&&(s=!!n.leading,u=(d="maxWait"in n)?p(O(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=l=r=f=void 0},w.flush=function(){return void 0===f?a:h(y())},w}function S(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function O(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&g.call(t)==u}(t))return r;if(S(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=S(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(a,"");var o=l.test(t);return o||c.test(t)?s(t.slice(2),o?2:8):f.test(t)?r:+t}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError(o);return S(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),j(e,t,{leading:i,maxWait:t,trailing:r})};var h=document.querySelector(".feedback-form"),w="feedback-form-state";if(localStorage.getItem(w)){var T,x,E=JSON.parse(localStorage.getItem(w));h.elements.message.value=null!==(T=E.message)&&void 0!==T?T:"",h.elements.email.value=null!==(x=E.email)&&void 0!==x?x:""}h.addEventListener("input",e(t)((function(){var e={email:h.elements.email.value,message:h.elements.message.value};localStorage.setItem(w,JSON.stringify(e))}),500)),h.addEventListener("submit",(function(e){e.preventDefault(),localStorage.removeItem(localStorage),h.reset()}))}();
//# sourceMappingURL=03-feedback.676718c7.js.map
