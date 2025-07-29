// WebComponent: Navbar
class NavbarComponent extends HTMLElement {
  async connectedCallback() {
    const res = await fetch('components/Navbar.html');
    const html = await res.text();
    this.attachShadow({mode: 'open'}).innerHTML = html;
  }
}
customElements.define('navbar-component', NavbarComponent);
