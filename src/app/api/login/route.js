import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/auth/login`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );

    const result = await response.json();

    //  Store in secure cookies
    (await cookies()).set("accessToken", result.data.accessToken, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 10, // 10 days
      path: "/",
    });
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Login failed",
        error: error.message,
        path: process.env.NEXT_PUBLIC_BASE_URL,
        fullError: error,
      },
      { status: 500 }
    );
  }
}
export async function GET(req) {
  return NextResponse.json({ message: "Method Not Allowed" }, { status: 405 });
}
