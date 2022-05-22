import React from 'react';
import about from '../../images/banner.jpg'

const About = () => {
    return (
        <div className='max-w-screen-2xl mx-auto '>
            <h2 className='text-4xl	font-bold text-center py-4 text-primary'>About Us</h2>
            <div className='grid grid-cols-2 items-center'>
                <div >
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, eaque eos. Officia numquam incidunt, facere, minus delectus repellat est molestiae alias debitis similique saepe corrupti.</p>
                </div>
                <div className='max-w-xs	'>
                    <img src={about} alt="" />
                </div>
            </div>

        </div>
    );
};

export default About;