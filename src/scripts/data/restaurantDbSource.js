import axios from 'axios';
import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantDbSource {
  static async getListRestaurants() {
    try {
      const response = await axios.get(API_ENDPOINT.LIST).then((res) => res.data);

      return response;
    } catch (err) {
      return err;
    }
  }

  static async detailRestaurants(id) {
    try {
      const response = await axios.get(API_ENDPOINT.DETAIL(id)).then((res) => res.data);

      return response;
    } catch (err) {
      const msg = 'error';
      return msg;
    }
  }

  static async postReview(id, data) {
    try {
      let dataReturn;
      // eslint-disable-next-line no-param-reassign
      data.id = id;
      const dataFixed = JSON.stringify(data);

      const config = {
        method: 'post',
        url: 'https://restaurant-api.dicoding.dev/review',
        headers: {
          'Content-Type': 'application/json',
        },
        data: dataFixed,
      };

      await axios(config)
        .then((response) => {
          dataReturn = response;
        })
        .catch((err) => err);

      return dataReturn.data;
    } catch (err) {
      return err;
    }
  }
}

export default RestaurantDbSource;
