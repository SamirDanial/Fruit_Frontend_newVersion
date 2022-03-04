import React from "react";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./owl.css";

const ThumbnailImage = () => {
  return (
    <div>
      <div>
          <div className="quickview-slide-active " >
          <OwlCarousel items={3} smartSpeed={1000} role="tablist" className="owl-theme" navText={[ "<div style='color: red; font-weight: bold'>prev</div>", "<div style='color: red; font-weight: bold'>next</div>"]} dots={false} nav={true} margin={8} mouseDrag={false} >
                      <a className="active" data-bs-toggle="tab" href="#pro-1">
                        <img
                          src="../assets/images/product-image/organic/product-11.jpg"
                          alt=""
                        />
                      </a>
                      <a data-bs-toggle="tab" href="#pro-2">
                        <img
                          src="../assets/images/product-image/organic/product-9.jpg"
                          alt=""
                        />
                      </a>
                      <a data-bs-toggle="tab" href="#pro-3">
                        <img
                          src="../assets/images/product-image/organic/product-20.jpg"
                          alt=""
                        />
                      </a>
                      <a data-bs-toggle="tab" href="#pro-4">
                        <img
                          src="../assets/images/product-image/organic/product-19.jpg"
                          alt=""
                        />
                      </a>
          </OwlCarousel>
            </div>
      </div>
    </div>
  );
};

export default ThumbnailImage;