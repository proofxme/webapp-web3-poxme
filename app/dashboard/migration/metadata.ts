import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proof of X | Migration center",
  description:
    "During the migration period, you can deposit $EULER to get the new token and claim your membership NFTs.",
  openGraph: {
    title: "Proof of X | Migration center",
    description:
      "During the migration period, you can deposit $EULER to get the new token and claim your membership NFTs.",

    url: "https://pox.me/dashboard/migration",
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
    title: "Proof of X | Migration center",
    description:
      "During the migration period, you can deposit $EULER to get the new token and claim your membership NFTs.",

    creator: "@proofxme",
    images: ["/images/home-hero.jpg"],
  },
};
