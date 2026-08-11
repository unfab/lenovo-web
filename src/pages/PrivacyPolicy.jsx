import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function PrivacyPolicy() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">{t('footer.privacy')}</h1>
        <div className="prose prose-brand text-gray-600 space-y-6">
          <p>
            V podjetju Lenova d.o.o. se zavedamo pomena varstva osebnih podatkov. Vaše podatke skrbno varujemo v skladu z določili Splošne uredbe o varstvu podatkov (GDPR) in veljavno zakonodajo.
          </p>
          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Upravljavec podatkov</h2>
          <p>
            Upravljavec vaših osebnih podatkov je Lenova d.o.o., Ankaranska cesta 5c, 6000 Koper.
          </p>
          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. Zbiranje in uporaba podatkov</h2>
          <p>
            Osebne podatke zbiramo le, ko nam jih posredujete sami, na primer preko kontaktnega obrazca. Podatke (ime, e-pošta) uporabljamo izključno za komunikacijo in pripravo ponudbe.
          </p>
          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. Vaše pravice</h2>
          <p>
            Pravico imate do dostopa, popravka, izbrisa in omejitve obdelave vaših osebnih podatkov. Za uveljavljanje pravic nas kontaktirajte na info@lenova.si.
          </p>
        </div>
      </div>
    </div>
  );
}
