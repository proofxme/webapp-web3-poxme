import type { Metadata } from "next";
import Roadmap from "./roadmap";

export const metadata: Metadata = {
  metadataBase: new URL('https://pox.me/'),
  title: "Proof of X | Roadmap",
  description:
    "We're excited to share what we're working on. Here are the features and improvements you can expect in the coming months.",
  openGraph: {
    title: "Proof of X | Roadmap",
    description:
      "We're excited to share what we're working on. Here are the features and improvements you can expect in the coming months.",

    url: "https://pox.me/roadmap",
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
  twitter: {
    card: "summary_large_image",
    title: "Proof of X | Roadmap",
    description:
      "We're excited to share what we're working on. Here are the features and improvements you can expect in the coming months.",

    creator: "@proofxme",
    images: ["/images/home-hero.jpg"],
  },
};

export default function RoadmapPage() {
  return (
    <>
      <Roadmap/>
    </>
  );
}
