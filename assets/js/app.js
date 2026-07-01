
let i=0,xp=0,data=[];
const ex=document.getElementById('exercise'),nav=document.getElementById('nav');
fetch('data/lesson.json').then(r=>r.json()).then(j=>{lesson.textContent=j.lesson;data=j.items;render();});
function next(){i++;if(i>=data.length){ex.innerHTML='<h2>Mission beendet! 🎉</h2>';nav.innerHTML='';return;}render();}
function render(){
const q=data[i];
if(q.type==='flash'){
ex.innerHTML=`<h2>${q.de}</h2><button id=s>Antwort zeigen</button><p id=a></p>`;
s.onclick=()=>a.textContent=q.es;
nav.innerHTML='<button id=n>Weiter +10XP</button>';n.onclick=()=>{xp+=10;xpEl();next();}
}
if(q.type==='mc'){
ex.innerHTML='<h2>¿Qué significa <b>'+q.de+'</b>?</h2>';
q.options.forEach(o=>{const b=document.createElement('button');b.textContent=o;b.onclick=()=>{if(o===q.es)xp+=10;xpEl();next();};ex.appendChild(b);});
nav.innerHTML='';
}
if(q.type==='write'){
ex.innerHTML=`<h2>Escribe en español: <b>${q.de}</b></h2><input id=t><button id=c>Comprobar</button>`;
c.onclick=()=>{if(t.value.trim().toLowerCase()===q.es.toLowerCase())xp+=15;xpEl();next();};
nav.innerHTML='';
}
}
function xpEl(){document.getElementById('xp').textContent=xp;}
