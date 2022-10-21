/* eslint-disable no-underscore-dangle */
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import {
  alertMaker, loadingMaker, loadingDelete, clearInputElement,
} from '../../utils/maker-element';
import RestaurantDbSource from '../../data/restaurantDbSource';
import './menu-element';
import './inputComment-element';
import './listReviewComment-element';

class detailResto extends HTMLElement {
  set data(dataResto) {
    this._data = dataResto;
    const menuElement = document.createElement('menu-element');
    this.innerHTML += createRestaurantDetailTemplate(this._data);

    menuElement.menu = this._data.menus;
    const commentElement = document.createElement('inputcomment-element');

    this.appendChild(menuElement);
    this.appendChild(commentElement);

    // review comment
    const reviewCommentElement = document.createElement('listreviewcomment-element');
    reviewCommentElement.data = this._data.customerReviews;
    this.appendChild(reviewCommentElement);

    const onClickButtonInput = async () => {
      const data = commentElement.value;

      if (data.review === '' || data.name === '') {
        clearInputElement('#nameElement');
        clearInputElement('#commantElement');
        alertMaker('error', 'Input not valid', 'Please insert name and comment');
      } else {
        const checkElement = document.querySelector('listreviewcomment-element');

        if (checkElement !== undefined) {
          checkElement.remove();
        }

        loadingMaker('.input-commant');

        await RestaurantDbSource.postReview(this._data.id, data)
          .then(async (res) => {
            reviewCommentElement.data = res.customerReviews;
            loadingDelete();
            clearInputElement('#nameElement');
            clearInputElement('#commantElement');

            return reviewCommentElement;
          })
          .then((res) => {
            this.appendChild(res);
          })
          .catch(() => {
            alertMaker('error', 'Ooops!', 'Please check your connection');
            clearInputElement('#nameElement');
            clearInputElement('#commantElement');
            loadingDelete();
          });
      }
    };
    commentElement.clickEvent = onClickButtonInput;
  }
}

customElements.define('detail-element', detailResto);
