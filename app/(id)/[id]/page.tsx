'use server';

import { Badge } from "@/components/ui/badge"
import { IIdentity } from "app/api/interfaces/identity";
import { getProfile } from "app/api/profiles/get-profile";
import Header from "app/(id)/[id]/header";
import { MailIcon } from "app/(dashboard)/credentials/icons";

export default async function Identity({params}: { params: { id: string } }) {
  const identity = await getProfile(params.id);

  if (typeof identity === 'string') {
    return <div>{identity}</div>
  }

  const id = identity.find((i: IIdentity) => i.content = 'core');
  const emails = identity.filter((i: IIdentity) => i.content.includes('email~'));

  if (!id) {
    return (
      <div className="flex w-full min-h-screen items-start py-4 gap-4 flex-col">
        <div className="container mx-auto px-4">
          <div className="grid gap-4">
            <div className="border rounded-lg shadow-sm p-4">
              <h1 className="font-semibold text-lg md:text-2xl">Identity Not Found</h1>
              <p>The identity you are looking for does not exist or has been deleted.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const links = [
    {
      id: "1",
      content: "Link 1",
      href: "#"
    },
    {
      id: "2",
      content: "Link 2",
      href: "#"
    },
    {
      id: "3",
      content: "Link 3",
      href: "#"
    },
    {
      id: "4",
      content: "Link 4",
      href: "#"
    }
  ]

  console.log(emails)

  return (
    <div key="1" className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <Header identity={id}/>
      <main className="flex-1 py-6 md:px-2 lg:px-2">
        <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-3">
          <div className="space-y-6 md:col-span-1">
            <div className="space-y-2">
              <h2 className="text-xl font-bold">Bio</h2>
              <p className="text-gray-500 dark:text-gray-400">
                {id.bio}
              </p>
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-bold">Badges</h2>
              {emails.length > 0 && (
                <Badge key="email-verified">
                  <MailIcon/>{' '}<span className="py-2 ml-2">Email Verified</span>
                </Badge>
              )}
            </div>
          </div>
          <div className="space-y-6 md:col-span-2">
          </div>
          <div className="space-y-6 md:col-span-1">
          </div>
        </div>
      </main>
    </div>
  )
}

