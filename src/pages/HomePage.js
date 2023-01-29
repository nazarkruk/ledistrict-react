import React from "react";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import { About } from "../components/About";
import { Restaurants } from "../components/Restaurants";
import { ContactUs } from "../components/ContactUs";

function HomePage() {
  return (
    <div>
      <Header />
      <Carousel />
      <About />
      <Restaurants />
      <ContactUs />
    </div>
  );
}

export default HomePage;
