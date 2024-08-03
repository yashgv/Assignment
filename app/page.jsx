import '@public/styles/home.css';


export default function Home() {
  return (
    <>
      <section>
        <div class="screen1">
          <img class="screen1-child" alt="" src="./assets/background.png" />

          <div class="aspen-wrapper">
            <img src="./assets/Aspen.png" alt="" />
          </div>
          <div class="plan-your-luxurious-vacation-parent">
            <div class="plan-your-luxurious-container">
              <span class="plan-your-luxurious-vacation">
                <span class="plan-your">Plan your</span><br/>
                <span class="luxurious-vacation"> Luxurious Vacation</span>
              </span>
            </div>
            <button  class="cta1">
              <a href="/home">
              <b class="explore">Explore</b>
              
              </a>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
