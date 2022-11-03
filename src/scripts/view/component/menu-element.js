/* eslint-disable no-underscore-dangle */
import { createMenu } from '../templates/template-creator';

class menuElement extends HTMLElement {
  set menu(menu) {
    this._menu = menu;
    this.render();
  }

  render() {
    this.innerHTML = '<h2>Menu</h2>';
    const foodsElement = createMenu('Foods', this._menu.foods);
    const drinksElement = createMenu('Drinks', this._menu.drinks);

    this.appendChild(foodsElement);
    this.appendChild(drinksElement);
  }
}

customElements.define('menu-element', menuElement);
