'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  tag: string;
  colSpan: string;
  minHeight: string;
  tagColor: string;
}

const services: Service[] = [
{
  id: 'retail',
  title: 'Retail Honey Sales',
  subtitle: 'For Consumers',
  description: 'Premium raw Florida honey sourced from our own hives — available in multiple varietals including wildflower, orange blossom, and palmetto. Every jar carries the purity of our apiary.',
  image: "https://images.unsplash.com/photo-1700798981606-53966aea6501",
  imageAlt: 'Golden raw honey flowing from a wooden dipper into glass jar',
  tag: 'Retail',
  colSpan: 'md:col-span-1',
  minHeight: 'min-h-[420px]',
  tagColor: 'bg-honey/90'
},
{
  id: 'wholesale',
  title: 'Wholesale Honey Supply',
  subtitle: 'For Businesses',
  description: 'Bulk honey supply for distributors, food manufacturers, restaurants, and commercial buyers. Consistent quality, reliable volume, and flexible packaging options for your business needs.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_148d524f1-1774288200084.png",
  imageAlt: 'Large commercial honey containers and barrels for wholesale distribution',
  tag: 'Wholesale',
  colSpan: 'md:col-span-2',
  minHeight: 'min-h-[420px]',
  tagColor: 'bg-amber-700/90'
},
{
  id: 'pollination',
  title: 'Pollination Services',
  subtitle: 'For Agriculture',
  description: 'Professional managed pollination services for farms, orchards, and agricultural operations across Southwest Florida. Our healthy, productive colonies boost crop yields and biodiversity.',
  image: "https://images.unsplash.com/photo-1719646563764-486b48614e8c",
  imageAlt: 'Honeybee pollinating orange blossom flower in Florida orchard',
  tag: 'Agriculture',
  colSpan: 'md:col-span-2',
  minHeight: 'min-h-[420px]',
  tagColor: 'bg-nature-green/90'
},
{
  id: 'queen-bees',
  title: 'Queen Bees',
  subtitle: 'For Beekeepers',
  description: 'Locally raised, genetically selected queen bees for hive management and colony expansion. Our queens are bred for productivity, gentleness, and resilience in Florida\'s climate.',
  image: "https://images.unsplash.com/photo-1641170463882-da632f732657",
  imageAlt: 'Close-up of queen bee surrounded by worker bees on honeycomb frame',
  tag: 'Beekeeping',
  colSpan: 'md:col-span-1',
  minHeight: 'min-h-[420px]',
  tagColor: 'bg-honey-dark/90'
}];


export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.12 }
    );

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="bg-cream py-20 md:py-28 px-8 md:px-16">
      
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div
          ref={(el) => {cardRefs.current[4] = el;}}
          className="reveal mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full border border-honey/30 text-xs font-semibold text-honey font-body tracking-widest uppercase mb-4">
              What We Offer
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-brown-900 tracking-tight leading-tight max-w-xl">
              Products &amp;<br />
              <span className="text-honey">Services</span>
            </h2>
          </div>
          <p className="text-brown-light text-base md:text-lg font-light max-w-md font-body leading-relaxed">
            From premium honey to professional pollination — everything your operation needs from a trusted apiculture partner.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((service, i) =>
          <div
            key={service.id}
            ref={(el) => {cardRefs.current[i] = el;}}
            className={`reveal reveal-delay-${(i + 1) * 100} ${service.colSpan} relative rounded-4xl overflow-hidden group spring-hover bento-card-glow ${service.minHeight} cursor-pointer`}
            style={{ '--bento3-delay': `${i * 80}ms` } as React.CSSProperties}>
            
              {/* Image */}
              <AppImage
              src={service.image}
              alt={service.imageAlt}
              fill
              className="object-cover object-center img-zoom"
              sizes="(max-width: 768px) 100vw, 50vw" />
            

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brown-950/90 via-brown-900/30 to-transparent" />

              {/* Tag */}
              <div className="absolute top-5 left-5 z-10">
                <span className={`${service.tagColor} backdrop-blur-md text-white text-xs font-semibold font-body px-3 py-1.5 rounded-full`}>
                  {service.tag}
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 z-10 p-7">
                <p className="text-honey-light/80 text-xs font-medium font-body uppercase tracking-widest mb-1">
                  {service.subtitle}
                </p>
                <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-3 leading-tight">
                  {service.title}
                </h3>
                <p className="text-white/70 text-sm font-light font-body leading-relaxed max-w-sm">
                  {service.description}
                </p>
              </div>

              {/* Glow overlay */}
              <div className="glow-overlay" aria-hidden="true" />
            </div>
          )}
        </div>
      </div>
    </section>);

}