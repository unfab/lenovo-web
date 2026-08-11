import React from 'react';
import { PieChart, Users, CheckCircle2, Briefcase } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Services() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-white" id="storitve">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-accent font-semibold tracking-wide uppercase text-sm mb-2">{t('services.subtitle')}</h2>
          <h3 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">{t('services.title')}</h3>
          <p className="text-lg text-gray-600">
            {t('services.desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="service-card bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-brand-light rounded-xl flex items-center justify-center mb-6">
              <PieChart className="text-brand-accent w-7 h-7" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">{t('services.s1.title')}</h4>
            <p className="text-gray-600 leading-relaxed mb-6">
              {t('services.s1.desc')}
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-gray-700">
                <CheckCircle2 className="text-brand-accent mr-2 w-4 h-4" /> {t('services.s1.l1')}
              </li>
              <li className="flex items-center text-sm text-gray-700">
                <CheckCircle2 className="text-brand-accent mr-2 w-4 h-4" /> {t('services.s1.l2')}
              </li>
            </ul>
          </div>

          {/* Service 2 */}
          <div className="service-card bg-brand-accent rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6">
              <Users className="text-white w-7 h-7" />
            </div>
            <h4 className="text-xl font-bold text-white mb-3">{t('services.s2.title')}</h4>
            <p className="text-white/90 leading-relaxed mb-6">
              {t('services.s2.desc')}
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-white">
                <CheckCircle2 className="text-white/80 mr-2 w-4 h-4" /> {t('services.s2.l1')}
              </li>
              <li className="flex items-center text-sm text-white">
                <CheckCircle2 className="text-white/80 mr-2 w-4 h-4" /> {t('services.s2.l2')}
              </li>
            </ul>
          </div>

          {/* Service 3 */}
          <div className="service-card bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="w-14 h-14 bg-brand-light rounded-xl flex items-center justify-center mb-6">
              <Briefcase className="text-brand-accent w-7 h-7" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">{t('services.s3.title')}</h4>
            <p className="text-gray-600 leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: t('services.s3.desc') }}></p>
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-gray-700">
                <CheckCircle2 className="text-brand-accent mr-2 w-4 h-4" /> {t('services.s3.l1')}
              </li>
              <li className="flex items-center text-sm text-gray-700">
                <CheckCircle2 className="text-brand-accent mr-2 w-4 h-4" /> <span dangerouslySetInnerHTML={{ __html: t('services.s3.l2') }}></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
