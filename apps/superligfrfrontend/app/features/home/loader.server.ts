import { ActionFunction } from "@remix-run/node";
import { fetchWithAuth } from "~/utils/api.server";

export let loaderHome: ActionFunction = async ({ request }) => {
  const [
    lastFixtureResponse,
    standingDataResponse,
    topscorersResponse,
    topassistsResponse,
    articlesResponse,
  ] = await Promise.all([
    fetchWithAuth(request, "http://localhost:3333/lastFixture"),
    fetchWithAuth(request, "http://localhost:3333/standing"),
    fetchWithAuth(request, "http://localhost:3333/topscorers"),
    fetchWithAuth(request, "http://localhost:3333/topassists"),
    fetchWithAuth(request, "http://localhost:3333/articles/last-four"),
  ]);

  if (
    lastFixtureResponse.ok &&
    standingDataResponse.ok &&
    topscorersResponse.ok &&
    articlesResponse.ok &&
    topassistsResponse.ok
  ) {
    const lastFixtureData = await lastFixtureResponse.json();
    const standingData = await standingDataResponse.json();
    const topscorersData = await topscorersResponse.json();
    const topassistsData = await topassistsResponse.json();
    const articlesData = await articlesResponse.json();

    return Response.json({
      lastFixtureData: lastFixtureData.data,
      standingData: standingData.data,
      topscorersData: topscorersData.data,
      topassistsData: topassistsData.data,
      articlesData: articlesData,
    });
  } else {
    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
};
