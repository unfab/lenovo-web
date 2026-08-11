import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer group nav-item">
            <Link to="/" onClick={() => window.scrollTo(0,0)} className="text-brand-dark font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight uppercase">
              Lenova
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/#storitve" className="nav-item text-gray-600 hover:text-brand-accent font-medium transition-colors">{t('navbar.services')}</a>
            <a href="/#reference" className="nav-item text-gray-600 hover:text-brand-accent font-medium transition-colors">{t('navbar.references')}</a>
            <a href="/#o-nas" className="nav-item text-gray-600 hover:text-brand-accent font-medium transition-colors">{t('navbar.about')}</a>
            <a href="/#kontakt" className="nav-item text-gray-600 hover:text-brand-accent font-medium transition-colors">{t('navbar.contact')}</a>
          </div>

          <div className="hidden md:flex items-center gap-6 nav-item">
            {/* Language Switcher */}
            <div className="flex items-center gap-2 text-sm font-medium text-gray-400">
              <button onClick={() => changeLanguage('sl')} className={`hover:text-brand-accent transition-colors ${i18n.language === 'sl' ? 'text-brand-dark' : ''}`}>SL</button>
              <span>|</span>
              <button onClick={() => changeLanguage('hr')} className={`hover:text-brand-accent transition-colors ${i18n.language === 'hr' ? 'text-brand-dark' : ''}`}>HR</button>
              <span>|</span>
              <button onClick={() => changeLanguage('it')} className={`hover:text-brand-accent transition-colors ${i18n.language === 'it' ? 'text-brand-dark' : ''}`}>IT</button>
            </div>

            {/* CTA Desktop */}
            <a href="/#kontakt" className="inline-flex items-center justify-center min-h-[48px] px-6 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-brand-dark hover:bg-brand-light transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-dark">
              {t('navbar.cta')}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center nav-item">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-brand-dark focus:outline-none p-2"
              aria-label="Odprtje mobilnega menija"
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <a href="/#storitve" onClick={() => setIsOpen(false)} className="block px-3 py-4 rounded-md text-base font-medium text-gray-900 hover:text-brand-accent hover:bg-gray-50 border-b border-gray-100">{t('navbar.services')}</a>
            <a href="/#reference" onClick={() => setIsOpen(false)} className="block px-3 py-4 rounded-md text-base font-medium text-gray-900 hover:text-brand-accent hover:bg-gray-50 border-b border-gray-100">{t('navbar.references')}</a>
            <a href="/#o-nas" onClick={() => setIsOpen(false)} className="block px-3 py-4 rounded-md text-base font-medium text-gray-900 hover:text-brand-accent hover:bg-gray-50 border-b border-gray-100">{t('navbar.about')}</a>
            <a href="/#kontakt" onClick={() => setIsOpen(false)} className="block px-3 py-4 rounded-md text-base font-medium text-brand-accent hover:bg-gray-50 font-bold">{t('navbar.contact')}</a>
            
            <div className="flex items-center gap-4 px-3 py-4 mt-2 border-t border-gray-100 text-base font-medium text-gray-600">
              <button onClick={() => changeLanguage('sl')} className={`hover:text-brand-accent px-2 py-1 rounded ${i18n.language === 'sl' ? 'bg-gray-100 text-brand-dark' : ''}`}>SL</button>
              <button onClick={() => changeLanguage('hr')} className={`hover:text-brand-accent px-2 py-1 rounded ${i18n.language === 'hr' ? 'bg-gray-100 text-brand-dark' : ''}`}>HR</button>
              <button onClick={() => changeLanguage('it')} className={`hover:text-brand-accent px-2 py-1 rounded ${i18n.language === 'it' ? 'bg-gray-100 text-brand-dark' : ''}`}>IT</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
