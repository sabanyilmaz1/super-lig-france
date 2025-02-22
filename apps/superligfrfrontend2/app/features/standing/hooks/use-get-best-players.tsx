import { useFetchQuery } from "~/core/api/use-fetch-query";
import type { Standing } from "../domain/standing.domain";
import { StandingService } from "../standing.service";
import type { PlayerStanding } from "../domain/player-standing.domain";

export function useGetTopScorers() {
  const standingService = new StandingService();
  return useFetchQuery<PlayerStanding[]>(
    ["topscorers"],
    () => standingService.getTopScorers() as Promise<PlayerStanding[]>,
    {
      requireAuth: true,
    }
  );
}

export function useGetTopAssists() {
  const standingService = new StandingService();
  return useFetchQuery<PlayerStanding[]>(
    ["topassists"],
    () => standingService.getTopAssists() as Promise<PlayerStanding[]>,
    {
      requireAuth: true,
    }
  );
}
