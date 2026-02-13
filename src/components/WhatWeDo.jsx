import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../siteConfig';
import { CheckCircle } from 'lucide-react';

const WhatWeDo = () => (
    <section id="about" className="topography-section py-24">
        {/* Gradient Topography Layers (Anchored to the Left) */}
        <div className="topo-bg">
            <div className="topo-layer topo-layer-1"></div>
            <div className="topo-layer topo-layer-2"></div>
            <div className="topo-layer topo-layer-3"></div>
            <div className="topo-layer topo-layer-4"></div>
            <div className="topo-layer topo-layer-5"></div>
            <div className="topo-layer topo-layer-6"></div>
            <div className="topo-layer topo-layer-7"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24 topography-content">
            <div className="flex flex-col md:flex-row items-center gap-16">
                {/* Left Column: Content Workflow */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full md:w-1/2"
                >
                    <h2 className="text-4xl font-serif font-bold text-slate-900 mb-2">{siteConfig.whatWeDo.title}</h2>
                    <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-sky-400 rounded-full mb-8"></div>

                    <div className="space-y-8">
                        {/* Step 1 */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="flex gap-4 group"
                        >
                            <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">1</div>
                            <div>
                                <h3 className="font-bold text-slate-900 text-lg mb-1">Aerial Data Capture</h3>
                                <p className="text-slate-600">
                                    Drone thermography • Panel-level scanning • RGB & EL Testing
                                </p>
                            </div>
                        </motion.div>

                        {/* Step 2 */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex gap-4 group"
                        >
                            <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">2</div>
                            <div>
                                <h3 className="font-bold text-slate-900 text-lg mb-1">Data Processing</h3>
                                <p className="text-slate-600">
                                    Hotspot detection • Fault classification • Geo-tagging
                                </p>
                            </div>
                        </motion.div>

                        {/* Step 3 */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex gap-4 group"
                        >
                            <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">3</div>
                            <div>
                                <h3 className="font-bold text-slate-900 text-lg mb-1">Inspection Report</h3>
                                <p className="text-slate-600">
                                    Dashboard analytics • Asset health summary • Location insights
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right Column: Visual */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full md:w-1/2"
                >
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video group">
                        <img
                            src="https://images.unsplash.com/photo-1579829366248-204fe8413f31?q=80&w=2070&auto=format&fit=crop"
                            alt="Drone Inspection"
                            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>


                    </div>
                </motion.div>
            </div>
        </div>
    </section>
);

export default WhatWeDo;
