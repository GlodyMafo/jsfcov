import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll'; // Pour le smooth scrolling
import { Transition } from '@headlessui/react'; // Pour les animations

const LandingPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Pour le menu mobile

  const handleScroll = () => {
    const offset = window.scrollY;
    setIsScrolled(offset > 50); // Ajustez cette valeur selon vos besoins
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans">
      {/* Header */}
      <header className={`fixed px-20 mb-20 top-0 w-full transition duration-300 z-50 ${isScrolled ? 'bg-white shadow-md backdrop-filter backdrop-blur-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <img src="public/josephine_Logo.png" alt="" className={`w-40 transition-colors duration-300 ${isScrolled ? 'text-gray-800' : 'text-white'}`}/>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex">
            <ul className="flex space-x-6">
              <li>
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  className={`font-semibold text-lg cursor-pointer transition-colors duration-300 ${isScrolled ? 'text-gray-800 hover:text-[#E98D52]' : 'text-gray-800 hover:text-[#E98D52]'}`}
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  to="features"
                  smooth={true}
                  duration={500}
                  className={`font-semibold text-lg cursor-pointer transition-colors duration-300 ${isScrolled ? 'text-gray-800 hover:text-[#E98D52]' : 'text-gray-800 hover:text-[#E98D52]'}`}               >
                  Fonctionnalités
                </Link>
              </li>
              <li>
                <Link
                  to="pricing"
                  smooth={true}
                  duration={500}
                  className={`font-semibold text-lg cursor-pointer transition-colors duration-300 ${isScrolled ? 'text-gray-800 hover:text-[#E98D52]' : 'text-gray-800 hover:text-[#E98D52]'}`}                >
                  Tarifs
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className={`font-semibold text-lg cursor-pointer transition-colors duration-300 ${isScrolled ? 'text-gray-800 hover:text-[#E98D52]' : 'text-gray-800 hover:text-[#E98D52]'}`}   >
                  Tools and API
                </Link>
              </li>
            </ul>
          </nav>
          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className={`text-2xl focus:outline-none transition-colors duration-300 ${isScrolled ? 'text-gray-800' : 'text-white'}`}
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
              <ul ref={ref} className={`px-6 pt-4 pb-2 space-y-2 ${isScrolled ? 'bg-white' : 'bg-transparent'}`}>
                <li>
                  <Link
                    to="about"
                    smooth={true}
                    duration={500}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block text-lg cursor-pointer transition-colors duration-300 ${isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-400'}`}
                  >
                    À propos
                  </Link>
                </li>
                <li>
                  <Link
                    to="features"
                    smooth={true}
                    duration={500}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block text-lg cursor-pointer transition-colors duration-300 ${isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-400'}`}
                  >
                    Fonctionnalités
                  </Link>
                </li>
                <li>
                  <Link
                    to="pricing"
                    smooth={true}
                    duration={500}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block text-lg cursor-pointer transition-colors duration-300 ${isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-400'}`}
                  >
                    Tarifs
                  </Link>
                </li>
                <li>
                  <Link
                    to="contact"
                    smooth={true}
                    duration={500}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block text-lg cursor-pointer transition-colors duration-300 ${isScrolled ? 'text-gray-800 hover:text-[#E98D52]' : 'text-white hover:text-[#E98D52]'}`}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </Transition>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-white via-[#E16718] via-[#FF8C00] to-gray-200 text-gray-800 py-20 flex flex-col-reverse lg:flex-row items-center justify-between px-6 md:px-16 lg:px-32 h-screen">
        {/* Gradient Overlay for Flou */}
        <div className="absolute inset-0 bg-white opacity-85 backdrop-filter backdrop-blur-lg z-0"></div>

        {/* Content */}
        <div className="relative z-10 w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeInUp">Convertissez vos fichiers en un clin d'œil !</h2>
          <p className="text-lg md:text-xl mb-6 animate-fadeInUp delay-200">
            Josephine File Converter facilite la conversion de vos fichiers avec des résultats de haute qualité.
          </p>
          <a
            href="#download"
            className="inline-block bg-[#E98D52] text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-[#A94D12] transition transform hover:scale-105 animate-fadeInUp delay-400"
          >
            GET STARTED
          </a>
        </div>

        {/* Image */}
        <div className="relative z-10 w-full lg:w-[450px] mt-10 lg:mt-16 flex justify-center">
          <img src="public/img-1.svg" alt="Josephine File Converter" className="w-3/4 md:w-full animate-slideInRight" />
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">Fonctionnalités</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4">
                <svg className="w-12 h-12 text-blue-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">Conversion Rapide</h4>
              <p>Transformez vos fichiers en quelques secondes grâce à notre technologie optimisée.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4">
                <svg className="w-12 h-12 text-blue-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12h18M3 6h18M3 18h18" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">Support de Plusieurs Formats</h4>
              <p>Convertissez des fichiers PDF, DOCX, JPG, et bien plus encore sans effort.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4">
                <svg className="w-12 h-12 text-blue-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">Interface Simple</h4>
              <p>Une interface intuitive pour une utilisation facile et rapide, même pour les débutants.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-8">Découvrez notre Démo</h3>
          <div className="flex justify-center">
            <video className="w-full max-w-3xl rounded-lg shadow-lg" controls>
              <source src="demo-video.mp4" type="video/mp4" />
              Votre navigateur ne prend pas en charge la balise vidéo.
            </video>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-12">Témoignages</h3>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="max-w-md">
              <p className="italic text-lg md:text-xl mb-4">"Josephine File Converter a révolutionné ma façon de travailler. Simple, rapide et efficace !" </p>
              <p className="font-semibold">- Utilisateur Satisfait</p>
            </div>
            <div className="max-w-md">
              <p className="italic text-lg md:text-xl mb-4">"Je ne savais pas que convertir des fichiers pouvait être si facile. Merci, Josephine !" </p>
              <p className="font-semibold">- Marie D.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-gray-200">
        <div className="container mx-auto px-6 md:px-12">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">Tarifs</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Gratuit */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-2xl font-semibold mb-4 text-center">Gratuit</h4>
              <p className="text-center mb-6">Accès limité aux fonctionnalités de base.</p>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition">Commencer</button>
            </div>
            {/* Pro */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-2xl font-semibold mb-4 text-center">Pro</h4>
              <p className="text-center mb-6">Accès complet aux fonctionnalités avancées.</p>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition">S'abonner</button>
            </div>
            {/* Entreprise */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-2xl font-semibold mb-4 text-center">Entreprise</h4>
              <p className="text-center mb-6">Solutions personnalisées pour votre entreprise.</p>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition">Contactez-nous</button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">FAQ</h3>
          <div className="max-w-2xl mx-auto space-y-6">
            <div>
              <h4 className="text-xl font-semibold mb-2">Comment puis-je commencer ?</h4>
              <p>Inscrivez-vous gratuitement, téléchargez vos fichiers et commencez à les convertir immédiatement.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">Quels formats de fichiers sont pris en charge ?</h4>
              <p>Nous prenons en charge une large gamme de formats, y compris PDF, DOCX, JPG, PNG, et bien d'autres.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">Y a-t-il une limite de taille de fichier ?</h4>
              <p>Les utilisateurs gratuits ont une limite de taille de fichier, tandis que les abonnés Pro bénéficient de limites étendues.</p>
            </div>
            {/* Ajoutez plus de questions ici */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <div className="flex justify-center space-x-6 mb-6">
            {/* Remplacez les liens par vos propres URLs */}
            <a href="#" className="hover:text-blue-400 transition-colors duration-300">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35C.596 0 0 .596 0 1.325v21.351C0 23.404.596 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.794.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116C23.404 24 24 23.404 24 22.676V1.325C24 .596 23.404 0 22.675 0z" />
              </svg>
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-300">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 17.07 3.633 16.7 3.633 16.7c-1.087-.744.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.76-1.605-2.665-.303-5.467-1.333-5.467-5.93 0-1.31.468-2.38 1.235-3.22-.123-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.003-.404c1.02.005 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.119 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.625-5.479 5.92.43.37.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .32.216.694.825.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-300">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C8.741 0 8.332.037 7.053.157c-1.21.134-2.045.583-2.905 1.242-.86.659-1.523 1.542-1.854 2.669-.331 1.127-.357 2.392-.072 3.705.285 1.313.941 2.436 1.886 3.37.945.934 2.068 1.59 3.38 1.875 1.313.285 2.578.259 3.705-.072 1.127-.331 2.01-.523 2.669-1.854.659-1.21 1.108-2.045 1.242-2.905.12-.679.157-1.088.157-3.347V7.053C21.999 3.814 21.962 3.405 21.842 2.126c-.134-1.21-.583-2.045-1.242-2.905-.659-.86-1.542-1.523-2.669-1.854C16.98.216 15.715.19 14.402.475 13.09.76 11.967 1.416 11.022 2.35c-.945.934-1.601 2.058-1.886 3.37-.285 1.313-.259 2.578.072 3.705.331 1.127 1.003 2.01 1.854 2.669 1.21.659 2.045 1.108 2.905 1.242.679.12 1.088.157 3.347.157h0zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
              </svg>
            </a>
          </div>
          <p>&copy; {new Date().getFullYear()} Josephine File Converter. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
