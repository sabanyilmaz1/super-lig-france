import { HomeCardHeader } from "~/components/common/home-card-header";
import { Card, CardContent } from "~/components/ui/card";
import { TopScorerHome } from "./top-scorer-home";
import { TopAssistHome } from "./top-assist-home";

export const StandingPlayersHomeContent = () => {
  return (
    <Card className="border-2 shadow-lg border-redsuperlig">
      <HomeCardHeader title="Statistiques Joueurs" />
      <CardContent className="p-0">
        <div className="grid grid-cols-1 gap-6 pt-4 md:grid-cols-2">
          {/* Buteurs */}
          <TopScorerHome />
          {/* Passeurs */}
          <TopAssistHome />
        </div>
      </CardContent>
    </Card>
  );
};
