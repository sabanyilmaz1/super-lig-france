import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import superLigLogo from "~/assets/logo/super-lig-log.png";
import { Fixture } from "~/model/fixture";
import { getFrenchDate } from "~/lib/utils";
import { FixtureItem } from "./fixture-item";

interface NextGamesHomeViewProps {
  fixtures: Fixture[];
  round: string;
}

export const NextGamesHomeView = ({
  fixtures,
  round,
}: NextGamesHomeViewProps) => {
  const roundNumber = round.split(" - ")[1];

  // Regrouper les matchs par date
  const fixturesByDate: Record<string, Fixture[]> = fixtures.reduce(
    (acc: Record<string, Fixture[]>, fixture) => {
      const date = getFrenchDate(fixture.fixture.timestamp);
      if (!acc[date]) acc[date] = [];
      acc[date].push(fixture);
      return acc;
    },
    {} as Record<string, Fixture[]>
  );

  console.log(fixturesByDate);

  const sortedEntries = Object.entries(fixturesByDate).sort(
    ([dateA], [dateB]) => new Date(dateA).getTime() - new Date(dateB).getTime()
  );

  const sortedFixturesByDate = sortedEntries.reduce((acc, [date, fixtures]) => {
    acc[date] = fixtures;
    return acc;
  }, {} as Record<string, Fixture[]>);

  console.log(sortedFixturesByDate);

  return (
    <Card className="min-h-96 border-2 border-redsuperlig shadow-lg">
      <CardHeader className="bg-gradient-to-r from-red-500 to-red-700 rounded-t-md text-white flex items-center justify-center text-center">
        <CardTitle className="flex justify-between items-center gap-2 w-full ">
          <img src={superLigLogo} className=" size-8" alt="" />
          <p>Journée {roundNumber}</p>
          <div></div>
        </CardTitle>
      </CardHeader>
      <CardContent className="mt-4">
        {Object.entries(sortedFixturesByDate).map(([date, fixturesForDate]) => (
          <div className="mt-2" key={date}>
            <p className="font-light text-redsuperligx text-lg text-center">
              {date}
            </p>
            {fixturesForDate.map((fixture) => (
              <FixtureItem key={fixture.fixture.id} fixture={fixture} />
            ))}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
