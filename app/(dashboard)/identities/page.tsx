'use server';

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import DeleteButton from "@/components/ui/delete-button";
import React from "react";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type IIdentity = {
  id: string;
  name: string;
  displayName: string;
  visibility: string;
  status: string;
  privacy: string;
}

export default async function Identities() {
  const identities: IIdentity[] = [{
    id: "1",
    name: "jhon_doe",
    displayName: "John Doe",
    visibility: "Public",
    status: "Active",
    privacy: "Public",
  }, {
    id: "2",
    name: "jane_doe",
    displayName: "Jane Doe",
    visibility: "Public",
    status: "Active",
    privacy: "Public",
  }];

  const deleteIdentity = async (id: string) => {
    'use server';
    try {
      //await deleteIdentity(id);
    } catch (error) {
      console.error(error);
    }
    revalidatePath('/identities');
    redirect('/identities');
  }

  return (
    <div key="1" className="flex w-full min-h-screen items-start py-4 gap-4 flex-col">
      <div className="container mx-auto px-4">
        <div className="grid gap-4">
          <div className="flex items-center gap-4">
            <h1 className="font-semibold text-lg md:text-2xl">Credentials</h1>
            <Link href="/identities/new" className="ml-auto">
              <Button className="ml-auto" size="sm">
                Create identity
              </Button>
            </Link>
          </div>
          <div className="border rounded-lg shadow-sm">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>handler</TableHead>
                  <TableHead>E-Mail</TableHead>
                  <TableHead>Display Name</TableHead>
                  <TableHead>Visibility</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Privacy</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {identities.map((identity: IIdentity) => (
                  <TableRow className="select-none" key={identity.name}>
                    <TableCell>
                      {identity.name}
                    </TableCell>
                    <TableCell>
                      {identity.name}@mail.pox.me
                    </TableCell>
                    <TableCell>
                      {identity.displayName}
                    </TableCell>
                    <TableCell>
                      <Badge variant="default" className="bg-green-400">{identity.visibility}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="default" className="bg-green-400">{identity.status}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="default" className="bg-red-400">{identity.privacy}</Badge>
                    </TableCell>
                    <TableCell className="flex justify-end gap-2">
                      <TableCell className="flex justify-end gap-2">
                        <DeleteButton action={deleteIdentity} id={identity.name}/>
                      </TableCell>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  )
}
