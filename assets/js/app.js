
const cities=[...document.querySelectorAll('.city')];
const train=document.getElementById('train');
const pass=document.getElementById('pass');
cities.forEach(c=>c.onclick=()=>{
 document.getElementById('city').textContent=c.dataset.city;
 document.getElementById('desc').textContent='Nächste Mission in '+c.dataset.city;
});
document.getElementById('travel').onclick=()=>{
 const next=cities.find(c=>!c.classList.contains('unlocked'));
 if(!next)return;
 train.setAttribute('cx',next.getAttribute('cx'));
 train.setAttribute('cy',next.getAttribute('cy'));
 next.classList.add('unlocked');
 const li=document.createElement('li');
 li.textContent='✓ '+next.dataset.city;
 pass.appendChild(li);
 localStorage.setItem('dq-pass',pass.innerHTML);
};
const saved=localStorage.getItem('dq-pass');
if(saved)pass.innerHTML=saved;
document.getElementById('theme').onclick=()=>document.body.classList.toggle('dark');
