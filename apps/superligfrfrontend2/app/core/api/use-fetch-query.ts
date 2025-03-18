import { useQuery } from "@tanstack/react-query";
import type { UseQueryOptions } from "@tanstack/react-query";

interface UseFetchQueryOptions<TData, TError>
  extends Omit<UseQueryOptions<TData, TError, TData>, "queryKey" | "queryFn"> {
  requireAuth?: boolean;
}

export function useFetchQuery<TData = unknown, TError = Error>(
  queryKey: string[],
  queryFn: () => Promise<TData>,
  options: UseFetchQueryOptions<TData, TError> = {}
) {
  const { requireAuth = true, ...queryOptions } = options;

  return useQuery<TData, TError>({
    queryKey: queryKey,
    queryFn: queryFn,
    retry: false,
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000, // 5 minutes
    ...queryOptions,
  });
}
