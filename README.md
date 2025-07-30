# Wine Experience Layout Test


## 1. Requisiti e vincoli

**Vincoli rispettati:**
- Solo HTML, CSS e JavaScript vanilla: nessun framework, preprocessore, build tool, linguaggio compilato o libreria esterna.
- Nessuna operazione di compilazione o trasformazione del codice: il sito è statico e portabile.
- L’uso opzionale di un server locale (es. `python -m http.server`) serve esclusivamente a consentire ai Web Components di caricare template via fetch, come richiesto dalle policy di sicurezza dei browser.
- I font utilizzati possono differire da quelli del PDF, come da istruzioni.

---

## 2. Struttura del progetto

Il progetto è organizzato in modo modulare e scalabile:
- Tutte le componenti principali sono suddivise in file dedicati all’interno delle cartelle `components/`, `css/` e `js/`.
- L’HTML principale (`index.html`) è minimale e facilmente leggibile.
- I file CSS sono modulari e separati per componente e responsività.
- I file JS sono dedicati ai Web Components e alla logica di rendering.

I commenti all’interno dei file HTML e JS guidano la comprensione della struttura e la transizione tra modalità statica e modulare.

---

## 3. Modalità d’uso

### Modalità statica (massima compatibilità)
Basta aprire `index.html` nel browser per visualizzare il sito. Non è richiesto alcun server locale.

### Modalità Web Components (modularità avanzata)
Per attivare la versione completamente modulare, che sfrutta i Web Components e carica i template tramite fetch, è necessario utilizzare un server locale (ad esempio):

```
python -m http.server 5500
```
oppure
```
npx http-server -p 5500
```

Questo requisito non infrange i vincoli imposti, in quanto non comporta alcuna compilazione, build o trasformazione del codice: serve solo a superare le restrizioni di sicurezza del browser sui file locali.

I commenti nel codice ti guideranno passo-passo nella transizione e nell’utilizzo delle due modalità.

---

## 4. Modularità e futuri sviluppi

La struttura del progetto è già pronta per una facile transizione verso l’utilizzo di Web Components personalizzati. I file JS dedicati (`js/navbar.js`, `js/hero.js`, `js/card.js`) contengono già la definizione dei Web Components per ciascuna sezione. Per migliorare ulteriormente la pulizia, leggibilità e manutenibilità del codice, sarà sufficiente:

- Importare i file JS dei Web Components nell’`index.html` (ad esempio con `<script src="js/navbar.js"></script>`, ecc.).
- Sostituire il markup statico delle sezioni con i rispettivi tag custom (es. `<navbar-component></navbar-component>`, `<hero-component></hero-component>`, `<card-component ...></card-component>`).
- In questo modo, l’`index.html` risulterà molto più snello e leggibile, e ogni componente sarà gestito in modo modulare e riutilizzabile.

La transizione è resa ancora più semplice dalla presenza di commenti nel codice che spiegano esattamente come procedere: la logica è già integrata e, per passare da una versione all’altra, basta decommentare alcune parti e commentarne/eliminarne altre seguendo le istruzioni fornite. Non è necessario riscrivere nulla: i Web Components sono già pronti per essere attivati e la modularizzazione della logica di rendering è già predisposta.

---

## 5. CSS & Responsività

Tutto il CSS è stato accuratamente modularizzato in file dedicati (`css/navbar.css`, `css/hero.css`, `css/cards.css`, `css/responsive.css`), garantendo ordine e facilità di manutenzione. La parte responsive è stata curata nei dettagli per assicurare un’esperienza utente equivalente e ottimale su tutti i dispositivi, desktop e mobile.

---


## 6. Note finali

- Tutti i commenti interni al codice sono scritti in inglese, in linea con le best practice internazionali per progetti tecnici e per facilitare la collaborazione in team eterogenei o futuri sviluppi open source.
