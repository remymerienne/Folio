import BasisUI from '../views/BasisUI.js';
import HomeUI from '../views/HomeUI.js';
import AboutUI from '../views/AboutUI.js';

export const ROUTES_PATH = {
  Home: '/index.html',
  About: '/index.html#about',
};

export const render = (pathname) => {
  switch (pathname) {
    case 'basis':
      return BasisUI();
    case ROUTES_PATH['Home']:
      return HomeUI();
    case ROUTES_PATH['About']:
      return AboutUI();
  }
};
