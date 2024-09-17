import{p as W,aG as D,B as E,aH as G,T as L,aI as F,m as J,t as K,g as Q,s as h,r as X,c as P,y as R,af as Y,I as Z,k as p,U,$ as ee,n as s,H as te,d as re,a0 as ne}from"./index-2c2aece8.js";import{S as ae,m as se,d as ie,e as oe,h as le,u as ue,q as $}from"./VRow-65591f4e.js";const ce=W({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),I=(e,o)=>{let{slots:l}=o;const{transition:r,disabled:g,group:m,...f}=e,{component:d=m?G:L,...S}=typeof r=="object"?r:{};return D(d,E(typeof r=="string"?{name:g?"":r}:S,typeof r=="string"?{}:Object.fromEntries(Object.entries({disabled:g,group:m}).filter(n=>{let[a,c]=n;return c!==void 0})),f),l)};function de(e,o){if(!F)return;const l=o.modifiers||{},r=o.value,{handler:g,options:m}=typeof r=="object"?r:{handler:r,options:{}},f=new IntersectionObserver(function(){var c;let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],S=arguments.length>1?arguments[1]:void 0;const n=(c=e._observe)==null?void 0:c[o.instance.$.uid];if(!n)return;const a=d.some(b=>b.isIntersecting);g&&(!l.quiet||n.init)&&(!l.once||a||n.init)&&g(a,d,S),a&&l.once?H(e,o):n.init=!0},m);e._observe=Object(e._observe),e._observe[o.instance.$.uid]={init:!1,observer:f},f.observe(e)}function H(e,o){var r;const l=(r=e._observe)==null?void 0:r[o.instance.$.uid];l&&(l.observer.unobserve(e),delete e._observe[o.instance.$.uid])}const ve={mounted:de,unmounted:H},ge=ve,me=W({absolute:Boolean,alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...ae(),...se(),...ie(),...ce()},"VImg"),be=J()({name:"VImg",directives:{intersect:ge},props:me(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,o){let{emit:l,slots:r}=o;const{backgroundColorClasses:g,backgroundColorStyles:m}=oe(K(e,"color")),{roundedClasses:f}=le(e),d=Q("VImg"),S=h(""),n=X(),a=h(e.eager?"loading":"idle"),c=h(),b=h(),u=P(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),_=P(()=>u.value.aspect||c.value/b.value||0);R(()=>e.src,()=>{z(a.value!=="idle")}),R(_,(t,i)=>{!t&&i&&n.value&&y(n.value)}),Y(()=>z());function z(t){if(!(e.eager&&t)&&!(F&&!t&&!e.eager)){if(a.value="loading",u.value.lazySrc){const i=new Image;i.src=u.value.lazySrc,y(i,null)}u.value.src&&Z(()=>{var i;l("loadstart",((i=n.value)==null?void 0:i.currentSrc)||u.value.src),setTimeout(()=>{var v;if(!d.isUnmounted)if((v=n.value)!=null&&v.complete){if(n.value.naturalWidth||k(),a.value==="error")return;_.value||y(n.value,null),a.value==="loading"&&j()}else _.value||y(n.value),w()})})}}function j(){var t;d.isUnmounted||(w(),y(n.value),a.value="loaded",l("load",((t=n.value)==null?void 0:t.currentSrc)||u.value.src))}function k(){var t;d.isUnmounted||(a.value="error",l("error",((t=n.value)==null?void 0:t.currentSrc)||u.value.src))}function w(){const t=n.value;t&&(S.value=t.currentSrc||t.src)}let T=-1;p(()=>{clearTimeout(T)});function y(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const v=()=>{if(clearTimeout(T),d.isUnmounted)return;const{naturalHeight:V,naturalWidth:O}=t;V||O?(c.value=O,b.value=V):!t.complete&&a.value==="loading"&&i!=null?T=window.setTimeout(v,i):(t.currentSrc.endsWith(".svg")||t.currentSrc.startsWith("data:image/svg+xml"))&&(c.value=1,b.value=1)};v()}const B=P(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),N=()=>{var v;if(!u.value.src||a.value==="idle")return null;const t=s("img",{class:["v-img__img",B.value],style:{objectPosition:e.position},src:u.value.src,srcset:u.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:n,onLoad:j,onError:k},null),i=(v=r.sources)==null?void 0:v.call(r);return s(I,{transition:e.transition,appear:!0},{default:()=>[U(i?s("picture",{class:"v-img__picture"},[i,t]):t,[[ne,a.value==="loaded"]])]})},q=()=>s(I,{transition:e.transition},{default:()=>[u.value.lazySrc&&a.value!=="loaded"&&s("img",{class:["v-img__img","v-img__img--preload",B.value],style:{objectPosition:e.position},src:u.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),M=()=>r.placeholder?s(I,{transition:e.transition,appear:!0},{default:()=>[(a.value==="loading"||a.value==="error"&&!r.error)&&s("div",{class:"v-img__placeholder"},[r.placeholder()])]}):null,x=()=>r.error?s(I,{transition:e.transition,appear:!0},{default:()=>[a.value==="error"&&s("div",{class:"v-img__error"},[r.error()])]}):null,A=()=>e.gradient?s("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,C=h(!1);{const t=R(_,i=>{i&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{C.value=!0})}),t())})}return ue(()=>{const t=$.filterProps(e);return U(s($,E({class:["v-img",{"v-img--absolute":e.absolute,"v-img--booting":!C.value},g.value,f.value,e.class],style:[{width:re(e.width==="auto"?c.value:e.width)},m.value,e.style]},t,{aspectRatio:_.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>s(te,null,[s(N,null,null),s(q,null,null),s(A,null,null),s(M,null,null),s(x,null,null)]),default:r.default}),[[ee("intersect"),{handler:z,options:e.options},null,{once:!0}]])}),{currentSrc:S,image:n,state:a,naturalWidth:c,naturalHeight:b}}});export{ge as I,I as M,be as V,ce as a,me as m};