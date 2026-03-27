import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../siteConfig';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Industries = () => {
    return (
        <section id="industries" className="section-padding bg-white py-14 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2" style={{letterSpacing: '-0.025em'}}>
                        Industries We Serve
                    </motion.h2>
                    <div className="mx-auto w-24 h-1.5 bg-gradient-to-r from-blue-600 to-sky-400 rounded-full mb-4"></div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-slate-600 text-lg max-w-3xl mx-auto"
                    >
                        Tailored aerial intelligence solutions for every sector of critical infrastructure.
                    </motion.p>
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.1
                            }
                        }
                    }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {siteConfig.industries.map((industry, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                            }}
                            className="group relative bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                        >
                            {/* Full Card Link Overlay */}
                            <Link
                                to={`/industries/${industry.id}`}
                                className="absolute inset-0 z-10"
                                aria-label={`Learn more about ${industry.title}`}
                            />

                            <div className="relative h-48 sm:h-64 overflow-hidden">
                                <img
                                    src={industry.image}
                                    alt={industry.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-80"></div>
                                <div className="absolute bottom-6 left-6 right-6">
                                    <h3 className="text-2xl font-bold text-white mb-2">{industry.title}</h3>
                                </div>
                            </div>

                            <div className="p-8">
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    {industry.description}
                                </p>
                                <div
                                    className="inline-flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors"
                                >
                                    Learn More <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Industries;
