import React from "react";
import CarouselImg from "../app/assets/img/carousel-1.jpg";

const HeroSection = () => {
  return (
    <header style={{ paddingLeft: 0 }}>
      <img className="d-block w-100 " src={CarouselImg} alt="First slide"></img>
      <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
        <div className="d-flex justify-content-center align-items-center h-100">
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
      </div>
    </header>
  );
};

export default HeroSection;
