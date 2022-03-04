import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cart";
import { NavLink, useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { CREATE_ORDER } from '../hooks/Order';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [confirm, setConfirm] = useState(false);
  const [orderProducts, setOrderProducts] = useState([]);
  const [pvNote, setPvNote] = useState("");
  const [displayPopup, setDisplayPopup] = useState(false);
  const itemsInCart = useSelector((state) => state.cart.itemsInCart);
  const token = useSelector((state) => state.auth.token)
  const customerId = useSelector((state) => state.customer._id)
  const address = useSelector((state) => state.customer.physicalAddress)
  const total = useSelector((state) => state.cart.totalPrice);
  const totalItemsInCart = useSelector((state) => state.cart.totalItemsInCart);
  const [createOrder] = useMutation(CREATE_ORDER, {
    variables: {
      customerId: customerId,
      address: address,
      products: orderProducts,
      totalQuantity: parseInt(totalItemsInCart),
      totalPrice: parseInt(total),
      pvNote: pvNote
    }
  })

  const addSingleItem = (e) => {
    dispatch(cartActions.addToCart({ item: e }));
  };
  const removeSigleItem = (e) => {
    dispatch(cartActions.removeSingleItem({ item: e }));
  };

  const removeFromCart = (e) => {
    dispatch(cartActions.removeTotalItem({ item: e }));
  };

  useEffect(() => {
    setOrderProducts([]);
    itemsInCart.forEach(item => {
      const ie = {};
      ie.productId = item._id;
      ie.eachPrice = item.price;
      ie.totalPriceForThis = item.totalPriceForThis;
      ie.quantity = item.quantity;
      setOrderProducts(preState => [...preState, ie]);
    });
  }, [itemsInCart])

  const makeOrder = () => {
    if (!token) {
      navigate('/login');
    }
    createOrder().then((res) => {
      setDisplayPopup(false);
      setConfirm(true);
      dispatch(cartActions.clearCart());
    }).catch((error) => {
      console.log(error.message);
    })
  }

  useEffect(() => {
    if(confirm) {
      setInterval(() => {
        setConfirm(false);
      }, 2000)
    }
  }, [confirm])

  return (
    <>
     <div>
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
            <a href="single-product.html" className="image"><img src="assets/images/product-image/mini-cart/1.jpg" alt="Cart product Image" /></a>
            <div className="content">
              <a href="single-product.html" className="title">Juicy Couture...</a>
              <span className="quantity-price">1 x <span className="amount">$18.86</span></span>
              <a href="#" className="remove">×</a>
            </div>
          </li>
          <li>
            <a href="single-product.html" className="image"><img src="assets/images/product-image/mini-cart/2.jpg" alt="Cart product Image" /></a>
            <div className="content">
              <a href="single-product.html" className="title">Water and Wind...</a>
              <span className="quantity-price">1 x <span className="amount">$43.28</span></span>
              <a href="#" className="remove">×</a>
            </div>
          </li>
          <li>
            <a href="single-product.html" className="image"><img src="assets/images/product-image/mini-cart/3.jpg" alt="Cart product Image" /></a>
            <div className="content">
              <a href="single-product.html" className="title">Fila Locker Room...</a>
              <span className="quantity-price">1 x <span className="amount">$37.34</span></span>
              <a href="#" className="remove">×</a>
            </div>
          </li>
        </ul>
      </div>
      <div className="shopping-cart-total">
        <h4>Subtotal : <span>$20.00</span></h4>
        <h4>Shipping : <span>$7.00</span></h4>
        <h4>Taxes : <span>$0.00</span></h4>
        <h4 className="shop-total">Total : <span>$27.00</span></h4>
      </div>
      <div className="foot">
        <div className="buttons">
          <a href="cart.html" className="btn btn-dark btn-hover-primary mb-30px">view cart</a>
          <a href="checkout.html" className="btn btn-outline-dark current-btn">checkout</a>
        </div>
      </div>
    </div>
  </div>
  {/* OffCanvas Cart End */}
  {/* OffCanvas Menu Start */}
  <div id="offcanvas-mobile-menu" className="offcanvas offcanvas-mobile-menu">
    <button className="offcanvas-close" />
    {/* contact Info */}
    <div className="contact-info d-flex align-items-center justify-content-center color-black py-3">
      <img className="me-3" src="assets/images/icons/mobile-contact.png" alt />
      <p>Call us:</p>
      <a className="color-black" href="tel:(+800)345678">(+800)345678</a>
    </div>
    {/* offcanvas compare & wishlist */}
    <div className="user-panel">
      <ul className="d-flex justify-content-between">
        <li className="m-0">
          <a href="compare.html"><i className="ion-ios-shuffle-strong" />Compare (0)</a>
        </li>
        <li>
          <a href="wishlist.html"><i className="ion-android-favorite-outline" />Wishlist (0)</a>
        </li>
      </ul>
    </div>
    {/* offcanvas currency */}
    <div className="offcanvas-userpanel">
      <ul>
        <li className="offcanvas-userpanel__role">
          <a href="#">USD $  <i className="ion-ios-arrow-down" /></a>
          <ul className="user-sub-menu">
            <li><a className="current" href="#">USD $</a></li>
            <li><a href="#">EUR €</a></li>
          </ul>
        </li>
      </ul>
    </div>
    {/* offcanvas language */}
    <div className="offcanvas-userpanel">
      <ul>
        <li className="offcanvas-userpanel__role">
          <a href="#"><img src="assets/images/icons/1.jpg" alt />English  <i className="ion-ios-arrow-down" /></a>
          <ul className="user-sub-menu">
            <li><a className="current" href="#"><img src="assets/images/icons/1.jpg" alt />English</a></li>
            <li><a href="#"><img src="assets/images/icons/2.jpg" alt /> Français</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <div className="menu-close">
      menu
    </div>
    {/* offcanvas menu */}
    <div className="inner customScroll">
      <div className="offcanvas-menu mb-4">
        <ul>
          <li><a href="#"><span className="menu-text">Home</span></a>
            <ul className="sub-menu">
              <li><a href="#"><span className="menu-text">Home Organic</span></a>
                <ul className="sub-menu">
                  <li><a href="index.html">Organic 1</a></li>
                  <li><a href="index-2.html">Organic 2</a></li>
                  <li><a href="index-3.html">Organic 3</a></li>
                  <li><a href="index-4.html">Organic 4</a></li>
                </ul>
              </li>
              <li><a href="#"><span className="menu-text">Home Cosmetic</span></a>
                <ul className="sub-menu">
                  <li><a href="index-5.html">Cosmetic 1</a></li>
                  <li><a href="index-6.html">Cosmetic 2</a></li>
                  <li><a href="index-7.html">Cosmetic 3</a></li>
                  <li><a href="index-8.html">Cosmetic 4</a></li>
                </ul>
              </li>
              <li><a href="#"><span className="menu-text">Home Digital</span></a>
                <ul className="sub-menu">
                  <li><a href="index-9.html">Digital 1</a></li>
                  <li><a href="index-10.html">Digital 2</a></li>
                  <li><a href="index-11.html">Digital 3</a></li>
                  <li><a href="index-12.html">Digital 4</a></li>
                </ul>
              </li>
              <li><a href="#"><span className="menu-text">Home Furniture</span></a>
                <ul className="sub-menu">
                  <li><a href="index-13.html">Furniture 1</a></li>
                  <li><a href="index-14.html">Furniture 2</a></li>
                  <li><a href="index-15.html">Furniture 3</a></li>
                  <li><a href="index-16.html">Furniture 4</a></li>
                </ul>
              </li>
              <li><a href="#"><span className="menu-text">Home Medical</span></a>
                <ul className="sub-menu">
                  <li><a href="index-17.html">Medical 1</a></li>
                  <li><a href="index-18.html">Medical 2</a></li>
                  <li><a href="index-19.html">Medical 3</a></li>
                  <li><a href="index-20.html">Medical 4</a></li>
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
              <li><a href="about.html">About Page</a></li>
              <li><a href="cart.html">Cart Page</a></li>
              <li><a href="checkout.html">Checkout Page</a></li>
              <li><a href="compare.html">Compare Page</a></li>
              <li><a href="login.html">Login &amp; Regiter Page</a></li>
              <li><a href="my-account.html">Account Page</a></li>
              <li><a href="wishlist.html">Wishlist Page</a></li>
            </ul>
          </li>
          <li><a href="#"><span className="menu-text">Shop</span></a>
            <ul className="sub-menu">
              <li>
                <a href="#"><span className="menu-text">Shop Page</span></a>
                <ul className="sub-menu">
                  <li><a href="shop-3-column.html">Shop Grid 3 Column</a></li>
                  <li><a href="shop-4-column.html">Shop Grid 4 Column</a></li>
                  <li><a href="shop-left-sidebar.html">Shop Grid Left Sidebar</a>
                  </li>
                  <li><a href="shop-right-sidebar.html">Shop Grid Right
                      Sidebar</a></li>
                  <li><a href="shop-list.html">Shop List</a></li>
                  <li><a href="shop-list-left-sidebar.html">Shop List Left
                      Sidebar</a></li>
                  <li><a href="shop-list-right-sidebar.html">Shop List Right
                      Sidebar</a></li>
                  <li><a href="shop-filter.html">Shop Filter Page</a></li>
                </ul>
              </li>
              <li>
                <a href="#"><span className="menu-text">product Details Page</span></a>
                <ul className="sub-menu">
                  <li><a href="single-product.html">Shop Single</a></li>
                  <li><a href="single-product-variable.html">Shop Variable</a>
                  </li>
                  <li><a href="single-product-affiliate.html">Shop Affiliate</a>
                  </li>
                  <li><a href="single-product-group.html">Shop Group</a></li>
                  <li><a href="single-product-tabstyle-2.html">Shop Tab 2</a></li>
                  <li><a href="single-product-tabstyle-3.html">Shop Tab 3</a></li>
                  <li><a href="single-product-slider.html">Shop Slider</a></li>
                  <li><a href="single-product-gallery-left.html">Shop Gallery
                      Left</a></li>
                  <li><a href="single-product-gallery-right.html">Shop Gallery
                      Right</a></li>
                  <li><a href="single-product-sticky-left.html">Shop Sticky
                      Left</a></li>
                  <li><a href="single-product-sticky-right.html">Shop Sticky
                      Right</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li><a href="#"><span className="menu-text">Blog</span></a>
            <ul className="sub-menu">
              <li><a href="blog-grid-left-sidebar.html">Grid Left Sidebar</a></li>
              <li><a href="blog-grid-right-sidebar.html">Grid Right Sidebar</a></li>
              <li><a href="blog-list-left-sidebar.html">List Left Sidebar</a></li>
              <li><a href="blog-list-right-sidebar.html">List Right Sidebar</a></li>
              <li><a href="blog-single-left-sidebar.html">Single Left Sidebar</a></li>
              <li><a href="blog-single-right-sidebar.html">Single Right Sidbar</a>
              </li></ul>
          </li>
          <li><a href="contact.html">Contact Us</a></li>
        </ul>
      </div>
      {/* OffCanvas Menu End */}
      <div className="offcanvas-social mt-5">
        <ul>
          <li>
            <a href="#"><i className="ion-social-facebook" /></a>
          </li>
          <li>
            <a href="#"><i className="ion-social-twitter" /></a>
          </li>
          <li>
            <a href="#"><i className="ion-social-google" /></a>
          </li>
          <li>
            <a href="#"><i className="ion-social-youtube" /></a>
          </li>
          <li>
            <a href="#"><i className="ion-social-instagram" /></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  {/* OffCanvas Menu End */}
  {/* Header End */}
  {/* Breadcrumb Area start */}
  <section className="breadcrumb-area">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="breadcrumb-content">
            <h1 className="breadcrumb-hrading">Cart Page</h1>
            <ul className="breadcrumb-links">
              <li><a href="index.html">Home</a></li>
              <li>Cart</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Breadcrumb Area End */}
  {/* cart area start */}
  <div className="cart-main-area mtb-60px">
    <div className="container">
      <h3 className="cart-page-title">Your cart items</h3>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
          <form action="#">
            <div className="table-content table-responsive cart-table-content">
              <table>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Product Name</th>
                    <th>Until Price</th>
                    <th>Qty</th>
                    <th>Subtotal</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="product-thumbnail">
                      <a href="#"><img src="assets/images/product-image/mini-cart/1.jpg" alt /></a>
                    </td>
                    <td className="product-name"><a href="#">Product Name</a></td>
                    <td className="product-price-cart"><span className="amount">$60.00</span></td>
                    <td className="product-quantity">
                      <div className="cart-plus-minus">
                        <input className="cart-plus-minus-box" type="text" name="qtybutton" defaultValue={1} />
                      </div>
                    </td>
                    <td className="product-subtotal">$70.00</td>
                    <td className="product-remove">
                      <a href="#"><i className="fa fa-pencil-alt" /></a>
                      <a href="#"><i className="fa fa-times" /></a>
                    </td>
                  </tr>
                  <tr>
                    <td className="product-thumbnail">
                      <a href="#"><img src="assets/images/product-image/mini-cart/2.jpg" alt /></a>
                    </td>
                    <td className="product-name"><a href="#">Product Name</a></td>
                    <td className="product-price-cart"><span className="amount">$50.00</span></td>
                    <td className="product-quantity">
                      <div className="cart-plus-minus">
                        <input className="cart-plus-minus-box" type="text" name="qtybutton" defaultValue={1} />
                      </div>
                    </td>
                    <td className="product-subtotal">$80.00</td>
                    <td className="product-remove">
                      <a href="#"><i className="fa fa-pencil-alt" /></a>
                      <a href="#"><i className="fa fa-times" /></a>
                    </td>
                  </tr>
                  <tr>
                    <td className="product-thumbnail">
                      <a href="#"><img src="assets/images/product-image/mini-cart/3.jpg" alt /></a>
                    </td>
                    <td className="product-name"><a href="#">Product Name</a></td>
                    <td className="product-price-cart"><span className="amount">$70.00</span></td>
                    <td className="product-quantity">
                      <div className="cart-plus-minus">
                        <input className="cart-plus-minus-box" type="text" name="qtybutton" defaultValue={1} />
                      </div>
                    </td>
                    <td className="product-subtotal">$90.00</td>
                    <td className="product-remove">
                      <a href="#"><i className="fa fa-pencil-alt" /></a>
                      <a href="#"><i className="fa fa-times" /></a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="cart-shiping-update-wrapper">
                  <div className="cart-shiping-update">
                    <NavLink to="/checkout">Continue Shopping</NavLink>
                  </div>
                  <div className="cart-clear">
                    <button>Update Shopping Cart</button>
                    <a href="#">Clear Shopping Cart</a>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="cart-tax">
                <div className="title-wrap">
                  <h4 className="cart-bottom-title section-bg-gray">Estimate Shipping And Tax</h4>
                </div>
                <div className="tax-wrapper">
                  <p>Enter your destination to get a shipping estimate.</p>
                  <div className="tax-select-wrapper">
                    <div className="tax-select">
                      <label>
                        * Country
                      </label>
                      <select className="email s-email s-wid">
                        <option>Bangladesh</option>
                        <option>Albania</option>
                        <option>Åland Islands</option>
                        <option>Afghanistan</option>
                        <option>Belgium</option>
                      </select>
                    </div>
                    <div className="tax-select">
                      <label>
                        * Region / State
                      </label>
                      <select className="email s-email s-wid">
                        <option>Bangladesh</option>
                        <option>Albania</option>
                        <option>Åland Islands</option>
                        <option>Afghanistan</option>
                        <option>Belgium</option>
                      </select>
                    </div>
                    <div className="tax-select mb-25px">
                      <label>
                        * Zip/Postal Code
                      </label>
                      <input type="text" />
                    </div>
                    <button className="cart-btn-2" type="submit">Get A Quote</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="discount-code-wrapper">
                <div className="title-wrap">
                  <h4 className="cart-bottom-title section-bg-gray">Use Coupon Code</h4>
                </div>
                <div className="discount-code">
                  <p>Enter your coupon code if you have one.</p>
                  <form>
                    <input type="text" required name="name" />
                    <button className="cart-btn-2" type="submit">Apply Coupon</button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="grand-totall">
                <div className="title-wrap">
                  <h4 className="cart-bottom-title section-bg-gary-cart">Cart Total</h4>
                </div>
                <h5>Total products <span>$260.00</span></h5>
                <div className="total-shipping">
                  <h5>Total shipping</h5>
                  <ul>
                    <li><input type="checkbox" /> Standard <span>$20.00</span></li>
                    <li><input type="checkbox" /> Express <span>$30.00</span></li>
                  </ul>
                </div>
                <h4 className="grand-totall-title">Grand Total <span>$260.00</span></h4>
                <a href="#">Proceed to Checkout</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* cart area end */}
</div>

    </>
  );
};

export default Cart;
