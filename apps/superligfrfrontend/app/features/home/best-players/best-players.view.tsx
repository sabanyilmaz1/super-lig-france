import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { ScoreHomeView } from "./score.view";
import { AssitHomeView } from "./assist.view";
import { TopScorers } from "~/model/player";
import logo from "~/assets/logo/logo.png";

interface BestPlayersHomeViewProps {
  topscorersData: TopScorers;
  topassistsData: TopScorers;
}

export const BestPlayersHomeView = ({
  topscorersData,
  topassistsData,
}: BestPlayersHomeViewProps) => {
  return (
    <Card className="border-2 border-redsuperlig shadow-lg">
      <CardHeader className="bg-gradient-to-r from-red-500 to-red-700 rounded-t-md text-white flex items-center justify-center text-center">
        <CardTitle className="flex items-center gap-8 w-full ">
          <img
            src={logo}
            className=" size-10 md:size-12"
            alt="logo super ligue france"
          />
          <p>Statistiques Joueurs</p>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 pt-4 md:grid-cols-2 gap-6">
          {/* Buteurs */}
          <ScoreHomeView topscorersData={topscorersData} />
          {/* Passeurs */}
          <AssitHomeView topassistsData={topassistsData} />
        </div>
      </CardContent>
    </Card>
  );
};
