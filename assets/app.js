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

/* box (card/passo/attr): bordino ottone su un box alla volta mentre si scorre (mobile, niente hover).
   Un box si accende appena i suoi 4/5 sono nello schermo; quando ne entra un altro l'evidenziazione
   passa a lui. Se quello acceso esce, torna all'ultimo ancora dentro (se c'è). */
(function(){
  var box = document.querySelectorAll('.card, .passo, .attr');
  if (!box.length || !('IntersectionObserver' in window)) return;
  var dentro = [], attivo = null;
  function accendi(el){
    if (attivo === el) return;
    if (attivo) attivo.classList.remove('in-vista');
    attivo = el;
    if (attivo) attivo.classList.add('in-vista');
  }
  var oss = new IntersectionObserver(function(righe){
    righe.forEach(function(r){
      var i = dentro.indexOf(r.target);
      if (r.intersectionRatio >= 0.8) {
        if (i === -1) dentro.push(r.target);
        accendi(r.target);
      } else if (i !== -1) {
        dentro.splice(i, 1);
        if (attivo === r.target) accendi(dentro.length ? dentro[dentro.length - 1] : null);
      }
    });
  }, { threshold: [0.8] });
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
