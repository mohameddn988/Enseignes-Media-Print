'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
  const currentYear = new Date().getFullYear();

  const services = [
    'Enseignes et lettrage sur mesure',
    'Impression numérique',
    'Auvents et marquises',
    'Habillage  mural',
    'Stands d\'exposition'
  ];

  const quickLinks = [
    { name: 'À propos', href: '/about' },
    { name: 'Nos services', href: '/services' },
    { name: 'Portfolio', href: '/achievements' },
    { name: 'Contact', href: '/contact' },
    { name: 'Obtenir un devis', href: '/quote' },
    { name: 'Carrières', href: '/careers' }
  ];

  const certifications = [
    { name: 'Certifié CSA', description: 'Produits certifiés' }
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
                {"Entreprise d'enseignes numéro 1 à Montréal avec plus de 3 décennies d'expérience. Nous transformons les entreprises grâce à un design innovant et un savoir-faire de qualité."}
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="space-y-4">
              <h4 className="text-base sm:text-lg font-semibold text-white">Nos certifications</h4>
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
            <h4 className="text-base sm:text-lg font-semibold text-white">Nos services</h4>
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
            <h4 className="text-base sm:text-lg font-semibold text-white">Liens rapides</h4>
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
                Basé sur plus de 200 avis clients
              </div>
            </div>
          </div>

          {/* Contact Info - 4 columns */}
          <div className="lg:col-span-4 space-y-4 sm:space-y-6">
            <h4 className="text-base sm:text-lg font-semibold text-white">Contactez-nous</h4>
            
            <div className="space-y-4">
              {/* Phone */}
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm sm:text-base font-medium text-white">Appelez-nous</div>
                  <Link 
                    href="tel:+15146912512"
                    className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    +1 (514) 691-2512
                  </Link>
                  <div className="text-xs sm:text-sm text-gray-400">Consultation gratuite disponible</div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm sm:text-base font-medium text-white">Envoyez-nous un e-mail</div>
                  <Link 
                    href="mailto:enseignesmediaprint@gmail.com"
                    className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    enseignesmediaprint@gmail.com
                  </Link>
                  <div className="text-xs sm:text-sm text-gray-400">Réponse rapide garantie</div>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm sm:text-base font-medium text-white">Venez nous voir</div>
                  <div className="text-sm sm:text-base text-gray-300">
                    8236 Rue Pascal-Gagnon<br />
                    Montréal, QC
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400">{"Salle d'exposition & Atelier"}</div>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-4 sm:pt-6">
              <div className="flex items-center space-x-4">
                <a
                  href="#"
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-700 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-600 transition-colors duration-300"
                >
                  <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-700 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-600 transition-colors duration-300"
                >
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-700 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-600 transition-colors duration-300"
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a
                  href="#"
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
              © {currentYear} Enseignes MEDIAPRINT. Tous droits réservés.
            </div>
            <div className="flex items-center space-x-4 sm:space-x-6">
              <Link href="/privacy" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors duration-300">
                Politique de confidentialité
              </Link>
              <Link href="/terms" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors duration-300">
                {"Conditions d'utilisation"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 