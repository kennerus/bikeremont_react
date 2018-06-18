import React from 'react';
import {StyleSheet, css} from 'aphrodite/no-important';
import PropTypes from 'prop-types';

const Title = props => {
  const { title } = props;
  return (
    <h2 className={css(styles.title)}>
      {title}
    </h2>
  );
};

const styles = StyleSheet.create({
  title: {
    margin: '0',
    fontSize: '27px',
    fontWeight: 'normal',
    textAlign: 'center',
  },
});

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
