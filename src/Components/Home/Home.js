import React from 'react';
import Foooter from '../Shared/Foooter';
import About from './About';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Reviews from './Reviews';
import Testimonial from './Testimonial';
import Tools from './Tools';


const Home = () => {
    return (
        <div>
            <Banner />
            <Tools />
            <BusinessSummary />
            <Testimonial />
            <Reviews />
            <About />
            <Foooter />
        </div>
    );
};

export default Home;