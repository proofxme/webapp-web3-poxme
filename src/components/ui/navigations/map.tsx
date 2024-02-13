import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import React from "react";
import NavData from "./nav-data.json";
import Link from "next/link";

export default function map() {
  return (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Features</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[400px] p-2">
              <NavigationMenuLink asChild>
                <Link
                  className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                  href="#"
                >
                  <div className="text-sm font-medium leading-none group-hover:underline">
                    OmniChannel
                  </div>
                  <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                    Connect all your communication protocols in a single place.
                  </div>
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link
                  className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                  href="#"
                >
                  <div className="text-sm font-medium leading-none group-hover:underline">
                    No Code Tools
                  </div>
                  <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                    Automate your communications without writing a single line
                    of code.
                  </div>
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link
                  className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                  href="#"
                >
                  <div className="text-sm font-medium leading-none group-hover:underline">
                    Security & Compliance
                  </div>
                  <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                    Keep your data secure with our security features.
                  </div>
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link
                  className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                  href="#"
                >
                  <div className="text-sm font-medium leading-none group-hover:underline">
                    Web3
                  </div>
                  <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                    Protect your communications using the best of blockchain.
                  </div>
                </Link>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link
            className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
            href="#"
          >
            Pricing
          </Link>
        </NavigationMenuLink>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[550px] grid-cols-2 p-2">
              <NavigationMenuLink asChild>
                <Link
                  className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                  href="#"
                >
                  <div className="text-sm font-medium leading-none group-hover:underline">
                    Blog Posts
                  </div>
                  <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                    Read our latest blog posts.
                  </div>
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link
                  className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                  href="#"
                >
                  <div className="text-sm font-medium leading-none group-hover:underline">
                    Case Studies
                  </div>
                  <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                    Read our customer case studies.
                  </div>
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link
                  className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                  href="#"
                >
                  <div className="text-sm font-medium leading-none group-hover:underline">
                    Documentation
                  </div>
                  <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                    Learn how to use our product.
                  </div>
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link
                  className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                  href="#"
                >
                  <div className="text-sm font-medium leading-none group-hover:underline">
                    Help Center
                  </div>
                  <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                    Get help with our product.
                  </div>
                </Link>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuLink asChild>
          <Link
            className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
            href="/membership"
          >
            Membership
          </Link>
        </NavigationMenuLink>
        <NavigationMenuLink asChild>
          <Link
            className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
            href="/dashboard/migration"
          >
            Migration
          </Link>
        </NavigationMenuLink>
        <NavigationMenuLink asChild>
          <Link
            className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
            href="/roadmap"
          >
            Roadmap
          </Link>
        </NavigationMenuLink>

        <NavigationMenuLink asChild>
          <Link
            className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
            href="/contact"
          >
            Contact
          </Link>
        </NavigationMenuLink>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
