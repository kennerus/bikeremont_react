import React from 'react';
import {Link} from 'react-router-dom';
import {StyleSheet, css} from 'aphrodite/no-important';

import PropTypes from 'prop-types';

const MenuLink = props => {
  const { text, link } = props;
  return (
    <Link
      className={css(styles.link)}
      to={link}
      onClick={props.click}
    >
      {text}
    </Link>
  );
};

const styles = StyleSheet.create({
  link: {
    padding: '5px',
    color: '#fafafa',
    fontSize: '17px',
    textDecoration: 'none',
    ':hover': {
      color: '#bdbdbd'
    }
  }
});

MenuLink.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string
};

export default MenuLink;
