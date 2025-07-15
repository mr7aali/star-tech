import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();

  const response = await fetch(`${process.env.BASE_URL}/api/v1/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const result = await response.json();
  console.log("Token Set succesfully.", result.data.accessToken);
  //  Store in secure cookies
  (await cookies()).set("accessToken", result.data.accessToken, {
    httpOnly: true,
    secure: false,
    sameSite: "strict",
    maxAge: 60 * 60 * 24 * 10, // 10 days
    path: "/",
  });
  return NextResponse.json(result, { status: 200 });
}
export async function GET(req) {
  return NextResponse.json({ message: "Method Not Allowed" }, { status: 405 });
}
