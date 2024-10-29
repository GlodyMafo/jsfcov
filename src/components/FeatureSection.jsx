// FeaturesSection.jsx
import React from "react";
import FeatureCard from "./FeatureCard";
import { FaFileUpload, FaClock, FaCog } from 'react-icons/fa'; 

const FeaturesSection = () => {
  const featuresData = [
    {
      title: "Quick Conversion",
      subtitle: "Save Time",
      Icon: FaClock, 
      features: ["Supports Various Formats", "Instant Conversions"],
    },
    {
      title: "More Done, Less Effort",
      subtitle: "Smooth Workflow",
      Icon:FaFileUpload,
      features: ["Batch Processing", "Conversion History"],
    },
    {
      title: "Ease of Use",
      subtitle: "User-Friendly",
      Icon: FaCog,
      features: ["Drag & Drop", "Intuitive Navigation"],
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
