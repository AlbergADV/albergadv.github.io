# CLIENTE — landing hotel

**Compilato:** 13/09/2026
**Aggiornato:** 14/09/2026 — account GA4 creato, Pixel Meta escluso dallo scope (§10); nome dell'attività tolto dove non necessario, non ancora deciso (§1); dominio confermato, repository e hosting ancora inesistenti (§1, §6-7)

> Quello che di questo progetto **non cambia**: chi è, cosa fa, com'è fatto il sito, cosa non si tocca mai.
> Si legge **all'inizio di ogni sessione**, prima di qualsiasi altra cosa.

**Regola d'uso:** questo file **non contiene decisioni di design né lavoro in corso**. Le decisioni nostre stanno nei brief, il lavoro in corso in `STATO.md`.

**Attenzione:** qui il cliente è Simone stesso. Questa landing è dell'agenzia, non di un cliente esterno.

---

# 1. Anagrafica

- **Nome dell'attività:** `[da definire]` — non più "HS Agency" (14/09/2026), il nome ufficiale non è ancora deciso
- **Referente:** Simone
- **Settore / nicchia:** agenzia di marketing, nicchia hotel e strutture ricettive
- **Dominio:** Alberg-ADV.com (confermato da Simone, 14/09/2026)

**NAP:** `[da compilare]` — non serve su questa landing (scope SEO ridotto).

- **Telefono:** 392 066 0255 · 392 385 0668 (dati da Simone, 14/09/2026)
- **Email:** info@alberg-adv.com (data da Simone, 14/09/2026)
- **Google Business Profile:** `[da compilare]`
- **Partita IVA / dati legali:** `[da compilare]` — servono nel footer

# 2. Cosa fa

- **Servizio offerto in questa nicchia:** Google Ads e Meta Ads con tracciamento, più scheda Google Business. Niente SEO.
- **Obiettivo del servizio:** portare più persone e spostare le prenotazioni dai portali al canale diretto.
- **Pubblico:** albergatori italiani, strutture medio-grandi e catene, con un sistema di prenotazione già in piedi.
- **Evento di conversione del servizio:** la prenotazione, che avviene sul sistema di prenotazione, non sul sito dell'hotel.
- **Concorrenti guardati:** BastaOTA (bastaota.com), Gourmet Marketing (gourmetmarketing.net), Sojern, Bookassist.

# 3. Fatti verificati

Dati reali su cui il copy può appoggiarsi. **Fuori da questa lista non si inventa.**

| Dato | Valore | Fonte | Verificato il |
|---|---|---|---|

⚠️ La tabella è vuota di proposito. I numeri delle commissioni citati nel wireframe (`[€ ___]`) **non sono stati forniti**. Finché non arrivano, restano segnaposto: non si inventano e non si stimano.

**Da non scrivere mai:**
- Nessun numero di risultato, percentuale o cifra che non sia in questa tabella.

# 4. Preferenze fisse

| Preferenza | Perché | Detta il |
|---|---|---|
| La struttura del wireframe Figma non si cambia, si veste soltanto | il wireframe è la fonte della struttura | 13/09/2026 |
| Nessun fondo scuro o navy in pagina | ordine e leggibilità | 13/09/2026 |
| Il blu navy si usa solo per le CTA | il bottone deve essere l'unica cosa blu | 13/09/2026 |
| Nessuna evidenziazione di parole dentro i testi | la pagina deve restare facile da leggere | 13/09/2026 |
| I testi si stendono per tutta la larghezza, mai chiusi in colonne strette o centrate | scelta esplicita | 13/09/2026 |

# 5. Vincoli legali e di immagine

- **Foto:** nessuna disponibile al momento. Le due foto del team non esistono.
- **Claim:** la garanzia dichiarata nel copy ("continuiamo a lavorare fino al raggiungimento dell'obiettivo") va tenuta esattamente com'è nel wireframe. Non si rafforza e non si annacqua.
- **Privacy / cookie:** i due link esistono nel wireframe. Le pagine `[da compilare]`.

---

# 6. Come è fatto il sito

- **Stack:** `[da compilare]` — la landing non è ancora costruita
- **Dove sta il codice:** `C:\Users\sscir\Desktop\HS Agency\landing page hotel\`
- **Repository git:** non esiste ancora (confermato da Simone, 14/09/2026)
- **Hosting:** non esiste ancora (confermato da Simone, 14/09/2026)

**Struttura della cartella di progetto:**
```
landing page hotel\
├── CLIENTE.md          ← questo file
├── STATO.md            ← lavoro in corso
├── brief\
│   ├── DESIGN-BRIEF.md
│   └── PAGE-BRIEF-LANDING.md
├── design\
│   └── tavola-landing.html   ← tavola approvata, NON va online
└── [cartella del sito]       ← SOLO questo va online
```

**La regola che separa online e non online:** `CLIENTE.md`, `STATO.md`, `brief\` e `design\` non vanno mai online.

# 7. Come si pubblica

`[da compilare]` — non ancora deciso. Il dominio (Alberg-ADV.com) è noto, ma senza repository né hosting il sito non è ancora pubblicato da nessuna parte (14/09/2026).

# 8. Cosa non si tocca mai

| Cosa | Dove | Perché | Quando si potrà toccare |
|---|---|---|---|
| Il copy del wireframe | tutte le sezioni | è il testo approvato | quando Simone lo cambia |
| La tavola in `design\` | `design\tavola-landing.html` | è materiale in ingresso, non il sito | mai: si aggiorna solo da chat |

- **Nessun commit o push senza richiesta esplicita.**

# 9. Se qualcosa non va

*(Nessun guasto registrato su questo progetto.)*

# 10. Tracciamento e strumenti collegati

- **Analytics:** GA4 attivo (14/09/2026). Account "Landing hotel" (ID 407764204) → proprietà "Landing hotel" (ID 553841503) → stream web "Landing hotel - Web" (ID 15772937612). ID di misurazione: `G-HZLFF4B39Y`. Nomi senza "HS Agency" (14/09/2026): il nome dell'attività non è ancora deciso, vedi sopra. URL dello stream impostato su un segnaposto (`https://landing-hotel.placeholder.it`) perché il dominio vero non è ancora deciso (§1, §7) — si corregge in un clic quando arriva.
- **Pixel Meta / CAPI:** fuori scope (decisione di Simone, 14/09/2026) — le ads di questa landing sono solo su Google Ads, Meta non deve ricevere nessun dato. Un Business Manager Meta di HS Agency esiste già (usato per altro, non questa landing): non si tocca. Il prompt consegnato per `sito/grazie.html` conteneva una chiamata `fbq('track','Lead')` protetta: da togliere quando si incolla in Claude Code, non serve più.
- **Search Console:** `[da compilare]`
- **Invio modulo (EmailJS):** account collegato a s.scirebusiness@gmail.com. Servizio Gmail "modulo hotel 1.0" — Service ID `service_c8rmxaa`. Template "Modulo consulenza hotel" — Template ID `template_1dsucfr`. Public Key `1Fj-x2-x_BLhzPp30` (14/09/2026).

---

# 11. Storico aggiornamenti (append-only)

- **13/09/2026:** file creato. Anagrafica e parte tecnica in gran parte da compilare: la cartella era vuota e il progetto parte da zero.
- **14/09/2026:** aggiunto §10 — account EmailJS creato e configurato (servizio Gmail + template), punto di scatto dell'evento Lead deciso.
- **14/09/2026:** aggiunti i due numeri di telefono (§1), dati da Simone. Email ancora da fornire.
- **14/09/2026:** creato l'account GA4 (§10) — Fase 1.1 di `LAVORO-GROSSO.md`, lavoro grosso "Tracciamento completo del funnel".
- **14/09/2026:** Pixel Meta escluso dallo scope (D9 in `LAVORO-GROSSO.md`) — le ads di questa landing sono solo su Google Ads, Meta non riceve dati.
- **14/09/2026:** nome dell'attività tolto dal §1 e dal titolo di questo file e di `STATO.md` — non più "HS Agency" (D11 in `LAVORO-GROSSO.md`), il nome ufficiale non è ancora deciso. Rinominati anche account, proprietà e stream GA4 in §10. Il percorso della cartella sul PC (§6) resta com'è: è un dato di fatto, non un nome che scegliamo noi.
- **14/09/2026:** dominio confermato — Alberg-ADV.com (§1). Repository e hosting ancora non esistono (§6): il sito non è pubblicato da nessuna parte. §7 aggiornato di conseguenza.
- **14/09/2026:** email confermata — info@alberg-adv.com (§1). Collegata al link "Scrivici" nel footer di tutte e tre le pagine, non più segnaposto.
