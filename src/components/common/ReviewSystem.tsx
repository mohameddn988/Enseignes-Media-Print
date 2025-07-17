'use client';

import React, { useState } from 'react';
import { Star, Send, Link, MessageCircle, X } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface ReviewSystemProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReviewSystem: React.FC<ReviewSystemProps> = ({ isOpen, onClose }) => {
  const t = useTranslations();
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [comment, setComment] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState<'review' | 'sendLink'>('review');

  const handleStarClick = (starIndex: number) => {
    setRating(starIndex);
  };

  const handleStarHover = (starIndex: number) => {
    setHoveredRating(starIndex);
  };

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
        setRating(0);
        setComment('');
      }, 2000);
    }, 1000);
  };

  const handleSendLink = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate sending email with review link
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
        setClientEmail('');
      }, 2000);
    }, 1000);
  };

  const generateReviewLink = () => {
    const baseUrl = window.location.origin;
    return `${baseUrl}#review`;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900">
            {activeTab === 'review' ? t('review.modal.reviewTab') : t('review.modal.shareTab')}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label={t('common.close')}
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-100">
          <button
            onClick={() => setActiveTab('review')}
            className={`flex-1 py-3 px-4 text-sm font-medium transition-colors ${
              activeTab === 'review'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <MessageCircle className="w-4 h-4 inline mr-2" />
            {t('review.modal.reviewTab')}
          </button>
          <button
            onClick={() => setActiveTab('sendLink')}
            className={`flex-1 py-3 px-4 text-sm font-medium transition-colors ${
              activeTab === 'sendLink'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <Link className="w-4 h-4 inline mr-2" />
            {t('review.modal.shareTab')}
          </button>
        </div>

        <div className="p-6">
          {isSuccess ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {activeTab === 'review' ? t('review.modal.thankYou') : t('review.modal.copiedMessage')}
              </h3>
              <p className="text-gray-600">
                {activeTab === 'review' 
                  ? t('review.success.message')
                  : t('review.success.shareSent')
                }
              </p>
            </div>
          ) : (
            <>
              {activeTab === 'review' ? (
                <form onSubmit={handleSubmitReview} className="space-y-6">
                  {/* Star Rating */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      {t('review.modal.ratingLabel')}
                    </label>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => handleStarClick(star)}
                          onMouseEnter={() => handleStarHover(star)}
                          onMouseLeave={() => setHoveredRating(0)}
                          className="p-1 transition-colors"
                          aria-label={t('review.modal.starAriaLabel', { count: star })}
                        >
                          <Star
                            className={`w-8 h-8 ${
                              star <= (hoveredRating || rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                    {rating > 0 && (
                      <p className="text-sm text-gray-600 mt-2">
                        {rating === 1 && t('review.rating.veryDissatisfied')}
                        {rating === 2 && t('review.rating.dissatisfied')}
                        {rating === 3 && t('review.rating.neutral')}
                        {rating === 4 && t('review.rating.satisfied')}
                        {rating === 5 && t('review.rating.verySatisfied')}
                      </p>
                    )}
                  </div>

                  {/* Comment */}
                  <div>
                    <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('review.modal.commentLabel')}
                    </label>
                    <textarea
                      id="comment"
                      rows={4}
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder={t('review.modal.commentPlaceholder')}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={rating === 0 || isSubmitting}
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        {t('review.modal.submitButton')}
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="space-y-6">
                  {/* Send Link Form */}
                  <form onSubmit={handleSendLink} className="space-y-4">
                    <div>
                      <label htmlFor="clientEmail" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('review.modal.emailLabel')}
                      </label>
                      <input
                        type="email"
                        id="clientEmail"
                        value={clientEmail}
                        onChange={(e) => setClientEmail(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder={t('review.modal.emailPlaceholder')}
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={!clientEmail || isSubmitting}
                      className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          {t('review.modal.sendLinkButton')}
                        </>
                      )}
                    </button>
                  </form>

                  {/* Preview Link */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">{t('review.modal.previewLinkTitle')}</h4>
                    <div className="bg-white border border-gray-200 rounded p-3 text-sm text-gray-600 break-all">
                      {generateReviewLink()}
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      {t('review.modal.previewLinkDescription')}
                    </p>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewSystem; 