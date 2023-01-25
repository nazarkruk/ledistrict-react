import React from "react";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import { About } from "../components/About";
import { Restaurants } from "../components/Restaurants";

function HomePage() {
  return (
    <div>
      <Header />
      <Carousel />
      <About />
      <Restaurants />
    </div>
  );
}

export default HomePage;
