import React, {Component} from 'react';
import ReactFancyBox from 'react-fancybox';
import 'react-fancybox/lib/fancybox.css';
import {StyleSheet, css} from 'aphrodite/no-important';

import first from './img/01.jpg';
import firstSm from './img/01-small.jpg';
import second from './img/02.jpg';
import secondSm from './img/02-small.jpg';
import third from './img/03.jpg';
import thirdSm from './img/03-small.jpg';
import fourth from './img/04.jpg';
import fourthSm from './img/04-small.jpg';
import fifth from './img/05.jpg';
import fifthSm from './img/05-small.jpg';
import sixth from './img/06.jpg';
import sixthSm from './img/06-small.jpg';
import seventh from './img/07.jpg';
import seventhSm from './img/07-small.jpg';
import bg from './img/bg.jpg';
import Title from "../Title";
import RepairedBike from "./RepairedBike";

class RepairedBikes extends Component {
  render() {
    return (
      <div className={css(styles.wrapper)}>
        <Title title={'Мы уже отремонтировали'}/>

        <div className={css(styles.gallery)}>
          <RepairedBike
            fullSizeImg={first}
            thumbnailImg={firstSm}
          />

          <RepairedBike
            fullSizeImg={second}
            thumbnailImg={secondSm}
          />

          <RepairedBike
            fullSizeImg={third}
            thumbnailImg={thirdSm}
          />

          <RepairedBike
            fullSizeImg={fourth}
            thumbnailImg={fourthSm}
          />

          <RepairedBike
            fullSizeImg={fifth}
            thumbnailImg={fifthSm}
          />

          <RepairedBike
            fullSizeImg={sixth}
            thumbnailImg={sixthSm}
          />

          <RepairedBike
            fullSizeImg={seventh}
            thumbnailImg={seventhSm}
          />

          <RepairedBike
            vkLink={'https://vk.com/album-33973321_244270884'}
            bgImg={bg}
            text={'Смотреть все работы тут'}
          />
        </div>
      </div>

    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: '90px',
  },
  gallery: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '60px',
  },
});

export default RepairedBikes;
