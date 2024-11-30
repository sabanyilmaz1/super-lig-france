import { getHoursFromTimestamp } from "~/lib/utils";
import { Fixture } from "~/model/fixture";

export const ScoreOrHour = ({ fixture }: { fixture: Fixture }) => {
  return (
    <div className="flex w-[60px] py-1 px-3 bg-redsuperlig justify-center font-bold text-white rounded-lg text-sm">
      {fixture.fixture.status.short === "NS" ? (
        <>
          <p>{getHoursFromTimestamp(fixture.fixture.timestamp)}</p>
        </>
      ) : (
        <>
          <p>{fixture.goals.home}</p>
          <p>-</p>
          <p>{fixture.goals.away}</p>
        </>
      )}
    </div>
  );
};
