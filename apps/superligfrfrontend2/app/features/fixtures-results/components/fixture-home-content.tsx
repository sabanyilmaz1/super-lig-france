import { HomeCardHeader } from "~/components/common/home-card-header";
import { Card, CardContent } from "~/components/ui/card";
import { useGetFixtureHome } from "../use-get-fixture-home";
import {
  FixtureDisplayDate,
  FixtureDisplayParticipants,
} from "./fixture-components";
import { ScoreOrHour } from "./score-or-hour";
import { FixtureHomeSkeleton } from "./skeleton";

export const FixtureHomeContent = () => {
  const { data, isLoading } = useGetFixtureHome();

  if (isLoading || !data) return <FixtureHomeSkeleton />;

  const round = data.round;
  return (
    <Card className="border-2 shadow-lg min-h-96 border-redsuperlig">
      <HomeCardHeader title={`Journée ${round}`} />
      <CardContent className="p-0 mt-4">
        {data.groupedFixtures.map((fixtures) => {
          return (
            <div className="mt-4" key={fixtures[0].id}>
              <FixtureDisplayDate
                timestamp={fixtures[0].starting_at_timestamp}
              />
              <div className="grid gap-4">
                {fixtures.map((fixture) => (
                  <div
                    key={fixture.id}
                    className="flex items-start justify-center gap-4 p-3 border-b"
                  >
                    <FixtureDisplayParticipants
                      participants={fixture.participants}
                      isHome={true}
                    />
                    <ScoreOrHour fixture={fixture} />
                    <FixtureDisplayParticipants
                      participants={fixture.participants}
                      isHome={false}
                    />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};
