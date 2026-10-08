import React, { useState } from 'react';
import { PageId } from '../types';
import { Shield, Menu, X, ArrowRight, Lock } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'why-private', label: 'Why Private' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#fafaf9]/95 backdrop-blur-md border-b border-stone-200/80 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand / Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-800 rounded-sm"
          aria-label="AgentI Home"
        >
          <div className="w-10 h-10 rounded-sm bg-stone-900 text-stone-100 flex items-center justify-center font-serif text-xl tracking-wider font-semibold border border-stone-800 transition-colors group-hover:bg-emerald-950">
            AI
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl font-semibold tracking-tight text-stone-900 group-hover:text-emerald-950 transition-colors">
              AgentI
            </span>
            <span className="text-[11px] uppercase tracking-wider text-stone-500 font-medium">
              Private AI · Ireland
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`transition-colors py-1 relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-800 rounded-sm ${
                  isActive
                    ? 'text-stone-900 font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-900 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => handleNavClick('contact')}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-900 hover:bg-emerald-950 text-white text-sm font-medium rounded-sm transition-all shadow-xs hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-800"
          >
            <span>Book an install</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-700 hover:text-stone-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-800 rounded-sm"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-stone-200 bg-[#fafaf9] px-4 pt-3 pb-6 shadow-lg">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left py-2 px-3 text-base font-medium rounded-sm transition-colors ${
                    isActive
                      ? 'bg-stone-200/70 text-emerald-950 font-semibold'
                      : 'text-stone-700 hover:bg-stone-100 hover:text-stone-900'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
            <div className="pt-2">
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-emerald-900 text-white font-medium text-sm rounded-sm hover:bg-emerald-950 transition-colors"
              >
                <span>Book an install</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
