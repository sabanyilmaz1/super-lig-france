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
  console.log(
    "roundData",
    roundData
      ?.sort((a, b) => parseInt(a.name) - parseInt(b.name))
      .map((round) => ({
        name: round.name,
        is_current: round.is_current,
        finished: round.finished,
      }))
  );
  let currentRound1: Round | undefined = undefined;
  if (roundData) {
    currentRound1 = roundData?.find((round) => round.is_current === true);
    if (currentRound1?.finished === true) {
      const intRound = parseInt(currentRound1.name);
      currentRound1 = roundData?.find(
        (round) => parseInt(round.name) === intRound + 1
      );
    }
  }
  const currentRoundName = currentRound1?.name || "";

  // Date range for fixtures
  const startingDate = currentRound1?.starting_at;
  const endingDate = currentRound1?.ending_at;

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
