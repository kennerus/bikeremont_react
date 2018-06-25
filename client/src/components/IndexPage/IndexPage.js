import React from 'react';
import Bannerblock from './BannerBlock/BannerBlock';
import About from "./About/About";
import RepairedBikes from "./RepairedBikes/RepairedBikes";
import Container from "../common/Container";
import Clients from "./Clients/Clients";
import Contacts from "./Contacts/Contacts";
import AddressOnMap from './AddressOnMap/AddressOnMap';

export default class IndexPage extends React.Component {
  render() {
    return(
      <main className="main">
        <Bannerblock />

        <Container mainClass="container">
          <About />
          <RepairedBikes />
          <Clients />
          <Contacts />
          <AddressOnMap />
        </Container>
      </main>
    )
  }
}