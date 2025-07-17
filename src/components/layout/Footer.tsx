'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Twitter,
  ArrowRight,
  Award,
  Shield,
  Star
} from 'lucide-react';

const Footer = () => {
  const t = useTranslations();
  const currentYear = new Date().getFullYear();

  const services = [
    t('footer.services.items.0'),
    t('footer.services.items.1'),
    t('footer.services.items.2'),
    t('footer.services.items.3'),
    t('footer.services.items.4')
  ];

  const quickLinks = [
    { name: t('footer.quickLinks.about'), href: '/about' },
    { name: t('footer.quickLinks.services'), href: '/services' },
    { name: t('footer.quickLinks.portfolio'), href: '/achievements' },
    { name: t('footer.quickLinks.contact'), href: '/contact' },
    { name: t('footer.quickLinks.quote'), href: '/quote' },
    { name: t('footer.quickLinks.careers'), href: '/careers' }
  ];

  const certifications = [
    { name: t('footer.certifications.csa'), description: t('footer.certifications.csaDesc') }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Company Info - 4 columns */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-4">
              <Image
                src="/logoWhite.svg"
                alt="Enseignes MEDIAPRINT"
                width={200}
                height={60}
                className="h-10 sm:h-12 w-auto"
              />
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                {t('footer.description')}
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="space-y-4">
              <h4 className="text-base sm:text-lg font-semibold text-white">{t('footer.certifications.title')}</h4>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center" style={{backgroundColor: '#32B8F1'}}>
                      <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-sm sm:text-base font-medium text-white">{cert.name}</div>
                      <div className="text-xs sm:text-sm text-gray-400">{cert.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>


          </div>

          {/* Services - 2 columns */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            <h4 className="text-base sm:text-lg font-semibold text-white">{t('footer.services.title')}</h4>
            <ul className="space-y-2 sm:space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    href="/services"
                    className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links - 2 columns */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            <h4 className="text-base sm:text-lg font-semibold text-white">{t('footer.quickLinks.title')}</h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Customer Rating */}
            <div className="bg-gray-800 rounded-lg p-3 sm:p-4">
              <div className="flex items-center space-x-2 mb-2">
                <div className="flex" style={{color: '#32B8F1'}}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm sm:text-base font-semibold">4.9/5</span>
              </div>
              <div className="text-xs sm:text-sm text-gray-300">
                {t('footer.rating.text')}
              </div>
            </div>
          </div>

          {/* Contact Info - 4 columns */}
          <div className="lg:col-span-4 space-y-4 sm:space-y-6">
            <h4 className="text-base sm:text-lg font-semibold text-white">{t('footer.contact.title')}</h4>
            
            <div className="space-y-4">
              {/* Phone */}
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm sm:text-base font-medium text-white">{t('footer.contact.phone.title')}</div>
                  <Link 
                    href="tel:+15146912512"
                    className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    +1 (514) 691-2512
                  </Link>
                  <div className="text-xs sm:text-sm text-gray-400">{t('footer.contact.phone.subtitle')}</div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm sm:text-base font-medium text-white">{t('footer.contact.email.title')}</div>
                  <Link 
                    href="mailto:enseignesmediaprint@gmail.com"
                    className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    enseignesmediaprint@gmail.com
                  </Link>
                  <div className="text-xs sm:text-sm text-gray-400">{t('footer.contact.email.subtitle')}</div>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm sm:text-base font-medium text-white">{t('footer.contact.address.title')}</div>
                  <div className="text-sm sm:text-base text-gray-300">
                    8236 Rue Pascal-Gagnon<br />
                    Montréal, QC
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400">{t('footer.contact.address.subtitle')}</div>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-4 sm:pt-6">
              <h5 className="text-sm font-medium text-white mb-3">{t('footer.social.title')}</h5>
              <div className="flex items-center space-x-4">
                <a
                  href="#"
                  aria-label={t('footer.social.facebook')}
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-700 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-600 transition-colors duration-300"
                >
                  <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a
                  href="#"
                  aria-label={t('footer.social.instagram')}
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-700 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-600 transition-colors duration-300"
                >
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a
                  href="#"
                  aria-label={t('footer.social.linkedin')}
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-700 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-600 transition-colors duration-300"
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a
                  href="#"
                  aria-label={t('footer.social.twitter')}
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-700 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-600 transition-colors duration-300"
                >
                  <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-xs sm:text-sm text-gray-400">
              © {currentYear} Enseignes MEDIAPRINT. {t('footer.copyright')}
            </div>
            <div className="flex items-center space-x-4 sm:space-x-6">
              <Link href="/privacy" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors duration-300">
                {t('footer.privacy')}
              </Link>
              <Link href="/terms" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors duration-300">
                {t('footer.terms')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 