import React from "react";
import CarouselImg from "../app/assets/img/carousel-1.jpg";

const HeroSection = ({ imgUrl, title, subTitle }) => {
  return (
    <header className="">
      <div
        className="p-5 d-block  header-img h-600 text-center bg-image"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minWidth: "100%",
          height: "600px",
        }}
      >
        <div className="container d-flex flex-column justify-content-center h-100 r ">
          <div className="row justify-content-center">
            <div className="col-8 caption-bg  py-3 px-0 ">
              <h3>{title}</h3>
              <div className="border-top border-light w-25 mx-auto my-3"></div>
              <h6 className="py-3 d-none d-lg-block">{subTitle}</h6>
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
