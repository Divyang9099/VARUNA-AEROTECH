import React from 'react';
import { motion } from 'framer-motion';
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { siteConfig } from '../siteConfig';

const WhyUs = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section className="varuna-edge-section">
            <div id="particles-js">
                {init && (
                    <Particles
                        id="tsparticles"
                        options={{
                            fullScreen: { enable: false },
                            fpsLimit: 120,
                            interactivity: {
                                events: {
                                    onHover: {
                                        enable: true,
                                        mode: "grab",
                                    },
                                    onClick: {
                                        enable: false,
                                    },
                                    resize: true,
                                },
                                modes: {
                                    grab: {
                                        distance: 220,
                                        links: {
                                            opacity: 0.8
                                        }
                                    }
                                },
                            },
                            particles: {
                                color: {
                                    value: "#000000",
                                },
                                links: {
                                    color: "#000000",
                                    distance: 140,
                                    enable: true,
                                    opacity: 0.25,
                                    width: 1.2,
                                    triangles: {
                                        enable: true,
                                        opacity: 0.05
                                    }
                                },
                                move: {
                                    direction: "none",
                                    enable: true,
                                    outModes: {
                                        default: "bounce",
                                    },
                                    random: false,
                                    speed: 0.8,
                                    straight: false,
                                },
                                number: {
                                    density: {
                                        enable: true,
                                        area: 800,
                                    },
                                    value: 90,
                                },
                                opacity: {
                                    value: 0.6,
                                },
                                shape: {
                                    type: "circle",
                                },
                                size: {
                                    value: { min: 2, max: 4.5 },
                                },
                            },
                            detectRetina: true,
                        }}
                        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                    />
                )}
            </div>

            <div className="varuna-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2" style={{letterSpacing: '-0.025em'}}>
                        Why we: "Our Varuna Edge"
                    </motion.h2>
                    <div className="mx-auto w-24 h-1.5 bg-gradient-to-r from-blue-600 to-sky-400 rounded-full mb-4"></div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-slate-600 text-lg max-w-2xl mx-auto"
                    >
                        Why industry leaders choose us for critical infrastructure diagnostics.
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 justify-items-center w-full"
                >
                    {siteConfig.whyUs.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="edge-card w-full flex flex-col items-center text-center p-3 sm:p-5 lg:p-6 rounded-[1.25rem] sm:rounded-3xl border-[3px] sm:border-4 border-blue-200 hover:border-blue-600 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
                        >
                            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-blue-600 text-white border-2 border-transparent flex items-center justify-center mb-3 sm:mb-4 shadow-md shadow-blue-200 group-hover:bg-white group-hover:text-blue-600 group-hover:border-blue-600 transition-all duration-300 mx-auto">
                                <item.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                            </div>
                            <h3 className="text-[13px] sm:text-lg font-bold text-slate-900 mb-1 sm:mb-2 leading-tight px-1">{item.title}</h3>
                            <p className="text-slate-600 leading-snug sm:leading-relaxed text-[11px] sm:text-sm px-1 mb-1">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default WhyUs;
