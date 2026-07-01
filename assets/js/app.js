
const pages={
dashboard:`<div class='card'><h2>Willkommen zurück!</h2><p>Deine Reise geht weiter.</p></div>`,
story:`<div class='card'><h2>🗺 Story Mode</h2><p>Wähle deine nächste Stadt.</p>
<div class='map'>
<div class='city unlocked'>Berlin</div>
<div class='city'>Leipzig</div>
<div class='city'>München</div>
<div class='city'>Köln</div>
<div class='city'>Hamburg</div>
<div class='city'>Wien</div>
</div></div>`,
quest:`<div class='card'><h2>🎒 QuestPass</h2><div class='pass'>
<div class='stamp'>✓ Berlin</div>
<div class='stamp'>⬜ Leipzig</div>
<div class='stamp'>⬜ München</div>
<div class='stamp'>⬜ Köln</div>
</div></div>`
};
const view=document.getElementById("view");
function load(p){view.innerHTML=pages[p]}
load("dashboard");
document.querySelectorAll("nav button").forEach(b=>b.onclick=()=>load(b.dataset.page));
document.getElementById("theme").onclick=()=>document.body.classList.toggle("dark");
