import React from 'react';
import { Globe, MapPin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-gray-800 pt-16 pb-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Branding */}
          <div className="footer-block">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-white font-extrabold text-2xl tracking-tight uppercase">Lenova</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Zanesljiv partner z več kot 15 leti izkušenj in več kot 150 zadovoljnimi strankami.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-brand-accent transition-colors transform hover:scale-110">
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Hitre povezave */}
          <div className="footer-block">
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Hitre povezave</h4>
            <ul className="space-y-4">
              <li><a href="/#storitve" className="text-gray-400 hover:text-brand-accent transition-colors text-sm">Računovodstvo</a></li>
              <li><a href="/#storitve" className="text-gray-400 hover:text-brand-accent transition-colors text-sm">Kadrovske storitve</a></li>
              <li><a href="/#storitve" className="text-gray-400 hover:text-brand-accent transition-colors text-sm">Svetovanje</a></li>
              <li><a href="/#kontakt" className="text-gray-400 hover:text-brand-accent transition-colors text-sm">Kontakt</a></li>
            </ul>
          </div>

          {/* Kontakt */}
          <div className="footer-block">
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Kontakt & Lokacija</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-brand-accent flex-shrink-0 mt-0.5 w-4 h-4" />
                <span className="text-gray-400 text-sm">Lenova d.o.o.<br/>Ankaranska cesta 5c, 6000 Koper</span>
              </li>
              <li className="flex items-start gap-3 opacity-60">
                <MapPin className="text-brand-accent flex-shrink-0 mt-0.5 w-4 h-4" />
                <span className="text-gray-400 text-sm">Poslovalnica Umag<br/>Ulica 1. svibnja 4, Umag</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="text-brand-accent flex-shrink-0 group-hover:scale-110 transition-transform w-4 h-4" />
                <a href="mailto:info@lenova.si" className="text-gray-400 hover:text-brand-accent transition-colors text-sm">info@lenova.si</a>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="text-brand-accent flex-shrink-0 group-hover:scale-110 transition-transform w-4 h-4" />
                <a href="tel:059050080" className="text-gray-400 hover:text-brand-accent transition-colors text-sm">0590 50080</a>
              </li>
            </ul>
          </div>

          {/* Delovni čas */}
          <div className="footer-block">
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Delovni čas</h4>
            <ul className="space-y-4">
              <li className="flex justify-between items-center border-b border-gray-800 pb-2">
                <span className="text-gray-400 text-sm">Ponedeljek - Petek</span>
                <span className="text-white text-sm font-medium">09:00 - 15:00</span>
              </li>
              <li className="flex justify-between items-center border-b border-gray-800 pb-2">
                <span className="text-gray-400 text-sm">Sobota, Nedelja</span>
                <span className="text-brand-accent text-sm font-medium">Zaprto</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Company Data */}
        <div className="border-t border-gray-800 pt-8 pb-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 footer-block">
          <div>
            <h5 className="text-white text-xs font-bold uppercase tracking-wider mb-3">Podatki podjetja</h5>
            <div className="text-gray-400 text-sm space-y-1">
              <p><span className="text-gray-500">Matična številka:</span> 6780962000</p>
              <p><span className="text-gray-500">Davčna številka SI:</span> 44975465</p>
            </div>
          </div>
          <div className="lg:col-span-2">
            <h5 className="text-white text-xs font-bold uppercase tracking-wider mb-3">Bančni računi (TRR)</h5>
            <div className="text-gray-400 text-sm flex flex-col sm:flex-row gap-6">
              <div>
                <span className="block text-gray-300 font-medium tracking-wide">SI56 1010 0005 5747 350</span>
                <span className="text-gray-500 text-xs">Banka Intesa Sanpaolo d.d.</span>
              </div>
              <div>
                <span className="block text-gray-300 font-medium tracking-wide">SI56 2900 0005 1795 723</span>
                <span className="text-gray-500 text-xs">UNICREDIT BANKA SLOVENIJA d.d.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 footer-block">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Lenova d.o.o. Vse pravice pridržane.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Pravilnik o zasebnosti</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Pogoji poslovanja</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
