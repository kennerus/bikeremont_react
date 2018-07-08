import React from 'react';
import {StyleSheet, css} from 'aphrodite/no-important';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faPhone from '@fortawesome/fontawesome-free-solid/faPhone';
import BackCallModal from '../BackCallModal/BackCallModal';

const BackCall = () => {
  return(
    <div className={css(styles.phoneWrapper)}>
      <div className={css(styles.phone)}>
        <p className={css(styles.phoneNumber)}><FontAwesomeIcon className={css(styles.phoneIcon)} icon={faPhone} /> +38 (071) 437 93 15</p>
        <p className={css(styles.phoneNumber)}><FontAwesomeIcon className={css(styles.phoneIcon)} icon={faPhone} /> +38 (066) 600 43 95</p>
      </div>

      <BackCallModal
        buttonStyle="backCall-btn_header"
        buttonText="Заказать звонок"
      />
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
    flexDirection: 'column',
    justifyContent: 'center',
  },
  phoneIcon: {
    marginRight: '5px',
    fontSize: '20px',
    color: 'white',
  },
  phoneNumber: {
    margin: '0',
    fontSize: '22px',
    fontWeight: '700',
    color: 'white',
  },
});

export default BackCall;