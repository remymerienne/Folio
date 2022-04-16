import Basis from './containers/Basis.js';
import Home from './containers/Home.js';
import { ROUTES_PATH, render } from './constants/routes.js';

export const router = () => {
  const currentPath =
    ROUTES_PATH.Hosting + window.location.href.split('/').pop();
  const basis = document.getElementById('basis');
  const root = document.getElementById('root');
  basis.innerHTML = render(ROUTES_PATH.Hosting);
  new Basis();
  root.innerHTML = render(currentPath);
  if (currentPath === ROUTES_PATH.Home) new Home();
};

document.addEventListener('DOMContentLoaded', () => {
  router();
});

window.addEventListener('popstate', router);
