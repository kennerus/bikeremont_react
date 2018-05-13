import React from 'react';
import {StyleSheet, css} from 'aphrodite/no-important';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faPhone from '@fortawesome/fontawesome-free-solid/faPhone'

const BackCall = () => {
  return(
    <div className={css(styles.phoneWrapper)}>
      <div className={css(styles.phone)}>
        <FontAwesomeIcon className={css(styles.phoneIcon)} icon={faPhone} />
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
    alignItems: 'center',
  },
  phoneIcon: {
    marginRight: '5px',
    fontSize: '25px',
    color: 'white',
  },
  phoneNumber: {
    margin: '0',
    fontSize: '27px',
    fontWeight: '700',
    color: 'white',
  },
  callOrderBtn: {
    padding: '2px 5px',
    fontSize: '14px',
    color: '#ADADAD',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
  }
});

export default BackCall;