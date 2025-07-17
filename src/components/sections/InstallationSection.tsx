'use client';

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ContactModal from '@/components/common/ContactModal'

const InstallationSection = () => {
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <section className="py-32 bg-white relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white"></div>
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Content - 5 columns */}
          <div className="lg:col-span-5 space-y-12">
            
            {/* Header Section */}
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-full">
                <div className="w-2 h-2 rounded-full mr-3" style={{backgroundColor: '#32B8F1'}}></div>
                Installation professionnelle
              </div>
              
              <div className="space-y-4">
                <h2 className="text-5xl lg:text-6xl font-light text-gray-900 leading-[1.1]">
                  Installation
                  <br />
                  <span className="font-semibold">& Réparation</span>
                  <br />
                  <span className="font-semibold" style={{color: '#32B8F1'}}></span>
                </h2>
                
                <div className="w-16 h-1" style={{backgroundColor: '#32B8F1'}}></div>
              </div>
              
              <p className="text-lg text-gray-600 leading-relaxed max-w-md">
                {"Services d'installation et de maintenance d'enseignes professionnels à Montréal. Précision, fiabilité et excellence dans chaque projet."}
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-gray-900">1500+</div>
                <div className="text-sm text-gray-500 uppercase tracking-wide">Installations</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-gray-900">7/7</div>
                <div className="text-sm text-gray-500 uppercase tracking-wide">Support</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-gray-900">30+</div>
                <div className="text-sm text-gray-500 uppercase tracking-wide">{"Années d'expérience"}</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-500 uppercase tracking-wide">Satisfaction</div>
              </div>
            </div>

            {/* Service Features */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">Nos services incluent</h3>
              
              <div className="space-y-4">
                {[
                  { title: "Installation professionnelle", desc: "Montage et positionnement expert" },
                  { title: "Réparations d'urgence", desc: "Services d'urgence disponible 7/7" },
                  { title: "Entretien préventif", desc: "Inspections régulières et entretien" },
                  { title: "Gestion des permis", desc: "Conformité réglementaire complète" }
                ].map((service, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{backgroundColor: '#32B8F1'}}>
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div className="space-y-1">
                      <div className="font-medium text-gray-900 transition-colors group-hover:text-blue-600">
                        {service.title}
                      </div>
                      <div className="text-sm text-gray-500">{service.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setShowContactModal(true)}
                className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center group"
              >
                Planifier une installation
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              
              <button 
                onClick={() => setShowContactModal(true)}
                className="border-2 border-gray-200 hover:border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-medium transition-all duration-300"
              >
                Obtenir un devis
              </button>
            </div>
          </div>

          {/* Right Image - 7 columns */}
          <div className="lg:col-span-7 relative">
            
            {/* Main truck image container */}
            <div className="relative">
              
              {/* Background card */}
              <div className="absolute inset-4 bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl"></div>
              
              {/* Image container with 60% width as requested */}
              <div className="relative" style={{ width: '60vw', maxWidth: '100%', margin: '0 auto' }}>
                <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                  <Image
                    src="/installation.jpg"
                    alt="MEDIAPRINT Professional Installation Services"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                </div>
              </div>

              {/* Floating info cards */}
              <div className="absolute -left-8 top-1/4 bg-white rounded-xl shadow-lg border border-gray-100 p-6 max-w-xs hidden lg:block">
                <div className="flex items-center space-x-3 mb-3">
                                      <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Entièrement licencié</div>
                    <div className="text-sm text-gray-500">et assuré</div>
                  </div>
                </div>
                <div className="text-xs text-gray-400">{"Certification professionnelle et couverture d'assurance complète pour toutes les installations"}</div>
              </div>

              <div className="absolute -right-8 bottom-1/4 bg-white rounded-xl shadow-lg border border-gray-100 p-6 max-w-xs hidden lg:block">
                <div className="flex items-center space-x-3 mb-3">
                                      <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Service le jour même</div>
                    <div className="text-sm text-gray-500">Service disponible</div>
                  </div>
                </div>
                <div className="text-xs text-gray-400">{"Réparations d'urgence et installations urgentes réalisées en quelques heures"}</div>
              </div>

              {/* Subtle accent elements */}
                              <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl" style={{backgroundColor: 'rgba(50, 184, 241, 0.05)'}}></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gray-900/5 rounded-full blur-xl"></div>
            </div>
          </div>

        </div>

        {/* Bottom certification bar */}
        <div className="mt-24 pt-12 border-t border-gray-100">
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Entrepreneur licencié</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>Entièrement assuré</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              <span>Garantie 5 ans</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>{"Services d'urgence disponible 7/7"}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
      />
    </section>
  )
}

export default InstallationSection 