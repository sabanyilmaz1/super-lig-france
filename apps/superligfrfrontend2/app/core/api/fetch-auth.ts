interface TokenData {
  token: string;
  expiresAt: number;
}



export async function fetchWithAuth(url: string, options: RequestInit = {}) {
  const token = getValidToken();

  if (!token) {
    throw new Error("No valid authentication token found");
  }

  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    },
  });
}

export const storeAuthToken = (token: string) => {
  const tokenData: TokenData = {
    token,
    expiresAt: new Date().getTime() + 2 * 60 * 60 * 1000, // 2 hours
  };
  localStorage.setItem("token", JSON.stringify(tokenData));
};

export const getStoredToken = (): TokenData | null => {
  const storedToken = localStorage.getItem("token");
  if (!storedToken) return null;
  return JSON.parse(storedToken);
};

export const removeAuthToken = () => {
  localStorage.removeItem("token");
};

export function getValidToken(): string | null {
  const tokenDataStr = localStorage.getItem("token");
  if (!tokenDataStr) return null;

  try {
    const tokenData = JSON.parse(tokenDataStr);
    if (new Date().getTime() > tokenData.expiresAt) {
      localStorage.removeItem("token");
      return null;
    }
    return tokenData.token;
  } catch {
    localStorage.removeItem("token");
    return null;
  }
}
