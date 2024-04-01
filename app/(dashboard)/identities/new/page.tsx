'use server';

import React from "react";
import { createIdentity } from "app/api/identities/create-identity";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import CreateIdentity from "app/(dashboard)/identities/new/create-identity";


export default async function NewIdentity() {
  const handleIdentity = async (data: any) => {
    'use server';
    await createIdentity(data);
    revalidatePath('/identities');
    redirect('/identities');
  }

  return (
    <div className="flex w-full min-h-screen items-start py-4 gap-4 flex-col">
      <div className="container mx-auto px-4">
        <div className="grid gap-4">
          <CreateIdentity action={handleIdentity}/>
        </div>
      </div>
    </div>
  )
}
