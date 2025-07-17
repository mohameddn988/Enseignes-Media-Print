'use client'

import React, { useEffect, useRef, useState } from 'react'

interface Stat {
  number: number
  suffix: string
  label: string
  description: string
  icon: React.ReactNode
}

const StatsSection = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState([0, 0, 0, 0])

  const stats: Stat[] = [
    {
      number: 30,
      suffix: '+',
      label: "Années d'expérience",
      description: 'Trois décennies d’expertise en fabrication et installation d’enseignes',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      number: 1500,
      suffix: '+',
      label: 'Projets réalisés',
      description: 'Installations d’enseignes réussies à Montréal et dans les environs',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      number: 500,
      suffix: '+',
      label: 'Clients satisfaits',
      description: 'Clients satisfaits de nos services et projets',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a6 6 0 00-12 0v2h5" />
          <circle cx="12" cy="8" r="4" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} />
        </svg>
      )
    },
    {
      number: 98,
      suffix: '%',
      label: 'Taux de satisfaction',
      description: 'Évaluations constamment élevées de nos clients commerciaux et détaillants',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      )
    }
  ]

  // Counter animation
  const animateCounter = (targetValue: number, index: number, duration: number = 2500) => {
    const startTime = Date.now()
    const startValue = 0

    const updateCounter = () => {
      const now = Date.now()
      const progress = Math.min((now - startTime) / duration, 1)
      
      // Smooth easing function
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentValue = Math.floor(startValue + (targetValue - startValue) * easeOutQuart)
      
      setCounters(prev => {
        const newCounters = [...prev]
        newCounters[index] = currentValue
        return newCounters
      })

      if (progress < 1) {
        requestAnimationFrame(updateCounter)
      }
    }

    requestAnimationFrame(updateCounter)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true)
            
            // Start counter animations with staggered delays
            stats.forEach((stat, index) => {
              setTimeout(() => {
                animateCounter(stat.number, index)
              }, index * 150)
            })
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible, stats])

  return (
    <section ref={sectionRef} className="py-32 bg-gray-50 relative">
      {/* Subtle background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-gray-100/50"></div>
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-full mb-8">
            <div className="w-2 h-2 rounded-full mr-3" style={{backgroundColor: '#32B8F1'}}></div>
            Notre parcours
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-light text-gray-900 leading-[1.1] mb-6">
            Excellence
            <br />
            <span className="font-semibold">prouvée</span>
          </h2>
          
          <div className="w-16 h-1 mx-auto mb-8" style={{backgroundColor: '#32B8F1'}}></div>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Trois décennies à fournir des solutions d’enseignes exceptionnelles à Montréal. Nos chiffres témoignent de notre engagement envers la qualité et la satisfaction client.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl border border-gray-200 p-8 text-center transition-all duration-500 hover:shadow-xl hover:border-gray-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: `${index * 100}ms` 
              }}
            >
              {/* Icon */}
                              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 text-gray-600 rounded-xl mb-6 transition-all duration-300 group-hover:bg-blue-100 group-hover:text-blue-600">
                {stat.icon}
              </div>
              
              {/* Counter */}
              <div className="mb-4">
                <span className="text-5xl lg:text-6xl font-bold text-gray-900 tabular-nums">
                  {counters[index]}
                </span>
                <span className="text-5xl lg:text-6xl font-bold" style={{color: '#32B8F1'}}>
                  {stat.suffix}
                </span>
              </div>
              
              {/* Label */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {stat.label}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {stat.description}
              </p>
              
              {/* Subtle accent line */}
                              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background: 'linear-gradient(to right, transparent, #32B8F1, transparent)'}}></div>
            </div>
          ))}
        </div>

        {/* Achievement Highlights */}
        <div className="bg-white rounded-3xl border border-gray-200 p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left side - Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                  Votre partenaire d’enseignes à Montréal
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Depuis 2013, nous avons été le choix fiable pour les entreprises à Montréal, 
                  fournissant des solutions d’enseignes innovantes qui conduisent à des résultats et renforcent la visibilité de la marque.
                </p>
              </div>
              
              {/* Key achievements */}
              <div className="space-y-4">
                {[
                  { metric: "Leader de l'industrie", detail: "30+ années d'innovation continue" },
                  { metric: "Assurance qualité", detail: "Taux de satisfaction client de 98%" },
                  { metric: "Réponse rapide", detail: "Services d'urgence disponible 7/7" },
                  { metric: "Résultats prouvés", detail: "1500+ projets réussis terminés" }
                ].map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-2 h-2 rounded-full mt-3 flex-shrink-0" style={{backgroundColor: '#32B8F1'}}></div>
                    <div>
                      <div className="font-semibold text-gray-900">{achievement.metric}</div>
                      <div className="text-gray-600 text-sm">{achievement.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Quote */}
            <div className="relative">
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <div className="text-6xl mb-4 leading-none" style={{color: '#32B8F1'}}>&ldquo;</div>
                <blockquote className="text-xl text-gray-700 font-medium leading-relaxed mb-6">
                  {"Excellence en signage n'est pas seulement à propos de ce que nous créons—c'est à propos des partenariats durables que nous construisons et de la réussite que nous aidons nos clients à réaliser."}
                </blockquote>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Enseignes MEDIAPRINT</div>
                    <div className="text-gray-600 text-sm">Depuis 2013</div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
                              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full blur-xl" style={{backgroundColor: 'rgba(50, 184, 241, 0.1)'}}></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gray-900/5 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>

        {/* Bottom certification strip */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-60">
            <div className="flex items-center space-x-3 text-gray-500">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-medium">Licencié et certifié</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-500">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="text-sm font-medium">Assuré totalement</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-500">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-sm font-medium">Réponse rapide</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-500">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              <span className="text-sm font-medium">Garantie de qualité</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatsSection 