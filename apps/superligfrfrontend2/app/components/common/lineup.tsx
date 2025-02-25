import React, { useMemo } from "react";
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

  // Déterminer si c'est l'équipe à domicile ou extérieure
  const isAwayTeam = formation?.location === "away";

  // Group players by row for better organization
  const playersByRow = useMemo(() => {
    if (!data) return [];
    const rows: Record<string, Lineup[]> = {};

    data
      .filter((player) => player.formation_field)
      .forEach((player) => {
        const rowIndex = player.formation_field?.split(":")[0] || "0";
        if (!rows[rowIndex]) {
          rows[rowIndex] = [];
        }
        rows[rowIndex].push(player);
      });

    // Sort each row's players by their column position
    Object.keys(rows).forEach((rowKey) => {
      rows[rowKey].sort((a, b) => {
        const colA = parseInt(a.formation_field?.split(":")[1] || "1", 10);
        const colB = parseInt(b.formation_field?.split(":")[1] || "1", 10);
        return colA - colB;
      });
    });

    return Object.entries(rows).sort(([a], [b]) => parseInt(a) - parseInt(b));
  }, [data]);

  // Calculate max columns for each row to position players correctly
  const maxColumnsByRow = useMemo(() => {
    const result: Record<string, number> = {};

    if (!data) return result;

    data
      .filter((player) => player.formation_field)
      .forEach((player) => {
        const rowIndex = player.formation_field?.split(":")[0] || "0";
        const colIndex = parseInt(
          player.formation_field?.split(":")[1] || "1",
          10
        );

        if (!result[rowIndex] || colIndex > result[rowIndex]) {
          result[rowIndex] = colIndex;
        }
      });

    return result;
  }, [data]);

  return (
    <div className="w-full max-w-[380px] rounded-lg bg-green-200">
      {/* Players grid */}
      <div className="flex flex-col justify-between w-full h-full gap-2 p-4">
        {playersByRow.map(([rowIndex, players]) => {
          const maxColInRow = maxColumnsByRow[rowIndex] || 1;
          const playerCount = players.length;

          return (
            <div
              key={rowIndex}
              className="relative w-full"
              style={{ height: "80px" }}
            >
              {players.map((player, idx) => {
                const colIndex = parseInt(
                  player.formation_field?.split(":")[1] || "1",
                  10
                );

                // Calculer la position en fonction de l'équipe et du nombre de joueurs
                let position;

                if (playerCount <= 2) {
                  // Pour les lignes avec 1 ou 2 joueurs, utiliser un espacement plus resserré
                  // Utiliser l'index du joueur dans le tableau plutôt que sa position dans la formation
                  const centralOffset = 50; // Centre de la ligne
                  const spacing = 30; // Espacement entre les joueurs (en pourcentage)

                  if (playerCount === 1) {
                    // Un seul joueur, le centrer
                    position = 50;
                  } else {
                    // Deux joueurs, les positionner de part et d'autre du centre
                    // avec un espacement plus resserré
                    if (isAwayTeam) {
                      // Pour l'équipe extérieure, inverser l'ordre
                      position = centralOffset + spacing * (0.5 - idx);
                    } else {
                      // Pour l'équipe à domicile, ordre normal
                      position = centralOffset + spacing * (idx - 0.5);
                    }
                  }
                } else {
                  // Pour les lignes avec 3 joueurs ou plus, utiliser la méthode originale
                  if (isAwayTeam) {
                    // Pour l'équipe extérieure, inverser l'ordre (droite à gauche)
                    position =
                      ((maxColInRow - colIndex + 0.5) / maxColInRow) * 100;
                  } else {
                    // Pour l'équipe à domicile, ordre normal (gauche à droite)
                    position = ((colIndex - 0.5) / maxColInRow) * 100;
                  }
                }

                const playerName =
                  player.player?.common_name ||
                  player.player?.display_name ||
                  player.player_name;

                return (
                  <div
                    key={player.player_id}
                    className="absolute flex flex-col items-center transform -translate-x-1/2"
                    style={{
                      left: `${position}%`,
                    }}
                  >
                    <Avatar className="w-12 h-12 mb-1 border-2 border-white">
                      <AvatarImage
                        src={player.player?.image_path}
                        alt={playerName || ""}
                      />
                    </Avatar>
                    <span className="text-xs font-medium text-white bg-black bg-opacity-50 px-1 py-0.5 rounded text-center max-w-[80px] truncate">
                      {playerName}
                    </span>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};
