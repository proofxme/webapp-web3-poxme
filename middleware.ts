import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { getLogtoContext } from "@/lib/logto";

export async function middleware(request: NextRequest) {
  const {isAuthenticated} = await getLogtoContext();

  if (!isAuthenticated) {
    return NextResponse.redirect(new URL('/', request.url))
  }
}

export const config = {
  matcher: ['/dashboard/:path*'],
}
