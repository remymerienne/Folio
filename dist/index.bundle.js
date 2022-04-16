(function(){'use strict';const n='/Folio/dist/',i='/Folio/dist/index.html',s=function(s){switch(s){case n:return'\n    <div class="wrap"></div>\n\n    <header class="header">\n      <div class="folio folio-header">\n        <p class="folio__text"><span class="folio__text-first">F</span>olio</p>\n        <div class="folio__dot folio-header__dot"></div>\n      </div>\n      <div class="icon-box">\n        <i class="icon-box__lines fa-solid fa-bars"></i>\n        <i class="icon-box__cross fa-solid fa-xmark"></i>\n      </div>\n    </header>\n    <nav class="nav">\n      <div class="folio folio-nav">\n        <p class="folio__text"><span class="folio__text-first">F</span>olio</p>\n        <div class="folio__dot folio-nav__dot"></div>\n      </div>\n      <ul class="nav-list">\n        <li class="nav-list__item nav-list__first-item nav-list__item--selected">\n          <a href="#">\n            <i class="fa-solid fa-house-chimney nav-icon"></i>\n            Home\n          </a>\n        </li>\n        <li class="nav-list__item">\n          <a href="#">\n            <i class="fa-solid fa-user nav-icon"></i>\n            About\n          </a>\n        </li>\n        <li class="nav-list__item">\n          <a href="#">\n            <i class="fa-solid fa-list nav-icon"></i>\n            Services\n          </a>\n        </li>\n        <li class="nav-list__item">\n          <a href="#">\n            <i class="fa-solid fa-graduation-cap nav-icon"></i>\n            Resume\n          </a>\n        </li>\n        <li class="nav-list__item">\n          <a href="#">\n            <i class="fa-solid fa-suitcase nav-icon"></i>\n            Portfolio\n          </a>\n        </li>\n        <li class="nav-list__item">\n          <a href="#">\n            <i class="fa-solid fa-newspaper nav-icon"></i>\n            Blog\n          </a>\n        </li>\n        <li class="nav-list__item">\n          <a href="#">\n            <i class="fa-solid fa-location-dot nav-icon"></i>\n            Contact\n          </a>\n        </li>\n      </ul>\n    </nav>\n    <div class="secondary-nav">\n      <a href="#">\n        <div class="chip js-selected"><span class="chip__info">Home</span></div>\n      </a>\n      <a href="#">\n        <div class="chip"><span class="chip__info">About</span></div>\n      </a>\n      <a href="#">\n        <div class="chip"><span class="chip__info">Services</span></div>\n      </a>\n      <a href="#">\n        <div class="chip"><span class="chip__info">Resume</span></div>\n      </a>\n      <a href="#">\n        <div class="chip"><span class="chip__info">Portfolio</span></div>\n      </a>\n      <a href="#">\n        <div class="chip"><span class="chip__info">Blog</span></div>\n      </a>\n      <a href="#">\n        <div class="chip"><span class="chip__info">Contact</span></div>\n      </a>\n    </div>\n  ';case i:return'\n    <main class="home">\n      <div class="social">\n        <p class="social__paragraph">FOLLOW ME</p>\n        <div class="social__line"></div>\n        <ul class="social__list">\n          <li>\n            <a href="#">\n              <i class="fa-brands fa-github"></i>\n            </a>\n          </li>\n          <li>\n            <a href="#">\n              <i class="fa-brands fa-linkedin-in"></i>\n            </a>\n          </li>\n          <li>\n            <a href="#">\n              <i class="fa-brands fa-twitter"></i>\n            </a>\n          </li>\n          <li>\n            <a href="#">\n              <i class="fa-brands fa-instagram"></i>\n            </a>\n          </li>\n          <li>\n            <a href="#">\n              <i class="fa-brands fa-facebook-f"></i>\n            </a>\n          </li>\n        </ul>\n      </div>\n      <div class="information">\n        <h1 class="information__h1">Rémy Merienne</h1>\n        <h2 class="information__h2"></h2>\n        <div class="button-block">\n          <div class="button">Hire Me</div>\n          <div class="button button--active">Download CV</div>\n        </div>\n      </div>\n    </main>\n  ';}},a=function(){const a=n+window.location.href.split('/').pop(),e=document.getElementById('basis'),l=document.getElementById('root');e.innerHTML=s(n),new class{constructor(){this.handleCLickMenu();}handleCLickMenu(){const n=document.querySelector('div.icon-box'),i=document.querySelector('i.icon-box__lines'),s=document.querySelector('i.icon-box__cross'),a=document.querySelector('nav.nav'),e=document.querySelector('header.header'),l=document.querySelector('header .folio-header'),o=document.querySelector('div.wrap');n.addEventListener('click',(function(){i.classList.toggle('js-lines'),s.classList.toggle('js-cross'),a.classList.toggle('js-nav'),e.classList.toggle('js-header'),l.classList.toggle('js-folio'),o.classList.toggle('js-wrap');}));}},l.innerHTML=s(a),a===i&&new class{constructor(){this.typeWritterEffect();}typeWritterEffect(){const n=document.querySelector('h2'),i=['I am A Developer.','I am A Freelancer.'],s=function(i,a){a<i.length?setTimeout((function(){n.innerHTML+=a<6?`<span>${i[a]}</span>`:`<span class="js-emphasis">${i[a]}</span>`,s(i,a+1);}),200):setTimeout((function(){n.innerHTML='';}),1e3);},a=function(n,i){i<n.length&&(s(n[i],0),setTimeout((function(){a(n,i+1);}),4600)),i==n.length&&(i=0,setTimeout((function(){a(n,i);}),1e3));};setTimeout((function(){a(i,0);}),1e3);}};};document.addEventListener('DOMContentLoaded',(function(){a();})),window.addEventListener('popstate',a);})();