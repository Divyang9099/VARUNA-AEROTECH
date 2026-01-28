import React, { useEffect, useState } from 'react';
import { siteConfig } from '../siteConfig';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement form submission logic here
        console.log("Form submitted:", formData);
        alert("Thanks for contacting us! We'll get back to you shortly.");
    };

    return (
        <div className="min-h-screen bg-gray-50 py-16 pt-32">
            <div className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
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
                        {/* Get in Touch Box */}
                        <div className="bg-white rounded-xl shadow-lg p-8 transition-all hover:shadow-xl">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                                Get in Touch
                            </h2>
                            <div className="space-y-6">
                                {/* Phone */}
                                <div className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 hover:shadow-md hover:scale-[1.02] transform transition-all duration-300">
                                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 text-blue-600">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-base font-semibold text-gray-900">Phone</h3>
                                        <div className="space-y-1 mt-1">
                                            {siteConfig.contact.phones.map((phone, i) => (
                                                <a
                                                    key={i}
                                                    href={`tel:${phone.replace(/\s+/g, '')}`}
                                                    className="block text-sm text-gray-600 hover:text-blue-600 transition-colors"
                                                >
                                                    {phone}
                                                </a>
                                            ))}
                                        </div>
                                        <p className="text-xs text-gray-500 mt-1">Monday - Friday, 9am - 6pm IST</p>
                                    </div>
                                </div>

                                {/* Email */}
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
                                        <p className="text-xs text-gray-500 mt-1">We'll respond within 24 hours</p>
                                    </div>
                                </div>

                                {/* Address */}
                                <div className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 hover:shadow-md hover:scale-[1.02] transform transition-all duration-300">
                                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 text-blue-600">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-base font-semibold text-gray-900">Address</h3>
                                        <a
                                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.contact.address)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block text-sm text-gray-600 mt-1 leading-relaxed hover:text-blue-600 transition-colors"
                                        >
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
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                        placeholder="Your full name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                                <input
                                    id="company"
                                    name="company"
                                    type="text"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    placeholder="Your company name"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                                    placeholder="Tell us about your project and requirements..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 disabled:opacity-50"
                            >
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
