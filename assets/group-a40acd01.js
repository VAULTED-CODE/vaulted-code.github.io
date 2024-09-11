import{q as w,ar as V,T as I,ak as S,p as b,aj as $,g as C,j as A,d as _,a as k,w as B,c as x,m as E,B as q,b as F,D as O,o as z,P as H,as as M,h as U}from"./index-918e3fdf.js";const N=b({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function m(s,u,o){return w()({name:s,props:N({mode:o,origin:u}),setup(e,i){let{slots:a}=i;const t={onBeforeEnter(n){e.origin&&(n.style.transformOrigin=e.origin)},onLeave(n){if(e.leaveAbsolute){const{offsetTop:c,offsetLeft:v,offsetWidth:g,offsetHeight:p}=n;n._transitionInitialStyles={position:n.style.position,top:n.style.top,left:n.style.left,width:n.style.width,height:n.style.height},n.style.position="absolute",n.style.top=`${c}px`,n.style.left=`${v}px`,n.style.width=`${g}px`,n.style.height=`${p}px`}e.hideOnLeave&&n.style.setProperty("display","none","important")},onAfterLeave(n){if(e.leaveAbsolute&&(n!=null&&n._transitionInitialStyles)){const{position:c,top:v,left:g,width:p,height:r}=n._transitionInitialStyles;delete n._transitionInitialStyles,n.style.position=c||"",n.style.top=v||"",n.style.left=g||"",n.style.width=p||"",n.style.height=r||""}}};return()=>{const n=e.group?V:I;return S(n,{name:e.disabled?"":s,css:!e.disabled,...e.group?void 0:{mode:e.mode},...e.disabled?{}:t},a.default)}}})}function P(s,u){let o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return w()({name:s,props:{mode:{type:String,default:o},disabled:Boolean},setup(e,i){let{slots:a}=i;return()=>S(I,{name:e.disabled?"":s,css:!e.disabled,...e.disabled?{}:u},a.default)}})}function T(){let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const o=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",e=$(`offset-${o}`);return{onBeforeEnter(t){t._parent=t.parentNode,t._initialStyle={transition:t.style.transition,overflow:t.style.overflow,[o]:t.style[o]}},onEnter(t){const n=t._initialStyle;t.style.setProperty("transition","none","important"),t.style.overflow="hidden";const c=`${t[e]}px`;t.style[o]="0",t.offsetHeight,t.style.transition=n.transition,s&&t._parent&&t._parent.classList.add(s),requestAnimationFrame(()=>{t.style[o]=c})},onAfterEnter:a,onEnterCancelled:a,onLeave(t){t._initialStyle={transition:"",overflow:t.style.overflow,[o]:t.style[o]},t.style.overflow="hidden",t.style[o]=`${t[e]}px`,t.offsetHeight,requestAnimationFrame(()=>t.style[o]="0")},onAfterLeave:i,onLeaveCancelled:i};function i(t){s&&t._parent&&t._parent.classList.remove(s),a(t)}function a(t){const n=t._initialStyle[o];t.style.overflow=t._initialStyle.overflow,n!=null&&(t.style[o]=n),delete t._initialStyle}}m("fab-transition","center center","out-in");m("dialog-bottom-transition");m("dialog-top-transition");const J=m("fade-transition");m("scale-transition");m("scroll-x-transition");m("scroll-x-reverse-transition");m("scroll-y-transition");m("scroll-y-reverse-transition");m("slide-x-transition");m("slide-x-reverse-transition");const R=m("slide-y-transition");m("slide-y-reverse-transition");const Y=P("expand-transition",T());P("expand-x-transition",T("",!0));const Q=b({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),X=b({value:null,disabled:Boolean,selectedClass:String},"group-item");function Z(s,u){let o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const e=C("useGroupItem");if(!e)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const i=A();_(Symbol.for(`${u.description}:id`),i);const a=k(u,null);if(!a){if(!o)return a;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${u.description}`)}const t=B(s,"value"),n=x(()=>!!(a.disabled.value||s.disabled));a.register({id:i,value:t,disabled:n},e),E(()=>{a.unregister(i)});const c=x(()=>a.isSelected(i)),v=x(()=>c.value&&[a.selectedClass.value,s.selectedClass]);return q(c,g=>{e.emit("group:selected",{value:g})}),{id:i,isSelected:c,toggle:()=>a.select(i,!c.value),select:g=>a.select(i,g),selectedClass:v,value:t,disabled:n,group:a}}function K(s,u){let o=!1;const e=F([]),i=O(s,"modelValue",[],r=>r==null?[]:G(e,M(r)),r=>{const l=j(e,r);return s.multiple?l:l[0]}),a=C("useGroup");function t(r,l){const f=r,d=Symbol.for(`${u.description}:id`),h=U(d,a==null?void 0:a.vnode).indexOf(l);h>-1?e.splice(h,0,f):e.push(f)}function n(r){if(o)return;c();const l=e.findIndex(f=>f.id===r);e.splice(l,1)}function c(){const r=e.find(l=>!l.disabled);r&&s.mandatory==="force"&&!i.value.length&&(i.value=[r.id])}z(()=>{c()}),E(()=>{o=!0});function v(r,l){const f=e.find(d=>d.id===r);if(!(l&&(f!=null&&f.disabled)))if(s.multiple){const d=i.value.slice(),y=d.findIndex(L=>L===r),h=~y;if(l=l??!h,h&&s.mandatory&&d.length<=1||!h&&s.max!=null&&d.length+1>s.max)return;y<0&&l?d.push(r):y>=0&&!l&&d.splice(y,1),i.value=d}else{const d=i.value.includes(r);if(s.mandatory&&d)return;i.value=l??!d?[r]:[]}}function g(r){if(s.multiple,i.value.length){const l=i.value[0],f=e.findIndex(h=>h.id===l);let d=(f+r)%e.length,y=e[d];for(;y.disabled&&d!==f;)d=(d+r)%e.length,y=e[d];if(y.disabled)return;i.value=[e[d].id]}else{const l=e.find(f=>!f.disabled);l&&(i.value=[l.id])}}const p={register:t,unregister:n,selected:i,select:v,disabled:B(s,"disabled"),prev:()=>g(e.length-1),next:()=>g(1),isSelected:r=>i.value.includes(r),selectedClass:x(()=>s.selectedClass),items:x(()=>e),getItemIndex:r=>W(e,r)};return _(u,p),p}function W(s,u){const o=G(s,[u]);return o.length?s.findIndex(e=>e.id===o[0]):-1}function G(s,u){const o=[];return u.forEach(e=>{const i=s.find(t=>H(e,t.value)),a=s[e];(i==null?void 0:i.value)!=null?o.push(i.id):a!=null&&o.push(a.id)}),o}function j(s,u){const o=[];return u.forEach(e=>{const i=s.findIndex(a=>a.id===e);if(~i){const a=s[i];o.push(a.value!=null?a.value:i)}}),o}export{Y as V,J as a,R as b,X as c,Z as d,Q as m,K as u};