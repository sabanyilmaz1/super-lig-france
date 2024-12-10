import { ActionFunction, json, redirect } from "@remix-run/node";
import { commitSession, getSession } from "~/utils/session.server";

const BASE_URL = process.env.BASE_URL;

export let loginAction: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  console.log("email", email);
  console.log("password", password);

  console.log("BASE_URL", BASE_URL);
  console.log("BASE_URL/login", `${BASE_URL}login`);

  const response = await fetch(`http://147.79.102.85:3333/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  console.log("response", response);

  if (response.ok) {
    const data = await response.json();
    console.log("data", data);
    const token = data.token;

    // Store the token in the session
    let session = await getSession(request.headers.get("Cookie"));
    console.log("session", session);
    session.set("token", token);
    console.log("token", token);
    console.log("session after set", session.data);
    const sessionSecret = process.env.SESSION_SECRET;
    console.log("sessionSecret", sessionSecret);
    console.log("process.env.NODE_ENV", process.env.NODE_ENV);

    console.log("await commitSession(session)", await commitSession(session));

    return redirect("/home", {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    });
  } else {
    return json({ error: "Invalid credentials" }, { status: 401 });
  }
};
