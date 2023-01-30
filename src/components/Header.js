import React from "react";
import { Link } from "react-router-dom";
import Logo from "../app/assets/img/logo.png";
import cartIcon from "../app/assets/icons/cart.svg";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container">
          <div className="collapse navbar-collapse justify-content-center order-lg-1 order-3 main-menu mx-3">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item ">
                <Link className="nav-link" to="/markets">
                  FRENCH MARKETS<span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/restaurants">
                  RESTAURANTS
                </Link>
              </li>
            </ul>
          </div>

          <Link className="navbar-brand order-1 mr-lg-0" to="/">
            <img src={Logo} alt="LOGO" />
          </Link>
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
                <Link className="nav-link" to="/catering">
                  CATERING & EVENTS <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  CONTACT
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/cart">
                  <img src={cartIcon} alt="cart" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
