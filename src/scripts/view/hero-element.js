class heroElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `<div class="hero">
      <div class="hero-Inner">
        <div class="hero-title">
          <h1>Kepuasan Pelanggan Adalah Koenchi Kesuksesan Kami!</h1>
        </div>
        <div class="hero-text">
          <p>hidup itu perlu makan, kalo ngga makan ya laper</p>
        </div>
      </div>
    </div>`;
  }
}

customElements.define('hero-element', heroElement);
