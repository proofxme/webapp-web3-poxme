'use server';

import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import IsoLogo from "@/components/ui/isologo";

export default async function Dashboard() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
        <nav
          className="flex-col hidden gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link className="flex items-center gap-2 text-lg font-semibold md:text-base" href="#">
            <IsoLogo className="w-8 h-8"/>
            <span className="sr-only">Acme Inc</span>
          </Link>
          <Link className="font-bold" href="#">
            Updates
          </Link>
          <Link className="text-gray-500 dark:text-gray-400" href="#">
            Roadmap
          </Link>
          <Link className="text-gray-500 dark:text-gray-400" href="#">
            Feedback
          </Link>
        </nav>
        <div className="flex items-center w-full gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="flex-1 ml-auto sm:flex-initial">
            <div className="relative">
              <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400"/>
              <Input
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                placeholder="Search updates..."
                type="search"
              />
            </div>
          </form>
          <Button className="rounded-full" size="icon" variant="ghost">
            <BellIcon className="w-4 h-4"/>
            <span className="sr-only">Toggle notifications</span>
          </Button>
          <Button className="rounded-full" size="icon" variant="ghost">
            <UserIcon className="w-4 h-4"/>
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Unread</CardTitle>
              <MailIcon className="w-4 h-4 text-gray-500 dark:text-gray-400"/>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2">
                <Link className="flex items-center gap-2 font-semibold" href="#">
                  <MailIcon className="w-4 h-4"/>
                  <span className="font-semibold">Your feature request has been received</span>
                </Link>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Your feature request has been successfully submitted and will be reviewed by our team.
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  <time>2 min ago</time>
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Activity</CardTitle>
              <ActivityIcon className="w-4 h-4 text-gray-500 dark:text-gray-400"/>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2">
                <Link className="flex items-center gap-2 font-semibold" href="#">
                  <CheckIcon className="w-4 h-4"/>
                  <span className="font-semibold">New feature: Dark mode now available</span>
                </Link>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  You can now enable dark mode in your settings.
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  <time>1 hour ago</time>
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Pending</CardTitle>
              <ClockIcon className="w-4 h-4 text-gray-500 dark:text-gray-400"/>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2">
                <Link className="flex items-center gap-2 font-semibold" href="#">
                  <ClockIcon className="w-4 h-4"/>
                  <span className="font-semibold">Your feature request has been received</span>
                </Link>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Your feature request has been successfully submitted and will be reviewed by our team.
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  <time>2 min ago</time>
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Community</CardTitle>
              <Users2Icon className="w-4 h-4 text-gray-500 dark:text-gray-400"/>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2">
                <Link className="flex items-center gap-2 font-semibold" href="#">
                  <MessageSquareIcon className="w-4 h-4"/>
                  <span className="font-semibold">Introducing our new community forums</span>
                </Link>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  We&apos;re excited to announce the launch of our community forums.
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  <time>1 hour ago</time>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        <Card className="flex-1">
          <CardHeader className="flex flex-row items-center pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Converse</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-1 flex-col p-0">
            <div
              className="flex flex-1 flex-col items-start p-4 text-sm rounded-t-none md:text-base md:rounded-t-lg lg:text-base xl:p-6">
              <div className="grid gap-2">
                <div className="flex items-start gap-2">
                  <img
                    alt="Avatar"
                    className="rounded-full"
                    height="40"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "40/40",
                      objectFit: "cover",
                    }}
                    width="40"
                  />
                  <div className="grid gap-1.5">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">Bot</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        <time>2:34 pm</time>
                      </span>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400">Hi there! How can I help you today?</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <img
                    alt="Avatar"
                    className="rounded-full"
                    height="40"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "40/40",
                      objectFit: "cover",
                    }}
                    width="40"
                  />
                  <div className="grid gap-1.5">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">You</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        <time>2:35 pm</time>
                      </span>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400">
                      I&apos;m having trouble with my account. It won&apos;t let me log in.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 rounded-b-none md:rounded-b-lg">
              <form>
                <Textarea className="min-h-[100px]" placeholder="Type your message..."/>
                <Button className="mt-4" type="submit">
                  Send
                </Button>
              </form>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

function ActivityIcon(props: any) {
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
      <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
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


function CheckIcon(props: any) {
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
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  )
}


function ClockIcon(props: any) {
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
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  )
}


function FileEditIcon(props: any) {
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
      <path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5"/>
      <polyline points="14 2 14 8 20 8"/>
      <path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z"/>
    </svg>
  )
}


function MailIcon(props: any) {
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
      <rect width="20" height="16" x="2" y="4" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  )
}


function MessageSquareIcon(props: any) {
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
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
  )
}


function Package2Icon(props: any) {
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
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"/>
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"/>
      <path d="M12 3v6"/>
    </svg>
  )
}


function SearchIcon(props: any) {
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
      <circle cx="11" cy="11" r="8"/>
      <path d="m21 21-4.3-4.3"/>
    </svg>
  )
}


function SettingsIcon(props: any) {
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
        d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  )
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


function Users2Icon(props: any) {
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
      <path d="M14 19a6 6 0 0 0-12 0"/>
      <circle cx="8" cy="9" r="4"/>
      <path d="M22 19a6 6 0 0 0-6-6 4 4 0 1 0 0-8"/>
    </svg>
  )
}
