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

  if (!scopes?.includes('read:identity')) {
    return new Response(JSON.stringify({message: 'Access denied to route, requires read:identity scope.'}), {
      status: 403,
    });
  }

  const response = await fetch('https://api.pox.me/identities', {
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

  if (!scopes?.includes('write:identity')) {
    return new Response(JSON.stringify({message: 'Access denied to route, requires write:identity scope.'}), {
      status: 403,
    });
  }

  const json = await request.json();

  const response = await fetch('https://api.pox.me/identities', {
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

export async function PUT(request: NextRequest) {
  const {isAuthenticated, scopes, accessToken} = await logtoClient.getLogtoContext(request, {
    getAccessToken: true,
    resource: 'https://api.pox.me'
  });

  if (!isAuthenticated) {
    return new Response(JSON.stringify({message: 'Unauthorized api'}), {status: 401});
  }

  if (!scopes?.includes('write:identity')) {
    return new Response(JSON.stringify({message: 'Access denied to route, requires write:identity scope.'}), {
      status: 403,
    });
  }

  const json = await request.json();

  const response = await fetch('https://api.pox.me/identities', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    method: 'PUT',
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

  if (!scopes?.includes('write:identity')) {
    return new Response(JSON.stringify({message: 'Access denied to route, requires write:identity scope.'}), {
      status: 403,
    });
  }

  const provider = request.nextUrl.searchParams.get('id')

  const response = await fetch(`https://api.pox.me/identities/${provider}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    method: 'DELETE',
  }).then((res) => res.json());

  return new Response(
    JSON.stringify({
      data: response,
    }), {status: 200}
  );
}
