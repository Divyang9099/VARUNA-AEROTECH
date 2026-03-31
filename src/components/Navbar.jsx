import React, { useState, useEffect } from 'react';
import { siteConfig } from '../siteConfig';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState("Home");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);
    const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(null); 
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const toggleMobileDropdown = (label) => {
        setMobileDropdownOpen(mobileDropdownOpen === label ? null : label);
    };

    const handleDesktopClick = (e, item) => {
        if (item.dropdown && desktopDropdownOpen !== item.label) {
            e.preventDefault();
            setDesktopDropdownOpen(item.label);
        }
    };

    const isHome = location.pathname === '/';
    const isTransparent = isHome && !scrolled && !isMobileMenuOpen;

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isTransparent ? 'bg-transparent py-2' : 'bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm py-1'}`}>
            {/* Cinematic white glow behind logo when transparent */}
            <div 
                className={`absolute top-0 left-0 w-72 h-32 bg-white/70 blur-[50px] rounded-full -translate-x-10 -translate-y-10 transition-opacity duration-700 pointer-events-none ${isTransparent ? 'opacity-100' : 'opacity-0'}`} 
            />
            
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3 relative z-10">
                <div className="flex items-center gap-3">
                    <Link 
                        to="/" 
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="transition-all duration-300"
                    >
                        <img 
                            src={siteConfig.logo} 
                            alt={siteConfig.name} 
                            className="h-10 md:h-12 w-auto transition-all duration-300" 
                        />
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-2 ml-auto">
                    {siteConfig.nav.map((item, index) => {
                        const isActive = location.pathname === item.href ||
                            (item.label === "Services" && location.pathname.startsWith("/services/")) ||
                            (item.label === "Industries" && location.pathname.startsWith("/industries/"));

                        const textClass = isTransparent 
                            ? 'text-white/95 hover:bg-white/10' 
                            : 'text-slate-700 hover:bg-blue-600 hover:text-white';
                        const activeClass = isTransparent 
                            ? 'bg-white/20 text-white backdrop-blur-sm' 
                            : 'bg-blue-600 text-white';

                        const className = `flex items-center gap-1 text-sm font-bold px-4 py-2 rounded-md transition-all duration-300 ${isActive ? activeClass : textClass}`;

                        const linkContent = (
                            <>
                                {item.label}
                                {item.dropdown && (
                                    <ChevronDown className={`w-4 h-4 transition-transform ${isActive ? '' : 'group-hover:rotate-180'}`} />
                                )}
                            </>
                        );

                        const isExternal = item.href.startsWith('http');

                        return (
                            <div
                                key={index}
                                className="relative group"
                                onMouseEnter={() => setDesktopDropdownOpen(item.label)}
                                onMouseLeave={() => setDesktopDropdownOpen(null)}
                            >
                                {isExternal ? (
                                    <a href={item.href} target="_blank" rel="noopener noreferrer" className={className}>
                                        {linkContent}
                                    </a>
                                ) : (
                                    <Link
                                        to={item.href}
                                        onClick={(e) => {
                                            handleDesktopClick(e, item);
                                            setActiveLink(item.label);
                                            setIsMobileMenuOpen(false);
                                        }}
                                        className={className}
                                    >
                                        {linkContent}
                                    </Link>
                                )}

                                {/* Desktop Dropdown */}
                                {item.dropdown && (
                                    <div className={`absolute top-full right-0 w-72 pt-2 transition-all duration-200 ease-out ${desktopDropdownOpen === item.label
                                        ? 'opacity-100 translate-y-0 visible'
                                        : 'opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible'
                                        }`}>
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
                                                        className="block px-6 py-3 text-sm font-medium text-slate-700 hover:bg-blue-600 hover:text-white transition-colors"
                                                        onClick={() => {
                                                            setActiveLink(subItem);
                                                            setDesktopDropdownOpen(null);
                                                        }}
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
                    className={`md:hidden p-2 transition-colors ${isTransparent ? 'text-white hover:text-white/80' : 'text-slate-700 hover:text-blue-600'}`}
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
                        className="md:hidden bg-white border-t border-gray-100 shadow-xl max-h-[80vh] overflow-y-auto"
                    >
                        <div className="flex flex-col p-4 space-y-2">
                            {siteConfig.nav.map((item, index) => {
                                const isAnchor = item.href.includes('#') || item.href.startsWith('http');
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
