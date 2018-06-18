import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, css} from 'aphrodite/no-important';

const Contact = props => {
  const {text, children} = props;

  return (
    <li className={css(styles.li)}>
      {children}
      <span className={css(styles.text)}>{text}</span>
    </li>
  );
};

const styles = StyleSheet.create({
  li: {
    display: 'flex',
    alignItems: 'center',
  },
  text: {
    fontSize: '17px',
  }
});

Contact.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Contact;
