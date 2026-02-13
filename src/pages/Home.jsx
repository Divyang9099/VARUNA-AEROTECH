import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import WhatWeDo from '../components/WhatWeDo';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';

const Home = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [hash]);

    return (
        <>
            <Hero />
            <WhatWeDo />
            <Services />
            <WhyUs />
        </>
    );
};

export default Home;
