import { useFetcher, useLoaderData } from "@remix-run/react";
import { useCallback, useEffect, useState } from "react";
import { loader } from "~/routes/_public/standing/route";

export function useResultByRound() {
  const data = useLoaderData<typeof loader>();
  const [results, setResults] = useState(() => data.lastResultsData.response);
  const numberLastRound =
    parseInt(data.lastRoundData.response[0].split(" ")[3]) - 1;

  const [selectedMatchday, setSelectedMatchday] = useState(() =>
    String(numberLastRound)
  );
  const fetcher = useFetcher();

  // Détermine si le fetcher est en train de charger
  const isLoading = fetcher.state === "submitting";

  // Fonction pour déclencher la requête
  const fetchData = useCallback(
    (roundId: number) => {
      setResults([]);
      setSelectedMatchday(String(roundId));
      fetcher.submit(
        {
          roundId: String(roundId),
        },
        { method: "post", action: "/show-results-by-round" }
      );
    },
    [fetcher]
  );

  useEffect(() => {
    if (fetcher.data) {
      setResults(fetcher.data);
    }
  }, [fetcher.data]);

  useEffect(() => {
    fetchData(parseInt(selectedMatchday));
  }, [selectedMatchday]);

  return {
    isLoading,
    results,
    fetchData,
    selectedMatchday,
    setSelectedMatchday,
  };
}
