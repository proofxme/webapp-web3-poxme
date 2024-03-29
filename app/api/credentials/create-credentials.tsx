'use server';

import { config } from "@/lib/logto-config";
import 'server-only';
import { cookies } from "next/headers";

export interface ICredential {
  id: string;
  name: string;
  status: string;
  flow: string;
}


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
      console.log(await response.json())
      return 'Access denied to method, requires write:credential scope.';
    }
    if (response.status === 423) {
      console.log(response.status)
      console.log(await response.json())
      return 'Verification failed, please try again.'
    }
    console.log(response.status)
    throw new Error('Something went wrong!');
  }

  // eslint-disable-next-line no-restricted-syntax
  const body = (await response.json()) as { data: ICredential[] };

  return body.data;
}
