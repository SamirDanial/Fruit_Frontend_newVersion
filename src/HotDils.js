import React from "react";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./owl.css";

const HotDils = () => {
  return (
    <div>
      <div>
        <div className="hot-deal-2">
        <OwlCarousel items={2} smartSpeed={1000} navText={["<div style='color: red; font-weight: bold'>prev</div>", "<div style='color: red; font-weight: bold'>next</div>"]} className="owl-theme" dots={false} nav={true} margin={8} >
              {/* <!-- Single Item --> */}
              <article className="list-product">
                <div className="hot-item-inner">
                  <div className="img-block">
                    <a href="single-product.html" className="thumbnail">
                      <img
                        className="first-img"
                        src="assets/images/product-image/organic/product-16.jpg"
                        alt=""
                      />
                      <img
                        className="second-img"
                        src="assets/images/product-image/organic/product-16.jpg"
                        alt=""
                      />
                    </a>
                    <div className="quick-view">
                      <a
                        className="quick_view"
                        href="#"
                        data-link-action="quickview"
                        title="Quick view"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i className="ion-ios-search-strong"></i>
                      </a>
                    </div>
                  </div>
                  <ul className="product-flag">
                    <li className="new">New</li>
                  </ul>
                </div>
                <div className="product-wrapper">
                  <div className="product-decs">
                    <a className="inner-link" href="shop-4-column.html">
                      <span>STUDIO DESIGN</span>
                    </a>
                    <h2>
                      <a href="single-product.html" className="product-link">
                        Originals Kaval Windbreaker Wint...
                      </a>
                    </h2>
                    <div className="rating-product">
                      <i className="ion-android-star"></i>
                      <i className="ion-android-star"></i>
                      <i className="ion-android-star"></i>
                      <i className="ion-android-star"></i>
                      <i className="ion-android-star"></i>
                    </div>
                    <div className="pricing-meta">
                      <ul>
                        <li className="old-price">€18.90</li>
                        <li className="current-price">€34.21</li>
                        <li className="discount-price">-5%</li>
                      </ul>
                    </div>
                    <div className="add-to-link">
                      <ul>
                        <li className="cart">
                          <a className="cart-btn" href="#">
                            ADD TO CART{" "}
                          </a>
                        </li>
                        <li>
                          <a href="wishlist.html">
                            <i className="ion-android-favorite-outline"></i>
                          </a>
                        </li>
                        <li>
                          <a href="compare.html">
                            <i className="ion-ios-shuffle-strong"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="in-stock">
                    Availability: <span>300 In Stock</span>
                  </div>
                  <div className="clockdiv">
                    <div className="title_countdown">
                      Hurry Up! Offers ends in:
                    </div>
                    <div data-countdown="2021/12/31"></div>
                  </div>
                </div>
              </article>
              {/* <!-- Single Item --> */}
              <article className="list-product">
                <div className="hot-item-inner">
                  <div className="img-block">
                    <a href="single-product.html" className="thumbnail">
                      <img
                        className="first-img"
                        src="assets/images/product-image/organic/product-11.jpg"
                        alt=""
                      />
                      <img
                        className="second-img"
                        src="assets/images/product-image/organic/product-12.jpg"
                        alt=""
                      />
                    </a>
                    <div className="quick-view">
                      <a
                        className="quick_view"
                        href="#"
                        data-link-action="quickview"
                        title="Quick view"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i className="ion-ios-search-strong"></i>
                      </a>
                    </div>
                  </div>
                  <ul className="product-flag">
                    <li className="new">New</li>
                  </ul>
                </div>
                <div className="product-wrapper">
                  <div className="product-decs">
                    <a className="inner-link" href="shop-4-column.html">
                      <span>STUDIO DESIGN</span>
                    </a>
                    <h2>
                      <a href="single-product.html" className="product-link">
                        Originals Kaval Windbreaker Wint...
                      </a>
                    </h2>
                    <div className="rating-product">
                      <i className="ion-android-star"></i>
                      <i className="ion-android-star"></i>
                      <i className="ion-android-star"></i>
                      <i className="ion-android-star"></i>
                      <i className="ion-android-star"></i>
                    </div>
                    <div className="pricing-meta">
                      <ul>
                        <li className="old-price">€18.90</li>
                        <li className="current-price">€34.21</li>
                        <li className="discount-price">-5%</li>
                      </ul>
                    </div>
                    <div className="add-to-link">
                      <ul>
                        <li className="cart">
                          <a className="cart-btn" href="#">
                            ADD TO CART{" "}
                          </a>
                        </li>
                        <li>
                          <a href="wishlist.html">
                            <i className="ion-android-favorite-outline"></i>
                          </a>
                        </li>
                        <li>
                          <a href="compare.html">
                            <i className="ion-ios-shuffle-strong"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="in-stock">
                    Availability: <span>300 In Stock</span>
                  </div>
                  <div className="clockdiv">
                    <div className="title_countdown">
                      Hurry Up! Offers ends in:
                    </div>
                    <div data-countdown="2021/12/31"></div>
                  </div>
                </div>
              </article>
              {/* <!-- Single Item --> */}
              <article className="list-product">
                <div className="hot-item-inner">
                  <div className="img-block">
                    <a href="single-product.html" className="thumbnail">
                      <img
                        className="first-img"
                        src="assets/images/product-image/organic/product-15.jpg"
                        alt=""
                      />
                      <img
                        className="second-img"
                        src="assets/images/product-image/organic/product-2.jpg"
                        alt=""
                      />
                    </a>
                    <div className="quick-view">
                      <a
                        className="quick_view"
                        href="#"
                        data-link-action="quickview"
                        title="Quick view"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i className="ion-ios-search-strong"></i>
                      </a>
                    </div>
                  </div>
                  <ul className="product-flag">
                    <li className="new">New</li>
                  </ul>
                </div>
                <div className="product-wrapper">
                  <div className="product-decs">
                    <a className="inner-link" href="shop-4-column.html">
                      <span>STUDIO DESIGN</span>
                    </a>
                    <h2>
                      <a href="single-product.html" className="product-link">
                        New Balance Fresh Foam Kaymin
                      </a>
                    </h2>
                    <div className="rating-product">
                      <i className="ion-android-star"></i>
                      <i className="ion-android-star"></i>
                      <i className="ion-android-star"></i>
                      <i className="ion-android-star"></i>
                      <i className="ion-android-star"></i>
                    </div>
                    <div className="pricing-meta">
                      <ul>
                        <li className="old-price">€18.90</li>
                        <li className="current-price">€34.21</li>
                        <li className="discount-price">-5%</li>
                      </ul>
                    </div>
                    <div className="add-to-link">
                      <ul>
                        <li className="cart">
                          <a className="cart-btn" href="#">
                            ADD TO CART{" "}
                          </a>
                        </li>
                        <li>
                          <a href="wishlist.html">
                            <i className="ion-android-favorite-outline"></i>
                          </a>
                        </li>
                        <li>
                          <a href="compare.html">
                            <i className="ion-ios-shuffle-strong"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="in-stock">
                    Availability: <span>299 In Stock</span>
                  </div>
                  <div className="clockdiv">
                    <div className="title_countdown">
                      Hurry Up! Offers ends in:
                    </div>
                    <div data-countdown="2021/12/31"></div>
                  </div>
                </div>
              </article>
              {/* <!-- Single Item --> */}
              <article className="list-product">
                <div className="hot-item-inner">
                  <div className="img-block">
                    <a href="single-product.html" className="thumbnail">
                      <img
                        className="first-img"
                        src="assets/images/product-image/organic/product-14.jpg"
                        alt=""
                      />
                      <img
                        className="second-img"
                        src="assets/images/product-image/organic/product-14.jpg"
                        alt=""
                      />
                    </a>
                    <div className="quick-view">
                      <a
                        className="quick_view"
                        href="#"
                        data-link-action="quickview"
                        title="Quick view"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i className="ion-ios-search-strong"></i>
                      </a>
                    </div>
                  </div>
                  <ul className="product-flag">
                    <li className="new">New</li>
                  </ul>
                </div>
                <div className="product-wrapper">
                  <div className="product-decs">
                    <a className="inner-link" href="shop-4-column.html">
                      <span>STUDIO DESIGN</span>
                    </a>
                    <h2>
                      <a href="single-product.html" className="product-link">
                        Madden by Steve Madden Cale 6
                      </a>
                    </h2>
                    <div className="rating-product">
                      <i className="ion-android-star"></i>
                      <i className="ion-android-star"></i>
                      <i className="ion-android-star"></i>
                      <i className="ion-android-star"></i>
                      <i className="ion-android-star"></i>
                    </div>
                    <div className="pricing-meta">
                      <ul>
                        <li className="old-price">€18.90</li>
                        <li className="current-price">€34.21</li>
                        <li className="discount-price">-5%</li>
                      </ul>
                    </div>
                    <div className="add-to-link">
                      <ul>
                        <li className="cart">
                          <a className="cart-btn" href="#">
                            ADD TO CART{" "}
                          </a>
                        </li>
                        <li>
                          <a href="wishlist.html">
                            <i className="ion-android-favorite-outline"></i>
                          </a>
                        </li>
                        <li>
                          <a href="compare.html">
                            <i className="ion-ios-shuffle-strong"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="in-stock">
                    Availability: <span>299 In Stock</span>
                  </div>
                  <div className="clockdiv">
                    <div className="title_countdown">
                      Hurry Up! Offers ends in:
                    </div>
                    <div data-countdown="2021/12/31"></div>
                  </div>
                </div>
              </article>
              {/* <!-- Single Item --> */}
        </OwlCarousel>
            </div>
      </div>
    </div>
  );
};

export default HotDils;
