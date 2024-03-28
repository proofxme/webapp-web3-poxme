import type { Metadata } from "next";
import Membership from "./membership";

export const metadata: Metadata = {
  metadataBase: new URL('https://pox.me/'),
  title: "Proof of X | Membership",
  description:
    "Get unlimited access to all our premium features with a lifetime membership.",
  openGraph: {
    title: "Proof of X | Membership",
    description:
      "Get unlimited access to all our premium features with a lifetime membership.",

    url: "https://pox.me/investors/membership",
    siteName: "Proof of X",
    images: [
      {
        url: "https://assets.pox.me/memberships/membership.png",
        width: 1800,
        height: 1600,
        alt: "Proof of X lifetime membership image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Proof of X | Membership",
    description:
      "Get unlimited access to all our premium features with a lifetime membership.",

    creator: "@proofxme",
    images: ["https://assets.pox.me/memberships/membership.png"],
  },
};

export default function MembershipPage() {
  return (
    <>
      <Membership/>
    </>
  );
}
