import { useFetchQuery } from "~/core/api/use-fetch-query";
import { StandingService } from "./standing.service";
import type { Standing } from "./standing.domain";

export function useGetStanding() {
  const standingService = new StandingService();
  return useFetchQuery<Standing[]>(
    ["standings"],
    () => standingService.getStanding() as Promise<Standing[]>,
    {
      requireAuth: true,
    }
  );
}
