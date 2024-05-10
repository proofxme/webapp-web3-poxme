'use client';

import "@rainbow-me/rainbowkit/styles.css";
import { TopNavBrowser } from "@/components/ui/navigations/top-nav-browser";
import Footer from "@/components/footer";

export default function MarketingLayout({
                                          children,
                                        }: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen text-[#000000]">
      <TopNavBrowser/>
      {children}
      <Footer/>
    </div>
  );
}
