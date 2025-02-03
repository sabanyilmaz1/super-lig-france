// app/utils/auth.server.ts
import { getSession } from "~/utils/session.server";
import { redirect } from "react-router";

export async function requireUserSession(request: Request) {
  let session = await getSession(request.headers.get("Cookie"));

  if (!session.has("token")) {
    throw redirect("/login");
  }
  return session.get("token");
}
