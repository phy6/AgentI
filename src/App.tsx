import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { PricingPage } from './pages/PricingPage';
import { WhyPrivatePage } from './pages/WhyPrivatePage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const getPageFromHash = (): PageId => {
    const hash = window.location.hash.replace('#', '').trim().toLowerCase();
    if (['home', 'services', 'pricing', 'why-private', 'contact'].includes(hash)) {
      return hash as PageId;
    }
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState<PageId>(getPageFromHash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(getPageFromHash());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafaf9] text-stone-900 selection:bg-emerald-900/15 selection:text-emerald-950 font-sans">
      {/* Fixed top navigation bar */}
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />

      {/* Main Page Body */}
      <main className="flex-1 pt-24 sm:pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {currentPage === 'home' && <HomePage onNavigate={navigateTo} />}
          {currentPage === 'services' && <ServicesPage onNavigate={navigateTo} />}
          {currentPage === 'pricing' && <PricingPage onNavigate={navigateTo} />}
          {currentPage === 'why-private' && <WhyPrivatePage onNavigate={navigateTo} />}
          {currentPage === 'contact' && <ContactPage />}
        </div>
      </main>

      {/* Consistent footer on every page */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
