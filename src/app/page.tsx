'use client'

import React from 'react'
import HeroCarousel from '@/components/sections/HeroCarousel'
import ServicesOverview from '@/components/sections/ServicesOverview'
import StatsSection from '@/components/sections/StatsSection'

import AchievementsVideoSection from '@/components/sections/AchievementsVideoSection'
import ContactSection from '@/components/sections/ContactSection'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Carousel Section */}
      <HeroCarousel />

      {/* Services Overview Section  */}
      <ServicesOverview />

      {/* Stats Section */}
      <StatsSection />



      {/* Achievements Video Section */}
      <AchievementsVideoSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  )
}
