'use server';

import React from "react";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { IIdentity } from "app/api/interfaces/identity";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { CheckIcon, LogInIcon, MailIcon } from "app/(dashboard)/credentials/icons";
import LinkEmailDialog from "app/(dashboard)/identities/[id]/link-email";
import DeleteButton from "@/components/ui/delete-button";
import ReceiveMessages from "app/(dashboard)/identities/[id]/receice-messages-button";
import { ICredential } from "app/api/interfaces/credential";

export default async function EditCredentials(props: {
  id: IIdentity;
  updateAction: (data: any, refresh: boolean) => any;
  createAction: (data: any, refresh: boolean) => any;
  deleteAction: (identity: IIdentity) => any;
  identity: IIdentity[],
  mappedCredentials: { credential: ICredential, identity: IIdentity | undefined }[];
}) {
  const {mappedCredentials, id} = props;

  if (!id) {
    return (
      <Card className="w-full">
        <CardHeader className="flex flex-row items-start">
          <div className="space-y-1.5">
            <CardTitle>Identity Not Found</CardTitle>
            <CardDescription>The identity you are looking for does not exist or has been deleted.</CardDescription>
          </div>
        </CardHeader>
        <CardFooter>
          <Link href="/identities" className="text-blue-500">
            <Button variant="ghost">Back to Identities</Button>
          </Link>
        </CardFooter>
      </Card>
    )
  }

  const handleCredentialLink = async (data: any) => {
    'use server';
    try {
      await props.createAction({...data, handlerName: id.handlerName, content: data.provider}, true);
    } catch (error) {
      //setError('Failed to update identity.');
    }
  }

  const handleUnlink = async (identity: IIdentity) => {
    'use server';
    try {
      await props.deleteAction(identity);
    } catch (error) {
      //setError('Failed to update identity.');
    }
  }

  const handleCredentialSwitch = async (identity: IIdentity, value: boolean) => {
    'use server';
    try {
      await props.updateAction({...identity, active: value}, true);
    } catch (error) {
      //setError('Failed to update identity.');
    }
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[300px]">Credential Name</TableHead>
          <TableHead>Kind</TableHead>
          <TableHead>Provider</TableHead>
          <TableHead>Verified</TableHead>
          <TableHead>Receive Messages</TableHead>
          <TableHead className="w-[150px] text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {mappedCredentials.map(({credential, identity}) => (
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
                <span>Please verify in the credentials</span>
              )}
            </TableCell>
            <TableCell className="content-center">
              {identity && credential.verified ? (
                <ReceiveMessages action={handleCredentialSwitch}
                                 entity={identity!}/>
              ) : (
                <span>{credential.verified ? 'Not Linked' : 'Not verified'}</span>
              )}
            </TableCell>
            <TableCell className="flex justify-end gap-2">
              {identity ? (
                <DeleteButton action={handleUnlink}
                              entity={identity}/>
              ) : (
                <LinkEmailDialog key={credential.provider} credential={credential} action={handleCredentialLink}/>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
