import { notFound } from 'next/navigation';
import featuresData from '../featuresData.json';
import FeatureCard from '../components/Card';

export async function generateStaticParams() {
  return featuresData.features.map((feature) => ({
    slug: feature.slug,
  }));
}

export default function featurePage({ params: { slug } }: { params: { slug: string } }) {
  const feature = featuresData.features.find((feat) => feat.slug === slug);

  if (!feature) {
    notFound();
  }

  return (
    <div className="flex justify-center items-center h-auto p-12 bg-gray-50">
      <div className="w-full md:w-1/2 flex justify-center">
        <FeatureCard
          title={feature.title}
          description={feature.description}
          image={feature.image}
          subtitle={feature.subtitle}
          showButton={false}
          slug={feature.slug}
          width={'w-full'}
          height={''}
        />
      </div>
    </div>
  );
}
