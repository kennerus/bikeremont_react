import React from 'react';
import {Link} from 'react-router-dom';
import {StyleSheet, css} from 'aphrodite/no-important';

import bike from './img/bicycle.svg';
import Container from "../Container";

const NotFound = () => {
  return (
    <main className="main main_not-found">
      <Container
        mainClass="container"
        modifier="container_column"
      >
        <h1>Страница не найдена :(</h1>

        <Link className={css(styles.link)} to="/">
          <span className={css(styles.text)}>Вернуться на главную</span>
          <img
            className={css(styles.img)}
            src={bike}
            alt=">"
          />
        </Link>
      </Container>
    </main>
  );
};

const styles = StyleSheet.create({
  link: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '20px',
    ':hover': {
      textDecoration: 'none'
    }
  },
  text: {
    marginRight: '15px',
    fontSize: '22px',
    color: '#3F51B5',
    ':hover': {
      color: '#5C6BC0',

    }
  },
  img: {
    width: '40px',
  }
});
export default NotFound;
