import React from "react";
import HeroSection from "../../components/HeroSection";
import MarketHero from "../../app/assets/img/market_main.jpg";

const FrenchMarkets = () => {
  return (
    <>
      <HeroSection
        title="THE DISTRICTS"
        subTitle="LE DISTRICT IS MADE UP OF 3 BUSTLING DISTRICTS"
        imgUrl={MarketHero}
      />
    </>
  );
};

export default FrenchMarkets;
