import { useFetcher } from "@remix-run/react";
import { useCallback } from "react";

export function useMatchPreview() {
  const fetcher = useFetcher();

  // Détermine si le fetcher est en train de charger
  const isLoading = fetcher.state === "submitting";

  // Récupère les données retournées par le fetcher
  const data = fetcher.data;

  // Fonction pour déclencher la requête
  const fetchPreview = useCallback(
    (fixtureId: number, homeTeamId: number, awayTeamId: number) => {
      fetcher.submit(
        {
          fixtureId: String(fixtureId),
          homeTeamId: String(homeTeamId),
          awayTeamId: String(awayTeamId),
        },
        { method: "post", action: "/match_preview" }
      );
    },
    [fetcher]
  );

  return { isLoading, data, fetchPreview };
}
