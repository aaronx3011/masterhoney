'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

export default function InnovationSection() {
  const refs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.08 }
    );

    refs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const aiFeatures = [
  {
    icon:
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>,

    title: 'Producer Q&A',
    desc: 'Instant answers to practical questions from honey producers and beekeepers.'
  },
  {
    icon:
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>,

    title: 'Forms &amp; Records',
    desc: 'Guidance on operational forms, regulatory records, and documentation requirements.'
  },
  {
    icon:
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" /></svg>,

    title: 'Knowledge Base',
    desc: 'Structured access to beekeeping knowledge, best practices, and industry standards.'
  },
  {
    icon:
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg>,

    title: 'Fast Support',
    desc: 'Rapid assistance for common producer needs, saving time and reducing operational friction.'
  }];


  return (
    <section
      id="innovation"
      className="bg-cream py-20 md:py-28 px-8 md:px-16">
      
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div
          ref={(el) => {refs.current[0] = el as HTMLElement;}}
          className="reveal text-center mb-16">
          
          <span className="inline-block px-4 py-1.5 rounded-full border border-honey/30 text-xs font-semibold text-honey font-body tracking-widest uppercase mb-4">
            Future Initiative
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-brown-900 tracking-tight mb-4">
            Innovation in Progress
          </h2>
          <p className="text-brown-light text-base md:text-lg font-light max-w-2xl mx-auto font-body leading-relaxed">
            Master Honey is building the future of beekeeping support — one intelligent system at a time.
          </p>
        </div>

        {/* Main innovation card */}
        <div
          ref={(el) => {refs.current[1] = el as HTMLElement;}}
          className="reveal relative rounded-4xl overflow-hidden bg-brown-900 border border-white/10 shadow-2xl shadow-brown-950/40">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">

            {/* Left: Image */}
            <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-full">
              <AppImage
                src="/assets/images/beeevr-1774454120950.png"
                alt="Bee wearing a VR headset representing AI-powered beekeeping innovation"
                fill
                className="object-cover object-center img-zoom"
                sizes="(max-width: 1024px) 100vw, 40vw" />
              
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-brown-900/80 hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-brown-900/80 to-transparent lg:hidden" />

              {/* "In Development" badge */}
              <div className="absolute top-5 left-5 z-10">
                <div className="flex items-center gap-2 glass-panel px-4 py-2 rounded-full pulse-glow">
                  <span className="w-2 h-2 rounded-full bg-honey-light animate-pulse" />
                  <span className="text-white text-xs font-semibold font-body tracking-wide">In Development</span>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-center">
              <div className="mb-6">
                <div className="inline-flex items-center gap-3 bg-honey/15 border border-honey/20 rounded-full px-4 py-2 mb-6">
                  <span className="text-honey-light text-xs font-semibold font-body tracking-wide uppercase">AI-Powered Beekeeping Support</span>
                </div>

                <h3 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                  The Future of<br />
                  <span className="text-honey-gradient">Beekeeper Intelligence</span>
                </h3>

                <p className="text-white/70 font-body text-base leading-relaxed mb-4">
                  Master Honey is currently developing an AI-based support system designed specifically for beekeepers and honey producers. This intelligent platform will provide structured, reliable guidance on the operational realities of apiculture — from daily hive management to regulatory compliance.
                </p>

                <p className="text-white/50 font-body text-sm leading-relaxed mb-8 border-l-2 border-honey/40 pl-4 italic">
                  This AI initiative is currently under development and represents a future innovation strategy — not yet the company&apos;s primary commercial activity. It reflects our long-term commitment to advancing the beekeeping sector through technology.
                </p>
              </div>

              {/* Feature grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {aiFeatures.map((feature) =>
                <div
                  key={feature.title}
                  className="flex items-start gap-3 rounded-2xl bg-white/5 border border-white/10 p-4">
                  
                    <div className="w-9 h-9 rounded-full bg-honey/15 flex items-center justify-center shrink-0 text-honey-light">
                      {feature.icon}
                    </div>
                    <div>
                      <p className="font-display font-semibold text-white text-sm mb-1" dangerouslySetInnerHTML={{ __html: feature.title }} />
                      <p className="text-white/60 text-xs font-body leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}