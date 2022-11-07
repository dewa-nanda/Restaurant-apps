/* eslint-disable no-else-return */
/* eslint-disable no-console */
import RestaurantDbSource from '../../data/restaurantDbSource';
import UrlParser from '../../routes/url-parser';
import { alertMaker, loadingMaker, loadingDelete } from '../../utils/maker-element';
import { createLikeButtonTemplate } from '../templates/template-creator';
import '../component/detailResto-element';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoritRestoIdb from '../../data/favorite-resto-idb';

const Detail = {
  async render() {
    return `
      <detail-element id="detail__resto" class="detail__resto" tabindex="0"></detail-element>
      <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();

    const likeButtonContainer = document.querySelector('#likeButtonContainer');
    loadingMaker('#main-content');

    await RestaurantDbSource.detailRestaurants(url.id).then((res) => {
      if (res !== 'error') {
        const detailElement = document.querySelector('detail-element');
        detailElement.data = res.restaurant;
        likeButtonContainer.innerHTML = createLikeButtonTemplate();

        LikeButtonPresenter.init({
          likeButtonContainer: document.querySelector('#likeButtonContainer'),
          favoriteResto: FavoritRestoIdb,
          resto: {
            id: res.restaurant.id,
            name: res.restaurant.name,
            description: res.restaurant.description,
            pictureId: res.restaurant.pictureId,
            city: res.restaurant.city,
            rating: res.restaurant.rating,
          },
        });
        loadingDelete();
      } else {
        alertMaker('error', 'Faild to load content', 'Please check your connection');
        loadingDelete();
      }
    });
  },
};

export default Detail;
