import React, {Component} from 'react';
import {StyleSheet, css} from 'aphrodite/no-important';
import Slider from "react-slick";
import Title from "../Title";
import Client from "./Client";

import feedback_01 from './img/feedback-01.jpg';
import feedback_02 from './img/feedback-02.jpg';
import feedback_03 from './img/feedback-03.jpg';
import feedback_04 from './img/feedback-04.jpg';
import feedback_05 from './img/feedback-05.jpg';
import feedback_06 from './img/feedback-06.jpg';
import feedback_07 from './img/feedback-07.jpg';
import feedback_08 from './img/feedback-08.jpg';
import feedback_09 from './img/feedback-09.jpg';
import feedback_10 from './img/feedback-10.jpg';
import feedback_11 from './img/feedback-11.jpg';
import feedback_12 from './img/feedback-12.jpg';

class Clients extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <div className={css(styles.clients)}>
        <Title title={'Наши клиенты'}/>

        <Slider className={css(styles.clientsSlider)} {...settings}>
          <Client className={css(styles.clientSlide)} img={feedback_01}/>
          <Client className={css(styles.clientSlide)} img={feedback_02}/>
          <Client className={css(styles.clientSlide)} img={feedback_03}/>
          <Client className={css(styles.clientSlide)} img={feedback_04}/>
          <Client className={css(styles.clientSlide)} img={feedback_05}/>
          <Client className={css(styles.clientSlide)} img={feedback_06}/>
          <Client className={css(styles.clientSlide)} img={feedback_07}/>
          <Client className={css(styles.clientSlide)} img={feedback_08}/>
          <Client className={css(styles.clientSlide)} img={feedback_09}/>
          <Client className={css(styles.clientSlide)} img={feedback_10}/>
          <Client className={css(styles.clientSlide)} img={feedback_11}/>
          <Client className={css(styles.clientSlide)} img={feedback_12}/>
        </Slider>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  clients: {
    marginTop: '90px',
  },
  clientsSlider: {
    marginTop: '60px',
  },
});

export default Clients;