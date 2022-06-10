import React from 'react';
import About from './About';
import Banner from './Banner';
import ContactMe from './ContactMe';
import Projects from './Projects';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Projects></Projects>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;