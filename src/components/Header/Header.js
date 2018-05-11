import React from 'react';
import {StyleSheet, css} from 'aphrodite/no-important';
import Container from '../common/Container';
import Logo from './Logo';
import MainMenu from './MainMenu';
import BackCall from './BackCall';

export default class Header extends React.Component {
  render() {
    return (
      <header className={css(styles.header)}>
        <Container mainClass="container" modifier="container_flex">
          <Logo />
          <MainMenu />
          <BackCall />
        </Container>
      </header>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    padding: '10px 0',
    backgroundColor: '#323235'
  },
  containerFlex: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  }
});