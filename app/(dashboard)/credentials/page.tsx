'use server';

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import React from "react";
import { getCredentials, ICredential } from "app/api/credentials/get-credentials";
import Link from "next/link";
import DeleteButton from "@/components/ui/delete-button";
import { deleteCredentials } from "app/api/credentials/delete-credentials";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import VerifyEmail from "@/components/ui/verify-email";
import { verifyEmailCredential } from "app/api/credentials/verify-email-credential";

export default async function Credentials() {
  const credentials = await getCredentials();

  const deleteCredential = async (id: string) => {
    'use server';
    try {
      await deleteCredentials(id);
    } catch (error) {
      console.error(error);
    }
    revalidatePath('/credentials');
    redirect('/credentials');
  }

  const verifyCredential = async ({id, code}: { id: string; code: string }) => {
    'use server';
    try {
      const response = await verifyEmailCredential({id, code});
      if (response === 'Invalid verification code') {
        console.log("invalid")
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
                      <DeleteButton action={deleteCredential} id={credential.provider}/>
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

function CheckIcon(props: any) {
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
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  )
}

function MailIcon(props: any) {
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
      <rect width="20" height="16" x="2" y="4" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  )
}

function LinkIcon(props: any) {
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
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
    </svg>
  )
}


function LogInIcon(props: any) {
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
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
      <polyline points="10 17 15 12 10 7"/>
      <line x1="15" x2="3" y1="12" y2="12"/>
    </svg>
  )
}


function UnlinkIcon(props: any) {
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
      <path d="m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71"/>
      <path d="m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71"/>
      <line x1="8" x2="8" y1="2" y2="5"/>
      <line x1="2" x2="5" y1="8" y2="8"/>
      <line x1="16" x2="16" y1="19" y2="22"/>
      <line x1="19" x2="22" y1="16" y2="16"/>
    </svg>
  )
}
