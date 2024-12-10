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
  console.log("BASE_URL/login", `${BASE_URL}/login`);

  const response = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {},
    body: JSON.stringify({ email, password }),
  });

  console.log("response", response);

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
    return json({ error: "Invalid credentials" }, { status: 401 });
  }
};
