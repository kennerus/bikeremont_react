import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite/no-important';

class AboutBlock extends Component {
  render() {
    const { imgSrc, title, text } = this.props;

    return (
      <div className={css(styles.wrapper)}>
        <div className={css(styles.head)}>
          <img className={css(styles.img)} src={imgSrc} alt=""/>
          <h2 className={css(styles.title)}>
            {title}
          </h2>
        </div>

        <div className={css(styles.text)}>
          <p>
            {text}
          </p>
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    width: '23%',
    height: '250px',
    marginRight: '10px',
    padding: '20px',
    backgroundColor: '#eceff1',
    boxSizing: 'border-box',
    ':hover': {
      boxShadow: '0 15px 33px 0 rgba(153,130,161,.18)'
    }
  },
  head: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'left',
  },
  img: {
    marginRight: '15px',
  },
  title: {
    fontSize: '20px',
    lineHeight: '1.2',
  },
  text: {
    marginTop: '20px',
    textAlign: 'left',
    lineHeight: '1.2',
  }
});

AboutBlock.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default AboutBlock;
