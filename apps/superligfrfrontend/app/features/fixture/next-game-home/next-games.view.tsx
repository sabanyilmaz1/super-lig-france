import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import superLigLogo from "~/assets/logo/super-lig-log.png";
import { Fixture } from "~/model/fixture";
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
    (acc, fixture) => {
      const date = new Date(fixture.fixture.timestamp * 1000) // Convertir timestamp UNIX en objet Date
        .toISOString()
        .split("T")[0]; // Récupérer au format "YYYY-MM-DD"

      acc[date] = acc[date] || [];
      acc[date].push(fixture);
      return acc;
    },
    {} as Record<string, Fixture[]>
  );

  // Trier les dates dans l'ordre chronologique
  const sortedDates = Object.entries(fixturesByDate).sort(
    ([dateA], [dateB]) => new Date(dateA).getTime() - new Date(dateB).getTime()
  );

  // Reformatage des dates pour affichage en français
  const sortedFixturesWithFormattedDates = sortedDates.map(
    ([date, fixtures]) => {
      const formattedDate = new Intl.DateTimeFormat("fr-FR", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }).format(new Date(date));

      // Mise en majuscule de la première lettre
      const frenchFormattedDate =
        formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
      return { date: frenchFormattedDate, fixturesForDate: fixtures };
    }
  );

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
        {sortedFixturesWithFormattedDates.map(({ date, fixturesForDate }) => (
          <div className="mt-4" key={date}>
            <p className="font-light text-redsuperligx text-lg text-center">
              {date}
            </p>
            <div className="grid gap-4">
              {fixturesForDate.map((fixture) => (
                <FixtureItem key={fixture.fixture.id} fixture={fixture} />
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
