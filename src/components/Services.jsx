import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { siteConfig } from '../siteConfig';
import { ChevronRight } from 'lucide-react';

const Services = () => {
    return (
        <section id="services" className="section-padding bg-slate-50 py-24">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4">Our Services</h2>
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
                            <Link
                                to={`/services/${service.id}`}
                                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group h-full flex flex-col border border-slate-100"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <h3 className="text-lg font-serif font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                                        {service.title}
                                    </h3>
                                    <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                                        {service.description}
                                    </p>

                                    <div className="mt-auto pt-4 border-t border-slate-100 flex justify-between items-center text-blue-600 text-sm font-semibold group-hover:translate-x-1 transition-transform">
                                        <span>Explore</span>
                                        <ChevronRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div >
        </section >
    );
};
export default Services;
