'use client'

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { ICredential } from "app/api/interfaces/credential";
import React, { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { createIdentity } from "app/api/identities/create-identity";
import { IIdentity } from "app/api/interfaces/identity";

export default function LinkTwitterDialog(props: {
  action: () => void;
  identity: IIdentity;
  credential: ICredential
}) {
  const {identity, credential, action} = props;

  const [displayMode, setDisplayMode] = useState('display');
  const [value, setValue] = useState(credential.handler);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(true);

  const handleSubmit = async () => {
    try {
      await createIdentity({
        handlerName: identity.handlerName,
        content: credential.provider,
        credentialValue: credential.handler,
        active,
        displayValue: value,
      });
      setOpen(false);
      action()
    } catch (error) {
      console.error('Failed to update identity.');
    }
  }

  useEffect(() => {
    const [username, domain] = credential.handler.split('@');
    switch (displayMode) {
      case 'display':
        setValue(`@${credential.handler}`);
        break;
      case 'hide':
        setValue('@********');
        break;
    }
  }, [credential, displayMode]);

  return (
    <Dialog key="1" open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" disabled={!credential.verified}>Link Twitter</Button>
      </DialogTrigger>
      <form>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Link Verified Twitter</DialogTitle>
            <DialogDescription>How do you want to display this Twitter Account?</DialogDescription>
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
            </RadioGroup>
          </div>
          <DialogFooter>
            <Button type="submit" onClick={(e) => handleSubmit()} disabled={!credential.verified}>Link Twitter</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
