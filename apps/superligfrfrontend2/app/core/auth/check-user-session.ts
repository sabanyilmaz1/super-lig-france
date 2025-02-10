import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useFetchQuery } from "../api/use-fetch-query";
import { getValidToken } from "../api/fetch-auth";
import { UserAuthService } from "~/features/user/user-auth.service";
import { User } from "~/features/user/user.domain";

const userAuthService = new UserAuthService();

export function useRequireAuth() {
  const navigate = useNavigate();
  const { data: user, isLoading } = useFetchQuery<User>(
    ["auth", "me"],
    () => userAuthService.getMe(),
    {
      enabled: !!getValidToken(),
    }
  );

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
