# STATO — landing hotel

**Aggiornato:** 14/09/2026 — Colori: Simone ha bocciato le prime 3 combinazioni (troppo scure, poco contrasto fra loro) e chiesto un giro largo — creata `design/tavola-colore-20.html` con 20 combinazioni fredde/calde/miste, box con velatura invece di avorio fisso, in attesa che scelga. Nel frattempo, da un'altra sessione: Variante C della pagina modulo applicata al codice (`sito/modulo.html`, `sito/assets/style.css`), poi H1 e paragrafo della pagina modulo riscritti su richiesta di Simone, brief allineati. Da questa sessione: occhielli e cornice interna (box + CTA) ingranditi/ispessiti su segnalazione di Simone — si vedevano male (`sito/assets/style.css`, `brief/DESIGN-BRIEF.md`). In parallelo (Fronte 5/6): dominio confermato (Alberg-ADV.com, da un'altra sessione in `CLIENTE.md`), e ricostruiti in `LAVORO-GROSSO.md` due aggiornamenti di una sessione precedente andati persi (D11, pulizia del nome; rimozione della verifica dominio Meta, dovuta a D9).
**Fronte attivo:** Sistema di design — colore, riaperto (Fronte 1), Tracciamento (Fronte 5) e Privacy e cookie policy (Fronte 6), in parallelo

> Il lavoro in corso. Si legge **subito dopo `CLIENTE.md`**, all'inizio di ogni sessione.

---

## Fronti aperti

| # | Fronte | Obiettivo in una riga | Stato | Attivo |
|---|---|---|---|---|
| 1 | Costruzione della landing | avere la landing costruita e allineata al brief | costruita, in attesa di materiali e testa SEO | |
| 2 | Pagina modulo | applicare alla pagina già costruita il nuovo layout (Variante C) | ✅ layout applicato e H1/paragrafo riscritti, 14/09/2026 — pagina grazie decisa (copy, layout, fbq da togliere), prompt consegnato ma non ancora incollato in Claude Code — resta anche la revisione a due round, insieme al resto della landing (Fronte 1) | |
| 3 | Materiali mancanti | logo, foto team, numeri delle commissioni, dati del footer | in attesa di Simone | |
| 4 | Navbar e footer | navigazione reale nella barra + footer a quattro colonne su tutte e tre le pagine | ✅ fatto — 14/09/2026, footer rifatto a 4 colonne 14/09/2026 (2) | |
| 5 | Tracciamento | misurare CTA, compilazioni, click e uscite del funnel, con GA4 legale | account GA4 creato, Pixel Meta escluso dallo scope (D9) — resta il banner di consenso | ← |
| 6 | Privacy e cookie policy | avere due pagine privacy/cookie valide, per sbloccare R2 del Fronte 5 | bozza round 1 scritta (testo nostro, in `PRIVACY-COOKIE.md`); piattaforma decisa: Iubenda (D13) — dominio confermato, in attesa dell'hosting per configurarla | ← |

---

## Fronte 1 — COSTRUZIONE DELLA LANDING

**Obiettivo.** Una landing che porti gli albergatori alla pagina modulo, costruita esattamente sulla struttura del wireframe Figma e vestita col sistema deciso il 13/09/2026.

**Punto di partenza.** Cartella vuota. Esistevano solo il wireframe su Figma e le decisioni prese in chat.

**Vincoli.**
- La struttura del wireframe non si cambia: si veste soltanto.
- Scope SEO ridotto: solo title tag e schema JSON-LD, e nemmeno quelli sono ancora decisi.
- Quattro segnaposto restano tali: video della hero, barra dei risultati (due volte), foto del team, numeri delle commissioni.

**Percorso.**

| # | Passo | Stato |
|---|---|---|
| 1 | Decidere il sistema visivo | ✅ fatto |
| 2 | Preparare la cartella e scrivere i brief | ✅ fatto |
| 3 | Costruire la landing con Claude Code | ✅ fatto — `sito/index.html` esiste ed è compilato |
| 4 | Collegare le CTA verso la pagina modulo | ✅ fatto — 14/09/2026 |
| 5 | Revisione a due round | da fare |
| 6 | Title, meta e schema JSON-LD | da fare |
| 7 | Pagina modulo | ← vedi Fronte 2 |

**Dove ci siamo fermati.** La landing è costruita in `sito/index.html` + `sito/assets/`. Le 7 CTA "Consulenza gratuita" (barra alta, hero, sezioni 02/03/05/07/08) puntano ora a `modulo.html`. Non ancora passata dalla revisione a due round, e la testa della pagina (title, meta, schema) è ancora vuota.

**Domanda aperta.** Sì, riaperta il 14/09/2026: Simone ha giudicato CTA e ottone troppo simili ai competitor e ha chiesto di rivalutare ogni colore. Prima tavola (3 combinazioni) bocciata: troppo scure, poco contrasto fra CTA e accento. Seconda tavola, 20 combinazioni fredde/calde/miste, in `design/tavola-colore-20.html` — in attesa che Simone scelga. Oltre a questo: materiali (logo, foto team) e le due cose rimandate (revisione, testa SEO).

**File toccati in questo fronte.**

| File | Cosa ci è cambiato | Stato |
|---|---|---|
| `brief/DESIGN-BRIEF.md` | creato e compilato | ✅ |
| `brief/PAGE-BRIEF-LANDING.md` | creato e compilato | ✅ |
| `design/tavola-landing.html` | tavola approvata | ✅ |
| `design/tavola-colore-combinazioni.html` | prima tavola, 3 combinazioni — bocciata da Simone | ⚠️ scartata |
| `design/tavola-colore-20.html` | seconda tavola, 20 combinazioni fredde/calde/miste | ⚠️ in attesa della scelta |
| `sito/index.html`, `sito/assets/style.css`, `sito/assets/app.js` | landing costruita; CTA collegate a `modulo.html` | ✅ |
| `sito/assets/style.css` | occhiello 12px→18px, cornice interna 1px→2px (nuova variabile `--fil`) — box e CTA, tutte le pagine | ✅ 14/09 |
| `CLIENTE.md` | creato, parte tecnica da compilare | ⚠️ |

**In attesa di.** Revisione a due round, poi i materiali mancanti (Fronte 3), poi title/meta/schema.

---

## Fronte 2 — PAGINA MODULO

**Obiettivo.** La seconda tavola del wireframe: copy a sinistra, modulo a destra, nessuna uscita dalla pagina.

**Dove ci siamo fermati.** Sessione del 13/09/2026: Simone ha chiesto di applicare lo stesso sistema della landing e lo sfondo crema. Claude ha presentato un artefatto con copy a sinistra (riusata dalla sezione 08 della landing) e i cinque campi più consenso a destra, dentro una card con la cornice del sito. Simone l'ha approvato. Le decisioni sono migrate in `brief/PAGE-BRIEF-LANDING.md` (sezione "Pagina modulo") e in `brief/DESIGN-BRIEF.md` §9 ("Campi del modulo"). La tavola è salvata in `design/tavola-modulo.html`.

Sessione del 14/09/2026, seconda parte: Simone ha tolto la spunta di consenso privacy dal modulo — la privacy resta citata solo nel footer. Tolta da `brief/PAGE-BRIEF-LANDING.md`, `brief/DESIGN-BRIEF.md` §9 e `design/tavola-modulo.html`. Il modulo `sito/modulo.html` esisteva già (costruito da Simone con un prompt di una sessione precedente): la rimozione lì e la funzionalità di invio le fa Claude Code col nuovo prompt.

Sessione del 14/09/2026, prima parte: chiuse le due voci rimaste aperte. Stato dopo l'invio → pagina `grazie.html` separata (non messaggio inline), scelta di Simone via domanda con opzioni e costi. L'evento Lead scatta al caricamento di `grazie.html`, protetto (`if (typeof fbq === 'function')`) perché il Pixel Meta base non è ancora installato sul sito. Creato da zero l'account EmailJS di Simone (s.scirebusiness@gmail.com): servizio Gmail "modulo hotel 1.0" (`service_c8rmxaa`), template "Modulo consulenza hotel" (`template_1dsucfr`), dati in `CLIENTE.md` §10. Consegnato il prompt che costruisce `sito/modulo.html` + `sito/grazie.html` e collega l'invio via EmailJS.

Sessione del 14/09/2026, terza parte: la pagina era stata costruita (`sito/modulo.html`, `sito/grazie.html`), ma Simone l'ha giudicata debole a livello di layout — copy e campi del modulo restano corretti così come sono, il problema è solo l'impaginazione. Ha chiesto diversi wireframe di confronto su Figma prima di rimettere mano al codice. Claude ha riletto CLIENTE.md, STATO.md, il brief e la tavola, ispezionato il file Figma esistente (`WMtJbcWPvwnFPVYjfaVnZ5`, pagina "Page 1", cornice "Pagina modulo" id 1:3) per aderire alla stessa convenzione grafica (wireframe in scala di grigi, colonna "rail" con numero e nota), poi ha creato una pagina nuova nel file — "Modulo — confronto wireframe (14/09)" — con 4 alternative di struttura, tutte con lo stesso copy e gli stessi cinque campi già approvati, header (solo logo) e footer invariati:
- **Variante A** — come oggi ma rispecchiata: modulo a sinistra, testo a destra.
- **Variante B** — colonna unica centrata: testo sopra, modulo sotto, niente doppia colonna.
- **Variante C** — testa a piena larghezza sopra un separatore, poi i campi del modulo su due colonne affiancate (pagina più corta, meno scroll).
- **Variante D** — il modulo diventa protagonista: card grande e centrata, testo ridotto a una riga sopra, il paragrafo scende come nota sotto il bottone.

Link diretto alla pagina di confronto: https://www.figma.com/design/WMtJbcWPvwnFPVYjfaVnZ5/Wireframe-hotel-OTA-%E2%80%94-landing---modulo?node-id=27-2

Sessione del 14/09/2026, quarta parte: Simone ha scelto la Variante C ("teniamo il C") e ha chiesto il prompt per applicarla. Le altre tre sono state registrate come scartate in `DESIGN-BRIEF.md` §21 (nessun motivo indicato oltre alla preferenza per C). Migrata la decisione: `PAGE-BRIEF-LANDING.md` → sezione "Pagina modulo" (nuovo layout desktop/mobile) e `DESIGN-BRIEF.md` §9 "Campi del modulo" (struttura interna: griglia a due colonne invece di colonna singola) + §21 + §25 storico. `design/tavola-modulo.html` non è stata rifatta — non richiesta, si passa diretti al codice; resta a mostrare il vecchio layout, segnalato nel brief. Scritto il prompt per Claude Code che applica la Variante C a `sito/modulo.html` e `sito/assets/style.css`. Segnalato a parte a Simone: il prompt già consegnato per `grazie.html` contiene ancora una `fbq('track','Lead')`, da togliere per via di D9 (Fronte 5) — non inclusa in questo prompt perché fuori dallo scope di oggi.

Sessione del 14/09/2026, quinta parte: Simone ha incollato il prompt in Claude Code. Claude ha aperto le skill (`compila-brief`, `web-design`, `codice-ottimizzato`), letto CLIENTE.md/STATO.md/`PAGE-BRIEF-LANDING.md`/`DESIGN-BRIEF.md`, presentato il piano in plan mode (approvato), poi applicato la Variante C: in `sito/modulo.html` il blocco testo e la card restano, aggiunto un separatore (`<hr class="separatore">`) e avvolti i cinque campi in un nuovo contenitore `.campi-griglia`, campo "Quanto è urgente" con la classe `pieno` per lo spanning a piena riga — nessun id/name/type/required/autocomplete toccato, ordine invariato. In `sito/assets/style.css`: `.modulo .w` da griglia a due colonne a colonna flessibile (`gap:36px`, riuso del token "spazio testa→griglia" già in §6 del brief — non specificato per questo punto esatto, segnalato in fase di piano), nuova regola `.separatore` (riuso di `var(--bordo)`, nessun colore nuovo), nuova regola `.campi-griglia` (griglia a due colonne, gap 24px, come da brief) e `.campo.pieno`; il breakpoint 900px spostato dalla vecchia `.modulo .w` alla nuova `.campi-griglia`. Verificato `sito/assets/modulo.js`: nessuna modifica necessaria, i suoi selettori (`.errore-invio`, `campoEmail.parentNode`) restano validi con la nuova struttura. Trovata e segnalata una divergenza: lo storico del 14/09 (quarta parte, sopra) riportava §9 "Campi del modulo" come già migrato alla griglia, ma il testo della "Struttura interna" descriveva ancora la colonna singola — corretto qui. Verifica visiva nel browser non riuscita per limiti degli strumenti disponibili in questa sessione (nessun runtime locale per un server statico; gli strumenti browser disponibili non caricano il foglio di stile collegato su un file locale aperto direttamente) — verificata solo via lettura del codice, nessuna discrepanza trovata. Aggiornati `PAGE-BRIEF-LANDING.md`, `DESIGN-BRIEF.md` §9 e §25, questo file.

Sessione del 14/09/2026, sesta parte: Simone ha dato un nuovo H1 e un nuovo paragrafo per la pagina modulo ("Smetti di essere dipendente dalle OTA..." / "Basta pagare enormi commissioni..."). Claude ha chiesto a quale pagina si applicasse (hero della landing, pagina modulo, o entrambe) perché il subtext ("Compila il modulo...") era ambiguo fra le due — Simone ha confermato: solo la pagina modulo. Applicato verbatim in `sito/modulo.html`, occhiello invariato. Questo supera la regola precedente ("copy riusato dalla sezione 08, non riscritto") con un'istruzione esplicita di Simone: aggiornati `DESIGN-BRIEF.md` §17 e §25, e segnalata in §22 e in `PAGE-BRIEF-LANDING.md` la divergenza che ne risulta — la sezione 08 CHIUSURA di `sito/index.html` non è stata toccata e mantiene il vecchio testo, non richiesto oggi.

Sessione del 14/09/2026, settima parte: Simone ha chiesto la pagina `grazie.html` — stile della landing, "qualche elemento grafico come linee" perché non resti spoglia, con H1 e paragrafo dati da lui. Claude ha riletto CLIENTE.md, STATO.md, i brief e il codice reale (`sito/grazie.html`, `sito/modulo.html`, `sito/index.html`, `sito/assets/style.css`) tramite il collegamento alla cartella (appena attivato da Simone). Decisione di layout: il messaggio va dentro la stessa `.form-card` già usata dal modulo (cornice interna ottone, riuso diretto, nessuna classe nuova), stretta a 640px e centrata — nessuna modifica a `style.css`. Corretti due refusi nel testo dato ("ricihesta"→"richiesta", "una piano"→"un piano", maiuscola dopo "Grazie!"). Nel rileggere CLIENTE.md §10 e questo file, trovato che la rimozione della `fbq('track','Lead')` da `grazie.html` era già decisa (D9, Fronte 5) ma mai eseguita: inclusa in questo lavoro, non è scope nuovo. Migrata la decisione in `brief/PAGE-BRIEF-LANDING.md`, nuova sezione "Pagina grazie". Consegnato a Simone il prompt per Claude Code che costruisce `sito/grazie.html`. **Non applicato al codice**: questa sessione non scrive direttamente sul sito, per regola di progetto — lo fa Simone incollando il prompt in Claude Code.

**Cosa resta deciso e cosa no.**
- ✅ Struttura, copy della colonna sinistra (H1 e paragrafo riscritti il 14/09/2026, occhiello invariato), i cinque campi (senza consenso — tolto il 14/09/2026), le voci della tendina "Quanto è urgente", lo stile dei campi, lo stato dopo l'invio, il punto dell'evento Lead, il servizio e il template EmailJS, il layout — Variante C, testa piena larghezza + campi su griglia a due colonne, **applicata al codice il 14/09/2026**. Privacy citata solo nel footer.
- ✅ Pagina grazie: copy e layout decisi il 14/09/2026 (vedi sopra) — **non ancora applicata al codice**, prompt consegnato.
- `DA DECIDERE` — se e quando rifare `design/tavola-modulo.html` sul nuovo layout (resta a mostrare il vecchio layout a due colonne, non richiesta la sua aggiornamento).

**Domanda aperta.** Nessuna. Resta la revisione a due round di tutta la pagina modulo (insieme al resto della landing, Fronte 1), e — quando Simone incolla il prompt in Claude Code — applicare la pagina grazie e togliere la riga `fbq`.

**File toccati in questo fronte.**

| File | Cosa ci è cambiato | Stato |
|---|---|---|
| `brief/PAGE-BRIEF-LANDING.md` | aggiunta la sezione "Pagina modulo"; 14/09 aggiornato il layout alla Variante C; 14/09 segnata l'applicazione al codice; 14/09 aggiunta la sezione "Pagina grazie" | ✅ |
| `brief/DESIGN-BRIEF.md` | compilato §9 "Campi del modulo", eccezione in §7 e §19, storico in §25; 14/09 struttura a griglia in §9, tre varianti scartate in §21, storico in §25; 14/09 corretta la "Struttura interna" di §9 (era rimasta alla colonna singola) e aggiunta riga di storico sull'applicazione al codice | ✅ |
| `design/tavola-modulo.html` | tavola approvata, nuova — ⚠️ non aggiornata alla Variante C | ⚠️ |
| `sito/modulo.html` | separatore aggiunto, campi avvolti in `.campi-griglia`, campo urgenza con classe `pieno`; H1 e paragrafo riscritti | ✅ 14/09 |
| `sito/assets/style.css` | `.modulo .w` da griglia a colonna flessibile, nuove regole `.separatore`, `.campi-griglia`, `.campo.pieno`, breakpoint spostato | ✅ 14/09 |
| `sito/grazie.html` | copy e layout decisi (card centrata, cornice interna, fbq da togliere) — prompt consegnato, non ancora applicato | ⚠️ in attesa di Claude Code |
| `CLIENTE.md` | aggiunto §10 (EmailJS, punto evento Lead), storico §11 | ✅ |
| Figma `WMtJbcWPvwnFPVYjfaVnZ5` | nuova pagina "Modulo — confronto wireframe (14/09)" con le 4 varianti | ✅ 14/09 |

**In attesa di.** La revisione a due round (Fronte 1), i materiali mancanti (Fronte 3), il prompt della pagina grazie incollato in Claude Code, e — se Simone lo vuole — l'aggiornamento di `design/tavola-modulo.html` alla Variante C (non richiesto finora).

---

## Fronte 3 — MATERIALI MANCANTI

| Cosa serve | Per cosa | Stato |
|---|---|---|
| File del logo | barra alta e footer — oggi è il nome scritto in serif — aspetta anche il nome dell'attività (D11, `LAVORO-GROSSO.md`) | mancante |
| Due foto del team, 1:1 | sezione 06 — oggi due riquadri pieni | mancante |
| Ragione sociale, P. IVA, indirizzo email | riga legale e colonna Contatti del footer — struttura già pronta su tutte e tre le pagine, con i commenti nel codice che indicano dove va il dato quando arriva | mancante |
| Title, meta description, tipo di schema JSON-LD | testa della pagina — landing e modulo | da decidere |

---

## Fronte 4 — NAVBAR E FOOTER ✅ chiuso 14/09/2026

**Obiettivo.** Trasformare la barra alta di `sito/index.html` in una navigazione reale verso le 7 sezioni della pagina, e aggiungere due icone di contatto segnaposto nel footer.

**Dove ci siamo fermati.** Simone ha chiesto un'eccezione esplicita a `local-seo` (le landing non toccano navbar/interlinking), valida solo per questo lavoro. Barra: 7 link (`#problema`, `#soluzione`, `#metodo`, `#perche-noi`, `#team`, `#garanzia`, `#consulenza`) con id aggiunti alle sezioni 02-08; sotto i 900px si nascondono dietro un hamburger che apre un pannello a tutta larghezza (260ms ease-out, `hidden` gestito da JS per restare accessibile). Footer: due icone di contatto (telefono, email), segnaposto `href="#"`, stesso stile delle icone del sito ma 20px. Il logo, la CTA della barra e i link privacy/cookie non sono stati toccati. `sito/modulo.html` non è stata toccata: la sua barra (solo logo) e il suo footer (senza icone) restano diversi — divergenza segnalata in `brief/BRIEF-TRASVERSALE.md` §8.

**Aggiornamento 14/09/2026 (2) — footer rifatto a quattro colonne.** Simone ha giudicato brutto il footer a riga unica e ha chiesto un footer vero — logo, ancore, numeri, mail, zona, con icone. Tre impaginazioni proposte in `design/tavola-footer.html` (A marchio a sinistra, B quattro colonne, C fascia larga); scelta **B**. Applicato identico su `sito/index.html`, `sito/modulo.html`, `sito/grazie.html`: colonna marchio (logo, claim, zona con pin), colonna "Pagina" (le stesse 4 ancore della barra), colonna "Contatti" (i due numeri `tel:` più "Scrivici" inerte, commento nel codice per il `mailto:` futuro), colonna "Parliamone" (link testuale a `modulo.html`, non un bottone), più riga legale con `© 2026 AlbergADV` e il segnaposto `[RAGIONE SOCIALE · P.IVA · CONTATTI]` tolto. Occhielli di footer a 11px, deroga registrata in `brief/DESIGN-BRIEF.md` §19. Su mobile due colonne, marchio e Parliamone a piena larghezza. Dettagli completi in `brief/BRIEF-TRASVERSALE.md` §3/§5/§6/§9 e `brief/DESIGN-BRIEF.md` §9/§19. **Eseguito da una sessione parallela a questa**, scoperto a metà lettura (vedi "Ultima sessione"): questa sessione ha solo verificato punto per punto e sincronizzato questo file.

**File toccati in questo fronte.**

| File | Cosa ci è cambiato | Stato |
|---|---|---|
| `sito/index.html` | barra alta rifatta, id sulle sezioni 02-08, footer con icone contatto; 14/09 (2) footer rifatto a quattro colonne | ✅ |
| `sito/assets/style.css` | stili dei nuovi elementi, riuso del breakpoint 900px esistente; 14/09 (2) blocco CSS footer riscritto (griglia, occhielli 11px, stati, breakpoint 900px) | ✅ |
| `sito/assets/app.js` | apertura/chiusura del pannello mobile | ✅ |
| `sito/modulo.html`, `sito/grazie.html` | 14/09 (2) footer rifatto a quattro colonne, identico a `index.html` | ✅ |
| `brief/DESIGN-BRIEF.md` | nuovo componente "Barra alta con navigazione" in §9, riga in §8, §16 aggiornato, storico in §25; 14/09 (2) nuovo componente "Footer" in §9, deroga occhielli 11px in §19 | ✅ |
| `brief/PAGE-BRIEF-LANDING.md` | sezioni "Barra alta" e "FOOTER" aggiornate | ✅ |
| `brief/BRIEF-TRASVERSALE.md` | creato dal template; 14/09 (2) §3/§5/§6/§9/§10 aggiornati con il footer a quattro colonne per intero | ✅ |

**In attesa di.** I dati reali per ragione sociale, P.IVA e indirizzo email (footer) — vedi Fronte 3. Il resto del footer (struttura, contatti telefonici, link) è completo su tutte e tre le pagine.

---

## Fronte 5 — TRACCIAMENTO

**Obiettivo.** Sapere da che CTA le persone arrivano al modulo, quante lo aprono, quante iniziano e completano il form, dove escono — con GA4 legale (banner di consenso), il tag Google Ads pronto da agganciare. Meta non riceve nessun dato (D9).

**Dove ci siamo fermati.** Sessione del 14/09/2026: Simone ha chiesto una panoramica del tracciamento possibile. Claude ha letto CLIENTE.md, STATO.md, il PAGE-BRIEF e il codice reale, aperto la skill `meta-tracking`, e presentato il piano: niente GTM (codice diretto), GA4 + Pixel Meta come piattaforma, le CTA etichettate, banner di consenso incluso, Conversions API e Google Ads predisposti ma non accesi. Simone ha approvato, detto che la privacy/cookie policy la scrive in un'altra sessione, e chiesto di passare da un lavoro grosso. Scritta la roadmap completa in `LAVORO-GROSSO.md` (7 decisioni chiuse D1-D7, 6 fasi, 4 roadblock).

**Aggiornamento 14/09/2026 (dal Fronte 6).** D4 non cambia nella sostanza — nessun tag parte prima del consenso — ma il modo cambia: il banner della Fase 1.3 non lo scrive più Claude Code da zero, lo fornisce CookieYes (piano gratuito). Resta compatibile con D1 (niente GTM, `gtag.js` diretto nel codice): CookieYes blocca quello script finché non c'è consenso, non lo sostituisce. Dettagli in Fronte 6.

**Aggiornamento 14/09/2026 — creato l'account GA4, escluso il Pixel Meta (D9).** Simone ha chiesto di procedere da Chrome sulla Fase 1. Creato l'account GA4 "HS Agency" → proprietà "Landing hotel HS Agency" → stream web, ID di misurazione `G-HZLFF4B39Y` (dettagli in `CLIENTE.md` §10). Superato un bug reale del modulo "Scopi commerciali" di Google (le caselle sembravano spuntate ma il modulo interno di Angular non lo registrava, il bottone "Crea" restava disabilitato senza errore visibile): risolto ripetendo il click sulle caselle, non un problema del piano. Passando al Pixel Meta, trovato che un Business Manager Meta di HS Agency esiste già ("HS Agency - Website pixel", 222 eventi/28gg, usato per altro): posta la domanda se riusarlo o crearne uno dedicato. Simone ha risposto che le campagne di questa landing non toccano Meta e che Meta non deve ricevere nessun dato — deciso D9 in `LAVORO-GROSSO.md`: Pixel Meta rimosso dallo scope (Fase 1.2, la parte `fbq` di 2.1/3.3, Fase 4.3). Il Business Manager esistente non è stato toccato (mai cliccato "Create" sul nuovo dataset). Segnalato: il prompt già consegnato per `grazie.html` (Fronte 2) contiene una `fbq('track','Lead')` protetta, da togliere quando si incolla in Claude Code.

**Aggiornamento 14/09/2026 — dominio confermato, hosting ancora no.** Simone ha confermato il dominio: Alberg-ADV.com. Repository git e hosting non esistono ancora (confermato da Simone) — il sito non è pubblicato da nessuna parte (`CLIENTE.md` §1, §6-7). R1 resta aperto, ma solo sulla parte hosting: il nome del dominio non basta a sbloccare la configurazione vera di CookieYes (Fronte 6), le serve un sito raggiungibile su quel dominio da scansionare. Nel rileggere `LAVORO-GROSSO.md` per registrare questo, trovato che gli aggiornamenti fatti in una sessione precedente su D11 (nome dell'attività tolto) e sulla Fase 6.1 (verifica dominio Meta, da togliere per D9) non erano mai arrivati al file: persi nello stesso modo già capitato al Fronte 6 — ricostruiti qui, in `LAVORO-GROSSO.md` e nel resto di questo file.

**Roadblock aperti (dal `LAVORO-GROSSO.md`).**
- R1 — dominio noto (Alberg-ADV.com), hosting ancora da decidere (Fronte 1, `CLIENTE.md` §6-7). Blocca la configurazione vera di CookieYes (Fronte 6): il loro scan e lo script hanno bisogno di un sito raggiungibile, non solo del nome del dominio.
- R2 — privacy/cookie policy: non più un testo da scrivere in un'altra sessione, ma la configurazione di CookieYes — vedi Fronte 6.
- R3 — `grazie.html`/`modulo.js` non esistono ancora (Fronte 2).
- R4 — chiuso 14/09/2026: l'account GA4 esiste. Il Pixel Meta non serve più (D9).

**Domanda aperta.** Nessuna.

**File toccati in questo fronte.**

| File | Cosa ci è cambiato | Stato |
|---|---|---|
| `LAVORO-GROSSO.md` | creato, roadmap completa; Fase 1.3 aggiornata il 14/09 (CookieYes); D9 aggiunta il 14/09 (Meta escluso), Fase 1.2/parte Meta di 2.1-3.3-4.3 tolte; oggi ricostruiti D11 e Fase 6.1 (persi), aggiunto il dominio confermato, R1 riscritto | ✅ |
| `CLIENTE.md` | §10 aggiornato — dati GA4 reali, Pixel Meta segnato fuori scope; §1/§6-7 aggiornati col dominio (da un'altra sessione) | ✅ |

**In attesa di.** Il banner di consenso (Fase 1.3, via CookieYes — dipende da R1/R2), poi Fase 2 (codice base GA4 nelle due pagine).

---

## Fronte 6 — PRIVACY E COOKIE POLICY

**Obiettivo.** Avere due pagine privacy/cookie valide e pubblicate, per riempire i due link `#` del footer e chiudere R2 del Fronte 5.

**Nota su questo file.** Questo fronte esisteva già in una versione precedente di `STATO.md`, persa in un salvataggio concorrente di un'altra sessione (partita da una copia del file antecedente a questo fronte e al Fronte 5 — ha sovrascritto tutto quello che nel frattempo era stato aggiunto). Non un errore di questa sessione: si segnala perché può ricapitare, non per darne colpa. Nessun contenuto reale è andato perso — `LAVORO-GROSSO.md` non è mai stato toccato dall'altra sessione, e questo fronte si ricostruisce da lì e da `PRIVACY-COOKIE.md`, già sul tuo PC.

**Dove ci siamo fermati.** Sessione del 14/09/2026: Simone ha detto che raccoglie i dati del modulo (nome, struttura, email, telefono, urgenza — senza casella di consenso, tolta il 14/09) e che l'agenzia è nuova, senza nome né P.IVA ancora. Claude ha letto i file del progetto, verificato con ricerca web EmailJS (sede, trasferimenti, sub-processori) e i cookie di GA4/Meta Pixel (nomi, durate), aperto `consulente-legale`, e scritto una bozza round 1 di informativa privacy e cookie policy in `PRIVACY-COOKIE.md`, consegnata a Simone. Base giuridica scelta: misure precontrattuali su richiesta (art. 6.1.b), non consenso.

Simone ha poi chiesto un'alternativa più veloce a scrivere il testo a mano, citando Iubenda. Confrontati i costi (Iubenda da 4,99 €/mese) e cosa serve davvero per essere in regola — il testo pubblicato e vero, più un banner che blocca GA4/Pixel prima del consenso e ne tiene la prova. Simone ha scelto una piattaforma gratuita. Verificato che nessun piano gratuito copre tutto: CookieYes (piano Free permanente, senza carta di credito) è quello più vicino — genera privacy/cookie policy, banner con blocco automatico degli script, fino a 5.000 pageview/mese e un dominio. **Decisione presa da Claude, dichiarata:** CookieYes, perché è l'unico piano gratuito verificato che include sia il generatore di testo sia il banner con blocco, in un solo script da incollare — esattamente quello che Simone ha chiesto.

**Aggiornamento 14/09/2026 — dominio confermato.** Il dominio è confermato: Alberg-ADV.com. Non basta da solo a sbloccare il passo 2 sotto: serve un sito raggiungibile su quel dominio, e repository/hosting non esistono ancora (`CLIENTE.md` §6-7). R1 resta aperto, ma solo sulla parte hosting.

**Aggiornamento 14/09/2026 — CookieYes scartato.** Simone ha chiesto un'altra piattaforma: il banner lo costruiamo noi col nostro codice, la piattaforma tiene solo il registro/prova del consenso, come fa Iubenda. Verificate sulle pagine ufficiali tre alternative, nessuna gratuita: Iubenda (personalizzazione HTML/CSS del banner confermata dalla loro documentazione, ~5 €/mese fatturato annuale, registro del consenso incluso), Axeptio (personalizzazione grafica e registro su tutti i piani, da 7 $/mese) e CookieFirst (solo colori/font personalizzabili, il registro richiede il piano da 19 €/mese). Presentate a Simone con i costi, nessuna scelta ancora presa — decisione D12 in `LAVORO-GROSSO.md` (supera D8). Il testo di privacy/cookie non cambia: resta il nostro, in `PRIVACY-COOKIE.md`, indipendente da quale piattaforma verrà scelta.

**Cosa serve per finire, in pratica.**
1. Scegliere la piattaforma per il registro dei consensi (Iubenda, Axeptio o CookieFirst) e registrarsi — fattibile subito, non dipende dal dominio.
2. Collegarla al sito — **serve un sito raggiungibile sul dominio vero**: il dominio ora c'è (Alberg-ADV.com), ma senza hosting il sito non è online da nessuna parte (dipende da R1, `CLIENTE.md` §6-7). Finché non c'è, non si può completare questo passo.
3. Incollare lo script generato nell'`<head>` di `index.html` e `modulo.html`.
4. Segnare gli script di GA4 e del Pixel Meta (quando Code li scrive, Fase 2 di `LAVORO-GROSSO.md`) come "da bloccare finché non c'è consenso" — un attributo sul tag, non codice nuovo.
5. Pubblicare le due pagine privacy/cookie con il nostro testo (`PRIVACY-COOKIE.md`, ancora round 1, in attesa della revisione di Simone).

**Cosa resta deciso e cosa no.**
- `DA DECIDERE` — piattaforma per il registro dei consensi: CookieYes scartato (14/09/2026), tre alternative verificate con i costi (vedi sopra), nessuna scelta ancora presa.
- Il testo di privacy/cookie resta il nostro (`PRIVACY-COOKIE.md`), qualunque piattaforma si scelga — non più un testo generico generato da loro.
- ✅ Dominio: Alberg-ADV.com (confermato 14/09/2026). Manca ancora l'hosting: senza un sito online, blocca comunque il passo 2 sopra.

**Domanda aperta.** Nessuna.

**File toccati in questo fronte.**

| File | Cosa ci è cambiato | Stato |
|---|---|---|
| `PRIVACY-COOKIE.md` | creato — bozza round 1, ancora in attesa della revisione di Simone | ✅ |

**In attesa di.** La scelta della piattaforma (Iubenda, Axeptio o CookieFirst) e l'hosting (Fronte 1 / R1) — il dominio ormai c'è. La revisione di Simone sul testo round 1 può avvenire indipendentemente da entrambe.

---

## Ultima sessione

**14/09/2026 — footer a quattro colonne: verificato già fatto da una sessione parallela.** Simone ha incollato in questa sessione il prompt per rifare il footer (impaginazione B della tavola `design/tavola-footer.html`) su `sito/index.html`, `sito/modulo.html`, `sito/grazie.html` e `sito/assets/style.css`. Durante la lettura preliminare dei file, `sito/assets/style.css` è cambiato fra due letture consecutive: un'altra sessione stava eseguendo lo stesso prompt in parallelo — stesso fenomeno già capitato ai Fronti 2, 5 e 6 (vedi sotto). Invece di sovrascrivere, questa sessione ha verificato il codice riga per riga contro ogni punto del prompt: il footer a quattro colonne (marchio+pin, Pagina, Contatti, Parliamone, più riga legale) risultava già applicato identico sulle tre pagine, e il blocco CSS condiviso in `style.css` già corretto (fondo avorio, padding 44/24px, occhielli 11px, icone 17px, stati hover/fuoco, breakpoint 900px a due colonne). Anche i brief risultavano già allineati dalla stessa sessione parallela: `brief/DESIGN-BRIEF.md` (nuovo componente "Footer" in §9, deroga in §19, intestazione e storico §25 aggiornati) e `brief/BRIEF-TRASVERSALE.md` (§3/§5/§6/§9, storico §10, con un'autocorrezione 12px→11px). Nessuna modifica fatta da questa sessione ai file del sito o dei brief: solo la sincronizzazione di questo file, rimasto indietro (Fronte 3 e Fronte 4 descrivevano ancora il vecchio footer a riga unica con due icone).

**14/09/2026 — corretti i riferimenti a CookieYes rimasti in `LAVORO-GROSSO.md` e nel Fronte 6.** Rileggendo i due file prima di riprendere il Fronte 6, trovato che `LAVORO-GROSSO.md` (D8, D10, Fase 1.3, R2, e "Cosa non si tocca") e questo file davano ancora per chiusa la scelta di CookieYes, decisa in una sessione precedente a questa conversazione — non aggiornati quando, in questa conversazione, Simone ha chiesto un'altra piattaforma (banner nostro, registro del consenso tenuto da loro) e sono state verificate le tre alternative (Iubenda, Axeptio, CookieFirst). Aggiunta **D12** in `LAVORO-GROSSO.md` (supera D8), generalizzato D10 (il principio — banner nostro, piattaforma solo motore — vale su qualunque scelta), aggiornati Fase 1.3, R2, il punto 4 di Simone e "Cosa non si tocca". In questo file: riga del Fronte 6 nella tabella dei fronti aperti, "Cosa serve per finire", "Cosa resta deciso e cosa no", "In attesa di" e "Prossimo passo". Chiarito ovunque un punto che prima non era esplicito: il testo di privacy/cookie resta il nostro (`PRIVACY-COOKIE.md`), indipendente dalla piattaforma — prima si dava per scontato che il testo arrivasse da CookieYes.

**14/09/2026 — dominio confermato, ricostruiti D11 e la pulizia Meta persi in `LAVORO-GROSSO.md`.** Simone ha confermato il dominio: Alberg-ADV.com. Un'altra sessione lo aveva già scritto in `CLIENTE.md` (§1, §6-7: repository e hosting confermati ancora inesistenti). Rileggendo `LAVORO-GROSSO.md` per registrare il dominio, trovato che due modifiche di una sessione precedente non erano mai arrivate al file — D11 (nome dell'attività tolto dove non necessario) e la rimozione della Fase 6.1 "domain verification Meta" (dovuta a D9, Meta non riceve nessun dato) — perse nello stesso modo già capitato al Fronte 6 di questo file (salvataggio concorrente di un'altra sessione). Ricostruite entrambe in `LAVORO-GROSSO.md`: D11 in tabella, Fase 1.1 rinominata "Landing hotel", Fase 6.1 segnata rimossa. Aggiunto il dominio in `LAVORO-GROSSO.md` (Verificato, R1 riscritto: non più "nessun dominio/hosting" ma "dominio noto, hosting da decidere") e in questo file (titolo già a posto, Fronte 3 — riga del logo ripulita dal nome, Fronte 5 e Fronte 6 aggiornati, Prossimo passo aggiornato). Non toccato: la scelta di hosting/repository resta aperta, è un bivio vero — vedi Prossimo passo.

**14/09/2026 — occhielli e cornice interna più visibili.** Simone ha segnalato direttamente in Claude Code che gli occhielli erano troppo piccoli e che le linee sottili dei box e quella dentro il CTA si vedevano male. Occhiello (classe `.occhiello`, unica regola per tutti gli occhielli del sito) da 12px a 18px, +50% come richiesto. Cornice interna da 1px a 2px: introdotta la variabile `--fil` al posto del valore fisso ripetuto identico in sette punti del CSS (bottoni, `.card`/`.passo`/`.attr`, `.conto-a`, `.conto-b`, `.risultato`, `.form-card` della pagina modulo, `.foto`), così resta un solo punto da cambiare se serve ritoccarlo ancora. Lo spessore esatto (2px) non era quantificato da Simone come l'occhiello: scelto da Claude, raddoppiato per restare un cambio contenuto — da confermare a vista. Verifica visiva nel browser non riuscita: nessun runtime locale disponibile in questa sessione per un server statico (né Python né Node/npx funzionanti), e il foglio di stile non si carica aprendo il file direttamente da disco — stesso limite già incontrato nel Fronte 2. Cambi verificati solo a livello di codice. Aggiornati `sito/assets/style.css`, `brief/DESIGN-BRIEF.md` (§5, §7, §25) e questo file.

**14/09/2026 — colori, secondo giro: 20 combinazioni.** Simone ha bocciato le prime tre combinazioni (`design/tavola-colore-combinazioni.html`): troppo scure, poco contrasto fra CTA e accento, e ha chiesto un giro largo — fino a 20 combinazioni, colori caldi e freddi, non solo toni scuri/spenti. Ha anche chiesto perché il box fosse sempre avorio: prima era il neutro fisso del sito, uguale su ogni colore. Creata `design/tavola-colore-20.html`: 20 combinazioni CTA+accento divise in fredde, calde e miste (un caldo e un freddo insieme, il gruppo con più contrasto), tutte con contrasto WCAG verificato, e il box con una velatura leggera del colore d'accento invece dell'avorio fisso. Il verde resta fuori: già scartato da Simone in una tavola precedente ("non piace nei box"), segnalato a parte nel caso lo rivolesse ora che anche il CTA cambia. In parallelo, un'altra sessione ha applicato la Variante C al codice della pagina modulo (`sito/modulo.html`, `sito/assets/style.css`) — non toccato da qui. Nessuna decisione di colore presa: in attesa che Simone scelga.

**14/09/2026 — colori, primo giro: CTA e accento insieme.** Simone ha detto che i colori attuali (navy + ottone) sono troppo simili ai competitor e ha chiesto di rivalutare ogni colore — sfondo, CTA, box, eyebrow. Fondo bianco/crema e testo nero/grigio restano quelli di oggi; cambiano CTA e accento, un colore solo per ciascuno — non più solo l'accento con il navy fisso, come nelle tavole precedenti. Letto `SKILL-web-design.md` dal progetto per il metodo (rapporto 60/30/10, contrasto verificato non sperato, una sola CTA). Verificato via ricerca web: Gourmet Marketing (competitor in `nicchia-hotel.md`) usa il rosso come colore di marca — conferma il rischio già segnalato in una tavola precedente sul rosso mattone; BastaOTA, Sojern e Bookassist non verificabili, i loro siti non espongono i colori nell'HTML letto da qui. Creata `design/tavola-colore-combinazioni.html` con tre combinazioni: petrolio scurissimo + terracotta, ardesia scura + cuoio, bordeaux scuro + taupe.

**14/09/2026 — Variante C applicata al codice.** Simone ha incollato in Claude Code il prompt che applica la Variante C alla pagina modulo. Claude ha aperto le skill (`compila-brief`, `web-design`, `codice-ottimizzato`), letto i brief, presentato il piano (plan mode, approvato), poi modificato `sito/modulo.html` (separatore fra testo e card, campi avvolti in `.campi-griglia`, campo urgenza a piena riga) e `sito/assets/style.css` (colonna flessibile al posto della griglia a due colonne, nuove regole `.separatore`/`.campi-griglia`/`.campo.pieno`) — nessun id/name/copy toccato, `modulo.js` verificato compatibile senza modifiche. Corretta una divergenza trovata in `DESIGN-BRIEF.md` §9 (la "Struttura interna" non era stata davvero aggiornata alla griglia, nonostante lo storico lo riportasse). Verifica visiva nel browser non riuscita per limiti degli strumenti di questa sessione (nessun server locale disponibile, gli strumenti browser non caricano il CSS collegato su un file aperto direttamente da disco): verificato solo a livello di codice. Aggiornati i brief e questo file. Dettagli in Fronte 2.

**14/09/2026 — scelta la Variante C, prompt consegnato.** Simone ha scelto la Variante C fra i 4 wireframe di confronto ("teniamo il C") e ha chiesto il prompt per applicarla. Claude ha aperto `compila-prompt` e `compila-brief`, migrato la decisione — `brief/PAGE-BRIEF-LANDING.md` (nuovo layout desktop/mobile della pagina modulo) e `brief/DESIGN-BRIEF.md` §9 (griglia a due colonne per i campi), registrato le tre varianti scartate in §21 e lo storico in §25 di entrambi i file — poi scritto il prompt per Claude Code. `design/tavola-modulo.html` non toccata: non richiesta, resta a mostrare il vecchio layout, segnalato nel brief perché non sparisca in silenzio. Trovato nel Fronte 5 (di un'altra sessione, in parallelo) che il prompt già consegnato per `grazie.html` contiene ancora una `fbq('track','Lead')` da togliere per D9: segnalato a Simone, non incluso in questo prompt perché fuori scope.

**14/09/2026 — tracciamento: account GA4 creato, Pixel Meta escluso.** Simone ha chiesto di partire dalla Fase 1 di `LAVORO-GROSSO.md` da Chrome. Claude ha creato l'account GA4 "HS Agency" → proprietà "Landing hotel HS Agency" → stream web, ottenuto l'ID di misurazione `G-HZLFF4B39Y` (in `CLIENTE.md` §10). Nel percorso, un bug reale del modulo Google (le caselle degli "scopi commerciali" sembravano spuntate ma il form interno di Angular non lo registrava, "Crea" restava disabilitato senza errore) ha richiesto diagnosi via console/DOM prima di trovare che bastava ripetere il click. Passando al Pixel Meta, trovato un Business Manager Meta di HS Agency già esistente e attivo su altro (222 eventi/28gg): posta la domanda se riusarlo o crearne uno dedicato. Simone ha risposto che le ads di questa landing sono solo su Google Ads, Meta non deve ricevere nessun dato — deciso **D9** in `LAVORO-GROSSO.md`: il Pixel Meta esce dallo scope del lavoro (Fase 1.2 rimossa, tolta la parte `fbq` da Fase 2.1/3.3/4.3). Il Business Manager esistente non è stato toccato. Aggiornati `LAVORO-GROSSO.md`, `CLIENTE.md` §10 e questo file.

**14/09/2026 — privacy e cookie: scelta CookieYes.** Simone ha chiesto una piattaforma gratuita al posto del testo scritto a mano, "0 sbatti, incollo un link". Claude ha verificato via web i piani gratuiti di CookieYes, CookieScript, Klaro OSS e Iubenda (nessuno gratuito): CookieYes è l'unico che dà, gratis, sia il generatore di privacy/cookie policy sia il banner con blocco automatico degli script — fino a 5.000 pageview/mese, un dominio, nessuna carta richiesta, conforme alle linee guida del Garante (rifiuta/accetta allo stesso livello, niente consenso per scorrimento). Scelta dichiarata, non richiesta come domanda. Trovato un problema reale: la configurazione vera (scan del sito, script) serve un dominio, che dipende da R1 (`CLIENTE.md` §7), ancora aperto. In questo salvataggio, trovato che una sessione in parallelo aveva sovrascritto STATO.md con una versione antecedente al Fronte 5 e al Fronte 6, persi entrambi: ricostruiti qui da `LAVORO-GROSSO.md` (intatto) e da `PRIVACY-COOKIE.md` (intatto sul PC), senza toccare il lavoro nuovo dell'altra sessione sul Fronte 2 (le 4 varianti Figma).

**14/09/2026 — bozza privacy e cookie policy.** Simone ha aperto il fronte: raccoglie i dati del modulo (nome, struttura, email, telefono, urgenza), l'agenzia è nuova e non ha ancora nome né P.IVA. Claude ha letto i file del progetto, verificato con ricerca web EmailJS (sede, trasferimenti, sub-processori) e i cookie di GA4/Meta Pixel (nomi, durate), aperto `consulente-legale`, e scritto la bozza round 1 di informativa privacy e cookie policy in `PRIVACY-COOKIE.md`, consegnata a Simone. Base giuridica scelta: misure precontrattuali su richiesta, non consenso — coerente con l'assenza della casella nel modulo.

**14/09/2026 — wireframe di confronto per la pagina modulo.** Simone ha bocciato il layout della pagina modulo già costruita (copy e campi restano corretti, è l'impaginazione a non convincere) e ha chiesto diversi wireframe di confronto su Figma. Claude ha riletto CLIENTE.md, STATO.md, il PAGE-BRIEF e la tavola, ispezionato il file Figma per aderire alla stessa convenzione grafica, poi ha creato una nuova pagina "Modulo — confronto wireframe (14/09)" con 4 alternative strutturali (A: rispecchiata, B: colonna unica centrata, C: testa piena larghezza + campi su due colonne, D: modulo protagonista) — stesso copy, stessi cinque campi, wireframe in scala di grigi senza stile finale. Verificate con screenshot, nessuna sovrapposizione o testo tagliato. Nessun file del sito o del brief toccato: si aggiorneranno quando Simone sceglie.

**14/09/2026 — navbar e footer.** Simone ha chiesto di rifare la barra alta di `sito/index.html` con una navigazione reale verso le sezioni e di aggiungere due icone di contatto nel footer — eccezione esplicita concessa il 13/09/2026 a `local-seo` (le landing non toccano navbar/interlinking), valida solo per questo lavoro. Claude ha aperto le skill (`web-design`, `codice-ottimizzato`, `compila-brief`, `local-seo`), letto CLIENTE.md/STATO.md/i brief/la tavola/il sito, scoperto che la sessione era partita nella cartella sbagliata (spostata su questo progetto), notato che nel frattempo le CTA della pagina erano state ricollegate a `modulo.html` da un'altra sessione (lasciate come sono, fuori scope), presentato un piano in plan mode (approvato) ed eseguito: 7 link di navigazione con hamburger/pannello mobile (260ms, accessibile da tastiera anche a menu chiuso/aperto), due icone di contatto segnaposto nel footer, id sulle sezioni 02-08. Aggiornati `DESIGN-BRIEF.md`, `PAGE-BRIEF-LANDING.md`, creato `BRIEF-TRASVERSALE.md`, aggiornato questo file. `sito/modulo.html` non toccata di proposito.

**14/09/2026 — collegamento delle CTA.** Le 7 CTA "Consulenza gratuita" di `sito/index.html` (barra alta, hero, sezioni 02, 03, 05, 07, 08) puntavano tutte a `#`: cambiate in `modulo.html`, come già indicato dal brief ("Destinazione di ogni CTA: la pagina modulo"). Nessuna CTA puntava già altrove, nessun caso ambiguo. I link privacy/cookie non sono stati toccati. Aggiornati `STATO.md` e `brief/DESIGN-BRIEF.md` §16.

**14/09/2026 — funzionalità del modulo.** Simone ha chiesto di lavorare sulla funzionalità di invio e di impostare EmailJS sulla sua mail. Claude ha riletto CLIENTE.md, STATO.md, il PAGE-BRIEF (sezione "Pagina modulo") e la tavola, poi ha posto l'unica domanda rimasta aperta (messaggio inline o pagina grazie.html, con costi) — risposta: pagina grazie.html. In parallelo ha aperto Chrome sul browser vero di Simone (non cloud — l'estensione si è disconnessa una volta a metà lavoro, riconnessa da Simone), creato l'account EmailJS, collegato Gmail come servizio (autorizzazione OAuth fatta da Simone), creato e scritto il template con i cinque campi. Simone ha poi chiesto di togliere la spunta di consenso privacy dal modulo (la privacy resta solo nel footer): tolta da `PAGE-BRIEF-LANDING.md`, `DESIGN-BRIEF.md` §9 e `design/tavola-modulo.html`. Claude ha poi scritto il prompt che modifica `sito/modulo.html` (esisteva già, costruito da Simone con un prompt precedente) togliendo la spunta e aggiungendo l'invio via EmailJS, e che costruisce `sito/grazie.html`. Aggiornati CLIENTE.md e STATO.md.

**13/09/2026 — pagina modulo.** Simone ha chiesto di lavorare sulla pagina modulo applicando il sistema già deciso, sfondo crema, e di vedere un artefatto (il modulo poi userà JS, non ancora in questa sessione). Claude ha letto CLIENTE.md, STATO.md, DESIGN-BRIEF.md e il sito costruito, poi ha presentato l'artefatto: copy a sinistra riusata dalla chiusura della landing, cinque campi più consenso a destra dentro una card con la cornice del sito. Simone ha approvato. Claude ha quindi compilato la sezione "Pagina modulo" del PAGE-BRIEF, il §9 del DESIGN-BRIEF, salvato la tavola in `design/tavola-modulo.html`, corretto lo stato del Fronte 1 (la landing risultava "in costruzione" ma il codice esiste già) e scritto il prompt di costruzione per Claude Code.

**Cose emerse da non perdere:**
- Simone ha respinto due volte i testi chiusi in colonne strette. È una preferenza forte, non un dettaglio.
- Ha respinto la trasformazione dei box del wireframe in righe. La struttura del wireframe è intoccabile.
- Il rapporto 4:5 dei box del metodo non si vedrà finché i testi del passo 01 e 03 restano più lunghi degli altri.
- I singoli campi del modulo non portano la cornice interna piena: solo la card che li contiene. Eccezione dichiarata in DESIGN-BRIEF §19.

---

## Prossimo passo

Passi indipendenti, in parallelo:
- Verificare nel browser vero (desktop e sotto i 900px) il nuovo layout di `sito/modulo.html` — questa sessione non è riuscita a farlo per limiti degli strumenti disponibili, vedi Fronte 2.
- Confermare a vista lo spessore di 2px scelto per la cornice interna (box e CTA) — non quantificato da Simone, verifica nel browser non riuscita per lo stesso limite di sopra.
- Togliere la `fbq('track','Lead')` da `grazie.html` (D9, Fronte 5).
- Rivedere e correggere la bozza round 1 di privacy/cookie policy (`PRIVACY-COOKIE.md`, Fronte 6) — non dipende da piattaforma né da hosting.
- Scegliere la piattaforma per il registro dei consensi — Iubenda, Axeptio o CookieFirst, costi confrontati (Fronte 6) — vero bivio aperto, sta a Simone.
- Decidere hosting e repository (R1, `CLIENTE.md` §6-7) — vero bivio aperto, sta a Simone.
- Quando il sito è online sul dominio vero e la piattaforma è scelta: completare il banner (Fase 1.3, Fronte 5) e proseguire con la Fase 2 della roadmap (codice GA4 nelle due pagine).

---

## Fronti chiusi

| Fronte | Chiuso il | Esito | Dove sono finite le decisioni |
|---|---|---|---|
| Sistema di design | 13/09/2026 | chiuso — riaperto 14/09/2026 sui colori, vedi Fronte 1 | `brief/DESIGN-BRIEF.md` |
| Barra dei risultati (sezioni 02 e 08) | 13/09/2026 | chiuso — blocchi A e B inseriti dalla tavola `design/tavola-blocchi-perdita.html` | `sito/index.html`, `sito/assets/style.css` |

---

## Parcheggiati

| Cosa | Parcheggiato il | Perché | Condizione per riprenderlo |
|---|---|---|---|
| Larghezza di riga oltre i 90 caratteri | 13/09/2026 | scelta confermata da Simone dopo la segnalazione | se leggendola dà fastidio |
