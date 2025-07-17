import React from 'react';
import Image from 'next/image';

// Simple infinite scrolling carousel of partner/company logos
// Duplicate the logos array to create the seamless loop effect.
const logos: string[] = [
  '/next.svg',
  '/vercel.svg',
  '/globe.svg',
  '/window.svg',
  '/logo.svg',
  '/truck.png'
];

const CompaniesCarousel: React.FC = () => {
  return (
    <div className="overflow-hidden py-10 bg-white w-full">
      {/* The scroller wraps logos twice for infinite effect */}
      <div className="flex items-center whitespace-nowrap" style={{ animation: 'scroll 25s linear infinite' }}>
        {logos.concat(logos).map((src, index) => (
          <div key={index} className="px-8 flex-shrink-0">
            <Image src={src} alt={`Company logo ${index}`} width={120} height={60} className="object-contain w-28 h-12" />
          </div>
        ))}
      </div>
      {/* Embedded keyframes for the scroll animation */}
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default CompaniesCarousel; 