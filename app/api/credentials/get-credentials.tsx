import { cookies } from 'next/headers';
import 'server-only';
import { config } from "@/lib/logto-config";
import { ICredential } from "app/api/interfaces/credential";

export async function getCredentials() {
  const response = await fetch(`${config.baseUrl}/api/credentials`, {
    cache: 'no-store',
    headers: {
      cookie: cookies().toString(),
    },
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
