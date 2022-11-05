import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import '../component/list-restaurant';
import { alertMaker, loadingDelete, loadingMaker } from '../../utils/maker-element';

const Favorite = {
  async render() {
    return `
      <list-restaurant></list-restaurant>
      `;
  },

  async afterRender() {
    const listRestaurantsElement = document.querySelector('list-restaurant');

    loadingMaker('#main-content');
    await FavoriteRestoIdb.getAllResto()
      .then((res) => {
        if (res.length === 0) {
          const contentElement = document.querySelector('#main-content');
          contentElement.innerHTML += `
          <div class = "err-favorite">
            <img src="./restorant.svg"></img>
            <h1>Belum ada restourant favorit untuk saat ini</h1>
          </div>`;
        } else {
          listRestaurantsElement.restaurants = res;
          const titleElement = document.querySelector('#tittle-restaurant');
          titleElement.innerHTML = 'Restaurant Favorite';
        }
        loadingDelete();
      })
      .catch(() => {
        loadingDelete();
        alertMaker('error', 'Faild to load content', 'Please check your connection');
      });
  },
};

export default Favorite;
