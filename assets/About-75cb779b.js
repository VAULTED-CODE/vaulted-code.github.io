import{a as J,V as T,d as K,b as Q,e as W,c as R}from"./VCard-6ff18f95.js";import{l as X,p as w,W as G,m as z,t as c,n as t,s as Z,r as Y,y as ee,d as k,X as te,q as ie,u as le,v as se,w as ne,c as A,G as ae,V as oe,J as E,K as n,L as h,H as y,N as b,M as i,O as v,S as o,P as x,Q as _}from"./index-f7ef3fd7.js";import{u as re}from"./timeline-48cc13da.js";import{P as de}from"./PageHeader-d728a46e.js";import{P as ce}from"./PageSection-c6e32d57.js";import{m as B,d as L,x as H,c as N,y as ue,e as F,h as me,g as fe,u as I,n as ge,i as ve,o as he,a as U,p as _e,z as ye,A as Ce,_ as be,r as D,q as V,l as xe,s as ke}from"./VAvatar-e9d6bd35.js";import{V as S}from"./VSheet-51262420.js";import{V as p}from"./VLazy-7ef5ff96.js";const P="/assets/tom-09853a9a.jpg",$="/assets/philippe-8db4771f.jpeg",M="/assets/francesco-e7efd5da.jpg",Te="/assets/dieter-f41d1d0f.png",De="/assets/andrea-b493c47f.jpg",Ve="/assets/vasilis-abdacd0b.jpg",Se="/assets/aurele-7ff4be25.png",pe=X("team",{state:()=>({founders:[{title:"Prof. Dr. Philippe Block",image:$},{title:"Dr. Tom Van Mele",image:P},{title:"Dr. Francesco Ranaudo",image:M}],members:[{title:"Francesco Ranaudo",image:M,role:"CEO"},{title:"Tom Van Mele",image:P,role:"CTO"},{title:"Annina Gaam",image:J,role:"Business Developer"},{title:"Andrea Menardo",image:De,role:"Product Developer"},{title:"Vasileios Aloutsanidis",image:Ve,role:"Digital Fabrication Specialist"},{title:"Aurèle Gheyselinck",image:Se,role:"Digital Fabrication Specialist"}],board:[{title:"Dieter Spälti",image:Te,role:"Chairman of the Board"},{title:"Tom Van Mele",image:P,role:"Board Member"},{title:"Philippe Block",image:$,role:"Scientific Advisor"}],partners:[{title:"Bürgin Creations",image:"",role:"Prototyping"},{title:"alphabeton",image:"",role:"Production"},{title:"Holcim",image:"",role:"Material Development"}]}),getters:{getFounders(e){return e.founders},getMembers(e){return e.members},getBoard(e){return e.board},getPartners(e){return e.partners}}});const Pe=w({dotColor:String,fillDot:Boolean,hideDot:Boolean,icon:G,iconColor:String,lineColor:String,...B(),...L(),...H(),...N()},"VTimelineDivider"),we=z()({name:"VTimelineDivider",props:Pe(),setup(e,m){let{slots:s}=m;const{sizeClasses:u,sizeStyles:f}=ue(e,"v-timeline-divider__dot"),{backgroundColorStyles:g,backgroundColorClasses:r}=F(c(e,"dotColor")),{roundedClasses:a}=me(e,"v-timeline-divider__dot"),{elevationClasses:l}=fe(e),{backgroundColorClasses:d,backgroundColorStyles:C}=F(c(e,"lineColor"));return I(()=>t("div",{class:["v-timeline-divider",{"v-timeline-divider--fill-dot":e.fillDot},e.class],style:e.style},[t("div",{class:["v-timeline-divider__before",d.value],style:C.value},null),!e.hideDot&&t("div",{key:"dot",class:["v-timeline-divider__dot",l.value,a.value,u.value],style:f.value},[t("div",{class:["v-timeline-divider__inner-dot",r.value,a.value],style:g.value},[s.default?t(ve,{key:"icon-defaults",disabled:!e.icon,defaults:{VIcon:{color:e.iconColor,icon:e.icon,size:e.size}}},s.default):t(ge,{key:"icon",color:e.iconColor,icon:e.icon,size:e.size},null)])]),t("div",{class:["v-timeline-divider__after",d.value],style:C.value},null)])),{}}}),q=w({density:String,dotColor:String,fillDot:Boolean,hideDot:Boolean,hideOpposite:{type:Boolean,default:void 0},icon:G,iconColor:String,lineInset:[Number,String],...B(),...he(),...N(),...L(),...H(),...U()},"VTimelineItem"),O=z()({name:"VTimelineItem",props:q(),setup(e,m){let{slots:s}=m;const{dimensionStyles:u}=_e(e),f=Z(0),g=Y();return ee(g,r=>{var a;r&&(f.value=((a=r.$el.querySelector(".v-timeline-divider__dot"))==null?void 0:a.getBoundingClientRect().width)??0)},{flush:"post"}),I(()=>{var r,a;return t("div",{class:["v-timeline-item",{"v-timeline-item--fill-dot":e.fillDot},e.class],style:[{"--v-timeline-dot-size":k(f.value),"--v-timeline-line-inset":e.lineInset?`calc(var(--v-timeline-dot-size) / 2 + ${k(e.lineInset)})`:k(0)},e.style]},[t("div",{class:"v-timeline-item__body",style:u.value},[(r=s.default)==null?void 0:r.call(s)]),t(we,{ref:g,hideDot:e.hideDot,icon:e.icon,iconColor:e.iconColor,size:e.size,elevation:e.elevation,dotColor:e.dotColor,fillDot:e.fillDot,rounded:e.rounded},{default:s.icon}),e.density!=="compact"&&t("div",{class:"v-timeline-item__opposite"},[!e.hideOpposite&&((a=s.opposite)==null?void 0:a.call(s))])])}),{}}}),ze=w({align:{type:String,default:"center",validator:e=>["center","start"].includes(e)},direction:{type:String,default:"vertical",validator:e=>["vertical","horizontal"].includes(e)},justify:{type:String,default:"auto",validator:e=>["auto","center"].includes(e)},side:{type:String,validator:e=>e==null||["start","end"].includes(e)},lineThickness:{type:[String,Number],default:2},lineColor:String,truncateLine:{type:String,validator:e=>["start","end","both"].includes(e)},...te(q({lineInset:0}),["dotColor","fillDot","hideOpposite","iconColor","lineInset","size"]),...B(),...ye(),...U(),...ie()},"VTimeline"),j=z()({name:"VTimeline",props:ze(),setup(e,m){let{slots:s}=m;const{themeClasses:u}=le(e),{densityClasses:f}=Ce(e),{rtlClasses:g}=se();ne({VTimelineDivider:{lineColor:c(e,"lineColor")},VTimelineItem:{density:c(e,"density"),dotColor:c(e,"dotColor"),fillDot:c(e,"fillDot"),hideOpposite:c(e,"hideOpposite"),iconColor:c(e,"iconColor"),lineColor:c(e,"lineColor"),lineInset:c(e,"lineInset"),size:c(e,"size")}});const r=A(()=>{const l=e.side?e.side:e.density!=="default"?"end":null;return l&&`v-timeline--side-${l}`}),a=A(()=>{const l=["v-timeline--truncate-line-start","v-timeline--truncate-line-end"];switch(e.truncateLine){case"both":return l;case"start":return l[0];case"end":return l[1];default:return null}});return I(()=>t(e.tag,{class:["v-timeline",`v-timeline--${e.direction}`,`v-timeline--align-${e.align}`,`v-timeline--justify-${e.justify}`,a.value,{"v-timeline--inset-line":!!e.lineInset},u.value,f.value,r.value,g.value,e.class],style:[{"--v-timeline-line-thickness":k(e.lineThickness)},e.style]},s)),{}}}),Be={components:{PageHeader:de,PageSection:ce},setup(){const{smAndDown:e}=ae(),m=oe(),s=re(),u=pe();return{smAndDown:e,goTo:m,teamStore:u,timelineStore:s}},data:()=>({title:"VAULTED AG",intro:"VAULTED AG is an ETH Spin-off founded in 2023, bringing the pioneering research of the Block Research Group on funicular floors and modern masonry into the construction industry.",sections:[{title:"Team",text:"Our team consists of world-leading experts from the academic community, seasoned professionals, and young talent from the Swiss construction industry.",id:"team",short:"Team",members:[]},{title:"Founders",text:"Together, our founders have more than three decades of experience in computational structural design and engineering. Their expertise allows us to address complex architectural challenges and deliver innovative solutions for modern construction.",id:"founders",short:"Founders",members:[]}]}),created(){this.sections[0].members=this.teamStore.getMembers,this.sections[1].members=this.teamStore.getFounders,this.timeline=this.timelineStore.getEvents.toReversed()},methods:{goToSection(e){this.goTo(`#${e}`,{offset:-64})}}},Ie={key:0,class:"img-fix-container"},Re=["src"],Ae=o("div",{class:"w-100 h-100 overlay-container overlay-indigo"},null,-1),Ee=o("h2",{class:"text-center text-h3 font-weight-bold text-vaulted_darkblue mb-0"},"History",-1),Fe=o("p",{class:"mt-8 text-h5 font-weight-regular text-vaulted_darkblue-lig text-center"}," In 2023, based on more than a decade of research at the Block Research Group of ETH Zurich, Prof. Dr. Philippe Block and Dr. Tom Van Mele, together with Dr. Francesco Ranaudo, founded VAULTED, an official ETH spin-off. ",-1),$e={class:"text-h5 font-weight-bold text-vaulted_indigo"},Me={class:"img-fix-container"},Oe=["src"],je=o("div",{class:"w-100 h-100 overlay-container overlay-indigo"},null,-1),Ge={class:"text-h5 font-weight-bold text-vaulted_indigo"},Le={class:"img-fix-container"},He=["src"],Ne=o("div",{class:"w-100 h-100 overlay-container overlay-indigo"},null,-1);function Ue(e,m,s,u,f,g){const r=E("page-header"),a=E("page-section");return n(),h(y,null,[t(r,{title:e.title,text:e.intro},null,8,["title","text"]),(n(!0),h(y,null,b(e.sections,l=>(n(),v(a,{key:l.id,title:l.title,text:l.text,id:l.id,divide:!1},{default:i(()=>[t(V,{class:"mt-8"},{default:i(()=>[(n(!0),h(y,null,b(l.members,(d,C)=>(n(),v(D,{cols:"12",sm:"6",md:"4",key:C,class:"d-flex"},{default:i(()=>[t(T,{flat:"",class:"flex-grow-1 flex-even",rounded:0},{default:i(()=>[t(p,{"min-height":64,options:{threshold:.5},transition:"fade-transition"},{default:i(()=>[d.image?(n(),h("div",Ie,[o("img",{src:d.image,class:"img-fix"},null,8,Re),Ae])):(n(),v(S,{key:1,class:"bg-vaulted_beige",width:"640px",height:"240px"}))]),_:2},1024),t(K,null,{default:i(()=>[t(Q,{class:"text-h5 text-vaulted_indigo"},{default:i(()=>[x(_(d.title),1)]),_:2},1024),t(W,{class:"text-h6 text-vaulted_grey"},{default:i(()=>[x(_(d.role),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:2},1024)]),_:2},1032,["title","text","id"]))),128)),t(S,{class:"pb-16"}),t(S,{class:"bg-vaulted_beige py-16 mt-16",id:"team"},{default:i(()=>[t(xe,{class:"constrained"},{default:i(()=>[t(V,{class:"mb-8"},{default:i(()=>[t(D,{cols:"12"},{default:i(()=>[t(ke,{"max-width":"50rem",class:"mx-auto"},{default:i(()=>[Ee,Fe]),_:1})]),_:1})]),_:1}),t(V,{class:"mb-8"},{default:i(()=>[t(D,{cols:"12",class:"pa-8 mx-auto"},{default:i(()=>[u.smAndDown?(n(),v(j,{key:0,direction:"vertical",side:"end",align:"start"},{default:i(()=>[(n(!0),h(y,null,b(e.timeline,(l,d)=>(n(),v(O,{"dot-color":"vaulted_indigo","fill-dot":"",size:"small",key:d},{opposite:i(()=>[o("span",$e,_(l.year),1)]),default:i(()=>[t(T,{flat:"",tile:"",class:"text-vaulted_darkblue bg-transparent"},{default:i(()=>[t(p,{"min-height":64,options:{threshold:.5},transition:"fade-transition"},{default:i(()=>[o("div",Me,[o("img",{src:l.image,class:"img-fix w-100"},null,8,Oe),je])]),_:2},1024),t(R,{class:"text-h6 font-weight-regular text-vaulted_darkblue"},{default:i(()=>[x(_(l.description),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})):(n(),v(j,{key:1,direction:"vertical"},{default:i(()=>[(n(!0),h(y,null,b(e.timeline,(l,d)=>(n(),v(O,{"dot-color":"vaulted_indigo","fill-dot":"",size:"small",key:d},{opposite:i(()=>[o("span",Ge,_(l.year),1)]),default:i(()=>[t(T,{flat:"",tile:"",class:"text-vaulted_darkblue bg-transparent"},{default:i(()=>[t(p,{"min-height":64,options:{threshold:.5},transition:"fade-transition"},{default:i(()=>[o("div",Le,[o("img",{src:l.image,class:"img-fix"},null,8,He),Ne])]),_:2},1024),t(R,{class:"text-h6 font-weight-regular text-vaulted_darkblue"},{default:i(()=>[x(_(l.description),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1}))]),_:1})]),_:1})]),_:1})]),_:1})],64)}const et=be(Be,[["render",Ue]]);export{et as default};