import { BestCard } from "~/components/layout/best-card";
import { BestOthersCard } from "~/components/layout/best-others-card";
import { Card, CardContent } from "~/components/ui/card";
import { decodeUtf8 } from "~/lib/utils";
import { TopScorers } from "~/model/player";

interface AsistHomeViewProps {
  topassistsData: TopScorers;
}

export const AssitHomeView = ({ topassistsData }: AsistHomeViewProps) => {
  const topAssist = topassistsData.response[0];
  return (
    <div>
      <h2 className="text-2xl font-bold text-black">Passe Décisive</h2>
      {/* Meilleur buteur */}
      <BestCard
        firstText={decodeUtf8(topAssist.player.firstname)}
        secondText={decodeUtf8(topAssist.player.lastname)}
        third_text={decodeUtf8(topAssist.statistics[0].team.name)}
        logo_sup={topAssist.statistics[0].team.logo}
        logo_principal={topAssist.player.photo}
        number={topAssist.statistics[0].goals.assists}
        className="bg-gradient-to-r from-gray-700 to-black"
      />
      {/* Liste des autres joueurs */}

      <div className="space-y-2 pt-2">
        {topassistsData.response.slice(1, 5).map((item, index) => (
          <BestOthersCard
            key={item.player.id}
            image_principal={item.player.photo}
            image_sup={item.statistics[0].team.logo}
            firstText={decodeUtf8(item.player.firstname)}
            secondText={decodeUtf8(item.player.lastname)}
            number={item.statistics[0].goals.assists}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};
