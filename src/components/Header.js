import React from "react";
import Logo from "../app/assets/img/logo.png";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container">
          <div className="collapse navbar-collapse justify-content-center order-lg-1 order-3 main-menu mx-3">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item ">
                <a className="nav-link" href="#rest-section">
                  FRENCH MARKETS<span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  RESTAURANTS
                </a>
              </li>
            </ul>
          </div>

          <a className="navbar-brand order-1 mr-lg-0" href="#">
            <img src={Logo} alt="LOGO" />
          </a>
          <button
            className="navbar-toggler order-2"
            type="button"
            data-toggle="collapse"
            data-target=".main-menu"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-center order-lg-3 order-4 main-menu mx-3">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  CATERING & EVENTS <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
