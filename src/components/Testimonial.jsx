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
      title: "Archivist",
      feedback: "As an archivist, Josephine File Converter has simplified my file conversions and saved me a lot of time. It’s incredibly intuitive and easy to use! Experience it yourself and discover the benefits! !",
      avatar: "michel.jpg",
    },
    {
      name: "Divine Baker",
      title: "Student at UQTR",
      feedback: "Josephine Converter is an essential tool for my daily university documents. It's fast, reliable, and makes my life so much easier! Try it out and see the difference for yourself!",
      avatar: "divine.jpg",
    },
    {
      name: "Jerry Lunda",
      title: "Data Analyst",
      feedback: "As a data analyst, Josephine File Converter helps me transform files effortlessly and for free! It's fast, reliable, and user-friendly—an invaluable tool for my work!",
      avatar: "jerry.jpg",
    },
  ];

  return (
    <div className="w-full bg-[#F5F5F5] py-12 flex flex-col lg:flex-row items-center justify-between px-10 lg:px-16 lg:h-[100vh] lg:py-28">
      <div className='w-full lg:w-1/2 mb-8 lg:mb-0'>
        <h2 className="text-center font-bold text-4xl text-gray-800 mb-8">What Our Satisfied Users Are Saying!</h2>
        <div className="max-w-3xl mx-auto text-center">
          <div className="px-4">
            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="p-4">
                  <p className="text-lg text-gray-700">{testimonial.feedback}</p>
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
        <img src="client.png" alt="Client" className='w-auto h-[100vh] pl-20' />
      </div>
    </div>
  );
};

export default Testimonials;
