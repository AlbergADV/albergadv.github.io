# PAGE-BRIEF — Landing hotel HS Agency

**Compilato:** 13/09/2026
**Aggiornato:** 14/09/2026 — aggiunta la sezione "Pagina grazie" (copy e layout, dato da Simone in chat)
**Allineato al costruito:** sezione "Pagina modulo" — sì, 14/09/2026 (Variante C applicata a `sito/modulo.html`), non ancora passata da revisione a due round. Sezione "Pagina grazie" — no, decisa ma non ancora applicata a `sito/grazie.html`: prompt consegnato a Simone. Resto della pagina (`sito/index.html`) — vedi Fronte 1 di `STATO.md`.
**Fonte della struttura:** wireframe Figma — https://www.figma.com/design/WMtJbcWPvwnFPVYjfaVnZ5/Wireframe-hotel-OTA-%E2%80%94-landing---modulo
**Fonte dell'aspetto:** `brief/DESIGN-BRIEF.md` e `design/tavola-landing.html`

> **La struttura del wireframe non si cambia, si veste soltanto.** Numero di sezioni, loro ordine, numero di blocchi per sezione e testi sono quelli del wireframe. Non si riprogetta, non si accorpa, non si aggiunge.

**Obiettivo della pagina:** portare albergatori a chiedere la consulenza gratuita, cioè a raggiungere la pagina modulo.
**Destinazione di ogni CTA:** la pagina modulo.

---

## Sezione 0 — Testa della pagina

- **title:** `[da compilare]`
- **meta description:** `[da compilare]`
- **JSON-LD:** `[da compilare]` — tipo esatto non ancora deciso
- **canonical:** `[da compilare]`

Fuori scope SEO: NAP, mappa GBP, formula H1/H2, interlinking.

## Barra alta

**Aggiornata 14/09/2026** — eccezione esplicita di Simone (13/09/2026) a `local-seo`, solo per questo lavoro: la barra ha ricevuto una navigazione reale verso le sezioni. Stile esatto in `DESIGN-BRIEF.md` §9 "Barra alta con navigazione"; mappa completa dei link in `BRIEF-TRASVERSALE.md`.

Fondo bianco, bordo sotto crema scuro. Da sinistra a destra: logo, link di navigazione (desktop), CTA piccola.
- Logo: "HS Agency" in serif 20px peso 700. ⚠️ Il file del logo non esiste ancora.
- Link di navigazione, in quest'ordine, verso le sezioni della stessa pagina:

| Voce | Destinazione | Sezione |
|---|---|---|
| Il costo | `#problema` | 02 |
| La soluzione | `#soluzione` | 03 |
| Il nostro metodo | `#metodo` | 04 |
| Perché sceglierci | `#perche-noi` | 05 |

**Aggiornato 14/09/2026:** tolti "Il team", "Consulenza" e poi "Garanzia" su richiesta di Simone (da 7 a 4 link); "Problema" rinominato "Il costo", "Soluzione" rinominato "La soluzione", "Metodo" rinominato "Il nostro metodo", "Perché noi" rinominato "Perché sceglierci" — stesse ancore. Le sezioni 06, 07 e 08 restano in pagina con il loro `id`: non più linkate dalla barra, ma riusate dal tracciamento (`LAVORO-GROSSO.md` §2.3) — non si tolgono. Testo non più maiuscolo (tolto lo stesso giorno). Le ancore sono assolute (`index.html#...`) da quando la barra è montata anche su `modulo.html`.

- CTA: "Consulenza gratuita" → `modulo.html`.
- **Sotto i 900px:** i 4 link si nascondono dietro un hamburger (icona a tre righe → X quando aperto, 44×44px); il clic apre un pannello a tutta larghezza sotto la barra con i link impilati. Logo e CTA restano visibili in barra.
- Nessuna ancora sulla sezione 01 hero.
- Solo su `sito/index.html`. La barra di `sito/modulo.html` resta logo-soltanto (vedi "Pagina modulo" più sotto): non fa parte di questo aggiornamento.

---

## 01 — HERO

**Ruolo.** Dire in una riga cosa si ottiene, e portare alla consulenza.
**Territorio.** A — fondo bianco.
**Layout desktop.** Due colonne: testo a sinistra (~60%), slot video a destra (~36%), 48px di stacco, allineati al centro verticale. Testo allineato a sinistra.
**Layout mobile.** Una colonna, video sotto il bottone.
**Leve montate.** 1 (cornice interna, sul riquadro del video — è un oggetto chiuso della pagina).

**Contenuti, esatti dal wireframe:**
- Occhiello: `PER HOTEL E STRUTTURE RICETTIVE`
- H1: `Riempi le camere senza regalare commissioni.`
- Paragrafo: `Quante camere regali a Booking ogni anno? Pagare il 20% alle OTA significa che ⅕ del tuo hotel è loro. Ti aiuteremo a riprenderti i tuoi ospiti e trovarne di nuovi, riempiendo il tuo canale diretto di prenotazioni.`
- CTA: `Consulenza gratuita`

**Asset.** ⚠️ Slot video, rapporto 332/340. Il video non esiste: riquadro tratteggiato con la scritta "Slot video".

---

## 02 — PROBLEMA

**Ruolo.** Mostrare che il conto delle OTA non è solo la commissione.
**Territorio.** A — fondo bianco, box crema.
**Layout.** Testa a piena larghezza, poi tre box affiancati, poi la barra dei risultati, poi una CTA centrata.
**Leve montate.** 1 (cornice interna), 3 (box in evidenza, sul primo box).

**Contenuti:**
- Occhiello: `IL DANNO REALE`
- H2: `Booking ti aiuta a caro prezzo. Le commissioni non sono tutto il conto`
- Paragrafo: `Di sicuro le OTA sono comode e funzionano, ma non sei tu a fare le regole. Ecco il conto finale.`

**I tre box** — icona ottone a sinistra del titolo, poi il testo:

| # | Titolo | Testo | Icona | Nota |
|---|---|---|---|---|
| 1 | Costi su costi | Le commissioni altissime in prenotazione non bastano: se non accetti sconti o ulteriori pagamenti resti comunque invisibile. | simbolo dell'euro | **blocco in evidenza**: doppio bordo ottone |
| 2 | L'ospite non è davvero tuo | Dati e contatti dei tuoi ospiti se li tengono stretti e ti impediscono di contattarli. Così tornano tramite loro e tu paghi di nuovo. | persona con una X accanto | |
| 3 | Paghi pure chi ti conosce già | Le OTA comprano pubblicità sul tuo nome, intercettando chi ti conosce o vuole tornare, rivendendotelo a caro prezzo. | altoparlante | |

**Blocco A — esempio della perdita (orizzontale).** Catena di calcolo a tre celle, fuori dal riquadro una nota: incasso annuo dalle OTA (715.000 €) × commissione media (17%) = commissioni pagate ogni anno (121.550 €). Markup e CSS dalla tavola approvata `design/tavola-blocchi-perdita.html` (selettori `.conto-a`, `.catena`, `.cella`, `.cella.finale`, `.segno`, `.nota-a`).

**CTA:** `Consulenza gratuita`, centrata.

---

## 03 — SOLUZIONE

**Ruolo.** Ribaltare: non uscire dalle OTA, ma riprendere il canale diretto.
**Territorio.** A — fondo bianco.
**Layout.** Tutto a piena larghezza, allineato a sinistra. Sotto il paragrafo, due attributi affiancati: il primo occupa il 47,5% della larghezza, il secondo parte poco dopo metà. Poi la CTA, a sinistra.
**Leve montate.** 2 (attributo a filetto con velatura).

**Contenuti:**
- Occhiello: `UN CAMBIO DI DINAMICHE`
- H2: `Rendiamo il tuo canale diretto la fonte principale delle tue prenotazioni`
- Paragrafo: `Non serve uscire dalle OTA, ti aiutiamo a riprendere il controllo delle tue prenotazioni. Chi cerca su Google un hotel nella tua zona o cerca te, deve trovare il tuo sito per primo.`
- Attributo 1: `Zero pensieri, solo più prenotazioni.`
- Attributo 2: `Risultati immediati.`
- CTA: `Consulenza gratuita`

**Nota vincolante.** I due attributi **non sono box**: linea ottone a sinistra, velatura sfumata dietro, serif 27px. Vedi `DESIGN-BRIEF.md` §9.

---

## 04 — METODO

**Ruolo.** Mostrare che c'è un metodo in quattro passi, non improvvisazione.
**Territorio.** A — fondo bianco, box crema.
**Layout.** Testa a piena larghezza, poi **quattro box verticali affiancati** in rapporto 4:5. Nessuna CTA: nel wireframe lo slot è vuoto.
**Leve montate.** 1 (cornice interna), 5 (rapporto 4:5).

**Contenuti:**
- Occhiello: `RIPRENDIAMO CIÒ CHE È TUO`
- H2: `Come garantiamo il successo della campagna`
- Paragrafo: `Non ci limitiamo a difendere il tuo nome, rendiamo il tuo hotel la destinazione di riferimento della tua zona.`

| # | Titolo | Testo |
|---|---|---|
| 01 | La voce degli ospiti | Ricaviamo i desideri, le difficoltà e i problemi dei tuoi ospiti dalle loro parole. Così sapremo esattamente cosa vogliono ricevere o vedere risolto per convertire. |
| 02 | Landing page | Grazie allo studio scriviamo un contenuto infallibile, prenotare da te sembrerà il percorso più naturale per chi visita. |
| 03 | Campagne | Seguiamo settimanalmente le campagne, correggiamo keyword, testiamo diversi contenuti e impostazioni per trovare gli ingredienti perfetti. |
| 04 | Crescita | Trovata la formula vincente espandiamo il target, si incrementa il budget e si testano sempre nuovi contenuti. |

Il numero del passo sta in cima al box, in serif ottone 15px.

---

## 05 — AUTORITÀ

**Ruolo.** Dire perché noi e non un altro.
**Territorio.** B — **qui parte il crema.** Prima della sezione, la sfumatura da 100px. Box bianchi.
**Layout.** Testa a piena larghezza, poi quattro box in due file da due, con icona a sinistra e testo a destra dentro ogni box. CTA centrata in fondo.
**Leve montate.** 1 (cornice interna), 4 (sfumatura fra territori).

**Contenuti:**
- Occhiello: `PERCHÉ NOI`
- H2: `Nel settore i migliori in advertising. Facciamo solo questo tutto il giorno: ti portiamo prenotazioni senza chiederti commissioni.`
- Paragrafo: `Non ci intromettiamo nei tuoi sistemi, devi solo poter gestire più prenotazioni.`

| # | Titolo | Testo | Icona |
|---|---|---|---|
| 1 | Contatto diretto | Nessun ticket o attesa, parli direttamente con chi gestisce le tue campagne e ricevi risposta in giornata 7 su 7, anche in alta stagione. | fumetto |
| 2 | Risultati misurabili | Tracciamo l'incremento di prenotazioni dirette e mettiamo nero su bianco il ritorno dei tuoi investimenti. | grafico a barre |
| 3 | Tutto resta tuo | I dati dei tuoi ospiti, delle campagne e landing page saranno in tuo possesso, e ti rimarranno per sempre. | scudo |
| 4 | Selezione all'ingresso | Non accettiamo tutti: collaboriamo solo con strutture in cui troviamo potenziale. | stella |

⚠️ Il quarto blocco nel wireframe **non ha titolo**: "Selezione all'ingresso" è una proposta di Claude, accettata per non lasciare un buco nella griglia. Se il titolo vero arriva, si sostituisce.

**CTA:** `Consulenza gratuita`, centrata.

---

## 06 — TEAM

**Ruolo.** Mettere due facce dietro il servizio.
**Territorio.** B — fondo crema.
**Layout.** Testa a piena larghezza, poi due colonne: foto quadrata e sotto il ruolo.
**Leve montate.** 1 (cornice interna sulle foto).

**Contenuti:**
- Occhiello: `IL TEAM`
- H2: `Le menti dietro le campagne`
- Persona 1: `Marketing e strategic planning expert`
- Persona 2: `Advertise success manager`

**Asset.** ⚠️ Due foto 1:1. Non esistono: riquadri pieni con la scritta "Foto".
⚠️ Nel wireframe l'H2 è troncato ("Le menti dietro …"). "Le menti dietro le campagne" è il completamento proposto da Claude. Da confermare.

---

## 07 — RIBALTA DEL RISCHIO

**Ruolo.** Togliere il rischio dalla decisione.
**Territorio.** B — fondo crema, box bianchi.
**Layout.** Testa **centrata** (occhiello e H2), poi tre box affiancati, poi CTA centrata.
**Leve montate.** 1 (cornice interna), 3 (box in evidenza), 6 (testa centrata).

**Contenuti:**
- Occhiello: `PUOI SOLO GUADAGNARCI`
- H2: `Ci prendiamo noi il rischio`

| # | Titolo | Testo | Icona | Nota |
|---|---|---|---|---|
| 1 | Nessun vincolo | Potrai andartene quando vuoi, non sarai bloccato in nessun contratto pluriennale. | porta aperta | |
| 2 | Garanzia | Se non ripaghi l'investimento in prenotazioni dirette entro i primi 30 giorni, continuiamo a lavorare fino al raggiungimento dell'obiettivo. | scudo con spunta | **blocco in evidenza**: doppio bordo ottone |
| 3 | Report trasparenti | Dati concreti e verificabili: quanto budget è stato investito e che ritorno ha generato. | documento | |

**CTA:** `Consulenza gratuita`, centrata.

---

## 08 — CHIUSURA

**Ruolo.** Ultima chiamata.
**Territorio.** B — fondo crema.
**Layout.** Due colonne: a sinistra il copy con la CTA, a destra la barra dei risultati.
**Leve montate.** 1 (cornice interna).

**Contenuti:**
- Occhiello: `CONSULENZA GRATUITA — SENZA IMPEGNO`
- H2: `I giorni passano. Le commissioni si accumulano. E il tuo guadagno?`
- Paragrafo: `Valutiamo la tua situazione, e al termine della consulenza ti diciamo subito se c'è utile recuperabile, poi la scelta di iniziare è tua, nessuna pressione.`
- CTA: `Consulenza gratuita`

**Blocco B — esempio della perdita (verticale).** Riquadro con tre righe (fatturato annuo 1.240.000 €, quota OTA 65%, commissione media 18%) e un risultato in evidenza (commissioni stimate 145.080 €/anno, 12.090 €/mese, 725.400 € in cinque anni), con una nota fuori dal riquadro. Markup e CSS dalla stessa tavola (selettori `.conto-b`, `.righe`, `.riga`, `.risultato`, `.nota-b`).

---

## FOOTER

**Aggiornato 14/09/2026.** Fondo crema, bordo sopra crema scuro. Da sinistra a destra: logo e dati legali, due numeri di telefono, un'icona email segnaposto, i due link.
- `[RAGIONE SOCIALE · P.IVA · CONTATTI]` — ⚠️ da fornire
- Due numeri di telefono, ciascuno un link `tel:` con icona (dati da Simone, `CLIENTE.md` §1): `392 066 0255` (`tel:+393920660255`), `392 385 0668` (`tel:+393923850668`). Non più segnaposto.
- Un'icona email, ancora segnaposto, `href="#"`. Nessun indirizzo: non esiste ancora.
- `Privacy policy` · `Cookie policy`

---

## Pagina modulo

**Compilata:** 13/09/2026, in sessione dedicata — con l'artefatto approvato da Simone.
**Layout aggiornato:** 14/09/2026 — Simone ha giudicato debole il layout a due colonne (pagina già costruita): copy e campi restavano corretti, era l'impaginazione a non convincere. Creati 4 wireframe di confronto in Figma (pagina "Modulo — confronto wireframe", stessa copy e stessi campi, solo la struttura variava); Simone ha scelto la Variante C. Le altre tre sono in `DESIGN-BRIEF.md` §21 "Scartate". **Applicata al codice il 14/09/2026** (sessione separata, in Claude Code): `sito/modulo.html` e `sito/assets/style.css` ora riflettono questo layout.
**Fonte della struttura:** seconda tavola del wireframe Figma originale (13/09/2026) per barra alta e contenuti; per l'impaginazione, la Variante C del confronto del 14/09/2026 — https://www.figma.com/design/WMtJbcWPvwnFPVYjfaVnZ5/Wireframe-hotel-OTA-%E2%80%94-landing---modulo?node-id=27-24
**Fonte dell'aspetto:** `DESIGN-BRIEF.md` §9 (campi del modulo). ⚠️ `design/tavola-modulo.html` riflette ancora il vecchio layout a due colonne: non aggiornata, fuori dallo scope di questa modifica.

**Obiettivo della pagina.** Raccogliere i cinque dati del lead, senza nessuna via d'uscita dalla pagina. Niente spunta di consenso: la privacy è citata solo nel footer (decisione di Simone, 14/09/2026).

**Barra alta.** ⚠️ Aggiornata 14/09/2026, su richiesta di Simone: non più solo logo — ora identica a quella di `index.html` (logo, 4 link di navigazione, hamburger/pannello sotto i 900px), con un'unica differenza: la CTA a destra non è "Consulenza gratuita" ma **"Chiamaci"**, link `tel:` (usato `tel:+393920660255`, il primo dei due numeri in `CLIENTE.md` §1 — nessun criterio dato per scegliere fra i due, segnalato). I 4 link puntano a `index.html#problema` ecc. (ancore assolute, non bare: la barra ora vive su due pagine, la deroga per ancore bare di `BRIEF-TRASVERSALE.md` §1 non si applica più a questi link — aggiornati anche quelli di `index.html` per restare identici). Dettaglio in `DESIGN-BRIEF.md` §9.

**Territorio.** B — fondo crema per tutta la pagina (richiesto da Simone), box bianco per la card del modulo. Invariato.
**Layout desktop.** Non più a due colonne. Il testo (occhiello, H1, paragrafo) sta a piena larghezza in alto, allineato a sinistra come nel resto del sito. Sotto, un separatore sottile largo quanto il contenuto, colore bordo `#E6DECE` (lo stesso già in uso su footer e card — nessun colore nuovo). Poi la card del modulo, ora a piena larghezza invece che a metà pagina: titolo "Richiedi la tua consulenza", poi i cinque campi su una griglia a due colonne (riga 1: Nome e cognome / Nome della struttura — riga 2: Email / Telefono — riga 3: Quanto è urgente, a piena riga), poi il bottone a piena larghezza. Gap fra i campi, orizzontale e verticale: 24px, lo stesso già usato nella card (§9). Dettaglio dei campi in griglia: `DESIGN-BRIEF.md` §9.
**Layout mobile (≤900px).** Stesso punto di rottura già in uso nel resto del sito: la griglia dei campi torna a una colonna. Testo, separatore e card restano impilati verticalmente come oggi.
**Leve montate.** 1 (cornice interna, sulla card del modulo). Invariata.

**Contenuti colonna sinistra** — riscritti da Simone il 14/09/2026, non più riusati dalla sezione 08 (vedi storico in `DESIGN-BRIEF.md` §25):
- Occhiello: `CONSULENZA GRATUITA — SENZA IMPEGNO` — invariato, non toccato da questa richiesta
- H1: `Smetti di essere dipendente dalle OTA, scopri come ottenere più prenotazioni dirette.`
- Paragrafo: `Basta pagare enormi commissioni per ricevere un servizio scadente con un partner che ti usa e ti tiene all'oscuro di tutto. Compila il modulo, analizzeremo la situazione e in meno di 24H saprai se la tua struttura è idonea a questo progetto.`

⚠️ Qui il tag è **H1**, non H2 come in sezione 08: su questa pagina è il titolo principale.
⚠️ **Divergenza dalla sezione 08 CHIUSURA di `sito/index.html`:** quella sezione mantiene il vecchio copy ("I giorni passano...") — non toccata da questa richiesta, che riguardava solo la pagina modulo. Le due sezioni non condividono più lo stesso testo. Segnalato, non risolto: se vada allineata anche la sezione 08 è una decisione di Simone.

**Il modulo — cinque campi, in quest'ordine:**

| # | Campo | Tipo | Obbligatorio |
|---|---|---|---|
| 1 | Nome e cognome | testo | sì |
| 2 | Nome della struttura | testo | sì |
| 3 | Email | email | sì |
| 4 | Telefono | tel | sì |
| 5 | Quanto è urgente | tendina | sì |

**Voci della tendina "Quanto è urgente"** — proposta di Claude, approvata da Simone il 13/09/2026:
1. Il prima possibile
2. Entro un mese
3. Nei prossimi 3 mesi
4. Sto solo valutando

**Consenso privacy** — tolto il 14/09/2026: era stato proposto da Claude e approvato da Simone il 13/09/2026, poi Simone ha deciso di citare la privacy solo nel footer. Nessuna spunta sul modulo.

**Campo email — suggerimento di correzione dominio.** Deciso 14/09/2026. Non è una ricerca in una rubrica (come l'autocompletamento di Gmail: qui chi scrive è uno sconosciuto, non esiste una lista di contatti) ma un controllo dei refusi più comuni sul dominio. Quando l'utente esce dal campo email, se il dominio scritto assomiglia molto a uno diffuso ma non è scritto esatto (es. "gmial.com" invece di "gmail.com"), sotto il campo appare un suggerimento cliccabile con l'indirizzo corretto: "Forse intendevi mario@gmail.com?". Un click sostituisce il valore. Non blocca l'invio: è solo un aiuto, non una validazione obbligatoria. Lista fissa di domini comuni italiani e internazionali, nessuna chiamata esterna, dentro `sito/assets/modulo.js`.

**Titolo sopra il modulo:** `Richiedi la tua consulenza`
**Bottone:** `Invia la richiesta` — stesso `.btn` del resto del sito, larghezza piena della card.

**Stile dei campi.** Vedi `DESIGN-BRIEF.md` §9, "Campi del modulo".

**Stato dopo l'invio.** Redirect a `sito/grazie.html` (pagina separata), deciso da Simone il 14/09/2026.
**Punto in cui scatta l'evento Lead.** Superato il 14/09/2026: il Pixel Meta è fuori scope (D9, `CLIENTE.md` §10), l'evento non serve più. La riga `fbq('track','Lead')` va tolta da `sito/grazie.html`.

---

## Pagina grazie

**Fonte:** nessuna tavola Figma dedicata — pagina di arrivo dopo l'invio del modulo, copy dato da Simone in chat il 14/09/2026.

**Obiettivo della pagina.** Confermare che la richiesta è stata ricevuta e dire cosa succede dopo. Nessuna via d'uscita che non sia il footer.

**Barra alta.** ⚠️ Aggiornata 14/09/2026: non più "come la pagina modulo" — da quando anche il modulo ha la navigazione completa, `grazie.html` resta l'unica pagina a barra minima. Solo il logo, **centrato** (non a sinistra come prima), nessun link né CTA: non ha senso rimandare a nient'altro, l'utente ha appena inviato la richiesta. Classe `.barra-solo-logo` in `sito/assets/style.css`.

**Territorio.** B — fondo crema per tutta la pagina, come la pagina modulo. Continuità: è la pagina successiva nello stesso percorso.

**Layout.** Il messaggio sta dentro la stessa card usata per il modulo (`.form-card`: fondo bianco, cornice interna ottone, radius 10px) — riuso diretto, nessuna classe nuova. Qui la card è più stretta (640px) e centrata nella pagina, perché contiene solo testo, non una griglia di campi. Dentro, in colonna: occhiello, H1, paragrafo, tutti centrati.
**Leve montate.** 1 (cornice interna, sulla card). Decisione mia: la richiesta era di vestire la pagina con "qualche elemento grafico come linee" senza lasciarla spoglia — la cornice interna è la leva-linea già del sistema, applicata alla card come altrove nel sito. Non ho aggiunto nessun componente nuovo.

**Contenuti — dati da Simone il 14/09/2026:**
- Occhiello: `Richiesta ricevuta` — invariato dalla versione precedente della pagina
- H1: `Grazie! Siamo lieti di prendere in carico la tua richiesta.`
- Paragrafo: `Adesso analizzeremo il tuo hotel ed entro 24H saremo da te a proporti un piano d'azione specifico.`

Corretti due refusi rispetto al testo dato ("ricihesta" → "richiesta", "una piano" → "un piano", maiuscola dopo il punto esclamativo): il contenuto non cambia.

**Evento Lead (fbq).** Da togliere — vedi sopra, "Pagina modulo".

**Footer.** Come la pagina modulo — solo logo, ragione sociale/P.IVA segnaposto, privacy/cookie. Non le icone di contatto che ha `index.html`: è una divergenza nota, segnalata in `BRIEF-TRASVERSALE.md` §8, non oggetto di questo lavoro.

**Testa della pagina (title, meta).** Non toccata: resta `[da decidere]` come oggi, fuori da questo lavoro.

---

## Aperto

- Il logo.
- Le foto del team.
- I numeri delle commissioni e la forma della barra dei risultati.
- Title, meta description, schema JSON-LD, canonical — landing e pagina modulo.
- Ragione sociale, P. IVA, contatti del footer.
- Installazione del Pixel Meta base (fuori scope, vedi CLIENTE.md §10).
