import type { Metadata } from "next";
import Web3Feature from "app/(marketing)/features/web3/web3";

export const metadata: Metadata = {
  title: "Proof of X | Web3 Tools",
  description: "",
  openGraph: {
    title: "Proof of X | Web3 Tools",
    description: "",

    url: "https://pox.me/features/web3",
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
    title: "Proof of X | Web3 Tools",
    description: "",

    creator: "@proofxme",
    images: ["/images/home-hero.jpg"],
  },
};

export default function SecuritySecurityFeaturePage() {
  return <Web3Feature/>;
}
