import{l as k,Y as w,J as P,K as r,L as f,n as t,M as e,H as g,S as p,P as o,N as h,O as i,Q as n}from"./index-f44abb29.js";import{P as B}from"./PageHeader-09f4b11b.js";import{_ as A,j as V,o as u,p as d}from"./VRow-a36af384.js";import{V as m}from"./VSheet-ab5639b6.js";import{V as x}from"./VBtn-94449f21.js";import{V as b,c as v,a as y,d as S}from"./VCard-5cdf307b.js";import{V as T}from"./VAvatar-e3994923.js";import{V as M}from"./VDivider-82bb434c.js";const D=k("team",{state:()=>({members:[{title:"Dieter Spälti",image:"",role:"President of the Board"},{title:"Francesco Ranaudo",image:"",role:"CEO"},{title:"Tom Van Mele",image:"",role:"CTO"},{title:"Annina Gaam",image:"",role:"Business Manager"},{title:"Andrea Menardo",image:"",role:"Product Developer"},{title:"Vasilis Aloutsanidis",image:"",role:"Senior Genius"},{title:"Aurèle Gheyselinck",image:"",role:"Junior Genius"}],partners:[{title:"Bürgin Creations",image:"",role:"Prototyping"},{title:"alphabeton",image:"",role:"Production"},{title:"Holcim",image:"",role:"Material Development"}]}),getters:{getMembers(a){return a.members},getPartners(a){return a.partners}}}),G={components:{PageHeader:B},setup(){const a=w(),s=D();return{goTo:a,teamStore:s}},data:()=>({title:"VAULTED AG",intro:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae pariatur ratione minus earum debitis tenetur at aperiam voluptatum dolores unde quidem alias assumenda repudiandae illum distinctio, eos vel saepe doloribus!",members:[],partners:[]}),created(){this.members=this.teamStore.getMembers,this.partners=this.teamStore.getPartners},methods:{goToSection(a){this.goTo(`#${a}`,{offset:-64})}}},$={class:"d-flex flex-wrap justify-center"},L=p("h2",{class:"text-h4 text-primary font-weight-bold text-center"},"Team",-1),N=p("h2",{class:"text-h4 text-primary font-weight-bold text-center"},"Partners",-1);function E(a,s,H,O,R,_){const C=P("page-header");return r(),f(g,null,[t(C,{title:a.title,text:a.intro},{default:e(()=>[p("div",$,[t(x,{variant:"tonal",color:"vaulted_lime",class:"align-self-center ma-2",onClick:s[0]||(s[0]=l=>_.goToSection("team"))},{default:e(()=>[o("Team")]),_:1}),t(x,{variant:"tonal",color:"vaulted_lime",class:"align-self-center ma-2",onClick:s[1]||(s[1]=l=>_.goToSection("partners"))},{default:e(()=>[o("Partners")]),_:1})])]),_:1},8,["title","text"]),t(m,{class:"bg-white py-16",id:"team"},{default:e(()=>[t(V,null,{default:e(()=>[t(u,{class:"mb-12"},{default:e(()=>[t(d,null,{default:e(()=>[L]),_:1})]),_:1}),t(u,null,{default:e(()=>[(r(!0),f(g,null,h(a.members,(l,c)=>(r(),i(d,{cols:"12",sm:"4",key:c,class:"d-flex"},{default:e(()=>[t(b,{flat:"",class:"flex-grow-1 flex-even",rounded:0},{default:e(()=>[l.image?(r(),i(T,{key:0,src:l.image},null,8,["src"])):(r(),i(m,{key:1,class:"bg-vaulted_beige",width:"640px",height:"240px"})),t(v,null,{default:e(()=>[t(y,null,{default:e(()=>[o(n(l.title),1)]),_:2},1024),t(S,null,{default:e(()=>[o(n(l.role),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}),t(M,{color:"primary"}),t(m,{class:"bg-white py-16",id:"team"},{default:e(()=>[t(V,null,{default:e(()=>[t(u,{class:"mb-12"},{default:e(()=>[t(d,null,{default:e(()=>[N]),_:1})]),_:1}),t(u,null,{default:e(()=>[(r(!0),f(g,null,h(a.partners,(l,c)=>(r(),i(d,{cols:"12",sm:"4",key:c,class:"d-flex"},{default:e(()=>[t(b,{flat:"",class:"flex-grow-1 flex-even",rounded:0},{default:e(()=>[l.image?(r(),i(T,{key:0,src:l.image},null,8,["src"])):(r(),i(m,{key:1,class:"bg-vaulted_beige",width:"640px",height:"240px"})),t(v,null,{default:e(()=>[t(y,null,{default:e(()=>[o(n(l.title),1)]),_:2},1024),t(S,null,{default:e(()=>[o(n(l.role),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})],64)}const Y=A(G,[["render",E]]);export{Y as default};