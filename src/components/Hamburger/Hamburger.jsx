import React, { useState } from "react";
import "./Hamburger.scss";
import { Navigation } from "../Navigation/Navigation";

export const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="hamburger">
      <button
        className={`hamburger__button ${
          isOpen ? "hamburger__button--active" : ""
        }`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
      >
        <span className="visually-hidden">
          {isOpen ? "Close menu" : "Open menu"}
        </span>
        <div />
        <div />
        <div />
      </button>
      <Navigation className="navigation--hamburger" onLinkClick={closeMenu} />
    </div>
  );
};
