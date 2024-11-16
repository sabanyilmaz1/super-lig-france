import { LoaderFunction, json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import { ClubsBanner } from "~/features/layout/clubs-banner";
import { Navbar } from "~/features/layout/navbar";
import { fetchWithAuth } from "~/utils/api.server";
import { requireUserSession } from "~/utils/auth.server";

export let loader: LoaderFunction = async ({ request }) => {
  await requireUserSession(request);
  const response = await fetchWithAuth(request, "http://localhost:3333/me", {
    method: "GET",
  });
  const data = await response.json();
  if (data) {
    return json({ user: data.user });
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
      <ClubsBanner />
      <Navbar user={dataUser.user} />
      <Outlet />
    </div>
  );
}
