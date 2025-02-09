import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { Http } from "../api/http";

interface User {
  id: string;
  email: string;
  name: string;
}

const http = new Http();

export function useRequireAuth() {
  const navigate = useNavigate();
  const { data: user, isLoading } = useQuery<User>({
    queryKey: ["auth", "me"],
    queryFn: () => http.get("/me"),
    retry: false,
    enabled:
      !!localStorage.getItem("token") ||
      !!!window.localStorage.getItem("token"),
  });

  useEffect(() => {
    const token =
      localStorage.getItem("token") || window.localStorage.getItem("token");
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
