'use client';

import React, { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { IIdentity } from "app/api/interfaces/identity";

export default function EditIdentity(props: {
  id: IIdentity,
  updateAction: (data: any, refresh: boolean) => any;
  identity: IIdentity[],
}) {
  const {identity, id} = props;

  const [displayName, setDisplayName] = useState('');
  const [bio, setBio] = useState('');
  const [visibility, setVisibility] = useState(false);
  const [active, setActive] = useState(false);
  const [privacy, setPrivacy] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (identity && id) {
      setDisplayName(id.displayName);
      setBio(id.bio);
      setVisibility(id.visibility);
      setActive(id.active);
      setPrivacy(id.privacy);
    }
  }, [id, identity])

  if (!id) {
    return (
      <Card className="w-full">
        <CardHeader className="flex flex-row items-start">
          <div className="space-y-1.5">
            <CardTitle>Identity Not Found</CardTitle>
            <CardDescription>The identity you are looking for does not exist or has been deleted.</CardDescription>
          </div>
        </CardHeader>
        <CardFooter>
          <Link href="/identities" className="text-blue-500">
            <Button variant="ghost">Back to Identities</Button>
          </Link>
        </CardFooter>
      </Card>
    )
  }

  const handleCoreUpdate = async () => {
    try {
      await props.updateAction({content: 'core', displayName, bio, visibility, active, privacy}, true);
    } catch (error) {
      setError('Failed to update identity.');
    }
  };

  return (
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
          <Input id="handler" disabled value={id.handlerName}/>
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
        <Button className="ml-auto" onClick={handleCoreUpdate}>Update Identity</Button>
      </CardFooter>
    </Card>
  )
}
