import React from "react";
import { About } from "../../components/About";
import { Restaurants } from "../../components/Restaurants";
import { ContactUs } from "../../components/ContactUs";
import { Map } from "../../components/Map";
import { Footer } from "../../components/Footer";
import HeroSection from "../../components/HeroSection";
import HomeHero from "../../app/assets/img/carousel-1.jpg";

function Contact() {
  return (
    <div>
      <HeroSection
        title="Contact Us"
        subTitle="FRENCH SAVOIR FAIRE IN THE HEART OF DOWNTOWN NYC"
        imgUrl={HomeHero}
      />
      <About />
      <Restaurants />
      <ContactUs />
      <Map />
      <Footer />
    </div>
  );
}

export default Contact;
