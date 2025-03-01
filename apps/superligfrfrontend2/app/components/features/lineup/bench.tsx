import {
  getCommonName,
  type Lineup,
} from "~/features/fixtures-results/fixture.domain";
import { BenchPlayer, Player } from "./player";

export const Bench = ({ data }: { data: Lineup[] }) => {
  return (
    <div className="px-4 md:px-0">
      <h1 className="font-semibold md:text-2xl">Remplaçants</h1>
      <div className="flex flex-col gap-2 mt-1 text-sm">
        {data
          .filter((p) => p.formation_field === null)
          .map((p) => (
            <BenchPlayerItem key={p.player_id} player={p} />
          ))}
      </div>
    </div>
  );
};

const BenchPlayerItem = ({ player }: { player: Lineup }) => {
  return (
    <div className="flex items-center gap-2">
      <BenchPlayer
        isHome={true}
        imagePath={player.player?.image_path || ""}
        jerseyNumber={player.jersey_number || 0}
        commonName={player.player?.common_name || ""}
      />
      {player.player?.display_name}
    </div>
  );
};
