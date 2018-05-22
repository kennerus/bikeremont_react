import React, {Component} from 'react';
import {StyleSheet, css} from 'aphrodite/no-important';
import Slider from "react-slick";
import Title from "../Title";
import Client from "./Client";
import ArrowForSlick from "../../common/ArrowForSlick";
import {ClientsFeedbacks} from './ClientsFeedbacks';

class Clients extends Component {

  render() {
    const settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      // autoplay: true,
      nextArrow: <ArrowForSlick arrowDirection={'next'}/>,
      prevArrow: <ArrowForSlick arrowDirection={'prev'}/>,
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
          {ClientsFeedbacks.map((clientInfo) => (
            <Client
              key={clientInfo.name}
              className={css(styles.clientSlide)}
              img={clientInfo.img}
              feedback={clientInfo.feedback}
              author={clientInfo.name}
              city={clientInfo.city}
            />
          ))}
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