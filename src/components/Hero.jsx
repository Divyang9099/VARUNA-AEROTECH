import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Cloud, Compass, MessageSquare } from 'lucide-react';
import { siteConfig } from '../siteConfig';

const heroSlides = [
    {
        id: 1,
        title: "Solar Energy",
        subtitle: "Drone Thermography & EL Testing",
        // Placeholder - User will provide images later
        image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop",
        color: "from-blue-900/80 to-slate-900/80"
    },
    {
        id: 2,
        title: "Wind Energy",
        subtitle: "Blade & Structural Integrity Inspections",
        image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=2070&auto=format&fit=crop",
        color: "from-emerald-900/80 to-slate-900/80"
    },
    {
        id: 3,
        title: "Infrastructure",
        subtitle: "Asset Monitoring & Digital Twins",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
        color: "from-slate-900/80 to-gray-900/80"
    },
    {
        id: 4,
        title: "Pipeline Inspection",
        subtitle: "Leak Detection & ROW Monitoring",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
        color: "from-cyan-900/80 to-slate-900/80"
    },
    {
        id: 5,
        title: "Utility",
        subtitle: "Powerline & Grid Reliability",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop",
        color: "from-indigo-900/80 to-slate-900/80"
    }
];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden bg-slate-900">

            {/* Background Slider */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 z-0"
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center kenburns-top"
                        style={{ backgroundImage: `url(${heroSlides[currentSlide].image})` }}
                    />
                </motion.div>
            </AnimatePresence>

            {/* Static Overlay - Darken background for white text visibility (like reference image 2) */}
            <div className="absolute inset-0 z-0 bg-black/40" />

            {/* Content */}
            <div className="relative z-10 container max-w-7xl mx-auto px-6 pt-20">
                <div className="max-w-4xl text-white">
                    <motion.div
                        key="hero-text"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="inline-block px-3 py-1 mb-4 md:mb-6 text-xs font-bold tracking-widest uppercase border border-white/30 rounded-full bg-white/10 backdrop-blur-sm text-white shake-lr">
                            Advanced Diagnostics
                        </span>
                        <h1 className="text-4xl md:text-7xl font-serif font-bold leading-tight mb-4 md:mb-6 text-white drop-shadow-lg">
                            {siteConfig.hero.title}
                        </h1>
                        <p className="text-lg md:text-2xl text-white/90 mb-2 font-medium drop-shadow-md">
                            On Demand Aerial Data Acquisition
                        </p>
                        <div className="text-white/80 text-sm md:text-lg space-y-1 mb-8 md:mb-10 font-medium drop-shadow-sm hidden sm:block">
                            <p>Solar Panel Inspection • Windmill Inspection • Powerline Inspection</p>
                            <p>Pipeline Inspection • Infrastructure Monitoring • Surveillance</p>
                            <p>Industrial Utility Inspection • Inventory Management • Topographic Survey</p>
                        </div>
                        {/* Mobile simplified list */}
                        <div className="text-white/80 text-xs space-y-1 mb-8 font-medium drop-shadow-sm sm:hidden block leading-relaxed">
                            <p>Solar • Wind • Powerline • Pipeline • Infrastructure</p>
                            <p>Surveillance • Industrial • Inventory • Topography</p>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="absolute bottom-10 right-10 z-20 flex items-center gap-4 text-white">
                <div className="flex gap-2">
                    {heroSlides.map((_, idx) => (
                        <div
                            key={idx}
                            className={`w-2 h-2 rounded-full transition-all ${idx === currentSlide ? 'bg-white w-8' : 'bg-white/40'}`}
                        />
                    ))}
                </div>
            </div>

        </section>
    );
};

export default Hero;
