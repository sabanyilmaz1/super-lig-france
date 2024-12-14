import { ActionFunction, redirect } from "@remix-run/node";
import { ApiError } from "~/model/api";
import { commitSession, getSession } from "~/utils/session.server";

const BASE_URL = process.env.BASE_URL;

export let registerAction: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const pseudo = formData.get("pseudo");
  const password = formData.get("password");
  const confirm_password = formData.get("confirm_password");
  const club = formData.get("club");
  const apikey = formData.get("apikey");

  // Verifier si les mots de passe sont identiques
  if (password !== confirm_password) {
    return Response.json(
      { error: "Mot de passe ou email incorrect", type: ["password"] },
      {
        status: 401,
      }
    );
  }

  const response = await fetch(`${BASE_URL}register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email,
      password,
      username: pseudo,
      api_football_key: apikey,
      team_favorite_api_id: club,
    }),
  });

  if (response.ok) {
    const data = await response.json();
    if (data.token) {
      let session = await getSession(request.headers.get("Cookie"));
      session.set("token", data.token);
      return redirect("/home", {
        headers: {
          "Set-Cookie": await commitSession(session),
        },
      });
    }
    return Response.json({ data: data }, { status: 401 });
  } else {
    const data = await response.json();
    const errors = data?.errors as ApiError[];
    const translatedFields = errors.map((error) => {
      const match = matchingFields.find((f) => f.field === error.field);
      return match ? match.fieldFr : error.field; // Utilise la traduction si trouvée, sinon le nom original
    });
    const uniqueFieldsMessage = `Valeurs déjà utilisées : ${translatedFields.join(" et ")}`;
    return Response.json(
      {
        error: uniqueFieldsMessage,
        type: errors.map((error) => error.field),
      },
      { status: 401 }
    );
  }
};

const matchingFields = [
  {
    field: "username",
    fieldFr: "Pseudo",
  },
  {
    field: "api_football_key",
    fieldFr: "Clé API Foot",
  },
];
