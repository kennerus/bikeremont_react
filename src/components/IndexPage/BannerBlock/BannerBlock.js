import React from 'react';
import {StyleSheet, css} from 'aphrodite/no-important';
import Banner from './Banner';
import BannerContent from './BannerContent';

export default class BannerBlock extends React.Component {
  render() {
    return(
      <div className={css(styles.bannerWrapper)}>
        <Banner />
        <BannerContent bannerTitle="Консультация с мастером и диагностика БЕСПЛАТНО!" />
      </div>
    )
  }
};

const styles = StyleSheet.create({
  bannerWrapper: {
    position: 'relative',
    width: '100%',
    height: '50vh',
  }
});
