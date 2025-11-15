import React from "react";
import "./Navigation.scss";
import { navigationConfig } from "./navigation.config";

export const Navigation = ({ className = "", onLinkClick }) => {
  const classes = `navigation ${className}`.trim();

  const handleLinkClick = () => {
    if (onLinkClick) {
      onLinkClick();
    }
  };

  return (
    <nav className={classes}>
      <ul className="navigation__list">
        {navigationConfig.map((item) => {
          const linkClasses = `navigation__link ${
            item?.icon ? "navigation__link--icon" : ""
          }`;
          return (
            <li className="navigation__item" key={item.id}>
              <a
                className={linkClasses}
                href={item.href}
                onClick={handleLinkClick}
              >
                {item?.icon ? (
                  <item.icon aria-label={item.title} />
                ) : (
                  <span>{item.title}</span>
                )}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
