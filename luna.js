(function(){
var rm=matchMedia('(prefers-reduced-motion:reduce)').matches,fl=document.getElementById('fl'),E=['✨','💖','🌸','⭐','🎀','💕','🦋'];
if(!rm)for(var i=0;i<16;i++){var s=document.createElement('span');s.textContent=E[i%E.length];s.style.left=Math.random()*96+'%';s.style.fontSize=(14+Math.random()*20)+'px';s.style.animationDuration=(14+Math.random()*16)+'s';s.style.animationDelay=(-Math.random()*20)+'s';fl.appendChild(s)}
var last=0;
function spark(x,y,n){if(rm)return;for(var k=0;k<n;k++){var t=document.createElement('span');t.className='tr';t.textContent=E[Math.floor(Math.random()*E.length)];t.style.left=x+'px';t.style.top=y+'px';t.style.setProperty('--x',(Math.random()*70-35)+'px');t.style.setProperty('--y',(Math.random()*70+10)+'px');document.body.appendChild(t);(function(e){setTimeout(function(){e.remove()},950)})(t)}}
addEventListener('pointermove',function(e){var n=Date.now();if(n-last>70&&e.pointerType==='mouse'){last=n;spark(e.clientX,e.clientY,1)}});
addEventListener('pointerdown',function(e){spark(e.clientX,e.clientY,7)});
var els=document.querySelectorAll('.rv'),cs=document.querySelectorAll('[data-n]');
function count(b){var to=parseFloat(b.dataset.n),d=+b.dataset.d||0,s=b.dataset.s||'',t0=null;
  function f(t){if(!t0)t0=t;var p=Math.min(1,(t-t0)/1400),e=1-Math.pow(1-p,3);b.textContent=(to*e).toFixed(d).replace('.',',')+s;if(p<1)requestAnimationFrame(f)}requestAnimationFrame(f)}
if('IntersectionObserver' in window){
  var io=new IntersectionObserver(function(en){en.forEach(function(e){if(e.isIntersecting){e.target.classList.add('on');e.target.querySelectorAll('[data-n]').forEach(count);io.unobserve(e.target)}})},{threshold:.12});
  els.forEach(function(e){io.observe(e)});
}else{els.forEach(function(e){e.classList.add('on')});cs.forEach(function(b){b.textContent=b.dataset.n+(b.dataset.s||'')})}
})();