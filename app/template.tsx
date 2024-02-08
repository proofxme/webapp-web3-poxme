'use client'
import { TopNavBrowser } from "@/components/ui/navigations/top-nav-browser";
import Footer from "@/components/footer";

export default function Template({children}: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-[#f9f6f2] text-[#000000] font-serif">
      <TopNavBrowser/>
      {children}
      <div className="wave-container pt-5"></div>
      <Footer/>
    </div>
  )
}
