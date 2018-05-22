import React, {Component} from 'react';
import {StyleSheet, css} from 'aphrodite/no-important';

class Client extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShown: false,
    }
  }

  render() {
    const {img, feedback, author, city} = this.props;

    return (
      <div
        className={css(styles.slide)}
      >
        <img className={css(styles.slideImg)} src={img} alt=""/>

        <figure className={css(styles.figure)}>
          <blockquote className={css(styles.blockquote)}>
            {feedback}
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
  }
});

export default Client;
