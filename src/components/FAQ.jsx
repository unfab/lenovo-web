import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function FAQ() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: t('faq.q1', 'Kako poteka zamenjava računovodskega servisa?'),
      answer: t('faq.a1', 'Zamenjava je zelo preprosta. Mi poskrbimo za vso dokumentacijo in prenos podatkov. Postopek je običajno zaključen v nekaj dneh, brez prekinitev vašega poslovanja.')
    },
    {
      question: t('faq.q2', 'Katere dokumente potrebujem za začetek sodelovanja?'),
      answer: t('faq.a2', 'Za začetek potrebujemo izpis iz AJPES-a, bilanco preteklega leta in osebni dokument zastopnika. Vse ostale podrobnosti se dogovorimo na uvodnem sestanku.')
    },
    {
      question: t('faq.q3', 'Ali nudite storitve tudi za podjetja izven Kopra?'),
      answer: t('faq.a3', 'Da, z digitalnim računovodstvom in sodobnimi orodji uspešno sodelujemo s podjetji iz cele Slovenije in tudi na Hrvaškem (Umag).')
    },
    {
      question: t('faq.q4', 'Kako nam posredujete dokumente?'),
      answer: t('faq.a4', 'Dokumente lahko pošljete po pošti, prinesete osebno ali pa jih enostavno naložite preko varne spletne povezave v naš sistem.')
    }
  ];

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-200" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-accent font-semibold tracking-wide uppercase text-sm mb-2">Pogosta Vprašanja</h2>
          <h3 className="text-3xl font-bold text-gray-900 sm:text-4xl">Imate vprašanja? Imamo odgovore.</h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border border-gray-200 rounded-xl bg-white overflow-hidden transition-all duration-300 ${openIndex === index ? 'shadow-md border-brand-accent' : 'hover:border-gray-300'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="flex justify-between items-center w-full px-6 py-5 text-left focus:outline-none"
              >
                <span className={`font-semibold text-lg ${openIndex === index ? 'text-brand-accent' : 'text-gray-900'}`}>
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${openIndex === index ? 'transform rotate-180 text-brand-accent' : ''}`}
                />
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                style={{ overflow: 'hidden' }}
              >
                <div className="px-6 pb-5 text-gray-600">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
