'use server';

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import DeleteButton from "@/components/ui/delete-button";
import React from "react";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getIdentities } from "app/api/identities/get-identities";
import { IIdentity } from "app/api/interfaces/identity";
import { deleteIdentity } from "app/api/identities/delete-identity";

export default async function Identities() {
  const identities: string | IIdentity[] = await getIdentities()

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
                      <Link href={`/identities/${identity.handler}`}>
                        {identity.handler}
                      </Link>
                    </TableCell>
                    <TableCell>
                      {identity.handler}@mail.pox.me
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
                      <Link href={`/id/${identity.handler}`} className="text-blue-500" title="View" target={"_blank"}
                            aria-label="View">
                        <EyeIcon className="w-6 h-6 pt-1 text-blue-500"/>
                      </Link>
                      <DeleteButton action={deleteIdentityHandler} id={identity.handler}/>
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

function EyeIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
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
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  )
}
