import React from "react";
import { ContactUs } from "../../components/ContactUs";
import { Map } from "../../components/Map";
import { Footer } from "../../components/Footer";
import HeroSection from "../../components/HeroSection";
import HomeHero from "../../app/assets/img/carousel-1.jpg";

function CateringAndEvents() {
  return (
    <div>
      <HeroSection
        title="Catering and Events"
        subTitle="FRENCH SAVOIR FAIRE IN THE HEART OF DOWNTOWN NYC"
        imgUrl={HomeHero}
      />
      <ContactUs />
      <Map />
      <Footer />
    </div>
  );
}

export default CateringAndEvents;
