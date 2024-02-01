import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { JSX, SVGProps } from "react";


function ProofOfXIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      fill="none"
      height="100%"
      viewBox="0 0 24 24"
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.28966 24H22.7103C23.4227 24 24 23.4226 24 22.7103V1.28967C24 0.577353 23.4227 0 22.7103 0H1.28966C0.577346 0 0 0.577353 0 1.28967V22.7106C0 23.4226 0.577346 24 1.28966 24Z"
        fill="blue"/>
      <path
        d="M9.03865 18.9985L9.06226 18.9679L9.19667 18.7844L6.78953 15.5752L2.57593 21.1185H7.48712L9.04004 18.9982L9.03865 18.9985Z"
        fill="white"/>
      <path
        d="M9.88227 17.8627L12.5199 14.4933L12.5177 14.4905L21.4236 2.88184H16.6435L10.1097 11.4627L7.82088 8.19632H2.78027L9.88227 17.8627Z"
        fill="white"/>
      <path d="M10.5907 18.8485H10.5905L12.2464 21.0702L12.2819 21.1185H17.4531L13.1534 15.5469L10.5907 18.8485Z"
            fill="white"/>
    </svg>
  )
}

export function TopNavBrowser() {
  return <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
    <Link className="mr-6 hidden lg:flex" href="#">
      <ProofOfXIcon className="h-6 w-6"/>
      <span className="sr-only">Proof of X</span>
    </Link>
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList>
        <NavigationMenuLink asChild>
          <Link
            className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
            href="/dashboard/migration"
          >
            Migration
          </Link>
        </NavigationMenuLink>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Features</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[400px] p-2">
              <NavigationMenuLink asChild>
                <Link
                  className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                  href="#"
                >
                  <div className="text-sm font-medium leading-none group-hover:underline">Analytics</div>
                  <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                    Upgrade your reporting with advanced analytics.
                  </div>
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link
                  className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                  href="#"
                >
                  <div className="text-sm font-medium leading-none group-hover:underline">Developer Tools</div>
                  <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                    Extend your application with our developer tools.
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
                  <div className="text-sm font-medium leading-none group-hover:underline">Scalability</div>
                  <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                    Scale your application with our infrastructure.
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
                  <div className="text-sm font-medium leading-none group-hover:underline">Blog Posts</div>
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
                  <div className="text-sm font-medium leading-none group-hover:underline">Case Studies</div>
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
                  <div className="text-sm font-medium leading-none group-hover:underline">Documentation</div>
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
                  <div className="text-sm font-medium leading-none group-hover:underline">Help Center</div>
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
            href="/contact"
          >
            Contact
          </Link>
        </NavigationMenuLink>
      </NavigationMenuList>
    </NavigationMenu>
    <div className="ml-auto">
      <Button>Get Started</Button>
    </div>
  </header>;
}
