"use server";
// lib/auth.ts
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function verifyUser() {
  const token = await cookies()?.get("accessToken")?.value;

  if (!token) {
    return false;
  }

  try {
    return await jwt.verify(token, "access_Token_secret");
  } catch {
    return false;
  }
}
