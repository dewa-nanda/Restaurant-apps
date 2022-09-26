import './view/navbar-element';
import './view/hero-element';
import './view/list-restaurant';
import data from '../DATA.json';

const main = () => {
  // responsive navbar
  const navbar_toggleElement = document.querySelector('.nav__toggle');
  const nav = document.querySelector('nav ul');

  navbar_toggleElement.addEventListener('click', () => {
    console.log(nav.classList.toggle.name);
    nav.classList.toggle('slide');
  });

  // Main content
  const listRestaurantsElement = document.querySelector('list-restaurant');
  const dataRestaurants = data.restaurants;

  const getRestaurants = async() => {
    try{
      const result = await dataRestaurants;
      listRestaurantsElement.restaurants = result;
    }
    catch(error)
    {}
  }

  // output funct
  getRestaurants();
};

export default main;
