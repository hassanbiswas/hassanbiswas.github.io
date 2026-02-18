
// header
class THeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header id="header" class="container-grid">
        <nav id="nav" class="flex x-center y-center">
          <a href="/" id="logo">
            <img
              src="images/favicon-50-png.png"
              alt="web Developer | Hassan Biswas"
            />
          </a>
          <ul class="nav-list" id="header-nav-list">
            <li inert class="list-item active-bg"></li>
            <li class="list-item active"><a href="/">Home</a></li>
            <li class="list-item"><a href="#about">About</a></li>
            <li class="list-item"><a href="#projects">Projects</a></li>
            <li class="list-item"><a href="#faqs">FAQs</a></li>
          </ul>
        </nav>
      </header>
    `;
  }
}
customElements.define("t-header", THeader);