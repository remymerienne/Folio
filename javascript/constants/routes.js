import BasisUI from '../views/BasisUI.js';

export const ROUTES_PATH = {
  // Hosting: '/src/',
  Hosting: '/',
  Home: '/src/index.html',
  Prime: '/src/index.html#prime-calculator',
};

export const render = (pathname) => {
  switch (pathname) {
    case ROUTES_PATH['Hosting']:
      return BasisUI();
    // case ROUTES_PATH['Home']:
    //   return LoginUI();
    // case ROUTES_PATH['Prime']:
    //   return PrimeNumberUI();
  }
};

// Hosting: '/Prime-app/dist/',
// Home: '/Prime-app/dist/index.html',
// Prime: '/Prime-app/dist/index.html#prime-calculator'
