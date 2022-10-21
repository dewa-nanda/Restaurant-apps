class navbarElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <nav>    
        <div class="nav__logo">
          <h1>KETresto</h1>
        </div>
        <a class="nav__toggle" id="hamburgerButton" aria-label="Tombol Menampilkan Navigasi" role="button" tabindex="0">☰</a>

        <ul id="navigationDrawer">
          <li><a href="#/home">Home</a></li>
          <li><a href="#/favorite">Favorite</a></li>
          <li><a href="https://github.com/dewa-nanda" target="_blank">About Us</a></li>
        </ul>
      </nav>`;
  }
}

customElements.define('navbar-element', navbarElement);
