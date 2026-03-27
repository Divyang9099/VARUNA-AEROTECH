
import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { siteConfig } from '../siteConfig';
import { CheckCircle, ArrowRight, FileText, Download } from 'lucide-react';
import { motion } from 'framer-motion';


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
            <section className="relative pt-24 pb-14 sm:pt-32 sm:pb-20 bg-blue-950 text-white overflow-hidden">
                <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply"></div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-16 lg:px-24 text-center"
                >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 tracking-tight" style={{letterSpacing: '-0.03em'}}>
                        {service.title}
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto font-normal leading-relaxed">
                        {service.description}
                    </p>
                </motion.div>
            </section>

            {/* Overview Section - Image Left, Text Right */}
            <section className="py-20 section-padding">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-16 lg:px-24">
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

                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Key Benefits - Grid */}
            <section className="py-20 bg-slate-50 section-padding">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-16 lg:px-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Key Benefits</h2>
                        <div className="mx-auto w-24 h-1.5 bg-gradient-to-r from-blue-600 to-sky-400 rounded-full mb-4"></div>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
                        {service.benefits.map((benefit, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="bg-white p-4 sm:p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 flex flex-col items-start"
                            >
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-3 sm:mb-6">
                                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                                </div>
                                <h3 className="text-base sm:text-xl font-bold text-slate-900 mb-1 sm:mb-3 leading-tight">{benefit.title}</h3>
                                <p className="text-xs sm:text-base text-slate-600 leading-snug sm:leading-relaxed">
                                    {benefit.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Process - Steps Left, Image Right */}
            <section className="py-24 section-padding bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-16 lg:px-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Our Process</h2>
                        <div className="mx-auto w-24 h-1.5 bg-gradient-to-r from-blue-600 to-sky-400 rounded-full mb-4"></div>
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
                            <div className="relative h-72 sm:h-full min-h-[300px] sm:min-h-[500px] rounded-2xl overflow-hidden shadow-2xl">
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
                <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-16 lg:px-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Deliverables</h2>
                        <div className="mx-auto w-24 h-1.5 bg-gradient-to-r from-blue-600 to-sky-400 rounded-full mb-4"></div>
                        <p className="text-slate-600 max-w-2xl mx-auto">Actionable data formats ready for your engineering teams.</p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
                        {service.deliverables.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                className="bg-white p-4 sm:p-6 rounded-xl border border-blue-100 hover:border-blue-300 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-start"
                            >
                                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-2 sm:mb-4 shrink-0">
                                    <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
                                </div>
                                <h3 className="text-sm sm:text-lg font-bold text-slate-800 mb-1 sm:mb-3 leading-tight">{item.title}</h3>
                                <p className="text-slate-600 text-[11px] sm:text-sm leading-snug sm:leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetail;
