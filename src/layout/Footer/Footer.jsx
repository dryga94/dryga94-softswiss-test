import "./Footer.scss";
import React from "react";
import rocket from "../../assets/images/optimized1x/rocket_1x.webp";
import rocket2x from "../../assets/images/optimized2x/rocket_2x.webp";

export const Footer = () => {
  return (
    <footer className="footer">
      <img className="footer_image" src={rocket} srcSet={`${rocket2x} 2x`} alt="Rocket" />
      <small className="footer__text">Exciting space adventure!</small>
    </footer>
  );
};
