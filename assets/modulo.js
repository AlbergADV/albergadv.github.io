/* invio del modulo consulenza via EmailJS */
(function(){
  var form = document.getElementById('modulo-consulenza');
  if (!form) return;

  var bottone = form.querySelector('button[type="submit"]');
  var erroreEl = form.querySelector('.errore-invio');
  var testoBottone = bottone.textContent;

  /* il codice del clic si salva solo con il consenso marketing di Iubenda (finalità 5), D15 */
  function consensoMarketing(){
    try { return !!(window._iub && _iub.cs && _iub.cs.consent && _iub.cs.consent.purposes && _iub.cs.consent.purposes[5] === true); } catch(e){ return false; }
  }

  function codiciClic(){
    var vuoti = { gclid: '', gbraid: '', wbraid: '' };
    if (!consensoMarketing()) return vuoti;
    var p = new URLSearchParams(location.search);
    var gclid = p.get('gclid') || '';
    if (!gclid) {
      var c = document.cookie.match(/(?:^|; )_gcl_aw=([^;]*)/);
      if (c) gclid = decodeURIComponent(c[1]).split('.').slice(2).join('.');
    }
    return { gclid: gclid, gbraid: p.get('gbraid') || '', wbraid: p.get('wbraid') || '' };
  }

  /* "yyyy-MM-dd HH:mm:ss+0200", il formato del caricamento conversioni di Google Ads */
  function oraInvio(){
    var d = new Date();
    function due(n){ return (n < 10 ? '0' : '') + n; }
    var off = -d.getTimezoneOffset();
    var segno = off >= 0 ? '+' : '-';
    off = Math.abs(off);
    return d.getFullYear() + '-' + due(d.getMonth() + 1) + '-' + due(d.getDate()) + ' ' +
      due(d.getHours()) + ':' + due(d.getMinutes()) + ':' + due(d.getSeconds()) +
      segno + due(Math.floor(off / 60)) + due(off % 60);
  }

  /* telefono in E.164; null se non torna fra 11 e 15 cifre dopo il + */
  function telefonoE164(valore){
    var t = valore.replace(/[^\d+]/g, '');
    if (t.indexOf('00') === 0) t = '+' + t.slice(2);
    if (t.charAt(0) !== '+' && /^\d{9,11}$/.test(t)) t = '+39' + t;
    return /^\+\d{11,15}$/.test(t) ? t : null;
  }

  form.addEventListener('submit', function(e){
    e.preventDefault();
    if (erroreEl) erroreEl.hidden = true;
    bottone.disabled = true;
    bottone.textContent = 'Invio in corso…';

    var clic = codiciClic();

    if (typeof gtag === 'function') {
      var datiUtente = { email: form.email.value.replace(/\s/g, '').toLowerCase() };
      var tel = telefonoE164(form.telefono.value);
      if (tel) datiUtente.phone_number = tel;
      gtag('set', 'user_data', datiUtente);
    }

    emailjs.send('service_c8rmxaa', 'template_1dsucfr', {
      nome: form.nome.value,
      struttura: form.struttura.value,
      email: form.email.value,
      telefono: form.telefono.value,
      urgenza: form.urgenza.value,
      gclid: clic.gclid,
      gbraid: clic.gbraid,
      wbraid: clic.wbraid,
      ora_invio: oraInvio()
    }).then(function(){
      window.location.href = 'grazie.html';
    }, function(){
      bottone.disabled = false;
      bottone.textContent = testoBottone;
      if (erroreEl) {
        erroreEl.textContent = 'Qualcosa non ha funzionato, riprova o scrivici a [email da inserire].';
        erroreEl.hidden = false;
      }
    });
  });
})();

/* suggerimento sul dominio email, se assomiglia a un refuso di un provider comune */
(function(){
  var campoEmail = document.getElementById('email');
  if (!campoEmail) return;

  var suggerimento = campoEmail.parentNode.querySelector('.suggerimento-email');
  if (!suggerimento) return;

  var domini = [
    'gmail.com', 'googlemail.com', 'hotmail.com', 'hotmail.it', 'outlook.com', 'outlook.it',
    'live.com', 'live.it', 'yahoo.com', 'yahoo.it', 'libero.it', 'virgilio.it', 'alice.it',
    'tin.it', 'tiscali.it', 'icloud.com', 'me.com', 'aol.com', 'pec.it'
  ];

  function distanza(a, b){
    var m = a.length, n = b.length;
    var d = [];
    var i, j;
    for (i = 0; i <= m; i++) { d[i] = []; d[i][0] = i; }
    for (j = 0; j <= n; j++) d[0][j] = j;
    for (i = 1; i <= m; i++) {
      for (j = 1; j <= n; j++) {
        var costo = a.charAt(i - 1) === b.charAt(j - 1) ? 0 : 1;
        d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + costo);
      }
    }
    return d[m][n];
  }

  function dominioSuggerito(dominio){
    var migliore = null, minima = Infinity;
    for (var i = 0; i < domini.length; i++) {
      if (domini[i] === dominio) return null;
      var d = distanza(dominio, domini[i]);
      if (d < minima) { minima = d; migliore = domini[i]; }
    }
    return (minima === 1 || minima === 2) ? migliore : null;
  }

  function nascondi(){
    suggerimento.hidden = true;
    suggerimento.textContent = '';
  }

  campoEmail.addEventListener('blur', function(){
    nascondi();
    var valore = campoEmail.value.trim();
    var chiocciola = valore.indexOf('@');
    if (chiocciola < 1 || chiocciola === valore.length - 1) return;

    var locale = valore.slice(0, chiocciola);
    var dominio = valore.slice(chiocciola + 1).toLowerCase();
    var corretto = dominioSuggerito(dominio);
    if (!corretto) return;

    var emailCorretta = locale + '@' + corretto;
    suggerimento.appendChild(document.createTextNode('Forse intendevi '));
    var bottone = document.createElement('button');
    bottone.type = 'button';
    bottone.textContent = emailCorretta;
    bottone.addEventListener('click', function(){
      campoEmail.value = emailCorretta;
      nascondi();
      campoEmail.focus();
    });
    suggerimento.appendChild(bottone);
    suggerimento.appendChild(document.createTextNode('?'));
    suggerimento.hidden = false;
  });
})();
