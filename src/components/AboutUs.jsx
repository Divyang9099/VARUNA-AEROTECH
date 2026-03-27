import React from 'react';
import { siteConfig } from '../siteConfig';
import { motion } from 'framer-motion';
import { CheckCircle, Zap, Award, Users } from 'lucide-react';


const AboutUs = () => {
    const { aboutPage } = siteConfig;

    return (
        <div id="about" className="overflow-x-hidden">
            {/* Full Width Who We Are Section - Light Airy Design */}
            <section className="relative w-full py-14 md:py-32 bg-slate-50 overflow-hidden">
                {/* Decorative Background - Flowing Blue Waves matching reference */}
                <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none bg-white">
                    <svg className="absolute w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="none">
                        <defs>
                            <linearGradient id="grad1" x1="0%" y1="100%" x2="100%" y2="0%">
                                <stop offset="0%" style={{ stopColor: "#3b82f6", stopOpacity: 0.05 }} />
                                <stop offset="100%" style={{ stopColor: "#93c5fd", stopOpacity: 0.2 }} />
                            </linearGradient>
                        </defs>
                        <path d="M0,900 C300,800 600,600 900,300 C1100,100 1300,50 1440,0 L1440,900 L0,900 Z" fill="url(#grad1)" />
                        <path d="M0,900 C200,700 500,500 800,400 C1100,300 1300,100 1440,0" stroke="#06b6d4" strokeWidth="1.5" fill="none" strokeOpacity="0.6" />
                        <path d="M0,900 C400,800 700,500 1000,400 C1200,330 1440,100 1440,50" stroke="#8b5cf6" strokeWidth="1.5" fill="none" strokeOpacity="0.5" />
                        <path d="M0,900 C100,600 400,400 700,300 C1000,200 1300,50 1440,0" stroke="#ec4899" strokeWidth="1.5" fill="none" strokeOpacity="0.5" />

                        {/* Fine mesh lines for detail */}
                        <path d="M-100,900 C200,800 600,400 1000,300 C1300,225 1500,50 1600,0" stroke="#3b82f6" strokeWidth="1" fill="none" strokeOpacity="0.4" />
                        <path d="M200,900 C500,800 800,500 1100,400 C1400,300 1600,100 1700,0" stroke="#14b8a6" strokeWidth="1" fill="none" strokeOpacity="0.4" />
                    </svg>
                </div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-16 lg:px-24 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="mb-12">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6" style={{letterSpacing: '-0.03em'}}>{aboutPage.whoWeAre.title}</h2>
                            <div className="w-24 h-1.5 bg-blue-600 rounded-full mx-auto"></div>
                        </div>

                        <p className="text-base sm:text-xl text-slate-600 leading-relaxed mb-10 md:mb-16 max-w-4xl mx-auto font-medium">
                            {aboutPage.whoWeAre.description}
                        </p>

                        <div className="bg-slate-900/5 backdrop-blur-sm rounded-2xl p-5 sm:p-8 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 mb-10 md:mb-16">
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 sm:gap-x-12 sm:gap-y-8">
                                {aboutPage.whoWeAre.bullets.map((item, idx) => (
                                    <li key={idx} className="flex gap-4 text-left">
                                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                                            <div className="w-6 h-6 rounded-full bg-blue-600/10 flex items-center justify-center text-blue-600 font-bold text-sm">
                                                {idx + 1}
                                            </div>
                                        </div>
                                        <div>
                                            <strong className="text-slate-900 block text-lg mb-1">{item.title}</strong>
                                            <span className="text-slate-500">{item.text}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-10 pt-8 border-t border-slate-200/60 text-center">
                                <p className="text-slate-700 font-medium italic text-xl relative inline-block max-w-3xl">
                                    <span className="text-4xl text-blue-200/80 absolute -top-4 -left-8 font-serif">"</span>
                                    {aboutPage.whoWeAre.tagline}
                                    <span className="text-4xl text-blue-200/80 absolute -bottom-4 -right-8 font-serif">"</span>
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Mission & Vision Section Wrapper */}
            <section className="py-14 md:py-24 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-16 lg:px-24">
                    {/* Mission & Vision */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-14 md:mb-24">
                        {/* Mission Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative overflow-hidden rounded-[2.5rem] flex flex-col h-full bg-gradient-to-b from-slate-50 to-white shadow-xl border border-slate-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group p-10 text-center"
                        >
                            {/* Premium Central Background Watermark */}
                            <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-10 group-hover:opacity-15 transition-opacity duration-500">
                                <svg className="w-[28rem] h-[28rem] text-blue-900" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <circle cx="100" cy="100" r="80" strokeDasharray="4 4" />
                                    <circle cx="100" cy="100" r="60" />
                                    <circle cx="100" cy="100" r="40" strokeDasharray="2 2" />
                                    <path d="M100 0 V200 M0 100 H200" opacity="1" />
                                    <rect x="85" y="85" width="30" height="30" transform="rotate(45 100 100)" />
                                </svg>
                            </div>

                            <div className="relative z-10 flex flex-col h-full items-center">
                                <div className="flex flex-col items-center">
                                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex items-center justify-center mb-8 shadow-lg shadow-blue-200 group-hover:scale-110 group-hover:shadow-blue-300 transition-all duration-300 relative before:absolute before:inset-0 before:rounded-full before:border before:border-white/20 before:animate-pulse-slow">
                                        <Zap className="w-10 h-10" />
                                    </div>
                                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 group-hover:text-blue-700 transition-colors" style={{letterSpacing: '-0.02em'}}>{aboutPage.mission.title}</h3>
                                </div>
                                {aboutPage.mission.points ? (
                                    <ul className="text-left space-y-4 px-4 list-disc marker:text-blue-600">
                                        {aboutPage.mission.points.map((point, index) => (
                                            <li key={index} className="text-slate-700 font-medium leading-relaxed text-lg">
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-slate-700 font-medium leading-relaxed text-lg max-w-lg mx-auto">
                                        {aboutPage.mission.text}
                                    </p>
                                )}
                            </div>
                        </motion.div>

                        {/* Vision Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative overflow-hidden rounded-[2.5rem] flex flex-col h-full bg-gradient-to-b from-slate-50 to-white shadow-xl border border-slate-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group p-10 text-center"
                        >
                            {/* Premium Central Background Watermark */}
                            <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-10 group-hover:opacity-15 transition-opacity duration-500">
                                <svg className="w-[28rem] h-[28rem] text-blue-900" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <circle cx="100" cy="100" r="80" strokeDasharray="4 4" />
                                    <circle cx="100" cy="100" r="60" />
                                    <circle cx="100" cy="100" r="40" strokeDasharray="2 2" />
                                    <path d="M100 0 V200 M0 100 H200" opacity="1" />
                                    <rect x="85" y="85" width="30" height="30" transform="rotate(45 100 100)" />
                                </svg>
                            </div>

                            <div className="relative z-10 flex flex-col h-full items-center">
                                <div className="flex flex-col items-center">
                                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex items-center justify-center mb-8 shadow-lg shadow-blue-200 group-hover:scale-110 group-hover:shadow-blue-300 transition-all duration-300 relative before:absolute before:inset-0 before:rounded-full before:border before:border-white/20 before:animate-pulse-slow">
                                        <Users className="w-10 h-10" />
                                    </div>
                                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 group-hover:text-blue-700 transition-colors" style={{letterSpacing: '-0.02em'}}>{aboutPage.vision.title}</h3>
                                </div>
                                <p className="text-slate-700 font-medium leading-relaxed text-lg max-w-lg mx-auto">
                                    {aboutPage.vision.text}
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values Section - Light Airy Design */}
            <section className="relative w-full py-14 md:py-24 bg-slate-50 overflow-hidden">
                {/* Decorative Background - Flowing Blue Waves matching reference */}
                <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none bg-white">
                    <svg className="absolute w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="none">
                        <defs>
                            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" style={{ stopColor: "#3b82f6", stopOpacity: 0.02 }} />
                                <stop offset="100%" style={{ stopColor: "#93c5fd", stopOpacity: 0.15 }} />
                            </linearGradient>
                        </defs>
                        {/* Reverse flow for visual variety */}
                        <path d="M0,0 C300,100 600,300 900,600 C1100,800 1300,850 1440,900 L1440,0 L0,0 Z" fill="url(#grad2)" />
                        <path d="M0,100 C200,200 500,400 800,500 C1100,600 1300,800 1440,900" stroke="#06b6d4" strokeWidth="1.5" fill="none" strokeOpacity="0.6" />
                        <path d="M0,0 C400,100 700,400 1000,500 C1200,570 1440,800 1440,850" stroke="#8b5cf6" strokeWidth="1.5" fill="none" strokeOpacity="0.5" />
                        <path d="M0,50 C100,300 400,500 700,600 C1000,700 1300,850 1440,900" stroke="#ec4899" strokeWidth="1.5" fill="none" strokeOpacity="0.5" />

                        {/* Fine mesh lines for detail */}
                        <path d="M-100,0 C200,100 600,500 1000,600 C1300,675 1500,850 1600,900" stroke="#3b82f6" strokeWidth="1" fill="none" strokeOpacity="0.4" />
                    </svg>
                </div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-16 lg:px-24">
                    {/* Core Values */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16 relative z-10"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2" style={{letterSpacing: '-0.025em'}}>Our Core Values</h2>
                        <div className="mx-auto w-24 h-1.5 bg-blue-600 rounded-full mb-4"></div>
                        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                            The principles that drive everything we do at Varuna Aerotech.
                        </p>
                    </motion.div>

                    {/* Core Values Grid with Neumorphic Design */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: {},
                            visible: {
                                transition: {
                                    staggerChildren: 0.15
                                }
                            }
                        }}
                        className="relative z-10"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 relative z-10">
                            {aboutPage.coreValues.map((value, index) => (
                                <motion.div
                                    key={index}
                                    variants={{
                                        hidden: { opacity: 0, y: 30, scale: 0.9 },
                                        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
                                    }}
                                    className="group relative"
                                >
                                    {/* Glassmorphic Card */}
                                    <div
                                        className="relative overflow-hidden flex flex-col items-center text-center p-8 h-full transition-all duration-500 group-hover:scale-105 bg-slate-800/5 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-2xl rounded-[1.5rem]"
                                    >
                                        {/* Icon Container */}
                                        <div
                                            className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg shadow-blue-200"
                                        >
                                            <value.icon className="w-8 h-8 text-white" />
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                                            {value.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            {value.description}
                                        </p>

                                        {/* Hover Glow Effect */}
                                        <div
                                            className="absolute inset-0 rounded-[1.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-blue-500/5 to-indigo-500/5"
                                        ></div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;