import type { Metadata } from "next";
import OmniChannelFeature from "./omni-channel";


export const metadata: Metadata = {
  title: "Proof of X | OmniChannel",
  description:
    "",
  openGraph: {
    title: "Proof of X | OmniChannel",
    description:
      "",

    url: "https://pox.me/features/omni-channel",
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
    title: "Proof of X | OmniChannel",
    description:
      "",

    creator: "@proofxme",
    images: ["/images/home-hero.jpg"],
  },
};

export default function OmniChannelFeaturePage() {
  return (
    <>
      <OmniChannelFeature />
    </>
  );
}
