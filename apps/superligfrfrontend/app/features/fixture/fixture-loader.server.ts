import { LoaderFunction } from "react-router";
import { fetchWithAuth } from "~/utils/api.server";

const BASE_URL = process.env.BASE_URL;

export let loaderFixture: LoaderFunction = async ({ request }) => {
  const [lastFixtureResponse] = await Promise.all([
    fetchWithAuth(request, `${BASE_URL}lastFixture`),
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
