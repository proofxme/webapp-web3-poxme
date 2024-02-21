"use client";

import { FC } from 'react';
import FeatureCard from '../components/Card';

const List:FC<{features:any}> = ( { features } ) =>{
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 mb-12 pb-12">
                {features?.map((feature, index) => (
                    <div key={index} className="flex justify-center">
                        <FeatureCard
                            key={index}
                            title={feature.title}
                            icon={feature.icon}
                            description={feature.description}
                            showButton
                            slug={feature.slug}
                            width={"w-9/12"}
                        />
                    </div>
                ))}
            </div>
        </div>

    );
}


export default List;
