import { ScoreOrHour } from "~/features/fixture/next-game-home/score-or-hour";
import { Fixture } from "~/model/fixture";
import { FixtureItemLive } from "../components/fixture-item-live";

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
      <FixtureItemLive fixture={fixture} />
    </div>
  );
};
