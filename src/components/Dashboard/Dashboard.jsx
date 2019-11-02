import React, { Component } from 'react';
import Product from '../Product/Product';
import axios from 'axios'

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inventory: [],
        }
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
    editRouter(id) {
        this.props.history.push(`/edit/${id}`)
    }

    deleteReq(id) {
        axios
            .delete(`api/inventory/${id}`)
            .then(() => (
                this.componentDidMount()
            ))
    }
    render() {
        const display = this.state.inventory.map((item, i) => (
            <div key={i} className="stupid-div">
                <Product inventoryList={item} />
                <button onClick={() => this.deleteReq(item.id) }>Delete</button>
                <button onClick={() => this.editRouter(item.id)}>Edit</button>
            </div>
        ))
        return (
            <div className='dashboard'>
                {display}
            </div>
        );
    }
};

export default Dashboard;