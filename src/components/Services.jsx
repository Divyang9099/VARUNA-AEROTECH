import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { siteConfig } from '../siteConfig';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Services = () => {
    const [startIndex, setStartIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const itemsPerPage = 3;

    const nextSlide = () => {
        setDirection(1);
        setStartIndex((prev) => {
            const total = siteConfig.services.length;
            const nextStep = prev + itemsPerPage;
            if (nextStep >= total) return 0;
            if (total - nextStep < itemsPerPage) {
                return total - itemsPerPage;
            }
            return nextStep;
        });
    };

    const prevSlide = () => {
        setDirection(-1);
        setStartIndex((prev) => {
            const total = siteConfig.services.length;
            // If currently at 0, wrap to the "last full page" (total - itemsPerPage)
            if (prev === 0) return total - itemsPerPage;

            // Standard move back
            const nextStep = prev - itemsPerPage;

            // If we go below 0 (shouldn't happen with the logic above unless strictly following pages)
            // or if we are at an offset that doesn't align with page start (e.g. 7), 
            // we probably want to align back to grid? 
            // Actually, simplest is:
            if (nextStep < 0) return total - itemsPerPage; // Loop behavior if needed

            return Math.max(0, nextStep);
        });
    };

    const visibleServices = siteConfig.services.slice(startIndex, startIndex + itemsPerPage);

    return (
        <section id="services" className="section-padding bg-slate-50 py-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4">Our Services</h2>
                    <p className="text-slate-600 text-lg max-w-3xl mx-auto">
                        Advanced Precision diagnostics and inspection services for solar power plants and transmission-line assets.
                    </p>
                </div>

                <div className="relative">
                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg border border-slate-100 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-600 transition-all hidden md:flex"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg border border-slate-100 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-600 transition-all hidden md:flex"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    <div className="overflow-hidden px-4 py-8 -mx-4">
                        <AnimatePresence initial={false} mode="wait" custom={direction}>
                            <motion.div
                                key={startIndex}
                                custom={direction}
                                variants={{
                                    enter: (direction) => ({
                                        x: direction > 0 ? 1000 : -1000,
                                        opacity: 0
                                    }),
                                    center: {
                                        zIndex: 1,
                                        x: 0,
                                        opacity: 1
                                    },
                                    exit: (direction) => ({
                                        zIndex: 0,
                                        x: direction < 0 ? 1000 : -1000,
                                        opacity: 0
                                    })
                                }}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "tween", ease: "easeInOut", duration: 0.4 },
                                    opacity: { duration: 0.2 }
                                }}
                                className="flex flex-col md:flex-row justify-center items-center gap-4"
                            >
                                {visibleServices.map((service, index) => (
                                    <div
                                        key={index}
                                        className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 group h-full flex flex-col max-w-xs border border-slate-100"
                                    >
                                        <div className="relative h-48 overflow-hidden">
                                            <img
                                                src={service.image}
                                                alt={service.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>
                                        <div className="p-6 flex-1 flex flex-col">
                                            <Link to={`/services/${service.id}`} className="block">
                                                <h3 className="text-xl font-serif font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                                    {service.title}
                                                </h3>
                                            </Link>
                                            <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                                                {service.description}
                                            </p>

                                            <div className="flex justify-end mt-auto">
                                                <Link to={`/services/${service.id}`} className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all">
                                                    <ChevronRight className="w-5 h-5" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Mobile Navigation Dots */}
                    <div className="flex justify-center gap-2 mt-8 md:hidden">
                        {Array.from({ length: Math.ceil(siteConfig.services.length / itemsPerPage) }).map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setStartIndex(idx * itemsPerPage)}
                                className={`w-2 h-2 rounded-full transition-all ${Math.floor(startIndex / itemsPerPage) === idx ? 'bg-blue-600 w-8' : 'bg-slate-300'}`}
                            />
                        ))}
                    </div>
                </div >
            </div >
        </section >
    );
};

export default Services;
