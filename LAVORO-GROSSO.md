# LAVORO-GROSSO.md — Tracciamento completo del funnel (landing + modulo)

**Aperto:** 14/09/2026
**Chi lo tiene aggiornato:** chi esegue

> Documento unico per un'operazione delicata su questo cliente — una migrazione, un cambio di infrastruttura, un lavoro con passi irreversibili.
> Le tre sezioni si aggiornano tutte, ma con ritmi diversi: **obiettivo e contesto** si aggiorna, non si archivia; la **roadmap** si chiude fase per fase; le **istruzioni operative** vivono per tutta l'operazione.
> Alla chiusura del lavoro il file resta come storia, non si cancella — la prossima operazione simile parte da lì.

---

# PARTE 1 — OBIETTIVO E CONTESTO

## Obiettivo

Il sito (landing + pagina modulo) misura ogni passo del funnel — quale CTA porta al modulo, quante persone ci arrivano, quante iniziano e completano il form, dove escono — con GA4 attivo e legale, il tag Google Ads pronto da agganciare, e nessun tag che parte prima del consenso. Meta non riceve nessun dato (D9): le ads di questa landing sono solo su Google Ads.

## Punto di partenza

**Verificato** (controllato di persona):
- Il sito ha due pagine: `sito/index.html` (landing, 8 sezioni) e `sito/modulo.html` (form). Nessun `grazie.html`, nessun `modulo.js`: il prompt che li costruisce e collega EmailJS è stato consegnato il 14/09 ma non ancora incollato in Claude Code.
- Sette CTA "Consulenza gratuita", tutte identiche — stesso testo, stesso link, nessuna etichetta che le distingua: barra alta, hero, sezione 02, 03, 05, 07, 08.
- Nel frattempo, un'altra sessione (Fronte "Navbar e footer", chiuso il 14/09) ha aggiunto una barra di navigazione sticky con id reali sulle sezioni 02-08 (`#problema #soluzione #metodo #perche-noi #team #garanzia #consulenza`) e due icone di contatto (telefono, email) nel footer, ancora segnaposto (`href="#"`). Gli id sono un aggancio pronto e più pulito per l'evento di sezione vista, al posto di contare le sezioni a mano.
- Nessun tag di misurazione nel codice: niente GA4, niente GTM, niente `fbq`. L'unico riferimento al Pixel Meta è una nota in `CLIENTE.md` §10, non codice.
- Nessun banner di consenso. Il footer ha due link `#` verso privacy policy e cookie policy, non ancora scritte.
- Dominio e hosting non decisi (`CLIENTE.md` §1 e §7: `[da compilare]`).
- `sito/assets/app.js` ha già un `IntersectionObserver` che marca le sezioni con la classe `.rivela` quando entrano nello schermo — è l'aggancio già pronto per sapere fino a dove scorre chi visita.
- Account EmailJS già creato (`service_c8rmxaa`, `template_1dsucfr`) per l'invio del modulo — cosa diversa dal tracciamento, ma condivide il punto dove scatta il Lead.
- Punto dell'evento Lead già deciso il 14/09: al caricamento di `grazie.html` (pagina dedicata dopo l'invio, non un messaggio inline).
- La spunta di consenso privacy è stata tolta dal modulo (decisione di Simone, 14/09): il form resta a cinque campi, la privacy è citata solo nel footer. Non cambia il piano di tracciamento, cambia solo l'elenco dei campi in Fase 3.

**Dedotto** (assunzione ragionevole, da verificare in esecuzione):
- Il sito resterà su hosting statico, senza funzioni server — coerente con il resto del sistema. Da confermare quando si deciderà l'hosting.

**Verificato** (aggiunto 14/09/2026):
- Le ads di questa landing sono solo su Google Ads, non su Meta. Meta non deve ricevere nessun dato (Simone, 14/09/2026) — vedi D9. Un Business Manager Meta di HS Agency esiste già ("HS Agency - Website pixel", ID 2437661746700984, attivo su altro — non questa landing), ma resta fuori da questo lavoro: non si tocca.

**Non lo sappiamo:**
- Se esiste già un account Google Ads di HS Agency da riusare, o va creato da zero.

## Roadblock

- **R1 — Nessun dominio/hosting.** La domain verification di Meta e i numeri reali aspettano la pubblicazione. Il codice si scrive e si testa comunque, ma la Fase 6 resta aperta finché quella decisione non arriva (fuori scope di questo lavoro).
- **R2 — Privacy/cookie policy non ancora pubblicate.** Il testo è il nostro, in `PRIVACY-COOKIE.md` (ancora round 1, in attesa della revisione di Simone) — non arriva più da una piattaforma esterna. Resta da scegliere la piattaforma che tiene il registro dei consensi (D12, non più CookieYes) e da configurarla per davvero: serve un sito online sul dominio vero (dipende da R1) — e la Fase 1 non si dichiara chiusa senza quel link vero.
- **R3 — `grazie.html` e `modulo.js` non esistono ancora.** È il lavoro già commissionato di Fronte 2 (in `STATO.md`), non parte di questo. L'evento Lead/`generate_lead` si scrive nel codice ma non può essere verificato davvero finché quel prompt non viene eseguito.
- **R4 — Account esterni mancanti.** Chiuso il 14/09/2026: l'account GA4 esiste (ID misurazione `G-HZLFF4B39Y`, vedi `CLIENTE.md` §10). Il Pixel Meta non serve più (D9), quindi non è più un roadblock.

## Decisioni chiuse

| # | Decisione | Presa il |
|---|---|---|
| D1 | Niente Google Tag Manager: codice diretto (`gtag.js`) nelle due pagine — sito statico, semplice, GTM non installato | 14/09/2026 |
| D2 | GA4 come piattaforma di misurazione del funnel; Pixel Meta base in parallelo (punto Lead già deciso); la Conversions API resta parcheggiata — **superata da D9** | 14/09/2026 |
| D3 | Le sette CTA vengono etichettate singolarmente (sezione + posizione), oggi indistinguibili | 14/09/2026 |
| D4 | Banner di consenso incluso nel lavoro: condizione necessaria, nessun tag parte prima | 14/09/2026 |
| D5 | Tag di conversione Google Ads predisposto ma spento, in attesa dell'ID account | 14/09/2026 |
| D6 | La privacy/cookie policy arriva da un'altra sessione di Simone, in parallelo; qui si predispone solo l'aggancio — **superata da D8** | 14/09/2026 |
| D7 | Per gli account esterni (GA4) procede Claude da Chrome quando si parte, salvo indicazione diversa | 14/09/2026 |
| D8 | Privacy/cookie policy tramite CookieYes, piano gratuito: banner + testo generati da loro, non più scritti a mano. Sostituisce D6. Il banner della Fase 1.3 non lo costruisce più Code da zero, incolla lo script di CookieYes — resta compatibile con D1 (`gtag.js` diretto, CookieYes lo blocca finché non c'è consenso) — **superata da D12** | 14/09/2026 |
| D9 | Niente Pixel Meta: Meta non riceve nessun dato. Le ads di questa landing sono solo su Google Ads, non su Meta (Simone, 14/09/2026). Supera D2 — cade tutta la parte Meta del lavoro (Fase 1.2, la parte `fbq` di Fase 2.1 e 3.3, Fase 4.3) | 14/09/2026 |
| D10 | Precisazione di Simone su D8: l'aspetto del banner (colori, font, forma) lo veste Code sul sistema di design del sito — la piattaforma scelta resta il motore sotto (blocco script, documenti, registro dei consensi), non decide lo stile. Principio confermato da D12 (non più necessariamente CookieYes): qualunque piattaforma si scelga, il banner resta nostro, loro tengono solo il registro dei consensi | 14/09/2026 |
| D11 | Il nome dell'attività non è ancora ufficiale (Simone sta valutando "alber-go", non ancora messo per iscritto). Finché non decide: niente nome dell'attività negli account e nei documenti dove non è indispensabile — account/proprietà/stream GA4 rinominati "Landing hotel" (erano "HS Agency"/"Landing hotel HS Agency"), titoli di `CLIENTE.md` e `STATO.md` senza nome. Dove il nome è un dato di fatto già esistente altrove (il Business Manager Meta, il percorso della cartella sul PC) resta com'è — non si tocca | 14/09/2026 |
| D12 | CookieYes scartato: Simone ha chiesto un'altra piattaforma — il banner lo costruiamo noi col nostro codice, la piattaforma tiene solo il registro/prova del consenso (come fa Iubenda). Supera D8. Verificate sulle pagine ufficiali tre alternative, nessuna gratuita: Iubenda (personalizzazione HTML/CSS del banner confermata, ~5 €/mese, registro incluso), Axeptio (personalizzazione grafica e registro su tutti i piani, da 7 $/mese), CookieFirst (solo colori/font, il registro richiede il piano da 19 €/mese). Il testo di privacy/cookie non cambia: resta il nostro, in `PRIVACY-COOKIE.md`, indipendente da quale piattaforma verrà scelta — **la scelta è chiusa da D13** | 14/09/2026 |
| D13 | Piattaforma: Iubenda. È quella che Simone aveva nominato per prima come modello, la più economica delle tre (~5 €/mese), personalizzazione del banner via codice confermata dalla loro documentazione. Deciso da Claude per chiudere il fronte — nulla è ancora costruito su nessuna piattaforma, quindi tornare indietro oggi costa poco | 14/09/2026 |

---

# PARTE 2 — ROADMAP

*Legenda: ⛔ = passo irreversibile · **[bloccante]** = le fasi successive non partono finché questa non è chiusa.*

## Stato di esecuzione

| Fase | Stato |
|---|---|
| Fase 1 — Fondamenta: account e banner | in corso — GA4 fatto (1.1), Pixel Meta rimosso (D9), resta il banner (1.3) |
| Fase 2 — Codice base nelle due pagine | da fare |
| Fase 3 — Funnel del modulo | da fare — dipende da R3 |
| Fase 4 — Verifica reale | da fare |
| Fase 5 — Aggancio Google Ads | da fare — non bloccante |
| Fase 6 — Messa in produzione | da fare — dipende da R1, fuori scope diretto |

## FASE 1 — Fondamenta: account e banner *([bloccante] — nessun tag può accendersi legalmente prima di questa fase)*

**Esito atteso:** GA4 esiste con un ID reale (fatto); il banner di consenso è online e blocca davvero gli script finché non c'è l'accettazione.

### 1.1 — Creare l'account GA4 ✅ fatto 14/09/2026
Account "Landing hotel" (ID 407764204) → proprietà "Landing hotel" (ID 553841503) → stream web "Landing hotel - Web" (ID 15772937612). ID di misurazione: `G-HZLFF4B39Y`. Nomi senza "HS Agency" (il nome dell'attività non è ancora deciso, 14/09/2026) — dettagli in `CLIENTE.md` §10.

### 1.2 — RIMOSSA (D9)
Il Pixel Meta non si crea: Meta non riceve nessun dato per questa landing.

### 1.3 — Banner di consenso via Iubenda (aggiornato 14/09/2026, D13/D10)
Motore: Iubenda tiene il registro/prova del consenso (D13, non più CookieYes). Da fare: registrazione, collegamento al sito online (serve l'hosting, R1), script incollato nell'`<head>` di `index.html` e `modulo.html`. Blocca GA4 finché non c'è accettazione.
Aspetto: il banner è nostro, costruito da Code sul sistema di design del sito (navy per il pulsante di accettazione, avorio/bianco, forma 12+3), via `banner.html`/`applyStyles:false` di Iubenda — Iubenda resta solo il motore sotto (D10).

**Punto di revisione di fase 1.**

## FASE 2 — Codice base nelle due pagine

**Esito atteso:** GA4 carica su entrambe le pagine, solo dopo consenso; le sette CTA sono distinguibili; la landing segnala fino a dove scorre chi la visita.

### 2.1 — Snippet `gtag.js` (GA4)
Nell'`<head>` di `index.html` e `modulo.html`, dietro il gate del consenso (Fase 1). Niente `fbq` (D9).

### 2.2 — Etichettare le sette CTA
Un attributo dati per sezione/posizione su ognuna (barra alta, hero, 02, 03, 05, 07, 08), evento `cta_click` al click con quell'etichetta.

### 2.3 — Evento di sezione vista sulla landing
Riusa l'`IntersectionObserver` già presente in `app.js` (classe `.rivela`), agganciato agli id reali delle sezioni (`#problema #soluzione #metodo #perche-noi #team #garanzia #consulenza`, aggiunti dal Fronte "Navbar e footer") invece di numerarle a mano.

**Punto di revisione di fase 2.**

## FASE 3 — Funnel del modulo *(dipende da R3 — vedi Roadblock)*

**Esito atteso:** si vede chi inizia a compilare, chi completa, e su quale campo si ferma chi non completa.

### 3.1 — Evento `form_start`
Al primo campo toccato del modulo.

### 3.2 — Evento ultimo campo toccato
Registrato prima che la persona lasci la pagina senza inviare — per sapere dove si abbandona.

### 3.3 — Evento `generate_lead` (GA4) su `grazie.html`
Al caricamento della pagina, punto già deciso il 14/09. Richiede che `grazie.html` esista (Fronte 2 chiuso) — non verificabile prima. Solo GA4 (D9): il prompt già consegnato per Fronte 2 conteneva anche una chiamata `fbq('track','Lead')` protetta — quando si incolla in Claude Code va tolta, non serve più.

**Punto di revisione di fase 3.**

## FASE 4 — Verifica reale

**Esito atteso:** ogni evento arriva davvero, con i parametri giusti, non solo "il codice sembra corretto".

### 4.1 — Test end-to-end
Landing → click su una CTA (verificare l'etichetta) → modulo → iniziare a compilare → uscire senza inviare → rientrare → inviare per davvero.

### 4.2 — GA4 DebugView / Realtime
Controllare che tutti gli eventi arrivino con i parametri corretti.

**Punto di revisione di fase 4.**

## FASE 5 — Aggancio Google Ads *(non bloccante — si accende quando arriva l'account)*

### 5.1 — Predisporre il tag di conversione Google Ads
Struttura pronta nel codice, ID da inserire quando Simone ha l'account.

*Nessun punto di revisione: resta aperta finché non arriva l'ID.*

## FASE 6 — Messa in produzione *(dipende da R1 — fuori dallo scope diretto di questo lavoro)*

### 6.1 — Domain verification Meta
DNS TXT o meta tag, sul dominio reale.

### 6.2 — Controllo finale con dati veri

*Resta aperta finché la decisione di hosting/dominio (`CLIENTE.md` §7) non si chiude.*

---

# PARTE 3 — ISTRUZIONI OPERATIVE

## Chi fa cosa

**Chi esegue:** entrambi. Claude Code scrive il codice (snippet, eventi, banner) nelle sessioni di build, dal prompt che arriva da questo documento. Claude, in chat con Chrome, crea gli account esterni (GA4) quando si parte.

**Simone — azioni irriducibili:**

1. Autorizzare l'accesso OAuth quando Google lo richiede durante la creazione degli account — come per EmailJS il 14/09.
2. Incollare in Claude Code i prompt di costruzione, quando pronti.
3. Dare l'ultima parola sul testo del banner (le frasi delle due categorie) prima che vada online.
4. Registrarsi su Iubenda quando vuole (D13, non dipende dal dominio) e collegare il sito quando è online (R1) — chiude R2.

## Regole di esecuzione

- Ogni evento nasce nel codice diretto (niente GTM), come da D1.
- Nessun tag parte prima del consenso (D4): regola più delicata di questo lavoro, si verifica davvero in Fase 4, non si dà per scontata.
- Gli ID e lo stato del tracciamento vanno in `CLIENTE.md` §10 appena esistono — mai i token nel file, solo dove sono conservati.

## Cosa non si tocca, in nessuna fase

- La struttura del wireframe e il copy approvato.
- La costruzione di `modulo.html`/`grazie.html` in sé — resta il lavoro di Fronte 2, questo lavoro aggiunge solo gli eventi sopra.
- Il testo della privacy policy — è il nostro (`PRIVACY-COOKIE.md`, ancora round 1), qui si predispone solo l'aggancio tecnico (script + attributi sui tag da bloccare).

## Fuori dallo scope di questo lavoro

- Meta per intero: Pixel, Conversions API, ads — Meta non riceve dati (D9). Il Business Manager "HS Agency - Website pixel" già esistente non si tocca.
- L'attivazione del tag Google Ads (pronto ma spento, D5).
- La decisione di hosting/dominio (Fronte 1, `CLIENTE.md` §7).
