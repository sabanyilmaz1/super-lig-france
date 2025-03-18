import { useFetchQuery } from "~/core/api/use-fetch-query";
import { FixtureService } from "../fixtures-results/fixture.service";
import type { Fixture, Round } from "../fixtures-results/fixture.domain";
import { ResultService } from "./result.service";
import { useState, useEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { ResultFixture } from "./result.domain";

type Result = {
  fixtures: ResultFixture[];
  round: string;
};

const fixtureService = new FixtureService();
const resultService = new ResultService();

export function useGetResult() {
  const queryClient = useQueryClient();

  const initialRoundQuery = useFetchQuery<string>(
    ["initialRound"],
    async () => {
      const rounds = (await fixtureService.getAllRounds()) as Round[];
      const lastRound =
        parseInt(
          rounds?.find((round) => round.is_current === true)?.name || "0"
        ) - 1;
      const roundItem = rounds?.find(
        (round) => round.name === lastRound.toString()
      );
      return roundItem?.name || "1";
    }
  );

  const lastRound = initialRoundQuery.data;

  const [currentRound, setCurrentRound] = useState<string>(
    initialRoundQuery.data || "1"
  );

  const roundQuery = useFetchQuery<Result>(
    ["rounds", currentRound],
    async () => {
      const rounds = (await fixtureService.getAllRounds()) as Round[];
      const selectedRoundItem = rounds?.find(
        (round) => round.name === currentRound
      );

      if (!selectedRoundItem) {
        throw new Error("Round not found");
      }

      const fixtures = (await resultService.getResultsByDateRange(
        selectedRoundItem.starting_at,
        selectedRoundItem.ending_at
      )) as ResultFixture[];

      return {
        fixtures,
        round: selectedRoundItem.name,
      };
    },
    {
      enabled: !!initialRoundQuery.data,
    }
  );

  // Mettre à jour currentRound quand initialRoundQuery se termine
  useEffect(() => {
    if (initialRoundQuery.data) {
      setCurrentRound(initialRoundQuery.data);
    }
  }, [initialRoundQuery.data]);

  const updateFixtures = useMutation({
    mutationFn: async (roundSelected: string) => {
      const rounds = (await fixtureService.getAllRounds()) as Round[];
      const roundItem = rounds?.find((round) => round.name === roundSelected);

      if (!roundItem) {
        throw new Error("Round not found");
      }

      const fixtures = (await resultService.getResultsByDateRange(
        roundItem.starting_at,
        roundItem.ending_at
      )) as Fixture[];

      return { fixtures, round: roundSelected };
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["rounds", data.round], data);
      queryClient.invalidateQueries({ queryKey: ["rounds"] });
      setCurrentRound(data.round);
    },
  });

  return {
    roundQuery,
    currentRound,
    setCurrentRound,
    updateFixtures,
    lastRound,
    isInitialLoading: initialRoundQuery.isLoading,
  };
}
