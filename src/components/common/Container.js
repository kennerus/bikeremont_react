import React from 'react';
import PropTypes from 'prop-types';

const Container = props => {
  const { mainClass, modifier, children } = props;
  return (
    <div className={`${mainClass} ${modifier}`}>
      {children}
    </div>
  );
};

Container.propTypes = {
  mainClass: PropTypes.string.isRequired,
  modifier: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default Container;
