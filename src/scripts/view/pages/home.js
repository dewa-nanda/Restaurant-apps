import RestaurantDbSource from '../../data/restaurantDbSource';
import '../component/list-restaurant';
import { alertMaker, loadingDelete, loadingMaker } from '../../utils/maker-element';

const Home = {
  async render() {
    return `
        <hero-element></hero-element>
        <list-restaurant></list-restaurant>
      `;
  },

  async afterRender() {
    const listRestaurantsElement = document.querySelector('list-restaurant');

    loadingMaker('#main-content');
    await RestaurantDbSource.getListRestaurants()
      .then((res) => {
        listRestaurantsElement.restaurants = res.restaurants;
        loadingDelete();
      })
      .catch(() => {
        alertMaker('error', 'Faild to load content', 'Please check your connection');
      });
  },
};

export default Home;
