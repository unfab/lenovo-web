import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const langDropdownRef = useRef(null);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsLangOpen(false);
    setIsOpen(false);
  };

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const currentLang = i18n.language.toUpperCase();
  const languages = [
    { code: 'sl', label: 'Slovenščina' },
    { code: 'en', label: 'English' },
    { code: 'hr', label: 'Hrvatski' },
    { code: 'it', label: 'Italiano' }
  ];

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
            {/* Language Switcher Dropdown */}
            <div className="relative" ref={langDropdownRef}>
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1 text-sm font-bold text-gray-700 hover:text-brand-accent transition-colors px-2 py-1 rounded"
              >
                {currentLang} <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isLangOpen ? 'transform rotate-180' : ''}`} />
              </button>
              
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-100 rounded-lg shadow-xl overflow-hidden py-2 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`block w-full text-left px-4 py-2.5 text-sm font-medium transition-colors ${
                        i18n.language === lang.code 
                          ? 'bg-gray-50 text-brand-accent font-semibold' 
                          : 'text-gray-600 hover:bg-gray-50 hover:text-brand-dark'
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
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
            <a href="/#kontakt" onClick={() => setIsOpen(false)} className="block px-3 py-4 rounded-md text-base font-medium text-brand-accent hover:bg-gray-50 font-bold border-b border-gray-100">{t('navbar.contact')}</a>
            
            <div className="px-3 py-4">
              <p className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider">Izberite jezik</p>
              <div className="flex flex-col space-y-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      i18n.language === lang.code 
                        ? 'bg-gray-50 text-brand-accent font-semibold' 
                        : 'text-gray-600 hover:bg-gray-50 hover:text-brand-dark border border-transparent'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
