"use client";

import { FC } from 'react';
import FeatureCard from '../components/Card';

const List: FC<{ features: any[] }> = ({ features }) => {
    return (
        <div className="container mx-auto w-full p-5 mt-8 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 mb-11 mt-8 gap-8 sm:gap-10">
                {features?.map((feature, index) => (
                    <div key={index} className="flex justify-center">
                        <FeatureCard
                            key={index}
                            title={feature.title}
                            icon={feature.icon}
                            description={feature.description}
                            slug={feature.slug}
                            width={"w-11/12"}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}


export default List;
