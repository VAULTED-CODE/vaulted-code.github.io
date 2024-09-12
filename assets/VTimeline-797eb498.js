import{m,d as k,c as S,e as h,h as I,g as P,u as v,i as b,a as T,j as B}from"./VRow-07470a75.js";import{p as C,J as V,q as f,w as l,t,s as R,r as $,B as O,f as u,ak as j,v as w,x as N,y as q,z as x,c as D}from"./index-76d0e6de.js";import{k as z,l as E,e as L,V as F,m as J,d as U}from"./VCol-7bc2dce5.js";const A=C({dotColor:String,fillDot:Boolean,hideDot:Boolean,icon:V,iconColor:String,lineColor:String,...m(),...k(),...z(),...S()},"VTimelineDivider"),G=f()({name:"VTimelineDivider",props:A(),setup(e,c){let{slots:i}=c;const{sizeClasses:r,sizeStyles:a}=E(e,"v-timeline-divider__dot"),{backgroundColorStyles:d,backgroundColorClasses:o}=h(l(e,"dotColor")),{roundedClasses:n}=I(e,"v-timeline-divider__dot"),{elevationClasses:s}=P(e),{backgroundColorClasses:y,backgroundColorStyles:g}=h(l(e,"lineColor"));return v(()=>t("div",{class:["v-timeline-divider",{"v-timeline-divider--fill-dot":e.fillDot},e.class],style:e.style},[t("div",{class:["v-timeline-divider__before",y.value],style:g.value},null),!e.hideDot&&t("div",{key:"dot",class:["v-timeline-divider__dot",s.value,n.value,r.value],style:a.value},[t("div",{class:["v-timeline-divider__inner-dot",o.value,n.value],style:d.value},[i.default?t(F,{key:"icon-defaults",disabled:!e.icon,defaults:{VIcon:{color:e.iconColor,icon:e.icon,size:e.size}}},i.default):t(L,{key:"icon",color:e.iconColor,icon:e.icon,size:e.size},null)])]),t("div",{class:["v-timeline-divider__after",y.value],style:g.value},null)])),{}}}),_=C({density:String,dotColor:String,fillDot:Boolean,hideDot:Boolean,hideOpposite:{type:Boolean,default:void 0},icon:V,iconColor:String,lineInset:[Number,String],...m(),...b(),...S(),...k(),...z(),...T()},"VTimelineItem"),W=f()({name:"VTimelineItem",props:_(),setup(e,c){let{slots:i}=c;const{dimensionStyles:r}=B(e),a=R(0),d=$();return O(d,o=>{var n;o&&(a.value=((n=o.$el.querySelector(".v-timeline-divider__dot"))==null?void 0:n.getBoundingClientRect().width)??0)},{flush:"post"}),v(()=>{var o,n;return t("div",{class:["v-timeline-item",{"v-timeline-item--fill-dot":e.fillDot},e.class],style:[{"--v-timeline-dot-size":u(a.value),"--v-timeline-line-inset":e.lineInset?`calc(var(--v-timeline-dot-size) / 2 + ${u(e.lineInset)})`:u(0)},e.style]},[t("div",{class:"v-timeline-item__body",style:r.value},[(o=i.default)==null?void 0:o.call(i)]),t(G,{ref:d,hideDot:e.hideDot,icon:e.icon,iconColor:e.iconColor,size:e.size,elevation:e.elevation,dotColor:e.dotColor,fillDot:e.fillDot,rounded:e.rounded},{default:i.icon}),e.density!=="compact"&&t("div",{class:"v-timeline-item__opposite"},[!e.hideOpposite&&((n=i.opposite)==null?void 0:n.call(i))])])}),{}}}),H=C({align:{type:String,default:"center",validator:e=>["center","start"].includes(e)},direction:{type:String,default:"vertical",validator:e=>["vertical","horizontal"].includes(e)},justify:{type:String,default:"auto",validator:e=>["auto","center"].includes(e)},side:{type:String,validator:e=>e==null||["start","end"].includes(e)},lineThickness:{type:[String,Number],default:2},lineColor:String,truncateLine:{type:String,validator:e=>["start","end","both"].includes(e)},...j(_({lineInset:0}),["dotColor","fillDot","hideOpposite","iconColor","lineInset","size"]),...m(),...J(),...T(),...w()},"VTimeline"),X=f()({name:"VTimeline",props:H(),setup(e,c){let{slots:i}=c;const{themeClasses:r}=N(e),{densityClasses:a}=U(e),{rtlClasses:d}=q();x({VTimelineDivider:{lineColor:l(e,"lineColor")},VTimelineItem:{density:l(e,"density"),dotColor:l(e,"dotColor"),fillDot:l(e,"fillDot"),hideOpposite:l(e,"hideOpposite"),iconColor:l(e,"iconColor"),lineColor:l(e,"lineColor"),lineInset:l(e,"lineInset"),size:l(e,"size")}});const o=D(()=>{const s=e.side?e.side:e.density!=="default"?"end":null;return s&&`v-timeline--side-${s}`}),n=D(()=>{const s=["v-timeline--truncate-line-start","v-timeline--truncate-line-end"];switch(e.truncateLine){case"both":return s;case"start":return s[0];case"end":return s[1];default:return null}});return v(()=>t(e.tag,{class:["v-timeline",`v-timeline--${e.direction}`,`v-timeline--align-${e.align}`,`v-timeline--justify-${e.justify}`,n.value,{"v-timeline--inset-line":!!e.lineInset},r.value,a.value,o.value,d.value,e.class],style:[{"--v-timeline-line-thickness":u(e.lineThickness)},e.style]},i)),{}}});export{X as V,W as a};