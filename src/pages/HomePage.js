import React from 'react';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import FeaturedProducts from '../components/FeaturedProducts';
import Testimonials from '../components/Testimonials';
import FromOurBlog from '../components/FromOurBlog';
import MeetOurTeam from '../components/MeetOurTeam';
import FAQs from '../components/FAQs';

const HomePage = () => {
    return (
        <div className="space-y-8">
            <Hero />
            <AboutUs />
            <FeaturedProducts />
            <Testimonials/>
            <FromOurBlog />
            <MeetOurTeam />
            <FAQs />
        </div>
    );
};

export default HomePage;
