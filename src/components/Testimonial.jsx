import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Initialiser avec Divine Baker

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    afterChange: (current) => setActiveIndex(current),
    prevArrow: <button className="arrow-btn text-[#A94D12]">{"<"}</button>,
    nextArrow: <button className="arrow-btn">{">"}</button>,
  };

  const testimonials = [
    {
      name: "Michel Lenge",
      title: "Consultant en informatique",
      feedback: "Josephine File Converter a simplifié mes conversions de fichiers et me fait gagner beaucoup de temps. Très intuitif et facile à utiliser !",
      avatar: "public/michel.jpg",
    },
    {
      name: "Divine Baker",
      title: "Spécialiste de la gestion de documents",
      feedback: "Le convertisseur Josephine est un outil indispensable pour mes documents quotidiens. Rapide et fiable !",
      avatar: "public/divine.jpg",
    },
    {
      name: "Jerry Lunda",
      title: "Analyste de données",
      feedback: "Josephine File Converter m'aide à transformer mes fichiers sans effort et gratuitement !",
      avatar: "public/jerry.jpg",
    },
  ];

  return (
    <div className="w-full bg-[#F5F5F5] py-12 flex flex-col lg:flex-row items-center justify-between px-10 lg:px-16 lg:h-[100vh] lg:py-28">
      <div className='w-full lg:w-1/2 mb-8 lg:mb-0'>
        <h2 className="text-3xl font-bold text-center mb-8">Ce que disent nos utilisateurs satisfaits !</h2>
        <div className="max-w-3xl mx-auto text-center">
          <div className="px-4">
            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="p-4">
                  <p className="text-lg text-gray-700 mb-6">{testimonial.feedback}</p>
                </div>
              ))}
            </Slider>
          </div>

          {/* Section des avatars synchronisés */}
          <div className="flex justify-center mt-6 space-x-4">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="relative">
                <img
                  className={`${
                    index === activeIndex
                      ? 'w-20 h-20 border-4' 
                      : 'w-16 h-16 border-2' 
                  } rounded-full cursor-pointer transition-all duration-300 ease-in-out ${
                    index === activeIndex ? 'border-[#E66917]' : 'border-gray-300'
                  }`}
                  src={testimonial.avatar}
                  alt={testimonial.name}
                />
                {index === activeIndex && (
                  <div className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-[#A94D12]"></div>
                )}
              </div>
            ))}
          </div>

          {/* Nom et titre de l'utilisateur actif */}
          <p className="mt-4 text-lg font-bold text-gray-900">{testimonials[activeIndex].name}</p>
          <p className="text-md text-gray-600">{testimonials[activeIndex].title}</p>
        </div>
      </div>
      
      {/* Image de droite pour les grands écrans */}
      <div className='hidden lg:block w-full lg:w-1/2'>
        <img src="public/client.png" alt="Client" className='w-auto h-[100vh] pl-20' />
      </div>
    </div>
  );
};

export default Testimonials;
