import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white p-2 shadow-md mb-6">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-20">
        <div className="w-48">
          <img src="./public/Logo.png" alt="logo" />
        </div>
        
        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-[#E66917] focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className={`flex-col md:flex-row md:flex ${isOpen ? 'flex' : 'hidden'} md:flex items-center`}>
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
            <li>
              <a href="#home" className="text-[#E66917] font-semibold hover:text-[#59252D] hover:font-bold transition duration-300">Home</a>
            </li>
            <li>
              <a href="#projects" className="text-[#E66917] font-semibold hover:text-[#59252D] hover:font-bold transition duration-300">About</a>
            </li>
            <li>
              <a href="#education" className="text-[#E66917] font-semibold hover:text-[#59252D] hover:font-bold transition duration-300">Product</a>
            </li>
            <li>
              <a href="#about" className="text-[#E66917] font-semibold hover:text-[#59252D] hover:font-bold transition duration-300">FAQ</a>
            </li>
          </ul>

          <div className="mt-4 md:mt-0 md:ml-[320px] bg-[#E66917] px-4 py-2 rounded-3xl text-white font-semibold   hover:bg-[#59252D] transition duration-300">
            <button>Contribute</button> 
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
