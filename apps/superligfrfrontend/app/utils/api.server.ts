// app/utils/api.server.ts
import { getSession } from "~/utils/session.server";

export async function fetchWithAuth(
  request: Request,
  url: string,
  options: RequestInit = {}
) {
  const session = await getSession(request.headers.get("Cookie"));
  const token = session.get("token");
  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    },
  });
}
