import Basis from '../containers/Basis.js';
import { render } from '../constants/routes.js';

const basisHtml = document.getElementById('basis');
basisHtml.innerHTML = render('/');
new Basis();

// export const router = () => {
//   const currentPath =
//     ROUTES_PATH.Hosting + window.location.href.split('/').pop();
//   const root = document.getElementById('root');
//   root.innerHTML = render(currentPath);
//   if (currentPath === ROUTES_PATH.Home) new Login();
//   if (currentPath === ROUTES_PATH.Prime) new PrimeNumber();
// };

// document.addEventListener('DOMContentLoaded', () => {
//   router();
// });

// window.addEventListener('popstate', router);
