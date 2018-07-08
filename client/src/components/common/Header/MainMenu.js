import React from 'react';
import {StyleSheet, css} from 'aphrodite/no-important';
import MenuLink from './MenuLink';

export default class MainMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return(
      <div className={css(styles.menuWrapper)}>
        <div className={css(styles.menuTitle)}>
          <p className={css(styles.text)}>Цены на наши услуги</p>
        </div>

        <button
          type="button"
          className={css(styles.toggleButton)}
        >
          <span className={css(styles.toggleButtonLines)}></span>
          <span className={css(styles.toggleButtonLines)}></span>
          <span className={css(styles.toggleButtonLines)}></span>
        </button>

        <nav className={css(styles.menu)}>
          <MenuLink text="Велосипеды" link="/bikes" />
          <MenuLink text="Мотоциклы" link="/moto" />
          <MenuLink text="Скутеры/Мопеды" link="/scooter" />
        </nav>
      </div>
    )
  }
};

const styles = StyleSheet.create({
  text: {
    margin: '0',
    color: '#ADADAD'
  },
  menuWrapper: {
    textAlign: 'center'
  },
  menuTitle: {
    '@media (max-width: 1200px)': {
      display: 'none',
    }
  },
  toggleButton: {
    position: 'relative',
    zIndex: '1',
    width: '35px',
    height: '30px',
    padding: '0',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
  },
  toggleButtonLines: {
    position: 'absolute',
    left: '0',
    zIndex: '1',
    width: '35px',
    height: '4px',
    backgroundColor: 'white',
    borderRadius: '10px',
    ':nth-child(1)': {
      top: '0',
    },
    ':nth-child(2)': {
      top: '50%',
      transform: 'translateY(-50%)',
    },
    ':nth-child(3)': {
      top: '100%',
      transform: 'translateY(-100%)',
    }
  },
  menu: {
    '@media (max-width: 1200px)': {
      display: 'none',
    },
  },
});