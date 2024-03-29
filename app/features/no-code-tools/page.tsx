import type { Metadata } from "next";
import NoCodeToolsFeature from "./no-code-tools";

export const metadata: Metadata = {
  title: "Proof of X | No Code Tools",
  description: "",
  openGraph: {
    title: "Proof of X | No Code Tools",
    description: "",

    url: "https://pox.me/features/no-code-tools",
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
    title: "Proof of X | No Code Tools",
    description: "",

    creator: "@proofxme",
    images: ["/images/home-hero.jpg"],
  },
};

export default function NoCodeToolFeaturePage() {
  return (
    <>
      <NoCodeToolsFeature />
    </>
  );
}
