import{al as g,j as v,r as y,am as P,an as w,a as h,ao as x,M as b,ap as C,aq as O}from"./entry.299ef072.js";const k=()=>null;function H(...s){const u=typeof s[s.length-1]=="string"?s.pop():void 0;typeof s[0]!="string"&&s.unshift(u);let[a,l,r={}]=s;if(typeof a!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof l!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");r.server=r.server??!0,r.default=r.default??k,r.lazy=r.lazy??!1,r.immediate=r.immediate??!0;const e=v(),f=()=>e.isHydrating?e.payload.data[a]:e.static.data[a],d=()=>f()!==void 0;(!e._asyncData[a]||!r.immediate)&&(e._asyncData[a]={data:y(f()??r.default()),pending:y(!d()),error:P(e.payload._errors,a),status:y("idle")});const t={...e._asyncData[a]};t.refresh=t.execute=(i={})=>{if(e._asyncDataPromises[a]){if(i.dedupe===!1)return e._asyncDataPromises[a];e._asyncDataPromises[a].cancelled=!0}if((i._initial||e.isHydrating&&i._initial!==!1)&&d())return f();t.pending.value=!0,t.status.value="pending";const c=new Promise((n,o)=>{try{n(l(e))}catch(_){o(_)}}).then(n=>{if(c.cancelled)return e._asyncDataPromises[a];let o=n;r.transform&&(o=r.transform(n)),r.pick&&(o=M(o,r.pick)),t.data.value=o,t.error.value=null,t.status.value="success"}).catch(n=>{if(c.cancelled)return e._asyncDataPromises[a];t.error.value=n,t.data.value=b(r.default()),t.status.value="error"}).finally(()=>{c.cancelled||(t.pending.value=!1,e.payload.data[a]=t.data.value,t.error.value&&(e.payload._errors[a]=C(t.error.value)),delete e._asyncDataPromises[a])});return e._asyncDataPromises[a]=c,e._asyncDataPromises[a]};const p=()=>t.refresh({_initial:!0}),D=r.server!==!1&&e.payload.serverRendered;{const i=O();if(i&&!i._nuxtOnBeforeMountCbs){i._nuxtOnBeforeMountCbs=[];const n=i._nuxtOnBeforeMountCbs;i&&(w(()=>{n.forEach(o=>{o()}),n.splice(0,n.length)}),h(()=>n.splice(0,n.length)))}D&&e.isHydrating&&d()?(t.pending.value=!1,t.status.value=t.error.value?"error":"success"):i&&(e.payload.serverRendered&&e.isHydrating||r.lazy)&&r.immediate?i._nuxtOnBeforeMountCbs.push(p):r.immediate&&p(),r.watch&&x(r.watch,()=>t.refresh());const c=e.hook("app:data:refresh",n=>{if(!n||n.includes(a))return t.refresh()});i&&h(c)}const m=Promise.resolve(e._asyncDataPromises[a]).then(()=>t);return Object.assign(m,t),m}async function A(s){await new Promise(a=>g(a));const u=s?Array.isArray(s)?s:[s]:void 0;await v().hooks.callHookParallel("app:data:refresh",u)}function M(s,u){const a={};for(const l of u)a[l]=s[l];return a}export{A as r,H as u};
