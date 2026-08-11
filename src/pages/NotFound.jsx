import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, AlertCircle } from 'lucide-react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useTranslation } from 'react-i18next';

export default function NotFound() {
  const { t } = useTranslation();
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from('.not-found-anim', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="min-h-screen bg-gray-50 flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center space-y-8">
        <div className="not-found-anim flex justify-center">
          <div className="w-24 h-24 bg-red-50 rounded-2xl flex items-center justify-center shadow-sm border border-red-100">
            <AlertCircle className="w-12 h-12 text-red-500" />
          </div>
        </div>
        
        <div className="not-found-anim space-y-3">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
            404
          </h1>
          <p className="text-xl text-gray-600 font-medium">
            {t('notfound.title')}
          </p>
          <p className="text-base text-gray-500">
            {t('notfound.desc')}
          </p>
        </div>
        
        <div className="not-found-anim pt-4">
          <Link 
            to="/" 
            className="inline-flex items-center justify-center min-h-[48px] px-8 py-3 border border-transparent rounded-md text-lg font-medium text-white bg-brand-dark hover:bg-brand-light transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-dark shadow-md"
          >
            <ArrowLeft className="mr-2 w-5 h-5" />
            {t('notfound.back')}
          </Link>
        </div>
      </div>
    </div>
  );
}
