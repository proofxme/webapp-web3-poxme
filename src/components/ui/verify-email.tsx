'use client';

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { useState } from "react";

export default function VerifyEmail(props: { action: (data: any) => any, id: string }) {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  const verifyCredential = async (id: string) => {
    try {
      const response = await props.action({id, code})
      if (response === 'Invalid verification code') {
        setError('Invalid verification code.');
        setCode('')
      }
    } catch (error) {
      console.error("Error", error);
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Verify Email</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Email Validation</DialogTitle>
          <DialogDescription>Please enter your email and the 8-digit validation code.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {error && <p className="text-red-500">{error}</p>}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="code">
              Validation Code
            </Label>
            <Input
              className="col-span-3"
              id="code"
              value={code}
              maxLength={8}
              pattern="^[0-9]{6}$"
              placeholder="12345678"
              type="text"
              onChange={(e) => setCode(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={() => verifyCredential(props.id)}>Verify</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
