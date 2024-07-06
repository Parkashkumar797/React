import React, { Fragment } from "react";
import { Link } from "react-router-dom"
import { Router } from "react-router-dom";
export default function Header() {
  return (
    <Fragment>
      <div className="container-xxl bg-white p-0">
        {/* Navbar & Hero Start */}
        <div className="container-xxl position-relative p-0">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
            <a href="" className="navbar-brand p-0">
              <h1 className="text-primary m-0">
                <i className="fa fa-utensils me-3" />
                Restoran
              </h1>
              <img src="/assests/img/logo.png" alt="Logo"/>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="fa fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav ms-auto py-0 pe-4">
                <Link to="/" className="nav-item nav-link">Home</Link>
                <Link to="/about" className="nav-item nav-link">about</Link>
                <a href="service.html" className="nav-item nav-link">
                  Service
                </a>
                <a href="menu.html" className="nav-item nav-link">
                  Menu
                </a>
                <div className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle active"
                    data-bs-toggle="dropdown"
                  >
                    Pages
                  </a>
                  <div className="dropdown-menu m-0">
                    <a href="booking.html" className="dropdown-item">
                      Booking
                    </a>
                    <a href="team.html" className="dropdown-item active">
                      Our Team
                    </a>
                    <a href="testimonial.html" className="dropdown-item">
                      Testimonial
                    </a>
                  </div>
                </div>
                <Link to="/contact" className="nav-item nav-link">contact</Link>
              </div>
              <a href="" className="btn btn-primary py-2 px-4">
                Book A Table
              </a>
            </div>
          </nav>
        </div>
        </div>
        {/* <div className="container-xxl py-5 bg-dark hero-header mb-5">
      <div className="container text-center my-5 pt-5 pb-4">
        <h1 className="display-3 text-white mb-3 animated slideInDown">
          Our Team
        </h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb justify-content-center text-uppercase">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Pages</a>
            </li>
            <li
              className="breadcrumb-item text-white active"
              aria-current="page"
            >
              Team
            </li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
</div> */}
    </Fragment>
  )
}
