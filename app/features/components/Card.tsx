"use client";

import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, image }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-3/5 m-12">
      <div className='m-5'>
        <img src={image} alt={title} className="w-24 h-24" />
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-7 mt-2">{title}</h2>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default FeatureCard;
