import BasisUI from '../views/BasisUI.js';
import HomeUI from '../views/HomeUI.js';

export const ROUTES_PATH = {
  Hosting: '/',
  Home: '/index.html',
};

export const render = (pathname) => {
  switch (pathname) {
    case ROUTES_PATH['Hosting']:
      return BasisUI();
    case ROUTES_PATH['Home']:
      return HomeUI();
  }
};
