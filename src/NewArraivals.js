import React from "react";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./owl.css";

const NewArraivals = () => {
  return (
    <div>
      <div>
        <div className="recent-product-slider">
          <OwlCarousel
            items={6}
            smartSpeed={1000}
            className="owl-theme"
            navText={[
              "<div style='color: red; font-weight: bold'>prev</div>",
              "<div style='color: red; font-weight: bold'>next</div>",
            ]}
            dots={false}
            nav={true}
            margin={8}
            mouseDrag={false}
          >
            {/* <!-- Product Single Item --> */}
            <div className="product-inner-item">
              <article className="list-product mb-30px">
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
                <div className="product-decs">
                  <a className="inner-link" href="shop-4-column.html">
                    <span>STUDIO DESIGN</span>
                  </a>
                  <h2>
                    <a href="single-product.html" className="product-link">
                      Originals Kaval Windbr...
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
                      <li className="old-price">€23.90</li>
                      <li className="current-price">€21.51</li>
                      <li className="discount-price">-10%</li>
                    </ul>
                  </div>
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
              </article>
              <article className="list-product">
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
                <div className="product-decs">
                  <a className="inner-link" href="shop-4-column.html">
                    <span>STUDIO DESIGN</span>
                  </a>
                  <h2>
                    <a href="single-product.html" className="product-link">
                      Juicy Couture Juicy Quil...
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
                      <li className="old-price">€35.90</li>
                      <li className="current-price">€34.11</li>
                      <li className="discount-price">-5%</li>
                    </ul>
                  </div>
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
              </article>
            </div>
            {/* <!-- Product Single Item --> */}
            <div className="product-inner-item">
              <article className="list-product mb-30px">
                <div className="img-block">
                  <a href="single-product.html" className="thumbnail">
                    <img
                      className="first-img"
                      src="assets/images/product-image/organic/product-4.jpg"
                      alt=""
                    />
                    <img
                      className="second-img"
                      src="assets/images/product-image/organic/product-13.jpg"
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
                <div className="product-decs">
                  <a className="inner-link" href="shop-4-column.html">
                    <span>GRAPHIC CORNER</span>
                  </a>
                  <h2>
                    <a href="single-product.html" className="product-link">
                      Brixton Patrol All Terr...
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
                      <li className="old-price not-cut">€29.90</li>
                    </ul>
                  </div>
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
              </article>
              <article className="list-product">
                <div className="img-block">
                  <a href="single-product.html" className="thumbnail">
                    <img
                      className="first-img"
                      src="assets/images/product-image/organic/product-10.jpg"
                      alt=""
                    />
                    <img
                      className="second-img"
                      src="assets/images/product-image/organic/product-10.jpg"
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
                <div className="product-decs">
                  <a className="inner-link" href="shop-4-column.html">
                    <span>STUDIO DESIGN</span>
                  </a>
                  <h2>
                    <a href="single-product.html" className="product-link">
                      New Luxury Men's Slim...
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
                      <li className="old-price not-cut">€29.90</li>
                    </ul>
                  </div>
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
              </article>
            </div>
            {/* <!-- Product Single Item --> */}
            <div className="product-inner-item">
              <article className="list-product mb-30px">
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
                <div className="product-decs">
                  <a className="inner-link" href="shop-4-column.html">
                    <span>STUDIO DESIGN</span>
                  </a>
                  <h2>
                    <a href="single-product.html" className="product-link">
                      Originals Kaval Windbr...
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
                      <li className="old-price">€35.90</li>
                      <li className="current-price">€34.11</li>
                      <li className="discount-price">-5%</li>
                    </ul>
                  </div>
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
              </article>
              <article className="list-product">
                <div className="img-block">
                  <a href="single-product.html" className="thumbnail">
                    <img
                      className="first-img"
                      src="assets/images/product-image/organic/product-1.jpg"
                      alt=""
                    />
                    <img
                      className="second-img"
                      src="assets/images/product-image/organic/product-1.jpg"
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
                <div className="product-decs">
                  <a className="inner-link" href="shop-4-column.html">
                    <span>STUDIO DESIGN</span>
                  </a>
                  <h2>
                    <a href="single-product.html" className="product-link">
                      Juicy Couture Juicy Quil...
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
                      <li className="old-price">€35.90</li>
                      <li className="current-price">€34.11</li>
                      <li className="discount-price">-5%</li>
                    </ul>
                  </div>
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
              </article>
            </div>
            {/* <!-- Product Single Item --> */}
            <div className="product-inner-item">
              <article className="list-product mb-30px">
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
                <div className="product-decs">
                  <a className="inner-link" href="shop-4-column.html">
                    <span>STUDIO DESIGN</span>
                  </a>
                  <h2>
                    <a href="single-product.html" className="product-link">
                      Madden by Steve Madd...
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
                      <li className="old-price">€11.90</li>
                      <li className="current-price">€10.12</li>
                      <li className="discount-price">-15%</li>
                    </ul>
                  </div>
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
              </article>
              <article className="list-product">
                <div className="img-block">
                  <a href="single-product.html" className="thumbnail">
                    <img
                      className="first-img"
                      src="assets/images/product-image/organic/product-17.jpg"
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
                <div className="product-decs">
                  <a className="inner-link" href="shop-4-column.html">
                    <span>STUDIO DESIGN</span>
                  </a>
                  <h2>
                    <a href="single-product.html" className="product-link">
                      Trans-Weight Hooded...
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
                      <li className="old-price not-cut">€19.90</li>
                    </ul>
                  </div>
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
              </article>
            </div>
            {/* <!-- Product Single Item --> */}
            <div className="product-inner-item">
              <article className="list-product mb-30px">
                <div className="img-block">
                  <a href="single-product.html" className="thumbnail">
                    <img
                      className="first-img"
                      src="assets/images/product-image/organic/product-9.jpg"
                      alt=""
                    />
                    <img
                      className="second-img"
                      src="assets/images/product-image/organic/product-9.jpg"
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
                <div className="product-decs">
                  <a className="inner-link" href="shop-4-column.html">
                    <span>STUDIO DESIGN</span>
                  </a>
                  <h2>
                    <a href="single-product.html" className="product-link">
                      Water and Wind Resist...
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
                      <li className="old-price not-cut">€11.90</li>
                    </ul>
                  </div>
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
              </article>
              <article className="list-product">
                <div className="img-block">
                  <a href="single-product.html" className="thumbnail">
                    <img
                      className="first-img"
                      src="assets/images/product-image/organic/product-2.jpg"
                      alt=""
                    />
                    <img
                      className="second-img"
                      src="assets/images/product-image/organic/product-15.jpg"
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
                <div className="product-decs">
                  <a className="inner-link" href="shop-4-column.html">
                    <span>STUDIO DESIGN</span>
                  </a>
                  <h2>
                    <a href="single-product.html" className="product-link">
                      New Balance Fresh Foa...
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
                      <li className="current-price">€15.11</li>
                      <li className="discount-price">-20%</li>
                    </ul>
                  </div>
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
              </article>
            </div>
            {/* <!-- Product Single Item --> */}
            <div className="product-inner-item">
              <article className="list-product mb-30px">
                <div className="img-block">
                  <a href="single-product.html" className="thumbnail">
                    <img
                      className="first-img"
                      src="assets/images/product-image/organic/product-18.jpg"
                      alt=""
                    />
                    <img
                      className="second-img"
                      src="assets/images/product-image/organic/product-18.jpg"
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
                <div className="product-decs">
                  <a className="inner-link" href="shop-4-column.html">
                    <span>STUDIO DESIGN</span>
                  </a>
                  <h2>
                    <a href="single-product.html" className="product-link">
                      Juicy Couture Solid Slee...
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
                      <li className="old-price not-cut">€18.90</li>
                    </ul>
                  </div>
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
              </article>
              <article className="list-product">
                <div className="img-block">
                  <a href="single-product.html" className="thumbnail">
                    <img
                      className="first-img"
                      src="assets/images/product-image/organic/product-19.jpg"
                      alt=""
                    />
                    <img
                      className="second-img"
                      src="assets/images/product-image/organic/product-20.jpg"
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
                <div className="product-decs">
                  <a className="inner-link" href="shop-4-column.html">
                    <span>STUDIO DESIGN</span>
                  </a>
                  <h2>
                    <a href="single-product.html" className="product-link">
                      New Balance Fresh Foa...
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
                      <li className="old-price not-cut">€18.90</li>
                    </ul>
                  </div>
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
              </article>
            </div>
            {/* <!-- Product Single Item --> */}
            <div className="product-inner-item">
              <article className="list-product mb-30px">
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
                <div className="product-decs">
                  <a className="inner-link" href="shop-4-column.html">
                    <span>STUDIO DESIGN</span>
                  </a>
                  <h2>
                    <a href="single-product.html" className="product-link">
                      Originals Kaval Windbr...
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
                      <li className="old-price">€23.90</li>
                      <li className="current-price">€21.51</li>
                      <li className="discount-price">-10%</li>
                    </ul>
                  </div>
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
              </article>
              <article className="list-product">
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
                <div className="product-decs">
                  <a className="inner-link" href="shop-4-column.html">
                    <span>STUDIO DESIGN</span>
                  </a>
                  <h2>
                    <a href="single-product.html" className="product-link">
                      Juicy Couture Juicy Quil...
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
                      <li className="old-price">€35.90</li>
                      <li className="current-price">€34.11</li>
                      <li className="discount-price">-5%</li>
                    </ul>
                  </div>
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
              </article>
            </div>
            {/* <!-- Product Single Item --> */}
            <div className="product-inner-item">
              <article className="list-product mb-30px">
                <div className="img-block">
                  <a href="single-product.html" className="thumbnail">
                    <img
                      className="first-img"
                      src="assets/images/product-image/organic/product-4.jpg"
                      alt=""
                    />
                    <img
                      className="second-img"
                      src="assets/images/product-image/organic/product-13.jpg"
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
                <div className="product-decs">
                  <a className="inner-link" href="shop-4-column.html">
                    <span>GRAPHIC CORNER</span>
                  </a>
                  <h2>
                    <a href="single-product.html" className="product-link">
                      Brixton Patrol All Terr...
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
                      <li className="old-price not-cut">€29.90</li>
                    </ul>
                  </div>
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
              </article>
              <article className="list-product">
                <div className="img-block">
                  <a href="single-product.html" className="thumbnail">
                    <img
                      className="first-img"
                      src="assets/images/product-image/organic/product-10.jpg"
                      alt=""
                    />
                    <img
                      className="second-img"
                      src="assets/images/product-image/organic/product-10.jpg"
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
                <div className="product-decs">
                  <a className="inner-link" href="shop-4-column.html">
                    <span>STUDIO DESIGN</span>
                  </a>
                  <h2>
                    <a href="single-product.html" className="product-link">
                      New Luxury Men's Slim...
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
                      <li className="old-price not-cut">€29.90</li>
                    </ul>
                  </div>
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
              </article>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};

export default NewArraivals;
