(function(){
  var ridotto = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (ridotto) return;
  document.documentElement.classList.add('js');
  var voci = document.querySelectorAll('.rivela');
  function mostraTutto(){ for (var i=0;i<voci.length;i++) voci[i].classList.add('in'); }
  if (!('IntersectionObserver' in window)) { mostraTutto(); return; }
  var oss = new IntersectionObserver(function(righe){
    righe.forEach(function(r){ if (r.isIntersecting){ r.target.classList.add('in'); oss.unobserve(r.target); } });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.08 });
  for (var i=0;i<voci.length;i++) oss.observe(voci[i]);
  setTimeout(mostraTutto, 1600);
})();

/* calcolatore delle commissioni (sezione 02): incasso dalle OTA × commissione media */
(function(){
  var incasso = document.getElementById('calc-incasso');
  var quota = document.getElementById('calc-quota');
  if (!incasso || !quota) return;
  var uscite = document.querySelectorAll('#calcolo output');
  function euro(n){ return Math.round(n).toLocaleString('it-IT') + ' €'; }
  function aggiorna(){
    uscite[0].textContent = euro(+incasso.value);
    uscite[1].textContent = quota.value + '%';
    uscite[2].textContent = euro(incasso.value * quota.value / 100);
  }
  incasso.addEventListener('input', aggiorna);
  quota.addEventListener('input', aggiorna);
  aggiorna();
})();

/* menu mobile della barra alta */
(function(){
  var toggle = document.querySelector('.nav-toggle');
  var pannello = document.getElementById('nav-mobile');
  if (!toggle || !pannello) return;
  var ridotto = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var chiudiTimer;

  function apri(){
    clearTimeout(chiudiTimer);
    pannello.hidden = false;
    if (ridotto) {
      pannello.classList.add('is-open');
    } else {
      requestAnimationFrame(function(){ pannello.classList.add('is-open'); });
    }
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Chiudi il menu');
  }
  function chiudi(){
    pannello.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Apri il menu');
    if (ridotto) {
      pannello.hidden = true;
    } else {
      chiudiTimer = setTimeout(function(){ pannello.hidden = true; }, 260);
    }
  }
  toggle.addEventListener('click', function(){
    if (toggle.getAttribute('aria-expanded') === 'true') chiudi(); else apri();
  });
  pannello.addEventListener('click', function(e){
    if (e.target.tagName === 'A') chiudi();
  });
  window.addEventListener('resize', function(){
    if (window.innerWidth > 900 && toggle.getAttribute('aria-expanded') === 'true') chiudi();
  });
})();
