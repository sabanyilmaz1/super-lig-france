import { useFetchQuery } from "~/core/api/use-fetch-query";
import { FixtureService } from "./fixture.service";
import type { Fixture } from "./fixture.domain";
import type { Round } from "./fixture.domain";

interface FixtureHomeReturn {
  groupedFixtures: Fixture[][];
  round: string;
}

export function useGetFixtureHome() {
  const fixtureService = new FixtureService();
  const roundQuery = useFetchQuery<Round[]>(
    ["rounds"],
    () => fixtureService.getAllRounds() as Promise<Round[]>
  );

  const roundData = roundQuery.data;
  const currentRound = roundData?.find((round) => round.is_current === true);
  const currentRoundName = currentRound?.name || "";
  const startingDate = currentRound?.starting_at;
  const endingDate = currentRound?.ending_at;

  return useFetchQuery<FixtureHomeReturn>(
    ["fixturesByDateRange", startingDate || "", endingDate || ""],
    async () => {
      const fixtures = (await fixtureService.getLastFixtures(
        startingDate || "",
        endingDate || ""
      )) as Fixture[];

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
        groupedFixtures: groupedFixtures,
        round: currentRoundName,
      };
    },
    {
      enabled: !!startingDate && !!endingDate,
    }
  );
}
