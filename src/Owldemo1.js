import React from "react";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./owl.css";

const Owldemo1 = () => {
  return (
    <div>
      <div>
        <OwlCarousel items={1} className="owl-theme" loop nav={false} dots={false} margin={8} autoplay ={true} mouseDrag={false} animateOut='fadeOut'>
          <div
            className="slider-height-6 d-flex align-items-start justify-content-start bg-img"
            style={{
              backgroundImage: "url(assets/images/slider-image/sample-5.jpg)",
            }}
          >
            <div className="container">
              <div className="slider-content-5 slider-animated-1 text-left">
                <span className="animated">100% NATURAL</span>
                <h1 className="animated">
                  Fresh Lemonade <br />
                  Summer Drinks
                </h1>
                <a href="shop-4-column.html" className="shop-btn animated">
                  SHOP NOW
                </a>
              </div>
            </div>
          </div>
          <div
            className="slider-height-6 d-flex align-items-start justify-content-start bg-img"
            style={{
              backgroundImage: "url(assets/images/slider-image/sample-6.jpg)",
            }}
          >
            <div className="container">
              <div className="slider-content-5 slider-animated-1 text-left">
                <span className="animated">100% PURE &amp; NATURE</span>
                <h1 className="animated">
                  Fresh Mango Juice
                  <br />
                  Just Fruit
                </h1>
                <a href="shop-4-column.html" className="shop-btn animated">
                  SHOP NOW
                </a>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
};

export default Owldemo1;
