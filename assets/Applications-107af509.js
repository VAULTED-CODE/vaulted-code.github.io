import{P as T}from"./PageHeader-0fc857b8.js";import{l as S,p as C,q as w,m as P,u as B,n as a,d as D,Y as N,J as x,K as n,L as m,M as o,H as p,N as b,S as e,O as h,P as f,Q as v,R}from"./index-17171ac7.js";import{m as $,s as A,a as H,v as q,u as F,_ as L,j,o as V,p as d,w as E}from"./VRow-558d1f8f.js";import{V as O}from"./VBtn-634bb75b.js";import{V as Q}from"./VDivider-ba336905.js";import{V as y}from"./VSheet-7cce0236.js";const Y=S("applications",{state:()=>({applications:[{title:"Residential",text:null,image:null,anchor:"residential"},{title:"Office",text:null,image:null,anchor:"office"},{title:"Schools",text:null,image:null,anchor:"schools"},{title:"Car Parks",text:null,image:null,anchor:"car-parks"},{title:"Data Centres",text:null,image:null,anchor:"data-centres"}]}),getters:{getApplications(t){return t.applications}}});const G=C({fixedHeader:Boolean,fixedFooter:Boolean,height:[Number,String],hover:Boolean,...$(),...A(),...H(),...w()},"VTable"),I=P()({name:"VTable",props:G(),setup(t,i){let{slots:l,emit:k}=i;const{themeClasses:g}=B(t),{densityClasses:c}=q(t);return F(()=>a(t.tag,{class:["v-table",{"v-table--fixed-height":!!t.height,"v-table--fixed-header":t.fixedHeader,"v-table--fixed-footer":t.fixedFooter,"v-table--has-top":!!l.top,"v-table--has-bottom":!!l.bottom,"v-table--hover":t.hover},g.value,c.value,t.class],style:t.style},{default:()=>{var r,u,s;return[(r=l.top)==null?void 0:r.call(l),l.default?a("div",{class:"v-table__wrapper",style:{height:D(t.height)}},[a("table",null,[l.default()])]):(u=l.wrapper)==null?void 0:u.call(l),(s=l.bottom)==null?void 0:s.call(l)]}})),{}}}),J={components:{PageHeader:T},setup(){const t=N(),i=Y();return{goTo:t,appStore:i}},data:()=>({title:"Applications",intro:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae pariatur ratione minus earum debitis tenetur at aperiam voluptatum dolores unde quidem alias assumenda repudiandae illum distinctio, eos vel saepe doloribus!",applications:[]}),created(){this.applications=this.appStore.getApplications},methods:{goToSection(t){this.goTo(`#${t}`,{offset:-64})}}},K={class:"d-flex flex-wrap justify-center"},M={class:"text-h4 text-primary font-weight-bold text-center"},U=e("p",{class:"text-h6 font-weight-regular text-vaulted_darkblue my-8"}," Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dolor asperiores libero ullam animi, laudantium obcaecati harum? Iste quidem maxime magni illum. Harum sequi eligendi tempore tempora? Temporibus, sint ipsam! ",-1),W=e("thead",null,[e("tr",null,[e("th",null,"Quantity"),e("th",null,"Value")])],-1),X=e("tbody",null,[e("tr",null,[e("td",null,"X Span [m]"),e("td",null,"xxx")]),e("tr",null,[e("td",null,"Y Span [m]"),e("td",null,"xxx")]),e("tr",null,[e("td",null,"Depth [m]"),e("td",null,"xxx")]),e("tr",null,[e("td",null,"Shell Thickness [mm]"),e("td",null,"xxx")]),e("tr",null,[e("td",null,[f("Weight [kg/m"),e("sup",null,"2"),f("]")]),e("td",null,"xxx")])],-1);function z(t,i,l,k,g,c){const r=x("page-header"),u=x("v-template");return n(),m(p,null,[a(r,{title:t.title,text:t.intro},{default:o(()=>[e("div",K,[(n(!0),m(p,null,b(t.applications,s=>(n(),h(O,{variant:"tonal",color:"vaulted_lime",class:"align-self-center ma-2",key:s.anchor,onClick:_=>c.goToSection(s.anchor)},{default:o(()=>[f(v(s.title),1)]),_:2},1032,["onClick"]))),128))])]),_:1},8,["title","text"]),(n(!0),m(p,null,b(t.applications,(s,_)=>(n(),h(u,{key:s.anchor},{default:o(()=>[_>0?(n(),h(Q,{key:0,color:"primary"})):R("",!0),a(y,{id:s.anchor,class:"py-16"},{default:o(()=>[a(j,null,{default:o(()=>[a(V,{class:"mb-12"},{default:o(()=>[a(d,null,{default:o(()=>[e("h2",M,v(s.title),1)]),_:2},1024)]),_:2},1024),a(V,null,{default:o(()=>[a(d,{cols:"12",class:"bg-white"},{default:o(()=>[a(E,{"aspect-ratio":16/9,width:"100%"},{default:o(()=>[a(y,{class:"bg-vaulted_beige",width:"100%",height:"100%"})]),_:1})]),_:1}),a(d,{cols:"12",sm:"6"},{default:o(()=>[U]),_:1}),a(d,{cols:"12",sm:"6"},{default:o(()=>[a(I,{density:"compact",class:"mt-8 mb-4 bg-vaulted_beige"},{default:o(()=>[W,X]),_:1})]),_:1})]),_:1})]),_:2},1024)]),_:2},1032,["id"])]),_:2},1024))),128))],64)}const se=L(J,[["render",z]]);export{se as default};
