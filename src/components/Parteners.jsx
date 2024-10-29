import React, { useState, useEffect, useRef } from 'react';

const PartnersSection = () => {
  const logos = [
    { id: 1, name: 'ADP', imgSrc: 'adp.png' },
    { id: 2, name: 'CMB', imgSrc: 'cmb.png' },
    { id: 3, name: 'GSF', imgSrc: 'gsf.png' },
    { id: 4, name: 'TMI', imgSrc: 'tmi.png' },
    { id: 5, name: '243', imgSrc: '243.png' },
    { id: 6, name: 'CUMORAH', imgSrc: 'cumorah.png' },
    { id: 7, name: 'WM', imgSrc: 'WM.png' },
    { id: 8, name: 'RG', imgSrc: 'rg.png' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const visibleItems = 5;
  const logosRef = useRef();

  const duplicatedLogos = [...logos, ...logos];

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    if (currentIndex >= logos.length) {
      setIsTransitioning(false);
      setCurrentIndex(0);
    } else {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
      const timeout = setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [isTransitioning]);

  const getTranslateXValue = () => {
    return `-${(currentIndex * (100 / visibleItems))}%`;
  };

  return (
    <div className="w-full max-w-5xl mx-auto pb-20 pt-10 px-10">
      <h2 className="text-center font-bold text-4xl text-gray-800 mb-10">Trusted by</h2>
      <p className='px-6 md:px-20 text-center mb-10'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, dolores? Velit perferendis optio nam excepturi quo. Nihil optio perspiciatis totam sequi, quas recusandae voluptatibus magni autem vero delectus quisquam nam. Earum, maxime culpa! Fugiat excepturi sed provident, animi perferendis tenetur?
      </p>
      <div className="relative overflow-hidden">
        <div
          ref={logosRef}
          className={`flex ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''}`}
          style={{ transform: `translateX(${getTranslateXValue()})` }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div key={index} className="flex-shrink-0 w-1/5 px-2 flex justify-center">
              <img 
                src={logo.imgSrc} 
                alt={logo.name} 
                className="max-h-16 h-auto w-auto object-contain" 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;
