import React from "react";
import { FaCheck } from 'react-icons/fa'; // Importez l'icône de coche

const FeatureCard = ({ title, subtitle, Icon, features }) => {
  return (
    <div
      className="product-card w-[350px] h-[250px] rounded-md shadow-xl overflow-hidden z-40 relative cursor-pointer snap-start shrink-0 py-8 px-4 bg-white flex flex-col items-center justify-center gap-2 transition-all duration-300 group"
    >
      <div className="para uppercase text-center leading-none z-30">
        <p
          style={{
            WebkitTextStroke: "1px rgb(207, 205, 205)",
            WebkitTextFillColor: "transparent",
          }}
          className="z-10 font-bold text-md -mb-3 tracking-wider text-gray-500"
        >
          {title}
        </p>
        <p className="font-bold text-lg tracking-wider text-[#495c48] z-20">
          {subtitle}
        </p>
      </div>
      <div
        className="w-[140px] aspect-square relative z-20 after:absolute after:h-1 after:w-full after:opacity-0 after:bg-white after:top-6 after:left-0 after:group-hover:opacity-100 after:translate-x-1/2 after:translate-y-1/2 after:-z-10 after:group-hover:w-full after:transition-all after:duration-300 after:group-hover:origin-right after:group-hover:-translate-x-1/2 group-hover:translate-x-1/2 transition-all duration-300"
      >
        {Icon && (
          <div className="w-full h-full flex items-center justify-center">
            <Icon size={48} color="#495c48" aria-label={`${subtitle} icon`} />
          </div>
        )}
        <div
          className="tooltips absolute top-0 left-0 -translate-x-[150%] p-2 flex flex-col items-start gap-4 transition-all duration-300 group-hover:-translate-x-full z-10"
        >
          <p
            className="text-[#7b956a] font-semibold text-lg uppercase group-hover:delay-1000 transition-all opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-500"
          >
            {subtitle}
          </p>
          <ul className="flex flex-col items-start gap-1">
            {features && features.map((feature, index) => (
              <li
                key={index}
                className={`flex gap-1 items-center justify-start transition-all opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-500 ${
                  index === 0 ? "group-hover:delay-200" :
                  index === 1 ? "group-hover:delay-300" :
                  index === 2 ? "group-hover:delay-400" :
                  "group-hover:delay-500"
                }`}
              >
                <FaCheck className="stroke-[#495c48]" size={10} />
                <p className="text-xs font-semibold text-[#495c48]">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
