class heroElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="hero">
      <picture>
        <source type="image/webp" media="(max-width: 600px)" srcset="./images/hero-image_1-small.webp">
        <source type="image/jpeg" media="(max-width: 600px)" srcset="./images/hero-image_1-small.jpg">

        <img src='./images/hero-image_1-large.jpg' 
          alt="jumbotron">
      </picture>
    </div>
    
   
    `;
  }
}

customElements.define('hero-element', heroElement);
