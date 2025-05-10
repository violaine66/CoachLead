// sweetalert2@11.21.0 downloaded from https://ga.jspm.io/npm:sweetalert2@11.21.0/dist/sweetalert2.all.js

var e=typeof globalThis!=="undefined"?globalThis:typeof self!=="undefined"?self:global;var t={};(function(e,o){t=o()})(0,(function(){function t(e,t,o){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:o;throw new TypeError("Private element is not present on this object")}function o(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function n(e,o){return e.get(t(e,o))}function s(e,t,n){o(e,t),t.set(e,n)}function a(e,o,n){return e.set(t(e,o),n),n}const r=100;
/** @type {GlobalState} */const i={};const l=()=>{if(i.previousActiveElement instanceof HTMLElement){i.previousActiveElement.focus();i.previousActiveElement=null}else document.body&&document.body.focus()};
/**
   * Restore previous active (focused) element
   *
   * @param {boolean} returnFocus
   * @returns {Promise<void>}
   */const c=e=>new Promise((t=>{if(!e)return t();const o=window.scrollX;const n=window.scrollY;i.restoreFocusTimeout=setTimeout((()=>{l();t()}),r);window.scrollTo(o,n)}));const d="swal2-";
/**
   * @typedef {Record<SwalClass, string>} SwalClasses
   */
/**
   * @typedef {'success' | 'warning' | 'info' | 'question' | 'error'} SwalIcon
   * @typedef {Record<SwalIcon, string>} SwalIcons
   */
/** @type {SwalClass[]} */const u=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error","draggable","dragging"];const w=u.reduce(((e,t)=>{e[t]=d+t;return e}),/** @type {SwalClasses} */{});
/** @type {SwalIcon[]} */const m=["success","warning","info","question","error"];const p=m.reduce(((e,t)=>{e[t]=d+t;return e}),/** @type {SwalIcons} */{});const h="SweetAlert2:";
/**
   * Capitalize the first letter of a string
   *
   * @param {string} str
   * @returns {string}
   */const g=e=>e.charAt(0).toUpperCase()+e.slice(1)
/**
   * Standardize console warnings
   *
   * @param {string | string[]} message
   */;const f=e=>{console.warn(`${h} ${typeof e==="object"?e.join(" "):e}`)};
/**
   * Standardize console errors
   *
   * @param {string} message
   */const b=e=>{console.error(`${h} ${e}`)};
/**
   * Private global state for `warnOnce`
   *
   * @type {string[]}
   * @private
   */const v=[];
/**
   * Show a console warning, but only if it hasn't already been shown
   *
   * @param {string} message
   */const y=e=>{if(!v.includes(e)){v.push(e);f(e)}};
/**
   * Show a one-time console warning about deprecated params/methods
   *
   * @param {string} deprecatedParam
   * @param {string?} useInstead
   */const k=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;y(`"${e}" is deprecated and will be removed in the next major release.${t?` Use "${t}" instead.`:""}`)};
/**
   * If `arg` is a function, call it (with no arguments or context) and return the result.
   * Otherwise, just pass the value through
   *
   * @param {Function | any} arg
   * @returns {any}
   */const x=e=>typeof e==="function"?e():e
/**
   * @param {any} arg
   * @returns {boolean}
   */;const C=e=>e&&typeof e.toPromise==="function"
/**
   * @param {any} arg
   * @returns {Promise<any>}
   */;const A=e=>C(e)?e.toPromise():Promise.resolve(e)
/**
   * @param {any} arg
   * @returns {boolean}
   */;const E=e=>e&&Promise.resolve(e)===e
/**
   * Gets the popup container which contains the backdrop and the popup itself.
   *
   * @returns {HTMLElement | null}
   */;const $=()=>document.body.querySelector(`.${w.container}`)
/**
   * @param {string} selectorString
   * @returns {HTMLElement | null}
   */;const B=e=>{const t=$();return t?t.querySelector(e):null};
/**
   * @param {string} className
   * @returns {HTMLElement | null}
   */const L=e=>B(`.${e}`);
/**
   * @returns {HTMLElement | null}
   */const S=()=>L(w.popup)
/**
   * @returns {HTMLElement | null}
   */;const P=()=>L(w.icon)
/**
   * @returns {HTMLElement | null}
   */;const T=()=>L(w["icon-content"])
/**
   * @returns {HTMLElement | null}
   */;const O=()=>L(w.title)
/**
   * @returns {HTMLElement | null}
   */;const j=()=>L(w["html-container"])
/**
   * @returns {HTMLElement | null}
   */;const M=()=>L(w.image)
/**
   * @returns {HTMLElement | null}
   */;const z=()=>L(w["progress-steps"])
/**
   * @returns {HTMLElement | null}
   */;const H=()=>L(w["validation-message"])
/**
   * @returns {HTMLButtonElement | null}
   */;const I=()=>/** @type {HTMLButtonElement} */B(`.${w.actions} .${w.confirm}`)
/**
   * @returns {HTMLButtonElement | null}
   */;const q=()=>/** @type {HTMLButtonElement} */B(`.${w.actions} .${w.cancel}`)
/**
   * @returns {HTMLButtonElement | null}
   */;const D=()=>/** @type {HTMLButtonElement} */B(`.${w.actions} .${w.deny}`)
/**
   * @returns {HTMLElement | null}
   */;const V=()=>L(w["input-label"])
/**
   * @returns {HTMLElement | null}
   */;const N=()=>B(`.${w.loader}`)
/**
   * @returns {HTMLElement | null}
   */;const _=()=>L(w.actions)
/**
   * @returns {HTMLElement | null}
   */;const F=()=>L(w.footer)
/**
   * @returns {HTMLElement | null}
   */;const R=()=>L(w["timer-progress-bar"])
/**
   * @returns {HTMLElement | null}
   */;const U=()=>L(w.close);const Y='\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n';
/**
   * @returns {HTMLElement[]}
   */const W=()=>{const e=S();if(!e)return[];
/** @type {NodeListOf<HTMLElement>} */const t=e.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])');const o=Array.from(t).sort(((e,t)=>{const o=parseInt(e.getAttribute("tabindex")||"0");const n=parseInt(t.getAttribute("tabindex")||"0");return o>n?1:o<n?-1:0}));
/** @type {NodeListOf<HTMLElement>} */const n=e.querySelectorAll(Y);const s=Array.from(n).filter((e=>e.getAttribute("tabindex")!=="-1"));return[...new Set(o.concat(s))].filter((e=>me(e)))};
/**
   * @returns {boolean}
   */const Z=()=>G(document.body,w.shown)&&!G(document.body,w["toast-shown"])&&!G(document.body,w["no-backdrop"]);
/**
   * @returns {boolean}
   */const K=()=>{const e=S();return!!e&&G(e,w.toast)};
/**
   * @returns {boolean}
   */const X=()=>{const e=S();return!!e&&e.hasAttribute("data-loading")};
/**
   * Securely set innerHTML of an element
   * https://github.com/sweetalert2/sweetalert2/issues/1926
   *
   * @param {HTMLElement} elem
   * @param {string} html
   */const J=(e,t)=>{e.textContent="";if(t){const o=new DOMParser;const n=o.parseFromString(t,"text/html");const s=n.querySelector("head");s&&Array.from(s.childNodes).forEach((t=>{e.appendChild(t)}));const a=n.querySelector("body");a&&Array.from(a.childNodes).forEach((t=>{t instanceof HTMLVideoElement||t instanceof HTMLAudioElement?e.appendChild(t.cloneNode(true)):e.appendChild(t)}))}};
/**
   * @param {HTMLElement} elem
   * @param {string} className
   * @returns {boolean}
   */const G=(e,t)=>{if(!t)return false;const o=t.split(/\s+/);for(let t=0;t<o.length;t++)if(!e.classList.contains(o[t]))return false;return true};
/**
   * @param {HTMLElement} elem
   * @param {SweetAlertOptions} params
   */const Q=(e,t)=>{Array.from(e.classList).forEach((o=>{Object.values(w).includes(o)||Object.values(p).includes(o)||Object.values(t.showClass||{}).includes(o)||e.classList.remove(o)}))};
/**
   * @param {HTMLElement} elem
   * @param {SweetAlertOptions} params
   * @param {string} className
   */const ee=(e,t,o)=>{Q(e,t);if(!t.customClass)return;const n=t.customClass[/** @type {keyof SweetAlertCustomClass} */o];n&&(typeof n==="string"||n.forEach?se(e,n):f(`Invalid type of customClass.${o}! Expected string or iterable object, got "${typeof n}"`))};
/**
   * @param {HTMLElement} popup
   * @param {import('./renderers/renderInput').InputClass | SweetAlertInput} inputClass
   * @returns {HTMLInputElement | null}
   */const te=(e,t)=>{if(!t)return null;switch(t){case"select":case"textarea":case"file":return e.querySelector(`.${w.popup} > .${w[t]}`);case"checkbox":return e.querySelector(`.${w.popup} > .${w.checkbox} input`);case"radio":return e.querySelector(`.${w.popup} > .${w.radio} input:checked`)||e.querySelector(`.${w.popup} > .${w.radio} input:first-child`);case"range":return e.querySelector(`.${w.popup} > .${w.range} input`);default:return e.querySelector(`.${w.popup} > .${w.input}`)}};
/**
   * @param {HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement} input
   */const oe=e=>{e.focus();if(e.type!=="file"){const t=e.value;e.value="";e.value=t}};
/**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[] | undefined} classList
   * @param {boolean} condition
   */const ne=(e,t,o)=>{if(e&&t){typeof t==="string"&&(t=t.split(/\s+/).filter(Boolean));t.forEach((t=>{Array.isArray(e)?e.forEach((e=>{o?e.classList.add(t):e.classList.remove(t)})):o?e.classList.add(t):e.classList.remove(t)}))}};
/**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[] | undefined} classList
   */const se=(e,t)=>{ne(e,t,true)};
/**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[] | undefined} classList
   */const ae=(e,t)=>{ne(e,t,false)};
/**
   * Get direct child of an element by class name
   *
   * @param {HTMLElement} elem
   * @param {string} className
   * @returns {HTMLElement | undefined}
   */const re=(e,t)=>{const o=Array.from(e.children);for(let e=0;e<o.length;e++){const n=o[e];if(n instanceof HTMLElement&&G(n,t))return n}};
/**
   * @param {HTMLElement} elem
   * @param {string} property
   * @param {*} value
   */const ie=(e,t,o)=>{o===`${parseInt(o)}`&&(o=parseInt(o));o||parseInt(o)===0?e.style.setProperty(t,typeof o==="number"?`${o}px`:o):e.style.removeProperty(t)};
/**
   * @param {HTMLElement | null} elem
   * @param {string} display
   */const le=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"flex";e&&(e.style.display=t)};
/**
   * @param {HTMLElement | null} elem
   */const ce=e=>{e&&(e.style.display="none")};
/**
   * @param {HTMLElement | null} elem
   * @param {string} display
   */const de=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"block";e&&new MutationObserver((()=>{we(e,e.innerHTML,t)})).observe(e,{childList:true,subtree:true})};
/**
   * @param {HTMLElement} parent
   * @param {string} selector
   * @param {string} property
   * @param {string} value
   */const ue=(e,t,o,n)=>{
/** @type {HTMLElement | null} */
const s=e.querySelector(t);s&&s.style.setProperty(o,n)};
/**
   * @param {HTMLElement} elem
   * @param {any} condition
   * @param {string} display
   */const we=function(e,t){let o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"flex";t?le(e,o):ce(e)};
/**
   * borrowed from jquery $(elem).is(':visible') implementation
   *
   * @param {HTMLElement | null} elem
   * @returns {boolean}
   */const me=e=>!!(e&&(e.offsetWidth||e.offsetHeight||e.getClientRects().length))
/**
   * @returns {boolean}
   */;const pe=()=>!me(I())&&!me(D())&&!me(q())
/**
   * @param {HTMLElement} elem
   * @returns {boolean}
   */;const he=e=>!!(e.scrollHeight>e.clientHeight)
/**
   * borrowed from https://stackoverflow.com/a/46352119
   *
   * @param {HTMLElement} elem
   * @returns {boolean}
   */;const ge=e=>{const t=window.getComputedStyle(e);const o=parseFloat(t.getPropertyValue("animation-duration")||"0");const n=parseFloat(t.getPropertyValue("transition-duration")||"0");return o>0||n>0};
/**
   * @param {number} timer
   * @param {boolean} reset
   */const fe=function(e){let t=arguments.length>1&&arguments[1]!==void 0&&arguments[1];const o=R();if(o&&me(o)){if(t){o.style.transition="none";o.style.width="100%"}setTimeout((()=>{o.style.transition=`width ${e/1e3}s linear`;o.style.width="0%"}),10)}};const be=()=>{const e=R();if(!e)return;const t=parseInt(window.getComputedStyle(e).width);e.style.removeProperty("transition");e.style.width="100%";const o=parseInt(window.getComputedStyle(e).width);const n=t/o*100;e.style.width=`${n}%`};
/**
   * Detect Node env
   *
   * @returns {boolean}
   */const ve=()=>typeof window==="undefined"||typeof document==="undefined";const ye=`\n <div aria-labelledby="${w.title}" aria-describedby="${w["html-container"]}" class="${w.popup}" tabindex="-1">\n   <button type="button" class="${w.close}"></button>\n   <ul class="${w["progress-steps"]}"></ul>\n   <div class="${w.icon}"></div>\n   <img class="${w.image}" />\n   <h2 class="${w.title}" id="${w.title}"></h2>\n   <div class="${w["html-container"]}" id="${w["html-container"]}"></div>\n   <input class="${w.input}" id="${w.input}" />\n   <input type="file" class="${w.file}" />\n   <div class="${w.range}">\n     <input type="range" />\n     <output></output>\n   </div>\n   <select class="${w.select}" id="${w.select}"></select>\n   <div class="${w.radio}"></div>\n   <label class="${w.checkbox}">\n     <input type="checkbox" id="${w.checkbox}" />\n     <span class="${w.label}"></span>\n   </label>\n   <textarea class="${w.textarea}" id="${w.textarea}"></textarea>\n   <div class="${w["validation-message"]}" id="${w["validation-message"]}"></div>\n   <div class="${w.actions}">\n     <div class="${w.loader}"></div>\n     <button type="button" class="${w.confirm}"></button>\n     <button type="button" class="${w.deny}"></button>\n     <button type="button" class="${w.cancel}"></button>\n   </div>\n   <div class="${w.footer}"></div>\n   <div class="${w["timer-progress-bar-container"]}">\n     <div class="${w["timer-progress-bar"]}"></div>\n   </div>\n </div>\n`.replace(/(^|\n)\s*/g,"");
/**
   * @returns {boolean}
   */const ke=()=>{const e=$();if(!e)return false;e.remove();ae([document.documentElement,document.body],[w["no-backdrop"],w["toast-shown"],w["has-column"]]);return true};const xe=()=>{i.currentInstance.resetValidationMessage()};const Ce=()=>{const e=S();const t=re(e,w.input);const o=re(e,w.file);
/** @type {HTMLInputElement} */const n=e.querySelector(`.${w.range} input`);
/** @type {HTMLOutputElement} */const s=e.querySelector(`.${w.range} output`);const a=re(e,w.select);
/** @type {HTMLInputElement} */const r=e.querySelector(`.${w.checkbox} input`);const i=re(e,w.textarea);t.oninput=xe;o.onchange=xe;a.onchange=xe;r.onchange=xe;i.oninput=xe;n.oninput=()=>{xe();s.value=n.value};n.onchange=()=>{xe();s.value=n.value}};
/**
   * @param {string | HTMLElement} target
   * @returns {HTMLElement}
   */const Ae=e=>typeof e==="string"?document.querySelector(e):e
/**
   * @param {SweetAlertOptions} params
   */;const Ee=e=>{const t=S();t.setAttribute("role",e.toast?"alert":"dialog");t.setAttribute("aria-live",e.toast?"polite":"assertive");e.toast||t.setAttribute("aria-modal","true")};
/**
   * @param {HTMLElement} targetElement
   */const $e=e=>{window.getComputedStyle(e).direction==="rtl"&&se($(),w.rtl)};
/**
   * Add modal + backdrop + no-war message for Russians to DOM
   *
   * @param {SweetAlertOptions} params
   */const Be=e=>{const t=ke();if(ve()){b("SweetAlert2 requires document to initialize");return}const o=document.createElement("div");o.className=w.container;t&&se(o,w["no-transition"]);J(o,ye);o.dataset.swal2Theme=e.theme;const n=Ae(e.target);n.appendChild(o);if(e.topLayer){o.setAttribute("popover","");o.showPopover()}Ee(e);$e(n);Ce()};
/**
   * @param {HTMLElement | object | string} param
   * @param {HTMLElement} target
   */const Le=(e,t)=>{e instanceof HTMLElement?t.appendChild(e):typeof e==="object"?Se(e,t):e&&J(t,e)};
/**
   * @param {any} param
   * @param {HTMLElement} target
   */const Se=(e,t)=>{e.jquery?Pe(t,e):J(t,e.toString())};
/**
   * @param {HTMLElement} target
   * @param {any} elem
   */const Pe=(e,t)=>{e.textContent="";if(0 in t)for(let o=0;o in t;o++)e.appendChild(t[o].cloneNode(true));else e.appendChild(t.cloneNode(true))};
/**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */const Te=(e,t)=>{const o=_();const n=N();if(o&&n){t.showConfirmButton||t.showDenyButton||t.showCancelButton?le(o):ce(o);ee(o,t,"actions");Oe(o,n,t);J(n,t.loaderHtml||"");ee(n,t,"loader")}};
/**
   * @param {HTMLElement} actions
   * @param {HTMLElement} loader
   * @param {SweetAlertOptions} params
   */function Oe(e,t,o){const n=I();const s=D();const a=q();if(n&&s&&a){ze(n,"confirm",o);ze(s,"deny",o);ze(a,"cancel",o);je(n,s,a,o);if(o.reverseButtons)if(o.toast){e.insertBefore(a,n);e.insertBefore(s,n)}else{e.insertBefore(a,t);e.insertBefore(s,t);e.insertBefore(n,t)}}}
/**
   * @param {HTMLElement} confirmButton
   * @param {HTMLElement} denyButton
   * @param {HTMLElement} cancelButton
   * @param {SweetAlertOptions} params
   */function je(e,t,o,n){if(n.buttonsStyling){se([e,t,o],w.styled);n.confirmButtonColor&&e.style.setProperty("--swal2-confirm-button-background-color",n.confirmButtonColor);n.denyButtonColor&&t.style.setProperty("--swal2-deny-button-background-color",n.denyButtonColor);n.cancelButtonColor&&o.style.setProperty("--swal2-cancel-button-background-color",n.cancelButtonColor);Me(e);Me(t);Me(o)}else ae([e,t,o],w.styled)}
/**
   * @param {HTMLElement} button
   */function Me(e){const t=window.getComputedStyle(e);const o=t.backgroundColor.replace(/rgba?\((\d+), (\d+), (\d+).*/,"rgba($1, $2, $3, 0.5)");e.style.setProperty("--swal2-action-button-outline",t.getPropertyValue("--swal2-outline").replace(/ rgba\(.*/,` ${o}`))}
/**
   * @param {HTMLElement} button
   * @param {'confirm' | 'deny' | 'cancel'} buttonType
   * @param {SweetAlertOptions} params
   */function ze(e,t,o){const n=/** @type {'Confirm' | 'Deny' | 'Cancel'} */g(t);we(e,o[`show${n}Button`],"inline-block");J(e,o[`${t}ButtonText`]||"");e.setAttribute("aria-label",o[`${t}ButtonAriaLabel`]||"");e.className=w[t];ee(e,o,`${t}Button`)}
/**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */const He=(e,t)=>{const o=U();if(o){J(o,t.closeButtonHtml||"");ee(o,t,"closeButton");we(o,t.showCloseButton);o.setAttribute("aria-label",t.closeButtonAriaLabel||"")}};
/**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */const Ie=(e,t)=>{const o=$();if(o){qe(o,t.backdrop);De(o,t.position);Ve(o,t.grow);ee(o,t,"container")}};
/**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['backdrop']} backdrop
   */function qe(e,t){typeof t==="string"?e.style.background=t:t||se([document.documentElement,document.body],w["no-backdrop"])}
/**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['position']} position
   */function De(e,t){if(t)if(t in w)se(e,w[t]);else{f('The "position" parameter is not valid, defaulting to "center"');se(e,w.center)}}
/**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['grow']} grow
   */function Ve(e,t){t&&se(e,w[`grow-${t}`])}var Ne={innerParams:new WeakMap,domCache:new WeakMap};
/** @type {InputClass[]} */const _e=["input","file","range","select","radio","checkbox","textarea"];
/**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */const Fe=(e,t)=>{const o=S();if(!o)return;const n=Ne.innerParams.get(e);const s=!n||t.input!==n.input;_e.forEach((e=>{const n=re(o,w[e]);if(n){Ye(e,t.inputAttributes);n.className=w[e];s&&ce(n)}}));if(t.input){s&&Re(t);We(t)}};
/**
   * @param {SweetAlertOptions} params
   */const Re=e=>{if(!e.input)return;if(!Ge[e.input]){b(`Unexpected type of input! Expected ${Object.keys(Ge).join(" | ")}, got "${e.input}"`);return}const t=Xe(e.input);if(!t)return;const o=Ge[e.input](t,e);le(t);e.inputAutoFocus&&setTimeout((()=>{oe(o)}))};
/**
   * @param {HTMLInputElement} input
   */const Ue=e=>{for(let t=0;t<e.attributes.length;t++){const o=e.attributes[t].name;["id","type","value","style"].includes(o)||e.removeAttribute(o)}};
/**
   * @param {InputClass} inputClass
   * @param {SweetAlertOptions['inputAttributes']} inputAttributes
   */const Ye=(e,t)=>{const o=S();if(!o)return;const n=te(o,e);if(n){Ue(n);for(const e in t)n.setAttribute(e,t[e])}};
/**
   * @param {SweetAlertOptions} params
   */const We=e=>{if(!e.input)return;const t=Xe(e.input);t&&ee(t,e,"input")};
/**
   * @param {HTMLInputElement | HTMLTextAreaElement} input
   * @param {SweetAlertOptions} params
   */const Ze=(e,t)=>{!e.placeholder&&t.inputPlaceholder&&(e.placeholder=t.inputPlaceholder)};
/**
   * @param {Input} input
   * @param {Input} prependTo
   * @param {SweetAlertOptions} params
   */const Ke=(e,t,o)=>{if(o.inputLabel){const n=document.createElement("label");const s=w["input-label"];n.setAttribute("for",e.id);n.className=s;typeof o.customClass==="object"&&se(n,o.customClass.inputLabel);n.innerText=o.inputLabel;t.insertAdjacentElement("beforebegin",n)}};
/**
   * @param {SweetAlertInput} inputType
   * @returns {HTMLElement | undefined}
   */const Xe=e=>{const t=S();if(t)return re(t,w[/** @type {SwalClass} */e]||w.input)};
/**
   * @param {HTMLInputElement | HTMLOutputElement | HTMLTextAreaElement} input
   * @param {SweetAlertOptions['inputValue']} inputValue
   */const Je=(e,t)=>{["string","number"].includes(typeof t)?e.value=`${t}`:E(t)||f(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof t}"`)};
/** @type {Record<SweetAlertInput, (input: Input | HTMLElement, params: SweetAlertOptions) => Input>} */const Ge={};
/**
   * @param {HTMLInputElement} input
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */Ge.text=Ge.email=Ge.password=Ge.number=Ge.tel=Ge.url=Ge.search=Ge.date=Ge["datetime-local"]=Ge.time=Ge.week=Ge.month=/** @type {(input: Input | HTMLElement, params: SweetAlertOptions) => Input} */
(e,t)=>{Je(e,t.inputValue);Ke(e,e,t);Ze(e,t);e.type=t.input;return e};
/**
   * @param {HTMLInputElement} input
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */Ge.file=(e,t)=>{Ke(e,e,t);Ze(e,t);return e};
/**
   * @param {HTMLInputElement} range
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */Ge.range=(e,t)=>{const o=e.querySelector("input");const n=e.querySelector("output");Je(o,t.inputValue);o.type=t.input;Je(n,t.inputValue);Ke(o,e,t);return e};
/**
   * @param {HTMLSelectElement} select
   * @param {SweetAlertOptions} params
   * @returns {HTMLSelectElement}
   */Ge.select=(e,t)=>{e.textContent="";if(t.inputPlaceholder){const o=document.createElement("option");J(o,t.inputPlaceholder);o.value="";o.disabled=true;o.selected=true;e.appendChild(o)}Ke(e,e,t);return e};
/**
   * @param {HTMLInputElement} radio
   * @returns {HTMLInputElement}
   */Ge.radio=e=>{e.textContent="";return e};
/**
   * @param {HTMLLabelElement} checkboxContainer
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */Ge.checkbox=(e,t)=>{const o=te(S(),"checkbox");o.value="1";o.checked=Boolean(t.inputValue);const n=e.querySelector("span");J(n,t.inputPlaceholder||t.inputLabel);return o};
/**
   * @param {HTMLTextAreaElement} textarea
   * @param {SweetAlertOptions} params
   * @returns {HTMLTextAreaElement}
   */Ge.textarea=(e,t)=>{Je(e,t.inputValue);Ze(e,t);Ke(e,e,t);
/**
     * @param {HTMLElement} el
     * @returns {number}
     */const o=e=>parseInt(window.getComputedStyle(e).marginLeft)+parseInt(window.getComputedStyle(e).marginRight);setTimeout((()=>{if("MutationObserver"in window){const n=parseInt(window.getComputedStyle(S()).width);const s=()=>{if(!document.body.contains(e))return;const s=e.offsetWidth+o(e);s>n?S().style.width=`${s}px`:ie(S(),"width",t.width)};new MutationObserver(s).observe(e,{attributes:true,attributeFilter:["style"]})}}));return e};
/**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */const Qe=(e,t)=>{const o=j();if(o){de(o);ee(o,t,"htmlContainer");if(t.html){Le(t.html,o);le(o,"block")}else if(t.text){o.textContent=t.text;le(o,"block")}else ce(o);Fe(e,t)}};
/**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */const et=(e,t)=>{const o=F();if(o){de(o);we(o,t.footer,"block");t.footer&&Le(t.footer,o);ee(o,t,"footer")}};
/**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */const tt=(e,t)=>{const o=Ne.innerParams.get(e);const n=P();if(!n)return;if(o&&t.icon===o.icon){rt(n,t);ot(n,t);return}if(!t.icon&&!t.iconHtml){ce(n);return}if(t.icon&&Object.keys(p).indexOf(t.icon)===-1){b(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${t.icon}"`);ce(n);return}le(n);rt(n,t);ot(n,t);se(n,t.showClass&&t.showClass.icon);const s=window.matchMedia("(prefers-color-scheme: dark)");s.addEventListener("change",nt)};
/**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */const ot=(e,t)=>{for(const[o,n]of Object.entries(p))t.icon!==o&&ae(e,n);se(e,t.icon&&p[t.icon]);it(e,t);nt();ee(e,t,"icon")};const nt=()=>{const e=S();if(!e)return;const t=window.getComputedStyle(e).getPropertyValue("background-color");
/** @type {NodeListOf<HTMLElement>} */const o=e.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let e=0;e<o.length;e++)o[e].style.backgroundColor=t};const st='\n  <div class="swal2-success-circular-line-left"></div>\n  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n  <div class="swal2-success-circular-line-right"></div>\n';const at='\n  <span class="swal2-x-mark">\n    <span class="swal2-x-mark-line-left"></span>\n    <span class="swal2-x-mark-line-right"></span>\n  </span>\n';
/**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */const rt=(e,t)=>{if(!t.icon&&!t.iconHtml)return;let o=e.innerHTML;let n="";if(t.iconHtml)n=lt(t.iconHtml);else if(t.icon==="success"){n=st;o=o.replace(/ style=".*?"/g,"")}else if(t.icon==="error")n=at;else if(t.icon){const e={question:"?",warning:"!",info:"i"};n=lt(e[t.icon])}o.trim()!==n.trim()&&J(e,n)};
/**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */const it=(e,t)=>{if(t.iconColor){e.style.color=t.iconColor;e.style.borderColor=t.iconColor;for(const o of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])ue(e,o,"background-color",t.iconColor);ue(e,".swal2-success-ring","border-color",t.iconColor)}};
/**
   * @param {string} content
   * @returns {string}
   */const lt=e=>`<div class="${w["icon-content"]}">${e}</div>`
/**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */;const ct=(e,t)=>{const o=M();if(o)if(t.imageUrl){le(o,"");o.setAttribute("src",t.imageUrl);o.setAttribute("alt",t.imageAlt||"");ie(o,"width",t.imageWidth);ie(o,"height",t.imageHeight);o.className=w.image;ee(o,t,"image")}else ce(o)};let dt=false;let ut=0;let wt=0;let mt=0;let pt=0;
/**
   * @param {HTMLElement} popup
   */const ht=e=>{e.addEventListener("mousedown",ft);document.body.addEventListener("mousemove",bt);e.addEventListener("mouseup",vt);e.addEventListener("touchstart",ft);document.body.addEventListener("touchmove",bt);e.addEventListener("touchend",vt)};
/**
   * @param {HTMLElement} popup
   */const gt=e=>{e.removeEventListener("mousedown",ft);document.body.removeEventListener("mousemove",bt);e.removeEventListener("mouseup",vt);e.removeEventListener("touchstart",ft);document.body.removeEventListener("touchmove",bt);e.removeEventListener("touchend",vt)};
/**
   * @param {MouseEvent | TouchEvent} event
   */const ft=e=>{const t=S();if(e.target===t||P().contains(/** @type {HTMLElement} */e.target)){dt=true;const o=yt(e);ut=o.clientX;wt=o.clientY;mt=parseInt(t.style.insetInlineStart)||0;pt=parseInt(t.style.insetBlockStart)||0;se(t,"swal2-dragging")}};
/**
   * @param {MouseEvent | TouchEvent} event
   */const bt=e=>{const t=S();if(dt){let{clientX:o,clientY:n}=yt(e);t.style.insetInlineStart=`${mt+(o-ut)}px`;t.style.insetBlockStart=`${pt+(n-wt)}px`}};const vt=()=>{const e=S();dt=false;ae(e,"swal2-dragging")};
/**
   * @param {MouseEvent | TouchEvent} event
   * @returns {{ clientX: number, clientY: number }}
   */const yt=e=>{let t=0,o=0;if(e.type.startsWith("mouse")){t=/** @type {MouseEvent} */e.clientX;o=/** @type {MouseEvent} */e.clientY}else if(e.type.startsWith("touch")){t=/** @type {TouchEvent} */e.touches[0].clientX;o=/** @type {TouchEvent} */e.touches[0].clientY}return{clientX:t,clientY:o}};
/**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */const kt=(e,t)=>{const o=$();const n=S();if(o&&n){if(t.toast){ie(o,"width",t.width);n.style.width="100%";const e=N();e&&n.insertBefore(e,P())}else ie(n,"width",t.width);ie(n,"padding",t.padding);t.color&&(n.style.color=t.color);t.background&&(n.style.background=t.background);ce(H());xt(n,t);if(t.draggable&&!t.toast){se(n,w.draggable);ht(n)}else{ae(n,w.draggable);gt(n)}}};
/**
   * @param {HTMLElement} popup
   * @param {SweetAlertOptions} params
   */const xt=(e,t)=>{const o=t.showClass||{};e.className=`${w.popup} ${me(e)?o.popup:""}`;if(t.toast){se([document.documentElement,document.body],w["toast-shown"]);se(e,w.toast)}else se(e,w.modal);ee(e,t,"popup");typeof t.customClass==="string"&&se(e,t.customClass);t.icon&&se(e,w[`icon-${t.icon}`])};
/**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */const Ct=(e,t)=>{const o=z();if(!o)return;const{progressSteps:n,currentProgressStep:s}=t;if(n&&n.length!==0&&s!==void 0){le(o);o.textContent="";s>=n.length&&f("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)");n.forEach(((e,a)=>{const r=At(e);o.appendChild(r);a===s&&se(r,w["active-progress-step"]);if(a!==n.length-1){const e=Et(t);o.appendChild(e)}}))}else ce(o)};
/**
   * @param {string} step
   * @returns {HTMLLIElement}
   */const At=e=>{const t=document.createElement("li");se(t,w["progress-step"]);J(t,e);return t};
/**
   * @param {SweetAlertOptions} params
   * @returns {HTMLLIElement}
   */const Et=e=>{const t=document.createElement("li");se(t,w["progress-step-line"]);e.progressStepsDistance&&ie(t,"width",e.progressStepsDistance);return t};
/**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */const $t=(e,t)=>{const o=O();if(o){de(o);we(o,t.title||t.titleText,"block");t.title&&Le(t.title,o);t.titleText&&(o.innerText=t.titleText);ee(o,t,"title")}};
/**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */const Bt=(e,t)=>{kt(e,t);Ie(e,t);Ct(e,t);tt(e,t);ct(e,t);$t(e,t);He(e,t);Qe(e,t);Te(e,t);et(e,t);const o=S();typeof t.didRender==="function"&&o&&t.didRender(o);i.eventEmitter.emit("didRender",o)};const Lt=()=>me(S());const St=()=>{var e;return(e=I())===null||e===void 0?void 0:e.click()};const Pt=()=>{var e;return(e=D())===null||e===void 0?void 0:e.click()};const Tt=()=>{var e;return(e=q())===null||e===void 0?void 0:e.click()};
/** @typedef {'cancel' | 'backdrop' | 'close' | 'esc' | 'timer'} DismissReason */
/** @type {Record<DismissReason, DismissReason>} */const Ot=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"});
/**
   * @param {GlobalState} globalState
   */const jt=e=>{if(e.keydownTarget&&e.keydownHandlerAdded){e.keydownTarget.removeEventListener("keydown",e.keydownHandler,{capture:e.keydownListenerCapture});e.keydownHandlerAdded=false}};
/**
   * @param {GlobalState} globalState
   * @param {SweetAlertOptions} innerParams
   * @param {*} dismissWith
   */const Mt=(e,t,o)=>{jt(e);if(!t.toast){e.keydownHandler=e=>qt(t,e,o);e.keydownTarget=t.keydownListenerCapture?window:S();e.keydownListenerCapture=t.keydownListenerCapture;e.keydownTarget.addEventListener("keydown",e.keydownHandler,{capture:e.keydownListenerCapture});e.keydownHandlerAdded=true}};
/**
   * @param {number} index
   * @param {number} increment
   */const zt=(e,t)=>{var o;const n=W();if(n.length){e+=t;e===-2&&(e=n.length-1);e===n.length?e=0:e===-1&&(e=n.length-1);n[e].focus()}else(o=S())===null||o===void 0||o.focus()};const Ht=["ArrowRight","ArrowDown"];const It=["ArrowLeft","ArrowUp"];
/**
   * @param {SweetAlertOptions} innerParams
   * @param {KeyboardEvent} event
   * @param {Function} dismissWith
   */const qt=(e,t,o)=>{if(e&&!t.isComposing&&t.keyCode!==229){e.stopKeydownPropagation&&t.stopPropagation();t.key==="Enter"?Dt(t,e):t.key==="Tab"?Vt(t):[...Ht,...It].includes(t.key)?Nt(t.key):t.key==="Escape"&&_t(t,e,o)}};
/**
   * @param {KeyboardEvent} event
   * @param {SweetAlertOptions} innerParams
   */const Dt=(e,t)=>{if(!x(t.allowEnterKey))return;const o=te(S(),t.input);if(e.target&&o&&e.target instanceof HTMLElement&&e.target.outerHTML===o.outerHTML){if(["textarea","file"].includes(t.input))return;St();e.preventDefault()}};
/**
   * @param {KeyboardEvent} event
   */const Vt=e=>{const t=e.target;const o=W();let n=-1;for(let e=0;e<o.length;e++)if(t===o[e]){n=e;break}e.shiftKey?zt(n,-1):zt(n,1);e.stopPropagation();e.preventDefault()};
/**
   * @param {string} key
   */const Nt=e=>{const t=_();const o=I();const n=D();const s=q();if(!t||!o||!n||!s)return;
/** @type HTMLElement[] */const a=[o,n,s];if(document.activeElement instanceof HTMLElement&&!a.includes(document.activeElement))return;const r=Ht.includes(e)?"nextElementSibling":"previousElementSibling";let i=document.activeElement;if(i){for(let e=0;e<t.children.length;e++){i=i[r];if(!i)return;if(i instanceof HTMLButtonElement&&me(i))break}i instanceof HTMLButtonElement&&i.focus()}};
/**
   * @param {KeyboardEvent} event
   * @param {SweetAlertOptions} innerParams
   * @param {Function} dismissWith
   */const _t=(e,t,o)=>{if(x(t.allowEscapeKey)){e.preventDefault();o(Ot.esc)}};var Ft={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const Rt=()=>{const e=$();const t=Array.from(document.body.children);t.forEach((t=>{if(!t.contains(e)){t.hasAttribute("aria-hidden")&&t.setAttribute("data-previous-aria-hidden",t.getAttribute("aria-hidden")||"");t.setAttribute("aria-hidden","true")}}))};const Ut=()=>{const e=Array.from(document.body.children);e.forEach((e=>{if(e.hasAttribute("data-previous-aria-hidden")){e.setAttribute("aria-hidden",e.getAttribute("data-previous-aria-hidden")||"");e.removeAttribute("data-previous-aria-hidden")}else e.removeAttribute("aria-hidden")}))};const Yt=typeof window!=="undefined"&&!!window.GestureEvent;const Wt=()=>{if(Yt&&!G(document.body,w.iosfix)){const e=document.body.scrollTop;document.body.style.top=e*-1+"px";se(document.body,w.iosfix);Zt()}};const Zt=()=>{const e=$();if(!e)return;
/** @type {boolean} */let t;
/**
     * @param {TouchEvent} event
     */e.ontouchstart=e=>{t=Kt(e)};
/**
     * @param {TouchEvent} event
     */e.ontouchmove=e=>{if(t){e.preventDefault();e.stopPropagation()}}};
/**
   * @param {TouchEvent} event
   * @returns {boolean}
   */const Kt=e=>{const t=e.target;const o=$();const n=j();return!(!o||!n)&&(!Xt(e)&&!Jt(e)&&(t===o||!he(o)&&t instanceof HTMLElement&&t.tagName!=="INPUT"&&t.tagName!=="TEXTAREA"&&(!he(n)||!n.contains(t))))};
/**
   * https://github.com/sweetalert2/sweetalert2/issues/1786
   *
   * @param {*} event
   * @returns {boolean}
   */const Xt=e=>e.touches&&e.touches.length&&e.touches[0].touchType==="stylus";
/**
   * https://github.com/sweetalert2/sweetalert2/issues/1891
   *
   * @param {TouchEvent} event
   * @returns {boolean}
   */const Jt=e=>e.touches&&e.touches.length>1;const Gt=()=>{if(G(document.body,w.iosfix)){const e=parseInt(document.body.style.top,10);ae(document.body,w.iosfix);document.body.style.top="";document.body.scrollTop=e*-1}};
/**
   * Measure scrollbar width for padding body during modal show/hide
   * https://github.com/twbs/bootstrap/blob/master/js/src/modal.js
   *
   * @returns {number}
   */const Qt=()=>{const e=document.createElement("div");e.className=w["scrollbar-measure"];document.body.appendChild(e);const t=e.getBoundingClientRect().width-e.clientWidth;document.body.removeChild(e);return t};
/**
   * Remember state in cases where opening and handling a modal will fiddle with it.
   * @type {number | null}
   */let eo=null;
/**
   * @param {string} initialBodyOverflow
   */const to=e=>{if(eo===null&&(document.body.scrollHeight>window.innerHeight||e==="scroll")){eo=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"));document.body.style.paddingRight=`${eo+Qt()}px`}};const oo=()=>{if(eo!==null){document.body.style.paddingRight=`${eo}px`;eo=null}};
/**
   * @param {SweetAlert} instance
   * @param {HTMLElement} container
   * @param {boolean} returnFocus
   * @param {Function} didClose
   */function no(e,t,o,n){if(K())mo(e,n);else{c(o).then((()=>mo(e,n)));jt(i)}if(Yt){t.setAttribute("style","display:none !important");t.removeAttribute("class");t.innerHTML=""}else t.remove();if(Z()){oo();Gt();Ut()}so()}function so(){ae([document.documentElement,document.body],[w.shown,w["height-auto"],w["no-backdrop"],w["toast-shown"]])}
/**
   * Instance method to close sweetAlert
   *
   * @param {any} resolveValue
   */function ao(t){t=co(t);const o=Ft.swalPromiseResolve.get(this||e);const n=ro(this||e);if((this||e).isAwaitingPromise){if(!t.isDismissed){lo(this||e);o(t)}}else n&&o(t)}const ro=e=>{const t=S();if(!t)return false;const o=Ne.innerParams.get(e);if(!o||G(t,o.hideClass.popup))return false;ae(t,o.showClass.popup);se(t,o.hideClass.popup);const n=$();ae(n,o.showClass.backdrop);se(n,o.hideClass.backdrop);uo(e,t,o);return true};
/**
   * @param {any} error
   */function io(t){const o=Ft.swalPromiseReject.get(this||e);lo(this||e);o&&o(t)}
/**
   * @param {SweetAlert} instance
   */const lo=e=>{if(e.isAwaitingPromise){delete e.isAwaitingPromise;Ne.innerParams.get(e)||e._destroy()}};
/**
   * @param {any} resolveValue
   * @returns {SweetAlertResult}
   */const co=e=>typeof e==="undefined"?{isConfirmed:false,isDenied:false,isDismissed:true}:Object.assign({isConfirmed:false,isDenied:false,isDismissed:false},e);
/**
   * @param {SweetAlert} instance
   * @param {HTMLElement} popup
   * @param {SweetAlertOptions} innerParams
   */const uo=(e,t,o)=>{var n;const s=$();const a=ge(t);typeof o.willClose==="function"&&o.willClose(t);(n=i.eventEmitter)===null||n===void 0||n.emit("willClose",t);a?wo(e,t,s,o.returnFocus,o.didClose):no(e,s,o.returnFocus,o.didClose)};
/**
   * @param {SweetAlert} instance
   * @param {HTMLElement} popup
   * @param {HTMLElement} container
   * @param {boolean} returnFocus
   * @param {Function} didClose
   */const wo=(e,t,o,n,s)=>{i.swalCloseEventFinishedCallback=no.bind(null,e,o,n,s);
/**
     * @param {AnimationEvent | TransitionEvent} e
     */const a=function(e){if(e.target===t){var o;(o=i.swalCloseEventFinishedCallback)===null||o===void 0||o.call(i);delete i.swalCloseEventFinishedCallback;t.removeEventListener("animationend",a);t.removeEventListener("transitionend",a)}};t.addEventListener("animationend",a);t.addEventListener("transitionend",a)};
/**
   * @param {SweetAlert} instance
   * @param {Function} didClose
   */const mo=(e,t)=>{setTimeout((()=>{var o;typeof t==="function"&&t.bind(e.params)();(o=i.eventEmitter)===null||o===void 0||o.emit("didClose");e._destroy&&e._destroy()}))};
/**
   * Shows loader (spinner), this is useful with AJAX requests.
   * By default the loader be shown instead of the "Confirm" button.
   *
   * @param {HTMLButtonElement | null} [buttonToReplace]
   */const po=e=>{let t=S();t||new hs;t=S();if(!t)return;const o=N();K()?ce(P()):ho(t,e);le(o);t.setAttribute("data-loading","true");t.setAttribute("aria-busy","true");t.focus()};
/**
   * @param {HTMLElement} popup
   * @param {HTMLButtonElement | null} [buttonToReplace]
   */const ho=(e,t)=>{const o=_();const n=N();if(o&&n){!t&&me(I())&&(t=I());le(o);if(t){ce(t);n.setAttribute("data-button-to-replace",t.className);o.insertBefore(n,t)}se([e,o],w.loading)}};
/**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */const go=(e,t)=>{if(t.input==="select"||t.input==="radio")ko(e,t);else if(["text","email","number","tel","textarea"].some((e=>e===t.input))&&(C(t.inputValue)||E(t.inputValue))){po(I());xo(e,t)}};
/**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} innerParams
   * @returns {SweetAlertInputValue}
   */const fo=(e,t)=>{const o=e.getInput();if(!o)return null;switch(t.input){case"checkbox":return bo(o);case"radio":return vo(o);case"file":return yo(o);default:return t.inputAutoTrim?o.value.trim():o.value}};
/**
   * @param {HTMLInputElement} input
   * @returns {number}
   */const bo=e=>e.checked?1:0
/**
   * @param {HTMLInputElement} input
   * @returns {string | null}
   */;const vo=e=>e.checked?e.value:null
/**
   * @param {HTMLInputElement} input
   * @returns {FileList | File | null}
   */;const yo=e=>e.files&&e.files.length?e.getAttribute("multiple")!==null?e.files:e.files[0]:null
/**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */;const ko=(e,t)=>{const o=S();if(!o)return;
/**
     * @param {Record<string, any>} inputOptions
     */const n=e=>{t.input==="select"?Co(o,Eo(e),t):t.input==="radio"&&Ao(o,Eo(e),t)};if(C(t.inputOptions)||E(t.inputOptions)){po(I());A(t.inputOptions).then((t=>{e.hideLoading();n(t)}))}else typeof t.inputOptions==="object"?n(t.inputOptions):b("Unexpected type of inputOptions! Expected object, Map or Promise, got "+typeof t.inputOptions)};
/**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */const xo=(e,t)=>{const o=e.getInput();if(o){ce(o);A(t.inputValue).then((n=>{o.value=t.input==="number"?`${parseFloat(n)||0}`:`${n}`;le(o);o.focus();e.hideLoading()})).catch((t=>{b(`Error in inputValue promise: ${t}`);o.value="";le(o);o.focus();e.hideLoading()}))}};
/**
   * @param {HTMLElement} popup
   * @param {InputOptionFlattened[]} inputOptions
   * @param {SweetAlertOptions} params
   */function Co(e,t,o){const n=re(e,w.select);if(!n)return;
/**
     * @param {HTMLElement} parent
     * @param {string} optionLabel
     * @param {string} optionValue
     */const s=(e,t,n)=>{const s=document.createElement("option");s.value=n;J(s,t);s.selected=$o(n,o.inputValue);e.appendChild(s)};t.forEach((e=>{const t=e[0];const o=e[1];if(Array.isArray(o)){const e=document.createElement("optgroup");e.label=t;e.disabled=false;n.appendChild(e);o.forEach((t=>s(e,t[1],t[0])))}else s(n,o,t)}));n.focus()}
/**
   * @param {HTMLElement} popup
   * @param {InputOptionFlattened[]} inputOptions
   * @param {SweetAlertOptions} params
   */function Ao(e,t,o){const n=re(e,w.radio);if(!n)return;t.forEach((e=>{const t=e[0];const s=e[1];const a=document.createElement("input");const r=document.createElement("label");a.type="radio";a.name=w.radio;a.value=t;$o(t,o.inputValue)&&(a.checked=true);const i=document.createElement("span");J(i,s);i.className=w.label;r.appendChild(a);r.appendChild(i);n.appendChild(r)}));const s=n.querySelectorAll("input");s.length&&s[0].focus()}
/**
   * Converts `inputOptions` into an array of `[value, label]`s
   *
   * @param {Record<string, any>} inputOptions
   * @typedef {string[]} InputOptionFlattened
   * @returns {InputOptionFlattened[]}
   */const Eo=e=>{
/** @type {InputOptionFlattened[]} */
const t=[];e instanceof Map?e.forEach(((e,o)=>{let n=e;typeof n==="object"&&(n=Eo(n));t.push([o,n])})):Object.keys(e).forEach((o=>{let n=e[o];typeof n==="object"&&(n=Eo(n));t.push([o,n])}));return t};
/**
   * @param {string} optionValue
   * @param {SweetAlertInputValue} inputValue
   * @returns {boolean}
   */const $o=(e,t)=>!!t&&t.toString()===e.toString();
/**
   * @param {SweetAlert} instance
   */const Bo=e=>{const t=Ne.innerParams.get(e);e.disableButtons();t.input?Po(e,"confirm"):zo(e,true)};
/**
   * @param {SweetAlert} instance
   */const Lo=e=>{const t=Ne.innerParams.get(e);e.disableButtons();t.returnInputValueOnDeny?Po(e,"deny"):Oo(e,false)};
/**
   * @param {SweetAlert} instance
   * @param {Function} dismissWith
   */const So=(e,t)=>{e.disableButtons();t(Ot.cancel)};
/**
   * @param {SweetAlert} instance
   * @param {'confirm' | 'deny'} type
   */const Po=(e,t)=>{const o=Ne.innerParams.get(e);if(!o.input){b(`The "input" parameter is needed to be set when using returnInputValueOn${g(t)}`);return}const n=e.getInput();const s=fo(e,o);if(o.inputValidator)To(e,s,t);else if(n&&!n.checkValidity()){e.enableButtons();e.showValidationMessage(o.validationMessage||n.validationMessage)}else t==="deny"?Oo(e,s):zo(e,s)};
/**
   * @param {SweetAlert} instance
   * @param {SweetAlertInputValue} inputValue
   * @param {'confirm' | 'deny'} type
   */const To=(e,t,o)=>{const n=Ne.innerParams.get(e);e.disableInput();const s=Promise.resolve().then((()=>A(n.inputValidator(t,n.validationMessage))));s.then((n=>{e.enableButtons();e.enableInput();n?e.showValidationMessage(n):o==="deny"?Oo(e,t):zo(e,t)}))};
/**
   * @param {SweetAlert} instance
   * @param {any} value
   */const Oo=(e,t)=>{const o=Ne.innerParams.get(e||void 0);o.showLoaderOnDeny&&po(D());if(o.preDeny){e.isAwaitingPromise=true;const n=Promise.resolve().then((()=>A(o.preDeny(t,o.validationMessage))));n.then((o=>{if(o===false){e.hideLoading();lo(e)}else e.close({isDenied:true,value:typeof o==="undefined"?t:o})})).catch((t=>Mo(e||void 0,t)))}else e.close({isDenied:true,value:t})};
/**
   * @param {SweetAlert} instance
   * @param {any} value
   */const jo=(e,t)=>{e.close({isConfirmed:true,value:t})};
/**
   *
   * @param {SweetAlert} instance
   * @param {string} error
   */const Mo=(e,t)=>{e.rejectPromise(t)};
/**
   *
   * @param {SweetAlert} instance
   * @param {any} value
   */const zo=(e,t)=>{const o=Ne.innerParams.get(e||void 0);o.showLoaderOnConfirm&&po();if(o.preConfirm){e.resetValidationMessage();e.isAwaitingPromise=true;const n=Promise.resolve().then((()=>A(o.preConfirm(t,o.validationMessage))));n.then((o=>{if(me(H())||o===false){e.hideLoading();lo(e)}else jo(e,typeof o==="undefined"?t:o)})).catch((t=>Mo(e||void 0,t)))}else jo(e,t)};function Ho(){const t=Ne.innerParams.get(this||e);if(!t)return;const o=Ne.domCache.get(this||e);ce(o.loader);K()?t.icon&&le(P()):Io(o);ae([o.popup,o.actions],w.loading);o.popup.removeAttribute("aria-busy");o.popup.removeAttribute("data-loading");o.confirmButton.disabled=false;o.denyButton.disabled=false;o.cancelButton.disabled=false}const Io=e=>{const t=e.popup.getElementsByClassName(e.loader.getAttribute("data-button-to-replace"));t.length?le(t[0],"inline-block"):pe()&&ce(e.actions)};
/**
   * Gets the input DOM node, this method works with input parameter.
   *
   * @returns {HTMLInputElement | null}
   */function qo(){const t=Ne.innerParams.get(this||e);const o=Ne.domCache.get(this||e);return o?te(o.popup,t.input):null}
/**
   * @param {SweetAlert} instance
   * @param {string[]} buttons
   * @param {boolean} disabled
   */function Do(e,t,o){const n=Ne.domCache.get(e);t.forEach((e=>{n[e].disabled=o}))}
/**
   * @param {HTMLInputElement | null} input
   * @param {boolean} disabled
   */function Vo(e,t){const o=S();if(o&&e)if(e.type==="radio"){
/** @type {NodeListOf<HTMLInputElement>} */
const e=o.querySelectorAll(`[name="${w.radio}"]`);for(let o=0;o<e.length;o++)e[o].disabled=t}else e.disabled=t}function No(){Do(this||e,["confirmButton","denyButton","cancelButton"],false)}function _o(){Do(this||e,["confirmButton","denyButton","cancelButton"],true)}function Fo(){Vo(this.getInput(),false)}function Ro(){Vo(this.getInput(),true)}
/**
   * Show block with validation message
   *
   * @param {string} error
   * @this {SweetAlert}
   */function Uo(t){const o=Ne.domCache.get(this||e);const n=Ne.innerParams.get(this||e);J(o.validationMessage,t);o.validationMessage.className=w["validation-message"];n.customClass&&n.customClass.validationMessage&&se(o.validationMessage,n.customClass.validationMessage);le(o.validationMessage);const s=this.getInput();if(s){s.setAttribute("aria-invalid","true");s.setAttribute("aria-describedby",w["validation-message"]);oe(s);se(s,w.inputerror)}}function Yo(){const t=Ne.domCache.get(this||e);t.validationMessage&&ce(t.validationMessage);const o=this.getInput();if(o){o.removeAttribute("aria-invalid");o.removeAttribute("aria-describedby");ae(o,w.inputerror)}}const Wo={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:false,draggable:false,animation:true,theme:"light",showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:true,heightAuto:true,allowOutsideClick:true,allowEscapeKey:true,allowEnterKey:true,stopKeydownPropagation:true,keydownListenerCapture:false,showConfirmButton:true,showDenyButton:false,showCancelButton:false,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:true,reverseButtons:false,focusConfirm:true,focusDeny:false,focusCancel:false,returnFocus:true,showCloseButton:false,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:false,showLoaderOnDeny:false,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:false,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:true,inputAutoTrim:true,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:false,validationMessage:void 0,grow:false,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:true,topLayer:false};const Zo=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","draggable","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","theme","willClose"];
/** @type {Record<string, string | undefined>} */const Ko={allowEnterKey:void 0};const Xo=["allowOutsideClick","allowEnterKey","backdrop","draggable","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"];
/**
   * Is valid parameter
   *
   * @param {string} paramName
   * @returns {boolean}
   */const Jo=e=>Object.prototype.hasOwnProperty.call(Wo,e);
/**
   * Is valid parameter for Swal.update() method
   *
   * @param {string} paramName
   * @returns {boolean}
   */const Go=e=>Zo.indexOf(e)!==-1;
/**
   * Is deprecated parameter
   *
   * @param {string} paramName
   * @returns {string | undefined}
   */const Qo=e=>Ko[e];
/**
   * @param {string} param
   */const en=e=>{Jo(e)||f(`Unknown parameter "${e}"`)};
/**
   * @param {string} param
   */const tn=e=>{Xo.includes(e)&&f(`The parameter "${e}" is incompatible with toasts`)};
/**
   * @param {string} param
   */const on=e=>{const t=Qo(e);t&&k(e,t)};
/**
   * Show relevant warnings for given params
   *
   * @param {SweetAlertOptions} params
   */const nn=e=>{e.backdrop===false&&e.allowOutsideClick&&f('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');e.theme&&!["light","dark","auto","minimal","borderless","embed-iframe"].includes(e.theme)&&f(`Invalid theme "${e.theme}". Expected "light", "dark", "auto", "minimal", "borderless", or "embed-iframe"`);for(const t in e){en(t);e.toast&&tn(t);on(t)}};
/**
   * Updates popup parameters.
   *
   * @param {SweetAlertOptions} params
   */function sn(t){const o=$();const n=S();const s=Ne.innerParams.get(this||e);if(!n||G(n,s.hideClass.popup)){f("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}const a=an(t);const r=Object.assign({},s,a);nn(r);o.dataset.swal2Theme=r.theme;Bt(this||e,r);Ne.innerParams.set(this||e,r);Object.defineProperties(this||e,{params:{value:Object.assign({},(this||e).params,t),writable:false,enumerable:true}})}
/**
   * @param {SweetAlertOptions} params
   * @returns {SweetAlertOptions}
   */const an=e=>{const t={};Object.keys(e).forEach((o=>{Go(o)?t[o]=e[o]:f(`Invalid parameter to update: ${o}`)}));return t};function rn(){const t=Ne.domCache.get(this||e);const o=Ne.innerParams.get(this||e);if(o){if(t.popup&&i.swalCloseEventFinishedCallback){i.swalCloseEventFinishedCallback();delete i.swalCloseEventFinishedCallback}typeof o.didDestroy==="function"&&o.didDestroy();i.eventEmitter.emit("didDestroy");ln(this||e)}else cn(this||e)}
/**
   * @param {SweetAlert} instance
   */const ln=e=>{cn(e);delete e.params;delete i.keydownHandler;delete i.keydownTarget;delete i.currentInstance};
/**
   * @param {SweetAlert} instance
   */const cn=e=>{if(e.isAwaitingPromise){dn(Ne,e);e.isAwaitingPromise=true}else{dn(Ft,e);dn(Ne,e);delete e.isAwaitingPromise;delete e.disableButtons;delete e.enableButtons;delete e.getInput;delete e.disableInput;delete e.enableInput;delete e.hideLoading;delete e.disableLoading;delete e.showValidationMessage;delete e.resetValidationMessage;delete e.close;delete e.closePopup;delete e.closeModal;delete e.closeToast;delete e.rejectPromise;delete e.update;delete e._destroy}};
/**
   * @param {object} obj
   * @param {SweetAlert} instance
   */const dn=(e,t)=>{for(const o in e)e[o].delete(t)};var un=Object.freeze({__proto__:null,_destroy:rn,close:ao,closeModal:ao,closePopup:ao,closeToast:ao,disableButtons:_o,disableInput:Ro,disableLoading:Ho,enableButtons:No,enableInput:Fo,getInput:qo,handleAwaitingPromise:lo,hideLoading:Ho,rejectPromise:io,resetValidationMessage:Yo,showValidationMessage:Uo,update:sn});
/**
   * @param {SweetAlertOptions} innerParams
   * @param {DomCache} domCache
   * @param {Function} dismissWith
   */const wn=(e,t,o)=>{if(e.toast)mn(e,t,o);else{gn(t);fn(t);bn(e,t,o)}};
/**
   * @param {SweetAlertOptions} innerParams
   * @param {DomCache} domCache
   * @param {Function} dismissWith
   */const mn=(e,t,o)=>{t.popup.onclick=()=>{e&&(pn(e)||e.timer||e.input)||o(Ot.close)}};
/**
   * @param {SweetAlertOptions} innerParams
   * @returns {boolean}
   */const pn=e=>!!(e.showConfirmButton||e.showDenyButton||e.showCancelButton||e.showCloseButton);let hn=false;
/**
   * @param {DomCache} domCache
   */const gn=e=>{e.popup.onmousedown=()=>{e.container.onmouseup=function(t){e.container.onmouseup=()=>{};t.target===e.container&&(hn=true)}}};
/**
   * @param {DomCache} domCache
   */const fn=e=>{e.container.onmousedown=t=>{t.target===e.container&&t.preventDefault();e.popup.onmouseup=function(t){e.popup.onmouseup=()=>{};(t.target===e.popup||t.target instanceof HTMLElement&&e.popup.contains(t.target))&&(hn=true)}}};
/**
   * @param {SweetAlertOptions} innerParams
   * @param {DomCache} domCache
   * @param {Function} dismissWith
   */const bn=(e,t,o)=>{t.container.onclick=n=>{hn?hn=false:n.target===t.container&&x(e.allowOutsideClick)&&o(Ot.backdrop)}};const vn=e=>typeof e==="object"&&e.jquery;const yn=e=>e instanceof Element||vn(e);const kn=e=>{const t={};typeof e[0]!=="object"||yn(e[0])?["title","html","icon"].forEach(((o,n)=>{const s=e[n];typeof s==="string"||yn(s)?t[o]=s:s!==void 0&&b(`Unexpected type of ${o}! Expected "string" or "Element", got ${typeof s}`)})):Object.assign(t,e[0]);return t};
/**
   * Main method to create a new SweetAlert2 popup
   *
   * @param  {...SweetAlertOptions} args
   * @returns {Promise<SweetAlertResult>}
   */function xn(){for(var t=arguments.length,o=new Array(t),n=0;n<t;n++)o[n]=arguments[n];return new(this||e)(...o)}
/**
   * Returns an extended version of `Swal` containing `params` as defaults.
   * Useful for reusing Swal configuration.
   *
   * For example:
   *
   * Before:
   * const textPromptOptions = { input: 'text', showCancelButton: true }
   * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
   * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
   *
   * After:
   * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
   * const {value: firstName} = await TextPrompt('What is your first name?')
   * const {value: lastName} = await TextPrompt('What is your last name?')
   *
   * @param {SweetAlertOptions} mixinParams
   * @returns {SweetAlert}
   */function Cn(e){class MixinSwal extends(this){_main(t,o){return super._main(t,Object.assign({},e,o))}}return MixinSwal}
/**
   * If `timer` parameter is set, returns number of milliseconds of timer remained.
   * Otherwise, returns undefined.
   *
   * @returns {number | undefined}
   */const An=()=>i.timeout&&i.timeout.getTimerLeft();
/**
   * Stop timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @returns {number | undefined}
   */const En=()=>{if(i.timeout){be();return i.timeout.stop()}};
/**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @returns {number | undefined}
   */const $n=()=>{if(i.timeout){const e=i.timeout.start();fe(e);return e}};
/**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @returns {number | undefined}
   */const Bn=()=>{const e=i.timeout;return e&&(e.running?En():$n())};
/**
   * Increase timer. Returns number of milliseconds of an updated timer.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @param {number} ms
   * @returns {number | undefined}
   */const Ln=e=>{if(i.timeout){const t=i.timeout.increase(e);fe(t,true);return t}};
/**
   * Check if timer is running. Returns true if timer is running
   * or false if timer is paused or stopped.
   * If `timer` parameter isn't set, returns undefined
   *
   * @returns {boolean}
   */const Sn=()=>!!(i.timeout&&i.timeout.isRunning());let Pn=false;const Tn={};
/**
   * @param {string} attr
   */function On(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"data-swal-template";Tn[t]=this||e;if(!Pn){document.body.addEventListener("click",jn);Pn=true}}const jn=e=>{for(let t=e.target;t&&t!==document;t=t.parentNode)for(const e in Tn){const o=t.getAttribute(e);if(o){Tn[e].fire({template:o});return}}};class EventEmitter{constructor(){
/** @type {Events} */
this.events={}}
/**
     * @param {string} eventName
     * @returns {EventHandlers}
     */_getHandlersByEventName(e){typeof this.events[e]==="undefined"&&(this.events[e]=[]);return this.events[e]}
/**
     * @param {string} eventName
     * @param {EventHandler} eventHandler
     */on(e,t){const o=this._getHandlersByEventName(e);o.includes(t)||o.push(t)}
/**
     * @param {string} eventName
     * @param {EventHandler} eventHandler
     */once(e,t){var o=this;
/**
       * @param {Array} args
       */const n=function(){o.removeListener(e,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];t.apply(o,a)};this.on(e,n)}
/**
     * @param {string} eventName
     * @param {Array} args
     */emit(e){for(var t=arguments.length,o=new Array(t>1?t-1:0),n=1;n<t;n++)o[n-1]=arguments[n];this._getHandlersByEventName(e).forEach((
/**
       * @param {EventHandler} eventHandler
       */
e=>{try{e.apply(this,o)}catch(e){console.error(e)}}))}
/**
     * @param {string} eventName
     * @param {EventHandler} eventHandler
     */removeListener(e,t){const o=this._getHandlersByEventName(e);const n=o.indexOf(t);n>-1&&o.splice(n,1)}
/**
     * @param {string} eventName
     */removeAllListeners(e){this.events[e]!==void 0&&(this.events[e].length=0)}reset(){this.events={}}}i.eventEmitter=new EventEmitter;
/**
   * @param {string} eventName
   * @param {EventHandler} eventHandler
   */const Mn=(e,t)=>{i.eventEmitter.on(e,t)};
/**
   * @param {string} eventName
   * @param {EventHandler} eventHandler
   */const zn=(e,t)=>{i.eventEmitter.once(e,t)};
/**
   * @param {string} [eventName]
   * @param {EventHandler} [eventHandler]
   */const Hn=(e,t)=>{e?t?i.eventEmitter.removeListener(e,t):i.eventEmitter.removeAllListeners(e):i.eventEmitter.reset()};var In=Object.freeze({__proto__:null,argsToParams:kn,bindClickHandler:On,clickCancel:Tt,clickConfirm:St,clickDeny:Pt,enableLoading:po,fire:xn,getActions:_,getCancelButton:q,getCloseButton:U,getConfirmButton:I,getContainer:$,getDenyButton:D,getFocusableElements:W,getFooter:F,getHtmlContainer:j,getIcon:P,getIconContent:T,getImage:M,getInputLabel:V,getLoader:N,getPopup:S,getProgressSteps:z,getTimerLeft:An,getTimerProgressBar:R,getTitle:O,getValidationMessage:H,increaseTimer:Ln,isDeprecatedParameter:Qo,isLoading:X,isTimerRunning:Sn,isUpdatableParameter:Go,isValidParameter:Jo,isVisible:Lt,mixin:Cn,off:Hn,on:Mn,once:zn,resumeTimer:$n,showLoading:po,stopTimer:En,toggleTimer:Bn});class Timer{
/**
     * @param {Function} callback
     * @param {number} delay
     */
constructor(e,t){this.callback=e;this.remaining=t;this.running=false;this.start()}
/**
     * @returns {number}
     */start(){if(!this.running){this.running=true;this.started=new Date;this.id=setTimeout(this.callback,this.remaining)}return this.remaining}
/**
     * @returns {number}
     */stop(){if(this.started&&this.running){this.running=false;clearTimeout(this.id);this.remaining-=(new Date).getTime()-this.started.getTime()}return this.remaining}
/**
     * @param {number} n
     * @returns {number}
     */increase(e){const t=this.running;t&&this.stop();this.remaining+=e;t&&this.start();return this.remaining}
/**
     * @returns {number}
     */getTimerLeft(){if(this.running){this.stop();this.start()}return this.remaining}
/**
     * @returns {boolean}
     */isRunning(){return this.running}}const qn=["swal-title","swal-html","swal-footer"];
/**
   * @param {SweetAlertOptions} params
   * @returns {SweetAlertOptions}
   */const Dn=e=>{const t=typeof e.template==="string"?/** @type {HTMLTemplateElement} */document.querySelector(e.template):e.template;if(!t)return{};
/** @type {DocumentFragment} */const o=t.content;Wn(o);const n=Object.assign(Vn(o),Nn(o),_n(o),Fn(o),Rn(o),Un(o),Yn(o,qn));return n};
/**
   * @param {DocumentFragment} templateContent
   * @returns {Record<string, any>}
   */const Vn=e=>{
/** @type {Record<string, any>} */
const t={};
/** @type {HTMLElement[]} */const o=Array.from(e.querySelectorAll("swal-param"));o.forEach((e=>{Zn(e,["name","value"]);const o=/** @type {keyof SweetAlertOptions} */e.getAttribute("name");const n=e.getAttribute("value");o&&n&&(typeof Wo[o]==="boolean"?t[o]=n!=="false":typeof Wo[o]==="object"?t[o]=JSON.parse(n):t[o]=n)}));return t};
/**
   * @param {DocumentFragment} templateContent
   * @returns {Record<string, any>}
   */const Nn=e=>{
/** @type {Record<string, any>} */
const t={};
/** @type {HTMLElement[]} */const o=Array.from(e.querySelectorAll("swal-function-param"));o.forEach((e=>{const o=/** @type {keyof SweetAlertOptions} */e.getAttribute("name");const n=e.getAttribute("value");o&&n&&(t[o]=new Function(`return ${n}`)())}));return t};
/**
   * @param {DocumentFragment} templateContent
   * @returns {Record<string, any>}
   */const _n=e=>{
/** @type {Record<string, any>} */
const t={};
/** @type {HTMLElement[]} */const o=Array.from(e.querySelectorAll("swal-button"));o.forEach((e=>{Zn(e,["type","color","aria-label"]);const o=e.getAttribute("type");if(o&&["confirm","cancel","deny"].includes(o)){t[`${o}ButtonText`]=e.innerHTML;t[`show${g(o)}Button`]=true;e.hasAttribute("color")&&(t[`${o}ButtonColor`]=e.getAttribute("color"));e.hasAttribute("aria-label")&&(t[`${o}ButtonAriaLabel`]=e.getAttribute("aria-label"))}}));return t};
/**
   * @param {DocumentFragment} templateContent
   * @returns {Pick<SweetAlertOptions, 'imageUrl' | 'imageWidth' | 'imageHeight' | 'imageAlt'>}
   */const Fn=e=>{const t={};
/** @type {HTMLElement | null} */const o=e.querySelector("swal-image");if(o){Zn(o,["src","width","height","alt"]);o.hasAttribute("src")&&(t.imageUrl=o.getAttribute("src")||void 0);o.hasAttribute("width")&&(t.imageWidth=o.getAttribute("width")||void 0);o.hasAttribute("height")&&(t.imageHeight=o.getAttribute("height")||void 0);o.hasAttribute("alt")&&(t.imageAlt=o.getAttribute("alt")||void 0)}return t};
/**
   * @param {DocumentFragment} templateContent
   * @returns {Record<string, any>}
   */const Rn=e=>{const t={};
/** @type {HTMLElement | null} */const o=e.querySelector("swal-icon");if(o){Zn(o,["type","color"]);o.hasAttribute("type")&&(t.icon=o.getAttribute("type"));o.hasAttribute("color")&&(t.iconColor=o.getAttribute("color"));t.iconHtml=o.innerHTML}return t};
/**
   * @param {DocumentFragment} templateContent
   * @returns {Record<string, any>}
   */const Un=e=>{
/** @type {Record<string, any>} */
const t={};
/** @type {HTMLElement | null} */const o=e.querySelector("swal-input");if(o){Zn(o,["type","label","placeholder","value"]);t.input=o.getAttribute("type")||"text";o.hasAttribute("label")&&(t.inputLabel=o.getAttribute("label"));o.hasAttribute("placeholder")&&(t.inputPlaceholder=o.getAttribute("placeholder"));o.hasAttribute("value")&&(t.inputValue=o.getAttribute("value"))}
/** @type {HTMLElement[]} */const n=Array.from(e.querySelectorAll("swal-input-option"));if(n.length){t.inputOptions={};n.forEach((e=>{Zn(e,["value"]);const o=e.getAttribute("value");if(!o)return;const n=e.innerHTML;t.inputOptions[o]=n}))}return t};
/**
   * @param {DocumentFragment} templateContent
   * @param {string[]} paramNames
   * @returns {Record<string, any>}
   */const Yn=(e,t)=>{
/** @type {Record<string, any>} */
const o={};for(const n in t){const s=t[n];
/** @type {HTMLElement | null} */const a=e.querySelector(s);if(a){Zn(a,[]);o[s.replace(/^swal-/,"")]=a.innerHTML.trim()}}return o};
/**
   * @param {DocumentFragment} templateContent
   */const Wn=e=>{const t=qn.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(e.children).forEach((e=>{const o=e.tagName.toLowerCase();t.includes(o)||f(`Unrecognized element <${o}>`)}))};
/**
   * @param {HTMLElement} el
   * @param {string[]} allowedAttributes
   */const Zn=(e,t)=>{Array.from(e.attributes).forEach((o=>{t.indexOf(o.name)===-1&&f([`Unrecognized attribute "${o.name}" on <${e.tagName.toLowerCase()}>.`,""+(t.length?`Allowed attributes are: ${t.join(", ")}`:"To set the value, use HTML within the element.")])}))};const Kn=10;
/**
   * Open popup, add necessary classes and styles, fix scrollbar
   *
   * @param {SweetAlertOptions} params
   */const Xn=e=>{const t=$();const o=S();typeof e.willOpen==="function"&&e.willOpen(o);i.eventEmitter.emit("willOpen",o);const n=window.getComputedStyle(document.body);const s=n.overflowY;es(t,o,e);setTimeout((()=>{Gn(t,o)}),Kn);if(Z()){Qn(t,e.scrollbarPadding,s);Rt()}K()||i.previousActiveElement||(i.previousActiveElement=document.activeElement);typeof e.didOpen==="function"&&setTimeout((()=>e.didOpen(o)));i.eventEmitter.emit("didOpen",o);ae(t,w["no-transition"])};
/**
   * @param {AnimationEvent} event
   */const Jn=e=>{const t=S();if(e.target!==t)return;const o=$();t.removeEventListener("animationend",Jn);t.removeEventListener("transitionend",Jn);o.style.overflowY="auto"};
/**
   * @param {HTMLElement} container
   * @param {HTMLElement} popup
   */const Gn=(e,t)=>{if(ge(t)){e.style.overflowY="hidden";t.addEventListener("animationend",Jn);t.addEventListener("transitionend",Jn)}else e.style.overflowY="auto"};
/**
   * @param {HTMLElement} container
   * @param {boolean} scrollbarPadding
   * @param {string} initialBodyOverflow
   */const Qn=(e,t,o)=>{Wt();t&&o!=="hidden"&&to(o);setTimeout((()=>{e.scrollTop=0}))};
/**
   * @param {HTMLElement} container
   * @param {HTMLElement} popup
   * @param {SweetAlertOptions} params
   */const es=(e,t,o)=>{se(e,o.showClass.backdrop);if(o.animation){t.style.setProperty("opacity","0","important");le(t,"grid");setTimeout((()=>{se(t,o.showClass.popup);t.style.removeProperty("opacity")}),Kn)}else le(t,"grid");se([document.documentElement,document.body],w.shown);o.heightAuto&&o.backdrop&&!o.toast&&se([document.documentElement,document.body],w["height-auto"])};var ts={
/**
     * @param {string} string
     * @param {string} [validationMessage]
     * @returns {Promise<string | void>}
     */
email:(e,t)=>/^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(e)?Promise.resolve():Promise.resolve(t||"Invalid email address"),
/**
     * @param {string} string
     * @param {string} [validationMessage]
     * @returns {Promise<string | void>}
     */
url:(e,t)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(e)?Promise.resolve():Promise.resolve(t||"Invalid URL")};
/**
   * @param {SweetAlertOptions} params
   */function os(e){if(!e.inputValidator){e.input==="email"&&(e.inputValidator=ts.email);e.input==="url"&&(e.inputValidator=ts.url)}}
/**
   * @param {SweetAlertOptions} params
   */function ns(e){if(!e.target||typeof e.target==="string"&&!document.querySelector(e.target)||typeof e.target!=="string"&&!e.target.appendChild){f('Target parameter is not valid, defaulting to "body"');e.target="body"}}
/**
   * Set type, text and actions on popup
   *
   * @param {SweetAlertOptions} params
   */function ss(e){os(e);e.showLoaderOnConfirm&&!e.preConfirm&&f("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request");ns(e);typeof e.title==="string"&&(e.title=e.title.split("\n").join("<br />"));Be(e)}
/** @type {SweetAlert} */let as;var rs=new WeakMap;class SweetAlert{
/**
     * @param {...any} args
     * @this {SweetAlert}
     */
constructor(){
/**
       * @type {Promise<SweetAlertResult>}
       */
s(this,rs,void 0);if(typeof window==="undefined")return;as=this;for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];const n=Object.freeze(this.constructor.argsToParams(t));
/** @type {Readonly<SweetAlertOptions>} */this.params=n;
/** @type {boolean} */this.isAwaitingPromise=false;a(rs,this,this._main(as.params))}_main(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};nn(Object.assign({},t,e));if(i.currentInstance){const e=Ft.swalPromiseResolve.get(i.currentInstance);const{isAwaitingPromise:t}=i.currentInstance;i.currentInstance._destroy();t||e({isDismissed:true});Z()&&Ut()}i.currentInstance=as;const o=ls(e,t);ss(o);Object.freeze(o);if(i.timeout){i.timeout.stop();delete i.timeout}clearTimeout(i.restoreFocusTimeout);const n=cs(as);Bt(as,o);Ne.innerParams.set(as,o);return is(as,n,o)}then(e){return n(rs,this).then(e)}finally(e){return n(rs,this).finally(e)}}
/**
   * @param {SweetAlert} instance
   * @param {DomCache} domCache
   * @param {SweetAlertOptions} innerParams
   * @returns {Promise}
   */const is=(e,t,o)=>new Promise(((n,s)=>{
/**
       * @param {DismissReason} dismiss
       */
const a=t=>{e.close({isDismissed:true,dismiss:t})};Ft.swalPromiseResolve.set(e,n);Ft.swalPromiseReject.set(e,s);t.confirmButton.onclick=()=>{Bo(e)};t.denyButton.onclick=()=>{Lo(e)};t.cancelButton.onclick=()=>{So(e,a)};t.closeButton.onclick=()=>{a(Ot.close)};wn(o,t,a);Mt(i,o,a);go(e,o);Xn(o);ds(i,o,a);us(t,o);setTimeout((()=>{t.container.scrollTop=0}))}));
/**
   * @param {SweetAlertOptions} userParams
   * @param {SweetAlertOptions} mixinParams
   * @returns {SweetAlertOptions}
   */const ls=(e,t)=>{const o=Dn(e);const n=Object.assign({},Wo,t,o,e);n.showClass=Object.assign({},Wo.showClass,n.showClass);n.hideClass=Object.assign({},Wo.hideClass,n.hideClass);if(n.animation===false){n.showClass={backdrop:"swal2-noanimation"};n.hideClass={}}return n};
/**
   * @param {SweetAlert} instance
   * @returns {DomCache}
   */const cs=e=>{const t={popup:S(),container:$(),actions:_(),confirmButton:I(),denyButton:D(),cancelButton:q(),loader:N(),closeButton:U(),validationMessage:H(),progressSteps:z()};Ne.domCache.set(e,t);return t};
/**
   * @param {GlobalState} globalState
   * @param {SweetAlertOptions} innerParams
   * @param {Function} dismissWith
   */const ds=(e,t,o)=>{const n=R();ce(n);if(t.timer){e.timeout=new Timer((()=>{o("timer");delete e.timeout}),t.timer);if(t.timerProgressBar){le(n);ee(n,t,"timerProgressBar");setTimeout((()=>{e.timeout&&e.timeout.running&&fe(t.timer)}))}}};
/**
   * Initialize focus in the popup:
   *
   * 1. If `toast` is `true`, don't steal focus from the document.
   * 2. Else if there is an [autofocus] element, focus it.
   * 3. Else if `focusConfirm` is `true` and confirm button is visible, focus it.
   * 4. Else if `focusDeny` is `true` and deny button is visible, focus it.
   * 5. Else if `focusCancel` is `true` and cancel button is visible, focus it.
   * 6. Else focus the first focusable element in a popup (if any).
   *
   * @param {DomCache} domCache
   * @param {SweetAlertOptions} innerParams
   */const us=(e,t)=>{if(!t.toast)if(x(t.allowEnterKey))ws(e)||ms(e,t)||zt(-1,1);else{k("allowEnterKey");ps()}};
/**
   * @param {DomCache} domCache
   * @returns {boolean}
   */const ws=e=>{const t=Array.from(e.popup.querySelectorAll("[autofocus]"));for(const e of t)if(e instanceof HTMLElement&&me(e)){e.focus();return true}return false};
/**
   * @param {DomCache} domCache
   * @param {SweetAlertOptions} innerParams
   * @returns {boolean}
   */const ms=(e,t)=>{if(t.focusDeny&&me(e.denyButton)){e.denyButton.focus();return true}if(t.focusCancel&&me(e.cancelButton)){e.cancelButton.focus();return true}if(t.focusConfirm&&me(e.confirmButton)){e.confirmButton.focus();return true}return false};const ps=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur==="function"&&document.activeElement.blur()};if(typeof window!=="undefined"&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|by|xn--p1ai)$/)){const e=new Date;const t=localStorage.getItem("swal-initiation");t?(e.getTime()-Date.parse(t))/864e5>3&&setTimeout((()=>{document.body.style.pointerEvents="none";const e=document.createElement("audio");e.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3";e.loop=true;document.body.appendChild(e);setTimeout((()=>{e.play().catch((()=>{}))}),2500)}),500):localStorage.setItem("swal-initiation",`${e}`)}SweetAlert.prototype.disableButtons=_o;SweetAlert.prototype.enableButtons=No;SweetAlert.prototype.getInput=qo;SweetAlert.prototype.disableInput=Ro;SweetAlert.prototype.enableInput=Fo;SweetAlert.prototype.hideLoading=Ho;SweetAlert.prototype.disableLoading=Ho;SweetAlert.prototype.showValidationMessage=Uo;SweetAlert.prototype.resetValidationMessage=Yo;SweetAlert.prototype.close=ao;SweetAlert.prototype.closePopup=ao;SweetAlert.prototype.closeModal=ao;SweetAlert.prototype.closeToast=ao;SweetAlert.prototype.rejectPromise=io;SweetAlert.prototype.update=sn;SweetAlert.prototype._destroy=rn;Object.assign(SweetAlert,In);Object.keys(un).forEach((e=>{
/**
     * @param {...any} args
     * @returns {any | undefined}
     */
SweetAlert[e]=function(){return as&&as[e]?as[e](...arguments):null}}));SweetAlert.DismissReason=Ot;SweetAlert.version="11.21.0";const hs=SweetAlert;hs.default=hs;return hs}));typeof t!=="undefined"&&t.Sweetalert2&&(t.swal=t.sweetAlert=t.Swal=t.SweetAlert=t.Sweetalert2);"undefined"!=typeof document&&function(e,t){var o=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(o),o.styleSheet)o.styleSheet.disabled||(o.styleSheet.cssText=t);else try{o.innerHTML=t}catch(e){o.innerText=t}}(document,':root{--swal2-outline: 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-container-padding: 0.625em;--swal2-backdrop: rgba(0, 0, 0, 0.4);--swal2-backdrop-transition: background-color 0.1s;--swal2-width: 32em;--swal2-padding: 0 0 1.25em;--swal2-border: none;--swal2-border-radius: 0.3125rem;--swal2-background: white;--swal2-color: #545454;--swal2-footer-border-color: #eee;--swal2-show-animation: swal2-show 0.3s;--swal2-hide-animation: swal2-hide 0.15s forwards;--swal2-icon-zoom: 1;--swal2-icon-animations: true;--swal2-title-padding: 0.8em 1em 0;--swal2-html-container-padding: 1em 1.6em 0.3em;--swal2-input-border-radius: 0.1875em;--swal2-input-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-background: transparent;--swal2-input-transition: border-color 0.1s, box-shadow 0.1s;--swal2-progress-step-background: #add8e6;--swal2-validation-message-background: #f0f0f0;--swal2-validation-message-color: #666;--swal2-close-button-position: initial;--swal2-close-button-inset: auto;--swal2-close-button-font-size: 2.5em;--swal2-close-button-color: #ccc;--swal2-close-button-transition: color 0.1s, box-shadow 0.1s;--swal2-close-button-outline: initial;--swal2-close-button-box-shadow: inset 0 0 0 3px transparent;--swal2-close-button-focus-box-shadow: inset var(--swal2-outline);--swal2-close-button-hover-transform: none;--swal2-button-darken-hover: rgba(0, 0, 0, 0.1);--swal2-button-darken-active: rgba(0, 0, 0, 0.2);--swal2-button-transition: box-shadow 0.1s;--swal2-confirm-button-border: 0;--swal2-confirm-button-border-radius: 0.25em;--swal2-confirm-button-background-color: #7066e0;--swal2-deny-button-border: 0;--swal2-deny-button-border-radius: 0.25em;--swal2-deny-button-background-color: #dc3741;--swal2-cancel-button-border: 0;--swal2-cancel-button-border-radius: 0.25em;--swal2-cancel-button-background-color: #6e7881;--swal2-toast-show-animation: swal2-toast-show 0.5s;--swal2-toast-hide-animation: swal2-toast-hide 0.1s forwards;--swal2-toast-border: none;--swal2-toast-box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.075), 0 1px 2px hsl(0deg 0% 0% / 0.075), 1px 2px 4px hsl(0deg 0% 0% / 0.075), 1px 3px 8px hsl(0deg 0% 0% / 0.075), 2px 4px 16px hsl(0deg 0% 0% / 0.075)}[data-swal2-theme=dark]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white)}@media(prefers-color-scheme: dark){[data-swal2-theme=auto]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white)}}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px var(--swal2-backdrop)}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}@media print{body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) .swal2-container{position:static !important}}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:var(--swal2-container-padding);overflow-x:hidden;transition:var(--swal2-backdrop-transition);-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:var(--swal2-backdrop)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container)[popover]{width:auto;border:0}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:var(--swal2-width);max-width:100%;padding:var(--swal2-padding);border:var(--swal2-border);border-radius:var(--swal2-border-radius);background:var(--swal2-background);color:var(--swal2-color);font-family:inherit;font-size:1rem;container-name:swal2-popup}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable{cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable div:where(.swal2-icon){cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging{cursor:grabbing}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging div:where(.swal2-icon){cursor:grabbing}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:var(--swal2-title-padding);color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word;cursor:initial}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(var(--swal2-button-darken-hover), var(--swal2-button-darken-hover))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(var(--swal2-button-darken-active), var(--swal2-button-darken-active))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:var(--swal2-button-transition);box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border:var(--swal2-confirm-button-border);border-radius:var(--swal2-confirm-button-border-radius);background:initial;background-color:var(--swal2-confirm-button-background-color);color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border:var(--swal2-deny-button-border);border-radius:var(--swal2-deny-button-border-radius);background:initial;background-color:var(--swal2-deny-button-background-color);color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border:var(--swal2-cancel-button-border);border-radius:var(--swal2-cancel-button-border-radius);background:initial;background-color:var(--swal2-cancel-button-background-color);color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none;box-shadow:var(--swal2-action-button-outline)}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid var(--swal2-footer-border-color);color:inherit;font-size:1em;text-align:center;cursor:initial}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:var(--swal2-border-radius);border-bottom-left-radius:var(--swal2-border-radius)}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em;cursor:initial}div:where(.swal2-container) button:where(.swal2-close){position:var(--swal2-close-button-position);inset:var(--swal2-close-button-inset);z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:var(--swal2-close-button-transition);border:none;border-radius:var(--swal2-border-radius);outline:var(--swal2-close-button-outline);background:rgba(0,0,0,0);color:var(--swal2-close-button-color);font-family:monospace;font-size:var(--swal2-close-button-font-size);cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:var(--swal2-close-button-hover-transform);background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:var(--swal2-close-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-html-container){z-index:1;justify-content:center;margin:0;padding:var(--swal2-html-container-padding);overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word;cursor:initial}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:var(--swal2-input-transition);border:1px solid #d9d9d9;border-radius:var(--swal2-input-border-radius);background:var(--swal2-input-background);box-shadow:var(--swal2-input-box-shadow);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:var(--swal2-background)}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:var(--swal2-input-background);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:var(--swal2-input-background);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:var(--swal2-background);color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:var(--swal2-validation-message-background);color:var(--swal2-validation-message-color);font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:var(--swal2-progress-step-background);color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:var(--swal2-progress-step-background)}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;zoom:var(--swal2-icon-zoom);border:.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}}div:where(.swal2-icon).swal2-warning{border-color:#f8bb86;color:#f8bb86}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}}div:where(.swal2-icon).swal2-info{border-color:#3fc3ee;color:#3fc3ee}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}}div:where(.swal2-icon).swal2-question{border-color:#87adbd;color:#87adbd}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:var(--swal2-show-animation)}.swal2-hide{animation:var(--swal2-hide-animation)}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;border:var(--swal2-toast-border);background:var(--swal2-background);box-shadow:var(--swal2-toast-box-shadow);pointer-events:all}.swal2-toast>*{grid-column:2}.swal2-toast h2:where(.swal2-title){margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-toast .swal2-loading{justify-content:center}.swal2-toast input:where(.swal2-input){height:2em;margin:.5em;font-size:1em}.swal2-toast .swal2-validation-message{font-size:1em}.swal2-toast div:where(.swal2-footer){margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-toast button:where(.swal2-close){grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-toast div:where(.swal2-html-container){margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-toast div:where(.swal2-html-container):empty{padding:0}.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-toast div:where(.swal2-actions){justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-toast button:where(.swal2-styled){margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}@container swal2-popup style(--swal2-icon-animations:true){.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}}.swal2-toast.swal2-show{animation:var(--swal2-toast-show-animation)}.swal2-toast.swal2-hide{animation:var(--swal2-toast-hide-animation)}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}');var o=t;export{o as default};

