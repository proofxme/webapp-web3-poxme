'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { IIdentityCredential } from "app/api/interfaces/identity";
import { TelegramIcon } from "@/components/socialIconsSection";

export default function TelegramList(props: { telegrams: IIdentityCredential[] }) {
  const {telegrams} = props;

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Telegram Accounts</CardTitle>
        <CardDescription>This is the list of verified Telegram accounts.</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {telegrams.map((telegram, index) => (
            <li
              key={index}
              className="flex items-center justify-between rounded-md bg-gray-100 px-4 py-2 dark:bg-gray-800"
            >
              <div>{telegram.displayValue}</div>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => window.open(`https://t.me/${telegram.displayValue}`, '_blank')}
                  disabled={telegram.displayValue.includes('*')}
                >
                  <TelegramIcon className="h-4 w-4"/>
                  <span className="sr-only">Open Telegram account</span>
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}