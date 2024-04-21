import { NextRequest, NextResponse } from "next/server";
export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /_static (inside /public)
     * 4. all root files inside /public (e.g. /favicon.ico)
     */
    "/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)",
  ],
};
export default async function middleware(request: NextRequest){
    const url = request.nextUrl
    let hostnames = request.headers.get('host')
    const searchParams = request.nextUrl.searchParams.toString();
    const path = `${url.pathname}${
        searchParams.length > 0 ? `?${searchParams}` : ""
      }`;
    if(hostnames == 'admin.localhost:3000'){
    return NextResponse.rewrite(new URL(`/admin${path === "/"?"":path}`, request.url))
    }
    if(hostnames == 'tutor.localhost:3000'){
    return NextResponse.rewrite(new URL(`/tutor${path === "/"?"":path}`, request.url))
    }
    if(hostnames == 'localhost:3000'){
    return NextResponse.rewrite(new URL(`/student${path === "/"?"":path}`, request.url))
    }
    return NextResponse.rewrite(new URL(`/${hostnames}${path}`, request.url));

}