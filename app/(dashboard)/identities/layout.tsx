"use server";

import Link from "next/link";
import React from "react";
import { getIdentities } from "app/api/identities/get-identities";
import LinkListElement from "app/(dashboard)/identities/link-list-element";
import { InboxIcon } from "app/(dashboard)/credentials/icons";
import { IIdentity } from "app/api/interfaces/identity";


export default async function IdentityLayout({children}: { children: React.ReactNode }) {
  let identities = await getIdentities();

  if (typeof identities === 'string') {
    return <div>{identities}</div>
  } else if (Array.isArray(identities)) {
    identities.forEach((identity: IIdentity, index, array) => {
      identity.credentials = array.filter((cred: IIdentity) => cred.handlerName === identity.handlerName && cred.content.includes('credential'))
    })
    //delete all identities with the content 'credential' permanently from the array
    identities = identities.filter((id) => id.content === 'core')
  }

  return (
    <div className="grid h-screen w-full lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex-1 overflow-auto py-2">
            <div className="grid items-start px-4 text-sm font-medium">
              <Link
                key={"all"}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-900 transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                href="/identities"
              >
                <InboxIcon className="h-4 w-4"/>
                All
              </Link>
              {typeof identities === 'string' ?
                <div>{identities}</div> :
                identities.filter((id) => id.content === 'core').map((identity: IIdentity) =>
                  <LinkListElement key={identity.handlerName}
                                   identity={identity}/>)}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        {children}
      </div>
    </div>
  );
}


