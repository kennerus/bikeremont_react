import React from 'react';
import {StyleSheet, css} from 'aphrodite/no-important';
import './MobileMenu/MobileMenu.css';
import MenuToggleButton from "./MobileMenu/MenuToggleButton";
import DesktopMenu from './DesktopMenu';
import MobileMenuBody from './MobileMenu/MobileMenuBody';
import MobileMenuOverlay from './MobileMenu/MobileMenuOverlay';

export default class MainMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMobMenuOpen: false
    }
  }

  mobMenuToggleClickHandler = () => {
    this.setState((prevState) => {
      return {isMobMenuOpen: !prevState.isMobMenuOpen};
    })
  };

  mobMenuCloseClickHandler = () => {
    this.setState({isMobMenuOpen: false})
  };

  render() {
    const {isMobMenuOpen} = this.state;
    let mobileMenuOverlay;

    if (isMobMenuOpen) {
      mobileMenuOverlay = <MobileMenuOverlay click={this.mobMenuCloseClickHandler}/>;
    }
    return (
      <div className={css(styles.menuWrapper)}>
        <div className={css(styles.menuTitle)}>
          <p className={css(styles.text)}>Цены на наши услуги</p>
        </div>

        <DesktopMenu />
        <MenuToggleButton click={this.mobMenuToggleClickHandler} />
        <MobileMenuBody
          show={isMobMenuOpen}
          mobMenuCloseClickHandler={this.mobMenuCloseClickHandler}
        />
        {mobileMenuOverlay}
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
});