import React from 'react';
import Product from '../Product/Product';
import axios from 'axios'

const Dashboard = (props) => {
    const deleteReq = (id) => {
        axios
            .delete(`api/inventory/${id}`)
            .then(() => (
                props.componentDidMount()
            ))
    }
    const display = props.inventoryList.map((item, i) => (
        <div key={i} className="stupid-div">
        <Product  inventoryList={item} />
        <button onClick={() => {deleteReq(item.id)}}>Delete</button>
        <button onClick={() => props.editId(item)}>Edit</button>
        </div>
    ))
    return (
        <div className='dashboard'>
            {display}
        </div>
    );
};

export default Dashboard;