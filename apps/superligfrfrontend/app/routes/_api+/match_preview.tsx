import { fetchWithAuth } from "~/utils/api.server";

export const action = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const matchId = formData.get("fixtureId");
  const homeTeamId = formData.get("homeTeamId");
  const awayTeamId = formData.get("awayTeamId");

  if (!matchId || !homeTeamId || !awayTeamId) {
    return Response.json({ error: "Missing parameters" }, { status: 400 });
  }

  const url = `http://localhost:3333/match_preview/${matchId}?homeTeamId=${homeTeamId}&awayTeamId=${awayTeamId}`;
  const response = await fetchWithAuth(request, url);

  if (!response.ok) {
    return Response.json(
      { error: "Failed to fetch data" },
      { status: response.status }
    );
  }

  const data = await response.json();
  return Response.json(data);
};
