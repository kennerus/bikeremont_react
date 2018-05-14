import React from 'react';
import {StyleSheet, css} from 'aphrodite/no-important';
import PropTypes from 'prop-types';

const RepairedBike = props => {
  const { fullSizeImg, thumbnailImg, vkLink, bgImg, text } = props;

  if (fullSizeImg || thumbnailImg) {
    return (
      <div className={css(styles.galleryBlock)}>
        <a
          data-fancybox="gallery"
          href={fullSizeImg}
        >
          <img
            src={thumbnailImg}
            alt=""
            className={css(styles.img)}
          />
        </a>
      </div>
    );
  } else {
    return (
      <div className={css(styles.galleryBlock)}>
        <a
          href={vkLink}
          className={css(styles.more)}
        >
          <img
            src={bgImg}
            alt=""
            className={css(styles.moreImg)}
          />
          <span className={css(styles.moreText)}>
            {text}
          </span>
        </a>
      </div>
    )
  }
};

const styles = StyleSheet.create({
  galleryBlock: {
    position: 'relative',
    width: '24%',
    marginRight: '1%',
    backgroundColor: '#323235',
      ':nth-child(4n)': {
        marginRight: '0',
      },
      ':nth-child(n + 5)': {
        marginTop: '15px',
      },
  },
  img: {
    display: 'block',
    width: '100%',
  },
  more: {
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
    ':hover': {
      opacity: '0.9',
    }
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
});

RepairedBike.propTypes = {
  fullSizeImg: PropTypes.string.isRequired,
  thumbnailImg: PropTypes.string.isRequired,
};

export default RepairedBike;
