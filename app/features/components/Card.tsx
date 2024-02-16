"use client";

import Link from 'next/link';
import React from 'react';

interface FeatureCardProps {
  slug: string;
  title: string;
  description: string;
  image: string;
  subtitle: string;
  showButton: boolean;
  width: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ slug, title, description, image, subtitle, showButton = true, width }) => {
  return (
    <div className={`bg-white shadow-lg rounded-lg overflow-hidden md:m-12 sm:h-3/5 md:h-3/4 mb-9 ${width}`}>
      <div className='ml-5 mr-3 flex justify-center items-center'>
        <img src={image} alt={title} className="w-20 h-20" />
        <div className="mt-5 ml-5 mr-3 mb-12">
          <h2 className="text-2xl font-bold mb-7 mt-4">{title}</h2>
          <div className='border-l-2 border-blue-300 pl-5'>
            <p className='sm:text-base md:text-lg text-gray-500 leading-relaxed'>{subtitle}</p>
            <p className="text-base text-gray-700 mb-6 mt-4">{description}</p>   
            {showButton && <Link className='inline-block text-blue-500 hover:text-blue-600 transition duration-300 ease-in-out m-5' href={'features/' + slug}>See more <ArrowIcon /></Link>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureCard;


const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 inline-block ml-2 text-blue-500"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
  </svg>
);
