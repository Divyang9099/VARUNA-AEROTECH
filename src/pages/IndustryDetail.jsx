import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { siteConfig } from '../siteConfig';
import {
    Home,
    ChevronRight,
    ArrowLeft,
    Calendar,
    User,
    Clock,
    Share2,
    CheckCircle,
    Target
} from 'lucide-react';
import { motion } from 'framer-motion';


const IndustryDetail = () => {
    const { id } = useParams();
    const industry = siteConfig.industries.find(ind => ind.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!industry) {
        return <Navigate to="/#industries" replace />;
    }

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: `${industry.title} - Varuna Aerotech`,
                text: industry.description,
                url: window.location.href,
            }).catch(console.error);
        } else {
            // Fallback or simple alert
            alert("Link copied to clipboard!");
            navigator.clipboard.writeText(window.location.href);
        }
    };

    return (
        <div className="font-sans text-slate-900 bg-gray-50 min-h-screen">
            {/* Nav padding spacer if Navbar is fixed, though the requested snippet doesn't typically show a full navbar, 
                we likely still want the site navbar. The snippet starts with breadcrumbs. 
                I will add a top margin to account for the fixed navbar. */}
            <div className="pt-24"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                {/* Breadcrumb */}
                <motion.nav
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center space-x-2 text-sm text-gray-600 mb-6"
                    aria-label="Breadcrumb"
                >
                    <Link to="/" className="flex items-center hover:text-blue-600 transition-colors" aria-label="Home">
                        <Home className="w-4 h-4" />
                    </Link>
                    <div className="flex items-center space-x-2">
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                        <Link to="/industries" className="hover:text-blue-600 transition-colors">
                            Industries
                        </Link>
                    </div>
                    <div className="flex items-center space-x-2">
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-900 font-medium" aria-current="page">
                            {industry.title}
                        </span>
                    </div>
                </motion.nav>

                {/* Back Link */}
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <Link
                        to="/industries"
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors mb-8 font-medium"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Industries
                    </Link>
                </motion.div>

                {/* Article Card */}
                <motion.article
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
                >
                    {/* Cover Image */}
                    <div className="aspect-video overflow-hidden relative">
                        <img
                            alt={`Cover image for ${industry.title}`}
                            className="w-full h-full object-cover"
                            src={industry.image}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent"></div>
                    </div>

                    <div className="p-5 sm:p-8 md:p-12">
                        {/* Title */}
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-6 leading-tight" style={{letterSpacing: '-0.03em'}}>
                            {industry.title}
                        </h1>

                        {/* Metadata Bar */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 pb-8 border-b border-gray-200 gap-4">
                            <div className="flex items-center gap-4 sm:gap-6 text-sm sm:text-base text-gray-600 flex-wrap">
                                <div className="flex items-center gap-2">
                                    <User className="w-5 h-5 text-blue-600" />
                                    <span>Varuna Aerotech</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Target className="w-5 h-5 text-blue-600" />
                                    <span>Industry Solutions</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-5 h-5 text-blue-600" />
                                    <span>Comprehensive Guide</span>
                                </div>
                            </div>
                            <button
                                onClick={handleShare}
                                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors font-medium"
                            >
                                <Share2 className="w-5 h-5" />
                                Share
                            </button>
                        </div>

                        {/* Main Content Area - Styled like 'prose' */}
                        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">

                            {/* Short Description Intro */}
                            <p className="font-medium text-lg sm:text-xl text-slate-800 border-l-4 border-blue-500 pl-4 py-1 bg-blue-50/50 rounded-r-lg">
                                {industry.description}
                            </p>

                            {/* Overview Section */}
                            <div className="mt-8">
                                <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4">{industry.overview.title}</h3>
                                <p className="text-gray-700 mb-6">
                                    {industry.overview.content}
                                </p>
                                {/* Overview Image - Inline */}
                                <div className="my-8 rounded-xl overflow-hidden shadow-md">
                                    <img
                                        src={industry.overview.image}
                                        alt="Overview Visual"
                                        className="w-full h-auto object-cover max-h-[400px]"
                                    />
                                </div>
                            </div>

                            <hr className="border-gray-200 my-10" />

                            {/* Applications (Bulleted or Styled) */}
                            <div>
                                <h4 className="text-xl font-bold text-blue-900 mb-2">Key Applications</h4>
                                <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-sky-400 rounded-full mb-6"></div>
                                <ul className="space-y-4 list-none pl-0">
                                    {industry.applications.map((app, idx) => (
                                        <li key={idx} className="flex gap-4 items-start bg-slate-50 p-4 rounded-lg border border-slate-100">
                                            <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                                <Target className="w-3.5 h-3.5" />
                                            </div>
                                            <div>
                                                <strong className="block text-slate-900 mb-1">{app.title}</strong>
                                                <span className="text-slate-600 text-sm">{app.description}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <hr className="border-gray-200 my-10" />

                            {/* Benefits */}
                            <div className="mb-12">
                                <h4 className="text-xl font-bold text-blue-900 mb-2">Key Benefits</h4>
                                <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-sky-400 rounded-full mb-6"></div>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none pl-0">
                                    {industry.benefits.map((benefit, idx) => (
                                        <li key={idx} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                                            <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                            <span className="text-slate-700 font-medium">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Our Process Section */}
                            <div className="mb-12 pt-8 border-t border-slate-100">
                                <h4 className="text-xl font-bold text-blue-900 mb-2">Our Process</h4>
                                <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-sky-400 rounded-full mb-8"></div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {[
                                        { title: "Site Analysis", desc: "Understanding industry-specific constraints." },
                                        { title: "Smart Planning", desc: "Optimization of flight & sensor parameters." },
                                        { title: "Precision Capture", desc: "High-fidelity industrial data acquisition." },
                                        { title: "Cloud Insights", desc: "Digital twin & actionable severity reports." }
                                    ].map((step, idx) => (
                                        <div key={idx} className="relative p-6 bg-slate-50 rounded-2xl border border-white shadow-sm hover:shadow-md transition-shadow">
                                            <span className="absolute -top-3 -left-3 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                                                {idx + 1}
                                            </span>
                                            <h5 className="font-bold text-slate-900 mb-2 mt-2">{step.title}</h5>
                                            <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <hr className="border-gray-200 my-10" />

                            {/* CTA / Conclusion */}
                            <div className="bg-blue-50 rounded-xl p-8 border border-blue-100 text-center">
                                <h4 className="text-xl font-bold text-blue-900 mb-3">Ready to optimize your assets?</h4>
                                <p className="mb-6 text-blue-800/80">
                                    Our experts are ready to help you implement these solutions for your specific needs.
                                </p>
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 duration-200"
                                >
                                    Contact Us Today
                                </Link>
                            </div>

                        </div>
                    </div>

                    {/* Footer of the card */}
                    <div className="bg-gray-50 px-8 py-6 border-t border-gray-200 flex justify-between items-center text-sm text-gray-500">
                        <span>Varuna Aerotech Industry Intelligence</span>
                        <span>&copy; {new Date().getFullYear()}</span>
                    </div>
                </motion.article>
            </div>
        </div>
    );
};

export default IndustryDetail;
