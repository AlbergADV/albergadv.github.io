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

/* box (card/passo/attr): bordino ottone acceso finché il box è a schermo (mobile, niente hover) */
(function(){
  var box = document.querySelectorAll('.card, .passo, .attr');
  if (!box.length || !('IntersectionObserver' in window)) return;
  var oss = new IntersectionObserver(function(righe){
    righe.forEach(function(r){ r.target.classList.toggle('in-vista', r.isIntersecting); });
  });
  for (var i=0;i<box.length;i++) oss.observe(box[i]);
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
