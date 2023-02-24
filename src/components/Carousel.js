import React, { useState } from "react";

import CarouselImg from "../app/assets/img/carousel-1.jpg";

function Carousel() {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide mb-5"
      data-ride="carousel"
      data-interval="1000"
    >
      <div className="carousel-inner">
        <div className="carousel-item active tinted-image">
          <img
            className="d-block w-100 "
            src={CarouselImg}
            alt="First slide"
          ></img>
          <div className="carousel-caption">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-8 caption-bg  py-3 px-0 ">
                  <h3>WELCOME TO LE DISTRICT</h3>
                  <div className="border-top border-light w-25 mx-auto my-3"></div>
                  <h6 className="py-3 d-none d-lg-block">
                    FRENCH SAVOIR FAIRE IN THE HEART OF DOWNTOWN NYC
                  </h6>
                  <a
                    className="btn btn-outline-light"
                    href="https://resy.com/cities/ny/liberty-bistro"
                    id="resyButton-D4E7OZZ5ZMxNN1wiNW3q3"
                  >
                    BOOK NOW
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item tinted-image">
          <img className="d-block w-100" src={CarouselImg} alt="Second slide" />
          <div className="carousel-caption">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-8 caption-bg d-none d-lg-block py-3 px-0 ">
                  <h3>WELCOME TO LE DISTRICT</h3>
                  <div className="border-top border-light w-25 mx-auto my-3"></div>
                  <h6 className="py-3">
                    FRENCH SAVOIR FAIRE IN THE HEART OF DOWNTOWN NYC
                  </h6>
                  <a href="#" className="btn btn-outline-light">
                    Reserve Table
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item tinted-image">
          <img className="d-block w-100" src={CarouselImg} alt="Second slide" />
          <div className="carousel-caption">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-8 caption-bg d-none d-lg-block py-3 px-0 ">
                  <h3>WELCOME TO LE DISTRICT</h3>
                  <div className="border-top border-light w-25 mx-auto my-3"></div>
                  <h6 className="py-3">
                    FRENCH SAVOIR FAIRE IN THE HEART OF DOWNTOWN NYC
                  </h6>
                  <a href="#" className="btn btn-outline-light">
                    Reserve Table
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        className="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default Carousel;
