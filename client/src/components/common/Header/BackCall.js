import React from 'react';
import {StyleSheet, css} from 'aphrodite/no-important';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faPhone from '@fortawesome/fontawesome-free-solid/faPhone';
import BackCallModal from './BackCallModal/BackCallModal';

const BackCall = () => {
  return(
    <div className={css(styles.phoneWrapper)}>
      <div className={css(styles.phone)}>
        <FontAwesomeIcon className={css(styles.phoneIcon)} icon={faPhone} />
        <p className={css(styles.phoneNumber)}>+38 (071) 437 93 15 </p>
      </div>

      <BackCallModal />
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
});

export default BackCall;