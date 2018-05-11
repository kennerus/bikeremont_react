import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import IndexPage from './components/IndexPage/IndexPage';
import './components/common/GlobalStyles/GlobalStyles.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />

          <IndexPage />

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
