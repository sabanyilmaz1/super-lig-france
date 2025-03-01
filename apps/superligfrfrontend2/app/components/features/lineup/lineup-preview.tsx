import React, { useMemo } from "react";
import {
  getCommonName,
  type Formation,
  type Lineup,
} from "~/features/fixtures-results/fixture.domain";
import { Player } from "./player";
import LineupWrapper from "./lineup-wrapper";

interface LineupPreviewProps {
  data: Lineup[] | null;
  formations: Formation[] | null;
}

export const LineupPreview = ({ data, formations }: LineupPreviewProps) => {
  console.log("formations", formations);

  if (data?.length === 0 || !data || !formations) return <div>No lineup</div>;

  const formation = formations?.find(
    (f) => f.participant_id === data[0].team_id
  );

  if (formation?.formation === "") return <div>No formation</div>;
  const row = formation?.formation?.split("-");
  const goalkeeper = data.find((p) => p.formation_field === "1:1");
  const isHome = formation?.location === "home";

  return (
    <LineupWrapper>
      <div className="flex items-center justify-center w-full">
        <Player
          isHome={isHome}
          imagePath={goalkeeper?.player?.image_path || ""}
          jerseyNumber={goalkeeper?.jersey_number || 0}
          commonName={goalkeeper?.player?.common_name || ""}
        />
      </div>
      <div className="flex flex-col items-center justify-center w-full gap-5">
        {row &&
          Array.from({ length: row?.length || 0 }).map((_, rowIndex) => (
            <div
              key={rowIndex}
              className={`flex items-center justify-center gap-8 ${
                !isHome && "flex-row-reverse"
              }`}
            >
              {Array.from({ length: parseInt(row[rowIndex]) }).map(
                (_, colIndex) => {
                  const player = data.find(
                    (p) =>
                      p.formation_field === `${rowIndex + 2}:${colIndex + 1}`
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
      </div>
    </LineupWrapper>
  );
};
