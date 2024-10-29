// FeaturesSection.jsx
import React from "react";
import FeatureCard from "./FeatureCard";
import { FaFileUpload, FaClock, FaCog } from 'react-icons/fa'; 

const FeaturesSection = () => {
  const featuresData = [
    {
      title: "Conversion Rapide",
      subtitle: "Gagnez du temps",
      Icon: FaFileUpload, 
      features: ["Formats multiples pris en charge", "Conversions instantanées"],
    },
    {
      title: "Gain de Temps",
      subtitle: "Bon flux de travail",
      Icon: FaClock,
      features: ["Traitement en masse", "Historique des conversions"],
    },
    {
      title: "Facilité d'Utilisation",
      subtitle: "Interface conviviale",
      Icon: FaCog,
      features: ["Drag & Drop", "Navigation intuitive"],
    }
  ];

  return (
    <div className="features-section pb-10 flex flex-wrap gap-6 justify-center">
      {featuresData.map((product, index) => (
        <FeatureCard
          key={index}
          title={product.title}
          subtitle={product.subtitle}
          Icon={product.Icon}
          features={product.features}
        />
      ))}
    </div>
  );
};

export default FeaturesSection;
