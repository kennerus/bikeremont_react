import React, {Component} from 'react';
import {StyleSheet, css} from 'aphrodite/no-important';

import bg from './img/bg.jpg';
import Title from "../Title";
import RepairedBike from "./RepairedBike";
import {repairedBikes} from "./Images";

class RepairedBikes extends Component {
  render() {
    return (
      <div className={css(styles.wrapper)}>
        <Title title={'Мы уже отремонтировали'}/>

        <div className={css(styles.gallery)}>
          {repairedBikes.map((image) => (
            <RepairedBike
              key={image.thumbnail}
              fullSizeImg={image.fullSizeImg}
              thumbnailImg={image.thumbnail}
            />
          ))}

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
