import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useFetchQuery } from "../api/use-fetch-query";
import { getValidToken } from "../api/fetch-auth";

interface User {
  id: string;
  email: string;
  name: string;
}

export function useRequireAuth() {
  const navigate = useNavigate();
  const { data: user, isLoading } = useFetchQuery<User>("/me", ["auth", "me"], {
    enabled: !!getValidToken(),
  });

  useEffect(() => {
    const token = getValidToken();
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  return {
    user,
    isLoading,
    isAuthenticated: !!user,
  };
}
