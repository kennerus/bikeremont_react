import React from 'react';
import {StyleSheet, css} from 'aphrodite/no-important';
import MaskedInput from 'react-maskedinput';

export default class BackCallModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalActive: false,
      name: '',
      phone: '',
      isNameValid: false,
      isPhoneValid: false,
      isFormValid: false
    };

    this._onChange = this._onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // get inputs value
  _onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };

  validateName = async () => {
    const {name} = this.state;

    if (name.length >= 2) {
      await this.setState({isNameValid: true});
    } else {
      await this.setState({isNameValid: false});
    }
    console.log(name, this.state.isNameValid);
  };

  validatePhone = async () => {
    const {phone} = this.state;

    if (phone.match(/^(?!\+.*\(.*\).*\-\-.*$)(?!\+.*\(.*\).*\-$)(\+38\(0[0-9]{2}\)[0-9]{3}[-]{1}[0-9]{2}[-]{1}[0-9]{2})$/)) {
      await this.setState({isPhoneValid: true});
    } else {
      await this.setState({isPhoneValid: false});
    }
    console.log(phone, this.state.isPhoneValid);
  };

  validateForm = async () => {
    const {isNameValid, isPhoneValid} = this.state;

    if (isNameValid && isPhoneValid) {
      await this.setState({isFormValid: true});
    } else {
      await this.setState({isFormValid: false});
    }
  };

  errorClass = error => {
    return (error.length === 0 ? '' : 'input_error');
  };

  // send data
  handleSubmit(e) {
    e.preventDefault();
    const {name, phone, isNameValid, isPhoneValid, isFormValid} = this.state;

    this.validateForm();

    if (isFormValid) {
      let formData = new FormData();
      formData.append('name', name);
      formData.append('phone', phone);

      fetch('/mail2.php', {
        method: 'POST',
        body: formData
      })
        .then(() => alert('Ваше письмо отправлено. В ближайшее время с вами свяжется наш менеджер.'))
        .catch(response => console.log(response))
    } else {
      // if (isNameValid || isPhoneValid) {
      //   this.errorClass(this.state.isNameValid);
      // }
    }
  }

  render() {
    const {isModalActive} = this.state;
    const {buttonText, buttonStyle} = this.props;

    return (
      <div>
        <button
          type="button"
          className={buttonStyle}
          onClick={() => {
            this.setState({
              isModalActive: true,
            })
          }}
        >
          {buttonText}
        </button>

        {isModalActive &&
        <div className={css(styles.modal)}>
          <div
            className={css(styles.overlay)}
            onClick={() => {
              this.setState({
                isModalActive: false,
              })
            }}
          />
          <div className={css(styles.modalContent)}>
            <button
              className={css(styles.modalClose)}
              onClick={() => {
                this.setState({
                  isModalActive: false,
                })
              }}
            >&#10005;</button>

            <div>
              <h2 className={css(styles.formTitle)}>Оставьте ваши контакты и мы перезвоним вам в течении часа</h2>
              <form
                className={css(styles.form)}
                onSubmit={this.handleSubmit}
              >
                <input
                  className={`${css(styles.input)} ${this.errorClass(this.state.isNameValid)} `}
                  type="text"
                  name="name"
                  value={this.state.name}
                  placeholder="Ваше имя*"
                  onChange={this._onChange}
                  onBlur={this.validateName}
                />
                <MaskedInput
                  className={`${css(styles.input)} ${this.errorClass(this.state.isPhoneValid)} `}
                  mask="+38(011)111-11-11"
                  name="phone"
                  value={this.state.phone}
                  onChange={this._onChange}
                  onBlur={this.validatePhone}
                />

                <button
                  className={css(styles.input, styles.btn)}
                  type="submit"
                >Отправить
                </button>
              </form>
            </div>
          </div>
        </div>}
      </div>
    )
  }
}

const styles = StyleSheet.create({
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
    '@media (max-width: 400px)': {
      width: '90vw'
    }
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