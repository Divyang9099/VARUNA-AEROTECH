import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileText, Cloud, Compass, MessageSquare, Thermometer, Camera, Layers } from 'lucide-react';
import { siteConfig } from '../siteConfig';

const heroSlides = [{
    id: 1,
    // Backup CDN: "https://res.cloudinary.com/ddsjqtxik/image/upload/f_auto,q_auto/v1770029624/varuna-aerotech/hero_solar_latest.jpg"
    content: {
        mainTitle: siteConfig.hero.title,
        subTitle: "On Demand Aerial Data Capturing",
        features: [
            { id: "thermal-data", label: "Thermal Data", icon: Thermometer, color: "text-blue-400" },
            { id: "rgb-data", label: "RGB Data", icon: Camera, color: "text-emerald-400" },
            { id: "lidar-data", label: "LiDAR Data", icon: Layers, color: "text-purple-400" }
        ]
    }
},
{
    id: 2,
    // Backup CDN: "https://res.cloudinary.com/ddsjqtxik/image/upload/f_auto,q_auto/v1770029634/varuna-aerotech/hero_wind_new.jpg"
    content: {
        mainTitle: "Renewable Energy",
        subTitle: "",
        features: [
            { id: "solar-plant-inspection", label: "Solar Plant Inspection", icon: Thermometer, color: "text-orange-400" },
            { id: "windmill-inspection", label: "Windmill Inspection", icon: Cloud, color: "text-sky-400" },
            { id: "solar-project-tracking", label: "E2E Solar Project Progress Tracking", icon: Compass, color: "text-yellow-400" }
        ]
    }
},
{
    id: 3,
    // Backup CDN: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop"
    content: {
        mainTitle: "Power Sector",
        subTitle: "",
        features: [
            { id: "transmission-tower-inspection", label: "Transmission Tower Inspection", icon: Layers, color: "text-cyan-400" },
            { id: "power-line-inspection", label: "Power Line Inspection", icon: FileText, color: "text-teal-400" }
        ]
    }
},
{
    id: 4,
    // Backup CDN: "https://res.cloudinary.com/ddsjqtxik/image/upload/f_auto,q_auto/v1770029616/varuna-aerotech/hero_industrial_hd.jpg"
    content: {
        mainTitle: "Industrial | Utility",
        subTitle: "",
        features: [
            { id: "pipeline-inspection", label: "Pipeline Inspection", icon: Compass, color: "text-rose-400" },
            { id: "surveillance", label: "Surveillance", icon: Camera, color: "text-red-400" },
            { id: "utility-inspection", label: "Utility Inspection", icon: FileText, color: "text-blue-400" }
        ]
    }
},
{
    id: 5,
    // Backup CDN: "https://res.cloudinary.com/ddsjqtxik/image/upload/f_auto,q_auto/v1770029619/varuna-aerotech/hero_infrastructure_new.jpg"
    content: {
        mainTitle: "Infrastructure | Land",
        subTitle: "",
        features: [
            { id: "project-progress-monitoring", label: "Project Progress Monitoring", icon: FileText, color: "text-indigo-400" },
            { id: "volume-estimation", label: "Volume Estimation", icon: Layers, color: "text-violet-400" },
            { id: "topographical-survey", label: "Topographical Survey", icon: Compass, color: "text-fuchsia-400" }
        ]
    }
}];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 5000); // 5 seconds interval
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-screen min-h-[500px] flex items-end overflow-hidden bg-slate-900">
            {/* Background Video */}
            <div className="absolute inset-0 z-0 w-full h-full">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/hero.mp4" type="video/mp4" />
                </video>
                {/* Deeper gradient overlay for maximum text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent pointer-events-none" />
            </div>

            {/* Content Wrapper aligned to Bottom Left */}
            <div className="relative z-10 w-full pb-20 sm:pb-28 px-4 sm:px-10 lg:px-20 max-w-7xl mx-auto">
                <div className="max-w-2xl">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSlide}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="text-white"
                        >
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-3 sm:mb-5 text-white drop-shadow-xl" style={{ textShadow: "0px 2px 8px rgba(0,0,0,0.5)" }}>
                                {heroSlides[currentSlide].content.mainTitle}
                            </h1>
                            {heroSlides[currentSlide].content.subTitle && (
                                <p className="text-lg sm:text-xl md:text-2xl text-white/95 mb-6 sm:mb-8 font-medium tracking-wide drop-shadow-lg" style={{ textShadow: "0px 2px 6px rgba(0,0,0,0.5)" }}>
                                    {heroSlides[currentSlide].content.subTitle}
                                </p>
                            )}
                            
                            <div className="flex flex-col gap-4 items-start mt-2">
                                {heroSlides[currentSlide].content.features.map((feature, index) => (
                                    <Link
                                        to={`/features/${feature.id}`}
                                        key={index}
                                        className="flex items-center gap-4 px-0 py-1 text-white/90 hover:text-white transition-colors duration-300 group"
                                    >
                                        <feature.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${feature.color} opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all flex-shrink-0 drop-shadow-md`} />
                                        <span className="font-semibold text-base sm:text-lg tracking-wide drop-shadow-md" style={{ textShadow: "0px 1px 4px rgba(0,0,0,0.6)" }}>{feature.label}</span>
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Slide Indicators on Bottom Left */}
            <div className="absolute bottom-6 left-4 sm:left-10 lg:left-20 z-20 flex items-center gap-3 text-white">
                {heroSlides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`h-1.5 rounded-full transition-all duration-500 ${idx === currentSlide ? 'bg-white w-12' : 'bg-white/40 w-5 hover:bg-white/70'
                            } shadow-sm`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Hero;
