import React, { useState, useRef } from 'react';
import { Mail, MapPin, ShieldCheck, Loader2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function ContactForm() {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formError, setFormError] = useState('');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    honeypot: ''
  });
  
  const [lastSubmitTime, setLastSubmitTime] = useState(0);
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const sanitizedValue = value.replace(/[<>]/g, '');
    setFormData(prev => ({ ...prev, [name]: sanitizedValue }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value.trim() }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormError('');
    
    if (formData.honeypot) return; 
    
    if (formData.name.length < 2 || formData.name.length > 100) {
      setFormError(t('contact.form.errorName'));
      return;
    }
    if (formData.message.length < 10 || formData.message.length > 2000) {
      setFormError(t('contact.form.errorMessage'));
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormError(t('contact.form.errorEmail'));
      return;
    }

    const now = Date.now();
    if (now - lastSubmitTime < 30000) {
      setFormError(t('contact.form.errorSpam'));
      return;
    }

    setIsSubmitting(true);
    
    const accessKey = "YOUR_WEB3FORMS_ACCESS_KEY_HERE";
    
    if (accessKey === "YOUR_WEB3FORMS_ACCESS_KEY_HERE") {
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '', honeypot: '' });
        setIsSubmitting(false);
        setShowSuccess(true);
        setLastSubmitTime(Date.now());
        setTimeout(() => setShowSuccess(false), 5000);
      }, 1500);
      return;
    }

    const payload = {
      access_key: accessKey,
      name: formData.name,
      email: formData.email,
      message: formData.message
    };

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload)
    })
    .then(async (response) => {
      let json = await response.json();
      if (response.status === 200) {
        setFormData({ name: '', email: '', message: '', honeypot: '' });
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 5000);
      } else {
        setFormError(json.message || "Error");
      }
    })
    .catch(() => setFormError("Network Error"))
    .finally(() => {
      setIsSubmitting(false);
      setLastSubmitTime(Date.now());
    });
  };

  return (
    <section id="kontakt" className="py-24 bg-white overflow-hidden border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <div className="flex flex-col justify-center contact-info">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">{t('contact.title')}</h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              {t('contact.desc')}
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-100 shadow-sm mr-4 transform hover:scale-110 transition-transform">
                  <Mail className="text-brand-dark w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">{t('contact.email')}</p>
                  <a href="mailto:info@lenova.si" className="text-lg font-bold text-gray-900 hover:text-brand-accent transition-colors flex items-center">info@lenova.si</a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-100 shadow-sm mr-4 transform hover:scale-110 transition-transform">
                  <MapPin className="text-brand-dark w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">{t('contact.addressTitle')}</p>
                  <p className="text-lg font-bold text-gray-900 flex items-center mt-1" dangerouslySetInnerHTML={{ __html: t('contact.addressLines') }}></p>
                </div>
              </div>

              <div className="flex items-center opacity-70">
                <div className="w-12 h-12 bg-transparent flex items-center justify-center mr-4">
                  <MapPin className="text-brand-accent w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">{t('contact.branchTitle')}</p>
                  <p className="text-sm text-gray-600 mt-1">{t('contact.branchLines')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-gray-50 p-8 sm:p-10 rounded-2xl border border-gray-100 shadow-lg contact-form-wrap relative">
            <div className="absolute top-4 right-4 flex items-center gap-1 bg-green-50 text-green-700 px-2 py-1 rounded text-xs font-medium border border-green-200">
              <ShieldCheck className="w-3 h-3" /> {t('contact.form.secure')}
            </div>

            <form ref={formRef} onSubmit={handleFormSubmit} className="space-y-6 mt-4">
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
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">{t('contact.form.name')}</label>
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
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">{t('contact.form.email')}</label>
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
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">{t('contact.form.message')}</label>
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
                  {formData.message.length}/2000
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
                  <><Loader2 className="animate-spin mr-2 w-5 h-5" /> {t('contact.form.sending')}</>
                ) : t('contact.form.button')}
              </button>

              {showSuccess && (
                <div className="mt-4 p-4 bg-green-50 text-green-800 rounded-md border border-green-200 text-sm text-center font-medium">
                  {t('contact.form.success')}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
