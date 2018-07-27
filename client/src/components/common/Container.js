import React from 'react';
import PropTypes from 'prop-types';

const Container = props => {
  const {mainClass, children} = props;
  let modifier = '';
  if (props.modifier !== undefined) {
    modifier = props.modifier;
  }

  return (
    <div className={`${mainClass} ${modifier}`}>
      {children}
    </div>
  )

};

Container.propTypes = {
  mainClass: PropTypes.string.isRequired,
  modifier: PropTypes.string,
  children: PropTypes.array.isRequired,
};

export default Container;
