'use client';

import React, { useState } from 'react';
import { Star, MessageCircle } from 'lucide-react';
import ReviewSystem from './ReviewSystem';

const ReviewButton: React.FC = () => {
  const [isReviewOpen, setIsReviewOpen] = useState(false);

  return (
    <>
      {/* Floating Review Button */}
      <button
        onClick={() => setIsReviewOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40 group"
        aria-label="Laisser un avis ou envoyer un lien d'avis"
      >
        <div className="flex items-center space-x-2">
          <Star className="w-6 h-6 fill-current" />
          <span className="hidden group-hover:block text-sm font-medium whitespace-nowrap">
            Avis clients
          </span>
        </div>
      </button>

      {/* Review System Modal */}
      <ReviewSystem 
        isOpen={isReviewOpen} 
        onClose={() => setIsReviewOpen(false)} 
      />
    </>
  );
};

export default ReviewButton; 