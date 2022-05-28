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
        <div className='border-2 p-10 border-primary'>
            <img className='w-80 h-60 mx-auto' src={img} alt="" />
            <h4 className='text-4xl font-bold text-center my-2'>{name}</h4>
            <p className='text-lg'>{description}</p>
            <p className='text-base'>Minimum order Quantity: {minimumOrderQuantity}</p>
            <p>Available Quantity: {availableQuantity}</p>
            <p className='my-2'>Price: <span className='font-bold'>{price}</span> </p>
            <button className="btn btn-primary font-bold mt-2" onClick={() => navigateToPurchase(_id)}>Purchase</button>

        </div>
    );
};

export default Tool;