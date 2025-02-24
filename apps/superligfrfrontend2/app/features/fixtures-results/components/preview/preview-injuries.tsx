import { Card, CardContent, CardHeader } from "~/components/ui/card";
import type {
  FixturePreview as FixturePreviewType,
  Sidelined,
} from "../../fixture.domain";
import { ScrollArea } from "~/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";
export const FixturePreviewInjuries = ({
  data,
}: {
  data: FixturePreviewType;
}) => {
  if (!data.sidelined || data.sidelined.length === 0) {
    return <div>No absence</div>;
  }

  const sidelinedHome = data.sidelined.filter(
    (item) =>
      item.participant_id ===
      data.formations?.find((f) => f.location === "home")?.participant_id
  );

  const sidelinedAway = data.sidelined.filter(
    (item) =>
      item.participant_id ===
      data.formations?.find((f) => f.location === "away")?.participant_id
  );

  return (
    <ScrollArea className="h-[500px]">
      <div>
        <Tabs defaultValue="home">
          <TabsList className="text-white bg-redsuperlig">
            <TabsTrigger value="home">
              {data.participants?.find((p) => p.meta.location === "home")?.name}
            </TabsTrigger>
            <TabsTrigger value="away">
              {data.participants?.find((p) => p.meta.location === "away")?.name}
            </TabsTrigger>
          </TabsList>
          <TabsContent value="home">
            <div className="flex flex-col gap-2 mt-2">
              {sidelinedHome.map((item) => (
                <InjuryItem key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="away">
            <div className="flex flex-col gap-2 mt-2">
              {sidelinedAway.map((item) => (
                <InjuryItem key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </ScrollArea>
  );
};

const InjuryItem = ({ item }: { item: Sidelined }) => {
  return (
    <Card className="border border-gray-300">
      <CardContent className="p-3">
        <div className="flex gap-3">
          <div className="relative flex-shrink-0">
            <img
              src={item.sideline.player.image_path}
              alt={item.sideline.player.name}
              className="rounded-full w-14 h-14"
            />
          </div>
          <div className="flex flex-col min-w-0">
            <h3 className="text-sm font-medium truncate">
              {item.sideline.player.display_name}
            </h3>
            <p className="text-sm text-gray-500">{item.sideline.team.name}</p>
            <p className="text-xs font-medium text-red-500 mt-0.5 truncate">
              {item.sideline.category}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
