import React from "react";
import "./ReadMore.scss";

export const ReadMore = () => {
  return (
    <div className="read-more">
      <h2 className="read-more__title">Embark on a space journey</h2>
      <input id="read-more-checkbox" type="checkbox" className="read-more__checkbox" />
      <label className="read-more__label" htmlFor="read-more-checkbox"></label>
      <p className="read-more__description">
        Travelling into space is one of the most exciting and unforgettable
        adventures that can change your life forever. And if you have ever
        dreamed of exploring stars, planets and galaxies, then our company is
        ready to help you realize this dream. We offer a unique experience that
        will allow you to go on a space journey and see all the secrets of the
        universe. We guarantee that every moment in space will be filled with
        incredible impressions, excitement and new discoveries. Our team of
        professionals takes care of your safety and comfort so that you can
        fully enjoy your adventure in space. We offer various options for space
        excursions.
        <br />
        Travelling into space is one of the most exciting and
        unforgettable adventures that can change your life forever. And if you
        have ever dreamed of exploring stars, planets and galaxies, then our
        company is ready to help you realize this dream. We offer a unique
        experience that will allow you to go on a space journey and see all the
        secrets of the universe. We guarantee that every moment in space will be
        filled with incredible impressions, excitement and new discoveries. Our
        team of professionals takes care of your safety and comfort so that you
        can fully enjoy your adventure in space. We offer various options for
        space excursions.
      </p>
    </div>
  );
};
