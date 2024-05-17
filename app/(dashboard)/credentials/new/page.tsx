'use server';

import React from "react";
import AddEmailComponent from "app/(dashboard)/credentials/new/add-email-component";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createCredential } from "app/api/credentials/create-credentials";
import TwitterLoginComponent from "app/(dashboard)/credentials/new/add-twitter-account";

export default async function NewCredential() {
  const handleCredential = async (data: any) => {
    'use server';
    await createCredential(data);
    revalidatePath('/credentials');
    redirect('/credentials');
  }

  return (
    <div className="flex w-full min-h-screen items-start py-4 gap-4 flex-col">
      <div className="container mx-auto px-4">
        <div className="grid gap-4">
          <div className="flex items-center gap-4">
            <h1 className="font-semibold text-lg md:text-2xl">New Credential</h1>
          </div>
          <AddEmailComponent handleCredential={handleCredential}/>
          <TwitterLoginComponent/>
        </div>
      </div>
    </div>
  )
}
