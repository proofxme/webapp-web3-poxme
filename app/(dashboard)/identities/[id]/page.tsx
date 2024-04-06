'use server';

import { getIdentity } from "app/api/identities/get-identity";
import EditIdentity from "app/(dashboard)/identities/[id]/edit-identity";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { updateIdentity } from "app/api/identities/update-identity";

export default async function Identity({params}: { params: { id: string } }) {
  const identity = await getIdentity(params.id);

  const handleIdentity = async (data: any) => {
    'use server';
    await updateIdentity(identity.handler, data);
    revalidatePath('/identities');
    redirect('/identities');
  }

  return (
    <div className="flex w-full min-h-screen items-start py-4 gap-4 flex-col">
      <div className="container mx-auto px-4">
        <div className="grid gap-4">
          <EditIdentity identity={identity} action={handleIdentity}/>
        </div>
      </div>
    </div>
  )
}

