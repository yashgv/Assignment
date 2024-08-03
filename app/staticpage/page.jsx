import "@public/styles/staticpage.css";

const page = () => {
  return (
    <>
        <div class="screen-3">
      <img
        class="ptoduct-image-icon"
        alt=""
        src="./assets/places/place4.png"
      />
      <div class="back-icon">
        
      </div>

      <section class="product-info">
        <div class="product-details">
          <div class="product-review">
            <h1 class="coeurdes-alpes">Coeurdes Alpes</h1>
            <div class="rating">
              <div class="stars">
                <img
                  class="star-icon"
                  loading="lazy"
                  alt=""
                  src="./public/star.svg"
                />

                <div class="review-count">
                  <div class="reviews">4.5 (355 Reviews)</div>
                </div>
              </div>
            </div>
          </div>
          <div class="location">
            <h3 class="show-map">Show map</h3>
          </div>
        </div>
        <div class="description">
          <h3 class="aspen-is-as">
            Aspen is as close as one can get to a storybook alpine town in
            America. The choose-your-own-adventure possibilities—skiing, hiking,
            dining shopping and ....
          </h3>
          <div class="read-more-button-parent">
            <div class="read-more-button">
              <a class="read-more">Read more</a>
            </div>
            <img class="down-icon" alt="" src="./public/down@2x.png" />
          </div>
        </div>
      </section>
      <section class="amenities">
        <h2 class="facilities">Facilities</h2>
        <div class="amenities-list">
          <div class="amenities-grid">
            <div class="wifi-parent">
              <div class="wifi">
                <img
                  class="wifi-icon"
                  loading="lazy"
                  alt=""
                  src="./public/wifi.svg"
                />
              </div>
              <div class="heater">1 Heater</div>
            </div>
            <div class="food-parent">
              <img
                class="food-icon"
                loading="lazy"
                alt=""
                src="./public/food.svg"
              />

              <div class="dinner-wrapper">
                <div class="dinner">Dinner</div>
              </div>
            </div>
            <div class="bath-tub-parent">
              <img
                class="bath-tub-icon"
                loading="lazy"
                alt=""
                src="./public/bath-tub.svg"
              />

              <div class="tub-wrapper">
                <div class="tub">1 Tub</div>
              </div>
            </div>
            <div class="frame-parent">
              <img
                class="frame-icon"
                loading="lazy"
                alt=""
                src="./public/frame.svg"
              />

              <div class="pool">Pool</div>
            </div>
          </div>
          <div class="pricing">
            <div class="price-details">
              <div class="price-value">
                <div class="price">Price</div>
                <b class="learn-more">$199</b>
              </div>
            </div>
            <button class="cta2">
              <div class="book-now-button">
                <b class="book-now">Book Now</b>
              </div>
              <img
                class="iconlycurvedarrow-right"
                alt=""
                src="./public/iconlycurvedarrow--right.svg"
              />
            </button>
          </div>
        </div>
      </section>
    </div>
    
    </>
  )
}

export default page