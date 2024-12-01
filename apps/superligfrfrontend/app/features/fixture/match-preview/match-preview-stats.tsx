import React from "react";
import { TabsContent } from "~/components/ui/tabs";

export const MatchPreviewStats = ({
  homeTeam,
  awayTeam,
}: {
  homeTeam: {
    stats: {
      possession: number;
      shots: number;
      shotsOnTarget: number;
      corners: number;
      fouls: number;
    };
  };
  awayTeam: {
    stats: {
      possession: number;
      shots: number;
      shotsOnTarget: number;
      corners: number;
      fouls: number;
    };
  };
}) => {
  return (
    <TabsContent value="stats">
      <div className="space-y-4 p-4">
        <div className="grid grid-cols-3 items-center gap-4">
          <div className="text-right">{homeTeam.stats.possession}%</div>
          <div className="text-center text-sm text-muted-foreground">
            Possession
          </div>
          <div>{awayTeam.stats.possession}%</div>
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <div className="text-right">{homeTeam.stats.shots}</div>
          <div className="text-center text-sm text-muted-foreground">Tirs</div>
          <div>{awayTeam.stats.shots}</div>
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <div className="text-right">{homeTeam.stats.shotsOnTarget}</div>
          <div className="text-center text-sm text-muted-foreground">
            Tirs cadrés
          </div>
          <div>{awayTeam.stats.shotsOnTarget}</div>
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <div className="text-right">{homeTeam.stats.corners}</div>
          <div className="text-center text-sm text-muted-foreground">
            Corners
          </div>
          <div>{awayTeam.stats.corners}</div>
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <div className="text-right">{homeTeam.stats.fouls}</div>
          <div className="text-center text-sm text-muted-foreground">
            Fautes
          </div>
          <div>{awayTeam.stats.fouls}</div>
        </div>
      </div>
    </TabsContent>
  );
};
