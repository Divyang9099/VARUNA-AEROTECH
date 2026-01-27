import React, { useEffect } from 'react';
import AboutUs from '../components/AboutUs';

const About = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <AboutUs />
        </>
    );
};

export default About;
