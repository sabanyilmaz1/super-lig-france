import { createCookieSessionStorage } from "react-router";

// This secret should be secure and stored in environment variables
const sessionSecret = import.meta.env.VITE_SESSION_SECRET;

if (!sessionSecret) {
  throw new Error("VITE_SESSION_SECRET environment variable is required");
}

type SessionData = {
  token: string;
};

type SessionFlashData = {
  error: string;
};

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage<SessionData, SessionFlashData>({
    cookie: {
      name: "__session",
      httpOnly: true,
      secure: false,
      secrets: [sessionSecret],
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 2,
    },
  });

export { getSession, commitSession, destroySession };
