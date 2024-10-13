import{l as k,a3 as w,J as P,K as r,L as f,n as t,M as e,H as g,S as p,P as o,N as h,O as i,Q as n}from"./index-46d9df49.js";import{P as B}from"./PageHeader-6b32f2af.js";import{_ as A,l as x,q as u,r as d,V}from"./VAvatar-f64c6a0b.js";import{V as m}from"./VSheet-1d8fe0de.js";import{V as b,d as M}from"./VDivider-abe7f54f.js";import{V as v,c as y,a as S,d as T}from"./VCard-38b6eba3.js";const D=k("team",{state:()=>({members:[{title:"Dieter Spälti",image:"",role:"President of the Board"},{title:"Francesco Ranaudo",image:"",role:"CEO"},{title:"Tom Van Mele",image:"",role:"CTO"},{title:"Annina Gaam",image:"",role:"Business Manager"},{title:"Andrea Menardo",image:"",role:"Product Developer"},{title:"Vasilis Aloutsanidis",image:"",role:"Senior Genius"},{title:"Aurèle Gheyselinck",image:"",role:"Junior Genius"}],partners:[{title:"Bürgin Creations",image:"",role:"Prototyping"},{title:"alphabeton",image:"",role:"Production"},{title:"Holcim",image:"",role:"Material Development"}]}),getters:{getMembers(a){return a.members},getPartners(a){return a.partners}}}),G={components:{PageHeader:B},setup(){const a=w(),s=D();return{goTo:a,teamStore:s}},data:()=>({title:"VAULTED AG",intro:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae pariatur ratione minus earum debitis tenetur at aperiam voluptatum dolores unde quidem alias assumenda repudiandae illum distinctio, eos vel saepe doloribus!",members:[],partners:[]}),created(){this.members=this.teamStore.getMembers,this.partners=this.teamStore.getPartners},methods:{goToSection(a){this.goTo(`#${a}`,{offset:-64})}}},$={class:"d-flex flex-wrap justify-center"},L=p("h2",{class:"text-h4 text-primary font-weight-bold text-center"},"Team",-1),N=p("h2",{class:"text-h4 text-primary font-weight-bold text-center"},"Partners",-1);function E(a,s,H,O,R,_){const C=P("page-header");return r(),f(g,null,[t(C,{title:a.title,text:a.intro},{default:e(()=>[p("div",$,[t(b,{variant:"tonal",color:"vaulted_lime",class:"align-self-center ma-2",onClick:s[0]||(s[0]=l=>_.goToSection("team"))},{default:e(()=>[o("Team")]),_:1}),t(b,{variant:"tonal",color:"vaulted_lime",class:"align-self-center ma-2",onClick:s[1]||(s[1]=l=>_.goToSection("partners"))},{default:e(()=>[o("Partners")]),_:1})])]),_:1},8,["title","text"]),t(m,{class:"bg-white py-16",id:"team"},{default:e(()=>[t(x,null,{default:e(()=>[t(u,{class:"mb-12"},{default:e(()=>[t(d,null,{default:e(()=>[L]),_:1})]),_:1}),t(u,null,{default:e(()=>[(r(!0),f(g,null,h(a.members,(l,c)=>(r(),i(d,{cols:"12",sm:"4",key:c,class:"d-flex"},{default:e(()=>[t(v,{flat:"",class:"flex-grow-1 flex-even",rounded:0},{default:e(()=>[l.image?(r(),i(V,{key:0,src:l.image},null,8,["src"])):(r(),i(m,{key:1,class:"bg-vaulted_beige",width:"640px",height:"240px"})),t(y,null,{default:e(()=>[t(S,null,{default:e(()=>[o(n(l.title),1)]),_:2},1024),t(T,null,{default:e(()=>[o(n(l.role),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}),t(M,{color:"primary"}),t(m,{class:"bg-white py-16",id:"team"},{default:e(()=>[t(x,null,{default:e(()=>[t(u,{class:"mb-12"},{default:e(()=>[t(d,null,{default:e(()=>[N]),_:1})]),_:1}),t(u,null,{default:e(()=>[(r(!0),f(g,null,h(a.partners,(l,c)=>(r(),i(d,{cols:"12",sm:"4",key:c,class:"d-flex"},{default:e(()=>[t(v,{flat:"",class:"flex-grow-1 flex-even",rounded:0},{default:e(()=>[l.image?(r(),i(V,{key:0,src:l.image},null,8,["src"])):(r(),i(m,{key:1,class:"bg-vaulted_beige",width:"640px",height:"240px"})),t(y,null,{default:e(()=>[t(S,null,{default:e(()=>[o(n(l.title),1)]),_:2},1024),t(T,null,{default:e(()=>[o(n(l.role),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})],64)}const Q=A(G,[["render",E]]);export{Q as default};