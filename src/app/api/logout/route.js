// app/api/logout/route.ts
import { cookies } from "next/headers";

export async function GET(req) {
  cookies().delete("accessToken");
  cookies().delete("refreshToken");

  return new Response({ success: true, message: "Logged out successfully" });
}
