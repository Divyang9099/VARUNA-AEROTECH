import React, { useState } from 'react';
import { siteConfig } from '../siteConfig';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState("Home");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);
    const location = useLocation();

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const toggleMobileDropdown = (label) => {
        setMobileDropdownOpen(mobileDropdownOpen === label ? null : label);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
                <div className="flex items-center gap-3">
                    <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                        <img src={siteConfig.logo} alt={siteConfig.name} className="h-10 md:h-12 w-auto" />
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-2 ml-auto">
                    {siteConfig.nav.map((item, index) => {
                        const isActive = location.pathname === item.href || (item.label === "Services" && location.pathname.startsWith("/services/"));
                        const isAnchor = item.href.startsWith('#') || item.href.startsWith('http');

                        const linkContent = (
                            <>
                                {item.label}
                                {item.dropdown && (
                                    <ChevronDown className={`w-4 h-4 transition-transform ${isActive ? '' : 'group-hover:rotate-180'}`} />
                                )}
                            </>
                        );

                        const className = `flex items-center gap-1 text-sm font-bold px-4 py-2.5 rounded-md transition-all duration-300 ${isActive ? 'bg-blue-600 text-white' : 'text-slate-700 group-hover:bg-blue-600 group-hover:text-white'}`;

                        // Wrapper for positioning dropdown
                        return (
                            <div key={index} className="relative group">
                                {isAnchor ? (
                                    <a
                                        href={item.href}
                                        onClick={() => setActiveLink(item.label)}
                                        className={className}
                                    >
                                        {linkContent}
                                    </a>
                                ) : (
                                    <Link
                                        to={item.href}
                                        onClick={() => setActiveLink(item.label)}
                                        className={className}
                                    >
                                        {linkContent}
                                    </Link>
                                )}

                                {/* Desktop Dropdown */}
                                {item.dropdown && (
                                    <div className="absolute top-full right-0 w-72 pt-2 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-200 ease-out">
                                        <div className="bg-white shadow-xl border border-gray-100 overflow-hidden py-2 rounded-xl">
                                            {item.dropdown.map((subItem, subIndex) => {
                                                const service = siteConfig.services?.find(s => s.title === subItem);
                                                const industry = siteConfig.industries?.find(i => i.title === subItem);
                                                let href = '#';
                                                if (service) href = `/services/${service.id}`;
                                                else if (industry) href = `/industries/${industry.id}`;

                                                return (
                                                    <Link
                                                        key={subIndex}
                                                        to={href}
                                                        className="block px-6 py-3 text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                                                        onClick={() => setActiveLink(subItem)}
                                                    >
                                                        {subItem}
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-slate-700 hover:text-blue-600 transition-colors"
                    onClick={toggleMobileMenu}
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-white border-t border-gray-100 overflow-hidden shadow-xl"
                    >
                        <div className="flex flex-col p-4 space-y-2">
                            {siteConfig.nav.map((item, index) => {
                                const isAnchor = item.href.startsWith('#') || item.href.startsWith('http');
                                const hasDropdown = !!item.dropdown;
                                const isDropdownOpen = mobileDropdownOpen === item.label;

                                return (
                                    <div key={index} className="border-b border-gray-50 last:border-0 pb-2 last:pb-0">
                                        <div className="flex items-center justify-between">
                                            {isAnchor && !hasDropdown ? (
                                                <a
                                                    href={item.href}
                                                    className="block py-3 px-4 text-slate-800 font-semibold hover:text-blue-600 w-full"
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    {item.label}
                                                </a>
                                            ) : !hasDropdown ? (
                                                <Link
                                                    to={item.href}
                                                    className="block py-3 px-4 text-slate-800 font-semibold hover:text-blue-600 w-full"
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    {item.label}
                                                </Link>
                                            ) : (
                                                <button
                                                    onClick={() => toggleMobileDropdown(item.label)}
                                                    className="flex items-center justify-between w-full py-3 px-4 text-slate-800 font-semibold hover:text-blue-600"
                                                >
                                                    {item.label}
                                                    <ChevronDown className={`w-5 h-5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                                                </button>
                                            )}
                                        </div>

                                        {/* Mobile Dropdown Items */}
                                        {hasDropdown && (
                                            <AnimatePresence>
                                                {isDropdownOpen && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        className="overflow-hidden bg-slate-50 rounded-lg"
                                                    >
                                                        {item.dropdown.map((subItem, subIdx) => {
                                                            const service = siteConfig.services?.find(s => s.title === subItem);
                                                            const industry = siteConfig.industries?.find(i => i.title === subItem);
                                                            let href = '#';
                                                            if (service) href = `/services/${service.id}`;
                                                            else if (industry) href = `/industries/${industry.id}`;

                                                            return (
                                                                <Link
                                                                    key={subIdx}
                                                                    to={href}
                                                                    className="block py-3 px-8 text-sm text-slate-600 hover:text-blue-600 font-medium border-l-2 border-transparent hover:border-blue-600 hover:bg-blue-50/50"
                                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                                >
                                                                    {subItem}
                                                                </Link>
                                                            );
                                                        })}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
