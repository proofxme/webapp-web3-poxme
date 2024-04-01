import { cookies } from 'next/headers';
import 'server-only';
import { config } from "@/lib/logto-config";

export interface IIdentity {
  id: string;
  name: string;
  status: string;
  flow: string;
}

export async function getIdentity() {
  const response = await fetch(`${config.baseUrl}/api/identities`, {
    cache: 'no-store',
    headers: {
      cookie: cookies().toString(),
    },
  });

  if (!response.ok) {
    if (response.status === 403) {
      console.log(await response.json())
      return 'Access denied to method, requires read:identity scope.';
    }
    console.log(response.status)
    throw new Error('Something went wrong!');
  }

  // eslint-disable-next-line no-restricted-syntax
  const body = (await response.json()) as { data: IIdentity[] };

  return body.data;
}
