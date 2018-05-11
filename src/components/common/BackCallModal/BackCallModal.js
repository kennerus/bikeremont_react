import React from 'react';
import {StyleSheet, css} from 'aphrodite/no-important';
import MaskedInput from 'react-maskedinput';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faTimesCircle from '@fortawesome/fontawesome-free-solid/faTimesCircle'

export default class BackCallModal extends React.Component{
  render() {
    return(
      <div className={css(styles.modal)}>
        <div className={css(styles.overlay)}></div>
        <div className={css(styles.modalContent)}>
          <button className={css(styles.modalClose)}>
            <FontAwesomeIcon icon={faTimesCircle} />
          </button>

          <div className={css(styles.form)}>
            <h2 className={css(styles.formTitle)}>Оставьте ваши контакты и мы перезвоним вам в течении часа</h2>
            <form>
              
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  modal: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    padding: '10px',
    backgroundColor: 'white',
    borderRadius: '5px',
  },
  modalClose: {
    position: 'absolute',
    padding: '0',
    top: '-10px',
    right: '-10px',
    width: '25px',
    height: '25px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  formTitle: {
    fontSize: '24px',
    lineHeight: '1.15'
  },
});