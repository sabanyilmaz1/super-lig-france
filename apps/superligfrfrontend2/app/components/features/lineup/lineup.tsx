import React, { useMemo } from "react";
import {
  getCommonName,
  type Formation,
  type Lineup as LineupType,
} from "~/features/fixtures-results/fixture.domain";
import { Player } from "./player";
import LineupWrapper from "./lineup-wrapper";
import { cn } from "~/lib/utils";

interface LineupProps {
  data: LineupType[] | null;
  formation: Formation | undefined | null;
}

export const Lineup = ({ data, formation }: LineupProps) => {
  const row = formation?.formation?.split("-");
  const goalkeeper = data?.find((p) => p.formation_field === "1:1");
  const isHome = formation?.location === "home";

  return (
    <LineupWrapper>
      <Player
        isHome={isHome}
        imagePath={goalkeeper?.player?.image_path || ""}
        jerseyNumber={goalkeeper?.jersey_number || 0}
        commonName={goalkeeper?.player?.common_name || ""}
      />
      {row &&
        Array.from({ length: row?.length || 0 }).map((_, rowIndex) => (
          <div
            key={rowIndex}
            className={cn(
              "flex items-center justify-center",
              !isHome && "flex-row-reverse",
              parseInt(row[rowIndex]) > 4 ? "gap-4 md:gap-5" : "gap-6"
            )}
          >
            {Array.from({ length: parseInt(row[rowIndex]) }).map(
              (_, colIndex) => {
                const player = data?.find(
                  (p) => p.formation_field === `${rowIndex + 2}:${colIndex + 1}`
                );
                return (
                  <div key={colIndex}>
                    <Player
                      isHome={isHome}
                      imagePath={player?.player?.image_path || ""}
                      jerseyNumber={player?.jersey_number || 0}
                      commonName={getCommonName(player)}
                    />
                  </div>
                );
              }
            )}
          </div>
        ))}
    </LineupWrapper>
  );
};
