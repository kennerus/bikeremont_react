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

class RepairedBikes extends Component {
  render() {
    return (
      <div className={css(styles.wrapper)}>
        <Title title={'Мы уже отремонтировали'}/>

        <div className={css(styles.gallery)}>
          <ReactFancyBox
            thumbnail={firstSm}
            image={first}
          />

          <ReactFancyBox
            thumbnail={secondSm}
            image={second}
          />

          <ReactFancyBox
            thumbnail={thirdSm}
            image={third}
          />

          <ReactFancyBox
            thumbnail={fourthSm}
            image={fourth}
          />

          <ReactFancyBox
            thumbnail={fifthSm}
            image={fifth}
          />

          <ReactFancyBox
            thumbnail={sixthSm}
            image={sixth}
          />

          <ReactFancyBox
            thumbnail={seventhSm}
            image={seventh}
          />

          <a
            href="https://vk.com/album-33973321_244270884"
            className={css(styles.more)}
          >
            <img
              src={bg}
              alt=""
              className={css(styles.moreImg)}
            />
            <span className={css(styles.moreText)}>Смотреть все работы тут</span>
          </a>
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
  more: {
    position: 'relative',
    width: '24%',
    marginTop: '15px',

    '::before': {
      content: "''",
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    }
  },
  moreImg: {
    width: '100%',
  },
  moreText: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    fontFamily: 'Bebas Neue Bold',
    textTransform: 'uppercase',
    fontSize: '44px',
    color: 'white',
    textAlign: 'center',
  },

})

export default RepairedBikes;
