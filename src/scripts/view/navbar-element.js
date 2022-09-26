class navbarElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <header>
      <nav>
        <div class="nav__logo">
          <h1>KETresto</h1>
        </div>        
    
        <a class="nav__toggle" aria-label="Tombol Menampilkan Navigasi" role="button" tabindex="0">☰</a>

        <ul>
          <li><a href="http://localhost:9000/">Home</a></li>
          <li><a href="#">Favorite</a></li>
          <li><a href="https://github.com/dewa-nanda" target="_blank">About Us</a></li>
        </ul>
      </nav>
    </header>`;
  }
}

customElements.define('navbar-element', navbarElement);