"use client";

import React from 'react';
import Image from "next/image";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  width: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  width
}) => {
  return (
    <div className={`bg-white shadow-lg rounded-lg overflow-hidden md:m-8 sm:h-3/5 md:h-auto ${width}`}>
      <div className='flex justify-center items-center'>
        <div className="mt-5 ml-5 mr-3 mb-7 text-center">
          <div className="flex justify-center items-center">
            <Image
              className=""
              src={icon}
              alt={title}
              width={100}
              height={100}
            />
          </div>
          <h2 className="text-2xl font-bold mb-7 mt-4">{title}</h2>
          <div className='border-l-2 border-blue-300'>
            <p className="text-base text-left text-gray-500 mb-6 mt-4 ml-4">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureCard;
