import { formatHourAndAddOne } from "~/utils/hour-formatter";
import type { Fixture } from "../fixture.domain";
import { LIVE_STATE, LIVE_STATE_NAME } from "~/lib/live";

export const ScoreOrHour = ({ fixture }: { fixture: Fixture }) => {
  const isLive = LIVE_STATE.includes(fixture.state?.developer_name ?? "");
  const matchNotStarted = fixture.state?.developer_name === "NS";

  return (
    <div>
      <div className="flex w-[70px] py-1 px-3 bg-redsuperlig justify-center font-bold text-white rounded-lg text-sm">
        {!matchNotStarted ? (
          <Score fixture={fixture} />
        ) : (
          formatHourAndAddOne(fixture.starting_at_timestamp)
        )}
      </div>
      {isLive && (
        <div className="flex items-center justify-center gap-1 mt-1 text-xs font-semibold text-center text-redsuperlig">
          <div className="animate-pulse">🔴</div>
          <div>
            LIVE{" "}
            <span>
              {
                LIVE_STATE_NAME[
                  fixture.state?.developer_name as keyof typeof LIVE_STATE_NAME
                ]
              }
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

const Score = ({ fixture }: { fixture: Fixture }) => {
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
