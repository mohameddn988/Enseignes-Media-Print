'use client'

import React, { useState } from 'react'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import { useFadeIn } from '@/hooks/useGSAP'

interface ContactFormData {
  name: string
  email: string
  phone: string
  company: string
  service: string
  budget: string
  message: string
}

interface ContactFormProps {
  className?: string
}

const ContactForm: React.FC<ContactFormProps> = ({ className = '' }) => {
  const formRef = useFadeIn<HTMLDivElement>(0, 0.8)
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const services = [
    'Custom Sign Design',
    'LED Signs',
    'Storefront Signs',
    'Vehicle Graphics',
    'Banners & Displays',
    'Digital Signage',
    'Installation Services',
    'Maintenance & Repair'
  ]

  const budgetRanges = [
    'Under $1,000',
    '$1,000 - $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000+'
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: '',
        message: ''
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  return (
    <section className={`py-24 bg-gradient-to-br from-secondary-50 to-primary-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div>
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                📞 Get In Touch
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-secondary-600 mb-12 leading-relaxed">
              Let's discuss your signage needs and create a solution that elevates your brand and drives results.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">📍</span>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-2">Visit Our Showroom</h3>
                  <p className="text-secondary-600">
                    1234 Business Avenue<br />
                    Suite 100<br />
                    City, State 12345
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">📞</span>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-2">Call Us Today</h3>
                  <p className="text-secondary-600">
                            <a href="tel:+15146912512" className="hover:text-primary-600 transition-colors">
          +1 (514) 691-2512
                    </a><br />
                    <span className="text-sm">Mon-Fri: 8AM-6PM, Sat: 9AM-4PM</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                                  <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">📧</span>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-2">Email Us</h3>
                  <p className="text-secondary-600">
                    <a href="mailto:enseignesmediaprint@gmail.com" className="hover:text-primary-600 transition-colors">
                      enseignesmediaprint@gmail.com
                    </a><br />
                    <span className="text-sm">We respond within 24 hours</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Benefits */}
            <div className="mt-12 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20">
              <h3 className="font-semibold text-secondary-900 mb-4">Why Choose Us?</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <span className="text-primary-500">✓</span>
                  <span className="text-sm text-secondary-700">Free Consultation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-primary-500">✓</span>
                  <span className="text-sm text-secondary-700">5-Year Warranty</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-primary-500">✓</span>
                  <span className="text-sm text-secondary-700">Licensed & Insured</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-primary-500">✓</span>
                  <span className="text-sm text-secondary-700">Urgence 7/7</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card ref={formRef} className="p-8 bg-white/90 backdrop-blur-sm border-white/20" shadow>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-secondary-900 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-secondary-900 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                                          placeholder="+1 (514) 691-2512"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-secondary-900 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Your Company"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-secondary-900 mb-2">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-secondary-900 mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((range, index) => (
                      <option key={index} value={range}>{range}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-secondary-900 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  placeholder="Tell us about your signage project..."
                />
              </div>

              {submitStatus === 'success' && (
                <div className="p-4 bg-primary-100 border border-primary-200 rounded-lg">
                  <p className="text-primary-800 font-medium">Thank you! We'll contact you within 24 hours.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-100 border border-red-200 rounded-lg">
                  <p className="text-red-800 font-medium">Something went wrong. Please try again.</p>
                </div>
              )}

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                loading={isSubmitting}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : '🚀 Get Free Quote'}
              </Button>

              <p className="text-center text-sm text-secondary-600">
                We respect your privacy and will never share your information.
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default ContactForm 