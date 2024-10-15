import React, { useState, useEffect } from 'react'; 
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Commencer à partir du témoignage du milieu

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    afterChange: current => setActiveIndex(current),
    prevArrow: <button className="arrow-btn text-[#A94D12]">{"<"}</button>, 
    nextArrow: <button className="arrow-btn">{">"}</button>, 
  };

  const testimonials = [
    {
      name: "Ethan Miller",
      feedback: "I have been using pagedone for several months now, and I must say that it has made my life a lot easier. The platform's intuitive interface and ease of use have allowed me to manage my finances more effectively and make informed investment decisions. I particularly like the product's auto-tracking feature, which has saved me a lot of time and effort.",
      avatar: "path_to_ethan_avatar",
    },
    {
      name: "Divine Baker",
      feedback: "Pagedone has been a game-changer for managing my personal finances. The features are incredibly user-friendly.",
      avatar: "path_to_jane_avatar",
    },
    {
      name: "John Smith",
      feedback: "The auto-tracking feature of pagedone has helped me stay on top of my investments. Highly recommend it!",
      avatar: "path_to_john_avatar",
    },
  ];

  return (
    <div className="w-full bg-[#F5F5F5] py-12 flex flex-col lg:flex-row items-center justify-between px-10 lg:px-16 lg:h-[100vh] lg:py-28">
      <div className='w-full lg:w-1/2 mb-8 lg:mb-0'>
        <h2 className="text-3xl font-bold text-center mb-8">What our happy users say!</h2>
        <div className="max-w-3xl mx-auto text-center">
          <div className="px-4"> {/* Add padding to the slider container */}
            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="p-4">
                  <p className="text-lg text-gray-700 mb-6">{testimonial.feedback}</p>
                </div>
              ))}
            </Slider>
          </div>

          {/* Avatars section */}
          <div className="flex justify-center mt-6 space-x-4">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="relative">
                <img
                  className={`${
                    index === activeIndex
                      ? 'w-20 h-20 border-4' 
                      : 'w-16 h-16 border-2' 
                  } rounded-full cursor-pointer transition-all duration-300 ease-in-out $ {
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

          {/* Active user's name */}
          <p className="mt-4 text-lg font-bold text-gray-900">{testimonials[activeIndex].name}</p>
        </div>
      </div>
      {/* Hide image on mobile, show on larger screens */}
      <div className='hidden lg:block w-full lg:w-1/2'>
        <img src="public/client.png" alt="Client" className='w-auto h-[100vh] pl-20' />
      </div>
    </div>
  );
};

export default Testimonials;
