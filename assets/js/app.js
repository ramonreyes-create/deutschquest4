
const views={
dashboard:`<div class='grid'>
<div class='card'><div class='ring'>72%</div><p>Fortschritt</p></div>
<div class='card'><h3>⭐ XP</h3><h2>1240</h2></div>
<div class='card'><h3>🔥 Serie</h3><h2>12</h2></div>
<div class='card hero'><h2>🚆 Weiterlernen</h2><div class='progress'><span></span></div><button>Mission starten</button></div>
</div>`,
story:`<div class='card'><h2>🗺 Story Mode</h2><p>Berlin ist freigeschaltet.</p></div>`,
quest:`<div class='card'><h2>🎒 QuestPass</h2><p>3 Städte besucht.</p></div>`,
profile:`<div class='card'><h2>👤 Profil</h2><p>DeutschQuest Alpha.</p></div>`
};
const view=document.getElementById('view');
const title=document.getElementById('title');
function load(page){view.innerHTML=views[page];title.textContent=page.charAt(0).toUpperCase()+page.slice(1);}
load('dashboard');
document.querySelectorAll('nav a').forEach(a=>a.onclick=()=>{
document.querySelectorAll('nav a').forEach(x=>x.classList.remove('active'));
a.classList.add('active');
load(a.dataset.page);
});
document.getElementById('theme').onclick=()=>document.body.classList.toggle('dark');
