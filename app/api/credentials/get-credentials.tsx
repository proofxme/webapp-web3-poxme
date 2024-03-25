import { cookies } from 'next/headers';

// `server-only` guarantees any modules that import code in file
// will never run on the client. Even though this particular api
// doesn't currently use sensitive environment variables, it's
// good practise to add `server-only` preemptively.
// eslint-disable-next-line import/no-unassigned-import
import 'server-only';
import { config } from "@/lib/logto-config";


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
  const body = (await response.json()) as { data: string };

  return body.data;
}
