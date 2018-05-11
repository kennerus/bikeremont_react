import React from 'react';
import {StyleSheet, css} from 'aphrodite/no-important';
import bike from './img/bike.jpg';

const Banner = () => {
  return(
    <img className={css(styles.img)} src={bike} alt="" />
  )
};

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
  }
});

export default Banner;