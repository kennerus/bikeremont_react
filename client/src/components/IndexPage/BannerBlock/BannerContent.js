import React from 'react';
import {StyleSheet, css} from 'aphrodite/no-important';

const BannerContent = props => {
    const { bannerTitle } = props;
    return (
      <div className={css(styles.bannerContent)}>
        <h2 className={css(styles.bannerTitle)}>
          {bannerTitle}
        </h2>
      </div>
    )
};

const styles = StyleSheet.create({
  bannerContent: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    padding: '20px',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    '@media (max-width: 992px)': {
      width: '80%',
      padding: '15px',
    }
  },
  bannerTitle: {
    margin: '0',
    fontSize: '24px',
    textAlign: 'center',
    lineHeight: '1.3',
    color: 'white',
  }
});

export default BannerContent;