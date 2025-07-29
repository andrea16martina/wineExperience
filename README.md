
# Wine Experience Layout Test

## Wine Experience Layout Test


### Project Structure & Scalability
Il progetto è sviluppato in puro HTML, CSS e JavaScript vanilla, senza framework, preprocessori o librerie esterne. Tutte le componenti principali sono modulari e attualmente incluse direttamente in `index.html` per la massima compatibilità e semplicità.

#### Futuri sviluppi: Web Components modulari
La struttura del progetto è già pronta per una facile evoluzione verso l'utilizzo di Web Components personalizzati. I file JS dedicati (`js/navbar.js`, `js/hero.js`, `js/card.js`) contengono già la definizione dei Web Components per ciascuna sezione. Per migliorare ulteriormente la pulizia, leggibilità e manutenibilità del codice, sarà sufficiente:

- Importare i file JS dei Web Components nell'`index.html` (ad esempio con `<script src="js/navbar.js"></script>`, ecc.).
- Sostituire il markup statico delle sezioni con i rispettivi tag custom (es. `<navbar-component></navbar-component>`, `<hero-component></hero-component>`, `<card-component ...></card-component>`).
- In questo modo, l'`index.html` risulterà molto più snello e leggibile, e ogni componente sarà gestito in modo modulare e riutilizzabile.

Questa transizione è immediata grazie all'organizzazione attuale: non è necessario riscrivere nulla, basta attivare i Web Components già implementati e modularizzare la logica di rendering.

### CSS & Responsività
Tutto il CSS è stato accuratamente modularizzato in file dedicati (`css/navbar.css`, `css/hero.css`, `css/cards.css`, `css/responsive.css`), garantendo ordine e facilità di manutenzione. La parte responsive è stata curata nei dettagli per assicurare un'esperienza utente equivalente e ottimale su tutti i dispositivi, desktop e mobile.


### Utilizzo
- Apri semplicemente `index.html` nel browser per visualizzare il sito.
- Per modifiche o estensioni, aggiorna direttamente il markup in `index.html` e/o i file CSS dedicati.
- Il sito è statico, portabile e compatibile con qualsiasi browser moderno. Non è richiesto alcun server locale.
- Per una versione ancora più modulare, importa i file JS dei Web Components e usa i tag custom già pronti: la transizione è semplice e immediata.

### Note
- I font utilizzati possono differire da quelli del PDF originale, come consentito dal test.
- Il progetto rispetta tutti i vincoli richiesti: nessun framework, preprocessore, build tool o libreria esterna.

---