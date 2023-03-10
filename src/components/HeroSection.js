import React from "react";
import CarouselImg from "../app/assets/img/carousel-1.jpg";

const HeroSection = () => {
  return (
    <header className="header-img">
      <div
        className="p-5 d-block  h-600 text-center bg-image  "
        style={{
          backgroundImage: `url(${CarouselImg})`,
          backgroundSize: "cover",
          height: "600px",
        }}
      >
        <div className="container carousel-caption ">
          <div className="row ">
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
    </header>
  );
};

export default HeroSection;
