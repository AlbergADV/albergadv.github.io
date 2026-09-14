/* invio del modulo consulenza via EmailJS */
(function(){
  var form = document.getElementById('modulo-consulenza');
  if (!form) return;

  var bottone = form.querySelector('button[type="submit"]');
  var erroreEl = form.querySelector('.errore-invio');
  var testoBottone = bottone.textContent;

  form.addEventListener('submit', function(e){
    e.preventDefault();
    if (erroreEl) erroreEl.hidden = true;
    bottone.disabled = true;
    bottone.textContent = 'Invio in corso…';

    emailjs.send('service_c8rmxaa', 'template_1dsucfr', {
      nome: form.nome.value,
      struttura: form.struttura.value,
      email: form.email.value,
      telefono: form.telefono.value,
      urgenza: form.urgenza.value
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
