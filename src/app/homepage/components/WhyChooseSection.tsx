'use client';

import React, { useEffect, useRef } from 'react';

interface Strength {
  icon: React.ReactNode;
  title: string;
  description: string;
  colSpan: string;
  accent: string;
}

export default function WhyChooseSection() {
  const refs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('active');
        });
      },
      { threshold: 0.08 }
    );
    refs.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--glow-x', `${x}px`);
    e.currentTarget.style.setProperty('--glow-y', `${y}px`);
  };

  const strengths: Strength[] = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
      ),
      title: 'Apiculture Focus',
      description: 'We live and breathe bees. Our entire operation is built around the science and craft of apiculture — from hive biology to honey chemistry.',
      colSpan: 'md:col-span-1',
      accent: 'border-honey/20 hover:border-honey/50',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2"/><path d="M12 8v4l3 3"/></svg>
      ),
      title: 'Premium Honey Quality',
      description: 'Every jar is a reflection of our commitment — raw, unfiltered, and traceable to specific Florida apiaries. No blends, no additives.',
      colSpan: 'md:col-span-2',
      accent: 'border-honey/20 hover:border-honey/50',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="20" height="14" x="2" y="5" rx="2"/><path d="M2 10h20"/></svg>
      ),
      title: 'Retail &amp; Wholesale Ready',
      description: 'Whether you are a home consumer or a large distributor, our flexible supply model accommodates your volume and packaging requirements.',
      colSpan: 'md:col-span-1',
      accent: 'border-amber-700/20 hover:border-amber-700/50',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg>
      ),
      title: 'Pollination Expertise',
      description: 'Our managed pollination programs are tailored to Florida\'s diverse agricultural landscape — from citrus groves to vegetable farms.',
      colSpan: 'md:col-span-1',
      accent: 'border-nature-green/20 hover:border-nature-green/40',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg>
      ),
      title: 'Queen Bee Solutions',
      description: 'Locally raised queens selected for Florida\'s climate — gentle, productive, and resilient. Supporting beekeepers in maintaining strong, healthy colonies.',
      colSpan: 'md:col-span-1',
      accent: 'border-honey/20 hover:border-honey/50',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2M7.5 13a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m9 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/></svg>
      ),
      title: 'Innovation &amp; Long-Term Vision',
      description: 'We invest in the future of beekeeping — including AI-powered tools for producers — because we believe technology and nature can grow together.',
      colSpan: 'md:col-span-2',
      accent: 'border-honey/30 hover:border-honey/60',
    },
  ];

  return (
    <section className="bg-cream-dark py-20 md:py-28 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          ref={(el) => { refs.current[0] = el as HTMLElement; }}
          className="reveal mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full border border-honey/30 text-xs font-semibold text-honey font-body tracking-widest uppercase mb-4">
              Our Strengths
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-brown-900 tracking-tight leading-tight">
              Why Choose<br />
              <span className="text-honey">Master Honey</span>
            </h2>
          </div>
          <p className="text-brown-light text-base md:text-lg font-light max-w-sm font-body leading-relaxed">
            Six reasons why farmers, consumers, and beekeepers trust us as their apiculture partner.
          </p>
        </div>

        {/* Asymmetric bento */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {strengths.map((s, i) => (
            <div
              key={s.title}
              ref={(el) => { refs.current[i + 1] = el as HTMLElement; }}
              className={`reveal reveal-delay-${Math.min((i + 1) * 100, 400)} ${s.colSpan} bento-card-glow rounded-4xl border bg-white ${s.accent} transition-all duration-400 p-8 flex flex-col gap-5 spring-hover`}
              onMouseMove={handleCardMouseMove}
            >
              <div className="w-12 h-12 rounded-2xl bg-honey/10 flex items-center justify-center text-honey">
                {s.icon}
              </div>
              <div>
                <h3
                  className="font-display text-xl font-bold text-brown-900 mb-2"
                  dangerouslySetInnerHTML={{ __html: s.title }}
                />
                <p className="text-brown-light text-sm font-light font-body leading-relaxed">
                  {s.description}
                </p>
              </div>
              <div className="glow-overlay" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}