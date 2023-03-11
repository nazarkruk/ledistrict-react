import React from "react";
import HeroSection from "../../components/HeroSection";
import RestaurantHero from "../../app/assets/img/restaurant_main.jpg";

const Restaurants = () => {
  return (
    <>
      <HeroSection
        title="THE RESTAURANTS"
        subTitle="CASUAL MEAL, COCKTAIL NIGHT, PRIVATE DINNER, OUTDOOR SUMMER DINING, MICHELIN DINING - WE'VE GOT YOU COVERED."
        imgUrl={RestaurantHero}
      />
    </>
  );
};

export default Restaurants;
