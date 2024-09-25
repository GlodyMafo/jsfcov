import React from 'react';
import FileUpload from './components/FileUpload';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Navbar />

      {/* Arrière-plan géométrique */}
      <div className="relative z-0">
        <div className="absolute inset-0 -z-10">
          {/* Cercle animé - visible seulement sur écran moyen et plus grand */}
          <div className="hidden md:block absolute top-10 left-10 w-40 h-40 bg-[#E66917] rounded-full opacity-20 animate-bounce-slow"></div>

          {/* Triangle animé - visible seulement sur écran moyen et plus grand */}
          <div className="hidden md:block absolute bottom-10 right-10 w-0 h-0 border-l-[60px] border-l-transparent border-t-[120px] border-t-[#59252D] opacity-30 animate-spin-slow"></div>

          {/* Carré animé - visible seulement sur écran moyen et plus grand */}
          <div className="hidden md:block absolute bottom-20 left-20 w-24 h-24 bg-[#E66917] opacity-25 animate-pulse"></div>
        </div>

        <div className="text-center px-10 md:px-[300px] z-10 relative">
          <h1 className="text-3xl font-bold text-center mb-6 text-[#59252D]">Josephine Files Converter</h1>
          <p className="text-[#59252D]">
          Discover Josephine Files Converter, the 100% free tool that instantly converts your PDFs to Word (.docx) with no fees or registration, offering a fast and efficient solution.
          </p>
        </div>

        <div className="flex justify-around mt-">
          <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center mb-6">Convert PDF to WORD</h2>
            <FileUpload />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
