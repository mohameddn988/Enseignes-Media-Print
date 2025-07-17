'use client';

import React, { useState } from 'react';
import ContactModal from '@/components/common/ContactModal';
import { useTranslations } from 'next-intl';

import Image from 'next/image';
import Link from 'next/link';
import { 
  Award, 
  Users, 
  Calendar, 
  Target, 
  Heart, 
  Building, 
  Lightbulb, 
  CheckCircle,
  ArrowRight,
  Star,
  Zap,
  Shield
} from 'lucide-react';

const AboutPage = () => {
  const t = useTranslations();
  const [showContactModal, setShowContactModal] = useState(false);

  // Map icon strings to icon components
  const iconMapping: any = {
    Target,
    Lightbulb,
    Heart,
    Users,
    Calendar,
    CheckCircle,
    Star,
    Building,
    Zap,
    Shield
  };

  // Get raw data from translations and map icon strings to components
  const rawAchievements = t.raw('about.page.achievements');
  const achievements = rawAchievements.map((achievement: any) => ({
    ...achievement,
    icon: iconMapping[achievement.icon]
  }));

  const rawValues = t.raw('about.page.values');
  const values = rawValues.map((value: any) => ({
    ...value,
    icon: iconMapping[value.icon]
  }));

  const rawStats = t.raw('about.page.stats');
  const stats = rawStats.map((stat: any) => ({
    ...stat,
    icon: iconMapping[stat.icon]
  }));

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              <div className="space-y-4 sm:space-y-6">
                <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm font-medium" style={{backgroundColor: '#dff2fd', color: '#1578a9'}}>
                  <Building className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2" />
                  {t('about.page.hero.badge')}
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                  {t('about.page.hero.title')}
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                  {t('about.page.hero.description')}
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                {stats.map((stat: any, index: number) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-3" style={{backgroundColor: '#dff2fd'}}>
                        <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" style={{color: '#1578a9'}} />
                      </div>
                      <div className="text-xl sm:text-2xl font-bold text-gray-900">{stat.number}</div>
                      <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative">
                <Image
                  src="/thumbnail_20250131_125932.jpg"
                  alt={t('about.page.hero.imageAlt')}
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-white rounded-xl p-4 sm:p-6 shadow-xl border border-gray-100">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center" style={{backgroundColor: '#32B8F1'}}>
                      <Award className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm sm:text-base font-bold text-gray-900">{t('about.page.hero.awardTitle')}</div>
                      <div className="text-xs sm:text-sm text-gray-600">{t('about.page.hero.awardSubtitle')}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mission */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">{t('about.page.mission.title')}</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t('about.page.mission.description')}
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value: any, index: number) => {
              const IconComponent = value.icon;
              return (
                <div 
                  key={index}
                  className="bg-gray-50 rounded-2xl p-6 sm:p-8 hover:bg-gray-100 transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-6 transition-colors duration-300 group-hover:bg-blue-200" style={{backgroundColor: '#dff2fd'}}>
                    <IconComponent className="w-6 h-6 sm:w-8 sm:h-8" style={{color: '#1578a9'}} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">{value.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Passion Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            <div className="lg:col-span-8 space-y-4 sm:space-y-6">
              <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm font-medium" style={{backgroundColor: 'rgba(50, 184, 241, 0.2)', color: '#32B8F1'}}>
                <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2" />
                {t('about.page.passion.badge')}
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                {t('about.page.passion.title')}
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
                {t('about.page.passion.description')}
              </p>
            </div>

            <div className="lg:col-span-4">
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {t.raw('about.page.passion.stats').map((item: any, index: number) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6">
                    <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">{item.value}</div>
                    <div className="text-sm sm:text-base text-gray-300">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">{t('about.page.timeline.title')}</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              {t('about.page.timeline.description')}
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 w-0.5 h-full bg-gray-200"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {achievements.map((achievement: any, index: number) => {
                const IconComponent = achievement.icon;
                return (
                  <div key={achievement.id} className={`relative flex flex-col sm:flex-row ${index % 2 === 0 ? 'sm:flex-row-reverse' : ''} items-start sm:items-center gap-8`}>
                    {/* Timeline Point */}
                    <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full border-4 border-white shadow-lg" style={{backgroundColor: '#32B8F1'}}></div>

                    {/* Content */}
                    <div className={`w-full sm:w-1/2 ${index % 2 === 0 ? 'sm:pl-12' : 'sm:pr-12'} pl-12 sm:pl-0`}>
                      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center" style={{backgroundColor: '#dff2fd'}}>
                            <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" style={{color: '#1578a9'}} />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-500">{achievement.year}</div>
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900">{achievement.title}</h3>
                          </div>
                        </div>
                        <p className="text-sm sm:text-base text-gray-600 mb-4">{achievement.description}</p>
                        <div className="flex items-center space-x-6">
                          <div>
                            <div className="text-lg sm:text-xl font-bold text-gray-900">{achievement.stats.projects}</div>
                            <div className="text-sm text-gray-500">{t('about.page.timeline.projects')}</div>
                          </div>
                          <div>
                            <div className="text-lg sm:text-xl font-bold text-gray-900">{achievement.stats.clients}</div>
                            <div className="text-sm text-gray-500">{t('about.page.timeline.clients')}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {t('about.page.cta.title')}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {t('about.page.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setShowContactModal(true)}
              className="inline-flex items-center px-8 py-4 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105" 
              style={{backgroundColor: '#FC32A2'}} 
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e91e63'} 
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FC32A2'}
            >
              {t('about.page.cta.consultation')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <Link
              href="/achievements"
              className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              {t('about.page.cta.portfolio')}
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      <ContactModal
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
      />
    </div>
  );
};

export default AboutPage;