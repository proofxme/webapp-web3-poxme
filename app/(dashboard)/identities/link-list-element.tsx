'use client';

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { AvatarIcon } from "@radix-ui/react-icons";

export default function LinkListElement(props: { identity: any; }) {
  const {identity} = props;
  const currentPath = usePathname();

  return <Link
    key={identity.handlerName}
    href={`/identities/${identity.handlerName}`}
    className={`flex items-center gap-3 rounded-lg ${currentPath === `/identities/${identity.handlerName}` ? 'bg-gray-400' : ''} px-3 py-2 text-gray-900 transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50`}
  >
    <AvatarIcon className="h-4 w-4"/>
    {identity.handlerName}
  </Link>;
}
