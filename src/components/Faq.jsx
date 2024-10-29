import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi'; 

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (questionIndex) => {
    setOpenQuestion(openQuestion === questionIndex ? null : questionIndex);
  };

  return (
    <section id="faq" className="py-20 px-10 md:px-20 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Left section */}
          <div className="max-w-lg mb-12 md:mb-0">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Your Questions Answered: Frequently Asked Questions
            </h3>
            <p className="mb-6 text-xl text-gray-800 leading-relaxed">
            Explore Our Frequently Asked Questions to Find the Answers You Need. Whether you have inquiries about using Josephine File Converter, its features, or troubleshooting tips, our comprehensive FAQ section is here to assist you.</p>
            <a
              href="#download"
              className="inline-block bg-[#E98D52] text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-[#A94D12] transition transform hover:scale-105"
            >
              Let's discuss
            </a>
          </div>

          {/* Right FAQ section */}
          <div className="space-y-6 max-w-lg w-full">
            {faqData.map((item, index) => (
              <div key={index} className="border-b pb-4">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleQuestion(index)}
                  aria-expanded={openQuestion === index}
                >
                  <h4 className="text-lg md:text-xl font-semibold text-gray-800">
                    {item.question}
                  </h4>
                  <button className="text-[#E98D52]">
                    {openQuestion === index ? <FiMinus size={24} /> : <FiPlus size={24} />}
                  </button>
                </div>

                {/* Transition for the answer */}
                <div
                  className={`mt-2 text-gray-600 leading-relaxed transition-max-height duration-500 ease-in-out overflow-hidden ${
                    openQuestion === index ? 'max-h-screen' : 'max-h-0'
                  }`}
                >
                  <p className="pt-2">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// FAQ data
const faqData = [
  {
    question: 'What file formats does Josephine File Converter support?',
    answer: 'Josephine File Converter supports a wide range of file formats, including PDF, DOCX, JPG, PNG, and more. You can easily convert between these formats to meet your needs.'
  },
  {
    question: 'Is Josephine File Converter really free?',
    answer: 'Yes, Josephine File Converter is free to use forever! While we offer premium features for enhanced functionality, the basic conversion options are completely free with no hidden fees.'
  },
  {
    question: 'Is my data safe when using Josephine File Converter?',
    answer: 'Absolutely! We prioritize your privacy and security. All files are processed securely, and we do not store your files after conversion. You can trust that your data is safe with us.'
  }
];

export default FAQ;
