import { NextResponse } from 'next/server';

export function middleware(request) {
  //   console.log('hello from middleware');
  return NextResponse.redirect(new URL('/', request.url));
}

export const config = {
  // matcher: "/about",
  //   matcher: ["/about/:path*"] // Match any request with a path that starts with /about
  matcher: ['/about/:path*'], // Match any request with a path that starts with /about and /tasks
};
