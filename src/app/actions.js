"use server";

import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function verifyUser() {
  const cookieee = await cookies();
  if (!cookieee) {
    return false;
  }
  const token = cookieee.get("accessToken")?.value;

  if (!token) {
    return false;
  }
  // access_Token_secret
  try {
    const secret = "access_Token_secret";
    await jwt.verify(token, secret);
    return true;
  } catch (error) {
    console.error("JWT verification failed:", error.message);
    return false;
  }
}
