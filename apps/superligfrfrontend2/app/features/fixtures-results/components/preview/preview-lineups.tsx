import type { FixturePreview as FixturePreviewType } from "../../fixture.domain";
import { ScrollArea } from "~/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";

import { Bench } from "~/components/features/lineup/bench";
import { Lineup } from "~/components/features/lineup/lineup";
import { Clock } from "lucide-react";
export const FixturePreviewLineups = ({
  data,
}: {
  data: FixturePreviewType;
}) => {
  const lineupHome =
    data.lineups?.filter(
      (item) =>
        item.team_id ===
        data.formations?.find((f) => f.location === "home")?.participant_id
    ) ?? [];

  const lineupAway =
    data.lineups?.filter(
      (item) =>
        item.team_id ===
        data.formations?.find((f) => f.location === "away")?.participant_id
    ) ?? [];

  const formationHome = data.formations?.find(
    (f) => f.participant_id === lineupHome[0].team_id
  );

  const formationAway = data.formations?.find(
    (f) => f.participant_id === lineupAway[0].team_id
  );

  const lineupData = [
    {
      location: "home",
      data: lineupHome,
      formation: formationHome,
    },
    {
      location: "away",
      data: lineupAway,
      formation: formationAway,
    },
  ];

  if (formationAway?.formation === "" || formationHome?.formation === "") {
    return (
      <div className="flex flex-col items-center justify-center p-6 border border-gray-200 rounded-lg bg-gray-50">
        <div className="p-3 mb-4 rounded-full bg-yellow-50">
          <Clock size={40} className="text-yellow-600" />
        </div>
        <h3 className="mb-2 font-bold text-gray-800">
          Compositions non disponibles
        </h3>
        <p className="max-w-md mb-4 text-sm text-center text-gray-600">
          Les compositions officielles n'ont pas encore été communiquées par les
          équipes. Elles seront généralement publiées environ 40 minutes avant
          le coup d'envoi.
        </p>
      </div>
    );
  }

  return (
    <ScrollArea className="h-[500px]">
      <div>
        <Tabs defaultValue="home">
          <LineupPreviewTabsList data={data} />
          {lineupData.map((item) => (
            <TabsContent key={item.location} value={item.location}>
              <div className="flex flex-col gap-4 md:flex-row">
                <Lineup data={item.data} formation={item.formation} />
                <Bench data={item.data} />
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </ScrollArea>
  );
};

export const LineupPreviewTabsList = ({
  data,
}: {
  data: FixturePreviewType;
}) => {
  return (
    <TabsList className="flex justify-center mx-auto md:mx-0 w-fit">
      <TabsTrigger className="font-bold " value="home">
        {data.participants?.find((p) => p.meta.location === "home")?.name}
      </TabsTrigger>
      <TabsTrigger className="font-bold" value="away">
        {data.participants?.find((p) => p.meta.location === "away")?.name}
      </TabsTrigger>
    </TabsList>
  );
};
