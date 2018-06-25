import React from 'react';
import PricePageHead from './PricePageHead/PricePageHead';
import bike from './img/bike-title.jpg';

const Bikes = () => {
  return (
    <main className="main main_workshop">
      <PricePageHead
        pricePageTitle={'Веломастерская'}
        pricePageImg={bike}
      />
    </main>
  );
};

export default Bikes;
