import{l as T,Y as C,J as P,K as r,L as m,n as t,M as e,H as c,S as g,P as o,N as h,O as i,Q as f}from"./index-5fd3aa2b.js";import{P as k}from"./PageHeader-1a03fe03.js";import{_ as w,j as V,o as n,p as u}from"./VRow-801ee935.js";import{V as p}from"./VSheet-13b77147.js";import{V as b}from"./VBtn-b3127386.js";import{V as x,c as v,a as y,d as B}from"./VCard-a9fc803a.js";import{V as A}from"./VImg-4d966820.js";import"./VAvatar-52ed1786.js";const M=T("team",{state:()=>({members:[{title:"Dieter Spälti",image:"",role:"President of the Board"},{title:"Francesco Ranaudo",image:"",role:"CEO"},{title:"Tom Van Mele",image:"",role:"CTO"},{title:"Annina Gaam",image:"",role:"Business Manager"},{title:"Andrea Menardo",image:"",role:"Product Developer"},{title:"Vasilis Aloutsanidis",image:"",role:"Senior Genius"},{title:"Aurèle Gheyselinck",image:"",role:"Junior Genius"}],partners:[{title:"Bürgin Creations",image:"",role:"Prototyping"},{title:"alphabeton",image:"",role:"Production"},{title:"Holcim",image:"",role:"Material Development"}]}),getters:{getMembers(a){return a.members},getPartners(a){return a.partners}}}),G={components:{PageHeader:k},setup(){const a=C(),s=M();return{goTo:a,teamStore:s}},data:()=>({title:"VAULTED AG",intro:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae pariatur ratione minus earum debitis tenetur at aperiam voluptatum dolores unde quidem alias assumenda repudiandae illum distinctio, eos vel saepe doloribus!",members:[],partners:[]}),created(){this.members=this.teamStore.getMembers,this.partners=this.teamStore.getPartners},methods:{goToSection(a){this.goTo(`#${a}`,{offset:-64})}}},D={class:"d-flex flex-wrap justify-center"},$=g("h2",{class:"text-h4 text-primary-lighten-3 font-weight-bold text-center mb-8"},"Team",-1),L=g("h2",{class:"text-h4 text-primary-lighten-3 font-weight-bold text-center mb-8"},"Partners",-1);function N(a,s,j,E,H,_){const S=P("page-header");return r(),m(c,null,[t(S,{title:a.title,text:a.intro},{default:e(()=>[g("div",D,[t(b,{variant:"tonal",color:"vaulted_lime",class:"align-self-center ma-2",onClick:s[0]||(s[0]=l=>_.goToSection("team"))},{default:e(()=>[o("Team")]),_:1}),t(b,{variant:"tonal",color:"vaulted_lime",class:"align-self-center ma-2",onClick:s[1]||(s[1]=l=>_.goToSection("partners"))},{default:e(()=>[o("Partners")]),_:1})])]),_:1},8,["title","text"]),t(p,{class:"bg-white py-8 py-sm-16",id:"team"},{default:e(()=>[t(V,null,{default:e(()=>[t(n,null,{default:e(()=>[t(u,null,{default:e(()=>[$]),_:1})]),_:1}),t(n,{class:"mt-8"},{default:e(()=>[(r(!0),m(c,null,h(a.members,(l,d)=>(r(),i(u,{cols:"12",sm:"4",key:d,class:"d-flex"},{default:e(()=>[t(x,{flat:"",class:"flex-grow-1 flex-even",rounded:0},{default:e(()=>[l.image?(r(),i(A,{key:0,src:l.image},null,8,["src"])):(r(),i(p,{key:1,class:"bg-vaulted_beige",width:"640px",height:"240px"})),t(v,null,{default:e(()=>[t(y,null,{default:e(()=>[o(f(l.title),1)]),_:2},1024),t(B,null,{default:e(()=>[o(f(l.role),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}),t(p,{class:"bg-vaulted_beige py-16",id:"partners"},{default:e(()=>[t(V,null,{default:e(()=>[t(n,null,{default:e(()=>[t(u,null,{default:e(()=>[L]),_:1})]),_:1}),t(n,{class:"d-flex justify-center"},{default:e(()=>[(r(!0),m(c,null,h(a.partners,(l,d)=>(r(),i(u,{cols:"12",sm:"3",key:d},{default:e(()=>[t(x,{flat:""},{default:e(()=>[t(v,null,{default:e(()=>[t(y,null,{default:e(()=>[o(f(l.title),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})],64)}const U=w(G,[["render",N]]);export{U as default};
