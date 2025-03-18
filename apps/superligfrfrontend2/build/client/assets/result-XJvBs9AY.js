var M=e=>{throw TypeError(e)};var S=(e,t,s)=>t.has(e)||M("Cannot "+s);var o=(e,t,s)=>(S(e,t,"read from private field"),s?s.call(e):t.get(e)),v=(e,t,s)=>t.has(e)?M("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),b=(e,t,s,n)=>(S(e,t,"write to private field"),n?n.call(e,s):t.set(e,s),s),R=(e,t,s)=>(S(e,t,"access private method"),s);import{a as F}from"./with-props-DOCsIwbA.js";import{r as j,l as r,p as H}from"./chunk-IR6S3I6Y-CejqwHmg.js";import{H as Q}from"./header-page-DZxyNwnu.js";import{n as T,s as K,u as O}from"./use-fetch-query-tJGRwGxT.js";import{F as P,a as D,b as U}from"./hour-formatter-CzWevOZy.js";import{H as q}from"./http-CHaSCwl_.js";import{S as B,k as z,i as _,n as I,u as L}from"./QueryClientProvider-kVcQyYS3.js";import{g as V}from"./mutation-BVjqZoZ7.js";import{R as $,a as G}from"./result-card-name-club-FS8G1A8c.js";import{c as J}from"./createLucideIcon-BDxvMJNy.js";import{m as W}from"./proxy-Dfs-9Oo0.js";import{S as X,a as Y,b as Z,c as tt,d as et,e as st}from"./select-CW9NS8NW.js";import{S as N}from"./skeleton-06xh8mZJ.js";import"./index-3ThQvDAs.js";import"./index-BdQq_4o_.js";import"./index-BDMYZm18.js";import"./index-BKcokVnB.js";import"./Combination-CDPyXvYw.js";import"./index-CsB1J-M4.js";import"./index-Bp6M9VFR.js";import"./utils-DgjiVB1k.js";var g,y,u,p,f,w,E,k,rt=(k=class extends B{constructor(t,s){super();v(this,f);v(this,g);v(this,y);v(this,u);v(this,p);b(this,g,t),this.setOptions(s),this.bindMethods(),R(this,f,w).call(this)}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){var n;const s=this.options;this.options=o(this,g).defaultMutationOptions(t),z(this.options,s)||o(this,g).getMutationCache().notify({type:"observerOptionsUpdated",mutation:o(this,u),observer:this}),s!=null&&s.mutationKey&&this.options.mutationKey&&_(s.mutationKey)!==_(this.options.mutationKey)?this.reset():((n=o(this,u))==null?void 0:n.state.status)==="pending"&&o(this,u).setOptions(this.options)}onUnsubscribe(){var t;this.hasListeners()||(t=o(this,u))==null||t.removeObserver(this)}onMutationUpdate(t){R(this,f,w).call(this),R(this,f,E).call(this,t)}getCurrentResult(){return o(this,y)}reset(){var t;(t=o(this,u))==null||t.removeObserver(this),b(this,u,void 0),R(this,f,w).call(this),R(this,f,E).call(this)}mutate(t,s){var n;return b(this,p,s),(n=o(this,u))==null||n.removeObserver(this),b(this,u,o(this,g).getMutationCache().build(o(this,g),this.options)),o(this,u).addObserver(this),o(this,u).execute(t)}},g=new WeakMap,y=new WeakMap,u=new WeakMap,p=new WeakMap,f=new WeakSet,w=function(){var s;const t=((s=o(this,u))==null?void 0:s.state)??V();b(this,y,{...t,isPending:t.status==="pending",isSuccess:t.status==="success",isError:t.status==="error",isIdle:t.status==="idle",mutate:this.mutate,reset:this.reset})},E=function(t){I.batch(()=>{var s,n,c,a,l,i,d,h;if(o(this,p)&&this.hasListeners()){const m=o(this,y).variables,x=o(this,y).context;(t==null?void 0:t.type)==="success"?((n=(s=o(this,p)).onSuccess)==null||n.call(s,t.data,m,x),(a=(c=o(this,p)).onSettled)==null||a.call(c,t.data,null,m,x)):(t==null?void 0:t.type)==="error"&&((i=(l=o(this,p)).onError)==null||i.call(l,t.error,m,x),(h=(d=o(this,p)).onSettled)==null||h.call(d,void 0,t.error,m,x))}this.listeners.forEach(m=>{m(o(this,y))})})},k);function nt(e,t){const s=L(),[n]=j.useState(()=>new rt(s,e));j.useEffect(()=>{n.setOptions(e)},[n,e]);const c=j.useSyncExternalStore(j.useCallback(l=>n.subscribe(I.batchCalls(l)),[n]),()=>n.getCurrentResult(),()=>n.getCurrentResult()),a=j.useCallback((l,i)=>{n.mutate(l,i).catch(T)},[n]);if(c.error&&K(n.options.throwOnError,[c.error]))throw c.error;return{...c,mutate:a,mutateAsync:c.mutate}}/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const it=[["path",{d:"M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1z",key:"1p1rcz"}],["path",{d:"M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2",key:"mcbcs9"}],["path",{d:"M18 22v-3",key:"1t1ugv"}],["circle",{cx:"10",cy:"10",r:"3",key:"1ns7v1"}]],at=J("MapPinHouse",it);class ot extends q{async getResultsByDateRange(t,s){return await this.get(`/resultsByDateRange/${t}/${s}`)}}const C=new P,A=new ot;function ct(){const e=L(),t=O(["initialRound"],async()=>{var m;const i=await C.getAllRounds(),d=parseInt(((m=i==null?void 0:i.find(x=>x.is_current===!0))==null?void 0:m.name)||"0")-1,h=i==null?void 0:i.find(x=>x.name===d.toString());return(h==null?void 0:h.name)||"1"}),s=t.data,[n,c]=j.useState(t.data||"1"),a=O(["rounds",n],async()=>{const i=await C.getAllRounds(),d=i==null?void 0:i.find(m=>m.name===n);if(!d)throw new Error("Round not found");return{fixtures:await A.getResultsByDateRange(d.starting_at,d.ending_at),round:d.name}},{enabled:!!t.data});j.useEffect(()=>{t.data&&c(t.data)},[t.data]);const l=nt({mutationFn:async i=>{const d=await C.getAllRounds(),h=d==null?void 0:d.find(x=>x.name===i);if(!h)throw new Error("Round not found");return{fixtures:await A.getResultsByDateRange(h.starting_at,h.ending_at),round:i}},onSuccess:i=>{e.setQueryData(["rounds",i.round],i),e.invalidateQueries({queryKey:["rounds"]}),c(i.round)}});return{roundQuery:a,currentRound:n,setCurrentRound:c,updateFixtures:l,lastRound:s,isInitialLoading:t.isLoading}}const lt=({result:e})=>r.jsxs("div",{className:"flex flex-col md:gap-2",children:[r.jsxs("div",{className:"flex items-center gap-1 md:gap-2",children:[r.jsx(at,{className:"w-4 h-4 md:w-6 md:h-6"}),r.jsx("span",{className:"text-xs md:text-base",children:e.venue.name})]}),r.jsx("div",{className:"self-center text-xs md:text-sm md:self-end text-redsuperlig ",children:D(e.starting_at_timestamp)})]}),ut=({result:e})=>r.jsx(H,{to:`/results/${e.id}`,children:r.jsxs(W.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3},className:"flex flex-col items-center justify-between p-3 transition-colors border border-gray-200 rounded-lg md:flex-row md:p-4 hover:bg-gray-50",children:[r.jsxs("div",{className:"flex items-center gap-4",children:[r.jsx($,{result:e}),r.jsx("div",{children:r.jsx(dt,{result:e})}),r.jsx(G,{result:e})]}),r.jsx("div",{className:"flex flex-col items-center gap-4 mt-2 md:flex-row",children:r.jsx(lt,{result:e})})]},e.id)}),dt=({result:e})=>{const t=e.scores&&e.scores.length===0;return r.jsx("div",{className:"flex w-[70px] py-1 px-3 bg-redsuperlig justify-center font-bold text-white rounded-lg text-sm",children:t?U(e.starting_at_timestamp):r.jsx(mt,{result:e})})},mt=({result:e})=>{var n,c;const t=(n=e.scores)==null?void 0:n.find(a=>a.description==="CURRENT"&&a.score.participant==="home"),s=(c=e.scores)==null?void 0:c.find(a=>a.description==="CURRENT"&&a.score.participant==="away");return r.jsxs("div",{className:"text-sm font-bold",children:[t==null?void 0:t.score.goals," - ",s==null?void 0:s.score.goals]})},ht=({currentRound:e,updateFixtures:t,lastRound:s})=>{const n=Array.from({length:parseInt(s)},(a,l)=>l+1),c=async a=>{try{await t.mutateAsync(a)}catch(l){console.error("Erreur lors de la mise à jour des résultats:",l)}};return r.jsxs(X,{value:e,onValueChange:c,children:[r.jsx(Y,{className:"md:max-w-xs max-w-[200px]",children:r.jsx(Z,{placeholder:"Sélectionner une journée"})}),r.jsx(tt,{children:r.jsx(et,{children:n.map(a=>r.jsxs(st,{value:a.toString(),children:["Journée ",a]},a))})})]})},xt=()=>r.jsxs("div",{className:"mt-4",children:[r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx(N,{className:" w-28 md:w-44 h-7 md:h-9"}),r.jsx(N,{className:"w-48 h-10 md:w-80"})]}),r.jsx("div",{className:"flex flex-col gap-4 mt-8",children:Array.from({length:8}).map((e,t)=>r.jsx(N,{className:"w-full h-24 md:h-28"},t))})]}),pt=()=>{const{roundQuery:e,currentRound:t,updateFixtures:s,isInitialLoading:n,lastRound:c}=ct(),{data:a,isFetching:l}=e;return n||l||!a||!c?r.jsx(xt,{}):r.jsxs("div",{className:"mt-4",children:[r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("h1",{className:"text-xl font-extrabold md:text-3xl text-redsuperlig",children:["Journée ",t]}),t&&r.jsx(ht,{lastRound:c,currentRound:t,updateFixtures:s})]}),r.jsx("div",{className:"flex flex-col gap-4 mt-8",children:a==null?void 0:a.fixtures.map(i=>r.jsx(ut,{result:i},i.id))})]})},Tt=F(function(){return r.jsxs("div",{className:"min-h-screen",children:[r.jsx(Q,{title:"Résultats",subtitle:"Suivez les résultats de la Süper Lig"}),r.jsx("div",{className:"container p-4 mx-auto ",children:r.jsx(pt,{})})]})});export{Tt as default};
