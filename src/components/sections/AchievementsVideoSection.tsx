'use client';

import React, { useState } from 'react';
import { Award, Users, Calendar, MapPin, ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import ContactModal from '@/components/common/ContactModal';
import { WavyBackground } from '@/components/ui/wavy-background';

interface Testimonial {
  quote: string;
  author: string;
  company: string;
  location: string;
}

const AchievementsVideoSection = () => {
  const [showContactModal, setShowContactModal] = useState(false);
  const t = useTranslations();

  const achievements = [
    {
      icon: Award,
      number: "1500+",
      title: t('stats.projectsCompleted'),
      description: t('stats.projectsCompletedDesc')
    },
    {
      icon: Users,
      number: "1000+",
      title: t('stats.happyClients'),
      description: t('stats.happyClientsDesc')
    },
    {
      icon: Calendar,
      number: "30+",
      title: t('stats.yearsExperience'),
      description: t('stats.yearsExperienceDesc')
    },
    {
      icon: MapPin,
      number: "50+",
      title: t('stats.servicesOffered'),
      description: t('stats.servicesOfferedDesc')
    }
  ];

  const testimonials: Testimonial[] = t.raw('achievements.video.testimonials');

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-4" style={{backgroundColor: '#dff2fd', color: '#1578a9'}}>
            <Award className="w-4 h-4 mr-2" />
            {t('achievements.title')}
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('achievements.video.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('achievements.subtitle')}
          </p>
        </div>

        {/* Video and Stats Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Video Section */}
          <div className="lg:col-span-7">
            <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
              {/* Actual Video */}
              <div className="aspect-video relative">
                <video
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                >
                  <source src="https://storage.googleapis.com/work_images/video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Video Overlay Elements */}
                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2">
                  <span className="text-white text-sm font-medium">{t('achievements.video.hdQuality')}</span>
                </div>
                <div className="absolute top-4 right-4 rounded-lg px-3 py-2" style={{backgroundColor: '#32B8F1'}}>
                  <span className="text-white text-sm font-medium">{t('achievements.video.companyPresentation')}</span>
                </div>
              </div>

              {/* Video Info Bar */}
              <div className="bg-gray-800 px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#32B8F1'}}></div>
                    <span className="text-white text-sm font-medium">{t('achievements.video.titleWithYears')}</span>
                  </div>
                  <div className="text-gray-400 text-sm">{t('achievements.video.presentationVideo')}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Column */}
          <div className="lg:col-span-5">
            <div className="space-y-6">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <div 
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-300 group-hover:bg-blue-200" style={{backgroundColor: '#dff2fd'}}>
                        <IconComponent className="w-6 h-6" style={{color: '#1578a9'}} />
                      </div>
                      <div className="flex-1">
                        <div className="text-3xl font-bold text-gray-900 mb-1">
                          {achievement.number}
                        </div>
                        <div className="text-lg font-semibold text-gray-800 mb-1">
                          {achievement.title}
                        </div>
                        <div className="text-gray-600 text-sm">
                          {achievement.description}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Client Testimonials */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl border border-gray-100">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              {t('achievements.video.clientTestimonialsTitle')}
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('achievements.video.clientTestimonialsDescription')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="mb-4">
                  <div className="flex mb-3" style={{color: '#32B8F1'}}>
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-gray-700 italic mb-4">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.company}</div>
                  <div className="text-xs text-gray-500 mt-1">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <WavyBackground 
            className="rounded-2xl p-8 lg:p-12 text-white"
            backgroundFill="#111827"
            waveOpacity={0.3}
            blur={15}
          >
            <h3 className="text-3xl font-bold mb-4 relative z-20">{t('achievements.video.ctaTitle')}</h3>
            <p className="text-gray-200 mb-8 max-w-2xl mx-auto relative z-20">
              {t('achievements.video.ctaDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-20">
              <button 
                onClick={() => setShowContactModal(true)}
                className="inline-flex items-center px-8 py-4 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 relative z-30" 
                style={{backgroundColor: '#FC32A2'}} 
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#e91e63')} 
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#FC32A2')}
              >
                {t('common.getQuote')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <Link
                href="/achievements"
                className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 relative z-30"
              >
                {t('achievements.video.viewPortfolio')}
              </Link>
            </div>
          </WavyBackground>
        </div>
      </div>
      
      {/* Contact Modal */}
      <ContactModal
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
      />
    </section>
  );
};

export default AchievementsVideoSection; 