import { ActionFunction } from "@remix-run/node";
import { fetchWithAuth } from "~/utils/api.server";

const BASE_URL = process.env.BASE_URL;

export let ResultsLoader: ActionFunction = async ({ request }) => {
  const [lastRoundResponse, allRoundsResponse, lastResultsResponse] =
    await Promise.all([
      fetchWithAuth(request, `${BASE_URL}lastRound`),
      fetchWithAuth(request, `${BASE_URL}allRounds`),
      fetchWithAuth(request, `${BASE_URL}lastResults`),
    ]);

  if (lastRoundResponse.ok && allRoundsResponse.ok && lastResultsResponse.ok) {
    const lastRoundData = await lastRoundResponse.json();
    const allRoundsData = await allRoundsResponse.json();
    const lastResultsData = await lastResultsResponse.json();

    return Response.json({
      lastRoundData: lastRoundData.data,
      allRoundsData: allRoundsData.data,
      lastResultsData: lastResultsData.data,
    });
  } else {
    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
};
