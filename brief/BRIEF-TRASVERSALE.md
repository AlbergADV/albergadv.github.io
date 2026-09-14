# BRIEF TRASVERSALE — Landing hotel HS Agency

**Compilato:** 14/09/2026 — da Claude, su richiesta di Simone
**Aggiornato:** 14/09/2026 (8) — email reale nel footer (mailto:info@alberg-adv.com), CTA "Parliamone" tolta da modulo/grazie, bordo legale tolto, fondo bianco, link Parliamone blu
**Allineato al costruito:** 14/09/2026 (4) — `sito/index.html`, `sito/modulo.html`, `sito/grazie.html`, footer incluso
**Vale per:** navbar e footer di `sito/index.html` e `sito/modulo.html`, la barra minima di `sito/grazie.html`, e l'interlinking interno che ne deriva.
**Non vale per:** il contenuto interno di una sezione — quello sta in `PAGE-BRIEF-LANDING.md`.

> ⚠️ **Questo è l'unico documento che comporta modifiche a pagine già pubblicate.**
> Tutto quello che è elencato qui è stato richiesto esplicitamente. **Nulla va oltre.**

**Perché esiste questo file su una landing.** `local-seo` dice che le landing non toccano navbar o interlinking (§ "Landing page — scope ridotto"). Qui vale un'**eccezione esplicita, chiesta da Simone il 13/09/2026: vale solo per questo lavoro**, non un cambio della regola generale. La prossima landing, di default, resta senza navbar reale finché non arriva una richiesta altrettanto esplicita.

Si legge insieme a `DESIGN-BRIEF.md` (il sistema visivo, §9 "Barra alta con navigazione") e `PAGE-BRIEF-LANDING.md` (struttura e copy). Questo sito non ha un `CLAUDE.md` né una `STRUTTURA.md`: è una landing a pagina singola più la pagina modulo, non un sito con gerarchia rank.

---

## 1. Regole tecniche non negoziabili

- **I link stanno nel codice fin dall'inizio.** Mostrati e nascosti dal CSS, mai costruiti al clic dal JS: tutti i 4 link della barra e del pannello mobile sono `<a href="#...">` presenti nel sorgente.
- **Navbar e footer identici su tutte le pagine — deroga dichiarata qui.** Questa landing ha due pagine (`index.html`, `modulo.html`) con barre **diverse di proposito**: `index.html` ha i 4 link di navigazione, `modulo.html` ha solo il logo (nel wireframe non ha senso rimandare al modulo standando già lì — deciso il 13/09/2026, vedi `PAGE-BRIEF-LANDING.md` § "Pagina modulo"). Non è una divergenza da correggere.
- **Ancore assolute — deroga chiusa il 14/09/2026.** Dal 13/09 al 14/09 i 4 link erano bare (`#problema` ecc.) perché la barra viveva solo su `index.html`. Da quando la stessa barra è stata montata anche su `sito/modulo.html` (su richiesta di Simone), la condizione che giustificava la deroga non c'è più: i link sono ora assoluti (`index.html#problema` ecc.) su entrambe le pagine, come vuole la regola di sistema in cima a questo file.
- **Niente scorrimento animato via JavaScript.** Le ancore usano il comportamento nativo del browser (salto diretto), nessun `scroll-behavior:smooth` né libreria di smooth-scroll.

## 2. Navbar

**Comportamento:** `position: sticky; top: 0` (dal 14/09/2026, su richiesta di Simone) — resta visibile durante lo scroll, non trasparente. `scroll-padding-top: 90px` sulla pagina evita che copra l'inizio delle sezioni quando si arriva da un'ancora.
**Mobile:** hamburger → pannello a tutta larghezza sotto la barra, da 900px in giù (stesso breakpoint già in uso nel sito, nessuno nuovo).
**Trigger inerti:** il bottone hamburger non naviga da nessuna parte — resta `<button type="button">`, non un `<a>`.

**Mappa completa dei link:**

| Zona | Voce | Destinazione | Note |
|---|---|---|---|
| desktop sinistra | logo "HS Agency" | — | segnaposto testuale, non è un link |
| desktop centro | Il costo | `index.html#problema` | sezione 02, rinominata da "Problema" il 14/09/2026; ancora assoluta dal 14/09/2026 |
| desktop centro | La soluzione | `index.html#soluzione` | sezione 03, rinominata da "Soluzione" il 14/09/2026; ancora assoluta dal 14/09/2026 |
| desktop centro | Il nostro metodo | `index.html#metodo` | rinominata da "Metodo" il 14/09/2026; ancora assoluta dal 14/09/2026 |
| desktop centro | Perché sceglierci | `index.html#perche-noi` | rinominata da "Perché noi" il 14/09/2026; ancora assoluta dal 14/09/2026 |
| desktop destra | CTA — "Consulenza gratuita" su `index.html`, **"Chiamaci"** su `modulo.html` | `modulo.html` · `tel:+393920660255` | CTA diversa per pagina, dal 14/09/2026 — vedi nota sotto |
| desktop destra | hamburger | — | solo ≤900px, apre `#nav-mobile` |
| menu mobile | gli stessi 4 link sopra | stesse destinazioni assolute | impilati verticalmente nel pannello |

**Aggiornato 14/09/2026:** tolti "Il team" (`#team`), "Consulenza" (`#consulenza`) e poi "Garanzia" (`#garanzia`), su richiesta di Simone — restano 4 link. Gli `id="team"`, `id="consulenza"` e `id="garanzia"` sulle sezioni 06, 08 e 07 **non sono stati tolti dal codice**: durante la modifica è emerso che `LAVORO-GROSSO.md` §2.3 (Fronte 5 di `STATO.md`, tracciamento) li riusa per l'evento di "sezione vista" — toglierli avrebbe rotto quella roadmap. Restano nel DOM, semplicemente non più linkati da questa barra. "Soluzione" rinominata "La soluzione", stessa ancora.

**Aggiornato 14/09/2026 (2):** la stessa barra ora vive anche su `sito/modulo.html` (prima era solo logo). Differenza unica: la CTA. Su `index.html` resta "Consulenza gratuita" → `modulo.html`; su `modulo.html` è **"Chiamaci"** → `tel:+393920660255`. La scelta fra i due numeri di `CLIENTE.md` §1 non aveva un criterio dato da Simone: preso il primo, segnalato — si corregge in un attimo se non va bene. `sito/modulo.html` ha ricevuto anche `<script src="assets/app.js">`, prima assente: serve per l'hamburger.

**Stati (link di navigazione):** riposo `#4A4740` (colore corpo, da colore titolo il 14/09/2026 — richiesta di Simone) · hover `#187C31` (ottone) · fuoco da tastiera `#187C31` + outline 2px ottone a 3px di distanza · nessuno stato attivo/corrente (la pagina non traccia la sezione in vista).

## 3. Footer

**Struttura (dal 14/09/2026 (3) — impaginazione B della tavola `design/tavola-footer.html`, scelta da Simone):**
quattro colonne dentro `.w` (griglia `1.5fr 1fr 1.15fr 1.35fr`, gap 32px), più una **riga legale** sotto, staccata solo da `margin-top:16px` (il `border-top` iniziale è stato tolto il 14/09/2026 (6): allargava troppo il footer).
Fondo `var(--bianco)` — deciso avorio in un primo momento (territorio B, §4 di `DESIGN-BRIEF.md`), corretto in bianco da Simone a vista sul render reale, 14/09/2026 (5). Resta il `border-top` di 1px.
Padding 44px sopra e 24px sotto · testo 15px · riga legale 13,5px.

**Identico su tutte e tre le pagine, con un'eccezione dichiarata (14/09/2026 (7)):** il link "Consulenza gratuita →" della colonna Parliamone resta solo su `index.html`. Su `modulo.html` (ci si è già) e `grazie.html` (la richiesta è già stata inviata) rimandare al modulo non ha senso — tolto il link su richiesta di Simone, la colonna resta con occhiello e riga di invito, senza azione. Deroga al principio "footer identico su ogni pagina" di `web-design`, motivata: stesso perimetro già usato per la CTA della barra alta (§2).

| # | Colonna | Contenuto |
|---|---|---|
| 1 | marchio | logo "AlbergADV" (serif 24px) · riga di posizionamento · zona con icona segnaposto |
| 2 | Pagina | occhiello + le 4 ancore impilate |
| 3 | Contatti | occhiello + due numeri con icona + "Scrivici" con icona busta |
| 4 | Parliamone | occhiello + una riga di invito + link testuale alla pagina modulo |
| — | riga legale | © a sinistra, privacy e cookie a destra |

**Mobile (≤900px):** le colonne vanno a **due per riga**, mai in colonna unica — la colonna unica lasciava vuoti larghi fra i gruppi, bocciata da Simone a vista il 14/09/2026. Marchio e "Parliamone" prendono tutta la larghezza (`grid-column: 1 / -1`), "Pagina" e "Contatti" restano affiancate. Riga legale impilata a sinistra.

**Niente bottone CTA nel footer:** su `index.html` la sezione 08 chiude con il suo bottone appena sopra, e due bottoni attaccati si annullano. La quarta colonna porta un **link testuale** in `var(--ottone)`, non un secondo bottone.

**Mappa completa dei link:**

| Colonna | Voce | Destinazione | Anchor text |
|---|---|---|---|
| marchio | logo | — | testo, non un link |
| Pagina | Il costo | `index.html#problema` | "Il costo" |
| Pagina | La soluzione | `index.html#soluzione` | "La soluzione" |
| Pagina | Il nostro metodo | `index.html#metodo` | "Il nostro metodo" |
| Pagina | Perché sceglierci | `index.html#perche-noi` | "Perché sceglierci" |
| Contatti | icona + numero | `tel:+393920660255` | "392 066 0255" — reale, dato da Simone il 14/09/2026 |
| Contatti | icona + numero | `tel:+393923850668` | "392 385 0668" — reale, dato da Simone il 14/09/2026 |
| Contatti | icona busta + testo | `mailto:info@alberg-adv.com` | "Scrivici" — reale dal 14/09/2026 (8), dato da Simone (`CLIENTE.md` §1) |
| Parliamone | link testuale — solo `index.html` dal 14/09/2026 (7) | `modulo.html` | "Consulenza gratuita →" |
| riga legale | Privacy policy | `#` (segnaposto) | "Privacy policy" |
| riga legale | Cookie policy | `#` (segnaposto) | "Cookie policy" |

Le quattro voci di "Pagina" usano **gli stessi testi e le stesse ancore assolute della barra alta**: se una cambia lì, cambia anche qui.

**Copy nuovo introdotto qui** (scritto da Claude, approvato da Simone il 14/09/2026):
- riga sotto il logo: "Più prenotazioni dirette, meno commissioni alle OTA."
- zona: "Lavoriamo in tutta Italia" — nessun NAP, `CLIENTE.md` §2 parla di albergatori italiani
- colonna 4: "Ti diciamo subito se c'è utile recuperabile. Senza impegno."

**Tolto dal footer il 14/09/2026 (3):** il segnaposto visibile `[RAGIONE SOCIALE · P.IVA · CONTATTI]`, che finiva online in chiaro su tutte e tre le pagine. Al suo posto "© 2026 AlbergADV" e un commento nel codice che dice dove va la partita IVA quando esisterà.

**Occhielli di footer a 11px** — deroga locale alla scala di `DESIGN-BRIEF.md` §5, che li vuole 18px: a 18px schiacciavano le voci sotto. Registrata in `DESIGN-BRIEF.md` §19. (Corretto 14/09/2026 (4): questo file diceva 12px, mai allineato agli 11px della tavola scelta — `.f-occhiello{font-size:11px}` in `design/tavola-footer.html`.)

**NAP nel footer:** non presente. Scope SEO ridotto per questa landing (`DESIGN-BRIEF.md` §15): niente NAP, niente formula local-seo.

**Regole SEO che ricadono qui:** nessuna — fuori scope per questa landing (`DESIGN-BRIEF.md` §15). Le icone di contatto e i link privacy/cookie non contano come interlinking (footer e navbar non contano mai, per `local-seo`).

## 4. Interlinking cross-page — quadro d'insieme

| Da | A | Dove nel documento | Anchor text | Stato |
|---|---|---|---|---|
| `index.html` (barra, hero, sezioni 02/03/05/07/08) | `modulo.html` | CTA "Consulenza gratuita" | "Consulenza gratuita" | ✅ chiuso 14/09/2026, non toccato da questo lavoro |

I 4 link della barra e del pannello mobile **non entrano in questa tabella**: sono ancore sulla stessa pagina, non interlinking fra pagine.

**Regole:**
- La barra e il pannello mobile non linkano fuori da `index.html`: solo la CTA lo fa, invariata.
- Non si forza: nessun link aggiunto oltre a quelli richiesti.
- Densità: n/d — questa landing non ha link contestuali nel corpo, solo le CTA ripetute già esistenti.

## 5. Elementi predisposti ma inerti

| Elemento | Dove | Diventerà link a | Quando |
|---|---|---|---|
| Privacy policy | footer di `index.html` e `modulo.html` | la pagina privacy vera | quando la pagina esiste (`CLIENTE.md` §5) |
| Cookie policy | footer di `index.html` e `modulo.html` | la pagina cookie vera | quando la pagina esiste (`CLIENTE.md` §5) |

**Chiuso 14/09/2026:** i due numeri di telefono sono arrivati (Simone, `CLIENTE.md` §1) e i link `tel:` sono già veri in `sito/index.html` — non più in questa tabella.

## 6. Modifiche alle pagine esistenti — elenco esplicito

1. `sito/index.html` — barra alta rifatta: aggiunti link di navigazione (desktop) verso le sezioni (7 inizialmente, ridotti a 5 togliendo "Il team" e "Consulenza", poi a 4 togliendo "Garanzia" — tutti il 14/09/2026; "Problema" rinominato "Il costo", "Soluzione" rinominato "La soluzione"), bottone hamburger e pannello mobile sotto i 900px, barra `sticky`. Ancore diventate assolute (`index.html#...`) il 14/09/2026 (2). Aggiunto `id` alle sezioni 02-08 (nessuno sulla 01) — tutti e sette restano nel codice anche dopo la riduzione dei link, perché `LAVORO-GROSSO.md` §2.3 li riusa per il tracciamento. Footer: aggiunte due icone di contatto segnaposto (telefono, email), `href="#"`.
2. `sito/assets/style.css` — stili dei nuovi elementi (§2 e §3 sopra), riuso del breakpoint 900px già esistente.
3. `sito/assets/app.js` — nuovo blocco che apre/chiude il pannello mobile.
4. `sito/modulo.html` — **14/09/2026 (2):** barra alta portata da "solo logo" alla stessa di `index.html` (4 link assoluti + hamburger/pannello), CTA "Chiamaci" (`tel:+393920660255`) al posto di "Consulenza gratuita". Aggiunto `<script src="assets/app.js">`, prima assente.
5. `sito/grazie.html` — **14/09/2026 (2):** barra a solo logo, ora **centrato** (classe `.barra-solo-logo`), prima era a sinistra.
6. `sito/index.html`, `sito/modulo.html`, `sito/grazie.html` — **14/09/2026 (3): footer rifatto** su tutte e tre, come da §3. Dalla riga unica a quattro colonne più riga legale. Tolto il segnaposto legale visibile, aggiunte la zona con icona, le quattro ancore e la colonna "Parliamone". Il blocco `<footer>` è l'unica parte di ciascuna pagina toccata. **14/09/2026 (7):** su `modulo.html` e `grazie.html`, tolto il link "Consulenza gratuita →" dalla colonna Parliamone — non più identico su tutte e tre, vedi §3.
7. `sito/assets/style.css` — **14/09/2026 (3):** blocco footer riscritto (griglia, occhielli 11px, stati dei link, fondo avorio) e righe footer dentro la media query 900px già esistente.

**Non toccare:** copy delle sezioni 01-08, layout delle sezioni, le altre CTA (restano come sono oggi), schema JSON-LD, struttura delle sezioni, title/meta/canonical.

## 7. Ridondanze accettate

| Ridondanza | Dove | Perché si mantiene |
|---|---|---|
| La CTA "Consulenza gratuita" compare nella barra e altre 6 volte nel corpo della pagina | `sito/index.html` | struttura del wireframe, non di questo lavoro: ogni sezione ha la sua CTA di chiusura |

## 8. Segnalato ma NON toccato

| # | Cosa | Dove | Impatto | Rimando |
|---|---|---|---|---|
*(Nessuna voce aperta: la riga sulla divergenza di `sito/modulo.html` — barra senza link, footer senza icone — era qui dal 14/09/2026, risolta lo stesso giorno quando Simone ha chiesto di montare la stessa barra anche su `modulo.html`; il footer risultava già allineato.)*

## 9. Scartate

| Alternativa | Scartata perché | Data |
|---|---|---|
| Ancore assolute (`index.html#problema`) come da regola di sistema | la barra con questi link esiste solo su `index.html`: nessun rischio di divergenza fra pagine, le ancore bare bastano | 14/09/2026 |
| Icone di contatto footer a 32px, come le sette icone di contenuto | sproporzionate accanto al testo 14px del footer; scelti 20px | 14/09/2026 |
| Pannello mobile con `hidden` tolto/rimesso senza ritardo, transizione via classe | avrebbe reso i link tabbabili-ma-invisibili per la durata della chiusura; scelto il ritardo di 260ms sincronizzato con la transizione | 14/09/2026 |
| Footer a tre colonne, prima proposta (marchio · Pagina · Contatti) | vuoto su desktop, e su mobile una colonna sola con spazi larghi fra i gruppi — bocciato da Simone a vista | 14/09/2026 |
| Impaginazione A — marchio grande a sinistra, voci raccolte a destra | il vuoto restava, solo concentrato in mezzo; footer più alto | 14/09/2026 |
| Impaginazione C — fascia larga con la frase grande e le voci su una riga | le ancore in fila pesavano troppo poco rispetto ai contatti | 14/09/2026 |
| Bottone CTA dentro il footer | la sezione 08 chiude con il suo bottone appena sopra: due bottoni attaccati si annullano | 14/09/2026 |

## 10. Storico decisioni (append-only)

- **14/09/2026 (3) — footer rifatto:** Simone ha giudicato brutto il footer a riga unica e ha chiesto un footer vero, con logo, ancore, numeri, mail e zona, con icone. La prima proposta a tre colonne è stata bocciata a vista: vuota su desktop, una colonna sola con spazi larghi su mobile. Costruita la tavola `design/tavola-footer.html` con tre impaginazioni (A marchio a sinistra, B quattro colonne, C fascia larga), ognuna con il suo mobile a fianco. Scelta **B**. Su mobile, in tutte e tre, le voci vanno a due colonne: la colonna unica non si usa più. Il footer nuovo vale su `index.html`, `modulo.html` e `grazie.html`, che oggi hanno già lo stesso footer. §3, §5, §6 e §9 aggiornati.

- **14/09/2026 — barra alta e footer:** su richiesta di Simone, applicata l'eccezione concessa il 13/09/2026 a `local-seo` (le landing non toccano navbar/interlinking), solo per questo lavoro. Aggiunta navigazione reale a 7 sezioni nella barra di `sito/index.html` (link desktop + hamburger/pannello sotto i 900px) e due icone di contatto segnaposto nel footer (telefono, email, `href="#"`). Creato questo file dal template perché prima non esisteva un documento per navbar/footer/interlinking di questa landing. `sito/modulo.html` non toccata: divergenza segnalata in §8.
- **14/09/2026 — barra sticky:** su richiesta di Simone, `.barra{position:sticky;top:0}`. §2 aggiornato.
- **14/09/2026 — tolti "Il team" e "Consulenza" dalla barra:** su richiesta di Simone, da 7 a 5 link (restano Il costo, Soluzione, Metodo, Perché noi, Garanzia). Gli `id="team"` e `id="consulenza"` sulle sezioni 06 e 08 **restano nel codice**, non tolti: scoperto durante la modifica che `LAVORO-GROSSO.md` §2.3 (Fronte 5, tracciamento) li riusa per l'evento di "sezione vista" — toglierli avrebbe rotto quella roadmap scritta da un'altra sessione. §2 e §6 aggiornati.
- **14/09/2026 — rinominata la voce "Problema" in "Il costo":** su richiesta di Simone, stessa ancora `#problema`, stessa sezione 02. §2 aggiornato.
- **14/09/2026 — due numeri di telefono nel footer:** Simone ha dato due numeri (392 066 0255 · 392 385 0668), registrati in `CLIENTE.md` §1. Ogni numero è un link `tel:` con icona e testo. Tolta la riga dell'icona telefono da §5 (non più inerte). L'icona email resta segnaposto. §3 e §5 aggiornati.
- **14/09/2026 — tolto "Garanzia", tolto il maiuscolo, "Soluzione" → "La soluzione":** su richiesta di Simone, i link passano da 5 a 4. `id="garanzia"` resta sulla sezione 07 (riusato dal tracciamento, stesso motivo di team/consulenza). §1, §2 e §6 aggiornati.
- **14/09/2026 — barra completa su `modulo.html`, barra minima centrata su `grazie.html`:** su richiesta di Simone, `modulo.html` smette di essere "solo logo" e monta la stessa barra di `index.html`, con l'unica differenza della CTA — "Chiamaci" (`tel:+393920660255`, primo dei due numeri disponibili, nessun criterio dato per scegliere) al posto di "Consulenza gratuita". Conseguenza tecnica: le ancore dei 4 link diventano assolute (`index.html#...`) su entrambe le pagine, la vecchia deroga per ancore bare (§1) non vale più. `grazie.html`, che prima replicava la barra "solo logo" di `modulo.html`, resta l'unica pagina a barra minima — ora esplicitamente **centrata**. Risolta la riga di §8 sulla divergenza `modulo.html`/`index.html`. §1, §2, §6, §8 aggiornati.
- **14/09/2026 — "Metodo" → "Il nostro metodo", "Perché noi" → "Perché sceglierci":** su richiesta di Simone, rinominate le ultime due voci della barra. Stesse ancore. §2 aggiornato.
- **14/09/2026 (4) — footer applicato al codice:** l'impaginazione B (già decisa e scritta qui) è stata costruita su `sito/index.html`, `sito/modulo.html`, `sito/grazie.html` — stesso `<footer>` identico sulle tre, e `sito/assets/style.css` (blocco footer sostituito, righe aggiunte nella media query 900px già esistente). Corretti due "occhielli 12px" rimasti in questo file (§3, §6): la tavola scelta usa 11px, mai allineato. Nuovo componente "Footer" registrato in `DESIGN-BRIEF.md` §9, deroga in §19.
- **14/09/2026 (5) — tre correzioni sul render reale:** Simone ha visto il footer costruito nel Browser pane e ha chiesto tre cambi. Fondo da avorio a **bianco** (`var(--bianco)`). Il link testuale "Consulenza gratuita →" della colonna Parliamone da ottone a **navy** (`var(--navy)`): è una CTA a tutti gli effetti, prende il colore delle CTA. Spaziatura del footer ridotta ("si compatta"): `footer .w` da `44px 24px` a `36px 20px`, `.f-legale` da `margin-top:36px;padding-top:20px` a `24px`/`16px`. §3 aggiornato, `DESIGN-BRIEF.md` §9 allineato.
- **14/09/2026 (6) — tolto il bordo sopra la riga legale:** Simone ha segnalato che la linea divisoria sopra "© 2026 AlbergADV" allargava troppo il footer. Chiarito con una domanda (non uno spostamento della riga legale, solo la spaziatura/il bordo sopra di essa) — tolti `border-top` e `padding-top` da `.f-legale`, resta solo `margin-top:16px`. Il testo "© 2026 AlbergADV" non è stato toccato. Footer verificato via `getBoundingClientRect`: da ~268px a ~243px di altezza. §3 aggiornato.
- **14/09/2026 (7) — il CTA di "Parliamone" solo su `index.html`:** su richiesta di Simone, tolto il link "Consulenza gratuita →" dal footer di `modulo.html` (ci si è già) e `grazie.html` (la richiesta è già stata inviata) — rimandare al modulo non ha senso su quelle due pagine. Resta solo su `index.html`. La colonna "Parliamone" su `modulo.html`/`grazie.html` mantiene occhiello e riga di invito, senza link. Il footer non è più identico byte-per-byte sulle tre pagine: deroga dichiarata in §3, stesso perimetro già usato per la CTA della barra alta (§2). Copy della riga di invito non toccato: resta "Ti diciamo subito se c'è utile recuperabile. Senza impegno." anche dove non c'è più il link — possibile follow-up se Simone lo vuole riscritto, non richiesto oggi. §3 e §6 aggiornati.
- **14/09/2026 (8) — email reale:** Simone ha dato l'indirizzo info@alberg-adv.com. Registrato in `CLIENTE.md` §1. Il link "Scrivici" del footer (icona busta, colonna Contatti) passa da `href="#"` a `mailto:info@alberg-adv.com` su tutte e tre le pagine — non più segnaposto. Tolta la riga "Scrivici" da §5 (non più inerte). §3 aggiornato.
