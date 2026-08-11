import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function Terms() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">{t('footer.terms')}</h1>
        <div className="prose prose-brand text-gray-600 space-y-6">
          <p>
            Z uporabo spletne strani Lenova d.o.o. in njenih storitev se strinjate s spodnjimi pogoji poslovanja. Prosimo, da jih natančno preberete.
          </p>
          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Splošne določbe</h2>
          <p>
            Ti pogoji urejajo pravice in obveznosti med podjetjem Lenova d.o.o. in uporabniki naših storitev (računovodstvo, kadrovsko svetovanje, itd.).
          </p>
          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. Odgovornost</h2>
          <p>
            Vsebina na spletni strani je informativne narave. Podjetje ne prevzema odgovornosti za morebitne napake ali netočnosti v objavljenih vsebinah, niti za škodo, ki bi nastala z uporabo te spletne strani.
          </p>
          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. Avtorske pravice</h2>
          <p>
            Vsa vsebina, vključno z besedili, slikami in logotipi, je zaščitena in je last podjetja Lenova d.o.o. ali njenih partnerjev. Kopiranje in distribucija brez predhodnega dovoljenja ni dovoljena.
          </p>
        </div>
      </div>
    </div>
  );
}
