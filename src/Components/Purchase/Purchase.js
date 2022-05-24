import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { id } = useParams();
    const [purchase, setPurchase] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/purchase/${id}`
        console.log(url)
        fetch(url)

            .then(res => res.json())
            .then(data => setPurchase(data));
    }, [])
    console.log(id)
    // const { _id, name, img, description, minimumOrderQuantity, availableQuantity, price } = tool;

    return (
        <div>
            <div className='grid grid-cols-2'>
                <div>
                    <img className='w-60 h-40 mx-auto' src={purchase.img} alt="" />
                </div>
                <div>
                    <h3>{purchase.name}</h3>
                    <p>{purchase.description}</p>
                    <p>Minimum Order: {purchase.minimumOrderQuantity}</p>
                    <p>Available Quantity: {purchase.availableQuantity}</p>
                    <p>Price: $ {purchase.price}</p>
                </div>
            </div>

        </div>
    );
};

export default Purchase;