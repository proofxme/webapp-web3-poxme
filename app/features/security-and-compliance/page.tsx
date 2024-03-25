import type { Metadata } from "next";
import SecurityComplianceFeature from "./security-and-compliance";


export const metadata: Metadata = {
  title: "Proof of X | Security & Compliance",
  description:
    "",
  openGraph: {
    title: "Proof of X | Security & Compliance",
    description:
      "",

    url: "https://pox.me/features/security-and-compliance",
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
    title: "Proof of X | Security & Compliance",
    description:
      "",

    creator: "@proofxme",
    images: ["/images/home-hero.jpg"],
  },
};

export default function SecuritySecurityFeaturePage() {
  return (
   <SecurityComplianceFeature/>
  );
}
