import{m as l,u as s,a as C,b as H,i as J,c as K,s as $,v as G,d as Q,f as U,j as W,g as X,w as Y,x as Z,h as ee}from"./VRow-658760ab.js";import{q as c,z as ae,t as n,p as y,J as m,P as A,v as te,x as ne,c as h,K as de,O as ie}from"./index-dbc41064.js";import{c as le,a as P,V as se}from"./VAvatar-2611210d.js";import{m as x,e as S,V,k as ce,a as re,b as ue,R as oe,c as ve,d as me,l as ye,u as be,L as ge,g as ke}from"./index-91592558.js";const fe=c()({name:"VCardActions",props:l(),setup(e,d){let{slots:t}=d;return ae({VBtn:{slim:!0,variant:"text"}}),s(()=>{var a;return n("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),Ve=y({opacity:[Number,String],...l(),...C()},"VCardSubtitle"),Ce=c()({name:"VCardSubtitle",props:Ve(),setup(e,d){let{slots:t}=d;return s(()=>n(e.tag,{class:["v-card-subtitle",e.class],style:[{"--v-card-subtitle-opacity":e.opacity},e.style]},t)),{}}}),Ie=le("v-card-title"),pe=y({appendAvatar:String,appendIcon:m,prependAvatar:String,prependIcon:m,subtitle:[String,Number],title:[String,Number],...l(),...x()},"VCardItem"),Ae=c()({name:"VCardItem",props:pe(),setup(e,d){let{slots:t}=d;return s(()=>{var u;const a=!!(e.prependAvatar||e.prependIcon),b=!!(a||t.prepend),r=!!(e.appendAvatar||e.appendIcon),g=!!(r||t.append),k=!!(e.title!=null||t.title),f=!!(e.subtitle!=null||t.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[b&&n("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?n(V,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},t.prepend):n(A,null,[e.prependAvatar&&n(P,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&n(S,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),n("div",{class:"v-card-item__content"},[k&&n(Ie,{key:"title"},{default:()=>{var i;return[((i=t.title)==null?void 0:i.call(t))??e.title]}}),f&&n(Ce,{key:"subtitle"},{default:()=>{var i;return[((i=t.subtitle)==null?void 0:i.call(t))??e.subtitle]}}),(u=t.default)==null?void 0:u.call(t)]),g&&n("div",{key:"append",class:"v-card-item__append"},[t.append?n(V,{key:"append-defaults",disabled:!r,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},t.append):n(A,null,[e.appendIcon&&n(S,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&n(P,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),he=y({opacity:[Number,String],...l(),...C()},"VCardText"),Pe=c()({name:"VCardText",props:he(),setup(e,d){let{slots:t}=d;return s(()=>n(e.tag,{class:["v-card-text",e.class],style:[{"--v-card-text-opacity":e.opacity},e.style]},t)),{}}}),Se=y({appendAvatar:String,appendIcon:m,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:m,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...H(),...l(),...x(),...J(),...K(),...ce(),...$(),...G(),...Q(),...re(),...C(),...te(),...ue({variant:"elevated"})},"VCard"),De=c()({name:"VCard",directives:{Ripple:oe},props:Se(),setup(e,d){let{attrs:t,slots:a}=d;const{themeClasses:b}=ne(e),{borderClasses:r}=U(e),{colorClasses:g,colorStyles:k,variantClasses:f}=ve(e),{densityClasses:u}=me(e),{dimensionStyles:i}=W(e),{elevationClasses:T}=X(e),{loaderClasses:L}=ye(e),{locationStyles:B}=Y(e),{positionClasses:D}=Z(e),{roundedClasses:N}=ee(e),o=be(e,t),_=h(()=>e.link!==!1&&o.isLink.value),v=h(()=>!e.disabled&&e.link!==!1&&(e.link||o.isClickable.value));return s(()=>{const R=_.value?"a":e.tag,F=!!(a.title||e.title!=null),O=!!(a.subtitle||e.subtitle!=null),j=F||O,w=!!(a.append||e.appendAvatar||e.appendIcon),E=!!(a.prepend||e.prependAvatar||e.prependIcon),M=!!(a.image||e.image),q=j||E||w,z=!!(a.text||e.text!=null);return de(n(R,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":v.value},b.value,r.value,g.value,u.value,T.value,L.value,D.value,N.value,f.value,e.class],style:[k.value,i.value,B.value,e.style],href:o.href.value,onClick:v.value&&o.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var I;return[M&&n("div",{key:"image",class:"v-card__image"},[a.image?n(V,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):n(se,{key:"image-img",cover:!0,src:e.image},null)]),n(ge,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),q&&n(Ae,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),z&&n(Pe,{key:"text"},{default:()=>{var p;return[((p=a.text)==null?void 0:p.call(a))??e.text]}}),(I=a.default)==null?void 0:I.call(a),a.actions&&n(fe,null,{default:a.actions}),ke(v.value,"v-card")]}}),[[ie("ripple"),v.value&&e.ripple]])}),{}}});export{De as V,Ie as a,Pe as b,Ae as c,Ce as d};
