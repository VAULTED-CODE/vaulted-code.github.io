import{l as J,p as z,$ as L,m as R,t as m,n as t,s as K,r as Q,y as W,d as D,a2 as X,q as Y,u as Z,v as ee,w as te,c as O,a1 as le,J as ie,K as o,L as b,M as l,H as C,S as r,P as c,N as V,O as f,Q as y}from"./index-5b4f6317.js";import{u as ae}from"./timeline-4d044b17.js";import{P as se}from"./PageHeader-e8f2caab.js";import{m as $,d as N,c as j,e as E,h as ne,g as oe,u as A,j as re,a as H,k as de,_ as ue,i as k,l as g,n as v,p as S,V as P}from"./VRow-a75f7423.js";import{V as h}from"./VSheet-da592dbf.js";import{V as T,d as p}from"./VDivider-5f19307c.js";import{V as w,c as B,d as I,e as G,a as ce}from"./VCard-2e951ee7.js";import{m as U,d as me,a as fe,V as ge,e as ve,f as he}from"./VAvatar-c8cc1606.js";const _e=J("team",{state:()=>({founders:[{title:"Prof. Dr. Philippe Block",image:""},{title:"Dr. Tom Van Mele",image:""},{title:"Dr. Francesco Ranaudo",image:""}],members:[{title:"Francesco Ranaudo",image:"",role:"CEO"},{title:"Tom Van Mele",image:"",role:"CTO"},{title:"Annina Gaam",image:"",role:"Business Manager"},{title:"Andrea Menardo",image:"",role:"Product Developer"},{title:"Vasilis Aloutsanidis",image:"",role:"Senior Genius"},{title:"Aurèle Gheyselinck",image:"",role:"Junior Genius"}],board:[{title:"Dieter Spälti",image:"",role:"President of the Board"},{title:"Tom Van Mele",image:"",role:"Board Member"},{title:"Philippe Block",image:"",role:"Scientific Advisor"}],partners:[{title:"Bürgin Creations",image:"",role:"Prototyping"},{title:"alphabeton",image:"",role:"Production"},{title:"Holcim",image:"",role:"Material Development"}]}),getters:{getFounders(e){return e.founders},getMembers(e){return e.members},getBoard(e){return e.board},getPartners(e){return e.partners}}});const ye=z({dotColor:String,fillDot:Boolean,hideDot:Boolean,icon:L,iconColor:String,lineColor:String,...$(),...N(),...U(),...j()},"VTimelineDivider"),xe=R()({name:"VTimelineDivider",props:ye(),setup(e,a){let{slots:n}=a;const{sizeClasses:x,sizeStyles:_}=me(e,"v-timeline-divider__dot"),{backgroundColorStyles:d,backgroundColorClasses:u}=E(m(e,"dotColor")),{roundedClasses:i}=ne(e,"v-timeline-divider__dot"),{elevationClasses:s}=oe(e),{backgroundColorClasses:M,backgroundColorStyles:F}=E(m(e,"lineColor"));return A(()=>t("div",{class:["v-timeline-divider",{"v-timeline-divider--fill-dot":e.fillDot},e.class],style:e.style},[t("div",{class:["v-timeline-divider__before",M.value],style:F.value},null),!e.hideDot&&t("div",{key:"dot",class:["v-timeline-divider__dot",s.value,i.value,x.value],style:_.value},[t("div",{class:["v-timeline-divider__inner-dot",u.value,i.value],style:d.value},[n.default?t(ge,{key:"icon-defaults",disabled:!e.icon,defaults:{VIcon:{color:e.iconColor,icon:e.icon,size:e.size}}},n.default):t(fe,{key:"icon",color:e.iconColor,icon:e.icon,size:e.size},null)])]),t("div",{class:["v-timeline-divider__after",M.value],style:F.value},null)])),{}}}),q=z({density:String,dotColor:String,fillDot:Boolean,hideDot:Boolean,hideOpposite:{type:Boolean,default:void 0},icon:L,iconColor:String,lineInset:[Number,String],...$(),...re(),...j(),...N(),...U(),...H()},"VTimelineItem"),be=R()({name:"VTimelineItem",props:q(),setup(e,a){let{slots:n}=a;const{dimensionStyles:x}=de(e),_=K(0),d=Q();return W(d,u=>{var i;u&&(_.value=((i=u.$el.querySelector(".v-timeline-divider__dot"))==null?void 0:i.getBoundingClientRect().width)??0)},{flush:"post"}),A(()=>{var u,i;return t("div",{class:["v-timeline-item",{"v-timeline-item--fill-dot":e.fillDot},e.class],style:[{"--v-timeline-dot-size":D(_.value),"--v-timeline-line-inset":e.lineInset?`calc(var(--v-timeline-dot-size) / 2 + ${D(e.lineInset)})`:D(0)},e.style]},[t("div",{class:"v-timeline-item__body",style:x.value},[(u=n.default)==null?void 0:u.call(n)]),t(xe,{ref:d,hideDot:e.hideDot,icon:e.icon,iconColor:e.iconColor,size:e.size,elevation:e.elevation,dotColor:e.dotColor,fillDot:e.fillDot,rounded:e.rounded},{default:n.icon}),e.density!=="compact"&&t("div",{class:"v-timeline-item__opposite"},[!e.hideOpposite&&((i=n.opposite)==null?void 0:i.call(n))])])}),{}}}),Ce=z({align:{type:String,default:"center",validator:e=>["center","start"].includes(e)},direction:{type:String,default:"vertical",validator:e=>["vertical","horizontal"].includes(e)},justify:{type:String,default:"auto",validator:e=>["auto","center"].includes(e)},side:{type:String,validator:e=>e==null||["start","end"].includes(e)},lineThickness:{type:[String,Number],default:2},lineColor:String,truncateLine:{type:String,validator:e=>["start","end","both"].includes(e)},...X(q({lineInset:0}),["dotColor","fillDot","hideOpposite","iconColor","lineInset","size"]),...$(),...ve(),...H(),...Y()},"VTimeline"),ke=R()({name:"VTimeline",props:Ce(),setup(e,a){let{slots:n}=a;const{themeClasses:x}=Z(e),{densityClasses:_}=he(e),{rtlClasses:d}=ee();te({VTimelineDivider:{lineColor:m(e,"lineColor")},VTimelineItem:{density:m(e,"density"),dotColor:m(e,"dotColor"),fillDot:m(e,"fillDot"),hideOpposite:m(e,"hideOpposite"),iconColor:m(e,"iconColor"),lineColor:m(e,"lineColor"),lineInset:m(e,"lineInset"),size:m(e,"size")}});const u=O(()=>{const s=e.side?e.side:e.density!=="default"?"end":null;return s&&`v-timeline--side-${s}`}),i=O(()=>{const s=["v-timeline--truncate-line-start","v-timeline--truncate-line-end"];switch(e.truncateLine){case"both":return s;case"start":return s[0];case"end":return s[1];default:return null}});return A(()=>t(e.tag,{class:["v-timeline",`v-timeline--${e.direction}`,`v-timeline--align-${e.align}`,`v-timeline--justify-${e.justify}`,i.value,{"v-timeline--inset-line":!!e.lineInset},x.value,_.value,u.value,d.value,e.class],style:[{"--v-timeline-line-thickness":D(e.lineThickness)},e.style]},n)),{}}}),Se={components:{PageHeader:se},setup(){const e=le(),a=ae(),n=_e();return{goTo:e,teamStore:n,timelineStore:a}},data:()=>({title:"VAULTED AG",intro:"VAULTED AG is an ETH spin-off founded in 2023, bringing the pioneering research of the Block Research Group on funicular floors and modern masonry into the construction industry.",members:[],partners:[]}),created(){this.founders=this.teamStore.getFounders,this.members=this.teamStore.getMembers,this.board=this.teamStore.getBoard,this.partners=this.teamStore.getPartners,this.timeline=this.timelineStore.getEvents},methods:{goToSection(e){this.goTo(`#${e}`,{offset:-64})}}},Te={class:"d-flex flex-wrap justify-center"},Ve=r("h2",{class:"text-h3 text-primary font-weight-bold text-center mb-8"},"Founders",-1),we=r("p",{class:"text-h5 font-weight-regular text-vaulted_darkblue text-center"}," Together, our founders have more than three decades of experience in computational structural design and engineering. Their expertise allows us to address complex architectural challenges and deliver innovative solutions for modern construction. ",-1),De=r("h2",{class:"text-h3 text-primary font-weight-bold text-center mb-8"},"Team",-1),Pe=r("p",{class:"text-h5 font-weight-regular text-vaulted_darkblue text-center"}," Our team consists of world-leading experts from the academic community, seasoned professionals, and young talent from the Swiss construction industry. ",-1),pe=r("h2",{class:"text-h3 text-primary font-weight-bold text-center mb-8"},"Board & Advisors",-1),Be=r("p",{class:"text-h5 font-weight-regular text-vaulted_darkblue text-center"},null,-1),Ie=r("h2",{class:"text-h3 text-primary font-weight-bold text-center mb-8"},"Partners",-1),ze=r("p",{class:"text-h5 font-weight-regular text-vaulted_grey text-center"},null,-1),Re=r("h2",{class:"text-center text-h3 font-weight-bold text-vaulted_darkblue mb-0"},"From Research to Innovation",-1),$e={class:"text-h5 font-weight-bold text-vaulted_darkblue"},Ae={class:"img-fix-container"},Me=["src"];function Fe(e,a,n,x,_,d){const u=ie("page-header");return o(),b(C,null,[t(u,{title:e.title,text:e.intro},{default:l(()=>[r("div",Te,[t(T,{variant:"tonal",color:"vaulted_lime",class:"align-self-center ma-2",onClick:a[0]||(a[0]=i=>d.goToSection("founders"))},{default:l(()=>[c("Founders")]),_:1}),t(T,{variant:"tonal",color:"vaulted_lime",class:"align-self-center ma-2",onClick:a[1]||(a[1]=i=>d.goToSection("team"))},{default:l(()=>[c("Team")]),_:1}),t(T,{variant:"tonal",color:"vaulted_lime",class:"align-self-center ma-2",onClick:a[2]||(a[2]=i=>d.goToSection("board"))},{default:l(()=>[c("Board")]),_:1}),t(T,{variant:"tonal",color:"vaulted_lime",class:"align-self-center ma-2",onClick:a[3]||(a[3]=i=>d.goToSection("partners"))},{default:l(()=>[c("Partners")]),_:1}),t(T,{variant:"tonal",color:"vaulted_lime",class:"align-self-center ma-2",onClick:a[4]||(a[4]=i=>d.goToSection("history"))},{default:l(()=>[c("History")]),_:1})])]),_:1},8,["title","text"]),t(h,{class:"bg-white py-16",id:"team"},{default:l(()=>[t(k,{class:"py-sm-12 constrained"},{default:l(()=>[t(g,{class:"mb-8"},{default:l(()=>[t(v,null,{default:l(()=>[t(S,{"max-width":"50rem",class:"mx-auto"},{default:l(()=>[Ve,we]),_:1})]),_:1})]),_:1}),t(g,{class:"mb-8"},{default:l(()=>[(o(!0),b(C,null,V(e.founders,(i,s)=>(o(),f(v,{cols:"12",sm:"4",key:s,class:"d-flex"},{default:l(()=>[t(w,{flat:"",class:"flex-grow-1 flex-even",rounded:0},{default:l(()=>[i.image?(o(),f(P,{key:0,src:i.image},null,8,["src"])):(o(),f(h,{key:1,class:"bg-vaulted_beige",width:"640px",height:"240px"})),t(B,null,{default:l(()=>[t(I,{class:"text-h5 text-vaulted_darkblue"},{default:l(()=>[c(y(i.title),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}),t(p,{color:"primary",thickness:"4"}),t(h,{class:"bg-white py-16",id:"team"},{default:l(()=>[t(k,{class:"py-sm-12 constrained"},{default:l(()=>[t(g,{class:"mb-8"},{default:l(()=>[t(v,null,{default:l(()=>[t(S,{"max-width":"50rem",class:"mx-auto"},{default:l(()=>[De,Pe]),_:1})]),_:1})]),_:1}),t(g,{class:"mb-8"},{default:l(()=>[(o(!0),b(C,null,V(e.members,(i,s)=>(o(),f(v,{cols:"12",sm:"4",key:s,class:"d-flex"},{default:l(()=>[t(w,{flat:"",class:"flex-grow-1 flex-even",rounded:0},{default:l(()=>[i.image?(o(),f(P,{key:0,src:i.image},null,8,["src"])):(o(),f(h,{key:1,class:"bg-vaulted_beige",width:"640px",height:"240px"})),t(B,null,{default:l(()=>[t(I,{class:"text-h5 text-vaulted_darkblue"},{default:l(()=>[c(y(i.title),1)]),_:2},1024),t(G,{class:"text-h6 text-vaulted_grey"},{default:l(()=>[c(y(i.role),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}),t(p,{color:"primary",thickness:"4"}),t(h,{class:"bg-white py-16",id:"team"},{default:l(()=>[t(k,{class:"py-sm-12 constrained"},{default:l(()=>[t(g,{class:"mb-8"},{default:l(()=>[t(v,null,{default:l(()=>[t(S,{"max-width":"50rem",class:"mx-auto"},{default:l(()=>[pe,Be]),_:1})]),_:1})]),_:1}),t(g,{class:"mb-8"},{default:l(()=>[(o(!0),b(C,null,V(e.board,(i,s)=>(o(),f(v,{cols:"12",sm:"4",key:s,class:"d-flex"},{default:l(()=>[t(w,{flat:"",class:"flex-grow-1 flex-even",rounded:0},{default:l(()=>[i.image?(o(),f(P,{key:0,src:i.image},null,8,["src"])):(o(),f(h,{key:1,class:"bg-vaulted_beige",width:"640px",height:"240px"})),t(B,null,{default:l(()=>[t(I,{class:"text-h5 text-vaulted_darkblue"},{default:l(()=>[c(y(i.title),1)]),_:2},1024),t(G,{class:"text-h6 text-vaulted_grey"},{default:l(()=>[c(y(i.role),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}),t(p,{color:"primary",thickness:"4"}),t(h,{class:"bg-white py-16",id:"team"},{default:l(()=>[t(k,{class:"py-sm-12 constrained"},{default:l(()=>[t(g,{class:"mb-8"},{default:l(()=>[t(v,null,{default:l(()=>[t(S,{"max-width":"50rem",class:"mx-auto"},{default:l(()=>[Ie,ze]),_:1})]),_:1})]),_:1}),t(g,{class:"mb-8"})]),_:1})]),_:1}),t(h,{class:"bg-vaulted_grey py-16",id:"team"},{default:l(()=>[t(k,{class:"py-sm-12 constrained"},{default:l(()=>[t(g,{class:"mb-8"},{default:l(()=>[t(v,{cols:"12"},{default:l(()=>[t(S,{"max-width":"50rem",class:"mx-auto"},{default:l(()=>[Re]),_:1})]),_:1})]),_:1}),t(g,{class:"mb-8"},{default:l(()=>[t(v,{cols:"12",class:"pa-8 mx-auto"},{default:l(()=>[t(ke,{direction:"vertical"},{default:l(()=>[(o(!0),b(C,null,V(e.timeline,(i,s)=>(o(),f(be,{"dot-color":"vaulted_grey-lighten-2","fill-dot":"",size:"small",key:s},{opposite:l(()=>[r("span",$e,y(i.year),1)]),default:l(()=>[t(w,{flat:"",rounded:"0",class:"text-vaulted_darkblue bg-transparent"},{default:l(()=>[r("div",Ae,[r("img",{src:i.image,class:"img-fix",style:{opacity:"0.9 !important"}},null,8,Me)]),t(ce,{class:"text-h6 font-weight-regular"},{default:l(()=>[c(y(i.description),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})],64)}const qe=ue(Se,[["render",Fe]]);export{qe as default};