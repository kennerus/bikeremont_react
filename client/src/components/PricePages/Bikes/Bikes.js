import React from 'react';
import {StyleSheet, css} from 'aphrodite/no-important';
import PricePageHead from '../PricePageHead/PricePageHead';
import PricePageBody from '../PricePageBody/PricePageBody';
import PricePageBot from '../PricePageFooter/PricePageBot';
import bike from './img/bike-title.jpg';

import {another} from './bikePrices/another';
import {brakes} from './bikePrices/brakes';
import {complex} from './bikePrices/complex';
import {deformations} from './bikePrices/deformations';
import {fork} from './bikePrices/fork';
import {metal} from './bikePrices/metal';
import {rearShockAbsorber} from './bikePrices/rearShockAbsorber';
import {steeringColumn} from './bikePrices/steeringColumn';
import {transmission} from './bikePrices/transmission';
import {wheels} from './bikePrices/wheels';
import Container from "../../common/Container";

const Bikes = () => {
  return (
    <main className="main main_workshop">
      <PricePageHead
        pricePageTitle={'Веломастерская'}
        pricePageImg={bike}
      />

      <section className={css(styles.tableWrapper)}>
        <Container mainClass="container">

          <h2 className={css(styles.servicesTitle)}>Услуги по обслуживанию велосипедов</h2>

          <PricePageBody
            tableHead="Трансмиссия"
            prices={transmission}
          />

          <PricePageBody
            tableHead="Колёса"
            prices={wheels}
          />

          <PricePageBody
            tableHead="Тормоза"
            prices={brakes}
          />

          <PricePageBody
            tableHead="Рулевая колонка"
            prices={steeringColumn}
          />

          <PricePageBody
            tableHead="Вилка"
            prices={fork}
          />

          <PricePageBody
            tableHead="Задний амортизатор"
            prices={rearShockAbsorber}
          />

          <PricePageBody
            tableHead="Исправление деформаций металлических рам, вилок и других компонетов "
            prices={deformations}
          />

          <PricePageBody
            tableHead="Другое оборудование"
            prices={another}
          />

          <PricePageBody
            tableHead="Задний Амортизатор"
            prices={rearShockAbsorber}
          />

          <PricePageBody
            tableHead="Комплексное оборудование"
            prices={complex}
          />

          <PricePageBody
            tableHead="Работы с металлом"
            prices={metal}
          />

          <PricePageBot/>
        </Container>
      </section>
    </main>
  );
};

const styles = StyleSheet.create({
  tableWrapper: {
    marginTop: '30px',
  },
  servicesTitle: {
    margin: '0',
    fontSize: '32px',
  },
});

export default Bikes;
