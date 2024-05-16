'use server';

import { cookies } from 'next/headers';
import 'server-only';
import { config } from "@/lib/logto-config";
import { IPost } from "app/api/interfaces/posts";


export async function deletePost(post: IPost) {
  const response = await fetch(`${config.baseUrl}/api/posts?id=${post._id}`, {
    cache: 'no-store',
    headers: {
      cookie: cookies().toString(),
    },
    method: 'DELETE'
  });

  if (!response.ok) {
    if (response.status === 403) {
      return 'Access denied to method, requires read:post scope.';
    }
    throw new Error('Something went wrong!');
  }

  // eslint-disable-next-line no-restricted-syntax
  const body = (await response.json()) as { data: IPost[] };

  return body.data;
}
