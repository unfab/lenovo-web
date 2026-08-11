import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();
  // We need to fetch the array of list items
  const listItems = t('about.list', { returnObjects: true });

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-200" id="o-nas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="o-nas-anim">
            <h2 className="text-brand-accent font-semibold tracking-wide uppercase text-sm mb-2">{t('about.subtitle')}</h2>
            <h3 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">{t('about.title')}</h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {t('about.desc')}
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 o-nas-anim">
            <ul className="space-y-4">
              {Array.isArray(listItems) && listItems.map((item, index) => (
                <li key={index} className="flex items-start text-gray-700">
                  <CheckCircle2 className="text-brand-accent mr-3 w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
