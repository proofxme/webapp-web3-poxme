'use server';

import { config } from "@/lib/logto-config";
import 'server-only';
import { cookies } from "next/headers";
import { ICredential } from "app/api/interfaces/credential";


export async function createCredential(data: any) {
  const response = await fetch(`${config.baseUrl}/api/credentials`, {
    method: 'POST',
    headers: {
      cookie: cookies().toString(),
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    if (response.status === 403) {
      return 'Access denied to method, requires write:credential scope.';
    }
    if (response.status === 423) {
      return 'Verification failed, please try again.'
    }
    throw new Error('Something went wrong!');
  }

  // eslint-disable-next-line no-restricted-syntax
  const body = (await response.json()) as { data: ICredential[] };

  return body.data;
}
