'use server';

import { config } from "@/lib/logto-config";
import 'server-only';
import { cookies } from "next/headers";


export async function verifyEmailCredential(data: any): Promise<string> {
  const response = await fetch(`${config.baseUrl}/api/credentials?id=${data.id}`, {
    method: 'PUT',
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
      return 'Verification failed, please try again.';
    }
    throw new Error('Something went wrong!');
  }

  // eslint-disable-next-line no-restricted-syntax
  const body = await response.json();

  return body.data;
}
