import { ActionFunction } from "@remix-run/node";
import { fetchWithAuth } from "~/utils/api.server";

export let loaderFixture: ActionFunction = async ({ request }) => {
  const [lastFixtureResponse] = await Promise.all([
    fetchWithAuth(request, "http://localhost:3333/lastFixture"),
  ]);
  if (lastFixtureResponse.ok) {
    const lastFixtureData = await lastFixtureResponse.json();

    return Response.json({
      lastFixtureData: lastFixtureData.data,
    });
  } else {
    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
};
