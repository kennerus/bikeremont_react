import React, {Component} from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import AboutBlock from './AboutBlock';

import truck from './img/delivery_truck.png';
import paint from './img/paint.png';
import settings from './img/settings.png';
import skewdriver from './img/scewdriver.png';

class About extends Component {
  render() {
    return (
      <section className={css(styles.wrapper)}>
        <AboutBlock
          imgSrc={truck}
          title="Доставка"
          text="Мы можем доставить вашу технику к нам в мастерскую на машине и/или обратно. Стоимость доставки зависит от расстояния от нашей мастерской."
        />
        <AboutBlock
          imgSrc={skewdriver}
          title="Все виды ремонта"
          text="Мы берёмся за любой ремонт вашей техники и всегда открыто говорим о ценах за нашу работу."
        />
        <AboutBlock
          imgSrc={paint}
          title="Покраска"
          text="Мы предлагаем порошковую покраску металлических частей или покраску пластика мото техники."
        />
        <AboutBlock
          imgSrc={settings}
          title="Зап. части в наличии"
          text="Если нужна замена детали, то мы всегда быстро подберём подходящую зап.часть. Вам не нужно ждать неделями. "
        />
      </section>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '80px',
    '@media (max-width: 992px)': {
      flexWrap: 'wrap',
    },
    '@media (max-width: 768px)': {
      marginTop: '20px'
    }
  },
});

export default About;