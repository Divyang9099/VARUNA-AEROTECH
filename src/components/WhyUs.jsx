import React from 'react';
import { siteConfig } from '../siteConfig';

const WhyUs = () => (
    <section className="section-padding bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4">Why we:"Our Varuna Edge"</h2>
                <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                    Why industry leaders choose us for critical infrastructure diagnostics.
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
                {siteConfig.whyUs.map((item, index) => (
                    <div
                        key={index}
                        className="w-full md:w-72 flex flex-col items-center text-center p-6 rounded-3xl border-4 border-blue-200 hover:border-blue-600 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group bg-white"
                    >
                        <div className="w-16 h-16 rounded-full bg-blue-600 text-white border-2 border-transparent flex items-center justify-center mb-4 shadow-md shadow-blue-200 group-hover:bg-white group-hover:text-blue-600 group-hover:border-blue-600 transition-all duration-300">
                            <item.icon className="w-8 h-8" />
                        </div>
                        <h3 className="text-lg font-serif font-bold text-slate-900 mb-2">{item.title}</h3>
                        <p className="text-slate-600 leading-relaxed text-sm">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default WhyUs;
