import { formatHourAndAddOne } from "~/utils/hour-formatter";
import type { Fixture } from "../fixture.domain";

//Score
// Quel Mitemps

export const ScoreOrHour = ({ fixture }: { fixture: Fixture }) => {
  const matchNotStarted = fixture.result_info;

  return (
    <div className="flex w-[60px] py-1 px-3 bg-redsuperlig justify-center font-bold text-white rounded-lg text-sm">
      {matchNotStarted
        ? ""
        : formatHourAndAddOne(fixture.starting_at_timestamp)}
    </div>
  );
};
