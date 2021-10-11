(self["webpackChunkmapmark"]=self["webpackChunkmapmark"]||[]).push([[736],{8416:(e,t,n)=>{"use strict";n.d(t,{Uw:()=>f,fo:()=>d});
/*! Capacitor: https://capacitorjs.com/ - MIT License */
const r=e=>{const t=new Map;t.set("web",{name:"web"});const n=e.CapacitorPlatforms||{currentPlatform:{name:"web"},platforms:t},r=(e,t)=>{n.platforms.set(e,t)},i=e=>{n.platforms.has(e)&&(n.currentPlatform=n.platforms.get(e))};return n.addPlatform=r,n.setPlatform=i,n},i=e=>e.CapacitorPlatforms=r(e),s=i("undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{});s.addPlatform,s.setPlatform;var o;(function(e){e["Unimplemented"]="UNIMPLEMENTED",e["Unavailable"]="UNAVAILABLE"})(o||(o={}));class a extends Error{constructor(e,t){super(e),this.message=e,this.code=t}}const c=e=>{var t,n;return(null===e||void 0===e?void 0:e.androidBridge)?"android":(null===(n=null===(t=null===e||void 0===e?void 0:e.webkit)||void 0===t?void 0:t.messageHandlers)||void 0===n?void 0:n.bridge)?"ios":"web"},l=e=>{var t,n,r,i,s;const l=e.CapacitorCustomPlatform||null,u=e.Capacitor||{},h=u.Plugins=u.Plugins||{},d=e.CapacitorPlatforms,f=()=>null!==l?l.name:c(e),p=(null===(t=null===d||void 0===d?void 0:d.currentPlatform)||void 0===t?void 0:t.getPlatform)||f,m=()=>"web"!==p(),g=(null===(n=null===d||void 0===d?void 0:d.currentPlatform)||void 0===n?void 0:n.isNativePlatform)||m,v=e=>{const t=I.get(e);return!!(null===t||void 0===t?void 0:t.platforms.has(p()))||!!b(e)},y=(null===(r=null===d||void 0===d?void 0:d.currentPlatform)||void 0===r?void 0:r.isPluginAvailable)||v,w=e=>{var t;return null===(t=u.PluginHeaders)||void 0===t?void 0:t.find((t=>t.name===e))},b=(null===(i=null===d||void 0===d?void 0:d.currentPlatform)||void 0===i?void 0:i.getPluginHeader)||w,_=t=>e.console.error(t),T=(e,t,n)=>Promise.reject(`${n} does not have an implementation of "${t}".`),I=new Map,E=(e,t={})=>{const n=I.get(e);if(n)return console.warn(`Capacitor plugin "${e}" already registered. Cannot register plugins twice.`),n.proxy;const r=p(),i=b(e);let s;const c=async()=>(!s&&r in t?s=s="function"===typeof t[r]?await t[r]():t[r]:null!==l&&!s&&"web"in t&&(s=s="function"===typeof t["web"]?await t["web"]():t["web"]),s),d=(t,n)=>{var s,c;if(!i){if(t)return null===(c=t[n])||void 0===c?void 0:c.bind(t);throw new a(`"${e}" plugin is not implemented on ${r}`,o.Unimplemented)}{const r=null===i||void 0===i?void 0:i.methods.find((e=>n===e.name));if(r)return"promise"===r.rtype?t=>u.nativePromise(e,n.toString(),t):(t,r)=>u.nativeCallback(e,n.toString(),t,r);if(t)return null===(s=t[n])||void 0===s?void 0:s.bind(t)}},f=t=>{let n;const i=(...i)=>{const s=c().then((s=>{const c=d(s,t);if(c){const e=c(...i);return n=null===e||void 0===e?void 0:e.remove,e}throw new a(`"${e}.${t}()" is not implemented on ${r}`,o.Unimplemented)}));return"addListener"===t&&(s.remove=async()=>n()),s};return i.toString=()=>`${t.toString()}() { [capacitor code] }`,Object.defineProperty(i,"name",{value:t,writable:!1,configurable:!1}),i},m=f("addListener"),g=f("removeListener"),v=(e,t)=>{const n=m({eventName:e},t),r=async()=>{const r=await n;g({eventName:e,callbackId:r},t)},i=new Promise((e=>n.then((()=>e({remove:r})))));return i.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await r()},i},y=new Proxy({},{get(e,t){switch(t){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return i?v:m;case"removeListener":return g;default:return f(t)}}});return h[e]=y,I.set(e,{name:e,proxy:y,platforms:new Set([...Object.keys(t),...i?[r]:[]])}),y},S=(null===(s=null===d||void 0===d?void 0:d.currentPlatform)||void 0===s?void 0:s.registerPlugin)||E;return u.convertFileSrc||(u.convertFileSrc=e=>e),u.getPlatform=p,u.handleError=_,u.isNativePlatform=g,u.isPluginAvailable=y,u.pluginMethodNoop=T,u.registerPlugin=S,u.Exception=a,u.DEBUG=!!u.DEBUG,u.isLoggingEnabled=!!u.isLoggingEnabled,u.platform=u.getPlatform(),u.isNative=u.isNativePlatform(),u},u=e=>e.Capacitor=l(e),h=u("undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{}),d=h.registerPlugin;h.Plugins;class f{constructor(e){this.listeners={},this.windowListeners={},e&&(console.warn(`Capacitor WebPlugin "${e.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=e)}addListener(e,t){const n=this.listeners[e];n||(this.listeners[e]=[]),this.listeners[e].push(t);const r=this.windowListeners[e];r&&!r.registered&&this.addWindowListener(r);const i=async()=>this.removeListener(e,t),s=Promise.resolve({remove:i});return Object.defineProperty(s,"remove",{value:async()=>{console.warn("Using addListener() without 'await' is deprecated."),await i()}}),s}async removeAllListeners(){this.listeners={};for(const e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,t){const n=this.listeners[e];n&&n.forEach((e=>e(t)))}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:e=>{this.notifyListeners(t,e)}}}unimplemented(e="not implemented"){return new h.Exception(e,o.Unimplemented)}unavailable(e="not available"){return new h.Exception(e,o.Unavailable)}async removeListener(e,t){const n=this.listeners[e];if(!n)return;const r=n.indexOf(t);this.listeners[e].splice(r,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}}},5556:(e,t,n)=>{"use strict";n.d(t,{b:()=>i});var r=n(8416);const i=(0,r.fo)("Geolocation",{web:()=>n.e(736).then(n.bind(n,5482)).then((e=>new e.GeolocationWeb))})},5482:(e,t,n)=>{"use strict";n.r(t),n.d(t,{GeolocationWeb:()=>i,Geolocation:()=>s});var r=n(8416);class i extends r.Uw{async getCurrentPosition(e){return new Promise(((t,n)=>{navigator.geolocation.getCurrentPosition((e=>{t(e)}),(e=>{n(e)}),Object.assign({enableHighAccuracy:!1,timeout:1e4,maximumAge:0},e))}))}async watchPosition(e,t){const n=navigator.geolocation.watchPosition((e=>{t(e)}),(e=>{t(null,e)}),Object.assign({enableHighAccuracy:!1,timeout:1e4,maximumAge:0},e));return`${n}`}async clearWatch(e){window.navigator.geolocation.clearWatch(parseInt(e.id,10))}async checkPermissions(){if("undefined"===typeof navigator||!navigator.permissions)throw this.unavailable("Permissions API not available in this browser");const e=await window.navigator.permissions.query({name:"geolocation"});return{location:e.state}}async requestPermissions(){throw this.unimplemented("Not implemented on web.")}}const s=new i},2634:(e,t,n)=>{"use strict";n.d(t,{Z:()=>v});var r=n(5479),i=n(7429),s=n(7458),o=n(4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(e,t){this._delegate=e,this.firebase=t,(0,s._addComponent)(e,new i.wA("app-compat",(()=>this),"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise((e=>{this._delegate.checkDestroyed(),e()})).then((()=>(this.firebase.INTERNAL.removeApp(this.name),(0,s.deleteApp)(this._delegate))))}_getService(e,t=s._DEFAULT_ENTRY_NAME){var n;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return r.isInitialized()||"EXPLICIT"!==(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)||r.initialize(),r.getImmediate({identifier:t})}_removeServiceInstance(e,t=s._DEFAULT_ENTRY_NAME){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){(0,s._addComponent)(this._delegate,e)}_addOrOverwriteComponent(e){(0,s._addOrOverwriteComponent)(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},l=new r.LL("app-compat","Firebase",c);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function u(e){const t={},n={__esModule:!0,initializeApp:a,app:o,registerVersion:s.registerVersion,setLogLevel:s.setLogLevel,onLog:s.onLog,apps:null,SDK_VERSION:s.SDK_VERSION,INTERNAL:{registerComponent:u,removeApp:i,useAsService:h,modularAPIs:s}};function i(e){delete t[e]}function o(e){if(e=e||s._DEFAULT_ENTRY_NAME,!(0,r.r3)(t,e))throw l.create("no-app",{appName:e});return t[e]}function a(i,o={}){const a=s.initializeApp(i,o);if((0,r.r3)(t,a.name))return t[a.name];const c=new e(a,n);return t[a.name]=c,c}function c(){return Object.keys(t).map((e=>t[e]))}function u(t){const i=t.name,a=i.replace("-compat","");if(s._registerComponent(t)&&"PUBLIC"===t.type){const s=(e=o())=>{if("function"!==typeof e[a])throw l.create("invalid-app-argument",{appName:i});return e[a]()};void 0!==t.serviceProps&&(0,r.ZB)(s,t.serviceProps),n[a]=s,e.prototype[a]=function(...e){const n=this._getService.bind(this,i);return n.apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[a]:null}function h(e,t){if("serverAuth"===t)return null;const n=t;return n}return n["default"]=n,Object.defineProperty(n,"apps",{get:c}),o["App"]=e,n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(){const e=u(a);function t(t){(0,r.ZB)(e,t)}return e.INTERNAL=Object.assign(Object.assign({},e.INTERNAL),{createFirebaseNamespace:h,extendNamespace:t,createSubscribe:r.ne,ErrorFactory:r.LL,deepExtend:r.ZB}),e}const d=h(),f=new o.Yd("@firebase/app-compat"),p="@firebase/app-compat",m="0.1.3";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function g(e){(0,s.registerVersion)(p,m,e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if((0,r.jU)()&&void 0!==self.firebase){f.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&f.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const v=d;g()},7458:(e,t,n)=>{"use strict";n.r(t),n.d(t,{FirebaseError:()=>s.ZR,SDK_VERSION:()=>J,_DEFAULT_ENTRY_NAME:()=>F,_addComponent:()=>V,_addOrOverwriteComponent:()=>j,_apps:()=>q,_clearComponents:()=>H,_components:()=>U,_getProvider:()=>$,_registerComponent:()=>B,_removeServiceInstance:()=>z,deleteApp:()=>X,getApp:()=>Q,getApps:()=>Z,initializeApp:()=>Y,onLog:()=>te,registerVersion:()=>ee,setLogLevel:()=>ne});var r=n(7429),i=n(4),s=n(5479);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class o{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(a(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function a(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const c="@firebase/app",l="0.7.2",u=new i.Yd("@firebase/app"),h="@firebase/app-compat",d="@firebase/analytics-compat",f="@firebase/analytics",p="@firebase/app-check-compat",m="@firebase/app-check",g="@firebase/auth",v="@firebase/auth-compat",y="@firebase/database",w="@firebase/database-compat",b="@firebase/functions",_="@firebase/functions-compat",T="@firebase/installations",I="@firebase/installations-compat",E="@firebase/messaging",S="@firebase/messaging-compat",k="@firebase/performance",x="@firebase/performance-compat",C="@firebase/remote-config",A="@firebase/remote-config-compat",N="@firebase/storage",R="@firebase/storage-compat",O="@firebase/firestore",P="@firebase/firestore-compat",L="firebase",D="9.1.1",F="[DEFAULT]",M={[c]:"fire-core",[h]:"fire-core-compat",[f]:"fire-analytics",[d]:"fire-analytics-compat",[m]:"fire-app-check",[p]:"fire-app-check-compat",[g]:"fire-auth",[v]:"fire-auth-compat",[y]:"fire-rtdb",[w]:"fire-rtdb-compat",[b]:"fire-fn",[_]:"fire-fn-compat",[T]:"fire-iid",[I]:"fire-iid-compat",[E]:"fire-fcm",[S]:"fire-fcm-compat",[k]:"fire-perf",[x]:"fire-perf-compat",[C]:"fire-rc",[A]:"fire-rc-compat",[N]:"fire-gcs",[R]:"fire-gcs-compat",[O]:"fire-fst",[P]:"fire-fst-compat","fire-js":"fire-js",[L]:"fire-js-all"},q=new Map,U=new Map;function V(e,t){try{e.container.addComponent(t)}catch(n){u.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function j(e,t){e.container.addOrOverwriteComponent(t)}function B(e){const t=e.name;if(U.has(t))return u.debug(`There were multiple attempts to register component ${t}.`),!1;U.set(t,e);for(const n of q.values())V(n,e);return!0}function $(e,t){return e.container.getProvider(t)}function z(e,t,n=F){$(e,t).clearInstance(n)}function H(){U.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},G=new s.LL("app","Firebase",K);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class W{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw G.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J=D;function Y(e,t={}){if("object"!==typeof t){const e=t;t={name:e}}const n=Object.assign({name:F,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!==typeof i||!i)throw G.create("bad-app-name",{appName:String(i)});const o=q.get(i);if(o){if((0,s.vZ)(e,o.options)&&(0,s.vZ)(n,o.config))return o;throw G.create("duplicate-app",{appName:i})}const a=new r.H0(i);for(const r of U.values())a.addComponent(r);const c=new W(e,n,a);return q.set(i,c),c}function Q(e=F){const t=q.get(e);if(!t)throw G.create("no-app",{appName:e});return t}function Z(){return Array.from(q.values())}async function X(e){const t=e.name;q.has(t)&&(q.delete(t),await Promise.all(e.container.getProviders().map((e=>e.delete()))),e.isDeleted=!0)}function ee(e,t,n){var i;let s=null!==(i=M[e])&&void 0!==i?i:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void u.warn(e.join(" "))}B(new r.wA(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}function te(e,t){if(null!==e&&"function"!==typeof e)throw G.create("invalid-log-argument");(0,i.Am)(e,t)}function ne(e){(0,i.Ub)(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(e){B(new r.wA("platform-logger",(e=>new o(e)),"PRIVATE")),ee(c,l,e),ee("fire-js","")}re()},7429:(e,t,n)=>{"use strict";n.d(t,{wA:()=>s,H0:()=>u});var r=n(8430),i=n(5479),s=function(){function e(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},e.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},e.prototype.setServiceProps=function(e){return this.serviceProps=e,this},e.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},e}(),o="[DEFAULT]",a=function(){function e(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return e.prototype.get=function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new i.BH;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(s){}}return this.instancesDeferred.get(t).promise},e.prototype.getImmediate=function(e){var t,n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service "+this.name+" is not available")}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}},e.prototype.getComponent=function(){return this.component},e.prototype.setComponent=function(e){var t,n;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,this.shouldAutoInitialize()){if(l(e))try{this.getOrInitializeService({instanceIdentifier:o})}catch(f){}try{for(var i=(0,r.XA)(this.instancesDeferred.entries()),s=i.next();!s.done;s=i.next()){var a=(0,r.CR)(s.value,2),c=a[0],u=a[1],h=this.normalizeInstanceIdentifier(c);try{var d=this.getOrInitializeService({instanceIdentifier:h});u.resolve(d)}catch(f){}}}catch(p){t={error:p}}finally{try{s&&!s.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}}},e.prototype.clearInstance=function(e){void 0===e&&(e=o),this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)},e.prototype.delete=function(){return(0,r.mG)(this,void 0,void 0,(function(){var e;return(0,r.Jh)(this,(function(t){switch(t.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all((0,r.ev)((0,r.ev)([],(0,r.CR)(e.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()})))),(0,r.CR)(e.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))))];case 1:return t.sent(),[2]}}))}))},e.prototype.isComponentSet=function(){return null!=this.component},e.prototype.isInitialized=function(e){return void 0===e&&(e=o),this.instances.has(e)},e.prototype.getOptions=function(e){return void 0===e&&(e=o),this.instancesOptions.get(e)||{}},e.prototype.initialize=function(e){var t,n;void 0===e&&(e={});var i=e.options,s=void 0===i?{}:i,o=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(o))throw Error(this.name+"("+o+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var a=this.getOrInitializeService({instanceIdentifier:o,options:s});try{for(var c=(0,r.XA)(this.instancesDeferred.entries()),l=c.next();!l.done;l=c.next()){var u=(0,r.CR)(l.value,2),h=u[0],d=u[1],f=this.normalizeInstanceIdentifier(h);o===f&&d.resolve(a)}}catch(p){t={error:p}}finally{try{l&&!l.done&&(n=c.return)&&n.call(c)}finally{if(t)throw t.error}}return a},e.prototype.onInit=function(e,t){var n,r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);var s=this.instances.get(r);return s&&e(s,r),function(){i.delete(e)}},e.prototype.invokeOnInitCallbacks=function(e,t){var n,i,s=this.onInitCallbacks.get(t);if(s)try{for(var o=(0,r.XA)(s),a=o.next();!a.done;a=o.next()){var c=a.value;try{c(e,t)}catch(l){}}}catch(u){n={error:u}}finally{try{a&&!a.done&&(i=o.return)&&i.call(o)}finally{if(n)throw n.error}}},e.prototype.getOrInitializeService=function(e){var t=e.instanceIdentifier,n=e.options,r=void 0===n?{}:n,i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:c(t),options:r}),this.instances.set(t,i),this.instancesOptions.set(t,r),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch(s){}return i||null},e.prototype.normalizeInstanceIdentifier=function(e){return void 0===e&&(e=o),this.component?this.component.multipleInstances?e:o:e},e.prototype.shouldAutoInitialize=function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode},e}();function c(e){return e===o?void 0:e}function l(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var u=function(){function e(e){this.name=e,this.providers=new Map}return e.prototype.addComponent=function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);t.setComponent(e)},e.prototype.addOrOverwriteComponent=function(e){var t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},e.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var t=new a(e,this);return this.providers.set(e,t),t},e.prototype.getProviders=function(){return Array.from(this.providers.values())},e}()},4:(e,t,n)=>{"use strict";n.d(t,{in:()=>i,Yd:()=>l,Ub:()=>u,Am:()=>h});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class l{constructor(e){this.name=e,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}function u(e){r.forEach((t=>{t.setLogLevel(e)}))}function h(e,t){for(const n of r){let r=null;t&&t.level&&(r=s[t.level]),n.userLogHandler=null===e?null:(t,n,...s)=>{const o=s.map((e=>{if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}})).filter((e=>e)).join(" ");n>=(null!==r&&void 0!==r?r:t.logLevel)&&e({level:i[n].toLowerCase(),message:o,args:s,type:t.name})}}}},5479:(e,t,n)=>{"use strict";n.d(t,{BH:()=>h,LL:()=>k,ZR:()=>S,tV:()=>c,r3:()=>A,Sg:()=>d,ne:()=>F,vZ:()=>R,ZB:()=>l,pd:()=>D,m9:()=>V,z$:()=>f,jU:()=>g,ru:()=>v,d:()=>w,xb:()=>N,w1:()=>b,hl:()=>I,uI:()=>p,UG:()=>m,b$:()=>y,G6:()=>T,Mn:()=>_,xO:()=>P,zd:()=>L});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},i=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,o=s?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,l=t>>2,u=(3&t)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[l],n[u],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length,o=s?n[e.charAt(i)]:0;++i;const a=i<e.length,c=a?n[e.charAt(i)]:64;++i;const l=i<e.length,u=l?n[e.charAt(i)]:64;if(++i,null==t||null==o||null==c||null==u)throw Error();const h=t<<2|o>>4;if(r.push(h),64!==c){const e=o<<4&240|c>>2;if(r.push(e),64!==u){const e=c<<6&192|u;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},o=function(e){const t=r(e);return s.encodeByteArray(t,!0)},a=function(e){return o(e).replace(/\./g,"")},c=function(e){try{return s.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&u(n)&&(e[n]=l(e[n],t[n]));return e}function u(e){return"__proto__"!==e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),c="";return[a(JSON.stringify(n)),a(JSON.stringify(o)),c].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function p(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(f())}function m(){try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(e){return!1}}function g(){return"object"===typeof self&&self.self===self}function v(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function y(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function w(){return f().indexOf("Electron/")>=0}function b(){const e=f();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function _(){return f().indexOf("MSAppHost/")>=0}function T(){return!m()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function I(){return"object"===typeof indexedDB}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const E="FirebaseError";class S extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=E,Object.setPrototypeOf(this,S.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,k.prototype.create)}}class k{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?x(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new S(r,o,n);return a}}function x(e,t){return e.replace(C,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const C=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function A(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function N(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function R(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(O(n)&&O(s)){if(!R(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function O(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function L(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function D(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(e,t){const n=new M(e,t);return n.subscribe.bind(n)}class M{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=q(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=U),void 0===r.error&&(r.error=U),void 0===r.complete&&(r.complete=U);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function q(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function U(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function V(e){return e&&e._delegate?e._delegate:e}},1029:(e,t,n)=>{"use strict";n.d(t,{a:()=>s});var r=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var r,i,s;if(Array.isArray(t)){if(r=t.length,r!=n.length)return!1;for(i=r;0!==i--;)if(!e(t[i],n[i]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if(s=Object.keys(t),r=s.length,r!==Object.keys(n).length)return!1;for(i=r;0!==i--;)if(!Object.prototype.hasOwnProperty.call(n,s[i]))return!1;for(i=r;0!==i--;){var o=s[i];if(!e(t[o],n[o]))return!1}return!0}return t!==t&&n!==n};const i="__googleMapsScriptId";class s{constructor({apiKey:e,channel:t,client:n,id:o=i,libraries:a=[],language:c,region:l,version:u,mapIds:h,nonce:d,retries:f=3,url:p="https://maps.googleapis.com/maps/api/js"}){if(this.CALLBACK="__googleMapsCallback",this.callbacks=[],this.done=!1,this.loading=!1,this.errors=[],this.version=u,this.apiKey=e,this.channel=t,this.client=n,this.id=o||i,this.libraries=a,this.language=c,this.region=l,this.mapIds=h,this.nonce=d,this.retries=f,this.url=p,s.instance){if(!r(this.options,s.instance.options))throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(s.instance.options)}`);return s.instance}s.instance=this}get options(){return{version:this.version,apiKey:this.apiKey,channel:this.channel,client:this.client,id:this.id,libraries:this.libraries,language:this.language,region:this.region,mapIds:this.mapIds,nonce:this.nonce,url:this.url}}get failed(){return this.done&&!this.loading&&this.errors.length>=this.retries+1}createUrl(){let e=this.url;return e+=`?callback=${this.CALLBACK}`,this.apiKey&&(e+=`&key=${this.apiKey}`),this.channel&&(e+=`&channel=${this.channel}`),this.client&&(e+=`&client=${this.client}`),this.libraries.length>0&&(e+=`&libraries=${this.libraries.join(",")}`),this.language&&(e+=`&language=${this.language}`),this.region&&(e+=`&region=${this.region}`),this.version&&(e+=`&v=${this.version}`),this.mapIds&&(e+=`&map_ids=${this.mapIds.join(",")}`),e}load(){return this.loadPromise()}loadPromise(){return new Promise(((e,t)=>{this.loadCallback((n=>{n?t(n.error):e(window.google)}))}))}loadCallback(e){this.callbacks.push(e),this.execute()}setScript(){if(document.getElementById(this.id))return void this.callback();const e=this.createUrl(),t=document.createElement("script");t.id=this.id,t.type="text/javascript",t.src=e,t.onerror=this.loadErrorCallback.bind(this),t.defer=!0,t.async=!0,this.nonce&&(t.nonce=this.nonce),document.head.appendChild(t)}deleteScript(){const e=document.getElementById(this.id);e&&e.remove()}reset(){this.deleteScript(),this.done=!1,this.loading=!1,this.errors=[],this.onerrorEvent=null}resetIfRetryingFailed(){this.failed&&this.reset()}loadErrorCallback(e){if(this.errors.push(e),this.errors.length<=this.retries){const e=this.errors.length*Math.pow(2,this.errors.length);console.log(`Failed to load Google Maps script, retrying in ${e} ms.`),setTimeout((()=>{this.deleteScript(),this.setScript()}),e)}else this.onerrorEvent=e,this.callback()}setCallback(){window.__googleMapsCallback=this.callback.bind(this)}callback(){this.done=!0,this.loading=!1,this.callbacks.forEach((e=>{e(this.onerrorEvent)})),this.callbacks=[]}execute(){if(this.resetIfRetryingFailed(),this.done)this.callback();else{if(window.google&&window.google.maps&&window.google.maps.version)return console.warn("Google Maps already loaded outside @googlemaps/js-api-loader.This may result in undesirable behavior as options and script parameters may not match."),void this.callback();this.loading||(this.loading=!0,this.setCallback(),this.setScript())}}}},7518:e=>{e.exports=function(e,t,n){const r=void 0!==e.__vccOpts?e.__vccOpts:e,i=r[t];if(void 0===i)r[t]=n;else for(const s in n)void 0===i[s]&&(i[s]=n[s])}},1959:(e,t,n)=>{"use strict";n.d(t,{Bj:()=>o,qq:()=>_,Fl:()=>We,X3:()=>Re,PG:()=>Ae,dq:()=>Me,Xl:()=>Pe,Jd:()=>S,WL:()=>ze,qj:()=>Se,iH:()=>qe,lk:()=>x,Um:()=>ke,XI:()=>Ue,IU:()=>Oe,Vh:()=>Ke,j:()=>C,X$:()=>R,SU:()=>Be});var r=n(2323);let i;const s=[];class o{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&i&&(this.parent=i,this.index=(i.scopes||(i.scopes=[])).push(this)-1)}run(e){if(this.active)try{return this.on(),e()}finally{this.off()}else 0}on(){this.active&&(s.push(this),i=this)}off(){this.active&&(s.pop(),i=s[s.length-1])}stop(e){if(this.active){if(this.effects.forEach((e=>e.stop())),this.cleanups.forEach((e=>e())),this.scopes&&this.scopes.forEach((e=>e.stop(!0))),this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.active=!1}}}function a(e,t){t=t||i,t&&t.active&&t.effects.push(e)}const c=e=>{const t=new Set(e);return t.w=0,t.n=0,t},l=e=>(e.w&m)>0,u=e=>(e.n&m)>0,h=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=m},d=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];l(i)&&!u(i)?i.delete(e):t[n++]=i,i.w&=~m,i.n&=~m}t.length=n}},f=new WeakMap;let p=0,m=1;const g=30,v=[];let y;const w=Symbol(""),b=Symbol("");class _{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],a(this,n)}run(){if(!this.active)return this.fn();if(!v.includes(this))try{return v.push(y=this),k(),m=1<<++p,p<=g?h(this):T(this),this.fn()}finally{p<=g&&d(this),m=1<<--p,x(),v.pop();const e=v.length;y=e>0?v[e-1]:void 0}}stop(){this.active&&(T(this),this.onStop&&this.onStop(),this.active=!1)}}function T(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let I=!0;const E=[];function S(){E.push(I),I=!1}function k(){E.push(I),I=!0}function x(){const e=E.pop();I=void 0===e||e}function C(e,t,n){if(!A())return;let r=f.get(e);r||f.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=c());const s=void 0;N(i,s)}function A(){return I&&void 0!==y}function N(e,t){let n=!1;p<=g?u(e)||(e.n|=m,n=!l(e)):n=!e.has(y),n&&(e.add(y),y.deps.push(e))}function R(e,t,n,i,s,o){const a=f.get(e);if(!a)return;let l=[];if("clear"===t)l=[...a.values()];else if("length"===n&&(0,r.kJ)(e))a.forEach(((e,t)=>{("length"===t||t>=i)&&l.push(e)}));else switch(void 0!==n&&l.push(a.get(n)),t){case"add":(0,r.kJ)(e)?(0,r.S0)(n)&&l.push(a.get("length")):(l.push(a.get(w)),(0,r._N)(e)&&l.push(a.get(b)));break;case"delete":(0,r.kJ)(e)||(l.push(a.get(w)),(0,r._N)(e)&&l.push(a.get(b)));break;case"set":(0,r._N)(e)&&l.push(a.get(w));break}if(1===l.length)l[0]&&O(l[0]);else{const e=[];for(const t of l)t&&e.push(...t);O(c(e))}}function O(e,t){for(const n of(0,r.kJ)(e)?e:[...e])(n!==y||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const P=(0,r.fY)("__proto__,__v_isRef,__isVue"),L=new Set(Object.getOwnPropertyNames(Symbol).map((e=>Symbol[e])).filter(r.yk)),D=V(),F=V(!1,!0),M=V(!0),q=U();function U(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=Oe(this);for(let t=0,i=this.length;t<i;t++)C(n,"get",t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(Oe)):r}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){S();const n=Oe(this)[t].apply(this,e);return x(),n}})),e}function V(e=!1,t=!1){return function(n,i,s){if("__v_isReactive"===i)return!e;if("__v_isReadonly"===i)return e;if("__v_raw"===i&&s===(e?t?Te:_e:t?be:we).get(n))return n;const o=(0,r.kJ)(n);if(!e&&o&&(0,r.RI)(q,i))return Reflect.get(q,i,s);const a=Reflect.get(n,i,s);if((0,r.yk)(i)?L.has(i):P(i))return a;if(e||C(n,"get",i),t)return a;if(Me(a)){const e=!o||!(0,r.S0)(i);return e?a.value:a}return(0,r.Kn)(a)?e?xe(a):Se(a):a}}const j=$(),B=$(!0);function $(e=!1){return function(t,n,i,s){let o=t[n];if(!e&&(i=Oe(i),o=Oe(o),!(0,r.kJ)(t)&&Me(o)&&!Me(i)))return o.value=i,!0;const a=(0,r.kJ)(t)&&(0,r.S0)(n)?Number(n)<t.length:(0,r.RI)(t,n),c=Reflect.set(t,n,i,s);return t===Oe(s)&&(a?(0,r.aU)(i,o)&&R(t,"set",n,i,o):R(t,"add",n,i)),c}}function z(e,t){const n=(0,r.RI)(e,t),i=e[t],s=Reflect.deleteProperty(e,t);return s&&n&&R(e,"delete",t,void 0,i),s}function H(e,t){const n=Reflect.has(e,t);return(0,r.yk)(t)&&L.has(t)||C(e,"has",t),n}function K(e){return C(e,"iterate",(0,r.kJ)(e)?"length":w),Reflect.ownKeys(e)}const G={get:D,set:j,deleteProperty:z,has:H,ownKeys:K},W={get:M,set(e,t){return!0},deleteProperty(e,t){return!0}},J=(0,r.l7)({},G,{get:F,set:B}),Y=e=>(0,r.Kn)(e)?Se(e):e,Q=e=>(0,r.Kn)(e)?xe(e):e,Z=e=>e,X=e=>Reflect.getPrototypeOf(e);function ee(e,t,n=!1,r=!1){e=e["__v_raw"];const i=Oe(e),s=Oe(t);t!==s&&!n&&C(i,"get",t),!n&&C(i,"get",s);const{has:o}=X(i),a=r?Z:n?Q:Y;return o.call(i,t)?a(e.get(t)):o.call(i,s)?a(e.get(s)):void(e!==i&&e.get(t))}function te(e,t=!1){const n=this["__v_raw"],r=Oe(n),i=Oe(e);return e!==i&&!t&&C(r,"has",e),!t&&C(r,"has",i),e===i?n.has(e):n.has(e)||n.has(i)}function ne(e,t=!1){return e=e["__v_raw"],!t&&C(Oe(e),"iterate",w),Reflect.get(e,"size",e)}function re(e){e=Oe(e);const t=Oe(this),n=X(t),r=n.has.call(t,e);return r||(t.add(e),R(t,"add",e,e)),this}function ie(e,t){t=Oe(t);const n=Oe(this),{has:i,get:s}=X(n);let o=i.call(n,e);o||(e=Oe(e),o=i.call(n,e));const a=s.call(n,e);return n.set(e,t),o?(0,r.aU)(t,a)&&R(n,"set",e,t,a):R(n,"add",e,t),this}function se(e){const t=Oe(this),{has:n,get:r}=X(t);let i=n.call(t,e);i||(e=Oe(e),i=n.call(t,e));const s=r?r.call(t,e):void 0,o=t.delete(e);return i&&R(t,"delete",e,void 0,s),o}function oe(){const e=Oe(this),t=0!==e.size,n=void 0,r=e.clear();return t&&R(e,"clear",void 0,void 0,n),r}function ae(e,t){return function(n,r){const i=this,s=i["__v_raw"],o=Oe(s),a=t?Z:e?Q:Y;return!e&&C(o,"iterate",w),s.forEach(((e,t)=>n.call(r,a(e),a(t),i)))}}function ce(e,t,n){return function(...i){const s=this["__v_raw"],o=Oe(s),a=(0,r._N)(o),c="entries"===e||e===Symbol.iterator&&a,l="keys"===e&&a,u=s[e](...i),h=n?Z:t?Q:Y;return!t&&C(o,"iterate",l?b:w),{next(){const{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:c?[h(e[0]),h(e[1])]:h(e),done:t}},[Symbol.iterator](){return this}}}}function le(e){return function(...t){return"delete"!==e&&this}}function ue(){const e={get(e){return ee(this,e)},get size(){return ne(this)},has:te,add:re,set:ie,delete:se,clear:oe,forEach:ae(!1,!1)},t={get(e){return ee(this,e,!1,!0)},get size(){return ne(this)},has:te,add:re,set:ie,delete:se,clear:oe,forEach:ae(!1,!0)},n={get(e){return ee(this,e,!0)},get size(){return ne(this,!0)},has(e){return te.call(this,e,!0)},add:le("add"),set:le("set"),delete:le("delete"),clear:le("clear"),forEach:ae(!0,!1)},r={get(e){return ee(this,e,!0,!0)},get size(){return ne(this,!0)},has(e){return te.call(this,e,!0)},add:le("add"),set:le("set"),delete:le("delete"),clear:le("clear"),forEach:ae(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach((i=>{e[i]=ce(i,!1,!1),n[i]=ce(i,!0,!1),t[i]=ce(i,!1,!0),r[i]=ce(i,!0,!0)})),[e,n,t,r]}const[he,de,fe,pe]=ue();function me(e,t){const n=t?e?pe:fe:e?de:he;return(t,i,s)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get((0,r.RI)(n,i)&&i in t?n:t,i,s)}const ge={get:me(!1,!1)},ve={get:me(!1,!0)},ye={get:me(!0,!1)};const we=new WeakMap,be=new WeakMap,_e=new WeakMap,Te=new WeakMap;function Ie(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ee(e){return e["__v_skip"]||!Object.isExtensible(e)?0:Ie((0,r.W7)(e))}function Se(e){return e&&e["__v_isReadonly"]?e:Ce(e,!1,G,ge,we)}function ke(e){return Ce(e,!1,J,ve,be)}function xe(e){return Ce(e,!0,W,ye,_e)}function Ce(e,t,n,i,s){if(!(0,r.Kn)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const o=s.get(e);if(o)return o;const a=Ee(e);if(0===a)return e;const c=new Proxy(e,2===a?i:n);return s.set(e,c),c}function Ae(e){return Ne(e)?Ae(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function Ne(e){return!(!e||!e["__v_isReadonly"])}function Re(e){return Ae(e)||Ne(e)}function Oe(e){const t=e&&e["__v_raw"];return t?Oe(t):e}function Pe(e){return(0,r.Nj)(e,"__v_skip",!0),e}function Le(e){A()&&(e=Oe(e),e.dep||(e.dep=c()),N(e.dep))}function De(e,t){e=Oe(e),e.dep&&O(e.dep)}const Fe=e=>(0,r.Kn)(e)?Se(e):e;function Me(e){return Boolean(e&&!0===e.__v_isRef)}function qe(e){return je(e)}function Ue(e){return je(e,!0)}class Ve{constructor(e,t=!1){this._shallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Oe(e),this._value=t?e:Fe(e)}get value(){return Le(this),this._value}set value(e){e=this._shallow?e:Oe(e),(0,r.aU)(e,this._rawValue)&&(this._rawValue=e,this._value=this._shallow?e:Fe(e),De(this,e))}}function je(e,t=!1){return Me(e)?e:new Ve(e,t)}function Be(e){return Me(e)?e.value:e}const $e={get:(e,t,n)=>Be(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Me(i)&&!Me(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function ze(e){return Ae(e)?e:new Proxy(e,$e)}class He{constructor(e,t){this._object=e,this._key=t,this.__v_isRef=!0}get value(){return this._object[this._key]}set value(e){this._object[this._key]=e}}function Ke(e,t){const n=e[t];return Me(n)?n:new He(e,t)}class Ge{constructor(e,t,n){this._setter=t,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new _(e,(()=>{this._dirty||(this._dirty=!0,De(this))})),this["__v_isReadonly"]=n}get value(){const e=Oe(this);return Le(e),e._dirty&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function We(e,t){let n,i;(0,r.mf)(e)?(n=e,i=r.dG):(n=e.get,i=e.set);const s=new Ge(n,i,(0,r.mf)(e)||!e.set);return s}Promise.resolve()},3673:(e,t,n)=>{"use strict";n.d(t,{P$:()=>C,HY:()=>et,$d:()=>nn,j4:()=>dt,kq:()=>Et,iD:()=>ht,_:()=>yt,Us:()=>Ve,Uk:()=>It,Wm:()=>wt,aZ:()=>D,FN:()=>Ut,Q6:()=>L,h:()=>Mn,f3:()=>E,Y3:()=>wn,Jd:()=>Q,Xn:()=>J,bv:()=>W,ic:()=>Y,wg:()=>ot,Cn:()=>d,JJ:()=>I,dD:()=>h,Ko:()=>At,WI:()=>Nt,up:()=>Je,Q2:()=>Qe,U2:()=>N,nK:()=>P,Y8:()=>S,YP:()=>On,w5:()=>p,wy:()=>Pe,HX:()=>f});var r=n(1959),i=n(2323);new Set;new Map;Object.create(null),Object.create(null);function s(e,t,...n){const r=e.vnode.props||i.kT;let s=n;const o=t.startsWith("update:"),a=o&&t.slice(7);if(a&&a in r){const e=`${"modelValue"===a?"model":a}Modifiers`,{number:t,trim:o}=r[e]||i.kT;o?s=n.map((e=>e.trim())):t&&(s=n.map(i.He))}let c;let l=r[c=(0,i.hR)(t)]||r[c=(0,i.hR)((0,i._A)(t))];!l&&o&&(l=r[c=(0,i.hR)((0,i.rs)(t))]),l&&nn(l,e,6,s);const u=r[c+"Once"];if(u){if(e.emitted){if(e.emitted[c])return}else e.emitted={};e.emitted[c]=!0,nn(u,e,6,s)}}function o(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(void 0!==s)return s;const a=e.emits;let c={},l=!1;if(!(0,i.mf)(e)){const r=e=>{const n=o(e,t,!0);n&&(l=!0,(0,i.l7)(c,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return a||l?((0,i.kJ)(a)?a.forEach((e=>c[e]=null)):(0,i.l7)(c,a),r.set(e,c),c):(r.set(e,null),null)}function a(e,t){return!(!e||!(0,i.F7)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,i.RI)(e,t[0].toLowerCase()+t.slice(1))||(0,i.RI)(e,(0,i.rs)(t))||(0,i.RI)(e,t))}let c=null,l=null;function u(e){const t=c;return c=e,l=e&&e.type.__scopeId||null,t}function h(e){l=e}function d(){l=null}const f=e=>p;function p(e,t=c,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&lt(-1);const i=u(t),s=e(...n);return u(i),r._d&&lt(1),s};return r._n=!0,r._c=!0,r._d=!0,r}function m(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:o,propsOptions:[a],slots:c,attrs:l,emit:h,render:d,renderCache:f,data:p,setupState:m,ctx:y,inheritAttrs:w}=e;let b;const _=u(e);try{let e;if(4&n.shapeFlag){const t=s||r;b=St(d.call(t,t,f,o,m,p,y)),e=l}else{const n=t;0,b=St(n.length>1?n(o,{attrs:l,slots:c,emit:h}):n(o,null)),e=t.props?l:g(l)}let u=b;if(e&&!1!==w){const t=Object.keys(e),{shapeFlag:n}=u;t.length&&7&n&&(a&&t.some(i.tR)&&(e=v(e,a)),u=Tt(u,e))}0,n.dirs&&(u.dirs=u.dirs?u.dirs.concat(n.dirs):n.dirs),n.transition&&(u.transition=n.transition),b=u}catch(T){it.length=0,rn(T,e,1),b=wt(nt)}return u(_),b}const g=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,i.F7)(n))&&((t||(t={}))[n]=e[n]);return t},v=(e,t)=>{const n={};for(const r in e)(0,i.tR)(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function y(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:c,patchFlag:l}=t,u=s.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&l>=0))return!(!i&&!c||c&&c.$stable)||r!==o&&(r?!o||w(r,o,u):!!o);if(1024&l)return!0;if(16&l)return r?w(r,o,u):!!o;if(8&l){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==r[n]&&!a(u,n))return!0}}return!1}function w(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!a(n,s))return!0}return!1}function b({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const _=e=>e.__isSuspense;function T(e,t){t&&t.pendingBranch?(0,i.kJ)(e)?t.effects.push(...e):t.effects.push(e):kn(e)}function I(e,t){if(qt){let n=qt.provides;const r=qt.parent&&qt.parent.provides;r===n&&(n=qt.provides=Object.create(r)),n[e]=t}else 0}function E(e,t,n=!1){const r=qt||c;if(r){const s=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&(0,i.mf)(t)?t.call(r.proxy):t}else 0}function S(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return W((()=>{e.isMounted=!0})),Q((()=>{e.isUnmounting=!0})),e}const k=[Function,Array],x={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:k,onEnter:k,onAfterEnter:k,onEnterCancelled:k,onBeforeLeave:k,onLeave:k,onAfterLeave:k,onLeaveCancelled:k,onBeforeAppear:k,onAppear:k,onAfterAppear:k,onAppearCancelled:k},setup(e,{slots:t}){const n=Ut(),i=S();let s;return()=>{const o=t.default&&L(t.default(),!0);if(!o||!o.length)return;const a=(0,r.IU)(e),{mode:c}=a;const l=o[0];if(i.isLeaving)return R(l);const u=O(l);if(!u)return R(l);const h=N(u,a,i,n);P(u,h);const d=n.subTree,f=d&&O(d);let p=!1;const{getTransitionKey:m}=u.type;if(m){const e=m();void 0===s?s=e:e!==s&&(s=e,p=!0)}if(f&&f.type!==nt&&(!pt(u,f)||p)){const e=N(f,a,i,n);if(P(f,e),"out-in"===c)return i.isLeaving=!0,e.afterLeave=()=>{i.isLeaving=!1,n.update()},R(l);"in-out"===c&&u.type!==nt&&(e.delayLeave=(e,t,n)=>{const r=A(i,f);r[String(f.key)]=f,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=n})}return l}}},C=x;function A(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function N(e,t,n,r){const{appear:i,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:f,onLeaveCancelled:p,onBeforeAppear:m,onAppear:g,onAfterAppear:v,onAppearCancelled:y}=t,w=String(e.key),b=A(n,e),_=(e,t)=>{e&&nn(e,r,9,t)},T={mode:s,persisted:o,beforeEnter(t){let r=a;if(!n.isMounted){if(!i)return;r=m||a}t._leaveCb&&t._leaveCb(!0);const s=b[w];s&&pt(e,s)&&s.el._leaveCb&&s.el._leaveCb(),_(r,[t])},enter(e){let t=c,r=l,s=u;if(!n.isMounted){if(!i)return;t=g||c,r=v||l,s=y||u}let o=!1;const a=e._enterCb=t=>{o||(o=!0,_(t?s:r,[e]),T.delayedLeave&&T.delayedLeave(),e._enterCb=void 0)};t?(t(e,a),t.length<=1&&a()):a()},leave(t,r){const i=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();_(h,[t]);let s=!1;const o=t._leaveCb=n=>{s||(s=!0,r(),_(n?p:f,[t]),t._leaveCb=void 0,b[i]===e&&delete b[i])};b[i]=e,d?(d(t,o),d.length<=1&&o()):o()},clone(e){return N(e,t,n,r)}};return T}function R(e){if(M(e))return e=Tt(e),e.children=null,e}function O(e){return M(e)?e.children?e.children[0]:void 0:e}function P(e,t){6&e.shapeFlag&&e.component?P(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function L(e,t=!1){let n=[],r=0;for(let i=0;i<e.length;i++){const s=e[i];s.type===et?(128&s.patchFlag&&r++,n=n.concat(L(s.children,t))):(t||s.type!==nt)&&n.push(s)}if(r>1)for(let i=0;i<n.length;i++)n[i].patchFlag=-2;return n}function D(e){return(0,i.mf)(e)?{setup:e,name:e.name}:e}const F=e=>!!e.type.__asyncLoader;const M=e=>e.type.__isKeepAlive;RegExp,RegExp;function q(e,t){return(0,i.kJ)(e)?e.some((e=>q(e,t))):(0,i.HD)(e)?e.split(",").indexOf(t)>-1:!!e.test&&e.test(t)}function U(e,t){j(e,"a",t)}function V(e,t){j(e,"da",t)}function j(e,t,n=qt){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}e()});if(H(t,r,n),n){let e=n.parent;while(e&&e.parent)M(e.parent.vnode)&&B(r,t,n,e),e=e.parent}}function B(e,t,n,r){const s=H(t,e,r,!0);Z((()=>{(0,i.Od)(r[t],s)}),n)}function $(e){let t=e.shapeFlag;256&t&&(t-=256),512&t&&(t-=512),e.shapeFlag=t}function z(e){return 128&e.shapeFlag?e.ssContent:e}function H(e,t,n=qt,i=!1){if(n){const s=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;(0,r.Jd)(),Vt(n);const s=nn(t,n,e,i);return jt(),(0,r.lk)(),s});return i?s.unshift(o):s.push(o),o}}const K=e=>(t,n=qt)=>(!Ht||"sp"===e)&&H(e,t,n),G=K("bm"),W=K("m"),J=K("bu"),Y=K("u"),Q=K("bum"),Z=K("um"),X=K("sp"),ee=K("rtg"),te=K("rtc");function ne(e,t=qt){H("ec",e,t)}let re=!0;function ie(e){const t=ce(e),n=e.proxy,s=e.ctx;re=!1,t.beforeCreate&&oe(t.beforeCreate,e,"bc");const{data:o,computed:a,methods:c,watch:l,provide:u,inject:h,created:d,beforeMount:f,mounted:p,beforeUpdate:m,updated:g,activated:v,deactivated:y,beforeDestroy:w,beforeUnmount:b,destroyed:_,unmounted:T,render:E,renderTracked:S,renderTriggered:k,errorCaptured:x,serverPrefetch:C,expose:A,inheritAttrs:N,components:R,directives:O,filters:P}=t,L=null;if(h&&se(h,s,L,e.appContext.config.unwrapInjectedRef),c)for(const r in c){const e=c[r];(0,i.mf)(e)&&(s[r]=e.bind(n))}if(o){0;const t=o.call(n,n);0,(0,i.Kn)(t)&&(e.data=(0,r.qj)(t))}if(re=!0,a)for(const I in a){const e=a[I],t=(0,i.mf)(e)?e.bind(n,n):(0,i.mf)(e.get)?e.get.bind(n,n):i.dG;0;const o=!(0,i.mf)(e)&&(0,i.mf)(e.set)?e.set.bind(n):i.dG,c=(0,r.Fl)({get:t,set:o});Object.defineProperty(s,I,{enumerable:!0,configurable:!0,get:()=>c.value,set:e=>c.value=e})}if(l)for(const r in l)ae(l[r],s,n,r);if(u){const e=(0,i.mf)(u)?u.call(n):u;Reflect.ownKeys(e).forEach((t=>{I(t,e[t])}))}function D(e,t){(0,i.kJ)(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(d&&oe(d,e,"c"),D(G,f),D(W,p),D(J,m),D(Y,g),D(U,v),D(V,y),D(ne,x),D(te,S),D(ee,k),D(Q,b),D(Z,T),D(X,C),(0,i.kJ)(A))if(A.length){const t=e.exposed||(e.exposed={});A.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});E&&e.render===i.dG&&(e.render=E),null!=N&&(e.inheritAttrs=N),R&&(e.components=R),O&&(e.directives=O)}function se(e,t,n=i.dG,s=!1){(0,i.kJ)(e)&&(e=fe(e));for(const o in e){const n=e[o];let a;a=(0,i.Kn)(n)?"default"in n?E(n.from||o,n.default,!0):E(n.from||o):E(n),(0,r.dq)(a)&&s?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e}):t[o]=a}}function oe(e,t,n){nn((0,i.kJ)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function ae(e,t,n,r){const s=r.includes(".")?Dn(n,r):()=>n[r];if((0,i.HD)(e)){const n=t[e];(0,i.mf)(n)&&On(s,n)}else if((0,i.mf)(e))On(s,e.bind(n));else if((0,i.Kn)(e))if((0,i.kJ)(e))e.forEach((e=>ae(e,t,n,r)));else{const r=(0,i.mf)(e.handler)?e.handler.bind(n):t[e.handler];(0,i.mf)(r)&&On(s,r,e)}else 0}function ce(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,a=s.get(t);let c;return a?c=a:i.length||n||r?(c={},i.length&&i.forEach((e=>le(c,e,o,!0))),le(c,t,o)):c=t,s.set(t,c),c}function le(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&le(e,s,n,!0),i&&i.forEach((t=>le(e,t,n,!0)));for(const o in t)if(r&&"expose"===o);else{const r=ue[o]||n&&n[o];e[o]=r?r(e[o],t[o]):t[o]}return e}const ue={data:he,props:me,emits:me,methods:me,computed:me,beforeCreate:pe,created:pe,beforeMount:pe,mounted:pe,beforeUpdate:pe,updated:pe,beforeDestroy:pe,destroyed:pe,activated:pe,deactivated:pe,errorCaptured:pe,serverPrefetch:pe,components:me,directives:me,watch:ge,provide:he,inject:de};function he(e,t){return t?e?function(){return(0,i.l7)((0,i.mf)(e)?e.call(this,this):e,(0,i.mf)(t)?t.call(this,this):t)}:t:e}function de(e,t){return me(fe(e),fe(t))}function fe(e){if((0,i.kJ)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function pe(e,t){return e?[...new Set([].concat(e,t))]:t}function me(e,t){return e?(0,i.l7)((0,i.l7)(Object.create(null),e),t):t}function ge(e,t){if(!e)return t;if(!t)return e;const n=(0,i.l7)(Object.create(null),e);for(const r in t)n[r]=pe(e[r],t[r]);return n}function ve(e,t,n,s=!1){const o={},a={};(0,i.Nj)(a,mt,1),e.propsDefaults=Object.create(null),we(e,t,o,a);for(const r in e.propsOptions[0])r in o||(o[r]=void 0);n?e.props=s?o:(0,r.Um)(o):e.type.props?e.props=o:e.props=a,e.attrs=a}function ye(e,t,n,s){const{props:o,attrs:a,vnode:{patchFlag:c}}=e,l=(0,r.IU)(o),[u]=e.propsOptions;let h=!1;if(!(s||c>0)||16&c){let r;we(e,t,o,a)&&(h=!0);for(const s in l)t&&((0,i.RI)(t,s)||(r=(0,i.rs)(s))!==s&&(0,i.RI)(t,r))||(u?!n||void 0===n[s]&&void 0===n[r]||(o[s]=be(u,l,s,void 0,e,!0)):delete o[s]);if(a!==l)for(const e in a)t&&(0,i.RI)(t,e)||(delete a[e],h=!0)}else if(8&c){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let s=n[r];const c=t[s];if(u)if((0,i.RI)(a,s))c!==a[s]&&(a[s]=c,h=!0);else{const t=(0,i._A)(s);o[t]=be(u,l,t,c,e,!1)}else c!==a[s]&&(a[s]=c,h=!0)}}h&&(0,r.X$)(e,"set","$attrs")}function we(e,t,n,s){const[o,c]=e.propsOptions;let l,u=!1;if(t)for(let r in t){if((0,i.Gg)(r))continue;const h=t[r];let d;o&&(0,i.RI)(o,d=(0,i._A)(r))?c&&c.includes(d)?(l||(l={}))[d]=h:n[d]=h:a(e.emitsOptions,r)||h!==s[r]&&(s[r]=h,u=!0)}if(c){const t=(0,r.IU)(n),s=l||i.kT;for(let r=0;r<c.length;r++){const a=c[r];n[a]=be(o,t,a,s[a],e,!(0,i.RI)(s,a))}}return u}function be(e,t,n,r,s,o){const a=e[n];if(null!=a){const e=(0,i.RI)(a,"default");if(e&&void 0===r){const e=a.default;if(a.type!==Function&&(0,i.mf)(e)){const{propsDefaults:i}=s;n in i?r=i[n]:(Vt(s),r=i[n]=e.call(null,t),jt())}else r=e}a[0]&&(o&&!e?r=!1:!a[1]||""!==r&&r!==(0,i.rs)(n)||(r=!0))}return r}function _e(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const o=e.props,a={},c=[];let l=!1;if(!(0,i.mf)(e)){const r=e=>{l=!0;const[n,r]=_e(e,t,!0);(0,i.l7)(a,n),r&&c.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!o&&!l)return r.set(e,i.Z6),i.Z6;if((0,i.kJ)(o))for(let h=0;h<o.length;h++){0;const e=(0,i._A)(o[h]);Te(e)&&(a[e]=i.kT)}else if(o){0;for(const e in o){const t=(0,i._A)(e);if(Te(t)){const n=o[e],r=a[t]=(0,i.kJ)(n)||(0,i.mf)(n)?{type:n}:n;if(r){const e=Se(Boolean,r.type),n=Se(String,r.type);r[0]=e>-1,r[1]=n<0||e<n,(e>-1||(0,i.RI)(r,"default"))&&c.push(t)}}}}const u=[a,c];return r.set(e,u),u}function Te(e){return"$"!==e[0]}function Ie(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:null===e?"null":""}function Ee(e,t){return Ie(e)===Ie(t)}function Se(e,t){return(0,i.kJ)(t)?t.findIndex((t=>Ee(t,e))):(0,i.mf)(t)&&Ee(t,e)?0:-1}const ke=e=>"_"===e[0]||"$stable"===e,xe=e=>(0,i.kJ)(e)?e.map(St):[St(e)],Ce=(e,t,n)=>{const r=p(((...e)=>xe(t(...e))),n);return r._c=!1,r},Ae=(e,t,n)=>{const r=e._ctx;for(const s in e){if(ke(s))continue;const n=e[s];if((0,i.mf)(n))t[s]=Ce(s,n,r);else if(null!=n){0;const e=xe(n);t[s]=()=>e}}},Ne=(e,t)=>{const n=xe(t);e.slots.default=()=>n},Re=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=(0,r.IU)(t),(0,i.Nj)(t,"_",n)):Ae(t,e.slots={})}else e.slots={},t&&Ne(e,t);(0,i.Nj)(e.slots,mt,1)},Oe=(e,t,n)=>{const{vnode:r,slots:s}=e;let o=!0,a=i.kT;if(32&r.shapeFlag){const e=t._;e?n&&1===e?o=!1:((0,i.l7)(s,t),n||1!==e||delete s._):(o=!t.$stable,Ae(t,s)),a=t}else t&&(Ne(e,t),a={default:1});if(o)for(const i in s)ke(i)||i in a||delete s[i]};function Pe(e,t){const n=c;if(null===n)return e;const r=n.proxy,s=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[e,n,a,c=i.kT]=t[o];(0,i.mf)(e)&&(e={mounted:e,updated:e}),e.deep&&Fn(n),s.push({dir:e,instance:r,value:n,oldValue:void 0,arg:a,modifiers:c})}return e}function Le(e,t,n,i){const s=e.dirs,o=t&&t.dirs;for(let a=0;a<s.length;a++){const c=s[a];o&&(c.oldValue=o[a].value);let l=c.dir[i];l&&((0,r.Jd)(),nn(l,n,8,[e.el,c,e,t]),(0,r.lk)())}}function De(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Fe=0;function Me(e,t){return function(n,r=null){null==r||(0,i.Kn)(r)||(r=null);const s=De(),o=new Set;let a=!1;const c=s.app={_uid:Fe++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:qn,get config(){return s.config},set config(e){0},use(e,...t){return o.has(e)||(e&&(0,i.mf)(e.install)?(o.add(e),e.install(c,...t)):(0,i.mf)(e)&&(o.add(e),e(c,...t))),c},mixin(e){return s.mixins.includes(e)||s.mixins.push(e),c},component(e,t){return t?(s.components[e]=t,c):s.components[e]},directive(e,t){return t?(s.directives[e]=t,c):s.directives[e]},mount(i,o,l){if(!a){const u=wt(n,r);return u.appContext=s,o&&t?t(u,i):e(u,i,l),a=!0,c._container=i,i.__vue_app__=c,u.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return s.provides[e]=t,c}};return c}}function qe(){}const Ue=T;function Ve(e){return je(e)}function je(e,t){qe();const{insert:n,remove:s,patchProp:o,createElement:a,createText:c,createComment:l,setText:u,setElementText:h,parentNode:d,nextSibling:f,setScopeId:p=i.dG,cloneNode:g,insertStaticContent:v}=e,w=(e,t,n,r=null,i=null,s=null,o=!1,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!pt(e,t)&&(r=Y(e),H(e,i,s,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:l,ref:u,shapeFlag:h}=t;switch(l){case tt:_(e,t,n,r);break;case nt:T(e,t,n,r);break;case rt:null==e&&I(t,n,r,o);break;case et:P(e,t,n,r,i,s,o,a,c);break;default:1&h?k(e,t,n,r,i,s,o,a,c):6&h?L(e,t,n,r,i,s,o,a,c):(64&h||128&h)&&l.process(e,t,n,r,i,s,o,a,c,Z)}null!=u&&i&&Be(u,e&&e.ref,s,t||e,!t)},_=(e,t,r,i)=>{if(null==e)n(t.el=c(t.children),r,i);else{const n=t.el=e.el;t.children!==e.children&&u(n,t.children)}},T=(e,t,r,i)=>{null==e?n(t.el=l(t.children||""),r,i):t.el=e.el},I=(e,t,n,r)=>{[e.el,e.anchor]=v(e.children,t,n,r)},E=({el:e,anchor:t},r,i)=>{let s;while(e&&e!==t)s=f(e),n(e,r,i),e=s;n(t,r,i)},S=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=f(e),s(e),e=n;s(t)},k=(e,t,n,r,i,s,o,a,c)=>{o=o||"svg"===t.type,null==e?x(t,n,r,i,s,o,a,c):N(e,t,i,s,o,a,c)},x=(e,t,r,s,c,l,u,d)=>{let f,p;const{type:m,props:v,shapeFlag:y,transition:w,patchFlag:b,dirs:_}=e;if(e.el&&void 0!==g&&-1===b)f=e.el=g(e.el);else{if(f=e.el=a(e.type,l,v&&v.is,v),8&y?h(f,e.children):16&y&&A(e.children,f,null,s,c,l&&"foreignObject"!==m,u,d),_&&Le(e,null,s,"created"),v){for(const t in v)"value"===t||(0,i.Gg)(t)||o(f,t,null,v[t],l,e.children,s,c,J);"value"in v&&o(f,"value",null,v.value),(p=v.onVnodeBeforeMount)&&$e(p,s,e)}C(f,e,e.scopeId,u,s)}_&&Le(e,null,s,"beforeMount");const T=(!c||c&&!c.pendingBranch)&&w&&!w.persisted;T&&w.beforeEnter(f),n(f,t,r),((p=v&&v.onVnodeMounted)||T||_)&&Ue((()=>{p&&$e(p,s,e),T&&w.enter(f),_&&Le(e,null,s,"mounted")}),c)},C=(e,t,n,r,i)=>{if(n&&p(e,n),r)for(let s=0;s<r.length;s++)p(e,r[s]);if(i){let n=i.subTree;if(t===n){const t=i.vnode;C(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},A=(e,t,n,r,i,s,o,a,c=0)=>{for(let l=c;l<e.length;l++){const c=e[l]=a?kt(e[l]):St(e[l]);w(null,c,t,n,r,i,s,o,a)}},N=(e,t,n,r,s,a,c)=>{const l=t.el=e.el;let{patchFlag:u,dynamicChildren:d,dirs:f}=t;u|=16&e.patchFlag;const p=e.props||i.kT,m=t.props||i.kT;let g;(g=m.onVnodeBeforeUpdate)&&$e(g,n,t,e),f&&Le(t,e,n,"beforeUpdate");const v=s&&"foreignObject"!==t.type;if(d?R(e.dynamicChildren,d,l,n,r,v,a):c||j(e,t,l,null,n,r,v,a,!1),u>0){if(16&u)O(l,t,p,m,n,r,s);else if(2&u&&p.class!==m.class&&o(l,"class",null,m.class,s),4&u&&o(l,"style",p.style,m.style,s),8&u){const i=t.dynamicProps;for(let t=0;t<i.length;t++){const a=i[t],c=p[a],u=m[a];u===c&&"value"!==a||o(l,a,c,u,s,e.children,n,r,J)}}1&u&&e.children!==t.children&&h(l,t.children)}else c||null!=d||O(l,t,p,m,n,r,s);((g=m.onVnodeUpdated)||f)&&Ue((()=>{g&&$e(g,n,t,e),f&&Le(t,e,n,"updated")}),r)},R=(e,t,n,r,i,s,o)=>{for(let a=0;a<t.length;a++){const c=e[a],l=t[a],u=c.el&&(c.type===et||!pt(c,l)||70&c.shapeFlag)?d(c.el):n;w(c,l,u,null,r,i,s,o,!0)}},O=(e,t,n,r,s,a,c)=>{if(n!==r){for(const l in r){if((0,i.Gg)(l))continue;const u=r[l],h=n[l];u!==h&&"value"!==l&&o(e,l,h,u,c,t.children,s,a,J)}if(n!==i.kT)for(const l in n)(0,i.Gg)(l)||l in r||o(e,l,n[l],null,c,t.children,s,a,J);"value"in r&&o(e,"value",n.value,r.value)}},P=(e,t,r,i,s,o,a,l,u)=>{const h=t.el=e?e.el:c(""),d=t.anchor=e?e.anchor:c("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:m}=t;m&&(l=l?l.concat(m):m),null==e?(n(h,r,i),n(d,r,i),A(t.children,r,d,s,o,a,l,u)):f>0&&64&f&&p&&e.dynamicChildren?(R(e.dynamicChildren,p,r,s,o,a,l),(null!=t.key||s&&t===s.subTree)&&ze(e,t,!0)):j(e,t,r,d,s,o,a,l,u)},L=(e,t,n,r,i,s,o,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,o,c):D(t,n,r,i,s,o,c):q(e,t,c)},D=(e,t,n,r,i,s,o)=>{const a=e.component=Mt(e,r,i);if(M(e)&&(a.ctx.renderer=Z),Kt(a),a.asyncDep){if(i&&i.registerDep(a,U),!e.el){const e=a.subTree=wt(nt);T(null,e,t,n)}}else U(a,e,t,n,i,s,o)},q=(e,t,n)=>{const r=t.component=e.component;if(y(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void V(r,t,n);r.next=t,In(r.update),r.update()}else t.component=e.component,t.el=e.el,r.vnode=t},U=(e,t,n,s,o,a,c)=>{const l=()=>{if(e.isMounted){let t,{next:n,bu:r,u:s,parent:l,vnode:h}=e,f=n;0,u.allowRecurse=!1,n?(n.el=h.el,V(e,n,c)):n=h,r&&(0,i.ir)(r),(t=n.props&&n.props.onVnodeBeforeUpdate)&&$e(t,l,n,h),u.allowRecurse=!0;const p=m(e);0;const g=e.subTree;e.subTree=p,w(g,p,d(g.el),Y(g),e,o,a),n.el=p.el,null===f&&b(e,p.el),s&&Ue(s,o),(t=n.props&&n.props.onVnodeUpdated)&&Ue((()=>$e(t,l,n,h)),o)}else{let r;const{el:c,props:l}=t,{bm:h,m:d,parent:f}=e,p=F(t);if(u.allowRecurse=!1,h&&(0,i.ir)(h),!p&&(r=l&&l.onVnodeBeforeMount)&&$e(r,f,t),u.allowRecurse=!0,c&&ee){const n=()=>{e.subTree=m(e),ee(c,e.subTree,e,o,null)};p?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{0;const r=e.subTree=m(e);0,w(null,r,n,s,e,o,a),t.el=r.el}if(d&&Ue(d,o),!p&&(r=l&&l.onVnodeMounted)){const e=t;Ue((()=>$e(r,f,e)),o)}256&t.shapeFlag&&e.a&&Ue(e.a,o),e.isMounted=!0,t=n=s=null}},u=new r.qq(l,(()=>_n(e.update)),e.scope),h=e.update=u.run.bind(u);h.id=e.uid,u.allowRecurse=h.allowRecurse=!0,h()},V=(e,t,n)=>{t.component=e;const i=e.vnode.props;e.vnode=t,e.next=null,ye(e,t.props,i,n),Oe(e,t.children,n),(0,r.Jd)(),xn(void 0,e.update),(0,r.lk)()},j=(e,t,n,r,i,s,o,a,c=!1)=>{const l=e&&e.children,u=e?e.shapeFlag:0,d=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void $(l,d,n,r,i,s,o,a,c);if(256&f)return void B(l,d,n,r,i,s,o,a,c)}8&p?(16&u&&J(l,i,s),d!==l&&h(n,d)):16&u?16&p?$(l,d,n,r,i,s,o,a,c):J(l,i,s,!0):(8&u&&h(n,""),16&p&&A(d,n,r,i,s,o,a,c))},B=(e,t,n,r,s,o,a,c,l)=>{e=e||i.Z6,t=t||i.Z6;const u=e.length,h=t.length,d=Math.min(u,h);let f;for(f=0;f<d;f++){const r=t[f]=l?kt(t[f]):St(t[f]);w(e[f],r,n,null,s,o,a,c,l)}u>h?J(e,s,o,!0,!1,d):A(t,n,r,s,o,a,c,l,d)},$=(e,t,n,r,s,o,a,c,l)=>{let u=0;const h=t.length;let d=e.length-1,f=h-1;while(u<=d&&u<=f){const r=e[u],i=t[u]=l?kt(t[u]):St(t[u]);if(!pt(r,i))break;w(r,i,n,null,s,o,a,c,l),u++}while(u<=d&&u<=f){const r=e[d],i=t[f]=l?kt(t[f]):St(t[f]);if(!pt(r,i))break;w(r,i,n,null,s,o,a,c,l),d--,f--}if(u>d){if(u<=f){const e=f+1,i=e<h?t[e].el:r;while(u<=f)w(null,t[u]=l?kt(t[u]):St(t[u]),n,i,s,o,a,c,l),u++}}else if(u>f)while(u<=d)H(e[u],s,o,!0),u++;else{const p=u,m=u,g=new Map;for(u=m;u<=f;u++){const e=t[u]=l?kt(t[u]):St(t[u]);null!=e.key&&g.set(e.key,u)}let v,y=0;const b=f-m+1;let _=!1,T=0;const I=new Array(b);for(u=0;u<b;u++)I[u]=0;for(u=p;u<=d;u++){const r=e[u];if(y>=b){H(r,s,o,!0);continue}let i;if(null!=r.key)i=g.get(r.key);else for(v=m;v<=f;v++)if(0===I[v-m]&&pt(r,t[v])){i=v;break}void 0===i?H(r,s,o,!0):(I[i-m]=u+1,i>=T?T=i:_=!0,w(r,t[i],n,null,s,o,a,c,l),y++)}const E=_?He(I):i.Z6;for(v=E.length-1,u=b-1;u>=0;u--){const e=m+u,i=t[e],d=e+1<h?t[e+1].el:r;0===I[u]?w(null,i,n,d,s,o,a,c,l):_&&(v<0||u!==E[v]?z(i,n,d,2):v--)}}},z=(e,t,r,i,s=null)=>{const{el:o,type:a,transition:c,children:l,shapeFlag:u}=e;if(6&u)return void z(e.component.subTree,t,r,i);if(128&u)return void e.suspense.move(t,r,i);if(64&u)return void a.move(e,t,r,Z);if(a===et){n(o,t,r);for(let e=0;e<l.length;e++)z(l[e],t,r,i);return void n(e.anchor,t,r)}if(a===rt)return void E(e,t,r);const h=2!==i&&1&u&&c;if(h)if(0===i)c.beforeEnter(o),n(o,t,r),Ue((()=>c.enter(o)),s);else{const{leave:e,delayLeave:i,afterLeave:s}=c,a=()=>n(o,t,r),l=()=>{e(o,(()=>{a(),s&&s()}))};i?i(o,a,l):l()}else n(o,t,r)},H=(e,t,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:h,dirs:d}=e;if(null!=a&&Be(a,null,n,e,!0),256&u)return void t.ctx.deactivate(e);const f=1&u&&d,p=!F(e);let m;if(p&&(m=o&&o.onVnodeBeforeUnmount)&&$e(m,t,e),6&u)W(e.component,n,r);else{if(128&u)return void e.suspense.unmount(n,r);f&&Le(e,null,t,"beforeUnmount"),64&u?e.type.remove(e,t,n,i,Z,r):l&&(s!==et||h>0&&64&h)?J(l,t,n,!1,!0):(s===et&&384&h||!i&&16&u)&&J(c,t,n),r&&K(e)}(p&&(m=o&&o.onVnodeUnmounted)||f)&&Ue((()=>{m&&$e(m,t,e),f&&Le(e,null,t,"unmounted")}),n)},K=e=>{const{type:t,el:n,anchor:r,transition:i}=e;if(t===et)return void G(n,r);if(t===rt)return void S(e);const o=()=>{s(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,s=()=>t(n,o);r?r(e.el,o,s):s()}else o()},G=(e,t)=>{let n;while(e!==t)n=f(e),s(e),e=n;s(t)},W=(e,t,n)=>{const{bum:r,scope:s,update:o,subTree:a,um:c}=e;r&&(0,i.ir)(r),s.stop(),o&&(o.active=!1,H(a,e,t,n)),c&&Ue(c,t),Ue((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},J=(e,t,n,r=!1,i=!1,s=0)=>{for(let o=s;o<e.length;o++)H(e[o],t,n,r,i)},Y=e=>6&e.shapeFlag?Y(e.component.subTree):128&e.shapeFlag?e.suspense.next():f(e.anchor||e.el),Q=(e,t,n)=>{null==e?t._vnode&&H(t._vnode,null,null,!0):w(t._vnode||null,e,t,null,null,null,n),Cn(),t._vnode=e},Z={p:w,um:H,m:z,r:K,mt:D,mc:A,pc:j,pbc:R,n:Y,o:e};let X,ee;return t&&([X,ee]=t(Z)),{render:Q,hydrate:X,createApp:Me(Q,X)}}function Be(e,t,n,s,o=!1){if((0,i.kJ)(e))return void e.forEach(((e,r)=>Be(e,t&&((0,i.kJ)(t)?t[r]:t),n,s,o)));if(F(s)&&!o)return;const a=4&s.shapeFlag?Zt(s.component)||s.component.proxy:s.el,c=o?null:a,{i:l,r:u}=e;const h=t&&t.r,d=l.refs===i.kT?l.refs={}:l.refs,f=l.setupState;if(null!=h&&h!==u&&((0,i.HD)(h)?(d[h]=null,(0,i.RI)(f,h)&&(f[h]=null)):(0,r.dq)(h)&&(h.value=null)),(0,i.HD)(u)){const e=()=>{d[u]=c,(0,i.RI)(f,u)&&(f[u]=c)};c?(e.id=-1,Ue(e,n)):e()}else if((0,r.dq)(u)){const e=()=>{u.value=c};c?(e.id=-1,Ue(e,n)):e()}else(0,i.mf)(u)&&tn(u,l,12,[c,d])}function $e(e,t,n,r=null){nn(e,t,7,[n,r])}function ze(e,t,n=!1){const r=e.children,s=t.children;if((0,i.kJ)(r)&&(0,i.kJ)(s))for(let i=0;i<r.length;i++){const e=r[i];let t=s[i];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=s[i]=kt(s[i]),t.el=e.el),n||ze(e,t))}}function He(e){const t=e.slice(),n=[0];let r,i,s,o,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,e[n[a]]<c?s=a+1:o=a;c<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=t[o];return n}const Ke=e=>e.__isTeleport;const Ge="components",We="directives";function Je(e,t){return Ze(Ge,e,!0,t)||e}const Ye=Symbol();function Qe(e){return Ze(We,e)}function Ze(e,t,n=!0,r=!1){const s=c||qt;if(s){const n=s.type;if(e===Ge){const e=Xt(n);if(e&&(e===t||e===(0,i._A)(t)||e===(0,i.kC)((0,i._A)(t))))return n}const o=Xe(s[e]||n[e],t)||Xe(s.appContext[e],t);return!o&&r?n:o}}function Xe(e,t){return e&&(e[t]||e[(0,i._A)(t)]||e[(0,i.kC)((0,i._A)(t))])}const et=Symbol(void 0),tt=Symbol(void 0),nt=Symbol(void 0),rt=Symbol(void 0),it=[];let st=null;function ot(e=!1){it.push(st=e?null:[])}function at(){it.pop(),st=it[it.length-1]||null}let ct=1;function lt(e){ct+=e}function ut(e){return e.dynamicChildren=ct>0?st||i.Z6:null,at(),ct>0&&st&&st.push(e),e}function ht(e,t,n,r,i,s){return ut(yt(e,t,n,r,i,s,!0))}function dt(e,t,n,r,i){return ut(wt(e,t,n,r,i,!0))}function ft(e){return!!e&&!0===e.__v_isVNode}function pt(e,t){return e.type===t.type&&e.key===t.key}const mt="__vInternal",gt=({key:e})=>null!=e?e:null,vt=({ref:e})=>null!=e?(0,i.HD)(e)||(0,r.dq)(e)||(0,i.mf)(e)?{i:c,r:e}:e:null;function yt(e,t=null,n=null,r=0,s=null,o=(e===et?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&gt(t),ref:t&&vt(t),scopeId:l,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return c?(xt(u,n),128&o&&e.normalize(u)):n&&(u.shapeFlag|=(0,i.HD)(n)?8:16),ct>0&&!a&&st&&(u.patchFlag>0||6&o)&&32!==u.patchFlag&&st.push(u),u}const wt=bt;function bt(e,t=null,n=null,s=0,o=null,a=!1){if(e&&e!==Ye||(e=nt),ft(e)){const r=Tt(e,t,!0);return n&&xt(r,n),r}if(en(e)&&(e=e.__vccOpts),t){t=_t(t);let{class:e,style:n}=t;e&&!(0,i.HD)(e)&&(t.class=(0,i.C_)(e)),(0,i.Kn)(n)&&((0,r.X3)(n)&&!(0,i.kJ)(n)&&(n=(0,i.l7)({},n)),t.style=(0,i.j5)(n))}const c=(0,i.HD)(e)?1:_(e)?128:Ke(e)?64:(0,i.Kn)(e)?4:(0,i.mf)(e)?2:0;return yt(e,t,n,s,o,c,a,!0)}function _t(e){return e?(0,r.X3)(e)||mt in e?(0,i.l7)({},e):e:null}function Tt(e,t,n=!1){const{props:r,ref:s,patchFlag:o,children:a}=e,c=t?Ct(r||{},t):r,l={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&gt(c),ref:t&&t.ref?n&&s?(0,i.kJ)(s)?s.concat(vt(t)):[s,vt(t)]:vt(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==et?-1===o?16:16|o:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Tt(e.ssContent),ssFallback:e.ssFallback&&Tt(e.ssFallback),el:e.el,anchor:e.anchor};return l}function It(e=" ",t=0){return wt(tt,null,e,t)}function Et(e="",t=!1){return t?(ot(),dt(nt,null,e)):wt(nt,null,e)}function St(e){return null==e||"boolean"===typeof e?wt(nt):(0,i.kJ)(e)?wt(et,null,e.slice()):"object"===typeof e?kt(e):wt(tt,null,String(e))}function kt(e){return null===e.el||e.memo?e:Tt(e)}function xt(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if((0,i.kJ)(t))n=16;else if("object"===typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),xt(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||mt in t?3===r&&c&&(1===c.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=c}}else(0,i.mf)(t)?(t={default:t,_ctx:c},n=32):(t=String(t),64&r?(n=16,t=[It(t)]):n=8);e.children=t,e.shapeFlag|=n}function Ct(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=(0,i.C_)([t.class,r.class]));else if("style"===e)t.style=(0,i.j5)([t.style,r.style]);else if((0,i.F7)(e)){const n=t[e],i=r[e];n!==i&&(t[e]=n?[].concat(n,i):i)}else""!==e&&(t[e]=r[e])}return t}function At(e,t,n,r){let s;const o=n&&n[r];if((0,i.kJ)(e)||(0,i.HD)(e)){s=new Array(e.length);for(let n=0,r=e.length;n<r;n++)s[n]=t(e[n],n,void 0,o&&o[n])}else if("number"===typeof e){0,s=new Array(e);for(let n=0;n<e;n++)s[n]=t(n+1,n,void 0,o&&o[n])}else if((0,i.Kn)(e))if(e[Symbol.iterator])s=Array.from(e,((e,n)=>t(e,n,void 0,o&&o[n])));else{const n=Object.keys(e);s=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];s[r]=t(e[i],i,r,o&&o[r])}}else s=[];return n&&(n[r]=s),s}function Nt(e,t,n={},r,i){if(c.isCE)return wt("slot","default"===t?null:{name:t},r&&r());let s=e[t];s&&s._c&&(s._d=!1),ot();const o=s&&Rt(s(n)),a=dt(et,{key:n.key||`_${t}`},o||(r?r():[]),o&&1===e._?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function Rt(e){return e.some((e=>!ft(e)||e.type!==nt&&!(e.type===et&&!Rt(e.children))))?e:null}const Ot=e=>e?Bt(e)?Zt(e)||e.proxy:Ot(e.parent):null,Pt=(0,i.l7)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ot(e.parent),$root:e=>Ot(e.root),$emit:e=>e.emit,$options:e=>ce(e),$forceUpdate:e=>()=>_n(e.update),$nextTick:e=>wn.bind(e.proxy),$watch:e=>Ln.bind(e)}),Lt={get({_:e},t){const{ctx:n,setupState:s,data:o,props:a,accessCache:c,type:l,appContext:u}=e;let h;if("$"!==t[0]){const r=c[t];if(void 0!==r)switch(r){case 0:return s[t];case 1:return o[t];case 3:return n[t];case 2:return a[t]}else{if(s!==i.kT&&(0,i.RI)(s,t))return c[t]=0,s[t];if(o!==i.kT&&(0,i.RI)(o,t))return c[t]=1,o[t];if((h=e.propsOptions[0])&&(0,i.RI)(h,t))return c[t]=2,a[t];if(n!==i.kT&&(0,i.RI)(n,t))return c[t]=3,n[t];re&&(c[t]=4)}}const d=Pt[t];let f,p;return d?("$attrs"===t&&(0,r.j)(e,"get",t),d(e)):(f=l.__cssModules)&&(f=f[t])?f:n!==i.kT&&(0,i.RI)(n,t)?(c[t]=3,n[t]):(p=u.config.globalProperties,(0,i.RI)(p,t)?p[t]:void 0)},set({_:e},t,n){const{data:r,setupState:s,ctx:o}=e;if(s!==i.kT&&(0,i.RI)(s,t))s[t]=n;else if(r!==i.kT&&(0,i.RI)(r,t))r[t]=n;else if((0,i.RI)(e.props,t))return!1;return("$"!==t[0]||!(t.slice(1)in e))&&(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:o}},a){let c;return void 0!==n[a]||e!==i.kT&&(0,i.RI)(e,a)||t!==i.kT&&(0,i.RI)(t,a)||(c=o[0])&&(0,i.RI)(c,a)||(0,i.RI)(r,a)||(0,i.RI)(Pt,a)||(0,i.RI)(s.config.globalProperties,a)}};const Dt=De();let Ft=0;function Mt(e,t,n){const a=e.type,c=(t?t.appContext:e.appContext)||Dt,l={uid:Ft++,vnode:e,type:a,parent:t,appContext:c,root:null,next:null,subTree:null,update:null,scope:new r.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(c.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:_e(a,c),emitsOptions:o(a,c),emit:null,emitted:null,propsDefaults:i.kT,inheritAttrs:a.inheritAttrs,ctx:i.kT,data:i.kT,props:i.kT,attrs:i.kT,slots:i.kT,refs:i.kT,setupState:i.kT,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return l.ctx={_:l},l.root=t?t.root:l,l.emit=s.bind(null,l),e.ce&&e.ce(l),l}let qt=null;const Ut=()=>qt||c,Vt=e=>{qt=e,e.scope.on()},jt=()=>{qt&&qt.scope.off(),qt=null};function Bt(e){return 4&e.vnode.shapeFlag}let $t,zt,Ht=!1;function Kt(e,t=!1){Ht=t;const{props:n,children:r}=e.vnode,i=Bt(e);ve(e,n,i,t),Re(e,r);const s=i?Gt(e,t):void 0;return Ht=!1,s}function Gt(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=(0,r.Xl)(new Proxy(e.ctx,Lt));const{setup:s}=n;if(s){const n=e.setupContext=s.length>1?Qt(e):null;Vt(e),(0,r.Jd)();const o=tn(s,e,0,[e.props,n]);if((0,r.lk)(),jt(),(0,i.tI)(o)){if(o.then(jt,jt),t)return o.then((n=>{Wt(e,n,t)})).catch((t=>{rn(t,e,0)}));e.asyncDep=o}else Wt(e,o,t)}else Jt(e,t)}function Wt(e,t,n){(0,i.mf)(t)?e.render=t:(0,i.Kn)(t)&&(e.setupState=(0,r.WL)(t)),Jt(e,n)}function Jt(e,t,n){const s=e.type;if(!e.render){if($t&&!s.render){const t=s.template;if(t){0;const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:o,compilerOptions:a}=s,c=(0,i.l7)((0,i.l7)({isCustomElement:n,delimiters:o},r),a);s.render=$t(t,c)}}e.render=s.render||i.dG,zt&&zt(e)}Vt(e),(0,r.Jd)(),ie(e),(0,r.lk)(),jt()}function Yt(e){return new Proxy(e.attrs,{get(t,n){return(0,r.j)(e,"get","$attrs"),t[n]}})}function Qt(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=Yt(e))},slots:e.slots,emit:e.emit,expose:t}}function Zt(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy((0,r.WL)((0,r.Xl)(e.exposed)),{get(t,n){return n in t?t[n]:n in Pt?Pt[n](e):void 0}}))}function Xt(e){return(0,i.mf)(e)&&e.displayName||e.name}function en(e){return(0,i.mf)(e)&&"__vccOpts"in e}function tn(e,t,n,r){let i;try{i=r?e(...r):e()}catch(s){rn(s,t,n)}return i}function nn(e,t,n,r){if((0,i.mf)(e)){const s=tn(e,t,n,r);return s&&(0,i.tI)(s)&&s.catch((e=>{rn(e,t,n)})),s}const s=[];for(let i=0;i<e.length;i++)s.push(nn(e[i],t,n,r));return s}function rn(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,s=n;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,i,s))return;r=r.parent}const o=t.appContext.config.errorHandler;if(o)return void tn(o,null,10,[e,i,s])}sn(e,n,i,r)}function sn(e,t,n,r=!0){console.error(e)}let on=!1,an=!1;const cn=[];let ln=0;const un=[];let hn=null,dn=0;const fn=[];let pn=null,mn=0;const gn=Promise.resolve();let vn=null,yn=null;function wn(e){const t=vn||gn;return e?t.then(this?e.bind(this):e):t}function bn(e){let t=ln+1,n=cn.length;while(t<n){const r=t+n>>>1,i=An(cn[r]);i<e?t=r+1:n=r}return t}function _n(e){cn.length&&cn.includes(e,on&&e.allowRecurse?ln+1:ln)||e===yn||(null==e.id?cn.push(e):cn.splice(bn(e.id),0,e),Tn())}function Tn(){on||an||(an=!0,vn=gn.then(Nn))}function In(e){const t=cn.indexOf(e);t>ln&&cn.splice(t,1)}function En(e,t,n,r){(0,i.kJ)(e)?n.push(...e):t&&t.includes(e,e.allowRecurse?r+1:r)||n.push(e),Tn()}function Sn(e){En(e,hn,un,dn)}function kn(e){En(e,pn,fn,mn)}function xn(e,t=null){if(un.length){for(yn=t,hn=[...new Set(un)],un.length=0,dn=0;dn<hn.length;dn++)hn[dn]();hn=null,dn=0,yn=null,xn(e,t)}}function Cn(e){if(fn.length){const e=[...new Set(fn)];if(fn.length=0,pn)return void pn.push(...e);for(pn=e,pn.sort(((e,t)=>An(e)-An(t))),mn=0;mn<pn.length;mn++)pn[mn]();pn=null,mn=0}}const An=e=>null==e.id?1/0:e.id;function Nn(e){an=!1,on=!0,xn(e),cn.sort(((e,t)=>An(e)-An(t)));try{for(ln=0;ln<cn.length;ln++){const e=cn[ln];e&&!1!==e.active&&tn(e,null,14)}}finally{ln=0,cn.length=0,Cn(e),on=!1,vn=null,(cn.length||un.length||fn.length)&&Nn(e)}}const Rn={};function On(e,t,n){return Pn(e,t,n)}function Pn(e,t,{immediate:n,deep:s,flush:o,onTrack:a,onTrigger:c}=i.kT){const l=qt;let u,h,d=!1,f=!1;if((0,r.dq)(e)?(u=()=>e.value,d=!!e._shallow):(0,r.PG)(e)?(u=()=>e,s=!0):(0,i.kJ)(e)?(f=!0,d=e.some(r.PG),u=()=>e.map((e=>(0,r.dq)(e)?e.value:(0,r.PG)(e)?Fn(e):(0,i.mf)(e)?tn(e,l,2):void 0))):u=(0,i.mf)(e)?t?()=>tn(e,l,2):()=>{if(!l||!l.isUnmounted)return h&&h(),nn(e,l,3,[p])}:i.dG,t&&s){const e=u;u=()=>Fn(e())}let p=e=>{h=y.onStop=()=>{tn(e,l,4)}},m=f?[]:Rn;const g=()=>{if(y.active)if(t){const e=y.run();(s||d||(f?e.some(((e,t)=>(0,i.aU)(e,m[t]))):(0,i.aU)(e,m)))&&(h&&h(),nn(t,l,3,[e,m===Rn?void 0:m,p]),m=e)}else y.run()};let v;g.allowRecurse=!!t,v="sync"===o?g:"post"===o?()=>Ue(g,l&&l.suspense):()=>{!l||l.isMounted?Sn(g):g()};const y=new r.qq(u,v);return t?n?g():m=y.run():"post"===o?Ue(y.run.bind(y),l&&l.suspense):y.run(),()=>{y.stop(),l&&l.scope&&(0,i.Od)(l.scope.effects,y)}}function Ln(e,t,n){const r=this.proxy,s=(0,i.HD)(e)?e.includes(".")?Dn(r,e):()=>r[e]:e.bind(r,r);let o;(0,i.mf)(t)?o=t:(o=t.handler,n=t);const a=qt;Vt(this);const c=Pn(s,o.bind(r),n);return a?Vt(a):jt(),c}function Dn(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function Fn(e,t=new Set){if(!(0,i.Kn)(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),(0,r.dq)(e))Fn(e.value,t);else if((0,i.kJ)(e))for(let n=0;n<e.length;n++)Fn(e[n],t);else if((0,i.DM)(e)||(0,i._N)(e))e.forEach((e=>{Fn(e,t)}));else if((0,i.PO)(e))for(const n in e)Fn(e[n],t);return e}function Mn(e,t,n){const r=arguments.length;return 2===r?(0,i.Kn)(t)&&!(0,i.kJ)(t)?ft(t)?wt(e,null,[t]):wt(e,t):wt(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&ft(n)&&(n=[n]),wt(e,t,n))}Symbol("");const qn="3.2.4"},8880:(e,t,n)=>{"use strict";n.d(t,{uT:()=>q,W3:()=>ie,ri:()=>ve,F8:()=>de,iM:()=>he});var r=n(2323),i=n(3673),s=n(1959);const o="http://www.w3.org/2000/svg",a="undefined"!==typeof document?document:null,c=new Map,l={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?a.createElementNS(o,e):a.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>a.createTextNode(e),createComment:e=>a.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>a.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r){const i=n?n.previousSibling:t.lastChild;let s=c.get(e);if(!s){const t=a.createElement("template");if(t.innerHTML=r?`<svg>${e}</svg>`:e,s=t.content,r){const e=s.firstChild;while(e.firstChild)s.appendChild(e.firstChild);s.removeChild(e)}c.set(e,s)}return t.insertBefore(s.cloneNode(!0),n),[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function u(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function h(e,t,n){const i=e.style;if(n)if((0,r.HD)(n)){if(t!==n){const t=i.display;i.cssText=n,"_vod"in e&&(i.display=t)}}else{for(const e in n)f(i,e,n[e]);if(t&&!(0,r.HD)(t))for(const e in t)null==n[e]&&f(i,e,"")}else e.removeAttribute("style")}const d=/\s*!important$/;function f(e,t,n){if((0,r.kJ)(n))n.forEach((n=>f(e,t,n)));else if(t.startsWith("--"))e.setProperty(t,n);else{const i=g(e,t);d.test(n)?e.setProperty((0,r.rs)(i),n.replace(d,""),"important"):e[i]=n}}const p=["Webkit","Moz","ms"],m={};function g(e,t){const n=m[t];if(n)return n;let i=(0,r._A)(t);if("filter"!==i&&i in e)return m[t]=i;i=(0,r.kC)(i);for(let r=0;r<p.length;r++){const n=p[r]+i;if(n in e)return m[t]=n}return t}const v="http://www.w3.org/1999/xlink";function y(e,t,n,i,s){if(i&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(v,t.slice(6,t.length)):e.setAttributeNS(v,t,n);else{const i=(0,r.Pq)(t);null==n||i&&!(0,r.yA)(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function w(e,t,n,i,s,o,a){if("innerHTML"===t||"textContent"===t)return i&&a(i,s,o),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName){e._value=n;const r=null==n?"":n;return e.value!==r&&(e.value=r),void(null==n&&e.removeAttribute(t))}if(""===n||null==n){const i=typeof e[t];if("boolean"===i)return void(e[t]=(0,r.yA)(n));if(null==n&&"string"===i)return e[t]="",void e.removeAttribute(t);if("number"===i){try{e[t]=0}catch(c){}return void e.removeAttribute(t)}}try{e[t]=n}catch(l){0}}let b=Date.now,_=!1;if("undefined"!==typeof window){b()>document.createEvent("Event").timeStamp&&(b=()=>performance.now());const e=navigator.userAgent.match(/firefox\/(\d+)/i);_=!!(e&&Number(e[1])<=53)}let T=0;const I=Promise.resolve(),E=()=>{T=0},S=()=>T||(I.then(E),T=b());function k(e,t,n,r){e.addEventListener(t,n,r)}function x(e,t,n,r){e.removeEventListener(t,n,r)}function C(e,t,n,r,i=null){const s=e._vei||(e._vei={}),o=s[t];if(r&&o)o.value=r;else{const[n,a]=N(t);if(r){const o=s[t]=R(r,i);k(e,n,o,a)}else o&&(x(e,n,o,a),s[t]=void 0)}}const A=/(?:Once|Passive|Capture)$/;function N(e){let t;if(A.test(e)){let n;t={};while(n=e.match(A))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[(0,r.rs)(e.slice(2)),t]}function R(e,t){const n=e=>{const r=e.timeStamp||b();(_||r>=n.attached-1)&&(0,i.$d)(O(e,n.value),t,5,[e])};return n.value=e,n.attached=S(),n}function O(e,t){if((0,r.kJ)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e(t)))}return t}const P=/^on[a-z]/,L=(e,t,n,i,s=!1,o,a,c,l)=>{"class"===t?u(e,i,s):"style"===t?h(e,n,i):(0,r.F7)(t)?(0,r.tR)(t)||C(e,t,n,i,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):D(e,t,i,s))?w(e,t,i,o,a,c,l):("true-value"===t?e._trueValue=i:"false-value"===t&&(e._falseValue=i),y(e,t,i,s))};function D(e,t,n,i){return i?"innerHTML"===t||"textContent"===t||!!(t in e&&P.test(t)&&(0,r.mf)(n)):"spellcheck"!==t&&"draggable"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!P.test(t)||!(0,r.HD)(n))&&t in e))))}"undefined"!==typeof HTMLElement&&HTMLElement;const F="transition",M="animation",q=(e,{slots:t})=>(0,i.h)(i.P$,$(e),t);q.displayName="Transition";const U={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},V=q.props=(0,r.l7)({},i.P$.props,U),j=(e,t=[])=>{(0,r.kJ)(e)?e.forEach((e=>e(...t))):e&&e(...t)},B=e=>!!e&&((0,r.kJ)(e)?e.some((e=>e.length>1)):e.length>1);function $(e){const t={};for(const r in e)r in U||(t[r]=e[r]);if(!1===e.css)return t;const{name:n="v",type:i,duration:s,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=o,appearActiveClass:u=a,appearToClass:h=c,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,m=z(s),g=m&&m[0],v=m&&m[1],{onBeforeEnter:y,onEnter:w,onEnterCancelled:b,onLeave:_,onLeaveCancelled:T,onBeforeAppear:I=y,onAppear:E=w,onAppearCancelled:S=b}=t,k=(e,t,n)=>{G(e,t?h:c),G(e,t?u:a),n&&n()},x=(e,t)=>{G(e,p),G(e,f),t&&t()},C=e=>(t,n)=>{const r=e?E:w,s=()=>k(t,e,n);j(r,[t,s]),W((()=>{G(t,e?l:o),K(t,e?h:c),B(r)||Y(t,i,g,s)}))};return(0,r.l7)(t,{onBeforeEnter(e){j(y,[e]),K(e,o),K(e,a)},onBeforeAppear(e){j(I,[e]),K(e,l),K(e,u)},onEnter:C(!1),onAppear:C(!0),onLeave(e,t){const n=()=>x(e,t);K(e,d),ee(),K(e,f),W((()=>{G(e,d),K(e,p),B(_)||Y(e,i,v,n)})),j(_,[e,n])},onEnterCancelled(e){k(e,!1),j(b,[e])},onAppearCancelled(e){k(e,!0),j(S,[e])},onLeaveCancelled(e){x(e),j(T,[e])}})}function z(e){if(null==e)return null;if((0,r.Kn)(e))return[H(e.enter),H(e.leave)];{const t=H(e);return[t,t]}}function H(e){const t=(0,r.He)(e);return t}function K(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e._vtc||(e._vtc=new Set)).add(t)}function G(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function W(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let J=0;function Y(e,t,n,r){const i=e._endId=++J,s=()=>{i===e._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=Q(e,t);if(!o)return r();const l=o+"end";let u=0;const h=()=>{e.removeEventListener(l,d),s()},d=t=>{t.target===e&&++u>=c&&h()};setTimeout((()=>{u<c&&h()}),a+1),e.addEventListener(l,d)}function Q(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),i=r(F+"Delay"),s=r(F+"Duration"),o=Z(i,s),a=r(M+"Delay"),c=r(M+"Duration"),l=Z(a,c);let u=null,h=0,d=0;t===F?o>0&&(u=F,h=o,d=s.length):t===M?l>0&&(u=M,h=l,d=c.length):(h=Math.max(o,l),u=h>0?o>l?F:M:null,d=u?u===F?s.length:c.length:0);const f=u===F&&/\b(transform|all)(,|$)/.test(n[F+"Property"]);return{type:u,timeout:h,propCount:d,hasTransform:f}}function Z(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map(((t,n)=>X(t)+X(e[n]))))}function X(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function ee(){return document.body.offsetHeight}const te=new WeakMap,ne=new WeakMap,re={name:"TransitionGroup",props:(0,r.l7)({},V,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=(0,i.FN)(),r=(0,i.Y8)();let o,a;return(0,i.ic)((()=>{if(!o.length)return;const t=e.moveClass||`${e.name||"v"}-move`;if(!ce(o[0].el,n.vnode.el,t))return;o.forEach(se),o.forEach(oe);const r=o.filter(ae);ee(),r.forEach((e=>{const n=e.el,r=n.style;K(n,t),r.transform=r.webkitTransform=r.transitionDuration="";const i=n._moveCb=e=>{e&&e.target!==n||e&&!/transform$/.test(e.propertyName)||(n.removeEventListener("transitionend",i),n._moveCb=null,G(n,t))};n.addEventListener("transitionend",i)}))})),()=>{const c=(0,s.IU)(e),l=$(c);let u=c.tag||i.HY;o=a,a=t.default?(0,i.Q6)(t.default()):[];for(let e=0;e<a.length;e++){const t=a[e];null!=t.key&&(0,i.nK)(t,(0,i.U2)(t,l,r,n))}if(o)for(let e=0;e<o.length;e++){const t=o[e];(0,i.nK)(t,(0,i.U2)(t,l,r,n)),te.set(t,t.el.getBoundingClientRect())}return(0,i.Wm)(u,null,a)}}},ie=re;function se(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function oe(e){ne.set(e,e.el.getBoundingClientRect())}function ae(e){const t=te.get(e),n=ne.get(e),r=t.left-n.left,i=t.top-n.top;if(r||i){const t=e.el.style;return t.transform=t.webkitTransform=`translate(${r}px,${i}px)`,t.transitionDuration="0s",e}}function ce(e,t,n){const r=e.cloneNode();e._vtc&&e._vtc.forEach((e=>{e.split(/\s+/).forEach((e=>e&&r.classList.remove(e)))})),n.split(/\s+/).forEach((e=>e&&r.classList.add(e))),r.style.display="none";const i=1===t.nodeType?t:t.parentNode;i.appendChild(r);const{hasTransform:s}=Q(r);return i.removeChild(r),s}const le=["ctrl","shift","alt","meta"],ue={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>le.some((n=>e[`${n}Key`]&&!t.includes(n)))},he=(e,t)=>(n,...r)=>{for(let e=0;e<t.length;e++){const r=ue[t[e]];if(r&&r(n,t))return}return e(n,...r)},de={beforeMount(e,{value:t},{transition:n}){e._vod="none"===e.style.display?"":e.style.display,n&&t?n.beforeEnter(e):fe(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!==!n&&(r?t?(r.beforeEnter(e),fe(e,!0),r.enter(e)):r.leave(e,(()=>{fe(e,!1)})):fe(e,t))},beforeUnmount(e,{value:t}){fe(e,t)}};function fe(e,t){e.style.display=t?e._vod:"none"}const pe=(0,r.l7)({patchProp:L},l);let me;function ge(){return me||(me=(0,i.Us)(pe))}const ve=(...e)=>{const t=ge().createApp(...e);const{mount:n}=t;return t.mount=e=>{const i=ye(e);if(!i)return;const s=t._component;(0,r.mf)(s)||s.render||s.template||(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function ye(e){if((0,r.HD)(e)){const t=document.querySelector(e);return t}return e}},2323:(e,t,n)=>{"use strict";function r(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}n.d(t,{Z6:()=>y,kT:()=>v,NO:()=>b,dG:()=>w,_A:()=>H,kC:()=>W,Nj:()=>Z,l7:()=>E,aU:()=>Y,RI:()=>x,rs:()=>G,yA:()=>c,ir:()=>Q,kJ:()=>C,mf:()=>O,e1:()=>s,S0:()=>j,_N:()=>A,tR:()=>I,Kn:()=>D,F7:()=>T,PO:()=>V,tI:()=>F,Gg:()=>B,DM:()=>N,Pq:()=>a,HD:()=>P,yk:()=>L,WV:()=>m,hq:()=>g,fY:()=>r,C_:()=>f,j5:()=>l,Od:()=>S,hR:()=>J,He:()=>X,W7:()=>U});const i="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",s=r(i);const o="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a=r(o);function c(e){return!!e||""===e}function l(e){if(C(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=P(r)?d(r):l(r);if(i)for(const e in i)t[e]=i[e]}return t}return P(e)||D(e)?e:void 0}const u=/;(?![^(]*\))/g,h=/:(.+)/;function d(e){const t={};return e.split(u).forEach((e=>{if(e){const n=e.split(h);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function f(e){let t="";if(P(e))t=e;else if(C(e))for(let n=0;n<e.length;n++){const r=f(e[n]);r&&(t+=r+" ")}else if(D(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function p(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=m(e[r],t[r]);return n}function m(e,t){if(e===t)return!0;let n=R(e),r=R(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=C(e),r=C(t),n||r)return!(!n||!r)&&p(e,t);if(n=D(e),r=D(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,s=Object.keys(t).length;if(i!==s)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!m(e[n],t[n]))return!1}}return String(e)===String(t)}function g(e,t){return e.findIndex((e=>m(e,t)))}const v={},y=[],w=()=>{},b=()=>!1,_=/^on[^a-z]/,T=e=>_.test(e),I=e=>e.startsWith("onUpdate:"),E=Object.assign,S=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},k=Object.prototype.hasOwnProperty,x=(e,t)=>k.call(e,t),C=Array.isArray,A=e=>"[object Map]"===q(e),N=e=>"[object Set]"===q(e),R=e=>e instanceof Date,O=e=>"function"===typeof e,P=e=>"string"===typeof e,L=e=>"symbol"===typeof e,D=e=>null!==e&&"object"===typeof e,F=e=>D(e)&&O(e.then)&&O(e.catch),M=Object.prototype.toString,q=e=>M.call(e),U=e=>q(e).slice(8,-1),V=e=>"[object Object]"===q(e),j=e=>P(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,B=r(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),$=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},z=/-(\w)/g,H=$((e=>e.replace(z,((e,t)=>t?t.toUpperCase():"")))),K=/\B([A-Z])/g,G=$((e=>e.replace(K,"-$1").toLowerCase())),W=$((e=>e.charAt(0).toUpperCase()+e.slice(1))),J=$((e=>e?`on${W(e)}`:"")),Y=(e,t)=>!Object.is(e,t),Q=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Z=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},X=e=>{const t=parseFloat(e);return isNaN(t)?e:t}},52:(e,t,n)=>{e.exports=n(7974)},8699:(e,t,n)=>{"use strict";var r=n(7210),i=n(4923),s=n(3634),o=n(7696),a=n(9835),c=n(3423),l=n(8365),u=n(701);e.exports=function(e){return new Promise((function(t,n){var h=e.data,d=e.headers,f=e.responseType;r.isFormData(h)&&delete d["Content-Type"];var p=new XMLHttpRequest;if(e.auth){var m=e.auth.username||"",g=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";d.Authorization="Basic "+btoa(m+":"+g)}var v=a(e.baseURL,e.url);function y(){if(p){var r="getAllResponseHeaders"in p?c(p.getAllResponseHeaders()):null,s=f&&"text"!==f&&"json"!==f?p.response:p.responseText,o={data:s,status:p.status,statusText:p.statusText,headers:r,config:e,request:p};i(t,n,o),p=null}}if(p.open(e.method.toUpperCase(),o(v,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,"onloadend"in p?p.onloadend=y:p.onreadystatechange=function(){p&&4===p.readyState&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))&&setTimeout(y)},p.onabort=function(){p&&(n(u("Request aborted",e,"ECONNABORTED",p)),p=null)},p.onerror=function(){n(u("Network Error",e,null,p)),p=null},p.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(u(t,e,e.transitional&&e.transitional.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",p)),p=null},r.isStandardBrowserEnv()){var w=(e.withCredentials||l(v))&&e.xsrfCookieName?s.read(e.xsrfCookieName):void 0;w&&(d[e.xsrfHeaderName]=w)}"setRequestHeader"in p&&r.forEach(d,(function(e,t){"undefined"===typeof h&&"content-type"===t.toLowerCase()?delete d[t]:p.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(p.withCredentials=!!e.withCredentials),f&&"json"!==f&&(p.responseType=e.responseType),"function"===typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"===typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){p&&(p.abort(),n(e),p=null)})),h||(h=null),p.send(h)}))}},7974:(e,t,n)=>{"use strict";var r=n(7210),i=n(2938),s=n(8799),o=n(4495),a=n(7079);function c(e){var t=new s(e),n=i(s.prototype.request,t);return r.extend(n,s.prototype,t),r.extend(n,t),n}var l=c(a);l.Axios=s,l.create=function(e){return c(o(l.defaults,e))},l.Cancel=n(6678),l.CancelToken=n(8858),l.isCancel=n(6029),l.all=function(e){return Promise.all(e)},l.spread=n(5178),l.isAxiosError=n(5615),e.exports=l,e.exports["default"]=l},6678:e=>{"use strict";function t(e){this.message=e}t.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},t.prototype.__CANCEL__=!0,e.exports=t},8858:(e,t,n)=>{"use strict";var r=n(6678);function i(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}i.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},i.source=function(){var e,t=new i((function(t){e=t}));return{token:t,cancel:e}},e.exports=i},6029:e=>{"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},8799:(e,t,n)=>{"use strict";var r=n(7210),i=n(7696),s=n(2591),o=n(516),a=n(4495),c=n(3170),l=c.validators;function u(e){this.defaults=e,this.interceptors={request:new s,response:new s}}u.prototype.request=function(e){"string"===typeof e?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},e=a(this.defaults,e),e.method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=e.transitional;void 0!==t&&c.assertOptions(t,{silentJSONParsing:l.transitional(l.boolean,"1.0.0"),forcedJSONParsing:l.transitional(l.boolean,"1.0.0"),clarifyTimeoutError:l.transitional(l.boolean,"1.0.0")},!1);var n=[],r=!0;this.interceptors.request.forEach((function(t){"function"===typeof t.runWhen&&!1===t.runWhen(e)||(r=r&&t.synchronous,n.unshift(t.fulfilled,t.rejected))}));var i,s=[];if(this.interceptors.response.forEach((function(e){s.push(e.fulfilled,e.rejected)})),!r){var u=[o,void 0];Array.prototype.unshift.apply(u,n),u=u.concat(s),i=Promise.resolve(e);while(u.length)i=i.then(u.shift(),u.shift());return i}var h=e;while(n.length){var d=n.shift(),f=n.shift();try{h=d(h)}catch(p){f(p);break}}try{i=o(h)}catch(p){return Promise.reject(p)}while(s.length)i=i.then(s.shift(),s.shift());return i},u.prototype.getUri=function(e){return e=a(this.defaults,e),i(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){u.prototype[e]=function(t,n){return this.request(a(n||{},{method:e,url:t,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(e){u.prototype[e]=function(t,n,r){return this.request(a(r||{},{method:e,url:t,data:n}))}})),e.exports=u},2591:(e,t,n)=>{"use strict";var r=n(7210);function i(){this.handlers=[]}i.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},i.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},i.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=i},9835:(e,t,n)=>{"use strict";var r=n(8380),i=n(6092);e.exports=function(e,t){return e&&!r(t)?i(e,t):t}},701:(e,t,n)=>{"use strict";var r=n(654);e.exports=function(e,t,n,i,s){var o=new Error(e);return r(o,t,n,i,s)}},516:(e,t,n)=>{"use strict";var r=n(7210),i=n(4330),s=n(6029),o=n(7079);function a(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){a(e),e.headers=e.headers||{},e.data=i.call(e,e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]}));var t=e.adapter||o.adapter;return t(e).then((function(t){return a(e),t.data=i.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return s(t)||(a(e),t&&t.response&&(t.response.data=i.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},654:e=>{"use strict";e.exports=function(e,t,n,r,i){return e.config=t,n&&(e.code=n),e.request=r,e.response=i,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},4495:(e,t,n)=>{"use strict";var r=n(7210);e.exports=function(e,t){t=t||{};var n={},i=["url","method","data"],s=["headers","auth","proxy","params"],o=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],a=["validateStatus"];function c(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function l(i){r.isUndefined(t[i])?r.isUndefined(e[i])||(n[i]=c(void 0,e[i])):n[i]=c(e[i],t[i])}r.forEach(i,(function(e){r.isUndefined(t[e])||(n[e]=c(void 0,t[e]))})),r.forEach(s,l),r.forEach(o,(function(i){r.isUndefined(t[i])?r.isUndefined(e[i])||(n[i]=c(void 0,e[i])):n[i]=c(void 0,t[i])})),r.forEach(a,(function(r){r in t?n[r]=c(e[r],t[r]):r in e&&(n[r]=c(void 0,e[r]))}));var u=i.concat(s).concat(o).concat(a),h=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===u.indexOf(e)}));return r.forEach(h,l),n}},4923:(e,t,n)=>{"use strict";var r=n(701);e.exports=function(e,t,n){var i=n.config.validateStatus;n.status&&i&&!i(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},4330:(e,t,n)=>{"use strict";var r=n(7210),i=n(7079);e.exports=function(e,t,n){var s=this||i;return r.forEach(n,(function(n){e=n.call(s,e,t)})),e}},7079:(e,t,n)=>{"use strict";var r=n(7210),i=n(4733),s=n(654),o={"Content-Type":"application/x-www-form-urlencoded"};function a(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function c(){var e;return("undefined"!==typeof XMLHttpRequest||"undefined"!==typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(e=n(8699)),e}function l(e,t,n){if(r.isString(e))try{return(t||JSON.parse)(e),r.trim(e)}catch(i){if("SyntaxError"!==i.name)throw i}return(n||JSON.stringify)(e)}var u={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:c(),transformRequest:[function(e,t){return i(t,"Accept"),i(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(a(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)||t&&"application/json"===t["Content-Type"]?(a(t,"application/json"),l(e)):e}],transformResponse:[function(e){var t=this.transitional,n=t&&t.silentJSONParsing,i=t&&t.forcedJSONParsing,o=!n&&"json"===this.responseType;if(o||i&&r.isString(e)&&e.length)try{return JSON.parse(e)}catch(a){if(o){if("SyntaxError"===a.name)throw s(a,this,"E_JSON_PARSE");throw a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(e){u.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){u.headers[e]=r.merge(o)})),e.exports=u},2938:e=>{"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},7696:(e,t,n)=>{"use strict";var r=n(7210);function i(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var s;if(n)s=n(t);else if(r.isURLSearchParams(t))s=t.toString();else{var o=[];r.forEach(t,(function(e,t){null!==e&&"undefined"!==typeof e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),o.push(i(t)+"="+i(e))})))})),s=o.join("&")}if(s){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}},6092:e=>{"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},3634:(e,t,n)=>{"use strict";var r=n(7210);e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,n,i,s,o){var a=[];a.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(i)&&a.push("path="+i),r.isString(s)&&a.push("domain="+s),!0===o&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},8380:e=>{"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},5615:e=>{"use strict";e.exports=function(e){return"object"===typeof e&&!0===e.isAxiosError}},8365:(e,t,n)=>{"use strict";var r=n(7210);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function i(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=i(window.location.href),function(t){var n=r.isString(t)?i(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return function(){return!0}}()},4733:(e,t,n)=>{"use strict";var r=n(7210);e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},3423:(e,t,n)=>{"use strict";var r=n(7210),i=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,s,o={};return e?(r.forEach(e.split("\n"),(function(e){if(s=e.indexOf(":"),t=r.trim(e.substr(0,s)).toLowerCase(),n=r.trim(e.substr(s+1)),t){if(o[t]&&i.indexOf(t)>=0)return;o[t]="set-cookie"===t?(o[t]?o[t]:[]).concat([n]):o[t]?o[t]+", "+n:n}})),o):o}},5178:e=>{"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},3170:(e,t,n)=>{"use strict";var r=n(8593),i={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){i[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));var s={},o=r.version.split(".");function a(e,t){for(var n=t?t.split("."):o,r=e.split("."),i=0;i<3;i++){if(n[i]>r[i])return!0;if(n[i]<r[i])return!1}return!1}function c(e,t,n){if("object"!==typeof e)throw new TypeError("options must be an object");var r=Object.keys(e),i=r.length;while(i-- >0){var s=r[i],o=t[s];if(o){var a=e[s],c=void 0===a||o(a,s,e);if(!0!==c)throw new TypeError("option "+s+" must be "+c)}else if(!0!==n)throw Error("Unknown option "+s)}}i.transitional=function(e,t,n){var i=t&&a(t);function o(e,t){return"[Axios v"+r.version+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return function(n,r,a){if(!1===e)throw new Error(o(r," has been removed in "+t));return i&&!s[r]&&(s[r]=!0,console.warn(o(r," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,r,a)}},e.exports={isOlderVersion:a,assertOptions:c,validators:i}},7210:(e,t,n)=>{"use strict";var r=n(2938),i=Object.prototype.toString;function s(e){return"[object Array]"===i.call(e)}function o(e){return"undefined"===typeof e}function a(e){return null!==e&&!o(e)&&null!==e.constructor&&!o(e.constructor)&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function c(e){return"[object ArrayBuffer]"===i.call(e)}function l(e){return"undefined"!==typeof FormData&&e instanceof FormData}function u(e){var t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer,t}function h(e){return"string"===typeof e}function d(e){return"number"===typeof e}function f(e){return null!==e&&"object"===typeof e}function p(e){if("[object Object]"!==i.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function m(e){return"[object Date]"===i.call(e)}function g(e){return"[object File]"===i.call(e)}function v(e){return"[object Blob]"===i.call(e)}function y(e){return"[object Function]"===i.call(e)}function w(e){return f(e)&&y(e.pipe)}function b(e){return"undefined"!==typeof URLSearchParams&&e instanceof URLSearchParams}function _(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function T(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function I(e,t){if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),s(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}function E(){var e={};function t(t,n){p(e[n])&&p(t)?e[n]=E(e[n],t):p(t)?e[n]=E({},t):s(t)?e[n]=t.slice():e[n]=t}for(var n=0,r=arguments.length;n<r;n++)I(arguments[n],t);return e}function S(e,t,n){return I(t,(function(t,i){e[i]=n&&"function"===typeof t?r(t,n):t})),e}function k(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}e.exports={isArray:s,isArrayBuffer:c,isBuffer:a,isFormData:l,isArrayBufferView:u,isString:h,isNumber:d,isObject:f,isPlainObject:p,isUndefined:o,isDate:m,isFile:g,isBlob:v,isFunction:y,isStream:w,isURLSearchParams:b,isStandardBrowserEnv:T,forEach:I,merge:E,extend:S,trim:_,stripBOM:k}},4607:(e,t,n)=>{"use strict";n.d(t,{Z:()=>k});var r=n(3673),i=n(1959),s=n(8880),o=n(4554),a=n(6833),c=n(6489);n(9377);const l={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},u=Object.keys(l),h={align:{type:String,validator:e=>u.includes(e)}};function d(e){return(0,i.Fl)((()=>{const t=void 0===e.align?!0===e.vertical?"stretch":"left":e.align;return`${!0===e.vertical?"items":"justify"}-${l[t]}`}))}var f=n(2417),p=n(7277);const m={none:0,xs:4,sm:8,md:16,lg:24,xl:32},g={xs:8,sm:10,md:14,lg:20,xl:24},v={...f.LU,...p.$,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,round:Boolean,outline:Boolean,flat:Boolean,unelevated:Boolean,rounded:Boolean,push:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...h.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean};function y(e){const t=(0,f.ZP)(e,g),n=d(e),{hasLink:r,linkProps:s,navigateToLink:o}=(0,p.Z)(),a=(0,i.Fl)((()=>{const n=!1===e.fab&&!1===e.fabMini?t.value:{};return void 0!==e.padding?Object.assign({},n,{padding:e.padding.split(/\s+/).map((e=>e in m?m[e]+"px":e)).join(" "),minWidth:"0",minHeight:"0"}):n})),c=(0,i.Fl)((()=>!0===e.rounded||!0===e.fab||!0===e.fabMini)),l=(0,i.Fl)((()=>!0!==e.disable&&!0!==e.loading)),u=(0,i.Fl)((()=>!0===l.value?e.tabindex||0:-1)),h=(0,i.Fl)((()=>"a"===e.type||!0===r.value)),v=(0,i.Fl)((()=>!0===e.flat?"flat":!0===e.outline?"outline":!0===e.push?"push":!0===e.unelevated?"unelevated":"standard")),y=(0,i.Fl)((()=>{const t={tabindex:u.value};return"a"!==e.type&&(t.type=e.type),!0===r.value?Object.assign(t,s.value):t.role="a"===e.type?"link":"button",!0===e.loading&&void 0!==e.percentage&&Object.assign(t,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),!0===e.disable&&(t.disabled="",t["aria-disabled"]="true"),t})),w=(0,i.Fl)((()=>{let t;return void 0!==e.color?t=!0===e.flat||!0===e.outline?`text-${e.textColor||e.color}`:`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(t=`text-${e.textColor}`),`q-btn--${v.value} q-btn--`+(!0===e.round?"round":"rectangle"+(!0===c.value?" q-btn--rounded":""))+(void 0!==t?" "+t:"")+(!0===l.value?" q-btn--actionable q-focusable q-hoverable":!0===e.disable?" disabled":"")+(!0===e.fab?" q-btn--fab":!0===e.fabMini?" q-btn--fab-mini":"")+(!0===e.noCaps?" q-btn--no-uppercase":"")+(!0===e.dense?" q-btn--dense":"")+(!0===e.stretch?" no-border-radius self-stretch":"")+(!0===e.glossy?" glossy":"")})),b=(0,i.Fl)((()=>n.value+(!0===e.stack?" column":" row")+(!0===e.noWrap?" no-wrap text-no-wrap":"")+(!0===e.loading?" q-btn__content--hidden":"")));return{classes:w,style:a,innerClasses:b,attributes:y,hasLink:r,isLink:h,navigateToLink:o,isActionable:l}}var w=n(7657),b=n(4716),_=n(1436);const{passiveCapture:T}=b.rU;let I=null,E=null,S=null;const k=(0,r.aZ)({name:"QBtn",props:{...v,percentage:Number,darkPercentage:Boolean},emits:["click","keydown","touchstart","mousedown","keyup"],setup(e,{slots:t,emit:n}){const{proxy:l}=(0,r.FN)(),{classes:u,style:h,innerClasses:d,attributes:f,hasLink:p,isLink:m,navigateToLink:g,isActionable:v}=y(e),k=(0,i.iH)(null),x=(0,i.iH)(null);let C,A,N=null;const R=(0,i.Fl)((()=>void 0!==e.label&&null!==e.label&&""!==e.label)),O=(0,i.Fl)((()=>!1!==e.ripple&&{keyCodes:!0===m.value?[13,32]:[13],...!0===e.ripple?{}:e.ripple})),P=(0,i.Fl)((()=>{const t=Math.max(0,Math.min(100,e.percentage));return t>0?{transition:"transform 0.6s",transform:`translateX(${t-100}%)`}:{}})),L=(0,i.Fl)((()=>!0===e.loading?{onMousedown:$,onTouchstartPassive:$,onClick:$,onKeydown:$,onKeyup:$}:!0===v.value?{onClick:M,onKeydown:q,onMousedown:V,onTouchstartPassive:U}:{onClick:b.NS})),D=(0,i.Fl)((()=>[[c.Z,O.value,void 0,{center:e.round}]])),F=(0,i.Fl)((()=>({ref:k,class:"q-btn q-btn-item non-selectable no-outline "+u.value,style:h.value,...f.value,...L.value})));function M(t){if(void 0!==t){if(!0===t.defaultPrevented)return;const n=document.activeElement;if("submit"===e.type&&n!==document.body&&!1===k.value.contains(n)&&!1===n.contains(k.value)){k.value.focus();const e=()=>{document.removeEventListener("keydown",b.NS,!0),document.removeEventListener("keyup",e,T),null!==k.value&&k.value.removeEventListener("blur",e,T)};document.addEventListener("keydown",b.NS,!0),document.addEventListener("keyup",e,T),k.value.addEventListener("blur",e,T)}}if(!0===p.value){const e=()=>{t.__qNavigate=!0,g(t)};n("click",t,e),!0!==t.defaultPrevented&&e()}else n("click",t)}function q(e){!0===(0,_.So)(e,[13,32])&&((0,b.NS)(e),E!==k.value&&(null!==E&&B(),k.value.focus(),E=k.value,k.value.classList.add("q-btn--active"),document.addEventListener("keyup",j,!0),k.value.addEventListener("blur",j,T))),n("keydown",e)}function U(e){I!==k.value&&(null!==I&&B(),I=k.value,N=e.target,N.addEventListener("touchcancel",j,T),N.addEventListener("touchend",j,T)),C=!0,clearTimeout(A),A=setTimeout((()=>{C=!1}),200),n("touchstart",e)}function V(e){S!==k.value&&(null!==S&&B(),S=k.value,k.value.classList.add("q-btn--active"),document.addEventListener("mouseup",j,T)),e.qSkipRipple=!0===C,n("mousedown",e)}function j(e){if(void 0===e||"blur"!==e.type||document.activeElement!==k.value){if(void 0!==e&&"keyup"===e.type){if(E===k.value&&!0===(0,_.So)(e,[13,32])){const t=new MouseEvent("click",e);t.qKeyEvent=!0,!0===e.defaultPrevented&&(0,b.X$)(t),!0===e.cancelBubble&&(0,b.sT)(t),k.value.dispatchEvent(t),(0,b.NS)(e),e.qKeyEvent=!0}n("keyup",e)}B()}}function B(e){const t=x.value;!0===e||I!==k.value&&S!==k.value||null===t||t===document.activeElement||(t.setAttribute("tabindex",-1),t.focus()),I===k.value&&(null!==N&&(N.removeEventListener("touchcancel",j,T),N.removeEventListener("touchend",j,T)),I=N=null),S===k.value&&(document.removeEventListener("mouseup",j,T),S=null),E===k.value&&(document.removeEventListener("keyup",j,!0),null!==k.value&&k.value.removeEventListener("blur",j,T),E=null),null!==k.value&&k.value.classList.remove("q-btn--active")}function $(e){e.qSkipRipple=!0}return(0,r.Jd)((()=>{B(!0)})),Object.assign(l,{click:M}),()=>{let n=[];void 0!==e.icon&&n.push((0,r.h)(o.Z,{name:e.icon,left:!1===e.stack&&!0===R.value,role:"img","aria-hidden":"true"})),!0===R.value&&n.push((0,r.h)("span",{class:"block"},[e.label])),n=(0,w.vs)(t.default,n),void 0!==e.iconRight&&!1===e.round&&n.push((0,r.h)(o.Z,{name:e.iconRight,right:!1===e.stack&&!0===R.value,role:"img","aria-hidden":"true"}));const i=[(0,r.h)("span",{class:"q-focus-helper",ref:x})];return!0===e.loading&&void 0!==e.percentage&&i.push((0,r.h)("span",{class:"q-btn__progress absolute-full overflow-hidden"},[(0,r.h)("span",{class:"q-btn__progress-indicator fit block"+(!0===e.darkPercentage?" q-btn__progress--dark":""),style:P.value})])),i.push((0,r.h)("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+d.value},n)),null!==e.loading&&i.push((0,r.h)(s.uT,{name:"q-transition--fade"},(()=>!0===e.loading?[(0,r.h)("span",{key:"loading",class:"absolute-full flex flex-center"},void 0!==t.loading?t.loading():[(0,r.h)(a.Z)])]:null))),(0,w.Jl)(!0===m.value?"a":"button",F.value,i,"ripple",!0!==e.disable&&!1!==e.ripple,(()=>D.value))}}})},3499:(e,t,n)=>{"use strict";n.d(t,{Z:()=>A});n(71);var r=n(3673),i=n(1959),s=n(6583);function o(e,t,n){let i;function o(){void 0!==i&&(s.Z.remove(i),i=void 0)}return(0,r.Jd)((()=>{!0===e.value&&o()})),{removeFromHistory:o,addToHistory(){i={condition:()=>!0===n.value,handler:t},s.Z.add(i)}}}var a=n(7445);const c={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":Function},l=["before-show","show","before-hide","hide"];function u({showing:e,canShow:t,hideOnRouteChange:n,handleShow:i,handleHide:s,processOnMount:o}){const c=(0,r.FN)(),{props:l,emit:u,proxy:h}=c;let d;function f(t){!0===e.value?g(t):p(t)}function p(e){if(!0===l.disable||void 0!==t&&!0!==t(e))return;const n=void 0!==l["onUpdate:modelValue"];!0===n&&(u("update:modelValue",!0),d=e,(0,r.Y3)((()=>{d===e&&(d=void 0)}))),null!==l.modelValue&&!1!==n||m(e)}function m(t){!0!==e.value&&(e.value=!0,u("before-show",t),void 0!==i?i(t):u("show",t))}function g(e){if(!0===l.disable)return;const t=void 0!==l["onUpdate:modelValue"];!0===t&&(u("update:modelValue",!1),d=e,(0,r.Y3)((()=>{d===e&&(d=void 0)}))),null!==l.modelValue&&!1!==t||v(e)}function v(t){!1!==e.value&&(e.value=!1,u("before-hide",t),void 0!==s?s(t):u("hide",t))}function y(t){if(!0===l.disable&&!0===t)void 0!==l["onUpdate:modelValue"]&&u("update:modelValue",!1);else if(!0===t!==e.value){const e=!0===t?m:v;e(d)}}(0,r.YP)((()=>l.modelValue),y),void 0!==n&&!0===(0,a.Rb)(c)&&(0,r.YP)((()=>h.$route),(()=>{!0===n.value&&!0===e.value&&g()})),!0===o&&(0,r.bv)((()=>{y(l.modelValue)}));const w={show:p,hide:g,toggle:f};return Object.assign(h,w),w}var h=n(490);function d(){let e;return{preventBodyScroll(t){t===e||void 0===e&&!0!==t||(e=t,(0,h.Z)(t))}}}function f(){let e;return(0,r.Jd)((()=>{clearTimeout(e)})),{registerTimeout(t,n){clearTimeout(e),e=setTimeout(t,n)},removeTimeout(){clearTimeout(e)}}}var p=n(2236),m=n(4688);const g={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},v=Object.keys(g);function y(e){const t={};for(const n of v)!0===e[n]&&(t[n]=!0);return 0===Object.keys(t).length?g:(!0===t.horizontal?t.left=t.right=!0:!0===t.left&&!0===t.right&&(t.horizontal=!0),!0===t.vertical?t.up=t.down=!0:!0===t.up&&!0===t.down&&(t.vertical=!0),!0===t.horizontal&&!0===t.vertical&&(t.all=!0),t)}function w(e,t){return void 0===t.event&&void 0!==e.target&&!0!==e.target.draggable&&"function"===typeof t.handler&&"INPUT"!==e.target.nodeName.toUpperCase()&&(void 0===e.qClonedBy||-1===e.qClonedBy.indexOf(t.uid))}g.all=!0;var b=n(4716);function _(){if(void 0!==window.getSelection){const e=window.getSelection();void 0!==e.empty?e.empty():void 0!==e.removeAllRanges&&(e.removeAllRanges(),!0!==m.ZP.is.mobile&&e.addRange(document.createRange()))}else void 0!==document.selection&&document.selection.empty()}function T(e,t,n){const r=(0,b.FK)(e);let i,s=r.left-t.event.x,o=r.top-t.event.y,a=Math.abs(s),c=Math.abs(o);const l=t.direction;!0===l.horizontal&&!0!==l.vertical?i=s<0?"left":"right":!0!==l.horizontal&&!0===l.vertical?i=o<0?"up":"down":!0===l.up&&o<0?(i="up",a>c&&(!0===l.left&&s<0?i="left":!0===l.right&&s>0&&(i="right"))):!0===l.down&&o>0?(i="down",a>c&&(!0===l.left&&s<0?i="left":!0===l.right&&s>0&&(i="right"))):!0===l.left&&s<0?(i="left",a<c&&(!0===l.up&&o<0?i="up":!0===l.down&&o>0&&(i="down"))):!0===l.right&&s>0&&(i="right",a<c&&(!0===l.up&&o<0?i="up":!0===l.down&&o>0&&(i="down")));let u=!1;if(void 0===i&&!1===n){if(!0===t.event.isFirst||void 0===t.event.lastDir)return{};i=t.event.lastDir,u=!0,"left"===i||"right"===i?(r.left-=s,a=0,s=0):(r.top-=o,c=0,o=0)}return{synthetic:u,payload:{evt:e,touch:!0!==t.event.mouse,mouse:!0===t.event.mouse,position:r,direction:i,isFirst:t.event.isFirst,isFinal:!0===n,duration:Date.now()-t.event.time,distance:{x:a,y:c},offset:{x:s,y:o},delta:{x:r.left-t.event.lastX,y:r.top-t.event.lastY}}}}let I=0;const E={name:"touch-pan",beforeMount(e,{value:t,modifiers:n}){if(!0!==n.mouse&&!0!==m.Lp.has.touch)return;function r(e,t){!0===n.mouse&&!0===t?(0,b.NS)(e):(!0===n.stop&&(0,b.sT)(e),!0===n.prevent&&(0,b.X$)(e))}const i={uid:"qvtp_"+I++,handler:t,modifiers:n,direction:y(n),noop:b.ZT,mouseStart(e){w(e,i)&&(0,b.du)(e)&&((0,b.M0)(i,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),i.start(e,!0))},touchStart(e){if(w(e,i)){const t=e.target;(0,b.M0)(i,"temp",[[t,"touchmove","move","notPassiveCapture"],[t,"touchcancel","end","passiveCapture"],[t,"touchend","end","passiveCapture"]]),i.start(e)}},start(t,r){!0===m.Lp.is.firefox&&(0,b.Jf)(e,!0),i.lastEvt=t;const s=(0,b.FK)(t);if(!0===r||!0===n.stop){if(!0!==i.direction.all&&(!0!==r||!0!==i.direction.mouseAllDir)){const e=t.type.indexOf("mouse")>-1?new MouseEvent(t.type,t):new TouchEvent(t.type,t);!0===t.defaultPrevented&&(0,b.X$)(e),!0===t.cancelBubble&&(0,b.sT)(e),e.qClonedBy=void 0===t.qClonedBy?[i.uid]:t.qClonedBy.concat(i.uid),e.qKeyEvent=t.qKeyEvent,e.qClickOutside=t.qClickOutside,i.initialEvent={target:t.target,event:e}}(0,b.sT)(t)}i.event={x:s.left,y:s.top,time:Date.now(),mouse:!0===r,detected:!1,isFirst:!0,isFinal:!1,lastX:s.left,lastY:s.top}},move(e){if(void 0===i.event)return;i.lastEvt=e;const t=!0===i.event.mouse,s=()=>{r(e,t),!0!==n.preserveCursor&&(document.documentElement.style.cursor="grabbing"),!0===t&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),_(),i.styleCleanup=e=>{if(i.styleCleanup=void 0,!0!==n.preserveCursor&&(document.documentElement.style.cursor=""),document.body.classList.remove("non-selectable"),!0===t){const t=()=>{document.body.classList.remove("no-pointer-events--children")};void 0!==e?setTimeout((()=>{t(),e()}),50):t()}else void 0!==e&&e()}};if(!0===i.event.detected){!0!==i.event.isFirst&&r(e,i.event.mouse);const{payload:t,synthetic:n}=T(e,i,!1);return void(void 0!==t&&(!1===i.handler(t)?i.end(e):(void 0===i.styleCleanup&&!0===i.event.isFirst&&s(),i.event.lastX=t.position.left,i.event.lastY=t.position.top,i.event.lastDir=!0===n?void 0:t.direction,i.event.isFirst=!1)))}if(!0===i.direction.all||!0===t&&!0===i.modifiers.mouseAllDir)return s(),i.event.detected=!0,void i.move(e);const o=(0,b.FK)(e),a=o.left-i.event.x,c=o.top-i.event.y,l=Math.abs(a),u=Math.abs(c);l!==u&&(!0===i.direction.horizontal&&l>u||!0===i.direction.vertical&&l<u||!0===i.direction.up&&l<u&&c<0||!0===i.direction.down&&l<u&&c>0||!0===i.direction.left&&l>u&&a<0||!0===i.direction.right&&l>u&&a>0?(i.event.detected=!0,i.move(e)):i.end(e,!0))},end(t,n){if(void 0!==i.event){if((0,b.ul)(i,"temp"),!0===m.Lp.is.firefox&&(0,b.Jf)(e,!1),!0===n)void 0!==i.styleCleanup&&i.styleCleanup(),!0!==i.event.detected&&void 0!==i.initialEvent&&i.initialEvent.target.dispatchEvent(i.initialEvent.event);else if(!0===i.event.detected){!0===i.event.isFirst&&i.handler(T(void 0===t?i.lastEvt:t,i).payload);const{payload:e}=T(void 0===t?i.lastEvt:t,i,!0),n=()=>{i.handler(e)};void 0!==i.styleCleanup?i.styleCleanup(n):n()}i.event=void 0,i.initialEvent=void 0,i.lastEvt=void 0}}};e.__qtouchpan=i,!0===n.mouse&&(0,b.M0)(i,"main",[[e,"mousedown","mouseStart","passive"+(!0===n.mouseCapture?"Capture":"")]]),!0===m.Lp.has.touch&&(0,b.M0)(i,"main",[[e,"touchstart","touchStart","passive"+(!0===n.capture?"Capture":"")],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,t){const n=e.__qtouchpan;void 0!==n&&(t.oldValue!==t.value&&("function"!==typeof value&&n.end(),n.handler=t.value),n.direction=y(t.modifiers))},beforeUnmount(e){const t=e.__qtouchpan;void 0!==t&&(void 0!==t.event&&t.end(),(0,b.ul)(t,"main"),(0,b.ul)(t,"temp"),!0===m.Lp.is.firefox&&(0,b.Jf)(e,!1),void 0!==t.styleCleanup&&t.styleCleanup(),delete e.__qtouchpan)}};function S(e,t,n){return n<=t?t:Math.min(n,Math.max(t,e))}var k=n(7657),x=n(2547);const C=150,A=(0,r.aZ)({name:"QDrawer",inheritAttrs:!1,props:{...c,...p.S,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...l,"on-layout","mini-state"],setup(e,{slots:t,emit:n,attrs:s}){const a=(0,r.FN)(),{proxy:{$q:c}}=a,l=(0,p.Z)(e,c),{preventBodyScroll:h}=d(),{registerTimeout:m}=f(),g=(0,r.f3)(x.YE,(()=>{console.error("QDrawer needs to be child of QLayout")}));let v,y,w;const b=(0,i.iH)("mobile"===e.behavior||"desktop"!==e.behavior&&g.totalWidth.value<=e.breakpoint),_=(0,i.Fl)((()=>!0===e.mini&&!0!==b.value)),T=(0,i.Fl)((()=>!0===_.value?e.miniWidth:e.width)),I=(0,i.iH)(!0===e.showIfAbove&&!1===b.value||!0===e.modelValue),A=(0,i.Fl)((()=>!0!==e.persistent&&(!0===b.value||!0===G.value)));function N(e,t){if(L(),!1!==e&&g.animate(),se(0),!0===b.value){const e=g.instances[$.value];void 0!==e&&!0===e.belowBreakpoint&&e.hide(!1),ae(1),!0!==g.isContainer.value&&h(!0)}else ae(0),!1!==e&&ce(!1);m((()=>{!1!==e&&ce(!0),!0!==t&&n("show",e)}),C)}function R(e,t){D(),!1!==e&&g.animate(),ae(0),se(q.value*T.value),de(),!0!==t&&m((()=>{n("hide",e)}),C)}const{show:O,hide:P}=u({showing:I,hideOnRouteChange:A,handleShow:N,handleHide:R}),{addToHistory:L,removeFromHistory:D}=o(I,P,A),F={belowBreakpoint:b,hide:P},M=(0,i.Fl)((()=>"right"===e.side)),q=(0,i.Fl)((()=>(!0===c.lang.rtl?-1:1)*(!0===M.value?1:-1))),U=(0,i.iH)(0),V=(0,i.iH)(!1),j=(0,i.iH)(!1),B=(0,i.iH)(T.value*q.value),$=(0,i.Fl)((()=>!0===M.value?"left":"right")),z=(0,i.Fl)((()=>!0===I.value&&!1===b.value&&!1===e.overlay?!0===e.miniToOverlay?e.miniWidth:T.value:0)),H=(0,i.Fl)((()=>!0===e.overlay||!0===e.miniToOverlay||g.view.value.indexOf(M.value?"R":"L")>-1||!0===c.platform.is.ios&&!0===g.isContainer.value)),K=(0,i.Fl)((()=>!1===e.overlay&&!0===I.value&&!1===b.value)),G=(0,i.Fl)((()=>!0===e.overlay&&!0===I.value&&!1===b.value)),W=(0,i.Fl)((()=>"fullscreen q-drawer__backdrop"+(!1===I.value&&!1===V.value?" hidden":""))),J=(0,i.Fl)((()=>({backgroundColor:`rgba(0,0,0,${.4*U.value})`}))),Y=(0,i.Fl)((()=>!0===M.value?"r"===g.rows.value.top[2]:"l"===g.rows.value.top[0])),Q=(0,i.Fl)((()=>!0===M.value?"r"===g.rows.value.bottom[2]:"l"===g.rows.value.bottom[0])),Z=(0,i.Fl)((()=>{const e={};return!0===g.header.space&&!1===Y.value&&(!0===H.value?e.top=`${g.header.offset}px`:!0===g.header.space&&(e.top=`${g.header.size}px`)),!0===g.footer.space&&!1===Q.value&&(!0===H.value?e.bottom=`${g.footer.offset}px`:!0===g.footer.space&&(e.bottom=`${g.footer.size}px`)),e})),X=(0,i.Fl)((()=>{const e={width:`${T.value}px`,transform:`translateX(${B.value}px)`};return!0===b.value?e:Object.assign(e,Z.value)})),ee=(0,i.Fl)((()=>"q-drawer__content fit "+(!0!==g.isContainer.value?"scroll":"overflow-auto"))),te=(0,i.Fl)((()=>`q-drawer q-drawer--${e.side}`+(!0===j.value?" q-drawer--mini-animate":"")+(!0===e.bordered?" q-drawer--bordered":"")+(!0===l.value?" q-drawer--dark q-dark":"")+(!0===V.value?" no-transition":!0===I.value?"":" q-layout--prevent-focus")+(!0===b.value?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":" q-drawer--"+(!0===_.value?"mini":"standard")+(!0===H.value||!0!==K.value?" fixed":"")+(!0===e.overlay||!0===e.miniToOverlay?" q-drawer--on-top":"")+(!0===Y.value?" q-drawer--top-padding":"")))),ne=(0,i.Fl)((()=>{const t=!0===c.lang.rtl?e.side:$.value;return[[E,ue,void 0,{[t]:!0,mouse:!0}]]})),re=(0,i.Fl)((()=>{const t=!0===c.lang.rtl?$.value:e.side;return[[E,he,void 0,{[t]:!0,mouse:!0}]]})),ie=(0,i.Fl)((()=>{const t=!0===c.lang.rtl?$.value:e.side;return[[E,he,void 0,{[t]:!0,mouse:!0,mouseAllDir:!0}]]}));function se(e){void 0===e?(0,r.Y3)((()=>{e=!0===I.value?0:T.value,se(q.value*e)})):(!0!==g.isContainer.value||!0!==M.value||!0!==b.value&&Math.abs(e)!==T.value||(e+=q.value*g.scrollbarWidth.value),B.value=e)}function oe(){pe(b,"mobile"===e.behavior||"desktop"!==e.behavior&&g.totalWidth.value<=e.breakpoint)}function ae(e){U.value=e}function ce(e){const t=!0===e?"remove":!0!==g.isContainer.value?"add":"";""!==t&&document.body.classList[t]("q-body--drawer-toggle")}function le(){clearTimeout(y),a.proxy&&a.proxy.$el&&a.proxy.$el.classList.add("q-drawer--mini-animate"),j.value=!0,y=setTimeout((()=>{j.value=!1}),150)}function ue(e){if(!1!==I.value)return;const t=T.value,n=S(e.distance.x,0,t);if(!0===e.isFinal){const e=n>=Math.min(75,t);return!0===e?O():(g.animate(),ae(0),se(q.value*t)),void(V.value=!1)}se((!0===c.lang.rtl?!0!==M.value:M.value)?Math.max(t-n,0):Math.min(0,n-t)),ae(S(n/t,0,1)),!0===e.isFirst&&(V.value=!0)}function he(t){if(!0!==I.value)return;const n=T.value,r=t.direction===e.side,i=(!0===c.lang.rtl?!0!==r:r)?S(t.distance.x,0,n):0;if(!0===t.isFinal){const e=Math.abs(i)<Math.min(75,n);return!0===e?(g.animate(),ae(1),se(0)):P(),void(V.value=!1)}se(q.value*i),ae(S(1-i/n,0,1)),!0===t.isFirst&&(V.value=!0)}function de(){h(!1),ce(!0)}function fe(t,n){g.update(e.side,t,n)}function pe(e,t){e.value!==t&&(e.value=t)}function me(t,n){fe("size",!0===t?e.miniWidth:n)}return(0,r.YP)(b,(t=>{!0===t?(v=I.value,!0===I.value&&P(!1)):!1===e.overlay&&"mobile"!==e.behavior&&!1!==v&&(!0===I.value?(se(0),ae(0),de()):O(!1))})),(0,r.YP)(g.totalWidth,(t=>{pe(b,"mobile"===e.behavior||"desktop"!==e.behavior&&t<=e.breakpoint)})),(0,r.YP)((()=>e.side),((e,t)=>{g.instances[t]===F&&(g.instances[t]=void 0,g[t].space=!1,g[t].offset=0),g.instances[e]=F,g[e].size=T.value,g[e].space=K.value,g[e].offset=z.value})),(0,r.YP)((()=>e.behavior+e.breakpoint),oe),(0,r.YP)(g.isContainer,(e=>{!0===I.value&&h(!0!==e)})),(0,r.YP)(g.scrollbarWidth,(()=>{se(!0===I.value?0:void 0)})),(0,r.YP)(z,(e=>{fe("offset",e)})),(0,r.YP)(K,(e=>{n("on-layout",e),fe("space",e)})),(0,r.YP)(M,(()=>{se()})),(0,r.YP)(T,(t=>{se(),me(e.miniToOverlay,t)})),(0,r.YP)((()=>e.miniToOverlay),(e=>{me(e,T.value)})),(0,r.YP)((()=>c.lang.rtl),(()=>{se()})),(0,r.YP)((()=>e.mini),(()=>{!0===e.modelValue&&(le(),g.animate())})),(0,r.YP)(_,(e=>{n("mini-state",e)})),g.instances[e.side]=F,me(e.miniToOverlay,T.value),fe("space",K.value),fe("offset",z.value),!0===e.showIfAbove&&!0!==e.modelValue&&!0===I.value&&void 0!==e["onUpdate:modelValue"]&&n("update:modelValue",!0),(0,r.bv)((()=>{n("on-layout",K.value),n("mini-state",_.value),v=!0===e.showIfAbove;const t=()=>{const e=!0===I.value?N:R;e(!1,!0)};0===g.totalWidth.value?w=(0,r.YP)(g.totalWidth,(()=>{w(),w=void 0,!1===I.value&&!0===e.showIfAbove&&!1===b.value?O(!1):t()})):(0,r.Y3)(t)})),(0,r.Jd)((()=>{void 0!==w&&w(),clearTimeout(y),!0===I.value&&de(),g.instances[e.side]===F&&(g.instances[e.side]=void 0,fe("size",0),fe("offset",0),fe("space",!1))})),()=>{const n=[];!0===b.value&&(!1===e.noSwipeOpen&&n.push((0,r.wy)((0,r.h)("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),ne.value)),n.push((0,k.Jl)("div",{ref:"backdrop",class:W.value,style:J.value,"aria-hidden":"true",onClick:P},void 0,"backdrop",!0!==e.noSwipeBackdrop&&!0===I.value,(()=>ie.value))));const i=!0===_.value&&void 0!==t.mini,o=[(0,r.h)("div",{...s,key:""+i,class:[ee.value,s.class]},!0===i?t.mini():(0,k.KR)(t.default))];return!0===e.elevated&&!0===I.value&&o.push((0,r.h)("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),n.push((0,k.Jl)("aside",{ref:"content",class:te.value,style:X.value},o,"contentclose",!0!==e.noSwipeClose&&!0===b.value,(()=>re.value))),(0,r.h)("div",{class:"q-drawer-container"},n)}}})},8689:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});n(71);var r=n(3673),i=n(1959),s=n(4716),o=n(230),a=n(7657),c=n(2547);const l=(0,r.aZ)({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validation-success","validation-error"],setup(e,{slots:t,emit:n}){const l=(0,r.FN)(),u=(0,i.iH)(null);let h=0;const d=[];function f(t){const r=[],i="boolean"===typeof t?t:!0!==e.noErrorFocus;h++;const s=(e,t)=>{n("validation-"+(!0===e?"success":"error"),t)};for(let n=0;n<d.length;n++){const t=d[n],o=t.validate();if("function"===typeof o.then)r.push(o.then((e=>({valid:e,comp:t})),(e=>({valid:!1,comp:t,error:e}))));else if(!0!==o){if(!1===e.greedy)return s(!1,t),!0===i&&"function"===typeof t.focus&&t.focus(),Promise.resolve(!1);r.push({valid:!1,comp:t})}}if(0===r.length)return s(!0),Promise.resolve(!0);const o=h;return Promise.all(r).then((e=>{if(o===h){const t=e.filter((e=>!0!==e.valid));if(0===t.length)return s(!0),!0;const{valid:n,comp:r}=t[0];return s(!1,r),!0===i&&!0!==n&&"function"===typeof r.focus&&r.focus(),!1}}))}function p(){h++,d.forEach((e=>{"function"===typeof e.resetValidation&&e.resetValidation()}))}function m(t){void 0!==t&&(0,s.NS)(t),f().then((r=>{!0===r&&(void 0!==e.onSubmit?n("submit",t):void 0!==t&&void 0!==t.target&&"function"===typeof t.target.submit&&t.target.submit())}))}function g(t){void 0!==t&&(0,s.NS)(t),n("reset"),(0,r.Y3)((()=>{p(),!0===e.autofocus&&!0!==e.noResetFocus&&v()}))}function v(){(0,o.jd)((()=>{if(null===u.value)return;const e=u.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(u.value.querySelectorAll("[tabindex]"),(e=>e.tabIndex>-1));null!==e&&void 0!==e&&e.focus()}))}return(0,r.JJ)(c.vh,{bindComponent(e){d.push(e)},unbindComponent(e){const t=d.indexOf(e);t>-1&&d.splice(t,1)}}),(0,r.bv)((()=>{!0===e.autofocus&&v()})),Object.assign(l.proxy,{validate:f,resetValidation:p,submit:m,reset:g,focus:v,getValidationComponents:()=>d}),()=>(0,r.h)("form",{class:"q-form",ref:u,onSubmit:m,onReset:g},(0,a.KR)(t.default))}})},3812:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(3673),i=n(1959),s=n(5151),o=n(7657),a=n(2547);const c=(0,r.aZ)({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:t,emit:n}){const{proxy:{$q:c}}=(0,r.FN)(),l=(0,r.f3)(a.YE,(()=>{console.error("QHeader needs to be child of QLayout")})),u=(0,i.iH)(parseInt(e.heightHint,10)),h=(0,i.iH)(!0),d=(0,i.Fl)((()=>!0===e.reveal||l.view.value.indexOf("H")>-1||!0===l.isContainer.value)),f=(0,i.Fl)((()=>{if(!0!==e.modelValue)return 0;if(!0===d.value)return!0===h.value?u.value:0;const t=u.value-l.scroll.value.position;return t>0?t:0})),p=(0,i.Fl)((()=>!0!==e.modelValue||!0===d.value&&!0!==h.value)),m=(0,i.Fl)((()=>!0===e.modelValue&&!0===p.value&&!0===e.reveal)),g=(0,i.Fl)((()=>"q-header q-layout__section--marginal "+(!0===d.value?"fixed":"absolute")+"-top"+(!0===e.bordered?" q-header--bordered":"")+(!0===p.value?" q-header--hidden":"")+(!0!==e.modelValue?" q-layout--prevent-focus":""))),v=(0,i.Fl)((()=>{const e=l.rows.value.top,t={};return"l"===e[0]&&!0===l.left.space&&(t[!0===c.lang.rtl?"right":"left"]=`${l.left.size}px`),"r"===e[2]&&!0===l.right.space&&(t[!0===c.lang.rtl?"left":"right"]=`${l.right.size}px`),t}));function y(e,t){l.update("header",e,t)}function w(e,t){e.value!==t&&(e.value=t)}function b({height:e}){w(u,e),y("size",e)}function _(e){!0===m.value&&w(h,!0),n("focusin",e)}(0,r.YP)((()=>e.modelValue),(e=>{y("space",e),w(h,!0),l.animate()})),(0,r.YP)(f,(e=>{y("offset",e)})),(0,r.YP)((()=>e.reveal),(t=>{!1===t&&w(h,e.modelValue)})),(0,r.YP)(h,(e=>{l.animate(),n("reveal",e)})),(0,r.YP)(l.scroll,(t=>{!0===e.reveal&&w(h,"up"===t.direction||t.position<=e.revealOffset||t.position-t.inflectionPoint<100)}));const T={};return l.instances.header=T,!0===e.modelValue&&y("size",u.value),y("space",e.modelValue),y("offset",f.value),(0,r.Jd)((()=>{l.instances.header===T&&(l.instances.header=void 0,y("size",0),y("offset",0),y("space",!1))})),()=>{const n=(0,o.Bl)(t.default,[]);return!0===e.elevated&&n.push((0,r.h)("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),n.push((0,r.h)(s.Z,{debounce:0,onResize:b})),(0,r.h)("header",{class:g.value,style:v.value,onFocusin:_},n)}}})},4554:(e,t,n)=>{"use strict";n.d(t,{Z:()=>y});n(71);var r=n(3673),i=n(1959),s=n(2417),o=n(7657);const a=e=>e,c=e=>`ionicons ${e}`,l={"icon-":a,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":c,"ion-ios":c,"ion-logo":c,"mdi-":e=>`mdi ${e}`,"iconfont ":a,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},u={o_:"-outlined",r_:"-round",s_:"-sharp"},h=new RegExp("^("+Object.keys(l).join("|")+")"),d=new RegExp("^("+Object.keys(u).join("|")+")"),f=/^M/,p=/^img:/,m=/^svguse:/,g=/^ion-/,v=/^[l|f]a[s|r|l|b|d]? /,y=(0,r.aZ)({name:"QIcon",props:{...s.LU,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){const{proxy:{$q:n}}=(0,r.FN)(),a=(0,s.ZP)(e),c=(0,i.Fl)((()=>"q-icon"+(!0===e.left?" on-left":"")+(!0===e.right?" on-right":"")+(void 0!==e.color?` text-${e.color}`:""))),y=(0,i.Fl)((()=>{let t,i=e.name;if(!i)return{none:!0,cls:c.value};if(null!==n.iconMapFn){const e=n.iconMapFn(i);if(void 0!==e){if(void 0===e.icon)return{cls:e.cls+" "+c.value,content:void 0!==e.content?e.content:" "};i=e.icon}}if(!0===f.test(i)){const[e,t]=i.split("|");return{svg:!0,cls:c.value,nodes:e.split("&&").map((e=>{const[t,n,i]=e.split("@@");return(0,r.h)("path",{style:n,d:t,transform:i})})),viewBox:void 0!==t?t:"0 0 24 24"}}if(!0===p.test(i))return{img:!0,cls:c.value,src:i.substring(4)};if(!0===m.test(i)){const[e,t]=i.split("|");return{svguse:!0,cls:c.value,src:e.substring(7),viewBox:void 0!==t?t:"0 0 24 24"}}let s=" ";const o=i.match(h);if(null!==o)t=l[o[1]](i);else if(!0===v.test(i))t=i;else if(!0===g.test(i))t=`ionicons ion-${!0===n.platform.is.ios?"ios":"md"}${i.substr(3)}`;else{t="notranslate material-icons";const e=i.match(d);null!==e&&(i=i.substring(2),t+=u[e[1]]),s=i}return{cls:t+" "+c.value,content:s}}));return()=>{const n={class:y.value.cls,style:a.value,"aria-hidden":"true",role:"presentation"};return!0===y.value.none?(0,r.h)(e.tag,n,(0,o.KR)(t.default)):!0===y.value.img?(n.src=y.value.src,(0,r.h)("img",n)):!0===y.value.svg?(n.viewBox=y.value.viewBox,(0,r.h)("svg",n,(0,o.vs)(t.default,y.value.nodes))):!0===y.value.svguse?(n.viewBox=y.value.viewBox,(0,r.h)("svg",n,(0,o.vs)(t.default,[(0,r.h)("use",{"xlink:href":y.value.src})]))):(0,r.h)(e.tag,n,(0,o.vs)(t.default,[y.value.content]))}}})},6805:(e,t,n)=>{"use strict";n.d(t,{Z:()=>ee});n(71);var r=n(3673),i=n(1959),s=n(8880),o=n(4688),a=n(4554),c=n(6833),l=n(2236),u=n(2547);function h({validate:e,resetValidation:t,requiresQForm:n}){const i=(0,r.f3)(u.vh,!1);if(!1!==i){const{props:n,proxy:s}=(0,r.FN)();Object.assign(s,{validate:e,resetValidation:t}),(0,r.YP)((()=>n.disable),(e=>{!0===e?("function"===typeof t&&t(),i.unbindComponent(s)):i.bindComponent(s)})),!0!==n.disable&&i.bindComponent(s),(0,r.Jd)((()=>{!0!==n.disable&&i.unbindComponent(s)}))}else!0!==n&&console.error("Parent QForm not found on useFormChild()!")}const d=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,f=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,p=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,m=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,g=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,v={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),hexColor:e=>d.test(e),hexaColor:e=>f.test(e),hexOrHexaColor:e=>p.test(e),rgbColor:e=>m.test(e),rgbaColor:e=>g.test(e),rgbOrRgbaColor:e=>m.test(e)||g.test(e),hexOrRgbColor:e=>d.test(e)||m.test(e),hexaOrRgbaColor:e=>f.test(e)||g.test(e),anyColor:e=>p.test(e)||m.test(e)||g.test(e)},y=[!0,!1,"ondemand"],w={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],validator:e=>y.includes(e)}};function b(e,t){const{props:n,proxy:s}=(0,r.FN)(),o=(0,i.iH)(!1),a=(0,i.iH)(null),c=(0,i.iH)(null);h({validate:g,resetValidation:m,requiresQForm:!0});let l,u=0;const d=(0,i.Fl)((()=>void 0!==n.rules&&null!==n.rules&&n.rules.length>0)),f=(0,i.Fl)((()=>!0===n.error||!0===o.value)),p=(0,i.Fl)((()=>"string"===typeof n.errorMessage&&n.errorMessage.length>0?n.errorMessage:a.value));function m(){u++,t.value=!1,c.value=null,o.value=!1,a.value=null}function g(e=n.modelValue){if(!0!==d.value)return!0;u++,!0!==t.value&&!0!==n.lazyRules&&(c.value=!0);const r=(e,n)=>{o.value!==e&&(o.value=e);const r=n||void 0;a.value!==r&&(a.value=r),!1!==t.value&&(t.value=!1)},i=[];for(let t=0;t<n.rules.length;t++){const s=n.rules[t];let o;if("function"===typeof s?o=s(e):"string"===typeof s&&void 0!==v[s]&&(o=v[s](e)),!1===o||"string"===typeof o)return r(!0,o),!1;!0!==o&&void 0!==o&&i.push(o)}if(0===i.length)return r(!1),!0;!0!==t.value&&(t.value=!0);const s=u;return Promise.all(i).then((e=>{if(s!==u)return!0;if(void 0===e||!1===Array.isArray(e)||0===e.length)return r(!1),!0;const t=e.find((e=>!1===e||"string"===typeof e));return r(void 0!==t,t),void 0===t}),(e=>s!==u||(console.error(e),r(!0),!1)))}function y(e){!0===d.value&&"ondemand"!==n.lazyRules&&(!0===c.value||!0!==n.lazyRules&&!0!==e)&&g()}return(0,r.YP)((()=>n.modelValue),(()=>{y()})),(0,r.YP)((()=>n.reactiveRules),(e=>{!0===e?void 0===l&&(l=(0,r.YP)((()=>n.rules),(()=>{y(!0)}))):void 0!==l&&(l(),l=void 0)}),{immediate:!0}),(0,r.YP)(e,(e=>{"ondemand"!==n.lazyRules&&(!0===e?null===c.value&&(c.value=!1):!1===c.value&&!0===d.value&&(c.value=!0,g()))})),(0,r.Jd)((()=>{void 0!==l&&l()})),Object.assign(s,{resetValidation:m,validate:g}),Object.defineProperty(s,"hasError",{get:()=>f.value}),{isDirtyModel:c,hasRules:d,hasError:f,computedErrorMessage:p,validate:g,resetValidation:m}}const _=/^on[A-Z]/;function T(e){const t={listeners:(0,i.iH)({}),attributes:(0,i.iH)({})};function n(){const n={},r={};Object.keys(e).forEach((t=>{!0===_.test(t)?n[t]=e[t]:"class"!==t&&"style"!==t&&(r[t]=e[t])})),t.listeners.value=n,t.attributes.value=r}return(0,r.Xn)(n),n(),t}var I=n(7657);n(979),n(6105),n(2396);let E,S=0;const k=new Array(256);for(let te=0;te<256;te++)k[te]=(te+256).toString(16).substr(1);const x=(()=>{const e="undefined"!==typeof crypto?crypto:"undefined"!==typeof window?window.crypto||window.msCrypto:void 0;if(void 0!==e){if(void 0!==e.randomBytes)return e.randomBytes;if(void 0!==e.getRandomValues)return t=>{const n=new Uint8Array(t);return e.getRandomValues(n),n}}return e=>{const t=[];for(let n=e;n>0;n--)t.push(Math.floor(256*Math.random()));return t}})(),C=4096;function A(){(void 0===E||S+16>C)&&(S=0,E=x(C));const e=Array.prototype.slice.call(E,S,S+=16);return e[6]=15&e[6]|64,e[8]=63&e[8]|128,k[e[0]]+k[e[1]]+k[e[2]]+k[e[3]]+"-"+k[e[4]]+k[e[5]]+"-"+k[e[6]]+k[e[7]]+"-"+k[e[8]]+k[e[9]]+"-"+k[e[10]]+k[e[11]]+k[e[12]]+k[e[13]]+k[e[14]]+k[e[15]]}var N=n(4716),R=n(230);function O(e){return void 0===e?`f_${A()}`:e}function P(e){return void 0!==e&&null!==e&&(""+e).length>0}const L={...l.S,...w,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},D=["update:modelValue","clear","focus","blur","popup-show","popup-hide"];function F(){const{props:e,attrs:t,proxy:n}=(0,r.FN)(),s=(0,l.Z)(e,n.$q);return{isDark:s,editable:(0,i.Fl)((()=>!0!==e.disable&&!0!==e.readonly)),innerLoading:(0,i.iH)(!1),focused:(0,i.iH)(!1),hasPopupOpen:(0,i.iH)(!1),splitAttrs:T(t),targetUid:(0,i.iH)(O(e.for)),rootRef:(0,i.iH)(null),targetRef:(0,i.iH)(null),controlRef:(0,i.iH)(null)}}function M(e){const{props:t,emit:n,slots:l,attrs:u,proxy:h}=(0,r.FN)(),{$q:d}=h;let f;void 0===e.hasValue&&(e.hasValue=(0,i.Fl)((()=>P(t.modelValue)))),void 0===e.emitValue&&(e.emitValue=e=>{n("update:modelValue",e)}),void 0===e.controlEvents&&(e.controlEvents={onFocusin:M,onFocusout:q}),Object.assign(e,{clearValue:U,onControlFocusin:M,onControlFocusout:q,focus:D}),void 0===e.computedCounter&&(e.computedCounter=(0,i.Fl)((()=>{if(!1!==t.counter){const e="string"===typeof t.modelValue||"number"===typeof t.modelValue?(""+t.modelValue).length:!0===Array.isArray(t.modelValue)?t.modelValue.length:0,n=void 0!==t.maxlength?t.maxlength:t.maxValues;return e+(void 0!==n?" / "+n:"")}})));const{isDirtyModel:p,hasRules:m,hasError:g,computedErrorMessage:v,resetValidation:y}=b(e.focused,e.innerLoading),w=void 0!==e.floatingLabel?(0,i.Fl)((()=>!0===t.stackLabel||!0===e.focused.value||!0===e.floatingLabel.value)):(0,i.Fl)((()=>!0===t.stackLabel||!0===e.focused.value||!0===e.hasValue.value)),_=(0,i.Fl)((()=>!0===t.bottomSlots||void 0!==t.hint||!0===m.value||!0===t.counter||null!==t.error)),T=(0,i.Fl)((()=>!0===t.filled?"filled":!0===t.outlined?"outlined":!0===t.borderless?"borderless":t.standout?"standout":"standard")),E=(0,i.Fl)((()=>`q-field row no-wrap items-start q-field--${T.value}`+(void 0!==e.fieldClass?` ${e.fieldClass.value}`:"")+(!0===t.rounded?" q-field--rounded":"")+(!0===t.square?" q-field--square":"")+(!0===w.value?" q-field--float":"")+(!0===k.value?" q-field--labeled":"")+(!0===t.dense?" q-field--dense":"")+(!0===t.itemAligned?" q-field--item-aligned q-item-type":"")+(!0===e.isDark.value?" q-field--dark":"")+(void 0===e.getControl?" q-field--auto-height":"")+(!0===e.focused.value?" q-field--focused":"")+(!0===g.value?" q-field--error":"")+(!0===g.value||!0===e.focused.value?" q-field--highlighted":"")+(!0!==t.hideBottomSpace&&!0===_.value?" q-field--with-bottom":"")+(!0===t.disable?" q-field--disabled":!0===t.readonly?" q-field--readonly":""))),S=(0,i.Fl)((()=>"q-field__control relative-position row no-wrap"+(void 0!==t.bgColor?` bg-${t.bgColor}`:"")+(!0===g.value?" text-negative":"string"===typeof t.standout&&t.standout.length>0&&!0===e.focused.value?` ${t.standout}`:void 0!==t.color?` text-${t.color}`:""))),k=(0,i.Fl)((()=>!0===t.labelSlot||void 0!==t.label)),x=(0,i.Fl)((()=>"q-field__label no-pointer-events absolute ellipsis"+(void 0!==t.labelColor&&!0!==g.value?` text-${t.labelColor}`:""))),C=(0,i.Fl)((()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:w.value,modelValue:t.modelValue,emitValue:e.emitValue}))),A=(0,i.Fl)((()=>{const n={for:e.targetUid.value};return!0===t.disable?n["aria-disabled"]="true":!0===t.readonly&&(n["aria-readonly"]="true"),n}));let L;function D(){void 0!==L&&(0,R.fP)(L),L=(0,R.jd)((()=>{L=void 0;const t=document.activeElement;let n=void 0!==e.targetRef&&e.targetRef.value;!n||null!==t&&t.id===e.targetUid.value||(!0===n.hasAttribute("tabindex")||(n=n.querySelector("[tabindex]")),n&&n!==t&&n.focus())}))}function F(){void 0!==L&&(0,R.fP)(L);const t=document.activeElement;null!==t&&e.rootRef.value.contains(t)&&t.blur()}function M(t){!0===e.editable.value&&!1===e.focused.value&&(e.focused.value=!0,n("focus",t))}function q(t,r){clearTimeout(f),f=setTimeout((()=>{(!0!==document.hasFocus()||!0!==e.hasPopupOpen.value&&(void 0===e.controlRef||null!==e.controlRef.value&&!1===e.controlRef.value.contains(document.activeElement)))&&(!0===e.focused.value&&(e.focused.value=!1,n("blur",t)),void 0!==r&&r())}))}function U(i){if((0,N.NS)(i),!0!==d.platform.is.mobile){const t=void 0!==e.targetRef&&e.targetRef.value||e.rootRef.value;t.focus()}else!0===e.rootRef.value.contains(document.activeElement)&&document.activeElement.blur();"file"===t.type&&(e.inputRef.value.value=null),n("update:modelValue",null),n("clear",t.modelValue),(0,r.Y3)((()=>{y(),"ondemand"!==t.lazyRules&&!0!==d.platform.is.mobile&&(p.value=!1)}))}function V(){const n=[];return void 0!==l.prepend&&n.push((0,r.h)("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:N.X$},l.prepend())),n.push((0,r.h)("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},j())),void 0!==l.append&&n.push((0,r.h)("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:N.X$},l.append())),!0===g.value&&!1===t.noErrorIcon&&n.push($("error",[(0,r.h)(a.Z,{name:d.iconSet.field.error,color:"negative"})])),!0===t.loading||!0===e.innerLoading.value?n.push($("inner-loading-append",void 0!==l.loading?l.loading():[(0,r.h)(c.Z,{color:t.color})])):!0===t.clearable&&!0===e.hasValue.value&&!0===e.editable.value&&n.push($("inner-clearable-append",[(0,r.h)(a.Z,{class:"q-field__focusable-action",tag:"button",name:t.clearIcon||d.iconSet.field.clear,tabindex:0,type:"button",onClick:U})])),void 0!==e.getInnerAppend&&n.push($("inner-append",e.getInnerAppend())),void 0!==e.getControlChild&&n.push(e.getControlChild()),n}function j(){const n=[];return void 0!==t.prefix&&null!==t.prefix&&n.push((0,r.h)("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),void 0!==e.getShadowControl&&!0===e.hasShadow.value&&n.push(e.getShadowControl()),void 0!==e.getControl?n.push(e.getControl()):void 0!==l.rawControl?n.push(l.rawControl()):void 0!==l.control&&n.push((0,r.h)("div",{ref:e.targetRef,class:"q-field__native row",...e.splitAttrs.attributes.value,"data-autofocus":!0===t.autofocus||void 0},l.control(C.value))),!0===k.value&&n.push((0,r.h)("div",{class:x.value},(0,I.KR)(l.label,t.label))),void 0!==t.suffix&&null!==t.suffix&&n.push((0,r.h)("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),n.concat((0,I.KR)(l.default))}function B(){let n,i;!0===g.value?null!==v.value?(n=[(0,r.h)("div",{role:"alert"},v.value)],i=`q--slot-error-${v.value}`):(n=(0,I.KR)(l.error),i="q--slot-error"):!0===t.hideHint&&!0!==e.focused.value||(void 0!==t.hint?(n=[(0,r.h)("div",t.hint)],i=`q--slot-hint-${t.hint}`):(n=(0,I.KR)(l.hint),i="q--slot-hint"));const o=!0===t.counter||void 0!==l.counter;if(!0===t.hideBottomSpace&&!1===o&&void 0===n)return;const a=(0,r.h)("div",{key:i,class:"q-field__messages col"},n);return(0,r.h)("div",{class:"q-field__bottom row items-start q-field__bottom--"+(!0!==t.hideBottomSpace?"animated":"stale")},[!0===t.hideBottomSpace?a:(0,r.h)(s.uT,{name:"q-transition--field-message"},(()=>a)),!0===o?(0,r.h)("div",{class:"q-field__counter"},void 0!==l.counter?l.counter():e.computedCounter.value):null])}function $(e,t){return null===t?null:(0,r.h)("div",{key:e,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},t)}return(0,r.YP)((()=>t.for),(t=>{e.targetUid.value=O(t)})),Object.assign(h,{focus:D,blur:F}),(0,r.bv)((()=>{!0===o.uX.value&&void 0===t.for&&(e.targetUid.value=O()),!0===t.autofocus&&h.focus()})),(0,r.Jd)((()=>{clearTimeout(f)})),function(){return(0,r.h)("label",{ref:e.rootRef,class:!0!==e.inheritAttrs?[E.value,u.class]:E.value,style:u.style,...A.value},[void 0!==l.before?(0,r.h)("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:N.X$},l.before()):null,(0,r.h)("div",{class:"q-field__inner relative-position col self-stretch"},[(0,r.h)("div",{ref:e.controlRef,class:S.value,tabindex:-1,...e.controlEvents},V()),!0===_.value?B():null]),void 0!==l.after?(0,r.h)("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:N.X$},l.after()):null])}}n(5363);var q=n(1436);const U={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},V={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},j=Object.keys(V);j.forEach((e=>{V[e].regex=new RegExp(V[e].pattern)}));const B=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+j.join("")+"])|(.)","g"),$=/[.*+?^${}()|[\]\\]/g,z=String.fromCharCode(1),H={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function K(e,t,n,s){let o,a,c,l;const u=(0,i.iH)(null),h=(0,i.iH)(f());function d(){return!0===e.autogrow||["textarea","text","search","url","tel","password"].includes(e.type)}function f(){if(m(),!0===u.value){const t=b(T(e.modelValue));return!1!==e.fillMask?I(t):t}return e.modelValue}function p(e){if(e<o.length)return o.slice(-e);let t="",n=o;const r=n.indexOf(z);if(r>-1){for(let r=e-n.length;r>0;r--)t+=z;n=n.slice(0,r)+t+n.slice(r)}return n}function m(){if(u.value=void 0!==e.mask&&e.mask.length>0&&d(),!1===u.value)return l=void 0,o="",void(a="");const t=void 0===U[e.mask]?e.mask:U[e.mask],n="string"===typeof e.fillMask&&e.fillMask.length>0?e.fillMask.slice(0,1):"_",r=n.replace($,"\\$&"),i=[],s=[],h=[];let f=!0===e.reverseFillMask,p="",m="";t.replace(B,((e,t,n,r,o)=>{if(void 0!==r){const e=V[r];h.push(e),m=e.negate,!0===f&&(s.push("(?:"+m+"+)?("+e.pattern+"+)?(?:"+m+"+)?("+e.pattern+"+)?"),f=!1),s.push("(?:"+m+"+)?("+e.pattern+")?")}else if(void 0!==n)p="\\"+("\\"===n?"":n),h.push(n),i.push("([^"+p+"]+)?"+p+"?");else{const e=void 0!==t?t:o;p="\\"===e?"\\\\\\\\":e.replace($,"\\\\$&"),h.push(e),i.push("([^"+p+"]+)?"+p+"?")}}));const g=new RegExp("^"+i.join("")+"("+(""===p?".":"[^"+p+"]")+"+)?$"),v=s.length-1,y=s.map(((t,n)=>0===n&&!0===e.reverseFillMask?new RegExp("^"+r+"*"+t):n===v?new RegExp("^"+t+"("+(""===m?".":m)+"+)?"+(!0===e.reverseFillMask?"$":r+"*")):new RegExp("^"+t)));c=h,l=e=>{const t=g.exec(e);null!==t&&(e=t.slice(1).join(""));const n=[],r=y.length;for(let i=0,s=e;i<r;i++){const e=y[i].exec(s);if(null===e)break;s=s.slice(e.shift().length),n.push(...e)}return n.length>0?n.join(""):e},o=h.map((e=>"string"===typeof e?e:z)).join(""),a=o.split(z).join(n)}function g(t,i,c){const l=s.value,u=l.selectionEnd,d=l.value.length-u,f=T(t);!0===i&&m();const p=b(f),g=!1!==e.fillMask?I(p):p,v=h.value!==g;l.value!==g&&(l.value=g),!0===v&&(h.value=g),document.activeElement===l&&(0,r.Y3)((()=>{if(g!==a)if("insertFromPaste"!==c||!0===e.reverseFillMask)if(["deleteContentBackward","deleteContentForward"].indexOf(c)>-1){const t=!0===e.reverseFillMask?0===u?g.length>p.length?1:0:Math.max(0,g.length-(g===a?0:Math.min(p.length,d)+1))+1:u;l.setSelectionRange(t,t,"forward")}else if(!0===e.reverseFillMask)if(!0===v){const e=Math.max(0,g.length-(g===a?0:Math.min(p.length,d+1)));1===e&&1===u?l.setSelectionRange(e,e,"forward"):y.rightReverse(l,e,e)}else{const e=g.length-d;l.setSelectionRange(e,e,"backward")}else if(!0===v){const e=Math.max(0,o.indexOf(z),Math.min(p.length,u)-1);y.right(l,e,e)}else{const e=u-1;y.right(l,e,e)}else{const e=u-1;y.right(l,e,e)}else{const t=!0===e.reverseFillMask?a.length:0;l.setSelectionRange(t,t,"forward")}}));const w=!0===e.unmaskedValue?T(g):g;e.modelValue!==w&&n(w,!0)}function v(e,t,n){const r=b(T(e.value));t=Math.max(0,o.indexOf(z),Math.min(r.length,t)),e.setSelectionRange(t,n,"forward")}(0,r.YP)((()=>e.type+e.autogrow),m),(0,r.YP)((()=>e.mask),(n=>{if(void 0!==n)g(h.value,!0);else{const n=T(h.value);m(),e.modelValue!==n&&t("update:modelValue",n)}})),(0,r.YP)((()=>e.fillMask+e.reverseFillMask),(()=>{!0===u.value&&g(h.value,!0)})),(0,r.YP)((()=>e.unmaskedValue),(()=>{!0===u.value&&g(h.value)}));const y={left(e,t,n,r){const i=-1===o.slice(t-1).indexOf(z);let s=Math.max(0,t-1);for(;s>=0;s--)if(o[s]===z){t=s,!0===i&&t++;break}if(s<0&&void 0!==o[t]&&o[t]!==z)return y.right(e,0,0);t>=0&&e.setSelectionRange(t,!0===r?n:t,"backward")},right(e,t,n,r){const i=e.value.length;let s=Math.min(i,n+1);for(;s<=i;s++){if(o[s]===z){n=s;break}o[s-1]===z&&(n=s)}if(s>i&&void 0!==o[n-1]&&o[n-1]!==z)return y.left(e,i,i);e.setSelectionRange(r?t:n,n,"forward")},leftReverse(e,t,n,r){const i=p(e.value.length);let s=Math.max(0,t-1);for(;s>=0;s--){if(i[s-1]===z){t=s;break}if(i[s]===z&&(t=s,0===s))break}if(s<0&&void 0!==i[t]&&i[t]!==z)return y.rightReverse(e,0,0);t>=0&&e.setSelectionRange(t,!0===r?n:t,"backward")},rightReverse(e,t,n,r){const i=e.value.length,s=p(i),o=-1===s.slice(0,n+1).indexOf(z);let a=Math.min(i,n+1);for(;a<=i;a++)if(s[a-1]===z){n=a,n>0&&!0===o&&n--;break}if(a>i&&void 0!==s[n-1]&&s[n-1]!==z)return y.leftReverse(e,i,i);e.setSelectionRange(!0===r?t:n,n,"forward")}};function w(t){if(!0===(0,q.Wm)(t))return;const n=s.value,r=n.selectionStart,i=n.selectionEnd;if(37===t.keyCode||39===t.keyCode){const s=y[(39===t.keyCode?"right":"left")+(!0===e.reverseFillMask?"Reverse":"")];t.preventDefault(),s(n,r,i,t.shiftKey)}else 8===t.keyCode&&!0!==e.reverseFillMask&&r===i?y.left(n,r,i,!0):46===t.keyCode&&!0===e.reverseFillMask&&r===i&&y.rightReverse(n,r,i,!0)}function b(t){if(void 0===t||null===t||""===t)return"";if(!0===e.reverseFillMask)return _(t);const n=c;let r=0,i="";for(let e=0;e<n.length;e++){const s=t[r],o=n[e];if("string"===typeof o)i+=o,s===o&&r++;else{if(void 0===s||!o.regex.test(s))return i;i+=void 0!==o.transform?o.transform(s):s,r++}}return i}function _(e){const t=c,n=o.indexOf(z);let r=e.length-1,i="";for(let s=t.length-1;s>=0&&r>-1;s--){const o=t[s];let a=e[r];if("string"===typeof o)i=o+i,a===o&&r--;else{if(void 0===a||!o.regex.test(a))return i;do{i=(void 0!==o.transform?o.transform(a):a)+i,r--,a=e[r]}while(n===s&&void 0!==a&&o.regex.test(a))}}return i}function T(e){return"string"!==typeof e||void 0===l?"number"===typeof e?l(""+e):e:l(e)}function I(t){return a.length-t.length<=0?t:!0===e.reverseFillMask&&t.length>0?a.slice(0,-t.length)+t:t+a.slice(t.length)}return{innerValue:h,hasMask:u,moveCursorForPaste:v,updateMaskValue:g,onMaskedKeydown:w}}const G={name:String};function W(e){return(0,i.Fl)((()=>e.name||e.for))}function J(e,t){function n(){const t=e.modelValue;try{const e="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(t)===t&&("length"in t?Array.from(t):[t]).forEach((t=>{e.items.add(t)})),{files:e.files}}catch(n){return{files:void 0}}}return!0===t?(0,i.Fl)((()=>{if("file"===e.type)return n()})):(0,i.Fl)(n)}const Y=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,Q=/(?:[\u3300-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF\uFE30-\uFE4F]|[\uD840-\uD868\uD86A-\uD872][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD873[\uDC00-\uDEAF]|\uD87E[\uDC00-\uDE1F])/,Z=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/;function X(e){return function(t){if("compositionend"===t.type||"change"===t.type){if(!0!==t.target.composing)return;t.target.composing=!1,e(t)}else"compositionupdate"===t.type?"string"===typeof t.data&&!1===Y.test(t.data)&&!1===Q.test(t.data)&&!1===Z.test(t.data)&&(t.target.composing=!1):t.target.composing=!0}}const ee=(0,r.aZ)({name:"QInput",inheritAttrs:!1,props:{...L,...H,...G,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...D,"paste","change"],setup(e,{emit:t,attrs:n}){const s={};let o,a,c,l,u=NaN;const h=(0,i.iH)(null),d=W(e),{innerValue:f,hasMask:p,moveCursorForPaste:m,updateMaskValue:g,onMaskedKeydown:v}=K(e,t,O,h),y=J(e,!0),w=(0,i.Fl)((()=>P(f.value))),b=X(A),_=F(),T=(0,i.Fl)((()=>"textarea"===e.type||!0===e.autogrow)),I=(0,i.Fl)((()=>!0===T.value||["text","search","url","tel","password"].includes(e.type))),E=(0,i.Fl)((()=>{const t={..._.splitAttrs.listeners.value,onInput:A,onPaste:C,onChange:D,onBlur:q,onFocus:N.sT};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=b,!0===p.value&&(t.onKeydown=v),!0===e.autogrow&&(t.onAnimationend=L),t})),S=(0,i.Fl)((()=>{const t={tabindex:0,"data-autofocus":!0===e.autofocus||void 0,rows:"textarea"===e.type?6:void 0,"aria-label":e.label,name:d.value,..._.splitAttrs.attributes.value,id:_.targetUid.value,maxlength:e.maxlength,disabled:!0===e.disable,readonly:!0===e.readonly};return!1===T.value&&(t.type=e.type),!0===e.autogrow&&(t.rows=1),t}));function k(){(0,R.jd)((()=>{const e=document.activeElement;null===h.value||h.value===e||null!==e&&e.id===_.targetUid.value||h.value.focus()}))}function x(){null!==h.value&&h.value.select()}function C(n){if(!0===p.value&&!0!==e.reverseFillMask){const e=n.target;m(e,e.selectionStart,e.selectionEnd)}t("paste",n)}function A(n){if(!n||!n.target||!0===n.target.composing)return;if("file"===e.type)return void t("update:modelValue",n.target.files);const i=n.target.value;if(!0===p.value)g(i,!1,n.inputType);else if(O(i),!0===I.value&&n.target===document.activeElement){const{selectionStart:e,selectionEnd:t}=n.target;void 0!==e&&void 0!==t&&(0,r.Y3)((()=>{n.target===document.activeElement&&0===i.indexOf(n.target.value)&&n.target.setSelectionRange(e,t)}))}!0===e.autogrow&&L()}function O(n,i){l=()=>{"number"!==e.type&&!0===s.hasOwnProperty("value")&&delete s.value,e.modelValue!==n&&u!==n&&(!0===i&&(a=!0),t("update:modelValue",n),(0,r.Y3)((()=>{u===n&&(u=NaN)}))),l=void 0},"number"===e.type&&(o=!0,s.value=n),void 0!==e.debounce?(clearTimeout(c),s.value=n,c=setTimeout(l,e.debounce)):l()}function L(){const e=h.value;if(null!==e){const t=e.parentNode.style;t.marginBottom=e.scrollHeight-1+"px",e.style.height="1px",e.style.height=e.scrollHeight+"px",t.marginBottom=""}}function D(e){b(e),clearTimeout(c),void 0!==l&&l(),t("change",e.target.value)}function q(t){void 0!==t&&(0,N.sT)(t),clearTimeout(c),void 0!==l&&l(),o=!1,a=!1,delete s.value,"file"!==e.type&&setTimeout((()=>{null!==h.value&&(h.value.value=void 0!==f.value?f.value:"")}))}function U(){return!0===s.hasOwnProperty("value")?s.value:void 0!==f.value?f.value:""}(0,r.YP)((()=>e.modelValue),(t=>{if(!0===p.value){if(!0===a)return void(a=!1);g(t)}else f.value!==t&&(f.value=t,"number"===e.type&&!0===s.hasOwnProperty("value")&&(!0===o?o=!1:delete s.value));!0===e.autogrow&&(0,r.Y3)(L)})),(0,r.YP)((()=>e.autogrow),(e=>{!0===e?(0,r.Y3)(L):null!==h.value&&n.rows>0&&(h.value.style.height="auto")})),(0,r.YP)((()=>e.dense),(()=>{!0===e.autogrow&&(0,r.Y3)(L)})),(0,r.Jd)((()=>{q()})),(0,r.bv)((()=>{!0===e.autogrow&&L()})),Object.assign(_,{innerValue:f,fieldClass:(0,i.Fl)((()=>"q-"+(!0===T.value?"textarea":"input")+(!0===e.autogrow?" q-textarea--autogrow":""))),hasShadow:(0,i.Fl)((()=>"file"!==e.type&&"string"===typeof e.shadowText&&e.shadowText.length>0)),inputRef:h,emitValue:O,hasValue:w,floatingLabel:(0,i.Fl)((()=>!0===w.value||P(e.displayValue))),getControl:()=>(0,r.h)(!0===T.value?"textarea":"input",{ref:h,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...S.value,...E.value,..."file"!==e.type?{value:U()}:y.value}),getShadowControl:()=>(0,r.h)("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(!0===T.value?"":" text-no-wrap")},[(0,r.h)("span",{class:"invisible"},U()),(0,r.h)("span",e.shadowText)])});const V=M(_),j=(0,r.FN)();return Object.assign(j.proxy,{focus:k,select:x,getNativeElement:()=>h.value}),V}})},3414:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(3673),i=n(1959),s=n(2236),o=n(7277),a=n(7657),c=n(4716),l=n(1436);const u=(0,r.aZ)({name:"QItem",props:{...s.S,...o.$,tag:{type:String,default:"div"},active:Boolean,clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:n}){const{proxy:{$q:u}}=(0,r.FN)(),h=(0,s.Z)(e,u),{hasLink:d,linkProps:f,linkClass:p,linkTag:m,navigateToLink:g}=(0,o.Z)(),v=(0,i.iH)(null),y=(0,i.iH)(null),w=(0,i.Fl)((()=>!0===e.clickable||!0===d.value||"a"===e.tag||"label"===e.tag)),b=(0,i.Fl)((()=>!0!==e.disable&&!0===w.value)),_=(0,i.Fl)((()=>"q-item q-item-type row no-wrap"+(!0===e.dense?" q-item--dense":"")+(!0===h.value?" q-item--dark":"")+(!0===d.value?p.value:!0===e.active?(void 0!==e.activeClass?` ${e.activeClass}`:"")+" q-item--active":"")+(!0===e.disable?" disabled":"")+(!0===b.value?" q-item--clickable q-link cursor-pointer "+(!0===e.manualFocus?"q-manual-focusable":"q-focusable q-hoverable")+(!0===e.focused?" q-manual-focusable--focused":""):""))),T=(0,i.Fl)((()=>{if(void 0===e.insetLevel)return null;const t=!0===u.lang.rtl?"Right":"Left";return{["padding"+t]:16+56*e.insetLevel+"px"}}));function I(e){!0===b.value&&(null!==y.value&&(!0!==e.qKeyEvent&&document.activeElement===v.value?y.value.focus():document.activeElement===y.value&&v.value.focus()),!0===d.value&&g(e),n("click",e))}function E(e){if(!0===b.value&&!0===(0,l.So)(e,13)){(0,c.NS)(e),e.qKeyEvent=!0;const t=new MouseEvent("click",e);t.qKeyEvent=!0,v.value.dispatchEvent(t)}n("keyup",e)}function S(){const e=(0,a.Bl)(t.default,[]);return!0===b.value&&e.unshift((0,r.h)("div",{class:"q-focus-helper",tabindex:-1,ref:y})),e}return()=>{const t={ref:v,class:_.value,style:T.value,onClick:I,onKeyup:E};return!0===b.value?(t.tabindex=e.tabindex||"0",Object.assign(t,f.value)):!0===w.value&&(t["aria-disabled"]="true"),(0,r.h)(m.value,t,S())}}})},2035:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(3673),i=n(1959),s=n(7657);const o=(0,r.aZ)({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const n=(0,i.Fl)((()=>"q-item__section column q-item__section--"+(!0===e.avatar||!0===e.side||!0===e.thumbnail?"side":"main")+(!0===e.top?" q-item__section--top justify-start":" justify-center")+(!0===e.avatar?" q-item__section--avatar":"")+(!0===e.thumbnail?" q-item__section--thumbnail":"")+(!0===e.noWrap?" q-item__section--nowrap":"")));return()=>(0,r.h)("div",{class:n.value},(0,s.KR)(t.default))}})},7011:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(3673),i=n(1959),s=n(2236),o=n(7657);const a=(0,r.aZ)({name:"QList",props:{...s.S,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean},setup(e,{slots:t}){const n=(0,r.FN)(),a=(0,s.Z)(e,n.proxy.$q),c=(0,i.Fl)((()=>"q-list"+(!0===e.bordered?" q-list--bordered":"")+(!0===e.dense?" q-list--dense":"")+(!0===e.separator?" q-list--separator":"")+(!0===a.value?" q-list--dark":"")+(!0===e.padding?" q-list--padding":"")));return()=>(0,r.h)("div",{class:c.value},(0,o.KR)(t.default))}})},3066:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var r=n(3673),i=n(1959),s=n(4688),o=n(8400),a=n(4716);const{passive:c}=a.rU,l=["both","horizontal","vertical"],u=(0,r.aZ)({name:"QScrollObserver",props:{axis:{type:String,validator:e=>l.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:t}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let i,s,l=null;function u(){l=null;const r=Math.max(0,(0,o.u3)(i)),s=(0,o.OI)(i),a={top:r-n.position.top,left:s-n.position.left};if("vertical"===e.axis&&0===a.top||"horizontal"===e.axis&&0===a.left)return;const c=Math.abs(a.top)>=Math.abs(a.left)?a.top<0?"up":"down":a.left<0?"left":"right";n.position={top:r,left:s},n.directionChanged=n.direction!==c,n.delta=a,!0===n.directionChanged&&(n.direction=c,n.inflectionPoint=n.position),t("scroll",{...n})}function h(){i=(0,o.b0)(s,e.scrollTarget),i.addEventListener("scroll",f,c),f(!0)}function d(){void 0!==i&&(i.removeEventListener("scroll",f,c),i=void 0)}function f(t){!0===t||0===e.debounce||"0"===e.debounce?u():null===l&&(l=e.debounce?setTimeout(u,e.debounce):requestAnimationFrame(u))}(0,r.YP)((()=>e.scrollTarget),(()=>{d(),h()}));const p=(0,r.FN)();return(0,r.bv)((()=>{s=p.proxy.$el.parentNode,h()})),(0,r.Jd)((()=>{clearTimeout(l),cancelAnimationFrame(l),d()})),Object.assign(p.proxy,{trigger:f,getPosition:()=>n}),a.ZT}});var h=n(5151),d=n(7657),f=n(2547);const p=(0,r.aZ)({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:t,emit:n}){const{proxy:{$q:a}}=(0,r.FN)(),c=(0,i.iH)(null),l=(0,i.iH)(a.screen.height),p=(0,i.iH)(!0===e.container?0:a.screen.width),m=(0,i.iH)({position:0,direction:"down",inflectionPoint:0}),g=(0,i.iH)(0),v=(0,i.iH)(!0===s.uX.value?0:(0,o.np)()),y=(0,i.Fl)((()=>"q-layout q-layout--"+(!0===e.container?"containerized":"standard"))),w=(0,i.Fl)((()=>!1===e.container?{minHeight:a.screen.height+"px"}:null)),b=(0,i.Fl)((()=>0!==v.value?{[!0===a.lang.rtl?"left":"right"]:`${v.value}px`}:null)),_=(0,i.Fl)((()=>0!==v.value?{[!0===a.lang.rtl?"right":"left"]:0,[!0===a.lang.rtl?"left":"right"]:`-${v.value}px`,width:`calc(100% + ${v.value}px)`}:null));function T(t){if(!0===e.container||!0!==document.qScrollPrevented){const r={position:t.position.top,direction:t.direction,directionChanged:t.directionChanged,inflectionPoint:t.inflectionPoint.top,delta:t.delta.top};m.value=r,void 0!==e.onScroll&&n("scroll",r)}}function I(t){const{height:r,width:i}=t;let s=!1;l.value!==r&&(s=!0,l.value=r,void 0!==e.onScrollHeight&&n("scroll-height",r),S()),p.value!==i&&(s=!0,p.value=i),!0===s&&void 0!==e.onResize&&n("resize",t)}function E({height:e}){g.value!==e&&(g.value=e,S())}function S(){if(!0===e.container){const e=l.value>g.value?(0,o.np)():0;v.value!==e&&(v.value=e)}}let k;const x={instances:{},view:(0,i.Fl)((()=>e.view)),isContainer:(0,i.Fl)((()=>e.container)),rootRef:c,height:l,containerHeight:g,scrollbarWidth:v,totalWidth:(0,i.Fl)((()=>p.value+v.value)),rows:(0,i.Fl)((()=>{const t=e.view.toLowerCase().split(" ");return{top:t[0].split(""),middle:t[1].split(""),bottom:t[2].split("")}})),header:(0,i.qj)({size:0,offset:0,space:!1}),right:(0,i.qj)({size:300,offset:0,space:!1}),footer:(0,i.qj)({size:0,offset:0,space:!1}),left:(0,i.qj)({size:300,offset:0,space:!1}),scroll:m,animate(){void 0!==k?clearTimeout(k):document.body.classList.add("q-body--layout-animate"),k=setTimeout((()=>{document.body.classList.remove("q-body--layout-animate"),k=void 0}),155)},update(e,t,n){x[e][t]=n}};return(0,r.JJ)(f.YE,x),()=>{const n=(0,d.vs)(t.default,[(0,r.h)(u,{onScroll:T}),(0,r.h)(h.Z,{onResize:I})]),i=(0,r.h)("div",{class:y.value,style:w.value,ref:!0===e.container?void 0:c},n);return!0===e.container?(0,r.h)("div",{class:"q-layout-container overflow-hidden",ref:c},[(0,r.h)(h.Z,{onResize:E}),(0,r.h)("div",{class:"absolute-full",style:b.value},[(0,r.h)("div",{class:"scroll",style:_.value},[i])])]):i}}})},4379:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(3673),i=n(1959),s=n(7657),o=n(2547);const a=(0,r.aZ)({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:t}){const{proxy:{$q:n}}=(0,r.FN)(),a=(0,r.f3)(o.YE);(0,r.f3)(o.Mw,(()=>{console.error("QPage needs to be child of QPageContainer")}));const c=(0,i.Fl)((()=>{const t=(!0===a.header.space?a.header.size:0)+(!0===a.footer.space?a.footer.size:0);if("function"===typeof e.styleFn){const r=!0===a.isContainer.value?a.containerHeight.value:n.screen.height;return e.styleFn(t,r)}return{minHeight:!0===a.isContainer.value?a.containerHeight.value-t+"px":0===n.screen.height?0!==t?`calc(100vh - ${t}px)`:"100vh":n.screen.height-t+"px"}})),l=(0,i.Fl)((()=>"q-page "+(!0===e.padding?" q-layout-padding":"")));return()=>(0,r.h)("main",{class:l.value,style:c.value},(0,s.KR)(t.default))}})},2652:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(3673),i=n(1959),s=n(7657),o=n(2547);const a=(0,r.aZ)({name:"QPageContainer",setup(e,{slots:t}){const{proxy:{$q:n}}=(0,r.FN)(),a=(0,r.f3)(o.YE,(()=>{console.error("QPageContainer needs to be child of QLayout")}));(0,r.JJ)(o.Mw,!0);const c=(0,i.Fl)((()=>{const e={};return!0===a.header.space&&(e.paddingTop=`${a.header.size}px`),!0===a.right.space&&(e["padding"+(!0===n.lang.rtl?"Left":"Right")]=`${a.right.size}px`),!0===a.footer.space&&(e.paddingBottom=`${a.footer.size}px`),!0===a.left.space&&(e["padding"+(!0===n.lang.rtl?"Right":"Left")]=`${a.left.size}px`),e}));return()=>(0,r.h)("div",{class:"q-page-container",style:c.value},(0,s.KR)(t.default))}})},5151:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(3673),i=n(1959),s=n(4688);function o(){const e=(0,i.iH)(!s.uX.value);return!1===e.value&&(0,r.bv)((()=>{e.value=!0})),e}var a=n(4716);const c="undefined"!==typeof ResizeObserver,l=!0===c?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"},u=(0,r.aZ)({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:t}){let n,i,s={width:-1,height:-1};function u(t){!0===t||0===e.debounce||"0"===e.debounce?h():n||(n=setTimeout(h,e.debounce))}function h(){if(n=void 0,i){const{offsetWidth:e,offsetHeight:n}=i;e===s.width&&n===s.height||(s={width:e,height:n},t("resize",s))}}const d=(0,r.FN)();if(Object.assign(d.proxy,{trigger:u}),!0===c){let e;return(0,r.bv)((()=>{(0,r.Y3)((()=>{i=d.proxy.$el.parentNode,i&&(e=new ResizeObserver(u),e.observe(i),h())}))})),(0,r.Jd)((()=>{clearTimeout(n),void 0!==e&&(void 0!==e.disconnect?e.disconnect():i&&e.unobserve(i))})),a.ZT}{const e=o();let t;function s(){clearTimeout(n),void 0!==t&&(void 0!==t.removeEventListener&&t.removeEventListener("resize",u,a.rU.passive),t=void 0)}function c(){s(),i&&i.contentDocument&&(t=i.contentDocument.defaultView,t.addEventListener("resize",u,a.rU.passive),h())}return(0,r.bv)((()=>{(0,r.Y3)((()=>{i=d.proxy.$el,i&&c()}))})),(0,r.Jd)(s),()=>{if(!0===e.value)return(0,r.h)("object",{style:l.style,tabindex:-1,type:"text/html",data:l.url,"aria-hidden":"true",onLoad:c})}}}})},6833:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(3673),i=n(4633);const s=(0,r.aZ)({name:"QSpinner",props:{...i.G,thickness:{type:Number,default:5}},setup(e){const{cSize:t,classes:n}=(0,i.Z)(e);return()=>(0,r.h)("svg",{class:n.value+" q-spinner-mat",width:t.value,height:t.value,viewBox:"25 25 50 50"},[(0,r.h)("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}})},6394:(e,t,n)=>{"use strict";var r=n(3673),i=n(4633);const s=[(0,r.h)("g",{transform:"translate(-20,-20)"},[(0,r.h)("path",{d:"M79.9,52.6C80,51.8,80,50.9,80,50s0-1.8-0.1-2.6l-5.1-0.4c-0.3-2.4-0.9-4.6-1.8-6.7l4.2-2.9c-0.7-1.6-1.6-3.1-2.6-4.5 L70,35c-1.4-1.9-3.1-3.5-4.9-4.9l2.2-4.6c-1.4-1-2.9-1.9-4.5-2.6L59.8,27c-2.1-0.9-4.4-1.5-6.7-1.8l-0.4-5.1C51.8,20,50.9,20,50,20 s-1.8,0-2.6,0.1l-0.4,5.1c-2.4,0.3-4.6,0.9-6.7,1.8l-2.9-4.1c-1.6,0.7-3.1,1.6-4.5,2.6l2.1,4.6c-1.9,1.4-3.5,3.1-5,4.9l-4.5-2.1 c-1,1.4-1.9,2.9-2.6,4.5l4.1,2.9c-0.9,2.1-1.5,4.4-1.8,6.8l-5,0.4C20,48.2,20,49.1,20,50s0,1.8,0.1,2.6l5,0.4 c0.3,2.4,0.9,4.7,1.8,6.8l-4.1,2.9c0.7,1.6,1.6,3.1,2.6,4.5l4.5-2.1c1.4,1.9,3.1,3.5,5,4.9l-2.1,4.6c1.4,1,2.9,1.9,4.5,2.6l2.9-4.1 c2.1,0.9,4.4,1.5,6.7,1.8l0.4,5.1C48.2,80,49.1,80,50,80s1.8,0,2.6-0.1l0.4-5.1c2.3-0.3,4.6-0.9,6.7-1.8l2.9,4.2 c1.6-0.7,3.1-1.6,4.5-2.6L65,69.9c1.9-1.4,3.5-3,4.9-4.9l4.6,2.2c1-1.4,1.9-2.9,2.6-4.5L73,59.8c0.9-2.1,1.5-4.4,1.8-6.7L79.9,52.6 z M50,65c-8.3,0-15-6.7-15-15c0-8.3,6.7-15,15-15s15,6.7,15,15C65,58.3,58.3,65,50,65z",fill:"currentColor"},[(0,r.h)("animateTransform",{attributeName:"transform",type:"rotate",from:"90 50 50",to:"0 50 50",dur:"1s",repeatCount:"indefinite"})])]),(0,r.h)("g",{transform:"translate(20,20) rotate(15 50 50)"},[(0,r.h)("path",{d:"M79.9,52.6C80,51.8,80,50.9,80,50s0-1.8-0.1-2.6l-5.1-0.4c-0.3-2.4-0.9-4.6-1.8-6.7l4.2-2.9c-0.7-1.6-1.6-3.1-2.6-4.5 L70,35c-1.4-1.9-3.1-3.5-4.9-4.9l2.2-4.6c-1.4-1-2.9-1.9-4.5-2.6L59.8,27c-2.1-0.9-4.4-1.5-6.7-1.8l-0.4-5.1C51.8,20,50.9,20,50,20 s-1.8,0-2.6,0.1l-0.4,5.1c-2.4,0.3-4.6,0.9-6.7,1.8l-2.9-4.1c-1.6,0.7-3.1,1.6-4.5,2.6l2.1,4.6c-1.9,1.4-3.5,3.1-5,4.9l-4.5-2.1 c-1,1.4-1.9,2.9-2.6,4.5l4.1,2.9c-0.9,2.1-1.5,4.4-1.8,6.8l-5,0.4C20,48.2,20,49.1,20,50s0,1.8,0.1,2.6l5,0.4 c0.3,2.4,0.9,4.7,1.8,6.8l-4.1,2.9c0.7,1.6,1.6,3.1,2.6,4.5l4.5-2.1c1.4,1.9,3.1,3.5,5,4.9l-2.1,4.6c1.4,1,2.9,1.9,4.5,2.6l2.9-4.1 c2.1,0.9,4.4,1.5,6.7,1.8l0.4,5.1C48.2,80,49.1,80,50,80s1.8,0,2.6-0.1l0.4-5.1c2.3-0.3,4.6-0.9,6.7-1.8l2.9,4.2 c1.6-0.7,3.1-1.6,4.5-2.6L65,69.9c1.9-1.4,3.5-3,4.9-4.9l4.6,2.2c1-1.4,1.9-2.9,2.6-4.5L73,59.8c0.9-2.1,1.5-4.4,1.8-6.7L79.9,52.6 z M50,65c-8.3,0-15-6.7-15-15c0-8.3,6.7-15,15-15s15,6.7,15,15C65,58.3,58.3,65,50,65z",fill:"currentColor"},[(0,r.h)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 50 50",to:"90 50 50",dur:"1s",repeatCount:"indefinite"})])])];(0,r.aZ)({name:"QSpinnerGears",props:i.G,setup(e){const{cSize:t,classes:n}=(0,i.Z)(e);return()=>(0,r.h)("svg",{class:n.value,width:t.value,height:t.value,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",xmlns:"http://www.w3.org/2000/svg"},s)}})},4633:(e,t,n)=>{"use strict";n.d(t,{G:()=>s,Z:()=>o});var r=n(1959),i=n(2417);const s={size:{type:[Number,String],default:"1em"},color:String};function o(e){return{cSize:(0,r.Fl)((()=>e.size in i.Ok?`${i.Ok[e.size]}px`:e.size)),classes:(0,r.Fl)((()=>"q-spinner"+(e.color?` text-${e.color}`:"")))}}},9570:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(3673),i=n(1959),s=n(7657);const o=(0,r.aZ)({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:t}){const n=(0,i.Fl)((()=>"q-toolbar row no-wrap items-center"+(!0===e.inset?" q-toolbar--inset":"")));return()=>(0,r.h)("div",{class:n.value},(0,s.KR)(t.default))}})},3747:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(3673),i=n(1959),s=n(7657);const o=(0,r.aZ)({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:t}){const n=(0,i.Fl)((()=>"q-toolbar__title ellipsis"+(!0===e.shrink?" col-shrink":"")));return()=>(0,r.h)("div",{class:n.value},(0,s.KR)(t.default))}})},2236:(e,t,n)=>{"use strict";n.d(t,{S:()=>i,Z:()=>s});var r=n(1959);const i={dark:{type:Boolean,default:null}};function s(e,t){return(0,r.Fl)((()=>null===e.dark?t.dark.isActive:e.dark))}},7277:(e,t,n)=>{"use strict";n.d(t,{$:()=>u,Z:()=>h});n(5363);var r=n(3673),i=n(1959),s=n(4716),o=n(7445);function a(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function c(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function l(e,t){for(const n in t){const r=t[n],i=e[n];if("string"===typeof r){if(r!==i)return!1}else if(!1===Array.isArray(i)||i.length!==r.length||r.some(((e,t)=>e!==i[t])))return!1}return!0}const u={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},disable:Boolean};function h(){const e=(0,r.FN)(),{props:t,attrs:n,proxy:u}=e,h=(0,o.Rb)(e),d=(0,i.Fl)((()=>!0===h&&!0!==t.disable&&void 0!==t.to&&null!==t.to&&""!==t.to)),f=(0,i.Fl)((()=>!0===d.value?"a":t.tag||"div")),p=(0,i.Fl)((()=>!0===d.value?u.$router.resolve(t.to):null)),m=(0,i.Fl)((()=>{if(!1===d.value)return null;const{matched:e}=p.value,{length:t}=e,n=e[t-1];if(void 0===n)return-1;const r=u.$route.matched;if(0===r.length)return-1;const i=r.findIndex(c.bind(null,n));if(i>-1)return i;const s=a(e[t-2]);return t>1&&a(n)===s&&r[r.length-1].path!==s?r.findIndex(c.bind(null,e[t-2])):i})),g=(0,i.Fl)((()=>!0===d.value&&m.value>-1&&l(u.$route.params,p.value.params))),v=(0,i.Fl)((()=>!0===g.value&&m.value===u.$route.matched.length-1)),y=(0,i.Fl)((()=>!0===d.value?!0===v.value?` ${t.exactActiveClass} ${t.activeClass}`:!0===t.exact?"":!0===g.value?` ${t.activeClass}`:"":"")),w=(0,i.Fl)((()=>!0===d.value?{href:p.value.href,target:n.target,role:"link"}:{}));function b(e){return!(!0===t.disable||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||!0!==e.__qNavigate&&!0===e.defaultPrevented||void 0!==e.button&&0!==e.button||"_blank"===n.target)&&((0,s.X$)(e),u.$router[!0===t.replace?"replace":"push"](t.to).catch((()=>{})),!0)}return{hasLink:d,linkTag:f,linkRoute:p,linkIsActive:g,linkIsExactActive:v,linkClass:y,linkProps:w,navigateToLink:b}}},2417:(e,t,n)=>{"use strict";n.d(t,{Ok:()=>i,LU:()=>s,ZP:()=>o});var r=n(1959);const i={xs:18,sm:24,md:32,lg:38,xl:46},s={size:String};function o(e,t=i){return(0,r.Fl)((()=>void 0!==e.size?{fontSize:e.size in t?`${t[e.size]}px`:e.size}:null))}},6489:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(2012),i=n(4716),s=n(1436);function o(e,t=250){let n,r=!1;return function(){return!1===r&&(r=!0,setTimeout((()=>{r=!1}),t),n=e.apply(this,arguments)),n}}function a(e,t,n,s){!0===n.modifiers.stop&&(0,i.sT)(e);const o=n.modifiers.color;let a=n.modifiers.center;a=!0===a||!0===s;const c=document.createElement("span"),l=document.createElement("span"),u=(0,i.FK)(e),{left:h,top:d,width:f,height:p}=t.getBoundingClientRect(),m=Math.sqrt(f*f+p*p),g=m/2,v=(f-m)/2+"px",y=a?v:u.left-h-g+"px",w=(p-m)/2+"px",b=a?w:u.top-d-g+"px";l.className="q-ripple__inner",(0,r.iv)(l,{height:`${m}px`,width:`${m}px`,transform:`translate3d(${y},${b},0) scale3d(.2,.2,1)`,opacity:0}),c.className="q-ripple"+(o?" text-"+o:""),c.setAttribute("dir","ltr"),c.appendChild(l),t.appendChild(c);const _=()=>{c.remove(),clearTimeout(T)};n.abort.push(_);let T=setTimeout((()=>{l.classList.add("q-ripple__inner--enter"),l.style.transform=`translate3d(${v},${w},0) scale3d(1,1,1)`,l.style.opacity=.2,T=setTimeout((()=>{l.classList.remove("q-ripple__inner--enter"),l.classList.add("q-ripple__inner--leave"),l.style.opacity=0,T=setTimeout((()=>{c.remove(),n.abort.splice(n.abort.indexOf(_),1)}),275)}),250)}),50)}function c(e,{modifiers:t,value:n,arg:r,instance:i}){const s=Object.assign({},i.$q.config.ripple,t,n);e.modifiers={early:!0===s.early,stop:!0===s.stop,center:!0===s.center,color:s.color||r,keyCodes:[].concat(s.keyCodes||13)}}const l={name:"ripple",beforeMount(e,t){const n={enabled:!1!==t.value,modifiers:{},abort:[],start(t){!0===n.enabled&&!0!==t.qSkipRipple&&(!0===n.modifiers.early?!0===["mousedown","touchstart"].includes(t.type):"click"===t.type)&&a(t,e,n,!0===t.qKeyEvent)},keystart:o((t=>{!0===n.enabled&&!0!==t.qSkipRipple&&!0===(0,s.So)(t,n.modifiers.keyCodes)&&t.type==="key"+(!0===n.modifiers.early?"down":"up")&&a(t,e,n,!0)}),300)};c(n,t),e.__qripple=n,(0,i.M0)(n,"main",[[e,"mousedown","start","passive"],[e,"touchstart","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const n=e.__qripple;n.enabled=!1!==t.value,!0===n.enabled&&Object(t.value)===t.value&&c(n,t)}},beforeUnmount(e){const t=e.__qripple;t.abort.forEach((e=>{e()})),(0,i.ul)(t,"main"),delete e._qripple}}},6583:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});n(71);var r=n(4688),i=n(4716);const s=()=>!0;function o(e){return"string"===typeof e&&""!==e&&"/"!==e&&"#/"!==e}function a(e){return!0===e.startsWith("#")&&(e=e.substr(1)),!1===e.startsWith("/")&&(e="/"+e),!0===e.endsWith("/")&&(e=e.substr(0,e.length-1)),"#"+e}function c(e){if(!1===e.backButtonExit)return()=>!1;if("*"===e.backButtonExit)return s;const t=["#/"];return!0===Array.isArray(e.backButtonExit)&&t.push(...e.backButtonExit.filter(o).map(a)),()=>t.includes(window.location.hash)}const l={__history:[],add:i.ZT,remove:i.ZT,install({$q:e}){if(!0===this.__installed)return;const{cordova:t,capacitor:n}=r.Lp.is;if(!0!==t&&!0!==n)return;const i=e.config[!0===t?"cordova":"capacitor"];if(void 0!==i&&!1===i.backButton)return;if(!0===n&&(void 0===window.Capacitor||void 0===window.Capacitor.Plugins.App))return;this.add=e=>{void 0===e.condition&&(e.condition=s),this.__history.push(e)},this.remove=e=>{const t=this.__history.indexOf(e);t>=0&&this.__history.splice(t,1)};const o=c(Object.assign({backButtonExit:!0},i)),a=()=>{if(this.__history.length){const e=this.__history[this.__history.length-1];!0===e.condition()&&(this.__history.pop(),e.handler())}else!0===o()?navigator.app.exitApp():window.history.back()};!0===t?document.addEventListener("deviceready",(()=>{document.addEventListener("backbutton",a,!1)})):window.Capacitor.Plugins.App.addListener("backButton",a)}}},4705:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(2002);const i={name:"material-icons",type:{positive:"check_circle",negative:"warning",info:"info",warning:"priority_high"},arrow:{up:"arrow_upward",right:"arrow_forward",down:"arrow_downward",left:"arrow_back",dropdown:"arrow_drop_down"},chevron:{left:"chevron_left",right:"chevron_right"},colorPicker:{spectrum:"gradient",tune:"tune",palette:"style"},pullToRefresh:{icon:"refresh"},carousel:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down",navigationIcon:"lens"},chip:{remove:"cancel",selected:"check"},datetime:{arrowLeft:"chevron_left",arrowRight:"chevron_right",now:"access_time",today:"today"},editor:{bold:"format_bold",italic:"format_italic",strikethrough:"strikethrough_s",underline:"format_underlined",unorderedList:"format_list_bulleted",orderedList:"format_list_numbered",subscript:"vertical_align_bottom",superscript:"vertical_align_top",hyperlink:"link",toggleFullscreen:"fullscreen",quote:"format_quote",left:"format_align_left",center:"format_align_center",right:"format_align_right",justify:"format_align_justify",print:"print",outdent:"format_indent_decrease",indent:"format_indent_increase",removeFormat:"format_clear",formatting:"text_format",fontSize:"format_size",align:"format_align_left",hr:"remove",undo:"undo",redo:"redo",heading:"format_size",code:"code",size:"format_size",font:"font_download",viewSource:"code"},expansionItem:{icon:"keyboard_arrow_down",denseIcon:"arrow_drop_down"},fab:{icon:"add",activeIcon:"close"},field:{clear:"cancel",error:"error"},pagination:{first:"first_page",prev:"keyboard_arrow_left",next:"keyboard_arrow_right",last:"last_page"},rating:{icon:"grade"},stepper:{done:"check",active:"edit",error:"warning"},tabs:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down"},table:{arrowUp:"arrow_upward",warning:"warning",firstPage:"first_page",prevPage:"chevron_left",nextPage:"chevron_right",lastPage:"last_page"},tree:{icon:"play_arrow"},uploader:{done:"done",clear:"clear",add:"add_box",upload:"cloud_upload",removeQueue:"clear_all",removeUploaded:"done_all"}},s=(0,r.Z)({iconMapFn:null,__icons:{}},{set(e,t){const n={...e,rtl:!0===e.rtl};n.set=s.set,Object.assign(s.__icons,n)},install({$q:e,iconSet:t,ssrContext:n}){void 0!==e.config.iconMapFn&&(this.iconMapFn=e.config.iconMapFn),e.iconSet=this.__icons,Object.defineProperty(e,"iconMapFn",{get:()=>this.iconMapFn,set:e=>{this.iconMapFn=e}}),!0===this.__installed?void 0!==t&&this.set(t):this.set(t||i)}}),o=s},762:(e,t,n)=>{"use strict";n.d(t,{$:()=>k,Z:()=>A});var r=n(8880),i=n(4688),s=n(2002),o=n(4716);function a(e,t=250,n){let r;function i(){const i=arguments,s=()=>{r=void 0,!0!==n&&e.apply(this,i)};clearTimeout(r),!0===n&&void 0===r&&e.apply(this,i),r=setTimeout(s,t)}return i.cancel=()=>{clearTimeout(r)},i}const c=["sm","md","lg","xl"],{passive:l}=o.rU,u=(0,s.Z)({width:0,height:0,name:"xs",sizes:{sm:600,md:1024,lg:1440,xl:1920},lt:{sm:!0,md:!0,lg:!0,xl:!0},gt:{xs:!1,sm:!1,md:!1,lg:!1},xs:!0,sm:!1,md:!1,lg:!1,xl:!1},{setSizes:o.ZT,setDebounce:o.ZT,install({$q:e,onSSRHydrated:t}){if(e.screen=this,!0===this.__installed)return void(void 0!==e.config.screen&&(!1===e.config.screen.bodyClasses?document.body.classList.remove(`screen--${this.name}`):this.__update(!0)));const n=void 0!==e.config.screen&&!0===e.config.screen.bodyClasses;this.__update=e=>{const t=window.innerWidth,r=window.innerHeight;if(r!==this.height&&(this.height=r),t!==this.width)this.width=t;else if(!0!==e)return;let i=this.sizes;this.gt.xs=t>=i.sm,this.gt.sm=t>=i.md,this.gt.md=t>=i.lg,this.gt.lg=t>=i.xl,this.lt.sm=t<i.sm,this.lt.md=t<i.md,this.lt.lg=t<i.lg,this.lt.xl=t<i.xl,this.xs=this.lt.sm,this.sm=!0===this.gt.xs&&!0===this.lt.md,this.md=!0===this.gt.sm&&!0===this.lt.lg,this.lg=!0===this.gt.md&&!0===this.lt.xl,this.xl=this.gt.lg,i=(!0===this.xs?"xs":!0===this.sm&&"sm")||!0===this.md&&"md"||!0===this.lg&&"lg"||"xl",i!==this.name&&(!0===n&&(document.body.classList.remove(`screen--${this.name}`),document.body.classList.add(`screen--${i}`)),this.name=i)};let r,s={},o=16;this.setSizes=e=>{c.forEach((t=>{void 0!==e[t]&&(s[t]=e[t])}))},this.setDebounce=e=>{o=e};const u=()=>{const e=getComputedStyle(document.body),t=void 0!==window.visualViewport?window.visualViewport:window;e.getPropertyValue("--q-size-sm")&&c.forEach((t=>{this.sizes[t]=parseInt(e.getPropertyValue(`--q-size-${t}`),10)})),this.setSizes=e=>{c.forEach((t=>{e[t]&&(this.sizes[t]=e[t])})),this.__update(!0)},this.setDebounce=e=>{void 0!==r&&t.removeEventListener("resize",r,l),r=e>0?a(this.__update,e):this.__update,t.addEventListener("resize",r,l)},this.setDebounce(o),Object.keys(s).length>0?(this.setSizes(s),s=void 0):this.__update(),!0===n&&"xs"===this.name&&document.body.classList.add("screen--xs")};!0===i.uX.value?t.push(u):u()}});n(5363);const h=(0,s.Z)({isActive:!1,mode:!1},{__media:void 0,set(e){h.mode=e,"auto"===e?(void 0===h.__media&&(h.__media=window.matchMedia("(prefers-color-scheme: dark)"),h.__updateMedia=()=>{h.set("auto")},h.__media.addListener(h.__updateMedia)),e=h.__media.matches):void 0!==h.__media&&(h.__media.removeListener(h.__updateMedia),h.__media=void 0),h.isActive=!0===e,document.body.classList.remove("body--"+(!0===e?"light":"dark")),document.body.classList.add("body--"+(!0===e?"dark":"light"))},toggle(){h.set(!1===h.isActive)},install({$q:e,onSSRHydrated:t,ssrContext:n}){const{dark:r}=e.config;if(e.dark=this,!0===this.__installed&&void 0===r)return;this.isActive=!0===r;const s=void 0!==r&&r;if(!0===i.uX.value){const e=e=>{this.__fromSSR=e},n=this.set;this.set=e,e(s),t.push((()=>{this.set=n,this.set(this.__fromSSR)}))}else this.set(s)}}),d=h;var f=n(6583),p=n(1845);function m(e,t,n=document.body){if("string"!==typeof e)throw new TypeError("Expected a string as propName");if("string"!==typeof t)throw new TypeError("Expected a string as value");if(!(n instanceof Element))throw new TypeError("Expected a DOM element");n.style.setProperty(`--q-${e}`,t)}var g=n(1436);function v(e){return!0===e.ios?"ios":!0===e.android?"android":void 0}function y({is:e,has:t,within:n},r){const i=[!0===e.desktop?"desktop":"mobile",(!1===t.touch?"no-":"")+"touch"];if(!0===e.mobile){const t=v(e);void 0!==t&&i.push("platform-"+t)}if(!0===e.nativeMobile){const t=e.nativeMobileWrapper;i.push(t),i.push("native-mobile"),!0!==e.ios||void 0!==r[t]&&!1===r[t].iosStatusBarPadding||i.push("q-ios-padding")}else!0===e.electron?i.push("electron"):!0===e.bex&&i.push("bex");return!0===n.iframe&&i.push("within-iframe"),i}function w(){const e=document.body.className;let t=e;void 0!==i.aG&&(t=t.replace("desktop","platform-ios mobile")),!0===i.Lp.has.touch&&(t=t.replace("no-touch","touch")),!0===i.Lp.within.iframe&&(t+=" within-iframe"),e!==t&&(document.body.className=t)}function b(e){for(const t in e)m(t,e[t])}const _={install(e){const{$q:t}=e;if(void 0!==t.config.brand&&b(t.config.brand),!0!==this.__installed){if(!0===i.uX.value)w();else{const e=y(i.Lp,t.config);document.body.classList.add.apply(document.body.classList,e)}!0===i.Lp.is.ios&&document.body.addEventListener("touchstart",o.ZT),window.addEventListener("keydown",g.ZK,!0)}}};var T=n(4705),I=n(2547),E=n(5578);const S=[i.ZP,_,d,u,f.Z,p.Z,T.Z];function k(e,t){const n=(0,r.ri)(e);n.config.globalProperties=t.config.globalProperties;const{reload:i,...s}=t._context;return Object.assign(n._context,s),n}function x(e,t){t.forEach((t=>{t.install(e),t.__installed=!0}))}function C(e,t,n){e.config.globalProperties.$q=n.$q,e.provide(I.Ng,n.$q),x(n,S),void 0!==t.components&&Object.values(t.components).forEach((t=>{Object(t)===t&&void 0!==t.name&&e.component(t.name,t)})),void 0!==t.directives&&Object.values(t.directives).forEach((t=>{Object(t)===t&&void 0!==t.name&&e.directive(t.name,t)})),void 0!==t.plugins&&x(n,Object.values(t.plugins).filter((e=>"function"===typeof e.install&&!1===S.includes(e)))),!0===i.uX.value&&(n.$q.onSSRHydrated=()=>{n.onSSRHydrated.forEach((e=>{e()})),n.$q.onSSRHydrated=()=>{}})}const A=function(e,t={}){const n={version:"2.1.0"};!1===E.Uf?(void 0!==t.config&&Object.assign(E.w6,t.config),n.config={...E.w6},(0,E.tP)()):n.config=t.config||{},C(e,t,{parentApp:e,$q:n,lang:t.lang,iconSet:t.iconSet,onSSRHydrated:[]})}},1845:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});n(5363);var r=n(2002);const i={isoName:"en-US",nativeName:"English (US)",label:{clear:"Clear",ok:"OK",cancel:"Cancel",close:"Close",set:"Set",select:"Select",reset:"Reset",remove:"Remove",update:"Update",create:"Create",search:"Search",filter:"Filter",refresh:"Refresh"},date:{days:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),daysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),firstDayOfWeek:0,format24h:!1,pluralDay:"days"},table:{noData:"No data available",noResults:"No matching records found",loading:"Loading...",selectedRecords:e=>1===e?"1 record selected.":(0===e?"No":e)+" records selected.",recordsPerPage:"Records per page:",allRows:"All",pagination:(e,t,n)=>e+"-"+t+" of "+n,columns:"Columns"},editor:{url:"URL",bold:"Bold",italic:"Italic",strikethrough:"Strikethrough",underline:"Underline",unorderedList:"Unordered List",orderedList:"Ordered List",subscript:"Subscript",superscript:"Superscript",hyperlink:"Hyperlink",toggleFullscreen:"Toggle Fullscreen",quote:"Quote",left:"Left align",center:"Center align",right:"Right align",justify:"Justify align",print:"Print",outdent:"Decrease indentation",indent:"Increase indentation",removeFormat:"Remove formatting",formatting:"Formatting",fontSize:"Font Size",align:"Align",hr:"Insert Horizontal Rule",undo:"Undo",redo:"Redo",heading1:"Heading 1",heading2:"Heading 2",heading3:"Heading 3",heading4:"Heading 4",heading5:"Heading 5",heading6:"Heading 6",paragraph:"Paragraph",code:"Code",size1:"Very small",size2:"A bit small",size3:"Normal",size4:"Medium-large",size5:"Big",size6:"Very big",size7:"Maximum",defaultFont:"Default Font",viewSource:"View Source"},tree:{noNodes:"No nodes available",noResults:"No matching nodes found"}};function s(){const e=!0===Array.isArray(navigator.languages)&&navigator.languages.length>0?navigator.languages[0]:navigator.language;if("string"===typeof e)return e.split(/[-_]/).map(((e,t)=>0===t?e.toLowerCase():t>1||e.length<4?e.toUpperCase():e[0].toUpperCase()+e.slice(1).toLowerCase())).join("-")}const o=(0,r.Z)({__langPack:{}},{getLocale:s,set(e=i,t){const n={...e,rtl:!0===e.rtl,getLocale:s};{const e=document.documentElement;e.setAttribute("dir",!0===n.rtl?"rtl":"ltr"),e.setAttribute("lang",n.isoName),n.set=o.set,Object.assign(o.__langPack,n),o.props=n,o.isoName=n.isoName,o.nativeName=n.nativeName}},install({$q:e,lang:t,ssrContext:n}){e.lang=o.__langPack,!0===this.__installed?void 0!==t&&this.set(t):this.set(t||i)}}),a=o},6249:(e,t,n)=>{"use strict";n.d(t,{Z:()=>v});n(6801);var r=n(8880),i=n(3673),s=n(6833),o=n(2002),a=n(8144),c=n(490);let l,u,h,d=0,f={};const p={delay:0,message:!1,html:!1,spinnerSize:80,spinnerColor:"",messageColor:"",backgroundColor:"",boxClass:"",spinner:s.Z,customClass:""},m={...p},g=(0,o.Z)({isActive:!1},{show(e){if(f=e===Object(e)&&!0===e.ignoreDefaults?{...p,...e}:{...m,...e},g.isActive=!0,void 0!==l)return f.uid=d,void u.$forceUpdate();f.uid=++d,clearTimeout(h),h=setTimeout((()=>{h=void 0;const e=(0,a.q_)("q-loading");l=(0,r.ri)({name:"QLoading",setup(){function t(){!0!==g.isActive&&void 0!==l&&((0,c.Z)(!1),l.unmount(e),(0,a.pB)(e),l=void 0,u=void 0)}function n(){if(!0!==g.isActive)return null;const e=[(0,i.h)(f.spinner,{class:"q-loading__spinner",color:f.spinnerColor,size:f.spinnerSize})];return f.message&&e.push((0,i.h)("div",{class:"q-loading__message"+(f.messageColor?` text-${f.messageColor}`:""),[!0===f.html?"innerHTML":"textContent"]:f.message})),(0,i.h)("div",{class:"q-loading fullscreen flex flex-center z-max "+f.customClass.trim(),key:f.uid},[(0,i.h)("div",{class:"q-loading__backdrop"+(f.backgroundColor?` bg-${f.backgroundColor}`:"")}),(0,i.h)("div",{class:"q-loading__box column items-center "+f.boxClass},e)])}return(0,i.bv)((()=>{(0,c.Z)(!0)})),()=>(0,i.h)(r.uT,{name:"q-transition--fade",appear:!0,onAfterLeave:t},n)}}),u=l.mount(e)}),f.delay)},hide(){!0===g.isActive&&(void 0!==h&&(clearTimeout(h),h=void 0),g.isActive=!1)},setDefaults(e){e===Object(e)&&Object.assign(m,e)},install({$q:e}){e.loading=this,void 0!==e.config.loading&&this.setDefaults(e.config.loading)}}),v=g},6417:(e,t,n)=>{"use strict";n.d(t,{Z:()=>E});var r=n(3673),i=n(1959),s=n(8880),o=n(4554),a=n(2417),c=n(7657);const l=(0,r.aZ)({name:"QAvatar",props:{...a.LU,fontSize:String,color:String,textColor:String,icon:String,square:Boolean,rounded:Boolean},setup(e,{slots:t}){const n=(0,a.ZP)(e),s=(0,i.Fl)((()=>"q-avatar"+(e.color?` bg-${e.color}`:"")+(e.textColor?` text-${e.textColor} q-chip--colored`:"")+(!0===e.square?" q-avatar--square":!0===e.rounded?" rounded-borders":""))),l=(0,i.Fl)((()=>e.fontSize?{fontSize:e.fontSize}:null));return()=>{const i=void 0!==e.icon?[(0,r.h)(o.Z,{name:e.icon})]:void 0;return(0,r.h)("div",{class:s.value,style:n.value},[(0,r.h)("div",{class:"q-avatar__content row flex-center overflow-hidden",style:l.value},(0,c.pf)(t.default,i))])}}});var u=n(4607),h=n(6833),d=(n(4716),n(8144)),f=n(762);let p,m=0;const g={},v=["top-left","top-right","bottom-left","bottom-right","top","bottom","left","right","center"],y=["top-left","top-right","bottom-left","bottom-right"],w={positive:{icon:e=>e.iconSet.type.positive,color:"positive"},negative:{icon:e=>e.iconSet.type.negative,color:"negative"},warning:{icon:e=>e.iconSet.type.warning,color:"warning",textColor:"dark"},info:{icon:e=>e.iconSet.type.info,color:"info"},ongoing:{group:!1,timeout:0,spinner:!0,color:"grey-8"}},b={},_={};function T(e,t){return console.error(`Notify: ${e}`,t),!1}function I(e){return(0,r.aZ)({name:"QNotifications",setup(){const t={},n=[];function a(e){clearTimeout(e.meta.timer);const r=t[e.position].value.indexOf(e);if(-1!==r){void 0!==e.group&&delete b[e.meta.group];const i=n[""+e.meta.uid];if(i){const{width:e,height:t}=getComputedStyle(i);i.style.left=`${i.offsetLeft}px`,i.style.width=e,i.style.height=t}t[e.position].value.splice(r,1),"function"===typeof e.onDismiss&&e.onDismiss()}}return v.forEach((e=>{t[e]=(0,i.iH)([]);const n=!0===["left","center","right"].includes(e)?"center":e.indexOf("top")>-1?"top":"bottom",r=e.indexOf("left")>-1?"start":e.indexOf("right")>-1?"end":"center",s=["left","right"].includes(e)?`items-${"left"===e?"start":"end"} justify-center`:"center"===e?"flex-center":`items-${r}`;_[e]=`q-notifications__list q-notifications__list--${n} fixed column no-wrap ${s}`})),p=(n,r)=>{if(!n)return T("parameter required");let s;const o={textColor:"white"};if(!0!==n.ignoreDefaults&&Object.assign(o,g),Object(n)!==n&&(o.type&&Object.assign(o,w[o.type]),n={message:n}),Object.assign(o,w[n.type||o.type],n),"function"===typeof o.icon&&(o.icon=o.icon(e)),o.spinner?(!0===o.spinner&&(o.spinner=h.Z),o.spinner=(0,i.Xl)(o.spinner)):o.spinner=!1,o.meta={hasMedia:Boolean(!1!==o.spinner||o.icon||o.avatar)},o.position){if(!1===v.includes(o.position))return T("wrong position",n)}else o.position="bottom";if(void 0===o.timeout)o.timeout=5e3;else{const e=parseInt(o.timeout,10);if(isNaN(e)||e<0)return T("wrong timeout",n);o.timeout=e}0===o.timeout?o.progress=!1:!0===o.progress&&(o.meta.progressClass="q-notification__progress"+(o.progressClass?` ${o.progressClass}`:""),o.meta.progressStyle={animationDuration:`${o.timeout+1e3}ms`});const c=(!0===Array.isArray(n.actions)?n.actions:[]).concat(!0!==n.ignoreDefaults&&!0===Array.isArray(g.actions)?g.actions:[]).concat(void 0!==w[n.type]&&!0===Array.isArray(w[n.type].actions)?w[n.type].actions:[]);if(o.closeBtn&&c.push({label:"string"===typeof o.closeBtn?o.closeBtn:e.lang.label.close}),o.actions=c.map((({handler:e,noDismiss:t,...n})=>({flat:!0,...n,onClick:"function"===typeof e?()=>{e(),!0!==t&&l()}:()=>{l()}}))),void 0===o.multiLine&&(o.multiLine=o.actions.length>1),Object.assign(o.meta,{class:"q-notification row items-stretch q-notification--"+(!0===o.multiLine?"multi-line":"standard")+(void 0!==o.color?` bg-${o.color}`:"")+(void 0!==o.textColor?` text-${o.textColor}`:"")+(void 0!==o.classes?` ${o.classes}`:""),wrapperClass:"q-notification__wrapper col relative-position border-radius-inherit "+(!0===o.multiLine?"column no-wrap justify-center":"row items-center"),contentClass:"q-notification__content row items-center"+(!0===o.multiLine?"":" col"),attrs:{role:"alert",...o.attrs}}),!1===o.group?(o.group=void 0,o.meta.group=void 0):(void 0!==o.group&&!0!==o.group||(o.group=[o.message,o.caption,o.multiline].concat(o.actions.map((e=>`${e.label}*${e.icon}`))).join("|")),o.meta.group=o.group+"|"+o.position),0===o.actions.length?o.actions=void 0:o.meta.actionsClass="q-notification__actions row items-center "+(!0===o.multiLine?"justify-end":"col-auto")+(!0===o.meta.hasMedia?" q-notification__actions--with-media":""),void 0!==r){clearTimeout(r.notif.meta.timer),o.meta.uid=r.notif.meta.uid;const e=t[o.position].value.indexOf(r.notif);t[o.position].value[e]=o}else{const e=b[o.meta.group];if(void 0===e){if(o.meta.uid=m++,o.meta.badge=1,-1!==["left","right","center"].indexOf(o.position))t[o.position].value.splice(Math.floor(t[o.position].value.length/2),0,o);else{const e=o.position.indexOf("top")>-1?"unshift":"push";t[o.position].value[e](o)}void 0!==o.group&&(b[o.meta.group]=o)}else{if(clearTimeout(e.meta.timer),void 0!==o.badgePosition){if(!1===y.includes(o.badgePosition))return T("wrong badgePosition",n)}else o.badgePosition="top-"+(o.position.indexOf("left")>-1?"right":"left");o.meta.uid=e.meta.uid,o.meta.badge=e.meta.badge+1,o.meta.badgeClass=`q-notification__badge q-notification__badge--${o.badgePosition}`+(void 0!==o.badgeColor?` bg-${o.badgeColor}`:"")+(void 0!==o.badgeTextColor?` text-${o.badgeTextColor}`:"")+(o.badgeClass?` ${o.badgeClass}`:"");const r=t[o.position].value.indexOf(e);t[o.position].value[r]=b[o.meta.group]=o}}const l=()=>{a(o),s=void 0};return o.timeout>0&&(o.meta.timer=setTimeout((()=>{l()}),o.timeout+1e3)),void 0!==o.group?e=>{void 0!==e?T("trying to update a grouped one which is forbidden",n):l()}:(s={dismiss:l,config:n,notif:o},void 0===r?e=>{if(void 0!==s)if(void 0===e)s.dismiss();else{const t=Object.assign({},s.config,e,{group:!1,position:o.position});p(t,s)}}:void Object.assign(r,s))},()=>(0,r.h)("div",{class:"q-notifications"},v.map((e=>(0,r.h)(s.W3,{key:e,class:_[e],tag:"div",name:`q-notification--${e}`},(()=>t[e].value.map((e=>{let t;const i=e.meta,s={class:"q-notification__message col"};if(!0===e.html)s.innerHTML=e.caption?`<div>${e.message}</div><div class="q-notification__caption">${e.caption}</div>`:e.message;else{const n=[e.message];t=e.caption?[(0,r.h)("div",n),(0,r.h)("div",{class:"q-notification__caption"},[e.caption])]:n}const a=[];!0===i.hasMedia&&(!1!==e.spinner?a.push((0,r.h)(e.spinner,{class:"q-notification__spinner"})):e.icon?a.push((0,r.h)(o.Z,{class:"q-notification__icon",name:e.icon,role:"img"})):e.avatar&&a.push((0,r.h)(l,{class:"q-notification__avatar"},(()=>(0,r.h)("img",{src:e.avatar,"aria-hidden":"true"}))))),a.push((0,r.h)("div",s,t));const c=[(0,r.h)("div",{class:i.contentClass},a)];return!0===e.progress&&c.push((0,r.h)("div",{key:`${i.uid}|p|${i.badge}`,class:i.progressClass,style:i.progressStyle})),void 0!==e.actions&&c.push((0,r.h)("div",{class:i.actionsClass},e.actions.map((e=>(0,r.h)(u.Z,e))))),i.badge>1&&c.push((0,r.h)("div",{key:`${i.uid}|${i.badge}`,class:e.meta.badgeClass,style:e.badgeStyle},[i.badge])),(0,r.h)("div",{ref:e=>{n[""+i.uid]=e},key:i.uid,class:i.class,...i.attrs},[(0,r.h)("div",{class:i.wrapperClass},c)])})))))))}})}const E={create(e){return p(e)},setDefaults(e){e===Object(e)&&Object.assign(g,e)},registerType(e,t){t===Object(t)&&(w[e]=t)},install({$q:e,parentApp:t}){if(e.notify=this.create,e.notify.setDefaults=this.setDefaults,e.notify.registerType=this.registerType,void 0!==e.config.notify&&this.setDefaults(e.config.notify),!0!==this.__installed){const n=(0,d.q_)("q-notify");(0,f.$)(I(e),t).mount(n)}}}},4688:(e,t,n)=>{"use strict";n.d(t,{uX:()=>i,aG:()=>s,Lp:()=>p,ZP:()=>g});var r=n(1959);const i=(0,r.iH)(!1);let s,o=!1;function a(e,t){const n=/(edge|edga|edgios)\/([\w.]+)/.exec(e)||/(opr)[\/]([\w.]+)/.exec(e)||/(vivaldi)[\/]([\w.]+)/.exec(e)||/(chrome|crios)[\/]([\w.]+)/.exec(e)||/(iemobile)[\/]([\w.]+)/.exec(e)||/(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e)||/(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e)||/(firefox|fxios)[\/]([\w.]+)/.exec(e)||/(webkit)[\/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[\/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("trident")>=0&&/(rv)(?::| )([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:n[5]||n[3]||n[1]||"",version:n[2]||n[4]||"0",versionNumber:n[4]||n[2]||"0",platform:t[0]||""}}function c(e){return/(ipad)/.exec(e)||/(ipod)/.exec(e)||/(windows phone)/.exec(e)||/(iphone)/.exec(e)||/(kindle)/.exec(e)||/(silk)/.exec(e)||/(android)/.exec(e)||/(win)/.exec(e)||/(mac)/.exec(e)||/(linux)/.exec(e)||/(cros)/.exec(e)||/(playbook)/.exec(e)||/(bb)/.exec(e)||/(blackberry)/.exec(e)||[]}const l="ontouchstart"in window||window.navigator.maxTouchPoints>0;function u(e){s={is:{...e}},delete e.mac,delete e.desktop;const t=Math.min(window.innerHeight,window.innerWidth)>414?"ipad":"iphone";Object.assign(e,{mobile:!0,ios:!0,platform:t,[t]:!0})}function h(e){const t=e.toLowerCase(),n=c(t),r=a(t,n),i={};r.browser&&(i[r.browser]=!0,i.version=r.version,i.versionNumber=parseInt(r.versionNumber,10)),r.platform&&(i[r.platform]=!0);const s=i.android||i.ios||i.bb||i.blackberry||i.ipad||i.iphone||i.ipod||i.kindle||i.playbook||i.silk||i["windows phone"];return!0===s||t.indexOf("mobile")>-1?(i.mobile=!0,i.edga||i.edgios?(i.edge=!0,r.browser="edge"):i.crios?(i.chrome=!0,r.browser="chrome"):i.fxios&&(i.firefox=!0,r.browser="firefox")):i.desktop=!0,(i.ipod||i.ipad||i.iphone)&&(i.ios=!0),i["windows phone"]&&(i.winphone=!0,delete i["windows phone"]),(i.chrome||i.opr||i.safari||i.vivaldi||!0===i.mobile&&!0!==i.ios&&!0!==s)&&(i.webkit=!0),(i.safari&&i.blackberry||i.bb)&&(r.browser="blackberry",i.blackberry=!0),i.safari&&i.playbook&&(r.browser="playbook",i.playbook=!0),i.opr&&(r.browser="opera",i.opera=!0),i.safari&&i.android&&(r.browser="android",i.android=!0),i.safari&&i.kindle&&(r.browser="kindle",i.kindle=!0),i.safari&&i.silk&&(r.browser="silk",i.silk=!0),i.vivaldi&&(r.browser="vivaldi",i.vivaldi=!0),i.name=r.browser,i.platform=r.platform,t.indexOf("electron")>-1?i.electron=!0:document.location.href.indexOf("-extension://")>-1?i.bex=!0:(void 0!==window.Capacitor?(i.capacitor=!0,i.nativeMobile=!0,i.nativeMobileWrapper="capacitor"):void 0===window._cordovaNative&&void 0===window.cordova||(i.cordova=!0,i.nativeMobile=!0,i.nativeMobileWrapper="cordova"),!0===l&&!0===i.mac&&(!0===i.desktop&&!0===i.safari||!0===i.nativeMobile&&!0!==i.android&&!0!==i.ios&&!0!==i.ipad)&&u(i)),i}const d=navigator.userAgent||navigator.vendor||window.opera,f={has:{touch:!1,webStorage:!1},within:{iframe:!1}},p={userAgent:d,is:h(d),has:{touch:l},within:{iframe:window.self!==window.top}},m={install(e){const{$q:t}=e;!0===i.value?(e.onSSRHydrated.push((()=>{i.value=!1,Object.assign(t.platform,p),s=void 0})),t.platform=(0,r.qj)(this)):t.platform=this}};{let e;Object.defineProperty(p.has,"webStorage",{get:()=>{if(void 0!==e)return e;try{if(window.localStorage)return e=!0,!0}catch(t){}return e=!1,!1}}),o=!0===p.is.ios&&-1===window.navigator.vendor.toLowerCase().indexOf("apple"),!0===i.value?Object.assign(m,p,s,f):Object.assign(m,p)}const g=m},2012:(e,t,n)=>{"use strict";n.d(t,{iv:()=>i,sb:()=>s});var r=n(1959);function i(e,t){const n=e.style;Object.keys(t).forEach((e=>{n[e]=t[e]}))}function s(e){if(void 0===e||null===e)return;if("string"===typeof e)try{return document.querySelector(e)||void 0}catch(n){return}const t=!0===(0,r.dq)(e)?e.value:e;return t?t.$el||t:void 0}},4716:(e,t,n)=>{"use strict";n.d(t,{rU:()=>r,ZT:()=>i,du:()=>s,FK:()=>o,AZ:()=>a,sT:()=>c,X$:()=>l,NS:()=>u,Jf:()=>h,M0:()=>d,ul:()=>f});n(71);const r={hasPassive:!1,passiveCapture:!0,notPassiveCapture:!0};try{const e=Object.defineProperty({},"passive",{get(){Object.assign(r,{hasPassive:!0,passive:{passive:!0},notPassive:{passive:!1},passiveCapture:{passive:!0,capture:!0},notPassiveCapture:{passive:!1,capture:!0}})}});window.addEventListener("qtest",null,e),window.removeEventListener("qtest",null,e)}catch(p){}function i(){}function s(e){return 0===e.button}function o(e){return e.touches&&e.touches[0]?e=e.touches[0]:e.changedTouches&&e.changedTouches[0]?e=e.changedTouches[0]:e.targetTouches&&e.targetTouches[0]&&(e=e.targetTouches[0]),{top:e.clientY,left:e.clientX}}function a(e){if(e.path)return e.path;if(e.composedPath)return e.composedPath();const t=[];let n=e.target;while(n){if(t.push(n),"HTML"===n.tagName)return t.push(document),t.push(window),t;n=n.parentElement}}function c(e){e.stopPropagation()}function l(e){!1!==e.cancelable&&e.preventDefault()}function u(e){!1!==e.cancelable&&e.preventDefault(),e.stopPropagation()}function h(e,t){if(void 0===e||!0===t&&!0===e.__dragPrevented)return;const n=!0===t?e=>{e.__dragPrevented=!0,e.addEventListener("dragstart",l,r.notPassiveCapture)}:e=>{delete e.__dragPrevented,e.removeEventListener("dragstart",l,r.notPassiveCapture)};e.querySelectorAll("a, img").forEach(n)}function d(e,t,n){const i=`__q_${t}_evt`;e[i]=void 0!==e[i]?e[i].concat(n):n,n.forEach((t=>{t[0].addEventListener(t[1],e[t[2]],r[t[3]])}))}function f(e,t){const n=`__q_${t}_evt`;void 0!==e[n]&&(e[n].forEach((t=>{t[0].removeEventListener(t[1],e[t[2]],r[t[3]])})),e[n]=void 0)}},490:(e,t,n)=>{"use strict";n.d(t,{Z:()=>w});var r=n(4716),i=n(8400),s=n(4688);let o,a,c,l,u,h,d=0,f=!1;function p(e){m(e)&&(0,r.NS)(e)}function m(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const t=(0,r.AZ)(e),n=e.shiftKey&&!e.deltaX,s=!n&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),o=n||s?e.deltaY:e.deltaX;for(let r=0;r<t.length;r++){const e=t[r];if((0,i.QA)(e,s))return s?o<0&&0===e.scrollTop||o>0&&e.scrollTop+e.clientHeight===e.scrollHeight:o<0&&0===e.scrollLeft||o>0&&e.scrollLeft+e.clientWidth===e.scrollWidth}return!0}function g(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function v(e){!0!==f&&(f=!0,requestAnimationFrame((()=>{f=!1;const{height:t}=e.target,{clientHeight:n,scrollTop:r}=document.scrollingElement;void 0!==c&&t===window.innerHeight||(c=n-t,document.scrollingElement.scrollTop=r),r>c&&(document.scrollingElement.scrollTop-=Math.ceil((r-c)/8))})))}function y(e){const t=document.body,n=void 0!==window.visualViewport;if("add"===e){const{overflowY:e,overflowX:c}=window.getComputedStyle(t);o=(0,i.OI)(window),a=(0,i.u3)(window),l=t.style.left,u=t.style.top,t.style.left=`-${o}px`,t.style.top=`-${a}px`,"hidden"!==c&&("scroll"===c||t.scrollWidth>window.innerWidth)&&t.classList.add("q-body--force-scrollbar-x"),"hidden"!==e&&("scroll"===e||t.scrollHeight>window.innerHeight)&&t.classList.add("q-body--force-scrollbar-y"),t.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,!0===s.Lp.is.ios&&(!0===n?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",v,r.rU.passiveCapture),window.visualViewport.addEventListener("scroll",v,r.rU.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",g,r.rU.passiveCapture))}!0===s.Lp.is.desktop&&!0===s.Lp.is.mac&&window[`${e}EventListener`]("wheel",p,r.rU.notPassive),"remove"===e&&(!0===s.Lp.is.ios&&(!0===n?(window.visualViewport.removeEventListener("resize",v,r.rU.passiveCapture),window.visualViewport.removeEventListener("scroll",v,r.rU.passiveCapture)):window.removeEventListener("scroll",g,r.rU.passiveCapture)),t.classList.remove("q-body--prevent-scroll"),t.classList.remove("q-body--force-scrollbar-x"),t.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,t.style.left=l,t.style.top=u,window.scrollTo(o,a),c=void 0)}function w(e){let t="add";if(!0===e){if(d++,void 0!==h)return clearTimeout(h),void(h=void 0);if(d>1)return}else{if(0===d)return;if(d--,d>0)return;if(t="remove",!0===s.Lp.is.ios&&!0===s.Lp.is.nativeMobile)return clearTimeout(h),void(h=setTimeout((()=>{y(t),h=void 0}),100))}y(t)}},2002:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(1959);const i=(e,t)=>{const n={},i=(0,r.qj)(e);return Object.keys(e).forEach((e=>{n[e]={get:()=>i[e],set:t=>{i[e]=t}}})),Object.defineProperties(t,n),t}},230:(e,t,n)=>{"use strict";n.d(t,{jd:()=>s,fP:()=>o});let r=[];const i=[];function s(e){if(0!==i.length)return r.push(e),e;e()}function o(e){const t=r.indexOf(e);-1!==t&&r.splice(t,1)}},5578:(e,t,n)=>{"use strict";n.d(t,{w6:()=>r,Uf:()=>i,tP:()=>s});const r={};let i=!1;function s(){i=!0}},8144:(e,t,n)=>{"use strict";n.d(t,{q_:()=>o,pB:()=>a});var r=n(5578);const i=[];let s=document.body;function o(e){const t=document.createElement("div");if(void 0!==e&&(t.id=e),void 0!==r.w6.globalNodes){const e=r.w6.globalNodes["class"];void 0!==e&&(t.className=e)}return s.appendChild(t),i.push(t),t}function a(e){i.splice(i.indexOf(e),1),e.remove()}},1436:(e,t,n)=>{"use strict";n.d(t,{ZK:()=>i,Wm:()=>s,So:()=>o});let r=!1;function i(e){r=!0===e.isComposing}function s(e){return!0===r||e!==Object(e)||!0===e.isComposing||!0===e.qKeyEvent}function o(e,t){return!0!==s(e)&&[].concat(t).includes(e.keyCode)}},7657:(e,t,n)=>{"use strict";n.d(t,{KR:()=>i,Bl:()=>s,vs:()=>o,pf:()=>a,Jl:()=>c});var r=n(3673);function i(e,t){return void 0!==e&&e()||t}function s(e,t){if(void 0!==e){const t=e();if(void 0!==t&&null!==t)return t.slice()}return t}function o(e,t){return void 0!==e?t.concat(e()):t}function a(e,t){return void 0===e?t:void 0!==t?t.concat(e()):e()}function c(e,t,n,i,s,o){t.key=i+s;const a=(0,r.h)(e,t,n);return!0===s?(0,r.wy)(a,o()):a}},2547:(e,t,n)=>{"use strict";n.d(t,{Ng:()=>r,YE:()=>i,Mw:()=>s,vh:()=>o});const r="_q_",i="_q_l_",s="_q_pc_",o="_q_fo_"},7445:(e,t,n)=>{"use strict";n.d(t,{Rb:()=>r});n(71);function r(e){return void 0!==e.appContext.config.globalProperties.$router}},8400:(e,t,n)=>{"use strict";n.d(t,{b0:()=>s,u3:()=>o,OI:()=>a,np:()=>l,QA:()=>u});var r=n(2012);const i=[null,document,document.body,document.scrollingElement,document.documentElement];function s(e,t){let n=(0,r.sb)(t);if(void 0===n){if(void 0===e||null===e)return window;n=e.closest(".scroll,.scroll-y,.overflow-auto")}return i.includes(n)?window:n}function o(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function a(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let c;function l(){if(void 0!==c)return c;const e=document.createElement("p"),t=document.createElement("div");(0,r.iv)(e,{width:"100%",height:"200px"}),(0,r.iv)(t,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),t.appendChild(e),document.body.appendChild(t);const n=e.offsetWidth;t.style.overflow="scroll";let i=e.offsetWidth;return n===i&&(i=t.clientWidth),t.remove(),c=n-i,c}function u(e,t=!0){return!(!e||e.nodeType!==Node.ELEMENT_NODE)&&(t?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"])))}},9592:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(762),i=n(1845),s=n(4705);const o={version:"2.1.0",install:r.Z,lang:i.Z,iconSet:s.Z}},7083:e=>{e.exports.xr=function(e){return e},e.exports.BC=function(e){return e},e.exports.h=function(e){return e}},392:(e,t,n)=>{var r=n(419),i=n(3353);e.exports=function(e){if(r(e))return e;throw TypeError(i(e)+" is not a function")}},2722:(e,t,n)=>{var r=n(7593),i=n(3353);e.exports=function(e){if(r(e))return e;throw TypeError(i(e)+" is not a constructor")}},8248:(e,t,n)=>{var r=n(419);e.exports=function(e){if("object"===typeof e||r(e))return e;throw TypeError("Can't set "+String(e)+" as a prototype")}},2852:(e,t,n)=>{var r=n(854),i=n(1074),s=n(928),o=r("unscopables"),a=Array.prototype;void 0==a[o]&&s.f(a,o,{configurable:!0,value:i(null)}),e.exports=function(e){a[o][e]=!0}},6412:(e,t,n)=>{"use strict";var r=n(1021).charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},2827:e=>{e.exports=function(e,t,n){if(e instanceof t)return e;throw TypeError("Incorrect "+(n?n+" ":"")+"invocation")}},7950:(e,t,n)=>{var r=n(776);e.exports=function(e){if(r(e))return e;throw TypeError(String(e)+" is not an object")}},6257:e=>{e.exports="undefined"!==typeof ArrayBuffer&&"undefined"!==typeof DataView},683:(e,t,n)=>{"use strict";var r,i,s,o=n(6257),a=n(9631),c=n(7358),l=n(419),u=n(776),h=n(8752),d=n(5976),f=n(3353),p=n(1904),m=n(298),g=n(928).f,v=n(4945),y=n(6184),w=n(854),b=n(6862),_=c.Int8Array,T=_&&_.prototype,I=c.Uint8ClampedArray,E=I&&I.prototype,S=_&&v(_),k=T&&v(T),x=Object.prototype,C=x.isPrototypeOf,A=w("toStringTag"),N=b("TYPED_ARRAY_TAG"),R=b("TYPED_ARRAY_CONSTRUCTOR"),O=o&&!!y&&"Opera"!==d(c.opera),P=!1,L={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},D={BigInt64Array:8,BigUint64Array:8},F=function(e){if(!u(e))return!1;var t=d(e);return"DataView"===t||h(L,t)||h(D,t)},M=function(e){if(!u(e))return!1;var t=d(e);return h(L,t)||h(D,t)},q=function(e){if(M(e))return e;throw TypeError("Target is not a typed array")},U=function(e){if(l(e)&&(!y||C.call(S,e)))return e;throw TypeError(f(e)+" is not a typed array constructor")},V=function(e,t,n){if(a){if(n)for(var r in L){var i=c[r];if(i&&h(i.prototype,e))try{delete i.prototype[e]}catch(s){}}k[e]&&!n||m(k,e,n?t:O&&T[e]||t)}},j=function(e,t,n){var r,i;if(a){if(y){if(n)for(r in L)if(i=c[r],i&&h(i,e))try{delete i[e]}catch(s){}if(S[e]&&!n)return;try{return m(S,e,n?t:O&&S[e]||t)}catch(s){}}for(r in L)i=c[r],!i||i[e]&&!n||m(i,e,t)}};for(r in L)i=c[r],s=i&&i.prototype,s?p(s,R,i):O=!1;for(r in D)i=c[r],s=i&&i.prototype,s&&p(s,R,i);if((!O||!l(S)||S===Function.prototype)&&(S=function(){throw TypeError("Incorrect invocation")},O))for(r in L)c[r]&&y(c[r],S);if((!O||!k||k===x)&&(k=S.prototype,O))for(r in L)c[r]&&y(c[r].prototype,k);if(O&&v(E)!==k&&y(E,k),a&&!h(k,A))for(r in P=!0,g(k,A,{get:function(){return u(this)?this[N]:void 0}}),L)c[r]&&p(c[r],N,r);e.exports={NATIVE_ARRAY_BUFFER_VIEWS:O,TYPED_ARRAY_CONSTRUCTOR:R,TYPED_ARRAY_TAG:P&&N,aTypedArray:q,aTypedArrayConstructor:U,exportTypedArrayMethod:V,exportTypedArrayStaticMethod:j,isView:F,isTypedArray:M,TypedArray:S,TypedArrayPrototype:k}},62:(e,t,n)=>{"use strict";var r=n(7358),i=n(9631),s=n(6257),o=n(7961),a=n(1904),c=n(9833),l=n(6400),u=n(2827),h=n(3814),d=n(4068),f=n(833),p=n(8830),m=n(4945),g=n(6184),v=n(1454).f,y=n(928).f,w=n(5786),b=n(1061),_=n(7624),T=o.PROPER,I=o.CONFIGURABLE,E=_.get,S=_.set,k="ArrayBuffer",x="DataView",C="prototype",A="Wrong length",N="Wrong index",R=r[k],O=R,P=r[x],L=P&&P[C],D=Object.prototype,F=r.RangeError,M=p.pack,q=p.unpack,U=function(e){return[255&e]},V=function(e){return[255&e,e>>8&255]},j=function(e){return[255&e,e>>8&255,e>>16&255,e>>24&255]},B=function(e){return e[3]<<24|e[2]<<16|e[1]<<8|e[0]},$=function(e){return M(e,23,4)},z=function(e){return M(e,52,8)},H=function(e,t){y(e[C],t,{get:function(){return E(this)[t]}})},K=function(e,t,n,r){var i=f(n),s=E(e);if(i+t>s.byteLength)throw F(N);var o=E(s.buffer).bytes,a=i+s.byteOffset,c=o.slice(a,a+t);return r?c:c.reverse()},G=function(e,t,n,r,i,s){var o=f(n),a=E(e);if(o+t>a.byteLength)throw F(N);for(var c=E(a.buffer).bytes,l=o+a.byteOffset,u=r(+i),h=0;h<t;h++)c[l+h]=u[s?h:t-h-1]};if(s){var W=T&&R.name!==k;if(l((function(){R(1)}))&&l((function(){new R(-1)}))&&!l((function(){return new R,new R(1.5),new R(NaN),W&&!I})))W&&I&&a(R,"name",k);else{O=function(e){return u(this,O),new R(f(e))};for(var J,Y=O[C]=R[C],Q=v(R),Z=0;Q.length>Z;)(J=Q[Z++])in O||a(O,J,R[J]);Y.constructor=O}g&&m(L)!==D&&g(L,D);var X=new P(new O(2)),ee=L.setInt8;X.setInt8(0,2147483648),X.setInt8(1,2147483649),!X.getInt8(0)&&X.getInt8(1)||c(L,{setInt8:function(e,t){ee.call(this,e,t<<24>>24)},setUint8:function(e,t){ee.call(this,e,t<<24>>24)}},{unsafe:!0})}else O=function(e){u(this,O,k);var t=f(e);S(this,{bytes:w.call(new Array(t),0),byteLength:t}),i||(this.byteLength=t)},P=function(e,t,n){u(this,P,x),u(e,O,x);var r=E(e).byteLength,s=h(t);if(s<0||s>r)throw F("Wrong offset");if(n=void 0===n?r-s:d(n),s+n>r)throw F(A);S(this,{buffer:e,byteLength:n,byteOffset:s}),i||(this.buffer=e,this.byteLength=n,this.byteOffset=s)},i&&(H(O,"byteLength"),H(P,"buffer"),H(P,"byteLength"),H(P,"byteOffset")),c(P[C],{getInt8:function(e){return K(this,1,e)[0]<<24>>24},getUint8:function(e){return K(this,1,e)[0]},getInt16:function(e){var t=K(this,2,e,arguments.length>1?arguments[1]:void 0);return(t[1]<<8|t[0])<<16>>16},getUint16:function(e){var t=K(this,2,e,arguments.length>1?arguments[1]:void 0);return t[1]<<8|t[0]},getInt32:function(e){return B(K(this,4,e,arguments.length>1?arguments[1]:void 0))},getUint32:function(e){return B(K(this,4,e,arguments.length>1?arguments[1]:void 0))>>>0},getFloat32:function(e){return q(K(this,4,e,arguments.length>1?arguments[1]:void 0),23)},getFloat64:function(e){return q(K(this,8,e,arguments.length>1?arguments[1]:void 0),52)},setInt8:function(e,t){G(this,1,e,U,t)},setUint8:function(e,t){G(this,1,e,U,t)},setInt16:function(e,t){G(this,2,e,V,t,arguments.length>2?arguments[2]:void 0)},setUint16:function(e,t){G(this,2,e,V,t,arguments.length>2?arguments[2]:void 0)},setInt32:function(e,t){G(this,4,e,j,t,arguments.length>2?arguments[2]:void 0)},setUint32:function(e,t){G(this,4,e,j,t,arguments.length>2?arguments[2]:void 0)},setFloat32:function(e,t){G(this,4,e,$,t,arguments.length>2?arguments[2]:void 0)},setFloat64:function(e,t){G(this,8,e,z,t,arguments.length>2?arguments[2]:void 0)}});b(O,k),b(P,x),e.exports={ArrayBuffer:O,DataView:P}},5786:(e,t,n)=>{"use strict";var r=n(7475),i=n(1801),s=n(4068);e.exports=function(e){var t=r(this),n=s(t.length),o=arguments.length,a=i(o>1?arguments[1]:void 0,n),c=o>2?arguments[2]:void 0,l=void 0===c?n:i(c,n);while(l>a)t[a++]=e;return t}},6963:(e,t,n)=>{var r=n(7120),i=n(4068),s=n(1801),o=function(e){return function(t,n,o){var a,c=r(t),l=i(c.length),u=s(o,l);if(e&&n!=n){while(l>u)if(a=c[u++],a!=a)return!0}else for(;l>u;u++)if((e||u in c)&&c[u]===n)return e||u||0;return!e&&-1}};e.exports={includes:o(!0),indexOf:o(!1)}},2099:(e,t,n)=>{var r=n(422),i=n(2985),s=n(7475),o=n(4068),a=n(6340),c=[].push,l=function(e){var t=1==e,n=2==e,l=3==e,u=4==e,h=6==e,d=7==e,f=5==e||h;return function(p,m,g,v){for(var y,w,b=s(p),_=i(b),T=r(m,g,3),I=o(_.length),E=0,S=v||a,k=t?S(p,I):n||d?S(p,0):void 0;I>E;E++)if((f||E in _)&&(y=_[E],w=T(y,E,b),e))if(t)k[E]=w;else if(w)switch(e){case 3:return!0;case 5:return y;case 6:return E;case 2:c.call(k,y)}else switch(e){case 4:return!1;case 7:c.call(k,y)}return h?-1:l||u?u:k}};e.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterReject:l(7)}},6534:e=>{var t=Math.floor,n=function(e,s){var o=e.length,a=t(o/2);return o<8?r(e,s):i(n(e.slice(0,a),s),n(e.slice(a),s),s)},r=function(e,t){var n,r,i=e.length,s=1;while(s<i){r=s,n=e[s];while(r&&t(e[r-1],n)>0)e[r]=e[--r];r!==s++&&(e[r]=n)}return e},i=function(e,t,n){var r=e.length,i=t.length,s=0,o=0,a=[];while(s<r||o<i)s<r&&o<i?a.push(n(e[s],t[o])<=0?e[s++]:t[o++]):a.push(s<r?e[s++]:t[o++]);return a};e.exports=n},330:(e,t,n)=>{var r=n(6894),i=n(7593),s=n(776),o=n(854),a=o("species");e.exports=function(e){var t;return r(e)&&(t=e.constructor,i(t)&&(t===Array||r(t.prototype))?t=void 0:s(t)&&(t=t[a],null===t&&(t=void 0))),void 0===t?Array:t}},6340:(e,t,n)=>{var r=n(330);e.exports=function(e,t){return new(r(e))(0===t?0:t)}},8047:(e,t,n)=>{var r=n(854),i=r("iterator"),s=!1;try{var o=0,a={next:function(){return{done:!!o++}},return:function(){s=!0}};a[i]=function(){return this},Array.from(a,(function(){throw 2}))}catch(c){}e.exports=function(e,t){if(!t&&!s)return!1;var n=!1;try{var r={};r[i]=function(){return{next:function(){return{done:n=!0}}}},e(r)}catch(c){}return n}},5173:e=>{var t={}.toString;e.exports=function(e){return t.call(e).slice(8,-1)}},5976:(e,t,n)=>{var r=n(5705),i=n(419),s=n(5173),o=n(854),a=o("toStringTag"),c="Arguments"==s(function(){return arguments}()),l=function(e,t){try{return e[t]}catch(n){}};e.exports=r?s:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=l(t=Object(e),a))?n:c?s(t):"Object"==(r=s(t))&&i(t.callee)?"Arguments":r}},8438:(e,t,n)=>{var r=n(8752),i=n(7764),s=n(2404),o=n(928);e.exports=function(e,t){for(var n=i(t),a=o.f,c=s.f,l=0;l<n.length;l++){var u=n[l];r(e,u)||a(e,u,c(t,u))}}},123:(e,t,n)=>{var r=n(6400);e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},5912:(e,t,n)=>{"use strict";var r=n(4848).IteratorPrototype,i=n(1074),s=n(5442),o=n(1061),a=n(2184),c=function(){return this};e.exports=function(e,t,n){var l=t+" Iterator";return e.prototype=i(r,{next:s(1,n)}),o(e,l,!1,!0),a[l]=c,e}},1904:(e,t,n)=>{var r=n(9631),i=n(928),s=n(5442);e.exports=r?function(e,t,n){return i.f(e,t,s(1,n))}:function(e,t,n){return e[t]=n,e}},5442:e=>{e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},8810:(e,t,n)=>{"use strict";var r=n(8934),i=n(6692),s=n(7961),o=n(419),a=n(5912),c=n(4945),l=n(6184),u=n(1061),h=n(1904),d=n(298),f=n(854),p=n(2184),m=n(4848),g=s.PROPER,v=s.CONFIGURABLE,y=m.IteratorPrototype,w=m.BUGGY_SAFARI_ITERATORS,b=f("iterator"),_="keys",T="values",I="entries",E=function(){return this};e.exports=function(e,t,n,s,f,m,S){a(n,t,s);var k,x,C,A=function(e){if(e===f&&L)return L;if(!w&&e in O)return O[e];switch(e){case _:return function(){return new n(this,e)};case T:return function(){return new n(this,e)};case I:return function(){return new n(this,e)}}return function(){return new n(this)}},N=t+" Iterator",R=!1,O=e.prototype,P=O[b]||O["@@iterator"]||f&&O[f],L=!w&&P||A(f),D="Array"==t&&O.entries||P;if(D&&(k=c(D.call(new e)),k!==Object.prototype&&k.next&&(i||c(k)===y||(l?l(k,y):o(k[b])||d(k,b,E)),u(k,N,!0,!0),i&&(p[N]=E))),g&&f==T&&P&&P.name!==T&&(!i&&v?h(O,"name",T):(R=!0,L=function(){return P.call(this)})),f)if(x={values:A(T),keys:m?L:A(_),entries:A(I)},S)for(C in x)(w||R||!(C in O))&&d(O,C,x[C]);else r({target:t,proto:!0,forced:w||R},x);return i&&!S||O[b]===L||d(O,b,L,{name:f}),p[t]=L,x}},9631:(e,t,n)=>{var r=n(6400);e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},5354:(e,t,n)=>{var r=n(7358),i=n(776),s=r.document,o=i(s)&&i(s.createElement);e.exports=function(e){return o?s.createElement(e):{}}},4296:e=>{e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},8753:(e,t,n)=>{var r=n(5354),i=r("span").classList,s=i&&i.constructor&&i.constructor.prototype;e.exports=s===Object.prototype?void 0:s},1544:(e,t,n)=>{var r=n(9173),i=r.match(/firefox\/(\d+)/i);e.exports=!!i&&+i[1]},8979:(e,t,n)=>{var r=n(9173);e.exports=/MSIE|Trident/.test(r)},9173:(e,t,n)=>{var r=n(9694);e.exports=r("navigator","userAgent")||""},5068:(e,t,n)=>{var r,i,s=n(7358),o=n(9173),a=s.process,c=s.Deno,l=a&&a.versions||c&&c.version,u=l&&l.v8;u?(r=u.split("."),i=r[0]<4?1:r[0]+r[1]):o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(i=r[1]))),e.exports=i&&+i},1513:(e,t,n)=>{var r=n(9173),i=r.match(/AppleWebKit\/(\d+)\./);e.exports=!!i&&+i[1]},2875:e=>{e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},8934:(e,t,n)=>{var r=n(7358),i=n(2404).f,s=n(1904),o=n(298),a=n(3534),c=n(8438),l=n(4389);e.exports=function(e,t){var n,u,h,d,f,p,m=e.target,g=e.global,v=e.stat;if(u=g?r:v?r[m]||a(m,{}):(r[m]||{}).prototype,u)for(h in t){if(f=t[h],e.noTargetGet?(p=i(u,h),d=p&&p.value):d=u[h],n=l(g?h:m+(v?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof f===typeof d)continue;c(f,d)}(e.sham||d&&d.sham)&&s(f,"sham",!0),o(u,h,f,e)}}},6400:e=>{e.exports=function(e){try{return!!e()}catch(t){return!0}}},9529:(e,t,n)=>{"use strict";n(7280);var r=n(298),i=n(4348),s=n(6400),o=n(854),a=n(1904),c=o("species"),l=RegExp.prototype;e.exports=function(e,t,n,u){var h=o(e),d=!s((function(){var t={};return t[h]=function(){return 7},7!=""[e](t)})),f=d&&!s((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[c]=function(){return n},n.flags="",n[h]=/./[h]),n.exec=function(){return t=!0,null},n[h](""),!t}));if(!d||!f||n){var p=/./[h],m=t(h,""[e],(function(e,t,n,r,s){var o=t.exec;return o===i||o===l.exec?d&&!s?{done:!0,value:p.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}));r(String.prototype,e,m[0]),r(l,h,m[1])}u&&a(l[h],"sham",!0)}},4817:(e,t,n)=>{"use strict";var r=n(6894),i=n(4068),s=n(422),o=function(e,t,n,a,c,l,u,h){var d,f=c,p=0,m=!!u&&s(u,h,3);while(p<a){if(p in n){if(d=m?m(n[p],p,t):n[p],l>0&&r(d))f=o(e,t,d,i(d.length),f,l-1)-1;else{if(f>=9007199254740991)throw TypeError("Exceed the acceptable array length");e[f]=d}f++}p++}return f};e.exports=o},422:(e,t,n)=>{var r=n(392);e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,i){return e.call(t,n,r,i)}}return function(){return e.apply(t,arguments)}}},7961:(e,t,n)=>{var r=n(9631),i=n(8752),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),c=a&&"something"===function(){}.name,l=a&&(!r||r&&o(s,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:l}},9694:(e,t,n)=>{var r=n(7358),i=n(419),s=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?s(r[e]):r[e]&&r[e][t]}},7143:(e,t,n)=>{var r=n(5976),i=n(2344),s=n(2184),o=n(854),a=o("iterator");e.exports=function(e){if(void 0!=e)return i(e,a)||i(e,"@@iterator")||s[r(e)]}},2151:(e,t,n)=>{var r=n(392),i=n(7950),s=n(7143);e.exports=function(e,t){var n=arguments.length<2?s(e):t;if(r(n))return i(n.call(e));throw TypeError(String(e)+" is not iterable")}},2344:(e,t,n)=>{var r=n(392);e.exports=function(e,t){var n=e[t];return null==n?void 0:r(n)}},8716:(e,t,n)=>{var r=n(7475),i=Math.floor,s="".replace,o=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,a=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,n,c,l,u){var h=n+e.length,d=c.length,f=a;return void 0!==l&&(l=r(l),f=o),s.call(u,f,(function(r,s){var o;switch(s.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,n);case"'":return t.slice(h);case"<":o=l[s.slice(1,-1)];break;default:var a=+s;if(0===a)return r;if(a>d){var u=i(a/10);return 0===u?r:u<=d?void 0===c[u-1]?s.charAt(1):c[u-1]+s.charAt(1):r}o=c[a-1]}return void 0===o?"":o}))}},7358:(e,t,n)=>{var r=function(e){return e&&e.Math==Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},8752:(e,t,n)=>{var r=n(7475),i={}.hasOwnProperty;e.exports=Object.hasOwn||function(e,t){return i.call(r(e),t)}},600:e=>{e.exports={}},9970:(e,t,n)=>{var r=n(9694);e.exports=r("document","documentElement")},7021:(e,t,n)=>{var r=n(9631),i=n(6400),s=n(5354);e.exports=!r&&!i((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},8830:e=>{var t=Math.abs,n=Math.pow,r=Math.floor,i=Math.log,s=Math.LN2,o=function(e,o,a){var c,l,u,h=new Array(a),d=8*a-o-1,f=(1<<d)-1,p=f>>1,m=23===o?n(2,-24)-n(2,-77):0,g=e<0||0===e&&1/e<0?1:0,v=0;for(e=t(e),e!=e||e===1/0?(l=e!=e?1:0,c=f):(c=r(i(e)/s),e*(u=n(2,-c))<1&&(c--,u*=2),e+=c+p>=1?m/u:m*n(2,1-p),e*u>=2&&(c++,u/=2),c+p>=f?(l=0,c=f):c+p>=1?(l=(e*u-1)*n(2,o),c+=p):(l=e*n(2,p-1)*n(2,o),c=0));o>=8;h[v++]=255&l,l/=256,o-=8);for(c=c<<o|l,d+=o;d>0;h[v++]=255&c,c/=256,d-=8);return h[--v]|=128*g,h},a=function(e,t){var r,i=e.length,s=8*i-t-1,o=(1<<s)-1,a=o>>1,c=s-7,l=i-1,u=e[l--],h=127&u;for(u>>=7;c>0;h=256*h+e[l],l--,c-=8);for(r=h&(1<<-c)-1,h>>=-c,c+=t;c>0;r=256*r+e[l],l--,c-=8);if(0===h)h=1-a;else{if(h===o)return r?NaN:u?-1/0:1/0;r+=n(2,t),h-=a}return(u?-1:1)*r*n(2,h-t)};e.exports={pack:o,unpack:a}},2985:(e,t,n)=>{var r=n(6400),i=n(5173),s="".split;e.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==i(e)?s.call(e,""):Object(e)}:Object},9941:(e,t,n)=>{var r=n(419),i=n(776),s=n(6184);e.exports=function(e,t,n){var o,a;return s&&r(o=t.constructor)&&o!==n&&i(a=o.prototype)&&a!==n.prototype&&s(e,a),e}},3725:(e,t,n)=>{var r=n(419),i=n(1089),s=Function.toString;r(i.inspectSource)||(i.inspectSource=function(e){return s.call(e)}),e.exports=i.inspectSource},7624:(e,t,n)=>{var r,i,s,o=n(9262),a=n(7358),c=n(776),l=n(1904),u=n(8752),h=n(1089),d=n(203),f=n(600),p="Object already initialized",m=a.WeakMap,g=function(e){return s(e)?i(e):r(e,{})},v=function(e){return function(t){var n;if(!c(t)||(n=i(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}};if(o||h.state){var y=h.state||(h.state=new m),w=y.get,b=y.has,_=y.set;r=function(e,t){if(b.call(y,e))throw new TypeError(p);return t.facade=e,_.call(y,e,t),t},i=function(e){return w.call(y,e)||{}},s=function(e){return b.call(y,e)}}else{var T=d("state");f[T]=!0,r=function(e,t){if(u(e,T))throw new TypeError(p);return t.facade=e,l(e,T,t),t},i=function(e){return u(e,T)?e[T]:{}},s=function(e){return u(e,T)}}e.exports={set:r,get:i,has:s,enforce:g,getterFor:v}},1558:(e,t,n)=>{var r=n(854),i=n(2184),s=r("iterator"),o=Array.prototype;e.exports=function(e){return void 0!==e&&(i.Array===e||o[s]===e)}},6894:(e,t,n)=>{var r=n(5173);e.exports=Array.isArray||function(e){return"Array"==r(e)}},419:e=>{e.exports=function(e){return"function"===typeof e}},7593:(e,t,n)=>{var r=n(6400),i=n(419),s=n(5976),o=n(9694),a=n(3725),c=[],l=o("Reflect","construct"),u=/^\s*(?:class|function)\b/,h=u.exec,d=!u.exec((function(){})),f=function(e){if(!i(e))return!1;try{return l(Object,c,e),!0}catch(t){return!1}},p=function(e){if(!i(e))return!1;switch(s(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}return d||!!h.call(u,a(e))};e.exports=!l||r((function(){var e;return f(f.call)||!f(Object)||!f((function(){e=!0}))||e}))?p:f},4389:(e,t,n)=>{var r=n(6400),i=n(419),s=/#|\.prototype\./,o=function(e,t){var n=c[a(e)];return n==u||n!=l&&(i(t)?r(t):!!t)},a=o.normalize=function(e){return String(e).replace(s,".").toLowerCase()},c=o.data={},l=o.NATIVE="N",u=o.POLYFILL="P";e.exports=o},9184:(e,t,n)=>{var r=n(776),i=Math.floor;e.exports=function(e){return!r(e)&&isFinite(e)&&i(e)===e}},776:(e,t,n)=>{var r=n(419);e.exports=function(e){return"object"===typeof e?null!==e:r(e)}},6692:e=>{e.exports=!1},410:(e,t,n)=>{var r=n(419),i=n(9694),s=n(8476);e.exports=s?function(e){return"symbol"==typeof e}:function(e){var t=i("Symbol");return r(t)&&Object(e)instanceof t}},4848:(e,t,n)=>{"use strict";var r,i,s,o=n(6400),a=n(419),c=n(1074),l=n(4945),u=n(298),h=n(854),d=n(6692),f=h("iterator"),p=!1;[].keys&&(s=[].keys(),"next"in s?(i=l(l(s)),i!==Object.prototype&&(r=i)):p=!0);var m=void 0==r||o((function(){var e={};return r[f].call(e)!==e}));m?r={}:d&&(r=c(r)),a(r[f])||u(r,f,(function(){return this})),e.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:p}},2184:e=>{e.exports={}},7529:(e,t,n)=>{var r=n(5068),i=n(6400);e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},9262:(e,t,n)=>{var r=n(7358),i=n(419),s=n(3725),o=r.WeakMap;e.exports=i(o)&&/native code/.test(s(o))},1074:(e,t,n)=>{var r,i=n(7950),s=n(3605),o=n(2875),a=n(600),c=n(9970),l=n(5354),u=n(203),h=">",d="<",f="prototype",p="script",m=u("IE_PROTO"),g=function(){},v=function(e){return d+p+h+e+d+"/"+p+h},y=function(e){e.write(v("")),e.close();var t=e.parentWindow.Object;return e=null,t},w=function(){var e,t=l("iframe"),n="java"+p+":";return t.style.display="none",c.appendChild(t),t.src=String(n),e=t.contentWindow.document,e.open(),e.write(v("document.F=Object")),e.close(),e.F},b=function(){try{r=new ActiveXObject("htmlfile")}catch(t){}b="undefined"!=typeof document?document.domain&&r?y(r):w():y(r);var e=o.length;while(e--)delete b[f][o[e]];return b()};a[m]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(g[f]=i(e),n=new g,g[f]=null,n[m]=e):n=b(),void 0===t?n:s(n,t)}},3605:(e,t,n)=>{var r=n(9631),i=n(928),s=n(7950),o=n(9158);e.exports=r?Object.defineProperties:function(e,t){s(e);var n,r=o(t),a=r.length,c=0;while(a>c)i.f(e,n=r[c++],t[n]);return e}},928:(e,t,n)=>{var r=n(9631),i=n(7021),s=n(7950),o=n(8618),a=Object.defineProperty;t.f=r?a:function(e,t,n){if(s(e),t=o(t),s(n),i)try{return a(e,t,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},2404:(e,t,n)=>{var r=n(9631),i=n(5604),s=n(5442),o=n(7120),a=n(8618),c=n(8752),l=n(7021),u=Object.getOwnPropertyDescriptor;t.f=r?u:function(e,t){if(e=o(e),t=a(t),l)try{return u(e,t)}catch(n){}if(c(e,t))return s(!i.f.call(e,t),e[t])}},1454:(e,t,n)=>{var r=n(1587),i=n(2875),s=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,s)}},4199:(e,t)=>{t.f=Object.getOwnPropertySymbols},4945:(e,t,n)=>{var r=n(8752),i=n(419),s=n(7475),o=n(203),a=n(123),c=o("IE_PROTO"),l=Object.prototype;e.exports=a?Object.getPrototypeOf:function(e){var t=s(e);if(r(t,c))return t[c];var n=t.constructor;return i(n)&&t instanceof n?n.prototype:t instanceof Object?l:null}},1587:(e,t,n)=>{var r=n(8752),i=n(7120),s=n(6963).indexOf,o=n(600);e.exports=function(e,t){var n,a=i(e),c=0,l=[];for(n in a)!r(o,n)&&r(a,n)&&l.push(n);while(t.length>c)r(a,n=t[c++])&&(~s(l,n)||l.push(n));return l}},9158:(e,t,n)=>{var r=n(1587),i=n(2875);e.exports=Object.keys||function(e){return r(e,i)}},5604:(e,t)=>{"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);t.f=i?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},6184:(e,t,n)=>{var r=n(7950),i=n(8248);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set,e.call(n,[]),t=n instanceof Array}catch(s){}return function(n,s){return r(n),i(s),t?e.call(n,s):n.__proto__=s,n}}():void 0)},9308:(e,t,n)=>{var r=n(419),i=n(776);e.exports=function(e,t){var n,s;if("string"===t&&r(n=e.toString)&&!i(s=n.call(e)))return s;if(r(n=e.valueOf)&&!i(s=n.call(e)))return s;if("string"!==t&&r(n=e.toString)&&!i(s=n.call(e)))return s;throw TypeError("Can't convert object to primitive value")}},7764:(e,t,n)=>{var r=n(9694),i=n(1454),s=n(4199),o=n(7950);e.exports=r("Reflect","ownKeys")||function(e){var t=i.f(o(e)),n=s.f;return n?t.concat(n(e)):t}},9833:(e,t,n)=>{var r=n(298);e.exports=function(e,t,n){for(var i in t)r(e,i,t[i],n);return e}},298:(e,t,n)=>{var r=n(7358),i=n(419),s=n(8752),o=n(1904),a=n(3534),c=n(3725),l=n(7624),u=n(7961).CONFIGURABLE,h=l.get,d=l.enforce,f=String(String).split("String");(e.exports=function(e,t,n,c){var l,h=!!c&&!!c.unsafe,p=!!c&&!!c.enumerable,m=!!c&&!!c.noTargetGet,g=c&&void 0!==c.name?c.name:t;i(n)&&("Symbol("===String(g).slice(0,7)&&(g="["+String(g).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!s(n,"name")||u&&n.name!==g)&&o(n,"name",g),l=d(n),l.source||(l.source=f.join("string"==typeof g?g:""))),e!==r?(h?!m&&e[t]&&(p=!0):delete e[t],p?e[t]=n:o(e,t,n)):p?e[t]=n:a(t,n)})(Function.prototype,"toString",(function(){return i(this)&&h(this).source||c(this)}))},9395:(e,t,n)=>{var r=n(7950),i=n(419),s=n(5173),o=n(4348);e.exports=function(e,t){var n=e.exec;if(i(n)){var a=n.call(e,t);return null!==a&&r(a),a}if("RegExp"===s(e))return o.call(e,t);throw TypeError("RegExp#exec called on incompatible receiver")}},4348:(e,t,n)=>{"use strict";var r=n(4481),i=n(136),s=n(2351),o=n(1586),a=n(1074),c=n(7624).get,l=n(5337),u=n(1442),h=RegExp.prototype.exec,d=o("native-string-replace",String.prototype.replace),f=h,p=function(){var e=/a/,t=/b*/g;return h.call(e,"a"),h.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),m=s.UNSUPPORTED_Y||s.BROKEN_CARET,g=void 0!==/()??/.exec("")[1],v=p||g||m||l||u;v&&(f=function(e){var t,n,s,o,l,u,v,y=this,w=c(y),b=r(e),_=w.raw;if(_)return _.lastIndex=y.lastIndex,t=f.call(_,b),y.lastIndex=_.lastIndex,t;var T=w.groups,I=m&&y.sticky,E=i.call(y),S=y.source,k=0,x=b;if(I&&(E=E.replace("y",""),-1===E.indexOf("g")&&(E+="g"),x=b.slice(y.lastIndex),y.lastIndex>0&&(!y.multiline||y.multiline&&"\n"!==b.charAt(y.lastIndex-1))&&(S="(?: "+S+")",x=" "+x,k++),n=new RegExp("^(?:"+S+")",E)),g&&(n=new RegExp("^"+S+"$(?!\\s)",E)),p&&(s=y.lastIndex),o=h.call(I?n:y,x),I?o?(o.input=o.input.slice(k),o[0]=o[0].slice(k),o.index=y.lastIndex,y.lastIndex+=o[0].length):y.lastIndex=0:p&&o&&(y.lastIndex=y.global?o.index+o[0].length:s),g&&o&&o.length>1&&d.call(o[0],n,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(o[l]=void 0)})),o&&T)for(o.groups=u=a(null),l=0;l<T.length;l++)v=T[l],u[v[0]]=o[v[1]];return o}),e.exports=f},136:(e,t,n)=>{"use strict";var r=n(7950);e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},2351:(e,t,n)=>{var r=n(6400),i=n(7358),s=i.RegExp;t.UNSUPPORTED_Y=r((function(){var e=s("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=s("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},5337:(e,t,n)=>{var r=n(6400),i=n(7358),s=i.RegExp;e.exports=r((function(){var e=s(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))},1442:(e,t,n)=>{var r=n(6400),i=n(7358),s=i.RegExp;e.exports=r((function(){var e=s("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},7933:e=>{e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on "+e);return e}},3534:(e,t,n)=>{var r=n(7358);e.exports=function(e,t){try{Object.defineProperty(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},4114:(e,t,n)=>{"use strict";var r=n(9694),i=n(928),s=n(854),o=n(9631),a=s("species");e.exports=function(e){var t=r(e),n=i.f;o&&t&&!t[a]&&n(t,a,{configurable:!0,get:function(){return this}})}},1061:(e,t,n)=>{var r=n(928).f,i=n(8752),s=n(854),o=s("toStringTag");e.exports=function(e,t,n){e&&!i(e=n?e:e.prototype,o)&&r(e,o,{configurable:!0,value:t})}},203:(e,t,n)=>{var r=n(1586),i=n(6862),s=r("keys");e.exports=function(e){return s[e]||(s[e]=i(e))}},1089:(e,t,n)=>{var r=n(7358),i=n(3534),s="__core-js_shared__",o=r[s]||i(s,{});e.exports=o},1586:(e,t,n)=>{var r=n(6692),i=n(1089);(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.18.1",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},7440:(e,t,n)=>{var r=n(7950),i=n(2722),s=n(854),o=s("species");e.exports=function(e,t){var n,s=r(e).constructor;return void 0===s||void 0==(n=r(s)[o])?t:i(n)}},1021:(e,t,n)=>{var r=n(3814),i=n(4481),s=n(7933),o=function(e){return function(t,n){var o,a,c=i(s(t)),l=r(n),u=c.length;return l<0||l>=u?e?"":void 0:(o=c.charCodeAt(l),o<55296||o>56319||l+1===u||(a=c.charCodeAt(l+1))<56320||a>57343?e?c.charAt(l):o:e?c.slice(l,l+2):a-56320+(o-55296<<10)+65536)}};e.exports={codeAt:o(!1),charAt:o(!0)}},7894:(e,t,n)=>{var r=n(7961).PROPER,i=n(6400),s=n(4454),o="​᠎";e.exports=function(e){return i((function(){return!!s[e]()||o[e]()!==o||r&&s[e].name!==e}))}},6304:(e,t,n)=>{var r=n(7933),i=n(4481),s=n(4454),o="["+s+"]",a=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),l=function(e){return function(t){var n=i(r(t));return 1&e&&(n=n.replace(a,"")),2&e&&(n=n.replace(c,"")),n}};e.exports={start:l(1),end:l(2),trim:l(3)}},1801:(e,t,n)=>{var r=n(3814),i=Math.max,s=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):s(n,t)}},833:(e,t,n)=>{var r=n(3814),i=n(4068);e.exports=function(e){if(void 0===e)return 0;var t=r(e),n=i(t);if(t!==n)throw RangeError("Wrong length or index");return n}},7120:(e,t,n)=>{var r=n(2985),i=n(7933);e.exports=function(e){return r(i(e))}},3814:e=>{var t=Math.ceil,n=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?n:t)(e)}},4068:(e,t,n)=>{var r=n(3814),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},7475:(e,t,n)=>{var r=n(7933);e.exports=function(e){return Object(r(e))}},1355:(e,t,n)=>{var r=n(1443);e.exports=function(e,t){var n=r(e);if(n%t)throw RangeError("Wrong offset");return n}},1443:(e,t,n)=>{var r=n(3814);e.exports=function(e){var t=r(e);if(t<0)throw RangeError("The argument can't be less than 0");return t}},2181:(e,t,n)=>{var r=n(776),i=n(410),s=n(2344),o=n(9308),a=n(854),c=a("toPrimitive");e.exports=function(e,t){if(!r(e)||i(e))return e;var n,a=s(e,c);if(a){if(void 0===t&&(t="default"),n=a.call(e,t),!r(n)||i(n))return n;throw TypeError("Can't convert object to primitive value")}return void 0===t&&(t="number"),o(e,t)}},8618:(e,t,n)=>{var r=n(2181),i=n(410);e.exports=function(e){var t=r(e,"string");return i(t)?t:String(t)}},5705:(e,t,n)=>{var r=n(854),i=r("toStringTag"),s={};s[i]="z",e.exports="[object z]"===String(s)},4481:(e,t,n)=>{var r=n(5976);e.exports=function(e){if("Symbol"===r(e))throw TypeError("Cannot convert a Symbol value to a string");return String(e)}},3353:e=>{e.exports=function(e){try{return String(e)}catch(t){return"Object"}}},6968:(e,t,n)=>{"use strict";var r=n(8934),i=n(7358),s=n(9631),o=n(3105),a=n(683),c=n(62),l=n(2827),u=n(5442),h=n(1904),d=n(9184),f=n(4068),p=n(833),m=n(1355),g=n(8618),v=n(8752),y=n(5976),w=n(776),b=n(410),_=n(1074),T=n(6184),I=n(1454).f,E=n(9401),S=n(2099).forEach,k=n(4114),x=n(928),C=n(2404),A=n(7624),N=n(9941),R=A.get,O=A.set,P=x.f,L=C.f,D=Math.round,F=i.RangeError,M=c.ArrayBuffer,q=c.DataView,U=a.NATIVE_ARRAY_BUFFER_VIEWS,V=a.TYPED_ARRAY_CONSTRUCTOR,j=a.TYPED_ARRAY_TAG,B=a.TypedArray,$=a.TypedArrayPrototype,z=a.aTypedArrayConstructor,H=a.isTypedArray,K="BYTES_PER_ELEMENT",G="Wrong length",W=function(e,t){var n=0,r=t.length,i=new(z(e))(r);while(r>n)i[n]=t[n++];return i},J=function(e,t){P(e,t,{get:function(){return R(this)[t]}})},Y=function(e){var t;return e instanceof M||"ArrayBuffer"==(t=y(e))||"SharedArrayBuffer"==t},Q=function(e,t){return H(e)&&!b(t)&&t in e&&d(+t)&&t>=0},Z=function(e,t){return t=g(t),Q(e,t)?u(2,e[t]):L(e,t)},X=function(e,t,n){return t=g(t),!(Q(e,t)&&w(n)&&v(n,"value"))||v(n,"get")||v(n,"set")||n.configurable||v(n,"writable")&&!n.writable||v(n,"enumerable")&&!n.enumerable?P(e,t,n):(e[t]=n.value,e)};s?(U||(C.f=Z,x.f=X,J($,"buffer"),J($,"byteOffset"),J($,"byteLength"),J($,"length")),r({target:"Object",stat:!0,forced:!U},{getOwnPropertyDescriptor:Z,defineProperty:X}),e.exports=function(e,t,n){var s=e.match(/\d+$/)[0]/8,a=e+(n?"Clamped":"")+"Array",c="get"+e,u="set"+e,d=i[a],g=d,v=g&&g.prototype,y={},b=function(e,t){var n=R(e);return n.view[c](t*s+n.byteOffset,!0)},x=function(e,t,r){var i=R(e);n&&(r=(r=D(r))<0?0:r>255?255:255&r),i.view[u](t*s+i.byteOffset,r,!0)},C=function(e,t){P(e,t,{get:function(){return b(this,t)},set:function(e){return x(this,t,e)},enumerable:!0})};U?o&&(g=t((function(e,t,n,r){return l(e,g,a),N(function(){return w(t)?Y(t)?void 0!==r?new d(t,m(n,s),r):void 0!==n?new d(t,m(n,s)):new d(t):H(t)?W(g,t):E.call(g,t):new d(p(t))}(),e,g)})),T&&T(g,B),S(I(d),(function(e){e in g||h(g,e,d[e])})),g.prototype=v):(g=t((function(e,t,n,r){l(e,g,a);var i,o,c,u=0,h=0;if(w(t)){if(!Y(t))return H(t)?W(g,t):E.call(g,t);i=t,h=m(n,s);var d=t.byteLength;if(void 0===r){if(d%s)throw F(G);if(o=d-h,o<0)throw F(G)}else if(o=f(r)*s,o+h>d)throw F(G);c=o/s}else c=p(t),o=c*s,i=new M(o);O(e,{buffer:i,byteOffset:h,byteLength:o,length:c,view:new q(i)});while(u<c)C(e,u++)})),T&&T(g,B),v=g.prototype=_($)),v.constructor!==g&&h(v,"constructor",g),h(v,V,g),j&&h(v,j,a),y[a]=g,r({global:!0,forced:g!=d,sham:!U},y),K in g||h(g,K,s),K in v||h(v,K,s),k(a)}):e.exports=function(){}},3105:(e,t,n)=>{var r=n(7358),i=n(6400),s=n(8047),o=n(683).NATIVE_ARRAY_BUFFER_VIEWS,a=r.ArrayBuffer,c=r.Int8Array;e.exports=!o||!i((function(){c(1)}))||!i((function(){new c(-1)}))||!s((function(e){new c,new c(null),new c(1.5),new c(e)}),!0)||i((function(){return 1!==new c(new a(2),1,void 0).length}))},9401:(e,t,n)=>{var r=n(2722),i=n(7475),s=n(4068),o=n(2151),a=n(7143),c=n(1558),l=n(422),u=n(683).aTypedArrayConstructor;e.exports=function(e){var t,n,h,d,f,p,m=r(this),g=i(e),v=arguments.length,y=v>1?arguments[1]:void 0,w=void 0!==y,b=a(g);if(b&&!c(b)){f=o(g,b),p=f.next,g=[];while(!(d=p.call(f)).done)g.push(d.value)}for(w&&v>2&&(y=l(y,arguments[2],2)),n=s(g.length),h=new(u(m))(n),t=0;n>t;t++)h[t]=w?y(g[t],t):g[t];return h}},6862:e=>{var t=0,n=Math.random();e.exports=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++t+n).toString(36)}},8476:(e,t,n)=>{var r=n(7529);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},854:(e,t,n)=>{var r=n(7358),i=n(1586),s=n(8752),o=n(6862),a=n(7529),c=n(8476),l=i("wks"),u=r.Symbol,h=c?u:u&&u.withoutSetter||o;e.exports=function(e){return s(l,e)&&(a||"string"==typeof l[e])||(a&&s(u,e)?l[e]=u[e]:l[e]=h("Symbol."+e)),l[e]}},4454:e=>{e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},979:(e,t,n)=>{"use strict";var r=n(8934),i=n(6400),s=n(62),o=n(7950),a=n(1801),c=n(4068),l=n(7440),u=s.ArrayBuffer,h=s.DataView,d=u.prototype.slice,f=i((function(){return!new u(2).slice(1,void 0).byteLength}));r({target:"ArrayBuffer",proto:!0,unsafe:!0,forced:f},{slice:function(e,t){if(void 0!==d&&void 0===t)return d.call(o(this),e);var n=o(this).byteLength,r=a(e,n),i=a(void 0===t?n:t,n),s=new(l(this,u))(c(i-r)),f=new h(this),p=new h(s),m=0;while(r<i)p.setUint8(m++,f.getUint8(r++));return s}})},9377:(e,t,n)=>{"use strict";var r=n(8934),i=n(4817),s=n(7475),o=n(4068),a=n(3814),c=n(6340);r({target:"Array",proto:!0},{flat:function(){var e=arguments.length?arguments[0]:void 0,t=s(this),n=o(t.length),r=c(t,0);return r.length=i(r,t,t,n,0,void 0===e?1:a(e)),r}})},6843:(e,t,n)=>{"use strict";var r=n(7120),i=n(2852),s=n(2184),o=n(7624),a=n(8810),c="Array Iterator",l=o.set,u=o.getterFor(c);e.exports=a(Array,"Array",(function(e,t){l(this,{type:c,target:r(e),index:0,kind:t})}),(function(){var e=u(this),t=e.target,n=e.kind,r=e.index++;return!t||r>=t.length?(e.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:t[r],done:!1}:{value:[r,t[r]],done:!1}}),"values"),s.Arguments=s.Array,i("keys"),i("values"),i("entries")},7280:(e,t,n)=>{"use strict";var r=n(8934),i=n(4348);r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},5363:(e,t,n)=>{"use strict";var r=n(9529),i=n(6400),s=n(7950),o=n(419),a=n(3814),c=n(4068),l=n(4481),u=n(7933),h=n(6412),d=n(2344),f=n(8716),p=n(9395),m=n(854),g=m("replace"),v=Math.max,y=Math.min,w=function(e){return void 0===e?e:String(e)},b=function(){return"$0"==="a".replace(/./,"$0")}(),_=function(){return!!/./[g]&&""===/./[g]("a","$0")}(),T=!i((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));r("replace",(function(e,t,n){var r=_?"$":"$0";return[function(e,n){var r=u(this),i=void 0==e?void 0:d(e,g);return i?i.call(e,r,n):t.call(l(r),e,n)},function(e,i){var u=s(this),d=l(e);if("string"===typeof i&&-1===i.indexOf(r)&&-1===i.indexOf("$<")){var m=n(t,u,d,i);if(m.done)return m.value}var g=o(i);g||(i=l(i));var b=u.global;if(b){var _=u.unicode;u.lastIndex=0}var T=[];while(1){var I=p(u,d);if(null===I)break;if(T.push(I),!b)break;var E=l(I[0]);""===E&&(u.lastIndex=h(d,c(u.lastIndex),_))}for(var S="",k=0,x=0;x<T.length;x++){I=T[x];for(var C=l(I[0]),A=v(y(a(I.index),d.length),0),N=[],R=1;R<I.length;R++)N.push(w(I[R]));var O=I.groups;if(g){var P=[C].concat(N,A,d);void 0!==O&&P.push(O);var L=l(i.apply(void 0,P))}else L=f(C,d,A,N,O,i);A>=k&&(S+=d.slice(k,A)+L,k=A+C.length)}return S+d.slice(k)}]}),!T||!b||_)},6801:(e,t,n)=>{"use strict";var r=n(8934),i=n(6304).trim,s=n(7894);r({target:"String",proto:!0,forced:s("trim")},{trim:function(){return i(this)}})},2396:(e,t,n)=>{"use strict";var r=n(683),i=n(7358),s=n(6400),o=n(392),a=n(4068),c=n(6534),l=n(1544),u=n(8979),h=n(5068),d=n(1513),f=r.aTypedArray,p=r.exportTypedArrayMethod,m=i.Uint16Array,g=m&&m.prototype.sort,v=!!g&&!s((function(){var e=new m(2);e.sort(null),e.sort({})})),y=!!g&&!s((function(){if(h)return h<74;if(l)return l<67;if(u)return!0;if(d)return d<602;var e,t,n=new m(516),r=Array(516);for(e=0;e<516;e++)t=e%4,n[e]=515-e,r[e]=e-2*t+3;for(n.sort((function(e,t){return(e/4|0)-(t/4|0)})),e=0;e<516;e++)if(n[e]!==r[e])return!0})),w=function(e){return function(t,n){return void 0!==e?+e(t,n)||0:n!==n?-1:t!==t?1:0===t&&0===n?1/t>0&&1/n<0?1:-1:t>n}};p("sort",(function(e){var t=this;if(void 0!==e&&o(e),y)return g.call(t,e);f(t);var n,r=a(t.length),i=Array(r);for(n=0;n<r;n++)i[n]=t[n];for(i=c(t,w(e)),n=0;n<r;n++)t[n]=i[n];return t}),!y||v)},6105:(e,t,n)=>{var r=n(6968);r("Uint8",(function(e){return function(t,n,r){return e(this,t,n,r)}}))},71:(e,t,n)=>{var r=n(7358),i=n(4296),s=n(8753),o=n(6843),a=n(1904),c=n(854),l=c("iterator"),u=c("toStringTag"),h=o.values,d=function(e,t){if(e){if(e[l]!==h)try{a(e,l,h)}catch(r){e[l]=h}if(e[u]||a(e,u,t),i[t])for(var n in o)if(e[n]!==o[n])try{a(e,n,o[n])}catch(r){e[n]=o[n]}}};for(var f in i)d(r[f]&&r[f].prototype,f);d(s,"DOMTokenList")},5720:(e,t,n)=>{"use strict";var r=n(7458),i="firebase",s="9.1.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.registerVersion)(i,s,"app")},8336:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r.Z});var r=n(2634),i="firebase",s="9.1.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
r.Z.registerVersion(i,s,"app-compat")},8891:(e,t,n)=>{"use strict";var r=n(2634),i=n(5479),s=n(7458),o=n(8430),a=n(4),c=n(7429);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const l={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},u={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function h(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",["timeout"]:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function d(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const f=h,p=d,m=new i.LL("auth","Firebase",d()),g=new a.Yd("@firebase/auth");function v(e,...t){g.logLevel<=a["in"].ERROR&&g.error(`Auth (${s.SDK_VERSION}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(e,...t){throw T(e,...t)}function w(e,...t){return T(e,...t)}function b(e,t,n){const r=Object.assign(Object.assign({},p()),{[t]:n}),s=new i.LL("auth","Firebase",r);return s.create(t,{appName:e.name})}function _(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&y(e,"argument-error"),b(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function T(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return m.create(e,...t)}function I(e,t,...n){if(!e)throw T(t,...n)}function E(e){const t="INTERNAL ASSERTION FAILED: "+e;throw v(t),new Error(t)}function S(e,t){e||E(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k=new Map;function x(e){S(e instanceof Function,"Expected a class definition");let t=k.get(e);return t?(S(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,k.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(x);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function N(){return"http:"===R()||"https:"===R()}function R(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(N()||(0,i.ru)()||"connection"in navigator))||navigator.onLine}function P(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e,t){this.shortDelay=e,this.longDelay=t,S(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,i.uI)()||(0,i.b$)()}get(){return O()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(e,t){S(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void E("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void E("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void E("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},q=new L(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function V(e,t,n,r,s={}){return j(e,s,(()=>{let s={},o={};r&&("GET"===t?o=r:s={body:JSON.stringify(r)});const a=(0,i.xO)(Object.assign({key:e.config.apiKey},o)).slice(1),c=new(F.headers());return c.set("Content-Type","application/json"),c.set("X-Client-Version",e._getSdkClientVersion()),e.languageCode&&c.set("X-Firebase-Locale",e.languageCode),F.fetch()($(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))}))}async function j(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},M),t);try{const t=new z(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw H(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw H(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw H(e,"email-already-in-use",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw b(e,a,o);y(e,a)}}catch(s){if(s instanceof i.ZR)throw s;y(e,"network-request-failed")}}async function B(e,t,n,r,i={}){const s=await V(e,t,n,r,i);return"mfaPendingCredential"in s&&y(e,"multi-factor-auth-required",{serverResponse:s}),s}function $(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?D(e.config,i):`${e.config.apiScheme}://${i}`}class z{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(w(this.auth,"timeout"))),q.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function H(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=w(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K(e,t){return V(e,"POST","/v1/accounts:delete",t)}async function G(e,t){return V(e,"POST","/v1/accounts:update",t)}async function W(e,t){return V(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y(e,t=!1){const n=(0,i.m9)(e),r=await n.getIdToken(t),s=Z(r);I(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:r,authTime:J(Q(s.auth_time)),issuedAtTime:J(Q(s.iat)),expirationTime:J(Q(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function Q(e){return 1e3*Number(e)}function Z(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return v("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,i.tV)(n);return e?JSON.parse(e):(v("Failed to decode base64 JWT payload"),null)}catch(s){return v("Caught error parsing JWT payload as JSON",s),null}}function X(e){const t=Z(e);return I(t,"internal-error"),I("undefined"!==typeof t.exp,"internal-error"),I("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ee(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof i.ZR&&te(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function te({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=J(this.lastLoginAt),this.creationTime=J(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ie(e){var t;const n=e.auth,r=await e.getIdToken(),i=await ee(e,W(n,{idToken:r}));I(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?ae(s.providerUserInfo):[],a=oe(e.providerData,o),c=e.isAnonymous,l=!(e.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),u=!!c&&l,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new re(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(e,h)}async function se(e){const t=(0,i.m9)(e);await ie(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function oe(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function ae(e){return e.map((e=>{var{providerId:t}=e,n=(0,o._T)(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ce(e,t){const n=await j(e,{},(()=>{const n=(0,i.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:s}=e.config,o=$(e,r,"/v1/token",`key=${s}`);return F.fetch()(o,{method:"POST",headers:{"X-Client-Version":e._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){I(e.idToken,"internal-error"),I("undefined"!==typeof e.idToken,"internal-error"),I("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):X(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return I(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await ce(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new le;return n&&(I("string"===typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(I("string"===typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(I("number"===typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new le,this.toJSON())}_performRefresh(){return E("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(e,t){I("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class he{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=(0,o._T)(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new ne(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.metadata=new re(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await ee(this,this.stsTokenManager.getToken(this.auth,e));return I(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Y(this,e)}reload(){return se(this)}_assign(e){this!==e&&(I(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new he(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){I(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ie(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ee(this,K(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,l;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,v=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:y,emailVerified:w,isAnonymous:b,providerData:_,stsTokenManager:T}=t;I(y&&T,e,"internal-error");const E=le.fromJSON(this.name,T);I("string"===typeof y,e,"internal-error"),ue(u,e.name),ue(h,e.name),I("boolean"===typeof w,e,"internal-error"),I("boolean"===typeof b,e,"internal-error"),ue(d,e.name),ue(f,e.name),ue(p,e.name),ue(m,e.name),ue(g,e.name),ue(v,e.name);const S=new he({uid:y,auth:e,email:h,emailVerified:w,displayName:u,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:E,createdAt:g,lastLoginAt:v});return _&&Array.isArray(_)&&(S.providerData=_.map((e=>Object.assign({},e)))),m&&(S._redirectEventId=m),S}static async _fromIdTokenResponse(e,t,n=!1){const r=new le;r.updateFromServerResponse(t);const i=new he({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await ie(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}de.type="NONE";const fe=de;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(e,t,n){return`firebase:${e}:${t}:${n}`}class me{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=pe(this.userKey,r.apiKey,i),this.fullPersistenceKey=pe("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?he._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new me(x(fe),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||x(fe);const s=pe(n,e.config.apiKey,e.name);let o=null;for(const l of t)try{const t=await l._get(s);if(t){const n=he._fromJSON(e,t);l!==i&&(o=n),i=l;break}}catch(c){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(c){}}))),new me(i,e,n)):new me(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(be(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ve(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Te(t))return"Blackberry";if(Ie(t))return"Webos";if(ye(t))return"Safari";if((t.includes("chrome/")||we(t))&&!t.includes("edge/"))return"Chrome";if(_e(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ve(e=(0,i.z$)()){return/firefox\//i.test(e)}function ye(e=(0,i.z$)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function we(e=(0,i.z$)()){return/crios\//i.test(e)}function be(e=(0,i.z$)()){return/iemobile/i.test(e)}function _e(e=(0,i.z$)()){return/android/i.test(e)}function Te(e=(0,i.z$)()){return/blackberry/i.test(e)}function Ie(e=(0,i.z$)()){return/webos/i.test(e)}function Ee(e=(0,i.z$)()){return/iphone|ipad|ipod/i.test(e)}function Se(e=(0,i.z$)()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(e)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(e)}function ke(e=(0,i.z$)()){var t;return Ee(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function xe(){return(0,i.w1)()&&10===document.documentMode}function Ce(e=(0,i.z$)()){return Ee(e)||_e(e)||Ie(e)||Te(e)||/windows phone/i.test(e)||be(e)}function Ae(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(e,t=[]){let n;switch(e){case"Browser":n=ge((0,i.z$)());break;case"Worker":n=`${ge((0,i.z$)())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${s.SDK_VERSION}/${r}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pe(this),this.idTokenSubscription=new Pe(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=m,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=x(t)),this._initializationPromise=this.queue((async()=>{var n;this._deleted||(this.persistenceManager=await me.create(this,e),this._deleted||((null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(t),this._deleted||(this._isInitialized=!0)))})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null===n||void 0===n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(e);r&&r!==i||!(null===s||void 0===s?void 0:s.user)||(n=s.user)}return n?n._redirectEventId?(I(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ie(e)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=P()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,i.m9)(e):null;return t&&I(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&I(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(x(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new i.LL("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&x(e)||this._popupRedirectResolver;I(t,this,"argument-error"),this.redirectPersistenceManager=await me.create(this,[x(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return I(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return I(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ne(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function Oe(e){return(0,i.m9)(e)}class Pe{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,i.ne)((e=>this.observer=e))}get next(){return I(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Le(e,t,n){const r=Oe(e);I(r._canInitEmulator,r,"emulator-config-failed"),I(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),s=De(t),{host:o,port:a}=Fe(t),c=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),qe(i)}function De(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Fe(e){const t=De(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:Me(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Me(t)}}}function Me(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function qe(e){function t(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"===typeof window||"undefined"===typeof document||e||("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return E("not implemented")}_getIdTokenResponse(e){return E("not implemented")}_linkToIdToken(e,t){return E("not implemented")}_getReauthenticationResolver(e){return E("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ve(e,t){return V(e,"POST","/v1/accounts:resetPassword",U(e,t))}async function je(e,t){return V(e,"POST","/v1/accounts:update",t)}async function Be(e,t){return V(e,"POST","/v1/accounts:update",U(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $e(e,t){return B(e,"POST","/v1/accounts:signInWithPassword",U(e,t))}async function ze(e,t){return V(e,"POST","/v1/accounts:sendOobCode",U(e,t))}async function He(e,t){return ze(e,t)}async function Ke(e,t){return ze(e,t)}async function Ge(e,t){return ze(e,t)}async function We(e,t){return ze(e,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Je(e,t){return B(e,"POST","/v1/accounts:signInWithEmailLink",U(e,t))}async function Ye(e,t){return B(e,"POST","/v1/accounts:signInWithEmailLink",U(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe extends Ue{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Qe(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Qe(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return $e(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Je(e,{email:this._email,oobCode:this._password});default:y(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return je(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ye(e,{idToken:t,email:this._email,oobCode:this._password});default:y(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ze(e,t){return B(e,"POST","/v1/accounts:signInWithIdp",U(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xe="http://localhost";class et extends Ue{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new et(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):y("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=(0,o._T)(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new et(n,r);return Object.assign(s,i),s}_getIdTokenResponse(e){const t=this.buildRequest();return Ze(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Ze(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ze(e,t)}buildRequest(){const e={requestUri:Xe,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,i.xO)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tt(e,t){return V(e,"POST","/v1/accounts:sendVerificationCode",U(e,t))}async function nt(e,t){return B(e,"POST","/v1/accounts:signInWithPhoneNumber",U(e,t))}async function rt(e,t){const n=await B(e,"POST","/v1/accounts:signInWithPhoneNumber",U(e,t));if(n.temporaryProof)throw H(e,"account-exists-with-different-credential",n);return n}const it={["USER_NOT_FOUND"]:"user-not-found"};async function st(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return B(e,"POST","/v1/accounts:signInWithPhoneNumber",U(e,n),it)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot extends Ue{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new ot({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new ot({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return nt(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return rt(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return st(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new ot({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ct(e){const t=(0,i.zd)((0,i.pd)(e))["link"],n=t?(0,i.zd)((0,i.pd)(t))["deep_link_id"]:null,r=(0,i.zd)((0,i.pd)(e))["deep_link_id"],s=r?(0,i.zd)((0,i.pd)(r))["link"]:null;return s||r||n||t||e}class lt{constructor(e){var t,n,r,s,o,a;const c=(0,i.zd)((0,i.pd)(e)),l=null!==(t=c["apiKey"])&&void 0!==t?t:null,u=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=at(null!==(r=c["mode"])&&void 0!==r?r:null);I(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=null!==(s=c["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=ct(e);try{return new lt(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ut{constructor(){this.providerId=ut.PROVIDER_ID}static credential(e,t){return Qe._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=lt.parseLink(t);return I(n,"argument-error"),Qe._fromEmailAndCode(e,n.code,n.tenantId)}}ut.PROVIDER_ID="password",ut.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ut.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ht{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt extends ht{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class ft extends dt{static credentialFromJSON(e){const t="string"===typeof e?JSON.parse(e):e;return I("providerId"in t&&"signInMethod"in t,"argument-error"),et._fromParams(t)}credential(e){return this._credential(e)}_credential(e){return I(e.idToken||e.accessToken,"argument-error"),et._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return ft.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return ft.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:r,pendingToken:i,nonce:s,providerId:o}=e;if(!n&&!r&&!t&&!i)return null;if(!o)return null;try{return new ft(o)._credential({idToken:t,accessToken:n,rawNonce:s,pendingToken:i})}catch(a){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt extends dt{constructor(){super("facebook.com")}static credential(e){return et._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pt.credentialFromTaggedObject(e)}static credentialFromError(e){return pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return pt.credential(e.oauthAccessToken)}catch(t){return null}}}pt.FACEBOOK_SIGN_IN_METHOD="facebook.com",pt.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mt extends dt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return et._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return mt.credential(t,n)}catch(r){return null}}}mt.GOOGLE_SIGN_IN_METHOD="google.com",mt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gt extends dt{constructor(){super("github.com")}static credential(e){return et._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return gt.credential(e.oauthAccessToken)}catch(t){return null}}}gt.GITHUB_SIGN_IN_METHOD="github.com",gt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const vt="http://localhost";class yt extends Ue{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Ze(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Ze(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ze(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r,pendingToken:i}=t;return n&&r&&i&&n===r?new yt(n,i):null}static _create(e,t){return new yt(e,t)}buildRequest(){return{requestUri:vt,returnSecureToken:!0,pendingToken:this.pendingToken}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wt extends dt{constructor(){super("twitter.com")}static credential(e,t){return et._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return wt.credentialFromTaggedObject(e)}static credentialFromError(e){return wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return wt.credential(t,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function bt(e,t){return B(e,"POST","/v1/accounts:signUp",U(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wt.TWITTER_SIGN_IN_METHOD="twitter.com",wt.PROVIDER_ID="twitter.com";class _t{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await he._fromIdTokenResponse(e,n,r),s=Tt(n),o=new _t({user:i,providerId:s,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Tt(n);return new _t({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Tt(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function It(e){var t;const n=Oe(e);if(await n._initializationPromise,null===(t=n.currentUser)||void 0===t?void 0:t.isAnonymous)return new _t({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await bt(n,{returnSecureToken:!0}),i=await _t._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends i.ZR{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,this.name="FirebaseError",Object.setPrototypeOf(this,Et.prototype),this.appName=e.name,this.code=t.code,this.tenantId=null!==(i=e.tenantId)&&void 0!==i?i:void 0,this.serverResponse=t.customData.serverResponse}static _fromErrorAndOperation(e,t,n,r){return new Et(e,t,n,r)}}function St(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Et._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(e){return new Set(e.map((({providerId:e})=>e)).filter((e=>!!e)))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xt(e,t){const n=(0,i.m9)(e);await At(!0,n,t);const{providerUserInfo:r}=await G(n.auth,{idToken:await n.getIdToken(),deleteProvider:[t]}),s=kt(r||[]);return n.providerData=n.providerData.filter((e=>s.has(e.providerId))),s.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Ct(e,t,n=!1){const r=await ee(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return _t._forOperation(e,"link",r)}async function At(e,t,n){await ie(t);const r=kt(t.providerData),i=!1===e?"provider-already-linked":"no-such-provider";I(r.has(n)===e,t.auth,i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nt(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await ee(e,St(r,i,t,e),n);I(s.idToken,r,"internal-error");const o=Z(s.idToken);I(o,r,"internal-error");const{sub:a}=o;return I(e.uid===a,r,"user-mismatch"),_t._forOperation(e,i,s)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&y(r,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rt(e,t,n=!1){const r="signIn",i=await St(e,r,t),s=await _t._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function Ot(e,t){return Rt(Oe(e),t)}async function Pt(e,t){const n=(0,i.m9)(e);return await At(!1,n,t.providerId),Ct(n,t)}async function Lt(e,t){return Nt((0,i.m9)(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dt(e,t){return B(e,"POST","/v1/accounts:signInWithCustomToken",U(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ft(e,t){const n=Oe(e),r=await Dt(n,{token:t,returnSecureToken:!0}),i=await _t._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?qt._fromServerResponse(e,t):y(e,"internal-error")}}class qt extends Mt{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new qt(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(e,t,n){var r;I((null===(r=n.url)||void 0===r?void 0:r.length)>0,e,"invalid-continue-uri"),I("undefined"===typeof n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(I(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(I(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vt(e,t,n){const r=(0,i.m9)(e),s={requestType:"PASSWORD_RESET",email:t};n&&Ut(r,s,n),await Ke(r,s)}async function jt(e,t,n){await Ve((0,i.m9)(e),{oobCode:t,newPassword:n})}async function Bt(e,t){await Be((0,i.m9)(e),{oobCode:t})}async function $t(e,t){const n=(0,i.m9)(e),r=await Ve(n,{oobCode:t}),s=r.requestType;switch(I(s,n,"internal-error"),s){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":I(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":I(r.mfaInfo,n,"internal-error");default:I(r.email,n,"internal-error")}let o=null;return r.mfaInfo&&(o=Mt._fromServerResponse(Oe(n),r.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.newEmail:r.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.email:r.newEmail)||null,multiFactorInfo:o},operation:s}}async function zt(e,t){const{data:n}=await $t((0,i.m9)(e),t);return n.email}async function Ht(e,t,n){const r=Oe(e),i=await bt(r,{returnSecureToken:!0,email:t,password:n}),s=await _t._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function Kt(e,t,n){return Ot((0,i.m9)(e),ut.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gt(e,t,n){const r=(0,i.m9)(e),s={requestType:"EMAIL_SIGNIN",email:t};I(n.handleCodeInApp,r,"argument-error"),n&&Ut(r,s,n),await Ge(r,s)}function Wt(e,t){const n=lt.parseLink(t);return"EMAIL_SIGNIN"===(null===n||void 0===n?void 0:n.operation)}async function Jt(e,t,n){const r=(0,i.m9)(e),s=ut.credentialWithLink(t,n||A());return I(s._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Ot(r,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yt(e,t){return V(e,"POST","/v1/accounts:createAuthUri",U(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qt(e,t){const n=N()?A():"http://localhost",r={identifier:t,continueUri:n},{signinMethods:s}=await Yt((0,i.m9)(e),r);return s||[]}async function Zt(e,t){const n=(0,i.m9)(e),r=await e.getIdToken(),s={requestType:"VERIFY_EMAIL",idToken:r};t&&Ut(n.auth,s,t);const{email:o}=await He(n.auth,s);o!==e.email&&await e.reload()}async function Xt(e,t,n){const r=(0,i.m9)(e),s=await e.getIdToken(),o={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:s,newEmail:t};n&&Ut(r.auth,o,n);const{email:a}=await We(r.auth,o);a!==e.email&&await e.reload()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function en(e,t){return V(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tn(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const r=(0,i.m9)(e),s=await r.getIdToken(),o={idToken:s,displayName:t,photoUrl:n,returnSecureToken:!0},a=await ee(r,en(r.auth,o));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const c=r.providerData.find((({providerId:e})=>"password"===e));c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function nn(e,t){return sn((0,i.m9)(e),t,null)}function rn(e,t){return sn((0,i.m9)(e),null,t)}async function sn(e,t,n){const{auth:r}=e,i=await e.getIdToken(),s={idToken:i,returnSecureToken:!0};t&&(s.email=t),n&&(s.password=n);const o=await ee(e,je(r,s));await e._updateTokensIfNecessary(o,!0)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(e){var t,n;if(!e)return null;const{providerId:r}=e,i=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},s=e.isNewUser||"identitytoolkit#SignupNewUserResponse"===e.kind;if(!r&&(null===e||void 0===e?void 0:e.idToken)){const r=null===(n=null===(t=Z(e.idToken))||void 0===t?void 0:t.firebase)||void 0===n?void 0:n["sign_in_provider"];if(r){const e="anonymous"!==r&&"custom"!==r?r:null;return new an(s,e)}}if(!r)return null;switch(r){case"facebook.com":return new ln(s,i);case"github.com":return new un(s,i);case"google.com":return new hn(s,i);case"twitter.com":return new dn(s,i,e.screenName||null);case"custom":case"anonymous":return new an(s,null);default:return new an(s,r,i)}}class an{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class cn extends an{constructor(e,t,n,r){super(e,t,n),this.username=r}}class ln extends an{constructor(e,t){super(e,"facebook.com",t)}}class un extends cn{constructor(e,t){super(e,"github.com",t,"string"===typeof(null===t||void 0===t?void 0:t.login)?null===t||void 0===t?void 0:t.login:null)}}class hn extends an{constructor(e,t){super(e,"google.com",t)}}class dn extends cn{constructor(e,t,n){super(e,"twitter.com",t,n)}}function fn(e){const{user:t,_tokenResponse:n}=e;return t.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:on(n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e,t){this.type=e,this.credential=t}static _fromIdtoken(e){return new pn("enroll",e)}static _fromMfaPendingCredential(e){return new pn("signin",e)}toJSON(){const e="enroll"===this.type?"idToken":"pendingCredential";return{multiFactorSession:{[e]:this.credential}}}static fromJSON(e){var t,n;if(null===e||void 0===e?void 0:e.multiFactorSession){if(null===(t=e.multiFactorSession)||void 0===t?void 0:t.pendingCredential)return pn._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(null===(n=e.multiFactorSession)||void 0===n?void 0:n.idToken)return pn._fromIdtoken(e.multiFactorSession.idToken)}return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}static _fromError(e,t){const n=Oe(e),r=(t.serverResponse.mfaInfo||[]).map((e=>Mt._fromServerResponse(n,e)));I(t.serverResponse.mfaPendingCredential,n,"internal-error");const i=pn._fromMfaPendingCredential(t.serverResponse.mfaPendingCredential);return new mn(i,r,(async e=>{const r=await e._process(n,i);delete t.serverResponse.mfaInfo,delete t.serverResponse.mfaPendingCredential;const s=Object.assign(Object.assign({},t.serverResponse),{idToken:r.idToken,refreshToken:r.refreshToken});switch(t.operationType){case"signIn":const e=await _t._fromIdTokenResponse(n,t.operationType,s);return await n._updateCurrentUser(e.user),e;case"reauthenticate":return I(t.user,n,"internal-error"),_t._forOperation(t.user,t.operationType,s);default:y(n,"internal-error")}}))}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function gn(e,t){var n;const r=(0,i.m9)(e),s=t;return I(t.operationType,r,"argument-error"),I(null===(n=s.serverResponse)||void 0===n?void 0:n.mfaPendingCredential,r,"argument-error"),mn._fromError(r,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(e,t){return V(e,"POST","/v2/accounts/mfaEnrollment:start",U(e,t))}function yn(e,t){return V(e,"POST","/v2/accounts/mfaEnrollment:finalize",U(e,t))}function wn(e,t){return V(e,"POST","/v2/accounts/mfaEnrollment:withdraw",U(e,t))}class bn{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload((t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map((t=>Mt._fromServerResponse(e.auth,t))))}))}static _fromUser(e){return new bn(e)}async getSession(){return pn._fromIdtoken(await this.user.getIdToken())}async enroll(e,t){const n=e,r=await this.getSession(),i=await ee(this.user,n._process(this.user.auth,r,t));return await this.user._updateTokensIfNecessary(i),this.user.reload()}async unenroll(e){const t="string"===typeof e?e:e.uid,n=await this.user.getIdToken(),r=await ee(this.user,wn(this.user.auth,{idToken:n,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter((({uid:e})=>e!==t)),await this.user._updateTokensIfNecessary(r);try{await this.user.reload()}catch(i){if("auth/user-token-expired"!==i.code)throw i}}}const _n=new WeakMap;function Tn(e){const t=(0,i.m9)(e);return _n.has(t)||_n.set(t,bn._fromUser(t)),_n.get(t)}const In="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e,t){this.storage=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(In,"1"),this.storage.removeItem(In),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(){const e=(0,i.z$)();return ye(e)||Ee(e)}const kn=1e3,xn=10;class Cn extends En{constructor(){super(window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Sn()&&Ae(),this.fallbackToPolling=Ce(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);xe()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,xn):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),kn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Cn.type="LOCAL";const An=Cn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends En{constructor(){super(window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Nn.type="SESSION";const Rn=Nn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Pn(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await On(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ln(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pn.receivers=[];class Dn{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=Ln("",20);r.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(l),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(){return window}function Mn(e){Fn().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(){return"undefined"!==typeof Fn()["WorkerGlobalScope"]&&"function"===typeof Fn()["importScripts"]}async function Un(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function Vn(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function jn(){return qn()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn="firebaseLocalStorageDb",$n=1,zn="firebaseLocalStorage",Hn="fbase_key";class Kn{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Gn(e,t){return e.transaction([zn],t?"readwrite":"readonly").objectStore(zn)}function Wn(){const e=indexedDB.deleteDatabase(Bn);return new Kn(e).toPromise()}function Jn(){const e=indexedDB.open(Bn,$n);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(zn,{keyPath:Hn})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(zn)?t(n):(n.close(),await Wn(),t(await Jn()))}))}))}async function Yn(e,t,n){const r=Gn(e,!0).put({[Hn]:t,value:n});return new Kn(r).toPromise()}async function Qn(e,t){const n=Gn(e,!1).get(t),r=await new Kn(n).toPromise();return void 0===r?null:r.value}function Zn(e,t){const n=Gn(e,!0).delete(t);return new Kn(n).toPromise()}const Xn=800,er=3;class tr{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Jn()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>er)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return qn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Pn._getInstance(jn()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await Un(),!this.activeServiceWorker)return;this.sender=new Dn(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&Vn()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Jn();return await Yn(e,In,"1"),await Zn(e,In),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Yn(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>Qn(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Zn(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Gn(e,!1).getAll();return new Kn(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),Xn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}tr.type="LOCAL";const nr=tr;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(e,t){return V(e,"POST","/v2/accounts/mfaSignIn:start",U(e,t))}function ir(e,t){return V(e,"POST","/v2/accounts/mfaSignIn:finalize",U(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sr(e){return(await V(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function ar(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=w("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",or().appendChild(r)}))}function cr(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr=500,ur=6e4,hr=1e12;class dr{constructor(e){this.auth=e,this.counter=hr,this._widgets=new Map}render(e,t){const n=this.counter;return this._widgets.set(n,new fr(e,this.auth.name,t||{})),this.counter++,n}reset(e){var t;const n=e||hr;null===(t=this._widgets.get(n))||void 0===t||t.delete(),this._widgets.delete(n)}getResponse(e){var t;const n=e||hr;return(null===(t=this._widgets.get(n))||void 0===t?void 0:t.getResponse())||""}async execute(e){var t;const n=e||hr;return null===(t=this._widgets.get(n))||void 0===t||t.execute(),""}}class fr{constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const r="string"===typeof e?document.getElementById(e):e;I(r,"argument-error",{appName:t}),this.container=r,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout((()=>{this.responseToken=pr(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(n){}this.timerId=window.setTimeout((()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(n){}this.isVisible&&this.execute()}),ur)}),lr))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function pr(e){const t=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<e;r++)t.push(n.charAt(Math.floor(Math.random()*n.length)));return t.join("")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mr=cr("rcb"),gr=new L(3e4,6e4),vr="https://www.google.com/recaptcha/api.js?";class yr{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!Fn().grecaptcha}load(e,t=""){return I(wr(t),e,"argument-error"),this.shouldResolveImmediately(t)?Promise.resolve(Fn().grecaptcha):new Promise(((n,r)=>{const s=Fn().setTimeout((()=>{r(w(e,"network-request-failed"))}),gr.get());Fn()[mr]=()=>{Fn().clearTimeout(s),delete Fn()[mr];const i=Fn().grecaptcha;if(!i)return void r(w(e,"internal-error"));const o=i.render;i.render=(e,t)=>{const n=o(e,t);return this.counter++,n},this.hostLanguage=t,n(i)};const o=`${vr}?${(0,i.xO)({onload:mr,render:"explicit",hl:t})}`;ar(o).catch((()=>{clearTimeout(s),r(w(e,"internal-error"))}))}))}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!Fn().grecaptcha&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function wr(e){return e.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}class br{async load(e){return new dr(e)}clearedOneInstance(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r="recaptcha",Tr={theme:"light",type:"image"};class Ir{constructor(e,t=Object.assign({},Tr),n){this.parameters=t,this.type=_r,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Oe(n),this.isInvisible="invisible"===this.parameters.size,I("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment");const r="string"===typeof e?document.getElementById(e):e;I(r,this.auth,"argument-error"),this.container=r,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new br:new yr,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise((n=>{const r=e=>{e&&(this.tokenChangeListeners.delete(r),n(e))};this.tokenChangeListeners.add(r),this.isInvisible&&t.execute(e)}))}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch((e=>{throw this.renderPromise=null,e}))),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach((e=>{this.container.removeChild(e)}))}validateStartingState(){I(!this.parameters.sitekey,this.auth,"argument-error"),I(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),I("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach((e=>e(t))),"function"===typeof e)e(t);else if("string"===typeof e){const n=Fn()[e];"function"===typeof n&&n(t)}}}assertNotDestroyed(){I(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){I(N()&&!qn(),this.auth,"internal-error"),await Er(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await sr(this.auth);I(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return I(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function Er(){let e=null;return new Promise((t=>{"complete"!==document.readyState?(e=()=>t(),window.addEventListener("load",e)):t()})).catch((t=>{throw e&&window.removeEventListener("load",e),t}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=ot._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function kr(e,t,n){const r=Oe(e),s=await Ar(r,t,(0,i.m9)(n));return new Sr(s,(e=>Ot(r,e)))}async function xr(e,t,n){const r=(0,i.m9)(e);await At(!1,r,"phone");const s=await Ar(r.auth,t,(0,i.m9)(n));return new Sr(s,(e=>Pt(r,e)))}async function Cr(e,t,n){const r=(0,i.m9)(e),s=await Ar(r.auth,t,(0,i.m9)(n));return new Sr(s,(e=>Lt(r,e)))}async function Ar(e,t,n){var r;const i=await n.verify();try{let s;if(I("string"===typeof i,e,"argument-error"),I(n.type===_r,e,"argument-error"),s="string"===typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){I("enroll"===t.type,e,"internal-error");const n=await vn(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{I("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;I(n,e,"missing-multi-factor-info");const o=await rr(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await tt(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}async function Nr(e,t){await Ct((0,i.m9)(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e){this.providerId=Rr.PROVIDER_ID,this.auth=Oe(e)}verifyPhoneNumber(e,t){return Ar(this.auth,e,(0,i.m9)(t))}static credential(e,t){return ot._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Rr.credentialFromTaggedObject(t)}static credentialFromError(e){return Rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?ot._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Or(e,t){return t?x(t):(I(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rr.PROVIDER_ID="phone",Rr.PHONE_SIGN_IN_METHOD="phone";class Pr extends Ue{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ze(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ze(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ze(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Lr(e){return Rt(e.auth,new Pr(e),e.bypassAuthState)}function Dr(e){const{auth:t,user:n}=e;return I(n,t,"internal-error"),Nt(n,new Pr(e),e.bypassAuthState)}async function Fr(e){const{auth:t,user:n}=e;return I(n,t,"internal-error"),Ct(n,new Pr(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Lr;case"linkViaPopup":case"linkViaRedirect":return Fr;case"reauthViaPopup":case"reauthViaRedirect":return Dr;default:y(this.auth,"internal-error")}}resolve(e){S(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){S(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr=new L(2e3,1e4);async function Ur(e,t,n){const r=Oe(e);_(e,t,ht);const i=Or(r,n),s=new Br(r,"signInViaPopup",t,i);return s.executeNotNull()}async function Vr(e,t,n){const r=(0,i.m9)(e);_(r.auth,t,ht);const s=Or(r.auth,n),o=new Br(r.auth,"reauthViaPopup",t,s,r);return o.executeNotNull()}async function jr(e,t,n){const r=(0,i.m9)(e);_(r.auth,t,ht);const s=Or(r.auth,n),o=new Br(r.auth,"linkViaPopup",t,s,r);return o.executeNotNull()}class Br extends Mr{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Br.currentPopupAction&&Br.currentPopupAction.cancel(),Br.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return I(e,this.auth,"internal-error"),e}async onExecution(){S(1===this.filter.length,"Popup operations only handle one event");const e=Ln();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(w(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(w(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Br.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(w(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,qr.get())};e()}}Br.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const $r="pendingRedirect",zr=new Map;class Hr extends Mr{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=zr.get(this.auth._key());if(!e){try{const t=await Kr(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}zr.set(this.auth._key(),e)}return e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Kr(e,t){const n=Yr(t),r="true"===await Jr(e)._get(n);return await Jr(e)._remove(n),r}async function Gr(e,t){return Jr(e)._set(Yr(t),"true")}function Wr(){zr.clear()}function Jr(e){return x(e._redirectPersistence)}function Yr(e){return pe($r,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qr(e,t,n){return Zr(e,t,n)}async function Zr(e,t,n){const r=Oe(e);_(e,t,ht);const i=Or(r,n);return await Gr(i,r),i._openRedirect(r,t,"signInViaRedirect")}function Xr(e,t,n){return ei(e,t,n)}async function ei(e,t,n){const r=(0,i.m9)(e);_(r.auth,t,ht);const s=Or(r.auth,n);await Gr(s,r.auth);const o=await si(r);return s._openRedirect(r.auth,t,"reauthViaRedirect",o)}function ti(e,t,n){return ni(e,t,n)}async function ni(e,t,n){const r=(0,i.m9)(e);_(r.auth,t,ht);const s=Or(r.auth,n);await At(!1,r,t.providerId),await Gr(s,r.auth);const o=await si(r);return s._openRedirect(r.auth,t,"linkViaRedirect",o)}async function ri(e,t){return await Oe(e)._initializationPromise,ii(e,t,!1)}async function ii(e,t,n=!1){const r=Oe(e),i=Or(r,t),s=new Hr(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}async function si(e){const t=Ln(`${e.uid}:::`);return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi=6e5;class ai{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!ui(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!li(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(w(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=oi&&this.cachedEventUids.clear(),this.cachedEventUids.has(ci(e))}saveEventToCache(e){this.cachedEventUids.add(ci(e)),this.lastProcessedEventTime=Date.now()}}function ci(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function li({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function ui(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return li(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hi(e,t={}){return V(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const di=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,fi=/^https?/;async function pi(e){if(e.config.emulator)return;const{authorizedDomains:t}=await hi(e);for(const r of t)try{if(mi(r))return}catch(n){}y(e,"unauthorized-domain")}function mi(e){const t=A(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!fi.test(n))return!1;if(di.test(e))return r===e;const i=e.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gi=new L(3e4,6e4);function vi(){const e=Fn().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function yi(e){return new Promise(((t,n)=>{var r,i,s;function o(){vi(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{vi(),n(w(e,"network-request-failed"))},timeout:gi.get()})}if(null===(i=null===(r=Fn().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Fn().gapi)||void 0===s?void 0:s.load)){const t=cr("iframefcb");return Fn()[t]=()=>{gapi.load?o():n(w(e,"network-request-failed"))},ar(`https://apis.google.com/js/api.js?onload=${t}`)}o()}})).catch((e=>{throw wi=null,e}))}let wi=null;function bi(e){return wi=wi||yi(e),wi}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _i=new L(5e3,15e3),Ti="__/auth/iframe",Ii="emulator/auth/iframe",Ei={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},Si=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ki(e){const t=e.config;I(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?D(t,Ii):`https://${e.config.authDomain}/${Ti}`,r={apiKey:t.apiKey,appName:e.name,v:s.SDK_VERSION},o=Si.get(e.config.apiHost);o&&(r.eid=o);const a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),`${n}?${(0,i.xO)(r).slice(1)}`}async function xi(e){const t=await bi(e),n=Fn().gapi;return I(n,e,"internal-error"),t.open({where:document.body,url:ki(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ei,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=w(e,"network-request-failed"),s=Fn().setTimeout((()=>{r(i)}),_i.get());function o(){Fn().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ai=500,Ni=600,Ri="_blank",Oi="http://localhost";class Pi{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Li(e,t,n,r=Ai,s=Ni){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},Ci),{width:r.toString(),height:s.toString(),top:o,left:a}),u=(0,i.z$)().toLowerCase();n&&(c=we(u)?Ri:n),ve(u)&&(t=t||Oi,l.scrollbars="yes");const h=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(ke(u)&&"_self"!==c)return Di(t||"",c),new Pi(null);const d=window.open(t||"",c,h);I(d,e,"popup-blocked");try{d.focus()}catch(f){}return new Pi(d)}function Di(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fi="__/auth/handler",Mi="emulator/auth/handler";function qi(e,t,n,r,o,a){I(e.config.authDomain,e,"auth-domain-config-required"),I(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:s.SDK_VERSION,eventId:o};if(t instanceof ht){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",(0,i.xb)(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof dt){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const l=c;for(const i of Object.keys(l))void 0===l[i]&&delete l[i];return`${Ui(e)}?${(0,i.xO)(l).slice(1)}`}function Ui({config:e}){return e.emulator?D(e,Mi):`https://${e.authDomain}/${Fi}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vi="webStorageSupport";class ji{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Rn,this._completeRedirectFn=ii}async _openPopup(e,t,n,r){var i;S(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const s=qi(e,t,n,A(),r);return Li(e,s,Ln())}async _openRedirect(e,t,n,r){return await this._originValidation(e),Mn(qi(e,t,n,A(),r)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(S(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n}async initAndGetManager(e){const t=await xi(e),n=new ai(e);return t.register("authEvent",(t=>{I(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(Vi,{type:Vi},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Vi];void 0!==i&&t(!!i),y(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=pi(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ce()||ye()||Ee()}}const Bi=ji;class $i{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return E("unexpected MultiFactorSessionType")}}}class zi extends $i{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new zi(e)}_finalizeEnroll(e,t,n){return yn(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return ir(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Hi{constructor(){}static assertion(e){return zi._fromCredential(e)}}Hi.FACTOR_ID="phone";var Ki="@firebase/auth",Gi="0.18.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wi{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){I(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Yi(e){(0,s._registerComponent)(new c.wA("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),{apiKey:i,authDomain:s}=r.options;return(t=>{I(i&&!i.includes(":"),"invalid-api-key",{appName:t.name}),I(!(null===s||void 0===s?void 0:s.includes(":")),"argument-error",{appName:t.name});const r={apiKey:i,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ne(e)},o=new Re(t,r);return C(o,n),o})(r)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),(0,s._registerComponent)(new c.wA("auth-internal",(e=>{const t=Oe(e.getProvider("auth").getImmediate());return(e=>new Wi(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,s.registerVersion)(Ki,Gi,Ji(e))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Qi(){return window}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yi("Browser");const Zi=2e3;async function Xi(e,t,n){var r;const{BuildInfo:i}=Qi();S(t.sessionId,"AuthEvent did not contain a session ID");const s=await is(t.sessionId),o={};return Ee()?o["ibi"]=i.packageName:_e()?o["apn"]=i.packageName:y(e,"operation-not-supported-in-this-environment"),i.displayName&&(o["appDisplayName"]=i.displayName),o["sessionId"]=s,qi(e,n,t.type,void 0,null!==(r=t.eventId)&&void 0!==r?r:void 0,o)}async function es(e){const{BuildInfo:t}=Qi(),n={};Ee()?n.iosBundleId=t.packageName:_e()?n.androidPackageName=t.packageName:y(e,"operation-not-supported-in-this-environment"),await hi(e,n)}function ts(e){const{cordova:t}=Qi();return new Promise((n=>{t.plugins.browsertab.isAvailable((r=>{let i=null;r?t.plugins.browsertab.openUrl(e):i=t.InAppBrowser.open(e,Se()?"_blank":"_system","location=yes"),n(i)}))}))}async function ns(e,t,n){const{cordova:r}=Qi();let i=()=>{};try{await new Promise(((s,o)=>{let a=null;function c(){var e;s();const t=null===(e=r.plugins.browsertab)||void 0===e?void 0:e.close;"function"===typeof t&&t(),"function"===typeof(null===n||void 0===n?void 0:n.close)&&n.close()}function l(){a||(a=window.setTimeout((()=>{o(w(e,"redirect-cancelled-by-user"))}),Zi))}function u(){"visible"===(null===document||void 0===document?void 0:document.visibilityState)&&l()}t.addPassiveListener(c),document.addEventListener("resume",l,!1),_e()&&document.addEventListener("visibilitychange",u,!1),i=()=>{t.removePassiveListener(c),document.removeEventListener("resume",l,!1),document.removeEventListener("visibilitychange",u,!1),a&&window.clearTimeout(a)}}))}finally{i()}}function rs(e){var t,n,r,i,s,o,a,c,l,u;const h=Qi();I("function"===typeof(null===(t=null===h||void 0===h?void 0:h.universalLinks)||void 0===t?void 0:t.subscribe),e,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),I("undefined"!==typeof(null===(n=null===h||void 0===h?void 0:h.BuildInfo)||void 0===n?void 0:n.packageName),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),I("function"===typeof(null===(s=null===(i=null===(r=null===h||void 0===h?void 0:h.cordova)||void 0===r?void 0:r.plugins)||void 0===i?void 0:i.browsertab)||void 0===s?void 0:s.openUrl),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),I("function"===typeof(null===(c=null===(a=null===(o=null===h||void 0===h?void 0:h.cordova)||void 0===o?void 0:o.plugins)||void 0===a?void 0:a.browsertab)||void 0===c?void 0:c.isAvailable),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),I("function"===typeof(null===(u=null===(l=null===h||void 0===h?void 0:h.cordova)||void 0===l?void 0:l.InAppBrowser)||void 0===u?void 0:u.open),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function is(e){const t=ss(e),n=await crypto.subtle.digest("SHA-256",t),r=Array.from(new Uint8Array(n));return r.map((e=>e.toString(16).padStart(2,"0"))).join("")}function ss(e){if(S(/[0-9a-zA-Z]+/.test(e),"Can only convert alpha-numeric strings"),"undefined"!==typeof TextEncoder)return(new TextEncoder).encode(e);const t=new ArrayBuffer(e.length),n=new Uint8Array(t);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os=20;class as extends ai{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise((e=>{this.resolveInialized=e}))}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach((t=>t(e))),super.onEvent(e)}async initialized(){await this.initPromise}}function cs(e,t,n=null){return{type:t,eventId:n,urlResponse:null,sessionId:ds(),postBody:null,tenantId:e.tenantId,error:w(e,"no-auth-event")}}function ls(e,t){return fs()._set(ps(e),t)}async function us(e){const t=await fs()._get(ps(e));return t&&await fs()._remove(ps(e)),t}function hs(e,t){var n,r;const i=gs(t);if(i.includes("/__/auth/callback")){const t=vs(i),s=t["firebaseError"]?ms(decodeURIComponent(t["firebaseError"])):null,o=null===(r=null===(n=null===s||void 0===s?void 0:s["code"])||void 0===n?void 0:n.split("auth/"))||void 0===r?void 0:r[1],a=o?w(o):null;return a?{type:e.type,eventId:e.eventId,tenantId:e.tenantId,error:a,urlResponse:null,sessionId:null,postBody:null}:{type:e.type,eventId:e.eventId,tenantId:e.tenantId,sessionId:e.sessionId,urlResponse:i,postBody:null}}return null}function ds(){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<os;n++){const n=Math.floor(Math.random()*t.length);e.push(t.charAt(n))}return e.join("")}function fs(){return x(An)}function ps(e){return pe("authEvent",e.config.apiKey,e.name)}function ms(e){try{return JSON.parse(e)}catch(t){return null}}function gs(e){const t=vs(e),n=t["link"]?decodeURIComponent(t["link"]):void 0,r=vs(n)["link"],i=t["deep_link_id"]?decodeURIComponent(t["deep_link_id"]):void 0,s=vs(i)["link"];return s||i||r||n||e}function vs(e){if(!(null===e||void 0===e?void 0:e.includes("?")))return{};const[t,...n]=e.split("?");return(0,i.zd)(n.join("?"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys=500;class ws{constructor(){this._redirectPersistence=Rn,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=ii}async _initialize(e){const t=e._key();let n=this.eventManagers.get(t);return n||(n=new as(e),this.eventManagers.set(t,n),this.attachCallbackListeners(e,n)),n}_openPopup(e){y(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,n,r){rs(e);const i=await this._initialize(e);await i.initialized(),i.resetRedirect(),Wr(),await this._originValidation(e);const s=cs(e,n,r);await ls(e,s);const o=await Xi(e,s,t),a=await ts(o);return ns(e,i,a)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=es(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:n,handleOpenURL:r,BuildInfo:i}=Qi(),s=setTimeout((async()=>{await us(e),t.onEvent(_s())}),ys),o=async n=>{clearTimeout(s);const r=await us(e);let i=null;r&&(null===n||void 0===n?void 0:n["url"])&&(i=hs(r,n["url"])),t.onEvent(i||_s())};"undefined"!==typeof n&&"function"===typeof n.subscribe&&n.subscribe(null,o);const a=r,c=`${i.packageName.toLowerCase()}://`;Qi().handleOpenURL=async e=>{if(e.toLowerCase().startsWith(c)&&o({url:e}),"function"===typeof a)try{a(e)}catch(t){console.error(t)}}}}const bs=ws;function _s(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:w("no-auth-event")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ts(e,t){Oe(e)._logFramework(t)}var Is="@firebase/auth-compat",Es="0.1.4";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ss=1e3;function ks(){var e;return(null===(e=null===self||void 0===self?void 0:self.location)||void 0===e?void 0:e.protocol)||null}function xs(){return"http:"===ks()||"https:"===ks()}function Cs(e=(0,i.z$)()){return!("file:"!==ks()&&"ionic:"!==ks()||!e.toLowerCase().match(/iphone|ipad|ipod|android/))}function As(){return(0,i.b$)()||(0,i.UG)()}function Ns(){return(0,i.w1)()&&11===(null===document||void 0===document?void 0:document.documentMode)}function Rs(e=(0,i.z$)()){return/Edge\/\d+/.test(e)}function Os(e=(0,i.z$)()){return Ns()||Rs(e)}function Ps(){try{const e=self.localStorage,t=Ln();if(e)return e["setItem"](t,"1"),e["removeItem"](t),!Os()||(0,i.hl)()}catch(e){return Ls()&&(0,i.hl)()}return!1}function Ls(){return"undefined"!==typeof n.g&&"WorkerGlobalScope"in n.g&&"importScripts"in n.g}function Ds(){return(xs()||(0,i.ru)()||Cs())&&!As()&&Ps()&&!Ls()}function Fs(){return Cs()&&"undefined"!==typeof document}async function Ms(){return!!Fs()&&new Promise((e=>{const t=setTimeout((()=>{e(!1)}),Ss);document.addEventListener("deviceready",(()=>{clearTimeout(t),e(!0)}))}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qs={LOCAL:"local",NONE:"none",SESSION:"session"},Us=I,Vs="persistence";function js(e,t){Us(Object.values(qs).includes(t),e,"invalid-persistence-type"),(0,i.b$)()?Us(t!==qs.SESSION,e,"unsupported-persistence-type"):(0,i.UG)()?Us(t===qs.NONE,e,"unsupported-persistence-type"):Ls()?Us(t===qs.NONE||t===qs.LOCAL&&(0,i.hl)(),e,"unsupported-persistence-type"):Us(t===qs.NONE||Ps(),e,"unsupported-persistence-type")}async function Bs(e){await e._initializationPromise;const t=zs(),n=pe(Vs,e.config.apiKey,e.name);(null===t||void 0===t?void 0:t.sessionStorage)&&t.sessionStorage.setItem(n,e._getPersistence())}function $s(e,t){const n=zs();if(!(null===n||void 0===n?void 0:n.sessionStorage))return[];const r=pe(Vs,e,t),i=n.sessionStorage.getItem(r);switch(i){case qs.NONE:return[fe];case qs.LOCAL:return[nr,Rn];case qs.SESSION:return[Rn];default:return[]}}function zs(){return"undefined"!==typeof window?window:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hs=I;class Ks{constructor(){this.browserResolver=x(Bi),this.cordovaResolver=x(bs),this.underlyingResolver=null,this._redirectPersistence=Rn,this._completeRedirectFn=ii}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,n,r)}async _openRedirect(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,n,r)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return Fs()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return Hs(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await Ms();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gs(e){return e.unwrap()}function Ws(e){return e.wrapped()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Js(e){return Qs(e)}function Ys(e,t){var n;const r=null===(n=t.customData)||void 0===n?void 0:n._tokenResponse;if("auth/multi-factor-auth-required"===t.code){const n=t;n.resolver=new eo(e,gn(e,t))}else if(r){const e=Qs(t),n=t;e&&(n.credential=e,n.tenantId=r.tenantId||void 0,n.email=r.email||void 0,n.phoneNumber=r.phoneNumber||void 0)}}function Qs(e){const{_tokenResponse:t}=e instanceof i.ZR?e.customData:e;if(!t)return null;if(!(e instanceof i.ZR)&&"temporaryProof"in t&&"phoneNumber"in t)return Rr.credentialFromResult(e);const n=t.providerId;if(!n||n===l.PASSWORD)return null;let r;switch(n){case l.GOOGLE:r=mt;break;case l.FACEBOOK:r=pt;break;case l.GITHUB:r=gt;break;case l.TWITTER:r=wt;break;default:const{oauthIdToken:e,oauthAccessToken:i,oauthTokenSecret:s,pendingToken:o,nonce:a}=t;return i||s||e||o?o?n.startsWith("saml.")?yt._create(n,o):et._fromParams({providerId:n,signInMethod:n,pendingToken:o,idToken:e,accessToken:i}):new ft(n).credential({idToken:e,accessToken:i,rawNonce:a}):null}return e instanceof i.ZR?r.credentialFromError(e):r.credentialFromResult(e)}async function Zs(e,t){let n;try{n=await t}catch(o){throw o instanceof i.ZR&&Ys(e,o),o}const{operationType:r,user:s}=n;return{operationType:r,credential:Js(n),additionalUserInfo:fn(n),user:to.getOrCreate(s)}}async function Xs(e,t){const n=await t;return{verificationId:n.verificationId,confirm:t=>Zs(e,n.confirm(t))}}class eo{constructor(e,t){this.resolver=t,this.auth=Ws(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Zs(Gs(this.auth),this.resolver.resolveSignIn(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e){this._delegate=e,this.multiFactor=Tn(e)}static getOrCreate(e){return to.USER_MAP.has(e)||to.USER_MAP.set(e,new to(e)),to.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Zs(this.auth,Pt(this._delegate,e))}async linkWithPhoneNumber(e,t){return Xs(this.auth,xr(this._delegate,e,t))}async linkWithPopup(e){return Zs(this.auth,jr(this._delegate,e,Ks))}async linkWithRedirect(e){return await Bs(Oe(this.auth)),ti(this._delegate,e,Ks)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Zs(this.auth,Lt(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return Xs(this.auth,Cr(this._delegate,e,t))}reauthenticateWithPopup(e){return Zs(this.auth,Vr(this._delegate,e,Ks))}async reauthenticateWithRedirect(e){return await Bs(Oe(this.auth)),Xr(this._delegate,e,Ks)}sendEmailVerification(e){return Zt(this._delegate,e)}async unlink(e){return await xt(this._delegate,e),this}updateEmail(e){return nn(this._delegate,e)}updatePassword(e){return rn(this._delegate,e)}updatePhoneNumber(e){return Nr(this._delegate,e)}updateProfile(e){return tn(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return Xt(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}to.USER_MAP=new WeakMap;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const no=I;class ro{constructor(e,t){if(this.app=e,t.isInitialized())return this._delegate=t.getImmediate(),void this.linkUnderlyingAuth();const{apiKey:n}=e.options;no(n,"invalid-api-key",{appName:e.name});let r=[fe];if("undefined"!==typeof window){r=$s(n,e.name);for(const e of[nr,An,Rn])r.includes(e)||r.push(e)}no(n,"invalid-api-key",{appName:e.name});const i="undefined"!==typeof window?Ks:void 0;this._delegate=t.initialize({options:{persistence:r,popupRedirectResolver:i}}),this._delegate._updateErrorMap(f),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?to.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){Le(this._delegate,e,t)}applyActionCode(e){return Bt(this._delegate,e)}checkActionCode(e){return $t(this._delegate,e)}confirmPasswordReset(e,t){return jt(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return Zs(this._delegate,Ht(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return Qt(this._delegate,e)}isSignInWithEmailLink(e){return Wt(this._delegate,e)}async getRedirectResult(){no(Ds(),this._delegate,"operation-not-supported-in-this-environment");const e=await ri(this._delegate,Ks);return e?Zs(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){Ts(this._delegate,e)}onAuthStateChanged(e,t,n){const{next:r,error:i,complete:s}=io(e,t,n);return this._delegate.onAuthStateChanged(r,i,s)}onIdTokenChanged(e,t,n){const{next:r,error:i,complete:s}=io(e,t,n);return this._delegate.onIdTokenChanged(r,i,s)}sendSignInLinkToEmail(e,t){return Gt(this._delegate,e,t)}sendPasswordResetEmail(e,t){return Vt(this._delegate,e,t||void 0)}async setPersistence(e){let t;switch(js(this._delegate,e),e){case qs.SESSION:t=Rn;break;case qs.LOCAL:const e=await x(nr)._isAvailable();t=e?nr:An;break;case qs.NONE:t=fe;break;default:return y("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Zs(this._delegate,It(this._delegate))}signInWithCredential(e){return Zs(this._delegate,Ot(this._delegate,e))}signInWithCustomToken(e){return Zs(this._delegate,Ft(this._delegate,e))}signInWithEmailAndPassword(e,t){return Zs(this._delegate,Kt(this._delegate,e,t))}signInWithEmailLink(e,t){return Zs(this._delegate,Jt(this._delegate,e,t))}signInWithPhoneNumber(e,t){return Xs(this._delegate,kr(this._delegate,e,t))}async signInWithPopup(e){return no(Ds(),this._delegate,"operation-not-supported-in-this-environment"),Zs(this._delegate,Ur(this._delegate,e,Ks))}async signInWithRedirect(e){return no(Ds(),this._delegate,"operation-not-supported-in-this-environment"),await Bs(this._delegate),Qr(this._delegate,e,Ks)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return zt(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}function io(e,t,n){let r=e;"function"!==typeof e&&({next:r,error:t,complete:n}=e);const i=r,s=e=>i(e&&to.getOrCreate(e));return{next:s,error:t,complete:n}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ro.Persistence=qs;class so{constructor(){this.providerId="phone",this._delegate=new Rr(Gs(r.Z.auth()))}static credential(e,t){return Rr.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}so.PHONE_SIGN_IN_METHOD=Rr.PHONE_SIGN_IN_METHOD,so.PROVIDER_ID=Rr.PROVIDER_ID;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const oo=I;class ao{constructor(e,t,n=r.Z.app()){var i;oo(null===(i=n.options)||void 0===i?void 0:i.apiKey,"invalid-api-key",{appName:n.name}),this._delegate=new Ir(e,t,n.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const co="auth-compat";function lo(e){e.INTERNAL.registerComponent(new c.wA(co,(e=>{const t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("auth");return new ro(t,n)}),"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:u.EMAIL_SIGNIN,PASSWORD_RESET:u.PASSWORD_RESET,RECOVER_EMAIL:u.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:u.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:u.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:u.VERIFY_EMAIL}},EmailAuthProvider:ut,FacebookAuthProvider:pt,GithubAuthProvider:gt,GoogleAuthProvider:mt,OAuthProvider:ft,PhoneAuthProvider:so,PhoneMultiFactorGenerator:Hi,RecaptchaVerifier:ao,TwitterAuthProvider:wt,Auth:ro,AuthCredential:Ue,Error:i.ZR}).setInstantiationMode("LAZY").setMultipleInstances(!1)),e.registerVersion(Is,Es)}lo(r.Z)},7452:(e,t,n)=>{"use strict";var r,i=n(2634),s=n(7458),o=n(7429),a=n(4),c=n(5479),l="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},u={},h=h||{},d=l||self;function f(){}function p(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function m(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function g(e){return Object.prototype.hasOwnProperty.call(e,v)&&e[v]||(e[v]=++y)}var v="closure_uid_"+(1e9*Math.random()>>>0),y=0;function w(e,t,n){return e.call.apply(e.bind,arguments)}function b(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function _(e,t,n){return _=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?w:b,_.apply(null,arguments)}function T(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function I(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function E(){this.s=this.s,this.o=this.o}var S=0,k={};E.prototype.s=!1,E.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=S)){var e=g(this);delete k[e]}},E.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const x=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"===typeof e)return"string"!==typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},C=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const r=e.length,i="string"===typeof e?e.split(""):e;for(let s=0;s<r;s++)s in i&&t.call(n,i[s],s,e)};function A(e){e:{var t=Gn;const n=e.length,r="string"===typeof e?e.split(""):e;for(let i=0;i<n;i++)if(i in r&&t.call(void 0,r[i],i,e)){t=i;break e}t=-1}return 0>t?null:"string"===typeof e?e.charAt(t):e[t]}function N(e){return Array.prototype.concat.apply([],arguments)}function R(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function O(e){return/^[\s\xa0]*$/.test(e)}var P,L=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function D(e,t){return-1!=e.indexOf(t)}function F(e,t){return e<t?-1:e>t?1:0}e:{var M=d.navigator;if(M){var q=M.userAgent;if(q){P=q;break e}}P=""}function U(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function V(e){const t={};for(const n in e)t[n]=e[n];return t}var j="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function B(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)e[n]=r[n];for(let t=0;t<j.length;t++)n=j[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function $(e){return $[" "](e),e}function z(e){var t=re;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}$[" "]=f;var H,K=D(P,"Opera"),G=D(P,"Trident")||D(P,"MSIE"),W=D(P,"Edge"),J=W||G,Y=D(P,"Gecko")&&!(D(P.toLowerCase(),"webkit")&&!D(P,"Edge"))&&!(D(P,"Trident")||D(P,"MSIE"))&&!D(P,"Edge"),Q=D(P.toLowerCase(),"webkit")&&!D(P,"Edge");function Z(){var e=d.document;return e?e.documentMode:void 0}e:{var X="",ee=function(){var e=P;return Y?/rv:([^\);]+)(\)|;)/.exec(e):W?/Edge\/([\d\.]+)/.exec(e):G?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):Q?/WebKit\/(\S+)/.exec(e):K?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(ee&&(X=ee?ee[1]:""),G){var te=Z();if(null!=te&&te>parseFloat(X)){H=String(te);break e}}H=X}var ne,re={};function ie(){return z((function(){let e=0;const t=L(String(H)).split("."),n=L("9").split("."),r=Math.max(t.length,n.length);for(let o=0;0==e&&o<r;o++){var i=t[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;e=F(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||F(0==i[2].length,0==s[2].length)||F(i[2],s[2]),i=i[3],s=s[3]}while(0==e)}return 0<=e}))}if(d.document&&G){var se=Z();ne=se||(parseInt(H,10)||void 0)}else ne=void 0;var oe=ne,ae=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{d.addEventListener("test",f,t),d.removeEventListener("test",f,t)}catch(n){}return e}();function ce(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}function le(e,t){if(ce.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Y){e:{try{$(t.nodeName);var i=!0;break e}catch(s){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:ue[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&le.Z.h.call(this)}}ce.prototype.h=function(){this.defaultPrevented=!0},I(le,ce);var ue={2:"touch",3:"pen",4:"mouse"};le.prototype.h=function(){le.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var he="closure_listenable_"+(1e6*Math.random()|0),de=0;function fe(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ia=i,this.key=++de,this.ca=this.fa=!1}function pe(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function me(e){this.src=e,this.g={},this.h=0}function ge(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=x(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(pe(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function ve(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.ca&&s.listener==t&&s.capture==!!n&&s.ia==r)return i}return-1}me.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=ve(e,t,r,i);return-1<o?(t=e[o],n||(t.fa=!1)):(t=new fe(t,this.src,s,!!r,i),t.fa=n,e.push(t)),t};var ye="closure_lm_"+(1e6*Math.random()|0),we={};function be(e,t,n,r,i){if(r&&r.once)return Ie(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)be(e,t[s],n,r,i);return null}return n=Ne(n),e&&e[he]?e.N(t,n,m(r)?!!r.capture:!!r,i):_e(e,t,n,!1,r,i)}function _e(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=m(i)?!!i.capture:!!i,a=Ce(e);if(a||(e[ye]=a=new me(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=Te(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)ae||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(ke(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function Te(){function e(n){return t.call(e.src,e.listener,n)}var t=xe;return e}function Ie(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)Ie(e,t[s],n,r,i);return null}return n=Ne(n),e&&e[he]?e.O(t,n,m(r)?!!r.capture:!!r,i):_e(e,t,n,!0,r,i)}function Ee(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)Ee(e,t[s],n,r,i);else r=m(r)?!!r.capture:!!r,n=Ne(n),e&&e[he]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=ve(s,n,r,i),-1<n&&(pe(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=Ce(e))&&(t=e.g[t.toString()],e=-1,t&&(e=ve(t,n,r,i)),(n=-1<e?t[e]:null)&&Se(n))}function Se(e){if("number"!==typeof e&&e&&!e.ca){var t=e.src;if(t&&t[he])ge(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(ke(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Ce(t))?(ge(n,e),0==n.h&&(n.src=null,t[ye]=null)):pe(e)}}}function ke(e){return e in we?we[e]:we[e]="on"+e}function xe(e,t){if(e.ca)e=!0;else{t=new le(t,this);var n=e.listener,r=e.ia||e.src;e.fa&&Se(e),e=n.call(r,t)}return e}function Ce(e){return e=e[ye],e instanceof me?e:null}var Ae="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ne(e){return"function"===typeof e?e:(e[Ae]||(e[Ae]=function(t){return e.handleEvent(t)}),e[Ae])}function Re(){E.call(this),this.i=new me(this),this.P=this,this.I=null}function Oe(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"===typeof t)t=new ce(t,e);else if(t instanceof ce)t.target=t.target||e;else{var i=t;t=new ce(r,e),B(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=Pe(o,r,!0,t)&&i}if(o=t.g=e,i=Pe(o,r,!0,t)&&i,i=Pe(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=Pe(o,r,!1,t)&&i}function Pe(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&ge(e.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}I(Re,E),Re.prototype[he]=!0,Re.prototype.removeEventListener=function(e,t,n,r){Ee(this,e,t,n,r)},Re.prototype.M=function(){if(Re.Z.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)pe(n[r]);delete t.g[e],t.h--}}this.I=null},Re.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},Re.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var Le=d.JSON.stringify;function De(){var e=ze;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Fe{constructor(){this.h=this.g=null}add(e,t){const n=qe.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var Me,qe=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new Ue),(e=>e.reset()));class Ue{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Ve(e){d.setTimeout((()=>{throw e}),0)}function je(e,t){Me||Be(),$e||(Me(),$e=!0),ze.add(e,t)}function Be(){var e=d.Promise.resolve(void 0);Me=function(){e.then(He)}}var $e=!1,ze=new Fe;function He(){for(var e;e=De();){try{e.h.call(e.g)}catch(n){Ve(n)}var t=qe;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}$e=!1}function Ke(e,t){Re.call(this),this.h=e||1,this.g=t||d,this.j=_(this.kb,this),this.l=Date.now()}function Ge(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}function We(e,t,n){if("function"===typeof e)n&&(e=_(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=_(e.handleEvent,e)}return 2147483647<Number(t)?-1:d.setTimeout(e,t||0)}function Je(e){e.g=We((()=>{e.g=null,e.i&&(e.i=!1,Je(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}I(Ke,Re),r=Ke.prototype,r.da=!1,r.S=null,r.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Oe(this,"tick"),this.da&&(Ge(this),this.start()))}},r.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){Ke.Z.M.call(this),Ge(this),delete this.g};class Ye extends E{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Je(this)}M(){super.M(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Qe(e){E.call(this),this.h=e,this.g={}}I(Qe,E);var Ze=[];function Xe(e,t,n,r){Array.isArray(n)||(n&&(Ze[0]=n.toString()),n=Ze);for(var i=0;i<n.length;i++){var s=be(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function et(e){U(e.g,(function(e,t){this.g.hasOwnProperty(t)&&Se(e)}),e),e.g={}}function tt(){this.g=!0}function nt(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+l+"&":o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}function rt(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}function it(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+ot(e,n)+(r?" "+r:"")}))}function st(e,t){e.info((function(){return"TIMEOUT: "+t}))}function ot(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return Le(n)}catch(a){return t}}Qe.prototype.M=function(){Qe.Z.M.call(this),et(this)},Qe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},tt.prototype.Aa=function(){this.g=!1},tt.prototype.info=function(){};var at={},ct=null;function lt(){return ct=ct||new Re}function ut(e){ce.call(this,at.Ma,e)}function ht(e){const t=lt();Oe(t,new ut(t,e))}function dt(e,t){ce.call(this,at.STAT_EVENT,e),this.stat=t}function ft(e){const t=lt();Oe(t,new dt(t,e))}function pt(e,t){ce.call(this,at.Na,e),this.size=t}function mt(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return d.setTimeout((function(){e()}),t)}at.Ma="serverreachability",I(ut,ce),at.STAT_EVENT="statevent",I(dt,ce),at.Na="timingevent",I(pt,ce);var gt={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},vt={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function yt(){}function wt(e){return e.h||(e.h=e.i())}function bt(){}yt.prototype.h=null;var _t,Tt={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function It(){ce.call(this,"d")}function Et(){ce.call(this,"c")}function St(){}function kt(e,t,n,r){this.l=e,this.j=t,this.m=n,this.X=r||1,this.V=new Qe(this),this.P=Ct,e=J?125:void 0,this.W=new Ke(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new xt}function xt(){this.i=null,this.g="",this.h=!1}I(It,ce),I(Et,ce),I(St,yt),St.prototype.g=function(){return new XMLHttpRequest},St.prototype.i=function(){return{}},_t=new St;var Ct=45e3,At={},Nt={};function Rt(e,t,n){e.K=1,e.v=nn(Yt(t)),e.s=n,e.U=!0,Ot(e,null)}function Ot(e,t){e.F=Date.now(),Ft(e),e.A=Yt(e.v);var n=e.A,r=e.X;Array.isArray(r)||(r=[String(r)]),yn(n.h,"t",r),e.C=0,n=e.l.H,e.h=new xt,e.g=Er(e.l,n?t:null,!e.s),0<e.O&&(e.L=new Ye(_(e.Ia,e,e.g),e.O)),Xe(e.V,e.g,"readystatechange",e.gb),t=e.H?V(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),ht(1),nt(e.j,e.u,e.A,e.m,e.X,e.s)}function Pt(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Ba)}function Lt(e,t,n){let r,i=!0;for(;!e.I&&e.C<n.length;){if(r=Dt(e,n),r==Nt){4==t&&(e.o=4,ft(14),i=!1),it(e.j,e.m,null,"[Incomplete Response]");break}if(r==At){e.o=4,ft(15),it(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}it(e.j,e.m,r,null),jt(e,r)}Pt(e)&&r!=Nt&&r!=At&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,ft(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.aa&&(e.aa=!0,t=e.l,t.g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),gr(t),t.L=!0,ft(11))):(it(e.j,e.m,n,"[Invalid Chunked Response]"),Vt(e),Ut(e))}function Dt(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?Nt:(n=Number(t.substring(n,r)),isNaN(n)?At:(r+=1,r+n>t.length?Nt:(t=t.substr(r,n),e.C=r+n,t)))}function Ft(e){e.Y=Date.now()+e.P,Mt(e,e.P)}function Mt(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=mt(_(e.eb,e),t)}function qt(e){e.B&&(d.clearTimeout(e.B),e.B=null)}function Ut(e){0==e.l.G||e.I||wr(e.l,e)}function Vt(e){qt(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,Ge(e.W),et(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function jt(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||kn(n.i,e)))if(n.I=e.N,!e.J&&kn(n.i,e)&&3==n.G){try{var r=n.Ca.g.parse(t)}catch(l){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;yr(n),or(n)}mr(n),ft(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=mt(_(n.ab,n),6e3));if(1>=Sn(n.i)&&n.ka){try{n.ka()}catch(l){}n.ka=void 0}}else _r(n,11)}else if((e.J||n.g==e)&&yr(n),!O(t))for(i=n.Ca.g.parse(t),t=0;t<i.length;t++){let l=i[t];if(n.U=l[0],l=l[1],2==n.G)if("c"==l[0]){n.J=l[1],n.la=l[2];const t=l[3];null!=t&&(n.ma=t,n.h.info("VER="+n.ma));const i=l[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const u=l[5];null!=u&&"number"===typeof u&&0<u&&(r=1.5*u,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.i;!s.g&&(D(e,"spdy")||D(e,"quic")||D(e,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(xn(s,s.h),s.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.sa=e,tn(r.F,r.D,e))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=e;if(r.oa=Ir(r,r.H?r.la:null,r.W),o.J){Cn(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(qt(a),Ft(a)),r.g=o}else pr(r);0<n.l.length&&lr(n)}else"stop"!=l[0]&&"close"!=l[0]||_r(n,7);else 3==n.G&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?_r(n,7):sr(n):"noop"!=l[0]&&n.j&&n.j.wa(l),n.A=0)}ht(4)}catch(l){}}function Bt(e){if(e.R&&"function"==typeof e.R)return e.R();if("string"===typeof e)return e.split("");if(p(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}function $t(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(p(e)||"string"===typeof e)C(e,t,void 0);else{if(e.T&&"function"==typeof e.T)var n=e.T();else if(e.R&&"function"==typeof e.R)n=void 0;else if(p(e)||"string"===typeof e){n=[];for(var r=e.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,e)n[r++]=i;r=Bt(e),i=r.length;for(var s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}}function zt(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(e)if(e instanceof zt)for(n=e.T(),r=0;r<n.length;r++)this.set(n[r],e.get(n[r]));else for(r in e)this.set(r,e[r])}function Ht(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var r=e.g[t];Kt(e.h,r)&&(e.g[n++]=r),t++}e.g.length=n}if(e.i!=e.g.length){var i={};for(n=t=0;t<e.g.length;)r=e.g[t],Kt(i,r)||(e.g[n++]=r,i[r]=1),t++;e.g.length=n}}function Kt(e,t){return Object.prototype.hasOwnProperty.call(e,t)}r=kt.prototype,r.setTimeout=function(e){this.P=e},r.gb=function(e){e=e.target;const t=this.L;t&&3==Xn(e)?t.l():this.Ia(e)},r.Ia=function(e){try{if(e==this.g)e:{const u=Xn(this.g);var t=this.g.Da();const h=this.g.ba();if(!(3>u)&&(3!=u||J||this.g&&(this.h.h||this.g.ga()||er(this.g)))){this.I||4!=u||7==t||ht(8==t||0>=h?3:2),qt(this);var n=this.g.ba();this.N=n;t:if(Pt(this)){var r=er(this.g);e="";var i=r.length,s=4==Xn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Vt(this),Ut(this);var o="";break t}this.h.i=new d.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,rt(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(a)){var l=a;break t}}l=null}if(!(n=l)){this.i=!1,this.o=3,ft(12),Vt(this),Ut(this);break e}it(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,jt(this,n)}this.U?(Lt(this,u,o),J&&this.i&&3==u&&(Xe(this.V,this.W,"tick",this.fb),this.W.start())):(it(this.j,this.m,o,null),jt(this,o)),4==u&&Vt(this),this.i&&!this.I&&(4==u?wr(this.l,this):(this.i=!1,Ft(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ft(12)):(this.o=0,ft(13)),Vt(this),Ut(this)}}}catch(u){}},r.fb=function(){if(this.g){var e=Xn(this.g),t=this.g.ga();this.C<t.length&&(qt(this),Lt(this,e,t),this.i&&4!=e&&Ft(this))}},r.cancel=function(){this.I=!0,Vt(this)},r.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(st(this.j,this.A),2!=this.K&&(ht(3),ft(17)),Vt(this),this.o=2,Ut(this)):Mt(this,this.Y-e)},r=zt.prototype,r.R=function(){Ht(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e},r.T=function(){return Ht(this),this.g.concat()},r.get=function(e,t){return Kt(this.h,e)?this.h[e]:t},r.set=function(e,t){Kt(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t},r.forEach=function(e,t){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);e.call(t,s,i,this)}};var Gt=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Wt(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Jt(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof Jt){this.g=void 0!==t?t:e.g,Qt(this,e.j),this.s=e.s,Zt(this,e.i),Xt(this,e.m),this.l=e.l,t=e.h;var n=new pn;n.i=t.i,t.g&&(n.g=new zt(t.g),n.h=t.h),en(this,n),this.o=e.o}else e&&(n=String(e).match(Gt))?(this.g=!!t,Qt(this,n[1]||"",!0),this.s=on(n[2]||""),Zt(this,n[3]||"",!0),Xt(this,n[4]),this.l=on(n[5]||"",!0),en(this,n[6]||"",!0),this.o=on(n[7]||"")):(this.g=!!t,this.h=new pn(null,this.g))}function Yt(e){return new Jt(e)}function Qt(e,t,n){e.j=n?on(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Zt(e,t,n){e.i=n?on(t,!0):t}function Xt(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function en(e,t,n){t instanceof pn?(e.h=t,bn(e.h,e.g)):(n||(t=an(t,dn)),e.h=new pn(t,e.g))}function tn(e,t,n){e.h.set(t,n)}function nn(e){return tn(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function rn(e){return e instanceof Jt?Yt(e):new Jt(e,void 0)}function sn(e,t,n,r){var i=new Jt(null,void 0);return e&&Qt(i,e),t&&Zt(i,t),n&&Xt(i,n),r&&(i.l=r),i}function on(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function an(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,cn),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function cn(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}Jt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(an(t,ln,!0),":");var n=this.i;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(an(t,ln,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&e.push("/"),e.push(an(n,"/"==n.charAt(0)?hn:un,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",an(n,fn)),e.join("")};var ln=/[#\/\?@]/g,un=/[#\?:]/g,hn=/[#\?]/g,dn=/[#\?@]/g,fn=/#/g;function pn(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function mn(e){e.g||(e.g=new zt,e.h=0,e.i&&Wt(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function gn(e,t){mn(e),t=wn(e,t),Kt(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,e=e.g,Kt(e.h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&Ht(e)))}function vn(e,t){return mn(e),t=wn(e,t),Kt(e.g.h,t)}function yn(e,t,n){gn(e,t),0<n.length&&(e.i=null,e.g.set(wn(e,t),R(n)),e.h+=n.length)}function wn(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function bn(e,t){t&&!e.j&&(mn(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(gn(this,t),yn(this,n,e))}),e)),e.j=t}r=pn.prototype,r.add=function(e,t){mn(this),this.i=null,e=wn(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},r.forEach=function(e,t){mn(this),this.g.forEach((function(n,r){C(n,(function(n){e.call(t,n,r,this)}),this)}),this)},r.T=function(){mn(this);for(var e=this.g.R(),t=this.g.T(),n=[],r=0;r<t.length;r++)for(var i=e[r],s=0;s<i.length;s++)n.push(t[r]);return n},r.R=function(e){mn(this);var t=[];if("string"===typeof e)vn(this,e)&&(t=N(t,this.g.get(wn(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=N(t,e[n])}return t},r.set=function(e,t){return mn(this),this.i=null,e=wn(this,e),vn(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},r.get=function(e,t){return e?(e=this.R(e),0<e.length?String(e[0]):t):t},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var r=t[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;""!==r[s]&&(o+="="+encodeURIComponent(String(r[s]))),e.push(o)}}return this.i=e.join("&")};var _n=class{constructor(e,t){this.h=e,this.g=t}};function Tn(e){this.l=e||In,d.PerformanceNavigationTiming?(e=d.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(d.g&&d.g.Ea&&d.g.Ea()&&d.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var In=10;function En(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Sn(e){return e.h?1:e.g?e.g.size:0}function kn(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function xn(e,t){e.g?e.g.add(t):e.h=t}function Cn(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function An(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return R(e.i)}function Nn(){}function Rn(){this.g=new Nn}function On(e,t,n){const r=n||"";try{$t(e,(function(e,n){let i=e;m(e)&&(i=Le(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function Pn(e,t){const n=new tt;if(d.Image){const r=new Image;r.onload=T(Ln,n,r,"TestLoadImage: loaded",!0,t),r.onerror=T(Ln,n,r,"TestLoadImage: error",!1,t),r.onabort=T(Ln,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=T(Ln,n,r,"TestLoadImage: timeout",!1,t),d.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}function Ln(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(s){}}function Dn(e){this.l=e.$b||null,this.j=e.ib||!1}function Fn(e,t){Re.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Mn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Tn.prototype.cancel=function(){if(this.i=An(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},Nn.prototype.stringify=function(e){return d.JSON.stringify(e,void 0)},Nn.prototype.parse=function(e){return d.JSON.parse(e,void 0)},I(Dn,yt),Dn.prototype.g=function(){return new Fn(this.l,this.j)},Dn.prototype.i=function(e){return function(){return e}}({}),I(Fn,Re);var Mn=0;function qn(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}function Un(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Vn(e)}function Vn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}r=Fn.prototype,r.open=function(e,t){if(this.readyState!=Mn)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Vn(this)},r.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||d).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Un(this)),this.readyState=Mn},r.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Vn(this)),this.g&&(this.readyState=3,Vn(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof d.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;qn(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))},r.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Un(this):Vn(this),3==this.readyState&&qn(this)}},r.Ua=function(e){this.g&&(this.response=this.responseText=e,Un(this))},r.Ta=function(e){this.g&&(this.response=e,Un(this))},r.ha=function(){this.g&&Un(this)},r.setRequestHeader=function(e,t){this.v.append(e,t)},r.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Fn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var jn=d.JSON.parse;function Bn(e){Re.call(this),this.headers=new zt,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=$n,this.K=this.L=!1}I(Bn,Re);var $n="",zn=/^https?$/i,Hn=["POST","PUT"];function Kn(e){return G&&ie()&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function Gn(e){return"content-type"==e.toLowerCase()}function Wn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Jn(e),Qn(e)}function Jn(e){e.D||(e.D=!0,Oe(e,"complete"),Oe(e,"error"))}function Yn(e){if(e.h&&"undefined"!=typeof h&&(!e.C[1]||4!=Xn(e)||2!=e.ba()))if(e.v&&4==Xn(e))We(e.Fa,0,e);else if(Oe(e,"readystatechange"),4==Xn(e)){e.h=!1;try{const c=e.ba();e:switch(c){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===c){var i=String(e.H).match(Gt)[1]||null;if(!i&&d.self&&d.self.location){var s=d.self.location.protocol;i=s.substr(0,s.length-1)}r=!zn.test(i?i.toLowerCase():"")}n=r}if(n)Oe(e,"complete"),Oe(e,"success");else{e.m=6;try{var o=2<Xn(e)?e.g.statusText:""}catch(a){o=""}e.j=o+" ["+e.ba()+"]",Jn(e)}}finally{Qn(e)}}}function Qn(e,t){if(e.g){Zn(e);const r=e.g,i=e.C[0]?f:null;e.g=null,e.C=null,t||Oe(e,"ready");try{r.onreadystatechange=i}catch(n){}}}function Zn(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(d.clearTimeout(e.A),e.A=null)}function Xn(e){return e.g?e.g.readyState:0}function er(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case $n:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(t){return null}}function tr(e){let t="";return U(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function nr(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=tr(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):tn(e,t,n))}function rr(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function ir(e){this.za=0,this.l=[],this.h=new tt,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=rr("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=rr("baseRetryDelayMs",5e3,e),this.$a=rr("retryDelaySeedMs",1e4,e),this.Ya=rr("forwardChannelMaxRetries",2,e),this.ra=rr("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new Tn(e&&e.concurrentRequestLimit),this.Ca=new Rn,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||!1!==e.Xb}function sr(e){if(ar(e),3==e.G){var t=e.V++,n=Yt(e.F);tn(n,"SID",e.J),tn(n,"RID",t),tn(n,"TYPE","terminate"),dr(e,n),t=new kt(e,e.h,t,void 0),t.K=2,t.v=nn(Yt(n)),n=!1,d.navigator&&d.navigator.sendBeacon&&(n=d.navigator.sendBeacon(t.v.toString(),"")),!n&&d.Image&&((new Image).src=t.v,n=!0),n||(t.g=Er(t.l,null),t.g.ea(t.v)),t.F=Date.now(),Ft(t)}Tr(e)}function or(e){e.g&&(gr(e),e.g.cancel(),e.g=null)}function ar(e){or(e),e.u&&(d.clearTimeout(e.u),e.u=null),yr(e),e.i.cancel(),e.m&&("number"===typeof e.m&&d.clearTimeout(e.m),e.m=null)}function cr(e,t){e.l.push(new _n(e.Za++,t)),3==e.G&&lr(e)}function lr(e){En(e.i)||e.m||(e.m=!0,je(e.Ha,e),e.C=0)}function ur(e,t){return!(Sn(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.l=t.D.concat(e.l),!0):!(1==e.G||2==e.G||e.C>=(e.Xa?0:e.Ya))&&(e.m=mt(_(e.Ha,e,t),br(e,e.C)),e.C++,!0))}function hr(e,t){var n;n=t?t.m:e.V++;const r=Yt(e.F);tn(r,"SID",e.J),tn(r,"RID",n),tn(r,"AID",e.U),dr(e,r),e.o&&e.s&&nr(r,e.o,e.s),n=new kt(e,e.h,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=fr(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),xn(e.i,n),Rt(n,r,t)}function dr(e,t){e.j&&$t({},(function(e,n){tn(t,n,e)}))}function fr(e,t,n){n=Math.min(e.l.length,n);var r=e.j?_(e.j.Oa,e.j,e):null;e:{var i=e.l;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=t,0>n)t=Math.max(0,i[o].h-100),s=!1;else try{On(a,e,"req"+n+"_")}catch(ii){r&&r(a)}}if(s){r=e.join("&");break e}}}return e=e.l.splice(0,n),t.D=e,r}function pr(e){e.g||e.u||(e.Y=1,je(e.Ga,e),e.A=0)}function mr(e){return!(e.g||e.u||3<=e.A)&&(e.Y++,e.u=mt(_(e.Ga,e),br(e,e.A)),e.A++,!0)}function gr(e){null!=e.B&&(d.clearTimeout(e.B),e.B=null)}function vr(e){e.g=new kt(e,e.h,"rpc",e.Y),null===e.o&&(e.g.H=e.s),e.g.O=0;var t=Yt(e.oa);tn(t,"RID","rpc"),tn(t,"SID",e.J),tn(t,"CI",e.N?"0":"1"),tn(t,"AID",e.U),dr(e,t),tn(t,"TYPE","xmlhttp"),e.o&&e.s&&nr(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=nn(Yt(t)),n.s=null,n.U=!0,Ot(n,e)}function yr(e){null!=e.v&&(d.clearTimeout(e.v),e.v=null)}function wr(e,t){var n=null;if(e.g==t){yr(e),gr(e),e.g=null;var r=2}else{if(!kn(e.i,t))return;n=t.D,Cn(e.i,t),r=1}if(e.I=t.N,0!=e.G)if(t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;r=lt(),Oe(r,new pt(r,n,t,i)),lr(e)}else pr(e);else if(i=t.o,3==i||0==i&&0<e.I||!(1==r&&ur(e,t)||2==r&&mr(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:_r(e,5);break;case 4:_r(e,10);break;case 3:_r(e,6);break;default:_r(e,2)}}function br(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function _r(e,t){if(e.h.info("Error code "+t),2==t){var n=null;e.j&&(n=null);var r=_(e.jb,e);n||(n=new Jt("//www.google.com/images/cleardot.gif"),d.location&&"http"==d.location.protocol||Qt(n,"https"),nn(n)),Pn(n.toString(),r)}else ft(2);e.G=0,e.j&&e.j.va(t),Tr(e),ar(e)}function Tr(e){e.G=0,e.I=-1,e.j&&(0==An(e.i).length&&0==e.l.length||(e.i.i.length=0,R(e.l),e.l.length=0),e.j.ua())}function Ir(e,t,n){let r=rn(n);if(""!=r.i)t&&Zt(r,t+"."+r.i),Xt(r,r.m);else{const e=d.location;r=sn(e.protocol,t?t+"."+e.hostname:e.hostname,+e.port,n)}return e.aa&&U(e.aa,(function(e,t){tn(r,t,e)})),t=e.D,n=e.sa,t&&n&&tn(r,t,n),tn(r,"VER",e.ma),dr(e,r),r}function Er(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ba&&!e.qa?new Bn(new Dn({ib:!0})):new Bn(e.qa),t.L=e.H,t}function Sr(){}function kr(){if(G&&!(10<=Number(oe)))throw Error("Environmental error: no available transport.")}function xr(e,t){Re.call(this),this.g=new ir(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!O(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!O(t)&&(this.g.D=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Nr(this)}function Cr(e){It.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Ar(){Et.call(this),this.status=1}function Nr(e){this.g=e}r=Bn.prototype,r.ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():_t.g(),this.C=this.u?wt(this.u):wt(_t),this.g.onreadystatechange=_(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(s){return void Wn(this,s)}e=n||"";const i=new zt(this.headers);r&&$t(r,(function(e,t){i.set(t,e)})),r=A(i.T()),n=d.FormData&&e instanceof d.FormData,!(0<=x(Hn,t))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(e,t){this.g.setRequestHeader(t,e)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Zn(this),0<this.B&&((this.K=Kn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=_(this.pa,this)):this.A=We(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){Wn(this,s)}},r.pa=function(){"undefined"!=typeof h&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Oe(this,"timeout"),this.abort(8))},r.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Oe(this,"complete"),Oe(this,"abort"),Qn(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Qn(this,!0)),Bn.Z.M.call(this)},r.Fa=function(){this.s||(this.F||this.v||this.l?Yn(this):this.cb())},r.cb=function(){Yn(this)},r.ba=function(){try{return 2<Xn(this)?this.g.status:-1}catch(e){return-1}},r.ga=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},r.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),jn(t)}},r.Da=function(){return this.m},r.La=function(){return"string"===typeof this.j?this.j:String(this.j)},r=ir.prototype,r.ma=8,r.G=1,r.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch(t){}},r.Ha=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const i=new kt(this,this.h,e,void 0);let s=this.s;if(this.P&&(s?(s=V(s),B(s,this.P)):s=this.P),null===this.o&&(i.H=s),this.ja)e:{for(var t=0,n=0;n<this.l.length;n++){var r=this.l[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(t+=r,4096<t){t=n;break e}if(4096===t||n===this.l.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=fr(this,i,t),n=Yt(this.F),tn(n,"RID",e),tn(n,"CVER",22),this.D&&tn(n,"X-HTTP-Session-Id",this.D),dr(this,n),this.o&&s&&nr(n,this.o,s),xn(this.i,i),this.Ra&&tn(n,"TYPE","init"),this.ja?(tn(n,"$req",t),tn(n,"SID","null"),i.$=!0,Rt(i,n,null)):Rt(i,n,t),this.G=2}}else 3==this.G&&(e?hr(this,e):0==this.l.length||En(this.i)||hr(this))},r.Ga=function(){if(this.u=null,vr(this),this.$&&!(this.L||null==this.g||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=mt(_(this.bb,this),e)}},r.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ft(10),or(this),vr(this))},r.ab=function(){null!=this.v&&(this.v=null,or(this),mr(this),ft(19))},r.jb=function(e){e?(this.h.info("Successfully pinged google.com"),ft(2)):(this.h.info("Failed to ping google.com"),ft(1))},r=Sr.prototype,r.xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Oa=function(){},kr.prototype.g=function(e,t){return new xr(e,t)},I(xr,Re),xr.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),je(_(e.hb,e,t))),ft(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=Ir(e,null,e.W),lr(e)},xr.prototype.close=function(){sr(this.g)},xr.prototype.u=function(e){if("string"===typeof e){var t={};t.__data__=e,cr(this.g,t)}else this.v?(t={},t.__data__=Le(e),cr(this.g,t)):cr(this.g,e)},xr.prototype.M=function(){this.g.j=null,delete this.j,sr(this.g),delete this.g,xr.Z.M.call(this)},I(Cr,It),I(Ar,Et),I(Nr,Sr),Nr.prototype.xa=function(){Oe(this.g,"a")},Nr.prototype.wa=function(e){Oe(this.g,new Cr(e))},Nr.prototype.va=function(e){Oe(this.g,new Ar(e))},Nr.prototype.ua=function(){Oe(this.g,"b")},kr.prototype.createWebChannel=kr.prototype.g,xr.prototype.send=xr.prototype.u,xr.prototype.open=xr.prototype.m,xr.prototype.close=xr.prototype.close,gt.NO_ERROR=0,gt.TIMEOUT=8,gt.HTTP_ERROR=6,vt.COMPLETE="complete",bt.EventType=Tt,Tt.OPEN="a",Tt.CLOSE="b",Tt.ERROR="c",Tt.MESSAGE="d",Re.prototype.listen=Re.prototype.N,Bn.prototype.listenOnce=Bn.prototype.O,Bn.prototype.getLastError=Bn.prototype.La,Bn.prototype.getLastErrorCode=Bn.prototype.Da,Bn.prototype.getStatus=Bn.prototype.ba,Bn.prototype.getResponseJson=Bn.prototype.Qa,Bn.prototype.getResponseText=Bn.prototype.ga,Bn.prototype.send=Bn.prototype.ea;var Rr=u.createWebChannelTransport=function(){return new kr},Or=u.getStatEventTarget=function(){return lt()},Pr=u.ErrorCode=gt,Lr=u.EventType=vt,Dr=u.Event=at,Fr=u.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Mr=u.FetchXmlHttpFactory=Dn,qr=u.WebChannel=bt,Ur=u.XhrIo=Bn;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vr{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Vr.UNAUTHENTICATED=new Vr(null),Vr.GOOGLE_CREDENTIALS=new Vr("google-credentials-uid"),Vr.FIRST_PARTY=new Vr("first-party-uid"),Vr.MOCK_USER=new Vr("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let jr="9.1.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br=new a.Yd("@firebase/firestore");function $r(){return Br.logLevel}function zr(e){Br.setLogLevel(e)}function Hr(e,...t){if(Br.logLevel<=a["in"].DEBUG){const n=t.map(Wr);Br.debug(`Firestore (${jr}): ${e}`,...n)}}function Kr(e,...t){if(Br.logLevel<=a["in"].ERROR){const n=t.map(Wr);Br.error(`Firestore (${jr}): ${e}`,...n)}}function Gr(e,...t){if(Br.logLevel<=a["in"].WARN){const n=t.map(Wr);Br.warn(`Firestore (${jr}): ${e}`,...n)}}function Wr(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jr(e="Unexpected state"){const t=`FIRESTORE (${jr}) INTERNAL ASSERTION FAILED: `+e;throw Kr(t),new Error(t)}function Yr(e,t){e||Jr()}function Qr(e,t){e||Jr()}function Zr(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ei extends Error{constructor(e,t){super(t),this.code=e,this.message=t,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e,t){this.user=t,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization=`Bearer ${e}`}}class ri{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Vr.UNAUTHENTICATED)))}shutdown(){}}class ii{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class si{constructor(e){this.t=e,this.currentUser=Vr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new ti;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ti,e.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{Hr("FirebaseCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(Hr("FirebaseCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ti)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(Hr("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(Yr("string"==typeof t.accessToken),new ni(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Yr(null===e||"string"==typeof e),new Vr(e)}}class oi{constructor(e,t,n){this.h=e,this.l=t,this.m=n,this.type="FirstParty",this.user=Vr.FIRST_PARTY}get authHeaders(){const e={"X-Goog-AuthUser":this.l},t=this.h.auth.getAuthHeaderValueForFirstParty([]);return t&&(e.Authorization=t),this.m&&(e["X-Goog-Iam-Authorization-Token"]=this.m),e}}class ai{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new oi(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(Vr.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.g(e),this.p=e=>t.writeSequenceNumber(e))}g(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.p&&this.p(e),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ci.T=-1;class ui{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=li(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function hi(e,t){return e<t?-1:e>t?1:0}function di(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}function fi(e){return e+"\0"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ei(Xr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ei(Xr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new ei(Xr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ei(Xr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return pi.fromMillis(Date.now())}static fromDate(e){return pi.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new pi(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?hi(this.nanoseconds,e.nanoseconds):hi(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e){this.timestamp=e}static fromTimestamp(e){return new mi(e)}static min(){return new mi(new pi(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function vi(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function yi(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e,t,n){void 0===t?t=0:t>e.length&&Jr(),void 0===n?n=e.length-t:n>e.length-t&&Jr(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===wi.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof wi?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class bi extends wi{construct(e,t,n){return new bi(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new ei(Xr.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new bi(t)}static emptyPath(){return new bi([])}}const _i=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ti extends wi{construct(e,t,n){return new Ti(e,t,n)}static isValidIdentifier(e){return _i.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ti.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Ti(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new ei(Xr.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new ei(Xr.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new ei(Xr.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new ei(Xr.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ti(t)}static emptyPath(){return new Ti([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e){this.fields=e,e.sort(Ti.comparator)}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return di(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(){return"undefined"!=typeof atob}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new Si(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Si(t)}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return hi(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Si.EMPTY_BYTE_STRING=new Si("");const ki=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xi(e){if(Yr(!!e),"string"==typeof e){let t=0;const n=ki.exec(e);if(Yr(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Ci(e.seconds),nanos:Ci(e.nanos)}}function Ci(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Ai(e){return"string"==typeof e?Si.fromBase64String(e):Si.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ni(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Ri(e){const t=e.mapValue.fields.__previous_value__;return Ni(t)?Ri(t):t}function Oi(e){const t=xi(e.mapValue.fields.__local_write_time__.timestampValue);return new pi(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pi(e){return null==e}function Li(e){return 0===e&&1/e==-1/0}function Di(e){return"number"==typeof e&&Number.isInteger(e)&&!Li(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e){this.path=e}static fromPath(e){return new Fi(bi.fromString(e))}static fromName(e){return new Fi(bi.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return null!==e&&0===bi.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return bi.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Fi(new bi(e.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Ni(e)?4:10:Jr()}function qi(e,t){const n=Mi(e);if(n!==Mi(t))return!1;switch(n){case 0:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Oi(e).isEqual(Oi(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=xi(e.timestampValue),r=xi(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return Ai(e.bytesValue).isEqual(Ai(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Ci(e.geoPointValue.latitude)===Ci(t.geoPointValue.latitude)&&Ci(e.geoPointValue.longitude)===Ci(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Ci(e.integerValue)===Ci(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Ci(e.doubleValue),r=Ci(t.doubleValue);return n===r?Li(n)===Li(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return di(e.arrayValue.values||[],t.arrayValue.values||[],qi);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(gi(n)!==gi(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!qi(n[i],r[i])))return!1;return!0}(e,t);default:return Jr()}}function Ui(e,t){return void 0!==(e.values||[]).find((e=>qi(e,t)))}function Vi(e,t){const n=Mi(e),r=Mi(t);if(n!==r)return hi(n,r);switch(n){case 0:return 0;case 1:return hi(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Ci(e.integerValue||e.doubleValue),r=Ci(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return ji(e.timestampValue,t.timestampValue);case 4:return ji(Oi(e),Oi(t));case 5:return hi(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Ai(e),r=Ai(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=hi(n[i],r[i]);if(0!==e)return e}return hi(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=hi(Ci(e.latitude),Ci(t.latitude));return 0!==n?n:hi(Ci(e.longitude),Ci(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=Vi(n[i],r[i]);if(e)return e}return hi(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const e=hi(r[o],s[o]);if(0!==e)return e;const t=Vi(n[r[o]],i[s[o]]);if(0!==t)return t}return hi(r.length,s.length)}(e.mapValue,t.mapValue);default:throw Jr()}}function ji(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return hi(e,t);const n=xi(e),r=xi(t),i=hi(n.seconds,r.seconds);return 0!==i?i:hi(n.nanos,r.nanos)}function Bi(e){return $i(e)}function $i(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=xi(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Ai(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,Fi.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=$i(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${$i(e.fields[i])}`;return n+"}"}(e.mapValue):Jr();var t,n}function zi(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Hi(e){return!!e&&"integerValue"in e}function Ki(e){return!!e&&"arrayValue"in e}function Gi(e){return!!e&&"nullValue"in e}function Wi(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Ji(e){return!!e&&"mapValue"in e}function Yi(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return vi(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=Yi(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Yi(e.arrayValue.values[n]);return t}return Object.assign({},e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e){this.value=e}static empty(){return new Qi({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Ji(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Yi(t)}setAll(e){let t=Ti.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=Yi(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());Ji(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return qi(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];Ji(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){vi(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new Qi(Yi(this.value))}}function Zi(e){const t=[];return vi(e.fields,((e,n)=>{const r=new Ti([e]);if(Ji(n)){const e=Zi(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new Ii(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Xi{constructor(e,t,n,r,i){this.key=e,this.documentType=t,this.version=n,this.data=r,this.documentState=i}static newInvalidDocument(e){return new Xi(e,0,mi.min(),Qi.empty(),0)}static newFoundDocument(e,t,n){return new Xi(e,1,t,n,0)}static newNoDocument(e,t){return new Xi(e,2,t,Qi.empty(),0)}static newUnknownDocument(e,t){return new Xi(e,3,t,Qi.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Qi.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Qi.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Xi&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}clone(){return new Xi(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.A=null}}function ts(e,t=null,n=[],r=[],i=null,s=null,o=null){return new es(e,t,n,r,i,s,o)}function ns(e){const t=Zr(e);if(null===t.A){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>as(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),Pi(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=vs(t.startAt)),t.endAt&&(e+="|ub:",e+=vs(t.endAt)),t.A=e}return t.A}function rs(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>{return`${(t=e).field.canonicalString()} ${t.op} ${Bi(t.value)}`;var t})).join(", ")}]`),Pi(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: "+vs(e.startAt)),e.endAt&&(t+=", endAt: "+vs(e.endAt)),`Target(${t})`}function is(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++)if(!ws(e.orderBy[i],t.orderBy[i]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(n=e.filters[i],r=t.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!qi(n.value,r.value))return!1;var n,r;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!_s(e.startAt,t.startAt)&&_s(e.endAt,t.endAt)}function ss(e){return Fi.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}class os extends class{}{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.R(e,t,n):new cs(e,t,n):"array-contains"===t?new ds(e,n):"in"===t?new fs(e,n):"not-in"===t?new ps(e,n):"array-contains-any"===t?new ms(e,n):new os(e,t,n)}static R(e,t,n){return"in"===t?new ls(e,n):new us(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.P(Vi(t,this.value)):null!==t&&Mi(this.value)===Mi(t)&&this.P(Vi(t,this.value))}P(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Jr()}}v(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function as(e){return e.field.canonicalString()+e.op.toString()+Bi(e.value)}class cs extends os{constructor(e,t,n){super(e,t,n),this.key=Fi.fromName(n.referenceValue)}matches(e){const t=Fi.comparator(e.key,this.key);return this.P(t)}}class ls extends os{constructor(e,t){super(e,"in",t),this.keys=hs("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class us extends os{constructor(e,t){super(e,"not-in",t),this.keys=hs("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function hs(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>Fi.fromName(e.referenceValue)))}class ds extends os{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ki(t)&&Ui(t.arrayValue,this.value)}}class fs extends os{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&Ui(this.value.arrayValue,t)}}class ps extends os{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ui(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!Ui(this.value.arrayValue,t)}}class ms extends os{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ki(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>Ui(this.value.arrayValue,e)))}}class gs{constructor(e,t){this.position=e,this.before=t}}function vs(e){return`${e.before?"b":"a"}:${e.position.map((e=>Bi(e))).join(",")}`}class ys{constructor(e,t="asc"){this.field=e,this.dir=t}}function ws(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function bs(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?Fi.comparator(Fi.fromName(o.referenceValue),n.key):Vi(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return e.before?r<=0:r<0}function _s(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.before!==t.before||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!qi(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.V=null,this.S=null,this.startAt,this.endAt}}function Is(e,t,n,r,i,s,o,a){return new Ts(e,t,n,r,i,s,o,a)}function Es(e){return new Ts(e)}function Ss(e){return!Pi(e.limit)&&"F"===e.limitType}function ks(e){return!Pi(e.limit)&&"L"===e.limitType}function xs(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Cs(e){for(const t of e.filters)if(t.v())return t.field;return null}function As(e){return null!==e.collectionGroup}function Ns(e){const t=Zr(e);if(null===t.V){t.V=[];const e=Cs(t),n=xs(t);if(null!==e&&null===n)e.isKeyField()||t.V.push(new ys(e)),t.V.push(new ys(Ti.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.V.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.V.push(new ys(Ti.keyField(),e))}}}return t.V}function Rs(e){const t=Zr(e);if(!t.S)if("F"===t.limitType)t.S=ts(t.path,t.collectionGroup,Ns(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const i of Ns(t)){const t="desc"===i.dir?"asc":"desc";e.push(new ys(i.field,t))}const n=t.endAt?new gs(t.endAt.position,!t.endAt.before):null,r=t.startAt?new gs(t.startAt.position,!t.startAt.before):null;t.S=ts(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t.S}function Os(e,t,n){return new Ts(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Ps(e,t){return is(Rs(e),Rs(t))&&e.limitType===t.limitType}function Ls(e){return`${ns(Rs(e))}|lt:${e.limitType}`}function Ds(e){return`Query(target=${rs(Rs(e))}; limitType=${e.limitType})`}function Fs(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):Fi.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of e.explicitOrderBy)if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!bs(e.startAt,Ns(e),t))&&(!e.endAt||!bs(e.endAt,Ns(e),t))}(e,t)}function Ms(e){return(t,n)=>{let r=!1;for(const i of Ns(e)){const e=qs(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function qs(e,t,n){const r=e.field.isKeyField()?Fi.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?Vi(r,i):Jr()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Jr()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Us(e,t){if(e.D){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Li(t)?"-0":t}}function Vs(e){return{integerValue:""+e}}function js(e,t){return Di(t)?Vs(t):Us(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(){this._=void 0}}function $s(e,t,n){return e instanceof Ks?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof Gs?Ws(e,t):e instanceof Js?Ys(e,t):function(e,t){const n=Hs(e,t),r=Zs(n)+Zs(e.C);return Hi(n)&&Hi(e.C)?Vs(r):Us(e.N,r)}(e,t)}function zs(e,t,n){return e instanceof Gs?Ws(e,t):e instanceof Js?Ys(e,t):n}function Hs(e,t){return e instanceof Qs?Hi(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class Ks extends Bs{}class Gs extends Bs{constructor(e){super(),this.elements=e}}function Ws(e,t){const n=Xs(t);for(const r of e.elements)n.some((e=>qi(e,r)))||n.push(r);return{arrayValue:{values:n}}}class Js extends Bs{constructor(e){super(),this.elements=e}}function Ys(e,t){let n=Xs(t);for(const r of e.elements)n=n.filter((e=>!qi(e,r)));return{arrayValue:{values:n}}}class Qs extends Bs{constructor(e,t){super(),this.N=e,this.C=t}}function Zs(e){return Ci(e.integerValue||e.doubleValue)}function Xs(e){return Ki(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e,t){this.field=e,this.transform=t}}function to(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof Gs&&t instanceof Gs||e instanceof Js&&t instanceof Js?di(e.elements,t.elements,qi):e instanceof Qs&&t instanceof Qs?qi(e.C,t.C):e instanceof Ks&&t instanceof Ks}(e.transform,t.transform)}class no{constructor(e,t){this.version=e,this.transformResults=t}}class ro{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ro}static exists(e){return new ro(void 0,e)}static updateTime(e){return new ro(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function io(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class so{}function oo(e,t,n){e instanceof ho?function(e,t,n){const r=e.value.clone(),i=mo(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof fo?function(e,t,n){if(!io(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=mo(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(po(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function ao(e,t,n){e instanceof ho?function(e,t,n){if(!io(e.precondition,t))return;const r=e.value.clone(),i=go(e.fieldTransforms,n,t);r.setAll(i),t.convertToFoundDocument(uo(t),r).setHasLocalMutations()}(e,t,n):e instanceof fo?function(e,t,n){if(!io(e.precondition,t))return;const r=go(e.fieldTransforms,n,t),i=t.data;i.setAll(po(e)),i.setAll(r),t.convertToFoundDocument(uo(t),i).setHasLocalMutations()}(e,t,n):function(e,t){io(e.precondition,t)&&t.convertToNoDocument(mi.min())}(e,t)}function co(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=Hs(r.transform,e||null);null!=i&&(null==n&&(n=Qi.empty()),n.set(r.field,i))}return n||null}function lo(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&di(e,t,((e,t)=>to(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}function uo(e){return e.isFoundDocument()?e.version:mi.min()}class ho extends so{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}}class fo extends so{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function po(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function mo(e,t,n){const r=new Map;Yr(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,zs(o,a,n[i]))}return r}function go(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,$s(e,s,t))}return r}class vo extends so{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class yo extends so{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e){this.count=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var bo,_o;function To(e){switch(e){case Xr.OK:return Jr();case Xr.CANCELLED:case Xr.UNKNOWN:case Xr.DEADLINE_EXCEEDED:case Xr.RESOURCE_EXHAUSTED:case Xr.INTERNAL:case Xr.UNAVAILABLE:case Xr.UNAUTHENTICATED:return!1;case Xr.INVALID_ARGUMENT:case Xr.NOT_FOUND:case Xr.ALREADY_EXISTS:case Xr.PERMISSION_DENIED:case Xr.FAILED_PRECONDITION:case Xr.ABORTED:case Xr.OUT_OF_RANGE:case Xr.UNIMPLEMENTED:case Xr.DATA_LOSS:return!0;default:return Jr()}}function Io(e){if(void 0===e)return Kr("GRPC error has no .code"),Xr.UNKNOWN;switch(e){case bo.OK:return Xr.OK;case bo.CANCELLED:return Xr.CANCELLED;case bo.UNKNOWN:return Xr.UNKNOWN;case bo.DEADLINE_EXCEEDED:return Xr.DEADLINE_EXCEEDED;case bo.RESOURCE_EXHAUSTED:return Xr.RESOURCE_EXHAUSTED;case bo.INTERNAL:return Xr.INTERNAL;case bo.UNAVAILABLE:return Xr.UNAVAILABLE;case bo.UNAUTHENTICATED:return Xr.UNAUTHENTICATED;case bo.INVALID_ARGUMENT:return Xr.INVALID_ARGUMENT;case bo.NOT_FOUND:return Xr.NOT_FOUND;case bo.ALREADY_EXISTS:return Xr.ALREADY_EXISTS;case bo.PERMISSION_DENIED:return Xr.PERMISSION_DENIED;case bo.FAILED_PRECONDITION:return Xr.FAILED_PRECONDITION;case bo.ABORTED:return Xr.ABORTED;case bo.OUT_OF_RANGE:return Xr.OUT_OF_RANGE;case bo.UNIMPLEMENTED:return Xr.UNIMPLEMENTED;case bo.DATA_LOSS:return Xr.DATA_LOSS;default:return Jr()}}(_o=bo||(bo={}))[_o.OK=0]="OK",_o[_o.CANCELLED=1]="CANCELLED",_o[_o.UNKNOWN=2]="UNKNOWN",_o[_o.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",_o[_o.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",_o[_o.NOT_FOUND=5]="NOT_FOUND",_o[_o.ALREADY_EXISTS=6]="ALREADY_EXISTS",_o[_o.PERMISSION_DENIED=7]="PERMISSION_DENIED",_o[_o.UNAUTHENTICATED=16]="UNAUTHENTICATED",_o[_o.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",_o[_o.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",_o[_o.ABORTED=10]="ABORTED",_o[_o.OUT_OF_RANGE=11]="OUT_OF_RANGE",_o[_o.UNIMPLEMENTED=12]="UNIMPLEMENTED",_o[_o.INTERNAL=13]="INTERNAL",_o[_o.UNAVAILABLE=14]="UNAVAILABLE",_o[_o.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Eo{constructor(e,t){this.comparator=e,this.root=t||ko.EMPTY}insert(e,t){return new Eo(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ko.BLACK,null,null))}remove(e){return new Eo(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ko.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new So(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new So(this.root,e,this.comparator,!1)}getReverseIterator(){return new So(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new So(this.root,e,this.comparator,!0)}}class So{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ko{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:ko.RED,this.left=null!=r?r:ko.EMPTY,this.right=null!=i?i:ko.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new ko(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ko.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return ko.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ko.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ko.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Jr();if(this.right.isRed())throw Jr();const e=this.left.check();if(e!==this.right.check())throw Jr();return e+(this.isRed()?0:1)}}ko.EMPTY=null,ko.RED=!0,ko.BLACK=!1,ko.EMPTY=new class{constructor(){this.size=0}get key(){throw Jr()}get value(){throw Jr()}get color(){throw Jr()}get left(){throw Jr()}get right(){throw Jr()}copy(e,t,n,r,i){return this}insert(e,t,n){return new ko(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xo{constructor(e){this.comparator=e,this.data=new Eo(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Co(this.data.getIterator())}getIteratorFrom(e){return new Co(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof xo))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new xo(this.comparator);return t.data=e,t}}class Co{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ao=new Eo(Fi.comparator);function No(){return Ao}const Ro=new Eo(Fi.comparator);function Oo(){return Ro}const Po=new Eo(Fi.comparator);function Lo(){return Po}const Do=new xo(Fi.comparator);function Fo(...e){let t=Do;for(const n of e)t=t.add(n);return t}const Mo=new xo(hi);function qo(){return Mo}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t){const n=new Map;return n.set(e,Vo.createSynthesizedTargetChangeForCurrentChange(e,t)),new Uo(mi.min(),n,qo(),No(),Fo())}}class Vo{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t){return new Vo(Si.EMPTY_BYTE_STRING,t,Fo(),Fo(),Fo())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e,t,n,r){this.k=e,this.removedTargetIds=t,this.key=n,this.$=r}}class Bo{constructor(e,t){this.targetId=e,this.O=t}}class $o{constructor(e,t,n=Si.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class zo{constructor(){this.F=0,this.M=Go(),this.L=Si.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get q(){return 0!==this.F}get K(){return this.U}j(e){e.approximateByteSize()>0&&(this.U=!0,this.L=e)}W(){let e=Fo(),t=Fo(),n=Fo();return this.M.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:Jr()}})),new Vo(this.L,this.B,e,t,n)}G(){this.U=!1,this.M=Go()}H(e,t){this.U=!0,this.M=this.M.insert(e,t)}J(e){this.U=!0,this.M=this.M.remove(e)}Y(){this.F+=1}X(){this.F-=1}Z(){this.U=!0,this.B=!0}}class Ho{constructor(e){this.tt=e,this.et=new Map,this.nt=No(),this.st=Ko(),this.it=new xo(hi)}rt(e){for(const t of e.k)e.$&&e.$.isFoundDocument()?this.ot(t,e.$):this.at(t,e.key,e.$);for(const t of e.removedTargetIds)this.at(t,e.key,e.$)}ct(e){this.forEachTarget(e,(t=>{const n=this.ut(t);switch(e.state){case 0:this.ht(t)&&n.j(e.resumeToken);break;case 1:n.X(),n.q||n.G(),n.j(e.resumeToken);break;case 2:n.X(),n.q||this.removeTarget(t);break;case 3:this.ht(t)&&(n.Z(),n.j(e.resumeToken));break;case 4:this.ht(t)&&(this.lt(t),n.j(e.resumeToken));break;default:Jr()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.et.forEach(((e,n)=>{this.ht(n)&&t(n)}))}ft(e){const t=e.targetId,n=e.O.count,r=this.dt(t);if(r){const e=r.target;if(ss(e))if(0===n){const n=new Fi(e.path);this.at(t,n,Xi.newNoDocument(n,mi.min()))}else Yr(1===n);else this.wt(t)!==n&&(this.lt(t),this.it=this.it.add(t))}}_t(e){const t=new Map;this.et.forEach(((n,r)=>{const i=this.dt(r);if(i){if(n.current&&ss(i.target)){const t=new Fi(i.target.path);null!==this.nt.get(t)||this.gt(r,t)||this.at(r,t,Xi.newNoDocument(t,e))}n.K&&(t.set(r,n.W()),n.G())}}));let n=Fo();this.st.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.dt(e);return!t||2===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))}));const r=new Uo(e,t,this.it,this.nt,n);return this.nt=No(),this.st=Ko(),this.it=new xo(hi),r}ot(e,t){if(!this.ht(e))return;const n=this.gt(e,t.key)?2:0;this.ut(e).H(t.key,n),this.nt=this.nt.insert(t.key,t),this.st=this.st.insert(t.key,this.yt(t.key).add(e))}at(e,t,n){if(!this.ht(e))return;const r=this.ut(e);this.gt(e,t)?r.H(t,1):r.J(t),this.st=this.st.insert(t,this.yt(t).delete(e)),n&&(this.nt=this.nt.insert(t,n))}removeTarget(e){this.et.delete(e)}wt(e){const t=this.ut(e).W();return this.tt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Y(e){this.ut(e).Y()}ut(e){let t=this.et.get(e);return t||(t=new zo,this.et.set(e,t)),t}yt(e){let t=this.st.get(e);return t||(t=new xo(hi),this.st=this.st.insert(e,t)),t}ht(e){const t=null!==this.dt(e);return t||Hr("WatchChangeAggregator","Detected inactive target",e),t}dt(e){const t=this.et.get(e);return t&&t.q?null:this.tt.Et(e)}lt(e){this.et.set(e,new zo),this.tt.getRemoteKeysForTarget(e).forEach((t=>{this.at(e,t,null)}))}gt(e,t){return this.tt.getRemoteKeysForTarget(e).has(t)}}function Ko(){return new Eo(Fi.comparator)}function Go(){return new Eo(Fi.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wo=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),Jo=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})();class Yo{constructor(e,t){this.databaseId=e,this.D=t}}function Qo(e,t){return e.D?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Zo(e,t){return e.D?t.toBase64():t.toUint8Array()}function Xo(e,t){return Qo(e,t.toTimestamp())}function ea(e){return Yr(!!e),mi.fromTimestamp(function(e){const t=xi(e);return new pi(t.seconds,t.nanos)}(e))}function ta(e,t){return function(e){return new bi(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function na(e){const t=bi.fromString(e);return Yr(Na(t)),t}function ra(e,t){return ta(e.databaseId,t.path)}function ia(e,t){const n=na(t);if(n.get(1)!==e.databaseId.projectId)throw new ei(Xr.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new ei(Xr.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Fi(ca(n))}function sa(e,t){return ta(e.databaseId,t)}function oa(e){const t=na(e);return 4===t.length?bi.emptyPath():ca(t)}function aa(e){return new bi(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function ca(e){return Yr(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function la(e,t,n){return{name:ra(e,t),fields:n.value.mapValue.fields}}function ua(e,t,n){const r=ia(e,t.name),i=ea(t.updateTime),s=new Qi({mapValue:{fields:t.fields}}),o=Xi.newFoundDocument(r,i,s);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function ha(e,t){return"found"in t?function(e,t){Yr(!!t.found),t.found.name,t.found.updateTime;const n=ia(e,t.found.name),r=ea(t.found.updateTime),i=new Qi({mapValue:{fields:t.found.fields}});return Xi.newFoundDocument(n,r,i)}(e,t):"missing"in t?function(e,t){Yr(!!t.missing),Yr(!!t.readTime);const n=ia(e,t.missing),r=ea(t.readTime);return Xi.newNoDocument(n,r)}(e,t):Jr()}function da(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:Jr()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(e,t){return e.D?(Yr(void 0===t||"string"==typeof t),Si.fromBase64String(t||"")):(Yr(void 0===t||t instanceof Uint8Array),Si.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?Xr.UNKNOWN:Io(e.code);return new ei(t,e.message||"")}(o);n=new $o(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=ia(e,r.document.name),s=ea(r.document.updateTime),o=new Qi({mapValue:{fields:r.document.fields}}),a=Xi.newFoundDocument(i,s,o),c=r.targetIds||[],l=r.removedTargetIds||[];n=new jo(c,l,a.key,a)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=ia(e,r.document),s=r.readTime?ea(r.readTime):mi.min(),o=Xi.newNoDocument(i,s),a=r.removedTargetIds||[];n=new jo([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=ia(e,r.document),s=r.removedTargetIds||[];n=new jo([],s,i,null)}else{if(!("filter"in t))return Jr();{t.filter;const e=t.filter;e.targetId;const r=e.count||0,i=new wo(r),s=e.targetId;n=new Bo(s,i)}}return n}function fa(e,t){let n;if(t instanceof ho)n={update:la(e,t.key,t.value)};else if(t instanceof vo)n={delete:ra(e,t.key)};else if(t instanceof fo)n={update:la(e,t.key,t.data),updateMask:Aa(t.fieldMask)};else{if(!(t instanceof yo))return Jr();n={verify:ra(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof Ks)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Gs)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Js)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Qs)return{fieldPath:t.field.canonicalString(),increment:n.C};throw Jr()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:Xo(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:Jr()}(e,t.precondition)),n}function pa(e,t){const n=t.currentDocument?function(e){return void 0!==e.updateTime?ro.updateTime(ea(e.updateTime)):void 0!==e.exists?ro.exists(e.exists):ro.none()}(t.currentDocument):ro.none(),r=t.updateTransforms?t.updateTransforms.map((t=>function(e,t){let n=null;if("setToServerValue"in t)Yr("REQUEST_TIME"===t.setToServerValue),n=new Ks;else if("appendMissingElements"in t){const e=t.appendMissingElements.values||[];n=new Gs(e)}else if("removeAllFromArray"in t){const e=t.removeAllFromArray.values||[];n=new Js(e)}else"increment"in t?n=new Qs(e,t.increment):Jr();const r=Ti.fromServerFormat(t.fieldPath);return new eo(r,n)}(e,t))):[];if(t.update){t.update.name;const i=ia(e,t.update.name),s=new Qi({mapValue:{fields:t.update.fields}});if(t.updateMask){const e=function(e){const t=e.fieldPaths||[];return new Ii(t.map((e=>Ti.fromServerFormat(e))))}(t.updateMask);return new fo(i,s,e,n,r)}return new ho(i,s,n,r)}if(t.delete){const r=ia(e,t.delete);return new vo(r,n)}if(t.verify){const r=ia(e,t.verify);return new yo(r,n)}return Jr()}function ma(e,t){return e&&e.length>0?(Yr(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?ea(e.updateTime):ea(t);return n.isEqual(mi.min())&&(n=ea(t)),new no(n,e.transformResults||[])}(e,t)))):[]}function ga(e,t){return{documents:[sa(e,t.path)]}}function va(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=sa(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=sa(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0===e.length)return;const t=e.map((e=>function(e){if("=="===e.op){if(Wi(e.value))return{unaryFilter:{field:Sa(e.field),op:"IS_NAN"}};if(Gi(e.value))return{unaryFilter:{field:Sa(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Wi(e.value))return{unaryFilter:{field:Sa(e.field),op:"IS_NOT_NAN"}};if(Gi(e.value))return{unaryFilter:{field:Sa(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Sa(e.field),op:Ea(e.op),value:e.value}}}(e)));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);i&&(n.structuredQuery.where=i);const s=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:Sa(e.field),direction:Ia(e.dir)}}(e)))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(e,t){return e.D||Pi(t)?t:{value:t}}(e,t.limit);return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=_a(t.startAt)),t.endAt&&(n.structuredQuery.endAt=_a(t.endAt)),n}function ya(e){let t=oa(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Yr(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=ba(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>function(e){return new ys(ka(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,Pi(t)?null:t}(n.limit));let c=null;n.startAt&&(c=Ta(n.startAt));let l=null;return n.endAt&&(l=Ta(n.endAt)),Is(t,i,o,s,a,"F",c,l)}function wa(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Jr()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}function ba(e){return e?void 0!==e.unaryFilter?[Ca(e)]:void 0!==e.fieldFilter?[xa(e)]:void 0!==e.compositeFilter?e.compositeFilter.filters.map((e=>ba(e))).reduce(((e,t)=>e.concat(t))):Jr():[]}function _a(e){return{before:e.before,values:e.position}}function Ta(e){const t=!!e.before,n=e.values||[];return new gs(n,t)}function Ia(e){return Wo[e]}function Ea(e){return Jo[e]}function Sa(e){return{fieldPath:e.canonicalString()}}function ka(e){return Ti.fromServerFormat(e.fieldPath)}function xa(e){return os.create(ka(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":default:return Jr()}}(e.fieldFilter.op),e.fieldFilter.value)}function Ca(e){switch(e.unaryFilter.op){case"IS_NAN":const t=ka(e.unaryFilter.field);return os.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=ka(e.unaryFilter.field);return os.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=ka(e.unaryFilter.field);return os.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=ka(e.unaryFilter.field);return os.create(i,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":default:return Jr()}}function Aa(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Na(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ra(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=Pa(t)),t=Oa(e.get(n),t);return Pa(t)}function Oa(e,t){let n=t;const r=e.length;for(let i=0;i<r;i++){const t=e.charAt(i);switch(t){case"\0":n+="";break;case"":n+="";break;default:n+=t}}return n}function Pa(e){return e+""}function La(e){const t=e.length;if(Yr(t>=2),2===t)return Yr(""===e.charAt(0)&&""===e.charAt(1)),bi.emptyPath();const n=t-2,r=[];let i="";for(let s=0;s<t;){const t=e.indexOf("",s);switch((t<0||t>n)&&Jr(),e.charAt(t+1)){case"":const n=e.substring(s,t);let o;0===i.length?o=n:(i+=n,o=i,i=""),r.push(o);break;case"":i+=e.substring(s,t),i+="\0";break;case"":i+=e.substring(s,t+1);break;default:Jr()}s=t+2}return new bi(r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(e,t){this.seconds=e,this.nanoseconds=t}}class Fa{constructor(e,t,n){this.ownerId=e,this.allowTabSynchronization=t,this.leaseTimestampMs=n}}Fa.store="owner",Fa.key="owner";class Ma{constructor(e,t,n){this.userId=e,this.lastAcknowledgedBatchId=t,this.lastStreamToken=n}}Ma.store="mutationQueues",Ma.keyPath="userId";class qa{constructor(e,t,n,r,i){this.userId=e,this.batchId=t,this.localWriteTimeMs=n,this.baseMutations=r,this.mutations=i}}qa.store="mutations",qa.keyPath="batchId",qa.userMutationsIndex="userMutationsIndex",qa.userMutationsKeyPath=["userId","batchId"];class Ua{constructor(){}static prefixForUser(e){return[e]}static prefixForPath(e,t){return[e,Ra(t)]}static key(e,t,n){return[e,Ra(t),n]}}Ua.store="documentMutations",Ua.PLACEHOLDER=new Ua;class Va{constructor(e,t){this.path=e,this.readTime=t}}class ja{constructor(e,t){this.path=e,this.version=t}}class Ba{constructor(e,t,n,r,i,s){this.unknownDocument=e,this.noDocument=t,this.document=n,this.hasCommittedMutations=r,this.readTime=i,this.parentPath=s}}Ba.store="remoteDocuments",Ba.readTimeIndex="readTimeIndex",Ba.readTimeIndexPath="readTime",Ba.collectionReadTimeIndex="collectionReadTimeIndex",Ba.collectionReadTimeIndexPath=["parentPath","readTime"];class $a{constructor(e){this.byteSize=e}}$a.store="remoteDocumentGlobal",$a.key="remoteDocumentGlobalKey";class za{constructor(e,t,n,r,i,s,o){this.targetId=e,this.canonicalId=t,this.readTime=n,this.resumeToken=r,this.lastListenSequenceNumber=i,this.lastLimboFreeSnapshotVersion=s,this.query=o}}za.store="targets",za.keyPath="targetId",za.queryTargetsIndexName="queryTargetsIndex",za.queryTargetsKeyPath=["canonicalId","targetId"];class Ha{constructor(e,t,n){this.targetId=e,this.path=t,this.sequenceNumber=n}}Ha.store="targetDocuments",Ha.keyPath=["targetId","path"],Ha.documentTargetsIndex="documentTargetsIndex",Ha.documentTargetsKeyPath=["path","targetId"];class Ka{constructor(e,t,n,r){this.highestTargetId=e,this.highestListenSequenceNumber=t,this.lastRemoteSnapshotVersion=n,this.targetCount=r}}Ka.key="targetGlobalKey",Ka.store="targetGlobal";class Ga{constructor(e,t){this.collectionId=e,this.parent=t}}Ga.store="collectionParents",Ga.keyPath=["collectionId","parent"];class Wa{constructor(e,t,n,r){this.clientId=e,this.updateTimeMs=t,this.networkEnabled=n,this.inForeground=r}}Wa.store="clientMetadata",Wa.keyPath="clientId";class Ja{constructor(e,t,n){this.bundleId=e,this.createTime=t,this.version=n}}Ja.store="bundles",Ja.keyPath="bundleId";class Ya{constructor(e,t,n){this.name=e,this.readTime=t,this.bundledQuery=n}}Ya.store="namedQueries",Ya.keyPath="name";const Qa=[Ma.store,qa.store,Ua.store,Ba.store,za.store,Fa.store,Ka.store,Ha.store,Wa.store,$a.store,Ga.store,Ja.store,Ya.store],Za="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Xa{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Jr(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new ec(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof ec?t:ec.resolve(t)}catch(e){return ec.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):ec.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):ec.reject(t)}static resolve(e){return new ec(((t,n)=>{t(e)}))}static reject(e){return new ec(((t,n)=>{n(e)}))}static waitFor(e){return new ec(((t,n)=>{let r=0,i=0,s=!1;e.forEach((e=>{++r,e.next((()=>{++i,s&&i===r&&t()}),(e=>n(e)))})),s=!0,i===r&&t()}))}static or(e){let t=ec.resolve(!1);for(const n of e)t=t.next((e=>e?ec.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.Tt=new ti,this.transaction.oncomplete=()=>{this.Tt.resolve()},this.transaction.onabort=()=>{t.error?this.Tt.reject(new ic(e,t.error)):this.Tt.resolve()},this.transaction.onerror=t=>{const n=lc(t.target.error);this.Tt.reject(new ic(e,n))}}static open(e,t,n,r){try{return new tc(t,e.transaction(r,n))}catch(e){throw new ic(t,e)}}get It(){return this.Tt.promise}abort(e){e&&this.Tt.reject(e),this.aborted||(Hr("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}store(e){const t=this.transaction.objectStore(e);return new oc(t)}}class nc{constructor(e,t,n){this.name=e,this.version=t,this.At=n,12.2===nc.Rt((0,c.z$)())&&Kr("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return Hr("SimpleDb","Removing database:",e),ac(window.indexedDB.deleteDatabase(e)).toPromise()}static bt(){if(!(0,c.hl)())return!1;if(nc.Pt())return!0;const e=(0,c.z$)(),t=nc.Rt(e),n=0<t&&t<10,r=nc.vt(e),i=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static Pt(){var e;return"undefined"!=typeof process&&"YES"===(null===(e=process.env)||void 0===e?void 0:e.Vt)}static St(e,t){return e.store(t)}static Rt(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static vt(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async Dt(e){return this.db||(Hr("SimpleDb","Opening database:",this.name),this.db=await new Promise(((t,n)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=e=>{const n=e.target.result;t(n)},r.onblocked=()=>{n(new ic(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=t=>{const r=t.target.error;"VersionError"===r.name?n(new ei(Xr.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new ei(Xr.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new ic(e,r))},r.onupgradeneeded=e=>{Hr("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);const t=e.target.result;this.At.Ct(t,r.transaction,e.oldVersion,this.version).next((()=>{Hr("SimpleDb","Database upgrade to version "+this.version+" complete")}))}}))),this.Nt&&(this.db.onversionchange=e=>this.Nt(e)),this.db}xt(e){this.Nt=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,r){const i="readonly"===t;let s=0;for(;;){++s;try{this.db=await this.Dt(e);const t=tc.open(this.db,e,i?"readonly":"readwrite",n),s=r(t).catch((e=>(t.abort(e),ec.reject(e)))).toPromise();return s.catch((()=>{})),await t.It,s}catch(e){const t="FirebaseError"!==e.name&&s<3;if(Hr("SimpleDb","Transaction failed with error:",e.message,"Retrying:",t),this.close(),!t)return Promise.reject(e)}}}close(){this.db&&this.db.close(),this.db=void 0}}class rc{constructor(e){this.kt=e,this.$t=!1,this.Ot=null}get isDone(){return this.$t}get Ft(){return this.Ot}set cursor(e){this.kt=e}done(){this.$t=!0}Mt(e){this.Ot=e}delete(){return ac(this.kt.delete())}}class ic extends ei{constructor(e,t){super(Xr.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function sc(e){return"IndexedDbTransactionError"===e.name}class oc{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(Hr("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(Hr("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),ac(n)}add(e){return Hr("SimpleDb","ADD",this.store.name,e,e),ac(this.store.add(e))}get(e){return ac(this.store.get(e)).next((t=>(void 0===t&&(t=null),Hr("SimpleDb","GET",this.store.name,e,t),t)))}delete(e){return Hr("SimpleDb","DELETE",this.store.name,e),ac(this.store.delete(e))}count(){return Hr("SimpleDb","COUNT",this.store.name),ac(this.store.count())}Lt(e,t){const n=this.cursor(this.options(e,t)),r=[];return this.Bt(n,((e,t)=>{r.push(t)})).next((()=>r))}Ut(e,t){Hr("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.qt=!1;const r=this.cursor(n);return this.Bt(r,((e,t,n)=>n.delete()))}Kt(e,t){let n;t?n=e:(n={},t=e);const r=this.cursor(n);return this.Bt(r,t)}jt(e){const t=this.cursor({});return new ec(((n,r)=>{t.onerror=e=>{const t=lc(e.target.error);r(t)},t.onsuccess=t=>{const r=t.target.result;r?e(r.primaryKey,r.value).next((e=>{e?r.continue():n()})):n()}}))}Bt(e,t){const n=[];return new ec(((r,i)=>{e.onerror=e=>{i(e.target.error)},e.onsuccess=e=>{const i=e.target.result;if(!i)return void r();const s=new rc(i),o=t(i.primaryKey,i.value,s);if(o instanceof ec){const e=o.catch((e=>(s.done(),ec.reject(e))));n.push(e)}s.isDone?r():null===s.Ft?i.continue():i.continue(s.Ft)}})).next((()=>ec.waitFor(n)))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.qt?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function ac(e){return new ec(((t,n)=>{e.onsuccess=e=>{const n=e.target.result;t(n)},e.onerror=e=>{const t=lc(e.target.error);n(t)}}))}let cc=!1;function lc(e){const t=nc.Rt((0,c.z$)());if(t>=12.2&&t<13){const t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){const e=new ei("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return cc||(cc=!0,setTimeout((()=>{throw e}),0)),e}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc extends Xa{constructor(e,t){super(),this.Qt=e,this.currentSequenceNumber=t}}function hc(e,t){const n=Zr(e);return nc.St(n.Qt,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&oo(t,e,n[r])}}applyToLocalView(e){for(const t of this.baseMutations)t.key.isEqual(e.key)&&ao(t,e,this.localWriteTime);for(const t of this.mutations)t.key.isEqual(e.key)&&ao(t,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach((t=>{const n=e.get(t.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(mi.min())}))}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Fo())}isEqual(e){return this.batchId===e.batchId&&di(this.mutations,e.mutations,((e,t)=>lo(e,t)))&&di(this.baseMutations,e.baseMutations,((e,t)=>lo(e,t)))}}class fc{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){Yr(e.mutations.length===n.length);let r=Lo();const i=e.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new fc(e,t,n,r)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(e,t,n,r,i=mi.min(),s=mi.min(),o=Si.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(e){return new pc(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new pc(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new pc(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(e){this.Wt=e}}function gc(e,t){if(t.document)return ua(e.Wt,t.document,!!t.hasCommittedMutations);if(t.noDocument){const e=Fi.fromSegments(t.noDocument.path),n=_c(t.noDocument.readTime),r=Xi.newNoDocument(e,n);return t.hasCommittedMutations?r.setHasCommittedMutations():r}if(t.unknownDocument){const e=Fi.fromSegments(t.unknownDocument.path),n=_c(t.unknownDocument.version);return Xi.newUnknownDocument(e,n)}return Jr()}function vc(e,t,n){const r=yc(n),i=t.key.path.popLast().toArray();if(t.isFoundDocument()){const n=function(e,t){return{name:ra(e,t.key),fields:t.data.value.mapValue.fields,updateTime:Qo(e,t.version.toTimestamp())}}(e.Wt,t),s=t.hasCommittedMutations;return new Ba(null,null,n,s,r,i)}if(t.isNoDocument()){const e=t.key.path.toArray(),n=bc(t.version),s=t.hasCommittedMutations;return new Ba(null,new Va(e,n),null,s,r,i)}if(t.isUnknownDocument()){const e=t.key.path.toArray(),n=bc(t.version);return new Ba(new ja(e,n),null,null,!0,r,i)}return Jr()}function yc(e){const t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function wc(e){const t=new pi(e[0],e[1]);return mi.fromTimestamp(t)}function bc(e){const t=e.toTimestamp();return new Da(t.seconds,t.nanoseconds)}function _c(e){const t=new pi(e.seconds,e.nanoseconds);return mi.fromTimestamp(t)}function Tc(e,t){const n=(t.baseMutations||[]).map((t=>pa(e.Wt,t)));for(let s=0;s<t.mutations.length-1;++s){const e=t.mutations[s];if(s+1<t.mutations.length&&void 0!==t.mutations[s+1].transform){const n=t.mutations[s+1];e.updateTransforms=n.transform.fieldTransforms,t.mutations.splice(s+1,1),++s}}const r=t.mutations.map((t=>pa(e.Wt,t))),i=pi.fromMillis(t.localWriteTimeMs);return new dc(t.batchId,i,n,r)}function Ic(e){const t=_c(e.readTime),n=void 0!==e.lastLimboFreeSnapshotVersion?_c(e.lastLimboFreeSnapshotVersion):mi.min();let r;var i;return void 0!==e.query.documents?(Yr(1===(i=e.query).documents.length),r=Rs(Es(oa(i.documents[0])))):r=function(e){return Rs(ya(e))}(e.query),new pc(r,e.targetId,0,e.lastListenSequenceNumber,t,n,Si.fromBase64String(e.resumeToken))}function Ec(e,t){const n=bc(t.snapshotVersion),r=bc(t.lastLimboFreeSnapshotVersion);let i;i=ss(t.target)?ga(e.Wt,t.target):va(e.Wt,t.target);const s=t.resumeToken.toBase64();return new za(t.targetId,ns(t.target),n,s,t.sequenceNumber,r,i)}function Sc(e){const t=ya({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Os(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{getBundleMetadata(e,t){return xc(e).get(t).next((e=>{if(e)return{id:(t=e).bundleId,createTime:_c(t.createTime),version:t.version};var t}))}saveBundleMetadata(e,t){return xc(e).put({bundleId:(n=t).id,createTime:bc(ea(n.createTime)),version:n.version});var n}getNamedQuery(e,t){return Cc(e).get(t).next((e=>{if(e)return{name:(t=e).name,query:Sc(t.bundledQuery),readTime:_c(t.readTime)};var t}))}saveNamedQuery(e,t){return Cc(e).put(function(e){return{name:e.name,readTime:bc(ea(e.readTime)),bundledQuery:e.bundledQuery}}(t))}}function xc(e){return hc(e,Ja.store)}function Cc(e){return hc(e,Ya.store)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(){this.Gt=new Nc}addToCollectionParentIndex(e,t){return this.Gt.add(t),ec.resolve()}getCollectionParents(e,t){return ec.resolve(this.Gt.getEntries(t))}}class Nc{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new xo(bi.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new xo(bi.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(){this.zt=new Nc}addToCollectionParentIndex(e,t){if(!this.zt.has(t)){const n=t.lastSegment(),r=t.popLast();e.addOnCommittedListener((()=>{this.zt.add(t)}));const i={collectionId:n,parent:Ra(r)};return Oc(e).put(i)}return ec.resolve()}getCollectionParents(e,t){const n=[],r=IDBKeyRange.bound([t,""],[fi(t),""],!1,!0);return Oc(e).Lt(r).next((e=>{for(const r of e){if(r.collectionId!==t)break;n.push(La(r.parent))}return n}))}}function Oc(e){return hc(e,Ga.store)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pc={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Lc{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new Lc(e,Lc.DEFAULT_COLLECTION_PERCENTILE,Lc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dc(e,t,n){const r=e.store(qa.store),i=e.store(Ua.store),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=r.Kt({range:o},((e,t,n)=>(a++,n.delete())));s.push(c.next((()=>{Yr(1===a)})));const l=[];for(const u of n.mutations){const e=Ua.key(t,u.key.path,n.batchId);s.push(i.delete(e)),l.push(u.key)}return ec.waitFor(s).next((()=>l))}function Fc(e){if(!e)return 0;let t;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw Jr();t=e.noDocument}return JSON.stringify(t).length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Lc.DEFAULT_COLLECTION_PERCENTILE=10,Lc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Lc.DEFAULT=new Lc(41943040,Lc.DEFAULT_COLLECTION_PERCENTILE,Lc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Lc.DISABLED=new Lc(-1,0,0);class Mc{constructor(e,t,n,r){this.userId=e,this.N=t,this.Ht=n,this.referenceDelegate=r,this.Jt={}}static Yt(e,t,n,r){Yr(""!==e.uid);const i=e.isAuthenticated()?e.uid:"";return new Mc(i,t,n,r)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Uc(e).Kt({index:qa.userMutationsIndex,range:n},((e,n,r)=>{t=!1,r.done()})).next((()=>t))}addMutationBatch(e,t,n,r){const i=Vc(e),s=Uc(e);return s.add({}).next((o=>{Yr("number"==typeof o);const a=new dc(o,t,n,r),c=function(e,t,n){const r=n.baseMutations.map((t=>fa(e.Wt,t))),i=n.mutations.map((t=>fa(e.Wt,t)));return new qa(t,n.batchId,n.localWriteTime.toMillis(),r,i)}(this.N,this.userId,a),l=[];let u=new xo(((e,t)=>hi(e.canonicalString(),t.canonicalString())));for(const e of r){const t=Ua.key(this.userId,e.key.path,o);u=u.add(e.key.path.popLast()),l.push(s.put(c)),l.push(i.put(t,Ua.PLACEHOLDER))}return u.forEach((t=>{l.push(this.Ht.addToCollectionParentIndex(e,t))})),e.addOnCommittedListener((()=>{this.Jt[o]=a.keys()})),ec.waitFor(l).next((()=>a))}))}lookupMutationBatch(e,t){return Uc(e).get(t).next((e=>e?(Yr(e.userId===this.userId),Tc(this.N,e)):null))}Xt(e,t){return this.Jt[t]?ec.resolve(this.Jt[t]):this.lookupMutationBatch(e,t).next((e=>{if(e){const n=e.keys();return this.Jt[t]=n,n}return null}))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return Uc(e).Kt({index:qa.userMutationsIndex,range:r},((e,t,r)=>{t.userId===this.userId&&(Yr(t.batchId>=n),i=Tc(this.N,t)),r.done()})).next((()=>i))}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return Uc(e).Kt({index:qa.userMutationsIndex,range:t,reverse:!0},((e,t,r)=>{n=t.batchId,r.done()})).next((()=>n))}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Uc(e).Lt(qa.userMutationsIndex,t).next((e=>e.map((e=>Tc(this.N,e)))))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=Ua.prefixForPath(this.userId,t.path),r=IDBKeyRange.lowerBound(n),i=[];return Vc(e).Kt({range:r},((n,r,s)=>{const[o,a,c]=n,l=La(a);if(o===this.userId&&t.path.isEqual(l))return Uc(e).get(c).next((e=>{if(!e)throw Jr();Yr(e.userId===this.userId),i.push(Tc(this.N,e))}));s.done()})).next((()=>i))}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new xo(hi);const r=[];return t.forEach((t=>{const i=Ua.prefixForPath(this.userId,t.path),s=IDBKeyRange.lowerBound(i),o=Vc(e).Kt({range:s},((e,r,i)=>{const[s,o,a]=e,c=La(o);s===this.userId&&t.path.isEqual(c)?n=n.add(a):i.done()}));r.push(o)})),ec.waitFor(r).next((()=>this.Zt(e,n)))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1,i=Ua.prefixForPath(this.userId,n),s=IDBKeyRange.lowerBound(i);let o=new xo(hi);return Vc(e).Kt({range:s},((e,t,i)=>{const[s,a,c]=e,l=La(a);s===this.userId&&n.isPrefixOf(l)?l.length===r&&(o=o.add(c)):i.done()})).next((()=>this.Zt(e,o)))}Zt(e,t){const n=[],r=[];return t.forEach((t=>{r.push(Uc(e).get(t).next((e=>{if(null===e)throw Jr();Yr(e.userId===this.userId),n.push(Tc(this.N,e))})))})),ec.waitFor(r).next((()=>n))}removeMutationBatch(e,t){return Dc(e.Qt,this.userId,t).next((n=>(e.addOnCommittedListener((()=>{this.te(t.batchId)})),ec.forEach(n,(t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))))}te(e){delete this.Jt[e]}performConsistencyCheck(e){return this.checkEmpty(e).next((t=>{if(!t)return ec.resolve();const n=IDBKeyRange.lowerBound(Ua.prefixForUser(this.userId)),r=[];return Vc(e).Kt({range:n},((e,t,n)=>{if(e[0]===this.userId){const t=La(e[1]);r.push(t)}else n.done()})).next((()=>{Yr(0===r.length)}))}))}containsKey(e,t){return qc(e,this.userId,t)}ee(e){return jc(e).get(this.userId).next((e=>e||new Ma(this.userId,-1,"")))}}function qc(e,t,n){const r=Ua.prefixForPath(t,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Vc(e).Kt({range:s,qt:!0},((e,n,r)=>{const[s,a,c]=e;s===t&&a===i&&(o=!0),r.done()})).next((()=>o))}function Uc(e){return hc(e,qa.store)}function Vc(e){return hc(e,Ua.store)}function jc(e){return hc(e,Ma.store)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(e){this.ne=e}next(){return this.ne+=2,this.ne}static se(){return new Bc(0)}static ie(){return new Bc(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(e,t){this.referenceDelegate=e,this.N=t}allocateTargetId(e){return this.re(e).next((t=>{const n=new Bc(t.highestTargetId);return t.highestTargetId=n.next(),this.oe(e,t).next((()=>t.highestTargetId))}))}getLastRemoteSnapshotVersion(e){return this.re(e).next((e=>mi.fromTimestamp(new pi(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(e){return this.re(e).next((e=>e.highestListenSequenceNumber))}setTargetsMetadata(e,t,n){return this.re(e).next((r=>(r.highestListenSequenceNumber=t,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.oe(e,r))))}addTargetData(e,t){return this.ae(e,t).next((()=>this.re(e).next((n=>(n.targetCount+=1,this.ce(t,n),this.oe(e,n))))))}updateTargetData(e,t){return this.ae(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next((()=>zc(e).delete(t.targetId))).next((()=>this.re(e))).next((t=>(Yr(t.targetCount>0),t.targetCount-=1,this.oe(e,t))))}removeTargets(e,t,n){let r=0;const i=[];return zc(e).Kt(((s,o)=>{const a=Ic(o);a.sequenceNumber<=t&&null===n.get(a.targetId)&&(r++,i.push(this.removeTargetData(e,a)))})).next((()=>ec.waitFor(i))).next((()=>r))}forEachTarget(e,t){return zc(e).Kt(((e,n)=>{const r=Ic(n);t(r)}))}re(e){return Hc(e).get(Ka.key).next((e=>(Yr(null!==e),e)))}oe(e,t){return Hc(e).put(Ka.key,t)}ae(e,t){return zc(e).put(Ec(this.N,t))}ce(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.re(e).next((e=>e.targetCount))}getTargetData(e,t){const n=ns(t),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return zc(e).Kt({range:r,index:za.queryTargetsIndexName},((e,n,r)=>{const s=Ic(n);is(t,s.target)&&(i=s,r.done())})).next((()=>i))}addMatchingKeys(e,t,n){const r=[],i=Kc(e);return t.forEach((t=>{const s=Ra(t.path);r.push(i.put(new Ha(n,s))),r.push(this.referenceDelegate.addReference(e,n,t))})),ec.waitFor(r)}removeMatchingKeys(e,t,n){const r=Kc(e);return ec.forEach(t,(t=>{const i=Ra(t.path);return ec.waitFor([r.delete([n,i]),this.referenceDelegate.removeReference(e,n,t)])}))}removeMatchingKeysForTargetId(e,t){const n=Kc(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),r=Kc(e);let i=Fo();return r.Kt({range:n,qt:!0},((e,t,n)=>{const r=La(e[1]),s=new Fi(r);i=i.add(s)})).next((()=>i))}containsKey(e,t){const n=Ra(t.path),r=IDBKeyRange.bound([n],[fi(n)],!1,!0);let i=0;return Kc(e).Kt({index:Ha.documentTargetsIndex,qt:!0,range:r},(([e,t],n,r)=>{0!==e&&(i++,r.done())})).next((()=>i>0))}Et(e,t){return zc(e).get(t).next((e=>e?Ic(e):null))}}function zc(e){return hc(e,za.store)}function Hc(e){return hc(e,Ka.store)}function Kc(e){return hc(e,Ha.store)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gc(e){if(e.code!==Xr.FAILED_PRECONDITION||e.message!==Za)throw e;Hr("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wc([e,t],[n,r]){const i=hi(e,n);return 0===i?hi(t,r):i}class Jc{constructor(e){this.ue=e,this.buffer=new xo(Wc),this.he=0}le(){return++this.he}fe(e){const t=[e,this.le()];if(this.buffer.size<this.ue)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();Wc(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Yc{constructor(e,t){this.garbageCollector=e,this.asyncQueue=t,this.de=!1,this.we=null}start(e){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this._e(e)}stop(){this.we&&(this.we.cancel(),this.we=null)}get started(){return null!==this.we}_e(e){const t=this.de?3e5:6e4;Hr("LruGarbageCollector",`Garbage collection scheduled in ${t}ms`),this.we=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.we=null,this.de=!0;try{await e.collectGarbage(this.garbageCollector)}catch(e){sc(e)?Hr("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await Gc(e)}await this._e(e)}))}}class Qc{constructor(e,t){this.me=e,this.params=t}calculateTargetCount(e,t){return this.me.ge(e).next((e=>Math.floor(t/100*e)))}nthSequenceNumber(e,t){if(0===t)return ec.resolve(ci.T);const n=new Jc(t);return this.me.forEachTarget(e,(e=>n.fe(e.sequenceNumber))).next((()=>this.me.ye(e,(e=>n.fe(e))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.me.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.me.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(Hr("LruGarbageCollector","Garbage collection skipped; disabled"),ec.resolve(Pc)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(Hr("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Pc):this.pe(e,t)))}getCacheSize(e){return this.me.getCacheSize(e)}pe(e,t){let n,r,i,s,o,c,l;const u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((t=>(t>this.params.maximumSequenceNumbersToCollect?(Hr("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,s=Date.now(),this.nthSequenceNumber(e,r)))).next((r=>(n=r,o=Date.now(),this.removeTargets(e,n,t)))).next((t=>(i=t,c=Date.now(),this.removeOrphanedDocuments(e,n)))).next((e=>(l=Date.now(),$r()<=a["in"].DEBUG&&Hr("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${s-u}ms\n\tDetermined least recently used ${r} in `+(o-s)+"ms\n"+`\tRemoved ${i} targets in `+(c-o)+"ms\n"+`\tRemoved ${e} documents in `+(l-c)+"ms\n"+`Total Duration: ${l-u}ms`),ec.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e}))))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(e,t){this.db=e,this.garbageCollector=function(e,t){return new Qc(e,t)}(this,t)}ge(e){const t=this.Ee(e);return this.db.getTargetCache().getTargetCount(e).next((e=>t.next((t=>e+t))))}Ee(e){let t=0;return this.ye(e,(e=>{t++})).next((()=>t))}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}ye(e,t){return this.Te(e,((e,n)=>t(n)))}addReference(e,t,n){return Xc(e,n)}removeReference(e,t,n){return Xc(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return Xc(e,t)}Ie(e,t){return function(e,t){let n=!1;return jc(e).jt((r=>qc(e,r,t).next((e=>(e&&(n=!0),ec.resolve(!e)))))).next((()=>n))}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let i=0;return this.Te(e,((s,o)=>{if(o<=t){const t=this.Ie(e,s).next((t=>{if(!t)return i++,n.getEntry(e,s).next((()=>(n.removeEntry(s),Kc(e).delete([0,Ra(s.path)]))))}));r.push(t)}})).next((()=>ec.waitFor(r))).next((()=>n.apply(e))).next((()=>i))}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return Xc(e,t)}Te(e,t){const n=Kc(e);let r,i=ci.T;return n.Kt({index:Ha.documentTargetsIndex},(([e,n],{path:s,sequenceNumber:o})=>{0===e?(i!==ci.T&&t(new Fi(La(r)),i),i=o,r=s):i=ci.T})).next((()=>{i!==ci.T&&t(new Fi(La(r)),i)}))}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Xc(e,t){return Kc(e).put(function(e,t){return new Ha(0,Ra(e.path),t)}(t,e.currentSequenceNumber))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={}}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0!==r){for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t])}else this.inner[n]=[[e,t]]}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),!0;return!1}forEach(e){vi(this.inner,((t,n)=>{for(const[r,i]of n)e(r,i)}))}isEmpty(){return yi(this.inner)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(){this.changes=new el((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}getReadTime(e){const t=this.changes.get(e);return t?t.readTime:mi.min()}addEntry(e,t){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:t})}removeEntry(e,t=null){this.assertNotApplied(),this.changes.set(e,{document:Xi.newInvalidDocument(e),readTime:t})}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?ec.resolve(n.document):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e,t){this.N=e,this.Ht=t}addEntry(e,t,n){return sl(e).put(ol(t),n)}removeEntry(e,t){const n=sl(e),r=ol(t);return n.delete(r)}updateMetadata(e,t){return this.getMetadata(e).next((n=>(n.byteSize+=t,this.Ae(e,n))))}getEntry(e,t){return sl(e).get(ol(t)).next((e=>this.Re(t,e)))}be(e,t){return sl(e).get(ol(t)).next((e=>({document:this.Re(t,e),size:Fc(e)})))}getEntries(e,t){let n=No();return this.Pe(e,t,((e,t)=>{const r=this.Re(e,t);n=n.insert(e,r)})).next((()=>n))}ve(e,t){let n=No(),r=new Eo(Fi.comparator);return this.Pe(e,t,((e,t)=>{const i=this.Re(e,t);n=n.insert(e,i),r=r.insert(e,Fc(t))})).next((()=>({documents:n,Ve:r})))}Pe(e,t,n){if(t.isEmpty())return ec.resolve();const r=IDBKeyRange.bound(t.first().path.toArray(),t.last().path.toArray()),i=t.getIterator();let s=i.getNext();return sl(e).Kt({range:r},((e,t,r)=>{const o=Fi.fromSegments(e);for(;s&&Fi.comparator(s,o)<0;)n(s,null),s=i.getNext();s&&s.isEqual(o)&&(n(s,t),s=i.hasNext()?i.getNext():null),s?r.Mt(s.path.toArray()):r.done()})).next((()=>{for(;s;)n(s,null),s=i.hasNext()?i.getNext():null}))}getDocumentsMatchingQuery(e,t,n){let r=No();const i=t.path.length+1,s={};if(n.isEqual(mi.min())){const e=t.path.toArray();s.range=IDBKeyRange.lowerBound(e)}else{const e=t.path.toArray(),r=yc(n);s.range=IDBKeyRange.lowerBound([e,r],!0),s.index=Ba.collectionReadTimeIndex}return sl(e).Kt(s,((e,n,s)=>{if(e.length!==i)return;const o=gc(this.N,n);t.path.isPrefixOf(o.key.path)?Fs(t,o)&&(r=r.insert(o.key,o)):s.done()})).next((()=>r))}newChangeBuffer(e){return new rl(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((e=>e.byteSize))}getMetadata(e){return il(e).get($a.key).next((e=>(Yr(!!e),e)))}Ae(e,t){return il(e).put($a.key,t)}Re(e,t){if(t){const e=gc(this.N,t);if(!e.isNoDocument()||!e.version.isEqual(mi.min()))return e}return Xi.newInvalidDocument(e)}}class rl extends tl{constructor(e,t){super(),this.Se=e,this.trackRemovals=t,this.De=new el((e=>e.toString()),((e,t)=>e.isEqual(t)))}applyChanges(e){const t=[];let n=0,r=new xo(((e,t)=>hi(e.canonicalString(),t.canonicalString())));return this.changes.forEach(((i,s)=>{const o=this.De.get(i);if(s.document.isValidDocument()){const a=vc(this.Se.N,s.document,this.getReadTime(i));r=r.add(i.path.popLast());const c=Fc(a);n+=c-o,t.push(this.Se.addEntry(e,i,a))}else if(n-=o,this.trackRemovals){const n=vc(this.Se.N,Xi.newNoDocument(i,mi.min()),this.getReadTime(i));t.push(this.Se.addEntry(e,i,n))}else t.push(this.Se.removeEntry(e,i))})),r.forEach((n=>{t.push(this.Se.Ht.addToCollectionParentIndex(e,n))})),t.push(this.Se.updateMetadata(e,n)),ec.waitFor(t)}getFromCache(e,t){return this.Se.be(e,t).next((e=>(this.De.set(t,e.size),e.document)))}getAllFromCache(e,t){return this.Se.ve(e,t).next((({documents:e,Ve:t})=>(t.forEach(((e,t)=>{this.De.set(e,t)})),e)))}}function il(e){return hc(e,$a.store)}function sl(e){return hc(e,Ba.store)}function ol(e){return e.path.toArray()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(e){this.N=e}Ct(e,t,n,r){Yr(n<r&&n>=0&&r<=11);const i=new tc("createOrUpgrade",t);n<1&&r>=1&&(function(e){e.createObjectStore(Fa.store)}(e),function(e){e.createObjectStore(Ma.store,{keyPath:Ma.keyPath}),e.createObjectStore(qa.store,{keyPath:qa.keyPath,autoIncrement:!0}).createIndex(qa.userMutationsIndex,qa.userMutationsKeyPath,{unique:!0}),e.createObjectStore(Ua.store)}(e),cl(e),function(e){e.createObjectStore(Ba.store)}(e));let s=ec.resolve();return n<3&&r>=3&&(0!==n&&(function(e){e.deleteObjectStore(Ha.store),e.deleteObjectStore(za.store),e.deleteObjectStore(Ka.store)}(e),cl(e)),s=s.next((()=>function(e){const t=e.store(Ka.store),n=new Ka(0,0,mi.min().toTimestamp(),0);return t.put(Ka.key,n)}(i)))),n<4&&r>=4&&(0!==n&&(s=s.next((()=>function(e,t){return t.store(qa.store).Lt().next((n=>{e.deleteObjectStore(qa.store),e.createObjectStore(qa.store,{keyPath:qa.keyPath,autoIncrement:!0}).createIndex(qa.userMutationsIndex,qa.userMutationsKeyPath,{unique:!0});const r=t.store(qa.store),i=n.map((e=>r.put(e)));return ec.waitFor(i)}))}(e,i)))),s=s.next((()=>{!function(e){e.createObjectStore(Wa.store,{keyPath:Wa.keyPath})}(e)}))),n<5&&r>=5&&(s=s.next((()=>this.Ce(i)))),n<6&&r>=6&&(s=s.next((()=>(function(e){e.createObjectStore($a.store)}(e),this.Ne(i))))),n<7&&r>=7&&(s=s.next((()=>this.xe(i)))),n<8&&r>=8&&(s=s.next((()=>this.ke(e,i)))),n<9&&r>=9&&(s=s.next((()=>{!function(e){e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")}(e),function(e){const t=e.objectStore(Ba.store);t.createIndex(Ba.readTimeIndex,Ba.readTimeIndexPath,{unique:!1}),t.createIndex(Ba.collectionReadTimeIndex,Ba.collectionReadTimeIndexPath,{unique:!1})}(t)}))),n<10&&r>=10&&(s=s.next((()=>this.$e(i)))),n<11&&r>=11&&(s=s.next((()=>{!function(e){e.createObjectStore(Ja.store,{keyPath:Ja.keyPath})}(e),function(e){e.createObjectStore(Ya.store,{keyPath:Ya.keyPath})}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}))),s}Ne(e){let t=0;return e.store(Ba.store).Kt(((e,n)=>{t+=Fc(n)})).next((()=>{const n=new $a(t);return e.store($a.store).put($a.key,n)}))}Ce(e){const t=e.store(Ma.store),n=e.store(qa.store);return t.Lt().next((t=>ec.forEach(t,(t=>{const r=IDBKeyRange.bound([t.userId,-1],[t.userId,t.lastAcknowledgedBatchId]);return n.Lt(qa.userMutationsIndex,r).next((n=>ec.forEach(n,(n=>{Yr(n.userId===t.userId);const r=Tc(this.N,n);return Dc(e,t.userId,r).next((()=>{}))}))))}))))}xe(e){const t=e.store(Ha.store),n=e.store(Ba.store);return e.store(Ka.store).get(Ka.key).next((e=>{const r=[];return n.Kt(((n,i)=>{const s=new bi(n),o=function(e){return[0,Ra(e)]}(s);r.push(t.get(o).next((n=>n?ec.resolve():(n=>t.put(new Ha(0,Ra(n),e.highestListenSequenceNumber)))(s))))})).next((()=>ec.waitFor(r)))}))}ke(e,t){e.createObjectStore(Ga.store,{keyPath:Ga.keyPath});const n=t.store(Ga.store),r=new Nc,i=e=>{if(r.add(e)){const t=e.lastSegment(),r=e.popLast();return n.put({collectionId:t,parent:Ra(r)})}};return t.store(Ba.store).Kt({qt:!0},((e,t)=>{const n=new bi(e);return i(n.popLast())})).next((()=>t.store(Ua.store).Kt({qt:!0},(([e,t,n],r)=>{const s=La(t);return i(s.popLast())}))))}$e(e){const t=e.store(za.store);return t.Kt(((e,n)=>{const r=Ic(n),i=Ec(this.N,r);return t.put(i)}))}}function cl(e){e.createObjectStore(Ha.store,{keyPath:Ha.keyPath}).createIndex(Ha.documentTargetsIndex,Ha.documentTargetsKeyPath,{unique:!0}),e.createObjectStore(za.store,{keyPath:za.keyPath}).createIndex(za.queryTargetsIndexName,za.queryTargetsKeyPath,{unique:!0}),e.createObjectStore(Ka.store)}const ll="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class ul{constructor(e,t,n,r,i,s,o,a,c,l){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.Oe=i,this.window=s,this.document=o,this.Fe=c,this.Me=l,this.Le=null,this.Be=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Ue=null,this.inForeground=!1,this.qe=null,this.Ke=null,this.je=Number.NEGATIVE_INFINITY,this.Qe=e=>Promise.resolve(),!ul.bt())throw new ei(Xr.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Zc(this,r),this.We=t+"main",this.N=new mc(a),this.Ge=new nc(this.We,11,new al(this.N)),this.ze=new $c(this.referenceDelegate,this.N),this.Ht=new Rc,this.He=function(e,t){return new nl(e,t)}(this.N,this.Ht),this.Je=new kc,this.window&&this.window.localStorage?this.Ye=this.window.localStorage:(this.Ye=null,!1===l&&Kr("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Xe().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new ei(Xr.FAILED_PRECONDITION,ll);return this.Ze(),this.tn(),this.en(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e=>this.ze.getHighestSequenceNumber(e)))})).then((e=>{this.Le=new ci(e,this.Fe)})).then((()=>{this.Be=!0})).catch((e=>(this.Ge&&this.Ge.close(),Promise.reject(e))))}nn(e){return this.Qe=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ge.xt((async t=>{null===t.newVersion&&await e()}))}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Oe.enqueueAndForget((async()=>{this.started&&await this.Xe()})))}Xe(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(e=>dl(e).put(new Wa(this.clientId,Date.now(),this.networkEnabled,this.inForeground)).next((()=>{if(this.isPrimary)return this.sn(e).next((e=>{e||(this.isPrimary=!1,this.Oe.enqueueRetryable((()=>this.Qe(!1))))}))})).next((()=>this.rn(e))).next((t=>this.isPrimary&&!t?this.on(e).next((()=>!1)):!!t&&this.an(e).next((()=>!0)))))).catch((e=>{if(sc(e))return Hr("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return Hr("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1})).then((e=>{this.isPrimary!==e&&this.Oe.enqueueRetryable((()=>this.Qe(e))),this.isPrimary=e}))}sn(e){return hl(e).get(Fa.key).next((e=>ec.resolve(this.cn(e))))}un(e){return dl(e).delete(this.clientId)}async hn(){if(this.isPrimary&&!this.ln(this.je,18e5)){this.je=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(e=>{const t=hc(e,Wa.store);return t.Lt().next((e=>{const n=this.fn(e,18e5),r=e.filter((e=>-1===n.indexOf(e)));return ec.forEach(r,(e=>t.delete(e.clientId))).next((()=>r))}))})).catch((()=>[]));if(this.Ye)for(const t of e)this.Ye.removeItem(this.dn(t.clientId))}}en(){this.Ke=this.Oe.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.Xe().then((()=>this.hn())).then((()=>this.en()))))}cn(e){return!!e&&e.ownerId===this.clientId}rn(e){return this.Me?ec.resolve(!0):hl(e).get(Fa.key).next((t=>{if(null!==t&&this.ln(t.leaseTimestampMs,5e3)&&!this.wn(t.ownerId)){if(this.cn(t)&&this.networkEnabled)return!0;if(!this.cn(t)){if(!t.allowTabSynchronization)throw new ei(Xr.FAILED_PRECONDITION,ll);return!1}}return!(!this.networkEnabled||!this.inForeground)||dl(e).Lt().next((e=>void 0===this.fn(e,5e3).find((e=>{if(this.clientId!==e.clientId){const t=!this.networkEnabled&&e.networkEnabled,n=!this.inForeground&&e.inForeground,r=this.networkEnabled===e.networkEnabled;if(t||n&&r)return!0}return!1}))))})).next((e=>(this.isPrimary!==e&&Hr("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e)))}async shutdown(){this.Be=!1,this._n(),this.Ke&&(this.Ke.cancel(),this.Ke=null),this.mn(),this.gn(),await this.Ge.runTransaction("shutdown","readwrite",[Fa.store,Wa.store],(e=>{const t=new uc(e,ci.T);return this.on(t).next((()=>this.un(t)))})),this.Ge.close(),this.yn()}fn(e,t){return e.filter((e=>this.ln(e.updateTimeMs,t)&&!this.wn(e.clientId)))}pn(){return this.runTransaction("getActiveClients","readonly",(e=>dl(e).Lt().next((e=>this.fn(e,18e5).map((e=>e.clientId))))))}get started(){return this.Be}getMutationQueue(e){return Mc.Yt(e,this.N,this.Ht,this.referenceDelegate)}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getIndexManager(){return this.Ht}getBundleCache(){return this.Je}runTransaction(e,t,n){Hr("IndexedDbPersistence","Starting transaction:",e);const r="readonly"===t?"readonly":"readwrite";let i;return this.Ge.runTransaction(e,r,Qa,(r=>(i=new uc(r,this.Le?this.Le.next():ci.T),"readwrite-primary"===t?this.sn(i).next((e=>!!e||this.rn(i))).next((t=>{if(!t)throw Kr(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Oe.enqueueRetryable((()=>this.Qe(!1))),new ei(Xr.FAILED_PRECONDITION,Za);return n(i)})).next((e=>this.an(i).next((()=>e)))):this.En(i).next((()=>n(i)))))).then((e=>(i.raiseOnCommittedEvent(),e)))}En(e){return hl(e).get(Fa.key).next((e=>{if(null!==e&&this.ln(e.leaseTimestampMs,5e3)&&!this.wn(e.ownerId)&&!this.cn(e)&&!(this.Me||this.allowTabSynchronization&&e.allowTabSynchronization))throw new ei(Xr.FAILED_PRECONDITION,ll)}))}an(e){const t=new Fa(this.clientId,this.allowTabSynchronization,Date.now());return hl(e).put(Fa.key,t)}static bt(){return nc.bt()}on(e){const t=hl(e);return t.get(Fa.key).next((e=>this.cn(e)?(Hr("IndexedDbPersistence","Releasing primary lease."),t.delete(Fa.key)):ec.resolve()))}ln(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(Kr(`Detected an update time that is in the future: ${e} > ${n}`),!1))}Ze(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.qe=()=>{this.Oe.enqueueAndForget((()=>(this.inForeground="visible"===this.document.visibilityState,this.Xe())))},this.document.addEventListener("visibilitychange",this.qe),this.inForeground="visible"===this.document.visibilityState)}mn(){this.qe&&(this.document.removeEventListener("visibilitychange",this.qe),this.qe=null)}tn(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.Ue=()=>{this._n(),(0,c.G6)()&&navigator.appVersion.match("Version/14")&&this.Oe.enterRestrictedMode(!0),this.Oe.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.Ue))}gn(){this.Ue&&(this.window.removeEventListener("pagehide",this.Ue),this.Ue=null)}wn(e){var t;try{const n=null!==(null===(t=this.Ye)||void 0===t?void 0:t.getItem(this.dn(e)));return Hr("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(e){return Kr("IndexedDbPersistence","Failed to get zombied client id.",e),!1}}_n(){if(this.Ye)try{this.Ye.setItem(this.dn(this.clientId),String(Date.now()))}catch(e){Kr("Failed to set zombie client id.",e)}}yn(){if(this.Ye)try{this.Ye.removeItem(this.dn(this.clientId))}catch(e){}}dn(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function hl(e){return hc(e,Fa.store)}function dl(e){return hc(e,Wa.store)}function fl(e,t){let n=e.projectId;return e.isDefaultDatabase||(n+="."+e.database),"firestore/"+t+"/"+n+"/"
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class pl{constructor(e,t){this.progress=e,this.Tn=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(e,t,n){this.He=e,this.In=t,this.Ht=n}An(e,t){return this.In.getAllMutationBatchesAffectingDocumentKey(e,t).next((n=>this.Rn(e,t,n)))}Rn(e,t,n){return this.He.getEntry(e,t).next((e=>{for(const t of n)t.applyToLocalView(e);return e}))}bn(e,t){e.forEach(((e,n)=>{for(const r of t)r.applyToLocalView(n)}))}Pn(e,t){return this.He.getEntries(e,t).next((t=>this.vn(e,t).next((()=>t))))}vn(e,t){return this.In.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>this.bn(t,e)))}getDocumentsMatchingQuery(e,t,n){return function(e){return Fi.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.Vn(e,t.path):As(t)?this.Sn(e,t,n):this.Dn(e,t,n)}Vn(e,t){return this.An(e,new Fi(t)).next((e=>{let t=Oo();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}Sn(e,t,n){const r=t.collectionGroup;let i=Oo();return this.Ht.getCollectionParents(e,r).next((s=>ec.forEach(s,(s=>{const o=function(e,t){return new Ts(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,s.child(r));return this.Dn(e,o,n).next((e=>{e.forEach(((e,t)=>{i=i.insert(e,t)}))}))})).next((()=>i))))}Dn(e,t,n){let r,i;return this.He.getDocumentsMatchingQuery(e,t,n).next((n=>(r=n,this.In.getAllMutationBatchesAffectingQuery(e,t)))).next((t=>(i=t,this.Cn(e,i,r).next((e=>{r=e;for(const t of i)for(const e of t.mutations){const n=e.key;let i=r.get(n);null==i&&(i=Xi.newInvalidDocument(n),r=r.insert(n,i)),ao(e,i,t.localWriteTime),i.isFoundDocument()||(r=r.remove(n))}}))))).next((()=>(r.forEach(((e,n)=>{Fs(t,n)||(r=r.remove(e))})),r)))}Cn(e,t,n){let r=Fo();for(const s of t)for(const e of s.mutations)e instanceof fo&&null===n.get(e.key)&&(r=r.add(e.key));let i=n;return this.He.getEntries(e,r).next((e=>(e.forEach(((e,t)=>{t.isFoundDocument()&&(i=i.insert(e,t))})),i)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Nn=n,this.xn=r}static kn(e,t){let n=Fo(),r=Fo();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new gl(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{$n(e){this.On=e}getDocumentsMatchingQuery(e,t,n,r){return function(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}(t)||n.isEqual(mi.min())?this.Fn(e,t):this.On.Pn(e,r).next((i=>{const s=this.Mn(t,i);return(Ss(t)||ks(t))&&this.Ln(t.limitType,s,r,n)?this.Fn(e,t):($r()<=a["in"].DEBUG&&Hr("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),Ds(t)),this.On.getDocumentsMatchingQuery(e,t,n).next((e=>(s.forEach((t=>{e=e.insert(t.key,t)})),e))))}))}Mn(e,t){let n=new xo(Ms(e));return t.forEach(((t,r)=>{Fs(e,r)&&(n=n.add(r))})),n}Ln(e,t,n,r){if(n.size!==t.size)return!0;const i="F"===e?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Fn(e,t){return $r()<=a["in"].DEBUG&&Hr("QueryEngine","Using full collection scan to execute query:",Ds(t)),this.On.getDocumentsMatchingQuery(e,t,mi.min())}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(e,t,n,r){this.persistence=e,this.Bn=t,this.N=r,this.Un=new Eo(hi),this.qn=new el((e=>ns(e)),is),this.Kn=mi.min(),this.In=e.getMutationQueue(n),this.jn=e.getRemoteDocumentCache(),this.ze=e.getTargetCache(),this.Qn=new ml(this.jn,this.In,this.persistence.getIndexManager()),this.Je=e.getBundleCache(),this.Bn.$n(this.Qn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Un)))}}function wl(e,t,n,r){return new yl(e,t,n,r)}async function bl(e,t){const n=Zr(e);let r=n.In,i=n.Qn;const s=await n.persistence.runTransaction("Handle user change","readonly",(e=>{let s;return n.In.getAllMutationBatches(e).next((o=>(s=o,r=n.persistence.getMutationQueue(t),i=new ml(n.jn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(e)))).next((t=>{const n=[],r=[];let o=Fo();for(const e of s){n.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){r.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return i.Pn(e,o).next((e=>({Wn:e,removedBatchIds:n,addedBatchIds:r})))}))}));return n.In=r,n.Qn=i,n.Bn.$n(n.Qn),s}function _l(e,t){const n=Zr(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.jn.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=ec.resolve();return s.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);Yr(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&r.addEntry(t,n.commitVersion))}))})),o.next((()=>e.In.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.In.performConsistencyCheck(e))).next((()=>n.Qn.Pn(e,r)))}))}function Tl(e){const t=Zr(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.ze.getLastRemoteSnapshotVersion(e)))}function Il(e,t){const n=Zr(e),r=t.snapshotVersion;let i=n.Un;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.jn.newChangeBuffer({trackRemovals:!0});i=n.Un;const o=[];t.targetChanges.forEach(((t,s)=>{const a=i.get(s);if(!a)return;o.push(n.ze.removeMatchingKeys(e,t.removedDocuments,s).next((()=>n.ze.addMatchingKeys(e,t.addedDocuments,s))));const c=t.resumeToken;if(c.approximateByteSize()>0){const l=a.withResumeToken(c,r).withSequenceNumber(e.currentSequenceNumber);i=i.insert(s,l),function(e,t,n){return Yr(t.resumeToken.approximateByteSize()>0),0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(a,l,t)&&o.push(n.ze.updateTargetData(e,l))}}));let a=No();if(t.documentUpdates.forEach(((r,i)=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(El(e,s,t.documentUpdates,r,void 0).next((e=>{a=e}))),!r.isEqual(mi.min())){const t=n.ze.getLastRemoteSnapshotVersion(e).next((t=>n.ze.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return ec.waitFor(o).next((()=>s.apply(e))).next((()=>n.Qn.vn(e,a))).next((()=>a))})).then((e=>(n.Un=i,e)))}function El(e,t,n,r,i){let s=Fo();return n.forEach((e=>s=s.add(e))),t.getEntries(e,s).next((e=>{let s=No();return n.forEach(((n,o)=>{const a=e.get(n),c=(null==i?void 0:i.get(n))||r;o.isNoDocument()&&o.version.isEqual(mi.min())?(t.removeEntry(n,c),s=s.insert(n,o)):!a.isValidDocument()||o.version.compareTo(a.version)>0||0===o.version.compareTo(a.version)&&a.hasPendingWrites?(t.addEntry(o,c),s=s.insert(n,o)):Hr("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",o.version)})),s}))}function Sl(e,t){const n=Zr(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.In.getNextMutationBatchAfterBatchId(e,t))))}function kl(e,t){const n=Zr(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.ze.getTargetData(e,t).next((i=>i?(r=i,ec.resolve(r)):n.ze.allocateTargetId(e).next((i=>(r=new pc(t,i,0,e.currentSequenceNumber),n.ze.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.Un.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Un=n.Un.insert(e.targetId,e),n.qn.set(t,e.targetId)),e}))}async function xl(e,t,n){const r=Zr(e),i=r.Un.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(e){if(!sc(e))throw e;Hr("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.Un=r.Un.remove(t),r.qn.delete(i.target)}function Cl(e,t,n){const r=Zr(e);let i=mi.min(),s=Fo();return r.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const r=Zr(e),i=r.qn.get(n);return void 0!==i?ec.resolve(r.Un.get(i)):r.ze.getTargetData(t,n)}(r,e,Rs(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.ze.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>r.Bn.getDocumentsMatchingQuery(e,t,n?i:mi.min(),n?s:Fo()))).next((e=>({documents:e,Gn:s})))))}function Al(e,t){const n=Zr(e),r=Zr(n.ze),i=n.Un.get(t);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",(e=>r.Et(e,t).next((e=>e?e.target:null))))}function Nl(e){const t=Zr(e);return t.persistence.runTransaction("Get new document changes","readonly",(e=>function(e,t,n){const r=Zr(e);let i=No(),s=yc(n);const o=sl(t),a=IDBKeyRange.lowerBound(s,!0);return o.Kt({index:Ba.readTimeIndex,range:a},((e,t)=>{const n=gc(r.N,t);i=i.insert(n.key,n),s=t.readTime})).next((()=>({Tn:i,readTime:wc(s)})))}(t.jn,e,t.Kn))).then((({Tn:e,readTime:n})=>(t.Kn=n,e)))}async function Rl(e){const t=Zr(e);return t.persistence.runTransaction("Synchronize last document change read time","readonly",(e=>function(e){const t=sl(e);let n=mi.min();return t.Kt({index:Ba.readTimeIndex,reverse:!0},((e,t,r)=>{t.readTime&&(n=wc(t.readTime)),r.done()})).next((()=>n))}(e))).then((e=>{t.Kn=e}))}async function Ol(e,t,n,r){const i=Zr(e);let s=Fo(),o=No(),a=Lo();for(const u of n){const e=t.zn(u.metadata.name);u.document&&(s=s.add(e)),o=o.insert(e,t.Hn(u)),a=a.insert(e,t.Jn(u.metadata.readTime))}const c=i.jn.newChangeBuffer({trackRemovals:!0}),l=await kl(i,function(e){return Rs(Es(bi.fromString(`__bundle__/docs/${e}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",(e=>El(e,c,o,mi.min(),a).next((t=>(c.apply(e),t))).next((t=>i.ze.removeMatchingKeysForTargetId(e,l.targetId).next((()=>i.ze.addMatchingKeys(e,s,l.targetId))).next((()=>i.Qn.vn(e,t))).next((()=>t))))))}async function Pl(e,t,n=Fo()){const r=await kl(e,Rs(Sc(t.bundledQuery))),i=Zr(e);return i.persistence.runTransaction("Save named query","readwrite",(e=>{const s=ea(t.readTime);if(r.snapshotVersion.compareTo(s)>=0)return i.Je.saveNamedQuery(e,t);const o=r.withResumeToken(Si.EMPTY_BYTE_STRING,s);return i.Un=i.Un.insert(o.targetId,o),i.ze.updateTargetData(e,o).next((()=>i.ze.removeMatchingKeysForTargetId(e,r.targetId))).next((()=>i.ze.addMatchingKeys(e,n,r.targetId))).next((()=>i.Je.saveNamedQuery(e,t)))}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e){this.N=e,this.Yn=new Map,this.Xn=new Map}getBundleMetadata(e,t){return ec.resolve(this.Yn.get(t))}saveBundleMetadata(e,t){var n;return this.Yn.set(t.id,{id:(n=t).id,version:n.version,createTime:ea(n.createTime)}),ec.resolve()}getNamedQuery(e,t){return ec.resolve(this.Xn.get(t))}saveNamedQuery(e,t){return this.Xn.set(t.name,function(e){return{name:e.name,query:Sc(e.bundledQuery),readTime:ea(e.readTime)}}(t)),ec.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(){this.Zn=new xo(Fl.ts),this.es=new xo(Fl.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,t){const n=new Fl(e,t);this.Zn=this.Zn.add(n),this.es=this.es.add(n)}ss(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.rs(new Fl(e,t))}os(e,t){e.forEach((e=>this.removeReference(e,t)))}cs(e){const t=new Fi(new bi([])),n=new Fl(t,e),r=new Fl(t,e+1),i=[];return this.es.forEachInRange([n,r],(e=>{this.rs(e),i.push(e.key)})),i}us(){this.Zn.forEach((e=>this.rs(e)))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const t=new Fi(new bi([])),n=new Fl(t,e),r=new Fl(t,e+1);let i=Fo();return this.es.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new Fl(e,0),n=this.Zn.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class Fl{constructor(e,t){this.key=e,this.ls=t}static ts(e,t){return Fi.comparator(e.key,t.key)||hi(e.ls,t.ls)}static ns(e,t){return hi(e.ls,t.ls)||Fi.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(e,t){this.Ht=e,this.referenceDelegate=t,this.In=[],this.fs=1,this.ds=new xo(Fl.ts)}checkEmpty(e){return ec.resolve(0===this.In.length)}addMutationBatch(e,t,n,r){const i=this.fs;this.fs++,this.In.length>0&&this.In[this.In.length-1];const s=new dc(i,t,n,r);this.In.push(s);for(const o of r)this.ds=this.ds.add(new Fl(o.key,i)),this.Ht.addToCollectionParentIndex(e,o.key.path.popLast());return ec.resolve(s)}lookupMutationBatch(e,t){return ec.resolve(this.ws(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this._s(n),i=r<0?0:r;return ec.resolve(this.In.length>i?this.In[i]:null)}getHighestUnacknowledgedBatchId(){return ec.resolve(0===this.In.length?-1:this.fs-1)}getAllMutationBatches(e){return ec.resolve(this.In.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Fl(t,0),r=new Fl(t,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([n,r],(e=>{const t=this.ws(e.ls);i.push(t)})),ec.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new xo(hi);return t.forEach((e=>{const t=new Fl(e,0),r=new Fl(e,Number.POSITIVE_INFINITY);this.ds.forEachInRange([t,r],(e=>{n=n.add(e.ls)}))})),ec.resolve(this.gs(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;Fi.isDocumentKey(i)||(i=i.child(""));const s=new Fl(new Fi(i),0);let o=new xo(hi);return this.ds.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.ls)),!0)}),s),ec.resolve(this.gs(o))}gs(e){const t=[];return e.forEach((e=>{const n=this.ws(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){Yr(0===this.ys(t.batchId,"removed")),this.In.shift();let n=this.ds;return ec.forEach(t.mutations,(r=>{const i=new Fl(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.ds=n}))}te(e){}containsKey(e,t){const n=new Fl(t,0),r=this.ds.firstAfterOrEqual(n);return ec.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.In.length,ec.resolve()}ys(e,t){return this._s(e)}_s(e){return 0===this.In.length?0:e-this.In[0].batchId}ws(e){const t=this._s(e);return t<0||t>=this.In.length?null:this.In[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(e,t){this.Ht=e,this.ps=t,this.docs=new Eo(Fi.comparator),this.size=0}addEntry(e,t,n){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.ps(t);return this.docs=this.docs.insert(r,{document:t.clone(),size:o,readTime:n}),this.size+=o-s,this.Ht.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return ec.resolve(n?n.document.clone():Xi.newInvalidDocument(t))}getEntries(e,t){let n=No();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.clone():Xi.newInvalidDocument(e))})),ec.resolve(n)}getDocumentsMatchingQuery(e,t,n){let r=No();const i=new Fi(t.path.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:e,value:{document:i,readTime:o}}=s.getNext();if(!t.path.isPrefixOf(e.path))break;o.compareTo(n)<=0||Fs(t,i)&&(r=r.insert(i.key,i.clone()))}return ec.resolve(r)}Es(e,t){return ec.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new Ul(this)}getSize(e){return ec.resolve(this.size)}}class Ul extends tl{constructor(e){super(),this.Se=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.document.isValidDocument()?t.push(this.Se.addEntry(e,r.document,this.getReadTime(n))):this.Se.removeEntry(n)})),ec.waitFor(t)}getFromCache(e,t){return this.Se.getEntry(e,t)}getAllFromCache(e,t){return this.Se.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(e){this.persistence=e,this.Ts=new el((e=>ns(e)),is),this.lastRemoteSnapshotVersion=mi.min(),this.highestTargetId=0,this.Is=0,this.As=new Dl,this.targetCount=0,this.Rs=Bc.se()}forEachTarget(e,t){return this.Ts.forEach(((e,n)=>t(n))),ec.resolve()}getLastRemoteSnapshotVersion(e){return ec.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ec.resolve(this.Is)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),ec.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Is&&(this.Is=t),ec.resolve()}ae(e){this.Ts.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Rs=new Bc(t),this.highestTargetId=t),e.sequenceNumber>this.Is&&(this.Is=e.sequenceNumber)}addTargetData(e,t){return this.ae(t),this.targetCount+=1,ec.resolve()}updateTargetData(e,t){return this.ae(t),ec.resolve()}removeTargetData(e,t){return this.Ts.delete(t.target),this.As.cs(t.targetId),this.targetCount-=1,ec.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Ts.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Ts.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),ec.waitFor(i).next((()=>r))}getTargetCount(e){return ec.resolve(this.targetCount)}getTargetData(e,t){const n=this.Ts.get(t)||null;return ec.resolve(n)}addMatchingKeys(e,t,n){return this.As.ss(t,n),ec.resolve()}removeMatchingKeys(e,t,n){this.As.os(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),ec.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.As.cs(t),ec.resolve()}getMatchingKeysForTargetId(e,t){const n=this.As.hs(t);return ec.resolve(n)}containsKey(e,t){return ec.resolve(this.As.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e,t){this.bs={},this.Le=new ci(0),this.Be=!1,this.Be=!0,this.referenceDelegate=e(this),this.ze=new Vl(this),this.Ht=new Ac,this.He=function(e,t){return new ql(e,t)}(this.Ht,(e=>this.referenceDelegate.Ps(e))),this.N=new mc(t),this.Je=new Ll(this.N)}start(){return Promise.resolve()}shutdown(){return this.Be=!1,Promise.resolve()}get started(){return this.Be}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ht}getMutationQueue(e){let t=this.bs[e.toKey()];return t||(t=new Ml(this.Ht,this.referenceDelegate),this.bs[e.toKey()]=t),t}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getBundleCache(){return this.Je}runTransaction(e,t,n){Hr("MemoryPersistence","Starting transaction:",e);const r=new Bl(this.Le.next());return this.referenceDelegate.vs(),n(r).next((e=>this.referenceDelegate.Vs(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Ss(e,t){return ec.or(Object.values(this.bs).map((n=>()=>n.containsKey(e,t))))}}class Bl extends Xa{constructor(e){super(),this.currentSequenceNumber=e}}class $l{constructor(e){this.persistence=e,this.Ds=new Dl,this.Cs=null}static Ns(e){return new $l(e)}get xs(){if(this.Cs)return this.Cs;throw Jr()}addReference(e,t,n){return this.Ds.addReference(n,t),this.xs.delete(n.toString()),ec.resolve()}removeReference(e,t,n){return this.Ds.removeReference(n,t),this.xs.add(n.toString()),ec.resolve()}markPotentiallyOrphaned(e,t){return this.xs.add(t.toString()),ec.resolve()}removeTarget(e,t){this.Ds.cs(t.targetId).forEach((e=>this.xs.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.xs.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}vs(){this.Cs=new Set}Vs(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ec.forEach(this.xs,(n=>{const r=Fi.fromPath(n);return this.ks(e,r).next((e=>{e||t.removeEntry(r)}))})).next((()=>(this.Cs=null,t.apply(e))))}updateLimboDocument(e,t){return this.ks(e,t).next((e=>{e?this.xs.delete(t.toString()):this.xs.add(t.toString())}))}Ps(e){return 0}ks(e,t){return ec.or([()=>ec.resolve(this.Ds.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ss(e,t)])}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zl(e,t){return`firestore_clients_${e}_${t}`}function Hl(e,t,n){let r=`firestore_mutations_${e}_${n}`;return t.isAuthenticated()&&(r+=`_${t.uid}`),r}function Kl(e,t){return`firestore_targets_${e}_${t}`}class Gl{constructor(e,t,n,r){this.user=e,this.batchId=t,this.state=n,this.error=r}static $s(e,t,n){const r=JSON.parse(n);let i,s="object"==typeof r&&-1!==["pending","acknowledged","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return s&&r.error&&(s="string"==typeof r.error.message&&"string"==typeof r.error.code,s&&(i=new ei(r.error.code,r.error.message))),s?new Gl(e,t,r.state,i):(Kr("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}Os(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Wl{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static $s(e,t){const n=JSON.parse(t);let r,i="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return i&&n.error&&(i="string"==typeof n.error.message&&"string"==typeof n.error.code,i&&(r=new ei(n.error.code,n.error.message))),i?new Wl(e,n.state,r):(Kr("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Os(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Jl{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static $s(e,t){const n=JSON.parse(t);let r="object"==typeof n&&n.activeTargetIds instanceof Array,i=qo();for(let s=0;r&&s<n.activeTargetIds.length;++s)r=Di(n.activeTargetIds[s]),i=i.add(n.activeTargetIds[s]);return r?new Jl(e,i):(Kr("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class Yl{constructor(e,t){this.clientId=e,this.onlineState=t}static $s(e){const t=JSON.parse(e);return"object"==typeof t&&-1!==["Unknown","Online","Offline"].indexOf(t.onlineState)&&"string"==typeof t.clientId?new Yl(t.clientId,t.onlineState):(Kr("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Ql{constructor(){this.activeTargetIds=qo()}Fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ms(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Os(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Zl{constructor(e,t,n,r,i){this.window=e,this.Oe=t,this.persistenceKey=n,this.Ls=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Bs=this.Us.bind(this),this.qs=new Eo(hi),this.started=!1,this.Ks=[];const s=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.js=zl(this.persistenceKey,this.Ls),this.Qs=function(e){return`firestore_sequence_number_${e}`}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.persistenceKey),this.qs=this.qs.insert(this.Ls,new Ql),this.Ws=new RegExp(`^firestore_clients_${s}_([^_]*)$`),this.Gs=new RegExp(`^firestore_mutations_${s}_(\\d+)(?:_(.*))?$`),this.zs=new RegExp(`^firestore_targets_${s}_(\\d+)$`),this.Hs=function(e){return`firestore_online_state_${e}`}(this.persistenceKey),this.Js=function(e){return`firestore_bundle_loaded_${e}`}(this.persistenceKey),this.window.addEventListener("storage",this.Bs)}static bt(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.pn();for(const n of e){if(n===this.Ls)continue;const e=this.getItem(zl(this.persistenceKey,n));if(e){const t=Jl.$s(n,e);t&&(this.qs=this.qs.insert(t.clientId,t))}}this.Ys();const t=this.storage.getItem(this.Hs);if(t){const e=this.Xs(t);e&&this.Zs(e)}for(const n of this.Ks)this.Us(n);this.Ks=[],this.window.addEventListener("pagehide",(()=>this.shutdown())),this.started=!0}writeSequenceNumber(e){this.setItem(this.Qs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ti(this.qs)}isActiveQueryTarget(e){let t=!1;return this.qs.forEach(((n,r)=>{r.activeTargetIds.has(e)&&(t=!0)})),t}addPendingMutation(e){this.ei(e,"pending")}updateMutationState(e,t,n){this.ei(e,t,n),this.ni(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const n=this.storage.getItem(Kl(this.persistenceKey,e));if(n){const r=Wl.$s(e,n);r&&(t=r.state)}}return this.si.Fs(e),this.Ys(),t}removeLocalQueryTarget(e){this.si.Ms(e),this.Ys()}isLocalQueryTarget(e){return this.si.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Kl(this.persistenceKey,e))}updateQueryState(e,t,n){this.ii(e,t,n)}handleUserChange(e,t,n){t.forEach((e=>{this.ni(e)})),this.currentUser=e,n.forEach((e=>{this.addPendingMutation(e)}))}setOnlineState(e){this.ri(e)}notifyBundleLoaded(){this.oi()}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Bs),this.removeItem(this.js),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return Hr("SharedClientState","READ",e,t),t}setItem(e,t){Hr("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){Hr("SharedClientState","REMOVE",e),this.storage.removeItem(e)}Us(e){const t=e;if(t.storageArea===this.storage){if(Hr("SharedClientState","EVENT",t.key,t.newValue),t.key===this.js)return void Kr("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Oe.enqueueRetryable((async()=>{if(this.started){if(null!==t.key)if(this.Ws.test(t.key)){if(null==t.newValue){const e=this.ai(t.key);return this.ci(e,null)}{const e=this.ui(t.key,t.newValue);if(e)return this.ci(e.clientId,e)}}else if(this.Gs.test(t.key)){if(null!==t.newValue){const e=this.hi(t.key,t.newValue);if(e)return this.li(e)}}else if(this.zs.test(t.key)){if(null!==t.newValue){const e=this.fi(t.key,t.newValue);if(e)return this.di(e)}}else if(t.key===this.Hs){if(null!==t.newValue){const e=this.Xs(t.newValue);if(e)return this.Zs(e)}}else if(t.key===this.Qs){const e=function(e){let t=ci.T;if(null!=e)try{const n=JSON.parse(e);Yr("number"==typeof n),t=n}catch(e){Kr("SharedClientState","Failed to read sequence number from WebStorage",e)}return t}(t.newValue);e!==ci.T&&this.sequenceNumberHandler(e)}else if(t.key===this.Js)return this.syncEngine.wi()}else this.Ks.push(t)}))}}get si(){return this.qs.get(this.Ls)}Ys(){this.setItem(this.js,this.si.Os())}ei(e,t,n){const r=new Gl(this.currentUser,e,t,n),i=Hl(this.persistenceKey,this.currentUser,e);this.setItem(i,r.Os())}ni(e){const t=Hl(this.persistenceKey,this.currentUser,e);this.removeItem(t)}ri(e){const t={clientId:this.Ls,onlineState:e};this.storage.setItem(this.Hs,JSON.stringify(t))}ii(e,t,n){const r=Kl(this.persistenceKey,e),i=new Wl(e,t,n);this.setItem(r,i.Os())}oi(){this.setItem(this.Js,"value-not-used")}ai(e){const t=this.Ws.exec(e);return t?t[1]:null}ui(e,t){const n=this.ai(e);return Jl.$s(n,t)}hi(e,t){const n=this.Gs.exec(e),r=Number(n[1]),i=void 0!==n[2]?n[2]:null;return Gl.$s(new Vr(i),r,t)}fi(e,t){const n=this.zs.exec(e),r=Number(n[1]);return Wl.$s(r,t)}Xs(e){return Yl.$s(e)}async li(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine._i(e.batchId,e.state,e.error);Hr("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}di(e){return this.syncEngine.mi(e.targetId,e.state,e.error)}ci(e,t){const n=t?this.qs.insert(e,t):this.qs.remove(e),r=this.ti(this.qs),i=this.ti(n),s=[],o=[];return i.forEach((e=>{r.has(e)||s.push(e)})),r.forEach((e=>{i.has(e)||o.push(e)})),this.syncEngine.gi(s,o).then((()=>{this.qs=n}))}Zs(e){this.qs.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ti(e){let t=qo();return e.forEach(((e,n)=>{t=t.unionWith(n.activeTargetIds)})),t}}class Xl{constructor(){this.yi=new Ql,this.pi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.yi.Fs(e),this.pi[e]||"not-current"}updateQueryState(e,t,n){this.pi[e]=t}removeLocalQueryTarget(e){this.yi.Ms(e)}isLocalQueryTarget(e){return this.yi.activeTargetIds.has(e)}clearQueryState(e){delete this.pi[e]}getAllActiveQueryTargets(){return this.yi.activeTargetIds}isActiveQueryTarget(e){return this.yi.activeTargetIds.has(e)}start(){return this.yi=new Ql,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{Ei(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(){this.Ti=()=>this.Ii(),this.Ai=()=>this.Ri(),this.bi=[],this.Pi()}Ei(e){this.bi.push(e)}shutdown(){window.removeEventListener("online",this.Ti),window.removeEventListener("offline",this.Ai)}Pi(){window.addEventListener("online",this.Ti),window.addEventListener("offline",this.Ai)}Ii(){Hr("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.bi)e(0)}Ri(){Hr("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.bi)e(1)}static bt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nu={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e){this.vi=e.vi,this.Vi=e.Vi}Si(e){this.Di=e}Ci(e){this.Ni=e}onMessage(e){this.xi=e}close(){this.Vi()}send(e){this.vi(e)}ki(){this.Di()}$i(e){this.Ni(e)}Oi(e){this.xi(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.Fi=t+"://"+e.host,this.Mi="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Li(e,t,n,r){const i=this.Bi(e,t);Hr("RestConnection","Sending: ",i,n);const s={};return this.Ui(s,r),this.qi(e,i,s,n).then((e=>(Hr("RestConnection","Received: ",e),e)),(t=>{throw Gr("RestConnection",`${e} failed with error: `,t,"url: ",i,"request:",n),t}))}Ki(e,t,n,r){return this.Li(e,t,n,r)}Ui(e,t){if(e["X-Goog-Api-Client"]="gl-js/ fire/"+jr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t)for(const n in t.authHeaders)t.authHeaders.hasOwnProperty(n)&&(e[n]=t.authHeaders[n])}Bi(e,t){const n=nu[e];return`${this.Fi}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}qi(e,t,n,r){return new Promise(((i,s)=>{const o=new Ur;o.listenOnce(Lr.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Pr.NO_ERROR:const t=o.getResponseJson();Hr("Connection","XHR received:",JSON.stringify(t)),i(t);break;case Pr.TIMEOUT:Hr("Connection",'RPC "'+e+'" timed out'),s(new ei(Xr.DEADLINE_EXCEEDED,"Request time out"));break;case Pr.HTTP_ERROR:const n=o.getStatus();if(Hr("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const e=o.getResponseJson().error;if(e&&e.status&&e.message){const t=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(Xr).indexOf(t)>=0?t:Xr.UNKNOWN}(e.status);s(new ei(t,e.message))}else s(new ei(Xr.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new ei(Xr.UNAVAILABLE,"Connection failed."));break;default:Jr()}}finally{Hr("Connection",'RPC "'+e+'" completed.')}}));const a=JSON.stringify(r);o.send(t,"POST",a,n,15)}))}ji(e,t){const n=[this.Fi,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=Rr(),i=Or(),s={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(s.xmlHttpFactory=new Mr({})),this.Ui(s.initMessageHeaders,t),(0,c.uI)()||(0,c.b$)()||(0,c.d)()||(0,c.w1)()||(0,c.Mn)()||(0,c.ru)()||(s.httpHeadersOverwriteParam="$httpHeaders");const o=n.join("");Hr("Connection","Creating WebChannel: "+o,s);const a=r.createWebChannel(o,s);let l=!1,u=!1;const h=new ru({vi:e=>{u?Hr("Connection","Not sending because WebChannel is closed:",e):(l||(Hr("Connection","Opening WebChannel transport."),a.open(),l=!0),Hr("Connection","WebChannel sending:",e),a.send(e))},Vi:()=>a.close()}),d=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return d(a,qr.EventType.OPEN,(()=>{u||Hr("Connection","WebChannel transport opened.")})),d(a,qr.EventType.CLOSE,(()=>{u||(u=!0,Hr("Connection","WebChannel transport closed"),h.$i())})),d(a,qr.EventType.ERROR,(e=>{u||(u=!0,Gr("Connection","WebChannel transport errored:",e),h.$i(new ei(Xr.UNAVAILABLE,"The operation could not be completed")))})),d(a,qr.EventType.MESSAGE,(e=>{var t;if(!u){const n=e.data[0];Yr(!!n);const r=n,i=r.error||(null===(t=r[0])||void 0===t?void 0:t.error);if(i){Hr("Connection","WebChannel received error:",i);const e=i.status;let t=function(e){const t=bo[e];if(void 0!==t)return Io(t)}(e),n=i.message;void 0===t&&(t=Xr.INTERNAL,n="Unknown error status: "+e+" with message "+i.message),u=!0,h.$i(new ei(t,n)),a.close()}else Hr("Connection","WebChannel received:",n),h.Oi(n)}})),d(i,Dr.STAT_EVENT,(e=>{e.stat===Fr.PROXY?Hr("Connection","Detected buffering proxy"):e.stat===Fr.NOPROXY&&Hr("Connection","Detected no buffering proxy")})),setTimeout((()=>{h.ki()}),0),h}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function su(){return"undefined"!=typeof window?window:null}function ou(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function au(e){return new Yo(e,!0)}class cu{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Oe=e,this.timerId=t,this.Qi=n,this.Wi=r,this.Gi=i,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(e){this.cancel();const t=Math.floor(this.zi+this.Zi()),n=Math.max(0,Date.now()-this.Ji),r=Math.max(0,t-n);r>0&&Hr("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.zi} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,r,(()=>(this.Ji=Date.now(),e()))),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){null!==this.Hi&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){null!==this.Hi&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(e,t,n,r,i,s){this.Oe=e,this.er=n,this.nr=r,this.credentialsProvider=i,this.listener=s,this.state=0,this.sr=0,this.ir=null,this.stream=null,this.rr=new cu(e,t)}ar(){return 1===this.state||2===this.state||4===this.state}cr(){return 2===this.state}start(){3!==this.state?this.auth():this.ur()}async stop(){this.ar()&&await this.close(0)}hr(){this.state=0,this.rr.reset()}lr(){this.cr()&&null===this.ir&&(this.ir=this.Oe.enqueueAfterDelay(this.er,6e4,(()=>this.dr())))}wr(e){this._r(),this.stream.send(e)}async dr(){if(this.cr())return this.close(0)}_r(){this.ir&&(this.ir.cancel(),this.ir=null)}async close(e,t){this._r(),this.rr.cancel(),this.sr++,3!==e?this.rr.reset():t&&t.code===Xr.RESOURCE_EXHAUSTED?(Kr(t.toString()),Kr("Using maximum backoff delay to prevent overloading the backend."),this.rr.Yi()):t&&t.code===Xr.UNAUTHENTICATED&&this.credentialsProvider.invalidateToken(),null!==this.stream&&(this.mr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ci(t)}mr(){}auth(){this.state=1;const e=this.gr(this.sr),t=this.sr;this.credentialsProvider.getToken().then((e=>{this.sr===t&&this.yr(e)}),(t=>{e((()=>{const e=new ei(Xr.UNKNOWN,"Fetching auth token failed: "+t.message);return this.pr(e)}))}))}yr(e){const t=this.gr(this.sr);this.stream=this.Er(e),this.stream.Si((()=>{t((()=>(this.state=2,this.listener.Si())))})),this.stream.Ci((e=>{t((()=>this.pr(e)))})),this.stream.onMessage((e=>{t((()=>this.onMessage(e)))}))}ur(){this.state=4,this.rr.Xi((async()=>{this.state=0,this.start()}))}pr(e){return Hr("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(3,e)}gr(e){return t=>{this.Oe.enqueueAndForget((()=>this.sr===e?t():(Hr("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class uu extends lu{constructor(e,t,n,r,i){super(e,"listen_stream_connection_backoff","listen_stream_idle",t,n,i),this.N=r}Er(e){return this.nr.ji("Listen",e)}onMessage(e){this.rr.reset();const t=da(this.N,e),n=function(e){if(!("targetChange"in e))return mi.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?mi.min():t.readTime?ea(t.readTime):mi.min()}(e);return this.listener.Tr(t,n)}Ir(e){const t={};t.database=aa(this.N),t.addTarget=function(e,t){let n;const r=t.target;return n=ss(r)?{documents:ga(e,r)}:{query:va(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=Zo(e,t.resumeToken):t.snapshotVersion.compareTo(mi.min())>0&&(n.readTime=Qo(e,t.snapshotVersion.toTimestamp())),n}(this.N,e);const n=wa(this.N,e);n&&(t.labels=n),this.wr(t)}Ar(e){const t={};t.database=aa(this.N),t.removeTarget=e,this.wr(t)}}class hu extends lu{constructor(e,t,n,r,i){super(e,"write_stream_connection_backoff","write_stream_idle",t,n,i),this.N=r,this.Rr=!1}get br(){return this.Rr}start(){this.Rr=!1,this.lastStreamToken=void 0,super.start()}mr(){this.Rr&&this.Pr([])}Er(e){return this.nr.ji("Write",e)}onMessage(e){if(Yr(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Rr){this.rr.reset();const t=ma(e.writeResults,e.commitTime),n=ea(e.commitTime);return this.listener.vr(n,t)}return Yr(!e.writeResults||0===e.writeResults.length),this.Rr=!0,this.listener.Vr()}Sr(){const e={};e.database=aa(this.N),this.wr(e)}Pr(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>fa(this.N,e)))};this.wr(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du extends class{}{constructor(e,t,n){super(),this.credentials=e,this.nr=t,this.N=n,this.Dr=!1}Cr(){if(this.Dr)throw new ei(Xr.FAILED_PRECONDITION,"The client has already been terminated.")}Li(e,t,n){return this.Cr(),this.credentials.getToken().then((r=>this.nr.Li(e,t,n,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Xr.UNAUTHENTICATED&&this.credentials.invalidateToken(),e):new ei(Xr.UNKNOWN,e.toString())}))}Ki(e,t,n){return this.Cr(),this.credentials.getToken().then((r=>this.nr.Ki(e,t,n,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Xr.UNAUTHENTICATED&&this.credentials.invalidateToken(),e):new ei(Xr.UNKNOWN,e.toString())}))}terminate(){this.Dr=!0}}class fu{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Nr=0,this.kr=null,this.$r=!0}Or(){0===this.Nr&&(this.Fr("Unknown"),this.kr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.kr=null,this.Mr("Backend didn't respond within 10 seconds."),this.Fr("Offline"),Promise.resolve()))))}Lr(e){"Online"===this.state?this.Fr("Unknown"):(this.Nr++,this.Nr>=1&&(this.Br(),this.Mr(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Fr("Offline")))}set(e){this.Br(),this.Nr=0,"Online"===e&&(this.$r=!1),this.Fr(e)}Fr(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Mr(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.$r?(Kr(t),this.$r=!1):Hr("OnlineStateTracker",t)}Br(){null!==this.kr&&(this.kr.cancel(),this.kr=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Ur=[],this.qr=new Map,this.Kr=new Set,this.jr=[],this.Qr=i,this.Qr.Ei((e=>{n.enqueueAndForget((async()=>{Iu(this)&&(Hr("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=Zr(e);t.Kr.add(4),await gu(t),t.Wr.set("Unknown"),t.Kr.delete(4),await mu(t)}(this))}))})),this.Wr=new fu(n,r)}}async function mu(e){if(Iu(e))for(const t of e.jr)await t(!0)}async function gu(e){for(const t of e.jr)await t(!1)}function vu(e,t){const n=Zr(e);n.qr.has(t.targetId)||(n.qr.set(t.targetId,t),Tu(n)?_u(n):Vu(n).cr()&&wu(n,t))}function yu(e,t){const n=Zr(e),r=Vu(n);n.qr.delete(t),r.cr()&&bu(n,t),0===n.qr.size&&(r.cr()?r.lr():Iu(n)&&n.Wr.set("Unknown"))}function wu(e,t){e.Gr.Y(t.targetId),Vu(e).Ir(t)}function bu(e,t){e.Gr.Y(t),Vu(e).Ar(t)}function _u(e){e.Gr=new Ho({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>e.qr.get(t)||null}),Vu(e).start(),e.Wr.Or()}function Tu(e){return Iu(e)&&!Vu(e).ar()&&e.qr.size>0}function Iu(e){return 0===Zr(e).Kr.size}function Eu(e){e.Gr=void 0}async function Su(e){e.qr.forEach(((t,n)=>{wu(e,t)}))}async function ku(e,t){Eu(e),Tu(e)?(e.Wr.Lr(t),_u(e)):e.Wr.set("Unknown")}async function xu(e,t,n){if(e.Wr.set("Online"),t instanceof $o&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.qr.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.qr.delete(r),e.Gr.removeTarget(r))}(e,t)}catch(n){Hr("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Cu(e,n)}else if(t instanceof jo?e.Gr.rt(t):t instanceof Bo?e.Gr.ft(t):e.Gr.ct(t),!n.isEqual(mi.min()))try{const t=await Tl(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.Gr._t(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.qr.get(r);i&&e.qr.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach((t=>{const n=e.qr.get(t);if(!n)return;e.qr.set(t,n.withResumeToken(Si.EMPTY_BYTE_STRING,n.snapshotVersion)),bu(e,t);const r=new pc(n.target,t,1,n.sequenceNumber);wu(e,r)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){Hr("RemoteStore","Failed to raise snapshot:",t),await Cu(e,t)}}async function Cu(e,t,n){if(!sc(t))throw t;e.Kr.add(1),await gu(e),e.Wr.set("Offline"),n||(n=()=>Tl(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{Hr("RemoteStore","Retrying IndexedDB access"),await n(),e.Kr.delete(1),await mu(e)}))}function Au(e,t){return t().catch((n=>Cu(e,n,t)))}async function Nu(e){const t=Zr(e),n=ju(t);let r=t.Ur.length>0?t.Ur[t.Ur.length-1].batchId:-1;for(;Ru(t);)try{const e=await Sl(t.localStore,r);if(null===e){0===t.Ur.length&&n.lr();break}r=e.batchId,Ou(t,e)}catch(e){await Cu(t,e)}Pu(t)&&Lu(t)}function Ru(e){return Iu(e)&&e.Ur.length<10}function Ou(e,t){e.Ur.push(t);const n=ju(e);n.cr()&&n.br&&n.Pr(t.mutations)}function Pu(e){return Iu(e)&&!ju(e).ar()&&e.Ur.length>0}function Lu(e){ju(e).start()}async function Du(e){ju(e).Sr()}async function Fu(e){const t=ju(e);for(const n of e.Ur)t.Pr(n.mutations)}async function Mu(e,t,n){const r=e.Ur.shift(),i=fc.from(r,t,n);await Au(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await Nu(e)}async function qu(e,t){t&&ju(e).br&&await async function(e,t){if(n=t.code,To(n)&&n!==Xr.ABORTED){const n=e.Ur.shift();ju(e).hr(),await Au(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await Nu(e)}var n}(e,t),Pu(e)&&Lu(e)}async function Uu(e,t){const n=Zr(e);t?(n.Kr.delete(2),await mu(n)):t||(n.Kr.add(2),await gu(n),n.Wr.set("Unknown"))}function Vu(e){return e.zr||(e.zr=function(e,t,n){const r=Zr(e);return r.Cr(),new uu(t,r.nr,r.credentials,r.N,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(e.datastore,e.asyncQueue,{Si:Su.bind(null,e),Ci:ku.bind(null,e),Tr:xu.bind(null,e)}),e.jr.push((async t=>{t?(e.zr.hr(),Tu(e)?_u(e):e.Wr.set("Unknown")):(await e.zr.stop(),Eu(e))}))),e.zr}function ju(e){return e.Hr||(e.Hr=function(e,t,n){const r=Zr(e);return r.Cr(),new hu(t,r.nr,r.credentials,r.N,n)}(e.datastore,e.asyncQueue,{Si:Du.bind(null,e),Ci:qu.bind(null,e),Vr:Fu.bind(null,e),vr:Mu.bind(null,e)}),e.jr.push((async t=>{t?(e.Hr.hr(),await Nu(e)):(await e.Hr.stop(),e.Ur.length>0&&(Hr("RemoteStore",`Stopping write stream with ${e.Ur.length} pending writes`),e.Ur=[]))}))),e.Hr
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Bu{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new ti,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new Bu(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new ei(Xr.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $u(e,t){if(Kr("AsyncQueue",`${t}: ${e}`),sc(e))return new ei(Xr.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(e){this.comparator=e?(t,n)=>e(t,n)||Fi.comparator(t.key,n.key):(e,t)=>Fi.comparator(e.key,t.key),this.keyedMap=Oo(),this.sortedSet=new Eo(this.comparator)}static emptySet(e){return new zu(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof zu))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new zu;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(){this.Jr=new Eo(Fi.comparator)}track(e){const t=e.doc.key,n=this.Jr.get(t);n?0!==e.type&&3===n.type?this.Jr=this.Jr.insert(t,e):3===e.type&&1!==n.type?this.Jr=this.Jr.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Jr=this.Jr.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Jr=this.Jr.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Jr=this.Jr.remove(t):1===e.type&&2===n.type?this.Jr=this.Jr.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Jr=this.Jr.insert(t,{type:2,doc:e.doc}):Jr():this.Jr=this.Jr.insert(t,e)}Yr(){const e=[];return this.Jr.inorderTraversal(((t,n)=>{e.push(n)})),e}}class Ku{constructor(e,t,n,r,i,s,o,a){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(e,t,n,r){const i=[];return t.forEach((e=>{i.push({type:0,doc:e})})),new Ku(e,t,zu.emptySet(t),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ps(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(){this.Xr=void 0,this.listeners=[]}}class Wu{constructor(){this.queries=new el((e=>Ls(e)),Ps),this.onlineState="Unknown",this.Zr=new Set}}async function Ju(e,t){const n=Zr(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Gu),i)try{s.Xr=await n.onListen(r)}catch(e){const n=$u(e,`Initialization of query '${Ds(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,s),s.listeners.push(t),t.eo(n.onlineState),s.Xr&&t.no(s.Xr)&&Xu(n)}async function Yu(e,t){const n=Zr(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Qu(e,t){const n=Zr(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.listeners)e.no(i)&&(r=!0);t.Xr=i}}r&&Xu(n)}function Zu(e,t,n){const r=Zr(e),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(t)}function Xu(e){e.Zr.forEach((e=>{e.next()}))}class eh{constructor(e,t,n){this.query=e,this.so=t,this.io=!1,this.ro=null,this.onlineState="Unknown",this.options=n||{}}no(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new Ku(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let t=!1;return this.io?this.oo(e)&&(this.so.next(e),t=!0):this.ao(e,this.onlineState)&&(this.co(e),t=!0),this.ro=e,t}onError(e){this.so.error(e)}eo(e){this.onlineState=e;let t=!1;return this.ro&&!this.io&&this.ao(this.ro,e)&&(this.co(this.ro),t=!0),t}ao(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.uo||!n)&&(!e.docs.isEmpty()||"Offline"===t)}oo(e){if(e.docChanges.length>0)return!0;const t=this.ro&&this.ro.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}co(e){e=Ku.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.io=!0,this.so.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(e,t){this.payload=e,this.byteLength=t}ho(){return"metadata"in this.payload}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(e){this.N=e}zn(e){return ia(this.N,e)}Hn(e){return e.metadata.exists?ua(this.N,e.document,!1):Xi.newNoDocument(this.zn(e.metadata.name),this.Jn(e.metadata.readTime))}Jn(e){return ea(e)}}class rh{constructor(e,t,n){this.lo=e,this.localStore=t,this.N=n,this.queries=[],this.documents=[],this.progress=ih(e)}fo(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;return e.payload.namedQuery?this.queries.push(e.payload.namedQuery):e.payload.documentMetadata?(this.documents.push({metadata:e.payload.documentMetadata}),e.payload.documentMetadata.exists||++t):e.payload.document&&(this.documents[this.documents.length-1].document=e.payload.document,++t),t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}wo(e){const t=new Map,n=new nh(this.N);for(const r of e)if(r.metadata.queries){const e=n.zn(r.metadata.name);for(const n of r.metadata.queries){const r=(t.get(n)||Fo()).add(e);t.set(n,r)}}return t}async complete(){const e=await Ol(this.localStore,new nh(this.N),this.documents,this.lo.id),t=this.wo(this.documents);for(const n of this.queries)await Pl(this.localStore,n,t.get(n.name));return this.progress.taskState="Success",new pl(Object.assign({},this.progress),e)}}function ih(e){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e){this.key=e}}class oh{constructor(e){this.key=e}}class ah{constructor(e,t){this.query=e,this._o=t,this.mo=null,this.current=!1,this.yo=Fo(),this.mutatedKeys=Fo(),this.po=Ms(e),this.Eo=new zu(this.po)}get To(){return this._o}Io(e,t){const n=t?t.Ao:new Hu,r=t?t.Eo:this.Eo;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a=Ss(this.query)&&r.size===this.query.limit?r.last():null,c=ks(this.query)&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const l=r.get(e),u=Fs(this.query,t)?t:null,h=!!l&&this.mutatedKeys.has(l.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;l&&u?l.data.isEqual(u.data)?h!==d&&(n.track({type:3,doc:u}),f=!0):this.Ro(l,u)||(n.track({type:2,doc:u}),f=!0,(a&&this.po(u,a)>0||c&&this.po(u,c)<0)&&(o=!0)):!l&&u?(n.track({type:0,doc:u}),f=!0):l&&!u&&(n.track({type:1,doc:l}),f=!0,(a||c)&&(o=!0)),f&&(u?(s=s.add(u),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))})),Ss(this.query)||ks(this.query))for(;s.size>this.query.limit;){const e=Ss(this.query)?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{Eo:s,Ao:n,Ln:o,mutatedKeys:i}}Ro(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.Eo;this.Eo=e.Eo,this.mutatedKeys=e.mutatedKeys;const i=e.Ao.Yr();i.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Jr()}};return n(e)-n(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.type,t.type)||this.po(e.doc,t.doc))),this.bo(n);const s=t?this.Po():[],o=0===this.yo.size&&this.current?1:0,a=o!==this.mo;return this.mo=o,0!==i.length||a?{snapshot:new Ku(this.query,e.Eo,r,i,e.mutatedKeys,0===o,a,!1),vo:s}:{vo:s}}eo(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Eo:this.Eo,Ao:new Hu,mutatedKeys:this.mutatedKeys,Ln:!1},!1)):{vo:[]}}Vo(e){return!this._o.has(e)&&!!this.Eo.has(e)&&!this.Eo.get(e).hasLocalMutations}bo(e){e&&(e.addedDocuments.forEach((e=>this._o=this._o.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this._o=this._o.delete(e))),this.current=e.current)}Po(){if(!this.current)return[];const e=this.yo;this.yo=Fo(),this.Eo.forEach((e=>{this.Vo(e.key)&&(this.yo=this.yo.add(e.key))}));const t=[];return e.forEach((e=>{this.yo.has(e)||t.push(new oh(e))})),this.yo.forEach((n=>{e.has(n)||t.push(new sh(n))})),t}So(e){this._o=e.Gn,this.yo=Fo();const t=this.Io(e.documents);return this.applyChanges(t,!0)}Do(){return Ku.fromInitialDocuments(this.query,this.Eo,this.mutatedKeys,0===this.mo)}}class ch{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class lh{constructor(e){this.key=e,this.Co=!1}}class uh{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.No={},this.xo=new el((e=>Ls(e)),Ps),this.ko=new Map,this.$o=new Set,this.Oo=new Eo(Fi.comparator),this.Fo=new Map,this.Mo=new Dl,this.Lo={},this.Bo=new Map,this.Uo=Bc.ie(),this.onlineState="Unknown",this.qo=void 0}get isPrimaryClient(){return!0===this.qo}}async function hh(e,t){const n=Vh(e);let r,i;const s=n.xo.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Do();else{const e=await kl(n.localStore,Rs(t)),s=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await dh(n,t,r,"current"===s),n.isPrimaryClient&&vu(n.remoteStore,e)}return i}async function dh(e,t,n,r){e.Ko=(t,n,r)=>async function(e,t,n,r){let i=t.view.Io(n);i.Ln&&(i=await Cl(e.localStore,t.query,!1).then((({documents:e})=>t.view.Io(e,i))));const s=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s);return Sh(e,t.targetId,o.vo),o.snapshot}(e,t,n,r);const i=await Cl(e.localStore,t,!0),s=new ah(t,i.Gn),o=s.Io(i.documents),a=Vo.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState),c=s.applyChanges(o,e.isPrimaryClient,a);Sh(e,n,c.vo);const l=new ch(t,n,s);return e.xo.set(t,l),e.ko.has(n)?e.ko.get(n).push(t):e.ko.set(n,[t]),c.snapshot}async function fh(e,t){const n=Zr(e),r=n.xo.get(t),i=n.ko.get(r.targetId);if(i.length>1)return n.ko.set(r.targetId,i.filter((e=>!Ps(e,t)))),void n.xo.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await xl(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),yu(n.remoteStore,r.targetId),Ih(n,r.targetId)})).catch(Gc)):(Ih(n,r.targetId),await xl(n.localStore,r.targetId,!0))}async function ph(e,t,n){const r=jh(e);try{const e=await function(e,t){const n=Zr(e),r=pi.now(),i=t.reduce(((e,t)=>e.add(t.key)),Fo());let s;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>n.Qn.Pn(e,i).next((i=>{s=i;const o=[];for(const e of t){const t=co(e,s.get(e.key));null!=t&&o.push(new fo(e.key,t,Zi(t.value.mapValue),ro.exists(!0)))}return n.In.addMutationBatch(e,r,o,t)})))).then((e=>(e.applyToLocalDocumentSet(s),{batchId:e.batchId,changes:s})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.Lo[e.currentUser.toKey()];r||(r=new Eo(hi)),r=r.insert(t,n),e.Lo[e.currentUser.toKey()]=r}(r,e.batchId,n),await Ch(r,e.changes),await Nu(r.remoteStore)}catch(e){const t=$u(e,"Failed to persist write");n.reject(t)}}async function mh(e,t){const n=Zr(e);try{const e=await Il(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.Fo.get(t);r&&(Yr(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.Co=!0:e.modifiedDocuments.size>0?Yr(r.Co):e.removedDocuments.size>0&&(Yr(r.Co),r.Co=!1))})),await Ch(n,e,t)}catch(e){await Gc(e)}}function gh(e,t,n){const r=Zr(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.xo.forEach(((n,r)=>{const i=r.view.eo(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=Zr(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const i of n.listeners)i.eo(t)&&(r=!0)})),r&&Xu(n)}(r.eventManager,t),e.length&&r.No.Tr(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function vh(e,t,n){const r=Zr(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Fo.get(t),s=i&&i.key;if(s){let e=new Eo(Fi.comparator);e=e.insert(s,Xi.newNoDocument(s,mi.min()));const n=Fo().add(s),i=new Uo(mi.min(),new Map,new xo(hi),e,n);await mh(r,i),r.Oo=r.Oo.remove(s),r.Fo.delete(t),xh(r)}else await xl(r.localStore,t,!1).then((()=>Ih(r,t,n))).catch(Gc)}async function yh(e,t){const n=Zr(e),r=t.batch.batchId;try{const e=await _l(n.localStore,t);Th(n,r,null),_h(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ch(n,e)}catch(e){await Gc(e)}}async function wh(e,t,n){const r=Zr(e);try{const e=await function(e,t){const n=Zr(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.In.lookupMutationBatch(e,t).next((t=>(Yr(null!==t),r=t.keys(),n.In.removeMutationBatch(e,t)))).next((()=>n.In.performConsistencyCheck(e))).next((()=>n.Qn.Pn(e,r)))}))}(r.localStore,t);Th(r,t,n),_h(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Ch(r,e)}catch(n){await Gc(n)}}async function bh(e,t){const n=Zr(e);Iu(n.remoteStore)||Hr("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const e=await function(e){const t=Zr(e);return t.persistence.runTransaction("Get highest unacknowledged batch id","readonly",(e=>t.In.getHighestUnacknowledgedBatchId(e)))}(n.localStore);if(-1===e)return void t.resolve();const r=n.Bo.get(e)||[];r.push(t),n.Bo.set(e,r)}catch(e){const n=$u(e,"Initialization of waitForPendingWrites() operation failed");t.reject(n)}}function _h(e,t){(e.Bo.get(t)||[]).forEach((e=>{e.resolve()})),e.Bo.delete(t)}function Th(e,t,n){const r=Zr(e);let i=r.Lo[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.Lo[r.currentUser.toKey()]=i}}function Ih(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.ko.get(t))e.xo.delete(r),n&&e.No.jo(r,n);e.ko.delete(t),e.isPrimaryClient&&e.Mo.cs(t).forEach((t=>{e.Mo.containsKey(t)||Eh(e,t)}))}function Eh(e,t){e.$o.delete(t.path.canonicalString());const n=e.Oo.get(t);null!==n&&(yu(e.remoteStore,n),e.Oo=e.Oo.remove(t),e.Fo.delete(n),xh(e))}function Sh(e,t,n){for(const r of n)r instanceof sh?(e.Mo.addReference(r.key,t),kh(e,r)):r instanceof oh?(Hr("SyncEngine","Document no longer in limbo: "+r.key),e.Mo.removeReference(r.key,t),e.Mo.containsKey(r.key)||Eh(e,r.key)):Jr()}function kh(e,t){const n=t.key,r=n.path.canonicalString();e.Oo.get(n)||e.$o.has(r)||(Hr("SyncEngine","New document in limbo: "+n),e.$o.add(r),xh(e))}function xh(e){for(;e.$o.size>0&&e.Oo.size<e.maxConcurrentLimboResolutions;){const t=e.$o.values().next().value;e.$o.delete(t);const n=new Fi(bi.fromString(t)),r=e.Uo.next();e.Fo.set(r,new lh(n)),e.Oo=e.Oo.insert(n,r),vu(e.remoteStore,new pc(Rs(Es(n.path)),r,2,ci.T))}}async function Ch(e,t,n){const r=Zr(e),i=[],s=[],o=[];r.xo.isEmpty()||(r.xo.forEach(((e,a)=>{o.push(r.Ko(a,t,n).then((e=>{if(e){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,e.fromCache?"not-current":"current"),i.push(e);const t=gl.kn(a.targetId,e);s.push(t)}})))})),await Promise.all(o),r.No.Tr(i),await async function(e,t){const n=Zr(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>ec.forEach(t,(t=>ec.forEach(t.Nn,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>ec.forEach(t.xn,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!sc(e))throw e;Hr("LocalStore","Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=n.Un.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.Un=n.Un.insert(e,i)}}}(r.localStore,s))}async function Ah(e,t){const n=Zr(e);if(!n.currentUser.isEqual(t)){Hr("SyncEngine","User change. New user:",t.toKey());const e=await bl(n.localStore,t);n.currentUser=t,function(e,t){e.Bo.forEach((e=>{e.forEach((e=>{e.reject(new ei(Xr.CANCELLED,t))}))})),e.Bo.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Ch(n,e.Wn)}}function Nh(e,t){const n=Zr(e),r=n.Fo.get(t);if(r&&r.Co)return Fo().add(r.key);{let e=Fo();const r=n.ko.get(t);if(!r)return e;for(const t of r){const r=n.xo.get(t);e=e.unionWith(r.view.To)}return e}}async function Rh(e,t){const n=Zr(e),r=await Cl(n.localStore,t.query,!0),i=t.view.So(r);return n.isPrimaryClient&&Sh(n,t.targetId,i.vo),i}async function Oh(e){const t=Zr(e);return Nl(t.localStore).then((e=>Ch(t,e)))}async function Ph(e,t,n,r){const i=Zr(e),s=await function(e,t){const n=Zr(e),r=Zr(n.In);return n.persistence.runTransaction("Lookup mutation documents","readonly",(e=>r.Xt(e,t).next((t=>t?n.Qn.Pn(e,t):ec.resolve(null)))))}(i.localStore,t);null!==s?("pending"===n?await Nu(i.remoteStore):"acknowledged"===n||"rejected"===n?(Th(i,t,r||null),_h(i,t),function(e,t){Zr(Zr(e).In).te(t)}(i.localStore,t)):Jr(),await Ch(i,s)):Hr("SyncEngine","Cannot apply mutation batch with id: "+t)}async function Lh(e,t){const n=Zr(e);if(Vh(n),jh(n),!0===t&&!0!==n.qo){const e=n.sharedClientState.getAllActiveQueryTargets(),t=await Dh(n,e.toArray());n.qo=!0,await Uu(n.remoteStore,!0);for(const r of t)vu(n.remoteStore,r)}else if(!1===t&&!1!==n.qo){const e=[];let t=Promise.resolve();n.ko.forEach(((r,i)=>{n.sharedClientState.isLocalQueryTarget(i)?e.push(i):t=t.then((()=>(Ih(n,i),xl(n.localStore,i,!0)))),yu(n.remoteStore,i)})),await t,await Dh(n,e),function(e){const t=Zr(e);t.Fo.forEach(((e,n)=>{yu(t.remoteStore,n)})),t.Mo.us(),t.Fo=new Map,t.Oo=new Eo(Fi.comparator)}(n),n.qo=!1,await Uu(n.remoteStore,!1)}}async function Dh(e,t,n){const r=Zr(e),i=[],s=[];for(const o of t){let e;const t=r.ko.get(o);if(t&&0!==t.length){e=await kl(r.localStore,Rs(t[0]));for(const e of t){const t=r.xo.get(e),n=await Rh(r,t);n.snapshot&&s.push(n.snapshot)}}else{const t=await Al(r.localStore,o);e=await kl(r.localStore,t),await dh(r,Fh(t),o,!1)}i.push(e)}return r.No.Tr(s),i}function Fh(e){return Is(e.path,e.collectionGroup,e.orderBy,e.filters,e.limit,"F",e.startAt,e.endAt)}function Mh(e){const t=Zr(e);return Zr(Zr(t.localStore).persistence).pn()}async function qh(e,t,n,r){const i=Zr(e);if(i.qo)Hr("SyncEngine","Ignoring unexpected query state notification.");else if(i.ko.has(t))switch(n){case"current":case"not-current":{const e=await Nl(i.localStore),r=Uo.createSynthesizedRemoteEventForCurrentChange(t,"current"===n);await Ch(i,e,r);break}case"rejected":await xl(i.localStore,t,!0),Ih(i,t,r);break;default:Jr()}}async function Uh(e,t,n){const r=Vh(e);if(r.qo){for(const e of t){if(r.ko.has(e)){Hr("SyncEngine","Adding an already active target "+e);continue}const t=await Al(r.localStore,e),n=await kl(r.localStore,t);await dh(r,Fh(t),n.targetId,!1),vu(r.remoteStore,n)}for(const e of n)r.ko.has(e)&&await xl(r.localStore,e,!1).then((()=>{yu(r.remoteStore,e),Ih(r,e)})).catch(Gc)}}function Vh(e){const t=Zr(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=mh.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Nh.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=vh.bind(null,t),t.No.Tr=Qu.bind(null,t.eventManager),t.No.jo=Zu.bind(null,t.eventManager),t}function jh(e){const t=Zr(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=yh.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=wh.bind(null,t),t}function Bh(e,t,n){const r=Zr(e);(async function(e,t,n){try{const r=await t.getMetadata();if(await function(e,t){const n=Zr(e),r=ea(t.createTime);return n.persistence.runTransaction("hasNewerBundle","readonly",(e=>n.Je.getBundleMetadata(e,t.id))).then((e=>!!e&&e.createTime.compareTo(r)>=0))}(e.localStore,r))return await t.close(),void n._completeWith(function(e){return{taskState:"Success",documentsLoaded:e.totalDocuments,bytesLoaded:e.totalBytes,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}(r));n._updateProgress(ih(r));const i=new rh(r,e.localStore,t.N);let s=await t.Qo();for(;s;){const e=await i.fo(s);e&&n._updateProgress(e),s=await t.Qo()}const o=await i.complete();await Ch(e,o.Tn,void 0),await function(e,t){const n=Zr(e);return n.persistence.runTransaction("Save bundle","readwrite",(e=>n.Je.saveBundleMetadata(e,t)))}(e.localStore,r),n._completeWith(o.progress)}catch(e){Gr("SyncEngine",`Loading bundle failed with ${e}`),n._failWith(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)(r,t,n).then((()=>{r.sharedClientState.notifyBundleLoaded()}))}class $h{constructor(){this.synchronizeTabs=!1}async initialize(e){this.N=au(e.databaseInfo.databaseId),this.sharedClientState=this.Wo(e),this.persistence=this.Go(e),await this.persistence.start(),this.gcScheduler=this.zo(e),this.localStore=this.Ho(e)}zo(e){return null}Ho(e){return wl(this.persistence,new vl,e.initialUser,this.N)}Go(e){return new jl($l.Ns,this.N)}Wo(e){return new Xl}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class zh extends $h{constructor(e,t,n){super(),this.Jo=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await Rl(this.localStore),await this.Jo.initialize(this,e),await jh(this.Jo.syncEngine),await Nu(this.Jo.remoteStore),await this.persistence.nn((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(this.localStore),Promise.resolve())))}Ho(e){return wl(this.persistence,new vl,e.initialUser,this.N)}zo(e){const t=this.persistence.referenceDelegate.garbageCollector;return new Yc(t,e.asyncQueue)}Go(e){const t=fl(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?Lc.withCacheSize(this.cacheSizeBytes):Lc.DEFAULT;return new ul(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,su(),ou(),this.N,this.sharedClientState,!!this.forceOwnership)}Wo(e){return new Xl}}class Hh extends zh{constructor(e,t){super(e,t,!1),this.Jo=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Jo.syncEngine;this.sharedClientState instanceof Zl&&(this.sharedClientState.syncEngine={_i:Ph.bind(null,t),mi:qh.bind(null,t),gi:Uh.bind(null,t),pn:Mh.bind(null,t),wi:Oh.bind(null,t)},await this.sharedClientState.start()),await this.persistence.nn((async e=>{await Lh(this.Jo.syncEngine,e),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start(this.localStore):e||this.gcScheduler.stop())}))}Wo(e){const t=su();if(!Zl.bt(t))throw new ei(Xr.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=fl(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Zl(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class Kh{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>gh(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ah.bind(null,this.syncEngine),await Uu(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Wu}createDatastore(e){const t=au(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new iu(r));var r;return function(e,t,n){return new du(e,t,n)}(e.credentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>gh(this.syncEngine,e,0),s=tu.bt()?new tu:new eu,new pu(t,n,r,i,s);var t,n,r,i,s}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new uh(e,t,n,r,i,s);return o&&(a.qo=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=Zr(e);Hr("RemoteStore","RemoteStore shutting down."),t.Kr.add(5),await gu(t),t.Qr.shutdown(),t.Wr.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gh(e,t=10240){let n=0;return{async read(){if(n<e.byteLength){const r={value:e.slice(n,n+t),done:!1};return n+=t,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Yo(this.observer.next,e)}error(e){this.observer.error?this.Yo(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Xo(){this.muted=!0}Yo(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(e,t){this.Zo=e,this.N=t,this.metadata=new ti,this.buffer=new Uint8Array,this.ta=new TextDecoder("utf-8"),this.ea().then((e=>{e&&e.ho()?this.metadata.resolve(e.payload.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is\n             ${JSON.stringify(null==e?void 0:e.payload)}`))}),(e=>this.metadata.reject(e)))}close(){return this.Zo.cancel()}async getMetadata(){return this.metadata.promise}async Qo(){return await this.getMetadata(),this.ea()}async ea(){const e=await this.na();if(null===e)return null;const t=this.ta.decode(e),n=Number(t);isNaN(n)&&this.sa(`length string (${t}) is not valid number`);const r=await this.ia(n);return new th(JSON.parse(r),e.length+n)}ra(){return this.buffer.findIndex((e=>e==="{".charCodeAt(0)))}async na(){for(;this.ra()<0;)if(await this.oa())break;if(0===this.buffer.length)return null;const e=this.ra();e<0&&this.sa("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async ia(e){for(;this.buffer.length<e;)await this.oa()&&this.sa("Reached the end of bundle when more is expected.");const t=this.ta.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}sa(e){throw this.Zo.cancel(),new Error(`Invalid bundle format: ${e}`)}async oa(){const e=await this.Zo.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new ei(Xr.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(e,t){const n=Zr(e),r=aa(n.N)+"/documents",i={documents:t.map((e=>ra(n.N,e)))},s=await n.Ki("BatchGetDocuments",r,i),o=new Map;s.forEach((e=>{const t=ha(n.N,e);o.set(t.key.toString(),t)}));const a=[];return t.forEach((e=>{const t=o.get(e.toString());Yr(!!t),a.push(t)})),a}(this.datastore,e);return t.forEach((e=>this.recordVersion(e))),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(e){this.lastWriteError=e}this.writtenDocs.add(e.toString())}delete(e){this.write(new vo(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach((t=>{e.delete(t.key.toString())})),e.forEach(((e,t)=>{const n=Fi.fromPath(t);this.mutations.push(new yo(n,this.precondition(n)))})),await async function(e,t){const n=Zr(e),r=aa(n.N)+"/documents",i={writes:t.map((e=>fa(n.N,e)))};await n.Li("Commit",r,i)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw Jr();t=mi.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new ei(Xr.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?ro.updateTime(t):ro.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(mi.min()))throw new ei(Xr.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return ro.updateTime(t)}return ro.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(e,t,n,r){this.asyncQueue=e,this.datastore=t,this.updateFunction=n,this.deferred=r,this.aa=5,this.rr=new cu(this.asyncQueue,"transaction_retry")}run(){this.aa-=1,this.ca()}ca(){this.rr.Xi((async()=>{const e=new Yh(this.datastore),t=this.ua(e);t&&t.then((t=>{this.asyncQueue.enqueueAndForget((()=>e.commit().then((()=>{this.deferred.resolve(t)})).catch((e=>{this.ha(e)}))))})).catch((e=>{this.ha(e)}))}))}ua(e){try{const t=this.updateFunction(e);return!Pi(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}ha(e){this.aa>0&&this.la(e)?(this.aa-=1,this.asyncQueue.enqueueAndForget((()=>(this.ca(),Promise.resolve())))):this.deferred.reject(e)}la(e){if("FirebaseError"===e.name){const t=e.code;return"aborted"===t||"failed-precondition"===t||!To(t)}return!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(e,t,n){this.credentials=e,this.asyncQueue=t,this.databaseInfo=n,this.user=Vr.UNAUTHENTICATED,this.clientId=ui.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(t,(async e=>{Hr("FirestoreClient","Received user=",e.uid),await this.credentialListener(e),this.user=e}))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.credentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ei(Xr.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ti;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),e.resolve()}catch(t){const n=$u(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function Xh(e,t){e.asyncQueue.verifyOperationInProgress(),Hr("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await bl(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e.offlineComponents=t}async function ed(e,t){e.asyncQueue.verifyOperationInProgress();const n=await td(e);Hr("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>async function(e,t){const n=Zr(e);n.asyncQueue.verifyOperationInProgress(),Hr("RemoteStore","RemoteStore received new credentials");const r=Iu(n);n.Kr.add(3),await gu(n),r&&n.Wr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Kr.delete(3),await mu(n)}(t.remoteStore,e))),e.onlineComponents=t}async function td(e){return e.offlineComponents||(Hr("FirestoreClient","Using default OfflineComponentProvider"),await Xh(e,new $h)),e.offlineComponents}async function nd(e){return e.onlineComponents||(Hr("FirestoreClient","Using default OnlineComponentProvider"),await ed(e,new Kh)),e.onlineComponents}function rd(e){return td(e).then((e=>e.persistence))}function id(e){return td(e).then((e=>e.localStore))}function sd(e){return nd(e).then((e=>e.remoteStore))}function od(e){return nd(e).then((e=>e.syncEngine))}async function ad(e){const t=await nd(e),n=t.eventManager;return n.onListen=hh.bind(null,t.syncEngine),n.onUnlisten=fh.bind(null,t.syncEngine),n}function cd(e){return e.asyncQueue.enqueue((async()=>{const t=await rd(e),n=await sd(e);return t.setNetworkEnabled(!0),function(e){const t=Zr(e);return t.Kr.delete(0),mu(t)}(n)}))}function ld(e){return e.asyncQueue.enqueue((async()=>{const t=await rd(e),n=await sd(e);return t.setNetworkEnabled(!1),async function(e){const t=Zr(e);t.Kr.add(0),await gu(t),t.Wr.set("Offline")}(n)}))}function ud(e,t){const n=new ti;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){try{const r=await function(e,t){const n=Zr(e);return n.persistence.runTransaction("read document","readonly",(e=>n.Qn.An(e,t)))}(e,t);r.isFoundDocument()?n.resolve(r):r.isNoDocument()?n.resolve(null):n.reject(new ei(Xr.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(e){const r=$u(e,`Failed to get document '${t} from cache`);n.reject(r)}}(await id(e),t,n))),n.promise}function hd(e,t,n={}){const r=new ti;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new Wh({next:s=>{t.enqueueAndForget((()=>Yu(e,o)));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new ei(Xr.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new ei(Xr.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),o=new eh(Es(n.path),s,{includeMetadataChanges:!0,uo:!0});return Ju(e,o)}(await ad(e),e.asyncQueue,t,n,r))),r.promise}function dd(e,t){const n=new ti;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){try{const r=await Cl(e,t,!0),i=new ah(t,r.Gn),s=i.Io(r.documents),o=i.applyChanges(s,!1);n.resolve(o.snapshot)}catch(e){const r=$u(e,`Failed to execute query '${t} against cache`);n.reject(r)}}(await id(e),t,n))),n.promise}function fd(e,t,n={}){const r=new ti;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new Wh({next:n=>{t.enqueueAndForget((()=>Yu(e,o))),n.fromCache&&"server"===r.source?i.reject(new ei(Xr.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),o=new eh(n,s,{includeMetadataChanges:!0,uo:!0});return Ju(e,o)}(await ad(e),e.asyncQueue,t,n,r))),r.promise}function pd(e,t){const n=new Wh(t);return e.asyncQueue.enqueueAndForget((async()=>function(e,t){Zr(e).Zr.add(t),t.next()}(await ad(e),n))),()=>{n.Xo(),e.asyncQueue.enqueueAndForget((async()=>function(e,t){Zr(e).Zr.delete(t)}(await ad(e),n)))}}function md(e,t){const n=new ti;return e.asyncQueue.enqueueAndForget((async()=>{const r=await function(e){return nd(e).then((e=>e.datastore))}(e);new Qh(e.asyncQueue,r,t,n).run()})),n.promise}function gd(e,t,n,r){const i=function(e,t){let n;return n="string"==typeof e?(new TextEncoder).encode(e):e,function(e,t){return new Jh(e,t)}(function(e,t){if(e instanceof Uint8Array)return Gh(e,t);if(e instanceof ArrayBuffer)return Gh(new Uint8Array(e),t);if(e instanceof ReadableStream)return e.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(n),t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n,au(t));e.asyncQueue.enqueueAndForget((async()=>{Bh(await od(e),i,r)}))}function vd(e,t){return e.asyncQueue.enqueue((async()=>function(e,t){const n=Zr(e);return n.persistence.runTransaction("Get named query","readonly",(e=>n.Je.getNamedQuery(e,t)))}(await id(e),t)))}class yd{constructor(e,t,n,r,i,s,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class wd{constructor(e,t){this.projectId=e,this.database=t||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof wd&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bd=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _d(e,t,n){if(!n)throw new ei(Xr.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Td(e,t,n,r){if(!0===t&&!0===r)throw new ei(Xr.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Id(e){if(!Fi.isDocumentKey(e))throw new ei(Xr.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Ed(e){if(Fi.isDocumentKey(e))throw new ei(Xr.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Sd(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":Jr()}function kd(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new ei(Xr.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Sd(e);throw new ei(Xr.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function xd(e,t){if(t<=0)throw new ei(Xr.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new ei(Xr.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new ei(Xr.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Td("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(e,t){this._credentials=t,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Cd({}),this._settingsFrozen=!1,e instanceof wd?this._databaseId=e:(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new ei(Xr.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new wd(e.options.projectId)}(e))}get app(){if(!this._app)throw new ei(Xr.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new ei(Xr.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Cd(e),void 0!==e.credentials&&(this._credentials=function(e){if(!e)return new ri;switch(e.type){case"gapi":const t=e.client;return Yr(!("object"!=typeof t||null===t||!t.auth||!t.auth.getAuthHeaderValueForFirstParty)),new ai(t,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new ei(Xr.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=bd.get(e);t&&(Hr("ComponentProvider","Removing Datastore"),bd.delete(e),t.terminate())}(this),Promise.resolve()}}function Nd(e,t,n,r={}){var i;const s=(e=kd(e,Ad))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==t&&Gr("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=Vr.MOCK_USER;else{t=(0,c.Sg)(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new ei(Xr.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Vr(s)}e._credentials=new ii(new ni(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Pd(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Rd(this.firestore,e,this._key)}}class Od{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Od(this.firestore,e,this._query)}}class Pd extends Od{constructor(e,t,n){super(e,t,Es(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Rd(this.firestore,null,new Fi(e))}withConverter(e){return new Pd(this.firestore,e,this._path)}}function Ld(e,t,...n){if(e=(0,c.m9)(e),_d("collection","path",t),e instanceof Ad){const r=bi.fromString(t,...n);return Ed(r),new Pd(e,null,r)}{if(!(e instanceof Rd||e instanceof Pd))throw new ei(Xr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(bi.fromString(t,...n));return Ed(r),new Pd(e.firestore,null,r)}}function Dd(e,t){if(e=kd(e,Ad),_d("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new ei(Xr.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Od(e,null,function(e){return new Ts(bi.emptyPath(),e)}(t))}function Fd(e,t,...n){if(e=(0,c.m9)(e),1===arguments.length&&(t=ui.I()),_d("doc","path",t),e instanceof Ad){const r=bi.fromString(t,...n);return Id(r),new Rd(e,null,new Fi(r))}{if(!(e instanceof Rd||e instanceof Pd))throw new ei(Xr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(bi.fromString(t,...n));return Id(r),new Rd(e.firestore,e instanceof Pd?e.converter:null,new Fi(r))}}function Md(e,t){return e=(0,c.m9)(e),t=(0,c.m9)(t),(e instanceof Rd||e instanceof Pd)&&(t instanceof Rd||t instanceof Pd)&&e.firestore===t.firestore&&e.path===t.path&&e.converter===t.converter}function qd(e,t){return e=(0,c.m9)(e),t=(0,c.m9)(t),e instanceof Od&&t instanceof Od&&e.firestore===t.firestore&&Ps(e._query,t._query)&&e.converter===t.converter
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Ud{constructor(){this.fa=Promise.resolve(),this.da=[],this.wa=!1,this._a=[],this.ma=null,this.ga=!1,this.ya=!1,this.pa=[],this.rr=new cu(this,"async_queue_retry"),this.Ea=()=>{const e=ou();e&&Hr("AsyncQueue","Visibility state changed to "+e.visibilityState),this.rr.tr()};const e=ou();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Ea)}get isShuttingDown(){return this.wa}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ta(),this.Ia(e)}enterRestrictedMode(e){if(!this.wa){this.wa=!0,this.ya=e||!1;const t=ou();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Ea)}}enqueue(e){if(this.Ta(),this.wa)return new Promise((()=>{}));const t=new ti;return this.Ia((()=>this.wa&&this.ya?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.da.push(e),this.Aa())))}async Aa(){if(0!==this.da.length){try{await this.da[0](),this.da.shift(),this.rr.reset()}catch(e){if(!sc(e))throw e;Hr("AsyncQueue","Operation failed with retryable error: "+e)}this.da.length>0&&this.rr.Xi((()=>this.Aa()))}}Ia(e){const t=this.fa.then((()=>(this.ga=!0,e().catch((e=>{throw this.ma=e,this.ga=!1,Kr("INTERNAL UNHANDLED ERROR: ",function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)),e})).then((e=>(this.ga=!1,e))))));return this.fa=t,t}enqueueAfterDelay(e,t,n){this.Ta(),this.pa.indexOf(e)>-1&&(t=0);const r=Bu.createAndSchedule(this,e,t,n,(e=>this.Ra(e)));return this._a.push(r),r}Ta(){this.ma&&Jr()}verifyOperationInProgress(){}async ba(){let e;do{e=this.fa,await e}while(e!==this.fa)}Pa(e){for(const t of this._a)if(t.timerId===e)return!0;return!1}va(e){return this.ba().then((()=>{this._a.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this._a)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.ba()}))}Va(e){this.pa.push(e)}Ra(e){const t=this._a.indexOf(e);this._a.splice(t,1)}}function Vd(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"==typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,["next","error","complete"])}class jd{constructor(){this._progressObserver={},this._taskCompletionResolver=new ti,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bd=-1;class $d extends Ad{constructor(e,t){super(e,t),this.type="firestore",this._queue=new Ud,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Hd(this),this._firestoreClient.terminate()}}function zd(e){return e._firestoreClient||Hd(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Hd(e){var t;const n=e._freezeSettings(),r=function(e,t,n,r){return new yd(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new Zh(e._credentials,e._queue,r)}function Kd(e,t){tf(e=kd(e,$d));const n=zd(e),r=e._freezeSettings(),i=new Kh;return Wd(n,i,new zh(i,r.cacheSizeBytes,null==t?void 0:t.forceOwnership))}function Gd(e){tf(e=kd(e,$d));const t=zd(e),n=e._freezeSettings(),r=new Kh;return Wd(t,r,new Hh(r,n.cacheSizeBytes))}function Wd(e,t,n){const r=new ti;return e.asyncQueue.enqueue((async()=>{try{await Xh(e,n),await ed(e,t),r.resolve()}catch(e){if(!function(e){return"FirebaseError"===e.name?e.code===Xr.FAILED_PRECONDITION||e.code===Xr.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||(22===e.code||20===e.code||11===e.code)}(e))throw e;console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+e),r.reject(e)}})).then((()=>r.promise))}function Jd(e){if(e._initialized&&!e._terminated)throw new ei(Xr.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const t=new ti;return e._queue.enqueueAndForgetEvenWhileRestricted((async()=>{try{await async function(e){if(!nc.bt())return Promise.resolve();const t=e+"main";await nc.delete(t)}(fl(e._databaseId,e._persistenceKey)),t.resolve()}catch(e){t.reject(e)}})),t.promise}function Yd(e){return function(e){const t=new ti;return e.asyncQueue.enqueueAndForget((async()=>bh(await od(e),t))),t.promise}(zd(e=kd(e,$d)))}function Qd(e){return cd(zd(e=kd(e,$d)))}function Zd(e){return ld(zd(e=kd(e,$d)))}function Xd(e,t){const n=zd(e=kd(e,$d)),r=new jd;return gd(n,e._databaseId,t,r),r}function ef(e,t){return vd(zd(e=kd(e,$d)),t).then((t=>t?new Od(e,null,t.query):null))}function tf(e){if(e._initialized||e._terminated)throw new ei(Xr.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new ei(Xr.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ti(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rf{constructor(e){this._byteString=e}static fromBase64String(e){try{return new rf(Si.fromBase64String(e))}catch(e){throw new ei(Xr.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new rf(Si.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ei(Xr.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ei(Xr.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return hi(this._lat,e._lat)||hi(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const af=/^__.*__$/;class cf{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new fo(e,this.data,this.fieldMask,t,this.fieldTransforms):new ho(e,this.data,t,this.fieldTransforms)}}class lf{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new fo(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function uf(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Jr()}}class hf{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.N=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Sa(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Da(){return this.settings.Da}Ca(e){return new hf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.N,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Na(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Ca({path:n,xa:!1});return r.ka(e),r}$a(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Ca({path:n,xa:!1});return r.Sa(),r}Oa(e){return this.Ca({path:void 0,xa:!0})}Fa(e){return Rf(e,this.settings.methodName,this.settings.Ma||!1,this.path,this.settings.La)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}Sa(){if(this.path)for(let e=0;e<this.path.length;e++)this.ka(this.path.get(e))}ka(e){if(0===e.length)throw this.Fa("Document fields must not be empty");if(uf(this.Da)&&af.test(e))throw this.Fa('Document fields cannot begin and end with "__"')}}class df{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.N=n||au(e)}Ba(e,t,n,r=!1){return new hf({Da:e,methodName:t,La:n,path:Ti.emptyPath(),xa:!1,Ma:r},this.databaseId,this.N,this.ignoreUndefinedProperties)}}function ff(e){const t=e._freezeSettings(),n=au(e._databaseId);return new df(e._databaseId,!!t.ignoreUndefinedProperties,n)}function pf(e,t,n,r,i,s={}){const o=e.Ba(s.merge||s.mergeFields?2:0,t,n,i);xf("Data must be an object, but it was:",o,r);const a=Sf(r,o);let c,l;if(s.merge)c=new Ii(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=Cf(t,r,n);if(!o.contains(i))throw new ei(Xr.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Of(e,i)||e.push(i)}c=new Ii(e),l=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,l=o.fieldTransforms;return new cf(new Qi(a),c,l)}class mf extends sf{_toFieldTransform(e){if(2!==e.Da)throw 1===e.Da?e.Fa(`${this._methodName}() can only appear at the top level of your update data`):e.Fa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof mf}}function gf(e,t,n){return new hf({Da:3,La:t.settings.La,methodName:e._methodName,xa:n},t.databaseId,t.N,t.ignoreUndefinedProperties)}class vf extends sf{_toFieldTransform(e){return new eo(e.path,new Ks)}isEqual(e){return e instanceof vf}}class yf extends sf{constructor(e,t){super(e),this.Ua=t}_toFieldTransform(e){const t=gf(this,e,!0),n=this.Ua.map((e=>Ef(e,t))),r=new Gs(n);return new eo(e.path,r)}isEqual(e){return this===e}}class wf extends sf{constructor(e,t){super(e),this.Ua=t}_toFieldTransform(e){const t=gf(this,e,!0),n=this.Ua.map((e=>Ef(e,t))),r=new Js(n);return new eo(e.path,r)}isEqual(e){return this===e}}class bf extends sf{constructor(e,t){super(e),this.qa=t}_toFieldTransform(e){const t=new Qs(e.N,js(e.N,this.qa));return new eo(e.path,t)}isEqual(e){return this===e}}function _f(e,t,n,r){const i=e.Ba(1,t,n);xf("Data must be an object, but it was:",i,r);const s=[],o=Qi.empty();vi(r,((e,r)=>{const a=Nf(t,e,n);r=(0,c.m9)(r);const l=i.$a(a);if(r instanceof mf)s.push(a);else{const e=Ef(r,l);null!=e&&(s.push(a),o.set(a,e))}}));const a=new Ii(s);return new lf(o,a,i.fieldTransforms)}function Tf(e,t,n,r,i,s){const o=e.Ba(1,t,n),a=[Cf(t,r,n)],l=[i];if(s.length%2!=0)throw new ei(Xr.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let c=0;c<s.length;c+=2)a.push(Cf(t,s[c])),l.push(s[c+1]);const u=[],h=Qi.empty();for(let f=a.length-1;f>=0;--f)if(!Of(u,a[f])){const e=a[f];let t=l[f];t=(0,c.m9)(t);const n=o.$a(e);if(t instanceof mf)u.push(e);else{const r=Ef(t,n);null!=r&&(u.push(e),h.set(e,r))}}const d=new Ii(u);return new lf(h,d,o.fieldTransforms)}function If(e,t,n,r=!1){return Ef(n,e.Ba(r?4:3,t))}function Ef(e,t){if(kf(e=(0,c.m9)(e)))return xf("Unsupported field value:",t,e),Sf(e,t);if(e instanceof sf)return function(e,t){if(!uf(t.Da))throw t.Fa(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Fa(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.xa&&4!==t.Da)throw t.Fa("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=Ef(i,t.Oa(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,c.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return js(t.N,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=pi.fromDate(e);return{timestampValue:Qo(t.N,n)}}if(e instanceof pi){const n=new pi(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Qo(t.N,n)}}if(e instanceof of)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof rf)return{bytesValue:Zo(t.N,e._byteString)};if(e instanceof Rd){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.Fa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:ta(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.Fa(`Unsupported field value: ${Sd(e)}`)}(e,t)}function Sf(e,t){const n={};return yi(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):vi(e,((e,r)=>{const i=Ef(r,t.Na(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function kf(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof pi||e instanceof of||e instanceof rf||e instanceof Rd||e instanceof sf)}function xf(e,t,n){if(!kf(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=Sd(n);throw"an object"===r?t.Fa(e+" a custom object"):t.Fa(e+" "+r)}}function Cf(e,t,n){if((t=(0,c.m9)(t))instanceof nf)return t._internalPath;if("string"==typeof t)return Nf(e,t);throw Rf("Field path arguments must be of type string or FieldPath.",e,!1,void 0,n)}const Af=new RegExp("[~\\*/\\[\\]]");function Nf(e,t,n){if(t.search(Af)>=0)throw Rf(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new nf(...t.split("."))._internalPath}catch(r){throw Rf(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Rf(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new ei(Xr.INVALID_ARGUMENT,a+e+c)}function Of(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Rd(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Lf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Df("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Lf extends Pf{data(){return super.data()}}function Df(e,t){return"string"==typeof t?Nf(e,t):t instanceof nf?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Mf extends Pf{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new qf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Df("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class qf extends Mf{data(e={}){return super.data(e)}}class Uf{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Ff(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new qf(this._firestore,this._userDataWriter,n.key,n,new Ff(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ei(Xr.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>({type:"added",doc:new qf(e._firestore,e._userDataWriter,n.doc.key,n.doc,new Ff(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter),oldIndex:-1,newIndex:t++})))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new qf(e._firestore,e._userDataWriter,t.doc.key,t.doc,new Ff(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:Vf(t.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Vf(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Jr()}}function jf(e,t){return e instanceof Mf&&t instanceof Mf?e._firestore===t._firestore&&e._key.isEqual(t._key)&&(null===e._document?null===t._document:e._document.isEqual(t._document))&&e._converter===t._converter:e instanceof Uf&&t instanceof Uf&&e._firestore===t._firestore&&qd(e.query,t.query)&&e.metadata.isEqual(t.metadata)&&e._snapshot.isEqual(t._snapshot)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bf(e){if(ks(e)&&0===e.explicitOrderBy.length)throw new ei(Xr.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class $f{}function zf(e,...t){for(const n of t)e=n._apply(e);return e}class Hf extends $f{constructor(e,t,n){super(),this.Ka=e,this.ja=t,this.Qa=n,this.type="where"}_apply(e){const t=ff(e.firestore),n=function(e,t,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new ei(Xr.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on FieldPath.documentId().`);if("in"===s||"not-in"===s){op(o,s);const t=[];for(const n of o)t.push(sp(r,e,n));a={arrayValue:{values:t}}}else a=sp(r,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||op(o,s),a=If(n,t,o,"in"===s||"not-in"===s);const c=os.create(i,s,a);return function(e,t){if(t.v()){const n=Cs(e);if(null!==n&&!n.isEqual(t.field))throw new ei(Xr.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${t.field.toString()}'`);const r=xs(e);null!==r&&ap(e,t.field,r)}const n=function(e,t){for(const n of e.filters)if(t.indexOf(n.op)>=0)return n.op;return null}(e,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new ei(Xr.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new ei(Xr.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}(e,c),c}(e._query,"where",t,e.firestore._databaseId,this.Ka,this.ja,this.Qa);return new Od(e.firestore,e.converter,function(e,t){const n=e.filters.concat([t]);return new Ts(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}(e._query,n))}}function Kf(e,t,n){const r=t,i=Df("where",e);return new Hf(i,r,n)}class Gf extends $f{constructor(e,t){super(),this.Ka=e,this.Wa=t,this.type="orderBy"}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new ei(Xr.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new ei(Xr.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new ys(t,n);return function(e,t){if(null===xs(e)){const n=Cs(e);null!==n&&ap(e,n,t.field)}}(e,r),r}(e._query,this.Ka,this.Wa);return new Od(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new Ts(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function Wf(e,t="asc"){const n=t,r=Df("orderBy",e);return new Gf(r,n)}class Jf extends $f{constructor(e,t,n){super(),this.type=e,this.Ga=t,this.za=n}_apply(e){return new Od(e.firestore,e.converter,Os(e._query,this.Ga,this.za))}}function Yf(e){return xd("limit",e),new Jf("limit",e,"F")}function Qf(e){return xd("limitToLast",e),new Jf("limitToLast",e,"L")}class Zf extends $f{constructor(e,t,n){super(),this.type=e,this.Ha=t,this.Ja=n}_apply(e){const t=ip(e,this.type,this.Ha,this.Ja);return new Od(e.firestore,e.converter,function(e,t){return new Ts(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,t,e.endAt)}(e._query,t))}}function Xf(...e){return new Zf("startAt",e,!0)}function ep(...e){return new Zf("startAfter",e,!1)}class tp extends $f{constructor(e,t,n){super(),this.type=e,this.Ha=t,this.Ja=n}_apply(e){const t=ip(e,this.type,this.Ha,this.Ja);return new Od(e.firestore,e.converter,function(e,t){return new Ts(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,t)}(e._query,t))}}function np(...e){return new tp("endBefore",e,!0)}function rp(...e){return new tp("endAt",e,!1)}function ip(e,t,n,r){if(n[0]=(0,c.m9)(n[0]),n[0]instanceof Pf)return function(e,t,n,r,i){if(!r)throw new ei(Xr.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const s=[];for(const o of Ns(e))if(o.field.isKeyField())s.push(zi(t,r.key));else{const e=r.data.field(o.field);if(Ni(e))throw new ei(Xr.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+o.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){const e=o.field.canonicalString();throw new ei(Xr.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}s.push(e)}return new gs(s,i)}(e._query,e.firestore._databaseId,t,n[0]._document,r);{const i=ff(e.firestore);return function(e,t,n,r,i,s){const o=e.explicitOrderBy;if(i.length>o.length)throw new ei(Xr.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let c=0;c<i.length;c++){const s=i[c];if(o[c].field.isKeyField()){if("string"!=typeof s)throw new ei(Xr.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof s}`);if(!As(e)&&-1!==s.indexOf("/"))throw new ei(Xr.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to ${r}() must be a plain document ID, but '${s}' contains a slash.`);const n=e.path.child(bi.fromString(s));if(!Fi.isDocumentKey(n))throw new ei(Xr.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const i=new Fi(n);a.push(zi(t,i))}else{const e=If(n,r,s);a.push(e)}}return new gs(a,s)}(e._query,e.firestore._databaseId,i,t,n,r)}}function sp(e,t,n){if("string"==typeof(n=(0,c.m9)(n))){if(""===n)throw new ei(Xr.INVALID_ARGUMENT,"Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");if(!As(t)&&-1!==n.indexOf("/"))throw new ei(Xr.INVALID_ARGUMENT,`Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(bi.fromString(n));if(!Fi.isDocumentKey(r))throw new ei(Xr.INVALID_ARGUMENT,`Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return zi(e,new Fi(r))}if(n instanceof Rd)return zi(e,n._key);throw new ei(Xr.INVALID_ARGUMENT,`Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: ${Sd(n)}.`)}function op(e,t){if(!Array.isArray(e)||0===e.length)throw new ei(Xr.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(e.length>10)throw new ei(Xr.INVALID_ARGUMENT,`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function ap(e,t,n){if(!n.isEqual(t))throw new ei(Xr.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{convertValue(e,t="none"){switch(Mi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ci(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ai(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw Jr()}}convertObject(e,t){const n={};return vi(e.fields,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new of(Ci(e.latitude),Ci(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Ri(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Oi(e));default:return null}}convertTimestamp(e){const t=xi(e);return new pi(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=bi.fromString(e);Yr(Na(n));const r=new wd(n.get(1),n.get(3)),i=new Fi(n.popFirst(5));return r.isEqual(t)||Kr(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lp(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}class up extends cp{constructor(e){super(),this.firestore=e}convertBytes(e){return new rf(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Rd(this.firestore,null,t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=ff(e)}set(e,t,n){this._verifyNotCommitted();const r=dp(e,this._firestore),i=lp(r.converter,t,n),s=pf(this._dataReader,"WriteBatch.set",r._key,i,null!==r.converter,n);return this._mutations.push(s.toMutation(r._key,ro.none())),this}update(e,t,n,...r){this._verifyNotCommitted();const i=dp(e,this._firestore);let s;return s="string"==typeof(t=(0,c.m9)(t))||t instanceof nf?Tf(this._dataReader,"WriteBatch.update",i._key,t,n,r):_f(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(s.toMutation(i._key,ro.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=dp(e,this._firestore);return this._mutations=this._mutations.concat(new vo(t._key,ro.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new ei(Xr.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function dp(e,t){if((e=(0,c.m9)(e)).firestore!==t)throw new ei(Xr.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fp(e){e=kd(e,Rd);const t=kd(e.firestore,$d);return hd(zd(t),e._key).then((n=>xp(t,e,n)))}class pp extends cp{constructor(e){super(),this.firestore=e}convertBytes(e){return new rf(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Rd(this.firestore,null,t)}}function mp(e){e=kd(e,Rd);const t=kd(e.firestore,$d),n=zd(t),r=new pp(t);return ud(n,e._key).then((n=>new Mf(t,r,e._key,n,new Ff(null!==n&&n.hasLocalMutations,!0),e.converter)))}function gp(e){e=kd(e,Rd);const t=kd(e.firestore,$d);return hd(zd(t),e._key,{source:"server"}).then((n=>xp(t,e,n)))}function vp(e){e=kd(e,Od);const t=kd(e.firestore,$d),n=zd(t),r=new pp(t);return Bf(e._query),fd(n,e._query).then((n=>new Uf(t,r,e,n)))}function yp(e){e=kd(e,Od);const t=kd(e.firestore,$d),n=zd(t),r=new pp(t);return dd(n,e._query).then((n=>new Uf(t,r,e,n)))}function wp(e){e=kd(e,Od);const t=kd(e.firestore,$d),n=zd(t),r=new pp(t);return fd(n,e._query,{source:"server"}).then((n=>new Uf(t,r,e,n)))}function bp(e,t,n){e=kd(e,Rd);const r=kd(e.firestore,$d),i=lp(e.converter,t,n);return kp(r,[pf(ff(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,ro.none())])}function _p(e,t,n,...r){e=kd(e,Rd);const i=kd(e.firestore,$d),s=ff(i);let o;return o="string"==typeof(t=(0,c.m9)(t))||t instanceof nf?Tf(s,"updateDoc",e._key,t,n,r):_f(s,"updateDoc",e._key,t),kp(i,[o.toMutation(e._key,ro.exists(!0))])}function Tp(e){return kp(kd(e.firestore,$d),[new vo(e._key,ro.none())])}function Ip(e,t){const n=kd(e.firestore,$d),r=Fd(e),i=lp(e.converter,t);return kp(n,[pf(ff(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,ro.exists(!1))]).then((()=>r))}function Ep(e,...t){var n,r,i;e=(0,c.m9)(e);let s={includeMetadataChanges:!1},o=0;"object"!=typeof t[o]||Vd(t[o])||(s=t[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Vd(t[o])){const e=t[o];t[o]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[o+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[o+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}let l,u,h;if(e instanceof Rd)u=kd(e.firestore,$d),h=Es(e._key.path),l={next:n=>{t[o]&&t[o](xp(u,e,n))},error:t[o+1],complete:t[o+2]};else{const n=kd(e,Od);u=kd(n.firestore,$d),h=n._query;const r=new pp(u);l={next:e=>{t[o]&&t[o](new Uf(u,r,n,e))},error:t[o+1],complete:t[o+2]},Bf(e._query)}return function(e,t,n,r){const i=new Wh(r),s=new eh(t,i,n);return e.asyncQueue.enqueueAndForget((async()=>Ju(await ad(e),s))),()=>{i.Xo(),e.asyncQueue.enqueueAndForget((async()=>Yu(await ad(e),s)))}}(zd(u),h,a,l)}function Sp(e,t){return pd(zd(e=kd(e,$d)),Vd(t)?t:{next:t})}function kp(e,t){return function(e,t){const n=new ti;return e.asyncQueue.enqueueAndForget((async()=>ph(await od(e),t,n))),n.promise}(zd(e),t)}function xp(e,t,n){const r=n.docs.get(t._key),i=new pp(e);return new Mf(e,i,t._key,r,new Ff(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=ff(e)}get(e){const t=dp(e,this._firestore),n=new up(this._firestore);return this._transaction.lookup([t._key]).then((e=>{if(!e||1!==e.length)return Jr();const r=e[0];if(r.isFoundDocument())return new Pf(this._firestore,n,r.key,r,t.converter);if(r.isNoDocument())return new Pf(this._firestore,n,t._key,null,t.converter);throw Jr()}))}set(e,t,n){const r=dp(e,this._firestore),i=lp(r.converter,t,n),s=pf(this._dataReader,"Transaction.set",r._key,i,null!==r.converter,n);return this._transaction.set(r._key,s),this}update(e,t,n,...r){const i=dp(e,this._firestore);let s;return s="string"==typeof(t=(0,c.m9)(t))||t instanceof nf?Tf(this._dataReader,"Transaction.update",i._key,t,n,r):_f(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,s),this}delete(e){const t=dp(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=dp(e,this._firestore),n=new pp(this._firestore);return super.get(e).then((e=>new Mf(this._firestore,n,t._key,e._document,new Ff(!1,!1),t.converter)))}}function Ap(e,t){return md(zd(e),(n=>t(new Cp(e,n))))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Np(){return new mf("deleteField")}function Rp(){return new vf("serverTimestamp")}function Op(...e){return new yf("arrayUnion",e)}function Pp(...e){return new wf("arrayRemove",e)}function Lp(e){return new bf("increment",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Dp;!function(e){jr=e}(s.SDK_VERSION),(0,s._registerComponent)(new o.wA("firestore",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=new $d(n,new si(e.getProvider("auth-internal")));return t=Object.assign({useFetchStreams:!0},t),r._setSettings(t),r}),"PUBLIC")),(0,s.registerVersion)("@firebase/firestore","3.1.0",Dp);const Fp="@firebase/firestore-compat",Mp="0.1.3";
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function qp(e,t){if(void 0===t)return{merge:!1};if(void 0!==t.mergeFields&&void 0!==t.merge)throw new ei("invalid-argument",`Invalid options passed to function ${e}(): You cannot specify both "merge" and "mergeFields".`);return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Up(){if("undefined"===typeof Uint8Array)throw new ei("unimplemented","Uint8Arrays are not available in this environment.")}function Vp(){if(!Ei())throw new ei("unimplemented","Blobs are unavailable in Firestore in this environment.")}class jp{constructor(e){this._delegate=e}static fromBase64String(e){return Vp(),new jp(rf.fromBase64String(e))}static fromUint8Array(e){return Up(),new jp(rf.fromUint8Array(e))}toBase64(){return Vp(),this._delegate.toBase64()}toUint8Array(){return Up(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bp(e){return $p(e,["next","error","complete"])}function $p(e,t){if("object"!==typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"===typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{enableIndexedDbPersistence(e,t){return Kd(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return Gd(e._delegate)}clearIndexedDbPersistence(e){return Jd(e._delegate)}}class Hp{constructor(e,t,n){this._delegate=t,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},e instanceof wd||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();e.merge||t.host===e.host||Gr("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,n={}){Nd(this._delegate,e,t,n)}enableNetwork(){return Qd(this._delegate)}disableNetwork(){return Zd(this._delegate)}enablePersistence(e){let t=!1,n=!1;return e&&(t=!!e.synchronizeTabs,n=!!e.experimentalForceOwningTab,Td("synchronizeTabs",t,"experimentalForceOwningTab",n)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return Yd(this._delegate)}onSnapshotsInSync(e){return Sp(this._delegate,e)}get app(){if(!this._appCompat)throw new ei("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new om(this,Ld(this._delegate,e))}catch(t){throw Zp(t,"collection()","Firestore.collection()")}}doc(e){try{return new Qp(this,Fd(this._delegate,e))}catch(t){throw Zp(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new rm(this,Dd(this._delegate,e))}catch(t){throw Zp(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return Ap(this._delegate,(t=>e(new Wp(this,t))))}batch(){return zd(this._delegate),new Jp(new hp(this._delegate,(e=>kp(this._delegate,e))))}loadBundle(e){return Xd(this._delegate,e)}namedQuery(e){return ef(this._delegate,e).then((e=>e?new rm(this,e):null))}}class Kp extends cp{constructor(e){super(),this.firestore=e}convertBytes(e){return new jp(new rf(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return Qp.forKey(t,this.firestore,null)}}function Gp(e){zr(e)}class Wp{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new Kp(e)}get(e){const t=am(e);return this._delegate.get(t).then((e=>new tm(this._firestore,new Mf(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,t.converter))))}set(e,t,n){const r=am(e);return n?(qp("Transaction.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const i=am(e);return 2===arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,n,...r),this}delete(e){const t=am(e);return this._delegate.delete(t),this}}class Jp{constructor(e){this._delegate=e}set(e,t,n){const r=am(e);return n?(qp("WriteBatch.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const i=am(e);return 2===arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,n,...r),this}delete(e){const t=am(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class Yp{constructor(e,t,n){this._firestore=e,this._userDataWriter=t,this._delegate=n}fromFirestore(e,t){const n=new qf(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new nm(this._firestore,n),null!==t&&void 0!==t?t:{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const n=Yp.INSTANCES;let r=n.get(e);r||(r=new WeakMap,n.set(e,r));let i=r.get(t);return i||(i=new Yp(e,new Kp(e),t),r.set(t,i)),i}}Yp.INSTANCES=new WeakMap;class Qp{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Kp(e)}static forPath(e,t,n){if(e.length%2!==0)throw new ei("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Qp(t,new Rd(t._delegate,n,new Fi(e)))}static forKey(e,t,n){return new Qp(t,new Rd(t._delegate,n,e))}get id(){return this._delegate.id}get parent(){return new om(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new om(this.firestore,Ld(this._delegate,e))}catch(t){throw Zp(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=(0,c.m9)(e),e instanceof Rd&&Md(this._delegate,e)}set(e,t){t=qp("DocumentReference.set",t);try{return t?bp(this._delegate,e,t):bp(this._delegate,e)}catch(n){throw Zp(n,"setDoc()","DocumentReference.set()")}}update(e,t,...n){try{return 1===arguments.length?_p(this._delegate,e):_p(this._delegate,e,t,...n)}catch(r){throw Zp(r,"updateDoc()","DocumentReference.update()")}}delete(){return Tp(this._delegate)}onSnapshot(...e){const t=Xp(e),n=em(e,(e=>new tm(this.firestore,new Mf(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter))));return Ep(this._delegate,t,n)}get(e){let t;return t="cache"===(null===e||void 0===e?void 0:e.source)?mp(this._delegate):"server"===(null===e||void 0===e?void 0:e.source)?gp(this._delegate):fp(this._delegate),t.then((e=>new tm(this.firestore,new Mf(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter))))}withConverter(e){return new Qp(this.firestore,e?this._delegate.withConverter(Yp.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Zp(e,t,n){return e.message=e.message.replace(t,n),e}function Xp(e){for(const t of e)if("object"===typeof t&&!Bp(t))return t;return{}}function em(e,t){var n,r;let i;return i=Bp(e[0])?e[0]:Bp(e[1])?e[1]:"function"===typeof e[0]?{next:e[0],error:e[1],complete:e[2]}:{next:e[1],error:e[2],complete:e[3]},{next:e=>{i.next&&i.next(t(e))},error:null===(n=i.error)||void 0===n?void 0:n.bind(i),complete:null===(r=i.complete)||void 0===r?void 0:r.bind(i)}}class tm{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new Qp(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return jf(this._delegate,e._delegate)}}class nm extends tm{data(e){const t=this._delegate.data(e);return Qr(void 0!==t,"Document in a QueryDocumentSnapshot should exist"),t}}class rm{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Kp(e)}where(e,t,n){try{return new rm(this.firestore,zf(this._delegate,Kf(e,t,n)))}catch(r){throw Zp(r,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new rm(this.firestore,zf(this._delegate,Wf(e,t)))}catch(n){throw Zp(n,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new rm(this.firestore,zf(this._delegate,Yf(e)))}catch(t){throw Zp(t,"limit()","Query.limit()")}}limitToLast(e){try{return new rm(this.firestore,zf(this._delegate,Qf(e)))}catch(t){throw Zp(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new rm(this.firestore,zf(this._delegate,Xf(...e)))}catch(t){throw Zp(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new rm(this.firestore,zf(this._delegate,ep(...e)))}catch(t){throw Zp(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new rm(this.firestore,zf(this._delegate,np(...e)))}catch(t){throw Zp(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new rm(this.firestore,zf(this._delegate,rp(...e)))}catch(t){throw Zp(t,"endAt()","Query.endAt()")}}isEqual(e){return qd(this._delegate,e._delegate)}get(e){let t;return t="cache"===(null===e||void 0===e?void 0:e.source)?yp(this._delegate):"server"===(null===e||void 0===e?void 0:e.source)?wp(this._delegate):vp(this._delegate),t.then((e=>new sm(this.firestore,new Uf(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot))))}onSnapshot(...e){const t=Xp(e),n=em(e,(e=>new sm(this.firestore,new Uf(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot))));return Ep(this._delegate,t,n)}withConverter(e){return new rm(this.firestore,e?this._delegate.withConverter(Yp.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class im{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new nm(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class sm{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new rm(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map((e=>new nm(this._firestore,e)))}docChanges(e){return this._delegate.docChanges(e).map((e=>new im(this._firestore,e)))}forEach(e,t){this._delegate.forEach((n=>{e.call(t,new nm(this._firestore,n))}))}isEqual(e){return jf(this._delegate,e._delegate)}}class om extends rm{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Qp(this.firestore,e):null}doc(e){try{return new Qp(this.firestore,void 0===e?Fd(this._delegate):Fd(this._delegate,e))}catch(t){throw Zp(t,"doc()","CollectionReference.doc()")}}add(e){return Ip(this._delegate,e).then((e=>new Qp(this.firestore,e)))}isEqual(e){return Md(this._delegate,e._delegate)}withConverter(e){return new om(this.firestore,e?this._delegate.withConverter(Yp.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function am(e){return kd(e,Rd)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(...e){this._delegate=new nf(...e)}static documentId(){return new cm(Ti.keyField().canonicalString())}isEqual(e){return e=(0,c.m9)(e),e instanceof nf&&this._delegate._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(e){this._delegate=e}static serverTimestamp(){const e=Rp();return e._methodName="FieldValue.serverTimestamp",new lm(e)}static delete(){const e=Np();return e._methodName="FieldValue.delete",new lm(e)}static arrayUnion(...e){const t=Op(...e);return t._methodName="FieldValue.arrayUnion",new lm(t)}static arrayRemove(...e){const t=Pp(...e);return t._methodName="FieldValue.arrayRemove",new lm(t)}static increment(e){const t=Lp(e);return t._methodName="FieldValue.increment",new lm(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const um={Firestore:Hp,GeoPoint:of,Timestamp:pi,Blob:jp,Transaction:Wp,WriteBatch:Jp,DocumentReference:Qp,DocumentSnapshot:tm,Query:rm,QueryDocumentSnapshot:nm,QuerySnapshot:sm,CollectionReference:om,FieldPath:cm,FieldValue:lm,setLogLevel:Gp,CACHE_SIZE_UNLIMITED:Bd};function hm(e,t){e.INTERNAL.registerComponent(new o.wA("firestore-compat",(e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("firestore").getImmediate();return t(n,r)}),"PUBLIC").setServiceProps(Object.assign({},um)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dm(e){hm(e,((e,t)=>new Hp(e,t,new zp))),e.registerVersion(Fp,Mp)}dm(i.Z)},8430:(e,t,n)=>{"use strict";n.d(t,{_T:()=>r,mG:()=>i,Jh:()=>s,XA:()=>o,CR:()=>a,ev:()=>c});function r(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function i(e,t,n,r){function i(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,s){function o(e){try{c(r.next(e))}catch(t){s(t)}}function a(e){try{c(r["throw"](e))}catch(t){s(t)}}function c(e){e.done?n(e.value):i(e.value).then(o,a)}c((r=r.apply(e,t||[])).next())}))}function s(e,t){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(e){return function(t){return c([e,t])}}function c(s){if(n)throw new TypeError("Generator is already executing.");while(o)try{if(n=1,r&&(i=2&s[0]?r["return"]:s[0]?r["throw"]||((i=r["return"])&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(i=o.trys,!(i=i.length>0&&i[i.length-1])&&(6===s[0]||2===s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(a){s=[6,a],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}}Object.create;function o(e){var t="function"===typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"===typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function a(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,s=n.call(e),o=[];try{while((void 0===t||t-- >0)&&!(r=s.next()).done)o.push(r.value)}catch(a){i={error:a}}finally{try{r&&!r.done&&(n=s["return"])&&n.call(s)}finally{if(i)throw i.error}}return o}function c(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e}Object.create},9582:(e,t,n)=>{"use strict";n.d(t,{p7:()=>tt,r5:()=>K});var r=n(3673),i=n(1959);
/*!
  * vue-router v4.0.11
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */
const s="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag,o=e=>s?Symbol(e):"_vr_"+e,a=o("rvlm"),c=o("rvd"),l=o("r"),u=o("rl"),h=o("rvl"),d="undefined"!==typeof window;function f(e){return e.__esModule||s&&"Module"===e[Symbol.toStringTag]}const p=Object.assign;function m(e,t){const n={};for(const r in t){const i=t[r];n[r]=Array.isArray(i)?i.map(e):e(i)}return n}const g=()=>{};const v=/\/$/,y=e=>e.replace(v,"");function w(e,t,n="/"){let r,i={},s="",o="";const a=t.indexOf("?"),c=t.indexOf("#",a>-1?a:0);return a>-1&&(r=t.slice(0,a),s=t.slice(a+1,c>-1?c:t.length),i=e(s)),c>-1&&(r=r||t.slice(0,c),o=t.slice(c,t.length)),r=x(null!=r?r:t,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function b(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function _(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function T(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&I(t.matched[r],n.matched[i])&&E(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function I(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function E(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!S(e[n],t[n]))return!1;return!0}function S(e,t){return Array.isArray(e)?k(e,t):Array.isArray(t)?k(t,e):e===t}function k(e,t){return Array.isArray(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}function x(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let i,s,o=n.length-1;for(i=0;i<r.length;i++)if(s=r[i],1!==o&&"."!==s){if(".."!==s)break;o--}return n.slice(0,o).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var C,A;(function(e){e["pop"]="pop",e["push"]="push"})(C||(C={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(A||(A={}));function N(e){if(!e)if(d){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),y(e)}const R=/^[^#]+#/;function O(e,t){return e.replace(R,"#")+t}function P(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const L=()=>({left:window.pageXOffset,top:window.pageYOffset});function D(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=P(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function F(e,t){const n=history.state?history.state.position-t:-1;return n+e}const M=new Map;function q(e,t){M.set(e,t)}function U(e){const t=M.get(e);return M.delete(e),t}let V=()=>location.protocol+"//"+location.host;function j(e,t){const{pathname:n,search:r,hash:i}=t,s=e.indexOf("#");if(s>-1){let t=i.includes(e.slice(s))?e.slice(s).length:1,n=i.slice(t);return"/"!==n[0]&&(n="/"+n),_(n,"")}const o=_(n,e);return o+r+i}function B(e,t,n,r){let i=[],s=[],o=null;const a=({state:s})=>{const a=j(e,location),c=n.value,l=t.value;let u=0;if(s){if(n.value=a,t.value=s,o&&o===c)return void(o=null);u=l?s.position-l.position:0}else r(a);i.forEach((e=>{e(n.value,c,{delta:u,type:C.pop,direction:u?u>0?A.forward:A.back:A.unknown})}))};function c(){o=n.value}function l(e){i.push(e);const t=()=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)};return s.push(t),t}function u(){const{history:e}=window;e.state&&e.replaceState(p({},e.state,{scroll:L()}),"")}function h(){for(const e of s)e();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function $(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?L():null}}function z(e){const{history:t,location:n}=window,r={value:j(e,n)},i={value:t.state};function s(r,s,o){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:V()+e+r;try{t[o?"replaceState":"pushState"](s,"",c),i.value=s}catch(l){console.error(l),n[o?"replace":"assign"](c)}}function o(e,n){const o=p({},t.state,$(i.value.back,e,i.value.forward,!0),n,{position:i.value.position});s(e,o,!0),r.value=e}function a(e,n){const o=p({},i.value,t.state,{forward:e,scroll:L()});s(o.current,o,!0);const a=p({},$(r.value,e,null),{position:o.position+1},n);s(e,a,!1),r.value=e}return i.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:a,replace:o}}function H(e){e=N(e);const t=z(e),n=B(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const i=p({location:"",base:e,go:r,createHref:O.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function K(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),H(e)}function G(e){return"string"===typeof e||e&&"object"===typeof e}function W(e){return"string"===typeof e||"symbol"===typeof e}const J={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Y=o("nf");var Q;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(Q||(Q={}));function Z(e,t){return p(new Error,{type:e,[Y]:!0},t)}function X(e,t){return e instanceof Error&&Y in e&&(null==t||!!(e.type&t))}const ee="[^/]+?",te={sensitive:!1,strict:!1,start:!0,end:!0},ne=/[.+*?^${}()[\]/\\]/g;function re(e,t){const n=p({},te,t),r=[];let i=n.start?"^":"";const s=[];for(const u of e){const e=u.length?[]:[90];n.strict&&!u.length&&(i+="/");for(let t=0;t<u.length;t++){const r=u[t];let o=40+(n.sensitive?.25:0);if(0===r.type)t||(i+="/"),i+=r.value.replace(ne,"\\$&"),o+=40;else if(1===r.type){const{value:e,repeatable:n,optional:a,regexp:c}=r;s.push({name:e,repeatable:n,optional:a});const h=c||ee;if(h!==ee){o+=10;try{new RegExp(`(${h})`)}catch(l){throw new Error(`Invalid custom RegExp for param "${e}" (${h}): `+l.message)}}let d=n?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;t||(d=a&&u.length<2?`(?:/${d})`:"/"+d),a&&(d+="?"),i+=d,o+=20,a&&(o+=-8),n&&(o+=-20),".*"===h&&(o+=-50)}e.push(o)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(e){const t=e.match(o),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",i=s[r-1];n[i.name]=e&&i.repeatable?e.split("/"):e}return n}function c(t){let n="",r=!1;for(const i of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of i)if(0===e.type)n+=e.value;else if(1===e.type){const{value:s,repeatable:o,optional:a}=e,c=s in t?t[s]:"";if(Array.isArray(c)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const l=Array.isArray(c)?c.join("/"):c;if(!l){if(!a)throw new Error(`Missing required param "${s}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=l}}return n}return{re:o,score:r,keys:s,parse:a,stringify:c}}function ie(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function se(e,t){let n=0;const r=e.score,i=t.score;while(n<r.length&&n<i.length){const e=ie(r[n],i[n]);if(e)return e;n++}return i.length-r.length}const oe={type:0,value:""},ae=/[a-zA-Z0-9_]/;function ce(e){if(!e)return[[]];if("/"===e)return[[oe]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${l}": ${e}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,c=0,l="",u="";function h(){l&&(0===n?s.push({type:0,value:l}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:u,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),l="")}function d(){l+=a}while(c<e.length)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(l&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:ae.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==u[u.length-1]?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,u="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${l}"`),h(),o(),i}function le(e,t,n){const r=re(ce(e.path),n);const i=p(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf===!t.record.aliasOf&&t.children.push(i),i}function ue(e,t){const n=[],r=new Map;function i(e){return r.get(e)}function s(e,n,r){const i=!r,a=de(e);a.aliasOf=r&&r.record;const l=ge(t,e),u=[a];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)u.push(p({},a,{components:r?r.record.components:a.components,path:e,aliasOf:r?r.record:a}))}let h,d;for(const t of u){const{path:u}=t;if(n&&"/"!==u[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(u&&r+u)}if(h=le(t,n,l),r?r.alias.push(h):(d=d||h,d!==h&&d.alias.push(h),i&&e.name&&!pe(h)&&o(e.name)),"children"in a){const e=a.children;for(let t=0;t<e.length;t++)s(e[t],h,r&&r.children[t])}r=r||h,c(h)}return d?()=>{o(d)}:g}function o(e){if(W(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function a(){return n}function c(e){let t=0;while(t<n.length&&se(e,n[t])>=0)t++;n.splice(t,0,e),e.record.name&&!pe(e)&&r.set(e.record.name,e)}function l(e,t){let i,s,o,a={};if("name"in e&&e.name){if(i=r.get(e.name),!i)throw Z(1,{location:e});o=i.record.name,a=p(he(t.params,i.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params),s=i.stringify(a)}else if("path"in e)s=e.path,i=n.find((e=>e.re.test(s))),i&&(a=i.parse(s),o=i.record.name);else{if(i=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!i)throw Z(1,{location:e,currentLocation:t});o=i.record.name,a=p({},t.params,e.params),s=i.stringify(a)}const c=[];let l=i;while(l)c.unshift(l.record),l=l.parent;return{name:o,path:s,params:a,matched:c,meta:me(c)}}return t=ge({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>s(e))),{addRoute:s,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function he(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function de(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:fe(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function fe(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"===typeof n?n:n[r];return t}function pe(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function me(e){return e.reduce(((e,t)=>p(e,t.meta)),{})}function ge(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}const ve=/#/g,ye=/&/g,we=/\//g,be=/=/g,_e=/\?/g,Te=/\+/g,Ie=/%5B/g,Ee=/%5D/g,Se=/%5E/g,ke=/%60/g,xe=/%7B/g,Ce=/%7C/g,Ae=/%7D/g,Ne=/%20/g;function Re(e){return encodeURI(""+e).replace(Ce,"|").replace(Ie,"[").replace(Ee,"]")}function Oe(e){return Re(e).replace(xe,"{").replace(Ae,"}").replace(Se,"^")}function Pe(e){return Re(e).replace(Te,"%2B").replace(Ne,"+").replace(ve,"%23").replace(ye,"%26").replace(ke,"`").replace(xe,"{").replace(Ae,"}").replace(Se,"^")}function Le(e){return Pe(e).replace(be,"%3D")}function De(e){return Re(e).replace(ve,"%23").replace(_e,"%3F")}function Fe(e){return null==e?"":De(e).replace(we,"%2F")}function Me(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function qe(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const e=r[i].replace(Te," "),n=e.indexOf("="),s=Me(n<0?e:e.slice(0,n)),o=n<0?null:Me(e.slice(n+1));if(s in t){let e=t[s];Array.isArray(e)||(e=t[s]=[e]),e.push(o)}else t[s]=o}return t}function Ue(e){let t="";for(let n in e){const r=e[n];if(n=Le(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const i=Array.isArray(r)?r.map((e=>e&&Pe(e))):[r&&Pe(r)];i.forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function Ve(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=Array.isArray(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}function je(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function Be(e,t,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise(((o,a)=>{const c=e=>{!1===e?a(Z(4,{from:n,to:t})):e instanceof Error?a(e):G(e)?a(Z(2,{from:t,to:e})):(s&&r.enterCallbacks[i]===s&&"function"===typeof e&&s.push(e),o())},l=e.call(r&&r.instances[i],t,n,c);let u=Promise.resolve(l);e.length<3&&(u=u.then(c)),u.catch((e=>a(e)))}))}function $e(e,t,n,r){const i=[];for(const s of e)for(const e in s.components){let o=s.components[e];if("beforeRouteEnter"===t||s.instances[e])if(ze(o)){const a=o.__vccOpts||o,c=a[t];c&&i.push(Be(c,n,r,s,e))}else{let a=o();0,i.push((()=>a.then((i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${s.path}"`));const o=f(i)?i.default:i;s.components[e]=o;const a=o.__vccOpts||o,c=a[t];return c&&Be(c,n,r,s,e)()}))))}}return i}function ze(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function He(e){const t=(0,r.f3)(l),n=(0,r.f3)(u),s=(0,i.Fl)((()=>t.resolve((0,i.SU)(e.to)))),o=(0,i.Fl)((()=>{const{matched:e}=s.value,{length:t}=e,r=e[t-1],i=n.matched;if(!r||!i.length)return-1;const o=i.findIndex(I.bind(null,r));if(o>-1)return o;const a=Ye(e[t-2]);return t>1&&Ye(r)===a&&i[i.length-1].path!==a?i.findIndex(I.bind(null,e[t-2])):o})),a=(0,i.Fl)((()=>o.value>-1&&Je(n.params,s.value.params))),c=(0,i.Fl)((()=>o.value>-1&&o.value===n.matched.length-1&&E(n.params,s.value.params)));function h(n={}){return We(n)?t[(0,i.SU)(e.replace)?"replace":"push"]((0,i.SU)(e.to)).catch(g):Promise.resolve()}return{route:s,href:(0,i.Fl)((()=>s.value.href)),isActive:a,isExactActive:c,navigate:h}}const Ke=(0,r.aZ)({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:He,setup(e,{slots:t}){const n=(0,i.qj)(He(e)),{options:s}=(0,r.f3)(l),o=(0,i.Fl)((()=>({[Qe(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Qe(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const i=t.default&&t.default(n);return e.custom?i:(0,r.h)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},i)}}}),Ge=Ke;function We(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Je(e,t){for(const n in t){const r=t[n],i=e[n];if("string"===typeof r){if(r!==i)return!1}else if(!Array.isArray(i)||i.length!==r.length||r.some(((e,t)=>e!==i[t])))return!1}return!0}function Ye(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Qe=(e,t,n)=>null!=e?e:null!=t?t:n,Ze=(0,r.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const s=(0,r.f3)(h),o=(0,i.Fl)((()=>e.route||s.value)),l=(0,r.f3)(c,0),u=(0,i.Fl)((()=>o.value.matched[l]));(0,r.JJ)(c,l+1),(0,r.JJ)(a,u),(0,r.JJ)(h,o);const d=(0,i.iH)();return(0,r.YP)((()=>[d.value,u.value,e.name]),(([e,t,n],[r,i,s])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&I(t,i)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const i=o.value,s=u.value,a=s&&s.components[e.name],c=e.name;if(!a)return Xe(n.default,{Component:a,route:i});const l=s.props[e.name],h=l?!0===l?i.params:"function"===typeof l?l(i):l:null,f=e=>{e.component.isUnmounted&&(s.instances[c]=null)},m=(0,r.h)(a,p({},h,t,{onVnodeUnmounted:f,ref:d}));return Xe(n.default,{Component:m,route:i})||m}}});function Xe(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const et=Ze;function tt(e){const t=ue(e.routes,e),n=e.parseQuery||qe,s=e.stringifyQuery||Ue,o=e.history;const a=je(),c=je(),f=je(),v=(0,i.XI)(J);let y=J;d&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const _=m.bind(null,(e=>""+e)),I=m.bind(null,Fe),E=m.bind(null,Me);function S(e,n){let r,i;return W(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function k(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function x(){return t.getRoutes().map((e=>e.record))}function A(e){return!!t.getRecordMatcher(e)}function N(e,r){if(r=p({},r||v.value),"string"===typeof e){const i=w(n,e,r.path),s=t.resolve({path:i.path},r),a=o.createHref(i.fullPath);return p(i,s,{params:E(s.params),hash:Me(i.hash),redirectedFrom:void 0,href:a})}let i;if("path"in e)i=p({},e,{path:w(n,e.path,r.path).path});else{const t=p({},e.params);for(const e in t)null==t[e]&&delete t[e];i=p({},e,{params:I(e.params)}),r.params=I(r.params)}const a=t.resolve(i,r),c=e.hash||"";a.params=_(E(a.params));const l=b(s,p({},e,{hash:Oe(c),path:a.path})),u=o.createHref(l);return p({fullPath:l,hash:c,query:s===Ue?Ve(e.query):e.query||{}},a,{redirectedFrom:void 0,href:u})}function R(e){return"string"===typeof e?w(n,e,v.value.path):p({},e)}function O(e,t){if(y!==e)return Z(8,{from:t,to:e})}function P(e){return j(e)}function M(e){return P(p(R(e),{replace:!0}))}function V(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=R(r):{path:r},r.params={}),p({query:e.query,hash:e.hash,params:e.params},r)}}function j(e,t){const n=y=N(e),r=v.value,i=e.state,o=e.force,a=!0===e.replace,c=V(n);if(c)return j(p(R(c),{state:i,force:o,replace:a}),t||n);const l=n;let u;return l.redirectedFrom=t,!o&&T(s,r,n)&&(u=Z(16,{to:l,from:r}),ie(r,r,!0,!1)),(u?Promise.resolve(u):$(l,r)).catch((e=>X(e)?e:te(e,l,r))).then((e=>{if(e){if(X(e,2))return j(p(R(e.to),{state:i,force:o,replace:a}),t||l)}else e=H(l,r,!0,a,i);return z(l,r,e),e}))}function B(e,t){const n=O(e,t);return n?Promise.reject(n):Promise.resolve()}function $(e,t){let n;const[r,i,s]=rt(e,t);n=$e(r.reverse(),"beforeRouteLeave",e,t);for(const a of r)a.leaveGuards.forEach((r=>{n.push(Be(r,e,t))}));const o=B.bind(null,e,t);return n.push(o),nt(n).then((()=>{n=[];for(const r of a.list())n.push(Be(r,e,t));return n.push(o),nt(n)})).then((()=>{n=$e(i,"beforeRouteUpdate",e,t);for(const r of i)r.updateGuards.forEach((r=>{n.push(Be(r,e,t))}));return n.push(o),nt(n)})).then((()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(Array.isArray(r.beforeEnter))for(const i of r.beforeEnter)n.push(Be(i,e,t));else n.push(Be(r.beforeEnter,e,t));return n.push(o),nt(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=$e(s,"beforeRouteEnter",e,t),n.push(o),nt(n)))).then((()=>{n=[];for(const r of c.list())n.push(Be(r,e,t));return n.push(o),nt(n)})).catch((e=>X(e,8)?e:Promise.reject(e)))}function z(e,t,n){for(const r of f.list())r(e,t,n)}function H(e,t,n,r,i){const s=O(e,t);if(s)return s;const a=t===J,c=d?history.state:{};n&&(r||a?o.replace(e.fullPath,p({scroll:a&&c&&c.scroll},i)):o.push(e.fullPath,i)),v.value=e,ie(e,t,n,a),re()}let K;function G(){K=o.listen(((e,t,n)=>{const r=N(e),i=V(r);if(i)return void j(p(i,{replace:!0}),r).catch(g);y=r;const s=v.value;d&&q(F(s.fullPath,n.delta),L()),$(r,s).catch((e=>X(e,12)?e:X(e,2)?(j(e.to,r).then((e=>{X(e,20)&&!n.delta&&n.type===C.pop&&o.go(-1,!1)})).catch(g),Promise.reject()):(n.delta&&o.go(-n.delta,!1),te(e,r,s)))).then((e=>{e=e||H(r,s,!1),e&&(n.delta?o.go(-n.delta,!1):n.type===C.pop&&X(e,20)&&o.go(-1,!1)),z(r,s,e)})).catch(g)}))}let Y,Q=je(),ee=je();function te(e,t,n){re(e);const r=ee.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function ne(){return Y&&v.value!==J?Promise.resolve():new Promise(((e,t)=>{Q.add([e,t])}))}function re(e){Y||(Y=!0,G(),Q.list().forEach((([t,n])=>e?n(e):t())),Q.reset())}function ie(t,n,i,s){const{scrollBehavior:o}=e;if(!d||!o)return Promise.resolve();const a=!i&&U(F(t.fullPath,0))||(s||!i)&&history.state&&history.state.scroll||null;return(0,r.Y3)().then((()=>o(t,n,a))).then((e=>e&&D(e))).catch((e=>te(e,t,n)))}const se=e=>o.go(e);let oe;const ae=new Set,ce={currentRoute:v,addRoute:S,removeRoute:k,hasRoute:A,getRoutes:x,resolve:N,options:e,push:P,replace:M,go:se,back:()=>se(-1),forward:()=>se(1),beforeEach:a.add,beforeResolve:c.add,afterEach:f.add,onError:ee.add,isReady:ne,install(e){const t=this;e.component("RouterLink",Ge),e.component("RouterView",et),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,i.SU)(v)}),d&&!oe&&v.value===J&&(oe=!0,P(o.location).catch((e=>{0})));const n={};for(const s in J)n[s]=(0,i.Fl)((()=>v.value[s]));e.provide(l,t),e.provide(u,(0,i.qj)(n)),e.provide(h,v);const r=e.unmount;ae.add(e),e.unmount=function(){ae.delete(e),ae.size<1&&(y=J,K&&K(),v.value=J,oe=!1,Y=!1),r()}}};return ce}function nt(e){return e.reduce(((e,t)=>e.then((()=>t()))),Promise.resolve())}function rt(e,t){const n=[],r=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const s=t.matched[o];s&&(e.matched.find((e=>I(e,s)))?r.push(s):n.push(s));const a=e.matched[o];a&&(t.matched.find((e=>I(e,a)))||i.push(a))}return[n,r,i]}},8151:(e,t,n)=>{"use strict";n.d(t,{b6:()=>f,Jx:()=>I});var r=n(1029),i=n(1959),s=n(3673),o=n(8880);let a=Symbol("map"),c=Symbol("api"),l=Symbol("mapwasloaded"),u=(0,i.iH)(null),h="click dblclick drag dragend dragstart mousedown mousemove mouseout mouseover mouseup rightclick".split(" "),d="bounds_changed center_changed click dblclick drag dragend dragstart heading_changed idle maptypeid_changed mousemove mouseout mouseover projection_changed resize rightclick tilesloaded tilt_changed zoom_changed".split(" ");var f=(0,s.aZ)({props:{apiKey:{type:String,default:""},version:{type:String,default:"weekly"},libraries:{type:Array,default:()=>["places"]},region:{type:String,required:!1},language:{type:String,required:!1},backgroundColor:{type:String,required:!1},center:{type:Object,default:()=>({lat:0,lng:0})},clickableIcons:{type:Boolean,required:!1,default:void 0},controlSize:{type:Number,required:!1},disableDefaultUi:{type:Boolean,required:!1,default:void 0},disableDoubleClickZoom:{type:Boolean,required:!1,default:void 0},draggable:{type:Boolean,required:!1,default:void 0},draggableCursor:{type:String,required:!1},draggingCursor:{type:String,required:!1},fullscreenControl:{type:Boolean,required:!1,default:void 0},fullscreenControlPosition:{type:String,required:!1},gestureHandling:{type:String,required:!1},heading:{type:Number,required:!1},keyboardShortcuts:{type:Boolean,required:!1,default:void 0},mapTypeControl:{type:Boolean,required:!1,default:void 0},mapTypeControlOptions:{type:Object,required:!1},mapTypeId:{type:[Number,String],required:!1},maxZoom:{type:Number,required:!1},minZoom:{type:Number,required:!1},noClear:{type:Boolean,required:!1,default:void 0},panControl:{type:Boolean,required:!1,default:void 0},panControlPosition:{type:String,required:!1},restriction:{type:Object,required:!1},rotateControl:{type:Boolean,required:!1,default:void 0},rotateControlPosition:{type:String,required:!1},scaleControl:{type:Boolean,required:!1,default:void 0},scaleControlStyle:{type:Number,required:!1},scrollwheel:{type:Boolean,required:!1,default:void 0},streetView:{type:Object,required:!1},streetViewControl:{type:Boolean,required:!1,default:void 0},streetViewControlPosition:{type:String,required:!1},styles:{type:Array,required:!1},tilt:{type:Number,required:!1},zoom:{type:Number,required:!1},zoomControl:{type:Boolean,required:!1,default:void 0},zoomControlPosition:{type:String,required:!1}},emits:d,setup(e,{emit:t}){let n=(0,i.iH)(null),o=(0,i.iH)(!1),h=(0,i.iH)(null),f=(0,i.iH)(null),p=(0,i.iH)(!1);(0,s.JJ)(a,h),(0,s.JJ)(c,f),(0,s.JJ)(l,p);let m=()=>{const t={...e};Object.keys(t).forEach((e=>{void 0===t[e]&&delete t[e]}));var n=e=>{var t;return e?{position:null===(t=f.value)||void 0===t?void 0:t.ControlPosition[e]}:{}};return n={scaleControlOptions:e.scaleControlStyle?{style:e.scaleControlStyle}:{},panControlOptions:n(e.panControlPosition),zoomControlOptions:n(e.zoomControlPosition),rotateControlOptions:n(e.rotateControlPosition),streetViewControlOptions:n(e.streetViewControlPosition),fullscreenControlOptions:n(e.fullscreenControlPosition),disableDefaultUI:e.disableDefaultUi},{...t,...n}},g=(0,s.YP)([f,h],(([e,t])=>{e&&t&&(e.event.addListenerOnce(t,"tilesloaded",(()=>{p.value=!0})),setTimeout(g,0))}),{immediate:!0}),v=()=>{try{const{apiKey:t,region:n,version:i,language:s,libraries:o}=e;u.value=new r.a({apiKey:t,region:n,version:i,language:s,libraries:o})}catch(t){console.error(t)}};return(0,s.bv)((()=>{v(),u.value.load().then((()=>{f.value=google.maps,h.value=new google.maps.Map(n.value,m()),d.forEach((e=>{var n;null===(n=h.value)||void 0===n||n.addListener(e,(n=>t(e,n)))})),o.value=!0;let r=Object.keys(e).filter((e=>!["center","zoom"].includes(e))).map((t=>(0,i.Vh)(e,t)));(0,s.YP)([()=>e.center,()=>e.zoom,...r],(([e,t],[n,r])=>{var i,s,o;let{center:a,zoom:c,...l}=m();null===(i=h.value)||void 0===i||i.setOptions(l),void 0!==t&&t!==r&&(null===(s=h.value)||void 0===s||s.setZoom(t)),t=!n||e.lng!==n.lng||e.lat!==n.lat,e&&t&&(null===(o=h.value)||void 0===o||o.panTo(e))}))}))})),(0,s.Jd)((()=>{var e;p.value=!1,h.value&&(null===(e=f.value)||void 0===e||e.event.clearInstanceListeners(h.value))})),{mapRef:n,ready:o,map:h,api:f}}}),p=void 0;void 0===p&&(p={});var m=p.insertAt;if("undefined"!==typeof document){var g=document.head||document.getElementsByTagName("head")[0],v=document.createElement("style");v.type="text/css","top"===m&&g.firstChild?g.insertBefore(v,g.firstChild):g.appendChild(v),v.styleSheet?v.styleSheet.cssText="\n.mapdiv[data-v-177d06e3] {\n  width: 100%;\n  height: 100%;\n}\n":v.appendChild(document.createTextNode("\n.mapdiv[data-v-177d06e3] {\n  width: 100%;\n  height: 100%;\n}\n"))}let y=(0,s.HX)("data-v-177d06e3");(0,s.dD)("data-v-177d06e3");let w={ref:"mapRef",class:"mapdiv"};(0,s.Cn)();let b=y((e=>((0,s.wg)(),(0,s.j4)("div",null,[(0,s.Wm)("div",w,null,512),(0,s.WI)(e.$slots,"default",{},void 0,!0)]))));f.render=b,f.__scopeId="data-v-177d06e3";let _=(e,t,n,r)=>{let o=null;const l=(0,i.iH)(null),u=(0,s.f3)(a,(0,i.iH)(null)),h=(0,s.f3)(c,(0,i.iH)(null));return(0,s.YP)([u,n],((i,[s,a])=>{i=JSON.stringify(n.value)!==JSON.stringify(a)||u.value!==s,u.value&&h.value&&i&&(o?(o.setOptions(n.value),o.setMap(u.value)):(l.value=o=new h.value[e]({...n.value,map:u.value}),t.forEach((e=>{null===o||void 0===o||o.addListener(e,(t=>r(e,t)))}))))}),{immediate:!0}),(0,s.Jd)((()=>{var e;o&&(null===(e=h.value)||void 0===e||e.event.clearInstanceListeners(o),o.setMap(null))})),{component:l}},T="animation_changed click dblclick rightclick dragstart dragend drag mouseover mousedown mouseout mouseup draggable_changed clickable_changed contextmenu cursor_changed flat_changed rightclick zindex_changed icon_changed position_changed shape_changed title_changed visible_changed".split(" ");var I=(0,s.aZ)({props:{options:{type:Object,required:!0}},emits:T,setup(e,{emit:t}){return e=(0,i.Vh)(e,"options"),{marker:_("Marker",T,e,t)}},render:()=>null});(0,s.aZ)({props:{options:{type:Object,required:!0}},emits:h,setup(e,{emit:t}){return e=(0,i.Vh)(e,"options"),{polyline:_("Polyline",h,e,t)}},render:()=>null}),(0,s.aZ)({props:{options:{type:Object,required:!0}},emits:h,setup(e,{emit:t}){return e=(0,i.Vh)(e,"options"),{polygon:_("Polygon",h,e,t)}},render:()=>null});let E=h.concat(["bounds_changed"]);(0,s.aZ)({props:{options:{type:Object,required:!0}},emits:E,setup(e,{emit:t}){return e=(0,i.Vh)(e,"options"),{rectangle:_("Rectangle",E,e,t)}},render:()=>null});let S=h.concat(["center_changed","radius_changed"]);(0,s.aZ)({props:{options:{type:Object,required:!0}},emits:S,setup(e,{emit:t}){return e=(0,i.Vh)(e,"options"),{circle:_("Circle",S,e,t)}},render:()=>null});var k=(0,s.aZ)({props:{position:{type:String,required:!0},index:{type:Number,default:1}},emits:["content:loaded"],setup(e,{emit:t}){let n=(0,i.iH)(null),r=(0,s.f3)(a,(0,i.iH)(null)),o=(0,s.f3)(c,(0,i.iH)(null)),u=(0,s.f3)(l,(0,i.iH)(!1)),h=(0,i.iH)(!1),d=(0,s.YP)([u,o,n],(([n,r,i])=>{r&&n&&i&&(f(e.position),h.value=!0,t("content:loaded"),setTimeout(d,0))}),{immediate:!0}),f=e=>{r.value&&o.value&&n.value&&r.value.controls[o.value.ControlPosition[e]].push(n.value)},p=e=>{if(r.value&&o.value){let t=null;e=o.value.ControlPosition[e],r.value.controls[e].forEach(((e,r)=>{e===n.value&&(t=r)})),null!==t&&r.value.controls[e].removeAt(t)}};return(0,s.Jd)((()=>p(e.position))),(0,s.YP)((()=>e.position),((e,t)=>{p(t),f(e)})),(0,s.YP)((()=>e.index),(t=>{t&&n.value&&(n.value.index=e.index)})),{controlRef:n,showContent:h}}});let x={ref:"controlRef"};k.render=function(e){return(0,s.wg)(),(0,s.j4)(s.HY,null,[(0,s.kq)("\n    v-show must be used instead of v-if otherwise there\n    would be no rendered content pushed to the map controls\n  "),(0,s.wy)((0,s.Wm)("div",x,[(0,s.WI)(e.$slots,"default")],512),[[o.F8,e.showContent]])],2112)};let C=[{featureType:"administrative.land_parcel",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"administrative.land_parcel",elementType:"geometry.stroke",stylers:[{visibility:"off"},{weight:7}]},{featureType:"administrative.locality",elementType:"geometry.stroke",stylers:[{visibility:"on"}]},{featureType:"administrative.locality",elementType:"labels.text.fill",stylers:[{visibility:"on"}]},{featureType:"administrative.locality",elementType:"labels.text.stroke",stylers:[{visibility:"on"}]},{featureType:"administrative.neighborhood",stylers:[{visibility:"off"}]},{featureType:"administrative.neighborhood",elementType:"geometry.fill",stylers:[{color:"#00ff28"},{visibility:"on"},{weight:2}]},{featureType:"administrative.neighborhood",elementType:"geometry.stroke",stylers:[{color:"#00ff28"},{visibility:"on"}]},{featureType:"administrative.neighborhood",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"administrative.neighborhood",elementType:"labels.text.stroke",stylers:[{visibility:"off"}]},{featureType:"landscape.natural",elementType:"geometry.fill",stylers:[{visibility:"on"}]},{featureType:"poi",elementType:"labels.text",stylers:[{visibility:"off"}]},{featureType:"poi.attraction",stylers:[{visibility:"off"}]},{featureType:"poi.business",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"poi.medical",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"poi.place_of_worship",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"poi.school",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"poi.sports_complex",elementType:"geometry.fill",stylers:[{visibility:"on"}]},{featureType:"poi.sports_complex",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"labels.text",stylers:[{visibility:"on"},{lightness:-10},{color:"#b5b5b5"},{weight:.2}]},{featureType:"road",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"road.local",elementType:"geometry.fill",stylers:[{color:"#fbfbfb"},{lightness:-15},{weight:.5}]},{featureType:"road.local",elementType:"geometry.stroke",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"transit.station",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"labels.text",stylers:[{visibility:"off"}]}],A=[{featureType:"all",elementType:"labels",stylers:[{visibility:"on"}]},{featureType:"all",elementType:"labels.text.fill",stylers:[{saturation:36},{color:"#000000"},{lightness:40}]},{featureType:"all",elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#000000"},{lightness:16}]},{featureType:"all",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:17},{weight:1.2}]},{featureType:"administrative.country",elementType:"labels.text.fill",stylers:[{color:"#e5c163"}]},{featureType:"administrative.locality",elementType:"labels.text.fill",stylers:[{color:"#c4c4c4"}]},{featureType:"administrative.neighborhood",elementType:"labels.text.fill",stylers:[{color:"#e5c163"}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#000000"},{lightness:21},{visibility:"on"}]},{featureType:"poi.business",elementType:"geometry",stylers:[{visibility:"on"}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#e5c163"},{lightness:0}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{visibility:"off"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#ffffff"}]},{featureType:"road.highway",elementType:"labels.text.stroke",stylers:[{color:"#e5c163"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#000000"},{lightness:18}]},{featureType:"road.arterial",elementType:"geometry.fill",stylers:[{color:"#575757"}]},{featureType:"road.arterial",elementType:"labels.text.fill",stylers:[{color:"#ffffff"}]},{featureType:"road.arterial",elementType:"labels.text.stroke",stylers:[{color:"#2c2c2c"}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#000000"},{lightness:16}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#999999"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#000000"},{lightness:19}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#000000"},{lightness:17}]}]},3617:(e,t,n)=>{"use strict";n.d(t,{MT:()=>Y});var r=n(3673),i=n(1959);function s(){return o().__VUE_DEVTOOLS_GLOBAL_HOOK__}function o(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{}}const a="function"===typeof Proxy,c="devtools-plugin:setup",l="plugin:settings:set";class u{constructor(e,t){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=t;const n={};if(e.settings)for(const o in e.settings){const t=e.settings[o];n[o]=t.defaultValue}const r=`__vue-devtools-plugin-settings__${e.id}`;let i={...n};try{const e=localStorage.getItem(r),t=JSON.parse(e);Object.assign(i,t)}catch(s){}this.fallbacks={getSettings(){return i},setSettings(e){try{localStorage.setItem(r,JSON.stringify(e))}catch(s){}i=e}},t.on(l,((e,t)=>{e===this.plugin.id&&this.fallbacks.setSettings(t)})),this.proxiedOn=new Proxy({},{get:(e,t)=>this.target?this.target.on[t]:(...e)=>{this.onQueue.push({method:t,args:e})}}),this.proxiedTarget=new Proxy({},{get:(e,t)=>this.target?this.target[t]:"on"===t?this.proxiedOn:Object.keys(this.fallbacks).includes(t)?(...e)=>(this.targetQueue.push({method:t,args:e,resolve:()=>{}}),this.fallbacks[t](...e)):(...e)=>new Promise((n=>{this.targetQueue.push({method:t,args:e,resolve:n})}))})}async setRealTarget(e){this.target=e;for(const t of this.onQueue)this.target.on[t.method](...t.args);for(const t of this.targetQueue)t.resolve(await this.target[t.method](...t.args))}}function h(e,t){const n=o(),r=s(),i=a&&e.enableEarlyProxy;if(!r||!n.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&i){const s=i?new u(e,r):null,o=n.__VUE_DEVTOOLS_PLUGINS__=n.__VUE_DEVTOOLS_PLUGINS__||[];o.push({pluginDescriptor:e,setupFn:t,proxy:s}),s&&t(s.proxiedTarget)}else r.emit(c,e,t)}
/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */
var d="store";function f(e,t){Object.keys(e).forEach((function(n){return t(e[n],n)}))}function p(e){return null!==e&&"object"===typeof e}function m(e){return e&&"function"===typeof e.then}function g(e,t){return function(){return e(t)}}function v(e,t,n){return t.indexOf(e)<0&&(n&&n.prepend?t.unshift(e):t.push(e)),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function y(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var n=e.state;b(e,n,[],e._modules.root,!0),w(e,n,t)}function w(e,t,n){var r=e._state;e.getters={},e._makeLocalGettersCache=Object.create(null);var s=e._wrappedGetters,o={};f(s,(function(t,n){o[n]=g(t,e),Object.defineProperty(e.getters,n,{get:function(){return o[n]()},enumerable:!0})})),e._state=(0,i.qj)({data:t}),e.strict&&k(e),r&&n&&e._withCommit((function(){r.data=null}))}function b(e,t,n,r,i){var s=!n.length,o=e._modules.getNamespace(n);if(r.namespaced&&(e._modulesNamespaceMap[o],e._modulesNamespaceMap[o]=r),!s&&!i){var a=x(t,n.slice(0,-1)),c=n[n.length-1];e._withCommit((function(){a[c]=r.state}))}var l=r.context=_(e,o,n);r.forEachMutation((function(t,n){var r=o+n;I(e,r,t,l)})),r.forEachAction((function(t,n){var r=t.root?n:o+n,i=t.handler||t;E(e,r,i,l)})),r.forEachGetter((function(t,n){var r=o+n;S(e,r,t,l)})),r.forEachChild((function(r,s){b(e,t,n.concat(s),r,i)}))}function _(e,t,n){var r=""===t,i={dispatch:r?e.dispatch:function(n,r,i){var s=C(n,r,i),o=s.payload,a=s.options,c=s.type;return a&&a.root||(c=t+c),e.dispatch(c,o)},commit:r?e.commit:function(n,r,i){var s=C(n,r,i),o=s.payload,a=s.options,c=s.type;a&&a.root||(c=t+c),e.commit(c,o,a)}};return Object.defineProperties(i,{getters:{get:r?function(){return e.getters}:function(){return T(e,t)}},state:{get:function(){return x(e.state,n)}}}),i}function T(e,t){if(!e._makeLocalGettersCache[t]){var n={},r=t.length;Object.keys(e.getters).forEach((function(i){if(i.slice(0,r)===t){var s=i.slice(r);Object.defineProperty(n,s,{get:function(){return e.getters[i]},enumerable:!0})}})),e._makeLocalGettersCache[t]=n}return e._makeLocalGettersCache[t]}function I(e,t,n,r){var i=e._mutations[t]||(e._mutations[t]=[]);i.push((function(t){n.call(e,r.state,t)}))}function E(e,t,n,r){var i=e._actions[t]||(e._actions[t]=[]);i.push((function(t){var i=n.call(e,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:e.getters,rootState:e.state},t);return m(i)||(i=Promise.resolve(i)),e._devtoolHook?i.catch((function(t){throw e._devtoolHook.emit("vuex:error",t),t})):i}))}function S(e,t,n,r){e._wrappedGetters[t]||(e._wrappedGetters[t]=function(e){return n(r.state,r.getters,e.state,e.getters)})}function k(e){(0,r.YP)((function(){return e._state.data}),(function(){0}),{deep:!0,flush:"sync"})}function x(e,t){return t.reduce((function(e,t){return e[t]}),e)}function C(e,t,n){return p(e)&&e.type&&(n=t,t=e,e=e.type),{type:e,payload:t,options:n}}var A="vuex bindings",N="vuex:mutations",R="vuex:actions",O="vuex",P=0;function L(e,t){h({id:"org.vuejs.vuex",app:e,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[A]},(function(n){n.addTimelineLayer({id:N,label:"Vuex Mutations",color:D}),n.addTimelineLayer({id:R,label:"Vuex Actions",color:D}),n.addInspector({id:O,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree((function(n){if(n.app===e&&n.inspectorId===O)if(n.filter){var r=[];j(r,t._modules.root,n.filter,""),n.rootNodes=r}else n.rootNodes=[V(t._modules.root,"")]})),n.on.getInspectorState((function(n){if(n.app===e&&n.inspectorId===O){var r=n.nodeId;T(t,r),n.state=B(z(t._modules,r),"root"===r?t.getters:t._makeLocalGettersCache,r)}})),n.on.editInspectorState((function(n){if(n.app===e&&n.inspectorId===O){var r=n.nodeId,i=n.path;"root"!==r&&(i=r.split("/").filter(Boolean).concat(i)),t._withCommit((function(){n.set(t._state.data,i,n.state.value)}))}})),t.subscribe((function(e,t){var r={};e.payload&&(r.payload=e.payload),r.state=t,n.notifyComponentUpdate(),n.sendInspectorTree(O),n.sendInspectorState(O),n.addTimelineEvent({layerId:N,event:{time:Date.now(),title:e.type,data:r}})})),t.subscribeAction({before:function(e,t){var r={};e.payload&&(r.payload=e.payload),e._id=P++,e._time=Date.now(),r.state=t,n.addTimelineEvent({layerId:R,event:{time:e._time,title:e.type,groupId:e._id,subtitle:"start",data:r}})},after:function(e,t){var r={},i=Date.now()-e._time;r.duration={_custom:{type:"duration",display:i+"ms",tooltip:"Action duration",value:i}},e.payload&&(r.payload=e.payload),r.state=t,n.addTimelineEvent({layerId:R,event:{time:Date.now(),title:e.type,groupId:e._id,subtitle:"end",data:r}})}})}))}var D=8702998,F=6710886,M=16777215,q={label:"namespaced",textColor:M,backgroundColor:F};function U(e){return e&&"root"!==e?e.split("/").slice(-2,-1)[0]:"Root"}function V(e,t){return{id:t||"root",label:U(t),tags:e.namespaced?[q]:[],children:Object.keys(e._children).map((function(n){return V(e._children[n],t+n+"/")}))}}function j(e,t,n,r){r.includes(n)&&e.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:t.namespaced?[q]:[]}),Object.keys(t._children).forEach((function(i){j(e,t._children[i],n,r+i+"/")}))}function B(e,t,n){t="root"===n?t:t[n];var r=Object.keys(t),i={state:Object.keys(e.state).map((function(t){return{key:t,editable:!0,value:e.state[t]}}))};if(r.length){var s=$(t);i.getters=Object.keys(s).map((function(e){return{key:e.endsWith("/")?U(e):e,editable:!1,value:H((function(){return s[e]}))}}))}return i}function $(e){var t={};return Object.keys(e).forEach((function(n){var r=n.split("/");if(r.length>1){var i=t,s=r.pop();r.forEach((function(e){i[e]||(i[e]={_custom:{value:{},display:e,tooltip:"Module",abstract:!0}}),i=i[e]._custom.value})),i[s]=H((function(){return e[n]}))}else t[n]=H((function(){return e[n]}))})),t}function z(e,t){var n=t.split("/").filter((function(e){return e}));return n.reduce((function(e,r,i){var s=e[r];if(!s)throw new Error('Missing module "'+r+'" for path "'+t+'".');return i===n.length-1?s:s._children}),"root"===t?e:e.root._children)}function H(e){try{return e()}catch(t){return t}}var K=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var n=e.state;this.state=("function"===typeof n?n():n)||{}},G={namespaced:{configurable:!0}};G.namespaced.get=function(){return!!this._rawModule.namespaced},K.prototype.addChild=function(e,t){this._children[e]=t},K.prototype.removeChild=function(e){delete this._children[e]},K.prototype.getChild=function(e){return this._children[e]},K.prototype.hasChild=function(e){return e in this._children},K.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},K.prototype.forEachChild=function(e){f(this._children,e)},K.prototype.forEachGetter=function(e){this._rawModule.getters&&f(this._rawModule.getters,e)},K.prototype.forEachAction=function(e){this._rawModule.actions&&f(this._rawModule.actions,e)},K.prototype.forEachMutation=function(e){this._rawModule.mutations&&f(this._rawModule.mutations,e)},Object.defineProperties(K.prototype,G);var W=function(e){this.register([],e,!1)};function J(e,t,n){if(t.update(n),n.modules)for(var r in n.modules){if(!t.getChild(r))return void 0;J(e.concat(r),t.getChild(r),n.modules[r])}}W.prototype.get=function(e){return e.reduce((function(e,t){return e.getChild(t)}),this.root)},W.prototype.getNamespace=function(e){var t=this.root;return e.reduce((function(e,n){return t=t.getChild(n),e+(t.namespaced?n+"/":"")}),"")},W.prototype.update=function(e){J([],this.root,e)},W.prototype.register=function(e,t,n){var r=this;void 0===n&&(n=!0);var i=new K(t,n);if(0===e.length)this.root=i;else{var s=this.get(e.slice(0,-1));s.addChild(e[e.length-1],i)}t.modules&&f(t.modules,(function(t,i){r.register(e.concat(i),t,n)}))},W.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1],r=t.getChild(n);r&&r.runtime&&t.removeChild(n)},W.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1];return!!t&&t.hasChild(n)};function Y(e){return new Q(e)}var Q=function(e){var t=this;void 0===e&&(e={});var n=e.plugins;void 0===n&&(n=[]);var r=e.strict;void 0===r&&(r=!1);var i=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new W(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=i;var s=this,o=this,a=o.dispatch,c=o.commit;this.dispatch=function(e,t){return a.call(s,e,t)},this.commit=function(e,t,n){return c.call(s,e,t,n)},this.strict=r;var l=this._modules.root.state;b(this,l,[],this._modules.root),w(this,l),n.forEach((function(e){return e(t)}))},Z={state:{configurable:!0}};Q.prototype.install=function(e,t){e.provide(t||d,this),e.config.globalProperties.$store=this;var n=void 0!==this._devtools&&this._devtools;n&&L(e,this)},Z.state.get=function(){return this._state.data},Z.state.set=function(e){0},Q.prototype.commit=function(e,t,n){var r=this,i=C(e,t,n),s=i.type,o=i.payload,a=(i.options,{type:s,payload:o}),c=this._mutations[s];c&&(this._withCommit((function(){c.forEach((function(e){e(o)}))})),this._subscribers.slice().forEach((function(e){return e(a,r.state)})))},Q.prototype.dispatch=function(e,t){var n=this,r=C(e,t),i=r.type,s=r.payload,o={type:i,payload:s},a=this._actions[i];if(a){try{this._actionSubscribers.slice().filter((function(e){return e.before})).forEach((function(e){return e.before(o,n.state)}))}catch(l){0}var c=a.length>1?Promise.all(a.map((function(e){return e(s)}))):a[0](s);return new Promise((function(e,t){c.then((function(t){try{n._actionSubscribers.filter((function(e){return e.after})).forEach((function(e){return e.after(o,n.state)}))}catch(l){0}e(t)}),(function(e){try{n._actionSubscribers.filter((function(e){return e.error})).forEach((function(t){return t.error(o,n.state,e)}))}catch(l){0}t(e)}))}))}},Q.prototype.subscribe=function(e,t){return v(e,this._subscribers,t)},Q.prototype.subscribeAction=function(e,t){var n="function"===typeof e?{before:e}:e;return v(n,this._actionSubscribers,t)},Q.prototype.watch=function(e,t,n){var i=this;return(0,r.YP)((function(){return e(i.state,i.getters)}),t,Object.assign({},n))},Q.prototype.replaceState=function(e){var t=this;this._withCommit((function(){t._state.data=e}))},Q.prototype.registerModule=function(e,t,n){void 0===n&&(n={}),"string"===typeof e&&(e=[e]),this._modules.register(e,t),b(this,this.state,e,this._modules.get(e),n.preserveState),w(this,this.state)},Q.prototype.unregisterModule=function(e){var t=this;"string"===typeof e&&(e=[e]),this._modules.unregister(e),this._withCommit((function(){var n=x(t.state,e.slice(0,-1));delete n[e[e.length-1]]})),y(this)},Q.prototype.hasModule=function(e){return"string"===typeof e&&(e=[e]),this._modules.isRegistered(e)},Q.prototype.hotUpdate=function(e){this._modules.update(e),y(this,!0)},Q.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t},Object.defineProperties(Q.prototype,Z);te((function(e,t){var n={};return X(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=this.$store.state,n=this.$store.getters;if(e){var r=ne(this.$store,"mapState",e);if(!r)return;t=r.context.state,n=r.context.getters}return"function"===typeof i?i.call(this,t,n):t[i]},n[r].vuex=!0})),n})),te((function(e,t){var n={};return X(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r=this.$store.commit;if(e){var s=ne(this.$store,"mapMutations",e);if(!s)return;r=s.context.commit}return"function"===typeof i?i.apply(this,[r].concat(t)):r.apply(this.$store,[i].concat(t))}})),n})),te((function(e,t){var n={};return X(t).forEach((function(t){var r=t.key,i=t.val;i=e+i,n[r]=function(){if(!e||ne(this.$store,"mapGetters",e))return this.$store.getters[i]},n[r].vuex=!0})),n})),te((function(e,t){var n={};return X(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r=this.$store.dispatch;if(e){var s=ne(this.$store,"mapActions",e);if(!s)return;r=s.context.dispatch}return"function"===typeof i?i.apply(this,[r].concat(t)):r.apply(this.$store,[i].concat(t))}})),n}));function X(e){return ee(e)?Array.isArray(e)?e.map((function(e){return{key:e,val:e}})):Object.keys(e).map((function(t){return{key:t,val:e[t]}})):[]}function ee(e){return Array.isArray(e)||p(e)}function te(e){return function(t,n){return"string"!==typeof t?(n=t,t=""):"/"!==t.charAt(t.length-1)&&(t+="/"),e(t,n)}}function ne(e,t,n){var r=e._modulesNamespaceMap[n];return r}},8593:e=>{"use strict";e.exports=JSON.parse('{"name":"axios","version":"0.21.4","description":"Promise based HTTP client for the browser and node.js","main":"index.js","scripts":{"test":"grunt test","start":"node ./sandbox/server.js","build":"NODE_ENV=production grunt build","preversion":"npm test","version":"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json","postversion":"git push && git push --tags","examples":"node ./examples/server.js","coveralls":"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js","fix":"eslint --fix lib/**/*.js"},"repository":{"type":"git","url":"https://github.com/axios/axios.git"},"keywords":["xhr","http","ajax","promise","node"],"author":"Matt Zabriskie","license":"MIT","bugs":{"url":"https://github.com/axios/axios/issues"},"homepage":"https://axios-http.com","devDependencies":{"coveralls":"^3.0.0","es6-promise":"^4.2.4","grunt":"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1","karma":"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2","minimist":"^1.2.0","mocha":"^8.2.1","sinon":"^4.5.0","terser-webpack-plugin":"^4.2.3","typescript":"^4.0.5","url-search-params":"^0.10.0","webpack":"^4.44.2","webpack-dev-server":"^3.11.0"},"browser":{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},"jsdelivr":"dist/axios.min.js","unpkg":"dist/axios.min.js","typings":"./index.d.ts","dependencies":{"follow-redirects":"^1.14.0"},"bundlesize":[{"path":"./dist/axios.min.js","threshold":"5kB"}]}')}}]);