'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Phone, Mail, MapPin, Clock, Send, User, MessageSquare, Building, ArrowRight, CheckCircle } from 'lucide-react';

const ContactSection = () => {
  const t = useTranslations();
  
  const services = [
    t('contact.form.fields.service.options.custom'),
    t('contact.form.fields.service.options.printing'),
    t('contact.form.fields.service.options.awnings'),
    t('contact.form.fields.service.options.wall'),
    t('contact.form.fields.service.options.installation'),
    t('contact.form.fields.service.options.other')
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: Phone,
      title: t('contact.info.phone.title'),
      primary: '+1 (514) 691-2512',
      secondary: t('contact.info.phone.secondary'),
      href: 'tel:+15146912512'
    },
    {
      icon: Mail,
      title: t('contact.info.email.title'),
      primary: 'enseignesmediaprint@gmail.com',
      secondary: t('contact.info.email.secondary'),
      href: 'mailto:enseignesmediaprint@gmail.com'
    },
  {
    icon: MapPin,
    title: t('contact.info.address.title'),
    primary: t('contact.info.address.primary'),
    secondary: '',
    href: 'https://maps.google.com/maps?q=8236+Rue+Pascal-Gagnon,+Montréal'
  },
    {
      icon: Clock,
      title: t('contact.info.hours.title'),
      primary: t('contact.info.hours.primary'),
      secondary: t('contact.info.hours.secondary'),
      href: null
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-4" style={{backgroundColor: '#dff2fd', color: '#1578a9'}}>
            <MessageSquare className="w-4 h-4 mr-2" />
            {t('contact.badge')}
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('contact.hero.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('contact.hero.description')}
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-gray-50 rounded-2xl p-8 lg:p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {t('contact.form.title')}
              </h3>
              <p className="text-sm text-gray-600 mb-6">{t('contact.form.subtitle')}</p>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 mx-auto mb-4" style={{color: '#32B8F1'}} />
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">{t('contact.form.success.title')}</h4>
                  <p className="text-gray-600">
                    {t('contact.form.success.message')}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.form.fields.name.label')}
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-colors duration-300"
                          style={{'--tw-ring-color': '#32B8F1'} as React.CSSProperties}
                          onFocus={(e) => e.target.style.borderColor = '#32B8F1'}
                          placeholder={t('contact.form.fields.name.placeholder')}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.form.fields.email.label')}
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-colors duration-300"
                          style={{'--tw-ring-color': '#32B8F1'} as React.CSSProperties}
                          onFocus={(e) => e.target.style.borderColor = '#32B8F1'}
                          placeholder={t('contact.form.fields.email.placeholder')}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.form.fields.company.label')}
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-colors duration-300"
                          style={{'--tw-ring-color': '#32B8F1'} as React.CSSProperties}
                          onFocus={(e) => e.target.style.borderColor = '#32B8F1'}
                          placeholder={t('contact.form.fields.company.placeholder')}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.form.fields.phone.label')}
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-colors duration-300"
                          style={{'--tw-ring-color': '#32B8F1'} as React.CSSProperties}
                          onFocus={(e) => e.target.style.borderColor = '#32B8F1'}
                          placeholder={t('contact.form.fields.phone.placeholder')}
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.fields.service.label')}
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-colors duration-300"
                      style={{'--tw-ring-color': '#32B8F1'} as React.CSSProperties}
                      onFocus={(e) => e.target.style.borderColor = '#32B8F1'}
                    >
                      <option value="">{t('contact.form.fields.service.placeholder')}</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.fields.message.label')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-colors duration-300 resize-none"
                      style={{'--tw-ring-color': '#32B8F1'} as React.CSSProperties}
                      onFocus={(e) => e.target.style.borderColor = '#32B8F1'}
                      placeholder={t('contact.form.fields.message.placeholder')}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    style={{backgroundColor: '#FC32A2'}}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e91e63'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FC32A2'}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-2"></div>
                        {t('contact.form.button.sending')}
                      </>
                    ) : (
                      <>
                        {t('contact.form.button.submit')}
                        <Send className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div 
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center transition-colors duration-300 group-hover:bg-blue-100">
                        <IconComponent className="w-6 h-6 text-gray-600 group-hover:text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {info.title}
                        </h4>
                        {info.href ? (
                          <a 
                            href={info.href}
                            className="text-gray-700 hover:text-gray-900 transition-colors duration-300 block"
                          >
                            {info.primary}
                          </a>
                        ) : (
                          <div className="text-gray-700">{info.primary}</div>
                        )}
                        <div className="text-sm text-gray-500 mt-1">
                          {info.secondary}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Interactive Google Map */}
            <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2794.0!2d-73.5988!3d45.5677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s8236%20Rue%20Pascal-Gagnon%2C%20Montr%C3%A9al%2C%20QC%2C%20Canada!5e0!3m2!1sfr!2sca!4v1642581234567!5m2!1sfr!2sca"
                width="100%"
                height="256"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Enseignes MEDIAPRINT Location"
                className="w-full h-64"
              ></iframe>
              
              {/* Map Info Overlay */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" style={{color: '#32B8F1'}} />
                  <span className="text-gray-900 text-sm font-medium">Our Location</span>
                </div>
              </div>
              
              {/* Directions Button */}
              <div className="absolute bottom-4 right-4">
                <a 
                  href="https://maps.google.com/maps/dir/?api=1&destination=8236+Rue+Pascal-Gagnon,+Montréal,+QC,+Canada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300 flex items-center shadow-lg"
                style={{backgroundColor: '#32B8F1'}}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1e8bb8'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#32B8F1'}
                >
                  {t('contact.info.address.directions')}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Emergency Contact & Quick Communication */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-6 text-white">
              <h4 className="font-bold text-lg mb-2">{t('contact.quickCommunication.title')}</h4>
              <p className="text-gray-300 text-sm mb-6">
                {t('contact.quickCommunication.description')}
              </p>
              
              {/* Quick Communication Buttons */}
              <div className="space-y-3 mb-4">
                <a
                  href="https://wa.me/15146912512"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-4 py-3 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                  style={{backgroundColor: '#25D366'}}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#128C7E'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#25D366'}
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  WhatsApp
                </a>
                
                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-center px-4 py-3 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                  style={{backgroundColor: '#FC32A2'}}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e91e63'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FC32A2'}
                >
                  {t('contact.quickCommunication.moreInfo')}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
              
              {/* Emergency Line */}
              <div className="border-t border-gray-700 pt-4">
                <p className="text-gray-300 text-sm mb-2">{t('contact.emergency.available')}</p>
                <a 
                  href="tel:+15146912512"
                  className="inline-flex items-center font-semibold transition-colors duration-300"
                  style={{color: '#32B8F1'}}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#1e8bb8'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#32B8F1'}
                >
                  {t('contact.emergency.line')}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;