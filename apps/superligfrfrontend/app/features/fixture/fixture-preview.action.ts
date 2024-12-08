// app/routes/match_preview.ts
import { ActionFunction } from "@remix-run/node";
import { fetchWithAuth } from "~/utils/api.server";

const BASE_URL = process.env.BASE_URL;

export const fixturePreviewAction: ActionFunction = async ({ request }) => {
  // Extraction des données de la requête (body ou URLSearchParams)
  const url = new URL(request.url);
  const fixtureId = url.searchParams.get("fixtureId");
  const homeTeamId = url.searchParams.get("homeTeamId");
  const awayTeamId = url.searchParams.get("awayTeamId");

  if (!fixtureId || !homeTeamId || !awayTeamId) {
    return Response.json({ error: "Missing parameters" }, { status: 400 });
  }

  // Effectuer le fetch avec `fetchWithAuth`
  const matchPreviewResponse = await fetchWithAuth(
    request,
    `${BASE_URL}/match_preview/${fixtureId}?homeTeamId=${homeTeamId}&awayTeamId=${awayTeamId}`
  );

  if (!matchPreviewResponse.ok) {
    const error = await matchPreviewResponse.json();
    return Response.json(
      { error: error.message || "Failed to fetch match preview" },
      { status: matchPreviewResponse.status }
    );
  }

  const matchPreviewData = await matchPreviewResponse.json();

  // Retourne les données en réponse JSON
  return Response.json({ matchPreview: matchPreviewData });
};
