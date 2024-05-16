'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { IIdentityLink } from "app/api/interfaces/identity";
import { JSX, SVGProps } from "react";

export default function LinkCard(props: { links: IIdentityLink[] }) {
  const {links} = props;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  }

  const openInNewWindow = (url: string) => {
    window.open(url, '_blank');
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Links</CardTitle>
        <CardDescription>Some of these links may not be verified or verifiable.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        {links.map((link: IIdentityLink) =>
          <div
            key={link.url}
            className="group flex items-center gap-4 rounded-md bg-gray-100 p-4 transition hover:bg-gray-200 focus-within:scale-105 dark:bg-gray-800 dark:hover:bg-gray-700">
            <LinkIcon className="w-6 h-6"/>
            <div className="grid gap-1">
              <h3 className="font-semibold">{link.displayValue}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{link.url}</p>
            </div>
            <div className="ml-auto flex gap-2">
              <Button size="icon" variant="ghost" onClick={() => copyToClipboard(link.url)}>
                <CopyIcon className="w-4 h-4"/>
                <span className="sr-only">Copy link</span>
              </Button>
              <Button size="icon" variant="ghost" onClick={() => openInNewWindow(link.url)}>
                <ExternalLinkIcon className="w-4 h-4"/>
                <span className="sr-only">Open in new window</span>
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

function CopyIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
    </svg>
  )
}


function ExternalLinkIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M15 3h6v6"/>
      <path d="M10 14 21 3"/>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    </svg>
  )
}


function LinkIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
    </svg>
  )
}
