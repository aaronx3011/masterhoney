'use client';

import React, { useEffect, useRef } from 'react';

export default function MissionVisionSection() {
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
    <section className="honeycomb-bg py-20 md:py-28 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          ref={(el) => { refs.current[0] = el as HTMLElement; }}
          className="reveal text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-honey/30 text-xs font-semibold text-honey font-body tracking-widest uppercase mb-4">
            Purpose &amp; Direction
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight">
            Mission &amp; Vision
          </h2>
        </div>

        {/* Mission + Vision cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Mission */}
          <div
            ref={(el) => { refs.current[1] = el as HTMLElement; }}
            className="reveal reveal-delay-100 relative rounded-4xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 md:p-10 overflow-hidden group"
          >
            {/* Decorative hex */}
            <div className="absolute top-0 right-0 w-40 h-40 opacity-10 pointer-events-none" aria-hidden="true">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points="50,5 93,27.5 93,72.5 50,95 7,72.5 7,27.5" fill="#F5A623"/>
              </svg>
            </div>

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-full bg-honey/20 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
              </div>
              <span className="text-honey-light text-xs font-semibold font-body tracking-widest uppercase block mb-3">Our Mission</span>
              <h3 className="font-display text-2xl font-bold text-white mb-4 leading-snug">
                Supporting Apiculture Through Quality &amp; Innovation
              </h3>
              <p className="text-white/70 font-body text-base leading-relaxed">
                To support and strengthen the apiculture sector by delivering high-quality honey products, reliable pollination services, and expert beekeeping solutions — while fostering innovation that helps producers, farmers, and the broader agricultural community thrive. We are committed to the health of bees and the sustainability of their ecosystems.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div
            ref={(el) => { refs.current[2] = el as HTMLElement; }}
            className="reveal reveal-delay-200 relative rounded-4xl border border-honey/20 bg-honey/10 backdrop-blur-sm p-8 md:p-10 overflow-hidden group"
          >
            {/* Decorative hex */}
            <div className="absolute bottom-0 left-0 w-40 h-40 opacity-10 pointer-events-none" aria-hidden="true">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points="50,5 93,27.5 93,72.5 50,95 7,72.5 7,27.5" fill="#C8860A"/>
              </svg>
            </div>

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-full bg-honey/30 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
              </div>
              <span className="text-honey-light text-xs font-semibold font-body tracking-widest uppercase block mb-3">Our Vision</span>
              <h3 className="font-display text-2xl font-bold text-white mb-4 leading-snug">
                A Growing Reference in Honey &amp; Beekeeping
              </h3>
              <p className="text-white/70 font-body text-base leading-relaxed">
                To become a recognized and trusted reference in the beekeeping and honey industry across Florida and beyond — combining generations of tradition with the highest standards of quality, a deep commitment to environmental sustainability, and forward-looking innovation that positions Master Honey as a leader in modern apiculture.
              </p>
            </div>
          </div>
        </div>

        {/* Values strip */}
        <div
          ref={(el) => { refs.current[3] = el as HTMLElement; }}
          className="reveal reveal-delay-300 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { icon: '🌿', label: 'Sustainability', desc: 'Eco-conscious practices' },
            { icon: '⭐', label: 'Quality', desc: 'Uncompromised standards' },
            { icon: '🤝', label: 'Partnership', desc: 'Built on trust' },
            { icon: '🔬', label: 'Innovation', desc: 'Future-ready thinking' },
          ].map((val) => (
            <div key={val.label} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
              <span className="text-2xl block mb-2" role="img" aria-label={val.label}>{val.icon}</span>
              <p className="font-display font-semibold text-white text-sm mb-1">{val.label}</p>
              <p className="text-white/50 text-xs font-body">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}