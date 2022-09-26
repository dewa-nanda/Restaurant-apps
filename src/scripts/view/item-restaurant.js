class itemRestaurant extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    this.innerHTML += `
        <article class="card-item" tabindex="0">
            <figure>
              <span class="card-cityName">${this._restaurant.city}</span>
              <img class="card-item__thumbnail" src="${this._restaurant.pictureId}" height="283" alt="${this._restaurant.name} from ${this._restaurant.city}">
            </figure>

            <div class="card-item__content">
              <h2 class="card-item__rate">Rating: ${this._restaurant.rating}</h2>
              <h1 class="card-item__title">${this._restaurant.name}</h1>
              <p class="card-item__description">
                ${this._restaurant.description}
              </p>
            </div>
          </article>
        `;
  }
}

customElements.define('item-restaurant', itemRestaurant);
