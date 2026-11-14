(function(){
  'use strict';
  var welcome=document.getElementById('welcome');
  var tap=document.getElementById('wTap');
  var intro=document.getElementById('weiVideo');
  var content=document.querySelector('.content');
  var hero=document.getElementById('hero');
  var toggle=document.getElementById('musicToggle');
  var audioFrame=document.getElementById('youtubeAudio');
  var opened=false, finished=false, musicStarted=false, muted=true;
  var track='AqmYL3HTEJ0';

  function setMusicState(isMuted){muted=isMuted;toggle.setAttribute('data-muted',muted?'true':'false');toggle.setAttribute('aria-label',muted?'Play music':'Pause music');toggle.setAttribute('title',muted?'Play music':'Pause music');}
  function musicCommand(command){if(audioFrame.contentWindow){audioFrame.contentWindow.postMessage(JSON.stringify({event:'command',func:command,args:[]}), 'https://www.youtube.com');}}
  function startMusic(){if(muted)return;if(!musicStarted){musicStarted=true;audioFrame.src='https://www.youtube.com/embed/'+track+'?enablejsapi=1&autoplay=1&controls=0&loop=1&playlist='+track+'&playsinline=1&origin='+encodeURIComponent(location.origin);}else{musicCommand('playVideo');}}
  function revealHome(){document.body.classList.remove('locked');content.removeAttribute('aria-hidden');hero.removeAttribute('aria-hidden');['heroNames','heroBlessing','heroCue'].forEach(function(id){var el=document.getElementById(id);if(el)el.classList.add('in');});window.setTimeout(function(){toggle.classList.add('visible');},700);}
  function finishIntro(){if(!opened||finished)return;finished=true;intro.pause();welcome.classList.add('gone');window.setTimeout(function(){welcome.style.display='none';},1250);revealHome();}
  function openInvitation(){if(opened)return;opened=true;intro.loop=false;setMusicState(false);startMusic();try{intro.currentTime=0;}catch(error){}var playPromise=intro.play();if(playPromise&&playPromise.catch){playPromise.catch(finishIntro);}}
  document.body.classList.add('locked');content.setAttribute('aria-hidden','true');hero.setAttribute('aria-hidden','true');
  if(tap)tap.addEventListener('click',openInvitation);
  intro.addEventListener('ended',finishIntro);intro.addEventListener('error',function(){if(opened)finishIntro();});
  toggle.addEventListener('click',function(){setMusicState(!muted);if(muted)musicCommand('pauseVideo');else startMusic();});
  document.addEventListener('visibilitychange',function(){if(document.hidden)musicCommand('pauseVideo');else if(!muted&&musicStarted)musicCommand('playVideo');});
  if(new URLSearchParams(location.search).get('preview')==='true'){opened=true;intro.pause();welcome.style.display='none';revealHome();}

  if('IntersectionObserver' in window){var observer=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.isIntersecting){entry.target.classList.add('in');observer.unobserve(entry.target);}});},{threshold:.16});document.querySelectorAll('.reveal').forEach(function(el){observer.observe(el);});}else{document.querySelectorAll('.reveal').forEach(function(el){el.classList.add('in');});}
  var footer=document.getElementById('siteFooter'),footerVideo=document.getElementById('footerVideo');if(footer&&footerVideo&&'IntersectionObserver' in window){var footerObserver=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.isIntersecting){footer.classList.add('in');footerVideo.play().catch(function(){});footerObserver.unobserve(footer);}});},{threshold:.1});footerObserver.observe(footer);}
  var target=new Date('2026-11-26T09:30:00+05:30');var days=document.getElementById('cdDays'),hours=document.getElementById('cdHours'),mins=document.getElementById('cdMins'),secs=document.getElementById('cdSecs'),sub=document.getElementById('cdSub');
  function tick(){var diff=target.getTime()-Date.now();if(diff<=0){days.textContent=hours.textContent=mins.textContent=secs.textContent='00';sub.textContent='The celebrations are here — welcome!';return;}var total=Math.floor(diff/1000);days.textContent=String(Math.floor(total/86400)).padStart(2,'0');hours.textContent=String(Math.floor(total/3600)%24).padStart(2,'0');mins.textContent=String(Math.floor(total/60)%60).padStart(2,'0');secs.textContent=String(total%60).padStart(2,'0');window.setTimeout(tick,1000);}tick();
})();