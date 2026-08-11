import React from 'react';
import { Globe, MapPin, Mail, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-brand-dark border-t border-gray-800 pt-16 pb-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 text-center">
          {/* Branding */}
          <div className="footer-block flex flex-col items-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="text-white font-extrabold text-2xl tracking-tight uppercase">Lenova</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              {t('footer.desc')}
            </p>
            <div className="flex justify-center gap-4">
              <a href="#" className="text-gray-400 hover:text-brand-accent transition-colors transform hover:scale-110">
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Hitre povezave */}
          <div className="footer-block flex flex-col items-center">
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">{t('footer.links')}</h4>
            <ul className="space-y-4">
              <li><a href="/#storitve" className="text-gray-400 hover:text-brand-accent transition-colors text-sm">{t('navbar.services')}</a></li>
              <li><a href="/#storitve" className="text-gray-400 hover:text-brand-accent transition-colors text-sm">{t('services.s2.title')}</a></li>
              <li><a href="/#storitve" className="text-gray-400 hover:text-brand-accent transition-colors text-sm">{t('services.s3.title').split('&')[0]}</a></li>
              <li><a href="/#kontakt" className="text-gray-400 hover:text-brand-accent transition-colors text-sm">{t('navbar.contact')}</a></li>
            </ul>
          </div>

          {/* Kontakt */}
          <div className="footer-block flex flex-col items-center">
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">{t('footer.contact')}</h4>
            <ul className="space-y-4 flex flex-col items-center">
              <li className="flex flex-col items-center gap-1">
                <MapPin className="text-brand-accent w-4 h-4 mb-1" />
                <span className="text-gray-400 text-sm" dangerouslySetInnerHTML={{ __html: t('contact.addressLines') }}></span>
              </li>
              <li className="flex flex-col items-center gap-1 opacity-60 mt-2">
                <MapPin className="text-brand-accent w-4 h-4 mb-1" />
                <span className="text-gray-400 text-sm" dangerouslySetInnerHTML={{ __html: t('contact.branchLines') }}></span>
              </li>
              <li className="flex items-center gap-2 group mt-2">
                <Mail className="text-brand-accent flex-shrink-0 group-hover:scale-110 transition-transform w-4 h-4" />
                <a href="mailto:info@lenova.si" className="text-gray-400 hover:text-brand-accent transition-colors text-sm">info@lenova.si</a>
              </li>
              <li className="flex items-center gap-2 group">
                <Phone className="text-brand-accent flex-shrink-0 group-hover:scale-110 transition-transform w-4 h-4" />
                <a href="tel:059050080" className="text-gray-400 hover:text-brand-accent transition-colors text-sm">0590 50080</a>
              </li>
            </ul>
          </div>

          {/* Delovni čas */}
          <div className="footer-block flex flex-col items-center">
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">{t('footer.hours')}</h4>
            <ul className="space-y-4 w-full max-w-[200px]">
              <li className="flex flex-col items-center border-b border-gray-800 pb-3">
                <span className="text-gray-400 text-sm mb-1">{t('footer.hoursLines.w')}</span>
                <span className="text-white text-sm font-medium">{t('footer.hoursLines.wt')}</span>
              </li>
              <li className="flex flex-col items-center border-b border-gray-800 pb-3">
                <span className="text-gray-400 text-sm mb-1">{t('footer.hoursLines.e')}</span>
                <span className="text-brand-accent text-sm font-medium">{t('footer.hoursLines.et')}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Company Data */}
        <div className="border-t border-gray-800 pt-8 pb-4 flex flex-col lg:flex-row justify-center lg:gap-16 gap-8 footer-block text-center">
          <div className="flex flex-col items-center">
            <h5 className="text-white text-xs font-bold uppercase tracking-wider mb-3">{t('footer.data')}</h5>
            <div className="text-gray-400 text-sm space-y-1">
              <p><span className="text-gray-500">Matična številka:</span> 6780962000</p>
              <p><span className="text-gray-500">Davčna številka SI:</span> 44975465</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h5 className="text-white text-xs font-bold uppercase tracking-wider mb-3">{t('footer.bank')}</h5>
            <div className="text-gray-400 text-sm flex flex-col sm:flex-row gap-6 justify-center">
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
        <div className="border-t border-gray-800 pt-8 flex flex-col items-center justify-center gap-4 footer-block">
          <p className="text-gray-500 text-sm text-center">
            &copy; {new Date().getFullYear()} Lenova d.o.o. {t('footer.rights')}
          </p>
          <div className="flex gap-6 justify-center">
            <Link to="/zasebnost" className="text-gray-500 hover:text-white transition-colors text-sm">{t('footer.privacy')}</Link>
            <Link to="/pogoji" className="text-gray-500 hover:text-white transition-colors text-sm">{t('footer.terms')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
