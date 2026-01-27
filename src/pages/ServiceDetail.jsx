import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { siteConfig } from '../siteConfig';
import { CheckCircle, ArrowRight, FileText, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ServiceDetail = () => {
    const { id } = useParams();
    const service = siteConfig.services.find(s => s.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!service) {
        return <Navigate to="/#services" replace />;
    }

    return (
        <div className="font-sans text-slate-900 bg-white">
            {/* Header / Hero Section - "Blue print" style */}
            <section className="relative pt-32 pb-20 bg-blue-950 text-white overflow-hidden">
                <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply"></div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative max-w-6xl mx-auto px-6 md:px-16 lg:px-24 text-center"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif tracking-wide">
                        {service.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto font-light leading-relaxed">
                        {service.description}
                    </p>
                </motion.div>
            </section>

            {/* Overview Section - Image Left, Text Right */}
            <section className="py-20 section-padding">
                <div className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="w-full lg:w-1/2"
                        >
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/20 group">
                                <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                                <img
                                    src={service.overview.image}
                                    alt={`${service.title} Overview`}
                                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="w-full lg:w-1/2 space-y-6"
                        >
                            <h2 className="text-3xl font-bold text-slate-900 border-l-4 border-blue-600 pl-4">
                                {service.overview.title}
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                {service.overview.content}
                            </p>
                            <div className="pt-4">
                                <a href="#contact" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                                    Request a Consultation <ArrowRight className="w-5 h-5" />
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Key Benefits - Grid */}
            <section className="py-20 bg-slate-50 section-padding">
                <div className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Key Benefits</h2>
                        <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {service.benefits.map((benefit, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-200 hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                                    <CheckCircle className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    {benefit.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Process - Steps Left, Image Right */}
            <section className="py-24 section-padding bg-white">
                <div className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Process</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">A systematic approach ensuring safety, accuracy, and actionable results.</p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="w-full lg:w-1/2 space-y-8">
                            {service.process.map((step, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    className="flex gap-6 group"
                                >
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-lg shadow-lg group-hover:bg-blue-600 transition-colors duration-300">
                                            {idx + 1}
                                        </div>
                                        {idx !== service.process.length - 1 && (
                                            <div className="w-0.5 h-full bg-slate-200 mx-auto mt-2"></div>
                                        )}
                                    </div>
                                    <div className="pb-8">
                                        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{step.title}</h3>
                                        <p className="text-slate-600 leading-relaxed">{step.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="w-full lg:w-1/2"
                        >
                            <div className="relative h-full min-h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src={service.image}
                                    alt="Our Process"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                                <div className="absolute bottom-8 left-8 right-8 text-white">
                                    <p className="font-serif italic text-lg opacity-90">"Precision in every flight, accuracy in every report."</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Deliverables - Grid */}
            <section className="py-20 bg-blue-50 section-padding">
                <div className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Deliverables</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">Actionable data formats ready for your engineering teams.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {service.deliverables.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="bg-white p-6 rounded-xl border border-blue-100 hover:shadow-lg hover:border-blue-300 transition-all duration-300 group"
                            >
                                <div className="w-10 h-10 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <FileText className="w-5 h-5" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                                <p className="text-sm text-slate-600 mb-4 h-10">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetail;
