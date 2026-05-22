'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Innovation', href: '#innovation' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white shadow-lg shadow-black/10 border-b border-gray-200'
          : 'bg-white border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/homepage" className="flex items-center gap-3 group">
          <span className="transition-transform duration-300 group-hover:scale-105 inline-flex">
            <AppLogo
              src="/assets/images/LOGO_MASTER_HONEY-removebg-preview-1774289449836.png"
              size={64}
            />
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-medium text-gray-700 hover:text-honey transition-colors duration-200 focus-visible:outline-none focus-visible:text-honey"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleNavClick('#contact')}
            className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-honey text-white rounded-full font-display font-semibold text-sm hover:bg-honey-dark transition-all duration-300 shadow-lg shadow-honey/20"
          >
            Get in Touch
          </button>
          {/* Mobile menu toggle */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="text-left text-base font-medium text-gray-700 hover:text-honey transition-colors py-2 border-b border-gray-100"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('#contact')}
            className="mt-2 px-6 py-3 bg-honey text-white rounded-full font-display font-semibold text-sm text-center"
          >
            Get in Touch
          </button>
        </div>
      )}
    </header>
  );
}