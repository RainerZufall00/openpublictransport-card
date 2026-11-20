function e(e,t,i,n){var a,o=arguments.length,r=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(o<3?a(r):o>3?a(t,i,r):a(t,i))||r);return o>3&&r&&Object.defineProperty(t,i,r),r}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,i=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),a=new WeakMap;let o=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(i&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=a.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&a.set(t,e))}return e}toString(){return this.cssText}};const r=(e,...t)=>{const i=1===e.length?e[0]:t.reduce((t,i,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[n+1],e[0]);return new o(i,e,n)},s=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new o("string"==typeof e?e:e+"",void 0,n))(t)})(e):e,{is:l,defineProperty:d,getOwnPropertyDescriptor:h,getOwnPropertyNames:p,getOwnPropertySymbols:c,getPrototypeOf:u}=Object,g=globalThis,m=g.trustedTypes,f=m?m.emptyScript:"",b=g.reactiveElementPolyfillSupport,y=(e,t)=>e,v={toAttribute(e,t){switch(t){case Boolean:e=e?f:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},w=(e,t)=>!l(e,t),x={attribute:!0,type:String,converter:v,reflect:!1,useDefault:!1,hasChanged:w};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),g.litPropertyMetadata??=new WeakMap;let A=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=x){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(e,i,t);void 0!==n&&d(this.prototype,e,n)}}static getPropertyDescriptor(e,t,i){const{get:n,set:a}=h(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:n,set(t){const o=n?.call(this);a?.call(this,t),this.requestUpdate(e,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??x}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const e=u(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const e=this.properties,t=[...p(e),...c(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(s(e))}else void 0!==e&&t.push(s(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,n)=>{if(i)e.adoptedStyleSheets=n.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const i of n){const n=document.createElement("style"),a=t.litNonce;void 0!==a&&n.setAttribute("nonce",a),n.textContent=i.cssText,e.appendChild(n)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,i);if(void 0!==n&&!0===i.reflect){const a=(void 0!==i.converter?.toAttribute?i.converter:v).toAttribute(t,i.type);this._$Em=e,null==a?this.removeAttribute(n):this.setAttribute(n,a),this._$Em=null}}_$AK(e,t){const i=this.constructor,n=i._$Eh.get(e);if(void 0!==n&&this._$Em!==n){const e=i.getPropertyOptions(n),a="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:v;this._$Em=n;const o=a.fromAttribute(t,e.type);this[n]=o??this._$Ej?.get(n)??o,this._$Em=null}}requestUpdate(e,t,i,n=!1,a){if(void 0!==e){const o=this.constructor;if(!1===n&&(a=this[e]),i??=o.getPropertyOptions(e),!((i.hasChanged??w)(a,t)||i.useDefault&&i.reflect&&a===this._$Ej?.get(e)&&!this.hasAttribute(o._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:n,wrapped:a},o){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,o??t??this[e]),!0!==a||void 0!==o)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===n&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e){const{wrapped:e}=i,n=this[t];!0!==e||this._$AL.has(t)||void 0===n||this.C(t,void 0,i,n)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[y("elementProperties")]=new Map,A[y("finalized")]=new Map,b?.({ReactiveElement:A}),(g.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const k=globalThis,C=e=>e,z=k.trustedTypes,_=z?z.createPolicy("lit-html",{createHTML:e=>e}):void 0,E="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,T="?"+S,U=`<${T}>`,R=document,I=()=>R.createComment(""),L=e=>null===e||"object"!=typeof e&&"function"!=typeof e,q=Array.isArray,N="[ \t\n\f\r]",j=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,D=/-->/g,K=/>/g,F=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),H=/'/g,B=/"/g,Q=/^(?:script|style|textarea|title)$/i,P=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),G=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),Z=new WeakMap,Y=R.createTreeWalker(R,129);function M(e,t){if(!q(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==_?_.createHTML(t):t}const J=(e,t)=>{const i=e.length-1,n=[];let a,o=2===t?"<svg>":3===t?"<math>":"",r=j;for(let t=0;t<i;t++){const i=e[t];let s,l,d=-1,h=0;for(;h<i.length&&(r.lastIndex=h,l=r.exec(i),null!==l);)h=r.lastIndex,r===j?"!--"===l[1]?r=D:void 0!==l[1]?r=K:void 0!==l[2]?(Q.test(l[2])&&(a=RegExp("</"+l[2],"g")),r=F):void 0!==l[3]&&(r=F):r===F?">"===l[0]?(r=a??j,d=-1):void 0===l[1]?d=-2:(d=r.lastIndex-l[2].length,s=l[1],r=void 0===l[3]?F:'"'===l[3]?B:H):r===B||r===H?r=F:r===D||r===K?r=j:(r=F,a=void 0);const p=r===F&&e[t+1].startsWith("/>")?" ":"";o+=r===j?i+U:d>=0?(n.push(s),i.slice(0,d)+E+i.slice(d)+S+p):i+S+(-2===d?t:p)}return[M(e,o+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),n]};class W{constructor({strings:e,_$litType$:t},i){let n;this.parts=[];let a=0,o=0;const r=e.length-1,s=this.parts,[l,d]=J(e,t);if(this.el=W.createElement(l,i),Y.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(n=Y.nextNode())&&s.length<r;){if(1===n.nodeType){if(n.hasAttributes())for(const e of n.getAttributeNames())if(e.endsWith(E)){const t=d[o++],i=n.getAttribute(e).split(S),r=/([.?@])?(.*)/.exec(t);s.push({type:1,index:a,name:r[2],strings:i,ctor:"."===r[1]?te:"?"===r[1]?ie:"@"===r[1]?ne:ee}),n.removeAttribute(e)}else e.startsWith(S)&&(s.push({type:6,index:a}),n.removeAttribute(e));if(Q.test(n.tagName)){const e=n.textContent.split(S),t=e.length-1;if(t>0){n.textContent=z?z.emptyScript:"";for(let i=0;i<t;i++)n.append(e[i],I()),Y.nextNode(),s.push({type:2,index:++a});n.append(e[t],I())}}}else if(8===n.nodeType)if(n.data===T)s.push({type:2,index:a});else{let e=-1;for(;-1!==(e=n.data.indexOf(S,e+1));)s.push({type:7,index:a}),e+=S.length-1}a++}}static createElement(e,t){const i=R.createElement("template");return i.innerHTML=e,i}}function O(e,t,i=e,n){if(t===G)return t;let a=void 0!==n?i._$Co?.[n]:i._$Cl;const o=L(t)?void 0:t._$litDirective$;return a?.constructor!==o&&(a?._$AO?.(!1),void 0===o?a=void 0:(a=new o(e),a._$AT(e,i,n)),void 0!==n?(i._$Co??=[])[n]=a:i._$Cl=a),void 0!==a&&(t=O(e,a._$AS(e,t.values),a,n)),t}class X{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,n=(e?.creationScope??R).importNode(t,!0);Y.currentNode=n;let a=Y.nextNode(),o=0,r=0,s=i[0];for(;void 0!==s;){if(o===s.index){let t;2===s.type?t=new $(a,a.nextSibling,this,e):1===s.type?t=new s.ctor(a,s.name,s.strings,this,e):6===s.type&&(t=new ae(a,this,e)),this._$AV.push(t),s=i[++r]}o!==s?.index&&(a=Y.nextNode(),o++)}return Y.currentNode=R,n}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class ${get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,n){this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=O(this,e,t),L(e)?e===V||null==e||""===e?(this._$AH!==V&&this._$AR(),this._$AH=V):e!==this._$AH&&e!==G&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>q(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==V&&L(this._$AH)?this._$AA.nextSibling.data=e:this.T(R.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,n="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=W.createElement(M(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(t);else{const e=new X(n,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=Z.get(e.strings);return void 0===t&&Z.set(e.strings,t=new W(e)),t}k(e){q(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,n=0;for(const a of e)n===t.length?t.push(i=new $(this.O(I()),this.O(I()),this,this.options)):i=t[n],i._$AI(a),n++;n<t.length&&(this._$AR(i&&i._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=C(e).nextSibling;C(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class ee{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,n,a){this.type=1,this._$AH=V,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=a,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=V}_$AI(e,t=this,i,n){const a=this.strings;let o=!1;if(void 0===a)e=O(this,e,t,0),o=!L(e)||e!==this._$AH&&e!==G,o&&(this._$AH=e);else{const n=e;let r,s;for(e=a[0],r=0;r<a.length-1;r++)s=O(this,n[i+r],t,r),s===G&&(s=this._$AH[r]),o||=!L(s)||s!==this._$AH[r],s===V?e=V:e!==V&&(e+=(s??"")+a[r+1]),this._$AH[r]=s}o&&!n&&this.j(e)}j(e){e===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class te extends ee{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===V?void 0:e}}class ie extends ee{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==V)}}class ne extends ee{constructor(e,t,i,n,a){super(e,t,i,n,a),this.type=5}_$AI(e,t=this){if((e=O(this,e,t,0)??V)===G)return;const i=this._$AH,n=e===V&&i!==V||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,a=e!==V&&(i===V||n);n&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ae{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){O(this,e)}}const oe=k.litHtmlPolyfillSupport;oe?.(W,$),(k.litHtmlVersions??=[]).push("3.3.2");const re=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class se extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const n=i?.renderBefore??t;let a=n._$litPart$;if(void 0===a){const e=i?.renderBefore??null;n._$litPart$=a=new $(t.insertBefore(I(),e),e,void 0,i??{})}return a._$AI(e),a})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return G}}se._$litElement$=!0,se.finalized=!0,re.litElementHydrateSupport?.({LitElement:se});const le=re.litElementPolyfillSupport;le?.({LitElement:se}),(re.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const de=e=>(t,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},he={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:w},pe=(e=he,t,i)=>{const{kind:n,metadata:a}=i;let o=globalThis.litPropertyMetadata.get(a);if(void 0===o&&globalThis.litPropertyMetadata.set(a,o=new Map),"setter"===n&&((e=Object.create(e)).wrapped=!0),o.set(i.name,e),"accessor"===n){const{name:n}=i;return{set(i){const a=t.get.call(this);t.set.call(this,i),this.requestUpdate(n,a,e,!0,i)},init(t){return void 0!==t&&this.C(n,void 0,e,t),t}}}if("setter"===n){const{name:n}=i;return function(i){const a=this[n];t.call(this,i),this.requestUpdate(n,a,e,!0,i)}}throw Error("Unsupported decorator location: "+n)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ce(e){return(t,i)=>"object"==typeof i?pe(e,t,i):((e,t,i)=>{const n=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),n?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ue(e){return ce({...e,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function ge(e,t){return(t,i,n)=>((e,t,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,i),i))(t,i,{get(){return(t=>t.renderRoot?.querySelector(e)??null)(this)}})}const me=r`
  /* The card fills the cell a section grid gives it, so that ha-card's
     max-height has a height to resolve against. With a fixed row count the
     layout's body then scrolls inside the cell instead of the card being drawn
     over the one below; with the row count on auto the cell is as tall as the
     card, and this changes nothing. */
  :host {
    height: 100%;
  }

  /* theme: ha, and the palette before a theme is applied. Everything is taken
     from the Home Assistant palette and type, so the card follows the
     dashboard's theme — light, dark or custom — instead of carrying colours of
     its own. */
  :host {
    --opt-bg: var(--ha-card-background, var(--card-background-color));
    --opt-text: var(--primary-text-color);
    --opt-text-secondary: var(--secondary-text-color);
    --opt-border: var(--divider-color);
    --opt-accent: var(--primary-color);
    /* Readable text on top of an accent-coloured surface (line badges). */
    --opt-on-accent: var(--text-primary-color);
    --opt-delay-red: var(--error-color);
    --opt-delay-green: var(--success-color);
    --opt-delay-yellow: var(--warning-color);
    /* Readable text on top of the delay colours (delay badges, the banner). */
    --opt-on-delay: var(--text-primary-color);
    /* Home Assistant's own heading: no band and no rule, no capitals, and the
       size and weight of its heading card's title. The entities card's 24px
       title outweighs a departure list below it. */
    --opt-header-bg: transparent;
    --opt-header-rule: transparent;
    --opt-header-font-size: var(--ha-font-size-l, 16px);
    --opt-header-font-weight: var(--ha-font-weight-normal, 400);
    --opt-header-line-height: var(--ha-line-height-normal, 1.6);
    /* Labels (column headings, the station line) in sentence case, untracked. */
    --opt-caps: none;
    --opt-tracking: 0;
    /* Small text on Home Assistant's scale: labels, countdowns, chips, badges. */
    --opt-font-size-label: var(--ha-font-size-s, 12px);
    --opt-font-size-badge: var(--ha-font-size-s, 12px);
    --opt-row-hover: color-mix(in srgb, var(--primary-text-color) 6%, transparent);
    --opt-font-family: var(--ha-font-family-body, Roboto, Noto, sans-serif);
    --opt-font-weight-medium: var(--ha-font-weight-medium, 500);
  }

  /* The departure board, dark: white on near-black, with an amber accent for
     what needs attention — the countdown, a changed platform, the header's
     rule — in a bold condensed face that stays legible at a distance on a
     wall-mounted tablet. The face is embedded (see fonts.ts). */
  :host([data-theme="dark"]) {
    --opt-bg: #0b0f17;
    --opt-text: #f5f7fa;
    /* 7.6:1 on the board. */
    --opt-text-secondary: #9aa4b2;
    --opt-border: #1c2330;
    /* card-mod can set --opt-board-accent to recolour the board. */
    --opt-accent: var(--opt-board-accent, #ffc233);
    --opt-on-accent: #0b0f17;
    /* Accent as text: on the dark board the accent itself reads (12:1). */
    --opt-accent-text: var(--opt-accent);
    /* Red and green as text on the board: 7.5:1 and 11:1. As badge fills
       they carry black figures. */
    --opt-delay-red: #ff7a6b;
    --opt-delay-green: #4ade80;
    --opt-delay-yellow: #fdd835;
    --opt-on-delay: #000000;
    /* The disruption band is a fill of its own: the text red above would
       carry white at only 2.6:1. White on this one measures 4.6:1. */
    --opt-banner-bg: #d92d20;
    --opt-banner-text: #ffffff;
    --opt-header-bg: transparent;
    --opt-header-rule: var(--opt-accent);
    --opt-header-rule-width: 2px;
    --opt-header-font-size: 16px;
    --opt-header-font-weight: 700;
    --opt-header-line-height: normal;
    --opt-caps: uppercase;
    --opt-tracking: 1;
    --opt-font-size-label: 14px;
    --opt-font-size-badge: 15px;
    --opt-row-hover: rgba(255, 255, 255, 0.04);
    --opt-font-family: "OPT Board", "Barlow Semi Condensed", "Roboto Condensed", "Arial Narrow", sans-serif;
    /* The embedded face has 600 and 700 only; nothing on the board is
       lighter than 600. */
    --opt-font-weight-medium: 600;
    /* Board-only parts (boardStyles). */
    --opt-platform-border: #3a4456;
    --opt-countdown-bg: transparent;
    --opt-countdown-text: var(--opt-accent);
    --opt-chip-bg: #1c2330;
  }

  /* The same board on white. Amber does not read as text on white (1.6:1),
     so it is only ever a fill here — the countdown pill, a changed platform,
     the rule — and its text role goes to a dark ochre. */
  :host([data-theme="light"]) {
    --opt-bg: #ffffff;
    --opt-text: #0f141c;
    /* 6.0:1 on white, 5.5:1 on the header band. */
    --opt-text-secondary: #5a6472;
    --opt-border: #e3e7ec;
    --opt-accent: var(--opt-board-accent, #ffc233);
    --opt-on-accent: #0f141c;
    /* 5.9:1 on white. */
    --opt-accent-text: #8a5a00;
    /* 6.0:1 and 5.0:1 on white, and with white figures as badge fills. */
    --opt-delay-red: #c0261a;
    --opt-delay-green: #15803d;
    /* A dark amber for notice marks and transfer risk: 3.6:1, above the 3:1
       an icon needs. */
    --opt-delay-yellow: #b07d00;
    --opt-on-delay: #ffffff;
    --opt-banner-bg: #d92d20;
    --opt-banner-text: #ffffff;
    --opt-header-bg: #f4f6f9;
    --opt-header-rule: var(--opt-accent);
    --opt-header-rule-width: 3px;
    --opt-header-font-size: 16px;
    --opt-header-font-weight: 700;
    --opt-header-line-height: normal;
    --opt-caps: uppercase;
    --opt-tracking: 1;
    --opt-font-size-label: 14px;
    --opt-font-size-badge: 15px;
    --opt-row-hover: rgba(15, 20, 28, 0.03);
    --opt-font-family: "OPT Board", "Barlow Semi Condensed", "Roboto Condensed", "Arial Narrow", sans-serif;
    --opt-font-weight-medium: 600;
    --opt-platform-border: #cbd2db;
    --opt-countdown-bg: #f1f3f6;
    --opt-countdown-text: #0f141c;
    --opt-chip-bg: #f1f3f6;
  }
`,fe=r`
  :host {
    display: block;
  }

  ha-card {
    background: var(--opt-bg);
    color: var(--opt-text);
    overflow: hidden;
    font-family: var(--opt-font-family);
    display: flex;
    flex-direction: column;
    /* The card takes the height its content needs, up to the height of the
       cell it is given (see hostStyles). With a fixed row count that is less
       than a long journey needs, and the layout's body scrolls; with the row
       count on auto the cell grows with the card. */
    max-height: 100%;
  }

  /* The layouts take the height their content needs; the card grows with them,
     so a journey with more legs is not cut off by a fixed card height. */
  openpublictransport-table-layout,
  openpublictransport-next-layout,
  openpublictransport-compact-layout,
  openpublictransport-trip-layout {
    display: flex;
    flex-direction: column;
    min-height: 0;
  }

  .card-header,
  .disruption-banner {
    flex-shrink: 0;
  }

  /* Each layout's body is what scrolls when the card is given less height than
     it needs — the header and a disruption banner stay put. Only the table's
     body used to: the others were clipped at the cell's edge, so a trip card
     at its default five rows lost its alternatives with no way to reach them. */
  .card-content,
  .trip-container,
  .compact-container,
  .next-container {
    min-height: 0;
    overflow-y: auto;
  }

  /* Icon sizing fallback: keeps legacy mdc variable and explicit dimensions in sync.
     The flex box is not cosmetic: an ha-icon holds an inline-flex ha-svg-icon,
     so as a block it puts that child on a text baseline and the glyph lands
     about 2px below the middle of the icon's own box — enough to read as
     misaligned beside a label. Laying the child out as a flex item centres the
     glyph in its box, which is what makes Home Assistant's own headings line
     up, and removes any need to nudge icons by hand. */
  ha-icon {
    --mdc-icon-size: var(--opt-icon-size, 24px);
    width: var(--opt-icon-size, 24px);
    height: var(--opt-icon-size, 24px);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* The header is the one place the themes part ways in shape rather than
     colour: the board's band of tracked capitals under a rule, or Home
     Assistant's own heading. Each theme's palette says which. */
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 12px 16px;
    background: var(--opt-header-bg);
    border-bottom: var(--opt-header-rule-width, 1px) solid var(--opt-header-rule);
    font-size: var(--opt-header-font-size);
    font-weight: var(--opt-header-font-weight);
    line-height: var(--opt-header-line-height);
    text-transform: var(--opt-caps);
    letter-spacing: calc(var(--opt-tracking) * 1px);
  }

  .card-header .station-name {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /* The clock is secondary to the station, and keeps the body size under a
     title that is larger than it. */
  .card-header .current-time {
    font-size: var(--ha-font-size-m, 14px);
    font-variant-numeric: tabular-nums;
    color: var(--opt-text-secondary);
    margin-left: 12px;
    flex-shrink: 0;
  }

  /* The table's own box, so its columns can answer to the card's width (see
     the container query below). */
  .card-content {
    container-type: inline-size;
    /* The last row's own padding and this make Home Assistant's 16px below the
       content. */
    padding: 0 0 8px;
  }

  /* Disruption banner */
  .disruption-banner {
    background: var(--opt-banner-bg, var(--opt-delay-red));
    color: var(--opt-banner-text, var(--opt-on-delay));
    padding: 8px 16px;
    font-size: var(--ha-font-size-s, 12px);
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .disruption-banner ha-icon {
    --opt-icon-size: 16px;
    flex-shrink: 0;
  }

  /* The banner is a button that lists every disruption: reset the button's
     own look so it stays the band it was. */
  button.disruption-banner {
    width: 100%;
    border: none;
    margin: 0;
    font: inherit;
    font-size: var(--ha-font-size-s, 12px);
    text-align: start;
    cursor: pointer;
  }

  .disruption-banner .disruption-text {
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .disruption-banner .disruption-more {
    flex-shrink: 0;
    font-weight: 700;
    text-decoration: underline;
  }

  button.disruption-banner:focus-visible,
  .notice-button:focus-visible {
    outline: 2px solid var(--opt-accent);
    outline-offset: -2px;
  }

  /* How long ago the data was fetched (show_data_age). */
  .data-age {
    padding: 0 16px 12px;
    font-size: var(--opt-font-size-label);
    color: var(--opt-text-secondary);
    font-variant-numeric: tabular-nums;
  }

  /* Table layout. The table is as wide as the card and never wider: the
     destination takes whatever the other columns leave and gives way first. */
  .departure-table {
    width: 100%;
    border-collapse: collapse;
  }

  /* 12px between columns, and Home Assistant's 16px inset at either edge, so
     the first column starts on the header's text and on the dashboard's own
     column. Twelve pixels a side on every cell spent 96px of a 384px card on
     padding and pushed the platform column off it. */
  .departure-table th,
  .departure-table td {
    padding: 8px 6px;
  }

  .departure-table th:first-child,
  .departure-table td:first-child {
    padding-left: 16px;
  }

  .departure-table th:last-child,
  .departure-table td:last-child {
    padding-right: 16px;
  }

  .departure-table thead th {
    text-align: left;
    font-size: var(--opt-font-size-label);
    font-weight: var(--opt-font-weight-medium);
    text-transform: var(--opt-caps);
    letter-spacing: calc(var(--opt-tracking) * 0.5px);
    white-space: nowrap;
    color: var(--opt-text-secondary);
    /* keep the header row pinned at the top of the scrolling list */
    position: sticky;
    top: 0;
    z-index: 2;
    background: var(--opt-bg);
    /* divider that stays attached to the cell (border-bottom can detach with collapse) */
    box-shadow: inset 0 -1px 0 var(--opt-border);
  }

  .departure-table tbody tr {
    border-bottom: 1px solid var(--opt-border);
    transition: background-color 0.15s ease;
  }

  .departure-table tbody tr:hover {
    background: var(--opt-row-hover);
  }

  .departure-table tbody tr:last-child {
    border-bottom: none;
  }

  .departure-table td {
    font-size: var(--ha-font-size-m, 14px);
    vertical-align: middle;
  }

  /* Time column: the time that will actually happen, the delay that explains
     it, and the countdown under both. */
  .time-cell {
    white-space: nowrap;
    font-variant-numeric: tabular-nums;
  }

  .time-departure {
    font-weight: var(--opt-font-weight-medium);
  }

  /* A time and the delay badge beside it, the badge centred on the time. Set on
     the time's baseline, the badge's figures lined up but its pill did not:
     they carry no descenders, so the pill's leading and descent all hang below
     them — 4.4px under the time's digits against 1.4px above. Centring the two
     boxes puts the pill's middle on the digits' middle, within 0.3px, in
     whatever face the theme draws them. */
  .time-line {
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }

  .time-countdown {
    display: block;
    font-size: var(--opt-font-size-label);
    color: var(--opt-text-secondary);
    margin-top: 2px;
  }

  /* Line cell. The vehicle icon is the card's 16px, not ha-icon's 24px
     default: the line badge is what identifies the service, and the vehicle
     beside it only qualifies it. */
  .line-cell {
    --opt-icon-size: 16px;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .line-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 36px;
    padding: 2px 6px;
    border-radius: 4px;
    font-weight: 700;
    font-size: var(--opt-font-size-badge);
    background: var(--opt-accent);
    color: var(--opt-on-accent);
  }

  /* Destination: the rest of the row. A zero max-width lets a table cell
     shrink below its text, so the name ellipsises instead of widening the
     table past the card; the 100% width hands it every pixel the other
     columns do not need. */
  .destination-cell {
    width: 100%;
    max-width: 0;
    font-weight: 500;
  }

  /* A departure's notice mark follows its destination. In the line column it
     widened that column for every row, notice or not. */
  .destination {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .destination-name {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /* Platform */
  .platform-cell {
    text-align: center;
    font-weight: var(--opt-font-weight-medium);
    white-space: nowrap;
  }

  /* The platform the timetable named, struck through. Secondary text, not a
     faded copy of the primary: at half opacity it measured 3.3:1 on the light
     board and 4.1:1 on the dark one. */
  .platform-changed {
    text-decoration: line-through;
    color: var(--opt-text-secondary);
    margin-right: 4px;
  }

  .platform-new {
    color: var(--opt-delay-red);
    font-weight: 700;
  }

  /* The short platform label is for narrow cards only. */
  .label-short {
    display: none;
  }

  /* A card in a narrow column — a phone, a dashboard of four — keeps every
     column rather than losing the last one off its edge: the vehicle icon
     goes, since the line badge already names the service, and the platform
     heading takes its short form. */
  @container (max-width: 340px) {
    .line-cell openpublictransport-transport-icon {
      display: none;
    }

    .label-long {
      display: none;
    }

    .label-short {
      display: inline;
    }
  }

  /* Notices */
  .notice-icon {
    --opt-icon-size: 16px;
    flex-shrink: 0;
    color: var(--opt-delay-yellow);
  }

  /* A 16px icon with a touch target around it; the negative margin keeps the
     row as tall as it was. */
  .notice-button {
    display: inline-flex;
    flex-shrink: 0;
    padding: 6px;
    margin: -6px;
    border: none;
    border-radius: 50%;
    background: transparent;
    color: inherit;
    cursor: pointer;
  }

  .notice-icon.notice-info {
    color: var(--opt-text-secondary);
  }

  /* Compact layout. The chips start on Home Assistant's 16px inset, where the
     header's text starts. */
  .compact-container {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    padding: 12px 16px;
  }

  /* The icon is a transport-icon element, not an ha-icon, so it is sized by
     the variable it reads: the ha-icon rule this replaces never matched, and
     the chips drew ha-icon's 24px default. */
  .compact-chip {
    --opt-icon-size: 16px;
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 6px 10px;
    border-radius: 8px;
    border: 2px solid var(--opt-border);
    background: var(--opt-bg);
    font-size: var(--opt-font-size-badge);
    transition: border-color 0.2s ease;
  }

  .compact-chip.on-time {
    border-color: var(--opt-delay-green);
  }

  .compact-chip.delayed {
    border-color: var(--opt-delay-red);
  }

  .compact-chip .chip-line {
    font-weight: 700;
  }

  .compact-chip .chip-destination {
    max-width: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: var(--opt-text-secondary);
  }

  .compact-chip .chip-countdown {
    font-weight: var(--opt-font-weight-medium);
    font-variant-numeric: tabular-nums;
  }

  /* Trip layout */
  .trip-container {
    /* The card's content keeps Home Assistant's own 16px inset, so it starts on
       the same column as every other card on the dashboard. The timeline's rail
       and dots live inside that inset rather than pushing the content right. */
    padding: 12px 16px;
  }

  .trip-header {
    display: flex;
    align-items: baseline;
    gap: 8px;
    margin-bottom: 8px;
    font-size: var(--ha-font-size-l, 16px);
    font-weight: var(--ha-font-weight-bold, 700);
    font-variant-numeric: tabular-nums;
  }

  .trip-arrow {
    color: var(--opt-text-secondary);
    /* The mark is drawn, so it is its own box that has to be placed: centred on
       the line rather than sat on a text baseline it does not share. */
    align-self: center;
    display: flex;
    flex-shrink: 0;
  }

  /* Sized in em so it scales with whatever text it joins, and stroked in
     currentColor so it inherits that text's colour. See the ARROW constant in
     layouts/trip.ts for why it is drawn and not typed. */
  .trip-arrow svg {
    display: block;
    width: 1.05em;
    height: 1.05em;
    fill: none;
    stroke: currentColor;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  /* The header is bold, so its arrow carries the same weight. */
  .trip-header .trip-arrow svg {
    stroke-width: 2.6;
  }

  /* An arrow joins the two things on either side of it, so it keeps their
     company rather than the row's — in a row's own gap it read as another
     column separator, with as much air around it as unrelated values have. */
  .time-span {
    display: inline-flex;
    align-items: baseline;
    gap: 5px;
  }

  /* The journey's total reads at the same size as the times it belongs to; only
     its weight and colour set it back. */
  .trip-header .trip-duration {
    margin-left: auto;
    font-weight: var(--ha-font-weight-normal, 400);
    color: var(--opt-text-secondary);
  }

  /* One quiet line of facts rather than a row of filled boxes, the way Home
     Assistant renders a card's secondary information. */
  .trip-meta {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 2px 12px;
    margin-bottom: 12px;
    font-size: var(--ha-font-size-s, 12px);
    color: var(--opt-text-secondary);
  }

  .trip-meta-item {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    cursor: default;
  }

  .trip-meta-item ha-icon {
    --opt-icon-size: 16px;
    color: var(--opt-text-secondary);
  }

  /* Transfer risk. The colour rides on the icon so the label keeps the body
     text's contrast — painted in the warning hue it was unreadable on a light
     theme. A connection actually at risk is the one case loud enough to colour
     the text as well. */
  .risk-low ha-icon {
    color: var(--opt-delay-green);
  }

  .risk-medium ha-icon {
    color: var(--opt-delay-yellow);
  }

  .risk-high,
  .risk-high ha-icon {
    color: var(--opt-delay-red);
  }

  /* Timeline. Everything is placed from the four sizes below, so the rail, the
     dots and the text keep their relationship whatever those sizes become. */
  .trip-timeline {
    --opt-line-width: 2px;
    --opt-dot-size: 6px;
    --opt-dot-ring: 2px;
    /* the hollow marker's stroke: thinner than the outer ring, so a dot this
       small keeps a visible centre */
    --opt-dot-stroke: 1.5px;
    --opt-station-line: 20px;
    /* Gap between the dots and the text they mark. */
    --opt-dot-gap: 5px;
    /* From the legs' text back to the centre of the rail. */
    --opt-rail-offset: calc(
      var(--opt-dot-gap) + (var(--opt-dot-size) + 2 * var(--opt-dot-ring)) / 2
    );

    position: relative;
    /* Indenting the legs by exactly that offset puts the rail on the same
       column as the header, the facts and the alternatives — it reads as one
       vertical rule through the card's content — while the dots, being wider
       than the rule, straddle that column and sit a little into the padding. */
    padding-left: var(--opt-rail-offset);
  }

  .trip-leg {
    position: relative;
    padding-bottom: 16px;
  }

  /* The rail runs from this leg's dot to the next one, so it meets both centres
     and never leaves a gap at a leg boundary. */
  .trip-leg::after {
    content: "";
    position: absolute;
    left: calc(-1 * var(--opt-rail-offset) - var(--opt-line-width) / 2);
    top: calc(var(--opt-station-line) / 2);
    bottom: calc(-1 * var(--opt-station-line) / 2);
    width: var(--opt-line-width);
    background: var(--opt-border);
  }

  .trip-leg:last-child {
    padding-bottom: 0;
  }

  .trip-leg:last-child::after {
    display: none;
  }

  .trip-leg::before {
    content: "";
    position: absolute;
    /* the dot, ring included, centred on the rail */
    left: calc(-1 * var(--opt-rail-offset) - var(--opt-dot-size) / 2 - var(--opt-dot-ring));
    /* and on the middle of the station's first line */
    top: calc((var(--opt-station-line) - var(--opt-dot-size)) / 2 - var(--opt-dot-ring));
    width: var(--opt-dot-size);
    height: var(--opt-dot-size);
    border-radius: 50%;
    background: var(--opt-accent);
    border: var(--opt-dot-ring) solid var(--opt-bg);
  }

  /* A transfer is a hollow dot: a change of vehicle, not another colour. */
  .trip-leg.transfer::before {
    background: var(--opt-bg);
    box-shadow: inset 0 0 0 var(--opt-dot-stroke) var(--opt-accent);
  }

  /* Station and duration share the leg's first line, so the durations line up
     with the station names rather than floating beside the smaller detail row. */
  .leg-head {
    display: flex;
    align-items: baseline;
    gap: 12px;
  }

  .leg-station {
    font-size: var(--ha-font-size-m, 14px);
    font-weight: var(--opt-font-weight-medium);
    line-height: var(--opt-station-line);
  }

  .leg-details {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: var(--ha-font-size-s, 12px);
    color: var(--opt-text-secondary);
  }

  .leg-details ha-icon,
  .leg-details openpublictransport-transport-icon {
    --opt-icon-size: 16px;
  }

  .leg-time {
    font-variant-numeric: tabular-nums;
    font-weight: var(--opt-font-weight-medium);
  }

  .leg-line {
    font-weight: var(--opt-font-weight-medium);
  }

  /* The line and where it is headed: one phrase, so the arrow between them sits
     closer than the gap separating them from the ride's length. */
  .leg-service {
    display: inline-flex;
    align-items: baseline;
    gap: 5px;
    min-width: 0;
    overflow: hidden;
  }

  /* Where the vehicle is headed. It can be long, so it yields before the
     duration does. */
  .leg-direction {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    min-width: 0;
  }

  /* A station's own time sits at the right edge of its line, so the journey's
     four times read down one column like a timetable. */
  /* The delay and the time it qualifies travel together at the right edge. */
  .leg-head-time {
    margin-left: auto;
    display: flex;
    align-items: baseline;
    gap: 6px;
    flex-shrink: 0;
  }

  /* The badge's figures carry no descenders, so its ink rides high inside the
     pill and the pill hangs below the digits it annotates — measured, 4.1px
     under them against 1.7px above. No box alignment fixes that: the asymmetry
     is inside the pill, not in how it is placed, and reshaping the box moves
     both of its edges equally while the figures stay put. Two pixels up brings
     the two sets of figures onto the same optical line. */
  .leg-head-time openpublictransport-delay-badge {
    transform: translateY(-2px);
  }

  .leg-departure {
    flex-shrink: 0;
    font-size: var(--ha-font-size-m, 14px);
    font-weight: var(--opt-font-weight-medium);
    line-height: var(--opt-station-line);
    color: var(--opt-text);
  }

  /* The ride's length belongs to the vehicle that does it, so it follows the
     line and its direction directly rather than being pushed to the far edge:
     it reads as part of that sentence, and the right edge stays the times'. */
  .leg-duration {
    flex-shrink: 0;
    font-variant-numeric: tabular-nums;
  }

  /* When this leg gets in, under the time it left. Set back, because the pair
     that matters at a change is this arrival and the next leg's departure
     directly below it — which is what makes the wait between them visible. */
  .leg-arrival {
    margin-left: auto;
    flex-shrink: 0;
    font-variant-numeric: tabular-nums;
    color: var(--opt-text-secondary);
  }

  .leg-transfer-info {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: var(--ha-font-size-s, 12px);
    color: var(--opt-text-secondary);
    margin-top: 2px;
  }

  .leg-transfer-info ha-icon {
    --opt-icon-size: 16px;
  }

  /* Alternative journeys. No rule above the heading: the heading and the space
     before it already say a new section starts, and the rows below carry rules
     of their own — a third line here would compete with both. */
  .alt-journeys {
    margin-top: 16px;
  }

  /* The heading belongs to the list under it, so it sits close to it — the air
     that separates the two goes above the heading, not between them. */
  .alt-journeys-title {
    font-size: var(--ha-font-size-m, 14px);
    font-weight: var(--opt-font-weight-medium);
    color: var(--opt-text-secondary);
    margin-bottom: 2px;
  }

  .alt-journey {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 6px 0;
    font-size: var(--ha-font-size-s, 12px);
    font-variant-numeric: tabular-nums;
    color: var(--opt-text-secondary);
    border-bottom: 1px solid var(--opt-border);
  }

  .alt-journey .leg-time {
    color: var(--opt-text);
  }

  .alt-journey .alt-risk {
    margin-left: auto;
    display: inline-flex;
  }

  .alt-journey:last-child {
    border-bottom: none;
  }

  /* An alternative whose detail can be shown is a real button, not a row that
     happens to answer a click: it takes focus, responds to Enter and Space, and
     tells a screen reader that a dialog follows. Its box is the row's exactly —
     same padding, same rule underneath — so a list of buttons and a list of
     plain rows occupy the same space, and the card does not change shape on an
     integration too old to answer. */
  button.alt-journey {
    appearance: none;
    -webkit-appearance: none;
    width: 100%;
    margin: 0;
    background: none;
    border: none;
    border-bottom: 1px solid var(--opt-border);
    border-radius: 0;
    font-family: inherit;
    font-size: var(--ha-font-size-s, 12px);
    color: var(--opt-text-secondary);
    text-align: left;
    cursor: pointer;
  }

  /* The tint reaches 8px past the row on both sides, into the card's own
     padding, the way Home Assistant highlights a list row — with two offset
     shadows rather than a wider box, so nothing moves and the row's text stays
     on the card's column. */
  button.alt-journey:hover {
    background: var(--opt-row-hover);
    box-shadow: -8px 0 0 var(--opt-row-hover), 8px 0 0 var(--opt-row-hover);
  }

  button.alt-journey:focus-visible {
    outline: 2px solid var(--opt-accent);
    outline-offset: -1px;
  }

  /* The chosen connection's dialog. It is painted in the browser's top layer,
     which inherits none of the dashboard's appearance — not even the background
     a card is given for free — so every colour is set here, from the same Home
     Assistant variables the card is painted with. */
  .journey-dialog {
    width: min(calc(100vw - 32px), 460px);
    max-height: min(calc(100vh - 32px), 640px);
    padding: 0;
    border: 1px solid var(--opt-border);
    border-radius: var(--ha-card-border-radius, 12px);
    background: var(--opt-bg);
    color: var(--opt-text);
    font-family: var(--opt-font-family);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
    overflow: hidden;
  }

  /* Only while open: a dialog is display:none until then, and laying it out
     unconditionally would leave it on the page with nothing to close it. */
  .journey-dialog[open] {
    display: flex;
    flex-direction: column;
  }

  /* A plain tint rather than a themed one. ::backdrop inherited from the root
     element rather than from the dialog until Chrome 122, where a --opt-*
     defined on the card's host does not reach it; dimming reads correctly on a
     light and on a dark theme alike. */
  .journey-dialog::backdrop {
    background: rgba(0, 0, 0, 0.55);
  }

  .journey-dialog-head {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    flex-shrink: 0;
    padding: 16px 16px 0;
  }

  /* The title carries the journey's own header, which already has the margin
     that separates it from what follows; inside the head that margin would
     push the close button out of line with it. */
  .journey-dialog-head .trip-header {
    margin-bottom: 0;
    flex: 1;
    min-width: 0;
  }

  .journey-dialog-close {
    appearance: none;
    -webkit-appearance: none;
    display: inline-flex;
    padding: 4px;
    margin: -4px -4px 0 0;
    background: none;
    border: none;
    border-radius: 50%;
    color: var(--opt-text-secondary);
    cursor: pointer;
  }

  .journey-dialog-close:hover {
    background: var(--opt-row-hover);
  }

  .journey-dialog-close:focus-visible {
    outline: 2px solid var(--opt-accent);
    outline-offset: 0;
  }

  /* The journey scrolls, the title does not: a connection with many legs stays
     readable without the dialog growing past the screen. */
  .journey-dialog-content {
    padding: 8px 16px 16px;
    overflow-y: auto;
  }

  /* The dialog is not held to the card's column, so a leg says everything it
     has. On the dashboard's 374px a headsign like "Echterdingen
     Flughafen/Messe …" is cut off, and that cut is what the dialog exists to
     undo — here the direction wraps instead. */
  /* The row keeps its one line; it is the headsign inside it that wraps. Letting
     the row wrap instead put the leg's arrival on a line of its own with the
     rest of the row empty beside it — measured, 46px against the 38px it takes
     when the direction wraps in its own box and the duration and the arrival
     stay with the leg they belong to. */
  .journey-dialog .leg-details {
    flex-wrap: nowrap;
  }

  .journey-dialog .leg-service {
    overflow: visible;
  }

  .journey-dialog .leg-direction {
    overflow: visible;
    white-space: normal;
    text-overflow: clip;
  }

  .journey-dialog-status {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 24px 0;
    font-size: var(--ha-font-size-s, 12px);
    color: var(--opt-text-secondary);
  }

  .journey-dialog-status.is-error {
    color: var(--opt-delay-red);
  }

  .journey-dialog-status ha-icon {
    --opt-icon-size: 20px;
  }

  /* A spinner of its own rather than Home Assistant's: the same reason the
     dialog is the native element and not ha-dialog. */
  .journey-dialog-spinner {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    border: 2px solid var(--opt-border);
    border-top-color: var(--opt-accent);
    border-radius: 50%;
    animation: opt-spin 0.8s linear infinite;
  }

  @keyframes opt-spin {
    to {
      transform: rotate(360deg);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .journey-dialog-spinner {
      animation-duration: 2.4s;
    }
  }

    /* Error / Empty states, set back by colour rather than opacity: the error's
     red at 70% measured 3.2:1 on the light board and 2.8:1 on the dark one. */
  .card-error,
  .card-empty {
    padding: 24px 16px;
    text-align: center;
    font-size: var(--ha-font-size-m, 14px);
  }

  .card-empty {
    color: var(--opt-text-secondary);
  }

  .card-error {
    color: var(--opt-delay-red);
  }

  .card-error ha-icon {
    --opt-icon-size: 40px;
    display: block;
    margin: 0 auto 12px;
  }

  /* Delay badge. A filled chip reads at a glance, which is what a delay wants —
     but at its old size it outweighed the journey's own times. Now that a leg
     reports the time that will actually happen, the badge only explains why
     that time differs from the timetable, so it is sized as the annotation it
     is rather than as a headline. */
  .delay-badge {
    display: inline-flex;
    align-items: center;
    padding: 0 4px;
    border-radius: 4px;
    font-size: var(--ha-font-size-xs, 10px);
    font-weight: var(--opt-font-weight-medium);
    font-variant-numeric: tabular-nums;
    line-height: 1.6;
  }

  .delay-badge.delayed {
    background: var(--opt-delay-red);
    color: var(--opt-on-delay);
  }

  .delay-badge.on-time {
    background: var(--opt-delay-green);
    color: var(--opt-on-delay);
  }

  /* The drawn mark: as tall as the pill's line, so an on-time badge is the
     height of a delayed one, and stroked about as heavy as the figures. */
  .delay-badge .check {
    display: block;
    width: 1.2em;
    height: 1.6em;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.6;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  /* Editor styles */
  .card-config {
    padding: 16px;
  }

  .card-config .config-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 0;
  }

  .card-config .config-row label {
    font-weight: 500;
  }

  .card-config ha-entity-picker,
  .card-config ha-select,
  .card-config ha-textfield {
    width: 100%;
  }

  .config-section {
    margin-bottom: 16px;
  }

  .config-section-title {
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    opacity: 0.6;
    margin-bottom: 8px;
  }
`,be=r`
  .board {
    container-type: inline-size;
    display: flex;
    flex-direction: column;
    min-height: 0;
    font-variant-numeric: tabular-nums;
    --b-gutter: clamp(16px, 3.3cqi, 24px);
    --b-label: clamp(13px, 2.1cqi, 15px);
    --b-sub: clamp(14px, 2.25cqi, 16px);
    --b-time: clamp(20px, 4.2cqi, 30px);
    --b-dest: clamp(18px, 3.75cqi, 27px);
    --b-platform: clamp(18px, 3.35cqi, 24px);
    --b-count: clamp(22px, 5cqi, 36px);
    --b-badge: clamp(16px, 3.2cqi, 23px);
    --b-station: clamp(20px, 4.45cqi, 32px);
    --b-clock: clamp(22px, 5.3cqi, 38px);
  }

  /* Header: the line, when the board shows only one, then a label and the
     station; the clock on the right. */
  .b-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    flex-shrink: 0;
    padding: 16px var(--b-gutter) 14px;
    background: var(--opt-header-bg);
    border-bottom: var(--opt-header-rule-width, 2px) solid var(--opt-header-rule);
  }

  .b-header-main {
    display: flex;
    align-items: center;
    gap: 14px;
    min-width: 0;
  }

  .b-header-text {
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
  }

  .b-header-label {
    font-size: var(--b-label);
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--opt-accent-text);
  }

  .b-station {
    font-size: var(--b-station);
    font-weight: 700;
    line-height: 1.1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .b-clock {
    flex-shrink: 0;
    font-size: var(--b-clock);
    font-weight: 700;
    line-height: 1;
  }

  /* Line badge. Provider colours come in as an inline style. */
  .b-line {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
  }

  .b-line openpublictransport-transport-icon {
    --opt-icon-size: 22px;
    color: var(--opt-text-secondary);
  }

  .b-line-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.3em;
    box-sizing: border-box;
    min-width: 2.8em;
    height: 1.65em;
    padding: 0 0.35em;
    border-radius: 8px;
    font-size: var(--b-badge);
    font-weight: 700;
    white-space: nowrap;
    background: var(--opt-accent);
    color: var(--opt-on-accent);
  }

  /* The header's badge names the one line on the board, with its vehicle. */
  .b-header .b-line-badge {
    --opt-icon-size: 1.1em;
    font-size: calc(var(--b-badge) * 1.3);
    height: 1.85em;
    padding: 0 0.45em;
    border-radius: 10px;
  }

  .b-header .b-line-badge openpublictransport-transport-icon {
    color: inherit;
  }

  /* Disruption band, at the board's reading size. */
  .board button.disruption-banner {
    gap: 10px;
    padding: 12px var(--b-gutter);
    font-size: clamp(15px, 2.5cqi, 18px);
    font-weight: 600;
  }

  .board .disruption-banner ha-icon {
    --opt-icon-size: 22px;
  }

  /* The table. Columns: time, line (several lines only), destination,
     platform (optional), countdown. */
  .b-table {
    width: 100%;
    border-collapse: collapse;
  }

  .b-table th,
  .b-table td {
    padding: 11px 7px;
    vertical-align: middle;
  }

  .b-table th:first-child,
  .b-table td:first-child {
    padding-left: var(--b-gutter);
  }

  .b-table th:last-child,
  .b-table td:last-child {
    padding-right: var(--b-gutter);
  }

  .b-table thead th {
    padding-top: 12px;
    padding-bottom: 8px;
    text-align: left;
    font-size: var(--b-label);
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    white-space: nowrap;
    color: var(--opt-text-secondary);
    position: sticky;
    top: 0;
    z-index: 2;
    background: var(--opt-bg);
  }

  .b-table thead th.b-col-platform {
    text-align: center;
  }

  .b-table thead th.b-col-count {
    text-align: right;
  }

  .b-table tbody tr {
    border-top: 1px solid var(--opt-border);
    transition: background-color 0.15s ease;
  }

  .b-table tbody tr:hover {
    background: var(--opt-row-hover);
  }

  /* Time: the time that will happen, and under it why it differs from the
     timetable — or that it does not. */
  .b-time-cell {
    white-space: nowrap;
    line-height: 1.1;
  }

  .b-time {
    display: block;
    font-size: var(--b-time);
    font-weight: 700;
  }

  .b-time.late {
    color: var(--opt-delay-red);
  }

  .b-time-sub {
    display: block;
    margin-top: 2px;
    font-size: var(--b-sub);
    font-weight: 600;
    color: var(--opt-text-secondary);
  }

  .b-planned {
    text-decoration: line-through;
  }

  .b-delay {
    font-weight: 700;
    color: var(--opt-delay-red);
  }

  .b-on-time {
    color: var(--opt-delay-green);
  }

  .b-line-cell {
    white-space: nowrap;
  }

  /* Destination: takes what the other columns leave, and ellipsises. */
  .b-dest-cell {
    width: 100%;
    max-width: 0;
    line-height: 1.15;
  }

  .b-dest {
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
  }

  .b-arrow {
    display: flex;
    flex-shrink: 0;
    color: var(--opt-text-secondary);
  }

  .b-arrow svg {
    width: 0.8em;
    height: 0.8em;
    fill: none;
    stroke: currentColor;
    stroke-width: 2.6;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .b-dest-name {
    min-width: 0;
    font-size: var(--b-dest);
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .b-dest .b-arrow {
    font-size: var(--b-dest);
  }

  .b-platform-note {
    display: block;
    margin-top: 2px;
    padding-left: calc(var(--b-dest) * 0.8 + 10px);
    font-size: var(--b-sub);
    font-weight: 700;
    color: var(--opt-accent-text);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* The notice mark, a round button beside the destination. */
  .b-notice {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    /* 36px beside a tablet-sized destination, down to 28px on a phone. */
    width: clamp(28px, calc(var(--b-dest) * 1.35), 36px);
    height: clamp(28px, calc(var(--b-dest) * 1.35), 36px);
    padding: 0;
    border: none;
    border-radius: 50%;
    background: var(--opt-chip-bg);
    color: var(--opt-accent-text);
    cursor: pointer;
  }

  .b-notice.disrupted {
    color: var(--opt-delay-red);
  }

  .b-notice ha-icon {
    --opt-icon-size: 22px;
  }

  .b-notice:focus-visible {
    outline: 2px solid var(--opt-accent);
    outline-offset: 2px;
  }

  /* Platform in a box; a changed one is filled with the accent. */
  .b-platform-cell {
    text-align: center;
  }

  .b-platform {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    min-width: 2em;
    height: 1.75em;
    padding: 0 0.25em;
    border: 2px solid var(--opt-platform-border);
    border-radius: 8px;
    font-size: var(--b-platform);
    font-weight: 700;
    white-space: nowrap;
  }

  .b-platform.changed {
    border-color: var(--opt-accent);
    background: var(--opt-accent);
    color: var(--opt-on-accent);
  }

  /* Countdown: the number large, its unit small. A departure within the
     highlight window (highlight_minutes) is filled with the accent. */
  .b-count-cell {
    text-align: right;
    white-space: nowrap;
  }

  .b-count {
    display: inline-flex;
    align-items: baseline;
    gap: 0.15em;
    padding: 1px 0.3em;
    border-radius: 10px;
    background: var(--opt-countdown-bg);
    color: var(--opt-countdown-text);
    font-size: var(--b-count);
    font-weight: 700;
    line-height: 1.15;
  }

  .b-count.soon {
    background: var(--opt-accent);
    color: var(--opt-on-accent);
  }

  .b-count-unit {
    font-size: 0.5em;
    font-weight: 600;
  }

  .board .card-empty {
    font-size: var(--b-dest);
  }

  /* A narrow card keeps its columns: the vehicle icon goes first. */
  @container (max-width: 420px) {
    .b-line openpublictransport-transport-icon {
      display: none;
    }

    .b-arrow {
      display: none;
    }

    .b-platform-note {
      padding-left: 0;
    }
  }
`,ye={layout:"table",max_departures:10,show_header:!0,show_platform:!0,show_delay:!0,show_realtime_indicator:!0,theme:"auto",line_filter:"",destination_filter:"",show_notices:!0,show_disruption_banner:!0,show_data_age:!1,highlight_minutes:9},ve={bus:"mdi:bus",tram:"mdi:tram",subway:"mdi:subway-variant",train:"mdi:train",ferry:"mdi:ferry",taxi:"mdi:taxi","s-bahn":"mdi:train","u-bahn":"mdi:subway-variant",regional:"mdi:train",express:"mdi:train",walk:"mdi:walk",footpath:"mdi:walk",fussweg:"mdi:walk","fußweg":"mdi:walk",bicycle:"mdi:bike",fahrrad:"mdi:bike",default:"mdi:transit-connection-variant"},we={en:{departures_heading:"Departures",direction:"Direction",countdown_heading:"In",platform_change:"Platform change: {new} instead of {old}",min_unit:"min",highlight_minutes:"Highlight departures within (minutes)",highlight_minutes_hint:"Board themes: the countdown of a departure this soon is filled with the accent colour. 0 turns it off.",now:"now",in_min:"in {min} min",in_1_min:"in 1 min",in_h_min:"in {h} h {min} min",in_h:"in {h} h",notices:"Notices",disruptions:"Disruptions",more_count:"+{n} more",close:"Close",show_all_disruptions:"Show all disruptions",notices_for:"Notices for {line} to {destination}",fetched_ago:"Fetched {age}",show_notices:"Show Notice Icons",show_disruption_banner:"Show Disruption Banner",show_data_age:"Show Data Age",on_time:"on time",no_departures:"No departures available",no_trip_data:"No trip data available",entity_unavailable:"Entity is unavailable",please_define_entity:"Please define an entity",alternative_connections:"Alternative Connections",show_details:"Show details",loading_details:"Loading connection…",connection_gone:"This connection is no longer being offered.",details_failed:"The connection could not be loaded.",connection_at_risk:"Connection at risk",risk:"risk",risk_low:"Low risk",risk_medium:"Medium risk",risk_high:"High risk",min_transfer:"Transfer time",transfer:"Transfer",transfers:"transfers",platform:"Pl.",time:"Time",line:"Line",destination:"Destination",track:"Track",table_layout:"Table (Departure Board)",compact_layout:"Compact (Chips)",trip_layout:"Trip (Journey)",next_layout:"Next Departure (Widget)",entity:"Entity",layout:"Layout",theme:"Theme",theme_ha:"Home Assistant (native)",max_departures:"Max Departures",show_header:"Show Header",show_platform:"Show Platform",show_delay:"Show Delay",show_realtime:"Show Realtime Indicator",display_options:"Display Options",line_filter:"Line Filter",line_filter_hint:"Show only these lines (comma-separated, e.g. U6, S1, RE5). Leave empty to show all.",destination_filter:"Destination Filter",destination_filter_hint:"Show only departures whose destination matches (comma-separated, partial match, e.g. Duisburg, Flughafen). Leave empty to show all.",filters:"Filters",trip_filter_note:"The line and destination filters apply to departure boards only. Filter connections on the device itself: Settings → Devices & services → your trip device → Configure."},de:{departures_heading:"Abfahrten",direction:"Richtung",countdown_heading:"In",platform_change:"Gleiswechsel: {new} statt {old}",min_unit:"min",highlight_minutes:"Abfahrten hervorheben bis (Minuten)",highlight_minutes_hint:"Tafel-Themes: Der Countdown einer so nahen Abfahrt wird in der Akzentfarbe gefüllt. 0 schaltet es ab.",now:"jetzt",in_min:"in {min} min",in_1_min:"in 1 min",in_h_min:"in {h} h {min} min",in_h:"in {h} h",notices:"Hinweise",disruptions:"Störungen",more_count:"+{n} weitere",close:"Schließen",show_all_disruptions:"Alle Störungen anzeigen",notices_for:"Hinweise zu {line} nach {destination}",fetched_ago:"Abgerufen {age}",show_notices:"Hinweis-Symbole anzeigen",show_disruption_banner:"Störungsbanner anzeigen",show_data_age:"Datenalter anzeigen",on_time:"pünktlich",no_departures:"Keine Abfahrten verfügbar",no_trip_data:"Keine Verbindungsdaten verfügbar",entity_unavailable:"Entity nicht verfügbar",please_define_entity:"Bitte eine Entity auswählen",alternative_connections:"Alternative Verbindungen",show_details:"Details anzeigen",loading_details:"Verbindung wird geladen …",connection_gone:"Diese Verbindung wird nicht mehr angeboten.",details_failed:"Die Verbindung konnte nicht geladen werden.",connection_at_risk:"Anschluss gefährdet",risk:"Risiko",risk_low:"Geringes Risiko",risk_medium:"Mittleres Risiko",risk_high:"Hohes Risiko",min_transfer:"Umstiegszeit",transfer:"Umstieg",transfers:"Umstiege",platform:"Gl.",time:"Zeit",line:"Linie",destination:"Ziel",track:"Gleis",table_layout:"Tabelle (Abfahrtstafel)",compact_layout:"Kompakt (Chips)",trip_layout:"Verbindung (Trip)",next_layout:"Nächste Abfahrt (Widget)",entity:"Entity",layout:"Layout",theme:"Design",theme_ha:"Home Assistant (nativ)",max_departures:"Max. Abfahrten",show_header:"Kopfzeile anzeigen",show_platform:"Gleis anzeigen",show_delay:"Verspätung anzeigen",show_realtime:"Echtzeit-Indikator anzeigen",display_options:"Anzeigeoptionen",line_filter:"Linienfilter",line_filter_hint:"Nur diese Linien anzeigen (kommagetrennt, z.B. U6, S1, RE5). Leer lassen für alle.",destination_filter:"Zielfilter",destination_filter_hint:"Nur Abfahrten mit passendem Ziel anzeigen (kommagetrennt, Teiltreffer, z.B. Duisburg, Flughafen). Leer lassen für alle.",filters:"Filter",trip_filter_note:"Linien- und Zielfilter gelten nur für Abfahrtstafeln. Verbindungen filterst du am Gerät selbst: Einstellungen → Geräte & Dienste → dein Trip-Gerät → Konfigurieren."},fr:{departures_heading:"Départs",direction:"Direction",countdown_heading:"Dans",platform_change:"Changement de voie : {new} au lieu de {old}",min_unit:"min",highlight_minutes:"Mettre en évidence les départs dans (minutes)",highlight_minutes_hint:"Thèmes tableau : le compte à rebours d'un départ aussi proche est rempli de la couleur d'accent. 0 le désactive.",now:"maintenant",in_min:"dans {min} min",in_1_min:"dans 1 min",in_h_min:"dans {h} h {min} min",in_h:"dans {h} h",notices:"Informations",disruptions:"Perturbations",more_count:"+{n} autres",close:"Fermer",show_all_disruptions:"Afficher toutes les perturbations",notices_for:"Informations pour {line} vers {destination}",fetched_ago:"Récupéré {age}",show_notices:"Afficher les icônes d'information",show_disruption_banner:"Afficher la bannière de perturbation",show_data_age:"Afficher l'âge des données",on_time:"à l'heure",no_departures:"Aucun départ disponible",no_trip_data:"Aucune donnée de trajet disponible",entity_unavailable:"Entité indisponible",please_define_entity:"Veuillez sélectionner une entité",alternative_connections:"Correspondances alternatives",show_details:"Afficher les détails",loading_details:"Chargement de la correspondance…",connection_gone:"Cette correspondance n'est plus proposée.",details_failed:"Impossible de charger la correspondance.",connection_at_risk:"Correspondance menacée",risk:"risque",risk_low:"Risque faible",risk_medium:"Risque moyen",risk_high:"Risque élevé",min_transfer:"Temps de correspondance",transfer:"Correspondance",transfers:"correspondances",platform:"Voie",time:"Heure",line:"Ligne",destination:"Destination",track:"Voie",table_layout:"Tableau (Panneau de départs)",compact_layout:"Compact (Puces)",trip_layout:"Trajet (Itinéraire)",next_layout:"Prochain départ (Widget)",entity:"Entité",layout:"Disposition",theme:"Thème",theme_ha:"Home Assistant (natif)",max_departures:"Départs max.",show_header:"Afficher l'en-tête",show_platform:"Afficher la voie",show_delay:"Afficher le retard",show_realtime:"Afficher l'indicateur temps réel",display_options:"Options d'affichage",line_filter:"Filtre de lignes",line_filter_hint:"Afficher uniquement ces lignes (séparées par des virgules, ex. U6, S1, RE5). Laisser vide pour tout afficher.",destination_filter:"Filtre de destination",destination_filter_hint:"Afficher uniquement les départs dont la destination correspond (séparées par des virgules, correspondance partielle, ex. Duisburg, Aéroport). Laisser vide pour tout afficher.",filters:"Filtres",trip_filter_note:"Les filtres de lignes et de destination ne s'appliquent qu'aux tableaux de départs. Filtrez les trajets sur l'appareil lui-même : Paramètres → Appareils et services → votre appareil de trajet → Configurer."},nl:{departures_heading:"Vertrek",direction:"Richting",countdown_heading:"Over",platform_change:"Spoorwijziging: {new} in plaats van {old}",min_unit:"min",highlight_minutes:"Vertrekken markeren binnen (minuten)",highlight_minutes_hint:"Bordthema's: de aftelling van een zo nabij vertrek wordt gevuld met de accentkleur. 0 schakelt het uit.",now:"nu",in_min:"over {min} min",in_1_min:"over 1 min",in_h_min:"over {h} h {min} min",in_h:"over {h} h",notices:"Meldingen",disruptions:"Storingen",more_count:"+{n} meer",close:"Sluiten",show_all_disruptions:"Alle storingen tonen",notices_for:"Meldingen voor {line} naar {destination}",fetched_ago:"Opgehaald {age}",show_notices:"Meldingspictogrammen tonen",show_disruption_banner:"Storingsbanner tonen",show_data_age:"Leeftijd van gegevens tonen",on_time:"op tijd",no_departures:"Geen vertrekken beschikbaar",no_trip_data:"Geen reisgegevens beschikbaar",entity_unavailable:"Entity niet beschikbaar",please_define_entity:"Selecteer een entity",alternative_connections:"Alternatieve verbindingen",show_details:"Details tonen",loading_details:"Verbinding wordt geladen…",connection_gone:"Deze verbinding wordt niet meer aangeboden.",details_failed:"De verbinding kon niet worden geladen.",connection_at_risk:"Aansluiting in gevaar",risk:"risico",risk_low:"Laag risico",risk_medium:"Gemiddeld risico",risk_high:"Hoog risico",min_transfer:"Overstaptijd",transfer:"Overstap",transfers:"overstappen",platform:"Spoor",time:"Tijd",line:"Lijn",destination:"Bestemming",track:"Spoor",table_layout:"Tabel (Vertrekbord)",compact_layout:"Compact (Chips)",trip_layout:"Reis (Route)",next_layout:"Volgend vertrek (Widget)",entity:"Entity",layout:"Layout",theme:"Thema",theme_ha:"Home Assistant (native)",max_departures:"Max. vertrekken",show_header:"Koptekst tonen",show_platform:"Spoor tonen",show_delay:"Vertraging tonen",show_realtime:"Realtime-indicator tonen",display_options:"Weergaveopties",line_filter:"Lijnfilter",line_filter_hint:"Toon alleen deze lijnen (kommagescheiden, bijv. U6, S1, RE5). Leeg laten voor alles.",destination_filter:"Bestemmingsfilter",destination_filter_hint:"Toon alleen vertrekken met een overeenkomende bestemming (kommagescheiden, gedeeltelijke overeenkomst, bijv. Duisburg, Luchthaven). Leeg laten voor alles.",filters:"Filters",trip_filter_note:"Lijn- en bestemmingsfilters gelden alleen voor vertrekborden. Filter verbindingen op het apparaat zelf: Instellingen → Apparaten en diensten → je reis-apparaat → Configureren."},sv:{departures_heading:"Avgångar",direction:"Riktning",countdown_heading:"Om",platform_change:"Spårändring: {new} i stället för {old}",min_unit:"min",highlight_minutes:"Markera avgångar inom (minuter)",highlight_minutes_hint:"Tavelteman: nedräkningen för en så nära avgång fylls med accentfärgen. 0 stänger av.",now:"nu",in_min:"om {min} min",in_1_min:"om 1 min",in_h_min:"om {h} h {min} min",in_h:"om {h} h",notices:"Meddelanden",disruptions:"Störningar",more_count:"+{n} till",close:"Stäng",show_all_disruptions:"Visa alla störningar",notices_for:"Meddelanden för {line} mot {destination}",fetched_ago:"Hämtad {age}",show_notices:"Visa meddelandeikoner",show_disruption_banner:"Visa störningsbanner",show_data_age:"Visa datans ålder",on_time:"i tid",no_departures:"Inga avgångar tillgängliga",no_trip_data:"Inga resedata tillgängliga",entity_unavailable:"Entitet otillgänglig",please_define_entity:"Välj en entitet",alternative_connections:"Alternativa förbindelser",show_details:"Visa detaljer",loading_details:"Förbindelsen laddas …",connection_gone:"Den här förbindelsen erbjuds inte längre.",details_failed:"Förbindelsen kunde inte laddas.",connection_at_risk:"Anslutning hotad",risk:"risk",risk_low:"Låg risk",risk_medium:"Medelrisk",risk_high:"Hög risk",min_transfer:"Bytestid",transfer:"Byte",transfers:"byten",platform:"Spår",time:"Tid",line:"Linje",destination:"Destination",track:"Spår",table_layout:"Tabell (Avgångstavla)",compact_layout:"Kompakt (Chips)",trip_layout:"Resa (Rutt)",next_layout:"Nästa avgång (Widget)",entity:"Entitet",layout:"Layout",theme:"Tema",theme_ha:"Home Assistant (native)",max_departures:"Max avgångar",show_header:"Visa rubrik",show_platform:"Visa spår",show_delay:"Visa försening",show_realtime:"Visa realtidsindikator",display_options:"Visningsalternativ",line_filter:"Linjefilter",line_filter_hint:"Visa bara dessa linjer (kommaseparerade, t.ex. U6, S1, RE5). Lämna tomt för alla.",destination_filter:"Destinationsfilter",destination_filter_hint:"Visa bara avgångar vars destination matchar (kommaseparerade, delvis matchning, t.ex. Duisburg, Flygplats). Lämna tomt för alla.",filters:"Filter",trip_filter_note:"Linje- och destinationsfiltren gäller bara avgångstavlor. Filtrera förbindelser på själva enheten: Inställningar → Enheter och tjänster → din reseenhet → Konfigurera."},pl:{departures_heading:"Odjazdy",direction:"Kierunek",countdown_heading:"Za",platform_change:"Zmiana peronu: {new} zamiast {old}",min_unit:"min",highlight_minutes:"Wyróżnij odjazdy w ciągu (minuty)",highlight_minutes_hint:"Motywy tablicy: odliczanie tak bliskiego odjazdu jest wypełnione kolorem akcentu. 0 wyłącza.",now:"teraz",in_min:"za {min} min",in_1_min:"za 1 min",in_h_min:"za {h} h {min} min",in_h:"za {h} h",notices:"Komunikaty",disruptions:"Utrudnienia",more_count:"+{n} więcej",close:"Zamknij",show_all_disruptions:"Pokaż wszystkie utrudnienia",notices_for:"Komunikaty dla {line} do {destination}",fetched_ago:"Pobrano {age}",show_notices:"Pokaż ikony komunikatów",show_disruption_banner:"Pokaż baner utrudnień",show_data_age:"Pokaż wiek danych",on_time:"punktualnie",no_departures:"Brak dostępnych odjazdów",no_trip_data:"Brak danych o podróży",entity_unavailable:"Encja niedostępna",please_define_entity:"Wybierz encję",alternative_connections:"Alternatywne połączenia",show_details:"Pokaż szczegóły",loading_details:"Wczytywanie połączenia…",connection_gone:"To połączenie nie jest już oferowane.",details_failed:"Nie udało się wczytać połączenia.",connection_at_risk:"Połączenie zagrożone",risk:"ryzyko",risk_low:"Niskie ryzyko",risk_medium:"Średnie ryzyko",risk_high:"Wysokie ryzyko",min_transfer:"Czas przesiadki",transfer:"Przesiadka",transfers:"przesiadki",platform:"Peron",time:"Czas",line:"Linia",destination:"Kierunek",track:"Tor",table_layout:"Tabela (Tablica odjazdów)",compact_layout:"Kompaktowy (Chipy)",trip_layout:"Podróż (Trasa)",next_layout:"Następny odjazd (Widget)",entity:"Encja",layout:"Układ",theme:"Motyw",theme_ha:"Home Assistant (natywny)",max_departures:"Maks. odjazdów",show_header:"Pokaż nagłówek",show_platform:"Pokaż peron",show_delay:"Pokaż opóźnienie",show_realtime:"Pokaż wskaźnik czasu rzeczywistego",display_options:"Opcje wyświetlania",line_filter:"Filtr linii",line_filter_hint:"Pokaż tylko te linie (oddzielone przecinkami, np. U6, S1, RE5). Zostaw puste, aby pokazać wszystkie.",destination_filter:"Filtr kierunku",destination_filter_hint:"Pokaż tylko odjazdy z pasującym kierunkiem (oddzielone przecinkami, częściowe dopasowanie, np. Duisburg, Lotnisko). Zostaw puste, aby pokazać wszystkie.",filters:"Filtry",trip_filter_note:"Filtry linii i kierunku działają tylko na tablicach odjazdów. Połączenia filtrujesz w samym urządzeniu: Ustawienia → Urządzenia i usługi → twoje urządzenie podróży → Konfiguruj."},it:{departures_heading:"Partenze",direction:"Direzione",countdown_heading:"Tra",platform_change:"Cambio binario: {new} invece di {old}",min_unit:"min",highlight_minutes:"Evidenzia partenze entro (minuti)",highlight_minutes_hint:"Temi tabellone: il conto alla rovescia di una partenza così vicina è riempito con il colore d'accento. 0 lo disattiva.",now:"adesso",in_min:"tra {min} min",in_1_min:"tra 1 min",in_h_min:"tra {h} h {min} min",in_h:"tra {h} h",notices:"Avvisi",disruptions:"Disservizi",more_count:"+{n} altri",close:"Chiudi",show_all_disruptions:"Mostra tutti i disservizi",notices_for:"Avvisi per {line} verso {destination}",fetched_ago:"Aggiornato {age}",show_notices:"Mostra icone avvisi",show_disruption_banner:"Mostra banner disservizi",show_data_age:"Mostra età dei dati",on_time:"in orario",no_departures:"Nessuna partenza disponibile",no_trip_data:"Nessun dato di viaggio disponibile",entity_unavailable:"Entità non disponibile",please_define_entity:"Seleziona un'entità",alternative_connections:"Connessioni alternative",show_details:"Mostra dettagli",loading_details:"Caricamento della coincidenza…",connection_gone:"Questa coincidenza non è più offerta.",details_failed:"Impossibile caricare la coincidenza.",connection_at_risk:"Connessione a rischio",risk:"rischio",risk_low:"Rischio basso",risk_medium:"Rischio medio",risk_high:"Rischio alto",min_transfer:"Tempo di cambio",transfer:"Cambio",transfers:"cambi",platform:"Bin.",time:"Orario",line:"Linea",destination:"Destinazione",track:"Binario",table_layout:"Tabella (Pannello partenze)",compact_layout:"Compatto (Chip)",trip_layout:"Viaggio (Percorso)",next_layout:"Prossima partenza (Widget)",entity:"Entità",layout:"Layout",theme:"Tema",theme_ha:"Home Assistant (nativo)",max_departures:"Max. partenze",show_header:"Mostra intestazione",show_platform:"Mostra binario",show_delay:"Mostra ritardo",show_realtime:"Mostra indicatore tempo reale",display_options:"Opzioni di visualizzazione",line_filter:"Filtro linee",line_filter_hint:"Mostra solo queste linee (separate da virgola, es. U6, S1, RE5). Lascia vuoto per mostrare tutto.",destination_filter:"Filtro destinazione",destination_filter_hint:"Mostra solo le partenze con destinazione corrispondente (separate da virgola, corrispondenza parziale, es. Duisburg, Aeroporto). Lascia vuoto per mostrare tutto.",filters:"Filtri",trip_filter_note:"I filtri di linea e destinazione valgono solo per i tabelloni delle partenze. Filtra le connessioni sul dispositivo stesso: Impostazioni → Dispositivi e servizi → il tuo dispositivo viaggio → Configura."}};function xe(e,t,i){const n=e?.substring(0,2).toLowerCase()||"en";let a=(we[n]||we.en)[t]||we.en[t]||t;if(i)for(const[e,t]of Object.entries(i))a=a.replace(`{${e}}`,String(t));return a}function Ae(e,t){if(e){const t=Date.parse(e);if(!Number.isNaN(t))return Math.floor((t-Date.now())/6e4)}return t}function ke(e,t){if(t<=0)return xe(e,"now");if(1===t)return xe(e,"in_1_min");if(t<60)return xe(e,"in_min",{min:t});const i=Math.floor(t/60),n=t%60;return n?xe(e,"in_h_min",{h:i,min:n}):xe(e,"in_h",{h:i})}const Ce="openpublictransport";function ze(e,t){if(!t.startsWith("sensor."))return!1;if(e.entities?.[t]?.platform===Ce)return!0;const i=e.states[t]?.attributes;return!!i&&(Array.isArray(i.departures)||Array.isArray(i.legs)||void 0!==i.departure)}function _e(e,t){return(t??Object.keys(e.states)).filter(t=>ze(e,t))}function Ee(e,t){const i=e.states[t]?.attributes??{};return Array.isArray(i.departures)?"departures":Array.isArray(i.legs)||void 0!==i.departure||void 0!==i.arrival||/(^|[._-])trip([._-]|$)|_to_|journey|connection/i.test(t)||"mdi:routes"===i.icon?"trip":"unknown"}function Se(e){return"trip"===e?"trip":"table"}let Te=class extends se{constructor(){super(...arguments),this.transportType=""}_getIcon(){const e=this.transportType.toLowerCase();return ve[e]||ve.default}render(){return P`<ha-icon .icon=${this._getIcon()}></ha-icon>`}};Te.styles=r`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: var(--opt-icon-size, 24px);
      height: var(--opt-icon-size, 24px);
      flex-shrink: 0;
    }

    ha-icon {
      --mdc-icon-size: var(--opt-icon-size, 24px);
      width: var(--opt-icon-size, 24px);
      height: var(--opt-icon-size, 24px);
      /* flex, not block: see the icon rule in styles.ts — as a block the
         glyph sits about 2px low inside its own box. */
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `,e([ce({type:String,attribute:"transport-type"})],Te.prototype,"transportType",void 0),Te=e([de("openpublictransport-transport-icon")],Te);const Ue=P`<svg class="check" viewBox="0 0 12 12" aria-hidden="true" focusable="false">
  <path d="M2.5 6.5 5 9l4.5-5.5" />
</svg>`;let Re=class extends se{constructor(){super(...arguments),this.delay=0,this.isRealtime=!1,this.language=""}render(){if(this.delay>0)return P`
        <span class="delay-badge delayed">+${this.delay}</span>
      `;if(0===this.delay&&this.isRealtime){const e=xe(this.language,"on_time");return P`
        <span class="delay-badge on-time" role="img" aria-label=${e} title=${e}>${Ue}</span>
      `}return V}};Re.styles=[fe,r`
      /* As a block, the host takes its baseline from its own first line box —
         which the template's indentation creates in the inherited font, not in
         the badge's. Aligned against a time beside it the badge then sat a
         line's worth too low. A flex host ignores that whitespace and takes the
         badge's own baseline instead. */
      :host {
        display: inline-flex;
        align-items: baseline;
      }
    `],e([ce({type:Number})],Re.prototype,"delay",void 0),e([ce({type:Boolean,attribute:"is-realtime"})],Re.prototype,"isRealtime",void 0),e([ce({attribute:!1})],Re.prototype,"language",void 0),Re=e([de("openpublictransport-delay-badge")],Re);let Ie=class extends se{constructor(){super(...arguments),this.language="en",this.heading="",this.disruptions=[],this.notices=[],this._opener=null,this._onClose=()=>{this._opener?.focus?.(),this._opener=null},this._onClick=e=>{e.target===this._dialog&&this.close()}}async open(){this._opener=this.getRootNode().activeElement,await this.updateComplete,this._dialog.open||this._dialog.showModal()}close(){this._dialog?.close()}_renderList(e,t){const i="disruption"===t?"mdi:alert-circle-outline":"mdi:information-outline";return P`<ul>
      ${e.map(e=>P`<li class=${t}><ha-icon icon=${i}></ha-icon><span>${e}</span></li>`)}
    </ul>`}render(){const e=this.language,t=this.disruptions.length>0&&this.notices.length>0;return P`
      <dialog aria-labelledby="title" @close=${this._onClose} @click=${this._onClick}>
        <div class="dialog-header">
          <span class="dialog-title" id="title">${this.heading}</span>
          <button class="close" aria-label=${xe(e,"close")} @click=${()=>this.close()}>
            <ha-icon icon="mdi:close"></ha-icon>
          </button>
        </div>
        <div class="dialog-body">
          ${this.disruptions.length?P`${t?P`<h3>${xe(e,"disruptions")}</h3>`:V}
              ${this._renderList(this.disruptions,"disruption")}`:V}
          ${this.notices.length?P`${t?P`<h3>${xe(e,"notices")}</h3>`:V}
              ${this._renderList(this.notices,"info")}`:V}
        </div>
      </dialog>
    `}};Ie.styles=r`
    dialog {
      box-sizing: border-box;
      width: min(440px, calc(100vw - 32px));
      max-height: calc(100vh - 64px);
      padding: 0;
      border: 1px solid var(--opt-border);
      border-radius: var(--ha-card-border-radius, 12px);
      background: var(--opt-bg);
      color: var(--opt-text);
      font-family: var(--opt-font-family);
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35);
    }

    dialog::backdrop {
      background: rgba(0, 0, 0, 0.5);
    }

    .dialog-header {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 8px 12px 16px;
      border-bottom: 1px solid var(--opt-border);
      font-size: var(--ha-font-size-l, 16px);
      font-weight: var(--opt-font-weight-medium);
    }

    .dialog-title {
      flex: 1;
      min-width: 0;
    }

    .close {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      padding: 0;
      border: none;
      border-radius: 50%;
      background: transparent;
      color: var(--opt-text-secondary);
      cursor: pointer;
      --mdc-icon-size: 20px;
    }

    .close:focus-visible {
      outline: 2px solid var(--opt-accent);
    }

    .dialog-body {
      padding: 4px 16px 16px;
      overflow-y: auto;
    }

    h3 {
      margin: 12px 0 4px;
      font-size: var(--opt-font-size-label);
      font-weight: var(--opt-font-weight-medium);
      text-transform: var(--opt-caps);
      letter-spacing: calc(var(--opt-tracking) * 0.08em);
      color: var(--opt-text-secondary);
    }

    ul {
      margin: 0;
      padding: 0;
      list-style: none;
    }

    li {
      display: flex;
      gap: 8px;
      padding: 6px 0;
      font-size: var(--ha-font-size-m, 14px);
      line-height: 1.45;
      overflow-wrap: anywhere;
    }

    li ha-icon {
      flex-shrink: 0;
      --mdc-icon-size: 18px;
      width: 18px;
      height: 18px;
      margin-top: 1px;
    }

    .disruption ha-icon {
      color: var(--opt-delay-red);
    }

    .info ha-icon {
      color: var(--opt-text-secondary);
    }
  `,e([ce({attribute:!1})],Ie.prototype,"language",void 0),e([ce({type:String})],Ie.prototype,"heading",void 0),e([ce({attribute:!1})],Ie.prototype,"disruptions",void 0),e([ce({attribute:!1})],Ie.prototype,"notices",void 0),e([ge("dialog")],Ie.prototype,"_dialog",void 0),Ie=e([de("openpublictransport-info-dialog")],Ie);const Le=P`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M5 12h14M13 6l6 6-6 6" />
</svg>`;let qe=class extends se{constructor(){super(...arguments),this.departures=[],this.stationName="",this._dialog={heading:"",disruptions:[],notices:[]}}_openDialog(e,t,i){this._dialog={heading:e,disruptions:t,notices:i},this._dialogEl?.open()}_getCurrentTime(){return(new Date).toLocaleTimeString(this.hass?.language||"de-DE",{hour:"2-digit",minute:"2-digit",second:"2-digit"})}_disruptions(e){return e.disruptions??e.notices??[]}_collectDisruptions(){const e=[];for(const t of this.departures)for(const i of this._disruptions(t))e.includes(i)||e.push(i);return e}_departureTime(e){return e.departure_time||e.planned_time||""}_countdown(e){return ke(this.hass.language,e.minutes_until_departure)}_renderHeader(){return this.config.show_header?P`
      <div class="card-header">
        <span class="station-name">${this.stationName||"Departures"}</span>
        <span class="current-time">${this._getCurrentTime()}</span>
      </div>
    `:V}_renderDisruptionBanner(){if(!this.config.show_disruption_banner)return V;const e=this._collectDisruptions();if(0===e.length)return V;const t=this.hass.language,i=e.length-1;return P`
      <button
        class="disruption-banner"
        aria-haspopup="dialog"
        aria-label=${xe(t,"show_all_disruptions")}
        @click=${()=>this._openDialog(xe(t,"disruptions"),e,[])}
      >
        <ha-icon icon="mdi:alert"></ha-icon>
        <span class="disruption-text">${e[0]}</span>
        ${i>0?P`<span class="disruption-more">${xe(t,"more_count",{n:i})}</span>`:V}
      </button>
    `}_renderNotices(e){if(!this.config.show_notices)return V;if(!e.notices||0===e.notices.length)return V;const t=this.hass.language,i=this._disruptions(e),n=e.notices.filter(e=>!i.includes(e)),a=i.length>0,o=xe(t,"notices_for",{line:e.line,destination:e.destination}),r=a?"mdi:alert-circle-outline":"mdi:information-outline";return this._board?P`
        <button
          class="b-notice ${a?"disrupted":""}"
          aria-haspopup="dialog"
          aria-label=${o}
          title=${e.notices.join(", ")}
          @click=${()=>this._openDialog(o,i,n)}
        >
          <ha-icon icon=${r}></ha-icon>
        </button>
      `:P`
      <button
        class="notice-button"
        aria-haspopup="dialog"
        aria-label=${o}
        title=${e.notices.join(", ")}
        @click=${()=>this._openDialog(o,i,n)}
      >
        <ha-icon
          class="notice-icon ${a?"":"notice-info"}"
          icon=${r}
        ></ha-icon>
      </button>
    `}_renderDialog(){return P`
      <openpublictransport-info-dialog
        .language=${this.hass.language}
        .heading=${this._dialog.heading}
        .disruptions=${this._dialog.disruptions}
        .notices=${this._dialog.notices}
      ></openpublictransport-info-dialog>
    `}_renderPlatformCell(e){return this.config.show_platform?e.platform?e.platform_changed&&e.planned_platform?P`
        <td class="platform-cell">
          <span class="platform-changed">${e.planned_platform}</span>
          <span class="platform-new">${e.platform}</span>
        </td>
      `:P`<td class="platform-cell">${e.platform}</td>`:P`<td class="platform-cell"></td>`:V}_renderRow(e){const t=e.line_color?`background:${e.line_color};color:${e.line_text_color||"#000"}`:"";return P`
      <tr>
        <td class="time-cell">
          <span class="time-line">
            <span class="time-departure time-planned">${this._departureTime(e)}</span>
            ${this.config.show_delay?P`
                  <openpublictransport-delay-badge
                    .delay=${e.delay}
                    ?is-realtime=${e.is_realtime}
                    .language=${this.hass.language}
                  ></openpublictransport-delay-badge>
                `:V}
          </span>
          <span class="time-countdown">${this._countdown(e)}</span>
        </td>
        <td>
          <span class="line-cell">
            <openpublictransport-transport-icon
              transport-type=${e.transportation_type}
            ></openpublictransport-transport-icon>
            <span class="line-badge" style=${t}>${e.line}</span>
          </span>
        </td>
        <td class="destination-cell">
          <span class="destination">
            <span class="destination-name">${e.destination}</span>
            ${this._renderNotices(e)}
          </span>
        </td>
        ${this._renderPlatformCell(e)}
      </tr>
    `}get _board(){return"ha"!==this.config.theme}_badgeStyle(e){return e.line_color?`background:${e.line_color};color:${e.line_text_color||"#000"}`:""}_getBoardTime(){return(new Date).toLocaleTimeString(this.hass?.language||"de-DE",{hour:"2-digit",minute:"2-digit"})}_countdownParts(e){const t=this.hass.language;if(e<=0)return{value:xe(t,"now"),unit:""};if(e<60)return{value:String(e),unit:xe(t,"min_unit")};return{value:`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`,unit:"h"}}_singleLine(){if(!this.config.show_header||0===this.departures.length)return;const e=this.departures[0];return this.departures.every(t=>t.line===e.line)?e:void 0}_renderBoardHeader(e){if(!this.config.show_header)return V;const t=this.hass.language;return P`
      <div class="b-header">
        <div class="b-header-main">
          ${e?P`<span class="b-line-badge" style=${this._badgeStyle(e)}>
                <openpublictransport-transport-icon
                  transport-type=${e.transportation_type}
                ></openpublictransport-transport-icon>
                ${e.line}
              </span>`:V}
          <div class="b-header-text">
            <span class="b-header-label">${xe(t,"departures_heading")}</span>
            <span class="b-station">${this.stationName||xe(t,"departures_heading")}</span>
          </div>
        </div>
        <span class="b-clock">${this._getBoardTime()}</span>
      </div>
    `}_renderBoardTime(e){const t=this.hass.language,i=this._departureTime(e),n=this.config.show_delay&&e.delay>0;let a=V;if(n){const t=e.planned_time&&e.planned_time!==i?e.planned_time:"";a=P`<span class="b-time-sub"
        >${t?P`<span class="b-planned">${t}</span> `:V}<span class="b-delay"
          >+${e.delay}</span
        ></span
      >`}else this.config.show_delay&&this.config.show_realtime_indicator&&0===e.delay&&e.is_realtime&&(a=P`<span class="b-time-sub b-on-time">${xe(t,"on_time")}</span>`);return P`
      <td class="b-time-cell">
        <span class="b-time time-departure ${n?"late":""}">${i}</span>
        ${a}
      </td>
    `}_renderBoardRow(e,t){const i=this.hass.language,n=this.config.show_platform,a=Boolean(e.platform_changed&&e.planned_platform),o=e.minutes_until_departure,r=this._countdownParts(o),s=this.config.highlight_minutes??9,l=s>0&&o<=s;return P`
      <tr>
        ${this._renderBoardTime(e)}
        ${t?V:P`<td class="b-line-cell">
              <span class="b-line">
                <openpublictransport-transport-icon
                  transport-type=${e.transportation_type}
                ></openpublictransport-transport-icon>
                <span class="b-line-badge" style=${this._badgeStyle(e)}>${e.line}</span>
              </span>
            </td>`}
        <td class="b-dest-cell">
          <span class="b-dest">
            <span class="b-arrow">${Le}</span>
            <span class="b-dest-name">${e.destination}</span>
            ${this._renderNotices(e)}
          </span>
          ${a&&n?P`<span class="b-platform-note"
                >${xe(i,"platform_change",{new:e.platform,old:e.planned_platform})}</span
              >`:V}
        </td>
        ${n?P`<td class="b-platform-cell">
              ${e.platform?P`<span class="b-platform ${a?"changed":""}">${e.platform}</span>`:V}
            </td>`:V}
        <td class="b-count-cell">
          <span class="b-count ${l?"soon":""}"
            ><span>${r.value}</span>${r.unit?P`<span class="b-count-unit">${r.unit}</span>`:V}</span
          >
        </td>
      </tr>
    `}_renderBoard(e){const t=this.hass.language,i=this._singleLine();return 0===e.length?P`
        <div class="board">
          ${this._renderBoardHeader(void 0)}
          <div class="card-empty">${xe(t,"no_departures")}</div>
        </div>
      `:P`
      <div class="board">
        ${this._renderBoardHeader(i)}
        ${this._renderDisruptionBanner()}
        <div class="card-content">
          <table class="b-table">
            <thead>
              <tr>
                <th>${xe(t,"time")}</th>
                ${i?V:P`<th>${xe(t,"line")}</th>`}
                <th>${xe(t,i?"direction":"destination")}</th>
                ${this.config.show_platform?P`<th class="b-col-platform">
                      <span class="label-long">${xe(t,"track")}</span>
                      <span class="label-short">${xe(t,"platform")}</span>
                    </th>`:V}
                <th class="b-col-count">${xe(t,"countdown_heading")}</th>
              </tr>
            </thead>
            <tbody>
              ${e.map(e=>this._renderBoardRow(e,Boolean(i)))}
            </tbody>
          </table>
        </div>
        ${this._renderDialog()}
      </div>
    `}render(){const e=this.departures.slice(0,this.config.max_departures);return this._board?this._renderBoard(e):0===e.length?P`
        ${this._renderHeader()}
        <div class="card-empty">${xe(this.hass.language,"no_departures")}</div>
      `:P`
      ${this._renderHeader()}
      ${this._renderDisruptionBanner()}
      <div class="card-content">
        <table class="departure-table">
          <thead>
            <tr>
              <th>${xe(this.hass.language,"time")}</th>
              <th>${xe(this.hass.language,"line")}</th>
              <th>${xe(this.hass.language,"destination")}</th>
              ${this.config.show_platform?P`<th>
                    <span class="label-long">${xe(this.hass.language,"track")}</span>
                    <span class="label-short">${xe(this.hass.language,"platform")}</span>
                  </th>`:V}
            </tr>
          </thead>
          <tbody>
            ${e.map(e=>this._renderRow(e))}
          </tbody>
        </table>
      </div>
      ${this._renderDialog()}
    `}};qe.styles=[fe,be],e([ce({attribute:!1})],qe.prototype,"hass",void 0),e([ce({attribute:!1})],qe.prototype,"config",void 0),e([ce({attribute:!1})],qe.prototype,"departures",void 0),e([ce({type:String})],qe.prototype,"stationName",void 0),e([ue()],qe.prototype,"_dialog",void 0),e([ge("openpublictransport-info-dialog")],qe.prototype,"_dialogEl",void 0),qe=e([de("openpublictransport-table-layout")],qe);let Ne=class extends se{constructor(){super(...arguments),this.departures=[],this.stationName=""}_shortenDestination(e){if(e.length<=15)return e;const t=e.split(/[,\s-]+/);return t.length>1?t[0]:e.substring(0,13)+"..."}_renderCountdown(e){return function(e,t){if(t<=0)return xe(e,"now");if(t<60)return`${t}'`;const i=Math.floor(t/60),n=t%60;return n?`${i}h ${n}'`:`${i}h`}(this.hass.language,e)}_getChipClass(e){return e.delay>0?"compact-chip delayed":e.is_realtime&&0===e.delay?"compact-chip on-time":"compact-chip"}_renderHeader(){return this.config.show_header?P`
      <div class="card-header">
        <span class="station-name">${this.stationName||"Departures"}</span>
      </div>
    `:V}render(){const e=this.departures.slice(0,this.config.max_departures);return 0===e.length?P`
        ${this._renderHeader()}
        <div class="card-empty">${xe(this.hass.language,"no_departures")}</div>
      `:P`
      ${this._renderHeader()}
      <div class="compact-container">
        ${e.map(e=>{const t=e.line_color?`background:${e.line_color};color:${e.line_text_color||"#000"}`:"";return P`
              <div class=${this._getChipClass(e)}>
                <openpublictransport-transport-icon
                  transport-type=${e.transportation_type}
                ></openpublictransport-transport-icon>
                <span class="chip-line" style=${t}>${e.line}</span>
                <span class="chip-destination">${this._shortenDestination(e.destination)}</span>
                <span class="chip-countdown">${this._renderCountdown(e.minutes_until_departure)}</span>
              </div>
            `})}
      </div>
    `}};Ne.styles=fe,e([ce({attribute:!1})],Ne.prototype,"hass",void 0),e([ce({attribute:!1})],Ne.prototype,"config",void 0),e([ce({attribute:!1})],Ne.prototype,"departures",void 0),e([ce({type:String})],Ne.prototype,"stationName",void 0),Ne=e([de("openpublictransport-compact-layout")],Ne);const je=P`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M3.5 12h15M13.5 6.5 19 12l-5.5 5.5" />
</svg>`,De="get_journeys";let Ke=class extends se{constructor(){super(...arguments),this.trip=null,this._openSummary=null,this._openJourney=null,this._openError="",this._request=0}_formatTime(e){return e||""}_realTime(e,t){return this._formatTime(e||t||"")}_formatDuration(e){const t=Math.max(0,Math.round(e||0)),i=Math.floor(t/60),n=t%60,a=Intl.DurationFormat;if(a)try{return new a(this.hass.language,{style:"narrow"}).format(i?{hours:i,minutes:n}:{minutes:n})}catch{}return i?`${i} h ${n} min`:`${n} min`}_journeyMinutes(e){const t=Date.parse(e.departure_timestamp||""),i=Date.parse(e.arrival_timestamp||"");return Number.isNaN(t)||Number.isNaN(i)?e.duration_minutes:Math.floor(i/6e4)-Math.floor(t/6e4)}_getRiskClass(e){switch(e.toLowerCase()){case"low":return"risk-low";case"medium":return"risk-medium";case"high":return"risk-high";default:return""}}_riskLabel(e,t){const i=`risk_${e.toLowerCase()}`,n=xe(t,i);return n===i?`${e} ${xe(t,"risk")}`:n}_getRiskIcon(e){switch(e.toLowerCase()){case"low":return"mdi:check-circle-outline";case"medium":return"mdi:alert-outline";case"high":return"mdi:alert-octagon";default:return"mdi:help-circle-outline"}}_renderHeader(e){return this.config.show_header?this._renderJourneyHeader(e):V}_renderJourneyHeader(e,t){return P`
      <div class="trip-header" id=${t??V}>
        <span class="time-span">
          <span>${e.departure}</span>
          <span class="trip-arrow">${je}</span>
          <span>${e.arrival}</span>
        </span>
        <span class="trip-duration">${this._formatDuration(this._journeyMinutes(e))}</span>
      </div>
    `}_renderMeta(e){const t=this.hass.language,i=`${e.transfers} ${1!==e.transfers?xe(t,"transfers"):xe(t,"transfer")}`,n=this._riskLabel(e.transfer_risk,t),a=this._formatDuration(e.min_transfer_time),o=`${xe(t,"min_transfer")} ${a}`;return P`
      <div class="trip-meta">
        <div class="trip-meta-item" title=${i}>
          <ha-icon icon="mdi:transit-transfer"></ha-icon>
          <span>${i}</span>
        </div>
        <div class="trip-meta-item ${this._getRiskClass(e.transfer_risk)}" title=${n}>
          <ha-icon icon=${this._getRiskIcon(e.transfer_risk)}></ha-icon>
          <span>${n}</span>
        </div>
        ${e.min_transfer_time>0?P`
              <div class="trip-meta-item" title=${o}>
                <ha-icon icon="mdi:timer-outline"></ha-icon>
                <span>${a}</span>
              </div>
            `:V}
        ${e.connection_feasible?V:P`
              <div class="trip-meta-item risk-high">
                <ha-icon icon="mdi:close-circle"></ha-icon>
                <span>${xe(t,"connection_at_risk")}</span>
              </div>
            `}
      </div>
    `}_renderLeg(e,t,i){const n=!(!i||!i.transfer&&"number"!=typeof i.transfer_minutes)?"trip-leg transfer":"trip-leg",a=this._realTime(e.arrival_estimated,e.arrival_planned),o=!!t&&!!a&&a!==this._realTime(t.departure_estimated,t.departure_planned);return P`
      <div class=${n}>
        <div class="leg-head">
          <div class="leg-station">${e.origin}</div>
          <div class="leg-head-time">
            ${e.delay>0?P`
                  <openpublictransport-delay-badge
                    .delay=${e.delay}
                    is-realtime
                  ></openpublictransport-delay-badge>
                `:V}
            <div class="leg-time leg-departure">
              ${this._realTime(e.departure_estimated,e.departure_planned)}
            </div>
          </div>
        </div>
        <div class="leg-details">
          <openpublictransport-transport-icon
            transport-type=${e.transport_type||e.product}
          ></openpublictransport-transport-icon>
          ${e.line||e.direction?P`
                <span class="leg-service">
                  ${e.line?P`<span class="leg-line">${e.line}</span>`:V}
                  ${e.direction?P`
                        <span class="trip-arrow">${je}</span>
                        <span class="leg-direction">${e.direction}</span>
                      `:V}
                </span>
              `:V}
          ${e.platform?P`<span>${xe(this.hass.language,"platform")} ${e.platform}</span>`:V}
          <span class="leg-duration">${this._formatDuration(e.duration_minutes)}</span>
          ${o?P`<span class="leg-arrival">${a}</span>`:V}
        </div>
        ${this._renderTransferNote(e)}
      </div>
    `}_renderTransferNote(e){const t="number"==typeof e.transfer_minutes;if(!e.transfer&&!t)return V;const i=xe(this.hass.language,"transfer");return P`
      <div class="leg-transfer-info">
        <ha-icon icon="mdi:timer-outline"></ha-icon>
        <span>${t?`${i} · ${this._formatDuration(e.transfer_minutes)}`:i}</span>
      </div>
    `}_renderTimeline(e){const t=e[e.length-1];return P`
      <div class="trip-timeline">
        ${e.map((t,i)=>this._renderLeg(t,e[i+1],e[i-1]))}
        ${t?P`
              <div class="trip-leg" style="border-left-color: transparent; padding-bottom: 0;">
                <div class="leg-head">
                  <div class="leg-station">${t.destination}</div>
                  <div class="leg-head-time">
                    <div class="leg-time leg-departure">
                      ${this._realTime(t.arrival_estimated,t.arrival_planned)}
                    </div>
                  </div>
                </div>
              </div>
            `:V}
      </div>
    `}_renderJourney(e){return P`
      ${this._renderMeta(e)}
      ${this._renderTimeline(e.legs||[])}
    `}_canOpen(e){return!!(e.legs&&e.legs.length>0)||!!this.hass?.callService&&!!this.hass?.services?.[Ce]?.[De]}_altSummary(e,t){return[`${this._formatTime(e.departure)} – ${this._formatTime(e.arrival)}`,this._formatDuration(this._journeyMinutes(e)),`${e.transfers} ${1!==e.transfers?xe(t,"transfers"):xe(t,"transfer")}`,this._riskLabel(e.transfer_risk,t)]}_renderAltRow(e,t){return P`
      <span class="time-span">
        <span class="leg-time">${this._formatTime(e.departure)}</span>
        <span class="trip-arrow">${je}</span>
        <span class="leg-time">${this._formatTime(e.arrival)}</span>
      </span>
      <span>${this._formatDuration(this._journeyMinutes(e))}</span>
      <span>${e.transfers} ${1!==e.transfers?xe(t,"transfers"):xe(t,"transfer")}</span>
      <span class="alt-risk ${this._getRiskClass(e.transfer_risk)}">
        <ha-icon
          icon=${this._getRiskIcon(e.transfer_risk)}
          title=${this._riskLabel(e.transfer_risk,t)}
          style="--opt-icon-size:16px;"
        ></ha-icon>
      </span>
    `}_renderAlternatives(e){if(!e.next_journeys||0===e.next_journeys.length)return V;const t=this.hass.language;return P`
      <div class="alt-journeys">
        <div class="alt-journeys-title">${xe(t,"alternative_connections")}</div>
        ${e.next_journeys.map(e=>this._canOpen(e)?P`
                <button
                  type="button"
                  class="alt-journey"
                  aria-haspopup="dialog"
                  aria-label=${`${xe(t,"show_details")}: ${this._altSummary(e,t).join(", ")}`}
                  @click=${()=>this._open(e)}
                >
                  ${this._renderAltRow(e,t)}
                </button>
              `:P`<div class="alt-journey">${this._renderAltRow(e,t)}</div>`)}
      </div>
    `}_open(e){const t=++this._request;this._openSummary=e,this._openError="",this._openJourney=e.legs&&e.legs.length>0?e:null,this._dialog?.showModal(),this._openJourney||this._fetch(e,t)}_isSameJourney(e,t){if(e.id&&t.id)return e.id===t.id;const i=e.departure_timestamp&&t.departure_timestamp?e.departure_timestamp===t.departure_timestamp:e.departure===t.departure,n=e.arrival_timestamp&&t.arrival_timestamp?e.arrival_timestamp===t.arrival_timestamp:e.arrival===t.arrival;return i&&n&&e.transfers===t.transfers&&e.duration_minutes===t.duration_minutes}async _fetch(e,t){try{const i=await this.hass.callService(Ce,De,{entity_id:this.config.entity},void 0,!1,!0);if(t!==this._request)return;const n=(i?.response?.journeys??[]).find(t=>this._isSameJourney(t,e));n?.legs?.length?this._openJourney=n:this._openError=xe(this.hass.language,"connection_gone")}catch(e){if(t!==this._request)return;this._openError=xe(this.hass.language,"details_failed"),console.error("openpublictransport-card: could not load connection detail",e)}}_close(){this._dialog?.close()}_onDialogClick(e){e.target===e.currentTarget&&this._close()}_onDialogClose(){this._dialog?.open||(this._request++,this._openSummary=null,this._openJourney=null,this._openError="")}_renderDialogBody(){return this._openJourney?this._renderJourney(this._openJourney):this._openError?P`
        <div class="journey-dialog-status is-error">
          <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
          <span>${this._openError}</span>
        </div>
      `:P`
      <div class="journey-dialog-status">
        <span class="journey-dialog-spinner" aria-hidden="true"></span>
        <span>${xe(this.hass.language,"loading_details")}</span>
      </div>
    `}_renderDialog(){const e=this.hass.language;return P`
      <dialog
        class="journey-dialog"
        aria-labelledby="journey-dialog-title"
        @click=${this._onDialogClick}
        @close=${this._onDialogClose}
      >
        <div class="journey-dialog-head">
          ${this._openSummary?this._renderJourneyHeader(this._openSummary,"journey-dialog-title"):P`<div class="trip-header" id="journey-dialog-title"></div>`}
          <button
            type="button"
            class="journey-dialog-close"
            aria-label=${xe(e,"close")}
            @click=${this._close}
          >
            <ha-icon icon="mdi:close"></ha-icon>
          </button>
        </div>
        <div class="journey-dialog-content">${this._renderDialogBody()}</div>
      </dialog>
    `}render(){return P`
      ${this.trip?P`
            <div class="trip-container">
              ${this._renderHeader(this.trip)}
              ${this._renderJourney(this.trip)}
              ${this._renderAlternatives(this.trip)}
            </div>
          `:P`<div class="card-empty">${xe(this.hass.language,"no_trip_data")}</div>`}
      ${this._renderDialog()}
    `}};Ke.styles=fe,e([ce({attribute:!1})],Ke.prototype,"hass",void 0),e([ce({attribute:!1})],Ke.prototype,"config",void 0),e([ce({attribute:!1})],Ke.prototype,"trip",void 0),e([ue()],Ke.prototype,"_openSummary",void 0),e([ue()],Ke.prototype,"_openJourney",void 0),e([ue()],Ke.prototype,"_openError",void 0),e([ge("dialog.journey-dialog")],Ke.prototype,"_dialog",void 0),Ke=e([de("openpublictransport-trip-layout")],Ke);let Fe=class extends se{constructor(){super(...arguments),this.departures=[],this.stationName="",this.emptyKey="no_departures"}_renderCountdown(e){return ke(this.hass?.language||"en",e)}render(){const e=this.hass?.language||"en",t=this.departures[0];if(!t)return P`<div class="next-empty">${xe(e,this.emptyKey)}</div>`;const i=t.line_color?`background:${t.line_color};color:${t.line_text_color||"#000"}`:"",n=t.minutes_until_departure,a=n<=2?"next-countdown imminent":"next-countdown";return P`
      <div class="next-container">
        ${this.config.show_header&&this.stationName?P`<div class="next-station">${this.stationName}</div>`:V}

        <div class="next-main">
          <openpublictransport-transport-icon
            class="next-icon"
            transport-type=${t.transportation_type}
          ></openpublictransport-transport-icon>
          <span class="next-line-badge" style=${i}>${t.line}</span>
          <span class="next-destination">${t.destination}</span>
        </div>

        <div class="next-bottom">
          <span class=${a}>${this._renderCountdown(n)}</span>
          <span class="time-line">
            <span class="next-time">${t.departure_time||t.planned_time}</span>
            ${this.config.show_delay?P`<openpublictransport-delay-badge
                  .delay=${t.delay}
                  ?is-realtime=${t.is_realtime}
                  .language=${e}
                ></openpublictransport-delay-badge>`:V}
          </span>
          ${this.config.show_platform&&t.platform?P`<span class="next-platform">${xe(e,"platform")} ${t.platform}</span>`:V}
        </div>
      </div>
    `}};Fe.styles=[fe,r`
      .next-container {
        padding: 16px;
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      /* The station: one line, like the station name in the other layouts'
         header. Secondary text rather than a faded copy of it — at 80%
         opacity it measured 3.7:1 on the light board. */
      .next-station {
        font-size: var(--opt-font-size-label);
        text-transform: var(--opt-caps);
        letter-spacing: calc(var(--opt-tracking) * 0.08em);
        color: var(--opt-text-secondary);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .next-main {
        display: flex;
        align-items: center;
        gap: 12px;
      }

      .next-icon {
        --opt-icon-size: 36px;
        flex-shrink: 0;
        opacity: 0.85;
      }

      /* Text on the badge is the palette's text-on-accent; it was black on
         every theme, whatever the badge's colour. */
      .next-line-badge {
        font-size: var(--ha-font-size-m, 14px);
        font-weight: 700;
        background: var(--opt-accent);
        color: var(--opt-on-accent);
        padding: 3px 8px;
        border-radius: 4px;
        flex-shrink: 0;
        white-space: nowrap;
      }

      .next-destination {
        font-size: var(--ha-font-size-l, 16px);
        font-weight: var(--opt-font-weight-medium);
        flex: 1;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .next-bottom {
        display: flex;
        align-items: baseline;
        gap: 10px;
        margin-top: 4px;
      }

      .next-time {
        font-size: var(--ha-font-size-s, 12px);
        color: var(--opt-text-secondary);
        font-variant-numeric: tabular-nums;
      }

      .next-countdown {
        font-size: var(--ha-font-size-2xl, 24px);
        font-weight: 700;
        font-variant-numeric: tabular-nums;
        line-height: 1;
      }

      .next-countdown.imminent {
        color: var(--opt-delay-red);
      }

      .next-platform {
        font-size: var(--opt-font-size-label);
        color: var(--opt-text-secondary);
        margin-left: auto;
        white-space: nowrap;
      }

      .next-empty {
        padding: 24px 16px;
        text-align: center;
        color: var(--opt-text-secondary);
        font-size: var(--ha-font-size-s, 12px);
      }
    `],e([ce({attribute:!1})],Fe.prototype,"hass",void 0),e([ce({attribute:!1})],Fe.prototype,"config",void 0),e([ce({attribute:!1})],Fe.prototype,"departures",void 0),e([ce({type:String})],Fe.prototype,"stationName",void 0),e([ce({type:String})],Fe.prototype,"emptyKey",void 0),Fe=e([de("openpublictransport-next-layout")],Fe);let He=class extends se{constructor(){super(...arguments),this._entityFilter=e=>ze(this.hass,e.entity_id)}setConfig(e){this._config={...ye,...e}}_fireConfigChanged(){const e=new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0});this.dispatchEvent(e)}_entityChanged(e){if(!this._config)return;const t=e.detail?.value??"";this._config={...this._config,entity:t},this._fireConfigChanged()}_layoutChanged(e){const t=e.target.value;this._config&&t&&(this._config={...this._config,layout:t},this._fireConfigChanged())}_themeChanged(e){const t=e.target.value;this._config&&t&&(this._config={...this._config,theme:t},this._fireConfigChanged())}_maxDeparturesChanged(e){if(!this._config)return;const t=e.target,i=parseInt(t.value,10);isNaN(i)||i<1||(this._config={...this._config,max_departures:i},this._fireConfigChanged())}_highlightChanged(e){if(!this._config)return;const t=parseInt(e.target.value,10);isNaN(t)||t<0||(this._config={...this._config,highlight_minutes:t},this._fireConfigChanged())}_toggleChanged(e){return t=>{this._config&&(this._config={...this._config,[e]:t.target.checked},this._fireConfigChanged())}}render(){if(!this.hass||!this._config)return P``;const e=this.hass.language;return P`
      <div class="card-config">
        <div class="config-row">
          <label>${xe(e,"entity")}</label>
          <ha-entity-picker
            .hass=${this.hass}
            .value=${this._config.entity}
            .includeDomains=${["sensor"]}
            .entityFilter=${this._entityFilter}
            allow-custom-entity
            @value-changed=${this._entityChanged}
          ></ha-entity-picker>
        </div>

        <div class="config-row">
          <label>${xe(e,"layout")}</label>
          <select .value=${this._config.layout} @change=${this._layoutChanged}>
            <option value="table" ?selected=${"table"===this._config.layout}>${xe(e,"table_layout")}</option>
            <option value="compact" ?selected=${"compact"===this._config.layout}>${xe(e,"compact_layout")}</option>
            <option value="trip" ?selected=${"trip"===this._config.layout}>${xe(e,"trip_layout")}</option>
            <option value="next" ?selected=${"next"===this._config.layout}>${xe(e,"next_layout")}</option>
          </select>
        </div>

        <div class="config-row">
          <label>${xe(e,"theme")}</label>
          <select .value=${this._config.theme} @change=${this._themeChanged}>
            <option value="auto" ?selected=${"auto"===this._config.theme}>Auto</option>
            <option value="dark" ?selected=${"dark"===this._config.theme}>Dark</option>
            <option value="light" ?selected=${"light"===this._config.theme}>Light</option>
            <option value="ha" ?selected=${"ha"===this._config.theme}>${xe(e,"theme_ha")}</option>
          </select>
        </div>

        <div class="config-row">
          <label>${xe(e,"max_departures")}</label>
          <ha-textfield
            type="number"
            .value=${String(this._config.max_departures)}
            min="1"
            max="50"
            @change=${this._maxDeparturesChanged}
          ></ha-textfield>
        </div>

        ${"table"===this._config.layout&&"ha"!==this._config.theme?P`
              <div class="config-row">
                <label>${xe(e,"highlight_minutes")}</label>
                <ha-textfield
                  type="number"
                  .value=${String(this._config.highlight_minutes??9)}
                  min="0"
                  max="60"
                  helper=${xe(e,"highlight_minutes_hint")}
                  @change=${this._highlightChanged}
                ></ha-textfield>
              </div>
            `:""}

        <div class="section-title">${xe(e,"display_options")}</div>

        <div class="toggle-row">
          <label>${xe(e,"show_header")}</label>
          <ha-switch
            .checked=${this._config.show_header}
            @change=${this._toggleChanged("show_header")}
          ></ha-switch>
        </div>

        <div class="toggle-row">
          <label>${xe(e,"show_platform")}</label>
          <ha-switch
            .checked=${this._config.show_platform}
            @change=${this._toggleChanged("show_platform")}
          ></ha-switch>
        </div>

        <div class="toggle-row">
          <label>${xe(e,"show_delay")}</label>
          <ha-switch
            .checked=${this._config.show_delay}
            @change=${this._toggleChanged("show_delay")}
          ></ha-switch>
        </div>

        <div class="toggle-row">
          <label>${xe(e,"show_realtime")}</label>
          <ha-switch
            .checked=${this._config.show_realtime_indicator}
            @change=${this._toggleChanged("show_realtime_indicator")}
          ></ha-switch>
        </div>

        ${"table"===this._config.layout?P`
              <div class="toggle-row">
                <label>${xe(e,"show_notices")}</label>
                <ha-switch
                  .checked=${!1!==this._config.show_notices}
                  @change=${this._toggleChanged("show_notices")}
                ></ha-switch>
              </div>

              <div class="toggle-row">
                <label>${xe(e,"show_disruption_banner")}</label>
                <ha-switch
                  .checked=${!1!==this._config.show_disruption_banner}
                  @change=${this._toggleChanged("show_disruption_banner")}
                ></ha-switch>
              </div>
            `:""}

        <div class="toggle-row">
          <label>${xe(e,"show_data_age")}</label>
          <ha-switch
            .checked=${!0===this._config.show_data_age}
            @change=${this._toggleChanged("show_data_age")}
          ></ha-switch>
        </div>

        ${this._isTripEntity()?this._renderTripFilterNote(e):this._renderFilters(e)}
      </div>
    `}_isTripEntity(){return!(!this.hass||!this._config?.entity)&&"trip"===Ee(this.hass,this._config.entity)}_renderTripFilterNote(e){return P`
      <div class="section-title">${xe(e,"filters")}</div>
      <div class="filter-note">${xe(e,"trip_filter_note")}</div>
    `}_renderFilters(e){return P`
        <div class="section-title">${xe(e,"line_filter")}</div>
        <div class="config-row">
          <ha-textfield
            type="text"
            .value=${this._config.line_filter||""}
            placeholder="U6, S1, RE5"
            helper=${xe(e,"line_filter_hint")}
            @change=${e=>{this._config&&(this._config={...this._config,line_filter:e.target.value},this._fireConfigChanged())}}
            style="width:100%"
          ></ha-textfield>
        </div>

        <div class="section-title">${xe(e,"destination_filter")}</div>
        <div class="config-row">
          <ha-textfield
            type="text"
            .value=${this._config.destination_filter||""}
            placeholder="Duisburg, Flughafen"
            helper=${xe(e,"destination_filter_hint")}
            @change=${e=>{this._config&&(this._config={...this._config,destination_filter:e.target.value},this._fireConfigChanged())}}
            style="width:100%"
          ></ha-textfield>
        </div>
    `}};He.styles=r`
    .card-config {
      padding: 16px;
    }
    .config-row {
      display: flex;
      flex-direction: column;
      margin-bottom: 16px;
    }
    .config-row label {
      font-weight: 500;
      margin-bottom: 4px;
      font-size: 14px;
    }
    .toggle-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px 0;
    }
    .toggle-row label {
      font-weight: 400;
    }
    ha-entity-picker,
    ha-textfield {
      width: 100%;
    }
    select {
      width: 100%;
      padding: 8px;
      border: 1px solid var(--divider-color, #ccc);
      border-radius: 4px;
      background: var(--card-background-color, #fff);
      color: var(--primary-text-color, #333);
      font-size: 14px;
    }
    .section-title {
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      opacity: 0.6;
      margin: 16px 0 8px;
    }
    .filter-note {
      font-size: 13px;
      line-height: 1.4;
      opacity: 0.8;
      padding: 12px;
      border-radius: 4px;
      border: 1px solid var(--divider-color, #ccc);
      background: var(--secondary-background-color, transparent);
    }
  `,e([ce({attribute:!1})],He.prototype,"hass",void 0),e([ue()],He.prototype,"_config",void 0),He=e([de("openpublictransport-card-editor")],He),function(){const e="openpublictransport-board-fonts";if("undefined"==typeof document||document.getElementById(e))return;const t=(e,t)=>`@font-face {\n  font-family: "OPT Board";\n  font-style: normal;\n  font-weight: ${e};\n  font-display: swap;\n  src: url(data:font/woff2;base64,${t}) format("woff2");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}`,i=document.createElement("style");i.id=e,i.textContent=[t(600,"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"),t(700,"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")].join("\n"),document.head.appendChild(i)}(),console.info("%c OPENPUBLICTRANSPORT-CARD %c v1.13.0 ","color: #ffd700; background: #1a1a1a; font-weight: bold; padding: 2px 4px;","color: #1a1a1a; background: #ffd700; font-weight: bold; padding: 2px 4px;");let Be=class extends se{static getConfigElement(){return document.createElement("openpublictransport-card-editor")}static getStubConfig(e,t,i){const n=_e(e,t)[0]??_e(e,i)[0]??"",a=n?Ee(e,n):"unknown";return{...ye,entity:n,layout:Se(a),theme:"ha"}}setConfig(e){if(!e.entity)throw new Error(xe("en","please_define_entity"));this._config={...ye,...e}}getCardSize(){if(!this._config)return 3;switch(this._config.layout){case"compact":case"next":return 2;case"trip":return 5;default:return Math.min(2+(this._config.max_departures||10),12)}}getGridOptions(){return{rows:"auto",min_rows:2,columns:12}}connectedCallback(){super.connectedCallback(),this._timeInterval=setInterval(()=>{this.requestUpdate()},1e4)}disconnectedCallback(){super.disconnectedCallback(),this._timeInterval&&(clearInterval(this._timeInterval),this._timeInterval=void 0)}updated(e){super.updated(e),this._applyTheme()}_applyTheme(){if(!this._config)return;let e=this._config.theme;"auto"===e&&(e=this.hass?.themes?.darkMode?"dark":"light"),this.setAttribute("data-theme",e)}_getDepartures(){if(!this.hass||!this._config)return[];const e=this.hass.states[this._config.entity];if(!e)return[];const t=e.attributes.departures;if(!Array.isArray(t))return[];let i=t.map(e=>e.departure_timestamp?{...e,minutes_until_departure:Ae(e.departure_timestamp,e.minutes_until_departure)}:e).filter(e=>!e.departure_timestamp||e.minutes_until_departure>=0);const n=(this._config.line_filter||"").trim();if(n){const e=n.split(",").map(e=>e.trim().toLowerCase()).filter(Boolean);i=i.filter(t=>e.some(e=>t.line.toLowerCase()===e))}const a=(this._config.destination_filter||"").trim();if(a){const e=a.split(",").map(e=>e.trim().toLowerCase()).filter(Boolean);i=i.filter(t=>e.some(e=>(t.destination||"").toLowerCase().includes(e)))}return i}_getTripData(){if(!this.hass||!this._config)return null;const e=this.hass.states[this._config.entity];if(!e)return null;const t=e.attributes;return t.departure&&t.legs?{id:t.id,departure:t.departure,arrival:t.arrival,departure_timestamp:t.departure_timestamp,arrival_timestamp:t.arrival_timestamp,in_minutes:t.in_minutes,destination:t.destination,duration_minutes:t.duration_minutes,transfers:t.transfers,connection_feasible:t.connection_feasible,transfer_risk:t.transfer_risk,min_transfer_time:t.min_transfer_time,legs:t.legs,next_journeys:t.next_journeys}:null}_tripAsDeparture(e){const t=e.legs??[],i=t.find(e=>"walk"!==(e.transport_type||"").toLowerCase())??t[0];if(!i)return null;const n=i.departure_estimated||i.departure_planned||e.departure,a=t[t.length-1];return{line:i.line,destination:e.destination||a?.destination||"",departure_time:n,planned_time:n,delay:i.delay??0,platform:i.platform||"",transportation_type:i.transport_type||i.product||"",is_realtime:Boolean(i.departure_estimated),minutes_until_departure:this._minutesUntilTrip(e)}}_minutesUntilTrip(e){return Ae(e.departure_timestamp,e.in_minutes??0)}_getStationName(){if(!this.hass||!this._config)return"";const e=this.hass.states[this._config.entity];return e?e.attributes.friendly_name||e.attributes.station_name||e.entity_id:""}_renderError(e){return P`
      <ha-card>
        <div class="card-error">
          <ha-icon icon="mdi:alert-circle"></ha-icon>
          <div>${e}</div>
        </div>
      </ha-card>
    `}render(){if(!this._config||!this.hass)return V;const e=this.hass.states[this._config.entity];return e?"unavailable"===e.state?this._renderError(xe(this.hass.language,"entity_unavailable")):P`
      <ha-card>
        ${this._renderLayout()}
        ${this._renderDataAge(e.attributes)}
      </ha-card>
    `:this._renderError(`Entity not found: ${this._config.entity}`)}_renderDataAge(e){if(!this._config.show_data_age)return V;const t=function(e,t){if(!t)return null;const i=Date.parse(t);if(Number.isNaN(i))return null;const n=Math.max(0,Math.round((Date.now()-i)/1e3)),[a,o]=n<60?[n,"second"]:n<3600?[Math.floor(n/60),"minute"]:[Math.floor(n/3600),"hour"];try{return new Intl.RelativeTimeFormat(e||"en",{numeric:"always"}).format(-a,o)}catch{return`${a} ${"second"===o?"s":"minute"===o?"min":"h"}`}}(this.hass.language,e.last_fetched);return t?P`<div class="data-age">${xe(this.hass.language,"fetched_ago",{age:t})}</div>`:V}_renderLayout(){switch(this._config.layout){case"compact":return P`
          <openpublictransport-compact-layout
            .hass=${this.hass}
            .config=${this._config}
            .departures=${this._getDepartures()}
            .stationName=${this._getStationName()}
          ></openpublictransport-compact-layout>
        `;case"trip":return P`
          <openpublictransport-trip-layout
            .hass=${this.hass}
            .config=${this._config}
            .trip=${this._getTripData()}
          ></openpublictransport-trip-layout>
        `;case"next":{const e="trip"===Ee(this.hass,this._config.entity),t=e?this._getTripData():null,i=t?this._tripAsDeparture(t):null;return P`
          <openpublictransport-next-layout
            .hass=${this.hass}
            .config=${this._config}
            .departures=${e?i?[i]:[]:this._getDepartures()}
            .stationName=${this._getStationName()}
            .emptyKey=${e?"no_trip_data":"no_departures"}
          ></openpublictransport-next-layout>
        `}default:return P`
          <openpublictransport-table-layout
            .hass=${this.hass}
            .config=${this._config}
            .departures=${this._getDepartures()}
            .stationName=${this._getStationName()}
          ></openpublictransport-table-layout>
        `}}};Be.styles=[me,fe],e([ce({attribute:!1})],Be.prototype,"hass",void 0),e([ue()],Be.prototype,"_config",void 0),e([ue()],Be.prototype,"_timeInterval",void 0),Be=e([de("openpublictransport-card")],Be);const Qe=window;Qe.customCards=Qe.customCards||[],Qe.customCards.push({type:"openpublictransport-card",name:"Public Transport Departures",description:"Display public transport departures in table, compact, or trip layout",preview:!0,getEntitySuggestion:function(e,t){if(!ze(e,t))return null;const i=Ee(e,t),n=[];return"departures"===i?(n.push({label:"Table layout",config:{type:"custom:openpublictransport-card",entity:t,layout:"table"}}),n.push({label:"Compact layout",config:{type:"custom:openpublictransport-card",entity:t,layout:"compact",max_departures:6}}),n.push({label:"Next departure",config:{type:"custom:openpublictransport-card",entity:t,layout:"next"}})):"trip"===i?(n.push({label:"Trip layout",config:{type:"custom:openpublictransport-card",entity:t,layout:"trip"}}),n.push({label:"Next departure",config:{type:"custom:openpublictransport-card",entity:t,layout:"next"}})):n.push({label:"Table layout",config:{type:"custom:openpublictransport-card",entity:t,layout:Se(i)}}),1===n.length?n[0]:n}});export{Be as OpenpublictransportCard};
