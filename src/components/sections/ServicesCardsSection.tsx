"use client";

import React, { useRef, useEffect, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ServiceItem {
  name: string;
  items: string[];
}

interface ServiceCardProps {
  title: string;
  icon: string;
  items: string[];
  index: number;
  scrollProgress: any;
}

const ServiceCard = ({ title, icon, items, index, scrollProgress }: ServiceCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const y = useTransform(
    scrollProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [0, index * -15, index * -30, index * -45, index * -60, index * -75]
  );
  
  const scale = useTransform(
    scrollProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [1, 1 - index * 0.015, 1 - index * 0.03, 1 - index * 0.045, 1 - index * 0.06, 1 - index * 0.075]
  );
  
  const opacity = useTransform(
    scrollProgress,
    [0, 0.8, 1],
    [1, 1 - index * 0.08, 0.4]
  );

  return (
    <motion.div
      ref={cardRef}
      style={{ y, scale, opacity }}
      className={cn(
        "sticky top-16 sm:top-20 w-full max-w-4xl mx-auto mb-6 sm:mb-8 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border-2 bg-white/95 backdrop-blur-sm shadow-xl transition-all duration-300",
        "hover:shadow-2xl hover:border-primary-400/50",
        index === 0 && "border-primary-200",
        index === 1 && "border-primary-300", 
        index === 2 && "border-primary-400",
        index === 3 && "border-primary-500",
        index === 4 && "border-primary-600",
        index === 5 && "border-primary-700"
      )}
    >
      <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
        <div className={cn(
          "flex-shrink-0 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gradient-to-br from-primary-400 to-primary-600 text-white shadow-lg",
          "flex items-center justify-center text-2xl sm:text-3xl"
        )}>
          {icon}
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{title}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
            {items.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full" style={{backgroundColor: '#EB2F46'}} />
                <span className="text-xs sm:text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Card Number */}
        <div className="absolute top-4 sm:top-6 right-4 sm:right-6">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-lg" style={{backgroundColor: '#EB2F46'}}>
            <span className="text-white font-bold text-base sm:text-lg">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ServicesCardsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const services: ServiceItem[] = [
    {
      name: "ENSEIGNES & LETTRAGE",
      items: [
        "Boîtiers lumineux",
        "Enseignes à lettres boîtiers - Lettres, chiffres et formes découpées", 
        "Enseignes pylônes - Stèles - Signalisation intérieure"
      ]
    },
    {
      name: "CONCEPTION & DESIGN",
      items: [
        "Logos et images corporatives",
        "Affiches publicitaires - Affiches promotionnelles",
        "Panneaux de chantier - Panneaux de location / vente",
        "Bannières - Oriflammes"
      ]
    },
    {
      name: "MARQUAGE NUMÉRIQUE, HABILLAGE & IMPRESSION",
      items: [
        "Murs - Vitrines",
        "Portes et fenêtres",
        "Véhicules",
        "Bateaux - Planchers"
      ]
    },
    {
      name: "AUVENTS & MARQUISES", 
      items: [
        "Auvents",
        "Marquises"
      ]
    },
    {
      name: "ÉCLAIRAGE",
      items: [
        "Éclairage intérieur",
        "Éclairage extérieur"
      ]
    },
    {
      name: "SUPPORTS GRAPHIQUES & STANDS D'EXPOSITION",
      items: [
        "Porte-bannières - Drapeaux",
        "Comptoirs et présentoirs - Stands d'exposition"
      ]
    }
  ];

  const icons = ["🏷️", "🎨", "🖨️", "☂️", "💡", "🎪"];

  return (
    <div ref={containerRef} className="min-h-[300vh] sm:min-h-[400vh] bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Nos services complets
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            De la conception à l'installation, nous fournissons des solutions de signalisation complètes pour tous vos besoins d'affaires à Montréal.
          </p>
        </div>

        <div className="relative">
          {services.map((service, index) => (
            <ServiceCard
              key={service.name}
              title={service.name}
              icon={icons[index]}
              items={service.items}
              index={index}
              scrollProgress={scrollYProgress}
            />
          ))}
        </div>

        {/* Progress Indicator */}
        <div className="fixed bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-lg border border-gray-200">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <span className="text-xs sm:text-sm font-medium text-gray-600">Service</span>
              <div className="flex space-x-1">
                {services.map((_, index) => (
                  <motion.div
                    key={index}
                    className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full"
                    style={{
                      backgroundColor: '#EB2F46',
                      scale: useTransform(
                        scrollYProgress,
                        [index * 0.15, (index + 1) * 0.15],
                        [1, 1.5]
                      )
                    }}
                  />
                ))}
              </div>
              <span className="text-xs sm:text-sm font-medium text-gray-600">
                {Math.min(6, Math.floor(scrollYProgress.get() * 10) + 1)} / 6
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCardsSection; 