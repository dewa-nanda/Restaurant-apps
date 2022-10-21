import CONFIG from './config';

const API_ENDPOINT = {
  // GET
  LIST: `${CONFIG.BASE_URL}/list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
  SEARCH: (q) => `${CONFIG.BASE_URL}/search?q=${q}`,
  // GET IMAGE
  IMAGE: (type, id) => `${CONFIG.BASE_URL}/images/${type}/${id}`,
  // POST
  REVIEW: `${CONFIG.BASE_URL}/review`,
};

export default API_ENDPOINT;
