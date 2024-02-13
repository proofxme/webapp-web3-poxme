"use client";
import { TopNavBrowser } from "@/components/ui/navigations/top-nav-browser";
import Footer from "@/components/footer";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen text-[#000000]">
      <TopNavBrowser />
      <div className="flex justify-end px-4 lg:hidden">
        <ConnectButton />
      </div>
      {children}
      <Footer />
    </div>
  );
}
