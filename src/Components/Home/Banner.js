import React from 'react';
import banner from '../../images/banner.jpg'

const Banner = () => {
    return (
        <div className="hero  bg-slate-50">
            <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                <img className='lg:max-w-2xl' src={banner} alt='banner img' />
                <div className=''>
                    <h1 className="text-5xl font-bold text-primary">Vartrap</h1>
                    <p className='mt-3'><small className='font-bold'>Biggest manufacturing company of chittagong</small></p>
                    <p className="py-6 text-lg">Let have some good expirence with Vartrap manufacturing industry of Bangladesh.Where the experience leaves in heart for life time and hold all moment forever </p>
                </div>
            </div>
        </div>
    );
};

export default Banner;