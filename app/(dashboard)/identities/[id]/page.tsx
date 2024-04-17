'use server';

import { getIdentity } from "app/api/identities/get-identity";
import { revalidatePath } from "next/cache";
import { updateIdentity } from "app/api/identities/update-identity";
import EditCreateIdentity from "app/(dashboard)/identities/[id]/edit-identity";
import { getCredentials } from "app/api/credentials/get-credentials";
import React from "react";
import { IIdentity } from "app/api/interfaces/identity";
import { redirect } from "next/navigation";
import { createIdentity } from "app/api/identities/create-identity";
import { deleteIdentity } from "app/api/identities/delete-identity";

export default async function Identity({params}: { params: { id: string } }) {
  const identity = await getIdentity(params.id);
  const credentials = await getCredentials();

  if (typeof credentials === 'string') {
    return <div>{credentials}</div>;
  }

  if (typeof identity === 'string') {
    return <div>{identity}</div>;
  }

  const handleIdentityUpdate = async (data: IIdentity, refresh: boolean = true) => {
    'use server';
    const id = identity.find((i: IIdentity) => i.content = 'core');
    if (!id) {
      return;
    }
    await updateIdentity(id.handlerName, data);
    if (refresh) {
      revalidatePath('/identities');
      redirect('/identities');
    }
  }

  const deleteIdentityHandler = async (id: string, content: string) => {
    'use server';
    try {
      console.log("delete params", id, content)
      await deleteIdentity(id, content);
    } catch (error) {
      console.error(error);
    }
  }

  const handleCredentialLink = async (data: IIdentity) => {
    'use server';
    await createIdentity(data);
  }

  return (
    <div className="flex w-full min-h-screen items-start py-4 gap-4 flex-col">
      <div className="container mx-auto px-4">
        <div className="grid gap-4">
          <EditCreateIdentity updateAction={handleIdentityUpdate}
                              createAction={handleCredentialLink}
                              deleteAction={deleteIdentityHandler}
                              identity={identity}
                              credentials={credentials}/>
        </div>
      </div>
    </div>
  )
}

