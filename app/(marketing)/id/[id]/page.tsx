'use server';

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { getIdentity } from "app/api/identities/get-identity";

export default async function Identity({params}: { params: { id: string } }) {
  const identity = await getIdentity(params.id);
  const notes = [
    {
      id: "1",
      content: "This is the content for the first note"
    },
    {
      id: "2",
      content: "This is the content for the second note"
    }]

  const badges = [
    {
      id: "1",
      content: "Verified"
    },
    {
      id: "2",
      content: "Reputation: 95%"
    }
  ]

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

  return (
    <div key="1" className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <header className="relative h-[300px] overflow-hidden">
        <img
          alt="Background"
          className="flex flex-col items-center justify-center w-full h-64 bg-gradient-to-r from-[#FFD700] to-[#FFA500]"
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
            <Button>Contact Preferences</Button>
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
              {badges.map((badge) => (
                <Badge key={badge.id}>{badge.content}</Badge>
              ))}
            </div>
          </div>
          <div className="space-y-6 md:col-span-2">
            <h2 className="text-xl font-bold">Timeline</h2>
            {notes.map((note) => (
              <div className="space-y-4" key={note.id}>
                <div className="border rounded-lg p-4">
                  <p className="text-gray-500 dark:text-gray-400">{note.content}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-6 md:col-span-1">
            <h2 className="text-xl font-bold">Useful Links</h2>
            <div className="border rounded-lg p-4">
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.id}>
                    <Link href={link.href}>
                      {link.content}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

