import { useFetchQuery } from "~/core/api/use-fetch-query";
import { FixtureService } from "./fixture.service";
import type { Fixture } from "./fixture.domain";

interface FixtureHomeReturn {
  groupedFixtures: Fixture[][];
  round: string;
}

export function useGetFixtureHome() {
  const fixtureService = new FixtureService();
  return useFetchQuery<FixtureHomeReturn>(
    ["fixtures"],
    async () => {
      const fixtures = (await fixtureService.getLastFixture()) as Fixture[];
      const round = fixtures[0]?.round.name || "";

      // Group fixtures by date (ignoring time)
      const groupedFixtures = fixtures.reduce((acc: Fixture[][], fixture) => {
        const date = fixture.starting_at.split(" ")[0]; // Get just the date part
        const existingGroup = acc.find(
          (group) => group[0].starting_at.split(" ")[0] === date
        );

        if (existingGroup) {
          existingGroup.push(fixture);
        } else {
          acc.push([fixture]);
        }

        return acc;
      }, []);

      return {
        groupedFixtures,
        round,
      };
    },
    {
      requireAuth: true,
    }
  );
}
