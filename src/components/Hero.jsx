import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileText, Cloud, Compass, MessageSquare, Thermometer, Camera, Layers } from 'lucide-react';
import { siteConfig } from '../siteConfig';

const heroSlides = [{
    id: 1,
    // Keep existing image/color props
    image: "https://res.cloudinary.com/ddsjqtxik/image/upload/f_auto,q_auto/v1770029624/varuna-aerotech/hero_solar_latest.jpg",
    color: "from-blue-900/80 to-slate-900/80",
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
    image: "https://res.cloudinary.com/ddsjqtxik/image/upload/f_auto,q_auto/v1770029634/varuna-aerotech/hero_wind_new.jpg",
    color: "from-emerald-900/80 to-slate-900/80",
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
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop",
    color: "from-slate-900/80 to-gray-900/80",
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
    image: "https://res.cloudinary.com/ddsjqtxik/image/upload/f_auto,q_auto/v1770029616/varuna-aerotech/hero_industrial_hd.jpg",
    color: "from-cyan-900/80 to-slate-900/80",
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
    image: "https://res.cloudinary.com/ddsjqtxik/image/upload/f_auto,q_auto/v1770029619/varuna-aerotech/hero_infrastructure_new.jpg",
    color: "from-indigo-900/80 to-slate-900/80",
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
        }, 10000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden bg-slate-900">

            {/* Background Slider */}
            {/* Background Slider */}
            <AnimatePresence>
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 z-0"
                >
                    {heroSlides[currentSlide].images ? (
                        <div className="flex w-full h-full">
                            <div
                                className="w-1/2 h-full bg-cover bg-center"
                                style={{ backgroundImage: `url(${heroSlides[currentSlide].images[0]})` }}
                            />
                            <div
                                className="w-1/2 h-full bg-cover bg-center"
                                style={{ backgroundImage: `url(${heroSlides[currentSlide].images[1]})` }}
                            />
                        </div>
                    ) : (
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${heroSlides[currentSlide].image})` }}
                        />
                    )}
                </motion.div>
            </AnimatePresence>

            {/* Static Overlay - Darken background for white text visibility (like reference image 2) */}
            <div className="absolute inset-0 z-0 bg-black/40" />

            {/* Content */}
            <div className="relative z-10 container max-w-7xl mx-auto px-6 pt-20">
                <div className="max-w-4xl text-white">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSlide}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="animate-none"
                        >
                            <h1 className="text-4xl md:text-7xl font-serif font-bold leading-tight mb-4 md:mb-6 text-white drop-shadow-lg">
                                {heroSlides[currentSlide].content.mainTitle}
                            </h1>
                            <p className="text-xl md:text-3xl text-white/90 mb-6 font-bold drop-shadow-md">
                                {heroSlides[currentSlide].content.subTitle}
                            </p>
                            <div className="flex flex-col gap-3 mb-8 md:mb-10 items-start">
                                {heroSlides[currentSlide].content.features.map((feature, index) => (
                                    <Link
                                        to={`/features/${feature.id}`}
                                        key={index}
                                        className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 group min-w-[200px]"
                                    >
                                        <feature.icon className={`w-5 h-5 ${feature.color} group-hover:scale-110 transition-transform`} />
                                        <span className="font-medium tracking-wide">{feature.label}</span>
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            <div className="absolute bottom-10 right-10 z-20 flex items-center gap-4 text-white">
                <div className="flex gap-2">
                    {heroSlides.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentSlide(idx)}
                            className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentSlide ? 'bg-white w-12' : 'bg-white/40 w-6 hover:bg-white/60'
                                }`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>

        </section >
    );
};

export default Hero;
