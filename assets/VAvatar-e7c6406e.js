import{b as d,m as V,i as f,d as g,H as k,a as y,l as P,f as C,o as I,p as S,h as A,I as h,u as x,s as z,V as B,r as D}from"./VRow-c5dc0705.js";import{p as R,I as T,v as b,q,x as F,t as e}from"./index-0054c7b1.js";import{V as H}from"./VImg-346740d7.js";const N=R({start:Boolean,end:Boolean,icon:T,image:String,text:String,...d(),...V(),...f(),...g(),...k(),...y(),...b(),...P({variant:"flat"})},"VAvatar"),w=q()({name:"VAvatar",props:N(),setup(a,t){let{slots:s}=t;const{themeClasses:n}=F(a),{borderClasses:o}=C(a),{colorClasses:l,colorStyles:r,variantClasses:u}=I(a),{densityClasses:i}=S(a),{roundedClasses:c}=A(a),{sizeClasses:v,sizeStyles:m}=h(a);return x(()=>e(a.tag,{class:["v-avatar",{"v-avatar--start":a.start,"v-avatar--end":a.end},n.value,o.value,l.value,i.value,c.value,v.value,u.value,a.class],style:[r.value,m.value,a.style]},{default:()=>[s.default?e(B,{key:"content-defaults",defaults:{VImg:{cover:!0,src:a.image},VIcon:{icon:a.icon}}},{default:()=>[s.default()]}):a.image?e(H,{key:"image",src:a.image,alt:"",cover:!0},null):a.icon?e(z,{key:"icon",icon:a.icon},null):a.text,D(!1,"v-avatar")]})),{}}});export{w as V};