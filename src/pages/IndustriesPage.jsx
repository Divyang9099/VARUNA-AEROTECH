import React, { useEffect } from 'react';
import { siteConfig } from '../siteConfig';
import Industries from '../components/Industries';

const IndustriesPage = () => {
    return (
        <div className="font-sans text-slate-900">
            {/* Added top padding for fixed navbar */}
            <div className="pt-20">
                <Industries />
            </div>
        </div>
    );
};

export default IndustriesPage;
