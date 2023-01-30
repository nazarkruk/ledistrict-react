import React from "react";
import Logo from "../app/assets/img/logo.png";

export const Footer = () => {
  return (
    <div className=" footer container-fluid  py-5">
      <div className="container">
        <div className="row text-center">
          <div className="col-12 col-lg-3 ">
            <div className="logo-part ">
              <img src={Logo} className="w-50 logo-footer" />
              <p>225 Liberty Street, NYC</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 ">
            <h6>MARKETS</h6>
            <ul>
              <li>
                {" "}
                <a href="#">Garden</a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">Cafe</a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">Market</a>{" "}
              </li>
            </ul>
          </div>

          <div className="col-md-6 col-lg-3 px-4">
            <h6> RESTAURANTS</h6>
            <ul>
              <li>
                {" "}
                <a href="#"> Liberty Bistro</a>{" "}
              </li>
              <li>
                {" "}
                <a href="#"> Le Bar</a>{" "}
              </li>
              <li>
                {" "}
                <a href="#"> L'Appart</a>{" "}
              </li>
            </ul>
          </div>
          <div className="col-lg-3 ">
            <h6> Newsletter</h6>
            <div className="form-footer my-3 ">
              <input type="text" placeholder=" e-mail..." name="subscribe" />
              <input type="button" value="GO" />
            </div>
            <div className="social d-flex justify-content-center">
              <a href="#">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
              <a href="#">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
