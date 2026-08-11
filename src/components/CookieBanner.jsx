import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Cookie, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const COOKIE_KEY = 'lenova_cookie_consent';

export default function CookieBanner() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show banner if user has not yet made a choice
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) {
      // Small delay so it doesn't flash immediately on load
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
    // If previously declined, disable analytics
    if (consent === 'declined') {
      disableAnalytics();
    }
  }, []);

  const disableAnalytics = () => {
    // Disable Plausible analytics by setting opt-out
    if (window.plausible) {
      window.localStorage.setItem('plausible_ignore', 'true');
    }
  };

  const handleAccept = () => {
    localStorage.setItem(COOKIE_KEY, 'accepted');
    // Remove any opt-out flags
    localStorage.removeItem('plausible_ignore');
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_KEY, 'declined');
    disableAnalytics();
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[100] p-4 sm:p-6"
      role="dialog"
      aria-label="Cookie consent"
    >
      <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        {/* Icon */}
        <div className="flex-shrink-0 w-10 h-10 bg-brand-dark rounded-xl flex items-center justify-center">
          <Cookie className="w-5 h-5 text-white" />
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-gray-900 text-sm mb-1">{t('cookies.title')}</p>
          <p className="text-gray-500 text-xs leading-relaxed">
            {t('cookies.desc')}{' '}
            <Link to="/zasebnost" className="text-brand-accent underline hover:text-brand-dark transition-colors" onClick={handleAccept}>
              {t('cookies.policy')}
            </Link>
            .
          </p>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-2 flex-shrink-0 w-full sm:w-auto">
          <button
            onClick={handleDecline}
            className="flex-1 sm:flex-none px-4 py-2 text-xs font-medium text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            {t('cookies.decline')}
          </button>
          <button
            onClick={handleAccept}
            className="flex-1 sm:flex-none px-4 py-2 text-xs font-semibold text-white bg-brand-dark rounded-lg hover:bg-brand-light transition-colors"
          >
            {t('cookies.accept')}
          </button>
          <button
            onClick={handleDecline}
            className="p-1.5 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
