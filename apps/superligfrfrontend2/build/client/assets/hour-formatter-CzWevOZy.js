import{H as c}from"./http-CHaSCwl_.js";class g extends c{async getAllRounds(){return await this.get("/allRounds")}async getLastFixtures(e,s){return await this.get(`/fixturesByDateRange/${e}/${s}`)}async getFixtureById(e){return await this.get(`/fixtureById/${e}`)}}const d=["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],u=["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],p=t=>{const e=typeof t=="string"?parseInt(t)*1e3:t*1e3,s=new Date(e),n=u[s.getDay()],r=n.charAt(0).toUpperCase()+n.slice(1),a=s.getDate(),o=d[s.getMonth()],i=s.getFullYear();return`${r} ${a} ${o} ${i}`},l=t=>{const e=typeof t=="string"?parseInt(t)*1e3:t*1e3;return new Date(e).toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"})},y=t=>{const e=new Date(t*1e3);e.setHours(e.getHours());const s=e.getHours().toString().padStart(2,"0"),n=e.getMinutes().toString().padStart(2,"0");return`${s}:${n}`};export{g as F,l as a,y as b,p as f};
