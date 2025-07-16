import { NextResponse } from "next/server";

export async function middleware(request) {
  const accessToken = await request.cookies.get("accessToken")?.value;

  const protectedRoutes = [
    "/user-ac/:path*",
    "/dashboard/:path*",
    "/profile/:path*",
  ];

  const isProtectedRoute = protectedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route.replace("/:path*", ""))
  );

  if (!accessToken && isProtectedRoute) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/user-ac/:path*", "/dashboard/:path*", "/profile/:path*", "/"],
};
