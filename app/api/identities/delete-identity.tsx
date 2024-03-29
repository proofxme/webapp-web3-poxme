'use server';

import { cookies } from 'next/headers';
import 'server-only';
import { config } from "@/lib/logto-config";

export interface ICredential {
  provider: string;
  handler: string;
  kind: string;
}


export async function deleteIdentity(id: string) {
  const response = await fetch(`${config.baseUrl}/api/credentials?id=${id}`, {
    cache: 'no-store',
    headers: {
      cookie: cookies().toString(),
    },
    method: 'DELETE'
  });

  if (!response.ok) {
    if (response.status === 403) {
      console.log(await response.json())
      return 'Access denied to method, requires read:credential scope.';
    }
    console.log(response.status)
    throw new Error('Something went wrong!');
  }

  // eslint-disable-next-line no-restricted-syntax
  const body = (await response.json()) as { data: ICredential[] };

  return body.data;
}
