import React from "react";
import type {
  Formation,
  Lineup,
} from "~/features/fixtures-results/fixture.domain";
import { Avatar, AvatarImage } from "../ui/avatar";

interface LineupPreviewProps {
  data: Lineup[] | null;
  formations: Formation[] | null;
}

export const LineupPreview = ({ data, formations }: LineupPreviewProps) => {
  if (data?.length === 0 || !data) return <div>No lineup</div>;
  const formation = formations?.find(
    (f) => f.participant_id === data[0].team_id
  );
  const gridRows = formation?.formation?.split("-").length;
  return (
    <div className="relative w-full overflow-hidden rounded-lg">
      <div
        className="absolute inset-0 bg-[#7AB95C]"
        style={{
          backgroundImage: `
        linear-gradient(to right, white 2px, transparent 2px),
        linear-gradient(to bottom, white 2px, transparent 2px)
      `,
          backgroundSize: "25% 20%",
          backgroundPosition: "center",
          opacity: 0.2,
        }}
      />

      {/* Players grid */}
      <div
        className="relative grid w-full h-full grid-cols-5 grid-rows-5 gap-4 p-8"
        style={{
          gridTemplateRows: `repeat(${gridRows}, 1fr)`,
        }}
      >
        {data
          .filter((player) => player.formation_field)
          .map((player) => (
            <div
              key={player.player_id}
              className="flex flex-col items-center justify-center"
              style={{
                gridRow: player.formation_field?.split(":")[0],
                gridColumn: player.formation_field?.split(":")[1],
              }}
            >
              <Avatar className="w-12 h-12 mb-2 border-2 border-white">
                <AvatarImage
                  src={player.player?.image_path}
                  alt={player.player?.name}
                />
              </Avatar>
            </div>
          ))}
      </div>
    </div>
  );
};
