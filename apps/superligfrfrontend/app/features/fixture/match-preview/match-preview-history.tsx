import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { TabsContent } from "~/components/ui/tabs";

export const MatchPreviewHistory = ({
  h2hMatches,
}: {
  h2hMatches: Array<{
    date: string;
    home: string;
    away: string;
    score: string;
  }>;
}) => {
  return (
    <TabsContent value="history">
      <Card>
        <CardHeader></CardHeader>
        <CardContent>
          <div className="space-y-4">
            {h2hMatches.map((match, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div className="flex items-center space-x-2">
                  <img
                    src="/placeholder.svg?height=24&width=24"
                    alt={`${match.home} logo`}
                    className="w-6 h-6"
                  />
                  <span className="font-medium">{match.home}</span>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold">{match.score}</div>
                  <div className="text-sm text-muted-foreground">
                    {match.date}
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-medium">{match.away}</span>
                  <img
                    src="/placeholder.svg?height=24&width=24"
                    alt={`${match.away} logo`}
                    className="w-6 h-6"
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  );
};
