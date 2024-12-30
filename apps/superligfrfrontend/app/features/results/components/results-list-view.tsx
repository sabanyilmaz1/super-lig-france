import { Fixture } from "@monorepo/shared/types/fixture";
import { ResultCard } from "./result-card";

interface ResultsListViewProps {
  results: Fixture[];
}

export const ResultsListView = ({ results }: ResultsListViewProps) => {
  return (
    <div className="flex flex-col gap-4">
      {results.map((result) => (
        <ResultCard key={result.fixture.id} result={result} />
      ))}
    </div>
  );
};
