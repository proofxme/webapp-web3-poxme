import { cookies } from 'next/headers';
import 'server-only';
import { config } from "@/lib/logto-config";
import { IPost } from "app/api/interfaces/posts";

export async function getPosts() {
  const response = await fetch(`${config.baseUrl}/api/posts`, {
    cache: 'no-store',
    headers: {
      cookie: cookies().toString(),
    },
  });

  if (!response.ok) {
    if (response.status === 403) {
      return 'Access denied to method, requires read:posts scope.';
    }
    throw new Error('Something went wrong!');
  }

  // eslint-disable-next-line no-restricted-syntax
  const body = (await response.json()) as { data: IPost[] };

  return body.data;
}
