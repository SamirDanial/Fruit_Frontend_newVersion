import React, { useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { MY_PROFILE } from "../hooks/Customer";
import { customerActions } from "../../store/customer";
import { useDispatch, useSelector } from "react-redux";
import { GET_CATEGORIES } from "../hooks/Category";
import { GET_FEATURED_PRODUCTS } from "../hooks/Product";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const isAuth = useSelector((state) => state.auth.authenticated);
  const navigate = useNavigate();
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize] = useState(6);
  const [allProducts, setAllProducts] = useState();
  const [pages, setPages] = useState([]);
  const [products, setProducts] = useState([]);
  const [categoriesToShow, setCategoriesToShow] = useState([]);
  const dispatch = useDispatch();
  const [query] = useLazyQuery(MY_PROFILE, {
    fetchPolicy: "no-cache",
    onCompleted: (data) => {
      return data;
    },
  });

  useEffect(() => {
    console.log(products);
  }, [products]);

  const [getCategories] = useLazyQuery(GET_CATEGORIES, {
    onCompleted: (data) => data,
  });

  const [getFeaturedProducts] = useLazyQuery(GET_FEATURED_PRODUCTS, {
    variables: {
      PageSize: pageSize,
      PageNumber: pageNumber,
    },
    onCompleted: (data) => data,
  });

  useEffect(() => {
    getFeaturedProducts()
      .then((res) => {
        setAllProducts(res.data.getFeaturedProducts.allProductsCount);
        setProducts(res.data.getFeaturedProducts.products);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [pageNumber]);

  useEffect(() => {
    if (allProducts > pageSize) {
      let pagesToCreate = Math.ceil(allProducts / pageSize);
      for (let i = 0; i < pagesToCreate; i++) {
        setPages((preValues) => [...preValues, <h1>Hi</h1>]);
      }
    }
  }, [allProducts, pageSize]);

  const goToNewPage = (e) => {
    let targetNumber = e.target;
    const number = targetNumber.getAttribute("name");
    setPageNumber(parseInt(number));
  };

  useEffect(() => {
    if (isAuth) {
      query().then((res) => {
        const data = res.data;
        if (data) {
          dispatch(
            customerActions.getCustomerProfile({
              ...data.getCustomerProfile,
            })
          );
        }
      });
    }
  }, [query, dispatch, isAuth]);

  useEffect(() => {
    getCategories()
      .then((res) => {
        const cts = res.data.getCategories.categories;
        setCategoriesToShow(cts);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [getCategories]);
  return (
    <div classNameName="home-3">
    <div id="main">
      {/* <!-- Header Area Start  --> */}
      
      <div className="mobile-search-option pb-3 d-lg-none hover-style-default">
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
                    <option value="0">All categories</option>
                    <option value="104">Fresh Food</option>
                    <option value="183">- - Fresh Fruit</option>
                    <option value="187">- - - - Bananas</option>
                    <option value="188">- - - - Apples &amp; Pears</option>
                    <option value="189">
                      - - - - Berries &amp; Cherries
                    </option>
                    <option value="190">
                      - - - - Oranges &amp; Citrus Fruit
                    </option>
                    <option value="191">- - - - Grapes</option>
                    <option value="184">- - Fresh Vegetables</option>
                    <option value="192">
                      - - - - Potatoes &amp; Sweet Potatoes
                    </option>
                    <option value="193">- - - - Onions &amp; Leeks</option>
                    <option value="194">
                      - - - - Carrots &amp; Root Vegetables
                    </option>
                    <option value="195">
                      - - - - Broccoli &amp; Cauliflower
                    </option>
                    <option value="196">- - - - Cabbages &amp; Greens</option>
                    <option value="185">- - Fresh Salad &amp; Dips</option>
                    <option value="197">
                      - - - - Lettuce &amp; Salad bags
                    </option>
                    <option value="198">- - - - Tomatoes</option>
                    <option value="199">- - - - Cucumber</option>
                    <option value="200">- - - - Celery</option>
                    <option value="201">- - - - Peppers</option>
                    <option value="186">- - Milk, Butter &amp; Eggs</option>
                    <option value="202">- - - - Milk</option>
                    <option value="203">
                      - - - - Spreads &amp; Margarine
                    </option>
                    <option value="204">
                      - - - - Fresh Cream &amp; Custard
                    </option>
                    <option value="205">- - - - Eggs</option>
                    <option value="206">- - - - Baking &amp; Cooking</option>
                  </select>
                </div>
                <button type="submit">
                  <i className="ion-ios-search-strong"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- offcanvas overlay start --> */}
      <div className="offcanvas-overlay"></div>
      {/* <!-- offcanvas overlay end --> */}
      {/* <!-- OffCanvas Cart Start --> */}
      <div
        id="offcanvas-cart"
        className="offcanvas offcanvas-cart hover-style-default"
      >
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
                    src="assets/images/product-image/mini-cart/1.jpg"
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
      {/* <!-- OffCanvas Cart End --> */}
      {/* <!-- OffCanvas Menu Start --> */}
      <div
        id="offcanvas-mobile-menu"
        className="offcanvas offcanvas-mobile-menu hover-style-default"
      >
        <button className="offcanvas-close"></button>
        {/* <!-- contact Info --> */}
        <div className="contact-info d-flex align-items-center justify-content-center color-black py-3">
          <img
            className="me-3"
            src="assets/images/icons/mobile-contact.png"
            alt=""
          />
          <p>Call us:</p>
          <a className="color-black" href="tel:(+800)345678">
            (+800)345678
          </a>
        </div>
        {/* <!-- offcanvas compare & wishlist --> */}
        <div className="user-panel">
          <ul className="d-flex justify-content-between">
            <li className="m-0">
              <a href="compare.html">
                <i className="ion-ios-shuffle-strong"></i>Compare (0)
              </a>
            </li>
            <li>
              <a href="wishlist.html">
                <i className="ion-android-favorite-outline"></i>Wishlist (0)
              </a>
            </li>
          </ul>
        </div>
        {/* <!-- offcanvas currency --> */}
        <div className="offcanvas-userpanel">
          <ul>
            <li className="offcanvas-userpanel__role">
              <a href="#">
                USD $ <i className="ion-ios-arrow-down"></i>
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
        {/* <!-- offcanvas language --> */}
        <div className="offcanvas-userpanel">
          <ul>
            <li className="offcanvas-userpanel__role">
              <a href="#">
                <img src="assets/images/banner-image/5.jpg" alt="" />
                English <i className="ion-ios-arrow-down"></i>
              </a>
              <ul className="user-sub-menu">
                <li>
                  <a className="current" href="#">
                    <img src="assets/images/icons/1.jpg" alt="" />
                    English
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="assets/images/icons/2.jpg" alt="" /> Français
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="menu-close">menu</div>
        {/* <!-- offcanvas menu --> */}
        <div className="inner customScroll">
          <div className="offcanvas-menu mb-4">
            <ul>
              <li>
                <a href="#">
                  <span className="menu-text">Home</span>
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="#">
                      <span className="menu-text">Home Organic</span>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a href="index.html">Organic 1</a>
                      </li>
                      <li>
                        <a href="index-2.html">Organic 2</a>
                      </li>
                      <li>
                        <a href="index-3.html">Organic 3</a>
                      </li>
                      <li>
                        <a href="index-4.html">Organic 4</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      <span className="menu-text">Home Cosmetic</span>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a href="index-5.html">Cosmetic 1</a>
                      </li>
                      <li>
                        <a href="index-6.html">Cosmetic 2</a>
                      </li>
                      <li>
                        <a href="index-7.html">Cosmetic 3</a>
                      </li>
                      <li>
                        <a href="index-8.html">Cosmetic 4</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      <span className="menu-text">Home Digital</span>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a href="index-9.html">Digital 1</a>
                      </li>
                      <li>
                        <a href="index-10.html">Digital 2</a>
                      </li>
                      <li>
                        <a href="index-11.html">Digital 3</a>
                      </li>
                      <li>
                        <a href="index-12.html">Digital 4</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      <span className="menu-text">Home Furniture</span>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a href="index-13.html">Furniture 1</a>
                      </li>
                      <li>
                        <a href="index-14.html">Furniture 2</a>
                      </li>
                      <li>
                        <a href="index-15.html">Furniture 3</a>
                      </li>
                      <li>
                        <a href="index-16.html">Furniture 4</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      <span className="menu-text">Home Medical</span>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a href="index-17.html">Medical 1</a>
                      </li>
                      <li>
                        <a href="index-18.html">Medical 2</a>
                      </li>
                      <li>
                        <a href="index-19.html">Medical 3</a>
                      </li>
                      <li>
                        <a href="index-20.html">Medical 4</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-dropdown position-relative">
                    <a href="index-21.html">Single Product</a>
                    <span className="stekar">new</span>
                  </li>
                </ul>
              </li>
              <li className="menu-dropdown">
                <a href="#">Pages</a>
                <ul className="sub-menu">
                  <li>
                    <a href="about.html">About Page</a>
                  </li>
                  <li>
                    <a href="cart.html">Cart Page</a>
                  </li>
                  <li>
                    <a href="checkout.html">Checkout Page</a>
                  </li>
                  <li>
                    <a href="compare.html">Compare Page</a>
                  </li>
                  <li>
                    <a href="login.html">Login & Regiter Page</a>
                  </li>
                  <li>
                    <a href="my-account.html">Account Page</a>
                  </li>
                  <li>
                    <a href="wishlist.html">Wishlist Page</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  <span className="menu-text">Shop</span>
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="#">
                      <span className="menu-text">Shop Page</span>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a href="shop-3-column.html">Shop Grid 3 Column</a>
                      </li>
                      <li>
                        <a href="shop-4-column.html">Shop Grid 4 Column</a>
                      </li>
                      <li>
                        <a href="shop-left-sidebar.html">
                          Shop Grid Left Sidebar
                        </a>
                      </li>
                      <li>
                        <a href="shop-right-sidebar.html">
                          Shop Grid Right Sidebar
                        </a>
                      </li>
                      <li>
                        <a href="shop-list.html">Shop List</a>
                      </li>
                      <li>
                        <a href="shop-list-left-sidebar.html">
                          Shop List Left Sidebar
                        </a>
                      </li>
                      <li>
                        <a href="shop-list-right-sidebar.html">
                          Shop List Right Sidebar
                        </a>
                      </li>
                      <li>
                        <a href="shop-filter.html">Shop Filter Page</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      <span className="menu-text">product Details Page</span>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a href="single-product.html">Shop Single</a>
                      </li>
                      <li>
                        <a href="single-product-variable.html">
                          Shop Variable
                        </a>
                      </li>
                      <li>
                        <a href="single-product-affiliate.html">
                          Shop Affiliate
                        </a>
                      </li>
                      <li>
                        <a href="single-product-group.html">Shop Group</a>
                      </li>
                      <li>
                        <a href="single-product-tabstyle-2.html">
                          Shop Tab 2
                        </a>
                      </li>
                      <li>
                        <a href="single-product-tabstyle-3.html">
                          Shop Tab 3
                        </a>
                      </li>
                      <li>
                        <a href="single-product-slider.html">Shop Slider</a>
                      </li>
                      <li>
                        <a href="single-product-gallery-left.html">
                          Shop Gallery Left
                        </a>
                      </li>
                      <li>
                        <a href="single-product-gallery-right.html">
                          Shop Gallery Right
                        </a>
                      </li>
                      <li>
                        <a href="single-product-sticky-left.html">
                          Shop Sticky Left
                        </a>
                      </li>
                      <li>
                        <a href="single-product-sticky-right.html">
                          Shop Sticky Right
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  <span className="menu-text">Blog</span>
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="blog-grid-left-sidebar.html">
                      Grid Left Sidebar
                    </a>
                  </li>
                  <li>
                    <a href="blog-grid-right-sidebar.html">
                      Grid Right Sidebar
                    </a>
                  </li>
                  <li>
                    <a href="blog-list-left-sidebar.html">
                      List Left Sidebar
                    </a>
                  </li>
                  <li>
                    <a href="blog-list-right-sidebar.html">
                      List Right Sidebar
                    </a>
                  </li>
                  <li>
                    <a href="blog-single-left-sidebar.html">
                      Single Left Sidebar
                    </a>
                  </li>
                  <li>
                    <a href="blog-single-right-sidebar.html">
                      Single Right Sidbar
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="contact.html">Contact Us</a>
              </li>
            </ul>
          </div>
          {/* <!-- OffCanvas Menu End --> */}
          <div className="offcanvas-social mt-5">
            <ul>
              <li>
                <a href="#">
                  <i className="ion-social-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ion-social-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ion-social-google"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ion-social-youtube"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ion-social-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- OffCanvas Menu End --> */}
      {/* <!--  Main Header End --> */}
      {/* <!-- Slider Arae Start --> */}
      <div className="slider-area">
        <div className="slider-active-3 owl-carousel slider-hm8 owl-dot-style">
          {/* <!-- Slider Single Item Start --> */}
          <div
            className="slider-height-6 d-flex align-items-start justify-content-start bg-img"
            style={{ height: "540" ,backgroundImage: `url(assets/images/slider-image/sample-5.jpg)`}}
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
          {/* <!-- Slider Single Item End --> */}
          {/* <!-- Slider Single Item Start --> */}
          <div
            className="slider-height-6 d-flex align-items-start justify-content-start bg-img"
            style={{backgroundImage: "url('./assets/images/slider-image/sample-6.jpg')"}}
          >
            <div className="container">
              <div className="slider-content-5 slider-animated-1 text-left">
                <span className="animated">100% PURE & NATURE</span>
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
          {/* <!-- Slider Single Item End --> */}
        </div>
      </div>
      {/* <!-- Slider Arae End --> */}
      {/* <!-- Banner Area Start --> */}
      <div className="banner-3-area">
        <div className="container">
          <div className="row mb-n-30px">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-30px">
              <div className="banner-wrapper">
                <a href="shop-4-column.html">
                  <img src="assets/images/banner-image/5.jpg" alt="" />
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-30px">
              <div className="banner-wrapper mb-30px">
                <a href="shop-4-column.html">
                  <img src="assets/images/banner-image/6.jpg" alt="" />
                </a>
              </div>
              <div className="banner-wrapper">
                <a href="shop-4-column.html">
                  <img src="assets/images/banner-image/7.jpg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Banner Area End --> */}
      {/* <!-- Static Area Start --> */}
      <section className="static-area mtb-60px">
        <div className="container">
          <div className="static-area-wrap">
            <div className="row">
              {/* <!-- Static Single Item Start --> */}
              <div className="col-lg-3 col-xs-12 col-md-6 col-sm-6">
                <div className="single-static pb-res-md-0 pb-res-sm-0 pb-res-xs-0">
                  <img
                    src="assets/images/icons/static-icons-1.png"
                    alt=""
                    className="img-responsive"
                  />
                  <div className="single-static-meta">
                    <h4>Free Shipping</h4>
                    <p>On all orders over $75.00</p>
                  </div>
                </div>
              </div>
              {/* <!-- Static Single Item End --> */}
              {/* <!-- Static Single Item Start --> */}
              <div className="col-lg-3 col-xs-12 col-md-6 col-sm-6">
                <div className="single-static pb-res-md-0 pb-res-sm-0 pb-res-xs-0 pt-res-xs-20">
                  <img
                    src="assets/images/icons/static-icons-2.png"
                    alt=""
                    className="img-responsive"
                  />
                  <div className="single-static-meta">
                    <h4>Free Returns</h4>
                    <p>Returns are free within 9 days</p>
                  </div>
                </div>
              </div>
              {/* <!-- Static Single Item End --> */}
              {/* <!-- Static Single Item Start --> */}
              <div className="col-lg-3 col-xs-12 col-md-6 col-sm-6">
                <div className="single-static pt-res-md-30 pb-res-sm-30 pb-res-xs-0 pt-res-xs-20">
                  <img
                    src="assets/images/icons/static-icons-3.png"
                    alt=""
                    className="img-responsive"
                  />
                  <div className="single-static-meta">
                    <h4>100% Payment Secure</h4>
                    <p>Your payment are safe with us.</p>
                  </div>
                </div>
              </div>
              {/* <!-- Static Single Item End --> */}
              {/* <!-- Static Single Item Start --> */}
              <div className="col-lg-3 col-xs-12 col-md-6 col-sm-6">
                <div className="single-static pt-res-md-30 pb-res-sm-30 pt-res-xs-20">
                  <img
                    src="assets/images/icons/static-icons-4.png"
                    alt=""
                    className="img-responsive"
                  />
                  <div className="single-static-meta">
                    <h4>Support 24/7</h4>
                    <p>Contact us 24 hours a day</p>
                  </div>
                </div>
              </div>
              {/* <!-- Static Single Item End --> */}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Static Area End --> */}
      {/* <!-- Best Sells Area Start --> */}
      <section className="best-sells-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {/* <!-- Section Title Start --> */}
              <div className="section-title">
                <h2>Best Sellers</h2>
                <p>Add bestselling products to weekly line up</p>
              </div>
              {/* <!-- Section Title Start --> */}
            </div>
          </div>
          {/* <!-- Best Sell Slider Carousel Start --> */}
          <div className="best-sell-slider owl-carousel owl-nav-style">
            {/* <!-- Single Item --> */}
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
                    Juicy Couture Juicy Quilted Ter..
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
            {/* <!-- Single Item --> */}
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
                    New Balance Fresh Foam Ka..
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
                    <li className="current-price">€15.12</li>
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
            {/* <!-- Single Item --> */}
            <article className="list-product">
              <div className="img-block">
                <a href="single-product.html" className="thumbnail">
                  <img
                    className="first-img"
                    src="assets/images/product-image/organic/product-3.jpg"
                    alt=""
                  />
                  <img
                    className="second-img"
                    src="assets/images/product-image/organic/product-4.jpg"
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
                    Brixton Patrol All Terrain Ano..
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
            {/* <!-- Single Item --> */}
            <article className="list-product">
              <div className="img-block">
                <a href="single-product.html" className="thumbnail">
                  <img
                    className="first-img"
                    src="assets/images/product-image/organic/product-5.jpg"
                    alt=""
                  />
                  <img
                    className="second-img"
                    src="assets/images/product-image/organic/product-5.jpg"
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
                    Juicy Couture Tricot Logo Strip..
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
            {/* <!-- Single Item --> */}
            <article className="list-product">
              <div className="img-block">
                <a href="single-product.html" className="thumbnail">
                  <img
                    className="first-img"
                    src="assets/images/product-image/organic/product-6.jpg"
                    alt=""
                  />
                  <img
                    className="second-img"
                    src="assets/images/product-image/organic/product-6.jpg"
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
                    New Balance Arishi Sport v1
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
            {/* <!-- Single Item --> */}
            <article className="list-product">
              <div className="img-block">
                <a href="single-product.html" className="thumbnail">
                  <img
                    className="first-img"
                    src="assets/images/product-image/organic/product-7.jpg"
                    alt=""
                  />
                  <img
                    className="second-img"
                    src="assets/images/product-image/organic/product-8.jpg"
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
                  <span>GRAPHIC CORNAR</span>
                </a>
                <h2>
                  <a href="single-product.html" className="product-link">
                    Fila Locker Room Varsity Jacket
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
            {/* <!-- Single Item --> */}
            <article className="list-product">
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
                    Water and Wind Resistant Ins..
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
            {/* <!-- Single Item --> */}
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
                    New Luxury Men's Slim Fit Shi...
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
            {/* <!-- Single Item --> */}
            <article className="list-product">
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
                    Originals Kaval Windbreaker...
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
            {/* <!-- Single Item --> */}
            <article className="list-product">
              <div className="img-block">
                <a href="single-product.html" className="thumbnail">
                  <img
                    className="first-img"
                    src="assets/images/product-image/organic/product-13.jpg"
                    alt=""
                  />
                  <img
                    className="second-img"
                    src="assets/images/product-image/organic/product-3.jpg"
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
                    Brixton Patrol All Terrain Anor...
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
            {/* <!-- Single Item --> */}
            <article className="list-product">
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
            {/* <!-- Single Item --> */}
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
                    Juicy Couture Juicy Quilted Ter..
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
            {/* <!-- Single Item --> */}
          </div>
          {/* <!-- Best Sell Slider Carousel End --> */}
        </div>
      </section>
      {/* <!-- Best Sell Area End --> */}
      {/* <!-- Feature Area 2 Start --> */}
      <section className="feature-area-2">
        <div className="container">
          <div className="row">
            {/* <!-- left side --> */}
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div className="feature-left">
                <img
                  src="assets/images/feature-bg/1.jpg"
                  alt=""
                  className="img-responsive"
                />
              </div>
            </div>
            {/* <!-- right side --> */}
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
              {/* <!-- Section Title --> */}
              <div className="section-title">
                <h2>Featured Products</h2>
                <p>Add featured products to weekly line up</p>
              </div>
              {/* <!-- Section Title --> */}
              {/* <!-- Feature slide 2 start --> */}
              <div className="feature-slider-2 owl-carousel owl-nav-style">
                {/* <!-- slngle item --> */}
                <div className="feature-slider-item">
                  <article className="list-product">
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
                    <div className="product-decs">
                      <a className="inner-link" href="shop-4-column.html">
                        <span>STUDIO DESIGN</span>
                      </a>
                      <h2>
                        <a href="single-product.html" className="product-link">
                          Juicy Couture Solid...
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
                    <div className="product-decs">
                      <a className="inner-link" href="shop-4-column.html">
                        <span>STUDIO DESIGN</span>
                      </a>
                      <h2>
                        <a href="single-product.html" className="product-link">
                          New Balance Fresh...
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
                  </article>
                </div>
                {/* <!-- slngle item --> */}
                <div className="feature-slider-item">
                  <article className="list-product">
                    <div className="img-block">
                      <a href="single-product.html" className="thumbnail">
                        <img
                          className="first-img"
                          src="assets/images/product-image/organic/product-16.jpg"
                          alt=""
                        />
                        <img
                          className="second-img"
                          src="assets/images/product-image/organic/product-17.jpg"
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
                    <div className="product-decs">
                      <a className="inner-link" href="shop-4-column.html">
                        <span>STUDIO DESIGN</span>
                      </a>
                      <h2>
                        <a href="single-product.html" className="product-link">
                          Originals Kaval Win...
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
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="list-product">
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
                    <div className="product-decs">
                      <a className="inner-link" href="shop-4-column.html">
                        <span>STUDIO DESIGN</span>
                      </a>
                      <h2>
                        <a href="single-product.html" className="product-link">
                          Originals Kaval Win...
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
                        </ul>
                      </div>
                    </div>
                  </article>
                </div>
                {/* <!-- slngle item --> */}
                <div className="feature-slider-item">
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
                    <div className="product-decs">
                      <a className="inner-link" href="shop-4-column.html">
                        <span>STUDIO DESIGN</span>
                      </a>
                      <h2>
                        <a href="single-product.html" className="product-link">
                          Juicy Couture Juicy...
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
                        </ul>
                      </div>
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
                    <div className="product-decs">
                      <a className="inner-link" href="shop-4-column.html">
                        <span>STUDIO DESIGN</span>
                      </a>
                      <h2>
                        <a href="single-product.html" className="product-link">
                          Juicy Couture Juicy...
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
                        </ul>
                      </div>
                    </div>
                  </article>
                </div>
                {/* <!-- slngle item --> */}
                <div className="feature-slider-item">
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
                          src="assets/images/product-image/organic/product-23.jpg"
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
                    <div className="product-decs">
                      <a className="inner-link" href="shop-4-column.html">
                        <span>STUDIO DESIGN</span>
                      </a>
                      <h2>
                        <a href="single-product.html" className="product-link">
                          New Balance Fresh...
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
                          <li className="current-price">€15.12</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="list-product">
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
                    <div className="product-decs">
                      <a className="inner-link" href="shop-4-column.html">
                        <span>STUDIO DESIGN</span>
                      </a>
                      <h2>
                        <a href="single-product.html" className="product-link">
                          New Balance Fresh...
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
                  </article>
                </div>
                {/* <!-- slngle item --> */}
                <div className="feature-slider-item">
                  <article className="list-product">
                    <div className="img-block">
                      <a href="single-product.html" className="thumbnail">
                        <img
                          className="first-img"
                          src="assets/images/product-image/organic/product-5.jpg"
                          alt=""
                        />
                        <img
                          className="second-img"
                          src="assets/images/product-image/organic/product-5.jpg"
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
                    <div className="product-decs">
                      <a className="inner-link" href="shop-4-column.html">
                        <span>GRAPHIC CORNER</span>
                      </a>
                      <h2>
                        <a href="single-product.html" className="product-link">
                          Juicy Couture Trico...
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
                          <li className="old-price not-cut">€9.90</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="list-product">
                    <div className="img-block">
                      <a href="single-product.html" className="thumbnail">
                        <img
                          className="first-img"
                          src="assets/images/product-image/organic/product-7.jpg"
                          alt=""
                        />
                        <img
                          className="second-img"
                          src="assets/images/product-image/organic/product-8.jpg"
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
                    <div className="product-decs">
                      <a className="inner-link" href="shop-4-column.html">
                        <span>GRAPHIC CORNER</span>
                      </a>
                      <h2>
                        <a href="single-product.html" className="product-link">
                          Fila Locker Room V...
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
                          <li className="old-price not-cut">€9.90</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                </div>
                {/* <!-- slngle item --> */}
                <div className="feature-slider-item">
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
                    <div className="product-decs">
                      <a className="inner-link" href="shop-4-column.html">
                        <span>STUDIO DESIGN</span>
                      </a>
                      <h2>
                        <a href="single-product.html" className="product-link">
                          Trans-Weight Hood...
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
                        </ul>
                      </div>
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
                    <div className="product-decs">
                      <a className="inner-link" href="shop-4-column.html">
                        <span>STUDIO DESIGN</span>
                      </a>
                      <h2>
                        <a href="single-product.html" className="product-link">
                          New Luxury Men's...
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
                        </ul>
                      </div>
                    </div>
                  </article>
                </div>
                {/* <!-- slngle item --> */}
                <div className="feature-slider-item">
                  <article className="list-product">
                    <div className="img-block">
                      <a href="single-product.html" className="thumbnail">
                        <img
                          className="first-img"
                          src="assets/images/product-image/organic/product-22.jpg"
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
                    <div className="product-decs">
                      <a className="inner-link" href="shop-4-column.html">
                        <span>GRAPHIC CORNER</span>
                      </a>
                      <h2>
                        <a href="single-product.html" className="product-link">
                          Calvin Klein Jeans...
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
                  </article>
                  <article className="list-product">
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
                    <div className="product-decs">
                      <a className="inner-link" href="shop-4-column.html">
                        <span>STUDIO DESIGN</span>
                      </a>
                      <h2>
                        <a href="single-product.html" className="product-link">
                          Water and Wind R...
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
                  </article>
                </div>
                {/* <!-- slngle item --> */}
                <div className="feature-slider-item">
                  <article className="list-product">
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
                    <div className="product-decs">
                      <a className="inner-link" href="shop-4-column.html">
                        <span>GRAPIC CORNER</span>
                      </a>
                      <h2>
                        <a href="single-product.html" className="product-link">
                          Madden by Steve...
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
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="list-product">
                    <div className="img-block">
                      <a href="single-product.html" className="thumbnail">
                        <img
                          className="first-img"
                          src="assets/images/product-image/organic/product-4.jpg"
                          alt=""
                        />
                        <img
                          className="second-img"
                          src="assets/images/product-image/organic/product-3.jpg"
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
                    <div className="product-decs">
                      <a className="inner-link" href="shop-4-column.html">
                        <span>STUDIO DESIGN</span>
                      </a>
                      <h2>
                        <a href="single-product.html" className="product-link">
                          Brixton Patrol All T...
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
                  </article>
                </div>
                {/* <!-- slngle item --> */}
                <div className="feature-slider-item">
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
                    <div className="product-decs">
                      <a className="inner-link" href="shop-4-column.html">
                        <span>STUDIO DESIGN</span>
                      </a>
                      <h2>
                        <a href="single-product.html" className="product-link">
                          Juicy Couture Juicy...
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
                        </ul>
                      </div>
                    </div>
                  </article>
                </div>
                {/* <!-- slngle item --> */}
              </div>
              {/* <!-- Feature slide 2 End --> */}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Feature area 2 End --> */}

      {/* <!-- Hot deal area Start --> */}
      <section className="hot-deal-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {/* <!-- Section Title --> */}
              <div className="section-title">
                <h2>Hot Deals</h2>
                <p>Add hot products to weekly line up</p>
              </div>
              {/* <!-- Section Title --> */}
            </div>
          </div>
          {/* <!-- Hot Deal Slider 2 Start --> */}
          <div className="hot-deal-2 owl-carousel owl-nav-style">
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
                  <div className="title_countdown">Hurry Up! Offers ends in:</div>
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
                  <div className="title_countdown">Hurry Up! Offers ends in:</div>
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
                  <div className="title_countdown">Hurry Up! Offers ends in:</div>
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
                  <div className="title_countdown">Hurry Up! Offers ends in:</div>
                  <div data-countdown="2021/12/31"></div>
                </div>
              </div>
            </article>
            {/* <!-- Single Item --> */}
          </div>
          {/* <!-- Hot Deal Slider 2 Start --> */}
        </div>
      </section>
      {/* <!-- Hot Deal Area End --> */}
      {/* <!-- Recent Add Product Area Start --> */}
      <section className="recent-add-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {/* <!-- Section Title --> */}
              <div className="section-title">
                <h2>New Arrivals</h2>
                <p>Add new products to weekly line up</p>
              </div>
              {/* <!-- Section Title --> */}
            </div>
          </div>
          {/* <!-- Recent Product slider Start --> */}
          <div className="recent-product-slider owl-carousel owl-nav-style">
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
          </div>
          {/* <!-- Recent Area Slider End --> */}
        </div>
      </section>
      {/* <!-- Recent product area end --> */}
      {/* <!-- Brand area start --> */}
      <div className="brand-area">
        <div className="container">
          <div className="brand-slider owl-carousel owl-nav-style owl-nav-style-2">
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
          </div>
        </div>
      </div>
      {/* <!-- Brand area end --> */}
      {/* <!-- Blog area Start --> */}
      <section className="blog-area mb-30px">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {/* <!-- Section title --> */}
              <div className="section-title">
                <h2>Latest Blogs</h2>
                <p>
                  Present posts in a best way to highlight interesting moments
                  of your blog.
                </p>
              </div>
              {/* <!-- Section title --> */}
            </div>
          </div>
          {/* <!-- Blog Slider Start --> */}
          <div className="blog-slider-active owl-carousel owl-nav-style">
            {/* <!-- single item --> */}
            <article className="blog-post">
              <div className="blog-post-top">
                <div className="blog-img">
                  <img src="assets/images/blog-image/blog-1.jpg" alt="" />
                </div>
              </div>
              <div className="blog-post-content d-flex">
                <div className="blog-post-content-cell">
                  <a href="blog-grid-left-sidebar.html" className="blog-meta">
                    Fashion
                  </a>
                  <h4 className="blog-post-heading">
                    <a href="blog-single-left-sidebar.html">
                      This is First Post For XipBlog
                    </a>
                  </h4>
                  <p className="blog-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typeSettings industry. Lorem Ipsum has been the industrys
                    ...
                  </p>
                  <a
                    className="read-more-btn"
                    href="blog-single-left-sidebar.html"
                  >
                    {" "}
                    Read More{" "}
                    <i className="ion-android-arrow-dropright-circle"></i>
                  </a>
                </div>
              </div>
            </article>
            {/* <!-- single item --> */}
            <article className="blog-post">
              <div className="blog-post-top">
                <div className="blog-img">
                  <img src="assets/images/blog-image/blog-2.jpg" alt="" />
                </div>
              </div>
              <div className="blog-post-content d-flex">
                <div className="blog-post-content-cell">
                  <a href="blog-grid-left-sidebar.html" className="blog-meta">
                    Fashion
                  </a>
                  <h4 className="blog-post-heading">
                    <a href="blog-single-left-sidebar.html">
                      This is Secound Post For XipBlog
                    </a>
                  </h4>
                  <p className="blog-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typeSettings industry. Lorem Ipsum has been the industrys
                    ...
                  </p>
                  <a
                    className="read-more-btn"
                    href="blog-single-left-sidebar.html"
                  >
                    {" "}
                    Read More{" "}
                    <i className="ion-android-arrow-dropright-circle"></i>
                  </a>
                </div>
              </div>
            </article>
            {/* <!-- single item --> */}
            <article className="blog-post">
              <div className="blog-post-top">
                <div className="blog-img">
                  <img src="assets/images/blog-image/blog-2.jpg" alt="" />
                </div>
              </div>
              <div className="blog-post-content d-flex">
                <div className="blog-post-content-cell">
                  <a href="blog-grid-left-sidebar.html" className="blog-meta">
                    Fashion
                  </a>
                  <h4 className="blog-post-heading">
                    <a href="blog-single-left-sidebar.html">
                      This is Third Post For XipBlog
                    </a>
                  </h4>
                  <p className="blog-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typeSettings industry. Lorem Ipsum has been the industrys
                    ...
                  </p>
                  <a
                    className="read-more-btn"
                    href="blog-single-left-sidebar.html"
                  >
                    {" "}
                    Read More{" "}
                    <i className="ion-android-arrow-dropright-circle"></i>
                  </a>
                </div>
              </div>
            </article>
            {/* <!-- single item --> */}
            <article className="blog-post">
              <div className="blog-post-top">
                <div className="blog-img">
                  <img src="assets/images/blog-image/blog-1.jpg" alt="" />
                </div>
              </div>
              <div className="blog-post-content d-flex">
                <div className="blog-post-content-cell">
                  <a href="blog-grid-left-sidebar.html" className="blog-meta">
                    Fashion
                  </a>
                  <h4 className="blog-post-heading">
                    <a href="blog-single-left-sidebar.html">
                      This is Foruth Post For XipBlog
                    </a>
                  </h4>
                  <p className="blog-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typeSettings industry. Lorem Ipsum has been the industrys
                    ...
                  </p>
                  <a
                    className="read-more-btn"
                    href="blog-single-left-sidebar.html"
                  >
                    {" "}
                    Read More{" "}
                    <i className="ion-android-arrow-dropright-circle"></i>
                  </a>
                </div>
              </div>
            </article>
            {/* <!-- single item --> */}
          </div>
          {/* <!-- Blog Slider Start --> */}
        </div>
      </section>
      {/* <!-- Blog Area End --> */}
      {/* <!-- Category Area Start --> */}
      <section className="categorie-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {/* <!-- Section Title --> */}
              <div className="section-title">
                <h2>Popular Categories</h2>
                <p>Add Popular Categories to weekly line up</p>
              </div>
              {/* <!-- Section Title --> */}
            </div>
          </div>
          {/* <!-- Category Slider Start --> */}
          <div className="category-slider owl-carousel owl-nav-style">
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
          </div>
          {/* <!-- Category Slider Start --> */}
        </div>
      </section>
      {/* Category Area End */}
      {/* Footer Area start */}
      
      {/* <!--  Footer Area End --> */}
    </div>

    {/* <!-- Modal --> */}
    <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog">
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
                      alt=""
                    />
                  </div>
                  <div id="pro-2" className="tab-pane fade">
                    <img
                      src="assets/images/product-image/organic/product-9.jpg"
                      alt=""
                    />
                  </div>
                  <div id="pro-3" className="tab-pane fade">
                    <img
                      src="assets/images/product-image/organic/product-20.jpg"
                      alt=""
                    />
                  </div>
                  <div id="pro-4" className="tab-pane fade">
                    <img
                      src="assets/images/product-image/organic/product-19.jpg"
                      alt=""
                    />
                  </div>
                </div>
                {/* <!-- Thumbnail Large Image End --> */}
                {/* <!-- Thumbnail Image End --> */}
                <div className="quickview-wrap mt-15">
                  <div
                    className="quickview-slide-active owl-carousel nav owl-nav-style owl-nav-style-2"
                    role="tablist"
                  >
                    <a className="active" data-bs-toggle="tab" href="#pro-1">
                      <img
                        src="assets/images/product-image/organic/product-11.jpg"
                        alt=""
                      />
                    </a>
                    <a data-bs-toggle="tab" href="#pro-2">
                      <img
                        src="assets/images/product-image/organic/product-9.jpg"
                        alt=""
                      />
                    </a>
                    <a data-bs-toggle="tab" href="#pro-3">
                      <img
                        src="assets/images/product-image/organic/product-20.jpg"
                        alt=""
                      />
                    </a>
                    <a data-bs-toggle="tab" href="#pro-4">
                      <img
                        src="assets/images/product-image/organic/product-19.jpg"
                        alt=""
                      />
                    </a>
                  </div>
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
                      <i className="ion-android-star"></i>
                      <i className="ion-android-star"></i>
                      <i className="ion-android-star"></i>
                      <i className="ion-android-star"></i>
                      <i className="ion-android-star"></i>
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
                    eiusm tempor incidid ut labore et dolore magna aliqua. Ut
                    enim ad minim venialo quis nostrud exercitation ullamco
                  </p>
                  <div className="pro-details-size-color">
                    <div className="pro-details-color-wrap">
                      <span>Color</span>
                      <div className="pro-details-color-content">
                        <ul>
                          <li className="blue"></li>
                          <li className="maroon active"></li>
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
                        value="1"
                      />
                    </div>
                    <div className="pro-details-cart btn-hover">
                      <a href="#"> + Add To Cart</a>
                    </div>
                  </div>
                  <div className="pro-details-wish-com">
                    <div className="pro-details-wishlist">
                      <a href="#">
                        <i className="ion-android-favorite-outline"></i>Add to
                        wishlist
                      </a>
                    </div>
                    <div className="pro-details-compare">
                      <a href="#">
                        <i className="ion-ios-shuffle-strong"></i>Add to compare
                      </a>
                    </div>
                  </div>
                  <div className="pro-details-social-info">
                    <span>Share</span>
                    <div className="social-info">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="ion-social-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="ion-social-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="ion-social-google"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="ion-social-instagram"></i>
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
  </div>
  );
};

export default Home;
