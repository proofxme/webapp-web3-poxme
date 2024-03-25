import { type NextRequest } from 'next/server';
import { logtoClient } from "@/lib/logto-edge";

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  const {isAuthenticated, scopes, accessToken, userInfo, claims} = await logtoClient.getLogtoContext(request, {
    getAccessToken: true,
    resource: 'https://api.pox.me'
  });

  if (!isAuthenticated) {
    return new Response(JSON.stringify({message: 'Unauthorized api'}), {status: 401});
  }

  if (!scopes?.includes('read:credential')) {
    return new Response(JSON.stringify({message: 'Access denied to route, requires read:credential scope.'}), {
      status: 403,
    });
  }

  const credentials = await fetch('https://api.pox.me/credentials', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  }).then((res) => res.json());

  return new Response(
    JSON.stringify({
      data: credentials,
    })
  );
}
