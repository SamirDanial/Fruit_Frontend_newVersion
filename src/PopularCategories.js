import React from "react";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./owl.css";

const PopularCategories = () => {
  return (
    <div>
      <div>
            <div className="category-slider owl-nav-style">
          <OwlCarousel items={3} smartSpeed={1000} className="owl-theme" navText={[ "<div style='color: red; font-weight: bold'>prev</div>", "<div style='color: red; font-weight: bold'>next</div>"]} dots={false} nav={true} margin={8} mouseDrag={false} >
              {/* <!-- Single item --> */}
              <div className="category-item">
                <div className="category-list mb-30px">
                  <div className="category-thumb">
                    <a href="shop-4-column.html">
                      <img
                        src="assets/images/product-image/organic/thumb-1.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="desc-listcategoreis">
                    <div className="name_categories">
                      <h4>Fresh Vegetables</h4>
                    </div>
                    <span className="number_product">17 Products</span>
                    <a href="shop-4-column.html">
                      {" "}
                      Shop Now{" "}
                      <i className="ion-android-arrow-dropright-circle"></i>
                    </a>
                  </div>
                </div>
                <div className="category-list">
                  <div className="category-thumb">
                    <a href="shop-4-column.html">
                      <img
                        src="assets/images/product-image/organic/thumb-2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="desc-listcategoreis">
                    <div className="name_categories">
                      <h4>Fresh Salad & Dips</h4>
                    </div>
                    <span className="number_product">17 Products</span>
                    <a href="shop-4-column.html">
                      {" "}
                      Shop Now{" "}
                      <i className="ion-android-arrow-dropright-circle"></i>
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- Single item --> */}
              <div className="category-item">
                <div className="category-list mb-30px">
                  <div className="category-thumb">
                    <a href="shop-4-column.html">
                      <img
                        src="assets/images/product-image/organic/thumb-3.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="desc-listcategoreis">
                    <div className="name_categories">
                      <h4>Fresh Fruit</h4>
                    </div>
                    <span className="number_product">17 Products</span>
                    <a href="shop-4-column.html">
                      {" "}
                      Shop Now{" "}
                      <i className="ion-android-arrow-dropright-circle"></i>
                    </a>
                  </div>
                </div>
                <div className="category-list">
                  <div className="category-thumb">
                    <a href="shop-4-column.html">
                      <img
                        src="assets/images/product-image/organic/thumb-4.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="desc-listcategoreis">
                    <div className="name_categories">
                      <h4>Baking & Cooking</h4>
                    </div>
                    <span className="number_product">17 Products</span>
                    <a href="shop-4-column.html">
                      {" "}
                      Shop Now{" "}
                      <i className="ion-android-arrow-dropright-circle"></i>
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- Single item --> */}
              <div className="category-item">
                <div className="category-list mb-30px">
                  <div className="category-thumb">
                    <a href="shop-4-column.html">
                      <img
                        src="assets/images/product-image/organic/thumb-5.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="desc-listcategoreis">
                    <div className="name_categories">
                      <h4>Fresh Cream & Custard</h4>
                    </div>
                    <span className="number_product">17 Products</span>
                    <a href="shop-4-column.html">
                      {" "}
                      Shop Now{" "}
                      <i className="ion-android-arrow-dropright-circle"></i>
                    </a>
                  </div>
                </div>
                <div className="category-list">
                  <div className="category-thumb">
                    <a href="shop-4-column.html">
                      <img
                        src="assets/images/product-image/organic/thumb-6.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="desc-listcategoreis">
                    <div className="name_categories">
                      <h4>Milk, Butter & Eggs</h4>
                    </div>
                    <span className="number_product">17 Products</span>
                    <a href="shop-4-column.html">
                      {" "}
                      Shop Now{" "}
                      <i className="ion-android-arrow-dropright-circle"></i>
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- Single item --> */}
              <div className="category-item">
                <div className="category-list mb-30px">
                  <div className="category-thumb">
                    <a href="shop-4-column.html">
                      <img
                        src="assets/images/product-image/organic/thumb-7.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="desc-listcategoreis">
                    <div className="name_categories">
                      <h4>Spreads & Margarine</h4>
                    </div>
                    <span className="number_product">17 Products</span>
                    <a href="shop-4-column.html">
                      {" "}
                      Shop Now{" "}
                      <i className="ion-android-arrow-dropright-circle"></i>
                    </a>
                  </div>
                </div>
                <div className="category-list">
                  <div className="category-thumb">
                    <a href="shop-4-column.html">
                      <img
                        src="assets/images/product-image/organic/thumb-8.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="desc-listcategoreis">
                    <div className="name_categories">
                      <h4>Fresh Vegetables</h4>
                    </div>
                    <span className="number_product">17 Products</span>
                    <a href="shop-4-column.html">
                      {" "}
                      Shop Now{" "}
                      <i className="ion-android-arrow-dropright-circle"></i>
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- Single item --> */}
          </OwlCarousel>
            </div>
      </div>
    </div>
  );
};

export default PopularCategories;
