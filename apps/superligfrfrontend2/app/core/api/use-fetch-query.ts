import { useQuery } from "@tanstack/react-query";
import type { UseQueryOptions } from "@tanstack/react-query";
import { Http } from "./http";

const http = new Http();

interface UseFetchQueryOptions<TData, TError>
  extends Omit<UseQueryOptions<TData, TError, TData>, "queryKey" | "queryFn"> {
  requireAuth?: boolean;
}

export function useFetchQuery<TData = unknown, TError = Error>(
  endpoint: string,
  queryKey: string[],
  options: UseFetchQueryOptions<TData, TError> = {}
) {
  const { requireAuth = true, ...queryOptions } = options;

  return useQuery<TData, TError>({
    queryKey: queryKey,
    queryFn: async () => {
      if (requireAuth) {
        return http.get<TData>(endpoint);
      }
      return http.postWithoutAuth<TData>(endpoint);
    },
    retry: false,
    refetchOnWindowFocus: false,
    ...queryOptions,
  });
}
