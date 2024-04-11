'use client';

import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { IIdentity } from "app/api/interfaces/identity";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import VerifyEmail from "@/components/ui/verify-email";
import { CheckIcon, LogInIcon, MailIcon } from "app/(dashboard)/credentials/icons";
import LinkEmailDialog from "app/(dashboard)/identities/[id]/link-email";
import { ICredential } from "app/api/interfaces/credential";

export default function EditIdentity(props: {
  action: (data: any) => any;
  identity: IIdentity,
  credentials: ICredential[]
}) {
  const {identity, credentials} = props;

  const [displayName, setDisplayName] = useState(identity.displayName);
  const [bio, setBio] = useState(identity.bio);
  const [visibility, setVisibility] = useState(identity.visibility);
  const [active, setActive] = useState(identity.active);
  const [privacy, setPrivacy] = useState(identity.privacy);
  const [error, setError] = useState('');

  const handleSubmit = async (e: any) => {
    try {
      await props.action({displayName, bio, visibility, active, privacy});
    } catch (error) {
      setError('Failed to update identity.');
    }
  };

  const handleCredentialLink = async (e: any) => {
    try {
      await props.action({});
    } catch (error) {
      setError('Failed to update identity.');
    }
  }

  if (!identity) {
    return <div>Loading...</div>;
  }

  return (
    <Tabs defaultValue="account" className="max-w-screen-lg">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="credentials">Credentials</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card className="w-full">
          <CardHeader className="flex flex-row items-start">
            <div className="space-y-1.5">
              <CardTitle>Update your Identity</CardTitle>
              <CardDescription>You are not allowed to update your identity handler as it tracks your identity across the
                system, but you can clone this identity and create a new one.
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="border-t pt-4">
            <h1 className="text-lg font-semibold">Identity Handler</h1>
            <p className="text-sm text-gray-500 dark:text-black-400">This is a unique identifier for your identity and
              cannot be changed.</p>
            <div className="flex items-center gap-4">
              <Label htmlFor="handler">Handler</Label>
              <Input id="handler" disabled value={identity.handlerName}/>
            </div>
            <h1 className="text-lg font-semibold mt-6">Identity Details</h1>
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="display-name">Display Name</Label>
                <Input id="display-name" placeholder="Enter your display name"
                       value={displayName}
                       onChange={(e) => setDisplayName(e.target.value)}/>
                <p className="text-xs text-gray-500 dark:text-gray-400">This name will be displayed on your
                  profile.</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea className="min-h-[100px]" id="bio" placeholder="Enter a short bio"
                          value={bio}
                          onChange={(e) => setBio(e.target.value)}/>
                <p className="text-xs text-gray-500 dark:text-gray-400">Share a little bit about yourself.</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Visibility</span>
                  <Switch className="ml-auto" id="visibility"
                          checked={visibility}
                          onCheckedChange={(e) => setVisibility(e)}/>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Public profiles can be found through search or
                  direct link and exposes any information that&apos;s not private</p>
                <div className="flex items-center justify-between">
                  <span>Status</span>
                  <Switch className="ml-auto" id="status" checked={active} onCheckedChange={(e) => setActive(e)}/>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Active profiles can be used to receive visits
                  or communications. Disabled profiles are not accessible at all.</p>
                <div className="flex items-center justify-between">
                  <span>Privacy</span>
                  <Switch className="ml-auto" id="privacy"
                          checked={privacy}
                          onCheckedChange={(e) => setPrivacy(e)}/>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Private profiles include sensitive information
                  that is only accessible when certain conditions are met.</p>
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Link href="/identities" className="text-blue-500">
              <Button variant="ghost">Cancel</Button>
            </Link>
            <Button className="ml-auto" onClick={handleSubmit}>Update Identity</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="credentials">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[300px]">Credential Name</TableHead>
              <TableHead>Kind</TableHead>
              <TableHead>Provider</TableHead>
              <TableHead>Verified</TableHead>
              <TableHead className="w-[150px] text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {credentials.map((credential: ICredential) => (
              <TableRow className="select-none" key={credential.provider}>
                <TableCell className="flex items-center gap-4">
                  <LogInIcon className="h-4 w-4"/>
                  <span className="font-medium">{credential.handler}</span>
                </TableCell>
                <TableCell>
                  <span className="font-medium">{credential.handler}</span>
                </TableCell>
                <TableCell className="content-center">
                  <MailIcon className="h-4 w-4"/>
                  <span className="font-medium">{credential.kind.toUpperCase()}</span>
                </TableCell>
                <TableCell className="content-center">
                  {credential.verified ? (
                    <Badge color="success"
                           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      <CheckIcon className="h-4 w-4"/>
                    </Badge>
                  ) : (
                    <VerifyEmail action={() => null} id={credential.provider}/>
                  )}
                </TableCell>
                <TableCell className="flex justify-end gap-2">
                  <LinkEmailDialog key={credential.provider} credential={credential}/>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TabsContent>
    </Tabs>
  )
}
