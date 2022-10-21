import { alert, createLoading } from '../view/templates/template-creator';

// Alert
const alertMaker = (icon = '', tittle = 'Error 404 Not Found', textMsg = '') => {
  const data = {
    icon: `${icon}`,
    title: `${tittle}`,
    text: `${textMsg}`,
  };
  alert(data);
};

// Loading
const loadingMaker = (target) => {
  const loadingElement = createLoading();
  const elementTarget = document.querySelector(`${target}`);

  elementTarget.appendChild(loadingElement);
};

const loadingDelete = () => {
  const loadingElement = document.querySelector('.loading-element');
  loadingElement.remove();
};

// Clear input Element
const clearInputElement = (target) => {
  const element = document.querySelector(target);
  element.value = '';
};

export {
  alertMaker, loadingMaker, loadingDelete, clearInputElement,
};
