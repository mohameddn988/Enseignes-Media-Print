import React from 'react'
import Card from '@/components/ui/Card'
import { useStagger } from '@/hooks/useGSAP'
import { useTranslations } from 'next-intl'

interface Testimonial {
  name: string
  company: string
  role: string
  content: string
  rating: number
  image?: string
}

interface TestimonialsProps {
  className?: string
}

const Testimonials: React.FC<TestimonialsProps> = ({ className = '' }) => {
  const t = useTranslations();
  const testimonialsRef = useStagger<HTMLDivElement>('.testimonial-card', 0.2)

  const testimonials: Testimonial[] = t.raw('testimonials.items');

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-lg ${
          index < rating ? 'text-accent-500' : 'text-secondary-300'
        }`}
      >
        ⭐
      </span>
    ))
  }

  return (
    <section className={`py-24 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-accent-100 text-accent-700 rounded-full text-sm font-medium">
              ⭐ {t('testimonials.badge')}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-6">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            {t('testimonials.description')}
          </p>
        </div>

        <div ref={testimonialsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="testimonial-card p-8 hover:shadow-xl transition-shadow duration-300 relative"
              shadow
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-primary-200">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-1.649.678-3.169 1.781-4.272C16.901 8.234 17.957 8 19.123 8c.552 0 1.123.056 1.749.167.622.111.849.34.849.736 0 .297-.165.623-.495.979-.33.356-.495.623-.495.801 0 .111.033.234.099.37.066.135.132.27.198.405.066.135.132.34.198.615.066.274.099.549.099.823 0 1.78-.495 3.391-1.485 4.833-.99 1.441-2.31 2.161-3.96 2.161-.827 0-1.569-.297-2.226-.891-.658-.594-.987-1.35-.987-2.268zm-12.015 0v-7.391c0-1.649.678-3.169 1.781-4.272C4.886 8.234 5.942 8 7.108 8c.552 0 1.123.056 1.749.167.622.111.849.34.849.736 0 .297-.165.623-.495.979-.33.356-.495.623-.495.801 0 .111.033.234.099.37.066.135.132.27.198.405.066.135.132.34.198.615.066.274.099.549.099.823 0 1.78-.495 3.391-1.485 4.833-.99 1.441-2.31 2.161-3.96 2.161-.827 0-1.569-.297-2.226-.891-.658-.594-.987-1.35-.987-2.268z"/>
                </svg>
              </div>

              {/* Rating */}
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Content */}
              <p className="text-secondary-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-secondary-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-secondary-600">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {t.raw('testimonials.stats').map((stat: any, index: number) => (
              <div key={index}>
                <div className="text-3xl font-bold text-primary-600 mb-2">{stat.value}</div>
                <div className="text-secondary-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials 