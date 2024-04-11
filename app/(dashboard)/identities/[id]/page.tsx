'use server';

import { getIdentity } from "app/api/identities/get-identity";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { updateIdentity } from "app/api/identities/update-identity";
import EditCreateIdentity from "app/(dashboard)/identities/[id]/edit-identity";
import { getCredentials } from "app/api/credentials/get-credentials";
import React from "react";
import { IIdentity } from "app/api/interfaces/identity";

export default async function Identity({params}: { params: { id: string } }) {
  const identity = await getIdentity(params.id);
  const credentials = await getCredentials();

  if (typeof credentials === 'string') {
    return <div>{credentials}</div>;
  }

  const handleIdentityUpdate = async (data: IIdentity) => {
    'use server';
    await updateIdentity(data.handlerName, data);
    revalidatePath('/identities');
    redirect('/identities');
  }
  
  return (
    <div className="flex w-full min-h-screen items-start py-4 gap-4 flex-col">
      <div className="container mx-auto px-4">
        <div className="grid gap-4">
          {identity &&
            <EditCreateIdentity action={handleIdentityUpdate} identity={identity} credentials={credentials}/>}
        </div>
      </div>
    </div>
  )
}

