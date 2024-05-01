'use client';

import Link from "next/link";
import IsoLogo from "@/components/ui/isologo";
import { Button } from "@/components/ui/button";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import SignOut from "@/components/ui/sign-out";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import HamIcon from "@/components/icons/hamicon";

export default function DashboardTemplate({children}: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="flex flex-col w-full min-h-screen">
      <div className="flex lg:hidden">
        <Sheet>
          <SheetTrigger className="flex start" asChild>
            <div className="absolute top-4 left-4 lg:hidden">
              <Button variant="outline">
                <HamIcon className="h-6 w-6"/>
              </Button>
              <span className="sr-only">Toggle navigation menu</span>
            </div>
          </SheetTrigger>
          <SheetContent side="left" className="flex flex-col justify-between min-h-screen">
            <div className="flex flex-col gap-4 p-6">
              <Link
                className="flex h-auto items-center justify-start gap-1 text-lg font-semibold"
                href="/dashboard"
              >
                Home
              </Link>
              <Link
                className="flex h-auto items-center justify-start gap-1 text-lg font-semibold"
                href="/credentials"
              >
                Credentials
              </Link>
              <Link
                className="flex h-auto items-center justify-start gap-1 text-lg font-semibold"
                href="/identities"
              >
                Identities
              </Link>
            </div>
            <div className="flex items-center gap-2 justify-between">
              <SignOut/>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
        <nav
          className="flex-col hidden gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link className={`flex items-center gap-2 text-lg ${pathname === '/' ? 'font-bold' : ''} md:text-base`}
                href="/dashboard">
            <IsoLogo className="w-8 h-8"/>
            <span className="sr-only">Proof of X</span>
          </Link>
          <Link className={`dark:text-gray-400 ${pathname === '/dashboard' ? 'font-bold underline' : ''}`}
                href="/dashboard">
            Home
          </Link>
          <Link className={`dark:text-gray-400 ${pathname === '/credentials' ? 'font-bold underline' : ''}`}
                href="/credentials">
            Credentials
          </Link>
          <Link className={`dark:text-gray-400 ${pathname === '/identities' ? 'font-bold underline' : ''}`}
                href="/identities">
            Identities
          </Link>
          {/*
          \<Link className="text-gray-500 dark:text-gray-400" href="/communications">
            Communications
          </Link>
          */}
        </nav>
        <div className="flex items-center justify-end w-full gap-4 md:mr-auto md:gap-2 lg:gap-4">
          <ConnectButton accountStatus="address" chainStatus="icon"/>
          <Button className="rounded-full" size="icon" variant="ghost">
            <BellIcon className="w-4 h-4"/>
            <span className="sr-only">Toggle notifications</span>
          </Button>
          <Link href="/" className="rounded-full">
            <UserIcon className="w-4 h-4"/>
          </Link>
          <div className="hidden">
            <SignOut/>
          </div>
        </div>
      </header>
      <div className="flex flex-col min-h-screen text-[#000000]">
        {children}
      </div>
    </div>
  );
}

function UserIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>
  )
}


function BellIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/>
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>
    </svg>
  )
}

