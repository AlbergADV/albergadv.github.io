# DESIGN-BRIEF.md — sistema di design della landing hotel HS Agency

**Compilato:** 13/09/2026 — insieme a Simone
**Aggiornato:** 14/09/2026 (2) — footer a quattro colonne (impaginazione B) applicato al codice su tutte e tre le pagine, nuovo componente "Footer" in §9, deroga occhielli 11px in §19
**Allineato al costruito:** la pagina modulo — layout a due colonne (§9, §13, Variante A: testo a sinistra, card a destra, campi in colonna singola) applicato a `sito/modulo.html` il 14/09/2026, non ancora passata da revisione a due round; la landing — box (`.card`, `.passo`, `.attr`) bianco fisso, stato hover/fuoco e variante mobile "in vista" applicati a `sito/index.html`/`sito/assets/style.css`/`sito/assets/app.js` il 14/09/2026, verificati anche in emulazione mobile; il footer a quattro colonne applicato a `sito/index.html`, `sito/modulo.html`, `sito/grazie.html` il 14/09/2026 (2); il resto della landing non ancora verificato
**Vale per:** la landing page hotel e la sua pagina modulo
**Non vale per:** il sito dell'agenzia, altri clienti

> **Prima di creare o modificare qualsiasi pagina, sezione, footer o navbar, questo file va letto.**
> Niente colori, font, spaziature o forme inventate sul momento: se serve qualcosa che qui non c'è, **si chiede**.

---

## Regola d'uso di questo file

- Si compila **insieme in chat, un campo alla volta**. **Vietato riempirlo automaticamente con default plausibili.**
- Quello che è scritto qui è **deciso**. Quello che è aperto è marcato `DA DECIDERE`.
- **Chi legge non riempie i buchi.** Se un dato manca, ci si ferma e si chiede.

| Marcatore | Significato |
|---|---|
| `[da compilare]` | campo da riempire insieme, non ancora affrontato |
| `DA DECIDERE` | affrontato, decisione rimandata di proposito |
| `[confermato]` | scelta intenzionale, confermata a voce |
| ✅ | chiuso |
| ⚠️ | problema noto, vedi §22 |

## Gerarchia delle fonti in caso di conflitto

<!-- CANON:gerarchia -->
**In caso di conflitto:** eccezione detta sul momento **>** `CLIENTE.md` **>** i brief in `brief/` **>** le tavole in `design/` **>** le skill **>** `CLAUDE.md`. Una divergenza si segnala, non si risolve in silenzio.
<!-- /CANON:gerarchia -->

---

# PARTE A — ASPETTO

## 1. Come deve risultare la landing

| Qualità | Traduzione visiva concreta |
|---|---|
| Professionale | blu navy usato solo sui bottoni, nessun colore acceso, nessuna parola evidenziata dentro i testi |
| Ordinata | fondi solo bianco e crema, un solo segno di forma su tutti gli oggetti, spaziature a multipli di 8 |
| Accogliente | crema nella seconda metà della pagina, ottone su occhielli e filetti, serif nei titoli |
| Facile da leggere | testo corrente 17px, interlinea 1,55, niente grassetti sparsi, niente evidenziazioni |

**Dosaggio.**
- colore: ~85% neutri (bianco e crema) · ~10% ottone · ~5% navy (solo CTA)

**Evitare:**
- fondi navy o scuri di qualsiasi tipo
- parole evidenziate o colorate dentro i paragrafi
- testi chiusi in colonne strette o centrate: si stendono per tutta la larghezza disponibile
- box ristretti dove il wireframe prevede blocchi affiancati

## 2. Reference

**Reference primaria:** il wireframe Figma — https://www.figma.com/design/WMtJbcWPvwnFPVYjfaVnZ5/Wireframe-hotel-OTA-%E2%80%94-landing---modulo
**Reference secondaria:** la tavola approvata in `design/tavola-landing.html`; per la pagina modulo, `design/tavola-modulo.html`.

**Prendere dal wireframe:** struttura delle sezioni e loro ordine, numero e disposizione dei blocchi, larghezze e proporzioni, copy.
**Ignorare dal wireframe:** colori, caratteri, forma — sono decisi qui.

**Prendere dalla tavola:** tutti i valori visivi, che coincidono con quelli scritti sotto.
**Ignorare dalla tavola:** la riga nera di servizio in cima, che non fa parte della landing.

**Regola che vale su tutto:** la struttura del wireframe non si cambia, si veste soltanto. `[confermato]`

## 3. Colori

- **Neutri:** `#FFFFFF` bianco (fondo prima metà) · `#F6F1E7` crema (fondo seconda metà) · `#E6DECE` crema scuro (bordi e segnaposto)
- **Testo:** `#1A1A18` titoli · `#4A4740` testo corrente
- **Ottone (token `--ottone`, ora verde):** `#187C31` — occhielli, filetti, icone, numeri, cornici interne, velature
- **CTA — UNO SOLO, usato esclusivamente per le call-to-action:** `#0F2440` navy
  - il navy non compare da nessun'altra parte: non sui titoli, non sugli occhielli, non sulle icone `[confermato]`
- **Hover CTA:** `#1A3A63`

**Contrasti verificati (WCAG AA):**

| Testo su fondo | Rapporto | Esito |
|---|---|---|
| `#1A1A18` su `#FFFFFF` | 17,43 : 1 | ✅ |
| `#1A1A18` su `#F6F1E7` | 15,48 : 1 | ✅ |
| `#4A4740` su `#FFFFFF` | 9,27 : 1 | ✅ |
| `#4A4740` su `#F6F1E7` | 8,23 : 1 | ✅ |
| `#187C31` su `#FFFFFF` | 5,29 : 1 | ✅ |
| `#187C31` su `#F6F1E7` | 4,70 : 1 | ✅ |
| `#FFFFFF` su `#0F2440` | 15,59 : 1 | ✅ |

## 4. Territori

Due territori, divisi dal colore di fondo. Occhielli, titoli e CTA non cambiano fra i due: cambia solo il fondo, e di conseguenza il fondo dei box.

| Territorio | Confine | Fondo | Occhiello | Titoli | CTA | Fondo dei box |
|---|---|---|---|---|---|---|
| A — prima metà | barra alta, hero, problema, soluzione, metodo | `#FFFFFF` | `#187C31` | `#1A1A18` | `#0F2440` | `#FFFFFF` |
| B — seconda metà | autorità, team, ribalta, chiusura, footer | `#F6F1E7` | `#187C31` | `#1A1A18` | `#0F2440` | `#FFFFFF` |

**Aggiornamento 14/09/2026:** il fondo dei box (`.card`, `.passo`, `.attr`) è bianco fisso su entrambi i territori, non più contrapposto al fondo della sezione — richiesta esplicita di Simone in chat. In Territorio A il box non si stacca più per colore dal fondo bianco, solo per la cornice interna ottone a 6px. Gli altri elementi avorio (footer, slot segnaposto, `.conto-a`, `.risultato`, sfondo della pagina modulo) restano crema: non sono "box" nel senso di questo componente, non toccati da questa decisione. Vedi §25.

**Passaggio fra i due:** una sola sfumatura, alta 100px, da bianco a crema, prima della sezione autorità. Nessun altro stacco di colore in tutta la pagina. `[confermato]`

**La pagina modulo** è tutta in territorio B: fondo crema dall'alto in fondo, box (la card del modulo) bianco. `[confermato]` 13/09/2026, su richiesta esplicita di Simone.

## 5. Tipografia

- **Font titoli:** `"Source Serif 4", Georgia, "Times New Roman", serif` — peso 600, nessun maiuscolo
- **Font corpo:** `"Source Sans 3", "Segoe UI", system-ui, sans-serif` — 17px, peso 400, line-height 1,55
- **Font caricati come:** Google Fonts, con fallback dichiarato

**Scala:**

| Livello | Desktop | Mobile (≤900px) |
|---|---|---|
| H1 | 52px / lh 1,1 / letter-spacing -.01em | 36px |
| H2 | 36px / lh 1,15 / letter-spacing -.005em | 27px |
| H3 | 21px / lh 1,25 | 19px |
| body | 17px / lh 1,55 | 16px |
| lead (paragrafo sotto il titolo) | 19px | 17px |
| occhiello | 18px, maiuscolo, letter-spacing .14em, peso 600 | 18px |
| testo dentro i box | 16px | 16px |

**Misura di riga:** nessun limite. I testi si stendono per tutta la larghezza del contenuto. `[confermato]`
⚠️ Vedi §22: a 1140px un paragrafo arriva a ~130 caratteri per riga.

## 6. Spaziatura, griglia e breakpoint

- **Scala di spaziatura:** multipli di 8
- **Larghezza massima contenuto:** 1140px · gutter laterale 24px
- **Padding di sezione:** 64px sopra e sotto (44px sotto i 900px). Hero: 80px sopra, 64px sotto (48/40 sotto i 900px)
- **Spazio testa→griglia:** 36px · **dentro le griglie:** 24px (tre colonne), 22px (quattro colonne), 32px (due colonne)

| Breakpoint | Cosa cambia |
|---|---|
| 900px | scala tipografica ridotta, padding di sezione a 44px, tutte le griglie a una colonna, hero a una colonna col video sotto, i box del metodo perdono il rapporto 4:5, la pagina modulo passa a una colonna (testo sopra, modulo sotto) |
| 820px | i due attributi della soluzione passano a una colonna |

## 7. Forma e profondità

Il segno riconoscibile della landing è la **cornice interna**, combinata con angoli morbidi. In chat è stata chiamata "12+3".

- **Forma base:** `border-radius: 10px` (variabile `--r`)
- **Cornice interna:** filetto di 2px (variabile `--fil`) a **6px** dal bordo (variabile `--cor`), con raggio `calc(var(--r) - var(--cor))` = 4px
- **Ereditato da:** bottoni, box, foto, riquadri segnaposto, la card del modulo
- **Colore della cornice:** ottone `#187C31` su box e foto · bianco al 45% sui bottoni navy
- **Bordi esterni:** nessuno. I box si staccano per il fondo, non per il bordo `[confermato]`
- **Ombre:** nessuna, in nessun punto

**Come va costruita — e come NO:**
> Corretta: uno pseudo-elemento `::after` in `position:absolute` con `inset: 6px`, `border: 1px solid`, e il raggio calcolato. Così l'`outline` resta libero per il fuoco da tastiera.
> Sbagliata: usare `outline` con `outline-offset: -6px` sul bottone. Verrebbe naturale ed è sbagliata, perché il fuoco da tastiera usa lo stesso `outline` e cancellerebbe la cornice.

**Eccezione dichiarata — i singoli campi del modulo.** I cinque input e la tendina NON portano la cornice interna: solo bordo semplice e radius 10px. La cornice piena, ripetuta cinque volte su oggetti piccoli e ravvicinati, appesantiva l'elenco. La card che li contiene sì, porta la cornice: è lei l'oggetto chiuso della pagina. Vedi §9.

## 8. Movimento

| Elemento | Durata | Curva |
|---|---|---|
| bottone, fondo e ingrandimento | 140ms | ease-out |
| box (card/passo/attr), ingrandimento e bordino al passaggio del mouse o al fuoco | 140ms | ease-out |
| comparsa in scroll | 520ms | cubic-bezier(.2,.7,.3,1) |
| comparsa delle foto e dei riquadri | 640ms | cubic-bezier(.2,.7,.3,1) |
| hero al caricamento | 560ms, ritardi a 60/140/220/300ms | cubic-bezier(.2,.7,.3,1) |
| slot video al caricamento | 700ms, ritardo 380ms | cubic-bezier(.2,.7,.3,1) |
| menu mobile — apertura/chiusura del pannello | 260ms | ease-out |

- **Cosa si anima:** il bottone si ingrandisce del 4% al passaggio del mouse e si schiaccia all'1% al clic; le frasi entrano salendo di 18px; le foto e i riquadri entrano con una leggera apertura dal 104%.
- **Cosa resta fermo:** fondi, sfumature, cornici, icone, linee.
- **`prefers-reduced-motion`:** tutto fermo e tutto visibile. Le animazioni non partono e nessun elemento resta invisibile.
- **Regola tecnica:** senza JavaScript la pagina è interamente visibile. La classe che nasconde gli elementi in attesa dell'ingresso si applica solo dopo che lo script è partito, e un timer di sicurezza a 1600ms mostra tutto comunque.
- **Pagina modulo:** nessuna animazione di ingresso per ora. La pagina è statica finché non si passa alla logica JS.
- **Menu mobile (barra alta):** con `prefers-reduced-motion` compare e scompare senza transizione, ma resta un pannello che si apre e chiude — la regola generale "nessun elemento resta invisibile" non vale qui, vale solo per gli elementi che entrano in scroll.

## 9. Componenti e stati

### Bottone CTA — unico bottone della landing
- **Riposo:** fondo `#0F2440`, testo bianco 17px peso 600, padding 16px 32px, radius 10px, cornice interna bianca al 45%
- **Mouse sopra:** fondo `#1A3A63`, ingrandimento al 104%, 140ms
- **Clic:** rimpicciolimento al 99%
- **Fuoco da tastiera:** outline 2px ottone, distanziato di 3px
- **Disabilitato:** `[non presente]` — non serve in questa landing
- **Variante piccola (barra alta):** 15px, padding 10px 20px. Stessa forma, stessi stati.
- **Variante piena (modulo):** stessa forma e stati, larghezza 100% del contenitore.

### Box (problema, ribalta)
Fondo bianco fisso (§4, aggiornamento 14/09/2026), padding 24px, radius 10px, cornice interna ottone. Dentro: riga con icona 32px a sinistra e titolo H3 accanto, poi il testo 16px.

### Box in evidenza
Come sopra, più un bordo interno di 2px ottone (`box-shadow: inset 0 0 0 2px`). **Uno solo per sezione.** Oggi sono due in tutta la pagina: "Costi su costi" nella sezione problema e "Garanzia" nella sezione ribalta.

### Box del metodo
Come il box, più `aspect-ratio: 4/5`. Dentro: numero del passo in serif ottone 15px, H3, testo.
⚠️ Vedi §22: il rapporto 4:5 vale come minimo.

### Box attributo (autorità)
Come il box, ma icona a sinistra e testo a destra affiancati, non impilati.

### Stato hover/fuoco dei box ✅ 14/09/2026
Vale su tutti i box (`.card`, `.passo`, `.attr`, incluse le varianti "in evidenza" e "del metodo"): al passaggio del mouse o al fuoco da tastiera, il box si ingrandisce al 102% e mostra lo stesso bordo interno di 2px ottone del "box in evidenza" (`box-shadow: inset 0 0 0 2px`), 140ms ease-out — riga in §8. Richiesta esplicita di Simone in chat.
⚠️ Nessuno di questi box è oggi un elemento davvero interattivo (nessun link o bottone, nessun `tabindex`): la regola CSS per il fuoco da tastiera è scritta e pronta, ma non scatta finché i box restano semplici `div` senza un elemento focalizzabile dentro o un `tabindex`. Se in futuro un box diventa cliccabile (es. link all'intera card), l'effetto si attiverà da solo.

### Stato "in vista" dei box su mobile ✅ 14/09/2026
Sotto i 900px non c'è il mouse per l'hover: gli stessi box (`.card`, `.passo`, `.attr`) prendono lo stesso effetto (ingrandimento al 102% e bordo interno di 2px ottone) finché sono visibili nello schermo durante lo scroll — appena il box esce dallo schermo l'effetto si toglie, non resta acceso. Tecnica: `IntersectionObserver` in `app.js` aggiunge/toglie la classe `.in-vista` sui tre box mentre entrano ed escono dal viewport (soglia di default, scatta al primo pixel visibile). Sotto `prefers-reduced-motion`, l'ingrandimento è disattivato (stesso trattamento di `.btn:hover{transform:none}`), il bordo resta. Richiesta esplicita di Simone in chat.

### Attributo a filetto (soluzione)
Nessun box. Linea ottone di 3px a **sinistra**, 22px di stacco, testo in serif 27px peso 600 (21px sotto i 900px), 14px di spazio sopra e sotto. Dietro, una velatura ottone che parte dalla linea e si spegne all'80% della colonna (allungata dal 55% originale, su richiesta di Simone):
`linear-gradient(to right, rgba(24,124,49,.14) 0%, rgba(24,124,49,.05) 40%, rgba(24,124,49,0) 80%)`

### Icone
Linea di 1,5px, `stroke-linecap: round`, 32px, colore ottone, nessun riempimento. Sono sette in tutto. Quella del box "Costi su costi" è il simbolo dell'euro.

### Barra alta con navigazione ✅ 14/09/2026, aggiornata 14/09/2026 (sticky + separatori)
Eccezione concessa da Simone il 13/09/2026 a `local-seo` (le landing non toccano navbar/interlinking): vale solo per questo lavoro. **Aggiornato 14/09/2026:** questa barra ora vive su due pagine, `sito/index.html` e `sito/modulo.html`, identica — logo, 4 link, hamburger/pannello — tranne la CTA: "Consulenza gratuita" su `index.html`, **"Chiamaci"** (`tel:+393920660255`, primo dei due numeri di `CLIENTE.md` §1 — nessun criterio dato per la scelta fra i due, segnalato) su `modulo.html`. Le ancore dei 4 link sono ora **assolute** (`index.html#problema` ecc.), non più bare: da quando la stessa barra vive su due pagine, la deroga di `BRIEF-TRASVERSALE.md` §1 (bare perché "esiste solo su index.html") non è più valida — corretto anche lì. `sito/grazie.html` **non** monta questo componente: ha una barra a parte, vedi "Barra minima (solo logo)" più sotto.

- **Logo:** invariato — "HS Agency" in serif 20px peso 700, segnaposto testuale.
- **Barra:** `position: sticky; top: 0`, resta visibile durante lo scroll. Conseguenza tecnica: le sezioni ancorate (`scroll-padding-top: 90px` a livello di `html`) non finiscono nascoste dietro la barra quando si arriva da un link di navigazione — 90px copre l'altezza della barra sia desktop che mobile con un margine.
- **Link di navigazione (4, desktop):** "Il costo" (`index.html#problema`), "La soluzione" (`index.html#soluzione`), "Il nostro metodo" (`index.html#metodo`), "Perché sceglierci" (`index.html#perche-noi`). Storico dei tagli/rinomine, tutti il 14/09/2026 su richiesta di Simone: "Il team" e "Consulenza" tolti per primi; "Problema" rinominato "Il costo"; "Soluzione" rinominato "La soluzione"; "Garanzia" tolto, restano 4 link; "Metodo" rinominato "Il nostro metodo"; "Perché noi" rinominato "Perché sceglierci". Gli `id="team"`, `id="consulenza"` e `id="garanzia"` **restano** sulle sezioni 06, 08 e 07 anche se non più linkati da qui: li riusa l'evento di "sezione vista" del tracciamento (`LAVORO-GROSSO.md` §2.3, Fronte 5 di `STATO.md`) — toglierli avrebbe rotto quella roadmap. Ancore **assolute** (`index.html#...`), non più bare dal 14/09/2026: questa barra vive anche su `sito/modulo.html`, la vecchia deroga di `BRIEF-TRASVERSALE.md` §1 ("esiste solo su index.html") non è più valida. Sans **17px, peso 600, minuscolo** (14/09/2026: portato prima a 17px maiuscolo semi-grassetto, poi tolto il maiuscolo su richiesta di Simone — resta 17px/600, nessuna misura inventata, 17px è già la misura del corpo testo desktop in §5), **24px di padding orizzontale per link** (da 14px, per "stendere" la barra e farla occupare più spazio — prima i cinque link risultavano troppo stretti), separati da un `border-left` (`var(--fil)`, 2px, stesso token della cornice interna di card/bottoni; altezza = riga di testo del link, non più un valore fisso) fra un link e l'altro — colore ottone (14/09/2026: da bordo `#E6DECE` a `var(--ottone)`, richiesta di Simone: "lo stesso [verde] usato ora", cioè lo stesso token già usato per hover/fuoco sui link della stessa barra). **Nota tecnica 14/09/2026:** i separatori erano prima uno pseudo-elemento `::before` assolutamente posizionato con `transform`; su segnalazione di Simone ("hanno spessori diversi") sostituiti con `border-left`, che non soffre dello stesso artefatto di arrotondamento sub-pixel quando i link hanno larghezze di testo diverse. **Riposo:** colore corpo `#4A4740` (14/09/2026: da colore titolo `#1A1A18` — richiesta di Simone, grigio come il resto del testo secondario del sito, non il nero dei titoli; contrasto su bianco 9,27:1, già verificato in §3). **Hover e fuoco da tastiera:** colore ottone (token `--ottone`, vedi §3 per il valore corrente), outline 2px ottone a 3px di distanza sul fuoco. Il navy resta solo sulla CTA.
- **CTA:** invariata, `.btn.sm` esistente.
- **Hamburger (≤900px):** bottone 44×44px, area di tocco minima. Icona a tre linee di 1,5px ottone (linee da 22px, non gli SVG delle sette icone: disegnate in CSS con `::before`/`::after`), che ruota a X quando il menu è aperto (`aria-expanded="true"`). Fuoco da tastiera: outline 2px ottone.
- **Pannello mobile:** a tutta larghezza sotto la barra, fondo bianco, link impilati verticalmente (stessi colori di riposo/hover/fuoco dei link desktop). Apre/chiude in `max-height` 260ms ease-out (riga in §8); tecnica scelta per restare accessibile: l'attributo `hidden` toglie il pannello dal DOM interattivo quando è chiuso, la classe che anima il `max-height` si applica solo mentre è visibile. Chiuso di default sotto i 900px, sopra i 900px non esiste (`.nav` desktop al suo posto).

### Barra minima (solo logo) ✅ 14/09/2026
Solo su `sito/grazie.html`. Stessa `.barra` (sticky, bordo sotto, sfondo bianco) ma senza nav, senza hamburger, senza CTA: un solo figlio nel contenitore, il logo, **centrato** (classe `.barra-solo-logo`, `justify-content:center` sul `.w` invece di `space-between`). Nessun link: l'utente è appena arrivato dall'invio del modulo, non c'è dove altro mandarlo se non al footer.

### Footer ✅ 14/09/2026 (2) — quattro colonne, impaginazione B
Identico su `sito/index.html`, `sito/modulo.html`, `sito/grazie.html` **tranne il link della colonna Parliamone** (solo su `index.html`, vedi sotto). Scelto da Simone su tre impaginazioni a confronto in `design/tavola-footer.html` (A: marchio grande a sinistra — bocciata, footer troppo alto; C: fascia larga con le voci in fila — bocciata, contatti e ancore pesavano troppo poco). Le due precedenti icone di contatto nel footer (telefono/email, 20px, documentate qui sotto "Barra alta" nella sessione precedente) sono confluite in questo componente e ridimensionate a 17px, vedi sotto.

- **Fondo:** `var(--bianco)` — deciso avorio in un primo momento (coerenza con la sezione 08, Territorio B), corretto in bianco da Simone a vista sul render reale. Resta il `border-top` 1px `var(--bordo)`.
- **Struttura:** griglia a 4 colonne dentro `.w` (`1.5fr 1fr 1.15fr 1.35fr`, gap 32px) più una riga legale sotto, staccata solo da `margin-top:16px` — niente più `border-top` (tolto il 14/09/2026 (4), allargava troppo il footer). Padding `footer .w` 36px sopra, 20px sotto (ridotto dal 44/24px iniziale). Testo 15px, riga legale 13,5px.
- **Colonna 1 — marchio:** logo (classe `.logo` esistente, 24px qui — non un nuovo componente logo), una riga di posizionamento in corpo testo ("Più prenotazioni dirette, meno commissioni alle OTA."), poi icona pin + "Lavoriamo in tutta Italia" (nessun NAP: `CLIENTE.md` non ha un indirizzo, §15 tiene questa landing fuori dallo scope NAP).
- **Colonna 2 — Pagina:** occhiello + le 4 ancore della barra alta, stessi testi e stesse destinazioni assolute (`index.html#problema` ecc.) — se una cambia nella barra, cambia anche qui.
- **Colonna 3 — Contatti:** occhiello + i due numeri di telefono (icona + testo, link `tel:`) + "Scrivici" (icona busta + testo, link `mailto:info@alberg-adv.com` — non più segnaposto dal 14/09/2026 (6), indirizzo dato da Simone, registrato in `CLIENTE.md` §1).
- **Colonna 4 — Parliamone:** occhiello + una riga di invito + un **link testuale** (non un bottone) verso `modulo.html`, colore **navy** (deciso ottone in un primo momento, corretto blu da Simone a vista: è di fatto una CTA, prende il colore delle CTA), peso 600, sottolineato solo al passaggio del mouse o al fuoco. Niente CTA-bottone qui: la sezione 08 chiude già con il suo bottone appena sopra, due bottoni attaccati si annullano a vicenda. **Il link è solo su `index.html`** (14/09/2026 (4)): su `modulo.html` e `grazie.html` rimandare al modulo non ha senso (ci si è già, o la richiesta è già stata inviata) — tolto su richiesta di Simone, resta solo occhiello + invito su quelle due pagine. Il footer non è più identico byte-per-byte sulle tre pagine: unica eccezione, stesso perimetro già usato per la CTA della barra alta.
- **Occhielli di footer:** 11px, maiuscolo, letter-spacing .14em, peso 600, ottone — deroga ai 18px di §5, vedi §19.
- **Icone (pin, telefono, busta):** stesso linguaggio delle sette icone di contenuto (linea 1,5px, `stroke-linecap: round`, ottone, nessun riempimento), ma **17px** (non più 20px, non 32px) — coerenti con la scala della tavola. Tutte `aria-hidden="true"`: il nome accessibile del link viene dal testo visibile a fianco, non serve più `aria-label`. Commento nel codice: restano segnaposto grafico, da sostituire con quelle di Simone quando arrivano.
- **Link di navigazione e contatti (colonne 2-3):** nessuna sottolineatura, colore corpo `#4A4740`, hover/fuoco ottone in 140ms ease-out — stessa curva già in uso per i micro-elementi (§8).
- **Link legali (riga legale):** sottolineati, `text-underline-offset` 3px — invariati rispetto a prima.
- **Fuoco da tastiera:** su ogni link del footer, outline 2px ottone a 3px di distanza — stesso principio di tutto il sito.
- **Nessuna ombra, nessun bordo esterno** sui gruppi di colonna.
- **Riga legale:** "© 2026 AlbergADV" a sinistra (con un commento nel codice che dice dove va la ragione sociale/P.IVA quando esisteranno), Privacy policy e Cookie policy a destra, invariati. Tolto il segnaposto visibile `[RAGIONE SOCIALE · P.IVA · CONTATTI]` che finiva online in chiaro.
- **Mobile (≤900px):** due colonne, mai colonna unica (bocciata a vista: lasciava vuoti larghi fra i gruppi). Marchio e "Parliamone" a piena larghezza (`grid-column: 1 / -1`), "Pagina" e "Contatti" affiancate. Gap 28px verticale, 20px orizzontale. Riga legale impilata a sinistra.
- **Nessuna animazione di ingresso** sul footer.

### Campi del modulo ✅ 13/09/2026, struttura aggiornata 14/09/2026 (colonna singola, Variante A)
- **La card che li contiene:** fondo bianco, padding 32px (24px sotto i 480px), radius 10px, cornice interna ottone a 6px — lo stesso trattamento dei box del sito. È lei l'oggetto chiuso della pagina, non i singoli campi.
- **Struttura interna:** i cinque campi stanno uno sotto l'altro, in colonna singola — Nome e cognome, Nome della struttura, Email, Telefono, Quanto è urgente, nello stesso ordine del wireframe — gap verticale 24px; 8px fra etichetta e input dentro ogni campo. Nessuna griglia a due colonne: la card è affiancata al testo (§13, Variante A), non ha più bisogno di dividersi internamente.
- **Etichetta:** sans 14px, peso 600, colore titolo `#1A1A18`, sopra l'input.
- **Input e tendina — riposo:** fondo bianco, bordo 1px `#E6DECE`, radius 10px, padding 16px, testo 16px colore corpo `#4A4740`. Nessuna cornice interna: vedi l'eccezione in §7.
- **Fuoco da tastiera:** bordo ottone `#187C31`, più outline 2px ottone a 2px di distanza — stesso principio del bottone, l'outline resta libero.
- **Tendina "Quanto è urgente":** stessa forma dell'input, freccia disegnata (non quella nativa del browser) in linea da 1,5px colore ottone, coerente con le altre icone.
- **Bottone di invio:** `.btn`, variante piena — vedi sopra.

## 10. Comandi di interfaccia

`[non presente]` — la landing non ha filtri, tab o paginazione.

## 11. Immagini

- **Trattamento:** radius 10px, cornice interna ottone a 6px, nessun filtro
- **Foto del team:** rapporto 1:1
- **Slot video della hero:** rapporto 332/340, come l'immagine del wireframe

**Inventario:**

| Sezione | Immagine | Rapporto | Stato |
|---|---|---|---|
| Hero | video | 332/340 | ⚠️ segnaposto — il video non esiste ancora |
| Team | due foto | 1:1 | ⚠️ segnaposto — le foto non esistono ancora |
| Problema | barra dei risultati reali | — | ⚠️ segnaposto — da definire a sito creato |
| Chiusura | barra dei risultati reali | — | ⚠️ segnaposto — da definire a sito creato |

**Procedura di sostituzione di un segnaposto:** il riquadro tratteggiato si sostituisce con l'elemento vero mantenendo radius e cornice. Le proporzioni della griglia non cambiano.

## 12. Repertorio delle leve

| # | Nome | Categoria | Quando si usa | Definita in |
|---|---|---|---|---|
| 1 | Cornice interna | forma | su ogni oggetto chiuso della pagina | descritta in §7 |
| 2 | Attributo a filetto con velatura | enfasi | per affermazioni brevi e importanti, mai per testo corrente | descritta in §9 |
| 3 | Box in evidenza a doppio bordo | enfasi | un solo blocco per sezione, quello che regge il messaggio di quella sezione | descritta in §9 |
| 4 | Sfumatura fra territori | ritmo cromatico | una sola volta in tutta la pagina, al passaggio bianco→crema | descritta in §4 |
| 5 | Box in rapporto 4:5 | ritmo | quando i blocchi sono una sequenza di passi e devono leggersi come colonne | descritta in §9 |
| 6 | Testa centrata | tipografia | per una sezione che apre una promessa e non un elenco | usata solo in "Puoi solo guadagnarci" |

**Regola di applicazione:** ogni sezione monta da 2 a 4 leve, mai tutte. Ogni leva applicata deve avere una ragione di contenuto.

## 13. Ritmo, densità e raccordi

- **Come respira la pagina:** apre con la hero asimmetrica (testo a sinistra, video a destra), poi quattro sezioni su bianco che alternano griglie a tre e a quattro colonne, poi il passaggio al crema che segna il cambio di tono da "il problema" a "noi", e chiude sul crema.
- **Percorso cromatico:** bianco per metà pagina, crema per l'altra metà, un solo passaggio sfumato.
- **Peso relativo:** la hero e la chiusura sono le due sezioni che pesano di più; il team è la più leggera.
- **Pagina modulo:** tutta crema, un solo momento, nessun passaggio interno. Layout a due colonne affiancate (Variante A, 14/09/2026): testo a sinistra, card del modulo a destra, allineate in alto — non più impilate verticalmente come nella Variante C. Sotto i 900px torna a una colonna, testo sopra e modulo sotto.

## 14. Invarianti — cosa non si tocca mai

- La struttura del wireframe: numero di sezioni, loro ordine, numero di blocchi per sezione.
- Il navy solo sulle CTA.
- Nessun fondo scuro.
- Nessuna evidenziazione dentro i testi.
- I testi non si chiudono in colonne strette.

---

# PARTE B — STRUTTURA E CONTENUTO

## 15. Regole SEO fissate per questa landing

**SCOPE RIDOTTO.** Su questa pagina si applicano solo:
- **title tag:** `[da compilare]`
- **Schema JSON-LD:** `[da compilare]` — tipo esatto da decidere

**Non si applicano:** NAP, mappa GBP, formula H1/H2 di `local-seo`, interlinking, pagine collegate. `[confermato]`
Vale anche per la pagina modulo.

## 16. Interlinking

La landing non linka fuori. Unica destinazione esterna: la pagina modulo, da tutte le CTA.
Footer: privacy policy e cookie policy, più (dal 14/09/2026) due icone di contatto segnaposto — vedi sotto.
La pagina modulo non linka fuori nemmeno lei: nessuna uscita, footer con solo privacy e cookie.

**Chiuso 14/09/2026:** l'interlinking landing→modulo è implementato, non solo dichiarato. Le 7 CTA "Consulenza gratuita" di `sito/index.html` (barra alta, hero, sezioni 02, 03, 05, 07, 08) puntano a `modulo.html`.

**Aggiunto 14/09/2026 — eccezione esplicita di Simone (13/09/2026), solo per questo lavoro:** la barra alta di `sito/index.html` ha ora 7 link di navigazione, ma sono ancore interne alla stessa pagina (`#problema` ecc.), non nuove destinazioni esterne — la regola sopra (unica destinazione esterna: la pagina modulo) resta vera. Il dettaglio di questi link e della loro mappa sta in `BRIEF-TRASVERSALE.md`, il nuovo documento creato per questa eccezione. Il footer ha anche due icone di contatto (telefono, email), `href="#"` per ora: diventeranno `tel:`/`mailto:` reali quando arriveranno i dati (Fronte 3 di `STATO.md`). Vale solo per `sito/index.html`: `sito/modulo.html` non è toccata da questo lavoro.

## 17. Regole di contenuto

- Il copy della landing è quello del wireframe. Non si riscrive, non si "migliora".
- I numeri delle commissioni non sono ancora forniti: restano segnaposto e **non si inventano**.
- Nessuna evidenziazione, nessun grassetto dentro i paragrafi.
- Il copy della pagina modulo (H1, paragrafo) è stato riscritto da Simone il 14/09/2026 (storico in §25): non è più quello della sezione 08. L'occhiello resta quello riusato in origine.

## 18. Composizione delle skill

Chi costruisce applica insieme: questo file per il layer visivo, `codice-ottimizzato` per come si scrive il codice, `PAGE-BRIEF-LANDING.md` per struttura e copy. `local-seo` solo per title e schema, quando saranno decisi. `copy-voice` non serve: il copy c'è già.

---

# PARTE C — REGISTRI

## 19. Deroghe dichiarate

| Deroga | Perimetro | Motivo | Data |
|---|---|---|---|
| Nessun limite alla misura di riga, contro la regola dei ~74 caratteri di `web-design` | tutta la landing | scelta esplicita di Simone: i testi si stendono | 13/09/2026 |
| Nessun bordo esterno sui box, contro l'abitudine del wireframe | tutta la landing | con la cornice interna sarebbero state due linee sullo stesso oggetto | 13/09/2026 |
| I campi del modulo non portano la cornice interna, contro "ereditato da... campi del modulo" di §7 | pagina modulo | cinque cornici ravvicinate appesantivano l'elenco; la card che li contiene la porta | 13/09/2026 |
| Occhielli del footer a 11px, contro i 18px della scala di §5 | footer, tutte e tre le pagine | a 18px schiacciavano le voci sotto: quattro colonne strette non reggevano un occhiello così grande | 14/09/2026 |

## 20. Promozioni

| Elemento | Nato in | Promosso il | Ora vale per |
|---|---|---|---|

## 21. Scartate

| Alternativa | Scartata perché | Data |
|---|---|---|
| Ottone `#C08A2E` come colore delle CTA | Simone ha deciso che le CTA sono navy | 13/09/2026 |
| Blu profondo `#163A64` e blu deciso `#1D5AA8` | scelto il navy `#0F2440` | 13/09/2026 |
| Verde salvia `#33614E` e mattone `#9A4A32` per occhielli e filetti | scelto l'ottone scuro | 13/09/2026 |
| Fondi navy sulle sezioni di autorità e chiusura | nessun fondo scuro | 13/09/2026 |
| Forma squadrata, arcata, portale, pillola, angolo tagliato, diagonale e le altre dodici candidate | scelta la cornice interna con angoli morbidi | 13/09/2026 |
| Cornice interna con due angoli opposti smussati ("12+8") | valutata insieme: l'asimmetria ripetuta su quattordici box diventa un vezzo | 13/09/2026 |
| Bottone squadrato a 2px senza cornice | rientrato: il taglio deciso vale anche sulle CTA | 13/09/2026 |
| Hero centrata | rientrata: testo a sinistra e video a destra, come nel wireframe | 13/09/2026 |
| Blocco della sezione soluzione largo 760px e centrato | rientrato: i testi si stendono | 13/09/2026 |
| Cornice interna piena su ogni singolo campo del modulo | valutata e scartata: troppo pesante ripetuta cinque volte; resta solo sulla card | 13/09/2026 |
| Ottone scuro `#8C6524` come secondo colore | Simone ha deciso di passare al verde `#187C31` | 14/09/2026 |
| Variante C della pagina modulo (testa a piena larghezza, separatore, card a piena larghezza con campi su griglia a due colonne) — costruita e applicata al codice, poi scartata | decisa la Variante A su wireframe Figma, in chat | 14/09/2026 |

## 22. Segnalato ma NON toccato

| # | Cosa | Dove | Impatto | Nota |
|---|---|---|---|---|
| 1 | A 1140px un paragrafo arriva a ~130 caratteri per riga. Oltre i 90 la lettura cala. | tutti i paragrafi lead | leggibilità | segnalato a Simone il 13/09/2026, scelta confermata |
| 2 | Il rapporto 4:5 dei box del metodo vale come altezza minima: i testi del passo 01 e 03 sono più lunghi e la griglia allinea tutte le card alla più alta | sezione metodo | il rapporto esatto non si vede | si risolverebbe accorciando quei due testi; non richiesto |
| 3 | H1 e paragrafo della pagina modulo riscritti il 14/09/2026 non sono più identici a quelli della sezione 08 CHIUSURA di `sito/index.html`, che mantiene il vecchio testo | `sito/modulo.html` vs `sito/index.html` sezione 08 | le due sezioni, pensate come lo stesso momento della pagina, ora dicono cose diverse | si risolverebbe allineando anche la sezione 08 al nuovo testo; non richiesto |

## 23. Non ho abbastanza evidenze

- Il logo HS Agency: non si sa se esiste un file. Per ora è il nome scritto in serif 20px peso 700.
- Le due foto del team: non esistono.
- I numeri delle commissioni e la forma della barra dei risultati.
- Ragione sociale, P. IVA e contatti del footer.
- Pagina modulo — stato dopo l'invio e punto in cui scatta l'evento di conversione: arrivano con la logica JS, in una sessione dedicata.

## 24. Anti-pattern registrati

### Trasformare in righe quello che nel wireframe è un box
- **Cosa verrebbe naturale:** alleggerire una griglia di riquadri togliendo fondo e bordo e lasciando solo un filetto sopra.
- **Perché è sbagliata:** cambia la struttura del wireframe, che è la fonte. La struttura non si cambia, si veste.
- **Cosa fare invece:** tenere il box e vestirlo con fondo, forma e cornice.

### Chiudere i testi in colonne strette
- **Cosa verrebbe naturale:** limitare i paragrafi a ~65 caratteri per leggibilità.
- **Perché è sbagliata:** qui produce una colonna stretta in mezzo al vuoto, che Simone ha respinto due volte.
- **Cosa fare invece:** stendere il testo per tutta la larghezza del contenuto.

## 25. Storico decisioni (append-only)

- **13/09/2026 — colori:** blu per professionalità, bianco per ordine, crema per accoglienza. Deciso da Simone.
- **13/09/2026 — CTA:** navy `#0F2440`, unico uso del blu in pagina.
- **13/09/2026 — secondo colore:** ottone scuro `#8C6524` per occhielli, filetti, icone e numeri, scelto fra tre candidati con i contrasti calcolati.
- **13/09/2026 — fondi:** solo bianco e crema, nessun fondo scuro; il crema parte da "Perché noi" e arriva in fondo, con una sola sfumatura di passaggio.
- **13/09/2026 — forma:** cornice interna più angoli morbidi da 10px, scelta fra dodici tagli; applicata anche a CTA e foto.
- **13/09/2026 — tipografia:** Source Serif 4 nei titoli, Source Sans 3 nel corpo. Approvata da Simone insieme alla scala.
- **13/09/2026 — spaziature:** ridotte rispetto alla prima proposta, su richiesta di Simone: sezioni da 96 a 64px.
- **13/09/2026 — movimento:** aggiunte le animazioni di ingresso e l'ingrandimento del bottone, su richiesta di Simone.
- **13/09/2026 — icone:** di fianco al titolo, non sopra. Simbolo dell'euro per "Costi su costi".
- **13/09/2026 — testi:** nessun limite di larghezza, si stendono.
- **13/09/2026 — hero:** testo a sinistra, slot video a destra, come nel wireframe.
- **13/09/2026 — attributi della soluzione:** affiancati, linea ottone a sinistra, testo in serif 27px, velatura sfumata che si spegne a metà.
- **13/09/2026 — box del metodo:** rapporto 4:5.
- **13/09/2026 — sezione "Puoi solo guadagnarci":** occhiello e titolo centrati.
- **13/09/2026 — box in evidenza:** anche "Costi su costi" prende il doppio bordo ottone, come "Garanzia". Restano uno per sezione.
- **13/09/2026 — pagina modulo:** sfondo crema su tutta la pagina (richiesta esplicita di Simone). Copy della colonna sinistra riusato dalla sezione 08, non riscritto. Cinque campi confermati dal wireframe; voci della tendina "Quanto è urgente" e testo del consenso privacy proposti da Claude in un artefatto e approvati da Simone. Campi del modulo aggiunti al repertorio dei componenti (§9), con l'eccezione dichiarata sulla cornice interna (§19). Tavola approvata in `design/tavola-modulo.html`. Stato dopo l'invio e punto di tracciamento restano aperti, arrivano con la logica JS.
- **14/09/2026 — interlinking landing→modulo:** le 7 CTA "Consulenza gratuita" di `sito/index.html` collegate a `modulo.html` (§16).
- **14/09/2026 — barra alta e footer:** su richiesta di Simone (eccezione esplicita a `local-seo` concessa il 13/09/2026, solo per questo lavoro), la barra di `sito/index.html` ha ricevuto 7 link di navigazione verso le sezioni (con hamburger e pannello sotto i 900px) e il footer due icone di contatto segnaposto (telefono, email). Nuovo componente "Barra alta con navigazione" in §9, riga in §8, §16 aggiornato. Creato `brief/BRIEF-TRASVERSALE.md` per registrare la mappa dei link. `sito/modulo.html` non è stata toccata.
- **14/09/2026 — barra alta sticky e separatori:** su richiesta di Simone, la barra di `sito/index.html` è diventata `position: sticky` e i 7 link di navigazione hanno un separatore verticale sottile fra loro (riuso del colore bordo `#E6DECE`, non un nuovo colore). Aggiunto `scroll-padding-top: 90px` per evitare che la barra sticky copra l'inizio delle sezioni quando si arriva da un'ancora — conseguenza tecnica della combinazione sticky+ancore, non una richiesta esplicita, ma necessaria perché la navigazione continui a funzionare. §9 aggiornato.
- **14/09/2026 — tolto il consenso privacy dal modulo:** Simone ha deciso di citare la privacy solo nel footer, niente spunte sui moduli. Tolta la voce "Consenso" da §9, il campo dal repertorio e dalla tavola. Il modulo resta a cinque campi.
- **14/09/2026 — tolti "Il team" e "Consulenza" dalla barra:** su richiesta di Simone, i link di navigazione passano da 7 a 5. Gli `id="team"` e `id="consulenza"` sulle sezioni 06 e 08 **restano nel codice**: scoperto durante la modifica che `LAVORO-GROSSO.md` §2.3 (Fronte 5, tracciamento) li riusa per l'evento di "sezione vista" — toglierli avrebbe rotto quella roadmap. §9 aggiornato.
- **14/09/2026 — rinominata la voce "Problema" in "Il costo":** su richiesta di Simone, stessa ancora `#problema`, stessa sezione 02. §9 aggiornato.
- **14/09/2026 — due numeri di telefono nel footer:** Simone ha dato due numeri (392 066 0255 · 392 385 0668), registrati in `CLIENTE.md` §1. Ogni numero è ora un link `tel:` con icona e testo, non più segnaposto icona-sola. L'email resta segnaposto. §9 aggiornato.
- **14/09/2026 — box bianco fisso e stato hover/fuoco:** su richiesta di Simone in chat, i box (`.card`, `.passo`, `.attr`) hanno fondo bianco fisso su entrambi i territori, non più contrapposto al fondo di sezione (§4) — tolto il contrasto crema/bianco del Territorio A, resta solo la cornice interna ottone. Aggiunto uno stato hover/fuoco condiviso da tutti i box: ingrandimento al 102% e bordo interno di 2px ottone (riuso del valore già in uso per il "box in evidenza"), 140ms ease-out (riuso della durata già in uso per il bottone). Applicato a `sito/index.html`/`sito/assets/style.css`; `.conto-a`, `.risultato`, footer, slot segnaposto e sfondo della pagina modulo restano avorio, fuori dallo scope di questa richiesta. Segnalato: il fuoco da tastiera non scatta oggi perché i box non sono elementi focalizzabili (nessun link/bottone/tabindex) — regola scritta e pronta per quando lo diventeranno. §4, §8, §9 aggiornati.
- **14/09/2026 — stato "in vista" dei box su mobile:** Simone ha chiesto lo stesso effetto (ingrandimento + bordino ottone) anche su mobile, dove l'hover non esiste — acceso mentre il box è a schermo, spento appena esce scorrendo (non un lampeggio, non permanente). Aggiunto un `IntersectionObserver` in `app.js` che aggiunge/toglie la classe `.in-vista` su `.card`/`.passo`/`.attr` mentre entrano ed escono dal viewport; regola CSS nel breakpoint 900px già esistente. Nessun nuovo valore: stesso ingrandimento 102% e stesso bordo 2px ottone dello stato hover/fuoco di desktop. Verificato nel browser (emulazione mobile 375px). §9 aggiornato.
- **14/09/2026 — Variante C applicata al codice della pagina modulo:** la decisione di layout (testo a piena larghezza, separatore, card a piena larghezza con campi su griglia a due colonne) è stata applicata a `sito/modulo.html` e `sito/assets/style.css`. §9 "Campi del modulo" aggiornato — la "Struttura interna" descriveva ancora la vecchia colonna singola nonostante lo storico del 14/09 riportasse la migrazione come già fatta: corretta qui, allineata al codice. Nessun colore, font o valore nuovo: riuso di `var(--bordo)` per il separatore e del gap 24px già in uso verticalmente nella card. Gap fra i tre blocchi (testo/separatore/card) impostato a 36px, riusando il token di sistema "spazio testa→griglia" di §6 — non specificato dal brief, segnalato e approvato in fase di piano.
- **14/09/2026 — H1 e paragrafo della pagina modulo riscritti:** Simone ha dato un nuovo H1 ("Smetti di essere dipendente dalle OTA...") e un nuovo paragrafo (con l'indicazione dei tempi, "meno di 24H", e l'invito a compilare il modulo) per `sito/modulo.html`, applicati verbatim. L'occhiello non è stato toccato. Questo supera la regola di §17 ("copy riusato dalla sezione 08, non riscritto"): la sezione 08 CHIUSURA di `sito/index.html` mantiene il vecchio testo, non toccata da questa richiesta — le due sezioni non condividono più lo stesso copy, segnalato in §22 e in `PAGE-BRIEF-LANDING.md`.
- **14/09/2026 — occhielli più grandi, cornice interna più spessa:** Simone ha segnalato in Claude Code che occhielli e cornice interna (box e CTA) si vedevano male. Occhiello portato da 12px a 18px (+50%, richiesto da Simone come minimo), unica regola `.occhiello` quindi applicato a ogni occhiello del sito. Cornice interna da 1px a 2px: introdotta la variabile `--fil` (prima valore fisso ripetuto in sette punti del CSS) e sostituita ovunque — bottoni (`.btn::after`, bianco 45%), box (`.card`/`.passo`/`.attr`, `.conto-a`, `.conto-b`, `.risultato`, `.form-card` della pagina modulo, tutti in ottone) e `.foto` (stesso filetto ma via `outline`, coerente con l'elenco di §7 su cosa eredita la cornice). Spessore scelto da Claude (raddoppiato, non quantificato da Simone): da confermare a vista. Verifica visiva nel browser non riuscita — stesso limite già segnalato nel Fronte 2 (nessun runtime locale disponibile in questa sessione per un server statico, e il foglio di stile non si carica aprendo il file direttamente da disco); cambi verificati solo a livello di codice. §5, §7 aggiornati.
- **14/09/2026 — link di navigazione più grandi e spaziati:** Simone ha chiesto, guardando uno screenshot, di allargare le ancore della barra ("stendile ad occupare più spazio"), scrivere il testo un po' più grande e ispessire le linee separatrici. Font 15px→16px (allinea al pannello mobile, già a quella misura). Padding orizzontale per link 14px→24px (riuso del token `--gut`/gap griglia a tre colonne). Separatore da 1px fisso a `var(--fil)` (ora 2px, lo stesso token introdotto la sessione scorsa per le cornici interne — non un valore nuovo), altezza 14px→16px. Colore separatore invariato (`var(--bordo)`). §9 aggiornato.
- **14/09/2026 — secondo colore da ottone a verde:** su richiesta di Simone in Claude Code, il valore del token `--ottone` passa da ottone scuro `#8C6524` a verde `#187C31`; il nome del token e la parola "ottone" nel testo del brief **non sono stati rinominati** (segnalato, non richiesto). Applicato ovunque il colore compare: `sito/assets/style.css` (variabile e freccia SVG della tendina del modulo), `design/tavola-landing.html` e `design/tavola-modulo.html` (stesse due occorrenze). Contrasti ricalcolati: 5,29:1 su bianco, 4,70:1 su crema, entrambi ancora sopra la soglia AA di 4,5:1 (§3). Nella stessa richiesta, la velatura sfumata dietro l'"attributo a filetto" (§9) è stata allungata: si spegneva a metà colonna (55%), ora si spegne all'80%, stop intermedio spostato dal 28% al 40% in proporzione. §3, §4, §7, §9 aggiornati; §21 e questa riga.
- **14/09/2026 — separatori della barra color smeraldo:** Simone ha chiesto, guardando uno screenshot, che tutti i separatori verticali fra i link di navigazione fossero spessi come il primo (erano già uniformi: stessa regola CSS per tutti) e dello stesso verde già in uso ("smeraldo, lo stesso usato ora"). Colore da bordo `#E6DECE` a `var(--ottone)` (lo stesso token già usato per hover/fuoco sui link). Spessore invariato, `var(--fil)`, già uniforme su tutti e quattro i separatori. §9 aggiornato.
- **14/09/2026 — separatori della barra, spessore incoerente corretto:** Simone ha segnalato che gli spessori dei separatori risultavano visivamente diversi fra loro nonostante la stessa regola CSS — probabile artefatto di arrotondamento sub-pixel dello pseudo-elemento `::before` posizionato in `absolute`+`transform` a un `left:0` che cade a un valore frazionario diverso per ogni link (dipende dalla larghezza del testo precedente). Sostituito con `border-left` sul link stesso: si arrotonda nello stesso passaggio di layout del resto del box, niente compositing separato. Stesso token `var(--fil)`, stesso colore, altezza ora pari alla riga di testo invece di un valore fisso a 16px. §9 aggiornato.
- **14/09/2026 — link di navigazione maiuscoli e più grandi:** su richiesta di Simone, i 5 link passano da 16px normale a 17px maiuscolo (`text-transform:uppercase`) peso 600. Nessun valore nuovo: 17px è già la misura del corpo testo desktop (§5), 600 è già il peso usato su bottoni, logo e occhiello. §9 aggiornato.
- **14/09/2026 — colore di riposo dei link portato a grigio:** Simone ha segnalato che il colore era sbagliato, li voleva grigi "come prima e come i subtext" — cambiato da colore titolo `#1A1A18` (nero) a colore corpo `#4A4740` (grigio, lo stesso di paragrafi e sottotitoli). Il colore titolo non era mai stato toccato dalle modifiche precedenti a questa barra: la richiesta corregge il valore di partenza scelto in fase di costruzione (13/09/2026), non una modifica successiva. §9 aggiornato, `BRIEF-TRASVERSALE.md` §2 allineato.
- **14/09/2026 — Variante A applicata alla pagina modulo, sostituisce la Variante C:** decisa in chat su wireframe Figma. Il contenuto della sezione modulo passa da colonna unica impilata (testa a piena larghezza, separatore, card a piena larghezza con campi su griglia a due colonne) a due colonne affiancate allineate in alto: testo a sinistra, card a destra — griglia `1fr 360px`, gap 96px (i due valori nuovi di questa modifica, entrambi multipli di 8). Il separatore (`<hr class="separatore">`) è stato tolto, sostituito dallo spazio fra le colonne; la sua regola CSS, non più usata da nessuna pagina, è stata rimossa. Dentro la card, i cinque campi tornano in colonna singola (annullata la griglia a due colonne della Variante C), gap verticale 24px invariato. Sotto i 900px resta una colonna, testo sopra e modulo sotto — stesso breakpoint di sistema, ora applicato a `.modulo .w` invece che a `.campi-griglia`. Copy, campi, validazione, `modulo.js`, EmailJS, barra alta e footer non toccati. Variante C registrata come scartata in §21. `design/tavola-modulo.html` non aggiornata (ferma alla Variante C, non richiesto). §9 e §13 aggiornati, riga "Allineato al costruito" in testa al file aggiornata.
- **14/09/2026 — tolto "Garanzia", tolto il maiuscolo, "Soluzione" → "La soluzione":** su richiesta di Simone, i link di navigazione passano da 5 a 4 (restano Il costo, La soluzione, Metodo, Perché noi). `id="garanzia"` resta sulla sezione 07, stesso motivo di `id="team"`/`id="consulenza"` — riusato dal tracciamento (`LAVORO-GROSSO.md` §2.3). Tolto `text-transform:uppercase` introdotto la richiesta precedente: font-size (17px) e peso (600) restano. §9 aggiornato.
- **14/09/2026 — barra alta anche su `modulo.html`, minima su `grazie.html`:** su richiesta di Simone, `sito/modulo.html` passa da "solo logo" alla stessa barra di `index.html` (4 link + hamburger), con l'unica differenza della CTA: "Chiamaci" (`tel:`) al posto di "Consulenza gratuita". Le ancore dei 4 link diventano assolute (`index.html#problema` ecc.) su entrambe le pagine, non più bare — la barra non vive più solo su `index.html`, la deroga di `BRIEF-TRASVERSALE.md` §1 non si applica più a questi link. `sito/grazie.html` resta a parte: nuovo componente "Barra minima (solo logo)" in §9, logo centrato invece che a sinistra. Aggiunto `assets/app.js` a `sito/modulo.html` (serve per l'hamburger, prima non caricato). §9 aggiornato; scelta del numero di telefono per "Chiamaci" segnalata, nessun criterio dato.
- **14/09/2026 — "Metodo" → "Il nostro metodo", "Perché noi" → "Perché sceglierci":** su richiesta di Simone, rinominate le due voci di navigazione rimaste. Stesse ancore (`#metodo`, `#perche-noi`). L'occhiello "Perché noi" della sezione 05 (contenuto di pagina, non navigazione) non è stato toccato: sono due testi diversi che condividevano solo la parola. §9 aggiornato.
- **14/09/2026 (2) — footer a quattro colonne applicato al codice:** Simone ha scelto l'impaginazione B (quattro colonne più riga legale) su una tavola di confronto a tre, `design/tavola-footer.html` — decisione già registrata in `BRIEF-TRASVERSALE.md` §3/§5/§6/§9 da una sessione precedente. Qui applicata a `sito/index.html`, `sito/modulo.html`, `sito/grazie.html` (stesso `<footer>` sulle tre) e `sito/assets/style.css`. Nuovo componente "Footer" in §9, sostituisce la vecchia sotto-voce "Icone di contatto nel footer" che stava dentro "Barra alta con navigazione". Icone footer 20px→17px. Nuova deroga in §19: occhielli di footer 11px invece di 18px. Trovata e corretta una discrepanza: `BRIEF-TRASVERSALE.md` diceva ancora "occhielli 12px" in due punti, mai allineato agli 11px della tavola scelta — corretto lì.
- **14/09/2026 (3) — tre correzioni sul footer costruito:** Simone ha visto il footer nel Browser pane e ha chiesto: fondo da avorio a **bianco**; il link "Consulenza gratuita →" (colonna Parliamone) da ottone a **navy**, perché è una CTA e prende il colore delle CTA; footer più compatto — `footer .w` da 44/24px a 36/20px di padding, `.f-legale` da 36/20px a 24/16px di margine/padding sopra la riga legale. §9 aggiornato.
- **14/09/2026 (4) — tolto il bordo sopra la riga legale:** la linea divisoria (`border-top`) sopra "© 2026 AlbergADV" allargava il footer più del necessario. Tolta insieme al `padding-top` che la scostava; `.f-legale` resta con solo `margin-top:16px`. Il testo "© 2026 AlbergADV" non è stato toccato. Footer passato da ~268px a ~243px di altezza (verificato via `getBoundingClientRect`). §9 aggiornato.
- **14/09/2026 (5) — il link "Consulenza gratuita →" solo su `index.html`:** su richiesta di Simone, tolto dal footer di `modulo.html` e `grazie.html` — rimandare al modulo non ha senso su quelle due pagine (ci si è già, o la richiesta è già stata inviata). La colonna Parliamone resta con occhiello e riga di invito, senza link, su quelle due. Il footer smette di essere identico byte-per-byte sulle tre pagine: eccezione dichiarata, stesso perimetro già usato per la CTA della barra alta ("Consulenza gratuita" / "Chiamaci"). §9 aggiornato.
- **14/09/2026 (6) — email reale nel footer:** Simone ha dato l'indirizzo info@alberg-adv.com (`CLIENTE.md` §1). "Scrivici" (colonna Contatti) passa da segnaposto a `mailto:info@alberg-adv.com`, su tutte e tre le pagine. §9 aggiornato.
