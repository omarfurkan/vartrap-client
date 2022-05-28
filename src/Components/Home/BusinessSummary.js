import React from 'react';
import customerIcon from '../../images/customer.png';
import revenueIcon from '../../images/revenue.png';
import reviewIcon from '../../images/review.png';
import toolIcon from '../../images/tools.png';

const BusinessSummary = () => {
    return (
        <div className='max-w-screen-2xl mx-auto text-center py-10'>
            <h2 className='text-4xl	font-bold text-center py-6 mb-10 text-primary'>Our Abilities </h2>
            <div className='grid lg:grid-cols-4 gap-10 text-center'>

                <div>
                    <div><img className='w-20 d-block mx-auto' src={customerIcon} alt="" /></div>
                    <h3 className='text-primary font-bold text-4xl mt-2 '>100+</h3>
                    <p className='font-bold text-lg'>Customers</p>
                </div>
                <div>
                    <div><img className='w-20 d-block mx-auto' src={revenueIcon} alt="" /></div>
                    <h3 className='text-primary font-bold text-4xl mt-2 '>120M+</h3>
                    <p className='font-bold text-lg'>Annual Revenue </p>
                </div>
                <div>
                    <div><img className='w-20 d-block mx-auto' src={reviewIcon} alt="" /></div>
                    <h3 className='text-primary font-bold text-4xl mt-2 '>33K+</h3>
                    <p className='font-bold text-lg'>Reviews</p>
                </div>
                <div>
                    <div><img className='w-20 d-block mx-auto' src={toolIcon} alt="" /></div>
                    <h3 className='text-primary font-bold text-4xl mt-2'>150+</h3>
                    <p className='font-bold text-lg'>Tools</p>
                </div>

            </div>
        </div>
    );
};

export default BusinessSummary;