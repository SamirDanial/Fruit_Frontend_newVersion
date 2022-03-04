import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLazyQuery } from "@apollo/client";
import { GET_PRODUCT } from "../../hooks/Product";
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/cart';
import RecentProduct from '../../../RecentProduct';
import ThumbnailImage from '../../../ThumbnailImage';

const Product_Details = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const [featuredImage, setFeaturedImage] = useState("");
  const [product, setProduct] = useState();
  const [getProductById] = useLazyQuery(GET_PRODUCT, {
    variables: {
      ID: params.id,
    },
    onCompleted: (data) => data,
  });

  useEffect(() => {
    getProductById()
      .then((res) => {
        setProduct(res.data.getProduct);
        const fm =
          res.data.getProduct.photos &&
          res.data.getProduct.photos.find((x) => x.featured === true).photoUrl;
        setFeaturedImage(fm);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [getProductById]);

  const addToCart = () => {
    dispatch(cartActions.addToCart({item: product}));
  }
  return (
    <div>
      <div>
  {/* Breadcrumb Area start */}
  <section className="breadcrumb-area" style={{backgroundImage: `url(../assets/images/breadcrumb-bg/breadcrumb-bg.jpg)`}}>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="breadcrumb-content">
            <h1 className="breadcrumb-hrading">Single Product Page</h1>
            <ul className="breadcrumb-links">
              <li><a href="index.html">Home</a></li>
              <li>Single Product</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Breadcrumb Area End */}
  {/* Shop details Area start */}
  <section className="product-details-area mtb-60px">
    <div className="container">
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-12">
          <div className="product-details-img product-details-tab">
            <div className="zoompro-wrap zoompro-2">
              <div className="zoompro-border zoompro-span">
                <img className="zoompro" src="../assets/images/product-image/organic/display/1.jpg" alt />
              </div>
            </div>
            <div id="gallery" className="product-dec-slider-2">
              <a className="active" data-image="../assets/images/product-image/organic/display/1.jpg" >
                <img style={{marginRight: "10px", marginTop: "5px"}} width="100px" height="100px" src="../assets/images/product-image/organic/product-11.jpg" alt />
              </a>
              <a data-image="../assets/images/product-image/organic/display/2.jpg" >
                <img style={{marginRight: "10px", marginTop: "5px"}} width="100px" height="100px"  src="../assets/images/product-image/organic/product-9.jpg" alt />
              </a>
              <a data-image="../assets/images/product-image/organic/display/3.jpg" >
                <img style={{marginRight: "10px", marginTop: "5px"}} width="100px" height="100px"  src="../assets/images/product-image/organic/product-20.jpg" alt />
              </a>
              <a data-image="../assets/images/product-image/organic/display/4.jpg" >
                <img style={{marginRight: "10px", marginTop: "5px"}} width="100px" height="100px"  src="../assets/images/product-image/organic/product-19.jpg" alt />
              </a>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-12">
          <div className="product-details-content">
            <h2>Originals Kaval Windbr</h2>
            <p className="reference">Reference:<span> demo_17</span></p>
            <div className="pro-details-rating-wrap">
              <div className="rating-product">
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
              </div>
              <span className="read-review"><a className="reviews" href="#">Read reviews (1)</a></span>
            </div>
            <div className="pricing-meta">
              <ul>
                <li className="old-price not-cut">€18.90</li>
              </ul>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisic elit eiusm tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim venialo quis nostrud exercitation ullamco</p>
            <div className="pro-details-list">
              <ul>
                <li>- 0.5 mm Dail</li>
                <li>- Inspired vector icons</li>
                <li>- Very modern style</li>
              </ul>
            </div>
            <div className="pro-details-quality mt-0px">
              <div className="cart-plus-minus">
                <input className="cart-plus-minus-box" type="text" name="qtybutton" defaultValue={1} />
              </div>
              <div className="pro-details-cart btn-hover">
                <a href="#"> + Add To Cart</a>
              </div>
            </div>
            <div className="pro-details-wish-com">
              <div className="pro-details-wishlist">
                <a href="#"><i className="ion-android-favorite-outline" />Add to wishlist</a>
              </div>
              <div className="pro-details-compare">
                <a href="#"><i className="ion-ios-shuffle-strong" />Add to compare</a>
              </div>
            </div>
            <div className="pro-details-social-info">
              <span>Share</span>
              <div className="social-info">
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
                    <a href="#"><i className="ion-social-instagram" /></a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="pro-details-policy">
              <ul>
                <li><img src="../assets/images/icons/policy.png" alt /><span>Security Policy (Edit With Customer Reassurance Module)</span></li>
                <li><img src="../assets/images/icons/policy-2.png" alt /><span>Delivery Policy (Edit With Customer Reassurance Module)</span></li>
                <li><img src="../assets/images/icons/policy-3.png" alt /><span>Return Policy (Edit With Customer Reassurance Module)</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Shop details Area End */}
  {/* product details description area start */}
  <div className="description-review-area mb-60px">
    <div className="container">
      <div className="description-review-wrapper">
        <div className="description-review-topbar nav">
          <a data-bs-toggle="tab" href="#des-details1">Description</a>
          <a className="active" data-bs-toggle="tab" href="#des-details2">Product Details</a>
          <a data-bs-toggle="tab" href="#des-details3">Reviews (2)</a>
        </div>
        <div className="tab-content description-review-bottom">
          <div id="des-details2" className="tab-pane active">
            <div className="product-anotherinfo-wrapper">
              <ul>
                <li><span>Weight</span> 400 g</li>
                <li><span>Dimensions</span>10 x 10 x 15 cm</li>
                <li><span>Materials</span> 60% cotton, 40% polyester</li>
                <li><span>Other Info</span> American heirloom jean shorts pug seitan letterpress</li>
              </ul>
            </div>
          </div>
          <div id="des-details1" className="tab-pane">
            <div className="product-description-wrapper">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt</p>
              <p>
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo consequat. Duis aute irure dolor in reprehend in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              </p>
            </div>
          </div>
          <div id="des-details3" className="tab-pane">
            <div className="row">
              <div className="col-lg-7">
                <div className="review-wrapper">
                  <div className="single-review">
                    <div className="review-img">
                      <img src="../assets/images/testimonial-image/1.png" alt />
                    </div>
                    <div className="review-content">
                      <div className="review-top-wrap">
                        <div className="review-left">
                          <div className="review-name">
                            <h4>White Lewis</h4>
                          </div>
                          <div className="rating-product">
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                          </div>
                        </div>
                        <div className="review-left">
                          <a href="#">Reply</a>
                        </div>
                      </div>
                      <div className="review-bottom">
                        <p>
                          Vestibulum ante ipsum primis aucibus orci luctustrices posuere cubilia Curae Suspendisse viverra ed viverra. Mauris ullarper euismod vehicula. Phasellus quam nisi, congue id nulla.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="single-review child-review">
                    <div className="review-img">
                      <img src="../assets/images/testimonial-image/2.png" alt />
                    </div>
                    <div className="review-content">
                      <div className="review-top-wrap">
                        <div className="review-left">
                          <div className="review-name">
                            <h4>White Lewis</h4>
                          </div>
                          <div className="rating-product">
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                          </div>
                        </div>
                        <div className="review-left">
                          <a href="#">Reply</a>
                        </div>
                      </div>
                      <div className="review-bottom">
                        <p>Vestibulum ante ipsum primis aucibus orci luctustrices posuere cubilia Curae Sus pen disse viverra ed viverra. Mauris ullarper euismod vehicula.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="ratting-form-wrapper pl-50">
                  <h3>Add a Review</h3>
                  <div className="ratting-form">
                    <form action="#">
                      <div className="star-box">
                        <span>Your rating:</span>
                        <div className="rating-product">
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="rating-form-style mb-10">
                            <input placeholder="Name" type="text" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="rating-form-style mb-10">
                            <input placeholder="Email" type="email" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="rating-form-style form-submit">
                            <textarea name="Your Review" placeholder="Message" defaultValue={""} />
                            <input type="submit" defaultValue="Submit" />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* product details description area end */}
  {/* Recent Add Product Area Start */}
  <section className="recent-add-area">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          {/* Section Title */}
          <div className="section-title">
            <h2>You Might Also Like</h2>
            <p>Add Related products to weekly line up</p>
          </div>
          {/* Section Title */}
        </div>
      </div>
      {/* Recent Product slider Start */}
        <RecentProduct />
      {/* Recent product slider end */}
    </div>
  </section>
  {/* Recent product area end */}
  {/* Recent Add Product Area Start */}
  <section className="recent-add-area mt-30 mb-30px">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          {/* Section Title */}
          <div className="section-title">
            <h2>In The Same Category</h2>
            <p>16 other products in the same category:</p>
          </div>
          {/* Section Title */}
        </div>
      </div>
      {/* Recent Product slider Start */}
      {
        <RecentProduct />
      }
      {/* Recent product slider end */}
    </div>
  </section>
  {/* Recent product area end */}
  <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close"><span aria-hidden="true">x</span></button>
        </div>
        <div className="modal-body">
          <div className="row">
            <div className="col-md-5 col-sm-12 col-xs-12">
              <div className="tab-content quickview-big-img">
                <div id="pro-1" className="tab-pane fade show active">
                  <img src="../assets/images/product-image/organic/product-11.jpg" alt />
                </div>
                <div id="pro-2" className="tab-pane fade">
                  <img src="../assets/images/product-image/organic/product-9.jpg" alt />
                </div>
                <div id="pro-3" className="tab-pane fade">
                  <img src="../assets/images/product-image/organic/product-20.jpg" alt />
                </div>
                <div id="pro-4" className="tab-pane fade">
                  <img src="../assets/images/product-image/organic/product-19.jpg" alt />
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
                <p className="reference">Reference:<span> demo_17</span></p>
                <div className="pro-details-rating-wrap">
                  <div className="rating-product">
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                  </div>
                  <span className="read-review"><a className="reviews" href="#">Read reviews (1)</a></span>
                </div>
                <div className="pricing-meta">
                  <ul>
                    <li className="old-price not-cut">€18.90</li>
                  </ul>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisic elit eiusm tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim venialo quis nostrud exercitation ullamco</p>
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
                    <input className="cart-plus-minus-box" type="text" name="qtybutton" defaultValue={1} />
                  </div>
                  <div className="pro-details-cart btn-hover">
                    <a href="#"> + Add To Cart</a>
                  </div>
                </div>
                <div className="pro-details-wish-com">
                  <div className="pro-details-wishlist">
                    <a href="#"><i className="ion-android-favorite-outline" />Add to wishlist</a>
                  </div>
                  <div className="pro-details-compare">
                    <a href="#"><i className="ion-ios-shuffle-strong" />Add to compare</a>
                  </div>
                </div>
                <div className="pro-details-social-info">
                  <span>Share</span>
                  <div className="social-info">
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
                        <a href="#"><i className="ion-social-instagram" /></a>
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

    </div>
  );
};

export default Product_Details;
