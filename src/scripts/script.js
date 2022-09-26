import './view/navbar-element';
import './view/header-restaurant';
import './view/hero-element';
import data from '../DATA.json';

const navbar_toggleElement = document.querySelector('.nav__toggle');
const mainElement = document.querySelector('main');
const nav = document.querySelector('nav ul');

navbar_toggleElement.addEventListener('click', () => {
  nav.classList.toggle('slide');
})