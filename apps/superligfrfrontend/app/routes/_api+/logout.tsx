import { redirect } from "@remix-run/node";
import { destroySession, getSession } from "~/utils/session.server";

export let loader = async ({ request }: { request: Request }) => {
  const session = await getSession(request.headers.get("Cookie"));

  return redirect("/login", {
    headers: {
      "Set-Cookie": await destroySession(session),
    },
  });
};
