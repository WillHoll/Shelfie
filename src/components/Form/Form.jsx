import React, { Component } from 'react'
import axios from 'axios'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            price: 0,
            img: "",
            currIndex: null
        }
    }
    componentDidUpdate(prevProps, prevState) {
        const { name, price, img, id } = this.props.currentProp
        if (prevProps !== this.props) {
            this.setState({
                name: name,
                price: price,
                img: img,
                currIndex: id
            })
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
            img: '',
        })
    }

    postIt(body) {
        axios
            .post('/api/inventory', body)
            .then(() => {
                this.props.componentDidMount()
                this.wipeAll()
                }
            )
    }

    editProduct(body, id) {
        axios
            .put(`/api/inventory/:${id}`, body)
            .then(() => {
                this.props.componentDidMount()
                }
            )
    }

    render() {
        const { name, price, img, currIndex } = this.state
        return (
            <div>
                <input type="text" placeholder={this.state.name} onChange={e => this.handleName(e.target.value)} />
                <input type="number" placeholder={this.state.price} onChange={e => this.handlePrice(e.target.value)} />
                <input type="text" placeholder={this.state.img} onChange={e => this.handleImage(e.target.value)} />
                <button onClick={() => this.wipeAll()}>Cancel</button>
                {currIndex === undefined ?
                    <button onClick={() => this.postIt({ name, price, img })}>Add to Inventory</button>
                    :
                    <button onClick={() => this.editProduct({ name, price, img }, currIndex)}>Save Changes</button>}
            </div>
        );
    }
}

export default Form;