import React from "react";
import { TabsContent } from "~/components/ui/tabs";
import { Lineups } from "@monorepo/shared/types/lineup";
import { cn } from "~/lib/utils";
import { LineupPlayerItem } from "../components/lineup-player-item";

interface MatchPreviewLineupProps {
  lineups: Lineups[];
}

export const MatchPreviewLineup = ({ lineups }: MatchPreviewLineupProps) => {
  console.log(lineups);
  if (lineups.length === 0) {
    <TabsContent value="lineup">
      <div>No lineup available</div>
    </TabsContent>;
  } else {
    const numberOfRowsHome = lineups[0].formation.split("-").length;
    const playersHome = lineups[0].startXI;
    const formationHome = lineups[0].formation.split("-").map(Number);

    return (
      <TabsContent value="lineup">
        <div
          className={cn(
            ` bg-[#354420] text-white mx-auto grid grid-cols-${numberOfRowsHome + 1} gap-x-4 w-fit p-4`
          )}
        >
          <div className="self-center text-xs">
            <LineupPlayerItem
              number={playersHome[0].player.number}
              name={playersHome[0].player.name}
            />
          </div>
          {formationHome.map((number, rowIndex) => {
            return (
              <div
                key={rowIndex}
                className="flex flex-col justify-center gap-6"
              >
                {Array.from({ length: number }).map((_, colIndex) => {
                  const playerItem = playersHome.find(
                    (item) =>
                      item.player.grid === `${rowIndex + 2}:${colIndex + 1}`
                  );
                  return (
                    <LineupPlayerItem
                      key={colIndex}
                      number={playerItem?.player.number}
                      name={playerItem?.player.name}
                    />
                    // <div key={colIndex} className="text-xs truncate w-28">
                    //   {
                    //     playersHome.find(
                    //       (item) =>
                    //         item.player.grid ===
                    //         `${rowIndex + 2}:${colIndex + 1}`
                    //     )?.player.name
                    //   }
                    // </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </TabsContent>
    );
  }
};
