import { Fragment } from "react";
export default function Shopsingle() {
    return (
        <Fragment>
<div className="site-wrap">
  <div className="site-navbar py-2">
    <div className="search-wrap">
      <div className="container">
        <a href="#" className="search-close js-search-close">
          <span className="icon-close2" />
        </a>
        <form action="#" method="post">
          <input
            type="text"
            className="form-control"
            placeholder="Search keyword and hit enter..."
          />
        </form>
      </div>
    </div>
    <div className="container">
      <div className="d-flex align-items-center justify-content-between">
        <div className="logo">
          <div className="site-logo">
            <a href="index.html" className="js-logo-clone">
              Pharma
            </a>
          </div>
        </div>
        <div className="main-nav d-none d-lg-block">
          <nav
            className="site-navigation text-right text-md-center"
            role="navigation"
          >
            <ul className="site-menu js-clone-nav d-none d-lg-block">
              <li className="active">
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="shop.html">Store</a>
              </li>
              <li className="has-children">
                <a href="#">Dropdown</a>
                <ul className="dropdown">
                  <li>
                    <a href="#">Supplements</a>
                  </li>
                  <li className="has-children">
                    <a href="#">Vitamins</a>
                    <ul className="dropdown">
                      <li>
                        <a href="#">Supplements</a>
                      </li>
                      <li>
                        <a href="#">Vitamins</a>
                      </li>
                      <li>
                        <a href="#">Diet &amp; Nutrition</a>
                      </li>
                      <li>
                        <a href="#">Tea &amp; Coffee</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Diet &amp; Nutrition</a>
                  </li>
                  <li>
                    <a href="#">Tea &amp; Coffee</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="about.html">About</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="icons">
          <a href="#" className="icons-btn d-inline-block js-search-open">
            <span className="icon-search" />
          </a>
          <a href="cart.html" className="icons-btn d-inline-block bag">
            <span className="icon-shopping-bag" />
            <span className="number">2</span>
          </a>
          <a
            href="#"
            className="site-menu-toggle js-menu-toggle ml-3 d-inline-block d-lg-none"
          >
            <span className="icon-menu" />
          </a>
        </div>
      </div>
    </div>
  </div>
  <div className="bg-light py-3">
    <div className="container">
      <div className="row">
        <div className="col-md-12 mb-0">
          <a href="index.html">Home</a> <span className="mx-2 mb-0">/</span>{" "}
          <a href="shop.html">Store</a> <span className="mx-2 mb-0">/</span>{" "}
          <strong className="text-black">Ibuprofen Tablets, 200mg</strong>
        </div>
      </div>
    </div>
  </div>
  <div className="site-section">
    <div className="container">
      <div className="row">
        <div className="col-md-5 mr-auto">
          <div className="border text-center">
            <img
              src="/assets/images/product_07_large.png"
              alt="Image"
              className="img-fluid p-5"
            />
          </div>
        </div>
        <div className="col-md-6">
          <h2 className="text-black">Ibuprofen Tablets, 200mg</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur,
            vitae, explicabo? Incidunt facere, natus soluta dolores iusto!
            Molestiae expedita veritatis nesciunt doloremque sint asperiores
            fuga voluptas, distinctio, aperiam, ratione dolore.
          </p>
          <p>
            <del>$95.00</del>{" "}
            <strong className="text-primary h4">$55.00</strong>
          </p>
          <div className="mb-5">
            <div className="input-group mb-3" style={{ maxWidth: 220 }}>
              <div className="input-group-prepend">
                <button
                  className="btn btn-outline-primary js-btn-minus"
                  type="button"
                >
                  −
                </button>
              </div>
              <input
                type="text"
                className="form-control text-center"
                defaultValue={1}
                placeholder=""
                aria-label="Example text with button addon"
                aria-describedby="button-addon1"
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-primary js-btn-plus"
                  type="button"
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <p>
            <a
              href="cart.html"
              className="buy-now btn btn-sm height-auto px-4 py-3 btn-primary"
            >
              Add To Cart
            </a>
          </p>
          <div className="mt-5">
            <ul
              className="nav nav-pills mb-3 custom-pill"
              id="pills-tab"
              role="tablist"
            >
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="pills-home-tab"
                  data-toggle="pill"
                  href="#pills-home"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  Ordering Information
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="pills-profile-tab"
                  data-toggle="pill"
                  href="#pills-profile"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  Specifications
                </a>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <table className="table custom-table">
                  <thead>
                    <tr>
                      <th>Material</th>
                      <th>Description</th>
                      <th>Packaging</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">OTC022401</th>
                      <td>
                        Pain Management: Acetaminophen PM Extra-Strength
                        Caplets, 500 mg, 100/Bottle
                      </td>
                      <td>1 BT</td>
                    </tr>
                    <tr>
                      <th scope="row">OTC022401</th>
                      <td>
                        Pain Management: Acetaminophen PM Extra-Strength
                        Caplets, 500 mg, 100/Bottle
                      </td>
                      <td>144/CS</td>
                    </tr>
                    <tr>
                      <th scope="row">OTC022401</th>
                      <td>
                        Pain Management: Acetaminophen PM Extra-Strength
                        Caplets, 500 mg, 100/Bottle
                      </td>
                      <td>1 EA</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div
                className="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                <table className="table custom-table">
                  <tbody>
                    <tr>
                      <td>HPIS CODE</td>
                      <td className="bg-light">999_200_40_0</td>
                    </tr>
                    <tr>
                      <td>HEALTHCARE PROVIDERS ONLY</td>
                      <td className="bg-light">No</td>
                    </tr>
                    <tr>
                      <td>LATEX FREE</td>
                      <td className="bg-light">Yes, No</td>
                    </tr>
                    <tr>
                      <td>MEDICATION ROUTE</td>
                      <td className="bg-light">Topical</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
    className="site-section bg-secondary bg-image"
    style={{ backgroundImage: 'url("/assets/images/bg_2.jpg")' }}
    <div className="container">
      <div className="row align-items-stretch">
        <div className="col-lg-6 mb-5 mb-lg-0">
          <a
            href="#"
            className="banner-1 h-100 d-flex"
            style={{ backgroundImage: 'url("/assets/images/bg_1.jpg")' }}
          >
            <div className="banner-1-inner align-self-center">
              <h2>Pharma Products</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae ex ad minus rem odio voluptatem.
              </p>
            </div>
          </a>
        </div>
        <div className="col-lg-6 mb-5 mb-lg-0">
          <a
            href="#"
            className="banner-1 h-100 d-flex"
            style={{ backgroundImage: 'url("/assets/images/bg_2.jpg")' }}
          >
            <div className="banner-1-inner ml-auto  align-self-center">
              <h2>Rated by Experts</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae ex ad minus rem odio voluptatem.
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
  <footer className="site-footer">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
          <div className="block-7">
            <h3 className="footer-heading mb-4">About Us</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
              quae reiciendis distinctio voluptates sed dolorum excepturi iure
              eaque, aut unde.
            </p>
          </div>
        </div>
        <div className="col-lg-3 mx-auto mb-5 mb-lg-0">
          <h3 className="footer-heading mb-4">Quick Links</h3>
          <ul className="list-unstyled">
            <li>
              <a href="#">Supplements</a>
            </li>
            <li>
              <a href="#">Vitamins</a>
            </li>
            <li>
              <a href="#">Diet &amp; Nutrition</a>
            </li>
            <li>
              <a href="#">Tea &amp; Coffee</a>
            </li>
          </ul>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="block-5 mb-5">
            <h3 className="footer-heading mb-4">Contact Info</h3>
            <ul className="list-unstyled">
              <li className="address">
                203 Fake St. Mountain View, San Francisco, California, USA
              </li>
              <li className="phone">
                <a href="tel://23923929210">+2 392 3929 210</a>
              </li>
              <li className="email">emailaddress@domain.com</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row pt-5 mt-5 text-center">
        <div className="col-md-12">
          <p>
            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            Copyright © All rights reserved | This template is made with{" "}
            <i className="icon-heart" aria-hidden="true" /> by{" "}
            <a
              href="https://colorlib.com"
              target="_blank"
              className="text-primary"
            >
              Colorlib
            </a>
            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
          </p>
        </div>
      </div>
    </div>
  </footer>
</div>
</Fragment>
)
}