import { formatHourAndAddOne } from "~/utils/hour-formatter";
import type { Fixture } from "../fixture.domain";

export const ScoreOrHour = ({ fixture }: { fixture: Fixture }) => {
  const matchNotStarted = fixture.scores && fixture.scores.length === 0;

  return (
    <div className="flex w-[70px] py-1 px-3 bg-redsuperlig justify-center font-bold text-white rounded-lg text-sm">
      {!matchNotStarted ? (
        <Score fixture={fixture} />
      ) : (
        formatHourAndAddOne(fixture.starting_at_timestamp)
      )}
    </div>
  );
};

const Score = ({ fixture }: { fixture: Fixture }) => {
  const isLive = fixture.state?.developer_name !== "FT";
  const homeScore = fixture.scores?.find(
    (f) => f.description === "CURRENT" && f.score.participant === "home"
  );
  const awayScore = fixture.scores?.find(
    (f) => f.description === "CURRENT" && f.score.participant === "away"
  );
  return (
    <div className="text-sm font-bold">
      {homeScore?.score.goals} - {awayScore?.score.goals}
    </div>
  );
};
