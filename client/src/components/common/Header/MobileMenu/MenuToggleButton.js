import React from 'react';
import {StyleSheet, css} from 'aphrodite/no-important';

const MenuToggleButton = props => {
  return (
    <button
      type="button"
      className={css(styles.toggleButton)}
      onClick={props.click}
    >
      <span className={css(styles.toggleButtonLines)}/>
      <span className={css(styles.toggleButtonLines)}/>
      <span className={css(styles.toggleButtonLines)}/>
    </button>
  );
};

const styles = StyleSheet.create({
  toggleButton: {
    position: 'relative',
    zIndex: '1',
    display: 'none',
    width: '35px',
    height: '30px',
    padding: '0',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    '@media (max-width: 1200px)': {
      display: 'initial',
    },
  },
  toggleButtonLines: {
    position: 'absolute',
    left: '0',
    zIndex: '1',
    width: '35px',
    height: '4px',
    backgroundColor: 'white',
    borderRadius: '10px',
    ':nth-child(1)': {
      top: '0',
    },
    ':nth-child(2)': {
      top: '50%',
      transform: 'translateY(-50%)',
    },
    ':nth-child(3)': {
      top: '100%',
      transform: 'translateY(-100%)',
    }
  },
});

export default MenuToggleButton;
