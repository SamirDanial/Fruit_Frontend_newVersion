import React from "react";
import {NavLink} from 'react-router-dom';
import ThumbnailImage from "../../ThumbnailImage";

const Shop = () => {
  return (
    <>
      <div>
        <div className="mobile-search-option pb-3 d-lg-none">
          <div className="container-fluid">
            <div className="header-account-list">
              <div className="dropdown-search">
                <form action="#">
                  <input
                    placeholder="Search entire store here ..."
                    type="text"
                  />
                  <div className="search-category">
                    <select className="bootstrap-select" name="poscats">
                      <option value={0}>All categories</option>
                      <option value={104}>Fresh Food</option>
                      <option value={183}>- - Fresh Fruit</option>
                      <option value={187}>- - - - Bananas</option>
                      <option value={188}>- - - - Apples &amp; Pears</option>
                      <option value={189}>
                        - - - - Berries &amp; Cherries
                      </option>
                      <option value={190}>
                        - - - - Oranges &amp; Citrus Fruit
                      </option>
                      <option value={191}>- - - - Grapes</option>
                      <option value={184}>- - Fresh Vegetables</option>
                      <option value={192}>
                        - - - - Potatoes &amp; Sweet Potatoes
                      </option>
                      <option value={193}>- - - - Onions &amp; Leeks</option>
                      <option value={194}>
                        - - - - Carrots &amp; Root Vegetables
                      </option>
                      <option value={195}>
                        - - - - Broccoli &amp; Cauliflower
                      </option>
                      <option value={196}>- - - - Cabbages &amp; Greens</option>
                      <option value={185}>- - Fresh Salad &amp; Dips</option>
                      <option value={197}>
                        - - - - Lettuce &amp; Salad bags
                      </option>
                      <option value={198}>- - - - Tomatoes</option>
                      <option value={199}>- - - - Cucumber</option>
                      <option value={200}>- - - - Celery</option>
                      <option value={201}>- - - - Peppers</option>
                      <option value={186}>- - Milk, Butter &amp; Eggs</option>
                      <option value={202}>- - - - Milk</option>
                      <option value={203}>
                        - - - - Spreads &amp; Margarine
                      </option>
                      <option value={204}>
                        - - - - Fresh Cream &amp; Custard
                      </option>
                      <option value={205}>- - - - Eggs</option>
                      <option value={206}>- - - - Baking &amp; Cooking</option>
                    </select>
                  </div>
                  <button type="submit">
                    <i className="ion-ios-search-strong" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* offcanvas overlay start */}
        <div className="offcanvas-overlay" />
        {/* offcanvas overlay end */}
        {/* OffCanvas Cart Start */}
        <div id="offcanvas-cart" className="offcanvas offcanvas-cart">
          <div className="inner">
            <div className="head">
              <span className="title">Cart</span>
              <button className="offcanvas-close">×</button>
            </div>
            <div className="body customScroll">
              <ul className="minicart-product-list">
                <li>
                  <a href="single-product.html" className="image">
                    <img
                      src="assets/images/product-image/mini-cart/1.jpg"
                      alt="Cart product Image"
                    />
                  </a>
                  <div className="content">
                    <a href="single-product.html" className="title">
                      Juicy Couture...
                    </a>
                    <span className="quantity-price">
                      1 x <span className="amount">$18.86</span>
                    </span>
                    <a href="#" className="remove">
                      ×
                    </a>
                  </div>
                </li>
                <li>
                  <a href="single-product.html" className="image">
                    <img
                      src="assets/images/product-image/mini-cart/2.jpg"
                      alt="Cart product Image"
                    />
                  </a>
                  <div className="content">
                    <a href="single-product.html" className="title">
                      Water and Wind...
                    </a>
                    <span className="quantity-price">
                      1 x <span className="amount">$43.28</span>
                    </span>
                    <a href="#" className="remove">
                      ×
                    </a>
                  </div>
                </li>
                <li>
                  <a href="single-product.html" className="image">
                    <img
                      src="assets/images/product-image/mini-cart/3.jpg"
                      alt="Cart product Image"
                    />
                  </a>
                  <div className="content">
                    <a href="single-product.html" className="title">
                      Fila Locker Room...
                    </a>
                    <span className="quantity-price">
                      1 x <span className="amount">$37.34</span>
                    </span>
                    <a href="#" className="remove">
                      ×
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="shopping-cart-total">
              <h4>
                Subtotal : <span>$20.00</span>
              </h4>
              <h4>
                Shipping : <span>$7.00</span>
              </h4>
              <h4>
                Taxes : <span>$0.00</span>
              </h4>
              <h4 className="shop-total">
                Total : <span>$27.00</span>
              </h4>
            </div>
            <div className="foot">
              <div className="buttons">
                <a
                  href="cart.html"
                  className="btn btn-dark btn-hover-primary mb-30px"
                >
                  view cart
                </a>
                <a
                  href="checkout.html"
                  className="btn btn-outline-dark current-btn"
                >
                  checkout
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* OffCanvas Cart End */}
        {/* OffCanvas Menu Start */}
        <div
          id="offcanvas-mobile-menu"
          className="offcanvas offcanvas-mobile-menu"
        >
          <button className="offcanvas-close" />
          {/* contact Info */}
          <div className="contact-info d-flex align-items-center justify-content-center color-black py-3">
            <img
              className="me-3"
              src="assets/images/icons/mobile-contact.png"
              alt
            />
            <p>Call us:</p>
            <a className="color-black" href="tel:(+800)345678">
              (+800)345678
            </a>
          </div>
          {/* offcanvas compare & wishlist */}
          <div className="user-panel">
            <ul className="d-flex justify-content-between">
              <li className="m-0">
                <a href="compare.html">
                  <i className="ion-ios-shuffle-strong" />
                  Compare (0)
                </a>
              </li>
              <li>
                <a href="wishlist.html">
                  <i className="ion-android-favorite-outline" />
                  Wishlist (0)
                </a>
              </li>
            </ul>
          </div>
          {/* offcanvas currency */}
          <div className="offcanvas-userpanel">
            <ul>
              <li className="offcanvas-userpanel__role">
                <a href="#">
                  USD $ <i className="ion-ios-arrow-down" />
                </a>
                <ul className="user-sub-menu">
                  <li>
                    <a className="current" href="#">
                      USD $
                    </a>
                  </li>
                  <li>
                    <a href="#">EUR €</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          {/* offcanvas language */}
          <div className="offcanvas-userpanel">
            <ul>
              <li className="offcanvas-userpanel__role">
                <a href="#">
                  <img src="assets/images/icons/1.jpg" alt />
                  English <i className="ion-ios-arrow-down" />
                </a>
                <ul className="user-sub-menu">
                  <li>
                    <a className="current" href="#">
                      <img src="assets/images/icons/1.jpg" alt />
                      English
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="assets/images/icons/2.jpg" alt /> Français
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="menu-close">menu</div>
          {/* offcanvas menu */}
        </div>
        {/* OffCanvas Menu End */}
        {/* Header End */}
        {/* Breadcrumb Area start */}
        <section className="breadcrumb-area">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="breadcrumb-content">
                  <h1 className="breadcrumb-hrading">Shop Page</h1>
                  <ul className="breadcrumb-links">
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>Shop Left Sidebar</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Breadcrumb Area End */}
        {/* Shop Category Area End */}
        <div className="shop-category-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 order-lg-last col-md-12 order-md-first">
                {/* Shop Top Area Start */}
                <div className="shop-top-bar">
                  {/* Left Side start */}
                  <div className="shop-tab nav mb-res-sm-15">
                    <a className="active" href="#shop-1" data-bs-toggle="tab">
                      <i className="fa fa-th show_grid" />
                    </a>
                    <a href="#shop-2" data-bs-toggle="tab">
                      <i className="fa fa-list-ul" />
                    </a>
                    <p>There Are 17 Products.</p>
                  </div>
                  {/* Left Side End */}
                  {/* Right Side Start */}
                  <div className="select-shoing-wrap">
                    <div className="shot-product">
                      <p>Sort By:</p>
                    </div>
                    <div className="shop-select">
                      <select>
                        <option value>Sort by newness</option>
                        <option value>A to Z</option>
                        <option value> Z to A</option>
                        <option value>In stock</option>
                      </select>
                    </div>
                  </div>
                  {/* Right Side End */}
                </div>
                {/* Shop Top Area End */}
                {/* Shop Bottom Area Start */}
                <div className="shop-bottom-area mt-35">
                  {/* Shop Tab Content Start */}
                  <div className="tab-content jump">
                    {/* Tab One Start */}
                    <div id="shop-1" className="tab-pane active">
                      <div className="row">
                        <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6 col-xs-12">
                          <article className="list-product">
                            <div className="img-block">
                              <NavLink
                                to="/product_detail/123"
                                className="thumbnail"
                              >
                                <img
                                  className="first-img"
                                  src="assets/images/product-image/organic/product-1.jpg"
                                  alt
                                />
                                <img
                                  className="second-img"
                                  src="assets/images/product-image/organic/product-1.jpg"
                                  alt
                                />
                              </NavLink>
                              <div className="quick-view">
                                <a
                                  className="quick_view"
                                  href="#"
                                  data-link-action="quickview"
                                  title="Quick view"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModal"
                                >
                                  <i className="ion-ios-search-strong" />
                                </a>
                              </div>
                            </div>
                            <ul className="product-flag">
                              <li className="new">New</li>
                            </ul>
                            <div className="product-decs">
                              <a
                                className="inner-link"
                                href="shop-4-column.html"
                              >
                                <span>STUDIO DESIGN</span>
                              </a>
                              <h2>
                                <a
                                  href="single-product.html"
                                  className="product-link"
                                >
                                  Juicy Couture Juicy Quilted T..
                                </a>
                              </h2>
                              <div className="rating-product">
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                              </div>
                              <div className="pricing-meta">
                                <ul>
                                  <li className="old-price">€18.90</li>
                                  <li className="current-price">€34.21</li>
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
                                    <i className="ion-android-favorite-outline" />
                                  </a>
                                </li>
                                <li>
                                  <a href="compare.html">
                                    <i className="ion-ios-shuffle-strong" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </article>
                        </div>
                      </div>
                    </div>
                    {/* Tab One End */}
                    {/* Tab Two Start */}
                    <div id="shop-2" className="tab-pane">
                      <div className="shop-list-wrap mb-30px scroll-zoom">
                        <div className="row list-product m-0px">
                          <div className="col-md-12">
                            <div className="row">
                              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="left-img">
                                  <div className="img-block">
                                    <a
                                      href="single-product.html"
                                      className="thumbnail"
                                    >
                                      <img
                                        className="first-img"
                                        src="assets/images/product-image/organic/product-7.jpg"
                                        alt
                                      />
                                      <img
                                        className="second-img"
                                        src="assets/images/product-image/organic/product-8.jpg"
                                        alt
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
                                        <i className="ion-ios-search-strong" />
                                      </a>
                                    </div>
                                  </div>
                                  <ul className="product-flag">
                                    <li className="new">New</li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                                <div className="product-desc-wrap">
                                  <div className="product-decs">
                                    <a
                                      className="inner-link"
                                      href="shop-4-column.html"
                                    >
                                      <span>GRAPHIC CORNER</span>
                                    </a>
                                    <h2>
                                      <a
                                        href="single-product.html"
                                        className="product-link"
                                      >
                                        Fila Locker Room Varsity Jacket
                                      </a>
                                    </h2>
                                    <div className="rating-product">
                                      <i className="ion-android-star" />
                                      <i className="ion-android-star" />
                                      <i className="ion-android-star" />
                                      <i className="ion-android-star" />
                                      <i className="ion-android-star" />
                                    </div>
                                    <div className="pricing-meta">
                                      <ul>
                                        <li className="old-price not-cut">
                                          €9.90
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="product-intro-info">
                                      <p>
                                        Create a cool and sporty look with the
                                        FILA® Locker Room Varsity Jacket.
                                      </p>
                                      <p>
                                        Comfortable cotton-blend fabrication.
                                      </p>
                                      <p>
                                        Classic varsity jacket features brand
                                        details throughout.
                                      </p>
                                      <p>Flat knit collar.</p>
                                    </div>
                                    <div className="in-stock">
                                      Availability: <span>299 In Stock</span>
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
                                          <i className="ion-android-favorite-outline" />
                                        </a>
                                      </li>
                                      <li>
                                        <a href="compare.html">
                                          <i className="ion-ios-shuffle-strong" />
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="shop-list-wrap mb-30px scroll-zoom">
                        <div className="row list-product m-0px">
                          <div className="col-md-12">
                            <div className="row">
                              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="left-img">
                                  <div className="img-block">
                                    <a
                                      href="single-product.html"
                                      className="thumbnail"
                                    >
                                      <img
                                        className="first-img"
                                        src="assets/images/product-image/organic/product-5.jpg"
                                        alt
                                      />
                                      <img
                                        className="second-img"
                                        src="assets/images/product-image/organic/product-5.jpg"
                                        alt
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
                                        <i className="ion-ios-search-strong" />
                                      </a>
                                    </div>
                                  </div>
                                  <ul className="product-flag">
                                    <li className="new">New</li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                                <div className="product-desc-wrap">
                                  <div className="product-decs">
                                    <a
                                      className="inner-link"
                                      href="shop-4-column.html"
                                    >
                                      <span>GRAPHIC CORNER</span>
                                    </a>
                                    <h2>
                                      <a
                                        href="single-product.html"
                                        className="product-link"
                                      >
                                        Juicy Couture Tricot Logo Stripe Jacket
                                      </a>
                                    </h2>
                                    <div className="rating-product">
                                      <i className="ion-android-star" />
                                      <i className="ion-android-star" />
                                      <i className="ion-android-star" />
                                      <i className="ion-android-star" />
                                      <i className="ion-android-star" />
                                    </div>
                                    <div className="pricing-meta">
                                      <ul>
                                        <li className="old-price not-cut">
                                          €18.90
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="product-intro-info">
                                      <p>
                                        Freshen up your look with the Juicy
                                        Couture™ Tricot Logo Stripe Jacket.
                                      </p>
                                      <p>
                                        Polyester fabrication flaunts stripe and
                                        brand logo detail at sleeves.
                                      </p>
                                      <p>Stand collar.</p>
                                      <p>Front-zipper closure.</p>
                                      <p>100% polyester.</p>
                                    </div>
                                    <div className="in-stock">
                                      Availability: <span>300 In Stock</span>
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
                                          <i className="ion-android-favorite-outline" />
                                        </a>
                                      </li>
                                      <li>
                                        <a href="compare.html">
                                          <i className="ion-ios-shuffle-strong" />
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="shop-list-wrap mb-30px scroll-zoom">
                        <div className="row list-product m-0px">
                          <div className="col-md-12">
                            <div className="row">
                              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="left-img">
                                  <div className="img-block">
                                    <a
                                      href="single-product.html"
                                      className="thumbnail"
                                    >
                                      <img
                                        className="first-img"
                                        src="assets/images/product-image/organic/product-19.jpg"
                                        alt
                                      />
                                      <img
                                        className="second-img"
                                        src="assets/images/product-image/organic/product-20.jpg"
                                        alt
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
                                        <i className="ion-ios-search-strong" />
                                      </a>
                                    </div>
                                  </div>
                                  <ul className="product-flag">
                                    <li className="new">New</li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                                <div className="product-desc-wrap">
                                  <div className="product-decs">
                                    <a
                                      className="inner-link"
                                      href="shop-4-column.html"
                                    >
                                      <span>STUDIO DESIGN</span>
                                    </a>
                                    <h2>
                                      <a
                                        href="single-product.html"
                                        className="product-link"
                                      >
                                        New Balance Fresh Foam LAZR v1 Sport
                                      </a>
                                    </h2>
                                    <div className="rating-product">
                                      <i className="ion-android-star" />
                                      <i className="ion-android-star" />
                                      <i className="ion-android-star" />
                                      <i className="ion-android-star" />
                                      <i className="ion-android-star" />
                                    </div>
                                    <div className="pricing-meta">
                                      <ul>
                                        <li className="old-price not-cut">
                                          €18.90
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="product-intro-info">
                                      <p>
                                        The New Balance® Fresh Foam LAZR v1
                                        Sport running shoe gives you total focus
                                        on the road with its
                                        precision-engineered design.
                                      </p>
                                      <p>Predecessor: None.</p>
                                      <p>Support Type: Neutral.</p>
                                      <p>Flat knit collar.</p>
                                      <p>
                                        Cushioning: Minimal feel with extreme
                                        flexibility.
                                      </p>
                                    </div>
                                    <div className="in-stock">
                                      Availability: <span>300 In Stock</span>
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
                                          <i className="ion-android-favorite-outline" />
                                        </a>
                                      </li>
                                      <li>
                                        <a href="compare.html">
                                          <i className="ion-ios-shuffle-strong" />
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="shop-list-wrap mb-30px scroll-zoom">
                        <div className="row list-product m-0px">
                          <div className="col-md-12">
                            <div className="row">
                              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="left-img">
                                  <div className="img-block">
                                    <a
                                      href="single-product.html"
                                      className="thumbnail"
                                    >
                                      <img
                                        className="first-img"
                                        src="assets/images/product-image/organic/product-18.jpg"
                                        alt
                                      />
                                      <img
                                        className="second-img"
                                        src="assets/images/product-image/organic/product-18.jpg"
                                        alt
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
                                        <i className="ion-ios-search-strong" />
                                      </a>
                                    </div>
                                  </div>
                                  <ul className="product-flag">
                                    <li className="new">New</li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                                <div className="product-desc-wrap">
                                  <div className="product-decs">
                                    <a
                                      className="inner-link"
                                      href="shop-4-column.html"
                                    >
                                      <span>GRAPHIC CORNER</span>
                                    </a>
                                    <h2>
                                      <a
                                        href="single-product.html"
                                        className="product-link"
                                      >
                                        Juicy Couture Solid Sleeve Puffer Jacket
                                      </a>
                                    </h2>
                                    <div className="rating-product">
                                      <i className="ion-android-star" />
                                      <i className="ion-android-star" />
                                      <i className="ion-android-star" />
                                      <i className="ion-android-star" />
                                      <i className="ion-android-star" />
                                    </div>
                                    <div className="pricing-meta">
                                      <ul>
                                        <li className="old-price not-cut">
                                          €18.90
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="product-intro-info">
                                      <p>
                                        Stay toasty with this Juicy Couture™
                                        Solid Sleeve Puffer Jacket!
                                      </p>
                                      <p>Stand collar.</p>
                                      <p>Long sleeves.</p>
                                      <p>100% polyester;</p>
                                      <p>Lining: 100% polyester;</p>
                                      <p>Filling: 100% polyester.</p>
                                    </div>
                                    <div className="in-stock">
                                      Availability: <span>299 In Stock</span>
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
                                          <i className="ion-android-favorite-outline" />
                                        </a>
                                      </li>
                                      <li>
                                        <a href="compare.html">
                                          <i className="ion-ios-shuffle-strong" />
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="shop-list-wrap mb-30px scroll-zoom">
                        <div className="row list-product m-0px">
                          <div className="col-md-12">
                            <div className="row">
                              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="left-img">
                                  <div className="img-block">
                                    <a
                                      href="single-product.html"
                                      className="thumbnail"
                                    >
                                      <img
                                        className="first-img"
                                        src="assets/images/product-image/organic/product-23.jpg"
                                        alt
                                      />
                                      <img
                                        className="second-img"
                                        src="assets/images/product-image/organic/product-22.jpg"
                                        alt
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
                                        <i className="ion-ios-search-strong" />
                                      </a>
                                    </div>
                                  </div>
                                  <ul className="product-flag">
                                    <li className="new">New</li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                                <div className="product-desc-wrap">
                                  <div className="product-decs">
                                    <a
                                      className="inner-link"
                                      href="shop-4-column.html"
                                    >
                                      <span>GRAPHIC CORNER</span>
                                    </a>
                                    <h2>
                                      <a
                                        href="single-product.html"
                                        className="product-link"
                                      >
                                        New Balance Fresh Foam Kaymin
                                      </a>
                                    </h2>
                                    <div className="rating-product">
                                      <i className="ion-android-star" />
                                      <i className="ion-android-star" />
                                      <i className="ion-android-star" />
                                      <i className="ion-android-star" />
                                      <i className="ion-android-star" />
                                    </div>
                                    <div className="pricing-meta">
                                      <ul>
                                        <li className="old-price">€18.90</li>
                                        <li className="current-price">
                                          €15.12
                                        </li>
                                        <li className="discount-price">-20%</li>
                                      </ul>
                                    </div>
                                    <div className="product-intro-info">
                                      <p>
                                        Increase your distance with the superior
                                        cushioning of the Fresh Foam Kaymin
                                        running shoe from New Balance®.
                                      </p>
                                      <p>Predecessor: None.</p>
                                      <p>Support Type: Neutral.</p>
                                      <p>
                                        Cushioning: High energizing cushioning.
                                      </p>
                                    </div>
                                    <div className="in-stock">
                                      Availability: <span>298 In Stock</span>
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
                                          <i className="ion-android-favorite-outline" />
                                        </a>
                                      </li>
                                      <li>
                                        <a href="compare.html">
                                          <i className="ion-ios-shuffle-strong" />
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="shop-list-wrap mb-30px scroll-zoom">
                        <div className="row list-product m-0px">
                          <div className="col-md-12">
                            <div className="row">
                              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="left-img">
                                  <div className="img-block">
                                    <a
                                      href="single-product.html"
                                      className="thumbnail"
                                    >
                                      <img
                                        className="first-img"
                                        src="assets/images/product-image/organic/product-9.jpg"
                                        alt
                                      />
                                      <img
                                        className="second-img"
                                        src="assets/images/product-image/organic/product-9.jpg"
                                        alt
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
                                        <i className="ion-ios-search-strong" />
                                      </a>
                                    </div>
                                  </div>
                                  <ul className="product-flag">
                                    <li className="new">New</li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                                <div className="product-desc-wrap">
                                  <div className="product-decs">
                                    <a
                                      className="inner-link"
                                      href="shop-4-column.html"
                                    >
                                      <span>GRAPHIC CORNER</span>
                                    </a>
                                    <h2>
                                      <a
                                        href="single-product.html"
                                        className="product-link"
                                      >
                                        Water and Wind Resistant Insulated
                                        Jacket
                                      </a>
                                    </h2>
                                    <div className="rating-product">
                                      <i className="ion-android-star" />
                                      <i className="ion-android-star" />
                                      <i className="ion-android-star" />
                                      <i className="ion-android-star" />
                                      <i className="ion-android-star" />
                                    </div>
                                    <div className="pricing-meta">
                                      <ul>
                                        <li className="old-price not-cut">
                                          €11.90
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="product-intro-info">
                                      <p>
                                        Stay ready for a change in weather with
                                        the IZOD® Water and Wind Resistant
                                        Insulated Jacket.
                                      </p>
                                      <p>
                                        Water-resistant jacket keeps you warm
                                        and dry.
                                      </p>
                                      <p>
                                        Stand collar features an attached hood.
                                      </p>
                                      <p>Front-zip closure.</p>
                                    </div>
                                    <div className="in-stock">
                                      Availability: <span>291 In Stock</span>
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
                                          <i className="ion-android-favorite-outline" />
                                        </a>
                                      </li>
                                      <li>
                                        <a href="compare.html">
                                          <i className="ion-ios-shuffle-strong" />
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="shop-list-wrap mb-30px scroll-zoom">
                        <div className="row list-product m-0px">
                          <div className="col-md-12">
                            <div className="row">
                              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="left-img">
                                  <div className="img-block">
                                    <a
                                      href="single-product.html"
                                      className="thumbnail"
                                    >
                                      <img
                                        className="first-img"
                                        src="assets/images/product-image/organic/product-16.jpg"
                                        alt
                                      />
                                      <img
                                        className="second-img"
                                        src="assets/images/product-image/organic/product-17.jpg"
                                        alt
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
                                        <i className="ion-ios-search-strong" />
                                      </a>
                                    </div>
                                  </div>
                                  <ul className="product-flag">
                                    <li className="new">New</li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                                <div className="product-desc-wrap">
                                  <div className="product-decs">
                                    <a
                                      className="inner-link"
                                      href="shop-4-column.html"
                                    >
                                      <span>STUDIO DESIGN</span>
                                    </a>
                                    <h2>
                                      <a
                                        href="single-product.html"
                                        className="product-link"
                                      >
                                        Trans-Weight Hooded Wind and Water
                                        Resistant Shell
                                      </a>
                                    </h2>
                                    <div className="rating-product">
                                      <i className="ion-android-star" />
                                      <i className="ion-android-star" />
                                      <i className="ion-android-star" />
                                      <i className="ion-android-star" />
                                      <i className="ion-android-star-half" />
                                    </div>
                                    <div className="pricing-meta">
                                      <ul>
                                        <li className="old-price not-cut">
                                          €11.90
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="product-intro-info">
                                      <p>
                                        Keep the elements away and warmth
                                        priority number one in this Nautica®
                                        Trans-Weight Hooded Wind and Water
                                        Resistant Shell.
                                      </p>
                                      <p>
                                        Hooded collar with a high collar for
                                        maximum coverage.
                                      </p>
                                      <p>Long sleeves with banded collars.</p>
                                      <p>Zip front closure.</p>
                                    </div>
                                    <div className="in-stock">
                                      Availability: <span>299 In Stock</span>
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
                                          <i className="ion-android-favorite-outline" />
                                        </a>
                                      </li>
                                      <li>
                                        <a href="compare.html">
                                          <i className="ion-ios-shuffle-strong" />
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="shop-list-wrap mb-30px scroll-zoom">
                        <div className="row list-product m-0px">
                          <div className="col-md-12">
                            <div className="row">
                              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="left-img">
                                  <div className="img-block">
                                    <a
                                      href="single-product.html"
                                      className="thumbnail"
                                    >
                                      <img
                                        className="first-img"
                                        src="assets/images/product-image/organic/product-14.jpg"
                                        alt
                                      />
                                      <img
                                        className="second-img"
                                        src="assets/images/product-image/organic/product-14.jpg"
                                        alt
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
                                        <i className="ion-ios-search-strong" />
                                      </a>
                                    </div>
                                  </div>
                                  <ul className="product-flag">
                                    <li className="new">New</li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                                <div className="product-desc-wrap">
                                  <div className="product-decs">
                                    <a
                                      className="inner-link"
                                      href="shop-4-column.html"
                                    >
                                      <span>GRAPHIC CORNER</span>
                                    </a>
                                    <h2>
                                      <a
                                        href="single-product.html"
                                        className="product-link"
                                      >
                                        Madden by Steve Madden Cale 6
                                      </a>
                                    </h2>
                                    <div className="rating-product">
                                      <i className="ion-android-star" />
                                      <i className="ion-android-star" />
                                      <i className="ion-android-star" />
                                      <i className="ion-android-star" />
                                      <i className="ion-android-star" />
                                    </div>
                                    <div className="pricing-meta">
                                      <ul>
                                        <li className="old-price">€19.90</li>
                                        <li className="current-price">
                                          €10.12
                                        </li>
                                        <li className="discount-price">-15%</li>
                                      </ul>
                                    </div>
                                    <div className="product-intro-info">
                                      <p>
                                        No one can deny your sleek style with
                                        these handsome Madden by Steve Madden®
                                        Cale 6 oxfords.
                                      </p>
                                      <p>
                                        Man-made upper features a plain toe.
                                      </p>
                                      <p>Lace-up closure.</p>
                                      <p>Man-made lining.</p>
                                    </div>
                                    <div className="in-stock">
                                      Availability: <span>299 In Stock</span>
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
                                          <i className="ion-android-favorite-outline" />
                                        </a>
                                      </li>
                                      <li>
                                        <a href="compare.html">
                                          <i className="ion-ios-shuffle-strong" />
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="shop-list-wrap mb-30px scroll-zoom">
                        <div className="row list-product m-0px">
                          <div className="col-md-12">
                            <div className="row">
                              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="left-img">
                                  <div className="img-block">
                                    <a
                                      href="single-product.html"
                                      className="thumbnail"
                                    >
                                      <img
                                        className="first-img"
                                        src="assets/images/product-image/organic/product-15.jpg"
                                        alt
                                      />
                                      <img
                                        className="second-img"
                                        src="assets/images/product-image/organic/product-22.jpg"
                                        alt
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
                                        <i className="ion-ios-search-strong" />
                                      </a>
                                    </div>
                                  </div>
                                  <ul className="product-flag">
                                    <li className="new">New</li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                                <div className="product-desc-wrap">
                                  <div className="product-decs">
                                    <a
                                      className="inner-link"
                                      href="shop-4-column.html"
                                    >
                                      <span>GRAPHIC CORNER</span>
                                    </a>
                                    <h2>
                                      <a
                                        href="single-product.html"
                                        className="product-link"
                                      >
                                        Calvin Klein Jeans Reflective Logo Full
                                        Zip
                                      </a>
                                    </h2>
                                    <div className="rating-product">
                                      <i className="ion-android-star" />
                                      <i className="ion-android-star" />
                                      <i className="ion-android-star" />
                                      <i className="ion-android-star" />
                                      <i className="ion-android-star" />
                                    </div>
                                    <div className="pricing-meta">
                                      <ul>
                                        <li className="old-price not-cut">
                                          €29.00
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="product-intro-info">
                                      <p>
                                        Calvin Klein® Jeans hoodie with
                                        reflective logo detailing at the
                                        sleeves.
                                      </p>
                                      <p>
                                        Sweatshirt crafted in a soft-knit fabric
                                        for superior comfort.
                                      </p>
                                      <p>Drawstring hood.</p>
                                      <p>Long sleeves.</p>
                                      <p>Full-zip front.</p>
                                    </div>
                                    <div className="in-stock">
                                      Availability: <span>300 In Stock</span>
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
                                          <i className="ion-android-favorite-outline" />
                                        </a>
                                      </li>
                                      <li>
                                        <a href="compare.html">
                                          <i className="ion-ios-shuffle-strong" />
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="shop-list-wrap mb-30px scroll-zoom">
                        <div className="row list-product m-0px">
                          <div className="col-md-12">
                            <div className="row">
                              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="left-img">
                                  <div className="img-block">
                                    <a
                                      href="single-product.html"
                                      className="thumbnail"
                                    >
                                      <img
                                        className="first-img"
                                        src="assets/images/product-image/organic/product-6.jpg"
                                        alt
                                      />
                                      <img
                                        className="second-img"
                                        src="assets/images/product-image/organic/product-6.jpg"
                                        alt
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
                                        <i className="ion-ios-search-strong" />
                                      </a>
                                    </div>
                                  </div>
                                  <ul className="product-flag">
                                    <li className="new">New</li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                                <div className="product-desc-wrap">
                                  <div className="product-decs">
                                    <a
                                      className="inner-link"
                                      href="shop-4-column.html"
                                    >
                                      <span>GRAPHIC CORNER</span>
                                    </a>
                                    <h2>
                                      <a
                                        href="single-product.html"
                                        className="product-link"
                                      >
                                        New Balance Arishi Sport v1
                                      </a>
                                    </h2>
                                    <div className="rating-product">
                                      <i className="ion-android-star" />
                                      <i className="ion-android-star" />
                                      <i className="ion-android-star" />
                                      <i className="ion-android-star" />
                                      <i className="ion-android-star" />
                                    </div>
                                    <div className="pricing-meta">
                                      <ul>
                                        <li className="old-price not-cut">
                                          €29.00
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="product-intro-info">
                                      <p>
                                        Break old records and make new goals in
                                        the New Balance® Arishi Sport v1.
                                      </p>
                                      <p>Predecessor: None.</p>
                                      <p>Support Type: Neutral.</p>
                                      <p>
                                        Cushioning: High energizing cushioning.
                                      </p>
                                    </div>
                                    <div className="in-stock">
                                      Availability: <span>899 In Stock</span>
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
                                          <i className="ion-android-favorite-outline" />
                                        </a>
                                      </li>
                                      <li>
                                        <a href="compare.html">
                                          <i className="ion-ios-shuffle-strong" />
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="shop-list-wrap mb-30px scroll-zoom">
                        <div className="row list-product m-0px">
                          <div className="col-md-12">
                            <div className="row">
                              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="left-img">
                                  <div className="img-block">
                                    <a
                                      href="single-product.html"
                                      className="thumbnail"
                                    >
                                      <img
                                        className="first-img"
                                        src="assets/images/product-image/organic/product-3.jpg"
                                        alt
                                      />
                                      <img
                                        className="second-img"
                                        src="assets/images/product-image/organic/product-4.jpg"
                                        alt
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
                                        <i className="ion-ios-search-strong" />
                                      </a>
                                    </div>
                                  </div>
                                  <ul className="product-flag">
                                    <li className="new">New</li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                                <div className="product-desc-wrap">
                                  <div className="product-decs">
                                    <a
                                      className="inner-link"
                                      href="shop-4-column.html"
                                    >
                                      <span>GRAPHIC CORNER</span>
                                    </a>
                                    <h2>
                                      <a
                                        href="single-product.html"
                                        className="product-link"
                                      >
                                        Brixton Patrol All Terrain Anorak Jacket
                                      </a>
                                    </h2>
                                    <div className="rating-product">
                                      <i className="ion-android-star" />
                                      <i className="ion-android-star" />
                                      <i className="ion-android-star" />
                                      <i className="ion-android-star" />
                                      <i className="ion-android-star" />
                                    </div>
                                    <div className="pricing-meta">
                                      <ul>
                                        <li className="old-price not-cut">
                                          €29.00
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="product-intro-info">
                                      <p>
                                        Whether you're exploring the woods or
                                        the city, the Brixton™ Patrol All
                                        Terrain Anorak Jacket has got you
                                        covered.
                                      </p>
                                      <p>
                                        Camo jacket crafted from 4.5 oz nylon
                                        ripstop with two-way stretch, and a
                                        water-repellent coating.
                                      </p>
                                      <p>Drawstring hood.</p>
                                    </div>
                                    <div className="in-stock">
                                      Availability: <span>899 In Stock</span>
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
                                          <i className="ion-android-favorite-outline" />
                                        </a>
                                      </li>
                                      <li>
                                        <a href="compare.html">
                                          <i className="ion-ios-shuffle-strong" />
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="shop-list-wrap mb-30px scroll-zoom">
                        <div className="row list-product m-0px">
                          <div className="col-md-12">
                            <div className="row">
                              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="left-img">
                                  <div className="img-block">
                                    <a
                                      href="single-product.html"
                                      className="thumbnail"
                                    >
                                      <img
                                        className="first-img"
                                        src="assets/images/product-image/organic/product-1.jpg"
                                        alt
                                      />
                                      <img
                                        className="second-img"
                                        src="assets/images/product-image/organic/product-1.jpg"
                                        alt
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
                                        <i className="ion-ios-search-strong" />
                                      </a>
                                    </div>
                                  </div>
                                  <ul className="product-flag">
                                    <li className="new">New</li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                                <div className="product-desc-wrap">
                                  <div className="product-decs">
                                    <a
                                      className="inner-link"
                                      href="shop-4-column.html"
                                    >
                                      <span>STUDIO DESIGN</span>
                                    </a>
                                    <h2>
                                      <a
                                        href="single-product.html"
                                        className="product-link"
                                      >
                                        Juicy Couture Juicy Quilted Terry Track
                                        Jacket
                                      </a>
                                    </h2>
                                    <div className="rating-product">
                                      <i className="ion-android-star" />
                                      <i className="ion-android-star" />
                                      <i className="ion-android-star" />
                                      <i className="ion-android-star" />
                                      <i className="ion-android-star" />
                                    </div>
                                    <div className="pricing-meta">
                                      <ul>
                                        <li className="old-price">€35.90</li>
                                        <li className="current-price">
                                          €34.12
                                        </li>
                                        <li className="discount-price">-5%</li>
                                      </ul>
                                    </div>
                                    <div className="product-intro-info">
                                      <p>
                                        Score extra points when it comes to your
                                        sporty look with the Juicy Couture™
                                        Juicy Quilted Terry Track Jacket.
                                      </p>
                                      <p>
                                        Soft terry construction in a quilted
                                        design.
                                      </p>
                                      <p>Front zipper closure.</p>
                                      <p>61% cotton, 39% polyester;</p>
                                      <p>Lining: 58% cotton, 42% polyester.</p>
                                    </div>
                                    <div className="in-stock">
                                      Availability: <span>1189 In Stock</span>
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
                                          <i className="ion-android-favorite-outline" />
                                        </a>
                                      </li>
                                      <li>
                                        <a href="compare.html">
                                          <i className="ion-ios-shuffle-strong" />
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="shop-list-wrap mb-30px scroll-zoom">
                        <div className="row list-product m-0px">
                          <div className="col-md-12">
                            <div className="row">
                              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="left-img">
                                  <div className="img-block">
                                    <a
                                      href="single-product.html"
                                      className="thumbnail"
                                    >
                                      <img
                                        className="first-img"
                                        src="assets/images/product-image/organic/product-11.jpg"
                                        alt
                                      />
                                      <img
                                        className="second-img"
                                        src="assets/images/product-image/organic/product-12.jpg"
                                        alt
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
                                        <i className="ion-ios-search-strong" />
                                      </a>
                                    </div>
                                  </div>
                                  <ul className="product-flag">
                                    <li className="new">New</li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                                <div className="product-desc-wrap">
                                  <div className="product-decs">
                                    <a
                                      className="inner-link"
                                      href="shop-4-column.html"
                                    >
                                      <span>STUDIO DESIGN</span>
                                    </a>
                                    <h2>
                                      <a
                                        href="single-product.html"
                                        className="product-link"
                                      >
                                        Originals Kaval Windbreaker Winter
                                        Jacket
                                      </a>
                                    </h2>
                                    <div className="rating-product">
                                      <i className="ion-android-star" />
                                      <i className="ion-android-star" />
                                      <i className="ion-android-star" />
                                      <i className="ion-android-star" />
                                      <i className="ion-android-star" />
                                    </div>
                                    <div className="pricing-meta">
                                      <ul>
                                        <li className="old-price">€23.90</li>
                                        <li className="current-price">
                                          €21.51
                                        </li>
                                        <li className="discount-price">-10%</li>
                                      </ul>
                                    </div>
                                    <div className="product-intro-info">
                                      <p>
                                        Block out the haters with the fresh
                                        adidas® Originals Kaval Windbreaker
                                        Jacket.
                                      </p>
                                      <p>Part of the Kaval Collection.</p>
                                      <p>
                                        Regular fit is eased, but not sloppy,
                                        and perfect for any activity.
                                      </p>
                                      <p>
                                        Plain-woven jacket specifically
                                        constructed for freedom of movement.
                                      </p>
                                    </div>
                                    <div className="in-stock">
                                      Availability: <span>299 In Stock</span>
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
                                          <i className="ion-android-favorite-outline" />
                                        </a>
                                      </li>
                                      <li>
                                        <a href="compare.html">
                                          <i className="ion-ios-shuffle-strong" />
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="shop-list-wrap mb-30px scroll-zoom">
                        <div className="row list-product m-0px">
                          <div className="col-md-12">
                            <div className="row">
                              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="left-img">
                                  <div className="img-block">
                                    <a
                                      href="single-product.html"
                                      className="thumbnail"
                                    >
                                      <img
                                        className="first-img"
                                        src="assets/images/product-image/organic/product-10.jpg"
                                        alt
                                      />
                                      <img
                                        className="second-img"
                                        src="assets/images/product-image/organic/product-10.jpg"
                                        alt
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
                                        <i className="ion-ios-search-strong" />
                                      </a>
                                    </div>
                                  </div>
                                  <ul className="product-flag">
                                    <li className="new">New</li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                                <div className="product-desc-wrap">
                                  <div className="product-decs">
                                    <a
                                      className="inner-link"
                                      href="shop-4-column.html"
                                    >
                                      <span>GRAPHIC CORNER</span>
                                    </a>
                                    <h2>
                                      <a
                                        href="single-product.html"
                                        className="product-link"
                                      >
                                        New Luxury Men's Slim Fit Shirt Short
                                        Sleeve...
                                      </a>
                                    </h2>
                                    <div className="rating-product">
                                      <i className="ion-android-star" />
                                      <i className="ion-android-star" />
                                      <i className="ion-android-star" />
                                      <i className="ion-android-star" />
                                      <i className="ion-android-star" />
                                    </div>
                                    <div className="pricing-meta">
                                      <ul>
                                        <li className="old-price not-cut">
                                          €29.00
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="product-intro-info">
                                      <p>
                                        Break old records and make new goals in
                                        the New Balance® Arishi Sport v1.
                                      </p>
                                      <p>Predecessor: None.</p>
                                      <p>Support Type: Neutral.</p>
                                      <p>
                                        Cushioning: High energizing cushioning.
                                      </p>
                                    </div>
                                    <div className="in-stock">
                                      Availability: <span>397 In Stock</span>
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
                                          <i className="ion-android-favorite-outline" />
                                        </a>
                                      </li>
                                      <li>
                                        <a href="compare.html">
                                          <i className="ion-ios-shuffle-strong" />
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="shop-list-wrap mb-30px scroll-zoom">
                        <div className="row list-product m-0px">
                          <div className="col-md-12">
                            <div className="row">
                              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="left-img">
                                  <div className="img-block">
                                    <a
                                      href="single-product.html"
                                      className="thumbnail"
                                    >
                                      <img
                                        className="first-img"
                                        src="assets/images/product-image/organic/product-4.jpg"
                                        alt
                                      />
                                      <img
                                        className="second-img"
                                        src="assets/images/product-image/organic/product-4.jpg"
                                        alt
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
                                        <i className="ion-ios-search-strong" />
                                      </a>
                                    </div>
                                  </div>
                                  <ul className="product-flag">
                                    <li className="new">New</li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                                <div className="product-desc-wrap">
                                  <div className="product-decs">
                                    <a
                                      className="inner-link"
                                      href="shop-4-column.html"
                                    >
                                      <span>GRAPHIC CORNER</span>
                                    </a>
                                    <h2>
                                      <a
                                        href="single-product.html"
                                        className="product-link"
                                      >
                                        Brixton Patrol All Terrain Anorak Jacket
                                        2
                                      </a>
                                    </h2>
                                    <div className="rating-product">
                                      <i className="ion-android-star" />
                                      <i className="ion-android-star" />
                                      <i className="ion-android-star" />
                                      <i className="ion-android-star" />
                                      <i className="ion-android-star" />
                                    </div>
                                    <div className="pricing-meta">
                                      <ul>
                                        <li className="old-price not-cut">
                                          €29.00
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="product-intro-info">
                                      <p>
                                        Whether you're exploring the woods or
                                        the city, the Brixton™ Patrol All
                                        Terrain Anorak Jacket has got you
                                        covered.
                                      </p>
                                      <p>
                                        Camo jacket crafted from 4.5 oz nylon
                                        ripstop with two-way stretch, and a
                                        water-repellent coating.
                                      </p>
                                      <p>Drawstring hood.</p>
                                    </div>
                                    <div className="in-stock">
                                      Availability: <span>400 In Stock</span>
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
                                          <i className="ion-android-favorite-outline" />
                                        </a>
                                      </li>
                                      <li>
                                        <a href="compare.html">
                                          <i className="ion-ios-shuffle-strong" />
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="shop-list-wrap scroll-zoom">
                        <div className="row list-product m-0px">
                          <div className="col-md-12">
                            <div className="row">
                              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="left-img">
                                  <div className="img-block">
                                    <a
                                      href="single-product.html"
                                      className="thumbnail"
                                    >
                                      <img
                                        className="first-img"
                                        src="assets/images/product-image/organic/product-15.jpg"
                                        alt
                                      />
                                      <img
                                        className="second-img"
                                        src="assets/images/product-image/organic/product-15.jpg"
                                        alt
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
                                        <i className="ion-ios-search-strong" />
                                      </a>
                                    </div>
                                  </div>
                                  <ul className="product-flag">
                                    <li className="new">New</li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                                <div className="product-desc-wrap">
                                  <div className="product-decs">
                                    <a
                                      className="inner-link"
                                      href="shop-4-column.html"
                                    >
                                      <span>GRAPHIC CORNER</span>
                                    </a>
                                    <h2>
                                      <a
                                        href="single-product.html"
                                        className="product-link"
                                      >
                                        Juicy Couture Juicy Quilted Terry Track
                                        Jacket 2
                                      </a>
                                    </h2>
                                    <div className="rating-product">
                                      <i className="ion-android-star" />
                                      <i className="ion-android-star" />
                                      <i className="ion-android-star" />
                                      <i className="ion-android-star" />
                                      <i className="ion-android-star" />
                                    </div>
                                    <div className="pricing-meta">
                                      <ul>
                                        <li className="old-price">€35.90</li>
                                        <li className="current-price">
                                          €34.11
                                        </li>
                                        <li className="discount-price">-5%</li>
                                      </ul>
                                    </div>
                                    <div className="product-intro-info">
                                      <p>
                                        Score extra points when it comes to your
                                        sporty look with the Juicy Couture™
                                        Juicy Quilted Terry Track Jacket.
                                      </p>
                                      <p>
                                        Soft terry construction in a quilted
                                        design.
                                      </p>
                                      <p>Front zipper closure.</p>
                                      <p>61% cotton, 39% polyester;</p>
                                      <p>Lining: 58% cotton, 42% polyester.</p>
                                    </div>
                                    <div className="in-stock">
                                      Availability: <span>199 In Stock</span>
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
                                          <i className="ion-android-favorite-outline" />
                                        </a>
                                      </li>
                                      <li>
                                        <a href="compare.html">
                                          <i className="ion-ios-shuffle-strong" />
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Tab Two End */}
                  </div>
                  {/* Shop Tab Content End */}
                  {/*  Pagination Area Start */}
                  <div className="pro-pagination-style text-center">
                    <ul>
                      <li>
                        <a className="prev" href="#">
                          <i className="ion-ios-arrow-left" />
                        </a>
                      </li>
                      <li>
                        <a className="active" href="#">
                          1
                        </a>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a className="next" href="#">
                          <i className="ion-ios-arrow-right" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/*  Pagination Area End */}
                </div>
                {/* Shop Bottom Area End */}
              </div>
              {/* Sidebar Area Start */}
              <div className="col-lg-3 order-lg-first col-md-12 order-md-last mb-res-md-60px mb-res-sm-60px">
                <div className="left-sidebar">
                  <div className="sidebar-heading">
                    <div className="main-heading">
                      <h2>Filter By</h2>
                    </div>
                    {/* Sidebar single item */}
                    <div className="sidebar-widget">
                      <h4 className="pro-sidebar-title">Categories</h4>
                      <div className="sidebar-widget-list">
                        <ul>
                          <li>
                            <div className="sidebar-widget-list-left">
                              <input type="checkbox" />{" "}
                              <a href="#">
                                Fresh Fruit<span>(17)</span>{" "}
                              </a>
                              <span className="checkmark" />
                            </div>
                          </li>
                          <li>
                            <div className="sidebar-widget-list-left">
                              <input type="checkbox" defaultValue />{" "}
                              <a href="#">
                                Fresh Vegetables <span>(17)</span>
                              </a>
                              <span className="checkmark" />
                            </div>
                          </li>
                          <li>
                            <div className="sidebar-widget-list-left">
                              <input type="checkbox" defaultValue />{" "}
                              <a href="#">
                                Fresh Salad &amp; Dips<span>(17)</span>{" "}
                              </a>
                              <span className="checkmark" />
                            </div>
                          </li>
                          <li>
                            <div className="sidebar-widget-list-left">
                              <input type="checkbox" defaultValue />{" "}
                              <a href="#">
                                Milk,Butter &amp; Eggs<span>(17)</span>{" "}
                              </a>
                              <span className="checkmark" />
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* Sidebar single item */}
                  </div>
                  {/* Sidebar single item */}
                  <div className="sidebar-widget mt-20">
                    <h4 className="pro-sidebar-title">Price</h4>
                    <div className="price-filter mt-10">
                      <div className="price-slider-amount">
                        <input
                          type="text"
                          id="amount"
                          name="price"
                          placeholder="Add Your Price"
                        />
                      </div>
                      <div id="slider-range" />
                    </div>
                  </div>
                  {/* Sidebar single item */}
                  <div className="sidebar-widget mt-30">
                    <h4 className="pro-sidebar-title">Size</h4>
                    <div className="sidebar-widget-list">
                      <ul>
                        <li>
                          <div className="sidebar-widget-list-left">
                            <input type="checkbox" />{" "}
                            <a href="#">
                              X<span>(4)</span>{" "}
                            </a>
                            <span className="checkmark" />
                          </div>
                        </li>
                        <li>
                          <div className="sidebar-widget-list-left">
                            <input type="checkbox" defaultValue />{" "}
                            <a href="#">
                              M<span>(4)</span>
                            </a>
                            <span className="checkmark" />
                          </div>
                        </li>
                        <li>
                          <div className="sidebar-widget-list-left">
                            <input type="checkbox" defaultValue />{" "}
                            <a href="#">
                              L<span>(4)</span>{" "}
                            </a>
                            <span className="checkmark" />
                          </div>
                        </li>
                        <li>
                          <div className="sidebar-widget-list-left">
                            <input type="checkbox" defaultValue />{" "}
                            <a href="#">
                              XL<span>(4)</span>{" "}
                            </a>
                            <span className="checkmark" />
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Sidebar single item */}
                  <div className="sidebar-widget no-cba mt-20">
                    <h4 className="pro-sidebar-title">Colour</h4>
                    <div className="sidebar-widget-list">
                      <ul>
                        <li>
                          <div className="sidebar-widget-list-left">
                            <input type="checkbox" />{" "}
                            <a href="#">
                              Grey<span>(2)</span>{" "}
                            </a>
                            <span className="checkmark grey" />
                          </div>
                        </li>
                        <li>
                          <div className="sidebar-widget-list-left">
                            <input type="checkbox" defaultValue />{" "}
                            <a href="#">
                              White<span>(4)</span>
                            </a>
                            <span className="checkmark white" />
                          </div>
                        </li>
                        <li>
                          <div className="sidebar-widget-list-left">
                            <input type="checkbox" defaultValue />{" "}
                            <a href="#">
                              Black<span>(4)</span>{" "}
                            </a>
                            <span className="checkmark black" />
                          </div>
                        </li>
                        <li>
                          <div className="sidebar-widget-list-left">
                            <input type="checkbox" defaultValue />{" "}
                            <a href="#">
                              Camel<span>(4)</span>{" "}
                            </a>
                            <span className="checkmark camel" />
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Sidebar single item */}
                  <div className="sidebar-widget mt-30">
                    <h4 className="pro-sidebar-title">Brand</h4>
                    <div className="sidebar-widget-list">
                      <ul>
                        <li>
                          <div className="sidebar-widget-list-left">
                            <input type="checkbox" />{" "}
                            <a href="#">
                              Studio Design<span>(10)</span>{" "}
                            </a>
                            <span className="checkmark" />
                          </div>
                        </li>
                        <li>
                          <div className="sidebar-widget-list-left">
                            <input type="checkbox" defaultValue />{" "}
                            <a href="#">
                              Graphic Corner<span>(7)</span>
                            </a>
                            <span className="checkmark" />
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Sidebar single item */}
                  <div className="sidebar-widget mt-30">
                    <h4 className="pro-sidebar-title">Dimension</h4>
                    <div className="sidebar-widget-list">
                      <ul>
                        <li>
                          <div className="sidebar-widget-list-left">
                            <input type="checkbox" />{" "}
                            <a href="#">
                              40x60<span>(5)</span>{" "}
                            </a>
                            <span className="checkmark" />
                          </div>
                        </li>
                        <li>
                          <div className="sidebar-widget-list-left">
                            <input type="checkbox" defaultValue />{" "}
                            <a href="#">
                              60x90<span>(5)</span>
                            </a>
                            <span className="checkmark" />
                          </div>
                        </li>
                        <li>
                          <div className="sidebar-widget-list-left">
                            <input type="checkbox" defaultValue />{" "}
                            <a href="#">
                              90x120<span>(5)</span>{" "}
                            </a>
                            <span className="checkmark" />
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Sidebar single item */}
                  <div className="sidebar-widget tag mt-30">
                    <div className="main-heading">
                      <h2>Tag</h2>
                    </div>
                    <div className="sidebar-widget-tag">
                      <ul>
                        <li>
                          <a href="#">Fresh Fruit</a>
                        </li>
                        <li>
                          <a href="#"> Fresh Vegetables</a>
                        </li>
                        <li>
                          <a href="#">Fresh Salad</a>
                        </li>
                        <li>
                          <a href="#"> Butter &amp; Eggs</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Sidebar single item */}
                </div>
              </div>
              {/* Sidebar Area End */}
            </div>
          </div>
        </div>
        {/* Shop Category Area End */}
        {/* Footer Area start */}
        {/*  Footer Area End */}
        {/* Modal */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          role="dialog"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">x</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-5 col-sm-12 col-xs-12">
                    <div className="tab-content quickview-big-img">
                      <div id="pro-1" className="tab-pane fade show active">
                        <img
                          src="assets/images/product-image/organic/product-11.jpg"
                          alt
                        />
                      </div>
                      <div id="pro-2" className="tab-pane fade">
                        <img
                          src="assets/images/product-image/organic/product-9.jpg"
                          alt
                        />
                      </div>
                      <div id="pro-3" className="tab-pane fade">
                        <img
                          src="assets/images/product-image/organic/product-20.jpg"
                          alt
                        />
                      </div>
                      <div id="pro-4" className="tab-pane fade">
                        <img
                          src="assets/images/product-image/organic/product-19.jpg"
                          alt
                        />
                      </div>
                    </div>
                    {/* Thumbnail Large Image End */}
                    {/* Thumbnail Image End */}
                    <div className="quickview-wrap mt-15">
                      <ThumbnailImage />
                    </div>
                  </div>
                  <div className="col-md-7 col-sm-12 col-xs-12">
                    <div className="product-details-content quickview-content">
                      <h2>Originals Kaval Windbr</h2>
                      <p className="reference">
                        Reference:<span> demo_17</span>
                      </p>
                      <div className="pro-details-rating-wrap">
                        <div className="rating-product">
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                        </div>
                        <span className="read-review">
                          <a className="reviews" href="#">
                            Read reviews (1)
                          </a>
                        </span>
                      </div>
                      <div className="pricing-meta">
                        <ul>
                          <li className="old-price not-cut">€18.90</li>
                        </ul>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisic elit
                        eiusm tempor incidid ut labore et dolore magna aliqua.
                        Ut enim ad minim venialo quis nostrud exercitation
                        ullamco
                      </p>
                      <div className="pro-details-size-color">
                        <div className="pro-details-color-wrap">
                          <span>Color</span>
                          <div className="pro-details-color-content">
                            <ul>
                              <li className="blue" />
                              <li className="maroon active" />
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="pro-details-quality">
                        <div className="cart-plus-minus">
                          <input
                            className="cart-plus-minus-box"
                            type="text"
                            name="qtybutton"
                            defaultValue={1}
                          />
                        </div>
                        <div className="pro-details-cart btn-hover">
                          <a href="#"> + Add To Cart</a>
                        </div>
                      </div>
                      <div className="pro-details-wish-com">
                        <div className="pro-details-wishlist">
                          <a href="#">
                            <i className="ion-android-favorite-outline" />
                            Add to wishlist
                          </a>
                        </div>
                        <div className="pro-details-compare">
                          <a href="#">
                            <i className="ion-ios-shuffle-strong" />
                            Add to compare
                          </a>
                        </div>
                      </div>
                      <div className="pro-details-social-info">
                        <span>Share</span>
                        <div className="social-info">
                          <ul>
                            <li>
                              <a href="#">
                                <i className="ion-social-facebook" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="ion-social-twitter" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="ion-social-google" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="ion-social-instagram" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Modal end */}
      </div>
    </>
  );
};

export default Shop;
