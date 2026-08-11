import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, PieChart, Users, MapPin, Star, Mail, Phone, Loader2, CheckCircle2, Briefcase, Globe, ShieldCheck } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formError, setFormError] = useState('');
  
  // Varnostni form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    honeypot: '' // Spam prevention
  });
  
  // Rate limiting preventions
  const [lastSubmitTime, setLastSubmitTime] = useState(0);

  const heroRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    gsap.from(".nav-item", { y: -20, opacity: 0, duration: 0.6, stagger: 0.1, ease: "power2.out", delay: 0.1 });
    gsap.from(".hero-anim", { y: 30, opacity: 0, duration: 0.8, stagger: 0.2, ease: "power3.out", delay: 0.3 });
    gsap.to(".hero-image-wrap", {
      yPercent: 15, ease: "none",
      scrollTrigger: { trigger: "#hero", start: "top top", end: "bottom top", scrub: true }
    });
    gsap.utils.toArray('.service-card').forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: { trigger: card, start: "top 85%", toggleActions: "play none none none" },
        y: 40, opacity: 0, duration: 0.6, ease: "power2.out", delay: i * 0.15
      });
    });
    gsap.to(".marquee-track", { xPercent: -50, ease: "none", duration: 25, repeat: -1 });
    gsap.from(".contact-info > *", { scrollTrigger: { trigger: "#kontakt", start: "top 80%" }, x: -30, opacity: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" });
    gsap.from(".contact-form-wrap", { scrollTrigger: { trigger: "#kontakt", start: "top 80%" }, x: 30, opacity: 0, duration: 0.8, ease: "power3.out" });
    gsap.from(".o-nas-anim", { scrollTrigger: { trigger: "#o-nas", start: "top 80%" }, y: 30, opacity: 0, duration: 0.8, stagger: 0.2, ease: "power3.out" });
    gsap.from(".footer-block", { scrollTrigger: { trigger: "footer", start: "top 90%" }, y: 30, opacity: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Character binding: odstrani prekomerne presledke (več presledkov spremeni v enega),
    // hkrati onemogoči vnos nevarnih znakov kot so < in > (osnovni XSS prevention na frontendu)
    let sanitizedValue = value.replace(/\s{2,}/g, ' ').replace(/[<>]/g, '');
    
    setFormData(prev => ({ ...prev, [name]: sanitizedValue }));
  };

  const handleBlur = (e) => {
    // Odstrani presledke na začetku in koncu (trim)
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value.trim() }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormError('');
    
    // 1. Honeypot check (Spam prevention - boti ponavadi izpolnijo vsa skrita polja)
    if (formData.honeypot) {
      console.warn("Spam detected");
      return; // Silent fail for bots
    }
    
    // 2. Character minimization & validation
    if (formData.name.length < 2 || formData.name.length > 100) {
      setFormError('Ime mora vsebovati med 2 in 100 znakov.');
      return;
    }
    if (formData.message.length < 10 || formData.message.length > 2000) {
      setFormError('Sporočilo mora vsebovati med 10 in 2000 znakov.');
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormError('Prosimo vnesite veljaven e-poštni naslov.');
      return;
    }

    // 3. DDoS / Rate Limit prevention (Preprečitev pošiljanja več kot 1x na 30 sekund)
    const now = Date.now();
    if (now - lastSubmitTime < 30000) {
      setFormError('Prosimo počakajte nekaj časa pred ponovnim pošiljanjem (anti-spam zaščita).');
      return;
    }

    setIsSubmitting(true);
    
    // Simulacija omrežnega zahtevka z varnostno obdelavo
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '', honeypot: '' });
      setIsSubmitting(false);
      setShowSuccess(true);
      setLastSubmitTime(Date.now());
      
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }, 1500);
  };

  const partners = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer group nav-item" onClick={() => window.scrollTo(0,0)}>
              <span className="text-brand-dark font-extrabold text-3xl tracking-tight uppercase">Lenova</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#storitve" className="nav-item text-gray-600 hover:text-brand-accent font-medium transition-colors">Storitve</a>
              <a href="#reference" className="nav-item text-gray-600 hover:text-brand-accent font-medium transition-colors">Reference</a>
              <a href="#kontakt" className="nav-item text-gray-600 hover:text-brand-accent font-medium transition-colors">Kontakt</a>
            </div>

            {/* CTA */}
            <div className="nav-item flex items-center">
              <a href="#kontakt" className="inline-flex items-center justify-center min-h-[48px] px-6 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-brand-dark hover:bg-brand-light transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-dark">
                Stopite v stik
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-brand-dark overflow-hidden" ref={heroRef}>
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
                <a href="#storitve" className="inline-flex items-center justify-center min-h-[48px] px-8 py-3 border border-transparent rounded-md text-lg font-medium text-brand-dark bg-brand-accent hover:bg-brand-accentHover transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent shadow-[0_0_20px_rgba(69,187,165,0.3)]">
                  Spoznajte naše storitve
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="hero-anim hidden lg:block relative hero-image-wrap">
              <div className="absolute inset-0 bg-brand-accent rounded-2xl transform translate-x-4 translate-y-4 opacity-30"></div>
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800" alt="Ekipa sodelavcev v računovodstvu" className="relative rounded-2xl shadow-2xl w-full object-cover h-[450px]" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Partners Section (Placeholders) */}
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

      {/* O nas Section */}
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
                  <span>Imamo sklenjeno zavarovanje poklicne odgovornosti za zaščito uporabnika računovodskih storitev</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <CheckCircle2 className="text-brand-accent mr-3 w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Obveščamo stranke o zakonskih spremembah, ki so pomembne za stranko in</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <CheckCircle2 className="text-brand-accent mr-3 w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Vse stranke individualno obravnavamo</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white" id="storitve">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-brand-accent font-semibold tracking-wide uppercase text-sm mb-2">Naše storitve</h2>
            <h3 className="text-3xl font-bold text-gray-900 sm:text-4xl">Celovita podpora vašemu podjetju</h3>
            <p className="mt-4 text-lg text-gray-600">Nudimo strokovne storitve, ki vam omogočajo, da se osredotočite na rast vašega posla, medtem ko mi poskrbimo za vse ostalo.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="service-card bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-brand-light rounded-xl flex items-center justify-center mb-6">
                <PieChart className="text-brand-accent w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Računovodstvo</h4>
              <p className="text-gray-600 leading-relaxed mb-6">
                Natančno vodenje poslovnih knjig za s.p. in d.o.o. Priprava zaključnih računov, obračun DDV in strateško davčno svetovanje po meri vaše dejavnosti.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle2 className="text-brand-accent mr-2 w-4 h-4" /> Optimizacija davkov
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle2 className="text-brand-accent mr-2 w-4 h-4" /> Digitalno poslovanje
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="service-card bg-brand-accent rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <Users className="text-white w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Kadrovske storitve</h4>
              <p className="text-white/90 leading-relaxed mb-6">
                Celovito urejanje kadrovske administracije. Obračun plač, priprava pogodb o zaposlitvi, prijavljanje delavcev in vodenje potnih nalogov.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-white">
                  <CheckCircle2 className="text-white/80 mr-2 w-4 h-4" /> Obračun plač in prispevkov
                </li>
                <li className="flex items-center text-sm text-white">
                  <CheckCircle2 className="text-white/80 mr-2 w-4 h-4" /> Urejanje potnih nalogov
                </li>
              </ul>
            </div>

            {/* Service 3 (Umag mentioned) */}
            <div className="service-card bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="w-14 h-14 bg-brand-light rounded-xl flex items-center justify-center mb-6">
                <Briefcase className="text-brand-accent w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Svetovanje & Ustanavljanje družb</h4>
              <p className="text-gray-600 leading-relaxed mb-6">
                Poleg poslovanja v Sloveniji vam preko naše poslovalnice v <strong>Umagu</strong> nudimo tudi poslovno svetovanje in virtualno pisarno na Hrvaškem.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle2 className="text-brand-accent mr-2 w-4 h-4" /> Ustanavljanje družb (SLO in HR)
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle2 className="text-brand-accent mr-2 w-4 h-4" /> Virtualna pisarna (Tudi v <strong>Umagu</strong>)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>



      {/* Contact Form */}
      <section id="kontakt" className="py-24 bg-white overflow-hidden border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Info */}
            <div className="flex flex-col justify-center contact-info">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Stopite v stik z nami</h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Z več kot 15 letnimi izkušnjami in več kot 150 strankami smo prava izbira. Pogovorimo se o tem, kako lahko razbremenimo vašo administracijo.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-100 shadow-sm mr-4 transform hover:scale-110 transition-transform">
                    <Mail className="text-brand-dark w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">E-pošta</p>
                    <a href="mailto:info@lenova.si" className="text-lg font-bold text-gray-900 hover:text-brand-accent transition-colors flex items-center">info@lenova.si</a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-100 shadow-sm mr-4 transform hover:scale-110 transition-transform">
                    <MapPin className="text-brand-dark w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Sedež podjetja</p>
                    <p className="text-lg font-bold text-gray-900 flex items-center">Ankaranska cesta 5c</p>
                    <p className="text-sm text-gray-500">6000 Koper, Lenova d.o.o.</p>
                  </div>
                </div>

                <div className="flex items-center opacity-70">
                  <div className="w-12 h-12 bg-transparent flex items-center justify-center mr-4">
                    <MapPin className="text-brand-accent w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Poslovalnica</p>
                    <p className="text-sm text-gray-600">Umag, Hrvaška</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form - with Safety Features */}
            <div className="bg-gray-50 p-8 sm:p-10 rounded-2xl border border-gray-100 shadow-lg contact-form-wrap relative">
              
              <div className="absolute top-4 right-4 flex items-center gap-1 bg-green-50 text-green-700 px-2 py-1 rounded text-xs font-medium border border-green-200">
                <ShieldCheck className="w-3 h-3" /> Zavarovano
              </div>

              <form ref={formRef} onSubmit={handleFormSubmit} className="space-y-6 mt-4">
                
                {/* Honeypot field - invisible to users, blocks bots */}
                <input 
                  type="text" 
                  name="honeypot" 
                  value={formData.honeypot} 
                  onChange={handleChange}
                  style={{ display: 'none' }} 
                  tabIndex="-1" 
                  autoComplete="off" 
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Ime in priimek / Podjetje</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      required 
                      minLength={2}
                      maxLength={100}
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="w-full min-h-[48px] px-4 rounded-md border border-gray-300 focus:border-brand-accent focus:ring focus:ring-brand-accent focus:ring-opacity-50 transition-colors bg-white outline-none" 
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">E-poštni naslov</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      required 
                      maxLength={100}
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="w-full min-h-[48px] px-4 rounded-md border border-gray-300 focus:border-brand-accent focus:ring focus:ring-brand-accent focus:ring-opacity-50 transition-colors bg-white outline-none" 
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Vaše sporočilo ali povpraševanje</label>
                  <textarea 
                    id="message" 
                    name="message"
                    rows={4} 
                    required
                    minLength={10}
                    maxLength={2000}
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-brand-accent focus:ring focus:ring-brand-accent focus:ring-opacity-50 transition-colors bg-white resize-none outline-none"
                  ></textarea>
                  <div className="text-right text-xs text-gray-400 mt-1">
                    {formData.message.length}/2000 znakov
                  </div>
                </div>

                {formError && (
                  <div className="p-3 bg-red-50 text-red-600 rounded-md border border-red-200 text-sm">
                    {formError}
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full min-h-[48px] flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-brand-dark hover:bg-brand-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-dark transition-transform transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <><Loader2 className="animate-spin mr-2 w-5 h-5" /> Pošiljam varno...</>
                  ) : 'Pošljite povpraševanje'}
                </button>

                {showSuccess && (
                  <div className="mt-4 p-4 bg-green-50 text-green-800 rounded-md border border-green-200 text-sm text-center font-medium">
                    Vaše sporočilo je bilo uspešno in varno poslano. Kmalu vas bomo kontaktirali.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                <li><a href="#storitve" className="text-gray-400 hover:text-brand-accent transition-colors text-sm">Računovodstvo</a></li>
                <li><a href="#storitve" className="text-gray-400 hover:text-brand-accent transition-colors text-sm">Kadrovske storitve</a></li>
                <li><a href="#storitve" className="text-gray-400 hover:text-brand-accent transition-colors text-sm">Svetovanje</a></li>
                <li><a href="#kontakt" className="text-gray-400 hover:text-brand-accent transition-colors text-sm">Kontakt</a></li>
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
                <p><span className="text-gray-500">Davčna številka:</span> SI 44975465</p>
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
    </>
  );
}

export default App;
