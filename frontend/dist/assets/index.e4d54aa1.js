var wt=Object.defineProperty;var yt=(t,e,n)=>e in t?wt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var X=(t,e,n)=>(yt(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function F(){}function mt(t){return t()}function We(){return Object.create(null)}function Z(t){t.forEach(mt)}function ht(t){return typeof t=="function"}function le(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function $t(t){return Object.keys(t).length===0}function vt(t,...e){if(t==null)return F;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function G(t,e,n){t.$$.on_destroy.push(vt(e,n))}function x(t,e,n){return t.set(n),e}function u(t,e){t.appendChild(e)}function T(t,e,n){t.insertBefore(e,n||null)}function N(t){t.parentNode&&t.parentNode.removeChild(t)}function $e(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function m(t){return document.createElement(t)}function D(t){return document.createTextNode(t)}function y(){return D(" ")}function q(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function gt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function v(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function we(t){return t===""?null:+t}function Ct(t){return Array.from(t.childNodes)}function H(t,e){e=""+e,t.data!==e&&(t.data=e)}function K(t,e){t.value=e==null?"":e}function Ie(t,e,n){for(let l=0;l<t.options.length;l+=1){const i=t.options[l];if(i.__value===e){i.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function Pt(t){const e=t.querySelector(":checked");return e&&e.__value}function Oe(t,e,n){t.classList[n?"add":"remove"](e)}let De;function Pe(t){De=t}function St(){if(!De)throw new Error("Function called outside component initialization");return De}function Dt(t){St().$$.on_mount.push(t)}const be=[],je=[];let ke=[];const He=[],Nt=Promise.resolve();let Me=!1;function Tt(){Me||(Me=!0,Nt.then(bt))}function Re(t){ke.push(t)}const Ve=new Set;let ve=0;function bt(){if(ve!==0)return;const t=De;do{try{for(;ve<be.length;){const e=be[ve];ve++,Pe(e),Ot(e.$$)}}catch(e){throw be.length=0,ve=0,e}for(Pe(null),be.length=0,ve=0;je.length;)je.pop()();for(let e=0;e<ke.length;e+=1){const n=ke[e];Ve.has(n)||(Ve.add(n),n())}ke.length=0}while(be.length);for(;He.length;)He.pop()();Me=!1,Ve.clear(),Pe(t)}function Ot(t){if(t.fragment!==null){t.update(),Z(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Re)}}function Rt(t){const e=[],n=[];ke.forEach(l=>t.indexOf(l)===-1?e.push(l):n.push(l)),n.forEach(l=>l()),ke=e}const Te=new Set;let me;function ce(){me={r:0,c:[],p:me}}function ae(){me.r||Z(me.c),me=me.p}function E(t,e){t&&t.i&&(Te.delete(t),t.i(e))}function W(t,e,n,l){if(t&&t.o){if(Te.has(t))return;Te.add(t),me.c.push(()=>{Te.delete(t),l&&(n&&t.d(1),l())}),t.o(e)}else l&&l()}function Et(t,e){t.d(1),e.delete(t.key)}function Vt(t,e,n,l,i,r,s,c,o,a,h,p){let d=t.length,_=r.length,f=d;const g={};for(;f--;)g[t[f].key]=f;const b=[],M=new Map,k=new Map,S=[];for(f=_;f--;){const w=p(i,r,f),$=n(w);let P=s.get($);P?l&&S.push(()=>P.p(w,e)):(P=a($,w),P.c()),M.set($,b[f]=P),$ in g&&k.set($,Math.abs(f-g[$]))}const C=new Set,V=new Set;function I(w){E(w,1),w.m(c,h),s.set(w.key,w),h=w.first,_--}for(;d&&_;){const w=b[_-1],$=t[d-1],P=w.key,z=$.key;w===$?(h=w.first,d--,_--):M.has(z)?!s.has(P)||C.has(P)?I(w):V.has(z)?d--:k.get(P)>k.get(z)?(V.add(P),I(w)):(C.add(z),d--):(o($,s),d--)}for(;d--;){const w=t[d];M.has(w.key)||o(w,s)}for(;_;)I(b[_-1]);return Z(S),b}function fe(t){t&&t.c()}function re(t,e,n,l){const{fragment:i,after_update:r}=t.$$;i&&i.m(e,n),l||Re(()=>{const s=t.$$.on_mount.map(mt).filter(ht);t.$$.on_destroy?t.$$.on_destroy.push(...s):Z(s),t.$$.on_mount=[]}),r.forEach(Re)}function se(t,e){const n=t.$$;n.fragment!==null&&(Rt(n.after_update),Z(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Mt(t,e){t.$$.dirty[0]===-1&&(be.push(t),Tt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function oe(t,e,n,l,i,r,s,c=[-1]){const o=De;Pe(t);const a=t.$$={fragment:null,ctx:[],props:r,update:F,not_equal:i,bound:We(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:We(),dirty:c,skip_bound:!1,root:e.target||o.$$.root};s&&s(a.root);let h=!1;if(a.ctx=n?n(t,e.props||{},(p,d,..._)=>{const f=_.length?_[0]:d;return a.ctx&&i(a.ctx[p],a.ctx[p]=f)&&(!a.skip_bound&&a.bound[p]&&a.bound[p](f),h&&Mt(t,p)),d}):[],a.update(),h=!0,Z(a.before_update),a.fragment=l?l(a.ctx):!1,e.target){if(e.hydrate){const p=Ct(e.target);a.fragment&&a.fragment.l(p),p.forEach(N)}else a.fragment&&a.fragment.c();e.intro&&E(t.$$.fragment),re(t,e.target,e.anchor,e.customElement),bt()}Pe(o)}class ue{$destroy(){se(this,1),this.$destroy=F}$on(e,n){if(!ht(n))return F;const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(n),()=>{const i=l.indexOf(n);i!==-1&&l.splice(i,1)}}$set(e){this.$$set&&!$t(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ge=[];function de(t,e=F){let n;const l=new Set;function i(c){if(le(t,c)&&(t=c,n)){const o=!ge.length;for(const a of l)a[1](),ge.push(a,t);if(o){for(let a=0;a<ge.length;a+=2)ge[a][0](ge[a+1]);ge.length=0}}}function r(c){i(c(t))}function s(c,o=F){const a=[c,o];return l.add(a),l.size===1&&(n=e(i)||F),c(t),()=>{l.delete(a),l.size===0&&n&&(n(),n=null)}}return{set:i,update:r,subscribe:s}}const Le=de("overview"),ye=de(!1),_e=de(!1),Ce=de("run-info"),Lt=de("plan-list");function qt(){return window.go.controllers.TrainingPlanController.CreateNewPlan()}function At(t){return window.go.controllers.TrainingPlanController.DeletePlan(t)}function Ft(){return window.go.controllers.TrainingPlanController.GetAllPlans()}function Wt(t){return window.go.controllers.TrainingPlanController.SavePlan(t)}var Be;(t=>{class e{constructor(i={}){X(this,"id");X(this,"title");X(this,"distance");X(this,"run_type");X(this,"week");X(this,"day");X(this,"notes");X(this,"completed");typeof i=="string"&&(i=JSON.parse(i)),this.id=i.id,this.title=i.title,this.distance=i.distance,this.run_type=i.run_type,this.week=i.week,this.day=i.day,this.notes=i.notes,this.completed=i.completed}static createFrom(i={}){return new e(i)}}t.Run=e;class n{constructor(i={}){X(this,"id");X(this,"name");X(this,"description");X(this,"start_date");X(this,"weeks");X(this,"runs");typeof i=="string"&&(i=JSON.parse(i)),this.id=i.id,this.name=i.name,this.description=i.description,this.start_date=i.start_date,this.weeks=i.weeks,this.runs=this.convertValues(i.runs,e)}static createFrom(i={}){return new n(i)}convertValues(i,r,s=!1){if(!i)return i;if(i.slice&&i.map)return i.map(c=>this.convertValues(c,r));if(typeof i=="object"){if(s){for(const c of Object.keys(i))i[c]=new r(i[c]);return i}return new r(i)}return i}}t.TrainingPlan=n})(Be||(Be={}));const Y=de(),Se=de(),kt=de({day:1,week:1});function Ue(t,e,n){const l=t.slice();return l[8]=e[n],l}function ze(t){let e,n;return{c(){e=m("p"),n=D(t[1]),v(e,"class","error svelte-1yniury")},m(l,i){T(l,e,i),u(e,n)},p(l,i){i&2&&H(n,l[1])},d(l){l&&N(e)}}}function Ke(t){let e;return{c(){e=m("p"),e.textContent="The Traningplan varaible is null"},m(n,l){T(n,e,l)},d(n){n&&N(e)}}}function Ge(t,e){let n,l,i,r=e[8].name+"",s,c,o,a,h=e[8].weeks+"",p,d,_,f,g=e[8].start_date+"",b,M,k,S,C,V,I;function w(){return e[5](e[8])}return{key:t,first:null,c(){n=m("div"),l=m("div"),i=m("h3"),s=D(r),c=y(),o=m("p"),a=D("Weeks: "),p=D(h),d=y(),_=m("p"),f=D("Start Date: "),b=D(g),M=y(),k=m("div"),S=m("button"),S.textContent="Select",C=y(),v(n,"class","training-plan svelte-1yniury"),this.first=n},m($,P){T($,n,P),u(n,l),u(l,i),u(i,s),u(l,c),u(l,o),u(o,a),u(o,p),u(l,d),u(l,_),u(_,f),u(_,b),u(n,M),u(n,k),u(k,S),u(n,C),V||(I=q(S,"click",w),V=!0)},p($,P){e=$,P&4&&r!==(r=e[8].name+"")&&H(s,r),P&4&&h!==(h=e[8].weeks+"")&&H(p,h),P&4&&g!==(g=e[8].start_date+"")&&H(b,g)},d($){$&&N(n),V=!1,I()}}}function It(t){let e,n,l,i,r,s,c,o=[],a=new Map,h,p,d,_,f=t[1]&&ze(t),g=t[2]==null&&Ke(),b=t[2];const M=k=>k[8].id;for(let k=0;k<b.length;k+=1){let S=Ue(t,b,k),C=M(S);a.set(C,o[k]=Ge(C,S))}return{c(){e=m("div"),f&&f.c(),n=y(),l=m("div"),l.innerHTML="<h2>Training Plans</h2>",i=y(),r=m("div"),g&&g.c(),s=y(),c=m("div");for(let k=0;k<o.length;k+=1)o[k].c();h=y(),p=m("button"),p.textContent="Create New Plan",v(e,"class","container svelte-1yniury")},m(k,S){T(k,e,S),f&&f.m(e,null),u(e,n),u(e,l),u(e,i),u(e,r),g&&g.m(r,null),u(r,s),u(r,c);for(let C=0;C<o.length;C+=1)o[C]&&o[C].m(c,null);u(e,h),u(e,p),d||(_=q(p,"click",t[3]),d=!0)},p(k,[S]){k[1]?f?f.p(k,S):(f=ze(k),f.c(),f.m(e,n)):f&&(f.d(1),f=null),k[2]==null?g||(g=Ke(),g.c(),g.m(r,s)):g&&(g.d(1),g=null),S&20&&(b=k[2],o=Vt(o,S,M,1,k,b,a,c,Et,Ge,null,Ue))},i:F,o:F,d(k){k&&N(e),f&&f.d(),g&&g.d();for(let S=0;S<o.length;S+=1)o[S].d();d=!1,_()}}}function jt(t,e,n){let l,i,r=F,s=()=>(r(),r=vt(c,_=>n(2,i=_)),c);G(t,Y,_=>n(6,l=_)),t.$$.on_destroy.push(()=>r());let c=de([]);s();let o="";async function a(){try{const _=await Ft();c.set(_!=null?_:[])}catch{n(1,o="Failed to load training plans. Please try again.")}}async function h(){try{const _=await qt();c===null?s(n(0,c=de([_]))):c.update(f=>[...f,_]),x(Y,l=_,l),Ce.set("plan-settings"),_e.set(!0),ye.set(!1)}catch{n(1,o="Failed to create a new training plan. Please try again.")}}async function p(_){x(Y,l=_,l),ye.set(!1)}return Dt(a),[c,o,i,h,p,_=>p(_)]}class Ht extends ue{constructor(e){super(),oe(this,e,jt,It,le,{})}}const Je={1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday",7:"Sunday"},Bt={1:"MON",2:"TUE",3:"WED",4:"THU",5:"FRI",6:"SAT",7:"SUN"};function Qe(t){let e;return{c(){e=m("div"),e.textContent="\u2713",v(e,"class","checkmark svelte-19cseaa")},m(n,l){T(n,e,l)},d(n){n&&N(e)}}}function Ut(t){let e,n,l,i=t[0].title+"",r,s,c,o=t[0].distance+"",a,h,p,d,_,f=t[0].completed&&Qe();return{c(){e=m("div"),n=m("div"),l=m("div"),r=D(i),s=y(),c=m("div"),a=D(o),h=D(" km"),p=y(),f&&f.c(),v(n,"class","info-row svelte-19cseaa"),v(e,"class","preview-container svelte-19cseaa")},m(g,b){T(g,e,b),u(e,n),u(n,l),u(l,r),u(n,s),u(n,c),u(c,a),u(c,h),u(n,p),f&&f.m(n,null),d||(_=[q(e,"click",t[1]),q(e,"keydown",t[1])],d=!0)},p(g,[b]){b&1&&i!==(i=g[0].title+"")&&H(r,i),b&1&&o!==(o=g[0].distance+"")&&H(a,o),g[0].completed?f||(f=Qe(),f.c(),f.m(n,null)):f&&(f.d(1),f=null)},i:F,o:F,d(g){g&&N(e),f&&f.d(),d=!1,Z(_)}}}function zt(t,e,n){let{run:l}=e;function i(){Se.set(l),_e.set(!0),Ce.set("run-info")}return t.$$set=r=>{"run"in r&&n(0,l=r.run)},[l,i]}class Kt extends ue{constructor(e){super(),oe(this,e,zt,Ut,le,{run:0})}}function Xe(t,e,n){const l=t.slice();return l[11]=e[n].day,l[12]=e[n].workouts,l[13]=e[n].dayNumber,l}function Ye(t,e,n){const l=t.slice();return l[16]=e[n],l}function Ze(t){let e,n,l=t[5],i=[];for(let s=0;s<l.length;s+=1)i[s]=tt(Xe(t,l,s));const r=s=>W(i[s],1,1,()=>{i[s]=null});return{c(){e=m("div");for(let s=0;s<i.length;s+=1)i[s].c();v(e,"class","week-content")},m(s,c){T(s,e,c);for(let o=0;o<i.length;o+=1)i[o]&&i[o].m(e,null);n=!0},p(s,c){if(c&160){l=s[5];let o;for(o=0;o<l.length;o+=1){const a=Xe(s,l,o);i[o]?(i[o].p(a,c),E(i[o],1)):(i[o]=tt(a),i[o].c(),E(i[o],1),i[o].m(e,null))}for(ce(),o=l.length;o<i.length;o+=1)r(o);ae()}},i(s){if(!n){for(let c=0;c<l.length;c+=1)E(i[c]);n=!0}},o(s){i=i.filter(Boolean);for(let c=0;c<i.length;c+=1)W(i[c]);n=!1},d(s){s&&N(e),$e(i,s)}}}function xe(t){let e,n,l;return n=new Kt({props:{run:t[16]}}),{c(){e=m("div"),fe(n.$$.fragment),v(e,"class","run-preview svelte-180l63d")},m(i,r){T(i,e,r),re(n,e,null),l=!0},p(i,r){const s={};r&32&&(s.run=i[16]),n.$set(s)},i(i){l||(E(n.$$.fragment,i),l=!0)},o(i){W(n.$$.fragment,i),l=!1},d(i){i&&N(e),se(n)}}}function et(t){let e,n,l;function i(){return t[10](t[13])}return{c(){e=m("button"),e.textContent="+ Add Run",v(e,"class","add-run svelte-180l63d")},m(r,s){T(r,e,s),n||(l=q(e,"click",i),n=!0)},p(r,s){t=r},d(r){r&&N(e),n=!1,l()}}}function tt(t){let e,n,l=t[11]+"",i,r,s,c,o,a,h=t[12],p=[];for(let f=0;f<h.length;f+=1)p[f]=xe(Ye(t,h,f));const d=f=>W(p[f],1,1,()=>{p[f]=null});let _=t[12].length<2&&et(t);return{c(){e=m("div"),n=m("div"),i=D(l),r=y(),s=m("div");for(let f=0;f<p.length;f+=1)p[f].c();c=y(),_&&_.c(),o=y(),v(n,"class","day-name svelte-180l63d"),v(s,"class","day-runs svelte-180l63d"),v(e,"class","day-row svelte-180l63d")},m(f,g){T(f,e,g),u(e,n),u(n,i),u(e,r),u(e,s);for(let b=0;b<p.length;b+=1)p[b]&&p[b].m(s,null);u(s,c),_&&_.m(s,null),u(e,o),a=!0},p(f,g){if((!a||g&32)&&l!==(l=f[11]+"")&&H(i,l),g&32){h=f[12];let b;for(b=0;b<h.length;b+=1){const M=Ye(f,h,b);p[b]?(p[b].p(M,g),E(p[b],1)):(p[b]=xe(M),p[b].c(),E(p[b],1),p[b].m(s,c))}for(ce(),b=h.length;b<p.length;b+=1)d(b);ae()}f[12].length<2?_?_.p(f,g):(_=et(f),_.c(),_.m(s,null)):_&&(_.d(1),_=null)},i(f){if(!a){for(let g=0;g<h.length;g+=1)E(p[g]);a=!0}},o(f){p=p.filter(Boolean);for(let g=0;g<p.length;g+=1)W(p[g]);a=!1},d(f){f&&N(e),$e(p,f),_&&_.d()}}}function Gt(t){let e,n,l,i,r,s,c,o,a,h,p,d,_,f,g,b,M,k,S,C,V,I,w=t[1]&&Ze(t);return{c(){e=m("div"),n=m("div"),l=m("div"),i=m("span"),r=D("Week "),s=D(t[0]),c=y(),o=m("span"),a=D(t[2]),h=y(),p=m("span"),d=D("Total: "),_=D(t[3]),f=D("/"),g=D(t[4]),b=D(" km"),M=y(),k=m("span"),k.textContent="\u25BC",S=y(),w&&w.c(),v(i,"class","week-number svelte-180l63d"),v(o,"class","week-dates svelte-180l63d"),v(p,"class","week-total"),v(l,"class","week-title svelte-180l63d"),v(k,"class","arrow svelte-180l63d"),Oe(k,"open",t[1]),v(n,"class","week-header svelte-180l63d"),v(n,"tabindex",t[0]),v(n,"role","button"),v(e,"class","week-overview svelte-180l63d")},m($,P){T($,e,P),u(e,n),u(n,l),u(l,i),u(i,r),u(i,s),u(l,c),u(l,o),u(o,a),u(l,h),u(l,p),u(p,d),u(p,_),u(p,f),u(p,g),u(p,b),u(n,M),u(n,k),u(e,S),w&&w.m(e,null),C=!0,V||(I=[q(n,"click",t[6]),q(n,"keypress",t[6])],V=!0)},p($,[P]){(!C||P&1)&&H(s,$[0]),(!C||P&4)&&H(a,$[2]),(!C||P&8)&&H(_,$[3]),(!C||P&16)&&H(g,$[4]),(!C||P&2)&&Oe(k,"open",$[1]),(!C||P&1)&&v(n,"tabindex",$[0]),$[1]?w?(w.p($,P),P&2&&E(w,1)):(w=Ze($),w.c(),E(w,1),w.m(e,null)):w&&(ce(),W(w,1,1,()=>{w=null}),ae())},i($){C||(E(w),C=!0)},o($){W(w),C=!1},d($){$&&N(e),w&&w.d(),V=!1,Z(I)}}}function nt(t){const e=t.getDate(),n=t.toLocaleString("en-US",{month:"short"});return`${e} ${n}`}function Jt(t,e,n){let l,i,r,s,c,o;G(t,Y,f=>n(9,o=f));let{week:a}=e,h=!1;function p(){n(1,h=!h)}function d(f){kt.set({week:a,day:f}),Ce.set("run-create"),_e.set(!0)}const _=f=>d(f);return t.$$set=f=>{"week"in f&&n(0,a=f.week)},t.$$.update=()=>{t.$$.dirty&513&&n(8,l=o.runs?o.runs.filter(f=>f.week===a):[]),t.$$.dirty&256&&n(5,i=Object.entries(Bt).map(([f,g])=>({day:g,dayNumber:parseInt(f),workouts:l.filter(b=>b.day===parseInt(f))}))),t.$$.dirty&256&&n(4,r=l.reduce((f,g)=>f+(g.distance||0),0).toFixed(0)),t.$$.dirty&256&&n(3,s=l.reduce((f,g)=>f+(g.completed?g.distance:0),0)),t.$$.dirty&513&&n(2,c=(()=>{if(!(o!=null&&o.start_date))return"";const f=new Date(o.start_date),g=new Date(f);g.setDate(f.getDate()+(a-1)*7);const b=new Date(g);return b.setDate(g.getDate()+6),`${nt(g)} - ${nt(b)}`})())},[a,h,c,s,r,i,p,d,l,o,_]}class Qt extends ue{constructor(e){super(),oe(this,e,Jt,Gt,le,{week:0})}}function lt(t,e,n){const l=t.slice();return l[6]=e[n],l}function it(t,e,n){const l=t.slice();return l[6]=e[n],l}function Xt(t){let e,n,l,i,r,s;function c(d,_){return d[1].length>0?xt:Zt}let o=c(t),a=o(t),h=t[0],p=[];for(let d=0;d<h.length;d+=1)p[d]=st(lt(t,h,d));return{c(){e=m("h3"),e.textContent="Todays activity",n=y(),a.c(),l=y(),i=m("h3"),i.textContent="Week Overview",r=y(),s=m("div");for(let d=0;d<p.length;d+=1)p[d].c();v(s,"class","workouts-list")},m(d,_){T(d,e,_),T(d,n,_),a.m(d,_),T(d,l,_),T(d,i,_),T(d,r,_),T(d,s,_);for(let f=0;f<p.length;f+=1)p[f]&&p[f].m(s,null)},p(d,_){if(o===(o=c(d))&&a?a.p(d,_):(a.d(1),a=o(d),a&&(a.c(),a.m(l.parentNode,l))),_&1){h=d[0];let f;for(f=0;f<h.length;f+=1){const g=lt(d,h,f);p[f]?p[f].p(g,_):(p[f]=st(g),p[f].c(),p[f].m(s,null))}for(;f<p.length;f+=1)p[f].d(1);p.length=h.length}},d(d){d&&N(e),d&&N(n),a.d(d),d&&N(l),d&&N(i),d&&N(r),d&&N(s),$e(p,d)}}}function Yt(t){let e;return{c(){e=m("h2"),e.textContent="Plan has not started yet"},m(n,l){T(n,e,l)},p:F,d(n){n&&N(e)}}}function Zt(t){let e;return{c(){e=m("div"),e.textContent="No workouts scheduled for today"},m(n,l){T(n,e,l)},p:F,d(n){n&&N(e)}}}function xt(t){let e,n=t[1],l=[];for(let i=0;i<n.length;i+=1)l[i]=rt(it(t,n,i));return{c(){e=m("div");for(let i=0;i<l.length;i+=1)l[i].c();v(e,"class","workouts-list")},m(i,r){T(i,e,r);for(let s=0;s<l.length;s+=1)l[s]&&l[s].m(e,null)},p(i,r){if(r&2){n=i[1];let s;for(s=0;s<n.length;s+=1){const c=it(i,n,s);l[s]?l[s].p(c,r):(l[s]=rt(c),l[s].c(),l[s].m(e,null))}for(;s<l.length;s+=1)l[s].d(1);l.length=n.length}},d(i){i&&N(e),$e(l,i)}}}function rt(t){let e,n,l=t[6].title+"",i,r=t[6].run_type+"",s,c,o=t[6].distance+"",a,h;return{c(){e=m("div"),n=m("b"),i=D(l),s=D(r),c=D(" - "),a=D(o),h=D(`km\r
          `),v(e,"class","workout-item")},m(p,d){T(p,e,d),u(e,n),u(n,i),u(e,s),u(e,c),u(e,a),u(e,h)},p(p,d){d&2&&l!==(l=p[6].title+"")&&H(i,l),d&2&&r!==(r=p[6].run_type+"")&&H(s,r),d&2&&o!==(o=p[6].distance+"")&&H(a,o)},d(p){p&&N(e)}}}function st(t){let e,n,l=t[6].day+"",i,r,s=t[6].run_type+"",c,o,a=t[6].distance+"",h,p;return{c(){e=m("div"),n=D("Day "),i=D(l),r=D(": "),c=D(s),o=D(" - "),h=D(a),p=D(`km\r
        `),v(e,"class","workout-item")},m(d,_){T(d,e,_),u(e,n),u(e,i),u(e,r),u(e,c),u(e,o),u(e,h),u(e,p)},p(d,_){_&1&&l!==(l=d[6].day+"")&&H(i,l),_&1&&s!==(s=d[6].run_type+"")&&H(c,s),_&1&&a!==(a=d[6].distance+"")&&H(h,a)},d(d){d&&N(e)}}}function en(t){let e;function n(r,s){return r[2]?Xt:Yt}let l=n(t),i=l(t);return{c(){e=m("div"),i.c(),v(e,"class","dashboard svelte-1f8dqq1")},m(r,s){T(r,e,s),i.m(e,null)},p(r,[s]){l===(l=n(r))&&i?i.p(r,s):(i.d(1),i=l(r),i&&(i.c(),i.m(e,null)))},i:F,o:F,d(r){r&&N(e),i.d()}}}function tn(t,e,n){let l,i,r,s,c;G(t,Y,a=>n(4,c=a));let o=new Date().getDay()===0?7:new Date().getDay();return t.$$.update=()=>{var a,h;t.$$.dirty&16&&n(3,l=c?Math.ceil((new Date().getTime()-new Date(c.start_date).getTime())/(1e3*60*60*24*7)):1),t.$$.dirty&24&&n(2,i=c?l>=1&&l<=c.weeks:!1),t.$$.dirty&24&&n(0,r=(h=(a=c==null?void 0:c.runs)==null?void 0:a.filter(p=>p.week===l))!=null?h:[]),t.$$.dirty&1&&n(1,s=r.filter(p=>p.day===o))},[r,s,i,l,c]}class nn extends ue{constructor(e){super(),oe(this,e,tn,en,le,{})}}function ot(t,e,n){const l=t.slice();return l[6]=e[n],l}function ln(t){let e;return{c(){e=m("h1"),e.textContent="No plan Selected"},m(n,l){T(n,e,l)},p:F,i:F,o:F,d(n){n&&N(e)}}}function rn(t){let e,n,l,i=t[0].name+"",r,s,c,o=t[0].weeks+"",a,h,p=t[0].start_date+"",d,_,f,g,b,M,k,S,C,V,I,w,$,P,z,ee,A=t[2]&&ut(t);I=new nn({});let L=t[3],O=[];for(let R=0;R<L.length;R+=1)O[R]=ct(ot(t,L,R));const te=R=>W(O[R],1,1,()=>{O[R]=null});return{c(){e=m("div"),n=m("div"),l=m("h2"),r=D(i),s=y(),c=m("p"),a=D(o),h=D(" weeks - Start: "),d=D(p),_=y(),A&&A.c(),f=y(),g=m("div"),b=m("button"),b.textContent="Plan Settings",M=y(),k=m("button"),S=D("Save Plan"),C=y(),V=m("div"),fe(I.$$.fragment),w=y(),$=m("div");for(let R=0;R<O.length;R+=1)O[R].c();v(n,"class","plan-info"),k.disabled=t[1],v(g,"class","button-group svelte-15vx15f"),v(e,"class","header svelte-15vx15f"),v($,"class","weeks svelte-15vx15f"),v(V,"class","content svelte-15vx15f")},m(R,B){T(R,e,B),u(e,n),u(n,l),u(l,r),u(n,s),u(n,c),u(c,a),u(c,h),u(c,d),u(n,_),A&&A.m(n,null),u(e,f),u(e,g),u(g,b),u(g,M),u(g,k),u(k,S),T(R,C,B),T(R,V,B),re(I,V,null),u(V,w),u(V,$);for(let U=0;U<O.length;U+=1)O[U]&&O[U].m($,null);P=!0,z||(ee=[q(b,"click",t[5]),q(k,"click",t[4])],z=!0)},p(R,B){if((!P||B&1)&&i!==(i=R[0].name+"")&&H(r,i),(!P||B&1)&&o!==(o=R[0].weeks+"")&&H(a,o),(!P||B&1)&&p!==(p=R[0].start_date+"")&&H(d,p),R[2]?A?A.p(R,B):(A=ut(R),A.c(),A.m(n,null)):A&&(A.d(1),A=null),(!P||B&2)&&(k.disabled=R[1]),B&8){L=R[3];let U;for(U=0;U<L.length;U+=1){const ie=ot(R,L,U);O[U]?(O[U].p(ie,B),E(O[U],1)):(O[U]=ct(ie),O[U].c(),E(O[U],1),O[U].m($,null))}for(ce(),U=L.length;U<O.length;U+=1)te(U);ae()}},i(R){if(!P){E(I.$$.fragment,R);for(let B=0;B<L.length;B+=1)E(O[B]);P=!0}},o(R){W(I.$$.fragment,R),O=O.filter(Boolean);for(let B=0;B<O.length;B+=1)W(O[B]);P=!1},d(R){R&&N(e),A&&A.d(),R&&N(C),R&&N(V),se(I),$e(O,R),z=!1,Z(ee)}}}function ut(t){let e,n;return{c(){e=m("span"),n=D(t[2]),v(e,"class","error svelte-15vx15f")},m(l,i){T(l,e,i),u(e,n)},p(l,i){i&4&&H(n,l[2])},d(l){l&&N(e)}}}function ct(t){let e,n;return e=new Qt({props:{week:t[6]}}),{c(){fe(e.$$.fragment)},m(l,i){re(e,l,i),n=!0},p(l,i){const r={};i&8&&(r.week=l[6]),e.$set(r)},i(l){n||(E(e.$$.fragment,l),n=!0)},o(l){W(e.$$.fragment,l),n=!1},d(l){se(e,l)}}}function sn(t){let e,n,l,i;const r=[rn,ln],s=[];function c(o,a){return o[0]!=null?0:1}return n=c(t),l=s[n]=r[n](t),{c(){e=m("div"),l.c(),v(e,"class","overview svelte-15vx15f")},m(o,a){T(o,e,a),s[n].m(e,null),i=!0},p(o,[a]){let h=n;n=c(o),n===h?s[n].p(o,a):(ce(),W(s[h],1,1,()=>{s[h]=null}),ae(),l=s[n],l?l.p(o,a):(l=s[n]=r[n](o),l.c()),E(l,1),l.m(e,null))},i(o){i||(E(l),i=!0)},o(o){W(l),i=!1},d(o){o&&N(e),s[n].d()}}}function on(t,e,n){let l,i;G(t,Y,a=>n(0,i=a));let r=!1,s="";async function c(){if(!r)try{n(1,r=!0),await Wt(i),n(2,s="")}catch{n(2,s="Failed to save plan")}finally{n(1,r=!1)}}async function o(){Ce.set("plan-settings"),_e.set(!0)}return t.$$.update=()=>{t.$$.dirty&1&&n(3,l=i?Array.from({length:i.weeks},(a,h)=>h+1):[])},[i,r,s,l,c,o]}class un extends ue{constructor(e){super(),oe(this,e,on,sn,le,{})}}function cn(t){let e,n,l=(t[2].notes||"Click to add notes...")+"",i,r,s;return{c(){e=m("div"),n=m("div"),i=D(l),v(n,"class","notes"),v(e,"class","notes-display svelte-1cmv7rd")},m(c,o){T(c,e,o),u(e,n),u(n,i),r||(s=[q(e,"click",t[3]),q(e,"keydown",t[3])],r=!0)},p(c,o){o&4&&l!==(l=(c[2].notes||"Click to add notes...")+"")&&H(i,l)},d(c){c&&N(e),r=!1,Z(s)}}}function an(t){let e,n,l,i,r,s,c,o;return{c(){e=m("textarea"),n=y(),l=m("div"),i=m("button"),i.textContent="Save",r=y(),s=m("button"),s.textContent="Cancel",v(e,"rows","6"),v(e,"placeholder","Add notes..."),v(e,"class","svelte-1cmv7rd"),v(l,"class","notes-actions svelte-1cmv7rd")},m(a,h){T(a,e,h),K(e,t[1]),T(a,n,h),T(a,l,h),u(l,i),u(l,r),u(l,s),c||(o=[q(e,"input",t[11]),q(e,"keydown",t[6]),q(i,"click",t[4]),q(s,"click",t[5])],c=!0)},p(a,h){h&2&&K(e,a[1])},d(a){a&&N(e),a&&N(n),a&&N(l),c=!1,Z(o)}}}function fn(t){let e,n,l,i=t[2].title+"",r,s,c,o,a,h,p,d,_=t[2].run_type+"",f,g,b=t[2].distance+"",M,k,S,C,V,I,w,$,P,z;function ee(O,te){return O[0]?an:cn}let A=ee(t),L=A(t);return{c(){e=m("div"),n=m("div"),l=m("h2"),r=D(i),s=y(),c=m("label"),o=m("input"),h=y(),p=m("div"),d=m("p"),f=D(_),g=D(" \u2022 "),M=D(b),k=D(" km"),S=y(),C=m("div"),V=m("div"),V.textContent="Notes",I=y(),L.c(),w=y(),$=m("button"),$.innerHTML="<span>Delete Run</span>",v(l,"class","heading"),v(o,"type","checkbox"),v(o,"class","checkbox svelte-1cmv7rd"),o.checked=a=t[2].completed,v(c,"class","checkbox-wrapper svelte-1cmv7rd"),v(n,"class","header svelte-1cmv7rd"),v(p,"class","run-info"),v(C,"class","notes-section svelte-1cmv7rd"),v($,"class","delete-btn"),v(e,"class","container")},m(O,te){T(O,e,te),u(e,n),u(n,l),u(l,r),u(n,s),u(n,c),u(c,o),u(e,h),u(e,p),u(p,d),u(d,f),u(d,g),u(d,M),u(d,k),u(e,S),u(e,C),u(C,V),u(C,I),L.m(C,null),u(e,w),u(e,$),P||(z=[q(o,"change",t[10]),q($,"click",t[7])],P=!0)},p(O,[te]){te&4&&i!==(i=O[2].title+"")&&H(r,i),te&4&&a!==(a=O[2].completed)&&(o.checked=a),te&4&&_!==(_=O[2].run_type+"")&&H(f,_),te&4&&b!==(b=O[2].distance+"")&&H(M,b),A===(A=ee(O))&&L?L.p(O,te):(L.d(1),L=A(O),L&&(L.c(),L.m(C,null)))},i:F,o:F,d(O){O&&N(e),L.d(),P=!1,Z(z)}}}function dn(t,e,n){let l,i,r;G(t,Y,b=>n(12,i=b)),G(t,Se,b=>n(9,r=b));let s=!1,c="";function o(){n(1,c=l.notes),n(0,s=!0)}function a(){x(Se,r={...r,notes:c},r),x(Y,i={...i,convertValues:i.convertValues,runs:i.runs.map(b=>b.id===l.id?{...b,notes:c}:b)},i),n(0,s=!1)}function h(){n(0,s=!1)}function p(b){b.key==="Escape"?h():b.key==="Enter"&&b.ctrlKey&&a()}function d(){x(Y,i={...i,runs:i.runs.filter(b=>b.id!==l.id),convertValues:i.convertValues},i),_e.set(!1)}function _(b){x(Se,r={...r,completed:b},r),x(Y,i={...i,runs:i.runs.map(M=>M.id===l.id?{...M,completed:b}:M),convertValues:i.convertValues},i)}const f=b=>_(!l.completed);function g(){c=this.value,n(1,c)}return t.$$.update=()=>{t.$$.dirty&512&&n(2,l=r)},[s,c,l,o,a,h,p,d,_,r,f,g]}class _n extends ue{constructor(e){super(),oe(this,e,dn,fn,le,{})}}function at(t,e,n){const l=t.slice();return l[16]=e[n],l}function ft(t){let e,n=t[16]+"",l;return{c(){e=m("option"),l=D(n),e.__value=t[16],e.value=e.__value},m(i,r){T(i,e,r),u(e,l)},p:F,d(i){i&&N(e)}}}function pn(t){let e,n,l,i,r,s,c,o,a,h,p,d,_,f,g,b,M,k,S,C,V,I,w,$,P,z,ee,A,L,O,te,R,B,U,ie,qe,Ne,Ee,Ae,he=t[7],J=[];for(let j=0;j<he.length;j+=1)J[j]=ft(at(t,he,j));return{c(){var j;e=m("div"),n=m("h2"),n.textContent="Create New Run",l=y(),i=m("form"),r=m("div"),s=m("label"),s.textContent="Title",c=y(),o=m("input"),a=y(),h=m("div"),p=m("label"),p.textContent="Distance (km)",d=y(),_=m("input"),f=y(),g=m("div"),b=m("label"),b.textContent="Workout",M=y(),k=m("select");for(let Q=0;Q<J.length;Q+=1)J[Q].c();S=y(),C=m("div"),V=m("label"),V.textContent="Week",I=y(),w=m("input"),P=y(),z=m("div"),ee=m("label"),ee.textContent="Day",A=y(),L=m("input"),te=y(),R=m("div"),B=m("label"),B.textContent="Notes",U=y(),ie=m("textarea"),qe=y(),Ne=m("button"),Ne.textContent="Create Run",v(s,"for","title"),v(o,"id","title"),v(o,"type","text"),o.required=!0,v(r,"class","form-group"),v(p,"for","distance"),v(_,"id","distance"),v(_,"type","number"),v(_,"min","0"),v(_,"step","0.1"),_.required=!0,v(h,"class","form-group"),v(b,"for","run_type"),v(k,"id","run_type"),k.required=!0,t[3]===void 0&&Re(()=>t[12].call(k)),v(g,"class","form-group"),v(V,"for","week"),v(w,"id","week"),v(w,"type","number"),v(w,"min","1"),v(w,"max",$=((j=t[6])==null?void 0:j.weeks)||1),w.required=!0,v(C,"class","form-group"),v(ee,"for","day"),v(L,"id","day"),v(L,"type","text"),L.readOnly=!0,L.value=O=Je[t[4]],v(z,"class","form-group"),v(B,"for","notes"),v(ie,"id","notes"),v(ie,"rows","4"),v(ie,"placeholder","Notes for workout"),v(R,"class","form-group"),v(Ne,"type","submit"),v(e,"class","create-run")},m(j,Q){T(j,e,Q),u(e,n),u(e,l),u(e,i),u(i,r),u(r,s),u(r,c),u(r,o),K(o,t[0]),u(i,a),u(i,h),u(h,p),u(h,d),u(h,_),K(_,t[1]),u(i,f),u(i,g),u(g,b),u(g,M),u(g,k);for(let pe=0;pe<J.length;pe+=1)J[pe]&&J[pe].m(k,null);Ie(k,t[3],!0),u(i,S),u(i,C),u(C,V),u(C,I),u(C,w),K(w,t[5]),u(i,P),u(i,z),u(z,ee),u(z,A),u(z,L),u(i,te),u(i,R),u(R,B),u(R,U),u(R,ie),K(ie,t[2]),u(i,qe),u(i,Ne),Ee||(Ae=[q(o,"input",t[10]),q(_,"input",t[11]),q(k,"change",t[12]),q(w,"input",t[13]),q(ie,"input",t[14]),q(i,"submit",gt(t[8])),q(i,"change",console.log)],Ee=!0)},p(j,[Q]){var pe;if(Q&1&&o.value!==j[0]&&K(o,j[0]),Q&2&&we(_.value)!==j[1]&&K(_,j[1]),Q&128){he=j[7];let ne;for(ne=0;ne<he.length;ne+=1){const Fe=at(j,he,ne);J[ne]?J[ne].p(Fe,Q):(J[ne]=ft(Fe),J[ne].c(),J[ne].m(k,null))}for(;ne<J.length;ne+=1)J[ne].d(1);J.length=he.length}Q&136&&Ie(k,j[3]),Q&64&&$!==($=((pe=j[6])==null?void 0:pe.weeks)||1)&&v(w,"max",$),Q&32&&we(w.value)!==j[5]&&K(w,j[5]),Q&16&&O!==(O=Je[j[4]])&&L.value!==O&&(L.value=O),Q&4&&K(ie,j[2])},i:F,o:F,d(j){j&&N(e),$e(J,j),Ee=!1,Z(Ae)}}}function mn(t,e,n){let l,i,r,s;G(t,Y,S=>n(6,r=S)),G(t,kt,S=>n(9,s=S));let c="Run",o=0,a="";const h=["Easy Run","Intervals","Threshold","Hills","Long run","Recovery","Race"];let p=h[0];const d=()=>Math.random().toString(36).substring(2);async function _(S){S.preventDefault(),new FormData(S.target);const C={id:d(),week:l,day:i,distance:o,title:c,notes:a,run_type:p,completed:!1};x(Y,r={...r,runs:[...(r==null?void 0:r.runs)||[],C],convertValues:r==null?void 0:r.convertValues},r),Se.set(C),Ce.set("run-info")}function f(){c=this.value,n(0,c)}function g(){o=we(this.value),n(1,o)}function b(){p=Pt(this),n(3,p),n(7,h)}function M(){l=we(this.value),n(5,l),n(9,s)}function k(){a=this.value,n(2,a)}return t.$$.update=()=>{t.$$.dirty&512&&n(5,l=s.week),t.$$.dirty&512&&n(4,i=s.day)},[c,o,a,p,i,l,r,h,_,s,f,g,b,M,k]}class hn extends ue{constructor(e){super(),oe(this,e,mn,pn,le,{})}}function vn(t){let e,n,l,i,r,s,c,o,a,h,p,d,_,f,g,b,M,k,S,C,V,I,w,$,P,z,ee;return{c(){e=m("div"),n=m("form"),l=m("div"),i=m("label"),i.textContent="Plan Name",r=y(),s=m("input"),c=y(),o=m("div"),a=m("label"),a.textContent="Weeks",h=y(),p=m("input"),d=y(),_=m("div"),f=m("label"),f.textContent="Start Date",g=y(),b=m("input"),M=y(),k=m("div"),S=m("label"),S.textContent="Description",C=y(),V=m("textarea"),I=y(),w=m("button"),w.textContent="Save Changes",$=y(),P=m("button"),P.textContent="Delete",v(i,"for","name"),v(s,"type","text"),v(s,"id","name"),s.required=!0,v(l,"class","form-group"),v(a,"for","weeks"),v(p,"type","number"),v(p,"id","weeks"),v(p,"min","1"),v(p,"max","24"),p.required=!0,v(o,"class","form-group"),v(f,"for","start_date"),v(b,"type","date"),v(b,"id","start_date"),b.required=!0,v(_,"class","form-group"),v(S,"for","description"),v(V,"id","description"),v(V,"rows","4"),v(k,"class","form-group"),v(w,"type","submit"),v(e,"class","container")},m(A,L){T(A,e,L),u(e,n),u(n,l),u(l,i),u(l,r),u(l,s),K(s,t[0].name),u(n,c),u(n,o),u(o,a),u(o,h),u(o,p),K(p,t[0].weeks),u(n,d),u(n,_),u(_,f),u(_,g),u(_,b),K(b,t[0].start_date),u(n,M),u(n,k),u(k,S),u(k,C),u(k,V),K(V,t[0].description),u(n,I),u(n,w),u(e,$),u(e,P),z||(ee=[q(s,"input",t[3]),q(p,"input",t[4]),q(b,"input",t[5]),q(V,"input",t[6]),q(n,"submit",gt(t[1])),q(P,"click",t[7])],z=!0)},p(A,[L]){L&1&&s.value!==A[0].name&&K(s,A[0].name),L&1&&we(p.value)!==A[0].weeks&&K(p,A[0].weeks),L&1&&K(b,A[0].start_date),L&1&&K(V,A[0].description)},i:F,o:F,d(A){A&&N(e),z=!1,Z(ee)}}}function gn(t,e,n){let l;G(t,Y,d=>n(8,l=d));let i={name:l.name,start_date:l.start_date,weeks:l.weeks,description:l.description};function r(){x(Y,l={...l,...i,convertValues:l.convertValues},l)}async function s(){try{await At(l.id),_e.set(!1),x(Y,l=null,l)}catch(d){console.log(d)}}function c(){i.name=this.value,n(0,i)}function o(){i.weeks=we(this.value),n(0,i)}function a(){i.start_date=this.value,n(0,i)}function h(){i.description=this.value,n(0,i)}return[i,r,s,c,o,a,h,()=>s()]}class bn extends ue{constructor(e){super(),oe(this,e,gn,vn,le,{})}}function dt(t){let e,n,l,i,r,s,c=t[1]==="plan-list"&&_t();return{c(){e=m("div"),n=m("button"),n.textContent="x",l=y(),c&&c.c(),v(n,"class","close-button"),v(e,"class","left-sidebar svelte-1731iom")},m(o,a){T(o,e,a),u(e,n),u(e,l),c&&c.m(e,null),i=!0,r||(s=q(n,"click",t[5]),r=!0)},p(o,a){o[1]==="plan-list"?c?a&2&&E(c,1):(c=_t(),c.c(),E(c,1),c.m(e,null)):c&&(ce(),W(c,1,1,()=>{c=null}),ae())},i(o){i||(E(c),i=!0)},o(o){W(c),i=!1},d(o){o&&N(e),c&&c.d(),r=!1,s()}}}function _t(t){let e,n;return e=new Ht({}),{c(){fe(e.$$.fragment)},m(l,i){re(e,l,i),n=!0},i(l){n||(E(e.$$.fragment,l),n=!0)},o(l){W(e.$$.fragment,l),n=!1},d(l){se(e,l)}}}function kn(t){let e;return{c(){e=m("h1"),e.textContent="No view selected"},m(n,l){T(n,e,l)},i:F,o:F,d(n){n&&N(e)}}}function wn(t){let e,n;return e=new un({}),{c(){fe(e.$$.fragment)},m(l,i){re(e,l,i),n=!0},i(l){n||(E(e.$$.fragment,l),n=!0)},o(l){W(e.$$.fragment,l),n=!1},d(l){se(e,l)}}}function pt(t){let e,n,l,i,r,s,c,o;const a=[Cn,$n,yn],h=[];function p(d,_){return d[4]==="run-info"?0:d[4]==="run-create"?1:d[4]==="plan-settings"?2:-1}return~(i=p(t))&&(r=h[i]=a[i](t)),{c(){e=m("div"),n=m("button"),n.textContent="x",l=y(),r&&r.c(),v(n,"class","close-button"),v(e,"class","right-sidebar svelte-1731iom")},m(d,_){T(d,e,_),u(e,n),u(e,l),~i&&h[i].m(e,null),s=!0,c||(o=q(n,"click",t[6]),c=!0)},p(d,_){let f=i;i=p(d),i!==f&&(r&&(ce(),W(h[f],1,1,()=>{h[f]=null}),ae()),~i?(r=h[i],r||(r=h[i]=a[i](d),r.c()),E(r,1),r.m(e,null)):r=null)},i(d){s||(E(r),s=!0)},o(d){W(r),s=!1},d(d){d&&N(e),~i&&h[i].d(),c=!1,o()}}}function yn(t){let e,n;return e=new bn({}),{c(){fe(e.$$.fragment)},m(l,i){re(e,l,i),n=!0},i(l){n||(E(e.$$.fragment,l),n=!0)},o(l){W(e.$$.fragment,l),n=!1},d(l){se(e,l)}}}function $n(t){let e,n;return e=new hn({}),{c(){fe(e.$$.fragment)},m(l,i){re(e,l,i),n=!0},i(l){n||(E(e.$$.fragment,l),n=!0)},o(l){W(e.$$.fragment,l),n=!1},d(l){se(e,l)}}}function Cn(t){let e,n;return e=new _n({}),{c(){fe(e.$$.fragment)},m(l,i){re(e,l,i),n=!0},i(l){n||(E(e.$$.fragment,l),n=!0)},o(l){W(e.$$.fragment,l),n=!1},d(l){se(e,l)}}}function Pn(t){let e,n,l,i,r,s,c,o=t[0]&&dt(t);const a=[wn,kn],h=[];function p(_,f){return _[2]==="overview"?0:1}i=p(t),r=h[i]=a[i](t);let d=t[3]&&pt(t);return{c(){e=m("div"),o&&o.c(),n=y(),l=m("div"),r.c(),s=y(),d&&d.c(),v(l,"class","center-content svelte-1731iom"),v(e,"class","home-container svelte-1731iom")},m(_,f){T(_,e,f),o&&o.m(e,null),u(e,n),u(e,l),h[i].m(l,null),u(e,s),d&&d.m(e,null),c=!0},p(_,[f]){_[0]?o?(o.p(_,f),f&1&&E(o,1)):(o=dt(_),o.c(),E(o,1),o.m(e,n)):o&&(ce(),W(o,1,1,()=>{o=null}),ae());let g=i;i=p(_),i!==g&&(ce(),W(h[g],1,1,()=>{h[g]=null}),ae(),r=h[i],r||(r=h[i]=a[i](_),r.c()),E(r,1),r.m(l,null)),_[3]?d?(d.p(_,f),f&8&&E(d,1)):(d=pt(_),d.c(),E(d,1),d.m(e,null)):d&&(ce(),W(d,1,1,()=>{d=null}),ae())},i(_){c||(E(o),E(r),E(d),c=!0)},o(_){W(o),W(r),W(d),c=!1},d(_){_&&N(e),o&&o.d(),h[i].d(),d&&d.d()}}}function Sn(t,e,n){let l,i,r,s,c;return G(t,ye,h=>n(0,l=h)),G(t,Lt,h=>n(1,i=h)),G(t,Le,h=>n(2,r=h)),G(t,_e,h=>n(3,s=h)),G(t,Ce,h=>n(4,c=h)),[l,i,r,s,c,()=>x(ye,l=!1,l),()=>x(_e,s=!1,s)]}class Dn extends ue{constructor(e){super(),oe(this,e,Sn,Pn,le,{})}}function Nn(t){let e,n,l,i,r,s,c;return{c(){e=m("div"),n=m("button"),n.innerHTML='<span class="toggle-icon">=</span>',l=y(),i=m("div"),r=m("button"),r.textContent="Overview",v(n,"class","sidebar-toggle"),v(r,"class","svelte-dnwc8r"),Oe(r,"active",t[0]==="overview"),v(i,"class","nav-buttons svelte-dnwc8r"),v(e,"class","topbar svelte-dnwc8r")},m(o,a){T(o,e,a),u(e,n),u(e,l),u(e,i),u(i,r),s||(c=[q(n,"click",t[1]),q(r,"click",t[2])],s=!0)},p(o,[a]){a&1&&Oe(r,"active",o[0]==="overview")},i:F,o:F,d(o){o&&N(e),s=!1,Z(c)}}}function Tn(t,e,n){let l,i;G(t,ye,c=>n(3,l=c)),G(t,Le,c=>n(0,i=c));function r(){x(ye,l=!l,l)}return[i,r,()=>x(Le,i="overview",i)]}class On extends ue{constructor(e){super(),oe(this,e,Tn,Nn,le,{})}}function Rn(t){let e,n,l,i,r;return n=new On({}),i=new Dn({}),{c(){e=m("body"),fe(n.$$.fragment),l=y(),fe(i.$$.fragment)},m(s,c){T(s,e,c),re(n,e,null),u(e,l),re(i,e,null),r=!0},p:F,i(s){r||(E(n.$$.fragment,s),E(i.$$.fragment,s),r=!0)},o(s){W(n.$$.fragment,s),W(i.$$.fragment,s),r=!1},d(s){s&&N(e),se(n),se(i)}}}class En extends ue{constructor(e){super(),oe(this,e,null,Rn,le,{})}}new En({target:document.getElementById("app")});
