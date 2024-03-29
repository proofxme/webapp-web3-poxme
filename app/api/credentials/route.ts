import { type NextRequest } from 'next/server';
import { logtoClient } from "@/lib/logto-edge";

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  const {isAuthenticated, scopes, accessToken} = await logtoClient.getLogtoContext(request, {
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

  const response = await fetch('https://api.pox.me/credentials', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  }).then((res) => res.json());

  return new Response(
    JSON.stringify({
      data: response,
    }), {status: 200}
  );
}

export async function POST(request: NextRequest) {
  const {isAuthenticated, scopes, accessToken} = await logtoClient.getLogtoContext(request, {
    getAccessToken: true,
    resource: 'https://api.pox.me'
  });

  if (!isAuthenticated) {
    return new Response(JSON.stringify({message: 'Unauthorized api'}), {status: 401});
  }

  if (!scopes?.includes('write:credential')) {
    return new Response(JSON.stringify({message: 'Access denied to route, requires write:credential scope.'}), {
      status: 403,
    });
  }

  const json = await request.json();

  const response = await fetch('https://api.pox.me/credentials', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    method: 'POST',
    body: JSON.stringify(json),
  }).then((res) => res.json());

  return new Response(
    JSON.stringify({
      data: response,
    }), {status: 200}
  );
}

export async function DELETE(request: NextRequest) {
  const {isAuthenticated, scopes, accessToken} = await logtoClient.getLogtoContext(request, {
    getAccessToken: true,
    resource: 'https://api.pox.me'
  });

  if (!isAuthenticated) {
    return new Response(JSON.stringify({message: 'Unauthorized api'}), {status: 401});
  }

  if (!scopes?.includes('write:credential')) {
    return new Response(JSON.stringify({message: 'Access denied to route, requires write:credential scope.'}), {
      status: 403,
    });
  }

  const json = await request.json();

  const {provider} = json;

  const response = await fetch(`https://api.pox.me/credentials/${provider}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    method: 'DELETE',
    body: JSON.stringify(json),
  }).then((res) => res.json());

  return new Response(
    JSON.stringify({
      data: response,
    }), {status: 200}
  );
}
