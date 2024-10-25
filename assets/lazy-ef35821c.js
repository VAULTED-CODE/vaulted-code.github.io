import{aC as be,r as J,ag as ye,k as T,y as _,aD as K,s as Z,o as Q,c as d,p as x,q as O,m as G,u as D,w as he,t as I,n as v,g as X,e as Ce,b as Y,i as ke,a as Ie,z as Be,aH as Se,a8 as xe,aa as Ve,f as Pe,ae as we,B as Re,C as ze,d as _e,I as Ge,$ as W,U as Ae}from"./index-be04c680.js";import{b as p,m as $,y as ee,c as te,d as ne,a as M,F as ae,z as se,f as le,g as oe,h as ie,u as A,w as ue,x as re,O as j,Z as Le,n as Ee,B as Ne,C as Te,D as Oe,E as De,o as $e,H as Me,I as Ue,J as Fe,K as qe,G as We,R as je,N as He,l as E,i as N}from"./VAvatar-f876bce0.js";function Je(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"content";const l=be(),t=J();if(ye){const n=new ResizeObserver(a=>{e==null||e(a,n),a.length&&(i==="content"?t.value=a[0].contentRect:t.value=a[0].target.getBoundingClientRect())});T(()=>{n.disconnect()}),_(()=>l.el,(a,f)=>{f&&(n.unobserve(f),t.value=void 0),a&&n.observe(a)},{flush:"post"})}return{resizeRef:l,contentRect:K(t)}}function it(){const e=Z(!1);return Q(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:d(()=>e.value?void 0:{transition:"none !important"}),isBooted:K(e)}}const de=x({baseColor:String,divided:Boolean,...p(),...$(),...ee(),...te(),...ne(),...M(),...O(),...ae()},"VBtnGroup"),H=G()({name:"VBtnGroup",props:de(),setup(e,i){let{slots:l}=i;const{themeClasses:t}=D(e),{densityClasses:n}=se(e),{borderClasses:a}=le(e),{elevationClasses:f}=oe(e),{roundedClasses:b}=ie(e);he({VBtn:{height:"auto",baseColor:I(e,"baseColor"),color:I(e,"color"),density:I(e,"density"),flat:!0,variant:I(e,"variant")}}),A(()=>v(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},t.value,a.value,n.value,f.value,b.value,e.class],style:e.style},l))}}),Ke=x({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),Ze=x({value:null,disabled:Boolean,selectedClass:String},"group-item");function Qe(e,i){let l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const t=X("useGroupItem");if(!t)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const n=Ce();Y(Symbol.for(`${i.description}:id`),n);const a=ke(i,null);if(!a){if(!l)return a;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${i.description}`)}const f=I(e,"value"),b=d(()=>!!(a.disabled.value||e.disabled));a.register({id:n,value:f,disabled:b},t),T(()=>{a.unregister(n)});const g=d(()=>a.isSelected(n)),h=d(()=>a.items.value[0].id===n),C=d(()=>a.items.value[a.items.value.length-1].id===n),k=d(()=>g.value&&[a.selectedClass.value,e.selectedClass]);return _(g,o=>{t.emit("group:selected",{value:o})},{flush:"sync"}),{id:n,isSelected:g,isFirst:h,isLast:C,toggle:()=>a.select(n,!g.value),select:o=>a.select(n,o),selectedClass:k,value:f,disabled:b,group:a}}function Xe(e,i){let l=!1;const t=Ie([]),n=Be(e,"modelValue",[],o=>o==null?[]:ce(t,Ve(o)),o=>{const r=pe(t,o);return e.multiple?r:r[0]}),a=X("useGroup");function f(o,r){const c=o,s=Symbol.for(`${i.description}:id`),m=Pe(s,a==null?void 0:a.vnode).indexOf(r);we(c.value)==null&&(c.value=m,c.useIndexAsValue=!0),m>-1?t.splice(m,0,c):t.push(c)}function b(o){if(l)return;g();const r=t.findIndex(c=>c.id===o);t.splice(r,1)}function g(){const o=t.find(r=>!r.disabled);o&&e.mandatory==="force"&&!n.value.length&&(n.value=[o.id])}Q(()=>{g()}),T(()=>{l=!0}),Se(()=>{for(let o=0;o<t.length;o++)t[o].useIndexAsValue&&(t[o].value=o)});function h(o,r){const c=t.find(s=>s.id===o);if(!(r&&(c!=null&&c.disabled)))if(e.multiple){const s=n.value.slice(),u=s.findIndex(B=>B===o),m=~u;if(r=r??!m,m&&e.mandatory&&s.length<=1||!m&&e.max!=null&&s.length+1>e.max)return;u<0&&r?s.push(o):u>=0&&!r&&s.splice(u,1),n.value=s}else{const s=n.value.includes(o);if(e.mandatory&&s)return;n.value=r??!s?[o]:[]}}function C(o){if(e.multiple,n.value.length){const r=n.value[0],c=t.findIndex(m=>m.id===r);let s=(c+o)%t.length,u=t[s];for(;u.disabled&&s!==c;)s=(s+o)%t.length,u=t[s];if(u.disabled)return;n.value=[t[s].id]}else{const r=t.find(c=>!c.disabled);r&&(n.value=[r.id])}}const k={register:f,unregister:b,selected:n,select:h,disabled:I(e,"disabled"),prev:()=>C(t.length-1),next:()=>C(1),isSelected:o=>n.value.includes(o),selectedClass:d(()=>e.selectedClass),items:d(()=>t),getItemIndex:o=>Ye(t,o)};return Y(i,k),k}function Ye(e,i){const l=ce(e,[i]);return l.length?e.findIndex(t=>t.id===l[0]):-1}function ce(e,i){const l=[];return i.forEach(t=>{const n=e.find(f=>xe(t,f.value)),a=e[t];(n==null?void 0:n.value)!=null?l.push(n.id):a!=null&&l.push(a.id)}),l}function pe(e,i){const l=[];return i.forEach(t=>{const n=e.findIndex(a=>a.id===t);if(~n){const a=e[n];l.push(a.value!=null?a.value:n)}}),l}const ve=Symbol.for("vuetify:v-btn-toggle"),et=x({...de(),...Ke()},"VBtnToggle");G()({name:"VBtnToggle",props:et(),emits:{"update:modelValue":e=>!0},setup(e,i){let{slots:l}=i;const{isSelected:t,next:n,prev:a,select:f,selected:b}=Xe(e,ve);return A(()=>{const g=H.filterProps(e);return v(H,Re({class:["v-btn-toggle",e.class]},g,{style:e.style}),{default:()=>{var h;return[(h=l.default)==null?void 0:h.call(l,{isSelected:t,next:n,prev:a,select:f,selected:b})]}})}),{next:n,prev:a,select:f}}});const tt=x({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...$(),...ue(),...M({tag:"div"}),...O()},"VProgressCircular"),nt=G()({name:"VProgressCircular",props:tt(),setup(e,i){let{slots:l}=i;const t=20,n=2*Math.PI*t,a=J(),{themeClasses:f}=D(e),{sizeClasses:b,sizeStyles:g}=re(e),{textColorClasses:h,textColorStyles:C}=j(I(e,"color")),{textColorClasses:k,textColorStyles:o}=j(I(e,"bgColor")),{intersectionRef:r,isIntersecting:c}=Le(),{resizeRef:s,contentRect:u}=Je(),m=d(()=>Math.max(0,Math.min(100,parseFloat(e.modelValue)))),B=d(()=>Number(e.width)),P=d(()=>g.value?Number(e.size):u.value?u.value.width:Math.max(B.value,32)),V=d(()=>t/(1-B.value/P.value)*2),w=d(()=>B.value/P.value*V.value),L=d(()=>_e((100-m.value)/100*n));return ze(()=>{r.value=a.value,s.value=a.value}),A(()=>v(e.tag,{ref:a,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":c.value,"v-progress-circular--disable-shrink":e.indeterminate==="disable-shrink"},f.value,b.value,h.value,e.class],style:[g.value,C.value,e.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:m.value},{default:()=>[v("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${V.value} ${V.value}`},[v("circle",{class:["v-progress-circular__underlay",k.value],style:o.value,fill:"transparent",cx:"50%",cy:"50%",r:t,"stroke-width":w.value,"stroke-dasharray":n,"stroke-dashoffset":0},null),v("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:t,"stroke-width":w.value,"stroke-dasharray":n,"stroke-dashoffset":L.value},null)]),l.default&&v("div",{class:"v-progress-circular__content"},[l.default({value:m.value})])]})),{}}});function at(e,i){_(()=>{var l;return(l=e.isActive)==null?void 0:l.value},l=>{e.isLink.value&&l&&i&&Ge(()=>{i(!0)})},{immediate:!0})}const st=x({active:{type:Boolean,default:void 0},activeColor:String,baseColor:String,symbol:{type:null,default:ve},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:W,appendIcon:W,block:Boolean,readonly:Boolean,slim:Boolean,stacked:Boolean,ripple:{type:[Boolean,Object],default:!0},text:String,...p(),...$(),...ee(),...Ee(),...te(),...Ze(),...Ne(),...Te(),...Oe(),...ne(),...De(),...ue(),...M({tag:"button"}),...O(),...ae({variant:"elevated"})},"VBtn"),ut=G()({name:"VBtn",props:st(),emits:{"group:selected":e=>!0},setup(e,i){let{attrs:l,slots:t}=i;const{themeClasses:n}=D(e),{borderClasses:a}=le(e),{densityClasses:f}=se(e),{dimensionStyles:b}=$e(e),{elevationClasses:g}=oe(e),{loaderClasses:h}=Me(e),{locationStyles:C}=Ue(e),{positionClasses:k}=Fe(e),{roundedClasses:o}=ie(e),{sizeClasses:r,sizeStyles:c}=re(e),s=Qe(e,e.symbol,!1),u=qe(e,l),m=d(()=>{var y;return e.active!==void 0?e.active:u.isLink.value?(y=u.isActive)==null?void 0:y.value:s==null?void 0:s.isSelected.value}),B=d(()=>m.value?e.activeColor??e.color:e.color),P=d(()=>{var S,z;return{color:(s==null?void 0:s.isSelected.value)&&(!u.isLink.value||((S=u.isActive)==null?void 0:S.value))||!s||((z=u.isActive)==null?void 0:z.value)?B.value??e.baseColor:e.baseColor,variant:e.variant}}),{colorClasses:V,colorStyles:w,variantClasses:L}=We(P),R=d(()=>(s==null?void 0:s.disabled.value)||e.disabled),fe=d(()=>e.variant==="elevated"&&!(e.disabled||e.flat||e.border)),me=d(()=>{if(!(e.value===void 0||typeof e.value=="symbol"))return Object(e.value)===e.value?JSON.stringify(e.value,null,0):e.value});function ge(y){var S;R.value||u.isLink.value&&(y.metaKey||y.ctrlKey||y.shiftKey||y.button!==0||l.target==="_blank")||((S=u.navigate)==null||S.call(u,y),s==null||s.toggle())}return at(u,s==null?void 0:s.select),A(()=>{const y=u.isLink.value?"a":e.tag,S=!!(e.prependIcon||t.prepend),z=!!(e.appendIcon||t.append),U=!!(e.icon&&e.icon!==!0);return Ae(v(y,{type:y==="a"?void 0:"button",class:["v-btn",s==null?void 0:s.selectedClass.value,{"v-btn--active":m.value,"v-btn--block":e.block,"v-btn--disabled":R.value,"v-btn--elevated":fe.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--readonly":e.readonly,"v-btn--slim":e.slim,"v-btn--stacked":e.stacked},n.value,a.value,V.value,f.value,g.value,h.value,k.value,o.value,r.value,L.value,e.class],style:[w.value,b.value,C.value,c.value,e.style],"aria-busy":e.loading?!0:void 0,disabled:R.value||void 0,href:u.href.value,tabindex:e.loading||e.readonly?-1:void 0,onClick:ge,value:me.value},{default:()=>{var F;return[He(!0,"v-btn"),!e.icon&&S&&v("span",{key:"prepend",class:"v-btn__prepend"},[t.prepend?v(N,{key:"prepend-defaults",disabled:!e.prependIcon,defaults:{VIcon:{icon:e.prependIcon}}},t.prepend):v(E,{key:"prepend-icon",icon:e.prependIcon},null)]),v("span",{class:"v-btn__content","data-no-activator":""},[!t.default&&U?v(E,{key:"content-icon",icon:e.icon},null):v(N,{key:"content-defaults",disabled:!U,defaults:{VIcon:{icon:e.icon}}},{default:()=>{var q;return[((q=t.default)==null?void 0:q.call(t))??e.text]}})]),!e.icon&&z&&v("span",{key:"append",class:"v-btn__append"},[t.append?v(N,{key:"append-defaults",disabled:!e.appendIcon,defaults:{VIcon:{icon:e.appendIcon}}},t.append):v(E,{key:"append-icon",icon:e.appendIcon},null)]),!!e.loading&&v("span",{key:"loader",class:"v-btn__loader"},[((F=t.loader)==null?void 0:F.call(t))??v(nt,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,width:"2"},null)])]}}),[[je,!R.value&&e.ripple,"",{center:!!e.icon}]])}),{group:s}}}),rt=x({eager:Boolean},"lazy");function dt(e,i){const l=Z(!1),t=d(()=>l.value||e.eager||i.value);_(i,()=>l.value=!0);function n(){e.eager||(l.value=!1)}return{isBooted:l,hasContent:t,onAfterLeave:n}}export{ut as V,it as a,Xe as b,Ze as c,rt as d,Qe as e,dt as f,Ke as g,nt as h,st as m,Je as u};
