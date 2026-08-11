import React from 'react';

export default function TrustLogos() {
  const partners = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <section className="py-20 bg-gray-50 border-t border-gray-200" id="reference">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-sm font-semibold text-brand-accent tracking-wide uppercase mb-8">Zaupajo nam (več kot 150+ strank)</h2>
        
        {/* Logo Grid Placeholder */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {partners.map((partner) => (
            <div key={partner} className="bg-white border border-gray-200 h-24 rounded-lg flex items-center justify-center shadow-sm">
              <span className="text-gray-400 font-medium">Logotip Partnerja</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
