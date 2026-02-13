import React, { useEffect, useState } from 'react';
import { siteConfig } from '../siteConfig';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        try {
            // Point to your live Node.js backend on Render
            const response = await fetch('https://varuna-backend-3mco.onrender.com/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok && result.status === 'success') {
                alert("Message sent successfully!");
                e.target.reset();
            } else {
                // Show the exact error from Node.js (e.g. "Invalid Login", "Timeout")
                const detailedError = result.error || result.message || "Unknown error";
                alert(`EMAIL FAILED: ${detailedError}\n\nPlease take a screenshot of this error.`);
                console.error("Full Backend Response:", result);
            }
        } catch (error) {
            console.error("Network Error:", error);
            alert("Could not connect to the server. Is the backend running?");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-16 pt-32">
            <div className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Contact Us</h1>
                    <div className="mx-auto w-24 h-1.5 bg-gradient-to-r from-blue-600 to-sky-400 rounded-full mb-4"></div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Ready to optimize your renewable energy assets? Get in touch with our expert team.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="order-2 lg:order-1 space-y-8"
                    >
                        <div className="bg-white rounded-xl shadow-lg p-8 transition-all hover:shadow-xl">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                                Get in Touch
                            </h2>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 hover:shadow-md hover:scale-[1.02] transform transition-all duration-300">
                                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 text-blue-600">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-base font-semibold text-gray-900">Phone</h3>
                                        <div className="space-y-1 mt-1">
                                            {siteConfig.contact.phones.map((phone, i) => (
                                                <a key={i} href={`tel:${phone.replace(/\s+/g, '')}`} className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                                                    {phone}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 hover:shadow-md hover:scale-[1.02] transform transition-all duration-300">
                                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 text-blue-600">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-base font-semibold text-gray-900">Email</h3>
                                        <div className="space-y-1 mt-1">
                                            {siteConfig.contact.emails.map((email, i) => (
                                                <a key={i} href={`mailto:${email}`} className="block text-sm text-blue-600 hover:text-blue-800 break-all">
                                                    {email}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 hover:shadow-md hover:scale-[1.02] transform transition-all duration-300">
                                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 text-blue-600">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-base font-semibold text-gray-900">Address</h3>
                                        <a href="https://maps.app.goo.gl/nf3SNA5fWWN4oGuF9" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-600 mt-1 leading-relaxed hover:text-blue-600 transition-colors">
                                            {siteConfig.contact.address}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="bg-white rounded-xl shadow-lg p-8 order-1 lg:order-2 h-fit"
                    >
                        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                                    <input name="name" type="text" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition-colors" placeholder="Your full name" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                                    <input name="email" type="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition-colors" placeholder="your@email.com" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                                <input name="company" type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition-colors" placeholder="Your company name" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                                <textarea name="message" rows="4" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition-colors resize-none" placeholder="Tell us about your project..."></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-wait' : ''}`}
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending...
                                    </>
                                ) : 'Send Message'}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
