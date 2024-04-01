import { cookies } from 'next/headers';
import 'server-only';
import { config } from "@/lib/logto-config";
import { IIdentity } from "app/api/interfaces/identity";

export async function getIdentity() {
  const response = await fetch(`${config.baseUrl}/api/identities`, {
    cache: 'no-store',
    headers: {
      cookie: cookies().toString(),
    },
  });

  if (!response.ok) {
    if (response.status === 403) {
      return 'Access denied to method, requires read:identity scope.';
    }
    throw new Error('Something went wrong!');
  }

  // eslint-disable-next-line no-restricted-syntax
  const body = (await response.json()) as { data: IIdentity[] };

  return body.data;
}
