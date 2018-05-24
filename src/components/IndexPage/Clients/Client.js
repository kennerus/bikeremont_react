import React, {Component} from 'react';
import {StyleSheet, css} from 'aphrodite/no-important';

class Client extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShown: false,
    };

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
  };

  renderFeedback(feedback, isShown) {
    const figure = this._reactInternalFiber.child.stateNode.querySelector('figure');
    const blockquote = this._reactInternalFiber.child.stateNode.querySelector('blockquote');

    if (isShown === 'hidden') {
      blockquote.innerHTML = feedback;
      figure.style.display = 'flex';
    } else if (isShown === 'visible') {
      blockquote.innerHTML = '';
      figure.style.display = 'none';
    }
  }

  render() {
    const {img, feedback, author, city} = this.props;
    const {isShown} = this.state;

    return (
      <div
        className={css(styles.slide)}
        onMouseEnter={(e) => {
          this.hideArrows('visible');
          this.renderFeedback = this.renderFeedback.bind(this);
          this.renderFeedback(feedback, 'hidden');
        }}
        onMouseLeave={() => {
          this.hideArrows('hidden');
          this.renderFeedback(feedback, 'visible');
        }}
      >
        <img className={css(styles.slideImg)} src={img} alt=""/>

        <figure className={css(styles.figure)}>
          <blockquote className={css(styles.blockquote)}>

          </blockquote>

          <figcaption className={css(styles.figcaption)}>
            <cite>
              {author}
            </cite>

            <cite>
              {city}
            </cite>
          </figcaption>
        </figure>
      </div>
    )
  }
}

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
    display: 'none',
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
  }
});

export default Client;
