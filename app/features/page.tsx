import type { Metadata } from "next";
import List from "./components/List";

export const metadata: Metadata = {
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
    <>
      <List />
    </>
  );
}
