import { fetchWithAuth } from "~/utils/api.server";

const BASE_URL = process.env.BASE_URL;

export const action = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const roundId = formData.get("roundId");

  if (!roundId) {
    return Response.json({ error: "Missing parameters" }, { status: 400 });
  }

  const url = `${BASE_URL}results?roundId=${roundId}`;
  const response = await fetchWithAuth(request, url);

  if (!response.ok) {
    return Response.json(
      { error: "Failed to fetch data" },
      { status: response.status }
    );
  }

  const data = await response.json();
  return Response.json(data.data.response);
};
