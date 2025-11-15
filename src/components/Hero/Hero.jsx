import React from "react";
import "./Hero.scss";
import Button from "../ui/button/Button";
import earthImage from "../../assets/images/optimized1x/earth_1x.webp";
import earthImage2x from "../../assets/images/optimized2x/earth_2x.webp";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container container">
        <div className="hero__content">
          <h1 className="hero__title">
            Discover the vast expanses of{" "}
            <span className="hero__title--highlight">space</span>
          </h1>
          <p className="hero__subtitle">
            Where the possibilities are{" "}
            <span className="hero__subtitle--highlight">endless!</span>
          </p>
          <Button className="hero__button" href="#" size="lg">
            Learn more
          </Button>
        </div>
        <div className="hero__image">
          <img src={earthImage} srcSet={`${earthImage2x} 2x`} alt="Earth" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
