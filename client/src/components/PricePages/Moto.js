import React from 'react';
import PricePageHead from './PricePageHead/PricePageHead';
import moto from './img/moto-title.jpg';

const Moto = () => {
  return (
    <main className="main main_workshop">
      <PricePageHead
        pricePageTitle={'Мотомастерская не работает'}
        pricePageImg={moto}
      />
    </main>
  );
};

export default Moto;
