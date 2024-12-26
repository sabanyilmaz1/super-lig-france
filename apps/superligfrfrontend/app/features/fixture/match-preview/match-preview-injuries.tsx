import { AlertCircle } from "lucide-react";
import { Card, CardContent } from "~/components/ui/card";
import { Injury } from "@monorepo/shared/types/fixture";
import { TabsContent } from "~/components/ui/tabs";
import { NoInformation } from "~/components/layout/no-information";

interface InjuriesProps {
  injuries: Injury[];
}

export function MatchPreviewInjuries({ injuries }: InjuriesProps) {
  const homeTeamId = injuries[0]?.team.id;
  const homeInjuries = injuries.filter(
    (injury) => injury.team.id === homeTeamId
  );
  const awayInjuries = injuries.filter(
    (injury) => injury.team.id !== homeTeamId
  );

  const TeamInjuries = ({ injuries }: { injuries: Injury[] }) => (
    <div className="space-y-2">
      <div className="grid gap-2">
        {injuries.map((injury) => (
          <InjuryCard key={injury.player.id} injury={injury} />
        ))}
        {injuries.length === 0 && (
          <NoInformation
            title="Aucune information disponible"
            description="Les données sur les blessures seront mises à jour dès qu'elles seront
          disponibles"
          />
        )}
      </div>
    </div>
  );

  return (
    <TabsContent value="injuries">
      {/* Desktop Layout */}
      <div className="hidden sm:grid sm:grid-cols-2 gap-4">
        <TeamInjuries injuries={homeInjuries} />
        <TeamInjuries injuries={awayInjuries} />
      </div>

      {/* Mobile Layout */}
      <div className="sm:hidden grid grid-cols-2 gap-2">
        <TeamInjuries injuries={homeInjuries} />
        <TeamInjuries injuries={awayInjuries} />
        {/* {injuries.map((injury) => (
          <InjuryCard key={injury.player.id} injury={injury} />
        ))}
        {injuries.length === 0 && (
          <p className="text-xs text-gray-500 col-span-2">
            Pas de blessures signalées
          </p>
        )} */}
      </div>
    </TabsContent>
  );
}

const InjuryCard = ({ injury }: { injury: Injury }) => (
  <Card>
    <CardContent className="p-3">
      <div className="flex gap-3">
        <div className="relative flex-shrink-0">
          <img
            src={injury.player.photo}
            alt={injury.player.name}
            className="w-10 h-10 rounded-full"
          />
        </div>
        <div className="min-w-0">
          <h3 className="font-medium text-sm truncate">{injury.player.name}</h3>
          <p className="text-xs font-medium text-red-500 mt-0.5 truncate">
            {injury.player.reason}
          </p>
          <div className="flex items-center gap-1.5 mt-1">
            <img
              src={injury.team.logo}
              alt={injury.team.name}
              className="w-4 h-4"
            />
            <p className="text-xs text-gray-600 truncate">{injury.team.name}</p>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);
