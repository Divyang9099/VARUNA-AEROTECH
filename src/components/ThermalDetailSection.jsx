
import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle2, Thermometer, ArrowRight, Zap, TrendingUp, Shield, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const ThermalDetailSection = () => {
    const { scrollYProgress } = useScroll();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 15,
                y: (e.clientY / window.innerHeight - 0.5) * 15
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const stats = [
        { icon: Zap, label: "Detection Speed", value: "<2s", color: "from-yellow-500 to-orange-500" },
        { icon: TrendingUp, label: "Accuracy Rate", value: "99.8%", color: "from-green-500 to-emerald-500" },
        { icon: Shield, label: "IEC Certified", value: "62446-3", color: "from-blue-500 to-cyan-500" },
        { icon: Award, label: "Coverage", value: "100MW+", color: "from-purple-500 to-pink-500" }
    ];

    const capabilities = [
        "Radiometric Data (RJPEG)",
        "Automated Fault Detection",
        "Severity Matrix (High/Med/Low)",
        "Geo-tagged GPS Analysis",
        "Ortho-rectified Thermal Maps",
        "Yield Loss Estimation"
    ];

    return (
        <div className="bg-white">
            {/* Hero Section with Premium Design */}
            <div className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-32 pb-24 lg:pb-32 overflow-hidden">

                {/* Animated Grid Background */}
                <div className="absolute inset-0 z-0">
                    <motion.div
                        className="absolute inset-0 opacity-20"
                        style={{ y }}
                    >
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
                    </motion.div>

                    {/* Gradient Orbs */}
                    <motion.div
                        className="absolute top-20 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-[120px]"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                        className="absolute bottom-20 left-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-[120px]"
                        animate={{
                            scale: [1.2, 1, 1.2],
                            opacity: [0.5, 0.3, 0.5],
                        }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                        {/* Left Content */}
                        <div className="w-full lg:w-3/5">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                {/* Category Badge */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6"
                                >
                                    <Thermometer className="w-4 h-4 text-orange-400" />
                                    <span className="text-xs font-bold tracking-widest uppercase text-orange-400">
                                        Radiometric Infrared Analytics
                                    </span>
                                </motion.div>

                                {/* Title with Gradient */}
                                <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                                    Thermal Data{' '}
                                    <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                                        Acquisition
                                    </span>
                                </h2>

                                {/* Description */}
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 }}
                                    className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl"
                                >
                                    Our high-precision radiometric thermal inspections identify module-level defects,
                                    bypass-diode failures, and string imbalances with centimeter-level accuracy.
                                </motion.p>

                                {/* CTA Button */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 1 }}
                                >
                                    <Link
                                        to="/features/thermal-data"
                                        className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 font-bold rounded-xl overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(251,146,60,0.5)]"
                                    >
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500"
                                            initial={{ x: '100%' }}
                                            whileHover={{ x: 0 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                        <span className="relative z-10 group-hover:text-white transition-colors">View Detailed Study</span>
                                        <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform group-hover:text-white" />
                                    </Link>
                                </motion.div>
                            </motion.div>
                        </div>

                        {/* Right Content - Floating Mockup */}
                        <div className="w-full lg:w-2/5 relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.4 }}
                                style={{
                                    transform: `perspective(1000px) rotateY(${mousePosition.x * 0.5}deg) rotateX(${-mousePosition.y * 0.5}deg)`
                                }}
                                className="relative w-full"
                            >
                                {/* Glow Effect */}
                                <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/30 via-red-500/30 to-pink-500/30 rounded-3xl blur-3xl opacity-50"></div>

                                {/* Main Image */}
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="relative"
                                >
                                    <img
                                        src="https://res.cloudinary.com/ddsjqtxik/image/upload/v1770109446/varuna-aerotech/mockups/thermal_analysis_mockup.jpg"
                                        alt="Thermal Analytics Dashboard"
                                        className="w-full h-auto rounded-2xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] border border-white/10 ring-1 ring-white/5"
                                    />
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>


            </div>

            {/* Capabilities Section */}
            <div className="container mx-auto px-6 py-24 relative z-20">
                <div className="max-w-6xl mx-auto">

                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                            IEC 62446-3 Compliant Reporting
                        </h3>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            Enterprise-grade thermal analysis with industry-leading precision
                        </p>
                    </motion.div>

                    {/* Capabilities Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                        {capabilities.map((capability, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -4 }}
                                className="group bg-white rounded-2xl p-6 border border-slate-200 hover:border-orange-300 hover:shadow-[0_20px_60px_-15px_rgba(251,146,60,0.3)] transition-all"
                            >
                                <div className="flex items-start gap-4">
                                    <motion.div
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                        className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg"
                                    >
                                        <CheckCircle2 className="w-6 h-6 text-white" />
                                    </motion.div>
                                    <div>
                                        <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">
                                            {capability}
                                        </h4>
                                        <p className="text-sm text-slate-600">
                                            Real-time processing with sub-second response times
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 relative overflow-hidden"
                    >
                        {/* Animated Background */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
                        </div>

                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="flex-1">
                                <h4 className="text-3xl font-bold text-white mb-3">Field Ready Data</h4>
                                <p className="text-lg text-slate-300">
                                    Our dashboards provide maintenance teams with exact string/module locations for rapid intervention.
                                </p>
                            </div>
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all group flex-shrink-0"
                            >
                                <span>Request Sample Report</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ThermalDetailSection;
