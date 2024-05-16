'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { IIdentity, IIdentityCore, IIdentityCredential, IIdentityLink } from "app/api/interfaces/identity";
import { createIdentity } from "app/api/identities/create-identity";
import { useState } from "react";
import { deleteIdentity } from "app/api/identities/delete-identity";

export default function LinkComponent(props: {
  id: IIdentityCore,
  identity: IIdentityCredential[],
  action: () => void
}) {
  const {identity, action, id} = props;
  const [loading, setLoading] = useState(false);

  const [link, setLink] = useState<IIdentityLink>({
    handlerName: id.handlerName,
    content: '',
    icon: 'link',
    displayValue: '',
    url: '',
    active: true
  });

  const links: IIdentityLink[] | [] = identity.filter((i: IIdentity) => i.content.includes('link~')) as unknown as IIdentityLink[]

  const handleSubmit = async () => {
    setLoading(true)
    try {
      await createIdentity({
        handlerName: id.handlerName,
        content: `link~${link.displayValue}`,
        icon: link.icon,
        displayValue: link.displayValue,
        url: link.url,
        active: true,
      });
      //cleanup the form
      setLink({
        handlerName: id.handlerName,
        content: '',
        icon: 'link',
        displayValue: '',
        url: '',
        active: true
      });
      action()
    } catch (error) {
      console.error('Failed to update identity.');
    }
    setLoading(false)
  }

  const handleDelete = async (link: IIdentityLink) => {
    setLoading(true)
    if (confirm('Are you sure you want to delete this link?')) {
      try {
        await deleteIdentity(link);
        action()
      } catch (error) {
        console.error('Failed to delete link.');
      }
    }
    setLoading(false)
  }

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Add Links</CardTitle>
        <CardDescription>Add links to your website with icons, display names, and URLs.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="grid grid-cols-3 items-start gap-4">
            <div className="space-y-2">
              <Label htmlFor="icon">Icon</Label>
              <Select defaultValue="link">
                <SelectTrigger className="w-full">
                  <SelectValue>
                    <div className="flex items-center gap-2">
                      <LinkIcon className="h-5 w-5"/>
                      Link
                    </div>
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="link">
                      <div className="flex items-center gap-2">
                        <LinkIcon className="h-5 w-5"/>
                        Link
                      </div>
                    </SelectItem>
                    <SelectItem value="home">
                      <div className="flex items-center gap-2">
                        <HomeIcon className="h-5 w-5"/>
                        Home
                      </div>
                    </SelectItem>
                    <SelectItem value="about">
                      <div className="flex items-center gap-2">
                        <UserIcon className="h-5 w-5"/>
                        About
                      </div>
                    </SelectItem>
                    <SelectItem value="contact">
                      <div className="flex items-center gap-2">
                        <MailIcon className="h-5 w-5"/>
                        Contact
                      </div>
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="name">Display Name</Label>
              <Input id="name" placeholder="Link Name"
                     value={link.displayValue}
                     onChange={(e) => setLink({...link, displayValue: e.target.value})}/>
            </div>
            <div className="space-y-2">
              <Label htmlFor="url">URL</Label>
              <Input id="url" placeholder="https://example.com"
                     value={link.url}
                     onChange={(e) => setLink({...link, url: e.target.value})}/>
            </div>
          </div>
          <Button type="submit" onClick={handleSubmit} disabled={loading}>Add Link</Button>
        </div>
      </CardContent>
      <CardContent>
        <div className="space-y-4">
          {links.map((link: IIdentityLink) => (
            <div className="flex items-center justify-between rounded-lg bg-gray-100 p-4 dark:bg-gray-800"
                 key={link.content}>
              <div className="flex items-center gap-4">
                <LinkIcon className="h-6 w-6"/>
                <div>
                  <div className="font-medium">{link.displayValue}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{link.url}</div>
                </div>
              </div>
              <Button
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                size="icon"
                variant="ghost"
                onClick={() => handleDelete(link)}
                disabled={loading}
              >
                <TrashIcon className="h-5 w-5"/>
                <span className="sr-only">Delete</span>
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

function HomeIcon(props: any) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  )
}


function LinkIcon(props: any) {
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


function TrashIcon(props: any) {
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
      <path d="M3 6h18"/>
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
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
