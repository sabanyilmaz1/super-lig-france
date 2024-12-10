import { createCookieSessionStorage } from "@remix-run/node";

// This secret should be secure and stored in environment variables
const sessionSecret = process.env.SESSION_SECRET;

if (!sessionSecret) {
  throw new Error("SESSION_SECRET environment variable is required");
}

export const { getSession, commitSession, destroySession } =
  createCookieSessionStorage({
    cookie: {
      name: "__session",
      httpOnly: true,
      // secure: process.env.NODE_ENV === "production",
      secure: false,
      secrets: [sessionSecret],
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 2,
    },
  });
