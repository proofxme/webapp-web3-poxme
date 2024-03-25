"use client";

import { TopNavBrowser } from "@/components/ui/navigations/top-nav-browser";
import Footer from "@/components/footer";

export default function Template({children}: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen text-[#000000]">
      <TopNavBrowser/>
      {children}
      <Footer/>
    </div>
  );
}
