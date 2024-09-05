import { type NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { updateSession } from '@/utils/supabase/middleware';

export async function middleware(request: NextRequest) {
  // let cookie = request.cookies.get('nextjs');
  // console.log(cookie);
  // request.cookies.has('nextjs'); // => true
  // request.cookies.delete('nextjs');
  // request.cookies.has('nextjs'); // => false
  // Setting cookies on the response using the `ResponseCookies` API
  // const response = NextResponse.next();
  // response.cookies.set('vercel', 'fast');
  // response.cookies.set({
  //   name: 'vercel',
  //   value: 'fast',
  //   path: '/',
  // });
  // cookie = response.cookies.get('vercel');
  // console.log(cookie); // => { name: 'vercel', value: 'fast', Path: '/' }
  // The outgoing response will have a `Set-Cookie:vercel=fast;path=/` header.
  // return response;
  return await updateSession(request);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
