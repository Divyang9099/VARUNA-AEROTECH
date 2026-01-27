import React from 'react';
import { siteConfig } from '../siteConfig';
import { CheckCircle, Zap, Award, Users } from 'lucide-react';

const AboutUs = () => {
    const { aboutPage } = siteConfig;
    return (
        <section id="about" className="section-padding bg-white py-24">
            <div className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24">
                {/* Who We Are Section */}
                <div className="mb-20">
                    <h2 className="text-4xl font-serif font-bold text-slate-900 mb-8">{aboutPage.whoWeAre.title}</h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-4xl">
                        {aboutPage.whoWeAre.description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                        <ul className="space-y-4">
                            {aboutPage.whoWeAre.bullets.slice(0, 3).map((item, idx) => (
                                <li key={idx} className="flex gap-3">
                                    <CheckCircle className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                                    <div>
                                        <strong className="text-slate-900 block">{item.title}</strong>
                                        <span className="text-slate-600 text-sm">{item.text}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <ul className="space-y-4">
                            {aboutPage.whoWeAre.bullets.slice(3).map((item, idx) => (
                                <li key={idx} className="flex gap-3">
                                    <CheckCircle className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                                    <div>
                                        <strong className="text-slate-900 block">{item.title}</strong>
                                        <span className="text-slate-600 text-sm">{item.text}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="p-6 bg-blue-50 border-l-4 border-blue-600 rounded-r-lg">
                        <p className="text-blue-900 font-medium italic">
                            "{aboutPage.whoWeAre.tagline}"
                        </p>
                    </div>
                </div>

                {/* Mission & Vision */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                    <div className="p-8 bg-white rounded-3xl border border-blue-100 flex flex-col h-full hover:shadow-xl hover:border-blue-600 transition-all duration-300 group">
                        <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                            <Zap className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">{aboutPage.mission.title}</h3>
                        <p className="text-slate-600 leading-relaxed flex-1">
                            {aboutPage.mission.text}
                        </p>
                    </div>
                    <div className="p-8 bg-white rounded-3xl border border-blue-100 flex flex-col h-full hover:shadow-xl hover:border-blue-600 transition-all duration-300 group">
                        <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                            <Users className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">{aboutPage.vision.title}</h3>
                        <p className="text-slate-600 leading-relaxed flex-1">
                            {aboutPage.vision.text}
                        </p>
                    </div>
                </div>

                {/* Core Values */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4">Our Core Values</h2>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                        The principles that drive everything we do at Varuna Aerotech.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {aboutPage.coreValues.map((value, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center group">
                            <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                <value.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
