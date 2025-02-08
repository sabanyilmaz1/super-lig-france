import { redirect } from "react-router";
import { getSession } from "../session";

export async function requireUserSession(request: Request) {
  let session = await getSession(request.headers.get("Cookie"));

  if (!session.has("token")) {
    throw redirect("/login");
  }
  return session.get("token");
}
