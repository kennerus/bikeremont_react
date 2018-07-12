import React from 'react';
import {StyleSheet, css} from 'aphrodite/no-important';
import MenuLink from './MenuLink';

export default class MainMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMobMenuOpen: false
    }
  }

  render() {
    const {isMobMenuOpen} = this.state;

    return (
      <div className={css(styles.menuWrapper)}>
        <div className={css(styles.menuTitle)}>
          <p className={css(styles.text)}>Цены на наши услуги</p>
        </div>

        <button
          type="button"
          className={css(styles.toggleButton)}
          onClick={() => {
            this.setState({
              isMobMenuOpen: true
            })
          }}
        >
          <span className={css(styles.toggleButtonLines)}/>
          <span className={css(styles.toggleButtonLines)}/>
          <span className={css(styles.toggleButtonLines)}/>
        </button>

        {isMobMenuOpen &&
        <nav className={css(styles.mobileMenu, styles.mobileMenu_active)}>
          <div
            className={css(styles.mobileMenu__overlay)}
            onClick={() => {
              this.setState({
                isMobMenuOpen: false
              })
            }}
          />

          <div className={css(styles.mobileMenu__body)}>
            <MenuLink text="Велосипеды" link="/bikes"/>
            <MenuLink text="Мотоциклы" link="/moto"/>
            <MenuLink text="Скутеры/Мопеды" link="/scooter"/>
          </div>
        </nav>}

        <nav className={css(styles.menu)}>
          <MenuLink text="Велосипеды" link="/bikes"/>
          <MenuLink text="Мотоциклы" link="/moto"/>
          <MenuLink text="Скутеры/Мопеды" link="/scooter"/>
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
    display: 'none',
    width: '35px',
    height: '30px',
    padding: '0',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    '@media (max-width: 1200px)': {
      display: 'initial',
    },
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
  mobileMenu: {
    '@media (max-width: 1200px)': {
      position: 'fixed',
      top: '0',
      left: '0',
      zIndex: '3',
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100vh',
      transform: 'translateX(-100%)',
      transition: 'transform 0.2s ease-out',
    }
  },
  mobileMenu_active: {
    transform: 'translateX(0)'
  },
  mobileMenu__overlay: {
    position: 'absolute',
    top: '0',
    left: '0',
    zIndex: '1',
    width: '100%',
    heigth: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  mobileMenu__body: {
    position: 'absolute',
    top: '0',
    left: '0',
    zIndex: '2',
    width: '70%',
    maxWidth: '400px',
    heigth: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#323235',
  }
});