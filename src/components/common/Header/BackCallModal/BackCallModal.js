import React from 'react';
import {StyleSheet, css} from 'aphrodite/no-important';
import MaskedInput from 'react-maskedinput';

export default class BackCallModal extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
      phone: '',
    }
  }

  _onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  };

  render() {
    const {isActive} = this.state;

    return(
      <div>
        <div>
          <button
            className={css(styles.callOrderBtn)}
            onClick={() => {
              this.setState({
                isActive: true,
              })
            }}
          >Заказать звонок</button>
        </div>

        {isActive &&
        <div className={css(styles.modal)}>
          <div
            className={css(styles.overlay)}
            onClick={() => {
              this.setState({
                isActive: false,
              })
            }}
          />
          <div className={css(styles.modalContent)}>
            <button
              className={css(styles.modalClose)}
              onClick={() => {
                this.setState({
                  isActive: false,
                })
              }}
            >&#10005;</button>

            <div>
              <h2 className={css(styles.formTitle)}>Оставьте ваши контакты и мы перезвоним вам в течении часа</h2>
              <form className={css(styles.form)}>
                <input
                  className={css(styles.input)}
                  type="text"
                  name="name"
                  placeholder="Ваше имя*"
                />
                <MaskedInput
                  className={css(styles.input)}
                  mask="+380-111-11-11"
                  name="phone"
                  onChange={this._onChange}
                />
                <button
                  className={css(styles.input, styles.btn)}
                  type="button"
                >Отправить</button>
              </form>
            </div>
          </div>
        </div>}
      </div>
    )
  }
}

const styles = StyleSheet.create({
  callOrderBtn: {
    padding: '2px 5px',
    fontSize: '14px',
    color: '#ADADAD',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
  },
  modal: {
    position: 'fixed',
    top: '0',
    left: '0',
    zIndex: '5',
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
    transform: 'translate(-50%, -50%)',
    width: '350px',
    padding: '25px',
    backgroundColor: 'white',
    borderRadius: '5px',
    boxSizing: 'border-box',
  },
  modalClose: {
    position: 'absolute',
    top: '0',
    right: '0',
    width: '25px',
    height: '25px',
    padding: '0',
    fontSize: '18px',
    lineHeight: '0.9',
    backgroundColor: 'white',
    borderRadius: '50%',
    border: 'none',
    cursor: 'pointer',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '20px',
  },
  formTitle: {
    margin: '0',
    fontSize: '24px',
    fontWeight: 'normal',
    lineHeight: '1.3',
    textAlign: 'center',
  },
  input: {
    marginTop: '20px',
    padding: '10px',
    fontSize: '16px',
    lineHeight: '1.15',
    borderRadius: '5px',
    border: '2px solid #e0e0e0',
    ':first-child': {
      marginTop: '0',
    },
  },
  btn: {
    color: '#232323',
    backgroundColor: '#bdbdbd',
    borderColor: '#bdbdbd',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: '#9e9e9e',
      borderColor: '#9e9e9e',
    }
  }
});