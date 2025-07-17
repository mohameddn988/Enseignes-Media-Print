'use client';

import React, { useState } from 'react';
import ContactModal from '@/components/common/ContactModal';
import { ArrowRight } from 'lucide-react';

const heroContent = {
  title: "Valorisez votre marque avec le leader de l'enseigne à Montréal",
      subtitle: "Enseignes sur mesure, installation experte et plus de 3 décennies d'expérience reconnue.",
  buttonText: 'Demander un devis gratuit',
  buttonLink: '/contact',
};

const HeroCarousel = () => {
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <section className="relative w-full aspect-[2/1] overflow-hidden bg-gray-900">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        >
          <source src="https://storage.googleapis.com/work_images/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Mobile Centered CTA & Tagline */}
      <div className="absolute inset-0 flex flex-col items-center justify-center sm:hidden z-20 px-4 text-center space-y-3">
        <p className="text-white text-sm">Enseignes sur mesure depuis 30&nbsp;ans</p>
        <button
          onClick={() => setShowContactModal(true)}
          className="inline-flex items-center px-4 py-2 bg-white/90 hover:bg-white text-gray-900 text-sm font-semibold rounded-full shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-400"
          style={{ boxShadow: '0 2px 12px 0 rgba(0,0,0,0.08)' }}
        >
          {heroContent.buttonText}
          <ArrowRight className="ml-2 w-4 h-4" />
        </button>
      </div>

      {/* Existing CTA Button Bottom Right for desktop */}
      <div className="absolute bottom-8 right-8 z-20 hidden sm:block">
        <button
          onClick={() => setShowContactModal(true)}
          className="inline-flex items-center bg-white/90 hover:bg-white text-gray-900 font-semibold rounded-full shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-400
            px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base"
          style={{ boxShadow: '0 2px 12px 0 rgba(0,0,0,0.08)' }}
        >
          {heroContent.buttonText}
          <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

      {/* Headline and Subheadline Bottom Left */}
      <div className="absolute bottom-16 left-8 z-10 max-w-xl">
        <h1 className="hidden sm:block text-white text-4xl md:text-5xl font-extrabold leading-tight mb-4 drop-shadow-xl">
          {heroContent.title}
        </h1>
        <p className="hidden sm:block text-white text-lg md:text-2xl font-medium drop-shadow-lg">
          {heroContent.subtitle}
        </p>
      </div>
      
      {/* Contact Modal */}
      <ContactModal
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
      />
    </section>
  );
};

export default HeroCarousel; 