'use server';

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { getIdentity } from "app/api/identities/get-identity";

export default async function Identity({params}: { params: { id: string } }) {
  const identity = await getIdentity(params.id);

  return (
    <div key="1" className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <header className="relative h-[300px] overflow-hidden">
        <img
          alt="Background"
          className="absolute inset-0 object-cover w-full h-full"
          height="300"
          src="/placeholder.svg"
          style={{
            aspectRatio: "1200/300",
            objectFit: "cover",
          }}
          width="1200"
        />
        <div className="relative h-full flex items-end justify-between px-4 py-6 md:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <div className="grid gap-1">
              <h1 className="text-2xl font-bold">{identity.displayName}</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">@{identity.handler}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">Add Friend</Button>
            <Button>Contact</Button>
          </div>
        </div>
      </header>
      <main className="flex-1 py-6 px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-3">
          <div className="space-y-6 md:col-span-1">
            <div className="space-y-2">
              <h2 className="text-xl font-bold">Bio</h2>
              <p className="text-gray-500 dark:text-gray-400">
                {identity.bio}
              </p>
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-bold">Badges</h2>
              <div className="flex items-center gap-2">
                <Badge>Verified</Badge>
                <Badge>Reputation: 95%</Badge>
              </div>
            </div>
          </div>
          <div className="space-y-6 md:col-span-2">
            <h2 className="text-xl font-bold">Timeline</h2>
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <h3 className="text-lg font-semibold">First Post</h3>
                <p className="text-gray-500 dark:text-gray-400">This is the content of the first post.</p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="text-lg font-semibold">Second Post</h3>
                <p className="text-gray-500 dark:text-gray-400">This is the content of the second post.</p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="text-lg font-semibold">Third Post</h3>
                <p className="text-gray-500 dark:text-gray-400">This is the content of the third post.</p>
              </div>
            </div>
          </div>
          <div className="space-y-6 md:col-span-1">
            <h2 className="text-xl font-bold">Useful Links</h2>
            <div className="border rounded-lg p-4">
              <ul className="space-y-2">
                <li>
                  <Link href="#">Link 1</Link>
                </li>
                <li>
                  <Link href="#">Link 2</Link>
                </li>
                <li>
                  <Link href="#">Link 3</Link>
                </li>
                <li>
                  <Link href="#">Link 4</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

