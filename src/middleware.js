
// // middleware.js
// import { NextResponse } from "next/server";

// export default function middleware(req) {
//   const { pathname } = req.nextUrl;

//   if (pathname === '/index.html') {
//     return NextResponse.redirect(new URL('/', req.url));
//   }

//   // Rewrite / to serve index.html
//   if (pathname === '/') {
//     return NextResponse.rewrite(new URL('/index.html', req.url));
//   }
// }
import { NextResponse } from 'next/server';

export function middleware(request) {
  // Avoid redirecting if already on the root page
  if (request.nextUrl.pathname === '/') {
    return NextResponse.next();
  }

  // Redirect all other requests to the root page (/)
  return NextResponse.redirect(new URL('/', request.url));
}

export const config = {
  matcher: [
    '/((?!_next|api|favicon.ico|static|public|images|.*\\..*).*)', // Exclude Next.js internals, API, assets, and static files
  ],
};