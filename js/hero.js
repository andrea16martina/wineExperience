// WebComponent: Hero
class HeroComponent extends HTMLElement {
  async connectedCallback() {
    const res = await fetch('components/Hero.html');
    const html = await res.text();
    this.attachShadow({mode: 'open'}).innerHTML = html;
  }
}
customElements.define('hero-component', HeroComponent);
