import { ActionFunction, json, redirect } from "@remix-run/node";
import { commitSession, getSession } from "~/utils/session.server";

const BASE_URL = process.env.BASE_URL;

export let loginAction: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  const response = await fetch(`${BASE_URL}login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (response.ok) {
    const data = await response.json();
    const token = data.token;

    // Store the token in the session
    let session = await getSession(request.headers.get("Cookie"));
    session.set("token", token);
    return redirect("/home", {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    });
  } else {
    return Response.json(
      { error: "Mot de passe ou email incorrect" },
      { status: 401 }
    );
  }
};
