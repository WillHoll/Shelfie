import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import Form from './components/Form/Form';

class App extends Component {
  constructor() {
    super();
    this.state = {
      inventory: [
        {imgurl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsmhttp-ssl-39255.nexcesscdn.net%2Fwp-content%2Fuploads%2F2015%2F06%2FExotic-Leather-Spectator.jpg&f=1&nofb=1', name: 'dem shoes bruh', price: 40},
        {imgurl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdimg.dillards.com%2Fis%2Fimage%2FDillardsZoom%2Fzoom%2Fperry-ellis-big--tall-herringbone-flat-front-pants%2F04137298_zi_light_beige.jpg&f=1&nofb=1', name: 'dem pants duuuude', price: 60}]
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard inventoryList={this.state.inventory}/>
        <Form />
      </div>
    );
  }
}

export default App;