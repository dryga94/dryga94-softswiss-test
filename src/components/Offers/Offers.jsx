import './Offers.scss';
import { offersConfig } from './offers.config';
import { Offer } from '../Offer/Offer';

export const Offers = () => {
  return (
    <section className="offers">
      <h2 className="offers__title">Offers</h2>
      <div className="offers__container">
        {offersConfig.map((offer) => (
          <Offer key={offer.id} offer={offer} />
        ))}
      </div>
    </section>
  );
};
