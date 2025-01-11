import { Fixture } from "@monorepo/shared/types/fixture";
import { NoInformation } from "~/components/layout/no-information";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { TabsContent } from "~/components/ui/tabs";

interface MatchPreviewHistoryProps {
  headToHead: Fixture[];
}

export const MatchPreviewHistory = ({
  headToHead,
}: MatchPreviewHistoryProps) => {
  if (!headToHead || headToHead.length === 0) {
    return (
      <TabsContent value="history">
        <NoInformation
          title="Aucun match"
          description="Les deux équipes ne se sont pas encore rencontrées"
        />
      </TabsContent>
    );
  }

  return (
    <TabsContent value="history">
      <Card>
        <CardHeader></CardHeader>
        <CardContent>
          <div className="space-y-4">
            {headToHead && headToHead.length > 0 && (
              <>
                {headToHead.map((fixture) => (
                  <div
                    key={fixture.fixture.id}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div className="flex items-center space-x-2">
                      <img
                        src={fixture.teams.home.logo}
                        alt={`${fixture.teams.home.name} logo`}
                        className="w-6 h-6"
                      />
                      <span className=" text-xs md:text-base font-medium w-20">
                        {fixture.teams.home.name}
                      </span>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold">
                        {fixture.goals.home} - {fixture.goals.away}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {new Intl.DateTimeFormat("fr-FR", {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                        }).format(new Date(fixture.fixture.date))}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs md:text-sm font-medium w-20">
                        {fixture.teams.away.name}
                      </span>
                      <img
                        src={fixture.teams.away.logo}
                        alt={`${fixture.teams.away.name} logo`}
                        className="w-6 h-6"
                      />
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  );
};
