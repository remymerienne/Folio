export default () => {
  return `
    <main class="home">

      <div class="social">
        <p class="social__paragraph">FOLLOW ME</p>
        <div class="social__line"></div>
        <ul class="social__list">
          <li>
            <a href="#">
              <i class="fa-brands fa-github"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa-brands fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa-brands fa-facebook-f"></i>
            </a>
          </li>
        </ul>
      </div>

      <section class="information">
        <h1 class="information__h1">Rémy Merienne</h1>
        <h2 class="information__h2"></h2>
        <div class="button-block">
          <div class="button">Hire Me</div>
          <div class="button button--active">Download CV</div>
        </div>
      </section>
      
    </main>
  `;
};
