import React from "react";
import { BsCheckLg, BsArrowRight } from "react-icons/bs";

function Pricing() {
  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-20 lg:pb-0 bg-cover bg-center relative bg-white flex flex-col lg:flex-row items-center lg:items-start  lg:min-h-scree">
      
      {/* Image Section (Hidden on Mobile) */}
      <div className="w-full lg:w-1/2 hidden lg:block">
        <img
          src="bg2.png"
          alt="Background"
          className="w-full h-auto object-cover"
        />
      </div>
      
      {/* Content Section */}
      <div className="w-full lg:w-1/2 lg:pl-24 text-center lg:text-left text-gray-800 flex flex-col justify-center items-center lg:items-start p-6 lg:p-8">
        
        {/* Heading */}
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 lg:pt-8  mt-14">
        Enjoy Josephine Files Converter free forever !
        </h3>
        
        {/* Features List */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center justify-center lg:justify-start">
            <BsCheckLg className="text-[#E66917] text-xl sm:text-2xl" /> 
            <p className="pl-2 text-base sm:text-lg">Multi-Format Conversion</p>
          </div>
          <div className="flex items-center justify-center lg:justify-start">
            <BsCheckLg className="text-[#E66917] text-xl sm:text-2xl" /> 
            <p className="pl-2 text-base sm:text-lg">Unlimited Conversions</p>
          </div>
          <div className="flex items-center justify-center lg:justify-start">
            <BsCheckLg className="text-[#E66917] text-xl sm:text-2xl" /> 
            <p className="pl-2 text-base sm:text-lg">Fast Conversion Speed</p>
          </div>
          <div className="flex items-center justify-center lg:justify-start">
            <BsCheckLg className="text-[#E66917] text-xl sm:text-2xl" /> 
            <p className="pl-2 text-base sm:text-lg">No Signup Required</p>
          </div>
        </div>
        
        {/* Call to Action */}
        <a className="flex items-center justify-center lg:justify-start hover:underline hover:text-[#E66917] cursor-pointer">
          <p className="pr-2 text-base sm:text-lg font-bold">Unlock Premium Features</p>
          <BsArrowRight className="text-[#E66917] text-xl sm:text-2xl font-bold" />
        </a>
        
      </div>
      
    </div>
  );
}

export default Pricing;
