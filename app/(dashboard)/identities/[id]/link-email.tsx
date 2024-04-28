'use client'

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
import { ICredential } from "app/api/interfaces/credential"
import React, { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function LinkEmailDialog(props: {
  credential: ICredential
  action: (data: any) => any
}) {
  const [displayMode, setDisplayMode] = useState('display');
  const {credential, action} = props;
  const [value, setValue] = useState(credential.handler);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);

  const linkCredential = async (data: any) => {
    try {
      await action({value, handler: credential.handler, provider: credential.provider, active});
      setOpen(false);
    } catch (error) {
      console.error('Failed to update identity.');
    }
  }

  useEffect(() => {
    const [username, domain] = credential.handler.split('@');
    switch (displayMode) {
      case 'display':
        setValue(credential.handler);
        break;
      case 'hide':
        setValue('*****@*****.***');
        break;
      case 'conceal-domain':
        setValue(`${username}@*****.***`);
        break;
      case 'conceal-handler':
        setValue(`*****@${domain}`);
        break;
    }
  }, [credential, displayMode]);

  return (
    <Dialog key="1" open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" disabled={!credential.verified}>Link Email</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Link Verified Email</DialogTitle>
          <DialogDescription>How do you want to display this email?</DialogDescription>
        </DialogHeader>
        <div className="flex justify-center items-center py-4">
          <span
            className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
            {value}
          </span>
        </div>
        <div className="space-y-2">
          <Label htmlFor="display">Display Options</Label>
          <RadioGroup className="flex flex-row justify-between gap-4" defaultValue="display" id="display"
                      onValueChange={setDisplayMode}>
            <div className="flex flex-col items-center">
              <RadioGroupItem value="display">Display</RadioGroupItem>
              <Label className="text-sm font-normal" htmlFor="display">
                Display
              </Label>
            </div>
            <div className="flex flex-col items-center">
              <RadioGroupItem value="hide">Hide</RadioGroupItem>
              <Label className="text-sm font-normal" htmlFor="hide">
                Hide
              </Label>
            </div>
            <div className="flex flex-col items-center">
              <RadioGroupItem value="conceal-handler">Conceal Handler</RadioGroupItem>
              <Label className="text-sm font-normal" htmlFor="conceal">
                Conceal Handler
              </Label>
            </div>
            <div className="flex flex-col items-center">
              <RadioGroupItem value="conceal-domain">Conceal Domain</RadioGroupItem>
              <Label className="text-sm font-normal" htmlFor="conceal">
                Conceal Domain
              </Label>
            </div>
          </RadioGroup>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={linkCredential} disabled={!credential.verified}>Link Email</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

