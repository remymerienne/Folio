import Basis from './containers/Basis.js';
import Home from './containers/Home.js';
import { ROUTES_PATH, render } from './constants/routes.js';

export const router = () => {
  const currentPath = '/' + window.location.href.split('/').pop();
  const basis = document.getElementById('basis');
  const root = document.getElementById('root');
  basis.innerHTML = render('basis');
  new Basis();
  root.innerHTML = render(currentPath);
  if (currentPath === ROUTES_PATH.Home) new Home();
};

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', (e) => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      history.pushState(null, null, e.target.href);
      router();
    } else if (e.target.matches('[data-link-div]')) {
      e.preventDefault();
      history.pushState(null, null, e.target.parentElement.href);
      router();
    }
  });
  router();
});

window.addEventListener('popstate', router);
