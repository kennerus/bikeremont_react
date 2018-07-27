import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/common/Header/Header';
import IndexPage from './components/IndexPage/IndexPage';
import Bikes from './components/PricePages/Bikes/Bikes';
import Scooter from "./components/PricePages/Scooter/Scooter";
import Moto from "./components/PricePages/Moto/Moto";
import Privacy from "./components/common/Privacy";
import Footer from './components/common/Footer/Footer';
import NotFound from './components/common/NotFound/NotFount';
import './components/common/GlobalStyles/GlobalStyles.css';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />

          <Switch>
            <Route path="/" component={IndexPage} exact />
            <Route path="/bikes" component={Bikes} exact />
            <Route path="/moto" component={Moto} exact />
            <Route path="/scooter" component={Scooter} exact />
            <Route path="/privacy" component={Privacy} exact />
            <Route component={NotFound} />
          </Switch>

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
