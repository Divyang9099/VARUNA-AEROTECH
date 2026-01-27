import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Industries from '../components/Industries';
import Footer from '../components/Footer';

const IndustriesPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="font-sans text-slate-900">
            {/* Added top padding for fixed navbar */}
            <div className="pt-20">
                <Industries />
            </div>
            <Footer />
        </div>
    );
};

export default IndustriesPage;
