import { ActionFunction, json, redirect } from "@remix-run/node";
import { fetchWithAuth } from "~/utils/api.server";

export let loaderHome: ActionFunction = async ({ request }) => {
  const [
    lastFixtureResponse,
    standingDataResponse,
    topscorersResponse,
    topassistsResponse,
  ] = await Promise.all([
    fetchWithAuth(request, "http://localhost:3333/lastFixture"),
    fetchWithAuth(request, "http://localhost:3333/standing"),
    fetchWithAuth(request, "http://localhost:3333/topscorers"),
    fetchWithAuth(request, "http://localhost:3333/topassists"),
  ]);

  if (
    lastFixtureResponse.ok &&
    standingDataResponse.ok &&
    topscorersResponse.ok
  ) {
    const lastFixtureData = await lastFixtureResponse.json();
    const standingData = await standingDataResponse.json();
    const topscorersData = await topscorersResponse.json();
    const topassistsData = await topassistsResponse.json();

    return json({
      lastFixtureData: lastFixtureData.data,
      standingData: standingData.data,
      topscorersData: topscorersData.data,
      topassistsData: topassistsData.data,
    });
  } else {
    return json({ error: "Something went wrong" }, { status: 500 });
  }
};
