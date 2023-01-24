import React from "react";

export const About = () => {
  return (
    <div class="container d-flex justify-content-center align-items-center my-5">
      <div class="row    d-flex align-items-center">
        <div class="col-12 col-lg-6">
          <h4 class="text-center">ABOUT LE DISTRICT</h4>
          <p class="text-center text-lg-left">
            Our mission is to deliver delicious French-inspired fare in an
            environment where service and quality are paramount. Our market of
            bustling districts consist of culinary-specific stations, exciting
            restaurants, an outdoor patio, and a fresh grocery, curated by our
            talented taste-makers.
          </p>
          <h5 class="text-center">EAT, SHOP, AND PLAY WITH US.</h5>
          <p class="text-center text-lg-left">
            We remain committed to the safety and well-being of our community
            and vigilant in our observation of current health best-practices.
            All food and products continue to be prepared with the well-being of
            both our guests and employees prioritized.
          </p>
        </div>
        <div class="col-12 col-lg-6 embed-responsive embed-responsive-16by9 px-1">
          <iframe
            class="embed-responsive-item"
            src="https://www.youtube.com/embed/jJdTXe65gjQ?rel=0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};
