class headerRestaurant extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  get value() {
    return this.querySelector('#searchElement').value;
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="container">
            <div class="header-container">
                <h2>Explore Restaurant</h2>
          
                <div class="search-container">
                    <input type="search" id="searchElement" placeholder="Search by City.." name="search">
                    <button id="searchButtonElement" type="submit">Submit</button>
                </div>
            </div>
        </div>
        `;
    this.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
  }
}

customElements.define('header-restaurant', headerRestaurant);
