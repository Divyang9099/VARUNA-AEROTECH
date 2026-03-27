import React, { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';
import ScrollToTop from './components/ScrollToTop';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const IndustryDetail = lazy(() => import('./pages/IndustryDetail'));
const IndustriesPage = lazy(() => import('./pages/IndustriesPage'));
const Contact = lazy(() => import('./pages/Contact'));
const FeatureDetail = lazy(() => import('./pages/FeatureDetail'));

function App() {
  const [initLoading, setInitLoading] = useState(true);
  useEffect(() => {
    // Warm up the backend as soon as the app loads to avoid delays on the contact form
    const warmUpBackend = async () => {
      try {
        await fetch('https://varuna-backend-3mco.onrender.com/');
        console.log('🚀 Backend warm-up initiated...');
      } catch (err) {
        console.log('⏳ Backend is waking up...');
      }
    };
    warmUpBackend();

    const timer = setTimeout(() => {
      setInitLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      {initLoading && <Loader />}
      <div className={`min-h-screen bg-white font-sans text-slate-900 flex flex-col overflow-x-hidden ${initLoading ? 'hidden' : ''}`}>
        <Navbar />
        <main className="flex-grow relative">
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services/:id" element={<ServiceDetail />} />
              <Route path="/industries" element={<IndustriesPage />} />
              <Route path="/industries/:id" element={<IndustryDetail />} />
              <Route path="/features/:id" element={<FeatureDetail />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
