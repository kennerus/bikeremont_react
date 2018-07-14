import React from 'react';
import './MobileMenu.css';

const MobileMenuOverlay = props => {
  return (
    <div
      className="MobileMenu__overlay"
      onClick={props.click}
    />
  );
};


export default MobileMenuOverlay;
