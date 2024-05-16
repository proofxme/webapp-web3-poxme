'use server';

import { config } from "@/lib/logto-config";
import 'server-only';
import { cookies } from "next/headers";
import { IPost } from "app/api/interfaces/posts";

export async function updatePost(id: string, data: any) {
  const response = await fetch(`${config.baseUrl}/api/posts?id=${id}`, {
    method: 'PUT',
    headers: {
      cookie: cookies().toString(),
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    if (response.status === 403) {
      return 'Access denied to method, requires write:posts scope.';
    }
    throw new Error('Something went wrong!');
  }


  // eslint-disable-next-line no-restricted-syntax
  const body = (await response.json()) as { data: IPost[] };

  return body.data;
}
