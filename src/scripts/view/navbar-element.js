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
    
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Favorite</a></li>
        <li><a href="#">About Us</a></li>
      </ul>

      <a class="nav__toggle" href="#"><i class="fa-solid fa-bars"></i></a>
    </nav>`;
  }
}

customElements.define('navbar-element', navbarElement);
