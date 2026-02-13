
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Sparkles, Zap, Shield } from 'lucide-react';
import { heroFeaturesData } from '../data/heroFeaturesData';
import Navbar from '../components/Navbar';

const FeatureDetail = () => {
    const { id } = useParams();
    const feature = heroFeaturesData[id];
    const { scrollYProgress } = useScroll();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Parallax effects
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    if (!feature) {
        return <div>Feature not found</div>;
    }

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section - Premium Stripe-inspired Design */}
            <div className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-32 pb-24 lg:pb-32 overflow-hidden">

                {/* Animated Grid Background */}
                <div className="absolute inset-0 z-0">
                    <motion.div
                        className="absolute inset-0 opacity-20"
                        style={{ y }}
                    >
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
                    </motion.div>

                    {/* Gradient Orbs - Linear Style */}
                    <motion.div
                        className="absolute top-20 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                        className="absolute bottom-20 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]"
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
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                {/* Back Button with Micro-interaction */}
                                <Link
                                    to="/"
                                    className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 group transition-colors"
                                >
                                    <motion.div
                                        whileHover={{ x: -4 }}
                                        transition={{ type: "spring", stiffness: 400 }}
                                    >
                                        <ArrowLeft className="w-4 h-4" />
                                    </motion.div>
                                    <span className="text-sm font-medium">Back to Home</span>
                                </Link>



                                {/* Title with Gradient */}
                                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                                    {feature.title.split(' ').map((word, i) => (
                                        <motion.span
                                            key={i}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3 + i * 0.1 }}
                                            className={i === feature.title.split(' ').length - 1 ? "bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent" : ""}
                                        >
                                            {word}{' '}
                                        </motion.span>
                                    ))}
                                </h1>

                                {/* Description */}
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.6 }}
                                    className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl"
                                >
                                    {feature.description}
                                </motion.p>

                                {/* CTA Button with Hover Effect */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 }}
                                >
                                    <Link
                                        to="/contact"
                                        className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 font-bold rounded-xl overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(59,130,246,0.5)]"
                                    >
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500"
                                            initial={{ x: '100%' }}
                                            whileHover={{ x: 0 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                        <span className="relative z-10 group-hover:text-white transition-colors">Get Started</span>
                                        <ArrowLeft className="relative z-10 w-5 h-5 rotate-180 group-hover:translate-x-1 transition-transform group-hover:text-white" />
                                    </Link>
                                </motion.div>
                            </motion.div>
                        </div>

                        {/* Right Content - Floating Mockup with Parallax */}
                        <div className="w-full lg:w-2/5 relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, delay: 0.4 }}
                                style={{
                                    transform: `perspective(1000px) rotateY(${mousePosition.x * 0.5}deg) rotateX(${-mousePosition.y * 0.5}deg)`
                                }}
                                className="relative w-full"
                            >
                                {/* Glow Effect */}
                                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-3xl blur-3xl opacity-50 group-hover:opacity-75 transition-opacity duration-1000"></div>

                                {/* Main Image */}
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="relative"
                                >
                                    <img
                                        src={feature.mockupImg || "/dashboard_mockup.png"}
                                        alt={feature.title}
                                        className="w-full h-auto rounded-2xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] border border-white/10 ring-1 ring-white/5"
                                    />
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>


            </div>

            {/* Features Grid Section */}
            <div className="container mx-auto px-6 py-24 relative z-20">
                <div className="max-w-6xl mx-auto">

                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                            Key Capabilities
                        </h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            Enterprise-grade features designed for precision and reliability
                        </p>
                    </motion.div>

                    {/* Features Grid with Stagger Animation */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {feature.features.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                                className="group relative bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-[0_20px_60px_-15px_rgba(59,130,246,0.3)] transition-all duration-300"
                            >
                                {/* Gradient Background on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                <div className="relative flex items-start gap-4">
                                    <motion.div
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                        className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg"
                                    >
                                        <CheckCircle2 className="w-6 h-6 text-white" />
                                    </motion.div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                                            {item}
                                        </h3>
                                        <p className="text-sm text-slate-600">
                                            Industry-leading performance with real-time processing capabilities
                                        </p>
                                    </div>
                                </div>

                                {/* Animated Border */}
                                <motion.div
                                    className="absolute inset-0 rounded-2xl border-2 border-blue-500 opacity-0 group-hover:opacity-100"
                                    initial={false}
                                    animate={{ scale: [1, 1.02, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mt-20 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 relative overflow-hidden"
                    >
                        {/* Animated Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
                        </div>

                        <div className="relative z-10 text-center">
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Ready to Transform Your Operations?
                            </h3>
                            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                                Get a comprehensive quote tailored to your project needs
                            </p>
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all group"
                            >
                                <span>Contact Us</span>
                                <ArrowLeft className="w-5 h-5 rotate-180 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default FeatureDetail;
