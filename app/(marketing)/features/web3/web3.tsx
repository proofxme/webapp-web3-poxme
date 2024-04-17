"use client";

import featuresData from "../featuresData.json";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import List from "../components/List";
import HighlightsSection from "../components/HighlightSection";

const slug = "web3";
const feature = featuresData.features.find((feature) => feature.slug === slug);

export default function Web3_Feature() {
  return (
    <>
      <section className="bg-white mb-12">
        <div className="grid max-w-screen-xl mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12 mt-10 mb-5">
          <div className="mr-auto place-self-center lg:col-span-7 text-left mt-7 mb-5 text-center sm:text-left">
            <span className="relative inline-block">{renderSVG()}</span>
            <h1 className="relative max-w-2xl mb-4 text-4xl lg:text-6xl font-extrabold tracking-tight leading-none dark:text-white">
              {feature?.title}
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              {feature?.subtitle}
            </p>
            <Button>{feature?.buttonText}</Button>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <Image
              alt="Image"
              className="mx-auto overflow-hidden w-8/12 lg:order-last"
              height="70"
              src="/images/gene-sequence.svg"
              width="70"
            />
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center h-auto bg-gray-50">
        <List features={feature && feature.cards ? feature.cards : []} />
      </section>
      <section className="flex mx-auto mt-12 mb-8 text-center justify-content-center align-items-center">
        <div className="mt-12 mb-5 p-5">
          <h1 className="relative max-w-2xl mb-4 text-4xl lg:text-5xl font-extrabold tracking-tight leading-none dark:text-white">
            {feature?.useCaseTitle}
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 text-base/7 leading-loose mt-12">
            {feature?.useCaseText}
          </p>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <span className="relative inline-block mt-6">{renderSVG()}</span>
        </div>
      </section>
      <section className="py-16 bg-gray-100">
        <HighlightsSection highlights={feature?.highlightsCards} />
      </section>
    </>
  );
}

const renderSVG = () => (
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
);
