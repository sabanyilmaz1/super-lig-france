import React from "react";
import { TabsContent } from "~/components/ui/tabs";
import { Lineups } from "@monorepo/shared/types/lineup";
import { cn } from "~/lib/utils";
import { LineupPlayerItem } from "../components/lineup-player-item";
import { NoInformation } from "~/components/layout/no-information";

interface MatchPreviewLineupProps {
  lineups: Lineups[];
}

export const MatchPreviewLineup = ({ lineups }: MatchPreviewLineupProps) => {
  return (
    <TabsContent value="lineup">
      {lineups.length === 0 || !lineups ? (
        <NoInformation
          title="Aucune information disponible"
          description="Les données sur les compositions seront mises à jour dès qu'elles seront
        disponibles, souvent 40 minutes avant le coup d'envoi"
        />
      ) : (
        <div>
          <Formation lineups={lineups} i={0} />
          <div className="py-2"></div>
          <Formation lineups={lineups} i={1} />
        </div>
      )}
    </TabsContent>
  );
};

const Formation = ({ lineups, i }: { lineups: Lineups[]; i: number }) => {
  const numberOfRows = lineups[i]?.formation.split("-").length;
  const players = lineups[i]?.startXI;
  const formation = lineups[i]?.formation.split("-").map(Number);
  return (
    <div
      className={cn(
        ` bg-[#354420] text-white mx-auto grid grid-cols-${numberOfRows + 1} gap-x-4 w-fit p-4`
      )}
    >
      <div className="self-center text-xs">
        <LineupPlayerItem
          number={players[0].player.number}
          name={players[0].player.name}
        />
      </div>
      {formation.map((number, rowIndex) => {
        return (
          <div key={rowIndex} className="flex flex-col justify-center gap-6">
            {Array.from({ length: number }).map((_, colIndex) => {
              const playerItem = players.find(
                (item) => item.player.grid === `${rowIndex + 2}:${colIndex + 1}`
              );
              return (
                <LineupPlayerItem
                  key={colIndex}
                  number={playerItem?.player.number}
                  name={playerItem?.player.name}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
