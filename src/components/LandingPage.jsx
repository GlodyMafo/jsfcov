import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Transition } from '@headlessui/react';
import PartnersSection from './Parteners';
import Testimonials from './Testimonial';
import Footer from './Footer';
import FAQ from './Faq';
import Pricing from './Pricing';
import Features from './Features';

const LandingPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    setIsScrolled(offset > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans">
      {/* Header */}
      <header className={`fixed top-0 w-full transition duration-300 z-50 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="container mx-auto py-4 flex justify-between items-center px-4 md:px-20">
          <img src="josephine_Logo.png" alt="Logo" className={`w-32 md:w-40 transition-colors duration-300 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex">
            <ul className="flex space-x-6">
              {["about", "features", "pricing", "contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item}
                    smooth={true}
                    duration={500}
                    className={`font-semibold text-lg cursor-pointer transition-colors duration-300 ${isScrolled ? 'text-gray-800 hover:text-[#E98D52]' : 'text-gray-800 hover:text-[#E98D52]'}`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className={`text-2xl focus:outline-none transition-colors duration-300 ${isScrolled ? 'text-gray-800' : 'text-gray-800'}`}
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <Transition
          show={isMenuOpen}
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-150 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <ul ref={ref} className={`px-6 w-[30%] ml-[280px] pt-4 pb-2 space-y-2 ${isScrolled ? 'bg-white' : 'bg-white'}`}>
                {["about", "features", "pricing", "contact"].map((item) => (
                  <li key={item}>
                    <Link
                      to={item}
                      smooth={true}
                      duration={500}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block text-lg cursor-pointer transition-colors duration-300 ${isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-gray-800 hover:text-blue-400'}`}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Transition>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-white via-[#E16718] via-[#FF8C00] to-gray-200 text-gray-800 py-28 lg:py-80 flex flex-col-reverse lg:flex-row items-center justify-between px-6 md:px-16 lg:px-32 lg:h-screen">
        <div className="absolute inset-0 bg-white opacity-85 backdrop-filter backdrop-blur-lg z-0"></div>

        {/* Content */}
        <div className="relative z-10 w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-10 animate-fadeInUp">Convertissez vos fichiers en un clin d'œil !</h2>
          <p className="text-lg md:text-xl mb-10 animate-fadeInUp delay-200">
            Avec Josephine File Converter, simplifiez la conversion de vos fichiers et obtenez des résultats de haute qualité en quelques clics et 100% gratuit pour les utilisateurs de base.
          </p>
          <Link
            to="/application"
            className="inline-block bg-[#E98D52] text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-[#A94D12] transition transform hover:scale-105 animate-fadeInUp delay-400"
          >
            GET STARTED
          </Link>
        </div>

        {/* Image */}
        <div className="relative z-10 pb-10 w-full lg:w-[450px] mt-10 lg:mt-16 flex justify-center">
          <img src="img-1.svg" alt="Josephine File Converter" className="w-3/4 md:w-full animate-slideInRight" />
        </div>
      </section>

      {/* Other sections */}
      <Features />
      <section id="pricing">
        <Pricing />
      </section>
      <section className='bg-cover bg-[#FAFAFA]'>
        <PartnersSection />
        <Testimonials />
      </section>
      <FAQ />
      <Footer />
    </div>
  );
};

export default LandingPage;
