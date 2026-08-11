import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-200" id="o-nas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="o-nas-anim">
            <h2 className="text-brand-accent font-semibold tracking-wide uppercase text-sm mb-2">O nas</h2>
            <h3 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">Računovodski servis Lenova ima vse lastnosti, ki jih mora imeti dober računovodski servis:</h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Verjamemo v strokovnost in red. Naš cilj je zagotoviti najvišjo raven storitev in poskrbeti za varnost ter rast vašega poslovanja. Zato pri nas veljajo naslednja načela:
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 o-nas-anim">
            <ul className="space-y-4">
              <li className="flex items-start text-gray-700">
                <CheckCircle2 className="text-brand-accent mr-3 w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Smo poslovno uspešni in poslujemo stabilno</span>
              </li>
              <li className="flex items-start text-gray-700">
                <CheckCircle2 className="text-brand-accent mr-3 w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Imamo širok nabor strank</span>
              </li>
              <li className="flex items-start text-gray-700">
                <CheckCircle2 className="text-brand-accent mr-3 w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Izvajamo najcelovitejše, najzahtevnejše in raznovrstne računovodske storitve</span>
              </li>
              <li className="flex items-start text-gray-700">
                <CheckCircle2 className="text-brand-accent mr-3 w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Naš kader je strokoven in se neprestano izobražuje</span>
              </li>
              <li className="flex items-start text-gray-700">
                <CheckCircle2 className="text-brand-accent mr-3 w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Imamo sklenjeno zavarovanje poklicne odgovornosti za zaščito uporabnika</span>
              </li>
              <li className="flex items-start text-gray-700">
                <CheckCircle2 className="text-brand-accent mr-3 w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Vse stranke obravnavamo individualno in jih obveščamo o zakonskih spremembah</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
