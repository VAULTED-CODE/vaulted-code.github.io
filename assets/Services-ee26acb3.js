import{P as S}from"./PageHeader-f86930a1.js";import{_ as y,l as w,q as h,r as _,A as L}from"./VAvatar-62ee841a.js";import{V as C,d as D}from"./VDivider-46d18732.js";import{V as I,a as P,b as k}from"./VCard-02d6d8ab.js";import{V as Q}from"./VSheet-905bbfe1.js";import{a3 as T,G as B,J as N,K as a,L as s,n as t,M as e,H as o,N as m,S as d,O as n,P as l,Q as u,R as $}from"./index-d7493a97.js";const A={components:{PageHeader:S},setup(){const i=T(),{mobile:c,smAndDown:p,smAndUp:f,mdAndUp:g}=B();return{goTo:i,mobile:c,smAndDown:p,smAndUp:f,mdAndUp:g}},data:()=>({title:"Services",intro:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolorem maxime, nulla quam ratione fugit maiores ipsum hic earum vero sed sequi saepe repellendus reprehenderit ullam, perspiciatis consequatur distinctio quo.",phases:[{title:"Design",anchor:"design",text:"",steps:[{title:"Schematic Design",text:"Together with the project team we identify ..."},{title:"Detailed Design",text:"We work with the project engineer to ..."},{title:"Construction Documents",text:"We provide all required documentation for ..."}],services:[{title:"Service 1",text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos fugit earum veritatis quibusdam maxime. Perferendis id eligendi asperiores cupiditate commodi assumenda voluptatum ab veritatis exercitationem tenetur, fugiat corporis. Iure, fugiat."},{title:"Service 2",text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos fugit earum veritatis quibusdam maxime. Perferendis id eligendi asperiores cupiditate commodi assumenda voluptatum ab veritatis exercitationem tenetur, fugiat corporis. Iure, fugiat."},{title:"Service 3",text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos fugit earum veritatis quibusdam maxime. Perferendis id eligendi asperiores cupiditate commodi assumenda voluptatum ab veritatis exercitationem tenetur, fugiat corporis. Iure, fugiat."},{title:"Service 4",text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos fugit earum veritatis quibusdam maxime. Perferendis id eligendi asperiores cupiditate commodi assumenda voluptatum ab veritatis exercitationem tenetur, fugiat corporis. Iure, fugiat."}]},{title:"Execution",anchor:"execution",text:"",steps:[{title:"Fabrication",text:""},{title:"Delivery",text:""},{title:"Installation",text:""}],services:[{title:"Service 1",text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos fugit earum veritatis quibusdam maxime. Perferendis id eligendi asperiores cupiditate commodi assumenda voluptatum ab veritatis exercitationem tenetur, fugiat corporis. Iure, fugiat."},{title:"Service 2",text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos fugit earum veritatis quibusdam maxime. Perferendis id eligendi asperiores cupiditate commodi assumenda voluptatum ab veritatis exercitationem tenetur, fugiat corporis. Iure, fugiat."},{title:"Service 3",text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos fugit earum veritatis quibusdam maxime. Perferendis id eligendi asperiores cupiditate commodi assumenda voluptatum ab veritatis exercitationem tenetur, fugiat corporis. Iure, fugiat."},{title:"Service 4",text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos fugit earum veritatis quibusdam maxime. Perferendis id eligendi asperiores cupiditate commodi assumenda voluptatum ab veritatis exercitationem tenetur, fugiat corporis. Iure, fugiat."}]}]}),methods:{goToSection(i){this.goTo(`#${i}`,{offset:-64})}}},j={class:"d-flex flex-wrap justify-center"},R={class:"text-h4 text-primary font-weight-bold text-center mb-8"},E=d("p",{class:"text-h5 font-weight-regular text-vaulted_grey text-center"}," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos tempore ipsam distinctio, mollitia, expedita nesciunt fugiat laborum quasi explicabo voluptate quas sed iusto corrupti ipsa. Iste alias reiciendis perferendis rem! ",-1);function F(i,c,p,f,g,b){const V=N("page-header");return a(),s(o,null,[t(V,{title:i.title,text:i.intro},{default:e(()=>[d("div",j,[(a(!0),s(o,null,m(i.phases,r=>(a(),n(C,{color:"vaulted_lime",variant:"tonal",class:"align-self-center ma-2",key:r.anchor,onClick:x=>b.goToSection(r.anchor)},{default:e(()=>[l(u(r.title),1)]),_:2},1032,["onClick"]))),128))])]),_:1},8,["title","text"]),(a(!0),s(o,null,m(i.phases,(r,x)=>(a(),s(o,{key:r.anchor},[x>0?(a(),n(D,{key:0,color:"primary"})):$("",!0),t(Q,{class:"py-16"},{default:e(()=>[t(w,null,{default:e(()=>[t(h,{class:"mb-12"},{default:e(()=>[t(_,null,{default:e(()=>[t(L,{"max-width":"55rem",class:"mx-auto"},{default:e(()=>[d("h2",R,u(r.title),1),E]),_:2},1024)]),_:2},1024)]),_:2},1024),t(h,{class:"mb-8"},{default:e(()=>[(a(!0),s(o,null,m(r.services,(v,q)=>(a(),n(_,{cols:"12",sm:"4",key:q},{default:e(()=>[t(I,{flat:"",rounded:0,class:"bg-vaulted_beige pa-4"},{default:e(()=>[t(P,{class:"text-h5 text-vaulted_indigo font-weight-medium"},{default:e(()=>[l(u(v.title),1)]),_:2},1024),t(k,{class:"text-body-1 font-weight-regular text-primary"},{default:e(()=>[l(u(v.text),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:2},1024)]),_:2},1024)]),_:2},1024)],64))),128))],64)}const M=y(A,[["render",F]]);export{M as default};
