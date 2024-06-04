'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { IIdentityCredential } from "app/api/interfaces/identity";
import AddressShortener from "@/components/ui/address-shortener";
import React from "react";

export default function WalletList(props: { wallets: IIdentityCredential[] }) {
  const {wallets} = props;

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Web3 Wallets</CardTitle>
        <CardDescription>Verified Web3 wallet addresses.</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {wallets.map((wallet, index) => (
            <li
              key={index}
              className="flex items-center justify-between rounded-md bg-gray-100 px-4 py-2 dark:bg-gray-800"
            >
              {wallet.displayValue.includes('*') ? (<div>{wallet.displayValue}</div>) : (
                <AddressShortener address={wallet.displayValue}/>)}
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  disabled={wallet.displayValue.includes('*')}
                  onClick={() => navigator.clipboard.writeText(wallet.displayValue)}
                >
                  <CopyIcon className="h-4 w-4"/>
                  <span className="sr-only">Copy wallet address</span>
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

function CopyIcon(props: any) {
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
  );
}
