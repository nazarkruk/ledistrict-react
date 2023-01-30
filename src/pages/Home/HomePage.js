import React from "react";
import Header from "../../components/Header";
import Carousel from "../../components/Carousel";
import { About } from "../../components/About";
import { Restaurants } from "../../components/Restaurants";
import { ContactUs } from "../../components/ContactUs";
import { Map } from "../../components/Map";
import { Footer } from "../../components/Footer";

function HomePage() {
  return (
    <div>
      <Header />
      <Carousel />
      <About />
      <Restaurants />
      <ContactUs />
      <Map />
      <Footer />
    </div>
  );
}

export default HomePage;
