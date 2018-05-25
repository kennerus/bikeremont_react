import React from 'react';
import {StyleSheet, css} from 'aphrodite/no-important';
import Bannerblock from './BannerBlock/BannerBlock';
import About from "./About/About";
import RepairedBikes from "./RepairedBikes/RepairedBikes";
import Container from "../common/Container";
import Clients from "./Clients/Clients";
import Contacts from "./Contacts/Contacts";

export default class IndexPage extends React.Component {
  render() {
    return(
      <div>
        <Bannerblock />

        <Container mainClass="container">
          <About />
          <RepairedBikes />
          <Clients />
          <Contacts />
        </Container>

      </div>
    )
  }
}