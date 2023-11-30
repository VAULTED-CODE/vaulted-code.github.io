import{ac as K,ad as te,p as R,g as S,j as C,h as ge,k as ve,c as t,I as E,d as Y,f as J,G as b,L as $e,t as D,s as ye,l as O,u as qe,r as Ze,w as Ke,Z as Ye,a2 as Je,a3 as h,a6 as A,a5 as a,M as I,a4 as g,ab as m,ae as z,a7 as T,a8 as x,a9 as p}from"./index-0cc78756.js";import{m as V,a as L,u as j,l as ae,n as ne,x as me,i as q,b as le,o as se,c as U,O as Qe,P as _e,Q as be,d as M,p as Xe,q as et,R as tt,f as ie,s as at,t as pe,v as oe,g as Q,S as nt,T as we,U as ke,h as X,r as lt,V as F,W as st,w as it,j as ot,e as Z,X as ct,k as dt,Y as xe,Z as rt,y as ut,I as k,J as mt}from"./VAvatar-9daa2d20.js";const Ce=(()=>K.reduce((e,i)=>(e[i]={type:[Boolean,String,Number],default:!1},e),{}))(),Se=(()=>K.reduce((e,i)=>{const n="offset"+te(i);return e[n]={type:[String,Number],default:null},e},{}))(),Ve=(()=>K.reduce((e,i)=>{const n="order"+te(i);return e[n]={type:[String,Number],default:null},e},{}))(),fe={col:Object.keys(Ce),offset:Object.keys(Se),order:Object.keys(Ve)};function ft(e,i,n){let l=e;if(!(n==null||n===!1)){if(i){const o=i.replace(e,"");l+=`-${o}`}return e==="col"&&(l="v-"+l),e==="col"&&(n===""||n===!0)||(l+=`-${n}`),l.toLowerCase()}}const ht=["auto","start","end","center","baseline","stretch"],gt=R({cols:{type:[Boolean,String,Number],default:!1},...Ce,offset:{type:[String,Number],default:null},...Se,order:{type:[String,Number],default:null},...Ve,alignSelf:{type:String,default:null,validator:e=>ht.includes(e)},...V(),...L()},"VCol"),d=S()({name:"VCol",props:gt(),setup(e,i){let{slots:n}=i;const l=C(()=>{const o=[];let c;for(c in fe)fe[c].forEach(s=>{const u=e[s],v=ft(c,s,u);v&&o.push(v)});const f=o.some(s=>s.startsWith("v-col-"));return o.push({"v-col":!f||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),o});return()=>{var o;return ge(e.tag,{class:[l.value,e.class],style:e.style},(o=n.default)==null?void 0:o.call(n))}}}),ce=["start","end","center"],Ae=["space-between","space-around","space-evenly"];function de(e,i){return K.reduce((n,l)=>{const o=e+te(l);return n[o]=i(),n},{})}const vt=[...ce,"baseline","stretch"],Ie=e=>vt.includes(e),Re=de("align",()=>({type:String,default:null,validator:Ie})),yt=[...ce,...Ae],ze=e=>yt.includes(e),Te=de("justify",()=>({type:String,default:null,validator:ze})),_t=[...ce,...Ae,"stretch"],De=e=>_t.includes(e),je=de("alignContent",()=>({type:String,default:null,validator:De})),he={align:Object.keys(Re),justify:Object.keys(Te),alignContent:Object.keys(je)},bt={align:"align",justify:"justify",alignContent:"align-content"};function pt(e,i,n){let l=bt[e];if(n!=null){if(i){const o=i.replace(e,"");l+=`-${o}`}return l+=`-${n}`,l.toLowerCase()}}const wt=R({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:Ie},...Re,justify:{type:String,default:null,validator:ze},...Te,alignContent:{type:String,default:null,validator:De},...je,...V(),...L()},"VRow"),r=S()({name:"VRow",props:wt(),setup(e,i){let{slots:n}=i;const l=C(()=>{const o=[];let c;for(c in he)he[c].forEach(f=>{const s=e[f],u=pt(c,f,s);u&&o.push(u)});return o.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),o});return()=>{var o;return ge(e.tag,{class:["v-row",l.value,e.class],style:e.style},(o=n.default)==null?void 0:o.call(n))}}}),kt="/assets/3sat-Logo-ee071556.png",xt="/assets/architizer-logo-6f67f0df.png",Ct="/assets/empa-logo-4001d404.png",St="/assets/fastcompany-logo-738a847a.png",Vt="/assets/wef-logo-e034c581.png",At="/assets/timeline_2010-240751cd.jpg",It="/assets/timeline_2013-166c2166.jpg",Rt="/assets/RFS_test-a38ca0a6.jpg",zt="/assets/timeline_2016-273dcf9c.jpg",Tt="/assets/timeline_2021-7d21fb7b.jpg",Dt="/assets/RFS_empa-1e90dc0c.jpg",jt="/assets/timeline_23b-2174167d.png",Lt="/assets/timeline_2024-ff8acdd8.jpg",Pt="/assets/VAULTED-lime-9a978913.png",Ft="/assets/CT_trimmed-ee8083bc.mp4",Bt="/assets/RFS_WEBSITE_product-to-solution-f45ed2ef.png",Et="/assets/VAULTED-white-2d5e4d98.png",Ht="/assets/ETH_Spin-off_Logo_horizontal_negativ_centered-babbde00.png";const Nt=(e,i)=>{const n=e.__vccOpts||e;for(const[l,o]of i)n[l]=o;return n};const Ot=S()({name:"VCardActions",props:V(),setup(e,i){let{slots:n}=i;return ve({VBtn:{slim:!0,variant:"text"}}),j(()=>{var l;return t("div",{class:["v-card-actions",e.class],style:e.style},[(l=n.default)==null?void 0:l.call(n)])}),{}}}),Ut=ae("v-card-subtitle"),N=ae("v-card-title"),Mt=R({appendAvatar:String,appendIcon:E,prependAvatar:String,prependIcon:E,subtitle:String,title:String,...V(),...ne()},"VCardItem"),Wt=S()({name:"VCardItem",props:Mt(),setup(e,i){let{slots:n}=i;return j(()=>{var v;const l=!!(e.prependAvatar||e.prependIcon),o=!!(l||n.prepend),c=!!(e.appendAvatar||e.appendIcon),f=!!(c||n.append),s=!!(e.title||n.title),u=!!(e.subtitle||n.subtitle);return t("div",{class:["v-card-item",e.class],style:e.style},[o&&t("div",{key:"prepend",class:"v-card-item__prepend"},[n.prepend?t(q,{key:"prepend-defaults",disabled:!l,defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar}}},n.prepend):l&&t(me,{key:"prepend-avatar",density:e.density,icon:e.prependIcon,image:e.prependAvatar},null)]),t("div",{class:"v-card-item__content"},[s&&t(N,{key:"title"},{default:()=>{var y;return[((y=n.title)==null?void 0:y.call(n))??e.title]}}),u&&t(Ut,{key:"subtitle"},{default:()=>{var y;return[((y=n.subtitle)==null?void 0:y.call(n))??e.subtitle]}}),(v=n.default)==null?void 0:v.call(n)]),f&&t("div",{key:"append",class:"v-card-item__append"},[n.append?t(q,{key:"append-defaults",disabled:!c,defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar}}},n.append):c&&t(me,{key:"append-avatar",density:e.density,icon:e.appendIcon,image:e.appendAvatar},null)])])}),{}}}),B=ae("v-card-text"),Gt=R({appendAvatar:String,appendIcon:E,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:E,ripple:{type:[Boolean,Object],default:!0},subtitle:String,text:String,title:String,...le(),...V(),...ne(),...se(),...U(),...Qe(),..._e(),...be(),...M(),...Xe(),...L(),...Y(),...et({variant:"elevated"})},"VCard"),H=S()({name:"VCard",directives:{Ripple:tt},props:Gt(),setup(e,i){let{attrs:n,slots:l}=i;const{themeClasses:o}=J(e),{borderClasses:c}=ie(e),{colorClasses:f,colorStyles:s,variantClasses:u}=at(e),{densityClasses:v}=pe(e),{dimensionStyles:y}=oe(e),{elevationClasses:P}=Q(e),{loaderClasses:ee}=nt(e),{locationStyles:W}=we(e),{positionClasses:Le}=ke(e),{roundedClasses:Pe}=X(e),G=lt(e,n),Fe=C(()=>e.link!==!1&&G.isLink.value),$=C(()=>!e.disabled&&e.link!==!1&&(e.link||G.isClickable.value));return j(()=>{const Be=Fe.value?"a":e.tag,Ee=!!(l.title||e.title),He=!!(l.subtitle||e.subtitle),Ne=Ee||He,Oe=!!(l.append||e.appendAvatar||e.appendIcon),Ue=!!(l.prepend||e.prependAvatar||e.prependIcon),Me=!!(l.image||e.image),We=Ne||Ue||Oe,Ge=!!(l.text||e.text);return b(t(Be,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":$.value},o.value,c.value,f.value,v.value,P.value,ee.value,Le.value,Pe.value,u.value,e.class],style:[s.value,y.value,W.value,e.style],href:G.href.value,onClick:$.value&&G.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var re;return[Me&&t("div",{key:"image",class:"v-card__image"},[l.image?t(q,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},l.image):t(F,{key:"image-img",cover:!0,src:e.image},null)]),t(st,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:l.loader}),We&&t(Wt,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:l.item,prepend:l.prepend,title:l.title,subtitle:l.subtitle,append:l.append}),Ge&&t(B,{key:"text"},{default:()=>{var ue;return[((ue=l.text)==null?void 0:ue.call(l))??e.text]}}),(re=l.default)==null?void 0:re.call(l),l.actions&&t(Ot,null,{default:l.actions}),it($.value,"v-card")]}}),[[$e("ripple"),$.value&&e.ripple]])}),{}}});const $t=R({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...le(),...V(),...U(),...ot(),...M(),...L({tag:"footer"}),...Y()},"VFooter"),qt=S()({name:"VFooter",props:$t(),setup(e,i){let{slots:n}=i;const{themeClasses:l}=J(e),{backgroundColorClasses:o,backgroundColorStyles:c}=Z(D(e,"color")),{borderClasses:f}=ie(e),{elevationClasses:s}=Q(e),{roundedClasses:u}=X(e),v=ye(32),{resizeRef:y}=ct(W=>{W.length&&(v.value=W[0].target.clientHeight)}),P=C(()=>e.height==="auto"?v.value:parseInt(e.height,10)),{layoutItemStyles:ee}=dt({id:e.name,order:C(()=>parseInt(e.order,10)),position:C(()=>"bottom"),layoutSize:P,elementSize:C(()=>e.height==="auto"?void 0:P.value),active:C(()=>e.app),absolute:D(e,"absolute")});return j(()=>t(e.tag,{ref:y,class:["v-footer",l.value,o.value,f.value,s.value,u.value,e.class],style:[c.value,e.app?ee.value:{height:O(e.height)},e.style]},n)),{}}});const Zt=R({color:String,...le(),...V(),...se(),...U(),..._e(),...be(),...M(),...L(),...Y()},"VSheet"),_=S()({name:"VSheet",props:Zt(),setup(e,i){let{slots:n}=i;const{themeClasses:l}=J(e),{backgroundColorClasses:o,backgroundColorStyles:c}=Z(D(e,"color")),{borderClasses:f}=ie(e),{dimensionStyles:s}=oe(e),{elevationClasses:u}=Q(e),{locationStyles:v}=we(e),{positionClasses:y}=ke(e),{roundedClasses:P}=X(e);return j(()=>t(e.tag,{class:["v-sheet",l.value,o.value,f.value,u.value,y.value,P.value,e.class],style:[c.value,s.value,v.value,e.style]},n)),{}}});const Kt=R({align:{type:String,default:"center",validator:e=>["center","start"].includes(e)},direction:{type:String,default:"vertical",validator:e=>["vertical","horizontal"].includes(e)},justify:{type:String,default:"auto",validator:e=>["auto","center"].includes(e)},side:{type:String,validator:e=>e==null||["start","end"].includes(e)},lineInset:{type:[String,Number],default:0},lineThickness:{type:[String,Number],default:2},lineColor:String,truncateLine:{type:String,validator:e=>["start","end","both"].includes(e)},...V(),...ne(),...L(),...Y()},"VTimeline"),Yt=S()({name:"VTimeline",props:Kt(),setup(e,i){let{slots:n}=i;const{themeClasses:l}=J(e),{densityClasses:o}=pe(e),{rtlClasses:c}=qe();ve({VTimelineDivider:{lineColor:D(e,"lineColor")},VTimelineItem:{density:D(e,"density"),lineInset:D(e,"lineInset")}});const f=C(()=>{const u=e.side?e.side:e.density!=="default"?"end":null;return u&&`v-timeline--side-${u}`}),s=C(()=>{const u=["v-timeline--truncate-line-start","v-timeline--truncate-line-end"];switch(e.truncateLine){case"both":return u;case"start":return u[0];case"end":return u[1];default:return null}});return j(()=>t(e.tag,{class:["v-timeline",`v-timeline--${e.direction}`,`v-timeline--align-${e.align}`,`v-timeline--justify-${e.justify}`,s.value,{"v-timeline--inset-line":!!e.lineInset},l.value,o.value,f.value,c.value,e.class],style:[{"--v-timeline-line-thickness":O(e.lineThickness)},e.style]},n)),{}}}),Jt=R({dotColor:String,fillDot:Boolean,hideDot:Boolean,icon:E,iconColor:String,lineColor:String,...V(),...M(),...xe(),...U()},"VTimelineDivider"),Qt=S()({name:"VTimelineDivider",props:Jt(),setup(e,i){let{slots:n}=i;const{sizeClasses:l,sizeStyles:o}=rt(e,"v-timeline-divider__dot"),{backgroundColorStyles:c,backgroundColorClasses:f}=Z(D(e,"dotColor")),{roundedClasses:s}=X(e,"v-timeline-divider__dot"),{elevationClasses:u}=Q(e),{backgroundColorClasses:v,backgroundColorStyles:y}=Z(D(e,"lineColor"));return j(()=>t("div",{class:["v-timeline-divider",{"v-timeline-divider--fill-dot":e.fillDot},e.class],style:e.style},[t("div",{class:["v-timeline-divider__before",v.value],style:y.value},null),!e.hideDot&&t("div",{key:"dot",class:["v-timeline-divider__dot",u.value,s.value,l.value],style:o.value},[t("div",{class:["v-timeline-divider__inner-dot",f.value,s.value],style:c.value},[n.default?t(q,{key:"icon-defaults",disabled:!e.icon,defaults:{VIcon:{color:e.iconColor,icon:e.icon,size:e.size}}},n.default):t(ut,{key:"icon",color:e.iconColor,icon:e.icon,size:e.size},null)])]),t("div",{class:["v-timeline-divider__after",v.value],style:y.value},null)])),{}}}),Xt=R({density:String,dotColor:String,fillDot:Boolean,hideDot:Boolean,hideOpposite:{type:Boolean,default:void 0},icon:E,iconColor:String,lineInset:[Number,String],...V(),...se(),...U(),...M(),...xe(),...L()},"VTimelineItem"),ea=S()({name:"VTimelineItem",props:Xt(),setup(e,i){let{slots:n}=i;const{dimensionStyles:l}=oe(e),o=ye(0),c=Ze();return Ke(c,f=>{var s;f&&(o.value=((s=f.$el.querySelector(".v-timeline-divider__dot"))==null?void 0:s.getBoundingClientRect().width)??0)},{flush:"post"}),j(()=>{var f,s;return t("div",{class:["v-timeline-item",{"v-timeline-item--fill-dot":e.fillDot},e.class],style:[{"--v-timeline-dot-size":O(o.value),"--v-timeline-line-inset":e.lineInset?`calc(var(--v-timeline-dot-size) / 2 + ${O(e.lineInset)})`:O(0)},e.style]},[t("div",{class:"v-timeline-item__body",style:l.value},[(f=n.default)==null?void 0:f.call(n)]),t(Qt,{ref:c,hideDot:e.hideDot,icon:e.icon,iconColor:e.iconColor,size:e.size,elevation:e.elevation,dotColor:e.dotColor,fillDot:e.fillDot,rounded:e.rounded},{default:n.icon}),e.density!=="compact"&&t("div",{class:"v-timeline-item__opposite"},[!e.hideOpposite&&((s=n.opposite)==null?void 0:s.call(n))])])}),{}}});function ta(e,i){var o,c;const n=i.value,l={passive:!((o=i.modifiers)!=null&&o.active)};window.addEventListener("resize",n,l),e._onResize=Object(e._onResize),e._onResize[i.instance.$.uid]={handler:n,options:l},(c=i.modifiers)!=null&&c.quiet||n()}function aa(e,i){var o;if(!((o=e._onResize)!=null&&o[i.instance.$.uid]))return;const{handler:n,options:l}=e._onResize[i.instance.$.uid];window.removeEventListener("resize",n,l),delete e._onResize[i.instance.$.uid]}const w={mounted:ta,unmounted:aa},na={setup(){const{smAndDown:e,mdAndDown:i,smAndUp:n,mdAndUp:l,platform:o,mobile:c}=Ye();return{smAndDown:e,mdAndDown:i,smAndUp:n,mdAndUp:l,platform:o,mobile:c}},computed:{setFixedBackground(){return this.supportsFixedBackground()}},methods:{onResize(){let e=window.innerWidth,i=window.innerHeight;this.videoHeight=Math.min(1080,i),e>i?this.contentHeight=i:this.smAndUp?this.contentHeight=i:this.contentHeight=i},supportsFixedBackground(){return!(this.mobile||this.platform.ios||/Mac/.test(navigator.userAgent)&&navigator.maxTouchPoints&&navigator.maxTouchPoints>2)}},data:()=>({contentHeight:window.innerHeight,videoHeight:1080,timeline:[{year:"2010",description:"Vaulted floor from soil-pressed tiles in Addis Ababa, Ethiopia",image:At},{year:"2013",description:"First prototype of a funicular floor in concrete",image:It},{year:"2015",description:"First 3D-printed prototype of a discrete funicular floor by Dr. Matthias Rippmann",image:Rt},{year:"2016",description:"Funicular floors featured at the Venice Architecture Biennale",image:zt},{year:"2021",description:"Opening of the HiLo unit at Empa's NEST, featuring an unreinforced-concrete funicular floor",image:Tt},{year:"2023",description:"RFS demonstrator, developed in a research-industry partnership between ETH Zurich and Holcim",image:Dt},{year:"2023",description:"Full-scale assembly prototype for the floor plates of the LIVIN tower in Brussels, Belgium",image:jt},{year:"2024",description:"Fully tested, one-to-one mockup for the CreaTower I project in Zug, Switzerland",image:Lt}],social:[{name:"linkedin",icon:"fa-brands fa-linkedin",link:"https://www.linkedin.com/company/vaulted-floors"},{name:"instagram",icon:"fa-brands fa-instagram",link:"https://www.instagram.com/vaultedfloors"},{name:"youtube",icon:"fa-brands fa-youtube",link:"https://www.youtube.com/@VAULTED-AG"}],news:[{link:"https://www.3sat.de/gesellschaft/politik-und-gesellschaft/uns-eine-zukunft-bauen-102.html",image:kt},{link:"https://architizer.com/blog/inspiration/industry/philippe-block-on-sustainable-construction-building-technique-is-more-important-than-materials/",image:xt},{link:"https://www.empa.ch/de/web/nest/hilo",image:Ct},{link:"https://www.fastcompany.com/90695588/these-ingenious-floors-use-70-less-concrete-and-90-less-steel",image:St},{link:"https://www.weforum.org/videos/eth-zurichs-hilo-sustainable-construction",image:Vt}],reductions:[{precent:"-70%",description:"Concrete"},{precent:"-80%",description:"Steel"},{precent:"-65%",description:"Weight"},{precent:"-80%",description:"Embodied Carbon"}],circularity:[{icon:"fa-regular fa-arrow-down-long",title:"Reduce",description:"Less concrete and less steel"},{icon:"fa-regular fa-arrow-right-long",title:"Prolong",description:"No embedded reinforcement, no corrosion"},{icon:"fa-regular fa-arrow-right-arrow-left",title:"Reuse",description:"Easy assembly and disassembly"},{icon:"fa-regular fa-arrows-rotate",title:"Recycle",description:"Mono- material elements"}],tests:[{icon:"fa-light fa-dumbbell",title:"Strength",description:"Residential and office buildings"},{icon:"fa-light fa-fire",title:"Fire",description:"Up to REI 120"},{icon:"fa-light fa-volume",title:"Sound",description:"Airborne and impact transmissions"},{icon:"fa-light fa-waveform",title:"Vibrations",description:"Human walking activities"}],availability:[{icon:"fa-light fa-shield-check",title:"Safe",description:"Robust structural solution for static, dynamic and fire loads"},{icon:"fa-light fa-file-certificate",title:"Code-compliant",description:"Optimised for acoustics and vibration control"},{icon:"fa-light fa-forward",title:"Fast",description:"Installation without specialised workers, devices or machines"},{icon:"fa-light fa-hand-holding-dollar",title:"Cost-effective",description:"Lightweight and easy to install; Save money down to the foundations"}],services:[{icon:"fa-light fa-pen",title:"Design",description:"We can assist at any stage of the design to achieve sustainable and cost-effective solutions."},{icon:"fa-light fa-gear-complex",title:"Fabrication",description:"We produce the floors according to the projects' specifications and deliver them on site."},{icon:"fa-light fa-user-helmet-safety",title:"Installation",description:"We work together with contractors to optimisze on-site logistics and installation."},{icon:"fa-light fa-comments",title:"Consulting",description:"We help clients and developers to implement our solutions across multiple projects."}]})},la=m("p",{class:"text-h4 font-weight-light text-center mt-md-n16 mb-16 pb-16 vaulted-yellow"}," Sustainable Floors in Concrete ",-1),sa=m("p",{class:"text-h5 font-weight-light vaulted-dark-blue my-8 my-md-16"},"WHY VAULTED",-1),ia=m("p",{class:"text-h3 font-weight-light vaulted-blue my-8 my-md-16"}," Revolutionising Construction in Concrete ",-1),oa=m("p",{class:"text-h5 font-weight-light vaulted-dark-blue my-8 my-md-16"}," Our bespoke prefabricated floors are designed to promote sustainability, reduce carbon footprint, and optimise construction, while ensuring maximum functionality and durability. ",-1),ca=["height"],da=m("source",{src:Ft,type:"video/mp4"},null,-1),ra=[da],ua=m("p",{class:"text-h5 font-weight-light vaulted-dark-blue"},"OUR SOLUTION",-1),ma=m("p",{class:"text-h3 font-weight-light my-8 my-md-16 vaulted-blue"}," Rippmann Floor System (RFS) ",-1),fa=m("p",{class:"text-h5 font-weight-light my-8 my-md-16 vaulted-dark-blue"},` Following the motto "strength through geometry", the Rippmann Floor System (RFS) translates the lost knowledge of the Gothic master builders into today's praxis based on world-leading research in computational engineering and innovation in digital fabrication. `,-1),ha=m("p",{class:"text-h5 font-weight-light font-italic px-12 vaulted-dark-blue"}," Concrete is an artificial stone, and like stone, it does not want to be a straight beam, it wants to be a masonry arch. ",-1),ga=m("p",{class:"text-h5 font-weight-light mb-8 mb-md-16 vaulted-dark-blue"}," The curved geometry of the RFS follows the natural flow of forces in compression, placing material exactly and only where needed. Its optimised rib layout allows the RFS to safely carry all loading cases. Like a masonry vault, it is discretised in parts that can be easily assembled, without needing glue or mechanical connectors. Throuh digital prefabrication we can reduce construction waste and offer a competitive cost. ",-1),va={class:"text-h2 font-weight-bold vaulted-grey"},ya={class:"text-h4 font-weight-regular vaulted-blue mt-4 mt-md-8"},_a=m("p",{class:"text-body-1"}," * Compared to a reinforced-concrete flat slab, the most common structural slab technology in the world. Estimated ... final savings depend on project specifics. ",-1),ba=m("p",{class:"text-h5 font-weight-light vaulted-dark-blue"},"SERVICES",-1),pa=m("p",{class:"text-h3 font-weight-light vaulted-blue"}," We offer complete solutions, from design to fabrication and consulting. ",-1),wa=m("h2",{class:"text-center text-h3 font-weight-bold vaulted-dark-blue my-16"}," From Research to Innovation ",-1),ka=m("p",{class:"text-center text-h6 font-weight-light vaulted-dark-blue my-16"},[x(" In 2023, based on more than a decade of research at the "),m("a",{href:"https://block.arch.ethz.ch",class:"vaulted-dark-blue"},"Block Research Group of ETH Zurich"),x(", Prof. Dr. Philippe Block and Dr. Tom Van Mele, together with Dr. Francesco Ranaudo, founded VAULTED, an official ETH spin-off. ")],-1),xa={class:"text-h6 font-weight-bold vaulted-dark-blue"},Ca={class:"img-fix-container"},Sa=["src"],Va=["href"],Aa=m("p",{class:"text-h6 font-weight-light"}," At VAULTED, we strive to provide the highest-quality prefabricated floor solutions for circular construction. Our team is dedicated to innovation and is constantly pushing the boundaries of what is possible with computational design and digital fabrication. Whether you are a developer, architect, structural engineer, or construction professional, we are here to provide the support and solutions you need to bring your project to life. ",-1),Ia=m("p",{class:"text-h6 font-weight-light"},[m("a",{href:"mailto:info@vaulted-floors.com",class:"text-white"},"info@vaulted-floors.com")],-1),Ra=m("p",null,"© 2023 VAULTED AG. All rights reserved.",-1);function za(e,i,n,l,o,c){const f=Je("font-awesome-icon");return h(),A(I,null,[t(k,{fluid:"",class:"ma-0 pa-0 mx-auto"},{default:a(()=>[b((h(),g(_,{"min-height":e.contentHeight-64,class:"d-flex align-center justify-center text-center pa-4 bg-banner"},{default:a(()=>[t(k,{class:"constrained"},{default:a(()=>[t(r,null,{default:a(()=>[t(d,{cols:"12",md:"8",class:"ma-0 pa-0 mx-auto"},{default:a(()=>[t(F,{src:Pt}),la]),_:1})]),_:1})]),_:1})]),_:1},8,["min-height"])),[[w,c.onResize]]),t(r,{"no-gutters":""},{default:a(()=>[t(d,{cols:"12",class:"ma-0 pa-0"},{default:a(()=>[b((h(),g(_,{"min-height":e.contentHeight,class:"d-flex flex-column align-center justify-center pa-4 bg-vaulted-beige"},{default:a(()=>[t(k,{class:"constrained pb-16"},{default:a(()=>[t(r,null,{default:a(()=>[t(d,{cols:"12",md:"8",class:"mx-auto"},{default:a(()=>[sa,ia,oa]),_:1})]),_:1})]),_:1})]),_:1},8,["min-height"])),[[w,c.onResize]])]),_:1})]),_:1}),t(r,{"no-gutters":"",class:"bg-vaulted-dark-blue"},{default:a(()=>[t(d,{cols:"12",class:"ma-0 pa-0 d-flex align-center justify-center overflow-hidden"},{default:a(()=>[m("video",{height:e.videoHeight,autoplay:"",muted:"",loop:"",playsinline:"",cover:"",class:"ma-0 pa-0"},ra,8,ca)]),_:1})]),_:1}),t(r,{"no-gutters":""},{default:a(()=>[t(d,{cols:"12",class:"ma-0 pa-0"},{default:a(()=>[b((h(),g(_,{"min-height":e.contentHeight,class:"d-flex flex-column align-center justify-center pa-4 bg-vaulted-beige"},{default:a(()=>[t(k,{class:"constrained py-16"},{default:a(()=>[t(r,null,{default:a(()=>[t(d,{cols:"12",md:"8",class:"mx-auto"},{default:a(()=>[ua,ma,fa,ha]),_:1})]),_:1}),t(r,null,{default:a(()=>[t(d,{cols:"12",md:"12",class:"mx-auto"},{default:a(()=>[t(F,{src:Bt})]),_:1})]),_:1}),t(r,null,{default:a(()=>[t(d,{cols:"12",md:"8",class:"mx-auto"},{default:a(()=>[ga]),_:1})]),_:1})]),_:1})]),_:1},8,["min-height"])),[[w,c.onResize]])]),_:1})]),_:1}),t(r,{"no-gutters":""},{default:a(()=>[t(d,{cols:"12",class:"ma-0 pa-0"},{default:a(()=>[b(t(_,{height:.8*e.contentHeight,class:z("bg-gothic"+(c.setFixedBackground?" bg-fixed":""))},null,8,["height","class"]),[[w,c.onResize]])]),_:1})]),_:1}),t(r,null,{default:a(()=>[t(d,{cols:"12"},{default:a(()=>[b((h(),g(_,{"min-height":e.contentHeight,class:"d-flex flex-column align-center justify-center text-center pa-4"},{default:a(()=>[t(k,{class:"constrained"},{default:a(()=>[t(r,null,{default:a(()=>[t(d,{cols:"12",md:"8",class:"mx-auto"},{default:a(()=>[m("h2",{class:z((l.smAndDown?"text-h4":"text-h3")+" font-weight-bold vaulted-blue my-8 my-md-16")}," Truly Circular ",2)]),_:1})]),_:1}),t(r,{class:"my-8 my-md-16"},{default:a(()=>[(h(!0),A(I,null,T(e.circularity,(s,u)=>(h(),g(d,{cols:"12",sm:"3",md:"3",key:u},{default:a(()=>[t(H,{flat:"",rounded:"0",class:"mb-4 mb-md-16"},{default:a(()=>[t(f,{icon:s.icon,size:l.smAndDown?"4x":"7x",class:"mx-auto",color:"#99a3ba"},null,8,["icon","size"]),t(N,{class:"text-h4 font-weight-regular vaulted-blue my-4 my-md-8"},{default:a(()=>[x(p(s.title),1)]),_:2},1024),t(B,{class:"text-h6 font-weight-light vaulted-grey"},{default:a(()=>[x(p(s.description),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1},8,["min-height"])),[[w,c.onResize]])]),_:1})]),_:1}),t(r,{"no-gutters":""},{default:a(()=>[t(d,{cols:"12",class:"ma-0 pa-0"},{default:a(()=>[b(t(_,{height:.8*e.contentHeight,class:z("bg-empa"+(c.setFixedBackground?" bg-fixed":""))},null,8,["height","class"]),[[w,c.onResize]])]),_:1})]),_:1}),t(r,null,{default:a(()=>[t(d,{cols:"12",xl:"8",class:"mx-auto"},{default:a(()=>[b((h(),g(_,{"min-height":e.contentHeight,class:"d-flex flex-column align-center justify-center text-center pa-4"},{default:a(()=>[t(k,{class:"constrained"},{default:a(()=>[t(r,null,{default:a(()=>[t(d,{cols:"12"},{default:a(()=>[m("h2",{class:z((l.smAndDown?"text-h4":"text-h3")+" font-weight-bold vaulted-blue my-8 my-md-16")}," Reductions up to * ",2)]),_:1})]),_:1}),t(r,{class:"my-8 my-md-16"},{default:a(()=>[(h(!0),A(I,null,T(e.reductions,(s,u)=>(h(),g(d,{cols:"12",sm:"3",key:u,class:"mb-4 mb-md-16"},{default:a(()=>[m("h2",va,p(s.precent),1),m("p",ya,p(s.description),1)]),_:2},1024))),128))]),_:1}),t(r,null,{default:a(()=>[t(d,{cols:"12",md:"8",class:"mx-auto mb-8 mb-md-16 vaulted-grey"},{default:a(()=>[_a]),_:1})]),_:1})]),_:1})]),_:1},8,["min-height"])),[[w,c.onResize]])]),_:1})]),_:1}),t(r,{"no-gutters":""},{default:a(()=>[t(d,{cols:"12",class:"ma-0 pa-0"},{default:a(()=>[b(t(_,{height:.8*e.contentHeight,class:z("bg-test"+(c.setFixedBackground?" bg-fixed":""))},null,8,["height","class"]),[[w,c.onResize]])]),_:1})]),_:1}),t(r,null,{default:a(()=>[t(d,{cols:"12",xl:"8",class:"mx-auto"},{default:a(()=>[b((h(),g(_,{"min-height":e.contentHeight,class:"d-flex flex-column align-center justify-center text-center pa-4"},{default:a(()=>[t(k,{class:"constrained"},{default:a(()=>[t(r,null,{default:a(()=>[t(d,{cols:"12"},{default:a(()=>[m("h2",{class:z((l.smAndDown?"text-h4":"text-h3")+" font-weight-bold vaulted-blue my-8 my-md-16")}," Designed and Tested for ",2)]),_:1})]),_:1}),t(r,{class:"my-8 my-md-16"},{default:a(()=>[(h(!0),A(I,null,T(e.tests,(s,u)=>(h(),g(d,{cols:"12",sm:"3",md:"3",key:u},{default:a(()=>[t(H,{flat:"",rounded:"0",class:"mb-0 mb-md-16"},{default:a(()=>[t(f,{icon:s.icon,size:l.smAndDown?"4x":"7x",class:"mx-auto",color:"#99a3ba"},null,8,["icon","size"]),t(N,{class:"text-h4 font-weight-regular vaulted-blue my-4 my-md-8"},{default:a(()=>[x(p(s.title),1)]),_:2},1024),t(B,{class:"text-h6 font-weight-light vaulted-grey"},{default:a(()=>[x(p(s.description),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1},8,["min-height"])),[[w,c.onResize]])]),_:1})]),_:1}),t(r,{"no-gutters":""},{default:a(()=>[t(d,{cols:"12",class:"ma-0 pa-0"},{default:a(()=>[b(t(_,{height:.8*e.contentHeight,class:z("bg-below"+(c.setFixedBackground?" bg-fixed":""))},null,8,["height","class"]),[[w,c.onResize]])]),_:1})]),_:1}),t(r,null,{default:a(()=>[t(d,{cols:"12",xl:"8",class:"mx-auto"},{default:a(()=>[b((h(),g(_,{"min-height":e.contentHeight,class:"d-flex flex-column align-center justify-center text-center pa-4"},{default:a(()=>[t(k,{class:"constrained"},{default:a(()=>[t(r,null,{default:a(()=>[t(d,{cols:"12"},{default:a(()=>[m("h2",{class:z((l.smAndDown?"text-h4":"text-h3")+" font-weight-bold vaulted-blue my-8 my-md-16")}," Available now! ",2)]),_:1})]),_:1}),t(r,{class:"my-8 my-md-16"},{default:a(()=>[(h(!0),A(I,null,T(e.availability,(s,u)=>(h(),g(d,{cols:"12",sm:"3",md:"3",key:u},{default:a(()=>[t(H,{flat:"",rounded:"0",class:"mb-8 mb-md-16"},{default:a(()=>[t(f,{icon:s.icon,size:l.smAndDown?"4x":"7x",class:"mx-auto",color:"#99a3ba"},null,8,["icon","size"]),t(N,{class:"text-h4 font-weight-regular vaulted-blue my-4 my-md-8"},{default:a(()=>[x(p(s.title),1)]),_:2},1024),t(B,{class:"text-h6 font-weight-light vaulted-grey"},{default:a(()=>[x(p(s.description),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1},8,["min-height"])),[[w,c.onResize]])]),_:1})]),_:1}),t(r,{"no-gutters":""},{default:a(()=>[t(d,{cols:"12",class:"ma-0 pa-0"},{default:a(()=>[b((h(),g(_,{"min-height":e.contentHeight,class:"d-flex flex-column align-center justify-center pa-4 bg-vaulted-beige"},{default:a(()=>[t(k,{class:"constrained"},{default:a(()=>[t(r,{class:"my-8 mt-md-16 mb-md-16"},{default:a(()=>[t(d,{cols:"12",md:"8",class:"mx-auto"},{default:a(()=>[ba]),_:1})]),_:1}),t(r,{class:"my-8 my-md-16"},{default:a(()=>[t(d,{cols:"12",md:"8",class:"mx-auto"},{default:a(()=>[pa]),_:1})]),_:1}),t(r,{class:"my-8 my-md-16"},{default:a(()=>[(h(!0),A(I,null,T(e.services,(s,u)=>(h(),g(d,{cols:"12",sm:"3",md:"3",key:u},{default:a(()=>[t(H,{flat:"",rounded:"0",class:"bg-transparent text-center my-4 my-md-16"},{default:a(()=>[t(f,{icon:s.icon,size:l.smAndDown?"4x":"7x",class:"mx-auto",color:"white"},null,8,["icon","size"]),t(N,{class:"text-h4 font-weight-regular vaulted-blue my-4 my-md-8"},{default:a(()=>[x(p(s.title),1)]),_:2},1024),t(B,{class:"text-h6 font-weight-light mt-4 vaulted-dark-blue"},{default:a(()=>[x(p(s.description),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1},8,["min-height"])),[[w,c.onResize]])]),_:1})]),_:1}),t(r,{"no-gutters":"",class:"bg-vaulted-grey py-16 flex-column"},{default:a(()=>[t(d,{cols:"12",md:"8",lg:"6",class:"pa-4 mx-auto"},{default:a(()=>[wa,ka]),_:1}),t(d,{cols:"12",md:"6",class:"pa-8 mx-auto"},{default:a(()=>[t(Yt,{direction:"vertical"},{default:a(()=>[(h(!0),A(I,null,T(e.timeline,(s,u)=>(h(),g(ea,{"dot-color":"#e8e5d4","fill-dot":"",size:"xsmall",key:u},{opposite:a(()=>[m("span",xa,p(s.year),1)]),default:a(()=>[t(H,{flat:"",rounded:"0",class:"vaulted-dark-blue bg-transparent"},{default:a(()=>[m("div",Ca,[m("img",{src:s.image,class:"img-fix",style:{opacity:"0.9 !important","border-radius":"7px !important"}},null,8,Sa)]),t(B,{class:"text-body-1 font-weight-light"},{default:a(()=>[x(p(s.description),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}),t(r,{"no-gutters":""},{default:a(()=>[t(d,{cols:"12",class:"ma-0 pa-0"},{default:a(()=>[t(_,{class:"d-flex flex-column align-center justify-center pa-4 py-16 bg-white"},{default:a(()=>[t(k,{class:"constrained"},{default:a(()=>[t(r,{class:"my-8 my-md-16 align-center justify-center"},{default:a(()=>[(h(!0),A(I,null,T(e.news,(s,u)=>(h(),g(d,{cols:"12",sm:"4",md:"2",key:u,class:"my-8"},{default:a(()=>[m("a",{href:s.link,target:"_blank"},[t(F,{src:s.image,class:"ma-4 pa-0 grayscale"},null,8,["src"])],8,Va)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(qt,{class:"text-center bg-vaulted-blue text-white py-16 pt-md-0","min-height":e.contentHeight},{default:a(()=>[t(k,null,{default:a(()=>[t(r,null,{default:a(()=>[t(d,{cols:"12",md:"6",class:"mx-auto"},{default:a(()=>[t(F,{src:Et,class:"mx-auto"})]),_:1})]),_:1}),t(r,{class:"mb-16"},{default:a(()=>[t(d,{cols:"12",md:"10",xl:"6",class:"mx-auto"},{default:a(()=>[Aa]),_:1})]),_:1}),t(r,null,{default:a(()=>[t(d,{cols:"12",md:"6",class:"mb-16 mx-auto"},{default:a(()=>[t(F,{src:Ht,class:"mx-auto"})]),_:1})]),_:1}),t(r,{class:"mb-16"},{default:a(()=>[t(d,{cols:"12"},{default:a(()=>[Ia]),_:1})]),_:1}),t(r,{class:"mb-16"},{default:a(()=>[t(d,{cols:"12"},{default:a(()=>[(h(!0),A(I,null,T(e.social,s=>(h(),g(mt,{icon:"",key:s.name,href:s.link,target:"_blank",density:"comfortable",variant:"plain",class:"mx-4 text-white"},{default:a(()=>[t(f,{icon:s.icon,size:"3x"},null,8,["icon"])]),_:2},1032,["href"]))),128))]),_:1})]),_:1}),t(r,null,{default:a(()=>[t(d,{cols:"12"},{default:a(()=>[Ra]),_:1})]),_:1})]),_:1})]),_:1},8,["min-height"])],64)}const ja=Nt(na,[["render",za]]);export{ja as default};
