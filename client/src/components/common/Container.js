import React from 'react';
import PropTypes from 'prop-types';

const Container = props => {
  const { mainClass, modifier, children } = props;
  if (modifier) {
    return (
      <div className={`${mainClass} ${modifier}`}>
        {children}
      </div>
    )
  } else {
    return (
      <div className={`${mainClass}`}>
        {children}
      </div>
    )
  }
};

Container.propTypes = {
  mainClass: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
};

export default Container;
