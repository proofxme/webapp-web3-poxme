import type { Metadata } from "next";
import Demo from "./demo";

export const metadata: Metadata = {
  title: "Proof of X | Demo",
  description:
    "Demo proposal for landing page.",
  openGraph: {
    title: "Proof of X | Demo",
    description:
      "Demo proposal for landing page.",

    url: "https://pox.me/demo",
    siteName: "Proof of X",
    images: [
      {
        url: "/images/image1.jpg",
        width: 1800,
        height: 1600,
        alt: "demo image",
      },
      {
        url: "/images/image2.jpg",
        width: 1800,
        height: 1600,
        alt: "demo image",
      },
      {
        url: "/images/image3.jpg",
        width: 1800,
        height: 1600,
        alt: "demo image",
      },
      {
        url: "/images/image4.jpg",
        width: 1800,
        height: 1600,
        alt: "demo image",
      },
      {
        url: "/images/Affiliate.jpg",
        width: 1800,
        height: 1600,
        alt: "demo image",
      },
      {
        url: "/images/Membership.jpg",
        width: 1800,
        height: 1600,
        alt: "demo image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Proof of X | Demo",
    description:
      "Demo proposal for landing page.",

    creator: "@proofxme",
    images: [
        "/images/image1.jpg", 
        "/images/image2.jpg", 
        "/images/image3.jpg",
        "/images/image4.jpg",
        "/images/Affiliate.jpg",
        "/images/Membership.jpg"
    ],
  },
};

export default function DemoPage() {
  return (
    <>
      <Demo />
    </>
  );
}
