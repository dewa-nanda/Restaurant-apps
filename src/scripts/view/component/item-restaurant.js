/* eslint-disable no-underscore-dangle */
import API_ENDPOINT from '../../globals/api-endpoint';

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

                <img class="card-item__thumbnail lazyload" 
                src="./images/hero-image_1-large.jpg"
                data-src="${API_ENDPOINT.IMAGE('small', this._restaurant.pictureId)}" 
                height="283" alt="${this._restaurant.name} from ${this._restaurant.city}">
            </figure>

            <div class="card-item__content">
              <p class="card-item__rate">Rating: ${this._restaurant.rating}</p>
              <h1 class="card-item__title"><a href="/#/detail/${this._restaurant.id}" aria-label="link to go detail ${this._restaurant.name}">${this._restaurant.name}</a></h1>
              <p class="card-item__description">
                ${this._restaurant.description}
              </p>
            </div>
          </article>
        `;
  }
}

customElements.define('item-restaurant', itemRestaurant);
