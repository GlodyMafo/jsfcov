// FeaturesSection.jsx
import React from "react";
import FeatureCard from "./FeatureCard";
import { FaWater, FaShieldAlt, FaSmile, FaHeartbeat } from 'react-icons/fa'; // Importez les icônes nécessaires

const FeaturesSection = () => {
  const featuresData = [
    {
      title: "Nouveau Produit",
      subtitle: "Hydration",
      Icon: FaWater, // Passez l'icône directement
      features: ["Hydration", "Protect Skin Barrier", "Reduce Wrinkles", "Anti Inflammatory"],
    },
    {
      title: "Nouveau Produit",
      subtitle: "Protection",
      Icon: FaShieldAlt,
      features: ["Sun Protection", "UV Shield", "Antioxidant Rich", "Long Lasting"],
    },
    {
      title: "Nouveau Produit",
      subtitle: "Anti-Âge",
      Icon: FaSmile,
      features: ["Reduces Fine Lines", "Firming Effect", "Collagen Boost", "Elasticity Improvement"],
    },
    {
      title: "Nouveau Produit",
      subtitle: "Anti-Inflammatoire",
      Icon: FaHeartbeat,
      features: ["Calms Redness", "Soothes Irritation", "Reduces Swelling", "Promotes Healing"],
    },
    {
      title: "Nouveau Produit",
      subtitle: "Anti-Inflammatoire",
      Icon: FaHeartbeat,
      features: ["Calms Redness", "Soothes Irritation", "Reduces Swelling", "Promotes Healing"],
    },
    {
      title: "Nouveau Produit",
      subtitle: "Anti-Inflammatoire",
      Icon: FaHeartbeat,
      features: ["Calms Redness", "Soothes Irritation", "Reduces Swelling", "Promotes Healing"],
    }
    // Ajoutez autant de produits que nécessaire
  ];

  return (
    <div className="features-section flex flex-wrap gap-6 justify-center">
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
