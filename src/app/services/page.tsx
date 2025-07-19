'use client';

import React, { useState, useRef, useEffect } from 'react';
import ContactModal from '@/components/common/ContactModal';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { 
  Pen, 
  Settings, 
  Wrench, 
  FileCheck,
  ArrowRight,
  Shield,
  CheckCircle,
  Users,
  Star
} from 'lucide-react';

const ServicesPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [showContactModal, setShowContactModal] = useState(false);
  const t = useTranslations();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Retrieve services from translations and add UI properties
  const servicesData = t.raw('services.serviceItems') as any[];
  const icons = [Pen, Settings, Wrench, FileCheck];
  const colors = [
    { color: "bg-blue-500", lightColor: "bg-blue-50", borderColor: "border-blue-200" },
    { color: "bg-green-500", lightColor: "bg-green-50", borderColor: "border-green-200" },
    { color: "bg-orange-500", lightColor: "bg-orange-50", borderColor: "border-orange-200" },
    { color: "bg-purple-500", lightColor: "bg-purple-50", borderColor: "border-purple-200" }
  ];
  const images = ["/gestion.png","/CONCEPTION.png", "/fabrication.png", "/installation.jpg"];
  
  const services = servicesData.map((service: any, index: number) => ({
    ...service,
    icon: icons[index],
    image: images[index],
    color: colors[index].color,
    lightColor: colors[index].lightColor,
    borderColor: colors[index].borderColor
  }));

  return (
    <>
    <div className="min-h-screen bg-white">
      {/* Hero Section - Unique Layout */}
      <section className="relative bg-gray-900 pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-8 sm:pb-12 md:pb-16 lg:pb-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='40' cy='40' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center">
            {/* Main Title - Hidden on mobile, visible on desktop */}
            <h1 className="hidden sm:block text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-6 sm:mb-8">
              {t('services.page.heroTitle')}
            </h1>

            {/* CTA Button */}
            <div className="flex justify-center">
              <button
                onClick={() => setShowContactModal(true)}
                className="inline-flex items-center space-x-2 text-sm sm:text-base font-medium transition-all duration-300 rounded-lg
                  sm:bg-[#FC32A2] sm:text-white sm:px-5 sm:py-2.5 sm:hover:bg-[#e91e63]
                  bg-white/90 text-gray-900 px-4 py-2 hover:bg-white"
              >
                <span>{t('services.page.requestQuote')}</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            {/* Service Navigation Tabs */}
            <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 md:gap-3 mt-8 sm:mt-10 mb-6 sm:mb-8 px-2">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <button
                    key={service.id}
                    onClick={() => setActiveTab(index)}
                    className={`flex items-center space-x-1.5 px-2 sm:px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 ${
                      activeTab === index 
                        ? 'bg-white text-gray-900 shadow-lg transform scale-105' 
                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                    }`}
                  >
                    <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span className="hidden sm:inline">{service.category}</span>
                    <span className="inline sm:hidden">{service.title.split(' ')[0]}</span>
                  </button>
                );
              })}
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 max-w-4xl mx-auto">
              <div className="text-center p-2 sm:p-3 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-0.5">30+</div>
                <div className="text-gray-400 text-xs sm:text-sm">
                  <span className="inline sm:hidden">{t('services.page.stats.yearsExperienceShort')}</span>
                  <span className="hidden sm:inline">{t('services.page.stats.yearsExperience')}</span>
                </div>
              </div>
              <div className="text-center p-2 sm:p-3 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-0.5">1500+</div>
                <div className="text-gray-400 text-xs sm:text-sm">
                  <span className="inline sm:hidden">{t('services.page.stats.projectsCompletedShort')}</span>
                  <span className="hidden sm:inline">{t('services.page.stats.projectsCompleted')}</span>
                </div>
              </div>
              <div className="text-center p-2 sm:p-3 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-0.5">7/7</div>
                <div className="text-gray-400 text-xs sm:text-sm">{t('services.page.stats.support')}</div>
              </div>
              <div className="text-center p-2 sm:p-3 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-0.5">98%</div>
                <div className="text-gray-400 text-xs sm:text-sm">
                  <span className="inline sm:hidden">{t('services.page.stats.satisfactionShort')}</span>
                  <span className="hidden sm:inline">{t('services.page.stats.satisfaction')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Card-based Layout */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">
              {t('services.page.offerTitle')}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-2">
              {t('services.page.offerSubtitle')}
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 md:mb-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              
              return (
                <div
                  key={service.id}
                  className={`bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg border ${service.borderColor} transform transition-all duration-300 hover:scale-[1.02] ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Service Header */}
                  <div className="flex items-start space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl flex items-center justify-center ${service.lightColor}`}>
                      <IconComponent className={`w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 ${service.color.replace('bg-', 'text-')}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs sm:text-sm font-medium text-gray-500 mb-0.5 sm:mb-1">{service.category}</div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 truncate">{service.title}</h3>
                      <div className="text-xs sm:text-sm md:text-base text-gray-600">{service.subtitle}</div>
                    </div>
                  </div>

                  {/* Service Description */}
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-4 sm:mb-6">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                    {service.features.map((feature: any, featureIndex: number) => (
                      <div key={featureIndex} className="flex items-start space-x-2 sm:space-x-3">
                        <div className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${service.lightColor}`}>
                          <CheckCircle className={`w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 ${service.color.replace('bg-', 'text-')}`} />
                        </div>
                        <span className="text-xs sm:text-sm md:text-base text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Service Image */}
                  <div className="relative aspect-[16/9] rounded-lg sm:rounded-xl overflow-hidden mb-4 sm:mb-6">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => setShowContactModal(true)}
                    className={`inline-flex items-center justify-center w-full px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base font-medium text-white transition-all duration-300 ${
                      service.color
                    } hover:opacity-90 hover:shadow-lg`}
                  >
                    {t('services.page.getQuote')}
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {/* Customer Satisfaction */}
            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-yellow-50 flex items-center justify-center">
                  <Star className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-gray-900">98%</div>
                  <div className="text-sm sm:text-base text-gray-600">{t('services.page.trust.customerSatisfaction')}</div>
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-600">
                {t('services.page.trust.satisfactionText')}
              </p>
            </div>

            {/* Experience */}
            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-gray-900">{t('services.page.trust.experienceTitle')}</div>
                  <div className="text-sm sm:text-base text-gray-600">{t('services.page.trust.experienceSubtitle')}</div>
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-600">
                {t('services.page.trust.experienceText')}
              </p>
            </div>

            {/* Team */}
            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-green-50 flex items-center justify-center">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-gray-900">{t('services.page.trust.teamTitle')}</div>
                  <div className="text-sm sm:text-base text-gray-600">{t('services.page.trust.teamSubtitle')}</div>
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-600">
                {t('services.page.trust.teamText')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
    {/* Contact Modal */}
    <ContactModal
      isOpen={showContactModal}
      onClose={() => setShowContactModal(false)}
    />
    </>
  );
};

export default ServicesPage; 