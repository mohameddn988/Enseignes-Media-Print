'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { cn } from '@/utils/cn'
import { Phone, MapPin, Clock } from 'lucide-react'
import { logos } from '@/config/assets'
import LanguageSwitcher from '@/components/common/LanguageSwitcher'

interface NavItem {
  label: string
  href: string
  onClick?: (e: React.MouseEvent) => void
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const t = useTranslations()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault()
    
    // If we're not on the homepage, navigate to homepage first
    if (window.location.pathname !== '/') {
      window.location.href = '/#contact'
      return
    }
    
    // If we're on homepage, scroll to contact section
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const navItems: NavItem[] = [
    { label: t('navigation.home'), href: '/' },
    { label: t('navigation.about'), href: '/about' },
    { label: t('navigation.services'), href: '/services' },
    { label: t('navigation.achievements'), href: '/achievements' },
    { label: t('navigation.contact'), href: '#contact', onClick: handleContactClick },
  ]

  return (
    <>
      {/* Top Professional Contact Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gray-900 text-white">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='10' cy='10' r='1'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 relative">
          <div className="flex justify-between items-center text-sm py-1.5 sm:py-2">
            {/* Left side - Contact Info */}
            <div className="flex items-center space-x-4 lg:space-x-8">
              <div className="hidden sm:flex items-center space-x-1.5 group">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 transition-colors" style={{color: '#f16d7a'}} />
                <span className="text-gray-300 group-hover:text-white transition-colors text-xs sm:text-sm truncate">
                  {t('header.address')}
                </span>
              </div>
              <div className="flex items-center space-x-1.5 group">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4 transition-colors" style={{color: '#f16d7a'}} />
                <span className="text-gray-300 group-hover:text-white transition-colors text-xs sm:text-sm whitespace-nowrap">
                  {t('header.schedule')}
                </span>
              </div>
            </div>

            {/* Right side - Contact Actions */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              <a 
                href="tel:+15146912512" 
                className="flex items-center space-x-1.5 text-white px-2 sm:px-3 py-1 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 text-xs sm:text-sm whitespace-nowrap"
                style={{backgroundColor: '#32B8F1'}}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1595d1'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#32B8F1'}
              >
                <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>{t('header.phone')}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Professional Header */}
      <header
        className={cn(
          "sticky top-8 z-40 transition-all duration-500 border-b border-gray-100",
          isScrolled 
            ? "bg-white/95 backdrop-blur-md shadow-lg shadow-gray-900/5" 
            : "bg-white"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 sm:py-4">
            
            {/* Logo Section */}
            <Link href="/" className="flex items-center group">
              <div className="relative">
                <Image
                  src={logos.main}
                  alt={logos.alt}
                  width={550}
                  height={190}
                  className={cn(
                    "w-auto transition-all duration-300",
                    isScrolled ? "h-18 sm:h-22" : "h-22 sm:h-26"
                  )}
                  priority
                />
                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 rounded-lg transition-all duration-300 group-hover:bg-blue-50"></div>
              </div>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-all duration-300 group"
              aria-label="Toggle mobile menu"
            >
              <div className="relative w-6 h-6">
                <span className={cn(
                  "absolute block h-0.5 w-6 bg-gray-700 transform transition-all duration-300",
                  isMenuOpen ? "rotate-45 top-3" : "top-1"
                )}></span>
                <span className={cn(
                  "absolute block h-0.5 w-6 bg-gray-700 top-3 transform transition-all duration-300",
                  isMenuOpen ? "opacity-0" : "opacity-100"
                )}></span>
                <span className={cn(
                  "absolute block h-0.5 w-6 bg-gray-700 transform transition-all duration-300",
                  isMenuOpen ? "-rotate-45 top-3" : "top-5"
                )}></span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  onClick={item.onClick}
                  className="relative px-4 py-2 text-gray-700 hover:text-gray-900 font-medium text-sm transition-all duration-300 rounded-lg hover:bg-gray-50 group"
                >
                  {item.label}
                  <span className="absolute inset-x-4 -bottom-0.5 h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" style={{backgroundColor: '#32B8F1'}}></span>
                </Link>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-3">
              
              {/* Language Switcher */}
              <LanguageSwitcher />
              
              {/* WhatsApp Button */}
              <a
                href="https://wa.me/15146912512"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white px-4 py-2.5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2 group"
                style={{backgroundColor: '#25D366'}}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#128C7E'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#25D366'}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <span>{t('header.whatsapp')}</span>
              </a>

              {/* Pour plus d'info Button */}
              <Link
                href="#contact"
                onClick={handleContactClick}
                className="text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2 group"
                style={{backgroundColor: '#FC32A2'}}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e91e63'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FC32A2'}
              >
                <span>{t('header.moreInfo')}</span>
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          "lg:hidden overflow-hidden transition-all duration-300",
          isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}>
          <nav className="py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-2">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  onClick={(e) => {
                    if (item.onClick) item.onClick(e);
                    setIsMenuOpen(false);
                  }}
                  className="px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors duration-300 text-base font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Actions */}
            <div className="mt-4 space-y-3 px-4">
              {/* Language Switcher */}
              <div className="flex justify-center">
                <LanguageSwitcher />
              </div>
              
              <a
                href="https://wa.me/15146912512"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 text-white px-4 py-3 rounded-lg font-semibold w-full"
                style={{backgroundColor: '#25D366'}}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <span>{t('header.whatsapp')}</span>
              </a>
              <Link
                href="#contact"
                onClick={(e) => {
                  handleContactClick(e);
                  setIsMenuOpen(false);
                }}
                className="flex items-center justify-center space-x-2 text-white px-4 py-3 rounded-lg font-semibold w-full"
                style={{backgroundColor: '#FC32A2'}}
              >
                <span>{t('header.moreInfo')}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header 