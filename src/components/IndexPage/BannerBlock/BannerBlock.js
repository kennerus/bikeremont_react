import React from 'react';
import {StyleSheet, css} from 'aphrodite/no-important';
import Banner from './Banner';
import BannerContent from './BannerContent';

 const BannerBlock = () => {
    return(
      <div className={css(styles.bannerWrapper)}>
        <Banner />
        <BannerContent bannerTitle="Консультация с мастером и диагностика БЕСПЛАТНО!" />
      </div>
    )
};

const styles = StyleSheet.create({
  bannerWrapper: {
    position: 'relative',
    width: '100%',
    height: '50vh',
  }
});
export default BannerBlock;