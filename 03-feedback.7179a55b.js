function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i="Expected a function",o=NaN,r="[object Symbol]",a=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt,s="object"==typeof n&&n&&n.Object===Object&&n,m="object"==typeof self&&self&&self.Object===Object&&self,d=s||m||Function("return this")(),g=Object.prototype.toString,v=Math.max,p=Math.min,y=function(){return d.Date.now()};function b(e,t,n){var o,r,a,u,f,l,c=0,s=!1,m=!1,d=!0;if("function"!=typeof e)throw new TypeError(i);function g(t){var n=o,i=r;return o=r=void 0,c=t,u=e.apply(i,n)}function b(e){var n=e-l;return void 0===l||n>=t||n<0||m&&e-c>=a}function h(){var e=y();if(b(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-l);return m?p(n,a-(e-c)):n}(e))}function w(e){return f=void 0,d&&o?g(e):(o=r=void 0,u)}function O(){var e=y(),n=b(e);if(o=arguments,r=this,l=e,n){if(void 0===f)return function(e){return c=e,f=setTimeout(h,t),s?g(e):u}(l);if(m)return f=setTimeout(h,t),g(l)}return void 0===f&&(f=setTimeout(h,t)),u}return t=S(t)||0,j(n)&&(s=!!n.leading,a=(m="maxWait"in n)?v(S(n.maxWait)||0,t):a,d="trailing"in n?!!n.trailing:d),O.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=l=r=f=void 0},O.flush=function(){return void 0===f?u:w(y())},O}function j(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function S(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&g.call(e)==r}(e))return o;if(j(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=j(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=f.test(e);return n||l.test(e)?c(e.slice(2),n?2:8):u.test(e)?o:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError(i);return j(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),b(e,t,{leading:o,maxWait:t,trailing:r})};const h=document.querySelector(".feedback-form"),w="feedback-form-state";if(localStorage.getItem(w)){let e=JSON.parse(localStorage.getItem(w));h.elements.message.value=e.message??"",h.elements.email.value=e.email??""}h.addEventListener("input",e(t)((()=>{let e={email:h.elements.email.value,message:h.elements.message.value};localStorage.setItem(w,JSON.stringify(e))}),500)),h.addEventListener("submit",(e=>{e.preventDefault(),console.log(localStorage.getItem(w)),localStorage.removeItem(w),h.reset()}));
//# sourceMappingURL=03-feedback.7179a55b.js.map
