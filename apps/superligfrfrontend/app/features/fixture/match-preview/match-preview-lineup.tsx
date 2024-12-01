import React from "react";
import { TabsContent } from "~/components/ui/tabs";

export const MatchPreviewLineup = ({
  homeTeam,
  awayTeam,
}: {
  homeTeam: { name: string; lineup: string[] };
  awayTeam: { name: string; lineup: string[] };
}) => {
  return (
    <TabsContent value="lineup">
      <div className="grid grid-cols-2 gap-4 p-4">
        <div>
          <h3 className="mb-2 font-semibold">{homeTeam.name}</h3>
          <ul className="space-y-1">
            {homeTeam.lineup.map((player, index) => (
              <li key={index} className="text-sm">
                {player}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-2 font-semibold">{awayTeam.name}</h3>
          <ul className="space-y-1">
            {awayTeam.lineup.map((player, index) => (
              <li key={index} className="text-sm">
                {player}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </TabsContent>
  );
};
