import React from 'react';
import banner from '../../images/banner.jpg'

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-red-50">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img className='max-w-2xl' src={banner} alt='banner img' />
                <div className=''>
                    <h1 className="text-5xl font-bold">Vartrap</h1>
                    <p><small>Biggest manufacturing company of chittagong</small></p>
                    <p className="py-6">Let have some good expirence with Vartrap manufacturing industry of Bangladesh.Where the experience leaves in heart for life time and hold all moment forever </p>
                </div>
            </div>
        </div>
    );
};

export default Banner;