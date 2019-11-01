import React from 'react';

const Product = (props) => {
    const {name, imgurl, price} = props.inventoryList
    return (
        <div>
            <h1>{name}</h1>
            <div className="image-holder">
                <img src={imgurl} alt={name}/>
            </div>
            <div>{price}</div>
        </div>
    );
};

export default Product;