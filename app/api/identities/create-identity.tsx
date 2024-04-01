'use server';

import { config } from "@/lib/logto-config";
import 'server-only';
import { cookies } from "next/headers";

export interface IIdentity {
  id: string;
  name: string;
  status: string;
  flow: string;
}

export async function createIdentity(data: any) {
  const response = await fetch(`${config.baseUrl}/api/identities`, {
    method: 'POST',
    headers: {
      cookie: cookies().toString(),
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    if (response.status === 403) {
      console.log(await response.json())
      return 'Access denied to method, requires write:identity scope.';
    }
    console.log(response.status)
    throw new Error('Something went wrong!');
  }

  // eslint-disable-next-line no-restricted-syntax
  const body = (await response.json()) as { data: IIdentity[] };

  return body.data;
}
