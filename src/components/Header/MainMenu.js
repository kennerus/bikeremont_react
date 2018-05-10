import React from 'react';
import {StyleSheet, css} from 'aphrodite/no-important';
import MenuLink from './MenuLink';

const MainMenu = () => {
  return(
    <div>
      <div>
        <p className={css(styles.text)}>Цены на наши услуги</p>
      </div>
      <nav>
        <MenuLink text="Велосипеды" link="/bikes" />
        <MenuLink text="Мотоциклы" link="/moto" />
        <MenuLink text="Скутеры/Мопеды" link="/scooters" />
      </nav>
    </div>
  )
};

const styles = StyleSheet.create({
  text: {
    margin: '0',
    color: '#ADADAD'
  }
});

export default MainMenu;