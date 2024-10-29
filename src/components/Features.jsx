import React from "react";
import FeaturesSection from './FeatureSection';
import ButtonMobile from './ButtonMobile';
import { Link } from 'react-router-dom';

function Features() {
    return (
        <div>
            <section id="features" className="pt-10 pb-16 bg-[#FFFDFA]">
                <div className="container mx-auto px-6 md:px-12">
                    <h3 className="text-3xl md:text-4xl font-bold lg:px- text-center mb-12 text-gray-800">
                        Des Fonctionnalités Puissantes pour une Conversion Fluide
                    </h3>
                    <FeaturesSection />
                </div>
            </section>

            {/* Device */}
            <section className='bg-white px-4 sm:px-6 md:px-10 lg:px-20'>
                {/* Web */}
                <div className="bg-cover bg-center relative flex flex-col lg:flex-row items-center lg:items-start lg:min-h-screen">
                    <div className="w-full lg:w-1/2">
                        <img
                            src="public/webJSCF.png"
                            alt="Web App"
                            className="w-full h-auto max-h-[400px] lg:max-h-[600px] object-cover"
                        />
                    </div>
                    <div className="w-full lg:w-1/2 text-center lg:text-left text-gray-800 flex flex-col justify-center items-center lg:items-start p-4 lg:p-8">
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-10">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eius nobis modi quas asperiores.
                        </h3>
                        <div className='mb-10'>
                            <p className='pl-2 text-base'>Conversion multi-formats Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, velit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, ad.</p>
                        </div>

                        <Link  to="/application"
                            href="#download"
                            className="inline-block bg-[#E98D52] text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-[#A94D12] transition transform hover:scale-105 animate-fadeInUp delay-400"
                        >
                            GET STARTED
                        </Link>
                    </div>
                </div>

                {/* Mobile */}
                <div className="bg-cover bg-center relative flex flex-col lg:flex-row items-center lg:items-start lg:min-h-screen mt-8">
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end order-1 lg:order-2">
                        <img
                            src="public/mobileApp.png"
                            alt="Mobile App"
                            className="w-full h-auto max-w-[300px] max-h-[300px] md:max-w-[350px] md:max-h-[350px] lg:max-w-[450px] lg:max-h-[450px] object-cover"
                        />
                    </div>

                    <div className="w-full lg:w-1/2 text-center lg:text-left text-gray-800 flex flex-col justify-center items-center lg:items-start p-4 lg:p-8 order-2 lg:order-1">
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-10">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eius nobis modi quas asperiores.
                        </h3>
                        <div className='mb-10'>
                            <p className='pl-2 text-base'>Conversion multi-formats Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, velit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, ad.</p>
                        </div>
                        <ButtonMobile />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Features;
