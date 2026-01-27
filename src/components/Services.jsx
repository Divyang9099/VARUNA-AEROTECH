import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { siteConfig } from '../siteConfig';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Services = () => {
    const [startIndex, setStartIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(window.innerWidth < 768 ? 1 : 3);

    useEffect(() => {
        const handleResize = () => {
            setItemsPerPage(window.innerWidth < 768 ? 1 : 3);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = () => {
        setDirection(1);
        setStartIndex((prev) => {
            const total = siteConfig.services.length;
            const nextStep = prev + itemsPerPage;
            if (nextStep >= total) return 0;
            // Ensure we don't show empty slots at the end (for desktop mainly)
            if (total - nextStep < itemsPerPage && itemsPerPage > 1) {
                return total - itemsPerPage;
            }
            // For single item view, simple clamp is fine or loop back which line 21 does.
            return nextStep;
        });
    };

    const prevSlide = () => {
        setDirection(-1);
        setStartIndex((prev) => {
            const total = siteConfig.services.length;
            if (prev === 0) {
                if (itemsPerPage === 1) return total - 1;
                return total - itemsPerPage;
            }
            const nextStep = prev - itemsPerPage;
            if (nextStep < 0) return total - itemsPerPage;
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

                <div className="relative max-w-sm md:max-w-none mx-auto">
                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute -left-3 md:-left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg border border-slate-100 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-600 transition-all opacity-90 hover:opacity-100"
                    >
                        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute -right-3 md:-right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg border border-slate-100 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-600 transition-all opacity-90 hover:opacity-100"
                    >
                        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                    </button>

                    <div className="overflow-hidden px-1 md:px-4 py-8 md:-mx-4">
                        <AnimatePresence initial={false} mode="wait" custom={direction}>
                            <motion.div
                                key={startIndex}
                                custom={direction}
                                variants={{
                                    enter: (direction) => ({
                                        x: direction > 0 ? 200 : -200,
                                        opacity: 0
                                    }),
                                    center: {
                                        zIndex: 1,
                                        x: 0,
                                        opacity: 1
                                    },
                                    exit: (direction) => ({
                                        zIndex: 0,
                                        x: direction < 0 ? 200 : -200,
                                        opacity: 0
                                    })
                                }}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.2 }
                                }}
                                className="flex flex-col md:flex-row justify-center items-center gap-4"
                            >
                                {visibleServices.map((service, index) => (
                                    <Link
                                        to={`/services/${service.id}`}
                                        key={index}
                                        className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 group h-full flex flex-col w-full md:max-w-xs border border-slate-100"
                                    >
                                        <div className="relative h-64 md:h-48 overflow-hidden">
                                            <img
                                                src={service.image}
                                                alt={service.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>
                                        <div className="p-6 flex-1 flex flex-col">
                                            <div className="block">
                                                <h3 className="text-xl font-serif font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                                    {service.title}
                                                </h3>
                                            </div>
                                            <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                                                {service.description}
                                            </p>

                                            <div className="flex justify-end mt-auto">
                                                <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all">
                                                    <ChevronRight className="w-5 h-5" />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Mobile Navigation Dots - Still useful for context even with arrows */}
                    <div className="flex justify-center gap-2 mt-4 md:hidden">
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
