import { NextResponse } from 'next/server';

export function middleware(request) {
  const path = request.nextUrl.pathname;

  const isPublicPath = [
    '/',
    '/login',
    '/signup',
  ].includes(path);

  const userToken = request.cookies.get('Token')?.value || '';

  console.log("Path:", path);
  console.log("User Token:", userToken);

  // Redirect logged-in users away from auth pages
  if (userToken && isPublicPath) {
    return NextResponse.redirect(new URL('/profile', request.nextUrl));
  }

  // Prevent unauthorized access to protected pages
  if (!isPublicPath && !userToken) {
    return NextResponse.redirect(new URL('/', request.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/',
    '/login',
    '/signup',
    '/profile'
  ],
};
