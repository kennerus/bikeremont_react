import React from 'react';
import {StyleSheet, css} from 'aphrodite/no-important';
import MenuLink from './MenuLink';

const DesktopMenu = () => {
  return (
    <nav className={css(styles.menu)}>
      <MenuLink text="Велосипеды" link="/bikes" />
      <MenuLink text="Мотоциклы" link="/moto" />
      <MenuLink text="Скутеры/Мопеды" link="/scooter" />
    </nav>
  );
};

const styles = StyleSheet.create({
  menu: {
    '@media (max-width: 1200px)': {
      display: 'none',
    },
  },
});

export default DesktopMenu;
