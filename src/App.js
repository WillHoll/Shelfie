import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import Form from './components/Form/Form';

class App extends Component {
  constructor() {
    super();
    this.state = {
      inventory: []
    }
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentDidMount() {
    axios
      .get('/api/inventory')
      .then(res => {
        this.setState({
          inventory: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
  

  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard inventoryList={this.state.inventory}/>
        <Form componentDidMount={this.componentDidMount}/>
      </div>
    );
  }
}

export default App;