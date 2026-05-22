import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import MissionVisionSection from './components/MissionVisionSection';
import InnovationSection from './components/InnovationSection';
import WhyChooseSection from './components/WhyChooseSection';
import ContactSection from './components/ContactSection';

export default function Homepage() {
  return (
    <main className="bg-cream overflow-x-hidden">
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <MissionVisionSection />
      <InnovationSection />
      <WhyChooseSection />
      <ContactSection />
      <Footer />
    </main>
  );
}