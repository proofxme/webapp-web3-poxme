'use server';

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import React from "react";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getIdentities } from "app/api/identities/get-identities";
import { IIdentity, IIdentityCore } from "app/api/interfaces/identity";
import EyeIcon from "@/components/icons/eye";
import DeleteIdentityButton from "@/components/ui/delete-identity-button";

export default async function Identities() {
  let identities: string | IIdentity[] = await getIdentities()
  const deletingIdentity = false;

  const deleteIdentityHandler = async () => {
    'use server';
    revalidatePath('/identities');
    redirect('/identities');
  }

  if (!identities) {
    return <div>Loading...</div>
  }

  if (typeof identities === 'string') {
    return <div>{identities}</div>
  }
  //delete all identities with the content 'credential' permanently from the array
  const coreIdentities = identities.filter((id) => id.content === 'core') as IIdentityCore[]

  return (
    <div className="flex w-full min-h-screen items-start py-4 gap-4 flex-col">
      <div className="container mx-auto px-4">
        <div className="grid gap-4">
          <div className="flex items-center gap-4">
            <h1 className="font-semibold text-lg md:text-2xl">Identities</h1>
            <Link href="/identities/new" className="ml-auto">
              <Button className="ml-auto" size="sm">
                Create identity
              </Button>
            </Link>
          </div>
          <div className="border rounded-lg shadow-sm max-w-full overflow-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Identity Name</TableHead>
                  <TableHead>E-Mail</TableHead>
                  <TableHead>Display Name</TableHead>
                  <TableHead>Visibility</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Privacy</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {coreIdentities.map((identity: IIdentityCore) => (
                  <TableRow className="select-none" key={identity.handlerName}>
                    <TableCell>
                      <Link href={`/identities/${identity.handlerName}`}>
                        {identity.handlerName}
                      </Link>
                    </TableCell>
                    <TableCell>
                      {identity.handlerName}@mail.pox.me
                    </TableCell>
                    <TableCell>
                      {identity.displayName}
                    </TableCell>
                    <TableCell>
                      {identity.visibility ? (
                        <Badge variant="default" className="bg-blue-400">Public</Badge>
                      ) : (
                        <Badge variant="default" className="bg-yellow-400">Private</Badge>
                      )}
                    </TableCell>
                    <TableCell>
                      {identity.active ? (
                        <Badge variant="default" className="bg-green-400">Active</Badge>
                      ) : (
                        <Badge variant="default" className="bg-red-400">Disabled</Badge>
                      )}
                    </TableCell>
                    <TableCell>
                      {identity.privacy ? (
                        <Badge variant="default" className="bg-green-400">Private</Badge>
                      ) : (
                        <Badge variant="default" className="bg-blue-400">Public</Badge>
                      )}
                    </TableCell>
                    <TableCell className="flex justify-end gap-2">
                      <Link href={`/${identity.handlerName}`} className="text-blue-500" title="View"
                            target={"_blank"}
                            aria-label="View">
                        <EyeIcon className="w-6 h-6 pt-1 text-blue-500"/>
                      </Link>
                      <DeleteIdentityButton action={deleteIdentityHandler} entity={identity}/>
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


