'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const [year, setYear] = useState('');

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-gray-200 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Logo + Brand */}
        <Link href="/homepage" className="flex items-center">
          <Image
            src="/assets/images/LOGO_MASTER_HONEY-removebg-preview-1774289449836.png"
            alt="Master Honey Logo"
            width={140}
            height={60}
            className="object-contain"
          />
        </Link>

        {/* Links */}
        <div className="flex items-center gap-6 flex-wrap justify-center">
          {[
            { label: 'About', href: '#about' },
            { label: 'Services', href: '#services' },
            { label: 'Innovation', href: '#innovation' },
            { label: 'Contact', href: '#contact' },
          ].map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-medium text-gray-500 hover:text-honey-light transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
          <span className="text-gray-300">·</span>
          <span className="text-sm text-gray-400">Privacy</span>
          <span className="text-sm text-gray-400">Terms</span>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 font-body">
          © {year} Master Honey · Fort Myers, FL
        </p>
      </div>
    </footer>
  );
}