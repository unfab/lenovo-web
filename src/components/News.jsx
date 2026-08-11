import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function News() {
  const { t } = useTranslation();

  const newsItems = [
    {
      id: 1,
      title: t('news.1.title', 'Spremembe pri obračunu DDV v letu 2024'),
      date: '15. Mar 2024',
      excerpt: t('news.1.excerpt', 'Preverite ključne spremembe pri obračunu davka na dodano vrednost in kako vplivajo na vaše poslovanje.'),
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 2,
      title: t('news.2.title', 'Subvencije za digitalizacijo podjetij'),
      date: '02. Feb 2024',
      excerpt: t('news.2.excerpt', 'Na voljo so nova nepovratna sredstva za digitalizacijo. Z našo pomočjo do lažje prijave na razpis.'),
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 3,
      title: t('news.3.title', 'Odpiramo novo poslovalnico v Umagu'),
      date: '10. Jan 2024',
      excerpt: t('news.3.excerpt', 'Zaradi povečanega povpraševanja smo odprli novo poslovalnico v Umagu, kjer nudimo tudi virtualno pisarno.'),
      image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=600'
    }
  ];

  return (
    <section className="py-24 bg-white" id="novice">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-brand-accent font-semibold tracking-wide uppercase text-sm mb-2">Novice</h2>
            <h3 className="text-3xl font-bold text-gray-900 sm:text-4xl">Aktualno iz sveta financ</h3>
          </div>
          <button className="hidden sm:flex items-center text-brand-dark font-medium hover:text-brand-accent transition-colors">
            Vse novice <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-shadow group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-400 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  {item.date}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-brand-accent transition-colors cursor-pointer">
                  {item.title}
                </h4>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.excerpt}
                </p>
                <button className="text-brand-accent font-medium inline-flex items-center hover:text-brand-dark transition-colors">
                  Preberi več <ArrowRight className="ml-1 w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center sm:hidden">
          <button className="inline-flex items-center justify-center min-h-[48px] px-6 py-2 border border-gray-300 rounded-md shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors w-full">
            Vse novice
          </button>
        </div>
      </div>
    </section>
  );
}
