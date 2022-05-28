import React from 'react';
import about from '../../images/about.jpg'

const About = () => {
    return (
        <div className='max-w-screen-2xl mx-auto '>
            <h2 className='text-4xl	font-bold text-center py-4 text-primary'>About Us</h2>
            <div className='grid lg:grid-cols-2 text-center items-center'>
                <div >
                    <p className='font-bold'>One of the biggest Manufacturer of Chittagong. Where you wil get all unique and feature drill machine with 100% saticfaction of product for your daily use or in any work field</p>
                </div>
                <div className='	block mx-auto'>
                    <img className='w-96' src={about} alt="" />
                </div>
            </div>

        </div>
    );
};

export default About;