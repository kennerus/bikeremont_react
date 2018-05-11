import React from 'react';
import {StyleSheet, css} from 'aphrodite/no-important';
import FontAwesome from 'react-fontawesome';

const BackCall = () => {
  return(
    <div className={css(styles.phoneWrapper)}>
      <div className={css(styles.phone)}>
        <FontAwesome
          name="phone"
          size="27px"
        />
        <p className={css(styles.phoneNumber)}>+38 (071) 437 93 15 </p>
      </div>

      <div>
        <button className={css(styles.callOrderBtn)}>Заказать звонок</button>
      </div>
    </div>
  )
};

const styles = StyleSheet.create({
  phoneWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  phone: {
    display: 'flex',
  },
  phoneNumber: {
    margin: '0',
    fontSize: '27px',
    color: 'white',
  },
  callOrderBtn: {
    padding: '2px 5px',
    fontSize: '14px',
    color: '#ADADAD',
    backgroundColor: 'transparent',
    border: 'none',
  }
});

export default BackCall;