import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi'; // Import icons

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
              Nous collaborons avec les universités les plus renommées
            </h3>
            <p className="mb-6 text-gray-600 leading-relaxed">
              Etiam erat velit scelerisque in dictum non consectetur. Nisl purus in mollis nunc sed id semper. Cras fermentum odio eu feugiat pretium nibh ipsum.
            </p>
            <a
              href="#download"
              className="inline-block bg-[#E98D52] text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-[#A94D12] transition transform hover:scale-105"
            >
              DISCUTONS
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
    question: 'Comment puis-je commencer ?',
    answer: 'Inscrivez-vous gratuitement, téléchargez vos fichiers et commencez à les convertir immédiatement.'
  },
  {
    question: 'Quels formats de fichiers sont pris en charge ?',
    answer: 'Nous prenons en charge une large gamme de formats, y compris PDF, DOCX, JPG, PNG, et bien d\'autres.'
  },
  {
    question: 'Y a-t-il une limite de taille de fichier ?',
    answer: 'Les utilisateurs gratuits ont une limite de taille de fichier, tandis que les abonnés Pro bénéficient de limites étendues.'
  }
];

export default FAQ;
