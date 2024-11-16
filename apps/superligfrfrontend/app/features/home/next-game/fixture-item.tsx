import { Fixture } from "~/model/fixture";
import { ScoreOrHour } from "./score-or-hour";

export const FixtureItem = ({ fixture }: { fixture: Fixture }) => {
  return (
    <div
      key={fixture.fixture.id}
      className="flex flex-col justify-center items-center px-3 py-4 border-b"
    >
      <div className="grid grid-cols-5 items-center gap-2">
        <p className="uppercase font-extrabold text-end">
          {fixture.teams.home.name.slice(0, 3)}
        </p>
        <img
          src={fixture.teams.home.logo}
          className="w-8 h-8"
          alt={fixture.teams.home.name}
        />
        <ScoreOrHour fixture={fixture} />
        <div className="flex justify-end">
          <img
            src={fixture.teams.away.logo}
            className="w-8 h-8"
            alt={fixture.teams.away.name}
          />
        </div>
        <p className="uppercase font-extrabold">
          {fixture.teams.away.name.slice(0, 3)}
        </p>
      </div>
      {(fixture.fixture.status.short === "1H" ||
        fixture.fixture.status.short === "2H" ||
        fixture.fixture.status.short === "HT") && (
        <span className="text-xs font-bold">
          🔴 LIVE{" "}
          {fixture.fixture.status.short == "HT"
            ? "MT"
            : `${fixture.fixture.status.elapsed}${"'"}`}
        </span>
      )}
    </div>
  );
};
