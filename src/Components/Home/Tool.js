import React from 'react';
import { useNavigate } from 'react-router-dom';


const Tool = ({ tool }) => {
    const { _id, name, img, description, minimumOrderQuantity, availableQuantity, price } = tool;

    const navigate = useNavigate();

    const navigateToPurchase = id => {
        navigate(`/purchase/${id}`)
        console.log(id)

    }

    return (
        <div className=''>
            <img className='w-60 h-40 mx-auto' src={img} alt="" />
            <h4>{name}</h4>
            <p>{description}</p>
            <p>Minimum order Quantity: {minimumOrderQuantity}</p>
            <p>Available Quantity: {availableQuantity}</p>
            <p>Price: {price}</p>
            <button className="btn btn-primary font-bold mt-2" onClick={() => navigateToPurchase(_id)}>Purchase</button>

        </div>
    );
};

export default Tool;