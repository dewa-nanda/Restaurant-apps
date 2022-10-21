import Swal from 'sweetalert2';
import API_ENDPOINT from '../../globals/api-endpoint';

const alert = (response) => {
  Swal.fire({
    title: `${response.title}`,
    text: `${response.text}`,
    icon: `${response.icon}`,
    confirmButtonText: 'Oki doki',
  });
};

const createRestaurantDetailTemplate = (restaurant) => `
    <div class="side-image">
      <img src="${API_ENDPOINT.IMAGE('medium', restaurant.pictureId)}"></img>
    </div>
    <div class="detail__resto_info">
      <div class="info__header">
        <h1>${restaurant.name}</h1>
        <p><i class="fa-solid fa-star icon"></i> ${restaurant.rating}</p>
      </div>
        
      <div class="info__location">
        <p><i class="fa-solid fa-house-chimney"></i> ${restaurant.city}</p>
        <p><i class="fa-solid fa-location-dot"></i> ${restaurant.address}</p>
      </div>
        
      <div class="info__description">
        <p>${restaurant.description}</p>
      </div>
    </div>
`;

const createMenu = (type, data) => {
  const divElement = document.createElement('div');
  divElement.className = `${type}_menu`;
  divElement.innerHTML = `<h3>${type}</h3>`;
  const ulElement = document.createElement('ul');
  ulElement.className = `${type}_list`;
  data.forEach((object, index) => {
    const liElement = document.createElement('li');
    liElement.innerHTML = `<span class="number">${index + 1}.</span> <span class="name">${object.name}</span>`;
    ulElement.appendChild(liElement);
  });

  divElement.appendChild(ulElement);
  return divElement;
};

const reviewComment = (data) => {
  let element = '';

  data.forEach((object) => {
    element += `
    <div class="item_element">
      <div class="header-comment">
        <h3>${object.name}</h3>
        <p>${object.date}</p>
      </div>
      <div class="comment-section">
         <p>${object.review}</p>
      </div>
    </div>`;
  });

  return element;
};

const createLoading = () => {
  const divElement = document.createElement('div');
  divElement.className = 'loading-element';

  divElement.innerHTML += `
  <div class="loading loadingio-spinner-double-ring-rduwprnr0o">
      <div class="ldio-wz6v8tz6mj">
        <div></div><div></div><div><div></div></div><div><div></div></div>
      </div>
    </div>
  </div>`;

  return divElement;
};

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
    <i class="fa-regular fa-heart"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa-solid fa-heart"></i>
  </button>
`;

export {
  createRestaurantDetailTemplate, alert, createMenu, reviewComment,
  createLoading, createLikeButtonTemplate, createLikedButtonTemplate,
};
