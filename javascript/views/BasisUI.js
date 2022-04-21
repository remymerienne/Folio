export default () => {
  return `
    <div class="wrap"></div>
    <header class="header">
      <div class="folio folio-header">
        <p class="folio__text"><span class="folio__text-first">F</span>olio</p>
        <div class="folio__dot folio-header__dot"></div>
      </div>
      <div class="icon-box">
        <i class="icon-box__lines fa-solid fa-bars"></i>
        <i class="icon-box__cross fa-solid fa-xmark"></i>
      </div>
    </header>

    <nav class="nav">
      <div class="folio folio-nav">
        <p class="folio__text"><span class="folio__text-first">F</span>olio</p>
        <div class="folio__dot folio-nav__dot"></div>
      </div>
      <ul class="nav-list">
        <li class="nav-list__item">
          <a href="index.html" data-link>
            <i class="fa-solid fa-house-chimney nav-icon"></i>
            Home
          </a>
        </li>
        <li class="nav-list__item">
          <a href="index.html#about">
            <i class="fa-solid fa-user nav-icon"></i>
            About
          </a>
        </li>
        <li class="nav-list__item">
          <a href="#">
            <i class="fa-solid fa-list nav-icon"></i>
            Services
          </a>
        </li>
        <li class="nav-list__item">
          <a href="#">
            <i class="fa-solid fa-graduation-cap nav-icon"></i>
            Resume
          </a>
        </li>
        <li class="nav-list__item">
          <a href="#">
            <i class="fa-solid fa-suitcase nav-icon"></i>
            Portfolio
          </a>
        </li>
        <li class="nav-list__item">
          <a href="#">
            <i class="fa-solid fa-newspaper nav-icon"></i>
            Blog
          </a>
        </li>
        <li class="nav-list__item">
          <a href="#">
            <i class="fa-solid fa-location-dot nav-icon"></i>
            Contact
          </a>
        </li>
      </ul>
    </nav>
    
    <div class="secondary-nav">
      <a href="index.html">
        <div data-link-div class="chip"><span class="chip__info">Home</span></div>
      </a>
      <a href="index.html#about">
        <div class="chip"><span class="chip__info">About</span></div>
      </a>
      <a href="#">
        <div class="chip"><span class="chip__info">Services</span></div>
      </a>
      <a href="#">
        <div class="chip"><span class="chip__info">Resume</span></div>
      </a>
      <a href="#">
        <div class="chip"><span class="chip__info">Portfolio</span></div>
      </a>
      <a href="#">
        <div class="chip"><span class="chip__info">Blog</span></div>
      </a>
      <a href="#">
        <div class="chip"><span class="chip__info">Contact</span></div>
      </a>
    </div>
  `;
};
