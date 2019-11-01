import React from 'react';
import Product from '../Product/Product';

const Dashboard = (props) => {
    const display = props.inventoryList.map((item , i) => (
        <Product key={i} inventoryList={item}/>

    ))
    return (
        <div className='dashboard'>
            {display}
        </div>
    );
};

export default Dashboard;