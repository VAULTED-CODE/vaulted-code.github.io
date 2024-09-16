import{aH as $,p as d,g as U,q as b,aI as Ue,z as Xe,c as u,h as c,t as f,W as ce,aJ as k,aK as Z,aL as Ge,aM as Ye,aN as qe,aw as C,O as Ke,ax as ee,I as Je,v as de,r as fe,x as ve,aO as Qe,w as F,aP as Ze,aQ as et,s as tt,ao as nt,m as st,B as at,y as X,C as it,A as te,U as me,T as ot,aR as rt,aS as ne,P as lt,X as ut,V as ct,aT as dt,aU as se,aV as R,aC as G,aE as ge}from"./index-0054c7b1.js";const he=["top","bottom"],ft=["start","end","left","right"];function vt(e,t){let[n,s]=e.split(" ");return s||(s=$(he,n)?"start":$(ft,n)?"top":"center"),{side:ae(n,t),align:ae(s,t)}}function ae(e,t){return e==="start"?t?"right":"left":e==="end"?t?"left":"right":e}function Yt(e){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.side],align:e.align}}function qt(e){return{side:e.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.align]}}function Kt(e){return{side:e.align,align:e.side}}function Jt(e){return $(he,e.side)?"y":"x"}const w=d({class:[String,Array,Object],style:{type:[String,Array,Object],default:null}},"component");function B(e){const t=U("useRender");t.render=e}const Qt=(e,t)=>{const n=e.__vccOpts||e;for(const[s,a]of t)n[s]=a;return n},P=d({tag:{type:String,default:"div"}},"tag"),mt=d({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),Zt=b(!1)({name:"VDefaultsProvider",props:mt(),setup(e,t){let{slots:n}=t;const{defaults:s,disabled:a,reset:i,root:o,scoped:r}=Ue(e);return Xe(s,{reset:i,root:o,scoped:r,disabled:a}),()=>{var l;return(l=n.default)==null?void 0:l.call(n)}}});const ye=d({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function pe(e){return{dimensionStyles:u(()=>{const n={},s=c(e.height),a=c(e.maxHeight),i=c(e.maxWidth),o=c(e.minHeight),r=c(e.minWidth),l=c(e.width);return s!=null&&(n.height=s),a!=null&&(n.maxHeight=a),i!=null&&(n.maxWidth=i),o!=null&&(n.minHeight=o),r!=null&&(n.minWidth=r),l!=null&&(n.width=l),n})}}function gt(e){return{aspectStyles:u(()=>{const t=Number(e.aspectRatio);return t?{paddingBottom:String(1/t*100)+"%"}:void 0})}}const ht=d({aspectRatio:[String,Number],contentClass:null,inline:Boolean,...w(),...ye()},"VResponsive"),en=b()({name:"VResponsive",props:ht(),setup(e,t){let{slots:n}=t;const{aspectStyles:s}=gt(e),{dimensionStyles:a}=pe(e);return B(()=>{var i;return f("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[a.value,e.style]},[f("div",{class:"v-responsive__sizer",style:s.value},null),(i=n.additional)==null?void 0:i.call(n),n.default&&f("div",{class:["v-responsive__content",e.contentClass]},[n.default()])])}),{}}});function Y(e){return ce(()=>{const t=[],n={};if(e.value.background)if(Z(e.value.background)){if(n.backgroundColor=e.value.background,!e.value.text&&Ge(e.value.background)){const s=Ye(e.value.background);if(s.a==null||s.a===1){const a=qe(s);n.color=a,n.caretColor=a}}}else t.push(`bg-${e.value.background}`);return e.value.text&&(Z(e.value.text)?(n.color=e.value.text,n.caretColor=e.value.text):t.push(`text-${e.value.text}`)),{colorClasses:t,colorStyles:n}})}function be(e,t){const n=u(()=>({text:k(e)?e.value:t?e[t]:null})),{colorClasses:s,colorStyles:a}=Y(n);return{textColorClasses:s,textColorStyles:a}}function H(e,t){const n=u(()=>({background:k(e)?e.value:t?e[t]:null})),{colorClasses:s,colorStyles:a}=Y(n);return{backgroundColorClasses:s,backgroundColorStyles:a}}const yt=d({rounded:{type:[Boolean,Number,String],default:void 0},tile:Boolean},"rounded");function pt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:C();return{roundedClasses:u(()=>{const s=k(e)?e.value:e.rounded,a=k(e)?e.value:e.tile,i=[];if(s===!0||s==="")i.push(`${t}--rounded`);else if(typeof s=="string"||s===0)for(const o of String(s).split(" "))i.push(`rounded-${o}`);else(a||s===!1)&&i.push("rounded-0");return i})}}const tn=d({border:[Boolean,Number,String]},"border");function nn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:C();return{borderClasses:u(()=>{const s=k(e)?e.value:e.border,a=[];if(s===!0||s==="")a.push(`${t}--border`);else if(typeof s=="string"||s===0)for(const i of String(s).split(" "))a.push(`border-${i}`);return a})}}const sn=d({elevation:{type:[Number,String],validator(e){const t=parseInt(e);return!isNaN(t)&&t>=0&&t<=24}}},"elevation");function an(e){return{elevationClasses:u(()=>{const n=k(e)?e.value:e.elevation,s=[];return n==null||s.push(`elevation-${n}`),s})}}const bt=[null,"default","comfortable","compact"],on=d({density:{type:String,default:"default",validator:e=>bt.includes(e)}},"density");function rn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:C();return{densityClasses:u(()=>`${t}--density-${e.density}`)}}const Ct=["elevated","flat","tonal","outlined","text","plain"];function ln(e,t){return f(Ke,null,[e&&f("span",{key:"overlay",class:`${t}__overlay`},null),f("span",{key:"underlay",class:`${t}__underlay`},null)])}const un=d({color:String,variant:{type:String,default:"elevated",validator:e=>Ct.includes(e)}},"variant");function cn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:C();const n=u(()=>{const{variant:i}=ee(e);return`${t}--variant-${i}`}),{colorClasses:s,colorStyles:a}=Y(u(()=>{const{variant:i,color:o}=ee(e);return{[["elevated","flat"].includes(i)?"background":"text"]:o}}));return{colorClasses:s,colorStyles:a,variantClasses:n}}const St=["x-small","small","default","large","x-large"],_t=d({size:{type:[String,Number],default:"default"}},"size");function kt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:C();return ce(()=>{let n,s;return $(St,e.size)?n=`${t}--size-${e.size}`:e.size&&(s={width:c(e.size),height:c(e.size)}),{sizeClasses:n,sizeStyles:s}})}const wt=d({color:String,disabled:Boolean,start:Boolean,end:Boolean,icon:Je,...w(),..._t(),...P({tag:"i"}),...de()},"VIcon"),dn=b()({name:"VIcon",props:wt(),setup(e,t){let{attrs:n,slots:s}=t;const a=fe(),{themeClasses:i}=ve(e),{iconData:o}=Qe(u(()=>a.value||e.icon)),{sizeClasses:r}=kt(e),{textColorClasses:l,textColorStyles:m}=be(F(e,"color"));return B(()=>{var g,h;const p=(g=s.default)==null?void 0:g.call(s);p&&(a.value=(h=Ze(p).filter(S=>S.type===et&&S.children&&typeof S.children=="string")[0])==null?void 0:h.children);const v=!!(n.onClick||n.onClickOnce);return f(o.value.component,{tag:e.tag,icon:o.value.icon,class:["v-icon","notranslate",i.value,r.value,l.value,{"v-icon--clickable":v,"v-icon--disabled":e.disabled,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[r.value?void 0:{fontSize:c(e.size),height:c(e.size),width:c(e.size)},m.value,e.style],role:v?"button":void 0,"aria-hidden":!v,tabindex:v?e.disabled?-1:0:void 0},{default:()=>[p]})}),{}}});function Lt(e,t){const n=fe(),s=tt(!1);if(nt){const a=new IntersectionObserver(i=>{e==null||e(i,a),s.value=!!i.find(o=>o.isIntersecting)},t);st(()=>{a.disconnect()}),at(n,(i,o)=>{o&&(a.unobserve(o),s.value=!1),i&&a.observe(i)},{flush:"post"})}return{intersectionRef:n,isIntersecting:s}}const ie={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},xt=d({location:String},"location");function Et(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=arguments.length>2?arguments[2]:void 0;const{isRtl:s}=X();return{locationStyles:u(()=>{if(!e.location)return{};const{side:i,align:o}=vt(e.location.split(" ").length>1?e.location:`${e.location} center`,s.value);function r(m){return n?n(m):0}const l={};return i!=="center"&&(t?l[ie[i]]=`calc(100% - ${r(i)}px)`:l[i]=0),o!=="center"?t?l[ie[o]]=`calc(100% - ${r(o)}px)`:l[o]=0:(i==="center"?l.top=l.left="50%":l[{top:"left",bottom:"left",left:"top",right:"top"}[i]]="50%",l.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[i]),l})}}const Pt=d({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},bufferColor:String,bufferOpacity:[Number,String],clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},opacity:[Number,String],reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...w(),...xt({location:"top"}),...yt(),...P(),...de()},"VProgressLinear"),Vt=b()({name:"VProgressLinear",props:Pt(),emits:{"update:modelValue":e=>!0},setup(e,t){var Q;let{slots:n}=t;const s=it(e,"modelValue"),{isRtl:a,rtlClasses:i}=X(),{themeClasses:o}=ve(e),{locationStyles:r}=Et(e),{textColorClasses:l,textColorStyles:m}=be(e,"color"),{backgroundColorClasses:p,backgroundColorStyles:v}=H(u(()=>e.bgColor||e.color)),{backgroundColorClasses:g,backgroundColorStyles:h}=H(u(()=>e.bufferColor||e.bgColor||e.color)),{backgroundColorClasses:S,backgroundColorStyles:J}=H(e,"color"),{roundedClasses:Ae}=pt(e),{intersectionRef:O,isIntersecting:je}=Lt(),I=u(()=>parseFloat(e.max)),_=u(()=>parseFloat(e.height)),z=u(()=>te(parseFloat(e.bufferValue)/I.value*100,0,100)),A=u(()=>te(parseFloat(s.value)/I.value*100,0,100)),V=u(()=>a.value!==e.reverse),He=u(()=>e.indeterminate?"fade-transition":"slide-x-transition"),N=me&&((Q=window.matchMedia)==null?void 0:Q.call(window,"(forced-colors: active)").matches);function De(L){if(!O.value)return;const{left:Fe,right:Me,width:j}=O.value.getBoundingClientRect(),We=V.value?j-L.clientX+(Me-j):L.clientX-Fe;s.value=Math.round(We/j*I.value)}return B(()=>f(e.tag,{ref:O,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&je.value,"v-progress-linear--reverse":V.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},Ae.value,o.value,i.value,e.class],style:[{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?c(_.value):0,"--v-progress-linear-height":c(_.value),...e.absolute?r.value:{}},e.style],role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:A.value,onClick:e.clickable&&De},{default:()=>[e.stream&&f("div",{key:"stream",class:["v-progress-linear__stream",l.value],style:{...m.value,[V.value?"left":"right"]:c(-_.value),borderTop:`${c(_.value/2)} dotted`,opacity:parseFloat(e.bufferOpacity),top:`calc(50% - ${c(_.value/4)})`,width:c(100-z.value,"%"),"--v-progress-linear-stream-to":c(_.value*(V.value?1:-1))}},null),f("div",{class:["v-progress-linear__background",N?void 0:p.value],style:[v.value,{opacity:parseFloat(e.bgOpacity),width:e.stream?0:void 0}]},null),f("div",{class:["v-progress-linear__buffer",N?void 0:g.value],style:[h.value,{opacity:parseFloat(e.bufferOpacity),width:c(z.value,"%")}]},null),f(ot,{name:He.value},{default:()=>[e.indeterminate?f("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(L=>f("div",{key:L,class:["v-progress-linear__indeterminate",L,N?void 0:S.value],style:J.value},null))]):f("div",{class:["v-progress-linear__determinate",N?void 0:S.value],style:[J.value,{width:c(A.value,"%")}]},null)]}),n.default&&f("div",{class:"v-progress-linear__content"},[n.default({value:A.value,buffer:z.value})])]})),{}}}),fn=d({loading:[Boolean,String]},"loader");function vn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:C();return{loaderClasses:u(()=>({[`${t}--loading`]:e.loading}))}}function mn(e,t){var s;let{slots:n}=t;return f("div",{class:`${e.name}__loader`},[((s=n.default)==null?void 0:s.call(n,{color:e.color,isActive:e.active}))||f(Vt,{absolute:e.absolute,active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const Nt=["static","relative","fixed","absolute","sticky"],gn=d({position:{type:String,validator:e=>Nt.includes(e)}},"position");function hn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:C();return{positionClasses:u(()=>e.position?`${t}--${e.position}`:void 0)}}function $t(){const e=U("useRoute");return u(()=>{var t;return(t=e==null?void 0:e.proxy)==null?void 0:t.$route})}function yn(){var e,t;return(t=(e=U("useRouter"))==null?void 0:e.proxy)==null?void 0:t.$router}function pn(e,t){var m,p;const n=rt("RouterLink"),s=u(()=>!!(e.href||e.to)),a=u(()=>(s==null?void 0:s.value)||ne(t,"click")||ne(e,"click"));if(typeof n=="string"||!("useLink"in n))return{isLink:s,isClickable:a,href:F(e,"href")};const i=u(()=>({...e,to:F(()=>e.to||"")})),o=n.useLink(i.value),r=u(()=>e.to?o:void 0),l=$t();return{isLink:s,isClickable:a,route:(m=r.value)==null?void 0:m.route,navigate:(p=r.value)==null?void 0:p.navigate,isActive:u(()=>{var v,g,h;return r.value?e.exact?l.value?((h=r.value.isExactActive)==null?void 0:h.value)&&lt(r.value.route.value.query,l.value.query):((g=r.value.isExactActive)==null?void 0:g.value)??!1:((v=r.value.isActive)==null?void 0:v.value)??!1:!1}),href:u(()=>{var v;return e.to?(v=r.value)==null?void 0:v.route.value.href:e.href})}}const bn=d({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");let D=!1;function Cn(e,t){let n=!1,s,a;me&&(ut(()=>{window.addEventListener("popstate",i),s=e==null?void 0:e.beforeEach((o,r,l)=>{D?n?t(l):l():setTimeout(()=>n?t(l):l()),D=!0}),a=e==null?void 0:e.afterEach(()=>{D=!1})}),ct(()=>{window.removeEventListener("popstate",i),s==null||s(),a==null||a()}));function i(o){var r;(r=o.state)!=null&&r.replaced||(n=!0,setTimeout(()=>n=!1))}}const M=Symbol("rippleStop"),Tt=80;function oe(e,t){e.style.transform=t,e.style.webkitTransform=t}function W(e){return e.constructor.name==="TouchEvent"}function Ce(e){return e.constructor.name==="KeyboardEvent"}const Rt=function(e,t){var v;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=0,a=0;if(!Ce(e)){const g=t.getBoundingClientRect(),h=W(e)?e.touches[e.touches.length-1]:e;s=h.clientX-g.left,a=h.clientY-g.top}let i=0,o=.3;(v=t._ripple)!=null&&v.circle?(o=.15,i=t.clientWidth/2,i=n.center?i:i+Math.sqrt((s-i)**2+(a-i)**2)/4):i=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const r=`${(t.clientWidth-i*2)/2}px`,l=`${(t.clientHeight-i*2)/2}px`,m=n.center?r:`${s-i}px`,p=n.center?l:`${a-i}px`;return{radius:i,scale:o,x:m,y:p,centerX:r,centerY:l}},T={show(e,t){var h;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((h=t==null?void 0:t._ripple)!=null&&h.enabled))return;const s=document.createElement("span"),a=document.createElement("span");s.appendChild(a),s.className="v-ripple__container",n.class&&(s.className+=` ${n.class}`);const{radius:i,scale:o,x:r,y:l,centerX:m,centerY:p}=Rt(e,t,n),v=`${i*2}px`;a.className="v-ripple__animation",a.style.width=v,a.style.height=v,t.appendChild(s);const g=window.getComputedStyle(t);g&&g.position==="static"&&(t.style.position="relative",t.dataset.previousPosition="static"),a.classList.add("v-ripple__animation--enter"),a.classList.add("v-ripple__animation--visible"),oe(a,`translate(${r}, ${l}) scale3d(${o},${o},${o})`),a.dataset.activated=String(performance.now()),setTimeout(()=>{a.classList.remove("v-ripple__animation--enter"),a.classList.add("v-ripple__animation--in"),oe(a,`translate(${m}, ${p}) scale3d(1,1,1)`)},0)},hide(e){var i;if(!((i=e==null?void 0:e._ripple)!=null&&i.enabled))return;const t=e.getElementsByClassName("v-ripple__animation");if(t.length===0)return;const n=t[t.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const s=performance.now()-Number(n.dataset.activated),a=Math.max(250-s,0);setTimeout(()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout(()=>{var r;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((r=n.parentNode)==null?void 0:r.parentNode)===e&&e.removeChild(n.parentNode)},300)},a)}};function Se(e){return typeof e>"u"||!!e}function x(e){const t={},n=e.currentTarget;if(!(!(n!=null&&n._ripple)||n._ripple.touched||e[M])){if(e[M]=!0,W(e))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(t.center=n._ripple.centered||Ce(e),n._ripple.class&&(t.class=n._ripple.class),W(e)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{T.show(e,n,t)},n._ripple.showTimer=window.setTimeout(()=>{var s;(s=n==null?void 0:n._ripple)!=null&&s.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)},Tt)}else T.show(e,n,t)}}function re(e){e[M]=!0}function y(e){const t=e.currentTarget;if(t!=null&&t._ripple){if(window.clearTimeout(t._ripple.showTimer),e.type==="touchend"&&t._ripple.showTimerCommit){t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,t._ripple.showTimer=window.setTimeout(()=>{y(e)});return}window.setTimeout(()=>{t._ripple&&(t._ripple.touched=!1)}),T.hide(t)}}function _e(e){const t=e.currentTarget;t!=null&&t._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let E=!1;function ke(e){!E&&(e.keyCode===se.enter||e.keyCode===se.space)&&(E=!0,x(e))}function we(e){E=!1,y(e)}function Le(e){E&&(E=!1,y(e))}function xe(e,t,n){const{value:s,modifiers:a}=t,i=Se(s);if(i||T.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=i,e._ripple.centered=a.center,e._ripple.circle=a.circle,dt(s)&&s.class&&(e._ripple.class=s.class),i&&!n){if(a.stop){e.addEventListener("touchstart",re,{passive:!0}),e.addEventListener("mousedown",re);return}e.addEventListener("touchstart",x,{passive:!0}),e.addEventListener("touchend",y,{passive:!0}),e.addEventListener("touchmove",_e,{passive:!0}),e.addEventListener("touchcancel",y),e.addEventListener("mousedown",x),e.addEventListener("mouseup",y),e.addEventListener("mouseleave",y),e.addEventListener("keydown",ke),e.addEventListener("keyup",we),e.addEventListener("blur",Le),e.addEventListener("dragstart",y,{passive:!0})}else!i&&n&&Ee(e)}function Ee(e){e.removeEventListener("mousedown",x),e.removeEventListener("touchstart",x),e.removeEventListener("touchend",y),e.removeEventListener("touchmove",_e),e.removeEventListener("touchcancel",y),e.removeEventListener("mouseup",y),e.removeEventListener("mouseleave",y),e.removeEventListener("keydown",ke),e.removeEventListener("keyup",we),e.removeEventListener("dragstart",y),e.removeEventListener("blur",Le)}function Bt(e,t){xe(e,t,!1)}function Ot(e){delete e._ripple,Ee(e)}function It(e,t){if(t.value===t.oldValue)return;const n=Se(t.oldValue);xe(e,t,n)}const Sn={mounted:Bt,unmounted:Ot,updated:It};const zt=d({fluid:{type:Boolean,default:!1},...w(),...ye(),...P()},"VContainer"),_n=b()({name:"VContainer",props:zt(),setup(e,t){let{slots:n}=t;const{rtlClasses:s}=X(),{dimensionStyles:a}=pe(e);return B(()=>f(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},s.value,e.class],style:[a.value,e.style]},n)),{}}}),Pe=(()=>R.reduce((e,t)=>(e[t]={type:[Boolean,String,Number],default:!1},e),{}))(),Ve=(()=>R.reduce((e,t)=>{const n="offset"+G(t);return e[n]={type:[String,Number],default:null},e},{}))(),Ne=(()=>R.reduce((e,t)=>{const n="order"+G(t);return e[n]={type:[String,Number],default:null},e},{}))(),le={col:Object.keys(Pe),offset:Object.keys(Ve),order:Object.keys(Ne)};function At(e,t,n){let s=e;if(!(n==null||n===!1)){if(t){const a=t.replace(e,"");s+=`-${a}`}return e==="col"&&(s="v-"+s),e==="col"&&(n===""||n===!0)||(s+=`-${n}`),s.toLowerCase()}}const jt=["auto","start","end","center","baseline","stretch"],Ht=d({cols:{type:[Boolean,String,Number],default:!1},...Pe,offset:{type:[String,Number],default:null},...Ve,order:{type:[String,Number],default:null},...Ne,alignSelf:{type:String,default:null,validator:e=>jt.includes(e)},...w(),...P()},"VCol"),kn=b()({name:"VCol",props:Ht(),setup(e,t){let{slots:n}=t;const s=u(()=>{const a=[];let i;for(i in le)le[i].forEach(r=>{const l=e[r],m=At(i,r,l);m&&a.push(m)});const o=a.some(r=>r.startsWith("v-col-"));return a.push({"v-col":!o||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),a});return()=>{var a;return ge(e.tag,{class:[s.value,e.class],style:e.style},(a=n.default)==null?void 0:a.call(n))}}}),q=["start","end","center"],$e=["space-between","space-around","space-evenly"];function K(e,t){return R.reduce((n,s)=>{const a=e+G(s);return n[a]=t(),n},{})}const Dt=[...q,"baseline","stretch"],Te=e=>Dt.includes(e),Re=K("align",()=>({type:String,default:null,validator:Te})),Ft=[...q,...$e],Be=e=>Ft.includes(e),Oe=K("justify",()=>({type:String,default:null,validator:Be})),Mt=[...q,...$e,"stretch"],Ie=e=>Mt.includes(e),ze=K("alignContent",()=>({type:String,default:null,validator:Ie})),ue={align:Object.keys(Re),justify:Object.keys(Oe),alignContent:Object.keys(ze)},Wt={align:"align",justify:"justify",alignContent:"align-content"};function Ut(e,t,n){let s=Wt[e];if(n!=null){if(t){const a=t.replace(e,"");s+=`-${a}`}return s+=`-${n}`,s.toLowerCase()}}const Xt=d({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:Te},...Re,justify:{type:String,default:null,validator:Be},...Oe,alignContent:{type:String,default:null,validator:Ie},...ze,...w(),...P()},"VRow"),wn=b()({name:"VRow",props:Xt(),setup(e,t){let{slots:n}=t;const s=u(()=>{const a=[];let i;for(i in ue)ue[i].forEach(o=>{const r=e[o],l=Ut(i,o,r);l&&a.push(l)});return a.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),a});return()=>{var a;return ge(e.tag,{class:["v-row",s.value,e.class],style:e.style},(a=n.default)==null?void 0:a.call(n))}}});export{yn as A,Cn as B,ae as C,_n as D,wn as E,kn as F,en as G,_t as H,kt as I,Vt as J,fn as K,xt as L,gn as M,vn as N,Et as O,hn as P,mn as Q,Sn as R,ht as S,Lt as T,Zt as V,Qt as _,P as a,tn as b,sn as c,yt as d,H as e,nn as f,an as g,pt as h,on as i,ye as j,bn as k,un as l,w as m,pn as n,cn as o,rn as p,pe as q,ln as r,dn as s,be as t,B as u,vt as v,Yt as w,qt as x,Kt as y,Jt as z};
