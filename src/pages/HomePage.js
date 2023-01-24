import React from "react";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import { About } from "../components/About";

function HomePage() {
  return (
    <div>
      <Header />
      <Carousel />
      <About />
    </div>
  );
}

export default HomePage;
