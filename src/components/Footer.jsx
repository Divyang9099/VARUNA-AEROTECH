import React from 'react';
import { siteConfig } from '../siteConfig';
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from 'lucide-react';

const Footer = () => (
    <footer id="contact" className="bg-blue-950 text-white pt-20 pb-10 border-t border-blue-900">
        <div className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                {/* Column 1: Brand */}
                <div className="space-y-6">
                    <div>
                        <div className="bg-white p-4 rounded-xl inline-block mb-3">
                            <img src={siteConfig.logo} alt={siteConfig.name} className="h-16 w-auto" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs text-blue-200 tracking-widest uppercase">Aerial Data Intelligence</span>
                        </div>
                    </div>
                    <p className="text-blue-100 text-sm leading-relaxed max-w-sm">
                        {siteConfig.description}
                    </p>
                    <div className="flex gap-4 pt-2">
                        <a href="#" className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center text-white hover:bg-white hover:text-blue-950 transition-all duration-300">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center text-white hover:bg-white hover:text-blue-950 transition-all duration-300">
                            <Facebook className="w-5 h-5" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center text-white hover:bg-white hover:text-blue-950 transition-all duration-300">
                            <Instagram className="w-5 h-5" />
                        </a>
                    </div>
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
                        {siteConfig.footerServices.map((item, index) => (
                            <li key={index}>
                                <a href="#" className="text-blue-100 hover:text-white hover:pl-1 transition-all duration-200 block text-sm">
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 4: Contact */}
                <div>
                    <h4 className="text-lg font-bold text-white mb-6">Contact</h4>
                    <ul className="space-y-4 text-sm">
                        <li className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                            <span className="text-blue-100 max-w-[200px]">{siteConfig.contact.address}</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-blue-400 shrink-0" />
                            <div className="flex flex-col">
                                {siteConfig.contact.phones.map((phone, i) => (
                                    <span key={i} className="text-blue-100">{phone}</span>
                                ))}
                            </div>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-blue-400 shrink-0" />
                            <div className="flex flex-col">
                                {siteConfig.contact.emails.map((email, i) => (
                                    <a key={i} href={`mailto:${email}`} className="text-blue-100 hover:text-white transition-colors">{email}</a>
                                ))}
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="pt-8 border-t border-blue-900 flex flex-col md:flex-row justify-end items-center gap-4 text-blue-300 text-sm">
                <div className="flex gap-6">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
