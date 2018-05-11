import React from 'react';
import {StyleSheet, css} from 'aphrodite/no-important';
import Bannerblock from './BannerBlock/BannerBlock';

export default class IndexPage extends React.Component {
  render() {
    return(
      <div>
        <Bannerblock />
      </div>
    )
  }
}