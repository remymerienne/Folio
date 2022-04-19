export default () => {
  return `
    <main class="about">
      <div class="about-img">
        <img src="images/simple.jpg" alt="">
      </div>
      <section class="about-info">
        <header>
          <h1 class="about-info__h1">About me</h1>
          <div class="chip js-selected"></div>
          <h2 class="about-info__h2">I am Rémy Merienne</h2>
          <h3 class="about-info__h3">I am a Front-End Web Developer</h3>
        </header>
        <div class="bloc-text">
          <p class="about-info__p">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, quam sint.
            Molestiae optio assumenda, enim, corporis quo consequatur aperiam nisi libero dolores amet, maiores
            veritatis eveniet minus harum natus explicabo!</p>
          <p class="about-info__p">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, quam sint.
            Molestiae optio assumenda, enim, corporis quo consequatur aperiam nisi libero dolores amet, maiores
            veritatis eveniet minus harum natus explicabo!</p>
        </div>
        <div class="about-info__detail">
          <div>
            <ul>
              <li><span class="blue-text">Name:</span>&nbsp;Rémy Merienne</li>
              <li><span class="blue-text">Phone:</span>&nbsp;+33 612 345 678</li>
              <li><span class="blue-text">WebSite:</span>&nbsp https://www.remymerienne.fr</li>
            </ul>
          </div>
          <div>
            <ul>
              <li><span class="blue-text">Age:</span>&nbsp;45</li>
              <li><span class="blue-text">Address:</span>&nbsp;Paris, France</li>
              <li><span class="blue-text">Email:</span>&nbsp;remy.merienne-dev@outlook.fr</li>
            </ul>
          </div>
        </div>
        <div class="button button--active  button-about">Download CV</div>
      </section>
    </main>
  `;
};
