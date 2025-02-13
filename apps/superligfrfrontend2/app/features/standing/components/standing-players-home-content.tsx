import { HomeCardHeader } from "~/components/common/home-card-header";
import { Card, CardContent } from "~/components/ui/card";
import { TopAssistHome } from "./top-assist-home";
import {
  useGetTopAssists,
  useGetTopScorers,
} from "../hooks/use-get-best-players";
import { TopPlayersHome } from "./top-player-template-home";

export const StandingPlayersHomeContent = () => {
  const { data: topScorers } = useGetTopScorers();
  const { data: topAssists } = useGetTopAssists();
  return (
    <Card className="border-2 shadow-lg border-redsuperlig">
      <HomeCardHeader title="Statistiques Joueurs" />
      <CardContent className="p-6">
        <div className="grid grid-cols-1 gap-6 pt-4 md:grid-cols-2">
          {/* Buteurs */}
          <TopPlayersHome
            data={topScorers}
            title="Buts"
            backgroundColor="from-red-500 to-red-700"
            textColor="text-redsuperlig"
          />
          {/* Passeurs */}
          <TopPlayersHome
            data={topAssists}
            title="Passeurs"
            backgroundColor="from-gray-700 to-black"
            textColor="text-black"
          />
        </div>
      </CardContent>
    </Card>
  );
};
