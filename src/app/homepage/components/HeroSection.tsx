'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-screen bg-brown-900 overflow-hidden"
      aria-label="Hero">
      
      {/* Background Image */}
      <div className="absolute inset-0 animate-enter-scale">
        <AppImage
          src="https://images.unsplash.com/photo-1702495464926-0085637df194"
          alt="Beekeeper tending honeybee hives in golden sunlight with honeycomb frames"
          fill
          priority
          className="object-cover object-center opacity-85 img-zoom"
          sizes="100vw" />
        
        {/* Multi-layer gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-brown-950/90 via-brown-900/40 to-brown-900/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-brown-950/60 via-transparent to-transparent" />
      </div>

      {/* Floating honey drop decoration */}
      <div className="absolute top-32 right-16 hidden lg:block float-bee opacity-60 pointer-events-none">
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M32 8C32 8 18 22 18 36C18 44.837 24.268 52 32 52C39.732 52 46 44.837 46 36C46 22 32 8 32 8Z" fill="#F5A623" fillOpacity="0.7" />
          <path d="M32 16C32 16 22 27 22 36C22 42.627 26.477 48 32 48C37.523 48 42 42.627 42 36C42 27 32 16 32 16Z" fill="#C8860A" fillOpacity="0.5" />
        </svg>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full min-h-screen flex flex-col justify-end pb-16 md:pb-24 px-8 md:px-16 pt-24 pointer-events-none">
        <div className="pointer-events-auto max-w-5xl">

          {/* Location badge */}
          <div className="flex flex-wrap items-center gap-3 mb-8 animate-enter delay-100">
            <span className="glass-panel px-5 py-2.5 rounded-full text-sm font-medium text-white tracking-wide font-body flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-honey-light animate-pulse" />
              Fort Myers, Florida
            </span>
            <span className="glass-panel px-5 py-2.5 rounded-full text-sm font-medium text-white/90 font-body">
              Apiculture · Honey · Pollination
            </span>
          </div>

          {/* Main headline */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.0] mb-6 animate-enter delay-200 max-w-4xl">
            Nature&apos;s Finest<br />
            <span className="text-honey-gradient">Honey &amp; Bees</span>
          </h1>

          {/* Subheadline */}
          <p className="text-white/80 text-lg md:text-xl font-light max-w-2xl leading-relaxed font-body mb-4 animate-enter delay-300">
            Master Honey is dedicated to bees, apiculture, premium honey production, 
            expert pollination services, and quality queen bees — rooted in tradition, 
            driven by innovation.
          </p>

          <p className="text-honey-light/90 text-sm md:text-base font-medium font-body mb-10 animate-enter delay-400 italic">
            &ldquo;Quality, Pollination, and Innovation from the World of Bees.&rdquo;
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 animate-enter delay-500">
            <button
              onClick={() => handleScroll('#services')}
              className="flex items-center gap-3 bg-honey text-white pl-8 pr-3 py-3 rounded-full font-display font-semibold text-sm hover:bg-honey-dark transition-all duration-300 shadow-xl shadow-honey/30 group">
              
              Our Services
              <span className="bg-white/20 text-white p-2 rounded-full transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
              </span>
            </button>

            <button
              onClick={() => handleScroll('#contact')}
              className="flex items-center gap-3 glass-panel text-white pl-8 pr-3 py-3 rounded-full font-display font-medium text-sm hover:bg-white/20 transition-all duration-300 group">
              
              Contact Us
              <span className="glass-panel-dark text-white p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>
              </span>
            </button>

            <button
              onClick={() => handleScroll('#about')}
              className="text-white/70 text-sm font-medium font-body hover:text-honey-light transition-colors duration-200 underline underline-offset-4">
              
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-enter delay-700 flex flex-col items-center gap-2">
        <span className="text-white/40 text-xs font-body tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>);

}