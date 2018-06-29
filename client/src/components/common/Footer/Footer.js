import React from 'react';
import {Link} from 'react-router-dom';
import {StyleSheet, css} from 'aphrodite/no-important';
import Container from '../Container';

const Footer = () => {
  return (
    <footer className={css(styles.footer)}>
      <Container mainClass="container" modifier="container_column">
        <p className={css(styles.text)}>Донецк - 2017</p>
        <Link className={css(styles.text, styles.link)} to={'privacy'}>Политика конфиденциальности</Link>
      </Container>
    </footer>
  );
};

const styles = StyleSheet.create({
  footer: {
    padding: '10px',
    backgroundColor: '#323235',
  },
  text: {
    margin: '0',
    fontSize: '16px',
    color: '#fafafa',
  },
  link: {
    textDecoration: 'none',
    ':hover': {
      opacity: '0.8',
    }
  }
});

export default Footer;
