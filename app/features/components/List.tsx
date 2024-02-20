"use client";

import Link from 'next/link';
import featuresJson from '../featuresData.json';
import FeatureCard from '../components/Card';

export default function List() {
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 mb-12 pb-12">
                {featuresJson.features.map((feature, index) => (
                    <div key={index} className="flex justify-center"> {/* Agregar la clase flex y justify-center para centrar las cards */}
                        <FeatureCard
                            key={index}
                            title={feature.title}
                            subtitle={feature.subtitle}
                            image={feature.image}
                            description={""}
                            showButton
                            slug={feature.slug}
                            width={"w-10/12"}
                        />
                    </div>
                ))}
            </div>
        </div>

    );
}

