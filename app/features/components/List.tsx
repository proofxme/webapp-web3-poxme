"use client";

import featuresJson from '../featuresData.json';

export default function List() {
    return (
        <div className="container mx-auto px-4 py-8 bg-gray-50">
            <h1 className="text-3xl font-bold text-center mb-8">Features</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {featuresJson.features.map((feature, index) => (
                    <div key={index} className="w-full">
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden max-h-full m-8">
                            <div className='flex items-center justify-center h-full'>
                                <img src={feature.image} alt={feature.title} className="w-24 h-24 object-cover" />
                            </div>
                            <div className="p-4">
                                <h2 className="text-xl font-bold mb-3">{feature.title}</h2>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

