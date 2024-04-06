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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function LinkEmailDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Link Email</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Link Verified Email</DialogTitle>
          <DialogDescription>Select an email from the dropdown list to link to your profile.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Select id="email">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select an email"/>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="email1">email1@example.com</SelectItem>
                <SelectItem value="email2">email2@example.com</SelectItem>
                <SelectItem value="email3">email3@example.com</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="display">Display Options</Label>
            <Select id="display">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select an option"/>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="display">Display</SelectItem>
                <SelectItem value="hide">Hide</SelectItem>
                <SelectItem value="conceal">Conceal</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Link Email</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

