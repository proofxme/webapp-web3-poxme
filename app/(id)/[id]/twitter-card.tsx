'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { IIdentityCredential } from "app/api/interfaces/identity";
import { TwitterIcon } from "@/components/socialIconsSection";

export default function TwitterList(props: { twitters: IIdentityCredential[] }) {
  const {twitters} = props;

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Twitter Accounts</CardTitle>
        <CardDescription>This is the list of verified twitter accounts.</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {twitters.map((twitter, index) => (
            <li
              key={index}
              className="flex items-center justify-between rounded-md bg-gray-100 px-4 py-2 dark:bg-gray-800"
            >
              <div>{twitter.displayValue}</div>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => window.open(`https://twitter.com/${twitter.displayValue}`, '_blank')}
                  disabled={twitter.displayValue.includes('*')}
                >
                  <TwitterIcon className="h-4 w-4"/>
                  <span className="sr-only">Open Twitter account</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => window.open(`https://twitter.com/intent/user?screen_name=${twitter.displayValue}`, '_blank')}
                  disabled={twitter.displayValue.includes('*')}
                >
                  <TwitterIcon className="h-4 w-4"/>
                  <span className="sr-only">Follow Twitter account</span>
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
