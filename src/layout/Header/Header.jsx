import "./Header.scss";
import React from "react";
import { Navigation } from "../../components/Navigation/Navigation";
import { Hamburger } from "../../components/Hamburger/Hamburger.jsx";
import { useMedia } from "../../hooks/useMedia";
import logo from "../../assets/svg/logo.svg"

export const Header = () => {
  const { isMobile, isTablet } = useMedia();
  console.log(isMobile, isTablet);
  return (
    <header className="header">
      <div className="header__container container">
        <img className="header__logo" src={logo} alt="Logo" />
        {isMobile ? <Hamburger /> : <Navigation />}
      </div>
    </header>
  );
};

export default Header;
