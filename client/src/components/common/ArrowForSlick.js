import React from 'react';
import {StyleSheet, css} from 'aphrodite/no-important';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faAngleRight from '@fortawesome/fontawesome-free-solid/faAngleRight';
import faAngleLeft from '@fortawesome/fontawesome-free-solid/faAngleLeft';
import PropTypes from 'prop-types';

const ArrowForSlick = props => {

  const { arrowDirection } = props;

  if (arrowDirection === 'next') {
    return (
      <button
        className={css(styles.arrow, styles.next) + ' slick-arrow'}
        onClick={props.onClick}
      >
        <FontAwesomeIcon
          icon={faAngleRight}
        />
      </button>
    )
  }
  if (arrowDirection === 'prev') {
    return (
      <button
        className={css(styles.arrow, styles.prev) + ' slick-arrow'}
        onClick={props.onClick}
      >
        <FontAwesomeIcon
          icon={faAngleLeft}
        />
      </button>
    )
  }
};

const styles = StyleSheet.create({
  arrow: {
    position: 'absolute',
    top: '50%',
    zIndex: '2',
    width: '40px',
    height: '40px',
    transform: 'translateX(-50%)',
    fontSize: '28px',
    color: '#282828',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    border: 'none',
    cursor: 'pointer',
  },
  next: {
    right: '-13px',
    borderRadius: '5px 0 0 5px',
  },
  prev: {
    left: '28px',
    borderRadius: '0 5px 5px 0',
  },
});

ArrowForSlick.propTypes = {
  arrowDirection: PropTypes.string.isRequired,
};

export default ArrowForSlick;
