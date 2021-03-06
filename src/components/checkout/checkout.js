import React from 'react'

const Checkout = () => {
  return (
    <>
    <div>
  {/* Breadcrumb Area start */}
  <section className="breadcrumb-area">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="breadcrumb-content">
            <h1 className="breadcrumb-hrading">Checkout Page</h1>
            <ul className="breadcrumb-links">
              <li><a href="index.html">Home</a></li>
              <li>Checkout</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Breadcrumb Area End */}
  {/* checkout area start */}
  <div className="checkout-area mt-60px mb-40px">
    <div className="container">
      <div className="row">
        <div className="col-lg-7">
          <div className="billing-info-wrap">
            <h3>Billing Details</h3>
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="billing-info mb-20px">
                  <label>First Name</label>
                  <input type="text" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="billing-info mb-20px">
                  <label>Last Name</label>
                  <input type="text" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="billing-info mb-20px">
                  <label>Company Name</label>
                  <input type="text" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="billing-select mb-20px">
                  <label>Country</label>
                  <select>
                    <option>Select a country</option>
                    <option>Azerbaijan</option>
                    <option>Bahamas</option>
                    <option>Bahrain</option>
                    <option>Bangladesh</option>
                    <option>Barbados</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="billing-info mb-20px">
                  <label>Street Address</label>
                  <input className="billing-address" placeholder="House number and street name" type="text" />
                  <input placeholder="Apartment, suite, unit etc." type="text" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="billing-info mb-20px">
                  <label>Town / City</label>
                  <input type="text" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="billing-info mb-20px">
                  <label>State / County</label>
                  <input type="text" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="billing-info mb-20px">
                  <label>Postcode / ZIP</label>
                  <input type="text" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="billing-info mb-20px">
                  <label>Phone</label>
                  <input type="text" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="billing-info mb-20px">
                  <label>Email Address</label>
                  <input type="text" />
                </div>
              </div>
            </div>
            <div className="checkout-account mb-50px">
              <input className="checkout-toggle2" type="checkbox" />
              <label>Create an account?</label>
            </div>
            <div className="checkout-account-toggle open-toggle2 mb-30">
              <input placeholder="Email address" type="email" />
              <input placeholder="Password" type="password" />
              <button className="btn-hover checkout-btn" type="submit">register</button>
            </div>
            <div className="additional-info-wrap">
              <h4>Additional information</h4>
              <div className="additional-info">
                <label>Order notes</label>
                <textarea placeholder="Notes about your order, e.g. special notes for delivery. " name="message" defaultValue={""} />
              </div>
            </div>
            <div className="checkout-account mt-25">
              <input className="checkout-toggle" type="checkbox" />
              <label>Ship to a different address?</label>
            </div>
            <div className="different-address open-toggle mt-30">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="billing-info mb-20px">
                    <label>First Name</label>
                    <input type="text" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="billing-info mb-20px">
                    <label>Last Name</label>
                    <input type="text" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="billing-info mb-20px">
                    <label>Company Name</label>
                    <input type="text" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="billing-select mb-20px">
                    <label>Country</label>
                    <select>
                      <option>Select a country</option>
                      <option>Azerbaijan</option>
                      <option>Bahamas</option>
                      <option>Bahrain</option>
                      <option>Bangladesh</option>
                      <option>Barbados</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="billing-info mb-20px">
                    <label>Street Address</label>
                    <input className="billing-address" placeholder="House number and street name" type="text" />
                    <input placeholder="Apartment, suite, unit etc." type="text" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="billing-info mb-20px">
                    <label>Town / City</label>
                    <input type="text" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="billing-info mb-20px">
                    <label>State / County</label>
                    <input type="text" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="billing-info mb-20px">
                    <label>Postcode / ZIP</label>
                    <input type="text" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="billing-info mb-20px">
                    <label>Phone</label>
                    <input type="text" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="billing-info mb-20px">
                    <label>Email Address</label>
                    <input type="text" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="your-order-area">
            <h3>Your order</h3>
            <div className="your-order-wrap gray-bg-4">
              <div className="your-order-product-info">
                <div className="your-order-top">
                  <ul>
                    <li>Product</li>
                    <li>Total</li>
                  </ul>
                </div>
                <div className="your-order-middle">
                  <ul>
                    <li><span className="order-middle-left">Product Name X 1</span> <span className="order-price">$329 </span></li>
                    <li><span className="order-middle-left">Product Name X 1</span> <span className="order-price">$329 </span></li>
                  </ul>
                </div>
                <div className="your-order-bottom">
                  <ul>
                    <li className="your-order-shipping">Shipping</li>
                    <li>Free shipping</li>
                  </ul>
                </div>
                <div className="your-order-total">
                  <ul>
                    <li className="order-total">Total</li>
                    <li>$329</li>
                  </ul>
                </div>
              </div>
              <div className="payment-method">
                <div className="payment-accordion element-mrg">
                  <div className="panel-group" id="accordion">
                    <div className="panel payment-accordion">
                      <div className="panel-heading" id="method-one">
                        <h4 className="panel-title">
                          <a data-bs-toggle="collapse" data-parent="#accordion" href="#method1">
                            Direct bank transfer
                          </a>
                        </h4>
                      </div>
                      <div id="method1" className="panel-collapse collapse show">
                        <div className="panel-body">
                          <p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                        </div>
                      </div>
                    </div>
                    <div className="panel payment-accordion">
                      <div className="panel-heading" id="method-two">
                        <h4 className="panel-title">
                          <a className="collapsed" data-bs-toggle="collapse" data-parent="#accordion" href="#method2">
                            Check payments
                          </a>
                        </h4>
                      </div>
                      <div id="method2" className="panel-collapse collapse">
                        <div className="panel-body">
                          <p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                        </div>
                      </div>
                    </div>
                    <div className="panel payment-accordion">
                      <div className="panel-heading" id="method-three">
                        <h4 className="panel-title">
                          <a className="collapsed" data-bs-toggle="collapse" data-parent="#accordion" href="#method3">
                            Cash on delivery
                          </a>
                        </h4>
                      </div>
                      <div id="method3" className="panel-collapse collapse">
                        <div className="panel-body">
                          <p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="Place-order mt-25">
              <a className="btn-hover" href="#">Place Order</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* checkout area end */}
</div>

    </>
  )
}

export default Checkout