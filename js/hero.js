// WebComponent: Hero
class HeroComponent extends HTMLElement {
  async connectedCallback() {
    const res = await fetch('components/Hero.html');
    const [templateRes, heroCssRes, responsiveCssRes] = await Promise.all([
      fetch('components/Hero.html'),
      fetch('css/hero.css'),
      fetch('css/responsive.css')
    ]);
    let template = await templateRes.text();
    const css = `<style>${await heroCssRes.text()}\n${await responsiveCssRes.text()}</style>`;
    this.attachShadow({ mode: 'open' }).innerHTML = css + template;
  }
}
customElements.define('hero-component', HeroComponent);
