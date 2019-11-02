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
    componentDidMount() {
        if (this.props.match.params.id) {
            this.getProduct(this.props.match.params.id)
        }
    }

    componentDidUpdate(prevProps, prevState) {

        if (this.props.loction === "/add") {
            this.setState({
                name: "",
                price: 0,
                img: "",
                currIndex: null
            })
        }
    }



    getProduct(id) {
        axios
            .get(`api/inventory/${id}`)
            .then(res => {
                console.log(res)
                this.setState({
                    name: res.data[0].name,
                    price: res.data[0].price,
                    img: res.data[0].img,
                    currIndex: +id
                })
            })
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
                this.props.history.push('/')
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
                {currIndex === null ?
                    <button onClick={() => this.postIt({ name, price, img })}>Add to Inventory</button>
                    :
                    <button onClick={() => this.editProduct({ name, price, img, currIndex }, currIndex)}>Save Changes</button>}
            </div>
        );
    }
}

export default Form;