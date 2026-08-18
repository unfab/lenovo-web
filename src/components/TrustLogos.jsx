import React from 'react';
import { useTranslation } from 'react-i18next';

export default function TrustLogos() {
  const { t } = useTranslation();

  const partners = [
    { name: 'Interpolimeri', logo: '/logos/interpolimeri.png' },
    { name: 'MATON okna & vrata', logo: '/logos/maton.png' },
    { name: 'Decorama', logo: '/logos/decorama.png' },
    { name: 'Markize.si', logo: '/logos/markize.png' },
    { name: 'Dom paraplegikov Pacug', logo: '/logos/dom-paraplegikov.png' },
    { name: 'Portšped', logo: '/logos/portsped.png' },
    { name: 'Grand Koper', logo: '/logos/grand-koper.png' },
    { name: 'Barba Bar & More', logo: '/logos/barba-clean.png' },
    { name: 'SWY Brand', logo: '/logos/swy.png' },
    { name: 'Slaščičarna Dehar', logo: '/logos/dehar.png' },
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-50/80 border-y border-slate-200/80" id="reference">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs sm:text-sm font-semibold text-brand-accent tracking-wider uppercase mb-3">
          {t('navbar.references')}
        </p>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-primary tracking-tight mb-10 sm:mb-12">
          {t('trust.title')}
        </h2>

        {/* Responsive Logo Grid with full colors & enlarged dimensions */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-5 lg:gap-6 items-stretch">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 h-28 sm:h-32 lg:h-36 flex items-center justify-center shadow-sm hover:shadow-md hover:border-brand-accent/50 transition-all duration-300 transform hover:-translate-y-1"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                title={partner.name}
                loading="lazy"
                className="max-h-16 sm:max-h-20 lg:max-h-20 max-w-[90%] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

