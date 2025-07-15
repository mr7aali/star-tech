// app/api/refresh/route.ts
import { cookies } from "next/headers";

export async function POST() {
  const refreshToken = (await cookies()).get("refreshToken")?.value;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/auth/refresh-token`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: refreshToken }),
    }
  );

  const { accessToken } = await res.json();

  (await cookies()).set("accessToken", accessToken, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    maxAge: 60 * 60 * 24 * 10,
    path: "/",
  });

  return new Response("Access token refreshed");
}
