// WebComponent: Card
class CardComponent extends HTMLElement {
  async connectedCallback() {
    const [templateRes, cardsCssRes, responsiveCssRes] = await Promise.all([
      fetch('components/Card.html'),
      fetch('css/cards.css'),
      fetch('css/responsive.css')
    ]);
    let template = await templateRes.text();
    const css = `<style>${await cardsCssRes.text()}\n${await responsiveCssRes.text()}</style>`;

    template = template
      .replace(/\{\{img\}\}/g, this.getAttribute('img') || '')
      .replace(/\{\{title\}\}/g, this.getAttribute('title') || '')
      .replace(/\{\{desc\}\}/g, this.getAttribute('desc') || '')
      .replace(/\{\{duration\}\}/g, this.getAttribute('duration') || '')
      .replace(/\{\{price\}\}/g, this.getAttribute('price') || '')
      .replace(/\{\{vat\}\}/g, this.getAttribute('vat') || '');

    const icons = (this.getAttribute('icons') || '').split(',');
    const foodIcon = `<span class="card__icon card__icon--food" title="Food"><svg width="1em" height="1em" viewBox="0 0 512 512" fill="none"><path d="M57.49,47.74,425.92,416.17a37.28,37.28,0,0,1,0,52.72h0a37.29,37.29,0,0,1-52.72,0l-90-91.55A32,32,0,0,1,274,354.91v-5.53a32,32,0,0,0-9.52-22.78l-11.62-10.73a32,32,0,0,0-29.8-7.44h0A48.53,48.53,0,0,1,176.5,295.8L91.07,210.36C40.39,159.68,21.74,83.15,57.49,47.74Z" style="fill:none;stroke:#888;stroke-linejoin:round;stroke-width:32px"></path><path d="M400,32l-77.25,77.25A64,64,0,0,0,304,154.51v14.86a16,16,0,0,1-4.69,11.32L288,192" style="fill:none;stroke:#888;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"></path><path d="M320,224l11.31-11.31A16,16,0,0,1,342.63,208h14.86a64,64,0,0,0,45.26-18.75L480,112" style="fill:none;stroke:#888;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"></path><line x1="440" y1="72" x2="360" y2="152" style="fill:none;stroke:#888;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"></line><path d="M200,368,100.28,468.28a40,40,0,0,1-56.56,0h0a40,40,0,0,1,0-56.56L128,328" style="fill:none;stroke:#888;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"></path></svg></span>`;
    const lotusIcon = `<span class="card__icon card__icon--lotus" title="Lotus"><svg width="1em" height="1em" viewBox="0 0 256 256" fill="none"><rect width="256" height="256" fill="none"/><path d="M128,200c16,0,42.5-.2,72.9-17.8s40.3-39.5,43.4-50.8a7.9,7.9,0,0,0-5.7-9.8c-7.3-1.9-20.1-3.6-36.5.3" fill="none" stroke="#888" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M53.9,121.8c-16.4-3.8-29.2-2.1-36.5-.2a7.9,7.9,0,0,0-5.7,9.8c3.1,11.3,13,33.3,43.4,50.8S112,200,128,200" fill="none" stroke="#888" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M128,200s40-21.8,40-80c0-45.6-24.6-68.8-35.2-76.8a8.1,8.1,0,0,0-9.6,0C112.6,51.2,88,74.4,88,120,88,178.2,128,200,128,200Z" fill="none" stroke="#888" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M128,200c12-2.6,44.3-20.8,63.7-54.4s14.6-60.3,10.8-72a7.8,7.8,0,0,0-9.2-5.3,77.1,77.1,0,0,0-31.4,15.1" fill="none" stroke="#888" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M94.1,83.4A77.1,77.1,0,0,0,62.7,68.3a7.8,7.8,0,0,0-9.2,5.3c-3.8,11.7-8.6,38.5,10.8,72S116,197.4,128,200" fill="none" stroke="#888" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></svg></span>`;
    template = template
      .replace(/\{\{icon_food\}\}/g, icons.includes('food') ? foodIcon : '')
      .replace(/\{\{icon_lotus\}\}/g, icons.includes('lotus') ? lotusIcon : '');
    this.attachShadow({mode: 'open'}).innerHTML = css + template;
  }
}
customElements.define('card-component', CardComponent);
