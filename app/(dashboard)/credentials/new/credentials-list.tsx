'use client';

import React, { useState } from "react";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { AppleIcon, ChromeIcon, FacebookIcon, GithubIcon, TwitterIcon } from "@/components/socialIconsSection";
import { MailIcon } from "app/(dashboard)/credentials/icons";
import EmailCredential from "app/(dashboard)/credentials/new/email-credential";
import TwitterCredential from "app/(dashboard)/credentials/new/twitter-credential";
import Web3Credential from "app/(dashboard)/credentials/new/web3-credential";


export default function CredentialsList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCredential, setSelectedCredential] = useState(null);
  const [credentials, setCredentials] = useState([
    {id: 1, name: 'Twitter', icon: TwitterIcon, disabled: false, component: <TwitterCredential/>},
    {id: 2, name: 'Email', icon: MailIcon, disabled: false, component: <EmailCredential/>},
    {id: 7, name: 'Web3', icon: WalletIcon, disabled: false, component: <Web3Credential/>},
    {id: 3, name: 'Facebook', icon: FacebookIcon, disabled: true, component: null},
    {id: 4, name: 'Google', icon: ChromeIcon, disabled: true, component: null},
    {id: 5, name: 'GitHub', icon: GithubIcon, disabled: true, component: null},
    {id: 6, name: 'Apple', icon: AppleIcon, disabled: true, component: null},
  ]);

  const filteredCredentials = credentials.filter(credential =>
    credential.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCredentialSelect = (credential: any) => {
    setSelectedCredential(credential.component);
  };

  return (
    <div className="flex w-full min-h-screen items-start py-4 gap-4 flex-col">
      <div className="container mx-auto px-4">
        <div className="grid gap-4">
          <div className="mx-auto max-w-3xl space-y-8 py-12">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold">Credential Providers</h1>
              <p className="text-gray-500 dark:text-gray-400">Connect your app to various authentication providers.</p>
            </div>
            <div className="space-y-4">
              <Input
                className="w-full"
                placeholder="Search providers..."
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="grid grid-cols-6 gap-4">
                {filteredCredentials.sort((c: { disabled: any; }) => c.disabled).map(credential => (
                  <Button
                    key={credential.id}
                    className={`flex items-center justify-center h-16 w-16 rounded-full ${credential.disabled ? 'bg-gray-200 dark:bg-gray-700' : 'bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                    variant="outline"
                    disabled={credential.disabled}
                    onClick={() => handleCredentialSelect(credential)}
                  >
                    {credential.disabled &&
                      <span className="text-xs text-gray-400 dark:text-gray-500 absolute -bottom-4">soon</span>}
                    <credential.icon className="w-6 h-6"/>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {selectedCredential && (
        <div className="container mx-auto px-4 mt-8">
          {selectedCredential}
        </div>
      )}
    </div>
  )
}

export function WalletIcon(props: any) {
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
        d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/>
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/>
    </svg>
  )
}
