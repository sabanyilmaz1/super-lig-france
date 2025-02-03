import { LoaderFunction } from "react-router";
import { fetchWithAuth } from "~/utils/api.server";

const BASE_URL = process.env.BASE_URL;

export let loaderStanding: LoaderFunction = async ({ request }) => {
  const [standingResponse] = await Promise.all([
    fetchWithAuth(request, `${BASE_URL}standing`),
  ]);
  if (standingResponse.ok) {
    const standingData = await standingResponse.json();

    return Response.json({
      ...standingData.data,
    });
  } else {
    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
};
