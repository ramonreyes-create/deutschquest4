
let data=[],i=0,xp=0,ok=0,bad=0;
fetch('data/lesson_a1_1.json').then(r=>r.json()).then(j=>{
 data=j.words;
 lesson.textContent=j.title;
 render();
});
const lesson=document.getElementById('lesson');
const word=document.getElementById('word');
const answer=document.getElementById('answer');
const progress=document.getElementById('progress');
function render(){
 if(i>=data.length){word.textContent='Mission beendet!';answer.textContent='';return;}
 word.textContent=data[i].de;
 answer.textContent='';
 progress.textContent=(i+1)+' / '+data.length;
 document.getElementById('bar').style.width=((i)/data.length*100)+'%';
}
show.onclick=()=>answer.textContent=data[i].es;
right.onclick=()=>{xp+=10;ok++;next();}
wrong.onclick=()=>{bad++;next();}
function next(){
 document.getElementById('xp').textContent=xp;
 document.getElementById('ok').textContent=ok;
 document.getElementById('bad').textContent=bad;
 i++;render();
}
