import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://pox.me/'),
  title: "Proof of X | Dashboard",
  description: "Proof of X | Dashboard",
  openGraph: {
    title: "Proof of X | Dashboard",
    description: "Proof of X | Dashboard",
    url: "https://pox.me",
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
    title: "Proof of X | Home",
    description: "Proof of X | Home",
    creator: "@proofxme",
    images: ["/images/home-hero.jpg"],
  },
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}
