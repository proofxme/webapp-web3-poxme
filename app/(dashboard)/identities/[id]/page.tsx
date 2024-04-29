'use server';

import { getIdentity } from "app/api/identities/get-identity";
import { revalidatePath } from "next/cache";
import { updateIdentity } from "app/api/identities/update-identity";
import { getCredentials } from "app/api/credentials/get-credentials";
import React from "react";
import { IIdentity } from "app/api/interfaces/identity";
import { redirect } from "next/navigation";
import { createIdentity } from "app/api/identities/create-identity";
import { deleteIdentity } from "app/api/identities/delete-identity";
import EditIdentity from "app/(dashboard)/identities/[id]/edit-identity";
import EditCredentials from "app/(dashboard)/identities/[id]/edit-credentials";
import { ICredential } from "app/api/interfaces/credential";

export default async function Identity({params}: { params: { id: string } }) {
  const identity = await getIdentity(params.id);
  const credentials = await getCredentials();

  if (typeof credentials === 'string') {
    return <div>{credentials}</div>;
  }

  if (typeof identity === 'string') {
    return <div>{identity}</div>;
  }

  const id = identity.find((i: IIdentity) => i.content = 'core');

  if (!id) {
    return <div>Identity not found</div>;
  }

  const mappedCredentials: {
    credential: ICredential,
    identity: IIdentity | undefined
  }[] = credentials.map((credential) => {
    const ident = identity.find((i) => i.content === credential.provider);
    return {credential, identity: ident};
  });

  const handleIdentityUpdate = async (data: IIdentity, refresh: boolean = true) => {
    'use server';
    await updateIdentity(id!.handlerName, data);
    if (refresh) {
      revalidatePath(`/identities/${id.handlerName}`);
      redirect(`/identities/${id.handlerName}`);
    }
  }

  const deleteIdentityHandler = async (ident: IIdentity, refresh: boolean = true) => {
    'use server';
    try {
      await deleteIdentity(ident);
      if (refresh) {
        revalidatePath(`/identities/${id.handlerName}`);
        redirect(`/identities/${id.handlerName}`);
      }
    } catch (error) {
      console.error(error);
    }
  }

  const handleCredentialLink = async (data: IIdentity, refresh: boolean = true) => {
    'use server';
    await createIdentity(data);
    if (refresh) {
      revalidatePath(`/identities/${id.handlerName}`);
      redirect(`/identities/${id.handlerName}`);
    }
  }

  return (
    <div className="flex w-full min-h-screen items-start py-4 gap-4 flex-col">
      <div className="container mx-auto px-4">
        <div className="grid gap-4">
          <EditIdentity id={id} updateAction={handleIdentityUpdate} identity={identity}/>
        </div>
        <div className="grid gap-4">
          <EditCredentials updateAction={handleIdentityUpdate}
                           createAction={handleCredentialLink}
                           deleteAction={deleteIdentityHandler}
                           identity={identity}
                           id={id!}
                           mappedCredentials={mappedCredentials}/>
        </div>
      </div>
    </div>
  )
}

