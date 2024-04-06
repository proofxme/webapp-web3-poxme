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

export default function EditCreateIdentity(props: {
  action: (data: any) => any;
  identity: IIdentity
}) {
  const {identity} = props;

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
      console.log(error)
      setError('Failed to update identity.');
    }
  };

  return (
    <Card className="w-full max-w-screen-lg">
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
          <Input id="handler" disabled value={identity.handler}/>
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
  )
}
