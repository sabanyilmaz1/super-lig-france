import { useFetchQuery } from "~/core/api/use-fetch-query";
import type { Standing } from "../domain/standing.domain";
import { StandingService } from "../standing.service";

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
