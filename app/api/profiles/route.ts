import { type NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get('id');
  const route = id ? `https://api.pox.me/profiles/${id}` : 'https://api.pox.me/profiles';

  const response = await fetch(route, {
    cache: 'no-store',
  }).then((res) => res.json());

  return new Response(
    JSON.stringify({
      data: response,
    }), {status: 200}
  );
}
