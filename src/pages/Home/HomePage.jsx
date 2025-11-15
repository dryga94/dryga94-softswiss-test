import React from "react";
import { BaseLayout } from "../../layout/BaseLayout/BaseLayout.jsx";
import Hero from "../../components/Hero/Hero.jsx";
import { Offers } from "../../components/Offers/Offers.jsx";
import { ReadMore } from "../../components/ReadMore/ReadMore.jsx";

export const HomePage = () => {
  return (
    <BaseLayout>
      <Hero />
      <div className="container">
        <Offers />
        <ReadMore />
      </div>
    </BaseLayout>
  );
};
