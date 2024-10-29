import React from 'react';
import { FiMail, FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';
import { AiOutlineSend, AiOutlineCheckCircle } from 'react-icons/ai';
import { BsShieldLock } from 'react-icons/bs';

const quickLinks = [
  { name: 'Notre Blog', href: '#' },
  { name: 'Vérifier les Tarifs', href: '#' },
  { name: 'À Propos', href: '#' },
  { name: 'Support & Aide', href: '#' },
];

const informationLinks = [
  { name: 'Guide de Style', href: '#' },
  { name: 'Commencer', href: '#' },
  { name: 'Changelog', href: '#' },
  { name: 'Détails des Mises à Jour', href: '#' },
];

const socialMedia = [
  { icon: <FiFacebook size={24} />, href: '#', label: 'Facebook' },
  { icon: <FiTwitter size={24} />, href: '#', label: 'Twitter' },
  { icon: <FiInstagram size={24} />, href: '#', label: 'Instagram' },
  { icon: <FiLinkedin size={24} />, href: '#', label: 'LinkedIn' },
];

const newsletterBenefits = [
  { icon: <AiOutlineCheckCircle size={20} className="text-[#E98D52]" />, text: 'Offres exclusives' },
  { icon: <AiOutlineCheckCircle size={20} className="text-[#E98D52]" />, text: 'Dernières mises à jour' },
  { icon: <BsShieldLock size={20} className="text-[#E98D52]" />, text: 'Protection de la vie privée' },
];

const Footer = () => {
  return (
    <footer className="bg-[#F5F5F5] text-gray-600 py-12">
      <div className="container mx-auto px-10 md:px-20">
        <div className="flex flex-wrap justify-between gap-8 md:gap-14">

          {/* Logo et Description */}
          <div className="w-full md:w-1/4 space-y-4">
            <div className="flex items-center mb-4">
              <img src="/Logo.png" alt="Logo Appwind" className="h-22" />
            </div>
            <p className="text-gray-500 leading-relaxed">
              Nous sommes dédiés à offrir les meilleures solutions numériques. Rejoignez-nous pour rester à la pointe des tendances.
            </p>
          </div>


          {/* Quick Links */}
          <div className="w-full sm:w-1/2 md:w-1/6 space-y-4">
            <h3 className="text-lg font-semibold mb-2">Liens Rapides</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-500 hover:text-[#E98D52] transition">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Join Our Newsletter */}
          <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <FiMail className="mr-2 text-[#E98D52]" size={24} aria-hidden="true" /> 
              <span>Abonnez-vous à notre Newsletter</span>
            </h3>
            <p className="text-gray-500 mb-4">
              Restez informé des dernières nouvelles, offres exclusives et plus encore.
            </p>
            
            {/* Avantages de la Newsletter */}
            <ul className="space-y-2 mb-4">
              {newsletterBenefits.map((benefit, index) => (
                <li key={index} className="flex items-center">
                  {benefit.icon}
                  <span className="ml-2 text-gray-500">{benefit.text}</span>
                </li>
              ))}
            </ul>

            <form className="flex flex-col sm:flex-row w-full">
              <div className="relative w-full">
                <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Entrez votre email"
                  className="pl-10 px-4 py-2 border border-gray-300 rounded-lg sm:rounded-l-none sm:rounded-r-none focus:outline-none w-full"
                  required
                />
              </div>
              <button
                type="submit"
                className="mt-4 sm:mt-0 sm:ml-0 flex items-center justify-center px-4 py-2 bg-[#E98D52] text-white rounded-lg sm:rounded-l-none sm:rounded-r-lg hover:bg-[#A94D12] transition w-full sm:w-auto"
              >
                <AiOutlineSend className="mr-2" size={20} />
                S'abonner
              </button>
            </form>
            <p className="text-xs text-gray-400 mt-2">Nous respectons votre vie privée.</p>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center mt-8 space-x-6">
          {socialMedia.map((social) => (
            <a 
              key={social.label} 
              href={social.href} 
              className="text-gray-500 hover:text-[#E98D52] transition" 
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 text-gray-500">
          <p className="text-sm">&copy; {new Date().getFullYear()} Josephine files converter, Tous droits réservés. | By Glody Mafo.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
