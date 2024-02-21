import { notFound } from 'next/navigation';
import featuresData from '../featuresData.json';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import List from '../components/List';

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
    <><section className="bg-white mb-12">
      <div className="grid max-w-screen-xl  mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12 mt-10">
        <div className="mr-auto place-self-center lg:col-span-7 text-left mt-7 mb-5">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="192913ce-1f29-4abd-b545-0fbccfd2b0ec"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" fill="gray" />
                </pattern>
              </defs>
              <rect
                fill="url(#192913ce-1f29-4abd-b545-0fbccfd2b0ec)"
                width="52"
                height="24"
              />
            </svg>

          </span>
          <h1 className="relative max-w-2xl mb-4 text-5xl font-extrabold tracking-tight leading-none dark:text-white">Empower Your Digital Identity with POXME Omnichannel Solutions</h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Aggregate and Secure Your Credentials for Verified Online Interactions</p>
          <Button>Explore How It Works</Button>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Image
            alt="Image"
            className="mx-auto overflow-hidden w-8/12 lg:order-last"
            height="70"
            src="https://www.svgrepo.com/show/530666/gene-sequence.svg"
            width="70"
          />
        </div>
      </div>
    </section>
      <div className="flex justify-center items-center h-auto p-12 bg-gray-50 mt-12">
          <List features={feature.cards}/>     
      </div></>
  );
}
