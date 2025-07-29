// WebComponent: Navbar
class NavbarComponent extends HTMLElement {
  async connectedCallback() {
    const [templateRes, navbarCssRes, responsiveCssRes] = await Promise.all([
      fetch('components/Navbar.html'),
      fetch('css/navbar.css'),
      fetch('css/responsive.css')
    ]);
    const template = await templateRes.text();
    console.log('Navbar template loaded:', template);
    const css = `<style>${await navbarCssRes.text()}\n${await responsiveCssRes.text()}</style>`;
    this.attachShadow({ mode: 'open' }).innerHTML = css + template;
  }
}
customElements.define('navbar-component', NavbarComponent);