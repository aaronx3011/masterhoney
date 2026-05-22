'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function ContactSection() {
  const refs = useRef<(HTMLElement | null)[]>([]);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submit handler — connect to backend/email service
    setSubmitted(true);
  };

  const contactInfo = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
      ),
      label: 'Location',
      value: 'Fort Myers, Florida',
      sub: 'Southwest Florida',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
      ),
      label: 'Phone',
      value: '+1 (786) 277-1100',
      sub: 'Mon–Fri, 8am–5pm EST',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
      ),
      label: 'Email',
      value: 'abcmasterhoney@gmail.com',
      sub: 'We respond within 24 hours',
    },
  ];

  return (
    <section
      id="contact"
      className="bg-cream py-20 md:py-28 px-8 md:px-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          ref={(el) => { refs.current[0] = el as HTMLElement; }}
          className="reveal text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-honey/30 text-xs font-semibold text-honey font-body tracking-widest uppercase mb-4">
            Get in Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-brown-900 tracking-tight mb-4">
            Contact <span className="text-honey">Master Honey</span>
          </h2>
          <p className="text-brown-light text-base md:text-lg font-light max-w-xl mx-auto font-body leading-relaxed">
            Whether you&apos;re looking for retail honey, wholesale supply, pollination services, or queen bees — we&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Info panel */}
          <div
            ref={(el) => { refs.current[1] = el as HTMLElement; }}
            className="reveal-left lg:col-span-4 flex flex-col gap-6"
          >
            {/* Contact info cards */}
            {contactInfo.map((info) => (
              <div
                key={info.label}
                className="bg-white rounded-3xl p-6 border border-cream-200 shadow-sm flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-honey/10 flex items-center justify-center shrink-0 text-honey">
                  {info.icon}
                </div>
                <div>
                  <p className="text-brown-light text-xs font-body uppercase tracking-widest mb-1">{info.label}</p>
                  <p className="font-display font-semibold text-brown-900 text-sm">{info.value}</p>
                  <p className="text-brown-light text-xs font-body mt-0.5">{info.sub}</p>
                </div>
              </div>
            ))}

            {/* Dark CTA card */}
            <div className="honeycomb-bg rounded-3xl p-7 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="font-display text-xl font-bold text-white mb-3">Business Inquiries</h3>
                <p className="text-white/70 text-sm font-body leading-relaxed mb-5">
                  For wholesale partnerships, large-scale pollination contracts, or commercial honey supply agreements, contact our business development team directly.
                </p>
                <div className="flex items-center gap-2 text-honey-light text-sm font-semibold font-body">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  abcmasterhoney@gmail.com
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact form */}
          <div
            ref={(el) => { refs.current[2] = el as HTMLElement; }}
            className="reveal-right lg:col-span-8"
          >
            <div className="bg-white rounded-4xl p-8 md:p-10 border border-cream-200 shadow-sm">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center gap-6">
                  <div className="w-20 h-20 rounded-full bg-honey/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#C8860A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-brown-900 mb-2">Message Sent!</h3>
                    <p className="text-brown-light font-body text-base">Thank you for reaching out. Our team will respond within 24 hours.</p>
                  </div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-3 bg-honey text-white rounded-full font-display font-semibold text-sm hover:bg-honey-dark transition-all duration-300"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <h3 className="font-display text-2xl font-bold text-brown-900 mb-2">Send Us a Message</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-xs font-semibold text-brown-mid font-body uppercase tracking-wide">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="e.g. Marcus Johnson"
                        className="px-4 py-3 rounded-xl border border-cream-200 bg-cream text-brown-900 text-sm font-body placeholder:text-brown-light/60 focus:outline-none focus:border-honey focus:ring-2 focus:ring-honey/20 transition-all"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-xs font-semibold text-brown-mid font-body uppercase tracking-wide">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="px-4 py-3 rounded-xl border border-cream-200 bg-cream text-brown-900 text-sm font-body placeholder:text-brown-light/60 focus:outline-none focus:border-honey focus:ring-2 focus:ring-honey/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="phone" className="text-xs font-semibold text-brown-mid font-body uppercase tracking-wide">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formState.phone}
                        onChange={handleChange}
                        placeholder="+1 (239) 000-0000"
                        className="px-4 py-3 rounded-xl border border-cream-200 bg-cream text-brown-900 text-sm font-body placeholder:text-brown-light/60 focus:outline-none focus:border-honey focus:ring-2 focus:ring-honey/20 transition-all"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="inquiryType" className="text-xs font-semibold text-brown-mid font-body uppercase tracking-wide">
                        Inquiry Type *
                      </label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        required
                        value={formState.inquiryType}
                        onChange={handleChange}
                        className="px-4 py-3 rounded-xl border border-cream-200 bg-cream text-brown-900 text-sm font-body focus:outline-none focus:border-honey focus:ring-2 focus:ring-honey/20 transition-all appearance-none"
                      >
                        <option value="">Select a topic...</option>
                        <option value="retail">Retail Honey Purchase</option>
                        <option value="wholesale">Wholesale Inquiry</option>
                        <option value="pollination">Pollination Services</option>
                        <option value="queen-bees">Queen Bee Orders</option>
                        <option value="general">General Question</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-xs font-semibold text-brown-mid font-body uppercase tracking-wide">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Tell us about your needs, volume requirements, or questions..."
                      className="px-4 py-3 rounded-xl border border-cream-200 bg-cream text-brown-900 text-sm font-body placeholder:text-brown-light/60 focus:outline-none focus:border-honey focus:ring-2 focus:ring-honey/20 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="self-start flex items-center gap-3 bg-honey text-white pl-8 pr-3 py-3.5 rounded-full font-display font-semibold text-sm hover:bg-honey-dark transition-all duration-300 shadow-lg shadow-honey/20 group mt-2"
                  >
                    Send Message
                    <span className="bg-white/20 text-white p-2 rounded-full transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}