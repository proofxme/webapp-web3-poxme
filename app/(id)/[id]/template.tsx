'use client';

import { usePathname } from "next/navigation";

export default function DashboardTemplate({children}: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="flex flex-col w-full min-h-screen">
      {children}
    </div>
  );
}
