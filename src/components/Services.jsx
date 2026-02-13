import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { siteConfig } from '../siteConfig';
import { ChevronRight } from 'lucide-react';

const Services = () => {
    return (
        <section id="services" className="our-services-section">
            <div className="max-w-7xl mx-auto px-20 services-content">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-8"
                >
                    <h2 className="text-4xl font-serif font-bold text-slate-900 mb-2">Our Services</h2>
                    <div className="mx-auto w-24 h-1.5 bg-gradient-to-r from-blue-600 to-sky-400 rounded-full mb-4"></div>
                    <p className="text-slate-600 text-lg max-w-3xl mx-auto">
                        Advanced Precision diagnostics and inspection services for solar power plants and transmission-line assets.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {siteConfig.services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="service-card-wrapper">
                                <Link to={`/services/${service.id}`} className="block h-full no-underline group">
                                    <div className="service-card">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            loading="lazy"
                                            className="transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="service-card-content">
                                            <h3>
                                                {service.title}
                                            </h3>
                                            <p>
                                                {service.description}
                                            </p>

                                            <span className="service-explore-link group-hover:translate-x-1 transition-transform">
                                                Explore →
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div >
        </section >
    );
};
export default Services;
