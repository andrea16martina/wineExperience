// WebComponent: Card
class CardComponent extends HTMLElement {
  async connectedCallback() {
    const res = await fetch('components/Card.html');
    let template = await res.text();
    template = template
      .replace(/\$\{card.img\}/g, this.getAttribute('img') || '')
      .replace(/\$\{card.title\}/g, this.getAttribute('title') || '')
      .replace(/\$\{card.desc\}/g, this.getAttribute('desc') || '')
      .replace(/\$\{card.duration\}/g, this.getAttribute('duration') || '')
      .replace(/\$\{card.price\}/g, this.getAttribute('price') || '')
      .replace(/\$\{card.vat\}/g, this.getAttribute('vat') || '')
      .replace(/\$\{card.icons\.includes\('food'\) \? ([^:]+) : ''\}/g, (m, p1) => {
        return (this.getAttribute('icons')||'').includes('food') ? p1 : '';
      })
      .replace(/\$\{card.icons\.includes\('lotus'\) \? ([^:]+) : ''\}/g, (m, p1) => {
        return (this.getAttribute('icons')||'').includes('lotus') ? p1 : '';
      });
    this.attachShadow({mode: 'open'}).innerHTML = template;
  }
}
customElements.define('card-component', CardComponent);
