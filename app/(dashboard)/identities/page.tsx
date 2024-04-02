'use server';

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import DeleteButton from "@/components/ui/delete-button";
import React from "react";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getIdentity } from "app/api/identities/get-identities";
import { IIdentity } from "app/api/interfaces/identity";
import { deleteIdentity } from "app/api/identities/delete-identity";

export default async function Identities() {
  const identities: string | IIdentity[] = await getIdentity()

  const deleteIdentityHandler = async (id: string) => {
    'use server';
    try {
      await deleteIdentity(id);
    } catch (error) {
      console.error(error);
    }
    revalidatePath('/identities');
    redirect('/identities');
  }

  if (!identities) {
    return <div>Loading...</div>
  }

  if (typeof identities === 'string') {
    return <div>{identities}</div>
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
                  <TableRow className="select-none" key={identity.handler}>
                    <TableCell>
                      {identity.handler}
                    </TableCell>
                    <TableCell>
                      {identity.handler}@mail.pox.me
                    </TableCell>
                    <TableCell>
                      {identity.displayName}
                    </TableCell>
                    <TableCell>
                      <Badge variant="default" className="bg-green-400">{identity.visibility.toString()}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="default" className="bg-green-400">{identity.active.toString()}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="default" className="bg-red-400">{identity.privacy.toString()}</Badge>
                    </TableCell>
                    <TableCell className="flex justify-end gap-2">
                      <TableCell className="flex justify-end gap-2">
                        <DeleteButton action={deleteIdentityHandler} id={identity.handler}/>
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
