import React from 'react';
import {StyleSheet, css} from 'aphrodite/no-important';

const Client = props => {
  const {img} = props;
  return (
    <img className={css(styles.slide)} src={img} alt="" />
  );
};

const styles = StyleSheet.create({
  slide: {
    width: '100%',
    padding: '0 7.5px',
    boxSizing: 'border-box',
  }
});

export default Client;
