import React from 'react';
import { Link } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite/no-important';
import logo from './img/logo.png';

const Logo = () => {
  return(
    <div className="Logo">
      <Link to="/">
        <img src={logo} alt="Bike Remont"/>
      </Link>
      <p className={css(styles.text)}>Вело-мото мастерская г. Донецк</p>
    </div>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: '12px',
    color: '#ADADAD'
  }
});

export default Logo;