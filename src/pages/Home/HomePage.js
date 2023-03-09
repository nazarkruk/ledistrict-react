import React from "react";
import { About } from "../../components/About";
import { Restaurants } from "../../components/Restaurants";
import { ContactUs } from "../../components/ContactUs";
import { Map } from "../../components/Map";
import { Footer } from "../../components/Footer";
import HeroSection from "../../components/HeroSection";

function HomePage() {
  return (
    <div>
      <HeroSection />
      <About />
      <Restaurants />
      <ContactUs />
      <Map />
      <Footer />
    </div>
  );
}

export default HomePage;
