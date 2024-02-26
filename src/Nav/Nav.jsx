import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

class Nav extends PureComponent {
  render() {
    return (
      <>
        <nav className="navbar navbar-dark navbar-expand-lg  mNavbarH  px-5 position-fixed w-100">
          <div className="container">
            <Link to="" className="navbar-brand fw-bolder headNav" href="#">
              START FRAMEWORK
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto text-whites">
                <li className="nav-item">
                  <Link
                    to="/about"
                    className="nav-link "
                    aria-current="page"
                    href="#"
                  >
                    ABOUT
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/portfolio" className="nav-link" href="#">
                    PORTFOLIO
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link" href="#">
                    CONTACT
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Nav;
