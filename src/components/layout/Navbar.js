import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { authActions } from "../../store/auth";
import { customerActions } from "../../store/customer";
import { useWindowSize } from "../hooks/useWindowSize";
import cart from "../../img/cart.png";
import fruitLogo from "../../img/fruitLogo.jpeg";

import menu from "../../img/menu.png";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const itemsInCart = useSelector((state) => state.cart.totalItemsInCart);
  const [width] = useWindowSize();
  const [toggle, setToggle] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.authenticated);
  const username = useSelector((state) => state.auth.username);
  const roleName =
    useSelector((state) => state.auth.roleName) === "Admin" ? true : false;
  // const imageUrl = useSelector((state) => state.customer.photoUrl);

  const logout = () => {
    dispatch(authActions.logout());
    dispatch(customerActions.logout());
    localStorage.removeItem("User");
  };

  const toggleMenu = () => {
    setToggle((prevState) => !prevState);
  };
  let checkAuthenticate = (
    <header className="main-header">
        {/* <!-- Header top Area Start  --> */}
        <div className="header-top-nav">
          <div className="container-fluid">
            <div className="row align-items-center">
              {/* <!--Left Start--> */}
              <div className="col-lg-4 col-md-12">
                <div className="text-lg-start text-center">
                  <p className="color-black">Welcome you to Ecolife store!</p>
                </div>
              </div>
              {/* <!--Left End--> */}
              {/* <!--Right Start--> */}
              <div className="col-8 d-lg-block d-none">
                <div className="header-right-nav">
                  <ul>
                    <li>
                      <a href="compare.html">
                        <i className="ion-ios-shuffle-strong"></i>Compare (0)
                      </a>
                    </li>
                    <li className="border-color-black">
                      <a href="wishlist.html">
                        <i className="ion-android-favorite-outline"></i>Wishlist
                        (0)
                      </a>
                    </li>
                  </ul>
                  {/* <!-- Header Top Language Currency --> */}
                  <div className="header-top-set-lan-curr d-flex justify-content-end">
                    <div className="header-bottom-set dropdown">
                      <button
                        className="dropdown-toggle header-action-btn hover-style-default color-black border-color-black"
                        data-bs-toggle="dropdown"
                      >
                        {" "}
                        Settings <i className="ion-ios-arrow-down"></i>
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="my-account.html">
                            My account
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="checkout.html">
                            Checkout
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="login.html">
                            Sign in
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* <!-- Single Wedge Start --> */}
                    <div className="header-top-curr dropdown">
                      <button
                        className="dropdown-toggle header-action-btn hover-style-default color-black border-color-black"
                        data-bs-toggle="dropdown"
                      >
                        <img
                          className="me-2"
                          src="assets/images/icons/1.jpg"
                          alt=""
                        />
                        English<i className="ion-ios-arrow-down"></i>
                      </button>
                      <ul className="dropdown-menu dropdown-menu-right">
                        <li>
                          <a className="dropdown-item" href="#">
                            <img src="assets/images/icons/1.jpg" alt="" />
                            English
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <img src="assets/images/icons/2.jpg" alt="" />
                            Français
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* <!-- Single Wedge End --> */}
                    {/* <!-- Single Wedge Start --> */}
                    <div className="header-top-curr dropdown">
                      <button
                        className="dropdown-toggle header-action-btn hover-style-default color-black border-color-black pr-0"
                        data-bs-toggle="dropdown"
                      >
                        USD $<i className="ion-ios-arrow-down"></i>
                      </button>
                      <ul className="dropdown-menu dropdown-menu-right">
                        <li>
                          <a className="dropdown-item" href="#">
                            USD $
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            EUR €
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* <!-- Single Wedge End --> */}
                  </div>
                  {/* <!-- Header Top Language Currency --> */}
                </div>
              </div>
              {/* <!--Right End--> */}
            </div>
          </div>
        </div>
        {/* <!-- Header top Area end  --> */}
        {/* <!-- Header Navigation Area Start  --> */}
        <div className="header-navigation sticky-nav d-none d-lg-block">
          <div className="container-fluid">
            <div className="row">
              {/* <!--  Logo Area Start--> */}
              <div className="col-md-2 col-sm-2">
                <div className="logo">
                  <a href="index.html">
                    <img src="assets/images/logo/logo-3.jpg" alt="" />
                  </a>
                </div>
              </div>
              {/* <!--  Logo Area end--> */}
              <div className="col-md-10 col-sm-10">
                <div className="main-navigation">
                  <ul>
                    <li className="menu-dropdown">
                      <a href="#">
                        Home <i className="ion-ios-arrow-down"></i>
                      </a>
                      <ul className="sub-menu">
                        <li className="menu-dropdown position-static">
                          <a href="#">
                            Home Organic <i className="ion-ios-arrow-down"></i>
                          </a>
                          <ul className="sub-menu sub-menu-2">
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
                        <li className="menu-dropdown position-static">
                          <a href="#">
                            Home Cosmetic <i className="ion-ios-arrow-down"></i>
                          </a>
                          <ul className="sub-menu sub-menu-2">
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
                        <li className="menu-dropdown position-static">
                          <a href="#">
                            Home Digital <i className="ion-ios-arrow-down"></i>
                          </a>
                          <ul className="sub-menu sub-menu-2">
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
                        <li className="menu-dropdown position-static">
                          <a href="#">
                            Home Furniture <i className="ion-ios-arrow-down"></i>
                          </a>
                          <ul className="sub-menu sub-menu-2">
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
                        <li className="menu-dropdown position-static">
                          <a href="#">
                            Home Medical <i className="ion-ios-arrow-down"></i>
                          </a>
                          <ul className="sub-menu sub-menu-2">
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
                      <a href="#">
                        Shop <i className="ion-ios-arrow-down"></i>
                      </a>
                      <ul className="mega-menu-wrap">
                        <li>
                          <ul>
                            <li className="mega-menu-title">
                              <a href="#">Shop Grid</a>
                            </li>
                            <li>
                              <a href="shop-3-column.html">
                                Shop Grid 3 Column
                              </a>
                            </li>
                            <li>
                              <a href="shop-4-column.html">
                                Shop Grid 4 Column
                              </a>
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
                          </ul>
                        </li>
                        <li>
                          <ul>
                            <li className="mega-menu-title">
                              <a href="#">Shop List</a>
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
                          <ul>
                            <li className="mega-menu-title">
                              <a href="#">Shop Single</a>
                            </li>
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
                              <a href="single-product-group.html">
                                Shop Group
                              </a>
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
                          </ul>
                        </li>
                        <li>
                          <ul>
                            <li className="mega-menu-title">
                              <a href="#">Shop Single</a>
                            </li>
                            <li>
                              <a href="single-product-slider.html">
                                Shop Slider
                              </a>
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
                        <li className="banner-wrapper">
                          <a href="single-product.html">
                            <img
                              src="assets/images/banner-image/banner-menu.jpg"
                              alt=""
                            />
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-dropdown">
                      <a href="#">
                        Pages <i className="ion-ios-arrow-down"></i>
                      </a>
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
                    <li className="menu-dropdown">
                      <a href="#">
                        Blog <i className="ion-ios-arrow-down"></i>
                      </a>
                      <ul className="sub-menu">
                        <li className="menu-dropdown position-static">
                          <a href="#">
                            Blog Grid <i className="ion-ios-arrow-down"></i>
                          </a>
                          <ul className="sub-menu sub-menu-2">
                            <li>
                              <a href="blog-grid-left-sidebar.html">
                                Blog Grid Left Sidebar
                              </a>
                            </li>
                            <li>
                              <a href="blog-grid-right-sidebar.html">
                                Blog Grid Right Sidebar
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-dropdown position-static">
                          <a href="#">
                            Blog List <i className="ion-ios-arrow-down"></i>
                          </a>
                          <ul className="sub-menu sub-menu-2">
                            <li>
                              <a href="blog-list-left-sidebar.html">
                                Blog List Left Sidebar
                              </a>
                            </li>
                            <li>
                              <a href="blog-list-right-sidebar.html">
                                Blog List Right Sidebar
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-dropdown position-static">
                          <a href="#">
                            Blog Single <i className="ion-ios-arrow-down"></i>
                          </a>
                          <ul className="sub-menu sub-menu-2">
                            <li>
                              <a href="blog-single-left-sidebar.html">
                                Blog Single Left Sidebar
                              </a>
                            </li>
                            <li>
                              <a href="blog-single-right-sidebar.html">
                                Blog Single Right Sidebar
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="contact.html">Contact Us</a>
                    </li>
                  </ul>
                </div>
                {/* <!-- Main Navigation Area end --> */}
                <div className="header_account_area">
                  {/* <!-- Search start --> */}
                  <div className="header_account_list search_list">
                    {/* <a href="javascript:void(0)">
                      <i className="ion-ios-search-strong"></i>
                    </a> */}
                    <div className="dropdown_search">
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
                            <option value="188">
                              - - - - Apples &amp; Pears
                            </option>
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
                            <option value="193">
                              - - - - Onions &amp; Leeks
                            </option>
                            <option value="194">
                              - - - - Carrots &amp; Root Vegetables
                            </option>
                            <option value="195">
                              - - - - Broccoli &amp; Cauliflower
                            </option>
                            <option value="196">
                              - - - - Cabbages &amp; Greens
                            </option>
                            <option value="185">
                              - - Fresh Salad &amp; Dips
                            </option>
                            <option value="197">
                              - - - - Lettuce &amp; Salad bags
                            </option>
                            <option value="198">- - - - Tomatoes</option>
                            <option value="199">- - - - Cucumber</option>
                            <option value="200">- - - - Celery</option>
                            <option value="201">- - - - Peppers</option>
                            <option value="186">
                              - - Milk, Butter &amp; Eggs
                            </option>
                            <option value="202">- - - - Milk</option>
                            <option value="203">
                              - - - - Spreads &amp; Margarine
                            </option>
                            <option value="204">
                              - - - - Fresh Cream &amp; Custard
                            </option>
                            <option value="205">- - - - Eggs</option>
                            <option value="206">
                              - - - - Baking &amp; Cooking
                            </option>
                          </select>
                        </div>
                        <button type="submit">
                          <i className="ion-ios-search-strong"></i>
                        </button>
                      </form>
                    </div>
                  </div>
                  {/* <!-- Search  End --> */}
                  {/* <!-- cart info start  --> */}
                  <div className="cart-info d-flex">
                    <div className="mini-cart-warp">
                      <a
                        href="#offcanvas-cart"
                        className="count-cart color-white offcanvas-toggle"
                      >
                        <span className="amount-tag">$20.00</span>
                        <span className="item-quantity-tag">02</span>
                      </a>
                    </div>
                  </div>
                  {/* <!-- cart info  End --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--Header Bottom Account End --> */}
        {/* <!-- Header mobile area start --> */}
        <div className="header-bottom d-lg-none sticky-nav py-3 mobile-navigation bg-color-gary mb-3">
          <div className="container-fluid">
            <div className="row justify-content-between align-items-center">
              <div className="col-md-3 col-sm-3">
                <a
                  href="#offcanvas-mobile-menu"
                  className="offcanvas-toggle mobile-menu"
                >
                  <i className="ion-navicon"></i>
                </a>
              </div>
              <div className="col-md-6 col-sm-4 d-flex justify-content-center">
                <div className="logo m-0">
                  <a href="index.html">
                    <img src="assets/images/logo/logo.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-5">
                {/* <!--Cart info Start --> */}
                <div className="cart-info d-flex m-0 justify-content-end">
                  <div className="header-bottom-set dropdown">
                    <button
                      className="dropdown-toggle header-action-btn hover-style-default border-0 color-black"
                      data-bs-toggle="dropdown"
                    >
                      {" "}
                      <i className="ion-person"></i>
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="my-account.html">
                          My account
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="checkout.html">
                          Checkout
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="login.html">
                          Sign in
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="mini-cart-warp">
                    <a
                      href="#offcanvas-cart"
                      className="count-cart color-black offcanvas-toggle"
                    >
                      <span className="amount-tag">$20.00</span>
                      <span className="item-quantity-tag">02</span>
                    </a>
                  </div>
                </div>
                {/* <!--Cart info End --> */}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Header mobile area end --> */}
      </header>
  );
  return <>{checkAuthenticate}</>;
};

export default Navbar;
