import React from "react";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./owl.css";

const BrandArea = () => {
  return (
    <div>
      <div>
          <div className="brand-slider owl-carousel owl-nav-style owl-nav-style-2">
          <OwlCarousel items={2} smartSpeed={1000} className="owl-theme" navText={[ "<div style='color: red; font-weight: bold'>prev</div>", "<div style='color: red; font-weight: bold'>next</div>"]} dots={false} nav={true} margin={8} mouseDrag={false} >
              <div className="brand-slider-item">
                <a href="#">
                  <img src="assets/images/brand-logo/1.jpg" alt="" />
                </a>
              </div>
              <div className="brand-slider-item">
                <a href="#">
                  <img src="assets/images/brand-logo/2.jpg" alt="" />
                </a>
              </div>
              <div className="brand-slider-item">
                <a href="#">
                  <img src="assets/images/brand-logo/3.jpg" alt="" />
                </a>
              </div>
              <div className="brand-slider-item">
                <a href="#">
                  <img src="assets/images/brand-logo/4.jpg" alt="" />
                </a>
              </div>
              <div className="brand-slider-item">
                <a href="#">
                  <img src="assets/images/brand-logo/5.jpg" alt="" />
                </a>
              </div>
              <div className="brand-slider-item">
                <a href="#">
                  <img src="assets/images/brand-logo/1.jpg" alt="" />
                </a>
              </div>
              <div className="brand-slider-item">
                <a href="#">
                  <img src="assets/images/brand-logo/2.jpg" alt="" />
                </a>
              </div>
          </OwlCarousel>
            </div>
      </div>
    </div>
  );
};

export default BrandArea;
