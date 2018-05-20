import React, {Component} from 'react';
import {StyleSheet, css} from 'aphrodite/no-important';

import bg from './img/bg.jpg';
import Title from "../Title";
import RepairedBike from "./RepairedBike";
import {smallImages, fullSizeImages} from "../../common/Images";

class RepairedBikes extends Component {
  render() {
    return (
      <div className={css(styles.wrapper)}>
        <Title title={'Мы уже отремонтировали'}/>

        <div className={css(styles.gallery)}>
          <RepairedBike
            fullSizeImg={fullSizeImages[0]}
            thumbnailImg={smallImages[0]}
          />

          <RepairedBike
            fullSizeImg={fullSizeImages[1]}
            thumbnailImg={smallImages[1]}
          />

          <RepairedBike
            fullSizeImg={fullSizeImages[2]}
            thumbnailImg={smallImages[2]}
          />

          <RepairedBike
            fullSizeImg={fullSizeImages[3]}
            thumbnailImg={smallImages[3]}
          />

          <RepairedBike
            fullSizeImg={fullSizeImages[4]}
            thumbnailImg={smallImages[4]}
          />

          <RepairedBike
            fullSizeImg={fullSizeImages[5]}
            thumbnailImg={smallImages[5]}
          />

          <RepairedBike
            fullSizeImg={fullSizeImages[6]}
            thumbnailImg={smallImages[6]}
          />

          <RepairedBike
            vkLink={'https://vk.com/album-33973321_244270884'}
            bgImg={bg}
            text={'Смотреть все работы тут'}
          />
        </div>
      </div>

    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: '90px',
  },
  gallery: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '60px',
  },
});

export default RepairedBikes;
