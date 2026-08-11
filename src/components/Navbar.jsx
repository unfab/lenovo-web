import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
            <a href="/#storitve" className="nav-item text-gray-600 hover:text-brand-accent font-medium transition-colors">Storitve</a>
            <a href="/#reference" className="nav-item text-gray-600 hover:text-brand-accent font-medium transition-colors">Reference</a>
            <a href="/#o-nas" className="nav-item text-gray-600 hover:text-brand-accent font-medium transition-colors">O nas</a>
            <a href="/#kontakt" className="nav-item text-gray-600 hover:text-brand-accent font-medium transition-colors">Kontakt</a>
          </div>

          {/* CTA Desktop */}
          <div className="hidden md:flex nav-item items-center">
            <a href="/#kontakt" className="inline-flex items-center justify-center min-h-[48px] px-6 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-brand-dark hover:bg-brand-light transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-dark">
              Stopite v stik
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
            <a href="/#storitve" onClick={() => setIsOpen(false)} className="block px-3 py-4 rounded-md text-base font-medium text-gray-900 hover:text-brand-accent hover:bg-gray-50 border-b border-gray-100">Storitve</a>
            <a href="/#reference" onClick={() => setIsOpen(false)} className="block px-3 py-4 rounded-md text-base font-medium text-gray-900 hover:text-brand-accent hover:bg-gray-50 border-b border-gray-100">Reference</a>
            <a href="/#o-nas" onClick={() => setIsOpen(false)} className="block px-3 py-4 rounded-md text-base font-medium text-gray-900 hover:text-brand-accent hover:bg-gray-50 border-b border-gray-100">O nas</a>
            <a href="/#kontakt" onClick={() => setIsOpen(false)} className="block px-3 py-4 rounded-md text-base font-medium text-brand-accent hover:bg-gray-50 font-bold">Kontakt</a>
          </div>
        </div>
      )}
    </nav>
  );
}
