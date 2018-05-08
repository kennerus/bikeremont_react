import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import Logo from './Logo';
import Container from '../common/Container';

const Header = () => {
  return(
    <header className={css(styles.header)}>
      <Container>
        <Logo />
      </Container>
    </header>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#323235'
  }
});

export default Header;