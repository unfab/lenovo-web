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
    <section className="py-14 sm:py-16 bg-slate-50 border-y border-slate-200/80" id="reference">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs sm:text-sm font-semibold text-brand-accent tracking-wider uppercase mb-3">
          {t('navbar.references')}
        </p>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-brand-primary tracking-tight mb-8 sm:mb-10">
          {t('trust.title')}
        </h2>

        {/* Responsive Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 lg:gap-6 items-stretch">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group bg-white border border-slate-200/90 rounded-xl p-3 sm:p-4 h-24 sm:h-28 flex items-center justify-center shadow-sm hover:shadow-md hover:border-brand-accent/40 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                title={partner.name}
                loading="lazy"
                className="max-h-12 sm:max-h-14 max-w-[85%] w-auto object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

