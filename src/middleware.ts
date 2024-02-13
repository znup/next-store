import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export const config = {
  matcher: ['/login/:path*', '/signup/:path*'],
};

export function middleware(request: NextRequest) {
  const cookiesStore = cookies();
  const accessToken = cookiesStore.get('accessToken')?.value;
  if (accessToken) {
    return NextResponse.redirect(new URL('/store', request.url));
  }
}