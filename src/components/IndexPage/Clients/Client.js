import React, {Component} from 'react';
import {StyleSheet, css} from 'aphrodite/no-important';

class Client extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShown: false,
    }

    this.hideArrows = this.hideArrows.bind(this);
  }

  hideArrows(isHidden) {
    const sliderArrows = document.querySelectorAll('.slick-arrow');
    if (isHidden === 'hidden') {
      for (let i = 0; i < sliderArrows.length; i++) {
        sliderArrows[i].style.visibility = 'visible';
      }
    } else if (isHidden === 'visible') {
      for (let i = 0; i < sliderArrows.length; i++) {
        sliderArrows[i].style.visibility = 'hidden';
      }
    }
  }

  render() {
    const {img, feedback, author, city} = this.props;
    const {isShown} = this.state;

    return (
      <div
        className={css(styles.slide)}
        onMouseEnter={() => {
          this.setState({
            isShown: true,
          });
          this.hideArrows('visible');
        }}
        onMouseLeave={() => {
          this.setState({
            isShown: false,
          });
          this.hideArrows('hidden');
        }}
      >
        <img className={css(styles.slideImg)} src={img} alt=""/>

        {isShown &&
        <figure className={css(styles.figure)}>
          <blockquote
            className={css(styles.blockquote)}
            dangerouslySetInnerHTML={{__html: feedback}}
          />

          <figcaption className={css(styles.figcaption)}>
            <cite className={css(styles.cite)}>
              {author},
            </cite>

            <cite className={css(styles.cite)}>
              {city}
            </cite>
          </figcaption>
        </figure>}
      </div>
    )
  }
};

const styles = StyleSheet.create({
  slide: {
    position: 'relative',
    margin: '0 7.5px',
  },
  slideImg: {
    width: '100%',
    boxSizing: 'border-box',
  },
  figure: {
    position: 'absolute',
    top: '0',
    left: '0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    margin: '0',
    padding: '15px',
    fontSize: '15px',
    letterSpacing: '0.3px',
    lineHeight: '1.3',
    color: 'white',
    backgroundColor: 'rgba(54,54,54,0.8)',
    boxSizing: 'border-box',
    'p': {
      margin: '5px 0',
    }
  },
  blockquote: {
    margin: '0',
  },
  figcaption: {
    alignSelf: 'flex-end',
  },
  cite: {
    display: 'block',
  },
});

export default Client;
