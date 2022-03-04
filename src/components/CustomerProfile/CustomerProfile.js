import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CustomerProfile = () => {
  const navigate = useNavigate();
  const customer = useSelector((state) => state.customer);

  return (
    <>
    <div>
  {/* Breadcrumb Area start */}
  <section className="breadcrumb-area">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="breadcrumb-content">
            <h1 className="breadcrumb-hrading">Account Page</h1>
            <ul className="breadcrumb-links">
              <li><a href="index.html">Home</a></li>
              <li>My Account</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Breadcrumb Area End */}
  {/* account area start */}
  <div className="checkout-area mtb-60px">
    <div className="container">
      <div className="row">
        <div className="mx-auto col-lg-9">
          <div className="checkout-wrapper">
            <div id="faq" className="panel-group">
              <div className="panel panel-default single-my-account">
                <div className="panel-heading my-account-title">
                  <h3 className="panel-title"><span>1 .</span> <a data-bs-toggle="collapse" data-parent="#faq" href="#my-account-1">Edit your account information </a></h3>
                </div>
                <div id="my-account-1" className="panel-collapse collapse show">
                  <div className="panel-body">
                    <div className="myaccount-info-wrapper">
                      <div className="account-info-wrapper">
                        <h4>My Account Information</h4>
                        <h5>Your Personal Details</h5>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 col-md-6">
                          <div className="billing-info">
                            <label>First Name</label>
                            <input type="text" />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="billing-info">
                            <label>Last Name</label>
                            <input type="text" />
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                          <div className="billing-info">
                            <label>Email Address</label>
                            <input type="email" />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="billing-info">
                            <label>Telephone</label>
                            <input type="text" />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="billing-info">
                            <label>Fax</label>
                            <input type="text" />
                          </div>
                        </div>
                      </div>
                      <div className="billing-back-btn">
                        <div className="billing-back">
                          <a href="#"><i className="fa fa-arrow-up" /> back</a>
                        </div>
                        <div className="billing-btn">
                          <button type="submit">Continue</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="panel panel-default single-my-account">
                <div className="panel-heading my-account-title">
                  <h3 className="panel-title"><span>2 .</span> <a data-bs-toggle="collapse" data-parent="#faq" href="#my-account-2">Change your password </a></h3>
                </div>
                <div id="my-account-2" className="panel-collapse collapse">
                  <div className="panel-body">
                    <div className="myaccount-info-wrapper">
                      <div className="account-info-wrapper">
                        <h4>Change Password</h4>
                        <h5>Your Password</h5>
                      </div>
                      <div className="row">
                        <div className="col-lg-12 col-md-12">
                          <div className="billing-info">
                            <label>Password</label>
                            <input type="password" />
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                          <div className="billing-info">
                            <label>Password Confirm</label>
                            <input type="password" />
                          </div>
                        </div>
                      </div>
                      <div className="billing-back-btn">
                        <div className="billing-back">
                          <a href="#"><i className="fa fa-arrow-up" /> back</a>
                        </div>
                        <div className="billing-btn">
                          <button type="submit">Continue</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="panel panel-default single-my-account">
                <div className="panel-heading my-account-title">
                  <h3 className="panel-title"><span>3 .</span> <a data-bs-toggle="collapse" data-parent="#faq" href="#my-account-3">Modify your address book entries </a></h3>
                </div>
                <div id="my-account-3" className="panel-collapse collapse">
                  <div className="panel-body">
                    <div className="myaccount-info-wrapper">
                      <div className="account-info-wrapper">
                        <h4>Address Book Entries</h4>
                      </div>
                      <div className="entries-wrapper">
                        <div className="row">
                          <div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center">
                            <div className="entries-info text-center">
                              <p>Jone Deo</p>
                              <p>hastech</p>
                              <p>28 Green Tower,</p>
                              <p>Street Name.</p>
                              <p>New York City,</p>
                              <p>USA</p>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center">
                            <div className="entries-edit-delete text-center">
                              <a className="edit" href="#">Edit</a>
                              <a href="#">Delete</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="billing-back-btn">
                        <div className="billing-back">
                          <a href="#"><i className="fa fa-arrow-up" /> back</a>
                        </div>
                        <div className="billing-btn">
                          <button type="submit">Continue</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="panel panel-default single-my-account">
                <div className="panel-heading my-account-title">
                  <h3 className="panel-title"><span>4 .</span> <a href="wishlist.html">Modify your wish list </a></h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* account area end */}
</div>

    </>
  )
};

export default CustomerProfile;
