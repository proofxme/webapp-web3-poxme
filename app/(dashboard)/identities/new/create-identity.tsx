'use client';

import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";

export default function CreateIdentity(props: {
  action: (data: any) => any;
}) {
  const [handler, setHander] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [bio, setBio] = useState('');
  const [visibility, setVisibility] = useState(false);
  const [active, setActive] = useState(false);
  const [privacy, setPrivacy] = useState(false);
  const [error, setError] = useState('');

  const validateHandler = (email: string) => {
    // validate that the handler can be used as email address name, before the @
    const validHandlerName = /^[a-zA-Z0-9._%+-]+$/;
    return validHandlerName.test(email);
  };

  const handleSubmit = async (e: any) => {
    if (!validateHandler(handler)) {
      setError('Please enter a valid email address.');
      return;
    }

    try {
      await props.action({displayName, handler, bio, visibility, active, privacy});
    } catch (error) {
      console.log(error)
      setError('Failed to add email. Please try again.');
    }
  };

  return (
    <Card className="w-full max-w-screen-lg">
      <CardHeader className="flex flex-row items-start">
        <div className="space-y-1.5">
          <CardTitle>Create a New Identity</CardTitle>
          <CardDescription>An identity represents you on the internet and allows you to aggregate your credentials
            to safely share who
            you are.</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="border-t pt-4">
        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="handler">Handler</Label>
            <Input id="handler" placeholder="Enter a unique handler" onChange={(e) => setHander(e.target.value)}/>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              This will be your unique identifier. It should be email-friendly.
            </p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="display-name">Display Name</Label>
            <Input id="display-name" placeholder="Enter your display name"
                   onChange={(e) => setDisplayName(e.target.value)}/>
            <p className="text-xs text-gray-500 dark:text-gray-400">This name will be displayed on your
              profile.</p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea className="min-h-[100px]" id="bio" placeholder="Enter a short bio"
                      onChange={(e) => setBio(e.target.value)}/>
            <p className="text-xs text-gray-500 dark:text-gray-400">Share a little bit about yourself.</p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span>Visibility</span>
              <Switch className="ml-auto" id="visibility"
                      onCheckedChange={(e) => setVisibility(e)}/>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Public profiles can be found through search or
              direct link and exposes any information that&apos;s not private</p>
            <div className="flex items-center justify-between">
              <span>Status</span>
              <Switch className="ml-auto" id="status" onCheckedChange={(e) => setActive(e)}/>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Active profiles can be used to receive visits
              or communications. Disabled profiles are not accessible at all.</p>
            <div className="flex items-center justify-between">
              <span>Privacy</span>
              <Switch className="ml-auto" id="privacy" onCheckedChange={(e) => setPrivacy(e)}/>
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
        <Button className="ml-auto" onClick={handleSubmit}>Create Identity</Button>
      </CardFooter>
    </Card>
  )
}
