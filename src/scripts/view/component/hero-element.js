class heroElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="hero">
      <picture>
        <source media="(max-width: 600px)" srcset="./images/hero-image_1-small.jpg">
        <source media="(max-width: 600px)" srcset="./images/hero-image_1-small.jpg">

        <img src='./images/hero-image_1-large.jpg' 
          alt="jumbotron">
      </picture>
    </div>
    
    <div class="hero-Inner">
      <div class="hero-title">
        <h1>Kepuasan Pelanggan Adalah Koenchi Kesuksesan Kami!</h1>
      </div>
      <div class="hero-text">
        <p>Tempat penyedia informasi seputar restaurant</p>
      </div>
    </div>
    `;
  }
}

customElements.define('hero-element', heroElement);
