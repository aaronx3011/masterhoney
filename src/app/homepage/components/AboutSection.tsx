'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

const stats = [
{ value: '15+', label: 'Years in Apiculture' },
{ value: '200+', label: 'Active Hive Colonies' },
{ value: '4', label: 'Core Services' },
{ value: 'SW FL', label: 'Regional Coverage' }];


export default function AboutSection() {
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
      { threshold: 0.1 }
    );

    refs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="bg-cream-dark py-20 md:py-28 px-8 md:px-16 overflow-hidden">
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left: Image stack */}
          <div
            ref={(el) => {refs.current[0] = el as HTMLElement;}}
            className="reveal-left lg:col-span-5 relative">
            
            {/* Main image */}
            <div className="relative rounded-4xl overflow-hidden h-[480px] shadow-2xl shadow-brown-900/20">
              <AppImage
                src="https://images.unsplash.com/photo-1569393875125-38ebacc5288d"
                alt="Professional beekeeper in protective gear inspecting honeycomb frames in Florida apiary"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 40vw" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-brown-900/40 to-transparent" />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-4 md:right-4 bg-white rounded-2xl p-5 shadow-xl shadow-brown-900/15 border border-cream-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-honey/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C8860A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                </div>
                <div>
                  <p className="font-display font-bold text-brown-900 text-lg">Fort Myers, FL</p>
                  <p className="text-brown-light text-xs font-body">Southwest Florida</p>
                </div>
              </div>
            </div>

            {/* Small accent image */}
            <div className="absolute -top-4 -left-4 w-32 h-32 rounded-2xl overflow-hidden border-4 border-cream shadow-lg hidden md:block">
              <AppImage
                src="https://images.unsplash.com/photo-1659347663430-cdc6415549e1"
                alt="Golden honeycomb close-up showing hexagonal wax cells filled with honey"
                fill
                className="object-cover"
                sizes="128px" />
              
            </div>
          </div>

          {/* Right: Content */}
          <div
            ref={(el) => {refs.current[1] = el as HTMLElement;}}
            className="reveal-right lg:col-span-7 flex flex-col gap-8">
            
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full border border-honey/30 text-xs font-semibold text-honey font-body tracking-widest uppercase mb-5">
                About Us
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-brown-900 tracking-tight leading-tight mb-6">
                A culinary and agricultural
                <span className="text-honey"> staple in Southwest Florida.</span>
              </h2>
              <p className="text-brown-mid text-lg font-light font-body leading-relaxed mb-4">
                Master Honey is a Fort Myers, Florida-based company dedicated to bees, beekeeping, and the full spectrum of apiculture-related solutions. We combine deep practical knowledge with a forward-oriented mindset to serve both individual customers and commercial partners.
              </p>
              <p className="text-brown-light text-base font-light font-body leading-relaxed mb-6">
                From managing hives and producing premium honey to supporting agricultural operations with expert pollination services, our work is rooted in the rhythms of nature and the demands of modern agriculture. We believe that healthy bees mean healthier ecosystems — and better business.
              </p>
            </div>

            {/* Feature list */}
            <ul className="space-y-3">
              {[
              'Rooted in practical beekeeping experience across Florida',
              'Committed to quality at every stage — from hive to jar',
              'Supporting agriculture, retail, and wholesale sectors',
              'A future-oriented company investing in apiculture innovation'].
              map((item) =>
              <li key={item} className="flex items-start gap-3 text-brown-mid font-body text-sm">
                  <div className="w-5 h-5 rounded-full bg-honey/15 flex items-center justify-center shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#C8860A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
                  </div>
                  {item}
                </li>
              )}
            </ul>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4 pt-6 border-t border-cream-200">
              {stats.map((stat) =>
              <div key={stat.label} className="text-center">
                  <p className="font-display text-2xl font-bold text-honey">{stat.value}</p>
                  <p className="text-brown-light text-xs font-body mt-1">{stat.label}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

}