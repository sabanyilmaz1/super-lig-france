import { Predictions } from "@monorepo/shared/types/fixture";
import {
  Car,
  ChartNoAxesCombined,
  CircleHelp,
  LightbulbIcon,
  TrendingUp,
  TrophyIcon,
} from "lucide-react";
import React from "react";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import { Progress } from "~/components/ui/progress";
import { TabsContent } from "~/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
} from "~/components/ui/tooltip";

interface MatchPreviewProps {
  predictions: Predictions[];
}

export const MatchPreviewStats = ({ predictions }: MatchPreviewProps) => {
  if (!predictions || predictions.length === 0) {
    return null;
  }

  const predictionData = predictions[0];
  return (
    <TabsContent value="stats">
      <div className="space-y-4 ">
        {/* Predictions card */}
        <Card className=" border-2 border-redsuperlig">
          <CardHeader className="" title="Conseils"></CardHeader>
          <CardContent>
            <div className="grid grid-cols-2">
              {/* Prediction classique */}
              <div>
                <h1 className="flex gap-2 items-center font-bold text-redsuperlig text-sm md:text-lg">
                  <TrophyIcon className="w-6 h-6 hidden md:block" /> Prédictions
                </h1>
                <div className="mt-4">
                  <p className="text-sm text-gray-600">Gagnant</p>
                  <p className="font-medium text-xs md:text-sm">
                    {predictionData.predictions.winner.name}{" "}
                    {predictionData.predictions.winner.comment &&
                      `(${predictionData.predictions.winner.comment})`}
                  </p>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-gray-600">Conseil</p>
                  <p className="font-medium text-xs md:text-sm">
                    {predictionData.predictions.advice}
                  </p>
                </div>
              </div>
              {/* Prediction pourcentage */}
              <div>
                <h1 className="flex gap-2 items-center font-bold text-black text-sm md:text-lg">
                  <TrendingUp className=" hidden md:block w-6 h-6" /> Probablité
                  de victoire
                </h1>
                <div className="mt-4 space-y-4">
                  <ProgressBar
                    name={predictionData.teams.home.name}
                    value={parseInt(predictionData.predictions.percent.home)}
                  />
                  <ProgressBar
                    name="Nul"
                    value={parseInt(predictionData.predictions.percent.draw)}
                  />
                  <ProgressBar
                    name={predictionData.teams.away.name}
                    value={
                      parseInt(predictionData.predictions.percent.away) || 0
                    }
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats card */}
        <Card className=" border-2 border-redsuperlig">
          <CardHeader title="Statistiques" className="">
            <h1 className="flex gap-2 items-center font-bold text-black text-sm md:text-lg">
              <ChartNoAxesCombined className="w-6 h-6" /> Forme actuelle
            </h1>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <ProgressBarComparaison
              name="PERFOMANCE GLOBALE"
              valueHome={predictionData.comparison.total.home}
              valueAway={predictionData.comparison.total.away}
            />
            <ProgressBarComparaison
              name="FORME RÉCENTE"
              valueHome={predictionData.comparison.form.home}
              valueAway={predictionData.comparison.form.away}
            />
            <ProgressBarComparaison
              name="EFFICACITÉ OFFENSIVE"
              valueHome={predictionData.comparison.att.home}
              valueAway={predictionData.comparison.att.away}
            />
            <ProgressBarComparaison
              name="SOLIDITÉ DÉFENSIVE"
              valueHome={predictionData.comparison.def.home}
              valueAway={predictionData.comparison.def.away}
            />

            <ProgressBarComparaison
              name="BUTS MARQUÉS"
              valueHome={predictionData.comparison.goals.home}
              valueAway={predictionData.comparison.goals.away}
            />
          </CardContent>
        </Card>
      </div>
    </TabsContent>
  );
};

const ProgressBar = ({ value, name }: { value: number; name: string }) => {
  return (
    <div>
      <div className="flex justify-between text-xs md:text-sm mb-1">
        <span>{name}</span>
        <span>{value}%</span>
      </div>
      <Progress value={value} className=" h-1 md:h-2" />
    </div>
  );
};

const ProgressBarComparaison = ({
  name,
  valueHome,
  valueAway,
}: {
  name: string;
  valueHome: string;
  valueAway: string;
}) => {
  return (
    <div className="text-center">
      <span className=" font-semibold text-xs md:text-sm">{name}</span>
      <div className="flex text-xs md:text-sm gap-1 md:gap-2 items-center">
        <span>{valueHome}</span>
        <Progress value={parseInt(valueHome) || 0} className=" h-1 md:h-2" />
        <span>{valueAway}</span>
      </div>
    </div>
  );
};
