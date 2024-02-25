import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://pox.me/'),
  title: "Proof of X | Features",
  description:
    "We're excited to share what we're working on. Here are the features and improvements you can expect in the coming months.",
  openGraph: {
    title: "Proof of X | Features",
    description:
      "We're excited to share what we're working on. Here are the features and improvements you can expect in the coming months.",

    url: "https://pox.me/features",
    siteName: "Proof of X",
    images: [
      {
        url: "/images/home-hero.jpg",
        width: 1800,
        height: 1600,
        alt: "A cool fingerprint image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function FeaturesPage() {
  return (
    <main className="bg-gray-50 dark:bg-gray-900">
      <section className="w-full py-12 md:py-24 lg:py-24">
        <div className="container">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold sm:text-5xl">
                Features
              </h2>
              <p
                className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                We built an identity system combining the best of blockchain and email.
                As decentralized and secured as you want, as easy to use as you need.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
