'use server';

import { cookies } from 'next/headers';
import 'server-only';
import { config } from "@/lib/logto-config";
import { ICredential } from "app/api/interfaces/credential";


export async function deleteCredentials(id: string) {
  //encode the url to prevent errors with the + symbol
  const encodedProvider = encodeURIComponent(id)
  const response = await fetch(`${config.baseUrl}/api/credentials?id=${encodedProvider}`, {
    cache: 'no-store',
    headers: {
      cookie: cookies().toString(),
    },
    method: 'DELETE'
  });

  if (!response.ok) {
    if (response.status === 403) {
      return 'Access denied to method, requires read:credential scope.';
    }
    throw new Error('Something went wrong!');
  }

  // eslint-disable-next-line no-restricted-syntax
  const body = (await response.json()) as { data: ICredential[] };

  return body.data;
}
