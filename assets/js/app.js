
const cities=[...document.querySelectorAll('.city')];
const passport=document.getElementById('passport');
const train=document.getElementById('train');
const title=document.getElementById('cityTitle');
const desc=document.getElementById('cityDesc');
let unlocked=0;

function renderPassport(){
 passport.innerHTML='';
 cities.forEach((c,i)=>{
   if(c.classList.contains('unlocked')){
      passport.innerHTML+=`<li>✓ ${c.dataset.name}</li>`;
   }
 });
 localStorage.setItem('dq_passport',passport.innerHTML);
}

cities.forEach(c=>c.onclick=()=>{
 title.textContent=c.dataset.name;
 desc.textContent="Bereit für deine Mission in "+c.dataset.name+".";
});

document.getElementById('travel').onclick=()=>{
 if(unlocked>=cities.length-1)return;
 unlocked++;
 const c=cities[unlocked];
 c.classList.add('unlocked');
 train.setAttribute('cx',c.getAttribute('cx'));
 train.setAttribute('cy',c.getAttribute('cy'));
 document.getElementById('bar').style.width=((unlocked+1)/cities.length*100)+'%';
 renderPassport();
};

const saved=localStorage.getItem('dq_passport');
if(saved) passport.innerHTML=saved;
renderPassport();
document.getElementById('theme').onclick=()=>document.body.classList.toggle('dark');
