import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ReactNode } from "react";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  metadataBase: new URL('https://pox.me/'),
  title: "Proof of X | Home",
  description: "Proof of X is a new way to communicate and interact within the internet. Build a Digital Identity around your email.",
  openGraph: {
    title: "Proof of X | Home",
    description: "Proof of X | Home",
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

export default async function RootLayout({children}: {
  children: ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
    <body className={inter.className}>
    <Providers session={session}>
      {children}
      <SpeedInsights/>
    </Providers>
    <Analytics/>
    </body>
    </html>
  );
}
