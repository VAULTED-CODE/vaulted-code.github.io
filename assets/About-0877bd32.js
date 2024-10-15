import{l as P,$ as A,J as D,K as s,L as _,v as e,M as t,H as h,S as r,P as i,N as v,O as n,Q as f}from"./index-50f6640c.js";import{u as M,V as F,a as G}from"./VTimeline-de433535.js";import{P as E}from"./PageHeader-85d79fb1.js";import{_ as R,k as p,p as d,q as u,v as x,V as w}from"./VAvatar-e7541815.js";import{V as c}from"./VSheet-6f16d3bd.js";import{V as b,a as y}from"./VDivider-bbd18e7b.js";import{V as k,d as V,a as T,e as C,b as $}from"./VCard-1c877c2e.js";const H=P("team",{state:()=>({founders:[{title:"Prof. Dr. Philippe Block",image:""},{title:"Dr. Tom Van Mele",image:""},{title:"Dr. Francesco Ranaudo",image:""}],members:[{title:"Francesco Ranaudo",image:"",role:"CEO"},{title:"Tom Van Mele",image:"",role:"CTO"},{title:"Annina Gaam",image:"",role:"Business Manager"},{title:"Andrea Menardo",image:"",role:"Product Developer"},{title:"Vasilis Aloutsanidis",image:"",role:"Senior Genius"},{title:"Aurèle Gheyselinck",image:"",role:"Junior Genius"}],board:[{title:"Dieter Spälti",image:"",role:"President of the Board"},{title:"Tom Van Mele",image:"",role:"Member"},{title:"Philippe Block",image:"",role:"Advisor"}],partners:[{title:"Bürgin Creations",image:"",role:"Prototyping"},{title:"alphabeton",image:"",role:"Production"},{title:"Holcim",image:"",role:"Material Development"}]}),getters:{getFounders(l){return l.founders},getMembers(l){return l.members},getBoard(l){return l.board},getPartners(l){return l.partners}}}),I={components:{PageHeader:E},setup(){const l=A(),o=M(),S=H();return{goTo:l,teamStore:S,timelineStore:o}},data:()=>({title:"VAULTED AG",intro:"VAULTED AG is an ETH spin-off founded in 2023. It brings the work of the Block Research group on funicular floors and modern masonry into the construction industry.",members:[],partners:[]}),created(){this.founders=this.teamStore.getFounders,this.members=this.teamStore.getMembers,this.board=this.teamStore.getBoard,this.partners=this.teamStore.getPartners,this.timeline=this.timelineStore.getEvents},methods:{goToSection(l){this.goTo(`#${l}`,{offset:-64})}}},L={class:"d-flex flex-wrap justify-center"},N=r("h2",{class:"text-h3 text-primary font-weight-bold text-center mb-8"},"Founders",-1),O=r("p",{class:"text-h5 font-weight-regular text-vaulted_darkblue text-center"}," Together, our founders have more than three decades of experience in computational structural design ad engineering. ",-1),J=r("h2",{class:"text-h3 text-primary font-weight-bold text-center mb-8"},"Team",-1),U=r("p",{class:"text-h5 font-weight-regular text-vaulted_darkblue text-center"}," Our team consists of world-leading experts from the academic community, seasoned professionals, and young talent from the Swiss construction industry. ",-1),j=r("h2",{class:"text-h3 text-primary font-weight-bold text-center mb-8"},"Board & Advisors",-1),q=r("p",{class:"text-h5 font-weight-regular text-vaulted_darkblue text-center"},null,-1),z=r("h2",{class:"text-h3 text-primary font-weight-bold text-center mb-8"},"Partners",-1),K=r("p",{class:"text-h5 font-weight-regular text-vaulted_grey text-center"},null,-1),Q=r("h2",{class:"text-center text-h3 font-weight-bold text-vaulted_darkblue mb-0"},"From Research to Innovation",-1),W={class:"text-h5 font-weight-bold text-vaulted_darkblue"},X={class:"img-fix-container"},Y=["src"];function Z(l,o,S,ee,te,g){const B=D("page-header");return s(),_(h,null,[e(B,{title:l.title,text:l.intro},{default:t(()=>[r("div",L,[e(b,{variant:"tonal",color:"vaulted_lime",class:"align-self-center ma-2",onClick:o[0]||(o[0]=a=>g.goToSection("founders"))},{default:t(()=>[i("Founders")]),_:1}),e(b,{variant:"tonal",color:"vaulted_lime",class:"align-self-center ma-2",onClick:o[1]||(o[1]=a=>g.goToSection("team"))},{default:t(()=>[i("Team")]),_:1}),e(b,{variant:"tonal",color:"vaulted_lime",class:"align-self-center ma-2",onClick:o[2]||(o[2]=a=>g.goToSection("board"))},{default:t(()=>[i("Board")]),_:1}),e(b,{variant:"tonal",color:"vaulted_lime",class:"align-self-center ma-2",onClick:o[3]||(o[3]=a=>g.goToSection("partners"))},{default:t(()=>[i("Partners")]),_:1}),e(b,{variant:"tonal",color:"vaulted_lime",class:"align-self-center ma-2",onClick:o[4]||(o[4]=a=>g.goToSection("history"))},{default:t(()=>[i("History")]),_:1})])]),_:1},8,["title","text"]),e(c,{class:"bg-white py-16",id:"team"},{default:t(()=>[e(p,{class:"py-sm-12 constrained"},{default:t(()=>[e(d,{class:"mb-8"},{default:t(()=>[e(u,null,{default:t(()=>[e(x,{"max-width":"50rem",class:"mx-auto"},{default:t(()=>[N,O]),_:1})]),_:1})]),_:1}),e(d,{class:"mb-8"},{default:t(()=>[(s(!0),_(h,null,v(l.founders,(a,m)=>(s(),n(u,{cols:"12",sm:"4",key:m,class:"d-flex"},{default:t(()=>[e(k,{flat:"",class:"flex-grow-1 flex-even",rounded:0},{default:t(()=>[a.image?(s(),n(w,{key:0,src:a.image},null,8,["src"])):(s(),n(c,{key:1,class:"bg-vaulted_beige",width:"640px",height:"240px"})),e(V,null,{default:t(()=>[e(T,{class:"text-h5 text-vaulted_darkblue"},{default:t(()=>[i(f(a.title),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}),e(y,{color:"primary",thickness:"4"}),e(c,{class:"bg-white py-16",id:"team"},{default:t(()=>[e(p,{class:"py-sm-12 constrained"},{default:t(()=>[e(d,{class:"mb-8"},{default:t(()=>[e(u,null,{default:t(()=>[e(x,{"max-width":"50rem",class:"mx-auto"},{default:t(()=>[J,U]),_:1})]),_:1})]),_:1}),e(d,{class:"mb-8"},{default:t(()=>[(s(!0),_(h,null,v(l.members,(a,m)=>(s(),n(u,{cols:"12",sm:"4",key:m,class:"d-flex"},{default:t(()=>[e(k,{flat:"",class:"flex-grow-1 flex-even",rounded:0},{default:t(()=>[a.image?(s(),n(w,{key:0,src:a.image},null,8,["src"])):(s(),n(c,{key:1,class:"bg-vaulted_beige",width:"640px",height:"240px"})),e(V,null,{default:t(()=>[e(T,{class:"text-h5 text-vaulted_darkblue"},{default:t(()=>[i(f(a.title),1)]),_:2},1024),e(C,{class:"text-h6 text-vaulted_grey"},{default:t(()=>[i(f(a.role),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}),e(y,{color:"primary",thickness:"4"}),e(c,{class:"bg-white py-16",id:"team"},{default:t(()=>[e(p,{class:"py-sm-12 constrained"},{default:t(()=>[e(d,{class:"mb-8"},{default:t(()=>[e(u,null,{default:t(()=>[e(x,{"max-width":"50rem",class:"mx-auto"},{default:t(()=>[j,q]),_:1})]),_:1})]),_:1}),e(d,{class:"mb-8"},{default:t(()=>[(s(!0),_(h,null,v(l.board,(a,m)=>(s(),n(u,{cols:"12",sm:"4",key:m,class:"d-flex"},{default:t(()=>[e(k,{flat:"",class:"flex-grow-1 flex-even",rounded:0},{default:t(()=>[a.image?(s(),n(w,{key:0,src:a.image},null,8,["src"])):(s(),n(c,{key:1,class:"bg-vaulted_beige",width:"640px",height:"240px"})),e(V,null,{default:t(()=>[e(T,{class:"text-h5 text-vaulted_darkblue"},{default:t(()=>[i(f(a.title),1)]),_:2},1024),e(C,{class:"text-h6 text-vaulted_grey"},{default:t(()=>[i(f(a.role),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}),e(y,{color:"primary",thickness:"4"}),e(c,{class:"bg-white py-16",id:"team"},{default:t(()=>[e(p,{class:"py-sm-12 constrained"},{default:t(()=>[e(d,{class:"mb-8"},{default:t(()=>[e(u,null,{default:t(()=>[e(x,{"max-width":"50rem",class:"mx-auto"},{default:t(()=>[z,K]),_:1})]),_:1})]),_:1}),e(d,{class:"mb-8"})]),_:1})]),_:1}),e(y,{color:"primary",thickness:"4"}),e(c,{class:"bg-vaulted_grey py-16",id:"team"},{default:t(()=>[e(p,{class:"py-sm-12 constrained"},{default:t(()=>[e(d,{class:"mb-8"},{default:t(()=>[e(u,{cols:"12"},{default:t(()=>[e(x,{"max-width":"50rem",class:"mx-auto"},{default:t(()=>[Q]),_:1})]),_:1})]),_:1}),e(d,{class:"mb-8"},{default:t(()=>[e(u,{cols:"12",class:"pa-8 mx-auto"},{default:t(()=>[e(F,{direction:"vertical"},{default:t(()=>[(s(!0),_(h,null,v(l.timeline,(a,m)=>(s(),n(G,{"dot-color":"vaulted_grey-lighten-2","fill-dot":"",size:"small",key:m},{opposite:t(()=>[r("span",W,f(a.year),1)]),default:t(()=>[e(k,{flat:"",rounded:"0",class:"text-vaulted_darkblue bg-transparent"},{default:t(()=>[r("div",X,[r("img",{src:a.image,class:"img-fix",style:{opacity:"0.9 !important"}},null,8,Y)]),e($,{class:"text-h6 font-weight-regular"},{default:t(()=>[i(f(a.description),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})],64)}const de=R(I,[["render",Z]]);export{de as default};
