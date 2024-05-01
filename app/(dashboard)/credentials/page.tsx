'use server';

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import React from "react";
import { getCredentials } from "app/api/credentials/get-credentials";
import Link from "next/link";
import DeleteButton from "@/components/ui/delete-button";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import VerifyEmail from "@/components/ui/verify-email";
import { verifyEmailCredential } from "app/api/credentials/verify-email-credential";
import { LogInIcon, MailIcon } from "app/(dashboard)/credentials/icons";
import { CheckIcon } from "@radix-ui/react-icons";
import { ICredential } from "app/api/interfaces/credential";

export default async function Credentials() {
  const credentials: string | ICredential[] = await getCredentials();

  const deleteCredential = async () => {
    'use server';
    revalidatePath('/credentials');
    redirect('/credentials');
  }

  const verifyCredential = async ({id, code}: { id: string; code: string }) => {
    'use server';
    try {
      const response = await verifyEmailCredential({id, code});
      if (response === 'Invalid verification code') {
        return 'Invalid verification code';
      } else {
        revalidatePath('/credentials');
        redirect('/credentials');
      }
    } catch (error) {
      console.error(error);
    }
  }

  if (typeof credentials === 'string') {
    return <div>{credentials}</div>;
  }

  return (
    <div className="flex w-full min-h-screen items-start py-4 gap-4 flex-col">
      <div className="container mx-auto px-4">
        <div className="grid gap-4">
          <div className="flex items-center gap-4">
            <h1 className="font-semibold text-lg md:text-2xl">Credentials</h1>
            <Link href="/credentials/new" className="ml-auto">
              <Button className="ml-auto" size="sm">
                Add credential
              </Button>
            </Link>
          </div>
          <div className="border rounded-lg shadow-sm">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[300px]">Credential Name</TableHead>
                  <TableHead>Kind</TableHead>
                  <TableHead>Provider</TableHead>
                  <TableHead>Verified</TableHead>
                  <TableHead className="w-[150px] text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {credentials.map((credential: ICredential) => (
                  <TableRow className="select-none" key={credential.provider}>
                    <TableCell className="flex items-center gap-4">
                      <LogInIcon className="h-4 w-4"/>
                      <span className="font-medium">{credential.handler}</span>
                    </TableCell>
                    <TableCell>
                      <span className="font-medium">{credential.handler}</span>
                    </TableCell>
                    <TableCell className="content-center">
                      <MailIcon className="h-4 w-4"/>
                      <span className="font-medium">{credential.kind.toUpperCase()}</span>
                    </TableCell>
                    <TableCell className="content-center">
                      {credential.verified ? (
                        <Badge color="success"
                               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                          <CheckIcon className="h-4 w-4"/>
                        </Badge>
                      ) : (
                        <VerifyEmail action={verifyCredential} id={credential.provider}/>
                      )}
                    </TableCell>
                    <TableCell className="flex justify-end gap-2">
                      <DeleteButton action={deleteCredential} entity={credential.provider}/>
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
