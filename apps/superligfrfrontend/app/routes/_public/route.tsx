import { LoaderFunction } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import { Toaster } from "react-hot-toast";
import { ClubsBanner } from "~/components/layout/clubs-banner";
import { ErrorApiKey } from "~/components/layout/error-api-key";
import { Navbar } from "~/components/layout/navbar";
import { fetchWithAuth } from "~/utils/api.server";
import { requireUserSession } from "~/utils/auth.server";

const BASE_URL = process.env.BASE_URL;

export let loader: LoaderFunction = async ({ request }) => {
  await requireUserSession(request);
  const response = await fetchWithAuth(request, `${BASE_URL}me`, {
    method: "GET",
  });
  const data = await response.json();

  if (data) {
    const apiKey = data.user.apiFootballKey;
    const responseApiKey = await fetchWithAuth(
      request,
      `${BASE_URL}check-api-key/${apiKey}`,
      {
        method: "GET",
      }
    );

    const dataApiKey = await responseApiKey.json();
    if (dataApiKey.token) {
      return Response.json({
        user: data.user,
        error: "La clé API Foot est invalide",
      });
    } else {
      return Response.json({ user: data.user, error: null });
    }
  }
  return null;
};

export default function PrivateLayout() {
  const dataUser = useLoaderData<typeof loader>();

  if (!dataUser) {
    return null;
  }

  return (
    <div>
      <Toaster />
      <ClubsBanner />
      <Navbar user={dataUser.user} />
      {dataUser.error === "La clé API Foot est invalide" ? (
        <ErrorApiKey />
      ) : (
        <Outlet />
      )}
    </div>
  );
}
