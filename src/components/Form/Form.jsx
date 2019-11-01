import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            price: 0,
            imgurl: ''
        }
    }
    
    handleImage(url){
        this.setState({
            imgurl: url
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

    wipeAll(){
        this.setState({
            name: '',
            price: 0,
            imgurl: ''
        })
    }

    render() {
        return (
            <div>
                <input type="text" onChange={e => this.handleImage(e.target.value)}/>
                <input type="text" onChange={e => this.handleName(e.target.value)}/>
                <input type="number" onChange={e => this.handlePrice(e.target.value)}/>
                <button onClick={() => this.wipeAll()}>Cancel</button>
                <button>Add to Inventory</button>
            </div>
        );
    }
}

export default Form;