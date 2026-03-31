import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileText, Cloud, Compass, MessageSquare, Thermometer, Camera, Layers } from 'lucide-react';
import { siteConfig } from '../siteConfig';

const heroSlides = [{
    id: 1,
    video: "https://res.cloudinary.com/dhowmzdkh/video/upload/f_auto,q_auto/v1774937095/varuna-aerotech/videos/solar.mp4",
    position: "bottom-left",
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
    video: "https://res.cloudinary.com/dhowmzdkh/video/upload/f_auto,q_auto/v1774937116/varuna-aerotech/videos/windmill.mp4",
    position: "bottom-left",
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
    video: "https://res.cloudinary.com/dhowmzdkh/video/upload/f_auto,q_auto/v1774937150/varuna-aerotech/videos/powerline.mp4",
    position: "bottom-left",
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
    video: "https://res.cloudinary.com/dhowmzdkh/video/upload/f_auto,q_auto/v1774937177/varuna-aerotech/videos/industrial.mp4",
    position: "top-left",
    variant: "minimal",
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
    video: "https://res.cloudinary.com/dhowmzdkh/video/upload/f_auto,q_auto/v1774937230/varuna-aerotech/videos/topology.mp4",
    position: "bottom-right",
    variant: "minimal",
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
    const videoRefs = useRef([]);

    useEffect(() => {
        // Clever bandwidth management: Only run the active cinematic clip
        videoRefs.current.forEach((video, index) => {
            if (video) {
                if (index === currentSlide) {
                    video.currentTime = 0; // Perfectly restart incoming clip at exactly 0.0s
                    const playPromise = video.play();
                    if (playPromise !== undefined) {
                        playPromise.catch(() => {}); // Gracefully handle playback interruptions
                    }
                } else {
                    // Wait for the precise 1s CSS crossfade to finish before pausing the outgoing clip
                    setTimeout(() => {
                        if (videoRefs.current[index]) {
                            videoRefs.current[index].pause();
                        }
                    }, 1000);
                }
            }
        });

        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 8000); // Restart counting 8000ms strictly from the exact moment of playback
        
        return () => clearInterval(timer);
    }, [currentSlide]);
    
    // Unified clear font style over all backgrounds (matches slide 1)
    const titleColor = "text-white";
    const titleShadow = "0px 3px 12px rgba(0,0,0,0.8)";
    
    const subtitleColor = "text-white/95";
    const subtitleShadow = "0px 2px 8px rgba(0,0,0,0.7)";
    
    const linkColor = "text-white/95 hover:text-white";
    const featureShadow = "0px 2px 6px rgba(0,0,0,0.8)";

    const pos = heroSlides[currentSlide].position || "bottom-left";
    const isMinimal = heroSlides[currentSlide].variant === "minimal";
    
    // Dynamic Typographic Sizing
    const titleSize = isMinimal ? "text-3xl sm:text-4xl md:text-5xl font-semibold tracking-normal" : "text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight";
    const subtitleSize = isMinimal ? "text-base sm:text-lg md:text-xl font-medium" : "text-lg sm:text-xl md:text-2xl font-medium";
    const featureSize = isMinimal ? "text-sm sm:text-base font-medium" : "text-base sm:text-lg font-semibold";
    const iconSize = isMinimal ? "w-4 h-4 sm:w-5 sm:h-5" : "w-5 h-5 sm:w-6 sm:h-6";
    
    const getPosClasses = (p) => {
        switch(p) {
            case 'top-left': return 'top-32 left-4 sm:left-10 lg:left-20 items-start text-left';
            case 'top-right': return 'top-32 right-4 sm:right-10 lg:right-20 items-end text-right';
            case 'bottom-right': return 'bottom-20 sm:bottom-28 right-4 sm:right-10 lg:right-20 items-end text-right';
            case 'bottom-left':
            default: return 'bottom-20 sm:bottom-28 left-4 sm:left-10 lg:left-20 items-start text-left';
        }
    };

    return (
        <section className="relative h-screen min-h-[500px] overflow-hidden bg-slate-900">
            {/* Background Videos with Crossfade Transition */}
            <div className="absolute inset-0 z-0 w-full h-full bg-slate-900">
                {heroSlides.map((slide, index) => (
                    <video
                        key={slide.id}
                        ref={(el) => (videoRefs.current[index] = el)}
                        loop
                        muted
                        playsInline
                        preload={index === 0 ? "auto" : "metadata"}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <source src={slide.video} type="video/mp4" />
                    </video>
                ))}
                {/* Ultra-soft edge-only gradient to retain max video quality */}
                <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                {/* Optional dark gradient edge for top right text visibility */}
                <div className="absolute inset-x-0 top-0 h-[25%] bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
            </div>

            {/* Dynamic Content Wrapper */}
            <div className="absolute inset-0 z-10 w-full pointer-events-none">
                <div className="relative w-full h-full max-w-7xl mx-auto">
                    <AnimatePresence>
                        <motion.div
                            key={currentSlide}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            className={`absolute max-w-2xl pointer-events-auto flex flex-col transition-all duration-700 ${getPosClasses(pos)}`}
                        >
                            <h1 className={`${titleSize} mb-3 sm:mb-5 drop-shadow-xl ${titleColor} transition-all duration-700`} style={{ textShadow: titleShadow }}>
                                {heroSlides[currentSlide].content.mainTitle}
                            </h1>
                            {heroSlides[currentSlide].content.subTitle && (
                                <p className={`${subtitleSize} mb-6 sm:mb-8 tracking-wide drop-shadow-lg ${subtitleColor} transition-all duration-700`} style={{ textShadow: subtitleShadow }}>
                                    {heroSlides[currentSlide].content.subTitle}
                                </p>
                            )}
                            
                            <div className={`flex flex-col gap-4 mt-2 ${pos.includes('right') ? 'items-end' : 'items-start'}`}>
                                {heroSlides[currentSlide].content.features.map((feature, index) => (
                                    <Link
                                        to={`/features/${feature.id}`}
                                        key={index}
                                        className={`flex items-center gap-4 px-0 py-1 transition-colors duration-300 group ${linkColor} ${pos.includes('right') ? 'flex-row-reverse' : ''}`}
                                    >
                                        <feature.icon className={`${iconSize} ${feature.color} opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all flex-shrink-0 drop-shadow-md`} />
                                        <span className={`${featureSize} tracking-wide drop-shadow-md transition-all duration-700`} style={{ textShadow: featureShadow }}>{feature.label}</span>
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
