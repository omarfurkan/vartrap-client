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


    const handleOrder = event => {
        event.preventDefault();
        const cool = event.target.name;
        console.log(cool)
    }

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

            <div className='flex justify-center'>

                <form onSubmit={handleOrder} className='mt-5 border-4 border-primary p-8'>
                    <p className='my-2'>Order Quantity <input type="text" placeholder={`mininmun order`} class="input input-bordered w-full max-w-xs" /></p>
                    <p className='my-2'>Name: <input type="text" placeholder="Name" class="input input-bordered w-full max-w-xs" /></p>
                    <p className='my-2'> Email: <input type="email" placeholder="Email" class="input input-bordered w-full max-w-xs" /></p>
                    <p className='my-2'>Contact Number <input type="text" placeholder="Contact Number" class="input input-bordered w-full max-w-xs" /></p>
                    <p className='my-2'>Address: <input type="text" placeholder="Address" class="input input-bordered w-full max-w-xs" /></p>
                    <input type="submit" value="Oder Now" class="btn btn-primary input w-full max-w-xs" />

                </form>


            </div>


        </div>
    );
};

export default Purchase;