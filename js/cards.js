/**
 * cards.js
 * 
 * Dynamically renders wine experience cards in the `.card-grid` container.
 * - Card data is defined in `cardData`.
 * - The `renderCards` function generates and inserts card elements into the DOM.
 * - The highest-priced card is rendered separately as a "special card".
 * - Comments explain how to use this logic with Web Components (`<card-component>`).
 * - SVG icons are included inline.
 * 
 * On DOMContentLoaded, `renderCards` is called.
 */
// Card data array and rendering logic
// This script dynamically renders cards in the .card-grid container

const cardData = [
    {
        img: "assets/img/topwines.png",
        duration: "60’",
        title: "3 WINES EXPERIENCE",
        desc: "Degustazione di tre vini al Rifugio del Vino e visita alla cantina e alla cantina",
        price: 25.00,
        vat: "IVA INCLUSA",
        icons: []
    },
    {
        img: "assets/img/latour.png",
        duration: "90’",
        title: "5 WINES EXPERIENCE",
        desc: "Degustazione di 5 vini del territorio presso il rifugio dei vini in cantina e barriccia",
        price: 34.00,
        vat: "IVA INCLUSA",
        icons: []
    },
    {
        img: "assets/img/winemakers.png",
        duration: "90’",
        title: "WINE AND CHEESE EXPERIENCE",
        desc: "Degustazione di 5 vini selezionati in abbinamento a 6 formaggi locali e visita alla cantina e barriccia",
        price: 45.00,
        vat: "IVA INCLUSA",
        icons: ["food"]
    },
    {
        img: "assets/img/latourex.png",
        duration: "90’",
        title: "CÔTEAU LA TOUR EXPERIENCE",
        desc: "Degustazione di 5 vini accompagnati da un tagliere della gastronomia locale e visita in cantina e barricaia. Tour del vigneto di Côteau e brindisi nella torre medievale",
        price: 346.00,
        vat: "IVA INCLUSA",
        icons: ["food", "lotus"]
    },   {
        img: "assets/img/3wines.png",
        duration: "100’",
        title: "TOP WINES EXPERIENCE",
        desc: "Degustazione di 5 vini di alta qualità accompagnati da un tagliere della gastronomia locale e visita alla cantina e barricaia",
        price: 65.00,
        vat: "IVA INCLUSA",
        icons: ["food"]
    },
    {
        img: "assets/img/5wines.png",
        duration: "120’",
        title: "CÔTEAU LA TOUR EXPERIENCE",
        desc: "Degustazione di 5 vini accompagnati da un tagliere della gastronomia locale e visita in cantina e barricaia. Tour del vigneto di Côteau e brindisi nella torre medievale",
        price: 75.00,
        vat: "IVA INCLUSA",
        icons: ["food"]
    },
    {
        img: "assets/img/wineandcheese.png",
        duration: "100’",
        title: "WINEMAKER’S EXPERIENCE",
        desc: "Scopri il mondo, raccontato dal nostro enologo Raffaele, dai vigneti alla cantina.",
        price: 90.00,
        vat: "IVA INCLUSA",
        icons: ["food"]
    }
];
const maxPrice = Math.max(...cardData.map(card => card.price));

function renderCards() {
  const grid = document.querySelector('.card-grid');
  if (!grid) return;
  grid.innerHTML = '';

  // Filter out the max price card
  const normalCards = cardData.filter(card => card.price !== maxPrice);
  const specialCard = cardData.find(card => card.price === maxPrice);

  /*
    The first forEach loop below is for the static version of the cards: it dynamically generates standard HTML elements (div.card) and inserts them into the grid.
    This approach does NOT use web components and relies on standard markup and CSS classes.
  */
  normalCards.forEach(card => {
    const el = document.createElement('div');
    el.className = 'card';
    el.innerHTML = `
      <div class="card__img-wrapper">
        <img class="card__img" src="${card.img}" alt="Experience image" />
      </div>
      <div class="card__info">
        <div class="card__meta">
          <span class="card__icon card__icon--wine" title="Wine"><svg width="1em" height="1em" viewBox="0 0 320 512" fill="none"><path d="M232 464h-40.01v-117.3c68.52-15.88 118-79.86 111.4-154.1L287.5 14.5C286.8 6.25 279.9 0 271.8 0H48.23C40.1 0 33.22 6.25 32.47 14.5L16.6 192.6c-6.625 74.25 42.88 138.2 111.4 154.2V464H87.98c-22.13 0-40.01 17.88-40.01 40c0 4.375 3.625 8 8.002 8h208c4.377 0 8.002-3.625 8.002-8C272 481.9 254.1 464 232 464zM180.4 300.2c-13.64 3.16-27.84 3.148-41.48-.0371C91.88 289.2 60.09 245.2 64.38 197.1L77.7 48h164.6L255.6 197.2c4.279 48.01-27.5 91.93-74.46 102.8L180.4 300.2z" stroke="#888" stroke-width="32" fill="none"/></svg></span>
          ${card.icons.includes('food') ? `<span class="card__icon card__icon--food" title="Food"><svg width="1em" height="1em" viewBox="0 0 512 512" fill="none"><path d="M57.49,47.74,425.92,416.17a37.28,37.28,0,0,1,0,52.72h0a37.29,37.29,0,0,1-52.72,0l-90-91.55A32,32,0,0,1,274,354.91v-5.53a32,32,0,0,0-9.52-22.78l-11.62-10.73a32,32,0,0,0-29.8-7.44h0A48.53,48.53,0,0,1,176.5,295.8L91.07,210.36C40.39,159.68,21.74,83.15,57.49,47.74Z" style="fill:none;stroke:#888;stroke-linejoin:round;stroke-width:32px"></path><path d="M400,32l-77.25,77.25A64,64,0,0,0,304,154.51v14.86a16,16,0,0,1-4.69,11.32L288,192" style="fill:none;stroke:#888;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"></path><path d="M320,224l11.31-11.31A16,16,0,0,1,342.63,208h14.86a64,64,0,0,0,45.26-18.75L480,112" style="fill:none;stroke:#888;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"></path><line x1="440" y1="72" x2="360" y2="152" style="fill:none;stroke:#888;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"></line><path d="M200,368,100.28,468.28a40,40,0,0,1-56.56,0h0a40,40,0,0,1,0-56.56L128,328" style="fill:none;stroke:#888;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"></path></svg></span>` : ''}
          ${card.icons.includes('lotus') ? `<span class="card__icon card__icon--lotus" title="Lotus"><svg width="1em" height="1em" viewBox="0 0 256 256" fill="none"><rect width="256" height="256" fill="none"/><path d="M128,200c16,0,42.5-.2,72.9-17.8s40.3-39.5,43.4-50.8a7.9,7.9,0,0,0-5.7-9.8c-7.3-1.9-20.1-3.6-36.5.3" fill="none" stroke="#888" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M53.9,121.8c-16.4-3.8-29.2-2.1-36.5-.2a7.9,7.9,0,0,0-5.7,9.8c3.1,11.3,13,33.3,43.4,50.8S112,200,128,200" fill="none" stroke="#888" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M128,200s40-21.8,40-80c0-45.6-24.6-68.8-35.2-76.8a8.1,8.1,0,0,0-9.6,0C112.6,51.2,88,74.4,88,120,88,178.2,128,200,128,200Z" fill="none" stroke="#888" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M128,200c12-2.6,44.3-20.8,63.7-54.4s14.6-60.3,10.8-72a7.8,7.8,0,0,0-9.2-5.3,77.1,77.1,0,0,0-31.4,15.1" fill="none" stroke="#888" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M94.1,83.4A77.1,77.1,0,0,0,62.7,68.3a7.8,7.8,0,0,0-9.2,5.3c-3.8,11.7-8.6,38.5,10.8,72S116,197.4,128,200" fill="none" stroke="#888" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></svg></span>` : ''}
          <span class="card__icon card__icon--clock" title="Duration"><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#888" stroke-width="1.5" fill="none"/><path d="M12 7v5l3 3" stroke="#888" stroke-width="1.5" fill="none"/></svg></span><span class="card__duration">${card.duration}</span>
        </div>
        <h3 class="card__title">${card.title}</h3>
        <div class="card__divider"></div>
        <h4 class="card__desc">${card.desc}</h4>
        <div class="card__price-row">
          <div>
            <span class="card__price-label">PRICE</span>
            <span class="card__price"><b>&euro;${card.price.toLocaleString('it-IT',{minimumFractionDigits: 2})} per persona</b></span>
          </div>
          <span class="card__vat">${card.vat}</span>
        </div>
        <button class="card__btn">Details <span class="card__btn-arrow" style="display:inline-flex;vertical-align:middle;"><svg xmlns="http://www.w3.org/2000/svg" width="1.7em" height="1.7em" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/></svg></span></button>
      </div>
    `;
    grid.appendChild(el);
  });

  /*
    The second forEach loop below is for the version with web components.
    In this case, for each card, a <card-component> element is created and the necessary attributes are set.
    THIS CODE IS COMMENTED OUT: to use the web components version, uncomment this block and remove (or comment out) the one above.
  */
  /*
  normalCards.forEach(card => {
    const el = document.createElement('card-component');
    el.setAttribute('img', card.img);
    el.setAttribute('duration', card.duration);
    el.setAttribute('title', card.title);
    el.setAttribute('desc', card.desc);
    el.setAttribute('price', card.price.toFixed(2));
    el.setAttribute('vat', card.vat);
    if (card.icons.includes('food')) el.setAttribute('icon-food', '');
    if (card.icons.includes('lotus')) el.setAttribute('icon-lotus', '');
    grid.appendChild(el);
  });
  */

  // Render special card as last and unique row OUTSIDE the grid
  if (specialCard) {
    const el = document.createElement('div');
    el.className = 'special-card';
    el.innerHTML = `
      <div class="special-card__img-wrapper">
        <img class="special-card__img" src="${specialCard.img}" alt="Experience image" />
      </div>
      <div class="special-card__info">
        <div class="special-card__meta">
          <span class="special-card__icon special-card__icon--wine" title="Wine"><svg width="1em" height="1em" viewBox="0 0 320 512" fill="none"><path d="M232 464h-40.01v-117.3c68.52-15.88 118-79.86 111.4-154.1L287.5 14.5C286.8 6.25 279.9 0 271.8 0H48.23C40.1 0 33.22 6.25 32.47 14.5L16.6 192.6c-6.625 74.25 42.88 138.2 111.4 154.2V464H87.98c-22.13 0-40.01 17.88-40.01 40c0 4.375 3.625 8 8.002 8h208c4.377 0 8.002-3.625 8.002-8C272 481.9 254.1 464 232 464zM180.4 300.2c-13.64 3.16-27.84 3.148-41.48-.0371C91.88 289.2 60.09 245.2 64.38 197.1L77.7 48h164.6L255.6 197.2c4.279 48.01-27.5 91.93-74.46 102.8L180.4 300.2z" stroke="#888" stroke-width="32" fill="none"/></svg></span>
          ${specialCard.icons.includes('food') ? `<span class="special-card__icon special-card__icon--food" title="Food"><svg width="1em" height="1em" viewBox="0 0 512 512" fill="none"><path d="M57.49,47.74,425.92,416.17a37.28,37.28,0,0,1,0,52.72h0a37.29,37.29,0,0,1-52.72,0l-90-91.55A32,32,0,0,1,274,354.91v-5.53a32,32,0,0,0-9.52-22.78l-11.62-10.73a32,32,0,0,0-29.8-7.44h0A48.53,48.53,0,0,1,176.5,295.8L91.07,210.36C40.39,159.68,21.74,83.15,57.49,47.74Z" style="fill:none;stroke:#888;stroke-linejoin:round;stroke-width:32px"></path><path d="M400,32l-77.25,77.25A64,64,0,0,0,304,154.51v14.86a16,16,0,0,1-4.69,11.32L288,192" style="fill:none;stroke:#888;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"></path><path d="M320,224l11.31-11.31A16,16,0,0,1,342.63,208h14.86a64,64,0,0,0,45.26-18.75L480,112" style="fill:none;stroke:#888;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"></path><line x1="440" y1="72" x2="360" y2="152" style="fill:none;stroke:#888;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"></line><path d="M200,368,100.28,468.28a40,40,0,0,1-56.56,0h0a40,40,0,0,1,0-56.56L128,328" style="fill:none;stroke:#888;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"></path></svg></span>` : ''}
          ${specialCard.icons.includes('lotus') ? `<span class="special-card__icon special-card__icon--lotus" title="Lotus"><svg width="1em" height="1em" viewBox="0 0 256 256" fill="none"><rect width="256" height="256" fill="none"/><path d="M128,200c16,0,42.5-.2,72.9-17.8s40.3-39.5,43.4-50.8a7.9,7.9,0,0,0-5.7-9.8c-7.3-1.9-20.1-3.6-36.5.3" fill="none" stroke="#888" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M53.9,121.8c-16.4-3.8-29.2-2.1-36.5-.2a7.9,7.9,0,0,0-5.7,9.8c3.1,11.3,13,33.3,43.4,50.8S112,200,128,200" fill="none" stroke="#888" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M128,200s40-21.8,40-80c0-45.6-24.6-68.8-35.2-76.8a8.1,8.1,0,0,0-9.6,0C112.6,51.2,88,74.4,88,120,88,178.2,128,200,128,200Z" fill="none" stroke="#888" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M128,200c12-2.6,44.3-20.8,63.7-54.4s14.6-60.3,10.8-72a7.8,7.8,0,0,0-9.2-5.3,77.1,77.1,0,0,0-31.4,15.1" fill="none" stroke="#888" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M94.1,83.4A77.1,77.1,0,0,0,62.7,68.3a7.8,7.8,0,0,0-9.2,5.3c-3.8,11.7-8.6,38.5,10.8,72S116,197.4,128,200" fill="none" stroke="#888" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></svg></span>` : ''}
          <span class="special-card__icon special-card__icon--clock" title="Durata"><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#888" stroke-width="1.5" fill="none"/><path d="M12 7v5l3 3" stroke="#888" stroke-width="1.5" fill="none"/></svg></span>
          <span class="special-card__duration">${specialCard.duration}</span>
        </div>
        <h3 class="special-card__title">${specialCard.title}</h3>
        <div class="special-card__divider"></div>
        <h4 class="special-card__desc">${specialCard.desc}</h4>
        <div class="special-card__price-row">
          <div>
            <span class="special-card__price-label">PREZZO</span>
            <span class="special-card__price"><b>A partire da &euro;${specialCard.price.toLocaleString('it-IT', {minimumFractionDigits:2})}</b></span>
          </div>
          <span class="special-card__vat">${specialCard.vat}</span>
        </div>
        <button class="special-card__btn">
          Dettagli <span class="special-card__btn-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="1.7em" height="1.7em" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/></svg></span>
        </button>
      </div>
    `;
    grid.parentNode.insertBefore(el, grid.nextSibling);
  }
}

document.addEventListener('DOMContentLoaded', renderCards);