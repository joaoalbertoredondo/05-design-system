const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/axe-BFJxu91j.js","assets/_commonjsHelpers-Cpj98o6Y.js"])))=>i.map(i=>d[i]);
import{_ as S}from"./iframe-BKy7b0h5.js";import"../sb-preview/runtime.js";const{global:f}=__STORYBOOK_MODULE_GLOBAL__,{addons:U}=__STORYBOOK_MODULE_PREVIEW_API__;var o="storybook/a11y",y=`${o}/result`,L=`${o}/request`,d=`${o}/running`,A=`${o}/error`,T=`${o}/manual`,r={RESULT:y,REQUEST:L,RUNNING:d,ERROR:A,MANUAL:T},{document:g}=f,a=U.getChannel(),_=!1,l,R={config:{},options:{}},v=async(n,e)=>{e!=null&&e.manual||await i(n,e??R)},i=async(n,e=R)=>{l=n;try{if(!_){_=!0,a.emit(r.RUNNING);let{default:t}=await S(()=>import("./axe-BFJxu91j.js").then(N=>N.a),__vite__mapDeps([0,1])),{element:O="#storybook-root",config:s,options:c={}}=e,E=g.querySelector(O);if(!E)return;t.reset(),s&&t.configure(s);let m=await t.run(E,c),u=JSON.parse(JSON.stringify(m));l===n?a.emit(r.RESULT,u):(_=!1,i(l))}}catch(t){a.emit(r.ERROR,t)}finally{_=!1}};a.on(r.REQUEST,v);a.on(r.MANUAL,i);
