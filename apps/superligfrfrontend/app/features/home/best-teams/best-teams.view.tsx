import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import logo from "~/assets/logo/logo.png";
import { Standing } from "~/model/standing";
import { BestCard } from "~/components/layout/best-card";
import { teams } from "~/data/teams";
import { BestOthersCard } from "~/components/layout/best-others-card";
import { truncateText } from "~/lib/utils";

interface BestTeamsHomeViewProps {
  standingData: Standing;
}

export const BestTeamsHomeView = ({ standingData }: BestTeamsHomeViewProps) => {
  const standings = standingData.response[0].league.standings[0];

  const sortAttack = standings
    .slice()
    .sort((a, b) => b.all.goals.for - a.all.goals.for);

  const sortDefense = standings
    .slice()
    .sort((a, b) => a.all.goals.against - b.all.goals.against);

  return (
    <Card className="min-h-96 border-2 border-redsuperlig shadow-lg">
      <CardHeader className="bg-gradient-to-r from-red-500 to-red-700 rounded-t-md text-white flex items-center justify-center text-center">
        <CardTitle className="flex items-center gap-8 w-full ">
          <img
            src={logo}
            className=" size-10 md:size-12"
            alt="logo super ligue france"
          />
          <p>Statistiques Équipes</p>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0 grid grid-cols-1 pt-4 md:grid-cols-2 gap-6">
        {/* Meilleur attaque */}
        <div className="p-4">
          <h2 className="text-2xl font-bold text-black">Meilleur attaque</h2>
          <BestCard
            firstText={sortAttack[0].team.name}
            third_text={truncateText(
              teams.find((team) => team.team.id === sortAttack[0].team.id)
                ?.venue.name || "",
              15
            )}
            logo_principal={sortAttack[0].team.logo}
            number={sortAttack[0].all.goals.for}
            className="bg-gradient-to-r from-gray-700 to-black"
          />
          <div className="space-y-2 pt-2">
            {sortAttack.slice(1, 5).map((item, index) => (
              <BestOthersCard
                key={item.team.id}
                image_principal={item.team.logo}
                firstText={item.team.name}
                secondText={truncateText(
                  teams.find((team) => team.team.id === item.team.id)?.venue
                    .name || "",
                  15
                )}
                number={item.all.goals.for}
                index={index}
              />
            ))}
          </div>
        </div>
        {/* Meilleur défense */}
        <div className="p-4">
          <h2 className="text-2xl font-bold text-redsuperlig">
            Meilleur défense
          </h2>
          <BestCard
            firstText={sortDefense[0].team.name}
            // third_text={
            //   teams.find((team) => team.team.id === sortDefense[0].team.id)
            //     ?.venue.name || ""
            // }
            third_text={truncateText(
              teams.find((team) => team.team.id === sortDefense[0].team.id)
                ?.venue.name || "",
              15
            )}
            logo_principal={sortDefense[0].team.logo}
            number={sortDefense[0].all.goals.against}
            className="bg-gradient-to-r from-red-500 to-red-700"
          />
          <div className="space-y-2 pt-2">
            {sortDefense.slice(1, 5).map((item, index) => (
              <BestOthersCard
                key={item.team.id}
                image_principal={item.team.logo}
                firstText={item.team.name}
                secondText={truncateText(
                  teams.find((team) => team.team.id === item.team.id)?.venue
                    .name || "",
                  15
                )}
                number={item.all.goals.against}
                index={index}
              />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
