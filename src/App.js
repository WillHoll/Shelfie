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
      inventory: [],
      curr: {}
    }
    this.componentDidMount = this.componentDidMount.bind(this)
    this.editId = this.editId.bind(this)
  }

  componentDidMount() {
    axios
      .get('/api/inventory')
      .then(res => {
        this.setState({
          inventory: res.data,
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  editId(product) {
    this.setState({
      curr: product
    })
  }
    
    
    render() {
    return (
      <div className="App">
        <Header />
        <Dashboard componentDidMount={this.componentDidMount} inventoryList={this.state.inventory} editId={this.editId} />
        <Form componentDidMount={this.componentDidMount} currentProp={this.state.curr} />
      </div>
    );
  }
}

export default App;