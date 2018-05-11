import React from 'react';
import {StyleSheet, css} from 'aphrodite/no-important';

export default class BannerContent extends React.Component {
  render() {
    return (
      <div className={css(styles.bannerContent)}>
        <h2 className={css(styles.bannerTitle)}>
          {this.props.bannerTitle}
        </h2>
      </div>
    )
  }
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
  },
  bannerTitle: {
    margin: '0',
    fontSize: '24px',
    textAlign: 'center',
    lineHeight: '1.3',
    color: 'white',
  }
});