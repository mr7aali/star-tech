import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

// export async function POST(req: NextRequest) {
//   return NextResponse.json({ message: "Login successful" }, { status: 200 });
// }
export async function POST(req: Request) {
  const body = await req.json();

  const response = await fetch("http://localhost:5000/api/v1/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  // const { accessToken, refreshToken } = await response.json();

  const result = await response.json();
  console.log("Token Set succesfully.", result.data.accessToken);
  // // Store in secure cookies
  (await cookies()).set("accessToken", result.data.accessToken, {
    httpOnly: true,
    secure: false,
    sameSite: "strict",
    maxAge: 60 * 60 * 24 * 10, // 10 days
    path: "/",
  });
  return NextResponse.json(result, { status: 200 });
}
export async function GET(req: NextRequest) {
  return NextResponse.json({ message: "Method Not Allowed" }, { status: 405 });
}
