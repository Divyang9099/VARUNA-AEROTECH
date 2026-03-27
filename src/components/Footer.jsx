import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../siteConfig';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => (
    <footer id="contact" className="footer-section pt-20 pb-10 border-t border-slate-200 relative overflow-hidden">
        <div className="footer-bg-overlay absolute inset-0 z-0"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-16 lg:px-24 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12 md:mb-16">

                {/* Column 1: Brand */}
                <div className="space-y-6">
                    <div>
                        <div className="inline-block mb-3">
                            <img src={siteConfig.logo} alt={siteConfig.name} className="h-16 w-auto" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs text-blue-200 tracking-widest uppercase">Aerial Data Intelligence</span>
                        </div>
                    </div>
                    <p className="text-blue-100 text-sm leading-relaxed max-w-sm">
                        {siteConfig.description}
                    </p>

                </div>

                {/* Column 2: Quick Links */}
                <div>
                    <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
                    <ul className="space-y-3">
                        {siteConfig.quickLinks.map((item, index) => (
                            <li key={index}>
                                <a href={item.href} className="text-blue-100 hover:text-white hover:pl-1 transition-all duration-200 block text-sm">
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 3: Services */}
                <div>
                    <h4 className="text-lg font-bold text-white mb-6">Services</h4>
                    <ul className="space-y-3">
                        {siteConfig.footerServices.map((title, index) => {
                            // Find the service ID based on the title match from siteConfig.services
                            // This ensures we link correctly to the dynamic detail page
                            const service = siteConfig.services.find(s => s.title === title);
                            const linkTo = service ? `/services/${service.id}` : "/#services";

                            return (
                                <li key={index}>
                                    <a href={linkTo} className="text-blue-100 hover:text-white hover:pl-1 transition-all duration-200 block text-sm">
                                        {title}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                {/* Column 4: Contact */}
                <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-6">Contact</h4>
                    <ul className="space-y-4 text-sm font-bold text-slate-900">
                        <li className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                            <a
                                href="https://maps.app.goo.gl/nf3SNA5fWWN4oGuF9"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-900 hover:text-blue-700 transition-colors max-w-[200px]"
                            >
                                {siteConfig.contact.address}
                            </a>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-blue-700 shrink-0" />
                            <div className="flex flex-col">
                                {siteConfig.contact.phones.map((phone, i) => (
                                    <a
                                        key={i}
                                        href={`tel:${phone.replace(/\s+/g, '')}`}
                                        className="text-slate-900 hover:text-blue-700 transition-colors block"
                                    >
                                        {phone}
                                    </a>
                                ))}
                            </div>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-blue-700 shrink-0" />
                            <div className="flex flex-col">
                                {siteConfig.contact.emails.map((email, i) => (
                                    <a key={i} href={`mailto:${email}`} className="text-slate-900 hover:text-blue-700 transition-colors block">{email}</a>
                                ))}
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="pt-8 border-t border-blue-900 flex flex-col sm:flex-row justify-end items-center gap-4 text-blue-300 text-sm">
                <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
