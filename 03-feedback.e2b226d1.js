function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},n={},l=t.parcelRequired7c6;null==l&&((l=function(e){if(e in a)return a[e].exports;if(e in n){var t=n[e];delete n[e];var l={id:e,exports:{}};return a[e]=l,t.call(l.exports,l,l.exports),l.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},t.parcelRequired7c6=l);var r=l("kEUo3");const o=document.querySelector(".feedback-form"),s=document.querySelector('input[name="email"]'),u=document.querySelector('textarea[name="message"]'),i=localStorage.getItem("feedback-form-state");function d(){return{email:o.elements.email.value,message:o.elements.message.value}}i&&(s.value=JSON.parse(i).email,u.value=JSON.parse(i).message),o.addEventListener("input",e(r).throttle((e=>{const t=d();localStorage.setItem("feedback-form-state",JSON.stringify(t))}),500)),o.addEventListener("submit",(function(e){e.preventDefault(),console.log(d()),localStorage.clear(),o.elements.email.value="",o.elements.message.value=""}));
//# sourceMappingURL=03-feedback.e2b226d1.js.map