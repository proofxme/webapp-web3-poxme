import { Metadata } from "next";
import Contact from "./contact";

export const metadata: Metadata = {
  title: "Proof of X | Contact",
  description:
    "Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.",
  openGraph: {
    title: "Proof of X | Contact",
    description:
      "Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.",

    url: "https://pox.me/contact",
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
    title: "Proof of X | Contact",
    description:
      "Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.",

    creator: "@proofxme",
    images: ["/images/home-hero.jpg"],
  },
};

export default function ContactPage() {
  return (
    <>
      <Contact />
    </>
  );
}
