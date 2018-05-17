import React from 'react';
import {StyleSheet, css} from 'aphrodite/no-important';
import PropTypes from 'prop-types';

const ArrowForSlick = props => {

  const { arrowDirection } = props;

  if (arrowDirection === 'next') {
    return (
      <div
        className={css(styles.next)}
      />
    )
  }
  if (arrowDirection === 'prev') {
    return (
      <div
        className={css(styles.prev)}
      />
    )
  }
};

const styles = StyleSheet.create({

});

ArrowForSlick.propTypes = {
  next: {

  },
  prev: {

  },
};

export default ArrowForSlick;
