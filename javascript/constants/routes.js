import BasisUI from '../views/BasisUI.js';
import HomeUI from '../views/HomeUI.js';

export const ROUTES_PATH = {
  Home: '/index.html',
};

export const render = (pathname) => {
  switch (pathname) {
    case 'basis':
      return BasisUI();
    case ROUTES_PATH['Home']:
      return HomeUI();
  }
};
