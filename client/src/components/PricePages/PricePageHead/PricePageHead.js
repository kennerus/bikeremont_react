import React from 'react';
import {StyleSheet, css} from 'aphrodite/no-important';
import PropTypes from 'prop-types';

const PricePageHead = props => {
  const {pricePageTitle, pricePageImg} = props;
  return (
    <div>
      <h1 className={css(styles.title)}>{pricePageTitle}</h1>
      <hr className={css(styles.line)} size="3" noshade="" />
      <img className={css(styles.img)} src={pricePageImg} alt=""/>
    </div>
  );
};

const styles = StyleSheet.create({
  title: {
    margin: '0',
    fontSize: '36px',
    lineHeight: '1',
    textAlign: 'center',
  },
  line: {
    width: '150px',
    marginTop: '15px',
    color: '#232323',
  },
  img: {
    width: '100%',
    height: '300px',
    marginTop: '35px',
  }
});

PricePageHead.propTypes = {
  pricePageTitle: PropTypes.string.isRequired,
  pricePageImg: PropTypes.string.isRequired,
};

export default PricePageHead;
