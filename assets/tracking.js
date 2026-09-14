/* Eventi GA4: cta_click, section_view, form_start, form_abbandono, generate_lead.
   Un file solo caricato su index.html, modulo.html e grazie.html: ogni blocco si ferma
   da solo se non trova gli elementi che gli servono, così vale su tutte e tre le pagine.
   GA4 parte solo dopo il consenso (Iubenda blocca gtag.js finché l'utente non accetta):
   i listener si agganciano comunque subito, e solo al momento dell'evento si controlla
   se gtag esiste già. Se non esiste, l'evento si perde e basta: nessuna coda, nessun
   recupero dopo il consenso. */

function inviaEvento(nome, parametri) {
  if (typeof gtag !== 'function') return;
  if (parametri) gtag('event', nome, parametri);
  else gtag('event', nome);
}

/* clic sulle CTA "Consulenza gratuita" (solo index.html, uniche con data-cta) */
(function(){
  var cta = document.querySelectorAll('[data-cta]');
  if (!cta.length) return;
  for (var i = 0; i < cta.length; i++) {
    cta[i].addEventListener('click', function(){
      inviaEvento('cta_click', { posizione: this.getAttribute('data-cta') });
    });
  }
})();

/* sezione vista, una volta per sezione per visita (solo index.html) */
(function(){
  var sezioni = document.querySelectorAll('section.hero, #problema, #soluzione, #metodo, #perche-noi, #team, #garanzia, #consulenza');
  if (!sezioni.length || !('IntersectionObserver' in window)) return;
  var oss = new IntersectionObserver(function(righe){
    righe.forEach(function(r){
      if (!r.isIntersecting) return;
      inviaEvento('section_view', { sezione: r.target.id || 'hero' });
      oss.unobserve(r.target);
    });
  }, { threshold: 0, rootMargin: '0px 0px -25% 0px' });
  for (var i = 0; i < sezioni.length; i++) oss.observe(sezioni[i]);
})();

/* form_start e form_abbandono (solo modulo.html) */
(function(){
  var form = document.getElementById('modulo-consulenza');
  if (!form) return;

  var iniziato = false;
  var inviato = false;
  var ultimoCampo = null;

  form.addEventListener('focusin', function(e){
    if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'SELECT') return;
    ultimoCampo = e.target.id;
    if (iniziato) return;
    iniziato = true;
    inviaEvento('form_start');
  });

  form.addEventListener('submit', function(){ inviato = true; });

  window.addEventListener('pagehide', function(){
    if (iniziato && !inviato) inviaEvento('form_abbandono', { ultimo_campo: ultimoCampo });
  });
})();

/* generate_lead al caricamento di grazie.html (unica pagina con .barra-solo-logo).
   Lo script di Iubenda è async: gtag potrebbe non esistere ancora appena la pagina
   carica. Si controlla ogni 200ms per al massimo 10 secondi; se gtag compare si manda
   l'evento una volta sola, altrimenti non si manda niente. */
(function(){
  if (!document.querySelector('.barra-solo-logo')) return;
  var tentativi = 0;
  var timer = setInterval(function(){
    tentativi++;
    if (typeof gtag === 'function') {
      clearInterval(timer);
      inviaEvento('generate_lead');
    } else if (tentativi >= 50) {
      clearInterval(timer);
    }
  }, 200);
})();
