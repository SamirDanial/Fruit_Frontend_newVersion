import React from 'react'

const Compare = () => {
  return (
    <>
    <div>
  {/* Breadcrumb Area start */}
  <section className="breadcrumb-area">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="breadcrumb-content">
            <h1 className="breadcrumb-hrading">Compare Page</h1>
            <ul className="breadcrumb-links">
              <li><a href="index.html">Home</a></li>
              <li>Compare</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Breadcrumb Area End */}
  {/* Compare area start */}
  <div className="compare-area mtb-60px">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <form action="#">
            {/* Compare Table */}
            <div className="compare-table table-responsive">
              <table className="table mb-0">
                <tbody>
                  <tr>
                    <td className="first-column">Product</td>
                    <td className="product-image-title">
                      <a href="#" className="image"><img src="assets/images/product-image/electronic/10.jpg" alt="Compare Product" /></a>
                      <a href="#" className="category">Camera</a>
                      <a href="#" className="title">Zeon Zen 4 Pro</a>
                    </td>
                    <td className="product-image-title">
                      <a href="#" className="image"><img src="assets/images/product-image/electronic/9.jpg" alt="Compare Product" /></a>
                      <a href="#" className="category">Doren</a>
                      <a href="#" className="title">Aquet Doren D 420</a>
                    </td>
                    <td className="product-image-title">
                      <a href="#" className="image"><img src="assets/images/product-image/electronic/4.jpg" alt="Compare Product" /></a>
                      <a href="#" className="category">Games</a>
                      <a href="#" className="title">Game Station X 22</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="first-column">Description</td>
                    <td className="pro-desc">
                      <p>Samsome Note Book Pro 5 is the best Laptop on this budget. You can satisfy after usign this laptop. It’s performance is awesome. Designer’s love it.</p>
                    </td>
                    <td className="pro-desc">
                      <p>Samsome Note Book Pro 5 is the best Laptop on this budget. You can satisfy after usign this laptop. It’s performance is awesome. Designer’s love it.</p>
                    </td>
                    <td className="pro-desc">
                      <p>Samsome Note Book Pro 5 is the best Laptop on this budget. You can satisfy after usign this laptop. It’s performance is awesome. Designer’s love it.</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="first-column">Price</td>
                    <td className="pro-price">$295</td>
                    <td className="pro-price">$275</td>
                    <td className="pro-price">$395</td>
                  </tr>
                  <tr>
                    <td className="first-column">Color</td>
                    <td className="pro-color">Black</td>
                    <td className="pro-color">Black</td>
                    <td className="pro-color">Black</td>
                  </tr>
                  <tr>
                    <td className="first-column">Stock</td>
                    <td className="pro-stock">In Stock</td>
                    <td className="pro-stock">In Stock</td>
                    <td className="pro-stock">In Stock</td>
                  </tr>
                  <tr>
                    <td className="first-column">Add to cart</td>
                    <td className="pro-addtocart">
                      <a href="#" className="add-to-cart" tabIndex={0}><span>ADD TO CART</span></a>
                    </td>
                    <td className="pro-addtocart">
                      <a href="#" className="add-to-cart" tabIndex={0}><span>ADD TO CART</span></a>
                    </td>
                    <td className="pro-addtocart">
                      <a href="#" className="add-to-cart" tabIndex={0}><span>ADD TO CART</span></a>
                    </td>
                  </tr>
                  <tr>
                    <td className="first-column">Delete</td>
                    <td className="pro-remove">
                      <button><i className="ion-trash-b" /></button>
                    </td>
                    <td className="pro-remove">
                      <button><i className="ion-trash-b" /></button>
                    </td>
                    <td className="pro-remove">
                      <button><i className="ion-trash-b" /></button>
                    </td>
                  </tr>
                  <tr>
                    <td className="first-column">Rating</td>
                    <td className="pro-ratting">
                      <i className="ion-android-star" />
                      <i className="ion-android-star" />
                      <i className="ion-android-star" />
                      <i className="ion-android-star" />
                      <i className="ion-android-star" />
                    </td>
                    <td className="pro-ratting">
                      <i className="ion-android-star" />
                      <i className="ion-android-star" />
                      <i className="ion-android-star" />
                      <i className="ion-android-star" />
                      <i className="ion-android-star-outline" />
                    </td>
                    <td className="pro-ratting">
                      <i className="ion-android-star" />
                      <i className="ion-android-star" />
                      <i className="ion-android-star" />
                      <i className="ion-android-star" />
                      <i className="ion-android-star-half" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* Compare area end */}
</div>

    </>
  )
}

export default Compare