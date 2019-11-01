import React, { Component } from 'react'
import axios from 'axios'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            price: 0,
            img: ''
        }
    }

    handleImage(url) {
        this.setState({
            img: url
        })
    }

    handleName(name) {
        this.setState({
            name: name
        })
    }

    handlePrice(price) {
        this.setState({
            price: price
        })
    }

    wipeAll() {
        this.setState({
            name: '',
            price: 0,
            img: ''
        })
    }

    postIt(body) {
        console.log('Posted!')
        axios
            .post('/api/inventory', body)
            .then(() => {
                this.props.componentDidMount()
                this.wipeAll()
            }
            )

    }

    render() {
        return (
            <div>
                <input type="text" onChange={e => this.handleName(e.target.value)} />
                <input type="number" onChange={e => this.handlePrice(e.target.value)} />
                <input type="text" onChange={e => this.handleImage(e.target.value)} />
                <button onClick={() => this.wipeAll()}>Cancel</button>
                <button onClick={() => this.postIt(this.state)}>Add to Inventory</button>
            </div>
        );
    }
}

export default Form;