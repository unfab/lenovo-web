import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Components
import Hero from '../components/Hero';
import TrustLogos from '../components/TrustLogos';
import About from '../components/About';
import Services from '../components/Services';
import News from '../components/News';
import FAQ from '../components/FAQ';
import ContactForm from '../components/ContactForm';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Hero Animations
    gsap.from('.hero-anim', {
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: 'power3.out',
      delay: 0.2
    });

    // About Section Animation
    gsap.from('.o-nas-anim', {
      scrollTrigger: {
        trigger: '#o-nas',
        start: 'top 80%',
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out'
    });

    // Service Cards Animation
    gsap.from('.service-card', {
      scrollTrigger: {
        trigger: '#storitve',
        start: 'top 80%',
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power2.out'
    });

    // Contact form animation
    gsap.from('.contact-info > *', {
      scrollTrigger: {
        trigger: '#kontakt',
        start: 'top 80%',
      },
      x: -30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power2.out'
    });

    gsap.from('.contact-form-wrap', {
      scrollTrigger: {
        trigger: '#kontakt',
        start: 'top 80%',
      },
      x: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out'
    });

    // Footer Animation
    gsap.from('.footer-block', {
      scrollTrigger: {
        trigger: 'footer',
        start: 'top 90%',
      },
      y: 20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out'
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="pt-20">
      <Hero />
      <TrustLogos />
      <About />
      <Services />
      <News />
      <FAQ />
      <ContactForm />
    </div>
  );
}
