import { useFetchQuery } from "~/core/api/use-fetch-query";
import type { FixturePreview } from "./fixture.domain";
import { FixtureService } from "./fixture.service";

export function useGetFixturePreview(fixtureId: number, isOpen: boolean) {
  const fixtureService = new FixtureService();
  return useFetchQuery<FixturePreview>(
    ["fixturePreview", fixtureId.toString()],
    () => fixtureService.getFixtureById(fixtureId) as Promise<FixturePreview>,
    {
      requireAuth: true,
      enabled: isOpen,
    }
  );
}
