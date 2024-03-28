'use client';

import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import Link from "next/link";

export default function NewCredential() {
  return (
    <div className="flex w-full min-h-screen items-start py-4 gap-4 flex-col">
      <div className="container mx-auto px-4">
        <div className="grid gap-4">
          <div className="flex items-center gap-4">
            <h1 className="font-semibold text-lg md:text-2xl">New Credential</h1>
          </div>
          <Card className="w-full max-w-screen-lg">
            <CardHeader className="flex flex-row items-start">
              <div className="space-y-1.5">
                <CardTitle>Email Management</CardTitle>
                <CardDescription>Configure your email actions with detailed options.</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="border-t pt-4">
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Receiving Email Address</Label>
                  <Input id="email" placeholder="example@example.com" required type="email"/>
                </div>
                <div className="space-y-2">
                  <Label>Action</Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select an action"/>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="redirect">Redirect</SelectItem>
                      <SelectItem value="archive">Archive</SelectItem>
                      <SelectItem value="automatedResponse">Automated Response</SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="mt-2 space-y-2">
                    <div className="flex items-center">
                      <RadioGroup>
                        <RadioGroupItem className="sr-only" id="action-redirect" value="redirect"/>
                        <Label className="flex gap-2 cursor-pointer" htmlFor="action-redirect">
                          <div
                            className="flex items-center justify-center w-5 h-5 p-1 rounded-full bg-blue-500 text-white">
                            <LinkIcon className="w-3 h-3"/>
                          </div>
                          Redirect
                        </Label>
                        <p className="ml-4 text-sm text-gray-500">Redirects incoming emails to a specified
                          address.</p>
                      </RadioGroup>
                    </div>
                    <div className="flex items-center">
                      <RadioGroup>
                        <RadioGroupItem disabled className="sr-only" id="action-archive" value="archive"/>
                        <Label className="flex gap-2 cursor-pointer" htmlFor="action-archive">
                          <div
                            className="flex items-center justify-center w-5 h-5 p-1 rounded-full bg-green-500 text-white">
                            <ArchiveIcon className="w-3 h-3"/>
                          </div>
                          Archive
                        </Label>
                        <p className="ml-4 text-sm text-gray-500">Saves incoming emails in an archive for later
                          review.</p>
                      </RadioGroup>
                    </div>
                    <div className="flex items-center">
                      <RadioGroup>
                        <RadioGroupItem
                          disabled
                          className="sr-only"
                          id="action-automatedResponse"
                          value="automatedResponse"
                        />
                        <Label className="flex gap-2 cursor-pointer" htmlFor="action-automatedResponse">
                          <div
                            className="flex items-center justify-center w-5 h-5 p-1 rounded-full bg-purple-500 text-white">
                            <ReplyIcon className="w-3 h-3"/>
                          </div>
                          Automated Response
                        </Label>
                        <p className="ml-4 text-sm text-gray-500">Sends an automated response to incoming emails.</p>
                      </RadioGroup>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="redirectEmail">Redirect Email Address</Label>
                  <Input id="redirectEmail" placeholder="redirect@example.com" required type="email"/>
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Link href="/credentials" className="text-blue-500">
                <Button variant="ghost">Cancel</Button>
              </Link>
              <Button className="ml-auto">Save</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
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


function ReplyIcon(props: any) {
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
      <polyline points="9 17 4 12 9 7"/>
      <path d="M20 18v-2a4 4 0 0 0-4-4H4"/>
    </svg>
  )
}


function ArchiveIcon(props: any) {
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
      <rect width="20" height="5" x="2" y="3" rx="1"/>
      <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/>
      <path d="M10 12h4"/>
    </svg>
  )
}
