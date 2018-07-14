import React from 'react';
import MenuLink from '../MenuLink';
import './MobileMenu.css';

const MobileMenuBody = props => {
  let mobileMenuBodyClasses = ['MobileMenu__body'];

  if(props.show) {
    mobileMenuBodyClasses = ['MobileMenu__body MobileMenu_active'];
  }

  return (
    <nav className={mobileMenuBodyClasses}>
      <MenuLink
        text="Велосипеды"
        link="/bikes"
        click={props.mobMenuCloseClickHandler}
      />
      <MenuLink
        text="Мотоциклы"
        link="/moto"
        click={props.mobMenuCloseClickHandler}
      />
      <MenuLink
        text="Скутеры/Мопеды"
        link="/scooter"
        click={props.mobMenuCloseClickHandler}
      />
    </nav>
  );
};

export default MobileMenuBody;
