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
import React, { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { MailIcon } from "app/(dashboard)/credentials/icons";

const EmailDisplay = ({emailAddress, displayMode}: { emailAddress: string, displayMode: string }) => {
  const getDisplayValue = () => {
    const [username, domain] = emailAddress.split('@');
    switch (displayMode) {
      case 'display':
        return emailAddress;
      case 'hide':
        return (
          <span>
            <MailIcon className="h-4 w-4"/>
          </span>
        );
      case 'conceal-domain':
        return (
          <span>
            <i className="fas fa-shield-alt"></i> {username}@****.***
          </span>
        );
      case 'conceal-handler':
        return (
          <span>
            <i className="fas fa-shield-alt"></i> *****@{domain}
          </span>
        );
      default:
        return emailAddress;
    }
  };

  return <span>{getDisplayValue()}</span>;
};

export default function LinkEmailDialog(props: {
  credential: ICredential
}) {
  const [displayMode, setDisplayMode] = useState('display');
  const {credential} = props;

  return (
    <Dialog key="1">
      <DialogTrigger asChild>
        <Button variant="outline">Link Email</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Link Verified Email</DialogTitle>
          <DialogDescription>Select an email from the dropdown list to link to your profile.</DialogDescription>
        </DialogHeader>
        <div className="flex justify-center items-center py-4">
          <span
            className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
            <EmailDisplay displayMode={displayMode} emailAddress={credential.handler}/>
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
          <Button type="submit">Link Email</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

