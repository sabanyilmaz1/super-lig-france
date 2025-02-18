import { useGetResult } from "../use-get-result";
import { ResultCard } from "./result-card";
import { SelectRound } from "./select-round";

export const FullResult = () => {
  const {
    roundQuery,
    currentRound,
    updateFixtures,
    isInitialLoading,
    lastRound,
  } = useGetResult();
  const { data: roundData, isFetching } = roundQuery;

  if (isInitialLoading || isFetching) {
    return <div>Loading...</div>;
  }

  if (!lastRound) {
    return <div>No last round</div>;
  }

  return (
    <div className="mt-4">
      <div className="flex items-center justify-between">
        <h1 className="font-extrabold md:text-3xl text-redsuperlig">
          Journée {currentRound}
        </h1>
        {currentRound && (
          <SelectRound
            lastRound={lastRound}
            currentRound={currentRound}
            updateFixtures={updateFixtures}
          />
        )}
      </div>
      {/* Content */}
      <div className="flex flex-col gap-4 mt-8">
        {roundData?.fixtures.map((fixture) => (
          <ResultCard key={fixture.id} result={fixture} />
        ))}
      </div>
    </div>
  );
};
