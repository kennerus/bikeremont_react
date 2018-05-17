import React, {Component} from 'react';
import {StyleSheet, css} from 'aphrodite/no-important';
import Slider from "react-slick";
import Title from "../Title";
import Client from "./Client";
import ArrowForSlick from "../../common/ArrowForSlick";

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
  constructor() {
    super();
  }

  // componentDidMount() {
  //  const arrowPrev = document.querySelector('.slick-prev').style;
  //  const arrowNext = document.querySelector('.slick-next').style;
  //  const arrow = document.querySelectorAll('.slick-arrow');
  //
  //   for (let i = 0; i < arrow.length; i++) {
  //     arrow[i].style.zIndex = '2';
  //     arrow[i].style.width = '40px';
  //     arrow[i].style.height = '40px';
  //     arrow[i].style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
  //     console.log(arrow[i])
  //   }
  //   arrowPrev.left = '8px';
  //   arrowPrev.borderRadius = '0 5px 5px 0';
  //   arrowNext.right = '7px';
  //   arrowNext.borderRadius = '5px 0 0 5px';
  // }

  render() {
    const settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      nextArrow: <ArrowForSlick arrowDirection={'next'}/>,
      prevArrow: <ArrowForSlick arrowDirection={'prev'} />,
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
    margin: '0 -7.5px',
    marginTop: '60px',
  },
});

export default Clients;