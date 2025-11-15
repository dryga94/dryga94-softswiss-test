import "./Offer.scss";
import React from "react";
import Button from "../ui/button/Button";

export const Offer = ({ offer }) => {
  const { title, description, images, id, mobileText } = offer;

  return (
    <article
      className="offer"
      style={{
        "--offer-image-1x": `url(${images[0]})`,
        "--offer-image-2x": `url(${images[1]})`,
      }}
    >
      <div className="offer__container">
        <h3 className="offer__title">{title}</h3>
        <p className="offer__description" data-mobile-text={mobileText}>
          <span>{description}</span>
        </p>
        <Button href={`#offer-${id}`} variant="secondary">
          Learn more
        </Button>
      </div>
    </article>
  );
};
