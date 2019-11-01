import React from 'react';

const Product = (props) => {
    const {name, img, price} = props.inventoryList
    return (
        <div>
            <h1>{name}</h1>
            <div className="image-holder">
                <img src={img} alt={name}/>
            </div>
            <div>{price}</div>
        </div>
    );
};

export default Product;