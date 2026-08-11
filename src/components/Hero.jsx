import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-brand-dark overflow-hidden">
      {/* Abstract Background Vectors */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="absolute right-0 top-0 transform translate-x-1/3 -translate-y-1/4" width="600" height="600" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#45bba5" d="M45.7,-76.4C58.9,-69.3,69.1,-55.4,76.5,-40.5C83.9,-25.6,88.5,-9.7,85.5,5.1C82.5,19.9,71.9,33.5,60.6,45.3C49.3,57.1,37.3,67.1,23.1,73.6C8.9,80.1,-7.5,83.1,-22.7,79.5C-37.9,75.9,-51.9,65.7,-63.3,53.2C-74.7,40.7,-83.5,25.9,-86.2,10.2C-88.9,-5.5,-85.5,-22.1,-76.8,-35.6C-68.1,-49.1,-54.1,-59.5,-40.1,-66.1C-26.1,-72.7,-13,-75.5,1.5,-77.8C16,-80.1,32.5,-83.5,45.7,-76.4Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-3xl">
            <h1 className="hero-anim text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-2">
              Računovodski servis Koper
            </h1>
            <p className="hero-anim text-xl sm:text-2xl text-gray-200 font-light mb-6 subheadline">
              Zanesljivo računovodstvo, ki <span className="text-brand-accent font-medium">razume vaš posel.</span>
            </p>
            
            <div className="hero-anim flex flex-wrap gap-4 mb-8">
              {/* Huge stats highlighting 15 years and 150+ clients */}
              <div className="bg-brand-accent/10 border border-brand-accent/30 rounded-lg px-6 py-4 flex items-center gap-4">
                <div className="text-brand-accent text-4xl font-extrabold tracking-tight">15+</div>
                <div className="text-white text-sm font-bold uppercase tracking-widest leading-tight">Let<br/>Izkušenj</div>
              </div>
              <div className="bg-brand-accent/10 border border-brand-accent/30 rounded-lg px-6 py-4 flex items-center gap-4">
                <div className="text-brand-accent text-4xl font-extrabold tracking-tight">150+</div>
                <div className="text-white text-sm font-bold uppercase tracking-widest leading-tight">Zadovoljnih<br/>Strank</div>
              </div>
            </div>

            <p className="hero-anim text-lg sm:text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl">
              Z našim podjetjem v Kopru ponujamo strokovno vodenje poslovnih knjig in davčno svetovanje na celotni Obali in širše. Več kot 15 let zanesljive podpore za s.p. in d.o.o.
            </p>

            <div className="hero-anim flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <a href="/#storitve" className="inline-flex items-center justify-center min-h-[48px] px-8 py-3 border border-transparent rounded-md text-lg font-medium text-brand-dark bg-brand-accent hover:bg-brand-accentHover transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent shadow-[0_0_20px_rgba(69,187,165,0.3)]">
                Spoznajte naše storitve
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="hero-anim hidden lg:block relative hero-image-wrap">
            <div className="absolute inset-0 bg-brand-accent rounded-2xl transform translate-x-4 translate-y-4 opacity-30"></div>
            <img loading="lazy" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800" alt="Ekipa sodelavcev v računovodstvu" className="relative rounded-2xl shadow-2xl w-full object-cover h-[450px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
