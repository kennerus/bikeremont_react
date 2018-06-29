import React from 'react';
import PricePageHead from '../PricePageHead/PricePageHead';
import scooter from './img/scooter-title.jpg';

const Scooter = () => {
  return (
    <main className="main main_workshop">
      <PricePageHead
        pricePageTitle={'Мотомастерская не работает'}
        pricePageImg={scooter}
      />
    </main>
  );
};

export default Scooter;
