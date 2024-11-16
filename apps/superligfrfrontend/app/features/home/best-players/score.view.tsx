import { BestCard } from "~/components/layout/best-card";
import { BestOthersCard } from "~/components/layout/best-others-card";
import { Card, CardContent } from "~/components/ui/card";
import { decodeUtf8 } from "~/lib/utils";
import { TopScorers } from "~/model/player";

interface ScoreHomeViewProps {
  topscorersData: TopScorers;
}

export const ScoreHomeView = ({ topscorersData }: ScoreHomeViewProps) => {
  const topScorer = topscorersData.response[0];
  return (
    <div>
      <h2 className="text-2xl font-bold text-redsuperlig">Buts</h2>
      {/* Meilleur buteur */}
      <BestCard
        firstText={decodeUtf8(topScorer.player.firstname)}
        secondText={decodeUtf8(topScorer.player.lastname)}
        third_text={decodeUtf8(topScorer.statistics[0].team.name)}
        logo_sup={topScorer.statistics[0].team.logo}
        logo_principal={topScorer.player.photo}
        number={topScorer.statistics[0].goals.total}
        className="bg-gradient-to-r from-red-500 to-red-700"
      />
      {/* Liste des autres joueurs */}
      <div className="space-y-2 pt-2">
        {topscorersData.response.slice(1, 5).map((item, index) => (
          <BestOthersCard
            key={item.player.id}
            image_principal={item.player.photo}
            image_sup={item.statistics[0].team.logo}
            firstText={decodeUtf8(item.player.firstname)}
            secondText={decodeUtf8(item.player.lastname)}
            number={item.statistics[0].goals.total}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};
