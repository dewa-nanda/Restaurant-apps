/* eslint-disable no-underscore-dangle */
import './item-restaurant';

class itemRestaurant extends HTMLElement {
  set restaurants(restaurants) {
    this._restaurants = restaurants;
    this.render();
  }

  render() {

    const containerElement = document.createElement('div');
    const headerContainer = document.createElement('div');
    const restaurantElement = document.createElement('item-restaurant');
    const contentElement = document.createElement('div');

    headerContainer.setAttribute('class', 'header-container');
    headerContainer.innerHTML = '<h1 id="tittle-restaurant">Explore Restaurant</h1>';

    containerElement.setAttribute('class', 'container');
    contentElement.setAttribute('class', 'content');
    restaurantElement.setAttribute('class', 'card');

    this._restaurants.forEach((restaurant) => {
      restaurantElement.restaurant = restaurant;
      contentElement.appendChild(restaurantElement);
    });

    containerElement.appendChild(headerContainer);
    containerElement.appendChild(contentElement);
    this.appendChild(containerElement);
  }
}

customElements.define('list-restaurant', itemRestaurant);
