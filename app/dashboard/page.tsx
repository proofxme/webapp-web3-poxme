"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { JSX, SVGProps } from "react"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
        <Link className="flex items-center gap-2 text-lg font-semibold sm:text-base mr-4" href="#">
          <FrameIcon className="w-6 h-6"/>
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="hidden font-medium sm:flex flex-row items-center gap-5 text-sm lg:gap-6">
          <Link className="font-bold" href="#">
            Home
          </Link>
          <Link className="text-gray-500 dark:text-gray-400" href="#">
            Dashboard
          </Link>
          <Link className="text-gray-500 dark:text-gray-400" href="#">
            Migration
          </Link>
          <Link className="text-gray-500 dark:text-gray-400" href="#">
            Settings
          </Link>
        </nav>
        <div className="flex items-center w-full gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <Button className="rounded-full ml-auto" size="icon" variant="ghost">
            <UserIcon className="w-6 h-6"/>
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </div>
      </header>
      <main
        className="flex min-h-[calc(100vh_-_theme(spacing.16))] bg-gray-100/40 flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10 dark:bg-gray-800/40">
        <div className="max-w-6xl w-full mx-auto flex items-center gap-4">
          <form className="flex-1">
            <Input className="bg-white dark:bg-gray-950" placeholder="Search profiles..."/>
            <Button className="sr-only" type="submit">
              Submit
            </Button>
          </form>
          <Button>Add New</Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full mx-auto">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <UserIcon className="w-8 h-8"/>
              <div className="grid gap-1">
                <CardTitle>Profile 1</CardTitle>
                <CardDescription>Description for Profile 1</CardDescription>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="ml-auto" size="icon" variant="ghost">
                    <MoreHorizontalIcon className="w-4 h-4"/>
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>View Profile</DropdownMenuItem>
                  <DropdownMenuItem>Edit Details</DropdownMenuItem>
                  <DropdownMenuItem>View NFT History</DropdownMenuItem>
                  <DropdownMenuItem>Set Visibility</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardHeader>
            <CardContent className="grid gap-2">
              <div className="text-sm font-semibold">Privacy: Public</div>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <GithubIcon className="w-4 h-4"/>
                  <span className="text-gray-500 dark:text-gray-400">1h ago</span>
                </div>
                <div className="flex items-center gap-1">
                  <GitBranchIcon className="w-4 h-4"/>
                  <span className="text-gray-500 dark:text-gray-400">main</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <UserIcon className="w-8 h-8"/>
              <div className="grid gap-1">
                <CardTitle>Profile 2</CardTitle>
                <CardDescription>Description for Profile 2</CardDescription>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="ml-auto" size="icon" variant="ghost">
                    <MoreHorizontalIcon className="w-4 h-4"/>
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>View Profile</DropdownMenuItem>
                  <DropdownMenuItem>Edit Details</DropdownMenuItem>
                  <DropdownMenuItem>View NFT History</DropdownMenuItem>
                  <DropdownMenuItem>Set Visibility</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardHeader>
            <CardContent className="grid gap-2">
              <div className="text-sm font-semibold">Privacy: Private</div>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <GithubIcon className="w-4 h-4"/>
                  <span className="text-gray-500 dark:text-gray-400">2h ago</span>
                </div>
                <div className="flex items-center gap-1">
                  <GitBranchIcon className="w-4 h-4"/>
                  <span className="text-gray-500 dark:text-gray-400">main</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <UserIcon className="w-8 h-8"/>
              <div className="grid gap-1">
                <CardTitle>Profile 3</CardTitle>
                <CardDescription>Description for Profile 3</CardDescription>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="ml-auto" size="icon" variant="ghost">
                    <MoreHorizontalIcon className="w-4 h-4"/>
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>View Profile</DropdownMenuItem>
                  <DropdownMenuItem>Edit Details</DropdownMenuItem>
                  <DropdownMenuItem>View NFT History</DropdownMenuItem>
                  <DropdownMenuItem>Set Visibility</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardHeader>
            <CardContent className="grid gap-2">
              <div className="text-sm font-semibold">Privacy: Anonymous</div>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <GithubIcon className="w-4 h-4"/>
                  <span className="text-gray-500 dark:text-gray-400">3h ago</span>
                </div>
                <div className="flex items-center gap-1">
                  <GitBranchIcon className="w-4 h-4"/>
                  <span className="text-gray-500 dark:text-gray-400">main</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

function FrameIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <line x1="22" x2="2" y1="6" y2="6"/>
      <line x1="22" x2="2" y1="18" y2="18"/>
      <line x1="6" x2="6" y1="2" y2="22"/>
      <line x1="18" x2="18" y1="2" y2="22"/>
    </svg>
  )
}


function GitBranchIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <line x1="6" x2="6" y1="3" y2="15"/>
      <circle cx="18" cy="6" r="3"/>
      <circle cx="6" cy="18" r="3"/>
      <path d="M18 9a9 9 0 0 1-9 9"/>
    </svg>
  )
}


function GithubIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path
        d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
      <path d="M9 18c-4.51 2-5-2-7-2"/>
    </svg>
  )
}


function MoreHorizontalIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="12" r="1"/>
      <circle cx="19" cy="12" r="1"/>
      <circle cx="5" cy="12" r="1"/>
    </svg>
  )
}


function UserIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
