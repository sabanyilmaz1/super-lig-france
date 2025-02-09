import { redirect, type ActionFunction } from "react-router";
import { commitSession, getSession } from "~/core/session";
import { Http } from "~/core/api/http";

export let loginAction: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    const http = new Http();
    const data = await http.postWithoutAuth<{ token: string }>("/login", {
      email,
      password,
    });

    // Store the token in the session
    let session = await getSession(request.headers.get("Cookie"));
    session.set("token", data.token);
    return redirect("/home", {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    });
  } catch (error) {
    return Response.json(
      { error: "Mot de passe ou email incorrect" },
      { status: 401 }
    );
  }
};
