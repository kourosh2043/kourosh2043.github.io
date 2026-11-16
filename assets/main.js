document.querySelectorAll('[data-pm]').forEach(b=>b.addEventListener('click',()=>document.getElementById('pm-'+b.dataset.pm).showModal()));
document.querySelectorAll('dialog.pm').forEach(d=>{d.addEventListener('click',e=>{if(e.target===d)d.close()});d.querySelector('[data-x]').addEventListener('click',()=>d.close())});
const t=document.querySelector('.top'),s=()=>t&&t.classList.toggle('sc',scrollY>4);s();addEventListener('scroll',s,{passive:true});
document.querySelectorAll('.toTop').forEach(b=>b.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'})));
const fd=n=>String(n).replace(/\d/g,d=>'۰۱۲۳۴۵۶۷۸۹'[d]);
document.querySelectorAll('.cpYear').forEach(e=>e.textContent=fd(new Date().getFullYear()));
