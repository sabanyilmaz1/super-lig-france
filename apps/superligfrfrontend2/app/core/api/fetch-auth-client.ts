export async function fetchWithAuthClient(
  url: string,
  options: RequestInit = {}
) {
  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
    },
    credentials: "include",
  });
}
