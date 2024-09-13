import{K as x}from"./VRow-1f866383.js";import{t as f,P as C,p as R,at as L,c as r,as as y,au as S,av as h,w as p,Q as w,g as E,V as $,Y as P,W as V}from"./index-d92f9951.js";const _=["elevated","flat","tonal","outlined","text","plain"];function q(e,t){return f(C,null,[e&&f("span",{key:"overlay",class:`${t}__overlay`},null),f("span",{key:"underlay",class:`${t}__underlay`},null)])}const A=R({color:String,variant:{type:String,default:"elevated",validator:e=>_.includes(e)}},"variant");function I(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:L();const s=r(()=>{const{variant:o}=y(e);return`${t}--variant-${o}`}),{colorClasses:a,colorStyles:u}=x(r(()=>{const{variant:o,color:i}=y(e);return{[["elevated","flat"].includes(o)?"background":"text"]:i}}));return{colorClasses:a,colorStyles:u,variantClasses:s}}function b(){const e=E("useRoute");return r(()=>{var t;return(t=e==null?void 0:e.proxy)==null?void 0:t.$route})}function N(){var e,t;return(t=(e=E("useRouter"))==null?void 0:e.proxy)==null?void 0:t.$router}function O(e,t){var d,g;const s=S("RouterLink"),a=r(()=>!!(e.href||e.to)),u=r(()=>(a==null?void 0:a.value)||h(t,"click")||h(e,"click"));if(typeof s=="string"||!("useLink"in s))return{isLink:a,isClickable:u,href:p(e,"href")};const o=r(()=>({...e,to:p(()=>e.to||"")})),i=s.useLink(o.value),n=r(()=>e.to?i:void 0),l=b();return{isLink:a,isClickable:u,route:(d=n.value)==null?void 0:d.route,navigate:(g=n.value)==null?void 0:g.navigate,isActive:r(()=>{var c,k,m;return n.value?e.exact?l.value?((m=n.value.isExactActive)==null?void 0:m.value)&&w(n.value.route.value.query,l.value.query):((k=n.value.isExactActive)==null?void 0:k.value)??!1:((c=n.value.isActive)==null?void 0:c.value)??!1:!1}),href:r(()=>{var c;return e.to?(c=n.value)==null?void 0:c.route.value.href:e.href})}}const D=R({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");let v=!1;function F(e,t){let s=!1,a,u;$&&(P(()=>{window.addEventListener("popstate",o),a=e==null?void 0:e.beforeEach((i,n,l)=>{v?s?t(l):l():setTimeout(()=>s?t(l):l()),v=!0}),u=e==null?void 0:e.afterEach(()=>{v=!1})}),V(()=>{window.removeEventListener("popstate",o),a==null||a(),u==null||u()}));function o(i){var n;(n=i.state)!=null&&n.replaced||(s=!0,setTimeout(()=>s=!1))}}export{A as a,I as b,N as c,F as d,q as g,D as m,O as u};
